---
layout: page_md
title: Installing the Jupyter Notebook
tagline: Get up and running with the Jupyter Notebook on your computer within minutes!
permalink: /install
---

## Prerequisite: Python
While Jupyter runs code in many programming languages, Python is a requirement
(Python 3.3 or greater, or Python 2.7) for installing the Jupyter Notebook itself.


## Installing Jupyter using Anaconda
We **strongly recommend** installing Python and Jupyter using the [Anaconda Distribution](https://www.anaconda.com/downloads),
which includes Python, the Jupyter Notebook, and other commonly used packages for scientific computing and data science.

First, download [Anaconda](https://www.anaconda.com/downloads). We recommend downloading Anaconda’s latest Python 3 version.

Second, install the version of Anaconda which you downloaded, following the instructions on the download page.

Congratulations, you have installed Jupyter Notebook! To run the notebook, run the following command at the Terminal (Mac/Linux) or Command Prompt (Windows):

```bash
jupyter notebook
```

See [Running the Notebook](https://jupyter.readthedocs.io/en/latest/running.html#running) for more details.

## Installing Jupyter with pip
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

## Using Jupyter in a virtual environment
If you would like to use jupyter from within a [virtual environment](https://virtualenv.pypa.io/en/stable/), 
there are a few steps required to register the environment-specific kernel (see [this article](http://anbasile.github.io/programming/2017/06/25/jupyter-venv/)):

Setup and activate your virtual environment:

```bash
$ python -m venv ENVNAME
$ source /path/to/ENVNAME/bin/activate
```

Install ipython and jupyter within the environment:

```bash
(ENVNAME) $ pip install ipython ipykernel jupyter
```

Install the environment-specific kernel with the environment-specific name:

```bash
(ENVNAME) $ ipython kernel install --user --name=ENVNAME
```

Then, when you [run the notebook](https://jupyter.readthedocs.io/en/latest/running.html#running), 
you will be able to select the named kernel at runtime, either when creating a new notebook, 
or from within the notebook when it is running.

