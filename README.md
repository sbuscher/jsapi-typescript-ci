# Sample JSAPI ES Module TypeScript App

Displays a simple map.

The purpose of the sample application is twofold:

1. Create a site with TypeScript and the ArcGIS API for JavaScript.
1. Publish the site on GitHub using GitHub Actions.

## Setup

### Install

```bash
npm i
```

### From Scratch (No Project)

```bash
npm i --save-dev typescript  
npm i --save-dev rollup
npm i --save-dev @rollup/plugin-node-resolve
npm i --save-dev @rollup/plugin-commonjs 
npm i --save-dev @rollup/plugin-typescript
npm i --save-dev rollup-plugin-copy 
npm i --save-dev tslib
npm i @arcgis/core  
npm init --yes
tsc --init
mkdir jsapi-typescript-sample
mkdir src && touch src/index.tx
```

See `rollup.config.js`, `tsconfig.json`, and `package.json` for specific configurations.

## Build and Serve

```bash
npm run build
cd dist
npx httpserver
```

## GitHub Pages Deployment

- Build and deploy use [GitHub Actions](https://github.com/sbuscher/jsapi-typescript-sample/actions).
- Actions CI: `.\github\workflows\build.yaml`.
- `.\dist\.nojekyll` is created during the build. Otherwise a 404 error occurs when app downloads JavaScript files with an underscore prefix.  
- CI is set to run when pushing to the `main` branch.
- Publishes to `gh-pages` branch.
- Site: [https://sbuscher.github.io/jsapi-typescript-sample/](https://sbuscher.github.io/jsapi-typescript-sample/)
