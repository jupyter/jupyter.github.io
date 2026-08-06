source 'https://rubygems.org'

# NOTE: production (github.com/jupyter/jupyter.github.io) is served by GitHub
# Pages' own Jekyll, and CI builds in the `jekyll/builder` container -- neither
# uses this Gemfile. It exists for local previews only, so we track modern
# Jekyll rather than the `github-pages` meta-gem, which pins jekyll 3.9.0 /
# liquid 4.0.3 and cannot run on Ruby >= 3.2 (String#tainted? was removed).
gem "jekyll", "~> 4.3"
gem "jekyll-redirect-from"
gem "jekyll-sitemap"

# Stay on the libsass-backed converter. jekyll-sass-converter 3.x switched to
# Dart Sass, which rejects the vendored Bootstrap 3 SCSS in _sass/ (`expected
# "{"` on its `@import`s). Upgrading means migrating that vendored tree first.
gem "jekyll-sass-converter", "~> 2.0"

# Livereload is built into Jekyll 4 (`jekyll serve --livereload`), so the
# `hawkins` plugin that used to provide `liveserve` is no longer needed.

# Formerly stdlib, now shipped as separate gems. Jekyll's dependency tree still
# expects them, so declare them explicitly to keep Ruby >= 3.4 working.
gem "base64"
gem "bigdecimal"
gem "csv"
gem "logger"
