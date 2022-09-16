import { $ as e, a1 as n$1, R as l$1, S as h, r, cJ as y$1 } from '../index.js';
import B from './FeatureLayerView2D.ab1b5885.js';
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
import './util.2594adbf.js';
import './floorFilterUtils.a7d9cb9f.js';
import './popupUtils.da1461f8.js';
import './RefreshableLayerView.717a4ac7.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function l(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let n=class extends B{initialize(){this.handles.add([l$1((()=>this.view?.viewpoint),(()=>this._update()),h)]);}_injectOverrides(e){let s=super._injectOverrides(e);const t=this.view.scale,i=this.layer.sublayers.filter((e=>l(e,t))).map((e=>e.subtypeCode));if(!i.length)return s;s=r(s)?s:(new y$1).toJSON();const o=`NOT ${this.layer.subtypeField} IN (${i.join(",")})`;return s.where=s.where?`(${s.where}) AND (${o})`:o,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],t=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=t,e.sourceLayer=this.layer;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...e,definitionExpression:t}}};n=e([n$1("esri.views.2d.layers.SubtypeGroupLayerView2D")],n);const y=n;

export { y as default };
//# sourceMappingURL=SubtypeGroupLayerView2D.23faa062.js.map
