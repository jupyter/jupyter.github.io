---
layout: page
title: Installing Jupyter
tagline: Get up and running on your computer
permalink: /install
---

Project Jupyter's tools are available for installation via the [Python Package Index](https://pypi.org/), the leading repository of software created for the Python programming language.
Its offerings can be installed with a variety of package management tools that run via a [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface), including [pip](https://pip.pypa.io/en/stable/), [conda](https://docs.conda.io/), [mamba](https://mamba.readthedocs.io/), and [pipenv](https://pipenv.pypa.io/).

This page uses instructions with [pip](https://pip.pypa.io/en/stable/) as it is [the recommended installation tool for Python](https://packaging.python.org/en/latest/guides/tool-recommendations/#installation-tool-recommendations).
If you require _environment management_ as opposed to just installation, you should look into [conda](https://docs.conda.io/), [mamba](https://mamba.readthedocs.io/), and [pipenv](https://pipenv.pypa.io/).

> **note**: If you install JupyterLab with `conda` or `mamba`, we recommend using [the `conda-forge` channel](https://conda-forge.org/).

## JupyterLab

Install JupyterLab with `pip`:

```bash
pip install jupyterlab
mamba install -c conda-forge jupyterlab
conda install -c conda-forge jupyterlab
```

Once installed, launch JupyterLab with:

```bash
jupyter-lab
```

## Jupyter Notebook

Install the classic Jupyter Notebook with one of the following:

```bash
pip install notebook
```

To run the notebook:

```bash
jupyter notebook
```

## Voilà

Install Voilà with one of the following:

```bash
pip install voila
mamba install -c conda-forge voila
conda install -c conda-forge voila
```
