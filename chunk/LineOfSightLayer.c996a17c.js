import { jy as u$3, dK as l$3, aI as s$1, r as r$2, $ as e, a0 as d$1, a1 as n$2, a2 as y, t as t$1, jJ as w, a8 as j$1, iw as x$1, jK as a, ci as j$2, d4 as t$2, R as l$4, cA as w$2, cz as n$3, K as o, h as e$1, jL as u$4, dF as un, jM as h, jN as m, dT as c$1, dV as O, dZ as b } from '../index.js';
import { w as w$1 } from './persistable.92e8a012.js';
import './multiOriginJSONSupportUtils.78071368.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let n$1=0,l$2=class extends(u$3(l$3(s$1(y)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${n$1++}`,this.title=null;}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(r$2(t))switch(t.type){case"line-of-sight":t.removeAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this);}this._set("parent",e);}get isEditable(){return this.requiredPropertiesForEditing.every(r$2)}};e([d$1({type:String,constructOnly:!0,clonable:!1})],l$2.prototype,"id",void 0),e([d$1({type:String})],l$2.prototype,"title",void 0),e([d$1({constructOnly:!0})],l$2.prototype,"type",void 0),e([d$1({clonable:!1,value:null})],l$2.prototype,"parent",null),e([d$1({readOnly:!0})],l$2.prototype,"extent",void 0),e([d$1({readOnly:!0})],l$2.prototype,"isEditable",null),e([d$1({readOnly:!0})],l$2.prototype,"requiredPropertiesForEditing",void 0),e([d$1({readOnly:!0})],l$2.prototype,"nonEditableMessage",void 0),l$2=e([n$2("esri.analysis.Analysis")],l$2);const c=l$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(e,t){return l$1(e)===l$1(t)}function l$1(t){if(t$1(t))return null;const l=null!=t.layer?t.layer.id:"";let r=null;return r=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid,null==r?null:`o-${l}-${r}`}const r$1={json:{write:{writer:n,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:u$2}}}};function n(t,l){t$1(t)||null==t.layer?.objectIdField||null==t.attributes||(l.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]});}function u$2(e){if(null!=e.layerId&&null!=e.objectId)return {uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let f$2=class extends(u$3(l$3(y))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return w(this.position,o.position)&&w(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([d$1({type:j$1}),w$1()],f$2.prototype,"position",void 0),e([d$1({type:x$1}),w$1()],f$2.prototype,"elevationInfo",void 0),e([d$1(r$1)],f$2.prototype,"feature",void 0),f$2=e([n$2("esri.analysis.LineOfSightAnalysisObserver")],f$2);const u$1=f$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let l=class extends(u$3(a)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null;}equals(o){return w(this.position,o.position)&&w(this.elevationInfo,o.elevationInfo)&&t(this.feature,o.feature)}};e([d$1({type:j$1}),w$1()],l.prototype,"position",void 0),e([d$1({type:x$1}),w$1()],l.prototype,"elevationInfo",void 0),e([d$1(r$1)],l.prototype,"feature",void 0),l=e([n$2("esri.analysis.LineOfSightAnalysisTarget")],l);const f$1=l;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function r(t,n){return t$1(n)||!n.mode?t?"absolute-height":"on-the-ground":n.mode}function s(e,n){return r(!!r$2(e)&&e.hasZ,n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const j=j$2.ofType(f$1);let x=class extends c{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing.";}initialize(){this.own(l$4((()=>this._computeExtent()),(e=>{(t$1(e)||t$1(e.pending))&&this._set("extent",r$2(e)?e.extent:null);}),w$2));}get targets(){return this._get("targets")||new j}set targets(e){this._set("targets",n$3(e,this.targets,j));}get spatialReference(){return r$2(this.observer)&&r$2(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return [o(this.observer,(e=>e.position))]}async waitComputeExtent(){const e=this._computeExtent();return r$2(e)?e$1(e.pending):null}_computeExtent(){const e=this.spatialReference;if(t$1(this.observer)||t$1(this.observer.position)||t$1(e))return null;const t=e=>"absolute-height"===s(e.position,e.elevationInfo),o=this.observer.position,r=u$4(o.x,o.y,o.z,o.x,o.y,o.z);for(const i of this.targets)if(r$2(i.position)){const t=un(i.position,e);if(r$2(t.pending))return {pending:t.pending,extent:null};if(r$2(t.geometry)){const{x:e,y:o,z:s}=t.geometry;h(r,[e,o,s]);}}const s$1=m(r,e);return t(this.observer)&&this.targets.every(t)||(s$1.zmin=null,s$1.zmax=null),{pending:null,extent:s$1}}clear(){this.observer=null,this.targets.removeAll();}};e([d$1({type:["line-of-sight"]})],x.prototype,"type",void 0),e([d$1({type:u$1,json:{read:!0,write:!0}})],x.prototype,"observer",void 0),e([d$1({cast:t$2,type:j,nonNullable:!0,json:{read:!0,write:!0}})],x.prototype,"targets",null),e([d$1({value:null,readOnly:!0})],x.prototype,"extent",void 0),e([d$1({readOnly:!0})],x.prototype,"spatialReference",null),e([d$1({readOnly:!0})],x.prototype,"requiredPropertiesForEditing",null),e([d$1({readOnly:!0})],x.prototype,"nonEditableMessage",void 0),x=e([n$2("esri.analysis.LineOfSightAnalysis")],x);const E=x;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const u=j$2.ofType(f$1);let d=class extends(c$1(O(b))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new E,this.opacity=1;}initialize(){this.own(l$4((()=>this.analysis),((e,t)=>{r$2(t)&&t.parent===this&&(t.parent=null),r$2(e)&&(e.parent=this);}),w$2));}async load(){return r$2(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return o(this.analysis,(e=>e.observer))}set observer(e){o(this.analysis,(t=>t.observer=e));}get targets(){return r$2(this.analysis)?this.analysis.targets:null}set targets(e){o(this.analysis,(t=>t.targets=e));}get fullExtent(){return r$2(this.analysis)?this.analysis.extent:null}get spatialReference(){return r$2(this.analysis)?this.analysis.spatialReference:null}removeAnalysis(e){this.analysis===e&&(this.analysis=new E);}};e([d$1({json:{read:!1},readOnly:!0})],d.prototype,"type",void 0),e([d$1({type:["LineOfSightLayer"]})],d.prototype,"operationalLayerType",void 0),e([d$1({type:u$1,json:{read:!0,write:{ignoreOrigin:!0}}})],d.prototype,"observer",null),e([d$1({type:u,json:{read:!0,write:{ignoreOrigin:!0}}})],d.prototype,"targets",null),e([d$1({nonNullable:!0,json:{read:!1,write:!1}})],d.prototype,"analysis",void 0),e([d$1({readOnly:!0})],d.prototype,"fullExtent",null),e([d$1({readOnly:!0})],d.prototype,"spatialReference",null),e([d$1({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],d.prototype,"opacity",void 0),e([d$1({type:["show","hide"]})],d.prototype,"listMode",void 0),d=e([n$2("esri.layers.LineOfSightLayer")],d);const f=d;

export { f as default };
//# sourceMappingURL=LineOfSightLayer.c996a17c.js.map
