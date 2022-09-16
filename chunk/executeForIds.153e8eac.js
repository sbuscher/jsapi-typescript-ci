import { dl as n$1, fK as S, cO as b, ik as p } from '../index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(n,s,m){const p=n$1(n);return S(p,b.from(s),{...m}).then((o=>o.data.count))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function s(s,e,m){const n=n$1(s);return p(n,b.from(e),{...m}).then((o=>o.data.objectIds))}

export { n, s };
//# sourceMappingURL=executeForIds.153e8eac.js.map
