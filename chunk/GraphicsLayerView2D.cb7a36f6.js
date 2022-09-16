import { cD as g$1, ci as j, $ as e, a0 as d, a1 as n } from '../index.js';
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
const g={remove(){},pause(){},resume(){}};let c=class extends(f(u)){constructor(){super(...arguments),this._highlightIds=new Map;}attach(){this.graphicsView=new ae({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new i(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d");}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d");}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map((e=>({type:"graphic",graphic:e,mapPoint:i,layer:this.layer}))):null}async fetchPopupFeatures(i){if(this.graphicsView)return this.graphicsView.hitTest(i).filter((i=>!!i.popupTemplate))}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i);}moveStart(){}viewChange(){this.graphicsView.viewChange();}moveEnd(){}isUpdating(){return !this.graphicsView||this.graphicsView.updating}highlight(i){let s;return "number"==typeof i?s=[i]:i instanceof g$1?s=[i.uid]:Array.isArray(i)&&i.length>0?s="number"==typeof i[0]?i:i.map((i=>i&&i.uid)):j.isCollection(i)&&i.length>0&&(s=i.map((i=>i&&i.uid)).toArray()),s=s?.filter((i=>null!=i)),s.length?(this._addHighlight(s),{remove:()=>this._removeHighlight(s)}):g}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e);this._highlightIds.set(e,i+1);}else this._highlightIds.set(e,1);this._updateHighlight();}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const i=this._highlightIds.get(e)-1;0===i?this._highlightIds.delete(e):this._highlightIds.set(e,i);}this._updateHighlight();}_updateHighlight(){this.graphicsView?.setHighlight(Array.from(this._highlightIds.keys()));}};e([d()],c.prototype,"graphicsView",void 0),c=e([n("esri.views.2d.layers.GraphicsLayerView2D")],c);const l=c;

export { l as default };
//# sourceMappingURL=GraphicsLayerView2D.cb7a36f6.js.map
