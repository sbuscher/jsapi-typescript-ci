import { $ as e, a0 as d, cK as g, a1 as n, f as s, s as s$1, p as g$1, R as l$2, cu as M } from '../index.js';
import { t } from './BitmapContainer.525442b6.js';
import { f, u as u$1 } from './LayerView.24b740d0.js';
import { S } from './ExportStrategy.136e5f67.js';
import { i } from './RefreshableLayerView.96a24d61.js';
import { l as l$1 } from './ExportWMSImageParameters.1212bd3c.js';
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
const a=a=>{let i=class extends a{initialize(){this.exportImageParameters=new l$1({layer:this.layer});}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null;}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:o}=t;if(!o)return Promise.reject(new s("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:o}));const s$1=this.createFetchPopupFeaturesQuery(e);if(!s$1)return Promise.resolve([]);const{extent:p,width:a,height:i,x:m,y:n}=s$1;if(!(p&&a&&i))throw new s("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:p,width:a,height:i});const c=t.fetchFeatureInfo(p,a,i,m,n);return Promise.resolve(c?[c]:[])}};return e([d()],i.prototype,"exportImageParameters",void 0),e([d({readOnly:!0})],i.prototype,"exportImageVersion",null),e([d()],i.prototype,"layer",void 0),e([d(g)],i.prototype,"timeExtent",void 0),i=e([n("esri.layers.mixins.WMSLayerView")],i),i};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const u=s$1.getLogger("esri.views.2d.layers.WMSLayerView2D");let l=class extends(a(i(f(u$1)))){constructor(){super(...arguments),this.container=new t;}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch((e=>{g$1(e)||u.error(e);}));}attach(){const{layer:e,container:t}=this,{imageMaxHeight:r,imageMaxWidth:i}=e;this.strategy=new S({container:t,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(l$2((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion");}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren();}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate();}createFetchPopupFeaturesQuery(e){const{view:t,container:r}=this,{x:s,y:i}=e,{spatialReference:o}=t;let n=null,p=0,m=0;if(r.children.some((e=>{const{width:t,height:r,resolution:h,x:c,y:d}=e,u=c+h*t,l=d-h*r;return s>=c&&s<=u&&i<=d&&i>=l&&(n=new M({xmin:c,ymin:l,xmax:u,ymax:d,spatialReference:o}),p=t,m=r,!0)})),!n)return null;const h=n.width/p,c=Math.round((s-n.xmin)/h),d=Math.round((n.ymax-i)/h);return {extent:n,width:p,height:m,x:c,y:d}}async doRefresh(){this.requestUpdate();}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,s){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,...s})}};e([d()],l.prototype,"strategy",void 0),e([d()],l.prototype,"updating",void 0),l=e([n("esri.views.2d.layers.WMSLayerView2D")],l);const y=l;

export { y as default };
//# sourceMappingURL=WMSLayerView2D.e77ab780.js.map
