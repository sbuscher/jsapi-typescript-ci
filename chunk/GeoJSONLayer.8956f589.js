import { s, $ as e, a0 as d, a1 as n, ih as m, cY as x, r, cZ as x$1, cu as M, f as s$1, t, aq as v, cG as u, e as a, gF as i, i_ as p, i$ as o, j0 as p$1, iq as a$1, j1 as a$2, ir as t$1, is as n$1, dT as c$1, dV as O, aM as k, j2 as c$2, j3 as m$1, bB as j, iv as d$1, cO as b, iH as d$2, j4 as p$2, fZ as y, iI as v$1, j5 as m$2, j6 as j$1, j7 as r$1, iV as c$3, j8 as w, iy as p$3, d1 as B$1, j9 as p$4, ix as n$2, ja as l, jb as p$5, jc as n$3, dY as f$1, iz as l$1, dZ as b$1 } from '../index.js';
import { c } from './clientSideDefaults.383d226e.js';
import './QueryEngineCapabilities.c86013fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const f=s.getLogger("esri.layers.graphics.sources.GeoJSONSource");let g=class extends m{constructor(){super(...arguments),this.type="geojson",this.refresh=x((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}));}load(e){const t=r(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null;}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>x$1.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:M.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new s$1("geojson-layer-source:edit-failure","Memory source not loaded");const r=this.layer.objectIdField,o=[],s=[],i=[];if(e.addFeatures)for(const t of e.addFeatures)o.push(this._serializeFeature(t));if(e.deleteFeatures)for(const t of e.deleteFeatures)"objectId"in t&&null!=t.objectId?s.push(t.objectId):"attributes"in t&&null!=t.attributes[r]&&s.push(t.attributes[r]);if(e.updateFeatures)for(const t of e.updateFeatures)i.push(this._serializeFeature(t));return this._connection.invoke("applyEdits",{adds:o,updates:i,deletes:s}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return {addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const r=!0===e.success?null:e.error||{code:void 0,description:void 0};return {objectId:e.objectId,globalId:e.globalId,error:r?new s$1("geojson-layer-source:edit-failure",r.description,{code:r.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t$1}=e;return t(t$1)?null:"mesh"===t$1.type||"extent"===t$1.type?v.fromExtent(t$1.extent):t$1}async _startWorker(e){this._connection=await u("GeoJSONSourceWorker",{strategy:a("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:o,hasZ:s,geometryType:i$1,objectIdField:n,url:a$1,timeInfo:l,customParameters:c$1}=this.layer,p="defaults"===this.layer.originOf("spatialReference"),h={url:a$1,customParameters:c$1,fields:t&&t.map((e=>e.toJSON())),geometryType:i.toJSON(i$1),hasZ:s,objectIdField:n,timeInfo:l?l.toJSON():null,spatialReference:p?null:o&&o.toJSON()},m=await this._connection.invoke("load",h,{signal:e});for(const r of m.warnings)f.warn(r.message,{layer:this.layer,warning:r});m.featureErrors.length&&f.warn(`Encountered ${m.featureErrors.length} validation errors while loading features`,m.featureErrors),this.sourceJSON=m.layerDefinition,this.capabilities=c(this.sourceJSON.hasZ,!0);}};e([d()],g.prototype,"capabilities",void 0),e([d()],g.prototype,"type",void 0),e([d({constructOnly:!0})],g.prototype,"layer",void 0),e([d()],g.prototype,"sourceJSON",void 0),g=e([n("esri.layers.graphics.sources.GeoJSONSource")],g);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const V=l$1();let B=class extends(p(o(p$1(a$1(a$2(t$1(n$1(c$1(O(b$1)))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new g({layer:this}),this.spatialReference=k.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null;}destroy(){this.source?.destroy();}load(e){return this.addResolvingPromise(this.source.load(e).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),c$2(this.renderer,this.fieldsIndex),m$1(this.timeInfo,this.fieldsIndex);}))),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?j(this.url):null}set renderer(e){c$2(e,this.fieldsIndex),this._set("renderer",e);}set url(e){if(!e)return void this._set("url",e);const t=j(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query});}async applyEdits(e,t){const r=await import('./editingSupport.3346dc2c.js');await this.load();const i=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),i}on(e,t){return super.on(e,t)}createPopupTemplate(e){return d$1(this,e)}createQuery(){const e=new b,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e}getFieldDomain(e,t){let r,i=!1;const o=t&&t.feature,s=o&&o.attributes,p=this.typeIdField&&s&&s[this.typeIdField];return null!=p&&this.types&&(i=this.types.some((t=>t.id==p&&(r=t.domains&&t.domains[e],r&&"inherited"===r.type&&(r=this._getLayerDomain(e)),!0)))),i||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(b.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(b.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(b.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(b.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return r(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return !1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}};e([d({readOnly:!0,json:{read:!1,write:!1}})],B.prototype,"capabilities",null),e([d({type:String})],B.prototype,"copyright",void 0),e([d({readOnly:!0})],B.prototype,"createQueryVersion",null),e([d({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),e([d({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),e([d({type:String})],B.prototype,"displayField",void 0),e([d({type:Boolean})],B.prototype,"editingEnabled",void 0),e([d(d$2)],B.prototype,"elevationInfo",void 0),e([d(p$2)],B.prototype,"featureReduction",void 0),e([d({type:[y],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],B.prototype,"fields",void 0),e([d(V.fieldsIndex)],B.prototype,"fieldsIndex",void 0),e([d({type:M,json:{name:"extent"}})],B.prototype,"fullExtent",void 0),e([d({type:["point","polygon","polyline","multipoint"],json:{read:{reader:i.read}}})],B.prototype,"geometryType",void 0),e([d({type:Boolean})],B.prototype,"hasZ",void 0),e([d(v$1)],B.prototype,"id",void 0),e([d({type:Boolean,readOnly:!0})],B.prototype,"isTable",null),e([d(m$2)],B.prototype,"labelsVisible",void 0),e([d({type:[j$1],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:r$1},write:!0}})],B.prototype,"labelingInfo",void 0),e([d(c$3)],B.prototype,"legendEnabled",void 0),e([d({type:["show","hide"]})],B.prototype,"listMode",void 0),e([d({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],B.prototype,"objectIdField",void 0),e([d(w)],B.prototype,"opacity",void 0),e([d({type:["GeoJSON"]})],B.prototype,"operationalLayerType",void 0),e([d({readOnly:!0})],B.prototype,"parsedUrl",null),e([d(p$3)],B.prototype,"popupEnabled",void 0),e([d({type:B$1,json:{name:"popupInfo",write:!0}})],B.prototype,"popupTemplate",void 0),e([d({types:p$4,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:n$2}}}})],B.prototype,"renderer",null),e([d(l)],B.prototype,"screenSizePerspectiveEnabled",void 0),e([d({readOnly:!0})],B.prototype,"source",void 0),e([d({type:k})],B.prototype,"spatialReference",void 0),e([d({type:[p$5]})],B.prototype,"templates",void 0),e([d()],B.prototype,"title",void 0),e([d({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),e([d({type:String,readOnly:!0})],B.prototype,"typeIdField",void 0),e([d({type:[n$3]})],B.prototype,"types",void 0),e([d(f$1)],B.prototype,"url",null),B=e([n("esri.layers.GeoJSONLayer")],B);const Z=B;

export { Z as default };
//# sourceMappingURL=GeoJSONLayer.8956f589.js.map
