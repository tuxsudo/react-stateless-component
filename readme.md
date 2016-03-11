# React Stateless Component Template

React stateless component scaffolding for authoring components independent of a project.


## Development

### Features

*   es6 & stage2 support
*   unit testing via tape and enzyme
*   linting via eslint
*   UI testing via webpack-dev-server


### Commands

*   `npm start` to run a dev server to view changes during development (port:8080)
*   `npm test` to run unit tests.
*   `npm run lint` to lint files.
*   `npm run ssr` to view a server-side rendered view of the component (port:8081)


### Authoring

Edit the contents of the [src](src) directory.


### Files

*   [./src/index.js](./src/index.js): main JSX export
*   [./src/style.css](./src/style.css): components main style
*   [./src/data.js](./src/data.js): the default props for the component
*   [./src/test.js](./src/test.js): unit test for the component
*   [./src/demo.js](./src/demo.js): a JSX demo of the component



## Required Loaders

For this component to be consumed and bundled in a project, the project consuming this module must enable the following webpack loaders (or equivalent).

*   babel-loader configured with stage2 & react, and react-require plugins
*   style-loader, css-loader, postcss-loader, postcss-import, postcss-cssnext
*   file-loader
