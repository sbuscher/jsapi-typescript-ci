import { h5 as a$2, $ as e, a0 as d, a1 as n$2, ce as l, ar as v, h6 as b, dl as n$3, dC as e$1, U, w as r, f as s, bA as B } from '../index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function o(e,r,o){const n=a$2(r);return e.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let i$1=class extends l{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((r=>r.toJSON())),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:v(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};e([d()],i$1.prototype,"geometries",void 0),e([d({json:{read:{source:"outSR"}}})],i$1.prototype,"outSpatialReference",void 0),e([d()],i$1.prototype,"transformation",void 0),e([d()],i$1.prototype,"transformForward",void 0),i$1=e([n$2("esri.rest.support.ProjectParameters")],i$1);const a$1=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i=b(a$1);async function n$1(o$1,m,n){m=i(m);const u=n$3(o$1),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=v(m.geometries[0]),f=e$1(c,n);return U(u.path+"/project",f).then((({data:{geometries:r}})=>o(r,a,j)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function n(o=null,i){if(r.geometryServiceUrl)return r.geometryServiceUrl;if(!o)throw new s("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||B.getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new s("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s$1=new a$1;s$1.geometries=[r],s$1.outSpatialReference=t;const m=await n$1(c,s$1,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new s("internal:geometry-service-projection-failed")}

export { n as getGeometryServiceURL, a as projectGeometry };
//# sourceMappingURL=geometryServiceUtils.409101cd.js.map
