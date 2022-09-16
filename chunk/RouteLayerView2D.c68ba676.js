import { ci as j$1, dI as p, r, S as h, t, R as l, $ as e, a0 as d, a1 as n } from '../index.js';
import { b, h as h$1, O, g, a as h$2, c as h$3, D } from './Stop.eab689d0.js';
import { f, u } from './LayerView.c04c5e87.js';
import { i } from './GraphicContainer.cfc1e21a.js';
import { a as ae } from './BaseGraphicContainer.960a047e.js';
import './utils.8c9e5b3d.js';
import './Utils.83ec6664.js';
import './enums.480c78cc.js';
import './enums.f11416db.js';
import './Texture.504bc158.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.65ea99d2.js';
import './CIMSymbolHelper.b2c92c48.js';
import './BidiEngine.28baa92e.js';
import './GeometryUtils.820db37a.js';
import './normalizeUtilsSync.5fa393cb.js';
import './projectionSupport.a57fde16.js';
import './json.dcc9ce98.js';
import './VertexArrayObject.cb91c839.js';
import './FeatureContainer.f9054717.js';
import './TileContainer.03176de0.js';
import './WGLContainer.dfc8c076.js';
import './pixelUtils.db461856.js';
import './ProgramTemplate.e80a0047.js';
import './StyleDefinition.8c6ccefd.js';
import './config.f27af595.js';
import './GeometryUtils.3261b92c.js';
import './earcut.d6b861a1.js';
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
const k=Object.freeze({remove(){},pause(){},resume(){}}),v=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],j={graphic:null,property:null,oldValue:null,newValue:null};function M(e){return e instanceof b||e instanceof h$1||e instanceof O||e instanceof g||e instanceof h$2||e instanceof h$3||e instanceof D}function V(e){return j$1.isCollection(e)&&e.length&&M(e.getItemAt(0))}function G(e){return Array.isArray(e)&&e.length&&M(e[0])}let I=class extends(f(u)){constructor(){super(...arguments),this._graphics=new j$1,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map;}get _routeItems(){return new p({getCollections:()=>[r(this.layer.routeInfo)?new j$1([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this.updatingHandles.addOnCollectionChange((()=>this._routeItems),(e=>this._routeItemsChanged(e)),h);}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll();}attach(){this._createGraphicsView();}detach(){this._destroyGraphicsView();}async fetchPopupFeatures(e){return this._graphicsView.hitTest(e).filter((e=>!!e.popupTemplate))}highlight(e){let t;t=M(e)?[this._getNetworkFeatureUid(e)]:G(e)?e.map((e=>this._getNetworkFeatureUid(e))):V(e)?e.map((e=>this._getNetworkFeatureUid(e))).toArray():[e.uid];const r$1=t.filter(r);return r$1.length?(this._addHighlight(r$1),{remove:()=>this._removeHighlight(r$1)}):k}async hitTest(e,t){if(this.suspended)return null;const r$1=this._graphicsView.hitTest(e).filter(r).map((e=>this._networkGraphicMap.get(e)));if(!r$1.length)return null;const{layer:s}=this;return r$1.reverse().map((t=>({type:"route",layer:s,mapPoint:e,networkFeature:t})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(e){this._graphicsView.processUpdate(e);}viewChange(){this._graphicsView.viewChange();}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1);}else this._highlightIds.set(t,1);this._updateHighlight();}_createGraphic(e){const t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}_createGraphicsView(){const e=this.view,t=()=>this.requestUpdate(),r=new i(e.featuresTilingScheme);this._graphicsView=new ae({container:r,graphics:this._graphics,requestUpdateCallback:t,view:e}),this.container.addChild(r),this._updateHighlight();}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy();}_getDrawOrder(e){const t=this._networkGraphicMap.get(e);return v.indexOf(t.type)}_getNetworkFeatureUid(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e);}this._updateHighlight();}_routeItemsChanged(e){if(e.removed.length){this._graphics.removeMany(e.removed.map((e=>{const t=this._networkFeatureMap.get(e);return this._networkFeatureMap.delete(e),this._networkGraphicMap.delete(t),t})));for(const t of e.removed)this.handles.remove(t);}if(e.added.length){this._graphics.addMany(e.added.map((e=>{const t$1=this._createGraphic(e);return t(t$1.symbol)?null:(this._networkFeatureMap.set(e,t$1),this._networkGraphicMap.set(t$1,e),t$1)})).filter(r));for(const t of e.added)this.handles.add([l((()=>t.geometry),((e,r)=>{this._updateGraphic(t,"geometry",e,r);})),l((()=>t.symbol),((e,r)=>{this._updateGraphic(t,"symbol",e,r);}))],t);this._graphics.sort(((e,t)=>this._getDrawOrder(e)-this._getDrawOrder(t)));}}_updateGraphic(e,t,r,i){if(!this._networkFeatureMap.has(e)){const t=this._createGraphic(e);return this._networkFeatureMap.set(e,t),this._networkGraphicMap.set(t,e),void this._graphics.add(t)}const s=this._networkFeatureMap.get(e);s[t]=r,j.graphic=s,j.property=t,j.oldValue=i,j.newValue=r,this._graphicsView.graphicUpdateHandler(j);}_updateHighlight(){const e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e);}};e([d()],I.prototype,"_graphics",void 0),e([d()],I.prototype,"_routeItems",null),I=e([n("esri.views.2d.layers.RouteLayerView2D")],I);const F=I;

export { F as default };
//# sourceMappingURL=RouteLayerView2D.c68ba676.js.map
