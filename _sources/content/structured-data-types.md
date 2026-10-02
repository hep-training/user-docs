# Structured data types

To register resources in TeSS automatically, we need to be able to extract data from target sources reliably. 
To this end, it is helpful if the data is structured according to some kind of standard format.

The following are examples of the kinds of structured data that TeSS can work with.

If your website currently includes no structured data, and you’d like your resources added to TeSS, we recommend using [Bioschemas](http://bioschemas.org/) to structure your site.

```{admonition} See also guidance from the ELIXIR Training Platform
:class: seealso
* [Automatic ingestion of events or material via Bioschemas](https://elixir-europe-training.github.io/ELIXIR-TrP-TeSS/chapters/chapter_04/)
```

## Schema .org / Bioschemas / schemas.science

Schema.org is a project run by a consortium of search engines. Schema.org has created an extensive library of schemas that web-masters can use to explicitly mark-up their websites content in order to improve search engine visibility and interoperability.

````{margin}
```{image} ../images/content/bioschemas-square.svg
:alt: Bioschemas logo
:width: 100px
```
````

Bioschemas is an initiative to supplement the work of schema.org to help improve the findability of online resources in the life sciences.

The two main activities of Bioschemas are:
- Proposing new types and properties to Schema.org to allow for the description of life science resources.
- Defining usage profiles over the Schema.org types that identify the essential properties to use in describing a resource.

TeSS supports the following Bioschemas profiles:

::::{grid} 1 2 3 3
:gutter: 3

:::{grid-item-card}
for events that are courses
- [CourseInstance](https://bioschemas.org/profiles/CourseInstance/1.0-RELEASE)
- [Course](https://bioschemas.org/profiles/Course/1.0-RELEASE)
:::
:::{grid-item-card}
for other events
- [Event](https://bioschemas.org/profiles/Event/0.2-DRAFT-2019_06_14)
:::
:::{grid-item-card}
for training materials
- [TrainingMaterial](https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE)
:::
::::

```{admonition} Not life sciences? 
:class: hint
If your domain is not life sciences, your materials can still use these Bioschemas profiles. See [schemas.science](https://schemas.science) for domain-agnostic profiles. The Course, CourseInstance and TrainingMaterial profiles in schemas.science are equivalent to the Bioschemas profiles of the same name. They all extend schema.org.
```


## Sitemaps

To help search engines (and TeSS) discover all the pages on a site that have Bioschemas markup, a [sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) should be used. Sitemaps are basically a directory listing of all the pages on your site.

::::{grid} 1 1 1 1 
:gutter: 3

:::{grid-item-card}
{fas}`laptop-code;sd-text-secondary` Sitemaps are a well-established standard, and there should be sitemap libraries and plugins available for whichever software you are using to provide your site.
:::
::::

## API

Application Programming Interfaces, or APIs, typically have endpoint URLs that, when accessed, return data in a common exchange format, such as JSON.


::::{grid} 1 1 2 2
:gutter: 3

:::{grid-item-card}
{fas}`plug;sd-text-secondary`  TeSS currently supports the APIs for:

- [Eventbrite](https://eventbrite.com/) - for events
- [Zenodo](https://zenodo.com/) - for materials
- Other TeSS instances - for events
:::
::::


## Calendar

Many organisations use calendar applications to organise and display their events. These may be custom-made or, more likely, utilise applications like Google Calendar. Calendar applications maintain an underlying file for event storage and retrieval, typically in the iCal (.ics) format.

::::{grid} 1 1 1 1 
:gutter: 3

:::{grid-item-card}
{fas}`calendar-days;sd-text-secondary` TeSS can extract event descriptions, dates and locations from iCal files.
:::
::::
