# Exchange content

HEP Training can import content from a range of external sources.
When the source is also based on HEP Training, there are additional features which allow you to customise and automate the exchange, thanks to the [mTeSS-X project](./mtess-x).

```{image} ../images/content/graphic-exchange.svg
:alt: Graphic of multi-spaces
:class: mb-1
:width: 300px
:align: center
```

## How do I set up an automated exchange?

You may take the following steps to setup automated exchange between two HEP Training based catalogues (a **source** and a **destination**):

1) Ensure that you have the correct permissions. To set up the exchange of materials, you need to be a site [admin](/roles/#administrator), or the [owner of a 'content provider'](/roles/#content-provider-owner-editor), of the destination [TeSSHub](/definitions/#term-tesshub) (where the content should end up). You are the owner of content providers that you create.
2) Go to the source [TeSSHub instance](/definitions/#term-instance) (where the training should come from) and understand what metadata (set of filters) is used there to describe the particular set of training content that should be exchanged.
3) In the source instance, at the top of the list of training materials, go to the 'Subscribe' menu, click 'Harvest using OAI-PMH', and copy the OAI-PMH link. If not found on the TeSSHub instance, it may not include the latest changes, then ask the administrator to update the platform.
4) Go to the content provider in the target TeSSHub instance (where the exchanged content should be associated with), open the 'Sources' tab then click the 'Add source' button.
5) Enter the URL that you copied in step 3 into the URL field and select 'OAI-PMH' as the ingestion method.
6) If you are ready for the materials to be automatically exchanged, check the 'Enabled' checkbox; otherwise, if you just want to create the source as a draft, don't check this checkbox. If you are an administrator, you may also directly set the new source as 'Approved' to enable it. Everyone else will need to wait until an administrator approves the source before content starts to be exchanged.
7) You may add **filter conditions** (see list below) to not exchange the whole content of the source TeSSHub. Only content that satisfies all the conditions in the 'Allow' list and none of the conditions in the 'Block' list is exchanged. For more complex cases where either one set of conditions or another set of conditions but not necessarily all the conditions should be satisfied for exchange, feel free to create multiple sources for each set of conditions.
8) Save the source using the 'Register Source' button.
9) After the source is enabled and approved, you may expect content to be exchanged and kept up to date once per day, but this may depend on the configuration of the target TeSSHub instance.

The whole process is also shown in this video. In this example, training material on Python that is not for beginners is exchanged from ELIXIR TeSS to PaN-Training:

<https://zenodo.org/records/18926348>

Please note that the video may be slightly outdated in some cases. The instructions above may be more up to date.

## How do I set up an automated exchange from an other platform but HEP Training?

You can automate exhange into the HEP Training catalogue (a **destination**) starting from a non-TeSS based catalogue (a **source**), if the catalogue supports [OAI-PMH](https://www.openarchives.org/pmh/).
The [mapping of properties from DC terms to TeSS](#which-filters-can-i-use-to-exchange) is defined above.
Step 3 will need to be modified slightly depending on your particular catalogue platform.
To setup automated exchange, you may take the following steps:

1) Ensure that you have the correct permissions. To set up the exchange of materials, you need to be a site **admin**, or the **owner of a 'content provider'**, of the destination TeSSHub (where the content should end up). You are the owner of content providers that you create.
2) Go to the source catalogue instance (where the training should come from) and understand what metadata (set of filters) is used there to describe the particular set of training content that should be exchanged.
3) In the source instance, find and copy an OAI-PMH link.
4) Go to the content provider in the target TeSSHub instance (where the exchanged content should be associated with), open the 'Sources' tab then click the 'Add source' button.
5) Enter the URL that you copied in step 3 into the URL field and select 'OAI-PMH' as the ingestion method.
6) If you are ready for the materials to be automatically exchanged, check the 'Enabled' checkbox; otherwise, if you just want to create the source as a draft, don't check this checkbox. If you are an administrator, you may also directly set the new source as 'Approved' to enable it. Everyone else will need to wait until an administrator approves the source before content starts to be exchanged.
7) You may add **filter conditions** to not exchange the whole content of the source TeSSHub. Only content that satisfies all the conditions in the 'Allow' list and none of the conditions in the 'Block' list is exchanged. For more complex cases where either one set of conditions or another set of conditions but not necessarily all the conditions should be satisfied for exchange, feel free to create multiple sources for each set of conditions.
8) Save the source using the 'Register Source' button.
9) After the source is enabled and approved, you may expect content to be exchanged and kept up to date once per day, but this may depend on the configuration of the target TeSSHub instance.

## Which filters can I use to exchange?

HEP Training provides a selection of the most useful filters to customise which materials are exchanged.

| Filtered property in TeSS (*material or event*) | Exchanged property in Dublin Core    |
|:------------------------------------------------|:-------------------------------------|
| Target audience                                 | (None)                               |
| Keyword                                         | `dc:subject`                         |
| Title                                           | `dc:title`                           |
| Description (equals), Description (contains)    | `dc:description` convert to text     |
| URL (equals), URL (begins)                      | `dc:identifier` if http(s)           |
| DOI                                             | `dc:identifier` if DOI, store as URI |
| License  (*material only*)                      | `dc:rights`                          |
| Difficulty level                                | (None)                               |
| Resource type                                   | `dc:type` *                          |
| Prerequisites (contains)                        | (None)                               |
| Learning objectives (contains)                  | (None)                               |

*When exchanging materials using Dublin Core/[OAI-PMH](https://www.openarchives.org/pmh/), if the `dc:type` includes `http://purl.org/dcmitype/Event` then the item is imported as a TeSS event, else it is imported as a TeSS material. 

The following filters are available for *events only*:

| Filtered property in TeSS (event only) | Exchanged property in Dublin Core |
|:---------------------------------------|:------------------------|
| Subtitle (equals), Subtitle (contains) | (None) |
| City                                   | (None) |
| Country                                | (None) |
| Event type                             | (None) |
| Timezone                               | (None) |

The following properties can also be populated when exchanging materials but without filter controls:

| Non-filtered property in TeSS                   | Exchanged property in Dublin Core |
|:------------------------------------------------|:----------------------------------|
| Contact                                         | `dc:publisher`                    |
| Authors (*materials*), Organizer (*events*)     | `dc:creator`                      |
| Language (*event only*)                         | `dc:language`                     |
| Scientific Topics                               | `dc:subject`                      |
| Date created (*material*), Start date (*event*) | `dc:date` earliest date found **  |
| Date modified (*material*), End date (*event*)  | `dc:date` latest date found **    |

**When exchanging materials using Dublin Core/[OAI-PMH](https://www.openarchives.org/pmh/), if the item is interpreted as a TeSS event, the `dc:date` properties are sorted in date order, and the earliest date found becomes the start of the event, the latest date found becomes the end date of the event. If the item is interpreted as a TeSS material, these become the date created and date modified, respectively.

```{admonition} See also the definitions of these terms
:class: seealso
* [HEP Training Defintions](/definitions)
```

---

*This new feature is possible thanks to the [mTeSS-X project](./mtess-x).*
