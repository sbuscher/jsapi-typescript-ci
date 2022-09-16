import { r, ar as v$1, bO as t, $ as e, a0 as d, dv as i$2, bQ as d$1, cu as M, aM as k, dw as y$2, a1 as n$1, ce as l$1, dx as v$2, cD as g, dy as o$1, bK as r$2, dz as t$1, dl as n$2, dA as L, dB as o$2, dC as e$1, U, cK as g$1, f as s, t as t$2, e as a$3, cf as E, cP as a$4, s as s$3, d7 as c$1, p as g$2, R as l$2 } from '../index.js';
import { t as t$3 } from './BitmapContainer.c21751a2.js';
import { f as f$2, u as u$2 } from './LayerView.c04c5e87.js';
import { a as ae } from './BaseGraphicContainer.960a047e.js';
import { n as n$3 } from './HighlightGraphicContainer.e2742eeb.js';
import { S } from './ExportStrategy.ae663b47.js';
import { r as r$1, i as i$3 } from './scaleUtils.be29ea80.js';
import { c } from './ExportImageParameters.c6e998f7.js';
import { n } from './floorFilterUtils.a7d9cb9f.js';
import { s as s$1, a as a$5 } from './drapedUtils.71e521b2.js';
import { i as i$1 } from './sublayerUtils.3c3c93de.js';
import { d as d$2, s as s$2 } from './popupUtils.da1461f8.js';
import { i as i$4 } from './RefreshableLayerView.717a4ac7.js';
import './WGLContainer.dfc8c076.js';
import './enums.f11416db.js';
import './pixelUtils.db461856.js';
import './utils.8c9e5b3d.js';
import './Utils.83ec6664.js';
import './enums.480c78cc.js';
import './Texture.504bc158.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.65ea99d2.js';
import './VertexArrayObject.cb91c839.js';
import './ProgramTemplate.e80a0047.js';
import './StyleDefinition.8c6ccefd.js';
import './config.f27af595.js';
import './GeometryUtils.3261b92c.js';
import './earcut.d6b861a1.js';
import './CIMSymbolHelper.b2c92c48.js';
import './BidiEngine.28baa92e.js';
import './GeometryUtils.820db37a.js';
import './normalizeUtilsSync.5fa393cb.js';
import './projectionSupport.a57fde16.js';
import './json.dcc9ce98.js';
import './FeatureContainer.f9054717.js';
import './TileContainer.03176de0.js';
import './visualVariablesUtils.0eaced4b.js';
import './visualVariablesUtils.e277d2f2.js';
import './Matcher.31f6fc7f.js';
import './tileUtils.8d970d7e.js';
import './TileClipper.3f0f3ef9.js';
import './Geometry.5779fa99.js';
import './ExpandedCIM.70bfa7d4.js';
import './quantizationUtils.6164f587.js';
import './devEnvironmentUtils.d5854ef4.js';
import './schemaUtils.802574ce.js';
import './createSymbolSchema.e7ce6d11.js';
import './MD5.ce941704.js';
import './util.2594adbf.js';
import './ComputedAttributeStorage.d984c4e5.js';
import './centroid.22e5356a.js';
import './vec3f32.d9d17da6.js';
import './Bitmap.eb54b556.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const o=e=>e.spatialReference.wkid||JSON.stringify(e.spatialReference);function l(r$1,i){const{dpi:n,gdbVersion:s,geometry:l,geometryPrecision:f,height:p,layerOption:m,mapExtent:y,maxAllowableOffset:c,returnFieldName:u,returnGeometry:d,returnUnformattedValues:g,returnZ:x,spatialReference:b,timeExtent:h,tolerance:E,width:O}=r$1.toJSON(),{dynamicLayers:S,layerDefs:j,layerIds:N}=a$2(r$1),J=i&&r(i.geometry)?i.geometry:null,R={geometryPrecision:f,maxAllowableOffset:c,returnFieldName:u,returnGeometry:d,returnUnformattedValues:g,returnZ:x,tolerance:E},$=J&&J.toJSON()||l;if(R.imageDisplay=`${O},${p},${n}`,s&&(R.gdbVersion=s),$&&(delete $.spatialReference,R.geometry=JSON.stringify($),R.geometryType=v$1($)),b?R.sr=b.wkid||JSON.stringify(b):$&&$.spatialReference?R.sr=o($):y&&y.spatialReference&&(R.sr=o(y)),R.time=h?[h.start,h.end].join(","):null,y){const{xmin:e,ymin:r,xmax:t,ymax:i}=y;R.mapExtent=`${e},${r},${t},${i}`;}return j&&(R.layerDefs=j),S&&!j&&(R.dynamicLayers=S),R.layers="popup"===m?"visible":m,N&&!S&&(R.layers+=`:${N.join(",")}`),R}function a$2(r$2){const{mapExtent:t,floors:o,width:l,sublayers:a,layerIds:p,layerOption:m,gdbVersion:y}=r$2,c=a?.find((e=>null!=e.layer))?.layer?.serviceSublayers,u="popup"===m,d={},g=r$1({extent:t,width:l,spatialReference:t?.spatialReference}),x=[],b=e=>{const r=0===g,t=0===e.minScale||g<=e.minScale,i=0===e.maxScale||g>=e.maxScale;if(e.visible&&(r||t&&i))if(e.sublayers)e.sublayers.forEach(b);else {if(!1===p?.includes(e.id)||u&&(!e.popupTemplate||!e.popupEnabled))return;x.unshift(e);}};if(a?.forEach(b),a&&!x.length)d.layerIds=[];else {const r$1=i$1(x,c,y),t=x.map((e=>{const r=n(o,e);return e.toExportImageJSON(r)}));if(r$1)d.dynamicLayers=JSON.stringify(t);else {if(a){let e=x.map((({id:e})=>e));p&&(e=e.filter((e=>p.includes(e)))),d.layerIds=e;}else p?.length&&(d.layerIds=p);const r$1=f$1(o,x);if(r(r$1)&&r$1.length){const e={};for(const t of r$1)t.definitionExpression&&(e[t.id]=t.definitionExpression);Object.keys(e).length&&(d.layerDefs=JSON.stringify(e));}}}return d}function f$1(e,t$1){const i=!!e?.length,s=t$1.filter((e=>null!=e.definitionExpression||i&&null!=e.floorInfo));return s.length?s.map((t$1=>{const i=n(e,t$1),s=t(i,t$1.definitionExpression);return {id:t$1.id,definitionExpression:s}})):null}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var m$1;let a$1=m$1=class extends l$1{constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400;}static from(t){return v$2(m$1,t)}};e([d({type:Number,json:{write:!0}})],a$1.prototype,"dpi",void 0),e([d()],a$1.prototype,"floors",void 0),e([d({type:String,json:{write:!0}})],a$1.prototype,"gdbVersion",void 0),e([d({types:i$2,json:{read:d$1,write:!0}})],a$1.prototype,"geometry",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"geometryPrecision",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"height",void 0),e([d({type:[Number],json:{write:!0}})],a$1.prototype,"layerIds",void 0),e([d({type:["top","visible","all","popup"],json:{write:!0}})],a$1.prototype,"layerOption",void 0),e([d({type:M,json:{write:!0}})],a$1.prototype,"mapExtent",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"maxAllowableOffset",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnFieldName",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnGeometry",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnM",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnUnformattedValues",void 0),e([d({type:Boolean,json:{write:!0}})],a$1.prototype,"returnZ",void 0),e([d({type:k,json:{write:!0}})],a$1.prototype,"spatialReference",void 0),e([d()],a$1.prototype,"sublayers",void 0),e([d({type:y$2,json:{write:!0}})],a$1.prototype,"timeExtent",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"tolerance",void 0),e([d({type:Number,json:{write:!0}})],a$1.prototype,"width",void 0),a$1=m$1=e([n$1("esri.rest.support.IdentifyParameters")],a$1);const u$1=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let u=class extends l$1{constructor(r){super(r),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null;}readFeature(r,t){return g.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(r$1,e){if(!r$1)return;const{attributes:t,geometry:s}=r$1;t&&(e.attributes={...t}),r(s)&&(e.geometry=s.toJSON(),e.geometryType=t$1.toJSON(s.type));}};e([d({type:String,json:{write:!0}})],u.prototype,"displayFieldName",void 0),e([d({type:g})],u.prototype,"feature",void 0),e([o$1("feature",["attributes","geometry"])],u.prototype,"readFeature",null),e([r$2("feature")],u.prototype,"writeFeature",null),e([d({type:Number,json:{write:!0}})],u.prototype,"layerId",void 0),e([d({type:String,json:{write:!0}})],u.prototype,"layerName",void 0),u=e([n$1("esri.rest.support.IdentifyResult")],u);const y$1=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function i(u,f,i){const c=(f=a(f)).geometry?[f.geometry]:[],l$1=n$2(u);return l$1.path+="/identify",L(c).then((r=>{const e=l(f,{geometry:r&&r[0]}),u=o$2({...l$1.query,f:"json",...e}),a=e$1(u,i);return U(l$1.path,a).then(m).then((t=>p(t,f.sublayers)))}))}function m(t){const r=t.data;r.results=r.results||[];const e={results:[]};return e.results=r.results.map((t=>y$1.fromJSON(t))),e}function a(t){return t=u$1.from(t)}function p(t,r){if(!r?.length)return t;const e=new Map;function s(t){e.set(t.id,t),t.sublayers&&t.sublayers.forEach(s);}r.forEach(s);for(const o of t.results)o.feature.sourceLayer=e.get(o.layerId);return t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const x=x=>{let g=class extends x{initialize(){this.exportImageParameters=new c({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:s$1}=this;if(!e)throw new s("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:s$1});const a=this.layer.capabilities?.operations?.supportsQuery??!0;if(!((this.layer.capabilities?.operations?.supportsIdentify??!0)&&this.layer.version>=10.5)&&!a)throw new s("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:s$1});return a?this._fetchPopupFeaturesUsingQueries(e,t):this._fetchPopupFeaturesUsingIdentify(e,t)}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}async _fetchPopupFeaturesUsingIdentify(e,r){const t=await this._createIdentifyParameters(e,r);if(t$2(t))return [];const{results:a}=await i(this.layer.parsedUrl,t);return a.map((e=>e.feature))}async _createIdentifyParameters(e,r$1){const{floors:s,spatialReference:o,scale:i}=this.view,p=r(r$1)?r$1.event:null,m=await this._collectPopupProviders(this.layer.sublayers,i,r$1);if(!m.length)return null;await Promise.all(m.map((({sublayer:e})=>e.load().catch((()=>{})))));const c=Math.min(a$3("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce(((e,r)=>r.renderer?s$1({renderer:r.renderer,event:p}):e),2)),u=this.createFetchPopupFeaturesQueryGeometry(e,c),h=i$3(i,o),d=Math.round(u.width/h),w=new M({xmin:u.center.x-h*d,ymin:u.center.y-h*d,xmax:u.center.x+h*d,ymax:u.center.y+h*d,spatialReference:u.spatialReference}),P=!1===this.layer.capabilities?.operations?.supportsQuery||await new Promise((e=>{let r=!1;Promise.all(m.map((async({popupTemplate:t})=>{if(t){const s=await this._loadArcadeModules(t);if(r)return;const a=s?.arcadeUtils.hasGeometryOperations(t);a&&(r=!0,e(!0));}}))).finally((()=>e(!1)));}));return new u$1({floors:s,gdbVersion:this.layer.gdbVersion,geometry:e,height:d,layerOption:"popup",mapExtent:w,maxAllowableOffset:P?0:h,returnGeometry:!0,spatialReference:o,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:c,width:d})}async _fetchPopupFeaturesUsingQueries(e,r$1){const t=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,r$1),s=r(r$1)?r$1.event:null,i=t.map((async({sublayer:r$1,popupTemplate:t})=>{await r$1.load().catch((()=>{}));const o=r$1.createQuery(),i=s$1({renderer:r$1.renderer,event:s}),p=this.createFetchPopupFeaturesQueryGeometry(e,i);if(o.geometry=p,o.outFields=await d$2(r$1,t),"floors"in this.view){const e=this.view?.floors?.clone(),t=n(e,r$1);r(t)&&(o.where=o.where?`(${o.where}) AND (${t})`:t);}const n$1=await this._loadArcadeModules(t);n$1&&n$1.arcadeUtils.hasGeometryOperations(t)||(o.maxAllowableOffset=p.width/i);return (await r$1.queryFeatures(o)).features}));return (await E(i)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}async _collectPopupProviders(e,r$1,t){const s=[],o=async e=>{const i=0===e.minScale||r$1<=e.minScale,p=0===e.maxScale||r$1>=e.maxScale;if(e.visible&&i&&p)if(e.sublayers)e.sublayers.forEach(o);else if(e.popupEnabled){const r$1=s$2(e,{...t,defaultPopupTemplateEnabled:!1});r(r$1)&&s.unshift({sublayer:e,popupTemplate:r$1});}},i=e.toArray().reverse().map(o);return await Promise.all(i),s}_loadArcadeModules(e){if(e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return a$4()}};return e([d()],g.prototype,"exportImageParameters",void 0),e([d({readOnly:!0})],g.prototype,"exportImageVersion",null),e([d()],g.prototype,"layer",void 0),e([d()],g.prototype,"suspended",void 0),e([d(g$1)],g.prototype,"timeExtent",void 0),g=e([n$1("esri.views.layers.MapImageLayerView")],g),g};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const f=s$3.getLogger("esri.views.2d.layers.MapImageLayerView2D");let y=class extends(x(i$4(f$2(u$2)))){constructor(){super(...arguments),this._highlightGraphics=new c$1;}update(e){this.strategy.update(e).catch((e=>{g$2(e)||f.error(e);}));}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,s=r>=10.3,a=r>=10;this._bitmapContainer=new t$3,this.container.addChild(this._bitmapContainer);const o=new ae({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n$3(this.view.featuresTilingScheme)});this.container.addChild(o.container),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:s,imageNormalizationSupported:a,hidpi:!0}),this.handles.add(l$2((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add(l$2((()=>this.view?.floors),(()=>this.requestUpdate())),"view.floors"),this.requestUpdate();}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,t){return this._highlightGraphics.add(e),{remove:()=>{this._highlightGraphics.remove(e);}}}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}createFetchPopupFeaturesQueryGeometry(e,t){return a$5(e,t,this.view)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};e([d()],y.prototype,"strategy",void 0),e([d()],y.prototype,"updating",void 0),y=e([n$1("esri.views.2d.layers.MapImageLayerView2D")],y);const v=y;

export { v as default };
//# sourceMappingURL=MapImageLayerView2D.5d8e1ec9.js.map
