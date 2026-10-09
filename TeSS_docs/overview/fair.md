# How we support FAIR

High-Energy Physics training materials and events are widely dispersed and fragmented, making it challenging for users to identify relevant materials.

HEP Training is a web-based open-source platform consolidating resources from various providers into an easy-to-use portal.

It is a one-stop-shop for trainers and trainees to discover training materials, workshops, and online courses in relevant topics such as data management and open research methods.

For providers, the HEP Training Platform makes it easy to make resources [FAIR](http://doi.org/10.1038/sdata.2016.18) (Findable, Accessible, Interoperable, and Reusable):

- **Findable**:  A unique, persistent identifier such as [DOI](https://www.doi.org/the-identifier/what-is-a-doi/) is requested for all materials. (For example, [publish your materials in Zenodo](https://help.zenodo.org/docs/get-started/quickstart/) to be assigned a DOI.)
- **Accessible**: HEP Training materials/events are accessible via the HEP Training website, [widgets](/widgets-and-api#widgets) or [JSON API](/widgets-and-api#api). Your content will be more seen in search results owing to our search-engine optimisation (SEO).
- **Interoperable**: We expose content using Schema.org (Bioschemas), JSON-LD, and OAI-PMH open standards.
- **Reusable**: License is requested for all materials, such as Creative Commons.

## ORCID for accurately recognising authors of training materials

Training materials in HEP Training can be attributed to any number of authors (for substantial input) and contributors (for a smaller level of input).
When the author or contributor is a person, their ORCID can be included.

This free, unique, persistent identifier (PID) allows individuals to be uniquely distinguished and claim credit for their scholarship work, no matter how many people have a similar name.

When you [manually edit your training material in HEP Training](../content/manual-events-materials), as you type the name of each author or contributor, HEP Training will suggest a name and ORCID. If you are entering this person for the first time, paste their ORCID in the box after their name.
If your training material is [automatically ingested into HEP Training](../content/structured-data-types), you can add the ORCID URL of each person while [editing the resource](/manual-events-materials#edit-lock-fields). 

This will show into the Bioschemas markup under the `@id` or `identifier` property (either property will work). For example:

```json
{
  "author": [
    {
      "@type": "Person",
      "name": "Daniela Schneider",
      "identifier": "https://orcid.org/0000-0001-9536-5587",
      "@id": "https://orcid.org/0000-0001-9536-5587"
    }
  ]
}
```

## Interoperate using Linked Data

When you view a material or event on HEP Training, there is machine-readable metadata behind the human-readable content. 
If you were to view the HTML source of the page, you would see this code, written as [JSON-LD](https://json-ld.org/).  

```{image} ../images/overview/metadata-source.png
:alt: View Source to see the embedded metadata
:class: mb-1
:width: 300px
:align: center
```

Developers can access this schema.org/[Bioschemas](https://bioschemas.org)-compliant JSON-LD metadata, without the human-readable HTML, to use interoperate as [Linked Data](https://en.wikipedia.org/wiki/Linked_data). To do this, append `.jsonld` to the URL. For example:

- <https://heptraining.cern.ch/events/15th-hep-c-course-and-hands-on-training-advanced-c.json_api>

...becomes

- https://heptraining.cern.ch/events/15th-hep-c-course-and-hands-on-training-advanced-c.jsonld
