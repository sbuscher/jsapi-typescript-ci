import { $ as e, a0 as d$1, a1 as n, R as l$1, f as s, cZ as x, t, r } from '../index.js';
import B from './FeatureLayerView2D.ab1b5885.js';
import { e as e$1 } from './util.2594adbf.js';
import './utils.8c9e5b3d.js';
import './Utils.83ec6664.js';
import './enums.480c78cc.js';
import './enums.f11416db.js';
import './Texture.504bc158.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.65ea99d2.js';
import './LayerView.c04c5e87.js';
import './schemaUtils.802574ce.js';
import './visualVariablesUtils.e277d2f2.js';
import './createSymbolSchema.e7ce6d11.js';
import './CIMSymbolHelper.b2c92c48.js';
import './BidiEngine.28baa92e.js';
import './GeometryUtils.820db37a.js';
import './ExpandedCIM.70bfa7d4.js';
import './quantizationUtils.6164f587.js';
import './MD5.ce941704.js';
import './floorFilterUtils.a7d9cb9f.js';
import './popupUtils.da1461f8.js';
import './RefreshableLayerView.717a4ac7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function l(e,t$1){if(t(e)&&t(t$1))return null;const i={};return r(t$1)&&(i.geometry=t$1.toJSON()),r(e)&&(i.where=e),i}let d=class extends B{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected";}initialize(){this.handles.add([l$1((()=>this.layer?.purgeOptions),(()=>this._update())),l$1((()=>this.suspended),(e=>{e?this._proxy.pauseStream():this._proxy.resumeStream();}))]);}get connectionError(){if(this.errorString)return new s("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),s=this;return {remove(){r.remove(),"data-received"===e&&(s._proxy.closed||s.hasEventListener("data-received")||s._proxy.enableEvent("data-received",!1));}}}queryLatestObservations(e,r){if(!(this.layer.timeInfo.endField||this.layer.timeInfo.startField))throw new s("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),r).then((e=>{const t=x.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer;})),t}))}detach(){super.detach(),this.connectionStatus="disconnected";}_createClientOptions(){return {...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value);}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(l(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),s=e$1(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,o=e.spatialReference?e.spatialReference.toJSON():null;return {type:"stream",fields:r,geometryType:s,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:l(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:o,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};e([d$1()],d.prototype,"errorString",void 0),e([d$1({readOnly:!0})],d.prototype,"connectionError",null),e([d$1()],d.prototype,"connectionStatus",void 0),d=e([n("esri.views.2d.layers.StreamLayerView2D")],d);const u=d;

export { u as default };
//# sourceMappingURL=StreamLayerView2D.8d909866.js.map
