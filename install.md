---
layout: page_md
title: Installing the Jupyter Software
tagline: Get up and running with the JupyterLab or the classic Jupyter Notebook on your computer within minutes!
permalink: /install
---

## Getting started with JupyterLab

### Installation

JupyterLab can be installed using `conda` or `pip`. For more detailed instructions, consult the [installation guide](http://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html).

### conda

If you use `conda`, you can install it with:

```shell
conda install -c conda-forge jupyterlab
```

### pip

If you use `pip`, you can install it with:

```shell
pip install jupyterlab
```

If installing using `pip install --user`, you must add the user-level `bin` directory to your `PATH` environment variable in order to launch `jupyter lab`.

## Getting started with the Classic Notebook

### conda

We recommend installing the notebook using the conda package manager. The [miniconda](https://docs.conda.io/en/latest/miniconda.html) and [miniforge](https://github.com/conda-forge/miniforge/) distributions include a minimal conda installation.

Then you can install the notebook with:

```shell
conda install -c conda-forge notebook
```

### pip

If you use `pip`, you can install it with:

```shell
pip install notebook
```

Congratulations, you have installed Jupyter Notebook! To run the notebook, run the following command at the Terminal (Mac/Linux) or Command Prompt (Windows):

```bash
jupyter notebook
```

See [Running the Notebook](https://jupyter.readthedocs.io/en/latest/running.html#running) for more details.

## Getting started with Voilà

### Installation

Voilà can be installed using `conda` or `pip`. For more detailed instructions, consult the [installation guide](https://voila.readthedocs.io/en/stable/install.html).

### conda

If you use `conda`, you can install it with:

```shell
conda install -c conda-forge voila
```

### pip

If you use `pip`, you can install it with:

```shell
pip install voila
```
