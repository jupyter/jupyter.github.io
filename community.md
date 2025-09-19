---
layout: page
title: Get Involved in the Community
tagline: How to learn about and join our open source community
permalink: /community

channels:
  - title: Jupyter Forum
    description: A forum for asynchronous communication across the Jupyter community and many of its subprojects.
    src: assets/community/discourse.svg
    alt: Discourse logo
    url: https://discourse.jupyter.org/
  - title: Jupyter Chatroom
    description: For real-time discussion project-wide. Also used by several sub-projects for their team conversation.
    src: assets/community/zulip-icon.svg
    alt: Zulip logo
    url: https://jupyter.zulipchat.com
  - title: Jupyter General Mailing List
    description: A Google Group for general discussions of Jupyter's use.
    src: assets/community/mail-list.svg
    alt: Mailing list
    url: https://groups.google.com/forum/#!forum/jupyter
  - title: Jupyter GitHub
    description: A place where the community collaborates on the development of Jupyter software.
    src: assets/widgets/github.svg
    alt: GitHub logo
    url: https://github.com/jupyter/
  - title: Jupyter in Education Mailing List
    description: A Google Group for general discussions of Jupyter's use in education.
    src: assets/community/mail-education.svg
    alt: Education
    url: https://groups.google.com/forum/#!forum/jupyter-education
  - title: Jupyter for Research Facilities
    description: A Google Group for discussions of Jupyter's use at scientific research facilities (such as X-ray light sources, observatories, supercomputers, etc.).
    src: assets/community/mail-list.svg
    alt: Mailing list
    url: https://groups.google.com/forum/?pli=1#!forum/jupyter-research-facilities
  - title: Jupyter on Stack Overflow
    description: A popular third party site for programmers to ask and answer questions about Jupyter.
    src: assets/community/stack-overflow.svg
    alt: Stack Overflow logo
    url: https://stackoverflow.com/questions/tagged/jupyter
  - title: Jupyter Community Guides
    description: Information about community, communication and governance.
    src: assets/community/documentation.svg
    alt: Documentation
    url: https://jupyter.readthedocs.io/en/latest/community/content-community.html
  - title: Jupyter Contributor Guides
    description: Contribution guidelines.
    src: assets/community/documentation.svg
    alt: Documentation
    url: https://jupyter.readthedocs.io/en/latest/contributing/content-contributor.html
---

Jupyter is an open community of data enthusiasts who believe in the power of open
tools and standards for education, research, and data analytics.

## Where to learn

We welcome contributions and contributors of all kinds - whether they come as contributions to code, participation in the community, opening issues and pointing out bugs, or simply sharing your work with your colleagues and friends.

To learn more about contributing, see the [Jupyter Contributing guide](https://docs.jupyter.org/en/latest/contributing/content-contributor.html).

Jupyter is organized into sub-projects, each of which has their own goals, practices, and spaces for communication. 
To get started, see [this list of Jupyter Subprojects](https://jupyter.org/governance/list_of_subprojects.html).

## Where to talk

Jupyter has a number of online communication channels to help keep in touch. Here are several of the most-prominent ones.

Remember that we have a strong commitment to being an **open, inclusive, and positive community**. Please read the [Jupyter Code of Conduct](https://github.com/jupyter/governance/blob/main/conduct/code_of_conduct.md)
for guidance on how to interact with others.

<section class="resourcelist">
  {% for obj in page.channels %}
    {% include community-resource.html
         title=obj.title
         description=obj.description
         url=obj.url
         src=obj.src
         alt=obj.alt
    %}
  {% endfor %}
</section>

## Live events

Project Jupyter events provide a forum for community members to come together in person
or virtually to share and learn from each other.

This page is for in-person, one-of-a-kind events; for community engagement, see the community page. 

### Calendar

This is a calendar of regular online events.  It might not be exhaustive.

<div class="iframe-container">
  <iframe title="Calendar of Project Jupyter events"
          class="responsive-iframe"
          id="calendariframe"
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=local&amp;src=m3hek69dag7381umt8kcjd75u4&amp;src=aqpkui5q7oi32pk9tcp53hnssc&amp;src=c_8ab1765b6586745d8b75e92bdc7ca6e46caa12a5f8d950d5f73f326f976144d7&amp;color=%23AD1457&amp;color=%23EF6C00&amp;color=%23616161"
          width="800"
          height="600"
          style="border: 0; overflow: hidden;"></iframe>
</div>
<script>document.getElementById("calendariframe").src = document.getElementById("calendariframe").src.replace("ctz=local", "ctz=" + Intl.DateTimeFormat().resolvedOptions().timeZone)</script>

See [this page](https://jupyter.readthedocs.io/en/latest/community/content-community.html#jupyter-wide-meetings) for
more information.

### JupyterCon

Global JupyterCon conferences provide opportunities for the Jupyter community to come together to learn and share.

* [JupyterCon 2017](https://conferences.oreilly.com/jupyter/jup-ny-2017.html) ([videos](https://www.youtube.com/playlist?list=PL055Epbe6d5aP6Ru42r7hk68GTSaclYgi))
* [JupyterCon 2018](https://conferences.oreilly.com/jupyter/jup-ny.html) ([videos](https://www.youtube.com/playlist?list=PL055Epbe6d5b572IRmYAHkUgcq3y6K3Ae))
* [JupyterCon 2020 (virtual)](https://jupytercon.com/) ([videos](https://www.youtube.com/c/JupyterCon/videos))

### Jupyter Community Workshops

[Jupyter Community Workshops](https://blog.jupyter.org/jupyter-community-workshops-cbd34ac82549)
bring together small groups (approximately 12 to 24 people) of Jupyter community members and
core contributors for high-impact strategic work and community engagement on focused topics.

Much of Jupyter's work is accomplished through remote, online collaboration; yet, over the years,
we have found deep value in focused in-person work over a few days. These in-person events are
particularly useful for tackling challenging development and design projects, growing the community
of contributors, and strengthening collaborations.

#### Round 1: 2018

- [Round 1: Call for Proposals](https://blog.jupyter.org/jupyter-community-workshops-cbd34ac82549)
- [Jupyter Widgets workshop](https://blog.jupyter.org/jupyter-community-workshops-cbd34ac82549)
- [Jupyter Hackathon in Hawaii](https://blog.jupyter.org/jupyter-hackathon-series-in-hawaii-97b3d1fbce68)
- [Teaching and Learning with Jupyter](https://blog.jupyter.org/teaching-and-learning-with-jupyter-c1d965f7b93a)

#### Round 2: 2019

- [Round 2: Call for Proposals](https://blog.jupyter.org/jupyter-community-workshops-call-for-proposals-26a8417e5b6a)
- [Round 2: Announcement of Workshops](https://blog.jupyter.org/jupyter-community-workshops-a7f1dca1735e)
- [Round 2: 2019 Year in Review](https://blog.jupyter.org/jupyter-community-workshops-2019-year-in-review-8876336924e4)
- [Jupyter Server Design and Roadmap Workshop](https://blog.jupyter.org/jupyter-community-workshop-jupyter-server-design-and-roadmap-workshop-6e6760cc5098): (Luciano Resende)
- [Building upon the Jupyter Kernel Protocol](https://blog.jupyter.org/field-report-on-the-kernel-community-workshop-a4ad73a1a718) (Sylvain Corlay)
- [Jupyter nbgrader Hackathon/Code Sprint](https://blog.jupyter.org/https-blog-jupyter-org-university-of-edinburgh-jupyter-community-nbgrader-hackathon-2eff14df298a): (James Slack)
- [Intro to Python for Kids, Parents & Teachers Series](https://datasciencecornwall.blogspot.com/2019/06/python-data-science-for-kids-taster.html): (Tariq Rashad)
- [Dashboarding in the Jupyter Ecosystem](https://blog.jupyter.org/report-on-the-jupyter-community-workshop-on-dashboarding-14f8ad9f3c0): (Pascal Bugnion, Sylvain Corlay)
- [Jupyter for Scientific User Facilities and High-Performance Computing](https://blog.jupyter.org/jupyter-for-science-user-facilities-and-high-performance-computing-de178106872): (Rollin Thomas)
- [South America Jupyter Community Workshop](https://blog.jupyter.org/south-america-jupyter-community-workshop-4edc51c7a6ce): (Damian Avila)

#### Round 3: 2020-2022

- [Round 3: Call for Proposals](https://blog.jupyter.org/jupyter-community-workshops-call-for-proposals-for-jan-aug-2020-710f687e30f4)
- Africa Jupyter Community Workshop: (Narcisse Mbunzama)
- [Building the Jupyter Community in Musculoskeletal Imaging Research](https://blog.jupyter.org/report-on-the-jupyter-community-workshop-77016ab1d49b): (Serena Bonaretti)
- [An accessibility audit and roadmap for the Jupyter ecosystem](https://blog.jupyter.org/jupyter-accessibility-workshops-wrap-up-8649dfe5f89): (Tania Allard, Isabela Presedo-Floyd)

#### Round 4: 2022-2023
- [Round 4: Call for Proposals](https://blog.jupyter.org/jupyter-community-workshops-c7491a3cca00)
- [Jupyter Widgets workshop](https://blog.jupyter.org/jupyter-community-workshop-the-future-of-jupyter-widgets-475f67288da0)
- [JupyterLite community workshop](https://blog.jupyter.org/report-on-the-jupyterlite-community-workshop-aafaefe254ef)
- [Jupyter in Education workshop](https://blog.jupyter.org/jupyter-community-workshop-jupyter-for-education-82af9e34b510)
- [Jupyter Notebook Format workshop](https://blog.jupyter.org/jupyter-notebook-format-workshop-outcomes-c45faf113018)

#### Round 5: 2025-2026
- [Round 5: Call for Proposals](https://blog.jupyter.org/jupyter-community-workshops-are-back-3cca15d02975)
- [Round 5: Announcement of Workshops](https://blog.jupyter.org/jupyter-community-workshops-early-2026-a9ce9670ba19)

### Jupyter Community Calls

[Jupyter Community Calls](https://jupyter.readthedocs.io/en/latest/community/content-community.html#jupyter-wide-meetings)
provide a regular virtual forum for community-wide discussion and sharing.

