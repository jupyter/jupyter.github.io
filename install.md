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

If installing using `pip install --user`, you must add the user-level `bin` directory to your `PATH` environment variable in order to launch `jupyter lab`. If you are using a Unix derivative (FreeBSD, GNU / Linux, OS X), you can achieve this by using ``export PATH="$HOME/.local/bin:$PATH"`` command.

## Getting started with the classic Jupyter Notebook

### conda

We recommend installing the classic Jupyter Notebook using the conda package manager. Either the [miniconda](https://docs.conda.io/en/latest/miniconda.html) or the [miniforge](https://github.com/conda-forge/miniforge/) conda distributions include a minimal conda installation.

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
