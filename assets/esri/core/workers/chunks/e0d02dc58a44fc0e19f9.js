"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2855,4889],{88068:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var i=r(43697),n=(r(66577),r(51773)),o=(r(16050),r(12501),r(28756),r(92271),r(72529),r(5499),r(84382),r(30687),r(91423),r(32400)),s=r(16453),a=r(5600),l=(r(67676),r(80442),r(75215),r(52011)),p=r(86973),u=r(87085),c=r(20102),d=r(83379),y=r(70586),f=r(16467),m=r(74889),h=r(82971);let g=class extends d.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:r,supportedCrs:i},layer:{apiKey:n,capabilities:o,customParameters:s}}=this;return{capabilities:o,collection:e,layerDefinition:t,queryParameters:{apiKey:n,customParameters:s},spatialReference:r,supportedCrs:i}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>m.default.fromJSON(e)))}queryFeaturesJSON(e,t={}){const r=this.getFeatureDefinition();return this.load(t).then((()=>(0,f.yN)(r,e,t)))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator&&!this.featureDefinition.supportedCrs[e.wkid])}_conformsToType(e,t){const r=new RegExp(`^${t}$`,"i");return e.conformsTo.some((e=>r.test(e)))??!1}_getCapabilities(e,t){const r=(0,y.pC)(t)?t.components?.parameters:null;return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:r?.limit?.schema?.maximum??r?.limitFeatures?.schema?.maximum??5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){const t=e.extent?.spatial;if(!t)return null;const r=t.bbox[0],i=4===r.length,n=r[0],o=r[1],s=i?void 0:r[2];return{xmin:n,ymin:o,xmax:i?r[2]:r[3],ymax:i?r[3]:r[4],zmin:s,zmax:i?void 0:r[5],spatialReference:h.Z.WGS84.toJSON()}}_getStorageSpatialReference(e){const t=e.storageCrs??f.$9,r=(0,f.d)(t);return(0,y.Wi)(r)?h.Z.WGS84:new h.Z({wkid:r})}_getSupportedSpatialReferences(e,t){const r="#/crs",i=e.crs??[f.$9],n=i.includes(r)?i.filter((e=>e!==r)).concat(t.crs):i,o=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return n.filter((e=>!o.test(e)))}async _loadOGCServices(e,t){const r=(0,y.pC)(t)?t.signal:null,{apiKey:i,collectionId:n,customParameters:o,fields:s,geometryType:a,hasZ:l,objectIdField:u,timeInfo:d,url:m}=e,h={fields:s?.map((e=>e.toJSON())),geometryType:p.P$.toJSON(a),hasZ:l,objectIdField:u,timeInfo:d?.toJSON()},g={apiKey:i,customParameters:o,signal:r},w=await(0,f.gp)(m,g),[b,v]=await Promise.all([(0,f.G4)(w,g),(0,f.j)(w,g)]);if(!this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new c.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const S=v.collections.find((e=>e.id===n));if(!S)throw new c.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const C=this._conformsToType(b,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,f.eS)(w,g):null,I=await(0,f.w9)(S,h,g),F=this._getCapabilities(I.hasZ,C),_=this._getExtent(S),x=this._getStorageSpatialReference(S).toJSON(),T=this._getSupportedSpatialReferences(S,v),j=new RegExp(`^${f.Lu}`,"i"),P={};for(const e of T){const t=(0,f.d)(e);(0,y.pC)(t)&&(P[t]||(P[t]=e.replace(j,"")))}I.extent=_,this.featureDefinition={capabilities:F,collection:S,layerDefinition:I,queryParameters:{},spatialReference:x,supportedCrs:P}}};(0,i._)([(0,a.Cb)()],g.prototype,"featureDefinition",void 0),(0,i._)([(0,a.Cb)({constructOnly:!0})],g.prototype,"layer",void 0),(0,i._)([(0,a.Cb)()],g.prototype,"type",void 0),g=(0,i._)([(0,l.j)("esri.layers.graphics.sources.OGCFeatureSource")],g);var w=r(54295),b=r(71612),v=r(17017),S=r(69637),C=r(38009),I=r(68825),F=r(16859),_=r(34760),x=r(72965),T=r(28294),j=r(21506),P=r(2075),R=r(16451),O=r(1231),Z=r(53518),G=r(35671),D=r(2319),k=r(30707),q=r(57444),M=r(32163),N=r(6570);const E=(0,Z.v)();let $=class extends((0,w.V)((0,v.N)((0,S.b)((0,b.h)((0,I.c)((0,T.n)((0,x.M)((0,C.q)((0,F.I)((0,_.Q)((0,s.R)(u.Z)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new g({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,G.YN)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,M.eZ)(this,e)}createQuery(){return new q.Z}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){let r,i=!1;const n=t?.feature?.attributes,o=this.typeIdField&&n?.[this.typeIdField];return null!=o&&this.types&&(i=this.types.some((t=>t.id==o&&(r=t.domains?.[e],"inherited"===r?.type&&(r=this._getLayerDomain(e)),!0)))),i||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(q.Z.from(e)||this.createQuery(),t))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,G.YN)(this.renderer,this.fieldsIndex),(0,G.UF)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,i._)([(0,a.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],$.prototype,"capabilities",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:!0}})],$.prototype,"collectionId",void 0),(0,i._)([(0,a.Cb)({type:String})],$.prototype,"copyright",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],$.prototype,"defaultPopupTemplate",null),(0,i._)([(0,a.Cb)({type:String})],$.prototype,"definitionExpression",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],$.prototype,"description",void 0),(0,i._)([(0,a.Cb)({type:String})],$.prototype,"displayField",void 0),(0,i._)([(0,a.Cb)(j.PV)],$.prototype,"elevationInfo",void 0),(0,i._)([(0,a.Cb)(P.d)],$.prototype,"featureReduction",void 0),(0,i._)([(0,a.Cb)({type:[O.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],$.prototype,"fields",void 0),(0,i._)([(0,a.Cb)(E.fieldsIndex)],$.prototype,"fieldsIndex",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,type:N.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],$.prototype,"fullExtent",void 0),(0,i._)([(0,a.Cb)({type:p.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:p.Mk.read}}}}})],$.prototype,"geometryType",void 0),(0,i._)([(0,a.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],$.prototype,"hasZ",void 0),(0,i._)([(0,a.Cb)({type:Boolean,readOnly:!0})],$.prototype,"isTable",null),(0,i._)([(0,a.Cb)({type:[D.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:k.r},write:!0}}}})],$.prototype,"labelingInfo",void 0),(0,i._)([(0,a.Cb)(j.iR)],$.prototype,"labelsVisible",void 0),(0,i._)([(0,a.Cb)(j.rn)],$.prototype,"legendEnabled",void 0),(0,i._)([(0,a.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],$.prototype,"objectIdField",void 0),(0,i._)([(0,a.Cb)({type:["OGCFeatureLayer"]})],$.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.Cb)(j.C_)],$.prototype,"popupEnabled",void 0),(0,i._)([(0,a.Cb)({type:n.Z,json:{name:"popupInfo",write:!0}})],$.prototype,"popupTemplate",void 0),(0,i._)([(0,a.Cb)({types:o.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:o.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],$.prototype,"renderer",null),(0,i._)([(0,a.Cb)(j.YI)],$.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],$.prototype,"source",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,type:h.Z,json:{origins:{service:{read:!0}}}})],$.prototype,"spatialReference",void 0),(0,i._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],$.prototype,"title",void 0),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:String,readOnly:!0})],$.prototype,"typeIdField",void 0),(0,i._)([(0,a.Cb)({type:[R.Z]})],$.prototype,"types",void 0),(0,i._)([(0,a.Cb)(j.HQ)],$.prototype,"url",void 0),$=(0,i._)([(0,l.j)("esri.layers.OGCFeatureLayer")],$);const L=$},61159:(e,t,r)=>{r.d(t,{g:()=>i});const i={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},92722:(e,t,r)=>{r.d(t,{O3:()=>S,lG:()=>I,my:()=>C,q9:()=>l});var i=r(20102),n=r(70272),o=r(5428),s=r(35671);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function l(e){return a[e]}function*p(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*u(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function c(e){for(const t of e)if(t.length>2)return!0;return!1}function d(e){let t=0;for(let r=0;r<e.length;r++){const i=e[r],n=e[(r+1)%e.length];t+=i[0]*n[1]-n[0]*i[1]}return t<=0}function y(e){const t=e[0],r=e[e.length-1];return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]||e.push(t),e}function f(e,t,r){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,r){return g(e,t.coordinates,r),e}(e,t,r);case"MultiLineString":return function(e,t,r){for(const i of t.coordinates)g(e,i,r);return e}(e,t,r);case"MultiPolygon":return function(e,t,r){for(const i of t.coordinates){m(e,i[0],r);for(let t=1;t<i.length;t++)h(e,i[t],r)}return e}(e,t,r);case"Point":return function(e,t,r){return b(e,t.coordinates,r),e}(e,t,r);case"Polygon":return function(e,t,r){const i=t.coordinates;m(e,i[0],r);for(let t=1;t<i.length;t++)h(e,i[t],r);return e}(e,t,r)}}function m(e,t,r){const i=y(t);!function(e){return!d(e)}(i)?g(e,i,r):w(e,i,r)}function h(e,t,r){const i=y(t);!function(e){return d(e)}(i)?g(e,i,r):w(e,i,r)}function g(e,t,r){for(const i of t)b(e,i,r);e.lengths.push(t.length)}function w(e,t,r){for(let i=t.length-1;i>=0;i--)b(e,t[i],r);e.lengths.push(t.length)}function b(e,t,r){const[i,n,o]=t;e.coords.push(i,n),r.hasZ&&e.coords.push(o||0)}function v(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e){if(!e)throw new i.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const r="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,n=new RegExp(".*(CRS84H?|4326)$","i");if(!r||!n.test(r))throw new i.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function C(e,t={}){const r=[],i=new Set,n=new Set;let o,a=!1,d=null,y=!1,{geometryType:f=null}=t,m=!1;for(const t of p(e)){const{geometry:e,properties:s,id:p}=t;if((!e||(f||(f=l(e.type)),l(e.type)===f))&&(a||(a=c(u(e))),y||(y=null!=p,y&&(o=typeof p,d=Object.keys(s).filter((e=>s[e]===p)))),y&&null!=p&&(d.length>1?d=d.filter((e=>s[e]===p)):1===d.length&&(d=s[d[0]]===p?d:[])),!m&&s)){let e=!0;for(const t in s){if(i.has(t))continue;const o=s[t];if(null==o){e=!1,n.add(t);continue}const a=v(o);"unknown"!==a?(n.delete(t),i.add(t),r.push({name:t,alias:t,type:a})):n.add(t)}m=e}}const h=d&&1===d.length&&d[0]||null;if(h)for(const e of r)if(e.name===h&&(0,s.H7)(e)){e.type="esriFieldTypeOID";break}return{fields:r,geometryType:f,hasZ:a,objectIdFieldName:h,objectIdFieldType:o,unknownFields:Array.from(n)}}function I(e,t){return Array.from(function*(e,t={}){const{geometryType:r,objectIdField:i}=t;for(const s of e){const{geometry:e,properties:a,id:p}=s;if(e&&l(e.type)!==r)continue;const u=a||{};let c=u[i]??null;i&&null!=p&&!u[i]&&(u[i]=c=p);const d=new n.u_(e?f(new o.Z,e,t):null,u,null,c);yield d}}(p(e),t))}},25278:(e,t,r)=>{r.d(t,{Dm:()=>u,Hq:()=>c,MS:()=>d,bU:()=>a});var i=r(80442),n=r(22974),o=r(61159),s=r(58333);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.I4:"esriGeometryPolyline"===e?s.ET:s.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let p=1;function u(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${p++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new i}catch(r){return()=>({[t]:null,...e})}}function c(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,n.d9)(e)}}]}function d(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},54295:(e,t,r)=>{r.d(t,{V:()=>s});var i=r(43697),n=r(5600),o=(r(67676),r(80442),r(75215),r(52011));const s=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,n.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,o.j)("esri.layers.mixins.APIKeyMixin")],t),t}},68825:(e,t,r)=>{r.d(t,{c:()=>m});var i,n=r(43697),o=r(78286),s=r(5600),a=(r(67676),r(80442),r(75215),r(52011)),l=r(35454),p=r(96674);const u=new l.X({asc:"ascending",desc:"descending"});let c=i=class extends p.wq{constructor(e){super(e),this.field=null,this.valueExpression=null,this.order="ascending"}clone(){return new i({field:this.field,valueExpression:this.valueExpression,order:this.order})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),(0,n._)([(0,s.Cb)({type:u.apiValues,json:{read:u.read,write:u.write}})],c.prototype,"order",void 0),c=i=(0,n._)([(0,a.j)("esri.layers.support.OrderByInfo")],c);const d=c;function y(e,t,r){if(!e)return null;const i=e.find((e=>!!e.field));if(!i)return null;const n=new d;return n.read(i,r),[n]}function f(e,t,r,i){const n=e.find((e=>!!e.field));n&&(0,o.RB)(r,[n.toJSON()],t)}const m=e=>{let t=class extends e{constructor(){super(...arguments),this.orderBy=null}};return(0,n._)([(0,s.Cb)({type:[d],json:{origins:{"web-scene":{write:!1,read:!1}},read:{source:"layerDefinition.orderBy",reader:y},write:{target:"layerDefinition.orderBy",writer:f}}})],t.prototype,"orderBy",void 0),t=(0,n._)([(0,a.j)("esri.layers.mixins.OrderedLayer")],t),t}},16859:(e,t,r)=>{r.d(t,{I:()=>v});var i=r(43697),n=r(40330),o=r(3172),s=r(66643),a=r(20102),l=r(92604),p=r(70586),u=r(95330),c=r(17452),d=r(5600),y=(r(67676),r(80442),r(75215),r(71715)),f=r(52011),m=r(30556),h=r(65587),g=r(15235),w=r(86082);const b=l.Z.getLogger("esri.layers.mixins.PortalLayer"),v=e=>{let t=class extends e{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){this.portalItem?.destroy(),this.portalItem=null}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new g.default({id:t.itemId,portal:r&&r.portal})}writePortalItem(e,t){e&&e.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem&&this.portalItem.id)try{const i=await r.e(8062).then(r.bind(r,18062));return(0,u.k_)(t),await i.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)}catch(e){throw(0,u.D_)(e)||b.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`),e}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,u.r9)(e),!0))))}async _fetchUserHasEditingPrivileges(e){const t=this.url?n.id?.findCredential(this.url):null;if(!t)return!0;const r=S.credential===t?S.user:await this._fetchEditingUser(e);return S.credential=t,S.user=r,(0,p.Wi)(r)||null==r.privileges||r.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const r=n.id.findServerInfo(this.url);if(!r?.owningSystemUrl)return null;const i=`${r.owningSystemUrl}/sharing/rest`,a=h.Z.getDefault();if(a&&a.loaded&&(0,c.Fv)(a.restUrl)===(0,c.Fv)(i))return a.user;const l=`${i}/community/self`,u=(0,p.pC)(e)?e.signal:null,d=await(0,s.q6)((0,o.default)(l,{authMode:"no-prompt",query:{f:"json"},signal:u}));return d.ok?w.default.fromJSON(d.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t&&t.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||h.Z.getDefault());return r&&i&&!(0,c.tm)(i.restUrl,r.restUrl)?(t.messages&&t.messages.push(new a.Z("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return(0,i._)([(0,d.Cb)({type:g.default})],t.prototype,"portalItem",null),(0,i._)([(0,y.r)("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),(0,i._)([(0,m.c)("web-document","portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),(0,i._)([(0,d.Cb)({clonable:!1})],t.prototype,"resourceReferences",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],t.prototype,"userHasEditingPrivileges",void 0),t=(0,i._)([(0,f.j)("esri.layers.mixins.PortalLayer")],t),t},S={credential:null,user:null}},16467:(e,t,r)=>{r.d(t,{$9:()=>w,G4:()=>S,Lu:()=>g,WW:()=>x,d:()=>F,eS:()=>I,gp:()=>C,j:()=>v,w9:()=>b,yN:()=>_}),r(66577);var i=r(3172),n=r(20102),o=r(92604),s=r(70586),a=r(8744),l=r(40488),p=r(98732),u=r(44876),c=r(92722),d=r(25278),y=r(99514),f=r(86719),m=r(82971);const h=o.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),g="http://www.opengis.net/def/crs/",w=`${g}OGC/1.3/CRS84`;async function b(e,t,r={},o=5){const{links:a}=e,l=R(a,"items","application/geo+json")||R(a,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.Wi)(l))throw new n.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:p}=await(0,i.default)(l.href,{signal:r.signal,query:{limit:o,...r.customParameters,token:r.apiKey},headers:{accept:"application/geo+json"}});await(0,c.O3)(p);const u=(0,c.my)(p,{geometryType:t.geometryType}),m=t.fields||u.fields||[],g=null!=t.hasZ?t.hasZ:u.hasZ,w=u.geometryType,b=t.objectIdField||u.objectIdFieldName||"OBJECTID";let v=t.timeInfo;const S=m.find((e=>e.name===b));if(S)S.type="esriFieldTypeOID",S.editable=!1,S.nullable=!1;else{if(!u.objectIdFieldType)throw new n.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");m.unshift({name:b,alias:b,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(b!==u.objectIdFieldName){const e=m.find((e=>e.name===u.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}m===u.fields&&u.unknownFields.length>0&&h.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}});for(const e of m){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new n.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(!f.v.jsonValues.includes(e.type))throw new n.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(v){const e=new y.Z(m);if(v.startTimeField){const t=e.get(v.startTimeField);t?(v.startTimeField=t.name,t.type="esriFieldTypeDate"):v.startTimeField=null}if(v.endTimeField){const t=e.get(v.endTimeField);t?(v.endTimeField=t.name,t.type="esriFieldTypeDate"):v.endTimeField=null}if(v.trackIdField){const t=e.get(v.trackIdField);t?v.trackIdField=t.name:(v.trackIdField=null,h.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:v}}))}v.startTimeField||v.endTimeField||(h.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:v}}),v=null)}return{drawingInfo:w?(0,d.bU)(w):null,geometryType:w,fields:m,hasZ:!!g,objectIdField:b,timeInfo:v}}async function v(e,t={}){const{links:r}=e,o=R(r,"data","application/json")||R(r,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if((0,s.Wi)(o))throw new n.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:a,customParameters:l,signal:p}=t,{data:u}=await(0,i.default)(o.href,{signal:p,headers:{accept:"application/json"},query:{...l,token:a}});return u}async function S(e,t={}){const{links:r}=e,o=R(r,"conformance","application/json")||R(r,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if((0,s.Wi)(o))throw new n.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:a,customParameters:l,signal:p}=t,{data:u}=await(0,i.default)(o.href,{signal:p,headers:{accept:"application/json"},query:{...l,token:a}});return u}async function C(e,t={}){const{apiKey:r,customParameters:n,signal:o}=t,{data:s}=await(0,i.default)(e,{signal:o,headers:{accept:"application/json"},query:{...n,token:r}});return s}async function I(e,t={}){const r="application/vnd.oai.openapi+json;version=3.0",n=R(e.links,"service-desc",r);if((0,s.Wi)(n))return h.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:a,signal:l}=t,{data:p}=await(0,i.default)(n.href,{signal:l,headers:{accept:r},query:{...a,token:o}});return p}function F(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e)?.groups;if(!t)return null;const{authority:r,code:i}=t;switch(r.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return m.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return m.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(i,10);return Number.isNaN(e)?null:e}default:return null}}async function _(e,t,r){const i=await x(e,t,r);return(0,p.cn)(i)}async function x(e,t,r){const{capabilities:{query:{maxRecordCount:o}},collection:d,layerDefinition:y,queryParameters:{apiKey:f,customParameters:h},spatialReference:g,supportedCrs:w}=e,{links:b}=d,v=R(b,"items","application/geo+json")||R(b,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.Wi)(v))throw new n.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:S,num:C,start:I,timeExtent:F,where:_}=t;if(t.objectIds)throw new n.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const x=m.Z.fromJSON(g),j=(0,s.Pt)(t.outSpatialReference,x),O=j.isWGS84?null:T(j,w),Z=P(S,w),G=function(e){if((0,s.Wi)(e))return null;const{start:t,end:r}=e;return`${(0,s.pC)(t)?t.toISOString():".."}/${(0,s.pC)(r)?r.toISOString():".."}`}(F),D=(M=_,(0,s.Wi)(M)||!M||"1=1"===M?null:M),k=C??(null!=I&&void 0!==I?10:o),{data:q}=await(0,i.default)(v.href,{...r,query:{...h,...Z,crs:O,datetime:G,query:D,limit:k,startindex:I,token:f},headers:{accept:"application/geo+json"}});var M;let N=!1;q.links&&(N=!!q.links.find((e=>"next"===e.rel))),!N&&Number.isInteger(q.numberMatched)&&Number.isInteger(q.numberReturned)&&(N=q.numberReturned<q.numberMatched);const{fields:E,globalIdField:$,hasM:L,hasZ:A,objectIdField:W}=y,U=y.geometryType,Q=(0,c.lG)(q,{geometryType:U,hasZ:A,objectIdField:W});if(!O&&j.isWebMercator)for(const e of Q)if((0,s.pC)(e.geometry)){const t=(0,p.di)(e.geometry,U,A,!1);t.spatialReference=m.Z.WGS84,e.geometry=(0,p.GH)((0,l.iV)(t,j))}for(const e of Q)e.objectId=e.attributes[W];const z=O||!O&&j.isWebMercator?j.toJSON():a.Zn,B=new u.Z;return B.exceededTransferLimit=N,B.features=Q,B.fields=E,B.geometryType=U,B.globalIdFieldName=$,B.hasM=L,B.hasZ=A,B.objectIdFieldName=W,B.spatialReference=z,B}function T(e,t){const{isWebMercator:r,wkid:i}=e;if(!i)return null;const n=r?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return n?`${g}${n}`:null}function j(e){if((0,s.Wi)(e))return"";const{xmin:t,ymin:r,xmax:i,ymax:n}=e;return`${t},${r},${i},${n}`}function P(e,t){if(!function(e){return(0,s.pC)(e)&&"extent"===e.type}(e))return null;const{spatialReference:r}=e;if(!r||r.isWGS84)return{bbox:j(e)};const i=T(r,t);return(0,s.pC)(i)?{bbox:j(e),"bbox-crs":i}:r.isWebMercator?{bbox:j((0,l.iV)(e,m.Z.WGS84))}:null}function R(e,t,r){return e.find((e=>e.rel===t&&e.type===r))||e.find((e=>e.rel===t&&!e.type))}},51706:(e,t,r)=>{var i,n;function o(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function a(e){return e.valueExpression?i.Expression:e.field&&"string"==typeof e.field?i.Field:i.Unknown}function l(e,t){const r=t||a(e),o=e.valueUnit||"unknown";return r===i.Unknown?n.Constant:e.stops?n.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?n.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?n.Proportional:n.Additive:n.Identity:n.RealWorldSize}r.d(t,{PS:()=>a,QW:()=>l,RY:()=>i,hL:()=>n,iY:()=>o,qh:()=>s}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(i||(i={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(n||(n={}))},74889:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var i,n=r(43697),o=r(66577),s=r(38171),a=r(35454),l=r(96674),p=r(22974),u=r(70586),c=r(5600),d=(r(75215),r(71715)),y=r(52011),f=r(30556),m=r(82971),h=r(33955),g=r(1231);const w=new a.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let b=i=class extends l.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=m.Z.fromJSON(t.spatialReference),i=[];for(let t=0;t<e.length;t++){const n=e[t],o=s.Z.fromJSON(n),a=n.geometry&&n.geometry.spatialReference;(0,u.pC)(o.geometry)&&!a&&(o.geometry.spatialReference=r);const l=n.aggregateGeometries,p=o.aggregateGeometries;if(l&&(0,u.pC)(p))for(const e in p){const t=p[e],i=l[e]?.spatialReference;(0,u.pC)(t)&&!i&&(t.spatialReference=r)}i.push(o)}return i}writeGeometryType(e,t,r,i){if(e)return void w.write(e,t,r,i);const{features:n}=this;if(n)for(const e of n)if(e&&(0,u.pC)(e.geometry))return void w.write(e.geometry.type,t,r,i)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,i=(0,h.im)(e);return!r&&t.spatialReference&&(i.spatialReference=m.Z.fromJSON(t.spatialReference)),i}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,u.pC)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}clone(){return new i(this.cloneProperties())}cloneProperties(){return(0,p.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(e){const t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const i=t.features[r];if(i.geometry){const t=e&&e[r];i.geometry=t&&t.toJSON()||i.geometry}}return t}quantize(e){const{scale:[t,r],translate:[i,n]}=e,o=this.features,s=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-i)/t)),(e=>Math.round((n-e)/r)));for(let e=0,t=o.length;e<t;e++)s((0,u.Wg)(o[e].geometry))||(o.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[i,n],scale:[o,s]}=r,a=this._getHydrationFunction(e,(e=>e*o+i),(e=>n-e*s));for(const{geometry:e}of t)(0,u.pC)(e)&&a(e);return this.transform=null,this}_quantizePoints(e,t,r){let i,n;const o=[];for(let s=0,a=e.length;s<a;s++){const a=e[s];if(s>0){const e=t(a[0]),s=r(a[1]);e===i&&s===n||(o.push([e-i,s-n]),i=e,n=s)}else i=t(a[0]),n=r(a[1]),o.push([i,n])}return o.length>0?o:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const i=(0,h.oU)(e)?e.rings:e.paths,n=[];for(let e=0,o=i.length;e<o;e++){const o=i[e],s=this._quantizePoints(o,t,r);s&&n.push(s)}return n.length>0?((0,h.oU)(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?e=>{const i=this._quantizePoints(e.points,t,r);return i.length>0?(e.points=i,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const i=(0,h.oU)(e)?e.rings:e.paths;let n,o;for(let e=0,s=i.length;e<s;e++){const s=i[e];for(let e=0,i=s.length;e<i;e++){const i=s[e];e>0?(n+=i[0],o+=i[1]):(n=i[0],o=i[1]),i[0]=t(n),i[1]=r(o)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const i=e.points;let n,o;for(let e=0,s=i.length;e<s;e++){const s=i[e];e>0?(n+=s[0],o+=s[1]):(n=s[0],o=s[1]),s[0]=t(n),s[1]=r(o)}}:void 0}};(0,n._)([(0,c.Cb)({type:String,json:{write:!0}})],b.prototype,"displayFieldName",void 0),(0,n._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"exceededTransferLimit",void 0),(0,n._)([(0,c.Cb)({type:[s.Z],json:{write:!0}})],b.prototype,"features",void 0),(0,n._)([(0,d.r)("features")],b.prototype,"readFeatures",null),(0,n._)([(0,c.Cb)({type:[g.Z],json:{write:!0}})],b.prototype,"fields",void 0),(0,n._)([(0,c.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],b.prototype,"geometryType",void 0),(0,n._)([(0,f.c)("geometryType")],b.prototype,"writeGeometryType",null),(0,n._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"hasM",void 0),(0,n._)([(0,c.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],b.prototype,"hasZ",void 0),(0,n._)([(0,c.Cb)({types:o.qM,json:{write:!0}})],b.prototype,"queryGeometry",void 0),(0,n._)([(0,d.r)("queryGeometry")],b.prototype,"readQueryGeometry",null),(0,n._)([(0,c.Cb)({type:m.Z,json:{write:!0}})],b.prototype,"spatialReference",void 0),(0,n._)([(0,f.c)("spatialReference")],b.prototype,"writeSpatialReference",null),(0,n._)([(0,c.Cb)({json:{write:!0}})],b.prototype,"transform",void 0),b=i=(0,n._)([(0,y.j)("esri.rest.support.FeatureSet")],b),b.prototype.toJSON.isDefaultToJSON=!0;const v=b}}]);