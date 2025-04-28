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

If you believe you've found a security vulnerability in a [Jupyter Subproject](https://jupyter.org/governance/list_of_subprojects.html),
you can either:
 - directly open a GitHub Security Advisory (GHSA) in the relevant repository
 - report it to [security@ipython.org](mailto:security@ipython.org) if opening a GHSA is not possible, or you are unsure
   where it will belong.


We do not currently run bug bounty programs, and do not currently reward
vulnerability discovery.

If you prefer to encrypt your security reports,
you can use [this PGP public key](assets/ipython_security.asc).


### Reports to avoid

If you are unsure it is always best to contact us, though as an open source
project maintained on volunteer time, we only have limited resources to spare,
so please be mindful of our time.

 - Avoid sending bare report of website scanning tools without some limited
   understanding saying you found a vulnerability:

    - Example: we receive regular report of js vulnerability or wrong CORS on
      static websites, mostly jupyter.org and other documentation on
      `*.readthedocs.io`. As static website those are not affected.
    - Better:
      - You ran a tool and think there is vulnerability because you are
        learning, include your uncertainty in the object/body of the message.
      - You are a security researcher: Verify the tool claim and try to develop
        a POC of exploiting the vulnerability/fixing it.

 - Avoid sending mass email to security@ipython.org,
   (especially with dozen of other emails from bug bounty program in CC)

 - Avoid asking us if we run a bug bounty program on private channel, or reward
   discovery, discuss it on the public forum.


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


## vendor assessments

Jupyter cannot provide, or fill in "Plan-Risk Assessment", "Hecvat", "Vpat" and
similar vendor assessing questionnaire.

You likely have been redirected to this section after contacting the  Jupyter
security team to fill in a questionnaire about the security best practice of your
Jupyter "vendor", and to assess the Jupyter "product".

The Jupyter Team and Jupyter Security team are not vendors, and cannot act as
a vendor. To be a vendor Jupyter would need to have a contractual relationship
with you, which we do not have.

Your questionnaire also likely ask how your 'vendor' store your informations
(user information, billing information, contact...); who has access to it; and
how they are vetted... etc. The Jupyter team does not have any contact or
billing information; nor do we collect; store or have access to any of the
information about how your Jupyter user use Jupyter, or what they do in Jupyter;
the Jupyter Team　is not aware either of who installs Jupyter.

 - If you use a service provider for Jupyter; they are your vendor, and can
   answer those questions.

 - If you self-host Jupyter, then it is likely to your IT team to fill in those
   assessment as all the data is controlled by your IT team.

 - If you still do need a vendor assessment we advise you to contact one of the
   many companies that provide Jupyter support; We cannot unfortunately give you
   names out of fairness.

