# Sources

```{admonition} Restricted to registered users and about source visibility
By default, source registration is only available to [registered users](../accounts/user#register).

Then, any registered source is automatically set with an 'Approval Status' of 'Not approved', you must ask for approval in order for the source to be active (i.e., starts to fetch the resources metadata and create materials and events). Sources are never displayed to other users but you and administrators/curators.
```

Owners and editors of [content providers](../accounts/content-provider) in HEP Training can register and manage sources to be automatically ingested. A source consists of a URL for HEP Training to fetch, and an [ingestion method](#ingestion-methods) which hints to HEP Training how the contents of the URL should be processed.

Once registered, a source will need to be approved by an administrator before it is active, but can be tested to see exactly what metadata HEP Training can extract from the source.

## Procedure to automatically register sources

1. Click the 'Sources' tab > 'Add source' button on your content provider page, or if you have not yet registered a content provider, see our page [Register a Content provider](./content-provider#register).
2. For URL and Ingestion Method, follow the procedure of the specific ingestion method below.

  ```{admonition} Currently available ingestion methods
  - [Schema\.org / schemas\.science (any)](#ingestion-method-bioschemas)
  - [OAI-PMH (any)](#ingestion-method-oai-pmh)
  - [Indico (events)](#ingestion-method-indico-ics-file)
  - [CDS Videos (materials)](#ingestion-method-cds-videos-record-or-search)
  - [GitHub (materials)](#ingestion-method-github-repository-or-page)
  - [Google Spreadsheet (materials)](#ingestion-method-csv-file-and-google-spreadsheet)
  ```

3. Select the default language
4. Tick Enabled to enable the ingestion, you can come back anytime here to disable the automatic ingestion of the source.
5. Filters: you can allow and block any value found in a property. For example, if you are ingesting an [Indico category](#ingestion-method-indico-ics-file) and you only want events with the word 'workshop' in the title, then in the 'Allow list', 'Add filter condition', select the 'Property': 'Title contains', for 'Value' write 'workshop'. (To see the definition of the terms, [see Definitions](./definitions))
6. Register the source
7. In your source page, go to the 'Testing' tab, click on 'Test Source' wait a moment, after maximum 30 seconds it should show the expected results – see if the filters worked, or if it fetched all relevant metadata for example. If there is something unexpected, send us an email at <contact.heptraining@cern.ch>.
8. Once you are happy with it, you can 'Request Approval' in the 'Source' tab. An administrator will look at your source and accept or reject your request.
9. If your source gets approved, the individual resources will be ingested the day after and will need to pass under a [curation](../advanced/curation) process before being finally visible to the public.

### Ingestion Method: `Bioschemas`

Ingests `materials` or `events`.

1. You must add the descriptve metadata (JSON-LD) in the source code of your webpage as shown in [this example](./structured-data-types#concrete-example). Then modify the relevant fields and delete the ones which do not / cannot describe your resource. If you can't modify your webpage source code, ask your webmaster. There is the [Google Spreadsheet ingestor](#ingestion-method-csv-file-and-google-spreadsheet) in case this does not work.
2. For URL, you can either add the link to your training resource OR the [sitemap](./structured-data-types#sitemaps) pointing to all the webpages being described with a JSON-LD. For example, [HSF training materials](https://hsf-training.org/training-center/) are fetched because they do have a sitemap: <https://hsf-training.org/training-center/sitemap.txt>.

### Ingestion Method: `OAI-PMH`

See whole procedure in the [exchange content](./exchange) page.

### Ingestion Method: `Indico / .ics file`

Ingests `events`.

Be sure that the URL is public! For URL, you can either add:

- a single 'event' (e.g., <https://indico.cern.ch/event/1662800/>),
- or the *lowest* 'category' (e.g., <https://indico.cern.ch/category/2986/>) to fetch all the subsequent events.

```{warning} Not supported yet
Currently, the Indico ingestor cannot crawl a category having multiple categories, e.g., <https://indico.cern.ch/category/2985/>
```

### Ingestion Method: `CSV file and Google Spreadsheet`

Ingests `materials`.

We offer an alternative option for a user to provide a collection of training materials in a spreadsheet format, following our template.

To prepare and register a spreadsheet of materials to ingest:

1. Create a new Google Sheets spreadsheet.
2. Open the template Google Sheets spreadsheet: https://docs.google.com/spreadsheets/d/1yx2AZTPaPEU_Au2Hyb_C3TuNvH4btR9pZwCmfmTQRdc/.
3. Select everything from the `Example` sheet {kbd}`CTRL/CMD+A`, copy and paste it in your empty new sheet.
4. Enter the details of your training materials under the headings provided.

  ```{warning}
  Some restrictions apply to specific columns, for example, the cells under the `Keywords` column must be a comma-separated list. See the list of restrictions in the [`DataDictionary` sheet](https://docs.google.com/spreadsheets/d/1yx2AZTPaPEU_Au2Hyb_C3TuNvH4btR9pZwCmfmTQRdc/edit?gid=2096797962#gid=2096797962).
  ```

5. One row corresponds to one training material, you can add as many rows/materials as you want.
6. Once your Google Sheets spreadsheet is ready, add it as a URL.

```{warning} Not supported yet
This method currently does not support ingesting events.
```

### Ingestion Method: `CDS videos record or search`

Ingests `materials`.

For URL, you can either add:

- a 'record' (e.g., <https://videos.cern.ch/record/3003573>),
- or a search page (e.g., <https://videos.cern.ch/search?page=1&size=21&q=&category=LECTURES&collections=Lectures::CERN%20Accelerator%20School>) to fetch all the found records.

### Ingestion Method: `GitHub Repository or Page`

Ingests `materials`.

For URL, you can either add:

- a GitHub page (e.g., <https://hsf-training.github.io/hsf-training-unix-shell>),
- or a GitHub repository (e.g., <https://github.com/hsf-training/cpluspluscourse>)

```{warning}
GitHub limits up to 60 requests per hour for unauthenticated user ([source](https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#primary-rate-limit-for-unauthenticated-users)). As soon as you will click on 'Test Source', you will burn 4 requests for HEP Training necessary to get the relevant metadata. Please be mindful of this, reasonable and responsible.
```

### Other

For other ingestion methods, please send us an email at <contact.heptraining@cern.ch> to discuss how to register your content automatically in HEP Training.
