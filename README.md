# Sample @arcgis/core ES Module TypeScript App

## Setup

```bash
npm i -g typescript  
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
npm i httpserver --savedev
```

## Other Samples

ESRI [jsapi-custom-widgets](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-custom-widget)
See [Setting up your TypeScript Environment](https://developers.arcgis.com/javascript/latest/typescript-setup/) for full details.