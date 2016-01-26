# Jupyter's main website

This is the source to [Jupyter.org](http://jupyter.org/).

# Build instruction. 

The site is build using GitHub Pages Jekyll, see [Jekyll
website](http://jekyllrb.com/) for customizing build process, and detail on how
what where. 

# Quick local testing

```
$ gem install jekyll
```

cd into the root of this directory, 

```
jekyll serve --baseurl ''
```

Open your browser to localhost:4000

Edit the various part and reload at will. 

Enjoy

# What is where. 

Most pages are located at the place where their URL is, nothing fancy.  Headers
and footer are in `_includes/head.html`, `_includes/header.html` ,
`_includes/footer.html`.

The **navbar** is in `_data/nav.yml` and look like that:

```
head:
    - Home
    - title: Install
      url: http://jupyter.readthedocs.org/en/latest/install.html
    - About
    - title: Documentation
      url: http://jupyter.readthedocs.org/en/latest/install.html
    - title: Blog
      url: https://blog.jupyter.org
    - Donate
```

which mean, insert in order the following links into the navbar:

    - Link to `Home` page, guess the url by yourself. 
    - link to `Install` page, the url is...
    - Link to `About`, guess the url by yourself, 
    -  ... etc.

The navbar will automatically target `_blank` pages where the url is explicit,
and mark the correct link as the "current" one.

# How do I create a new page ?

Create `my_page.html` (will have url `https://jupyter.org/my_page.html`)
or `my_page/index.html` (will have url `https://jupyter.org/my_page/`), start with the following :

```
---
layout: default
title: My Page
navbar_gray: true
---

write some html here (consider you are already inside `<body></body>`
```

You can not do it yet with .md file, but you will be able soon.

Add commit (and don't forget to add to `_data/nav.yml`

`navbar_gray: true` start the navbar with a grey background if you need it. 


