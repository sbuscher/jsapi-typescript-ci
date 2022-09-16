import { $ as e, a0 as d$1, a1 as n, R as l$1, f as s, cZ as x, t, r } from '../index.js';
import B from './FeatureLayerView2D.be86524f.js';
import { e as e$1 } from './util.7da23965.js';
import './utils.2eac84cb.js';
import './Utils.1fc429c3.js';
import './enums.480c78cc.js';
import './enums.f11416db.js';
import './Texture.4714e8e3.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.4064f2b9.js';
import './LayerView.24b740d0.js';
import './schemaUtils.15933d21.js';
import './visualVariablesUtils.dea6a714.js';
import './createSymbolSchema.2d5b3b2e.js';
import './CIMSymbolHelper.09f60ba6.js';
import './BidiEngine.28baa92e.js';
import './GeometryUtils.820db37a.js';
import './ExpandedCIM.56160d60.js';
import './quantizationUtils.c974b9d1.js';
import './MD5.ce941704.js';
import './floorFilterUtils.a7d9cb9f.js';
import './popupUtils.24717879.js';
import './RefreshableLayerView.96a24d61.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const i={};return r(t$1)&&(i.geometry=t$1.toJSON()),r(e)&&(i.where=e),i}let d=class extends B{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([l$1((()=>this.layer?.purgeOptions),(()=>this._update())),l$1((()=>this.suspended),(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream();}))]);}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),s=this;return {remove(){r.remove(),"data-received"===e&&(s._proxy.closed||s.hasEventListener("data-received")||s._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=x.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}detach(){super.detach(),this.connectionStatus="disconnected";}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=e$1(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:s,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([d$1()],d.prototype,"errorString",void 0),e([d$1({readOnly:!0})],d.prototype,"connectionError",null),e([d$1()],d.prototype,"connectionStatus",void 0),d=e([n("esri.views.2d.layers.StreamLayerView2D")],d);const u=d;

export { u as default };
//# sourceMappingURL=StreamLayerView2D.0d0b8873.js.map
