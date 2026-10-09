# Definitions

Definitions of terms and user roles used across TeSS.

## Overall terms and concepts 

Definition of common terms used across TeSS, sorted alphabetically.

```{glossary}

Collection
    Collections can be thought of as folders in which users may collect particular training materials or events, from the full catalogue available within TeSS to address their specific training needs. 
    See [Collections in TeSS](../content/collections) for details.

Content provider
    Entities (such as academic institutions, non-profit organisations, portals) that provide training materials of relevance.

e-Learning
    e-Learning materials are curated materials focused on e-Learning. 

ELIXIR TeSS Portal
    The [ELIXIR TeSS](https://tess.elixir-europe.org/) portal, the training registry for Europe's distributed infrastructure for life-science data, is built using the TeSS Platform.

Event
    An event in TeSS is a link to a single training event sourced by a provider along with description and other meta information (e.g. date, location, audience, ontological categorization, keywords). 
    In SciLifeLab TeSS, this is called a Course.  <br>
    Training events can be added manually or automatically harvested from a provider's website.

Exchange (TeSS-X)
    If a community runs its own instance then a TeSS-X plugin sets up an exchange with other instances.
    In the mTeSS-X project, we will show how several TeSS-instance catalogues exchange nominated training resources. 
    See [What do we mean by eXchange?](https://elixirtess.github.io/mTeSS-X/exchange) on the mTeSS-X project website for details.

Instance
    One installation of the TeSS Platform, on a server, managed by a technical administrator. An instance may have multiple spaces, if this option has been enabled by the administrator.  <br>
    Examples of TeSS instances can be viewed on the [global usages page](global).

Learning path
    A a pathway that guides learners through a set of modules (courses/materials) to be undertaken progressively (from lower- to higher-order thinking skills) to acquire the desired knowledge and skills on a subject by the end of the pathway. 
    See [Learning paths in TeSS](../content/learning-paths) for details.

mTeSS-X 
    The [mTeSS-X Project](mtess-x) (Multi-space Training e-Support System with eXchange) overcomes the fragmentation of training resources across Research Infrastructures and the European Science Clusters.
    The project aims to enhance existing TeSS-based training registries or catalogues like [ELIXIR TeSS (life sciences)](https://tess.elixir-europe.org/) and [PaN-Training (photon and neutron)](https://www.panosc.eu/training-catalogue/) by building an aggregator for these and similar platforms.

Space (mTeSS)
    A single TeSS instance can present multiple tailored spaces (catalogues) whose selections of training material are “views” on a global catalogue. 
    Each community registers, maintains and curates their material for their members in their own virtual space in the common portal environment.
    See [Introduction to spaces](../spaces/intro-spaces) for details.

Group
    A group is an entity which is used to control access to private spaces. A group can have multiple owners, who can add and remove people from a group.
    See [Introduction to groups](../groups/intro-groups) for details.

TeSSHub
    The strategic name for a TeSS instance with multiple [spaces](#term-Space-mTeSS) 
    that can [exchange](#term-Exchange-TeSS-X) materials with other instances.
    The TeSSHub is one of the outputs from the mTeSS-X project, 
    where [ELIXIR TeSS (life sciences)](https://tess.elixir-europe.org/) 
    and [PaN-Training (photon and neutron)](https://www.panosc.eu/training-catalogue/) 
    will be running multipe spaces from the same server, appearing as distinct catalogues, 
    and can share relevant materials. <br>
    Communities may be welcome to [request their own space](../spaces/instance-or-space/)
    on a TeSSHub, providing them with their own registry, 
    without the need to host and maintain their own instance.  

TeSS Platform
    The main codebase which is used for development, written in Ruby on Rails. The code is open source and [available on GitHub](https://github.com/ElixirTeSS/TeSS) under a BSD 3-Clause licence. 

Training material
    In the context of TeSS, a training material is a link to a single online training material sourced by a content provider (such as a text on a Web page, presentation, video) along with description and other meta information (e.g. ontological categorization, keywords). <br>
    Materials can be added manually or automatically harvested from a provider's website.
    
Workflow
    Training workflows in TeSS are visual, step-by-step protocols that allow users to navigate materials in TeSS in topic- or task-related ways. 
    For example, they may encapsulate typical stages of particular kinds of data analysis (protein sequence analysis, structure analysis, etc.), where each stage/node in the workflow represents a given analysis step and links to the corresponding training resources. 
    See [Workflows in TeSS](../content/workflows) for details.
```

## Materials

Definitions of fields used to describe training materials, sorted in the order they appear when editing a material.

```{glossary}
Title
    A concise sentence that clearly indicates the topic of the training material. 
    It should provide context and help learners understand what the material will cover.

Description
    A short, informative summary that outlines the purpose, scope, key topic and of the training material. 
    It should help the learners and instructors understand the content and relevance of the training before engaging with it.

Resource Type
    The predominant category that describes the kind of learning material, for example, a presentation, video, handout, publication, poster.

Scientific Topics
    The scientific subject or field that the training material focuses on, for example, bioinformatics, genetics, biodiversity, genomics. 
    In ELIXIR TeSS, this field uses the [EDAM ontology](https://edamontology.github.io/edam-browser/). 
    In PaN-Training, this field uses the [PaNET ontology](https://github.com/pan-ontologies/PaNET).

Keywords
    Free text about topics clearly identifying the training material.

License
    The most appropriate license that specifies the terms under which your training material and dataset can be used, modified, and distributed. 
    Various [options of licenses are available to choose from](https://spdx.org/licenses/), 
    for example, [Creative Commons Attribution 4.0 International](https://spdx.org/licenses/CC-BY-4.0.html). 

Status
    The current state or stage of the training material indicating whether it is Active, Under development, or Archived.

Contact
    The individual responsible for communication regarding the training material, typically including name, affiliation, email address, and an ORCID identifier if possible.

DOI (Digital Object Identifier)
    A unique, persistent alphanumeric string assigned to the training material that provides a permanent link to its location for long-term accessibility and citation tracking.

Version
    A specific iteration or release of the training material document, labeled to track updates (for example, v1.0, v2.1).

Content Provider
    The organisation, institution, or individual responsible for providing, and maintaining the training material.

Authors
    Individuals who made substantial intellectual or technical contributions to the conception, design, execution of the training material.
    This field supports freetext name and [ORCID](https://orcid.org/).

Contributor
    Individuals or entities who provided specific assistance, technical input, data, or materials to the work but may not meet the full criteria for authorship.
    This field supports freetext name and [ORCID](https://orcid.org/).

Target Audience
    The intended group of users or learners for whom the training material is designed, such as researchers, students, postdocs, trainers.

Prerequisites
    The foundational knowledge, skills, or competencies that a learner or user must possess before engaging with the training content.

Competency Levels
    Gradations of expertise or proficiency expected of learners or users, categorised as beginner, intermediate, or advanced.

Learning Objectives
    Clearly defined, measurable statements describing the specific knowledge, skills a learner should acquire after completing the training course.

Events
    Workshops, seminars, conferences, summer or winter schools that contribute to or disseminate the training.

Operations
    Functions that process a set of inputs and result in a set of outputs. 
    In ELIXIR TeSS, this field uses the [EDAM ontology for Operation](https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Foperation_0004?lang=en). 

```


## Events

Definitions of fields used to describe events, sorted in the order they appear when editing an event.

```{glossary}
Type
    Describing the whether the event will be held Face-to-face, Online or both (hybrid).
 
Subtitle
    Include a subtitle to add context for your intended audience.

URL
    Location where the event and its details are advertised on the internet.
 
Duration
    How long the training event will run for, in hours and minutes (HH:MM).
 
Language of instruction
    The language in which the training/seminar/lecture will be delivered. 
    Select from the list of available options.
 
Address, Venue, City, Region, Postcode
    Physical location of the event if its being conducted Face-to-face.
 
Eligibility
    Who can attend the training event.  
    To be chosen from one of the three: 
    - First come first served
    - Registration of Interest
    - By invitation
 
Organiser
    Institution/Organisation or the individual coordinating to organise the event.
 
Host institutions
    Institution/Organisation where the event will be held. 
 
Capacity
    Maximum number of participants that can take part in the event.
    Leave blank if there is no limit.
 
Event type
    The category of an event based on its purpose, format, and activities. 
    Can be chosen from the following options:
    - Awards and prizegivings
    - Meeting and conference
    - Receptions and networking
    - Workshops and courses
 
Tech requirements
    Indicate the technical requirements needed to participate in the training event.

Credit or Recognition of Attendance
    Provide a description of any qualifications, awards, certificates, diplomas, or other educational credentials that will be awarded on successful completion of the training event.

External resources
    Include links to tools, policies, standards or databases to associate with this resource.
    For ELIXIR TeSS, you can search [FAIRsharing](https://fairsharing.org/), the [ELIXIR Tools and Data Services Registry](http://bio.tools/), or enter a title and URL. 

Cost basis
    Select the basis by which costs, if any, are applied. Select from:
    - Free to all
    - Cost to non-members
    - Cost incurred by all

Materials
    Add any training materials that are associated with the training event.

Nodes (ELIXIR Specific)
    The ELIXIR Node (Country) hosting the event 
 
Sponsors
    Institution/Organisation or funding bodies that funded that event.

```


## Workflows

Definitions of additional fields used to describe workflows, sorted in the order they appear when editing a workflow. See also [definitions of fields used in materials](#materials).

```{glossary}

Associations
    Include any training material, event, tool or policy that is associated with the workflow.
    For each association, provide a title and a URL.
```

## Searching

Definitions of filters and other controls that show when searching for training.

```{glossary}

Only show online events
    Hide events that are marked as Face-to-face. False by default.
    
Show events/materials from all spaces
    Show training that match your search criteria from all spaces on this TeSS instance, not just the current space. False by default.

Show past events
    Show events where the date is in the past. False by default.
    
Show disabled events/materials
    Show training where the provider has chosen not to show the event yet in search results, perhaps because the event entry is still in development. False by default.

Show hidden items
    This filter is for curators only. Show training created by unverified users, and users that have been flagged as spammers. False by default.

Show archived materials/learning paths/collections
    Show training where the provider has set the [status](#term-Status) as Archived.  False by default.

```

## User profile

Definitions of public user details associated with a TeSS use account.

```{glossary}

First name
    Your first name.

Last name
    Your last name.

Website
    Your individual, professional website.

ORCID
    Your [ORCID](https://orcid.org/): a free, unique, persistent identifier (PID) that allows individuals to be uniquely distinguished and claim credit for their scholarship work, no matter how many people have a similar name.
    You can authenticate your ORCID from the button on your user profile page.

Image
    The image displayed with your profile is the Gravatar image associated with the provided contact email address, unless you upload another image. 
    Gravatar provides a way to link an avatar to an email address so that it can be used across sites and platforms. 
    To set-up a linked avatar, go to the [Gravatar site](https://en.gravatar.com). 

Contact email address
    Your email address to receive essential service messages such as a password reset.

```

## Roles

Definitions of user roles in TeSS. 

```{glossary}
Administrator
    The technical administrator, responsible for installation, configuration and maintenance of a TeSS instance.

Author
    Individuals and organisations involved in the preparation, creation or presentation of the published work.

Collaborator
    An individual who has been granted editing rights to a material, topic or learning path by the individual (owner) who created it.

Contributor 
    Individuals and organisations that contributed to the published work but are not authors.

Curator
    An individual who has been granted permission to create a learning path in TeSS while following their community’s editorial process, or edit the materials associated with a content provider or node.

Editor (of a content provider)
    A person with editing rights to a content provider.

Owner
    An individual who has created a material, topic or learning path in TeSS.

Space Manager
    The person responsible for managing a space within an instance.
```