import { $ as e, a0 as d, a1 as n, cB as a, p as g, s } from '../index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add(a((()=>this.layer),"refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{g(r)||s.getLogger(this.declaredClass).error(r);}));})),"RefreshableLayerView");}};return e([d()],c.prototype,"layer",void 0),c=e([n("esri.layers.mixins.RefreshableLayerView")],c),c};

export { i };
//# sourceMappingURL=RefreshableLayerView.717a4ac7.js.map
