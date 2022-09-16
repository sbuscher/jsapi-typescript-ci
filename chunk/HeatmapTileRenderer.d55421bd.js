import { kh as m, $ as e, a1 as n, be as s } from '../index.js';
import { n as n$1 } from './BitmapTileContainer.bd81c1c5.js';
import { o as o$1 } from './BaseTileRenderer.e641b63a.js';
import './Bitmap.45572a2e.js';
import './utils.2eac84cb.js';
import './Utils.1fc429c3.js';
import './enums.480c78cc.js';
import './enums.f11416db.js';
import './Texture.4714e8e3.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.4064f2b9.js';
import './TileContainer.72ac9a12.js';
import './WGLContainer.5e148afe.js';
import './pixelUtils.cfc3a349.js';
import './VertexArrayObject.fdfc48fc.js';
import './ProgramTemplate.91ccef88.js';
import './StyleDefinition.8c6ccefd.js';
import './config.f27af595.js';
import './GeometryUtils.3261b92c.js';
import './earcut.d6b861a1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512;}render(i){m(i,512,this.intensities,this.gradient,this.minDensity,this.maxDensity);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let o=class extends o$1{constructor(e){super(e),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n$1(e.tileInfoView);}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minDensity:t,maxDensity:s$1,colorStops:r}=e;this._intensityInfo.minDensity=t,this._intensityInfo.maxDensity=s$1,this._gradient=s(r),this.tiles.forEach((e=>{const i=e.bitmap.source;i&&(i.minDensity=t,i.maxDensity=s$1,i.gradient=this._gradient,e.bitmap.invalidateTexture());}));}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container);}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container);}disposeTile(e){this._container.removeChild(e),e.destroy();}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i$1=e.intensityInfo,{minDensity:s,maxDensity:r}=this._intensityInfo,o=t.bitmap.source||new i;o.intensities=i$1&&i$1.matrix||null,o.minDensity=s,o.maxDensity=r,o.gradient=this._gradient,t.bitmap.source=o,this._container.addChild(t),this._container.requestRender(),this.requestUpdate();}onTileError(e){console.error(e);}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};o=e([n("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],o);const a=o;

export { a as default };
//# sourceMappingURL=HeatmapTileRenderer.d55421bd.js.map
