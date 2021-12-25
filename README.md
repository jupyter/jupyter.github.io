# Jupyter's main website

This is the source to [Jupyter.org](https://jupyter.org/).

## Build the site locally

The site is built with Jekyll, see [the Jekyll website](https://jekyllrb.com/) for how to customize the build process.

The easiest way to build the site locally is by using the [`nox` command line tool](https://nox.thea.codes/). This tool makes it easy to automate commands in a repository, and we have included a `build` command to quickly install the dependencies and build the site.

To build and preview the site locally, follow these steps:

1. **Clone this repository**.
   
   ```console
   $ git clone https://github.com/jupyter/jupyter.github.io
   $ cd jupyter.github.io
   ```
2. **Install `nox`**

   ```console
   $ pip install nox
   ```
3. **Run the `build` command**
   
   ```console
   $ nox -s build
   ```


This will install the needed dependencies in a virtual environment using [the `conda` package manager](https://docs.conda.io/en/latest/). 

**When the build is finished, go to `localhost:4000`**. When Jekyll finishes building your site, it will open a port on your computer and serve the website there so that you may preview it.

**You can make changes and watch the preview auto-update**. When you make changes to the website, they will automatically be updated in your preview in the browser.

To stop serving the website, press **`Ctrl`**-`C` in your terminal

### Build the site manually

To build the site manually, check out the installation commands that are in `noxfile.py`. These use `nox` syntax, but they should give you a clear idea of which packages must be installed in order to build the documentation.

## Where the site is hosted

The site is automatically built with [Netlify](https://netlify.com), a hosting service for static websites. When any changes are merged into the `master` branch, Netlify will automatically build them and update the website at [jupyter.org](https://jupyter.org).

**You can preview changes in Pull Requests**. Netlify will automatically build a preview of the website in an open Pull Request. To see this, click on the **`Show all checks`** button just above the comment box in the Pull Request window. Then click on **`deploy/netlify`** to see a preview of the built site.

## Structure of this website

Most pages are located at the place where their URL is, nothing fancy.  Headers
and footer are in `_includes/head.html`, `_includes/header.html`,
`_includes/footer.html`.

The **navbar** is in `_data/nav.yml` and looks like that:

```yaml
head:
    - Home
    - title: Install
      url: https://jupyter.readthedocs.io/en/latest/install.html
    - About
    - title: Documentation
      url: https://jupyter.readthedocs.io/en/latest/install.html
    - title: Blog
      url: https://blog.jupyter.org
    - Donate
```

which means, insert in order the following links into the navbar:

    - Link to `Home` page, guess the url by yourself. 
    - link to `Install` page, the url is...
    - Link to `About`, guess the url by yourself, 
    -  ... etc.

The navbar will automatically target `_blank` pages where the url is explicit,
and mark the correct link as the "current" one.

## Create a new page

Create `my_page.html` (will have url `https://jupyter.org/my_page.html`)
or `my_page/index.html` (will have url `https://jupyter.org/my_page/`), start with the following:

```
---
layout: default
title: My Page
---

write some html here (consider you are already inside `<body></body>`)
```

You cannot do it yet with .md file, but you will be able soon.

Add commit (and don't forget to add to `_data/nav.yml`).

## Preview a Pull Request

Netlify is used to provide a link to a rendered website with the changes proposed
in a PR. This convenience helps reviewers see how the change would look
before it is deployed in production.

The link is found in the GitHub PR status box. In the **deploy/netlify** section,
click on the `Details` link.
