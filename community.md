---
layout: page
title: Get Involved in the Community
tagline: How to learn about and join our open source community
permalink: /community
redirect_from:
  - /social
  - /media_submissions

social_channels:
  - title: Blog
    src: assets/jupyter/logo/logomark-orangebody-greyplanets.svg
    url: https://blog.jupyter.org
  - title: LinkedIn
    src: assets/badges/LI-In-Bug.png
    url: https://linkedin.com/company/project-jupyter
  - title: Bluesky
    src: assets/badges/bluesky_media_kit_logo_svgs.svg
    url: https://bsky.app/profile/jupyter.org
  - title: Mastodon
    src: assets/badges/mastodon.svg
    url: https://hachyderm.io/@ProjectJupyter
  - title: YouTube
    src: assets/badges/yt_icon_red_digital.png
    url: https://youtube.com/@ProjectJupyter

discussion_channels:
  - title: Zulip chat
    description: A Zulip chat for real-time discussion.
    src: assets/community/zulip-icon.svg
    alt: Zulip logo
    url: https://jupyter.zulipchat.com
  - title: Discourse forum
    description: A Discourse forum for asynchronous communication.
    src: assets/community/discourse.svg
    alt: Discourse logo
    url: https://discourse.jupyter.org/
  - title: GitHub code
    description: Where the community collaborates on code and documentation.
    src: assets/widgets/GitHub_Invertocat_Black.svg
    alt: GitHub logo
    url: https://github.com/jupyter/
---

Jupyter is an [open community](https://docs.jupyter.org/en/latest/community/content-community.html) including educators, developers, scientists, professionals, and data enthusiasts who believe in open tools and standards for data analytics, education, and research. We welcome [contributors](https://docs.jupyter.org/en/latest/contributing/content-contributor.html) and have a strong commitment to being an **[open, inclusive, and positive community](https://jupyter.org/governance/conduct/code-of-conduct/)**.

## Connect online

Project Jupyter has official channels to publish community information and news. Use our [Content Submission form](https://form.asana.com/?k=W0N5n7-VC0sj2Xk7IiVFoA&d=9283783873717) to submit [appropriate content](https://jupyter.org/governance/charters/mediastrategycharter/#editorial-principles) for these channels.

<ul class="social-links">
  {% for obj in page.social_channels %}
  <li><a href="{{ obj.url }}"><img src="{{ obj.src | relative_url }}" alt=""><span>{{ obj.title }}</span></a></li>
  {% endfor %}
</ul>

We also have community discussion and collaboration in several online spaces:

<ul class="social-links">
  {% for obj in page.discussion_channels %}
  <li><a href="{{ obj.url }}"><img src="{{ obj.src | relative_url }}" alt="{{ obj.alt }}" title="{{ obj.description }}"><span>{{ obj.title }}</span></a></li>
  {% endfor %}
</ul>

## Events

We often [come together in person or virtually](https://jupyter.readthedocs.io/en/latest/community/content-community.html#jupyter-wide-meetings) to share and learn from each other.

<div class="iframe-container">
  <iframe title="Calendar of Project Jupyter events" class="responsive-iframe" id="calendariframe" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&title=Project%20Jupyter&src=bTNoZWs2OWRhZzczODF1bXQ4a2NqZDc1dTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y184YWIxNzY1YjY1ODY3NDVkOGI3NWU5MmJkYzdjYTZlNDZjYWExMmE1ZjhkOTUwZDVmNzNmMzI2Zjk3NjE0NGQ3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=YXFwa3VpNXE3b2kzMnBrOXRjcDUzaG5zc2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23AD1457&color=%239E69AF&color=%23616161" style="border:0;overflow:hidden" width="800" height="600"></iframe>
</div>
<script>document.getElementById("calendariframe").src = document.getElementById("calendariframe").src.replace("ctz=local", "ctz=" + Intl.DateTimeFormat().resolvedOptions().timeZone)</script>

### JupyterCon

Global JupyterCon conferences gather our worldwide community together.

* [Jupyter Day 2026 (San Jose)](https://jupyterday-2026.sessionize.com/schedule/day/20261019) ([videos](https://www.youtube.com/playlist?list=PLQTkT0ZPozr8))
* [Jupyter Mini Summit 2026 (Prague)](https://osselceu2026.sched.com/event/2RjI5) ([videos](https://www.youtube.com/playlist?list=PLbJk0fi9gFmE))
* [JupyterCon 2025 (San Diego)](https://events.linuxfoundation.org/jupytercon/) ([videos](https://youtube.com/playlist?list=PL_1BH3ug7n1LbTQg67bUAK5qEBB3LVgbT&si=no6qhQNXMesAnMDt))
* [JupyterCon 2023 (Paris)](https://web.archive.org/web/20230715062821/https://www.jupytercon.com) ([videos](https://youtube.com/playlist?list=PL_1BH3ug7n1Ih_Yy2TmM7MZ2zogSLZvzE&si=drGUpsbcpZihlo-t))
* [JupyterCon 2020 (virtual)](https://jupytercon.com/) ([videos](https://www.youtube.com/c/JupyterCon/videos))
* [JupyterCon 2018 (New York)](https://conferences.oreilly.com/jupyter/jup-ny.html) ([videos](https://www.youtube.com/playlist?list=PL055Epbe6d5b572IRmYAHkUgcq3y6K3Ae))
* [JupyterCon 2017 (New York)](https://conferences.oreilly.com/jupyter/jup-ny-2017.html) ([videos](https://www.youtube.com/playlist?list=PL055Epbe6d5aP6Ru42r7hk68GTSaclYgi))

### Jupyter Community Workshops

[Jupyter Community Workshops](https://blog.jupyter.org/jupyter-community-workshops-cbd34ac82549)
bring together small groups (up to a few dozen) of Jupyter community members and
core contributors for high-impact strategic work and community engagement on focused topics. 
These in-person events are particularly useful for tackling challenging development and design projects,
growing the community of contributors, and strengthening collaborations.

<details markdown="1">
<summary>See past community workshops</summary>

#### Round 5: 2025-2026
- [Call for Proposals](https://blog.jupyter.org/posts/2025/jupyter-community-workshops-are-back/), [Main workshop series page](https://events.linuxfoundation.org/archive/2026/jupyter-workshops/)
- [Announcement of Funded Workshops](https://blog.jupyter.org/posts/2025/jupyter-community-workshops-early-2026/)
- [Roadmap Workshop for JupyterHub and Binder](https://events.linuxfoundation.org/roadmap-workshop-for-jupyterhub-and-binder/)
- [AI in Jupyter: Building Extensible AI Capabilities for Interactive Computing](https://events.linuxfoundation.org/ai-in-jupyter/)
- [Security Tooling Sprint](https://events.linuxfoundation.org/security-tooling-sprint/)
  - [Pre-workshop blog post](https://blog.jupyter.org/posts/2026/jupyter-security-sprint-march-31st/)
- [Demystifying MyST Markdown in Education](https://events.linuxfoundation.org/demystifying-myst-markdown/)
  - [Pre-workshop blog post](https://blog.jupyter.org/posts/2026/a-jupyter-workshop-demystifying-myst-markdown-in/)
  - [Post-workshop report]([Demystifying MyST Markdown in Education](https://blog.jupyter.org/posts/2026/navigating-the-post-workshop-fog-a-path-to-myst/))

#### Round 4: 2022-2023
- [Round 4: Call for Proposals](https://blog.jupyter.org/jupyter-community-workshops-c7491a3cca00)
- [Jupyter Widgets Workshop](https://blog.jupyter.org/jupyter-community-workshop-the-future-of-jupyter-widgets-475f67288da0)
- [JupyterLite Community Workshop](https://blog.jupyter.org/report-on-the-jupyterlite-community-workshop-aafaefe254ef)
- [Jupyter in Education Workshop](https://blog.jupyter.org/jupyter-community-workshop-jupyter-for-education-82af9e34b510)
- [Jupyter Notebook Format Workshop](https://blog.jupyter.org/jupyter-notebook-format-workshop-outcomes-c45faf113018)

#### Round 3: 2020-2022

- [Round 3: Call for Proposals](https://blog.jupyter.org/jupyter-community-workshops-call-for-proposals-for-jan-aug-2020-710f687e30f4)
- Africa Jupyter Community Workshop (Narcisse Mbunzama)
- [Building the Jupyter Community in Musculoskeletal Imaging Research](https://blog.jupyter.org/report-on-the-jupyter-community-workshop-77016ab1d49b) (Serena Bonaretti)
- [An Accessibility Audit and Roadmap for the Jupyter Ecosystem](https://blog.jupyter.org/jupyter-accessibility-workshops-wrap-up-8649dfe5f89) (Tania Allard, Isabela Presedo-Floyd)

#### Round 2: 2019

- [Round 2: Call for Proposals](https://blog.jupyter.org/jupyter-community-workshops-call-for-proposals-26a8417e5b6a)
- [Round 2: Announcement of Workshops](https://blog.jupyter.org/jupyter-community-workshops-a7f1dca1735e)
- [Round 2: 2019 Year in Review](https://blog.jupyter.org/jupyter-community-workshops-2019-year-in-review-8876336924e4)
- [Jupyter Server Design and Roadmap Workshop](https://blog.jupyter.org/jupyter-community-workshop-jupyter-server-design-and-roadmap-workshop-6e6760cc5098) (Luciano Resende)
- [Building upon the Jupyter Kernel Protocol](https://blog.jupyter.org/field-report-on-the-kernel-community-workshop-a4ad73a1a718) (Sylvain Corlay)
- [Jupyter nbgrader Hackathon/Code Sprint](https://blog.jupyter.org/https-blog-jupyter-org-university-of-edinburgh-jupyter-community-nbgrader-hackathon-2eff14df298a) (James Slack)
- [Intro to Python for Kids, Parents & Teachers Series](https://datasciencecornwall.blogspot.com/2019/06/python-data-science-for-kids-taster.html) (Tariq Rashad)
- [Dashboarding in the Jupyter Ecosystem](https://blog.jupyter.org/report-on-the-jupyter-community-workshop-on-dashboarding-14f8ad9f3c0) (Pascal Bugnion, Sylvain Corlay)
- [Jupyter for Scientific User Facilities and High-Performance Computing](https://blog.jupyter.org/jupyter-for-science-user-facilities-and-high-performance-computing-de178106872) (Rollin Thomas)
- [South America Jupyter Community Workshop](https://blog.jupyter.org/south-america-jupyter-community-workshop-4edc51c7a6ce) (Damian Avila)

#### Round 1: 2018

- [Round 1: Call for Proposals](https://blog.jupyter.org/jupyter-community-workshops-cbd34ac82549)
- [Jupyter Widgets Workshop](https://blog.jupyter.org/jupyter-community-workshops-cbd34ac82549)
- [Jupyter Hackathon in Hawaii](https://blog.jupyter.org/jupyter-hackathon-series-in-hawaii-97b3d1fbce68)
- [Teaching and Learning with Jupyter](https://blog.jupyter.org/teaching-and-learning-with-jupyter-c1d965f7b93a)

</details>

### Jupyter Community Calls

[Jupyter Community Calls](https://jupyter.readthedocs.io/en/latest/community/content-community.html#jupyter-wide-meetings)
provide a regular virtual forum for community-wide discussion and sharing.

