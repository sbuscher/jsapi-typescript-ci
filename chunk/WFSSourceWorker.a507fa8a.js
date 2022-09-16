import { q as f, bo as E$1, eh as c, r, bt as te, bP as ne, b_ as d, h as e, f as s, am as O$1, p as g$1, s as s$1 } from '../index.js';
import { u } from './FeatureStore.1e539fe5.js';
import { g, f as f$1 } from './projectionSupport.ca1e9e3d.js';
import { Y } from './QueryEngine.357217fd.js';
import { O, L } from './geojson.8750e8e2.js';
import { m } from './sourceUtils.223c01b9.js';
import { K } from './wfsUtils.c5b543e7.js';
import './PooledRBush.b81d013f.js';
import './centroid.41b01042.js';
import './json.dcc9ce98.js';
import './QueryEngineResult.a743b456.js';
import './quantizationUtils.c974b9d1.js';
import './WhereClause.76454a7e.js';
import './utils.93eac933.js';
import './ClassBreaksDefinition.c69658e0.js';
import './utils.5a452461.js';
import './QueryEngineCapabilities.c86013fd.js';
import './timeSupport.9d52e048.js';
import './xmlUtils.1a2f354e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class E{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,s=await K(this._getFeatureUrl,this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await O(s),f(e);const i=L(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!E$1(this._queryEngine.spatialReference,c))for(const a of i)r(a.geometry)&&(a.geometry=te(g(ne(a.geometry,this._queryEngine.geometryType,!1,!1),c,this._queryEngine.spatialReference)));let o=1;for(const r of i){const e={};m(this._fieldsIndex,e,r.attributes,!0),r.attributes=e,null==r.attributes[t]&&(r.objectId=r.attributes[t]=o++);}return i};}destroy(){this._queryEngine?.destroy(),this._queryEngine=null;}async load(e$1,t){const{getFeatureUrl:r,getFeatureOutputFormat:i,spatialReference:o,fields:n,geometryType:u$1,featureType:p,objectIdField:h,customParameters:c}=e$1;this._featureType=p,this._customParameters=c,this._getFeatureUrl=r,this._getFeatureOutputFormat=i,this._fieldsIndex=new d(n),await this._checkProjection(o),f(t),this._queryEngine=new Y({fields:n,geometryType:u$1,hasM:!1,hasZ:!1,objectIdField:h,spatialReference:o,timeInfo:null,featureStore:new u({geometryType:u$1,hasM:!1,hasZ:!1})});const m=await this._snapshotFeatures(e(t.signal));return this._queryEngine.featureStore.addMany(m),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new s("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(r){return this._customParameters=r,this._snapshotTask?.abort(),this._snapshotTask=O$1(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e);}),(r=>{this._queryEngine.featureStore.clear(),g$1(r)||s$1.getLogger("esri.layers.WFSLayer").error(new s("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:r}));})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise;}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await f$1(c,t);}catch{throw new s("unsupported-projection","Projection not supported",{spatialReference:t})}}}

export { E as default };
//# sourceMappingURL=WFSSourceWorker.a507fa8a.js.map
