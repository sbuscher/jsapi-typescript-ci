import { B as e, ap as u } from '../index.js';
import { v } from './Bitmap.45572a2e.js';
import { r as r$1, o } from './TileContainer.72ac9a12.js';
import { W } from './WGLContainer.5e148afe.js';
import { I } from './Utils.1fc429c3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class r extends r$1{constructor(t,s,r,i,a,n=null){super(t,s,r,i,a),this.bitmap=new v(n,"standard",!1),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(t){super.beforeRender(t),this.bitmap.beforeRender(t);}afterRender(t){super.afterRender(t),this.bitmap.afterRender(t);}set stencilRef(t){this.bitmap.stencilRef=t;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {dvs:e(),tileMat3:e()}}setTransform(t,e){super.setTransform(t,e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class n extends o{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(s){const t=this._tileInfoView.getTileBounds(u(),s),[i,n]=this._tileInfoView.tileInfo.size;return new r(s,t[0],t[3],i,n)}prepareRenderPasses(e){const r=e.registerRenderPass({name:"bitmap (tile)",brushes:[W.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:I.MAP});return [...super.prepareRenderPasses(e),r]}doRender(e){this.visible&&e.drawPhase===I.MAP&&super.doRender(e);}}

export { n };
//# sourceMappingURL=BitmapTileContainer.bd81c1c5.js.map
