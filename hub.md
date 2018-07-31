---
layout: page_md
title: JupyterHub
title_image: assets/hublogo.svg
tagline: A multi-user version of the notebook designed for companies, classrooms and research labs
navbar_jupytercon: true
cfp: true
permalink: /hub
---

## What is JupyterHub?

JupyterHub provides remote access to Jupyter servers on shared infrastructure
in order to make computational environments and resources more accessible to
students, researchers, and data scientists.

JupyterHub runs in the cloud or on your own hardware, and makes it possible
to serve a pre-configured data science environment to any user in the world.
It is customizable and scalable, and is suitable for small and large teams,
academic courses, and large-scale infrastructure.

## Key features of JupyterHub

**Flexible** - JupyterHub can be used to serve a variety of environments. It
supports dozens of kernels with the Jupyter server, and can be used to serve
a variety of user interfaces including the Jupyter Notebook, Jupyter Lab,
RStudio, nteract, and more.

**Secure** - JupyterHub can be configured with authentication in order to
provide access to a subset of users. Authentication is pluggable, supporting
a number of authentication protocols (such as OAuth and GitHub).

**Scalable** - JupyterHub is container-friendly, and can be deployed with
modern-day container technology. It also runs on Kubernetes, and can run
with up to tens of thousands of users.

**Portable** - JupyterHub is entirely open-source and designed
to be run on a variety of infrastructure. This includes commercial cloud
providers, virtual machines, even your own laptop hardware.

## Deploy a JupyterHub

The Jupyter Community curates two JupyterHub "distributions" for deploying
in the cloud. Follow the links below for more information.

**[The Littlest JupyterHub](https://tljh.jupyter.org)** is a lightweight
method to install JupyterHub on a **single virtual machine**. The TLJH
guide has information on creating a VM on several cloud providers, as well
as installing and customizing JupyterHub so that users may access it at a
public URL.

**[Zero to JupyterHub for Kubernetes](https://z2jh.jupyter.org)** deploys
JupyterHub on Kubernetes using Docker, allowing it to be scaled and
maintained efficiently for **large numbers of users**. Zero to JupyterHub
is a Helm Chart for deploying JupyterHub quickly, as well as a semi-complete
guide to deploying and configuring your JupyterHub on Kubernetes.

**[The JupyterHub repository](https://github.com/jupyterhub/jupyterhub)**
contains more information about the internals of JupyterHub and how to
deploy it on more custom setups (such as your own laptop).

## Join the community

JupyterHub is an open-source and community-driven project. We'd love for you
to join our community and contribute code, time, comments, or just
appreciation.

**[The JupyterHub Gitter Channel](https://gitter.im/jupyterhub/jupyterhub)**
is a place where the JupyterHub community discuses developments in the
JupyterHub technology, as well as best-practices in deploying and debugging.
