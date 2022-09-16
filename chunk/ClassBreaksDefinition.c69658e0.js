import { ca as s, $ as e, a0 as d, eb as a$1, ec as m$1, ed as p, a1 as n$1, ce as l$2 } from '../index.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const c=new s({classBreaksDef:"class-breaks-definition",uniqueValueDef:"unique-value-definition"});let l$1=class extends l$2{constructor(){super(...arguments),this.baseSymbol=null,this.colorRamp=null,this.type=null;}};e([d({type:a$1,json:{write:!0}})],l$1.prototype,"baseSymbol",void 0),e([d({types:m$1,json:{read:{reader:p},write:!0}})],l$1.prototype,"colorRamp",void 0),e([d({json:{read:c.read,write:c.write}})],l$1.prototype,"type",void 0),l$1=e([n$1("esri.rest.support.ClassificationDefinition")],l$1);const m=l$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const o=new s({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),a=new s({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let n=class extends m{constructor(){super(...arguments),this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null,this.type="class-breaks-definition";}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e);}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e);}};e([d({json:{write:!0}})],n.prototype,"breakCount",void 0),e([d({json:{write:!0}})],n.prototype,"classificationField",void 0),e([d({type:String,json:{read:o.read,write:o.write}})],n.prototype,"classificationMethod",void 0),e([d({json:{write:!0}})],n.prototype,"normalizationField",void 0),e([d({json:{read:a.read,write:a.write}})],n.prototype,"normalizationType",void 0),e([d({value:null,json:{write:!0}})],n.prototype,"standardDeviationInterval",null),e([d({value:null,json:{write:!0}})],n.prototype,"definedInterval",null),e([d()],n.prototype,"type",void 0),n=e([n$1("esri.rest.support.ClassBreaksDefinition")],n);const l=n;

export { l };
//# sourceMappingURL=ClassBreaksDefinition.c69658e0.js.map
