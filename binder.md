---
layout: page_md
title: The Binder Project
title_image: assets/logo_binder.svg
tagline: Reproducible, sharable, interactive computing environments
permalink: /binder
---

## What is the Binder Project?

The Binder Project is a community that builds free and open-source tools
for reproducible, sharable scientific environments that are workflow- and platform-agnostic,
and reward best practices.

It builds tools that reward best-practices in reproducible data
science by piggy-backing off of community-developed standards for
reproducibility. If repositories follow these best-practices and are hosted in
an online repository, then Binder will build the environment needed to run the
code and provide a link that allows others to interact with the results and
reproduce analyses.

Binder is entirely powered by an open-source infrastructure stack. Its main two
tools are BinderHub, which is an open-source tool that deploys the Binder
service in the cloud, and repo2docker, which generates reproducible Docker
images from a git repository. The [Binder team](https://jupyterhub-team-compass.readthedocs.io/en/latest/team.html)
also runs a public BinderHub deployment at mybinder.org as a free public service for the community.

## Guiding Principles of the Binder Project

The Binder Project uses the following principles in designing its technology
and the practices around it. This is a non-exhaustive list.

* Repositories should be human and machine readable.
* Use existing specifications and standards if they exist. Adopt new specifications in
  consultation with the communities that Binder serves.
* Support many languages and interfaces. Be as workflow-agnostic as possible.
* Be lightweight and tightly-scoped, but extendable to new workflows, platforms, cloud vendors, etc.

In short, if you follow best-practices in computational science, your repository should work with Binder.

## Major technical projects

These are the major technical open source projects and services associated with
the Binder Project.

### repo2docker

**[Here's a link to the repo2docker repository](https://github.com/jupyter/repo2docker)**

repo2docker is a lightweight tool that converts code repositories into reproducible
Docker images. It defines the [Reproducible Execution Environment Specification](https://repo2docker.readthedocs.io/en/latest/specification.html),
which is used to define rules for converting repository configuration files into Docker images.

repo2docker is used extensively by BinderHub, but can also be run as an independent command line-based
tool for generating your own reproducible Docker images that are run with a Jupyter server.


**To learn more about repo2docker, see [the repo2docker documentation](https://repo2docker.readthedocs.io).**

### BinderHub

**[Here's a link to the BinderHub repository](https://github.com/jupyterhub/binderhub)**

BinderHub is a web application that allows users to create sharable, interactive,
reproducible environments from code repositories. It uses repo2docker to generate
Docker images for each environment, and JupyterHub to provide interactive user
sessions from those images.

BinderHub is a web application built on Kubernetes, another open-source tool
for managing cloud infrastructure. It is cloud- and hardware-agnostic, making
it scalable and flexible and able to accomodate many use-cases and communities.
One example of a BinderHub deployment lives at [mybinder.org](https://mybinder.org).

**To learn how to deploy your own BinderHub, see [the BinderHub documentation](https://binderhub.readthedocs.io).**

### mybinder.org

[**Here's a link to mybinder.org**](https://mybinder.org).

The BinderHub deployment at mybinder.org is a free public service that the Binder Community
manages for the community. It is actually a [federation of many BinderHub deployments](https://binderhub.readthedocs.io/en/latest/federation/federation.html)
that is run as an experiment in open, community-led infrastructure. We run mybinder.org
as a radically transparent public service, and as such there is a lot of information out there
about the deployment. Here are a few useful resources in case you're interested:

* [The mybinder.org grafana chart](https://grafana.mybinder.org) shows activity and status
  information about the BinderHub deployment at mybinder.org
* [The mybinder.org billing repository](https://github.com/jupyterhub/binder-billing) has
  information about the cloud cost associated with running mybinder.org
* [The mybinder.org site reliability guide](mybinder-sre.readthedocs.io/) is a resource
  for the operations team and the community to share best-practices and information about
  running the public BinderHub deployment at mybinder.org
* [The mybinder.org incident reports page](mybinder-sre.readthedocs.io/en/latest/#incident-reports)
  contains a list of incidents that have happened in the public deployment, as well as
  steps taken to resolve them.


## Join or connect with the Binder community

Like all Project Jupyter efforts, the Binder Project is an
open-source and community-driven project. We'd love for you
to join our community and contribute code, time, comments, or appreciation.

* [**The JupyterHub Team Compass**](https://jupyterhub-team-compass.readthedocs.io/en/latest/) is a resource
  for the JupyterHub community to share information, team practices, and important information.
* [**The JupyterHub Teams Page**](https://jupyterhub-team-compass.readthedocs.io/en/latest/team.html) lists
  the current members of the JupyterHub and Binder teams.
* [**The JupyterHub Contributing guide**](https://jupyterhub-team-compass.readthedocs.io/en/latest/contributing.html) is
  a great place to start learning how you can contribute to the Binder Project.
* [**The Binder Gitter Channel**](https://gitter.im/binder) is where a lot of real-time
  conversations happen in the Binder community.
* [**The Binder Community Forum**](https://discourse.jupyter.org/c/binder) has a lot of
  community interaction and useful information about using, running, and contributing to Binder.