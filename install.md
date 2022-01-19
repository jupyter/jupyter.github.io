---
layout: page
title: Installing Jupyter
tagline: Get up and running on your computer
permalink: /install
---

Project Jupyter's tools are available for installation via the [Python Package Index](https://pypi.org/), the leading repository of software created for the Python programming language.
Its offerings can be installed with a variety of package management tools that run via a [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface), including [pip](https://pip.pypa.io/en/stable/), [conda](https://docs.conda.io/), [mamba](https://mamba.readthedocs.io/), and [pipenv](https://pipenv.pypa.io/).

Which one you use is up to you. Pipenv is recommended by the [Python Packaging Authority](https://www.pypa.io/). Conda and mamba are preferred by many members of [PyData](https://pydata.org/) and can by acquired via [miniforge](https://github.com/conda-forge/miniforge#mambaforge).

## JupyterLab

Install JupyterLab with `pip`:

```bash
pipenv install jupyterlab
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
pipenv install notebook
conda install -c conda-forge notebook
mamba install -c conda-forge notebook
```

To run the notebook:

```bash
jupyter notebook
```

## Voilà

Install Voilà with one of the following:

```bash
pipenv install voila
mamba install -c conda-forge voila
conda install -c conda-forge voila
```
