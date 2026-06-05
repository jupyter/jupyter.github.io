---
layout: page
title: AI in Jupyter
tagline: Learn about AI-related work from within the Jupyter project
permalink: /ai
---

Artificial Intelligence (AI) and Large Language Models (LLMs) play an increasingly important role in the industry, and within the Jupyter community.
This ecosystem is also relatively young and evolving rapidly.
The goal of this page is to point you in the right direction to learn more about various initiatives within the Jupyter ecosystem related to AI.

## Technical efforts related to AI in Jupyter subprojects

### Jupyter AI

[Jupyter AI](https://github.com/jupyterlab/jupyter-ai) is an extension that connects AI agents to computational notebooks in JupyterLab. It is currently incubating as a part of the [Jupyter-Frontends subproject](https://github.com/jupyterlab/frontends-team-compass).

### Jupyter AI Contrib

[jupyter-ai-contrib](https://github.com/jupyter-ai-contrib) is a community organization hosting extensions, integrations, and experiments that compose or build on Jupyter AI.
It is a combination of earlier-stage projects that undergo more rapid development and prototyping, and community-maintained projects.

### JupyterLite AI

[jupyterlite/ai](https://github.com/jupyterlite/ai) provides AI code completions and chat for JupyterLab, Notebook 7 and JupyterLite. It is maintained within the [JupyterLite organization](https://github.com/jupyterlite).

## Where to discuss AI in the Jupyter community?

For asynchronous chat, the [JupyterLab channel in Zulip](https://jupyter.zulipchat.com/#narrow/channel/469762-jupyterlab) is your best bet.
Synchronous conversations and demos happen during the weekly Jupyter AI meeting (see [calendar](https://jupyter.org/community#calendar)) and [community workshops](https://jupyter.org/community#jupyter-community-workshops).
Because the Jupyter AI project is incubating within the Jupyter Frontends subproject, this channel is the best place to have developer-related conversations about AI.

## Frequently Asked Questions

### What is the difference between `jupyter-ai` and `jupyterlite/ai`

Both projects integrate AI features into JupyterLab and Notebook v7+ interfaces. `jupyterlite/ai` does not depend on a server component which makes it possible to use it with JupyterLite, the in-browser Jupyter distribution. `jupyter-ai` enables agentic workflows that can continue to run on the server even when the browser is closed or disconnected. Server dependency distinction aside, the set of features overlaps, with both packages implementing agentic workflows and tool calling. Notably, `jupyterlite/ai` also implements AI code completion, and `jupyter-ai` implements multi-agent workflow.

### Does Jupyter have an AI contribution policy?

Not yet - Jupyter is primarily organized into semi-independent subprojects, each of which has their own practices and policies for contributing.
There is no Jupyter-wide policy regarding AI-assisted contributions.
Many sub-projects are currently in the process of defining the policies that work for their needs and practices.

### Is there a single "AI subproject" in Jupyter?

No, Jupyter has a number of initiatives related to AI as _part_ of subprojects (linked above), but there is no one AI subproject that encompasses everything.
We're encouraging subprojects to experiment and develop their own AI-related work, and to integrate and connect with other pieces of the ecosystem.
