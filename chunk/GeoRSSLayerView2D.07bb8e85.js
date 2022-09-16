import { R as l, S as h, cZ as x, ci as j, d1 as B, d2 as t, d3 as p, $ as e, a1 as n } from '../index.js';
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
let y=class extends(f(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([l((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:t$1,layerDefinition:o}of e){const e=x.fromJSON(t$1),p=new j(e.features),h=o.drawingInfo,m=i$1?B.fromJSON(i$1):null,y=t(h.renderer),g=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h),l((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h),l((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h),l((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h)],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([n("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
//# sourceMappingURL=GeoRSSLayerView2D.07bb8e85.js.map
