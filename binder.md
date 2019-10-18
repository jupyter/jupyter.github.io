---
layout: page_md
title: The Binder Project
title_image: assets/logo_binder.svg
tagline: Reproducible, sharable, interactive computing environments
permalink: /binder
---

## What is the Binder Project?

The Binder project offers an easy place to share computing environments to everyone.
It allows users to specify custom environments and share them with a single link.
Use-cases involve workshops, scientific workflows and streamline sharing among teams.

The Binder Project builds tools that reward best-practices in reproducible data
science by utilizing community-developed standards for
reproducibility. When repositories follow these best-practices and are hosted in
an online repository, then Binder automatically builds a linkable environment anybody can access.


## What is Binder used for?

* **Teaching and training** - Binder lets you share links to interactive data analytics environments
  with your students. This is great for workshops, tutorials, and classes and allows
  you to get students up-and-running with the code much more quickly. For example,
  [Software Carpentry uses Binder links for their novice Python lesson](https://github.com/swcarpentry/python-novice-gapminder/blob/840d5249d8e8bb45e203b5d3a1b34e637e2889ef/README.md).
* **Technical documentation** - Binder tools can be used to provide interactivity to documentation and
  demonstrations of tools. It has been used extensively (Scipy and Pycon workshops. "do you also love spending the first half of your workshop sorting out how to install stuff?"). For
  example, [the scikit-learn documentation uses Binder to let users try their examples](https://scikit-learn.org/dev/auto_examples/classification/plot_classifier_comparison.html).
* **Open educational resources** - Want to share educational materials that use data
  science and are publicly accessible? Binder can provide interactivity to readers,
  allowing them a more rich experience with your content. For example,
  [UC Berkeley uses Binder to let others interact with open data science textbooks](https://www.inferentialthinking.com/chapters/08/Functions_and_Tables.html).
* **Reproducible scientific analysis** - Binder allows you to share an interactive
  environment along with your code and analysis. You can share a link that lets
  others reproduce and interact with your work. For example, the
  [Neurolibre project](https://conp-pcno.github.io/) uses Binder to
  [reproduce neuroscience analyses](https://qmrlab.org/t1_book/intro).


## Guiding Principles of the Binder Project

The Binder Project uses the following principles in designing its technology
and the practices around it. This is a non-exhaustive list.

* Repositories should be human and machine readable.
* Use existing specifications and standards if they exist. Adopt new specifications in
  consultation with the communities that Binder serves.
* Support many languages and interfaces. Be as workflow-agnostic as possible.
* Be lightweight and tightly-scoped, but extendable to new workflows, platforms, cloud vendors, etc.

In short, if you follow best-practices in computational science, your repository should work with Binder.

## What is in the Binder stack?

Binder is entirely powered by an open-source infrastructure stack. Its main two
tools are BinderHub, which is an open-source tool that deploys the Binder
service in the cloud, and repo2docker, which generates reproducible Docker
images from a git repository. The [Binder team](https://jupyterhub-team-compass.readthedocs.io/en/latest/team.html)
also runs a public BinderHub deployment at mybinder.org as a free public service for the community.

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
