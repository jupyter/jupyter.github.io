import nox

nox.options.reuse_existing_virtualenvs = True

CONDA_DEPS = ["c-compiler", "compilers", "cxx-compiler", "ruby", "python=3.8"]

def install_deps(session):
    # Jekyll w/ Conda installation instructions roughly pulled from
    # https://s-canchi.github.io/2021-04-30-jekyll-conda/
    session.conda_install("--channel=conda-forge", *CONDA_DEPS)
    session.run(*"gem install jekyll bundler".split())
    session.run(*"bundle install".split())
    

@nox.session(venv_backend='conda')
def build(session):
    install_deps(session)
    session.run(*"bundle exec jekyll serve liveserve".split())
