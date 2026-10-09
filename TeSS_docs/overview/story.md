# Research Software Story

## The Problem

### A central training catalogue for the High Energy Physics community

Finding relevant software, computing, and domain-specific training resources in High Energy Physics (HEP) was historically difficult, fragmented, and time-consuming. Training materials, workshops, and event listings were scattered across numerous institutional platforms, personal pages, and event management tools like [Indico](https://indico.cern.ch/) and the [CERN Document Server (CDS)](https://cds.cern.ch/). Researchers and software engineers spent unnecessary effort searching for suitable learning resources, while course organisers struggled to reach broader audiences across the HEP ecosystem.

HEP Training addresses this challenge by providing a unified, discoverable training catalogue tailored to the High Energy Physics community. Rather than hosting heavy training materials directly, the platform acts as a lightweight metadata aggregation portal. By scraping metadata from key platforms, HEP Training brings scattered events and learning resources into a single, searchable registry.

## The Community

### Connecting HEP researchers and software engineers with structured learning opportunities

HEP Training is formally supported under [CERN IT](https://information-technology.web.cern.ch/) and developed in close collaboration with the broader [TeSS open-source community](https://elixirtess.github.io/mTeSS-X/global). Primary maintenance and platform stewardship are currently led within CERN IT, with dedicated support committed through February 2028. The development ethos emphasises contributing improvements directly back to the upstream [TeSS project](https://github.com/ElixirTeSS/TeSS) whenever possible.

The primary user community consists of High Energy Physics researchers, research software engineers (RSEs), students, and training providers across all collaborating HEP institutes. Users range from newcomers seeking introductory software engineering materials to experienced researchers looking for specialised computing workshops. Training providers and trainers rely on the platform to increase the visibility and reach of their educational events across the international HEP domain.

## Technical Aspects  

HEP Training is a research software infrastructure service categorised as a training catalogue. Built upon the [open-source TeSS platform](https://github.com/ElixirTeSS/TeSS), it is written in Ruby on Rails and relies on Solr for fast, structured searching. Under the hood, the application manages metadata records using a PostgreSQL database (managed via CERN DBOD), with Sidekiq and Redis handling background job processing and metadata scraping tasks.

The platform's design is strictly lightweight, intentionally managing structured metadata rather than hosting full educational content assets. It systematically harvests and updates metadata scraped from external systems, transforming entries into standardised domain records.

### Libraries and Systems

Production instances are deployed within CERN's OKD/OpenShift infrastructure, integrated with CERN Single Sign-On (SSO) for authentication and DBOD for database hosting.

To maintain interoperability across research domains, metadata within the catalogue conforms to JSON-LD structured data formats following [Schema.org](http://schema.org/) and Bioschemas profiles. External sources are scraped as external content providers rather than hard system dependencies, and the system operates without relying on external mapping services such as Nominatim or Google Maps.

## Software Practices

### Maintaining close alignment with upstream TeSS through structured git workflows and CI

Development is managed across four public repositories hosted under the [`hep-training` GitHub organisation](https://github.com/hep-training/): [`TeSS` (the core platform)](https://github.com/hep-training/TeSS/), [`user-docs`](https://github.com/hep-training/user-docs), [`dev-docs`](https://github.com/hep-training/dev-docs), and [`helm-chart` (for deployment)](https://github.com/hep-training/helm-chart). The branching model strictly maintains `master` as a one-to-one mirror of the upstream TeSS repository, while the `heptraining` branch hosts the deployed instance. Developers adopt a 'TeSS-first' mindset, contributing generic features directly to upstream TeSS before merging `heptraining` to minimise divergence. HEP-specific customisations are introduced via targeted pull requests.

Code quality and stability are maintained through automated testing and continuous integration pipelines powered by GitHub Actions. Pull requests trigger containerised test suites to verify that all upstream and custom tests pass prior to merging.

## Community

### Streamlined local onboarding through Docker Compose and targeted documentation

New developers and contributors begin their journey by consulting the public developer documentation (`dev-docs`) and user guides (`user-docs`). Setting up a local development environment is designed to be straightforward using Docker.

Onboarding contributors are encouraged to explore tagged GitHub issues within the repository to identify bug fixes or small feature enhancements. Once changes are verified locally and pass containerised tests, contributions are submitted as pull requests for code review.

## Tools

### Static analysis, automated testing, and containerised deployment tools

Daily development and code quality are supported by RuboCop for Ruby style enforcement and Sorbet for static typing within supported IDEs. Integration and unit tests are written using `ActiveSupport::TestCase` and executed automatically within Docker containers using GitHub Actions workflows.

Deployment and orchestration across OKD/OpenShift environments are managed using a custom CLI utility housed in the `helm-chart` repository alongside production Docker Compose configurations (`docker-compose-prod.yml`). While monitoring tools like Grafana remain on the future backlog, upstream dependency tracking is supported via Dependabot.

## FAIR & Open

### Promoting open metadata exchange and findability across research ecosystems

* **Findable:** The codebase is publicly hosted on GitHub. Resources catalogued in HEP Training are formatted as structured JSON-LD using Schema.org and Bioschemas standards, ensuring high visibility in search engines and cross-platform indexing.
* **Accessible:** All application code, Helm charts, and documentation are openly accessible in public GitHub repositories. The platform metadata is freely readable through public UI endpoints and OAI-PMH feeds.
* **Interoperable:** The platform implements the OAI-PMH protocol as part of the mTeSS-X initiative, enabling seamless metadata exchange and federation across other TeSS instances and external scientific portals.
* **Reusable:** Software code is published under the open BSD 3-Clause licence, while aggregated training data and metadata are provided under the Creative Commons Attribution 4.0 International (CC-BY 4.0) licence.

## Documentation

### Targeted documentation repositories for end users, developers, and administrators

Comprehensive documentation is split cleanly across two dedicated public repositories to serve different audience needs. User-facing guides are maintained in [`user-docs`](https://github.com/hep-training/user-docs), explaining the interface, navigation, and material discovery features for end users.

Technical documentation for developers, sysadmins, and maintainers is housed in [`dev-docs`](https://github.com/hep-training/dev-docs). This includes detailed guides for local Docker setup, environment variable configurations, deployment workflows, and codebase architecture.

## Sustainability

### Institutional CERN IT backing backed by active community engagement

Long-term maintenance and infrastructure funding are anchored within CERN IT, ensuring operational stability and platform hosting until at least February 2028. Institutional backing provides solid foundation support for database administration, authentication systems, and cloud hosting infrastructure.

Sustainability is further fortified by active integration with the broader TeSS ecosystem. Maintainers participate in regular community syncs, including bi-weekly [TeSS Club meetings](https://elixirtess.github.io/about/) and weekly TeSS project meetings, aligning HEP Training developments with multi-institutional open-source software sustainability efforts.

## References

HEP Training builds upon core open-source infrastructure and domain standards established by the life sciences and HEP computing communities.

* **CHEP 2026 Presentation:** HEP Training from CHEP 2026 (proceedings forthcoming February 2027).
* **TeSS Publication:** Beard, N., et al. (2020). "TeSS: a platform for discovering life-science training opportunities." *Bioinformatics*, 36(10), 3290–3291. DOI: [10.1093/bioinformatics/btaa047](https://doi.org/10.1093/bioinformatics/btaa047).
* **mTeSS-X Project:** Federated TeSS Exchange Platform documentation. [elixirtess.github.io/mTeSS-X](https://elixirtess.github.io/mTeSS-X/index).
* **EVERSE Project:** European Virtual Institute for Research Software Excellence. [everse.software](https://everse.software/).
* **TeSS Community Meetings:** TeSS Club minutes and connection details ([Google Docs](https://docs.google.com/document/d/1nLa6ye6kYBuE0UJgRoqdSakZP94vb2RgQZssyvRCXig/edit?usp=sharing)) and TeSS Project Meetings ([mTeSS-X Contact](https://elixirtess.github.io/mTeSS-X/contact)).
