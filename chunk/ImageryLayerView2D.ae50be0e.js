import { s, $ as e, a0 as d$2, a1 as n, a2 as y$1, p as g$2, cD as g$3, r, cY as x, cu as M, t as t$2, d6 as d$3, h as e$1, R as l, cA as w, U, cK as g$4, f as s$2, cO as b$1, a8 as j, d7 as c, d5 as U$1, ci as j$1 } from '../index.js';
import { y as y$2, d as d$4 } from './RasterVFDisplayObject.34619b36.js';
import { f as f$2, u as u$1 } from './LayerView.24b740d0.js';
import { a as ae } from './BaseGraphicContainer.3090b386.js';
import { n as n$1 } from './HighlightGraphicContainer.2d129388.js';
import { f as f$1 } from './pixelUtils.cfc3a349.js';
import { t as t$1 } from './BitmapContainer.525442b6.js';
import { s as s$1 } from './utils.2eac84cb.js';
import { i } from './Bitmap.45572a2e.js';
import { S } from './ExportStrategy.136e5f67.js';
import { F } from './rasterProjectionHelper.b23e22a1.js';
import { M as M$1, m as m$3 } from './dataUtils.c224d7a4.js';
import { b as a, c as m$2 } from './WGLContainer.5e148afe.js';
import { I } from './Utils.1fc429c3.js';
import { s as s$3 } from './popupUtils.24717879.js';
import { i as i$1 } from './RefreshableLayerView.96a24d61.js';
import './VertexArrayObject.fdfc48fc.js';
import './Texture.4714e8e3.js';
import './enums.f11416db.js';
import './VertexElementDescriptor.e016eb10.js';
import './CIMSymbolHelper.09f60ba6.js';
import './BidiEngine.28baa92e.js';
import './enums.480c78cc.js';
import './MaterialKey.4064f2b9.js';
import './GeometryUtils.820db37a.js';
import './normalizeUtilsSync.3882a0a2.js';
import './projectionSupport.ca1e9e3d.js';
import './json.dcc9ce98.js';
import './FeatureContainer.eff07fe1.js';
import './TileContainer.72ac9a12.js';
import './visualVariablesUtils.f10fc190.js';
import './visualVariablesUtils.dea6a714.js';
import './Matcher.0df85694.js';
import './tileUtils.23af9634.js';
import './TileClipper.fd089c5c.js';
import './Geometry.5779fa99.js';
import './GeometryUtils.3261b92c.js';
import './ExpandedCIM.56160d60.js';
import './quantizationUtils.c974b9d1.js';
import './earcut.d6b861a1.js';
import './devEnvironmentUtils.d5854ef4.js';
import './schemaUtils.15933d21.js';
import './createSymbolSchema.2d5b3b2e.js';
import './MD5.ce941704.js';
import './util.7da23965.js';
import './ComputedAttributeStorage.9f43a057.js';
import './centroid.41b01042.js';
import './vec3f32.d9d17da6.js';
import './ProgramTemplate.91ccef88.js';
import './StyleDefinition.8c6ccefd.js';
import './config.f27af595.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const d$1=s.getLogger("esri.views.2d.layers.imagery.ImageryView2D");let u=class extends y$1{constructor(){super(...arguments),this.attached=!1,this.container=new s$1,this.updateRequested=!1,this.type="imagery",this._bitmapView=new t$1;}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1;}get updating(){return !this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch((e=>{g$2(e)||d$1.error(e);}));}hitTest(e){return new g$3({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,t=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new S({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:t,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()});}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1;}redraw(){this.strategy.updateExports((e=>{e.source instanceof HTMLImageElement?e.requestRender():this.layer.applyRenderer({pixelBlock:e.source.pixelBlock}).then((t=>{const r=e.source;r.pixelBlock=t.pixelBlock,r.filter=e=>this.layer.applyFilter(e),this.container.requestRender();}));}));}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate());}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(1===e.length&&e[0].source)return {extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const t=this.view.extent,r$1=e.map((e=>e.source)).filter((e=>e.extent&&e.extent.intersects(t))).map((e=>({extent:e.extent,pixelBlock:e.originalPixelBlock}))),i=f$1(r$1,t);return r(i)?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null}_fetchImage(e,t,r,i$1){return (i$1=i$1||{}).timeExtent=this.timeExtent,i$1.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i$1).then((e=>e.imageElement?e.imageElement:this.layer.applyRenderer(e.pixelData,{signal:i$1.signal}).then((t=>{const r=new i(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=e=>this.layer.applyFilter(e),r}))))}};e([d$2()],u.prototype,"attached",void 0),e([d$2()],u.prototype,"container",void 0),e([d$2()],u.prototype,"layer",void 0),e([d$2()],u.prototype,"strategy",void 0),e([d$2()],u.prototype,"timeExtent",void 0),e([d$2()],u.prototype,"view",void 0),e([d$2()],u.prototype,"updateRequested",void 0),e([d$2()],u.prototype,"updating",null),e([d$2()],u.prototype,"type",void 0),u=e([n("esri.views.2d.layers.imagery.ImageryView2D")],u);const y=u;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t extends a{constructor(){super(...arguments),this.symbolTypes=["triangle"];}get requiresDedicatedFBO(){return !1}prepareRenderPasses(s){const t=s.registerRenderPass({name:"imagery (vf)",brushes:[m$2],target:()=>this.children,drawPhase:I.MAP});return [...super.prepareRenderPasses(s),t]}doRender(e){this.visible&&e.drawPhase===I.MAP&&this.symbolTypes.forEach((r=>{e.renderPass=r,super.doRender(e);}));}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const p=s.getLogger("esri.views.2d.layers.imagery.VectorFieldView2D");let m$1=class extends y$1{constructor(e){super(e),this.update=x(((e,t)=>this._update(e,t).catch((e=>{g$2(e)||p.error(e);}))));}get updating(){return !!this._loading}redraw(e){if(!this.container.children.length)return;const t=this.container.children[0];t.symbolizerParameters=e,t.invalidateVAO(),this.container.symbolTypes="wind_speed"===e.style?["scalar","triangle"]:"simple_scalar"===e.style?["scalar"]:["triangle"],this.container.requestRender();}async _update(e,t,r){if(!e.stationary)return;const{extent:i,spatialReference:s}=e.state,o=new M({xmin:i.xmin,ymin:i.ymin,xmax:i.xmax,ymax:i.ymax,spatialReference:s}),[a,n]=e.state.size;this._loading=this.fetchPixels(o,a,n,r);const c=await this._loading;this._addToDisplay(c,t,e.state),this._loading=null;}_addToDisplay(e,t,r){if(t$2(e.pixelBlock))return this.container.children.forEach((e=>e.destroy())),void this.container.removeAllChildren();const{extent:s,pixelBlock:o}=e,a=new y$2(o);a.offset=[0,0],a.symbolizerParameters=t,a.rawPixelData=e,a.invalidateVAO(),a.x=s.xmin,a.y=s.ymax,a.pixelRatio=r.pixelRatio,a.rotation=r.rotation,a.resolution=r.resolution,a.width=o.width*t.symbolTileSize,a.height=o.height*t.symbolTileSize,this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.addChild(a);}};e([d$2()],m$1.prototype,"fetchPixels",void 0),e([d$2()],m$1.prototype,"container",void 0),e([d$2()],m$1.prototype,"_loading",void 0),e([d$2()],m$1.prototype,"updating",null),m$1=e([n("esri.views.2d.layers.imagery.ImageryVFStrategy")],m$1);const d=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let f=class extends d$3{constructor(){super(...arguments),this.attached=!1,this.container=new t,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(e,t,r$1,i)=>{const n=await this._projectFullExtentPromise,{symbolTileSize:l}=this.layer.renderer,{extent:c,width:m,height:p}=M$1(e,t,r$1,l,n);if(r(n)&&!n.intersects(e))return {extent:c,pixelBlock:null};const h={bbox:`${c.xmin}, ${c.ymin}, ${c.xmax}, ${c.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:l,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(h)){const e=this.getPixelData();if(r(e)){if(`${e.extent.xmin}, ${e.extent.ymin}, ${e.extent.xmax}, ${e.extent.ymax}`===h.bbox)return e}}const{pixelData:u}=await this.layer.fetchImage(c,m,p,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:i});if(this._dataParameters=h,t$2(u.pixelBlock))return {extent:c,pixelBlock:null};return {extent:c,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?e$1(m$3(u.pixelBlock,"vector-uv")):u.pixelBlock}};}get updating(){return !this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new d({container:this.container,fetchPixels:this._fetchpixels}),this.handles.add(l((()=>this.layer.renderer),(e=>this._updateSymbolizerParams(e)),w),"vector-field-view-update");}detach(){this._strategy.destroy(),this.container.children.forEach((e=>e.destroy())),this.container.removeAllChildren(),this.handles.remove("vector-field-view-update"),this._strategy=this.container=this._projectFullExtentPromise=null;}getPixelData(){if(this.updating||!this.container.children.length)return null;const{extent:e,pixelBlock:t}=this.container.children[0].rawPixelData;return {extent:e,pixelBlock:t}}hitTest(e){return new g$3({attributes:{},geometry:e.clone(),layer:this.layer})}update(e){this._strategy.update(e,this._symbolizerParams);}redraw(){this._updateSymbolizerParams(this.layer.renderer),this._strategy.redraw(this._symbolizerParams);}_canReuseVectorFieldData(e){const t=this._dataParameters.exportParametersVersion===e.exportParametersVersion,r=this._dataParameters.time===e.time,i=this._dataParameters.symbolTileSize===e.symbolTileSize,s=this._dataParameters.bbox===e.bbox;return t&&r&&i&&s}async _getProjectedFullExtent(e){try{return await F(this.layer.fullExtent,e)}catch(t){try{const t=(await U(this.layer.url,{query:{option:"footprints",outSR:e.wkid||JSON.stringify(e.toJSON()),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return t?M.fromJSON(t):null}catch{return null}}}_updateSymbolizerParams(e){"vector-field"===e.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}));}};e([d$2()],f.prototype,"attached",void 0),e([d$2()],f.prototype,"container",void 0),e([d$2()],f.prototype,"layer",void 0),e([d$2()],f.prototype,"timeExtent",void 0),e([d$2()],f.prototype,"type",void 0),e([d$2()],f.prototype,"view",void 0),e([d$2()],f.prototype,"updating",null),f=e([n("esri.views.2d.layers.imagery.VectorFieldView2D")],f);const g$1=f;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const m=m=>{let c=class extends m{constructor(){super(...arguments),this.view=null;}async fetchPopupFeatures(e,s){const{layer:p}=this;if(!e)throw new s$2("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:p});const{popupEnabled:a}=p,m=s$3(p,s);if(!a||t$2(m))throw new s$2("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:m});const c=await m.getRequiredFields(),l=new b$1;l.timeExtent=this.timeExtent,l.geometry=e,l.outFields=c,l.outSpatialReference=e.spatialReference;const y=this.view.resolution,h="2d"===this.view.type?new j(y,y,this.view.spatialReference):new j(.5*y,.5*y,this.view.spatialReference),{returnTopmostRaster:w,showNoDataRecords:d}=m.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:w,pixelSize:h,showNoDataRecords:d,signal:r(s)?s.signal:null};return p.queryVisibleRasters(l,f).then((e=>e))}canResume(){return !!super.canResume()&&!this.timeExtent?.isEmpty}};return e([d$2()],c.prototype,"layer",void 0),e([d$2()],c.prototype,"suspended",void 0),e([d$2(g$4)],c.prototype,"timeExtent",void 0),e([d$2()],c.prototype,"view",void 0),c=e([n("esri.views.layers.ImageryLayerView")],c),c};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let g=class extends(m(i$1(f$2(u$1)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new c,this.subview=null;}get pixelData(){return this.updating?null:"getPixelData"in this.subview?this.subview.getPixelData():null}get updating(){return !!(!this.subview||"updating"in this.subview&&this.subview.updating)}async hitTest(e,i){return this.subview?[{type:"graphic",graphic:this.subview.hitTest(e),layer:this.layer,mapPoint:e}]:null}update(e){this.subview?.update(e);}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new ae({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new n$1(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.handles.add([l((()=>this.layer.blendMode??"normal"),(e=>this.subview.container.blendMode=e),w),l((()=>this.layer.effect??null),(e=>this.subview.container.effect=e),w),l((()=>this.layer.exportImageServiceParameters.version),(e=>{e&&this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate());}),U$1),l((()=>this.timeExtent),(e=>{this.subview.timeExtent=e,"redraw"in this.subview?this.requestUpdate():this.subview.redrawOrRefetch();}),U$1),this.layer.on("redraw",(()=>{"redraw"in this.subview?this.subview.redraw():this.subview.redrawOrRefetch();})),l((()=>this.layer.renderer),(()=>this._setSubView()))],"imagerylayerview-update");}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.handles.remove("imagerylayerview-update"),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1;}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}highlight(e,r){if(!((Array.isArray(e)?e[0]:j$1.isCollection(e)?e.getItemAt(0):e)instanceof g$3))return {remove:()=>{}};let s=[];return Array.isArray(e)||j$1.isCollection(e)?s=e.map((e=>e.clone())):e instanceof g$3&&(s=[e.clone()]),this._highlightGraphics.addMany(s),{remove:()=>{this._highlightGraphics.removeMany(s);}}}async doRefresh(){this.requestUpdate();}isUpdating(){return !this.subview||this.subview.updating}_setSubView(){if(!this.view)return;const e=this.layer.renderer?.type;let i="imagery";if("vector-field"===e?i="imageryVF":"flow"===e&&(i="flow"),this.subview){if(this.subview.type===i)return this._attachSubview(this.subview),void("flow"===this.subview.type&&this.subview.redrawOrRefetch());this._detachSubview(this.subview),this.subview?.destroy();}this.subview="imagery"===i?new y({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new g$1({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new d$4({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate();}_attachSubview(e){e&&!e.attached&&(e.attach(),e.attached=!0,this.container.addChildAt(e.container,0),e.container.blendMode=this.layer.blendMode,e.container.effect=this.layer.effect);}_detachSubview(e){e?.attached&&(this.container.removeChild(e.container),e.detach(),e.attached=!1);}};e([d$2()],g.prototype,"pixelData",null),e([d$2({readOnly:!0})],g.prototype,"updating",null),e([d$2()],g.prototype,"subview",void 0),g=e([n("esri.views.2d.layers.ImageryLayerView2D")],g);const b=g;

export { b as default };
//# sourceMappingURL=ImageryLayerView2D.ae50be0e.js.map
