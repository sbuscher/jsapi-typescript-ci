import { r as r$1, cD as g, ci as j, R as l, S as h, cB as a, t, $ as e, a1 as n } from '../index.js';
import { s } from './utils.8c9e5b3d.js';
import { r } from './GroupContainer.93bfa3c8.js';
import { f as f$1, u } from './LayerView.c04c5e87.js';
import { i } from './GraphicContainer.cfc1e21a.js';
import { a as ae } from './BaseGraphicContainer.960a047e.js';
import './Utils.83ec6664.js';
import './enums.480c78cc.js';
import './enums.f11416db.js';
import './Texture.504bc158.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.65ea99d2.js';
import './WGLContainer.dfc8c076.js';
import './pixelUtils.db461856.js';
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

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const f="sublayers",m="layerView",w=Object.freeze({remove(){},pause(){},resume(){}});let y=class extends(f$1(u)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new r;}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){r$1(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():r$1(this._graphicsViews)?yield*this._graphicsViews:yield*[];}async hitTest(e,i){return Array.from(this.graphicsViews(),(i=>{const s=i.hitTest(e);if(r$1(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate);}return s})).flat().map((i=>({type:"graphic",graphic:i,layer:this.layer,mapPoint:e})))}highlight(e){let t;return "number"==typeof e?t=[e]:e instanceof g?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):j.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t);}}):w}update(e){for(const i of this.graphicsViews())i.processUpdate(e);}attach(){const e=this.view,i$1=()=>this.requestUpdate(),s=this.layer.featureCollections;if(r$1(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new i(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const r=new ae({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i$1,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([l((()=>t.visible),(e=>r.container.visible=e),h),l((()=>r.updating),(()=>this.notifyChange("updating")),h)],m);}this._updateHighlight();}else r$1(this.layer.sublayers)&&this.handles.add(a((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),f);}detach(){this._destroyGraphicsViews(),this.handles.remove(f);}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange();}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return !0;return !1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(m);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null;}_createGraphicsViews(){if(this._destroyGraphicsViews(),t(this.layer.sublayers))return;const e=[],i$1=this.view,s$1=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new s,a=new i(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const n=new ae({view:i$1,graphics:t.graphics,requestUpdateCallback:s$1,container:a});this.handles.add([t.on("graphic-update",n.graphicUpdateHandler),l((()=>t.visible),(e=>n.container.visible=e),h),l((()=>n.updating),(()=>this.notifyChange("updating")),h)],m),r.addChild(n.container),this.container.addChild(r),e.push(n);}this._graphicsViews=e,this._updateHighlight();}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1);}else this._highlightIds.set(i,1);this._updateHighlight();}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e);}this._updateHighlight();}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e);}};y=e([n("esri.views.2d.layers.MapNotesLayerView2D")],y);const _=y;

export { _ as default };
//# sourceMappingURL=MapNotesLayerView2D.bfb8ac3a.js.map
