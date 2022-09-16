import { dU as v, dV as O, k7 as v$1, $ as e, a0 as d, a1 as n, dZ as b, f as s } from '../index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let c=class extends(v(O(b))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported";}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{v$1((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s$1="Unsupported layer type";r&&(s$1+=" "+r),o(new s("layer:unsupported-layer-type",s$1,{layerType:r}));}));})));}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e);}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};e([d({readOnly:!0})],c.prototype,"resourceInfo",void 0),e([d({type:["show","hide"]})],c.prototype,"listMode",void 0),e([d({json:{read:!1},readOnly:!0,value:"unsupported"})],c.prototype,"type",void 0),c=e([n("esri.layers.UnsupportedLayer")],c);const u=c;

export { u as default };
//# sourceMappingURL=UnsupportedLayer.6a6cd780.js.map
