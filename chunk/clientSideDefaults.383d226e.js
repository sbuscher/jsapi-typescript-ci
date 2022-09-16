import { et as l$1, eu as o, ev as S, e as a$1, aX as m } from '../index.js';
import { t } from './QueryEngineCapabilities.c86013fd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function u(t){return {renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?l$1:"esriGeometryPolyline"===t?o:S}}}const n=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let i=1;function a(s,e){if(a$1("esri-csp-restrictions"))return ()=>({[e]:null,...s});try{let t=`this.${e} = null;`;for(const e in s){t+=`this${n.test(e)?`.${e}`:`["${e}"]`} = ${JSON.stringify(s[e])};`;}const r=new Function(`\n      return class AttributesClass$${i++} {\n        constructor() {\n          ${t};\n        }\n      }\n    `)();return ()=>new r}catch(r){return ()=>({[e]:null,...s})}}function l(t={}){return [{name:"New Feature",description:"",prototype:{attributes:m(t)}}]}function c(t$1,s){return {analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t$1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0},query:t,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}

export { a, c, l, u };
//# sourceMappingURL=clientSideDefaults.383d226e.js.map
