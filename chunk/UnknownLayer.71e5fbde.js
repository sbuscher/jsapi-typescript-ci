import { dU as v, dV as O, k7 as v$1, $ as e, a0 as d, a1 as n, dZ as b, f as s } from '../index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let a=class extends(v(O(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unknown";}initialize(){this.addResolvingPromise(new Promise(((r,e)=>{v$1((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unknown layer type";r&&(s$1+=" "+r),e(new s("layer:unknown-layer-type",s$1,{layerType:r}));}));})));}read(r,o){super.read({resourceInfo:r},o);}write(){return null}};e([d({readOnly:!0})],a.prototype,"resourceInfo",void 0),e([d({type:["show","hide"]})],a.prototype,"listMode",void 0),e([d({json:{read:!1},readOnly:!0,value:"unknown"})],a.prototype,"type",void 0),a=e([n("esri.layers.UnknownLayer")],a);const c=a;

export { c as default };
//# sourceMappingURL=UnknownLayer.71e5fbde.js.map
