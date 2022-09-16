import { d7 as c, ci as j$1, R as l, U, cu as M$1, bp as g, cn as M$2, r, t as t$1, da as tn, ck as rn, aM as k, dj as s, dk as v$1, dl as n, dm as I, $ as e, a0 as d$1, a1 as n$1 } from '../index.js';
import { b, g as g$1, d } from './kmlUtils.5dd975ca.js';
import { v } from './Bitmap.eb54b556.js';
import { t } from './BitmapContainer.c21751a2.js';
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
class P{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[];}}let j=class extends(f(u)){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new t,this._kmlVisualData=new P,this.allVisiblePoints=new c,this.allVisiblePolylines=new c,this.allVisiblePolygons=new c,this.allVisibleMapImages=new j$1;}async hitTest(e,i){const t=this.layer;return [this._pointsView?.hitTest(e),this._polylinesView?.hitTest(e),this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((i=>(i.layer=t,i.sourceLayer=t,{type:"graphic",graphic:i,layer:t,mapPoint:e})))}update(e){this._polygonsView&&this._polygonsView.processUpdate(e),this._polylinesView&&this._polylinesView.processUpdate(e),this._pointsView&&this._pointsView.processUpdate(e);}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new ae({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new ae({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new ae({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new i(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.handles.add([this.allVisibleMapImages.on("change",(e=>{e.added.forEach((e=>this._addMapImage(e))),e.removed.forEach((e=>this._removeMapImage(e)));})),l((()=>this.layer.visibleSublayers),(e=>{for(const[i,t]of this._kmlVisualData.allSublayers)t.visibility=0;for(const i of e){const e=this._kmlVisualData.allSublayers.get(i.id);e&&(e.visibility=1);}this._refreshCollections();}))]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal));}detach(){this._fetchController.abort(),this._fetchController=null,this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null),this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null),this._pointsView&&(this._pointsView.destroy(),this._pointsView=null);}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange();}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(e){(this.view.spatialReference.isWGS84||this.view.spatialReference.isWebMercator)&&U(e.href,{responseType:"image"}).then((({data:i})=>{let t=M$1.fromJSON(e.extent);g(t,this.view.spatialReference)&&(t=M$2(t,this.view.spatialReference));const s=new v(i,"standard");s.x=t.xmin,s.y=t.ymax,s.resolution=t.width/i.naturalWidth,s.rotation=e.rotation,this._mapImageContainer.addChild(s),this._bitmapIndex.set(e,s);}));}async _getViewDependentUrl(e,t){const{viewFormat:s$1,viewBoundScale:l,httpQuery:h}=e;if(r(s$1)){if(t$1(t))throw new Error("Loading this network link requires a view state.");let p;if(await tn(),r(l)&&1!==l){const e=new M$1(t.extent);e.expand(l),p=e;}else p=t.extent;p=rn(p,k.WGS84);const w=rn(p,k.WebMercator),g=p.xmin,u=p.xmax,_=p.ymin,V=p.ymax,f=t.size[0]*t.pixelRatio,v=t.size[1]*t.pixelRatio,S=Math.max(w.width,w.height),I$1={"[bboxWest]":g.toString(),"[bboxEast]":u.toString(),"[bboxSouth]":_.toString(),"[bboxNorth]":V.toString(),"[lookatLon]":p.center.x.toString(),"[lookatLat]":p.center.y.toString(),"[lookatRange]":S.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":p.center.x.toString(),"[lookatTerrainLat]":p.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":p.center.x.toString(),"[cameraLat]":p.center.y.toString(),"[cameraAlt]":S.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":f.toString(),"[vertPixels]":v.toString(),"[terrainEnabled]":"0","[clientVersion]":s,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},C=e=>{for(const i in e)for(const t in I$1)e[i]=e[i].replace(t,I$1[t]);},x=v$1(s$1);C(x);let k$1={};r(h)&&(k$1=v$1(h),C(k$1));const P=n(e.href);P.query={...P.query,...x,...k$1};return `${P.path}?${I(x)}`}return e.href}async _fetchService(e){const i=new P;await this._loadVisualData(this.layer.url,i,e),this._kmlVisualData=i,this._refreshCollections();}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e))),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e=>this._isSublayerVisible(e.sublayerId))).map((({item:e})=>e)));}_isSublayerVisible(e){const i=this._kmlVisualData.allSublayers.get(e);return !!i.visibility&&(-1===i.parentFolderId||this._isSublayerVisible(i.parentFolderId))}_loadVisualData(e,i,t){return this._fetchParsedKML(e,t).then((async e=>{for(const s of e.sublayers){i.allSublayers.set(s.id,s);const e=s.points?await b(s.points):[],a=s.polylines?await b(s.polylines):[],o=s.polygons?await b(s.polygons):[],l=s.mapImages||[];if(i.allPoints.push(...e.map((e=>({item:e,sublayerId:s.id})))),i.allPolylines.push(...a.map((e=>({item:e,sublayerId:s.id})))),i.allPolygons.push(...o.map((e=>({item:e,sublayerId:s.id})))),i.allMapImages.push(...l.map((e=>({item:e,sublayerId:s.id})))),s.networkLink){const e=await this._getViewDependentUrl(s.networkLink,this.view.state);await this._loadVisualData(e,i,t);}}}))}_fetchParsedKML(e,i){return g$1(e,this.view.spatialReference,this.layer.refreshInterval,i).then((e=>d(e.data)))}_removeMapImage(e){const i=this._bitmapIndex.get(e);i&&(this._mapImageContainer.removeChild(i),this._bitmapIndex.delete(e));}};e([d$1()],j.prototype,"_pointsView",void 0),e([d$1()],j.prototype,"_polylinesView",void 0),e([d$1()],j.prototype,"_polygonsView",void 0),e([d$1()],j.prototype,"updating",void 0),j=e([n$1("esri.views.2d.layers.KMLLayerView2D")],j);const M=j;

export { M as default };
//# sourceMappingURL=KMLLayerView2D.ec3f52b8.js.map
