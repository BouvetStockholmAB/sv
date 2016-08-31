
# Team SiteVision official web page

Public website is located at [GitHub Pages](https://bouvetstockholmab.github.io/sv/).


## Dev. project setup

1. Install Node JS
2. Checkout project from Git
3. Open project folder in terminal
4. `$ npm install`
5. Install Ruby and Jekyll


## Working in dev project

### Code style

JS code style follows [jQuery Style Guide](https://contribute.jquery.org/style-guide/js/) JSCS preset with some whitespace exceptions (look in file .jscsrc).

Code style and hinting is done on build (JSCS & JSHint).


### Local development

`$ gulp` (equals `$ gulp watch`)

- Starts a local server at localhost:8080
- Watches for changes to JS and CSS files

`$ jekyll serve`

- Starts local webserver at localhost:4000
- Watches for changes to Markdown, HTML- and other
  static web page files. 
  
  This is the pages of the generated site. 


### Build and deploy

`$ gulp build`

- Builds minified JS- and CSS files for production to ./assets directory.

Deploy by committing and pushing to GitHub Pages.

