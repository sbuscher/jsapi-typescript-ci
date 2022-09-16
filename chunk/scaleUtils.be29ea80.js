import { c5 as z, dD as d } from '../index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e=96;function r(r,i){const o=i||r.extent,c=r.width,u=z(o&&o.spatialReference);return o&&c?o.width/c*u*d*e:0}function i(r,i){return r/(z(i)*d*e)}

export { i, r };
//# sourceMappingURL=scaleUtils.be29ea80.js.map
