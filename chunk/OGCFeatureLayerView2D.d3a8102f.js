import { $ as e, a0 as d, a1 as n } from '../index.js';
import B from './FeatureLayerView2D.be86524f.js';
import './utils.2eac84cb.js';
import './Utils.1fc429c3.js';
import './enums.480c78cc.js';
import './enums.f11416db.js';
import './Texture.4714e8e3.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.4064f2b9.js';
import './LayerView.24b740d0.js';
import './schemaUtils.15933d21.js';
import './visualVariablesUtils.dea6a714.js';
import './createSymbolSchema.2d5b3b2e.js';
import './CIMSymbolHelper.09f60ba6.js';
import './BidiEngine.28baa92e.js';
import './GeometryUtils.820db37a.js';
import './ExpandedCIM.56160d60.js';
import './quantizationUtils.c974b9d1.js';
import './MD5.ce941704.js';
import './util.7da23965.js';
import './floorFilterUtils.a7d9cb9f.js';
import './popupUtils.24717879.js';
import './RefreshableLayerView.96a24d61.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{get availableFields(){return this.layer.fieldsIndex.fields.map((e=>e.name))}};return e([d()],t.prototype,"layer",void 0),e([d({readOnly:!0})],t.prototype,"availableFields",null),t=e([n("esri.views.layers.OGCFeatureLayerView")],t),t};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let t=class extends(o(B)){supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}};t=e([n("esri.views.2d.layers.OGCFeatureLayerView2D")],t);const a=t;

export { a as default };
//# sourceMappingURL=OGCFeatureLayerView2D.d3a8102f.js.map
