# Security policy

This is a static, client-side practice-exam app with no backend, no accounts, and no server-side data — the practical attack surface is small, but we still want to hear about real issues.

## Reporting a vulnerability

Please use GitHub's [private vulnerability reporting](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing/privately-reporting-a-security-vulnerability) for this repository (**Security** tab → **Report a vulnerability**) rather than opening a public issue. This lets us discuss and fix the issue before it's publicly visible.

> Private vulnerability reporting requires the repository to be public (or to have GitHub Advanced Security enabled). Until this repository is made public, **please report vulnerabilities by opening a regular issue and asking a maintainer to move the conversation somewhere private**, rather than posting exploit details in the open.

Please include:

- What you found and why it's a security issue (not just a bug)
- Steps to reproduce, if applicable
- The affected version/commit

We'll acknowledge reports as quickly as we can and keep you updated as we investigate and fix.

## Scope

In scope: anything that could compromise a visitor's browser session, leak data that should stay client-side, or abuse the deployed app in an unintended way.

Out of scope: the practice-question *content* being inaccurate or debatable — that's a normal content correction, not a security issue. See [CONTRIBUTING.md](CONTRIBUTING.md).
