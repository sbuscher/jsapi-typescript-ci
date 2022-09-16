import { $ as e, a0 as d, a1 as n } from '../index.js';
import B from './FeatureLayerView2D.ab1b5885.js';
import './utils.8c9e5b3d.js';
import './Utils.83ec6664.js';
import './enums.480c78cc.js';
import './enums.f11416db.js';
import './Texture.504bc158.js';
import './VertexElementDescriptor.e016eb10.js';
import './MaterialKey.65ea99d2.js';
import './LayerView.c04c5e87.js';
import './schemaUtils.802574ce.js';
import './visualVariablesUtils.e277d2f2.js';
import './createSymbolSchema.e7ce6d11.js';
import './CIMSymbolHelper.b2c92c48.js';
import './BidiEngine.28baa92e.js';
import './GeometryUtils.820db37a.js';
import './ExpandedCIM.70bfa7d4.js';
import './quantizationUtils.6164f587.js';
import './MD5.ce941704.js';
import './util.2594adbf.js';
import './floorFilterUtils.a7d9cb9f.js';
import './popupUtils.da1461f8.js';
import './RefreshableLayerView.717a4ac7.js';

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
//# sourceMappingURL=OGCFeatureLayerView2D.ad793216.js.map
