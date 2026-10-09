# Widgets and API

## Widgets

Widgets are chunks of javascript code that can be copied into website source code to display HEP Training content. There are several different styles and functionalities available from our configurable widget suite. Widgets can be used to enhance your site and offer your community lists of relevant events or training resources.

[View our available widgets](https://elixirtess.github.io/TeSS_widgets/)

```{admonition} Tutorial
:class: seealso
* [Integrating HEP Training widgets on your web site](https://elixir-europe-training.github.io/ELIXIR-TrP-TeSS/chapters/chapter_03/)
```

## API

HEP Training has a fully functioning JSON API. You can explore our JSON-API by appending `.json_api` to the end of the URL of most pages (excluding parameters). For example:

- <https://heptraining.cern.ch/events.json_api>
- <https://heptraining.cern.ch/materials.json_api?keywords=python>
- <https://heptraining.cern.ch/content_providers.json_api>
- <https://heptraining.cern.ch/events/15th-hep-c-course-and-hands-on-training-advanced-c.json_api>

To get schema\.org/[Bioschemas](https://bioschemas.org) JSON-LD representation of individual materials or events, append `.jsonld` instead:

- https://heptraining.cern.ch/events/15th-hep-c-course-and-hands-on-training-advanced-c.jsonld

The full documentation for the HEP Training JSON API can be found here:

{button}`View the JSON-API documentation<https://heptraining.cern.ch/api/json_api>`

If you already use the old API, technical information is still available in the [legacy API documentation](https://heptraining.cern.ch/api/legacy).
