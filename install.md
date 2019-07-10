---
layout: page_md
title: Installing the Jupyter Software
tagline: Get up and running with the JupyterLab or the classic Jupyter Notebook on your computer within minutes!
permalink: /install
---

## Getting started with JupyterLab

### Installation

[install](http://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html) JupyterLab using `conda`, `pip`, or `pipenv`. Conda is recommended if you have no installation preference.

Project installation instructions from the git sources are available in the [contributor documentation](CONTRIBUTING.md).

#### conda

Conda is an open source package management system and environment management system that runs on Windows, macOS, and Linux. Conda packages and distributes software for any language, and by default uses the Anaconda repository managed by Anaconda Inc. To install conda, please [see the conda installation instructions](https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html).

Install the [JupyterLab `conda` package](https://anaconda.org/conda-forge/jupyterlab) with:

```bash
conda install -c conda-forge jupyterlab
```

#### pip

pip is a package management system for installing and updating Python packages, and comes with any Python installation. On Ubuntu, SUSE Enterprise Linux, openSUSE, and Fedora Linux, use the system package manager to install the `python3-pip` package. [\_The Hitchhiker's Guide to Python_provides guidance on how to install Python](https://docs.python-guide.org/starting/installation/); Another option is to [install Python directly from python.org](https://www.python.org/getit/). We suggest you [upgrade pip](https://pip.pypa.io/en/stable/installing/) before using it to install other programs.

JupyterLab requires Python 3.5 or higher.

1.  When using Windows with Python version 3.5 or higher, use the [Python Launcher for Windows](https://docs.python.org/3/using/windows.html?highlight=shebang#python-launcher-for-windows) to use `pip` with Python version 3:
    ```bash
    py -3 -m pip install jupyterlab
    ```
2.  If the system has a `python3` command (standard on Unix-like systems), install with the comand:
    ```bash
    python3 -m pip install jupyterlab
    ```
3.  Using the `python` command directly is another option, but this will use the _current_ version of Python (which may be Python version 2 or version 3 if both are installed):
    ```bash
    python -m pip install jupyterlab
    ```

Some systems have a `pip3` command that has the same effect as `python3 -m pip` and/or a `pip` command that behaves the same as `python -m pip`.

Adding `--user` after `pip install` will install the files to a local user install directory (typically `~/.local/` or `%APPDATA%\Python` on Windows) instead of the system-wide directory. This can be helpful, especially if writing to the system-wide directory is not permitted. However, the user-level `bin` directory must be added to the `PATH` environment variable in order to launch `jupyter lab`.


## Getting started with the classic Jupyter Notebook

### Prerequisite: Python
While Jupyter runs code in many programming languages, Python is a requirement
(Python 3.3 or greater, or Python 2.7) for installing the JupyterLab or the classic Jupyter Notebook.

### Installing Jupyter Notebook using Anaconda
We **strongly recommend** installing Python and Jupyter using the [Anaconda Distribution](https://www.anaconda.com/downloads),
which includes Python, the Jupyter Notebook, and other commonly used packages for scientific computing and data science.

First, download [Anaconda](https://www.anaconda.com/downloads). We recommend downloading Anaconda’s latest Python 3 version.

Second, install the version of Anaconda which you downloaded, following the instructions on the download page.

Congratulations, you have installed Jupyter Notebook! To run the notebook, run the following command at the Terminal (Mac/Linux) or Command Prompt (Windows):

```bash
jupyter notebook
```

See [Running the Notebook](https://jupyter.readthedocs.io/en/latest/running.html#running) for more details.

### Installing Jupyter Notebook with pip
As an existing or experienced Python user, you may wish to install Jupyter using Python’s package manager, pip, instead of Anaconda.

If you have Python 3 installed (which is recommended):

```
python3 -m pip install --upgrade pip
python3 -m pip install jupyter
```

If you have Python 2 installed:

```bash
python -m pip install --upgrade pip
python -m pip install jupyter
```

Congratulations, you have installed Jupyter Notebook! To run the notebook, run
the following command at the Terminal (Mac/Linux) or Command Prompt (Windows):

```bash
jupyter notebook
```

See [Running the Notebook](https://jupyter.readthedocs.io/en/latest/running.html#running) for more details.
