# Sources

Owners and editors of content providers in TeSS can register and manage Sources to be automatically ingested. A source consists of a URL for TeSS to fetch, and an "ingestion method" - which hints to TeSS how the contents of the URL should be processed.

Once registered, a source will need to be approved by an administrator before it is active, but can be tested to see exactly what metadata TeSS can extract from the source.

To register a source, click the "Sources" tab on your content provider page, or if you have not yet registered a content provider, see our page [Provider account creation](../accounts/provider).

::::{grid} 1 1 2 2
:gutter: 3

:::{grid-item-card}
Currently available **user-managed** ingestion methods:

- Bioschemas / Schema.org / schemas.science

:::
:::{grid-item-card}
Currently available **admin-managed** ingestion methods:

- [Google Sheets](#google-sheets)

:::
::::

For other methods, please [contact us](https://tess.elixir-europe.org/about/us#contact) to discuss how to register your content automatically in TeSS.

## Google Sheets

Our preferred options are for you to provide [structured data markup](structured-data-types) directly in the webpages that describe your training materials, or provide a single page with the markup for all the materials. This may not be possible, for example, if you have technical restrictions with your content management system.

We offer an alternative option for a user to provide a collection of training materials in a spreadsheet format, following our template. (This method currently does not support ingesting events.)  

To prepare and register a spreadsheet of materials to ingest:

1. Create a new Google Sheets spreadsheet.
2. Open the template Google Sheets spreadsheet: https://docs.google.com/spreadsheets/d/1yx2AZTPaPEU_Au2Hyb_C3TuNvH4btR9pZwCmfmTQRdc/.
3. Select everything from the `Example` sheet {kbd}`CTRL/CMD+A`, copy and paste it in your empty new sheet.
4. Enter the details of your training materials under the headings provided. 
  ````{margin}
  ```{warning}
  Some restrictions apply to specific columns, for example, the cells under the `Keywords` column must be a comma-separated list. See the list of restrictions in the [`DataDictionary` sheet](https://docs.google.com/spreadsheets/d/1yx2AZTPaPEU_Au2Hyb_C3TuNvH4btR9pZwCmfmTQRdc/edit?gid=2096797962#gid=2096797962).
  ```
  ````
5. One row corresponds to one training material, you can add as many rows/materials as you want.
6. Once your Google Sheets spreadsheet is ready, give the URL to your TeSS administrator and ask them to use it for the Materials Ingestion Method: CSV File and Google Spreadsheet.

TeSS will scan your spreadsheet once per day to ingest any new and changed training materials.