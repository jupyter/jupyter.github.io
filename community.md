---
layout: page_md
title: Get Involved
tagline: How to join the Project Jupyter community
permalink: /community

channels:
  - title: Jupyter GitHub
    description: A place where the community collaborates on the development of Jupyter software.
    src: assets/github.svg
    alt: github icon
    url: https://github.com/jupyter/
  - title: Jupyter Discourse
    description: A Discourse Forum for a multitude of Jupyter topics
    src: assets/mail-list.svg
    alt: mailing list icon
    url: https://discourse.jupyter.org/
  - title: Jupyter General Mailing List
    description: A Google Group for general discussions of Jupyter's use.
    src: assets/mail-list.svg
    alt: mailing list icon
    url: https://groups.google.com/forum/#!forum/jupyter
  - title: Jupyter in Education Mailing List
    description: A Google Group for general discussions of Jupyter's use in education.
    src: assets/mail-education.svg
    alt: education mailing list icon
    url: https://groups.google.com/forum/#!forum/jupyter-education
  - title: Jupyter for Research Facilities
    description: A Google Group for discussions of Jupyter's use at scientific research facilities (such as X-ray light sources, observatories, supercomputers, etc.).
    src: assets/mail-list.svg
    alt: mailing list icon
    url: https://groups.google.com/forum/?pli=1#!forum/jupyter-research-facilities
  - title: Jupyter Gitter Chatroom
    description: A real-time chatroom, for general development related discussions.
    src: assets/gitter.svg
    alt: gitter icon
    url: https://gitter.im/jupyter/jupyter
  - title: Jupyter on Stack Overflow
    description: A popular third party site for programmers to ask and answer questions about Jupyter.
    src: assets/stack-overflow.svg
    alt: stack overflow icon
    url: https://stackoverflow.com/questions/tagged/jupyter
  - title: Jupyter Community Guides
    description: Information about community, communications and governance.
    src: assets/documentation.svg
    alt: documentation icon
    url: https://jupyter.readthedocs.io/en/latest/community/content-community.html
  - title: Jupyter Contributor Guides
    description: Contribution guidelines
    src: assets/documentation.svg
    alt: documentation icon
    url: https://jupyter.readthedocs.io/en/latest/contributing/content-contributor.html
---

Jupyter is a community of data enthusiasts who believe in the power of open
tools and standards for education, research, and data analytics. We welcome
contributions and contributors of all kinds - whether they come as contributions
to code, participation in the community, opening issues and pointing out bugs,
or simply sharing your work with your colleagues and friends.

## Join the Jupyter community

If you're interested in joining the Jupyter community (yay!) we recommend
checking out the Jupyter [Contributing
guide](https://jupyter.readthedocs.io/en/latest/contributing/content-contributor.html).
This contains information about the different projects in the Jupyter ecosystem,
the tools and skills that are useful for each project, and other ways that you
can become a part of the Jupyter community.

### Events

Many members of the Jupyter community host and attend events to connect others that use
Jupyter and other tools in the open data analytics stack, such as JupyterCon, Jupyter Community Workshops, JupyterDays, and other events. See the [Project Jupyter Events](/events) for more details.

## Explore our projects

Jupyter has seen wonderful growth over the past decade. As we have grown the
projects now span multiple GitHub organizations. Jupyter projects may be found
in these organizations:

- [jupyter](https://github.com/jupyter)
- [ipython](https://github.com/ipython)
- [jupyterhub](https://github.com/jupyterhub)
- [jupyterlab](https://github.com/jupyterlab)
- [jupyter-widgets](https://github.com/jupyter-widgets)
- [jupyter-server](https://github.com/jupyter-server)
- [jupyter-xeus](https://github.com/jupyter-xeus)
- [jupyter-lsp](https://github.com/jupyter-lsp)
- [voila-dashboards](https://github.com/voila-dashboards)
- [binder-examples](https://github.com/binder-examples)
- [jupyter-resources](https://github.com/jupyter-resources)

Many organizations have a **team-compass** repo to provide detailed information
about the sub-community, its meetings, and contribution tips. 

## Participate online

Jupyter also has a number of online communication channels to help keep in touch.

As you interact with others in the Jupyter ecosystem, remember that we have a strong
commitment to being an **open, inclusive, and positive community**. Please read the
[Jupyter Code of Conduct](https://github.com/jupyter/governance/blob/master/conduct/code_of_conduct.md) for guidance on how to interact with others in
a way that makes the community thrive.

Below is a short list of gitter channels, email listservs, and github repositories
where you can get involved. **We always welcome participation in the Jupyter community**.

<section>
<div class="section-white top-section-border">
    <div class="container">
    <div class="row">
        {% for obj in page.channels %}
        <div class="col-sm-6 col-md-12 resource-section">
            <div class="resource-content">
                <div class="col-md-2">
                    <img src="{{ obj.src }}" class="resource-logo" alt="{{ obj.alt }}">
                </div>
                <div class="col-md-8 resource-text">
                    <h3 class="resource-name">{{ obj.title }}</h3>
                    <p class="resource-desc">{{ obj.description }}</p>
                </div>
                <div class="col-md-2 resource-button">
                    <a href="{{ obj.url }}">View</a>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
    </div>
</div>
</section>
