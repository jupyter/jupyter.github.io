import os
import subprocess
import sys

import nox

nox.options.reuse_existing_virtualenvs = True

# Cap ruby: unpinned, conda may resolve to a version where stdlib gems csv and
# base64 have been removed, which the Jekyll dependency tree still expects.
CONDA_DEPS = ["c-compiler", "compilers", "cxx-compiler", "ruby<4", "python=3.10"]

def install_deps(session):
    # Jekyll w/ Conda installation instructions roughly pulled from
    # https://s-canchi.github.io/2021-04-30-jekyll-conda/
    session.conda_install("--channel=conda-forge", *CONDA_DEPS)

    # Install gems into the session env rather than ./vendor/bundle. A
    # previously-vendored bundler 1.17.2 shadows the one installed below and
    # crashes on Ruby >= 3.2 (it calls String#untaint, removed in 3.2).
    session.env["BUNDLE_PATH"] = os.path.join(session.virtualenv.location, "gems")
    session.env["BUNDLE_APP_CONFIG"] = os.path.join(
        session.virtualenv.location, ".bundle"
    )

    session.run(*"gem install jekyll bundler".split())
    session.run(*"bundle install".split())
    _dedupe_macos_rpaths(session)


def _dedupe_macos_rpaths(session):
    """Strip duplicate LC_RPATH entries from compiled gem extensions.

    On macOS, conda's compiler wrapper adds an -rpath pointing at the env's
    lib/ that Ruby's own DLDFLAGS already contains. dlopen() rejects the
    resulting binary with "duplicate LC_RPATH", so native gems (json, ffi,
    sass-embedded) fail to load. Remove the extra copy after install.
    """
    if sys.platform != "darwin":
        return

    rpath = os.path.join(session.virtualenv.location, "lib")
    gem_root = os.path.join(session.virtualenv.location, "gems")

    for dirpath, _, filenames in os.walk(gem_root):
        for name in filenames:
            if not name.endswith(".bundle"):
                continue
            lib = os.path.join(dirpath, name)
            count = (
                subprocess.run(
                    ["otool", "-l", lib], capture_output=True, text=True
                ).stdout.count(f"path {rpath} ")
            )
            # Leave the first one in place; delete each surplus copy.
            for _ in range(count - 1):
                subprocess.run(
                    ["install_name_tool", "-delete_rpath", rpath, lib],
                    capture_output=True,
                )


@nox.session(name="build-live", venv_backend='micromamba|mamba|conda')
def build_live(session):
    install_deps(session)
    session.run(*"bundle exec jekyll serve --livereload".split())

@nox.session(venv_backend='micromamba|mamba|conda')
def build(session):
    install_deps(session)
    session.run(*"bundle exec jekyll build".split())
