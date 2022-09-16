import { cj as j, aM as k, bm as fn, ck as rn } from '../index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(n){const i=n.spatialReference;if(i.isWGS84)return n.clone();if(i.isWebMercator)return j(n);const s=k.WGS84;return await fn(i,s),rn(n,s)}function i(e,t){if(!s(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t];}}function s(e,t){return !!e.typeKeywords?.includes(t)}function c(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1);}}async function a(e){const t=e.clone().normalize();let r;if(t.length>1)for(const o of t)r?o.width>r.width&&(r=o):r=o;else r=t[0];return n(r)}const f={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"};

export { a, c, f, i, s };
//# sourceMappingURL=portalItemUtils.89838d22.js.map
