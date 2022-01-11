---
layout: page
title: Installing Jupyter
tagline: Get up and running with JupyterLab or the classic Jupyter Notebook.
permalink: /install
---

## Getting started with JupyterLab

_The [installation guide](http://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html) contains more detailed instructions_

### Installation with mamba or conda

JupyterLab can be installed with `mamba` and `conda`:

```bash
mamba install -c conda-forge jupyterlab
```

or

```bash
conda install -c conda-forge jupyterlab
```

Note: If you have not installed mamba or conda yet, you can get started with the [miniforge](https://github.com/conda-forge/miniforge#mambaforge) distribution.

### Installation with pip

If you use `pip`, you can install it with:

```bash
pip install jupyterlab
```

If you are using a system such as macOS that includes both Python 2 and Python 3, run `pip3` instead of `pip`.

If installing using `pip install --user`, you must add the user-level `bin` directory to your `PATH` environment variable in order to launch `jupyter lab`. If you are using a Unix derivative (e.g., FreeBSD, GNU/Linux, macOS), you can do this by running ``export PATH="$HOME/.local/bin:$PATH"``.

### Run JupyterLab

Once installed, launch JupyterLab with:

```bash
jupyter-lab
```

## Getting started with the classic Jupyter Notebook

### Installation with mamba or conda

The classic notebook can be installed with `mamba` and `conda`:

```bash
mamba install -c conda-forge notebook
```

or

```bash
conda install -c conda-forge notebook
```

### Installation with pip

If you use `pip`, you can install it with:

```bash
pip install notebook
```

Congratulations, you have installed Jupyter Notebook! To run the notebook, run the following command at the Terminal (Mac/Linux) or Command Prompt (Windows):

```bash
jupyter notebook
```

See [Running the Notebook](https://jupyter.readthedocs.io/en/latest/running.html#running) for more details.

## Getting started with Voilà

### Installation with mamba or conda

If you use `mamba` or `conda`, you can install it with:

```bash
mamba install -c conda-forge voila
```

or

```bash
conda install -c conda-forge voila
```

For more detailed instructions, consult the [installation guide](https://voila.readthedocs.io/en/stable/install.html).

### Installation with pip

If you use `pip`, you can install it with:

```bash
pip install voila
```
