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

JupyterHub brings the power of notebooks to groups of users. It gives
users access to computational environments and resources without burdening
the users with installation and maintenance tasks. Users - including students,
researchers, and data scientists - can get their work done in their own
workspaces on shared resources which can be managed efficiently by system administrators.

JupyterHub runs in the cloud or on your own hardware, and makes it possible
to serve a pre-configured data science environment to any user in the world.
It is customizable and scalable, and is suitable for small and large teams,
academic courses, and large-scale infrastructure.

## Key features of JupyterHub

**Customizable** - JupyterHub can be used to serve a variety of environments. It
supports dozens of kernels with the Jupyter server, and can be used to serve
a variety of user interfaces including the Jupyter Notebook, Jupyter Lab,
RStudio, nteract, and more.

**Flexible** - JupyterHub can be configured with authentication in order to
provide access to a subset of users. Authentication is pluggable, supporting
a number of authentication protocols (such as OAuth and GitHub).

**Scalable** - JupyterHub is container-friendly, and can be deployed with
modern-day container technology. It also runs on Kubernetes, and can run
with up to tens of thousands of users.

**Portable** - JupyterHub is entirely open-source and designed
to be run on a variety of infrastructure. This includes commercial cloud
providers, virtual machines, or even your own laptop hardware.

The foundational JupyterHub code and technology can be found in the [JupyterHub
repository](https://github.com/jupyterhub/jupyterhub). This repository and the
[JupyterHub documentation](https://jupyterhub.readthedocs.io/)
contain more information about the internals of JupyterHub, its customization, and its
configuration.

## Deploy a JupyterHub

The Jupyter Community curates two JupyterHub "distributions" for deploying
in the cloud. Follow the links below for more information.

**[Zero to JupyterHub for Kubernetes](https://z2jh.jupyter.org)** deploys
JupyterHub on Kubernetes using Docker, allowing it to be scaled and
maintained efficiently for **large numbers of users**. Zero to JupyterHub
is a Helm Chart for deploying JupyterHub quickly, as well as a
guide to deploying and configuring your JupyterHub on Kubernetes.

**[The Littlest JupyterHub](https://tljh.jupyter.org)**, a recent and evolving
distribution designed for smaller deployments, is a lightweight
method to install JupyterHub on a **single virtual machine**. The Littlest
JupyterHub (also known as TLJH), provides a
guide with information on creating a VM on several cloud providers, as well
as installing and customizing JupyterHub so that users may access it at a
public URL.

## Join the community

Like all Project Jupyter efforts, JupyterHub is an
open-source and community-driven project. We'd love for you
to join our community and contribute code, time, comments, or appreciation.

**[The JupyterHub Gitter Channel](https://gitter.im/jupyterhub/jupyterhub)**
is a place where the JupyterHub community discuses developments in the
JupyterHub technology, as well as best-practices in deploying and debugging.
