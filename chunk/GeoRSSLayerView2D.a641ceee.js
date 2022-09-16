import { R as l, S as h, cZ as x, ci as j, d1 as B, d2 as t, d3 as p, $ as e, a1 as n } from '../index.js';
import { f, u } from './LayerView.24b740d0.js';
import { i } from './GraphicContainer.800fc081.js';
import { a as ae } from './BaseGraphicContainer.3090b386.js';
import './utils.2eac84cb.js';
import './Utils.1fc429c3.js';
import './enums.480c78cc.js';
import './enums.f11416db.js';
import './Texture.4714e8e3.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.4064f2b9.js';
import './CIMSymbolHelper.09f60ba6.js';
import './BidiEngine.28baa92e.js';
import './GeometryUtils.820db37a.js';
import './normalizeUtilsSync.3882a0a2.js';
import './projectionSupport.ca1e9e3d.js';
import './json.dcc9ce98.js';
import './VertexArrayObject.fdfc48fc.js';
import './FeatureContainer.eff07fe1.js';
import './TileContainer.72ac9a12.js';
import './WGLContainer.5e148afe.js';
import './pixelUtils.cfc3a349.js';
import './ProgramTemplate.91ccef88.js';
import './StyleDefinition.8c6ccefd.js';
import './config.f27af595.js';
import './GeometryUtils.3261b92c.js';
import './earcut.d6b861a1.js';
import './visualVariablesUtils.f10fc190.js';
import './visualVariablesUtils.dea6a714.js';
import './Matcher.0df85694.js';
import './tileUtils.23af9634.js';
import './TileClipper.fd089c5c.js';
import './Geometry.5779fa99.js';
import './ExpandedCIM.56160d60.js';
import './quantizationUtils.c974b9d1.js';
import './devEnvironmentUtils.d5854ef4.js';
import './schemaUtils.15933d21.js';
import './createSymbolSchema.2d5b3b2e.js';
import './MD5.ce941704.js';
import './util.7da23965.js';
import './ComputedAttributeStorage.9f43a057.js';
import './centroid.41b01042.js';
import './vec3f32.d9d17da6.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let y=class extends(f(u)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[];}async hitTest(e,r){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().map((r=>{const i=this._popupTemplates.get(r),t=r.hitTest(e);for(const e of t)e.layer=s,e.sourceLayer=s,e.popupTemplate=i;return t})).flat().map((r=>({type:"graphic",graphic:r,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e);}attach(){this.handles.add([l((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:i$1,featureSet:t$1,layerDefinition:o}of e){const e=x.fromJSON(t$1),p=new j(e.features),h=o.drawingInfo,m=i$1?B.fromJSON(i$1):null,y=t(h.renderer),g=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:y,container:new i(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,m),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=y.symbol):this.layer.lineSymbol=y.symbol:this.layer.polygonSymbol=y.symbol,this.graphicsViews.push(g),this.container.addChild(g.container);}}),h),l((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new p({symbol:e});}),h),l((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new p({symbol:e});}),h),l((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new p({symbol:e});}),h)],"georsslayerview");}detach(){this.handles.remove("georsslayerview"),this._clear();}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange();}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0;}};y=e([n("esri.views.2d.layers.GeoRSSLayerView2D")],y);const g=y;

export { g as default };
//# sourceMappingURL=GeoRSSLayerView2D.a641ceee.js.map
