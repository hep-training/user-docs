# Code and data for developers

TeSS is committed to the FAIR principles: making data findable, accessible, interoperable and re-usable. As such, all content in TeSS is available under the CC BY 4.0 licence, and can be accessed through our API and widgets. The TeSS codebase is also available to re-use under the BSD Licence, and can be found on GitHub.


::::{grid} 1 1 2 2
:class-container: text-center
:gutter: 3

:::{grid-item-card}

{octicon}`mark-github` **Software**
^^^

The source code for TeSS [is available on GitHub](https://github.com/ElixirTeSS/TeSS), under the [BSD 3-Clause](https://tess.elixir-europe.org/about/developers#api:~:text=available%20under%20the-,BSD%203%2DClause,-license.) license. 
We welcome [contributions](https://github.com/ElixirTeSS/TeSS/blob/master/CONTRIBUTING.md).
:::


:::{grid-item-card}

{fas}`plug;sd-text-secondary` **Data**
^^^

Data in TeSS can be accessed via our [API](#api), under the [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).
:::

::::


## Widgets
Widgets are chunks of javascript code that can be copied into website source code to display TeSS content. There are several different styles and functionalities available from our configurable widget suite. Widgets can be used to enhance your site and offer your community lists of relevant events or training resources.

```{button-link} https://elixirtess.github.io/TeSS_widgets/
:color: primary
View our available widgets
```

```{admonition} See also guidance from the ELIXIR Training Platform
:class: seealso
* [Integrating TeSS widgets on your web site](https://elixir-europe-training.github.io/ELIXIR-TrP-TeSS/chapters/chapter_03/)
```

## API

TeSS has a fully functioning JSON API. You can explore our JSON-API by appending `.json_api` to the end of the URL of most pages (excluding parameters). For example:

```
https://tess.elixir-europe.org/events.json_api
https://tess.elixir-europe.org/materials.json_api?scientific_topics=RNA-Seq
https://tess.elixir-europe.org/content_providers.json_api
https://tess.elixir-europe.org/workflows.json_api
https://tess.elixir-europe.org/materials/how-to-make-your-messy-data-usable-openrefine.json_api
```

To get [Bioschemas](https://bioschemas.org) JSON-LD representation of individual materials or events, append `.jsonld` instead:

```
https://tess.elixir-europe.org/materials/how-to-make-your-messy-data-usable-openrefine.jsonld
```

The full documentation for the TeSS JSON API can be found here:

```{button-link} hhttps://tess.elixir-europe.org/api/json_api
:color: primary
View the JSON-API documentation
```


## Developer guides

There are additional guides for installing and configuring a TeSS instance.

```{button-link} https://github.com/ElixirTeSS/TeSS/tree/master/docs
:color: primary
View the developer guides (on GitHub)
```