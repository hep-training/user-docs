# Structured data types

To register resources in HEP Training automatically, we need to be able to extract data from target sources reliably. 
To this end, it is helpful if the data is structured according to some kind of standard format.

The following are examples of the kinds of structured data that HEP Training can work with.

## Schema\.org

```{admonition} TL;DR
schema\.org is a kind of standard to describe through metadata a website content using controlled vocabulary/fields/key-values. HEP Training can read this 'mark-up'/'metadata describing a resource' that can be found in the HTML code of a website. Because not everything is described properly using schema\.org, Bioschemas and schemas\.science are complementary mark-ups that adds on top of schema\.org adding more 'Object descriptions'.
```

Schema.org is a project run by a consortium of search engines. It has created an extensive library of schemas (i.e., vocabulary) that web-masters can use to explicitly mark-up their websites content in order to improve search engine visibility and interoperability.

HEP Training can use also two other initiatives that supplement the work of schema\.org:

- [Bioschemas](https://bioschemas.org) which aims at improving the findability of online resources in the life sciences.

  ```{warning} Why BIOschemas?
  *The only link between life sciences and HEP Training is that the latter originates from ELIXIR TeSS, the TeSS instance for life sciences ([see context here](introduction#originated-from-tess-developed-through-mtess-x-and-everse)). That's it.*
  ```

- schemas.science which aims at improving the findability on the Web of scientific research data, products and resources.

The two main activities of these two other initiatives are:

- Proposing new types and properties to Schema\.org to allow for the description of scientific research data, products and resources.
- Defining usage profiles over the Schema\.org types that identify the essential properties to use in describing a resource.

HEP Training supports the following schemas\.science/Bioschemas profiles:

::::{grid} 1 2 3 3
:gutter: 3

:::{grid-item-card}
for events that are courses
- [CourseInstance](https://bioschemas.org/profiles/CourseInstance/1.0-RELEASE)
- [Course](https://bioschemas.org/profiles/Course/1.0-RELEASE)
:::
:::{grid-item-card}
for other events
- [Event](https://bioschemas.org/profiles/Event/0.3-DRAFT)
:::
:::{grid-item-card}
for training materials
- [TrainingMaterial](https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE)
:::
::::

### Concrete example

All training materials and events in HEP Training are described using this schema\.org mark-up. If you are browsing a material in HEP Training, for example: [Hsf Training Unix Shell](https://heptraining.cern.ch/materials/hsf-training-unix-shell), right click anywhere, select 'View Page Source', and you will see this chunk:

```json
<script type="application/ld+json">
    {
        "@context": "http://schema.org",
        "@id": "https://heptraining.cern.ch/materials/hsf-training-unix-shell",
        "@type": "LearningResource",
        "dct:conformsTo": {
            "@type": "CreativeWork",
            "@id": "https://bioschemas.org/profiles/TrainingMaterial/1.0-RELEASE"
        },
        "name": "Hsf Training Unix Shell",
        "learningResourceType": [
            "Github Page"
        ],
        "url": "https://hsf-training.github.io/hsf-training-unix-shell/",
        "description": "The Unix shell has been around longer than most of its users have been alive. It has survived because it’s a powerful tool that allows users to perform complex and powerful tasks, often with just a few keystrokes or lines of code. It helps users automate repetitive tasks and easily combine smaller tasks into larger, more powerful workflows.\r\nUse of the shell is fundamental to a wide range of advanced computing tasks, including high-performance computing. These lessons will introduce you to this powerful tool.\r\nThis training module is part of the HSF Training Center, a series of training modules that serves HEP newcomers the software skills needed as they enter the field, and in parallel, instill best practices for writing software.\r\n(...) [Read more...](https://hsf-training.github.io/hsf-training-unix-shell/00-setup.html)",
        "keywords": [
            "hsf-training",
            "unix",
            "shell",
            "cli",
            "terminal",
            "file systems"
        ],
        "author": [
            {
            "@type": "Person",
            "name": "Michel Hernandez Villanueva",
            "identifier": "https://orcid.org/0000-0002-6322-5587",
            "@id": "https://orcid.org/0000-0002-6322-5587"
            }
        ],
        "contributor": [
            {
            "@type": "Person",
            "name": "Callum McCracken"
            }
        ],
        "provider": [
            {
            "@type": "Organization",
            "name": "HEP Software Foundation",
            "url": "https://hsf-training.org/training-center/"
            }
        ],
        "audience": [
            {
            "@type": "Audience",
            "audienceType": "early career researcher"
            },
            {
            "@type": "Audience",
            "audienceType": "researcher"
            },
            {
            "@type": "Audience",
            "audienceType": "student"
            },
            {
            "@type": "Audience",
            "audienceType": "software developer"
            }
        ],
        "about": [
            {
            "@type": "DefinedTerm",
            "@id": "http://edamontology.org/topic_3316",
            "inDefinedTermSet": "http://edamontology.org",
            "name": "Computer science",
            "url": "http://edamontology.org/topic_3316"
            }
        ],
        "dateCreated": "2025-02-10",
        "dateModified": "2026-06-07",
        "datePublished": "2025-08-25",
        "creativeWorkStatus": "active",
        "license": "https://spdx.org/licenses/CC-BY-4.0.html",
        "educationalLevel": "beginner",
        "competencyRequired": [
            "This lesson guides you through the basics of file systems and the\r\nshell. If you have stored files on a computer at all and recognize\r\nthe word "file” and either "directory” or "folder” (two common words\r\nfor the same thing), you’re ready for this lesson.\r\nIf you’re already comfortable manipulating files and directories,\r\nsearching for files with grep and find, and writing simple loops\r\nand scripts, you probably want to explore the next lesson:\r\nshell-extras."
        ],
        "teaches": [
            "- Explain how the shell relates to the keyboard, the screen, the operating system, and users’ programs.\r\n- Explain when and why command-line interfaces should be used instead of graphical interfaces."
        ]
    }
</script>
```

As you can see, this material has been extensively described, allowing the resource to be fully understandable by visitors. If you wish to annotate your resources like that, you can take example of this one, or to have more guidance: <contact.heptraining@cern.ch>

## Sitemaps

To help HEP Training discover all the pages on a site that have schema.org/schemas.science markup, a [sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) should be used. Sitemaps are basically a directory listing of all the pages on your site.

::::{grid} 1 1 1 1
:gutter: 3

:::{grid-item-card}
Sitemaps are a well-established standard, and there should be sitemap libraries and plugins available for whichever software you are using to provide your site.
:::
::::

## Calendar

Many organisations use calendar applications to organise and display their events. These may be custom-made or, more likely, utilise applications like Google Calendar. Calendar applications maintain an underlying file for event storage and retrieval, typically in the iCal (.ics) format.

::::{grid} 1 1 1 1 
:gutter: 3

:::{grid-item-card}
HEP Training can extract event descriptions, dates and locations from iCal files.
:::
::::
