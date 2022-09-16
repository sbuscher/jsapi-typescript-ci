import { s, p as g, $ as e, a0 as d$1, a1 as n } from '../index.js';
import { t } from './BitmapContainer.525442b6.js';
import { f, u } from './LayerView.24b740d0.js';
import { S } from './ExportStrategy.136e5f67.js';
import { i } from './RefreshableLayerView.96a24d61.js';
import './WGLContainer.5e148afe.js';
import './enums.f11416db.js';
import './pixelUtils.cfc3a349.js';
import './utils.2eac84cb.js';
import './Utils.1fc429c3.js';
import './enums.480c78cc.js';
import './Texture.4714e8e3.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.4064f2b9.js';
import './VertexArrayObject.fdfc48fc.js';
import './ProgramTemplate.91ccef88.js';
import './StyleDefinition.8c6ccefd.js';
import './config.f27af595.js';
import './GeometryUtils.3261b92c.js';
import './earcut.d6b861a1.js';
import './Bitmap.45572a2e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const h=s.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends(i(f(u))){update(t){this.strategy.update(t).catch((t=>{g(t)||h.error(t);})),this.notifyChange("updating");}attach(){this._bitmapContainer=new t,this.container.addChild(this._bitmapContainer),this.strategy=new S({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)});}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}};e([d$1()],c.prototype,"strategy",void 0),e([d$1()],c.prototype,"updating",void 0),c=e([n("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;

export { d as default };
//# sourceMappingURL=BaseDynamicLayerView2D.305c3348.js.map
