---
layout: page
title: Security
tagline: Project Jupyter is committed to reducing risk in using, deploying, operating, or developing Jupyter software.
permalink: /security
---

The Jupyter Security Subproject exists to provide help and advice to Jupyter
users, operators, and developers on security topics and to help coordinate handling
of security issues.

## Reporting vulnerabilities

If you believe you've found a security vulnerability in a Jupyter project,
please report it to [security@ipython.org](mailto:security@ipython.org).
If you prefer to encrypt your security reports,
you can use [this PGP public key](assets/ipython_security.asc).

## Vulnerability information

Known vulnerabilities are tracked using the [CVE vendor ID 15653 for Jupyter](https://www.cvedetails.com/vulnerability-list/vendor_id-15653/Jupyter.html).

[GitHub](https://docs.github.com/en/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies) provides alerts about vulnerable dependencies.
If your supply chain includes Jupyter projects, these alerts can help you respond to vulnerabilities quickly and easily.

## Security documentation

Several Jupyter projects maintain security-related documentation regarding usage or deployment of
Jupyter software.

- [jupyter-server](https://jupyter-server.readthedocs.io/en/latest/operators/security.html)
- [jupyterhub](https://jupyterhub.readthedocs.io/en/stable/reference/websecurity.html)

## Community resources

We are working to identify and coordinate security efforts across the Jupyter community and within all the various subprojects.
The [Jupyter Security](https://github.com/jupyter/security) GitHub repo has information how to participate and contribute.
For discussion, please use the special Discourse [security topic](https://discourse.jupyter.org/c/special-topics/security/48) on the Jupyter Discourse server.

----

Below is the copy of the vulnerability handling procedure that can be found on the [security repository](https://github.com/jupyter/security).

# Jupyter Vulnerability Handling Process

This document summarizes and proposes guidelines for handling vulnerabilities reported in Jupyter projects. 

Security issues and vulnerabilities have expectations and processes that are differ from typical open source practices:
 - Private discussions
 - Obfuscation
 - Short timeline

This makes it quite hard to be able to understand, learn, or know what to expect from a security point of view. This document
will give you a glimpse on what's happening on the inside, and what timeline to expect when you report a security vulnerability. 
It will also serve as a guideline and task list for Jupyter Contributors and Developers on how to handle security relatied issues.

## Scope

This process applies to *all projects* governed by Jupyter, including JupyterLab, Jupyter Notebook, JupyterHub, and Jupyter Server.

## Reporting Vulnerabilities

If you believe you’ve found a security vulnerability in a Jupyter project, please report it to security@ipython.org. If you prefer 
to encrypt your security reports, you can use [this PGP public key](https://jupyter.org/assets/ipython_security.asc). Project Jupyter 
will respond within 3 days to all new reports.

## Coordinated Disclosures

Project Jupyter follows a [coordinated disclosure](https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html#responsible-or-coordinated-disclosure)
model where the initial report and remediation are handled privately, but the completion description is made public once a patch
is available. Project Jupyter will disclose known vulnerabilities within 90 days by default, whether a patch is available or not.

## Acknowledgement

Project Jupyter will work to ensure that security researchers, developers, users, or others who identify and report vulnerabilities
within Project Jupyter software receive acknowledgement for their contribution. 


## Vulnerability Triage & Remediation Process

This section describes the process used by Project Jupyter to track, remediate, and disclose reported vulnerabilities. 
This description is both a reference for the Jupyter Community and a guideline for contributors.

### Roles

This process defines these roles:
- **Reporter** The individual(s) who report the vulnerability 
- **Coordinator** A Project Jupyter contributor who facilitates the tracking of the vulnerability through this process
- **Developer** One or more Project Jupyter developers who work on remediating the vulnerability

For the purpose of this document these roles are distinct, in practice, some of these roles may be handled by the same individual. However, the roles should be covered by a minimum of two separate individuals. For example, a Reporter may also fill the Developer role and create the remediation, in this case the Coordinator should be a separate individual.

### Process

The role responsible for each step is noted at the beginning.

- Upon receipt of the initial report:
  - **Coordinator**: Respond to the reported and acknowledge receipt of the report in the timeframe given in the "Reporting Vulnerabilities" section.
  - **Coordinator**: Open an issue in the private GitHub repository used for tracking vulnerabilities across projects
  - **Coordinator**: Review the issue for completeness and suitability (triage). If more information is needed, follow up with the Reporter.
- If the vulnerability is not accepted:
  - **Coordinator**: Close the issue
  - **Coordinator**: Notify the reporter
- If the vulnerability is accepted, within the relevant repositories:
  - **Coordinator**: Open a draft [GitHub Security Advisory](https://docs.github.com/en/code-security/repository-security-advisories/about-github-security-advisories-for-repositories#about-github-security-advisories)
    - Include relevant but sanitized details in the top level comment, which becomes public
    - Sensitive details and reproductions go in the comments on the draft advisory, which are not public
    - **Coordinator**: Add relevant people to the advisory - *note* we need an official list of GitHub handles here since teams don't work across orgs
    - **Developer**: Attempt to replicate the reported vulnerability. Request more information from the **Reporter** if necessary.
    - **Coordinator**/**Developer**: Request a [CVE](https://docs.github.com/en/code-security/repository-security-advisories/about-github-security-advisories-for-repositories#cve-identification-numbers) from GitHub. The CVE Number will be private until the advisory is published.
    - **Developer**: Work on the [vulnerability fix PR](https://docs.github.com/en/code-security/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability#creating-a-temporary-private-fork)
    - Once the fix is agreed upon, wait for the CVE number to be issued.
    - **Coordinator**: Notify the **Reporter** of the CVE number. Anyone may mention the CVE number publicly with the affected software name (without revealing version numbers).
    - **Developer & Coordinator**: Decide on release and announcement dates and post them the draft advisory.  These are typically at least a week apart to allow administrators to deploy fixes.
  - **Coordinator**: Post the release and announcement dates on the Jupyter Security [Mailing List]([security@ipython.org](mailto:security@ipython.org))
  - **Developer**: Merge the security fix PR
  - **Developer**: Make a release to PyPI and/or npm with no announcement or change log
  - **Coordinator**: Publish the security advisory on the announcement date.  GitHub will post the CVE to the MITRE database
- **Coordinator**: Notify the **Reporter** of the releases
- **Coordinator**: Close the issue in the tracking repository

### Note to Developers

Be aware that GitHub CI workflows won't run on security forks, so reviewers must test manually to avoid a broken CI when the patch is merged to the public repo. Also, vulnerabilities may involve multiple private security forks across different GitHub organizations. This may require additional manual steps to include those private forks.


