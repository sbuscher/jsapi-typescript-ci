import { e8 as p$1, ao as R, a8 as j, h as e, cP as a, aM as k, y as u, e9 as d$1, ea as y$1 } from '../index.js';
import { O } from './quantizationUtils.c974b9d1.js';
import { T, s, m, c as c$1, V, g as g$1, h as h$1, y as y$2, D, z as z$1 } from './utils.93eac933.js';
import './ClassBreaksDefinition.c69658e0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let h=null;function y(e,t,n){return e.x<0?e.x+=t:e.x>n&&(e.x-=t),e}function I(e$1,n,r,o){const u=p$1(r)?R(r):null,a=u?Math.round((u.valid[1]-u.valid[0])/n.scale[0]):null;return e$1.map((e$1=>{const r=new j(e(e$1.geometry));return O(n,r,r,r.hasZ,r.hasM),e$1.geometry=u?y(r,a,o[0]):r,e$1}))}function $(e,t=18,n,o,i,s){const l=new Float64Array(i*s);t=Math.round(u(t));let u$1=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,m=0,d=0,p=0,h=0;const y=d$1(o,n);for(const{geometry:r,attributes:c}of e){const{x:e,y:n}=r,o=Math.max(0,e-t),I=Math.max(0,n-t),$=Math.min(s,n+t),g=Math.min(i,e+t),j=+y(c);for(let r=I;r<$;r++)for(let s=o;s<g;s++){const o=r*i+s,c=y$1(s-e,r-n,t),y=l[o];m=l[o]+=c*j;const I=m-y;d+=I,p+=I*I,m<u$1&&(u$1=m),m>a&&(a=m),h++;}}if(!h)return {mean:0,stddev:0,min:0,max:0,mid:0,count:0};const I=(a-u$1)/2;return {mean:d/h,stdDev:Math.sqrt((p-d*d/h)/h),min:u$1,max:a,mid:I,count:h}}async function g(e,t){if(!t)return [];const n=e.field,r=e.valueExpression,i=e.normalizationType,s=e.normalizationField,l=e.normalizationTotal,u=[],a$1=e.viewInfoParams;let f=null,c=null;if(r){if(!h){const{arcadeUtils:e}=await a();h=e;}f=h.createFunction(r),c=a$1&&h.getViewInfo({viewingMode:a$1.viewingMode,scale:a$1.scale,spatialReference:new k(a$1.spatialReference)});}const p=e.fieldInfos,y=!(t[0]&&"declaredClass"in t[0]&&"esri.Graphic"===t[0].declaredClass)&&p?{fields:p}:null;return t.forEach((e=>{const t=e.attributes;let o;if(r){const t=y?{...e,layer:y}:e,n=h.createExecContext(t,c);o=h.executeFunction(f,n);}else t&&(o=t[n]);if(i&&isFinite(o)){const e=t&&parseFloat(t[s]);o=T(o,i,e,l);}u.push(o);})),u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function d(i){const{attribute:e,features:s$1}=i,{normalizationType:r,normalizationField:m$1,minValue:u,maxValue:f,fieldType:d}=e,p=await g({field:e.field,valueExpression:e.valueExpression,normalizationType:r,normalizationField:m$1,normalizationTotal:e.normalizationTotal,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},s$1),v=s({normalizationType:r,normalizationField:m$1,minValue:u,maxValue:f}),c={value:.5,fieldType:d},z="esriFieldTypeString"===d?m({values:p,supportsNullCount:v,percentileParams:c}):c$1({values:p,minValue:u,maxValue:f,useSampleStdDev:!r,supportsNullCount:v,percentileParams:c});return V(z,"esriFieldTypeDate"===d)}async function p(i){const{attribute:e,features:n}=i,o=await g({field:e.field,valueExpression:e.valueExpression,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n),t=g$1(o);return h$1(t,e.domain,e.returnAllCodedValues)}async function v(i){const{attribute:e,features:n}=i,{field:o,normalizationType:t,normalizationField:l,normalizationTotal:s,classificationMethod:r}=e,f=await g({field:o,valueExpression:e.valueExpression,normalizationType:t,normalizationField:l,normalizationTotal:s,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n),d=y$2(f,{field:o,normalizationType:t,normalizationField:l,normalizationTotal:s,classificationMethod:r,standardDeviationInterval:e.standardDeviationInterval,numClasses:e.numClasses,minValue:e.minValue,maxValue:e.maxValue});return D(d,r)}async function c(i){const{attribute:e,features:n}=i,{field:o,normalizationType:t,normalizationField:l,normalizationTotal:s,classificationMethod:r}=e,m=await g({field:o,valueExpression:e.valueExpression,normalizationType:t,normalizationField:l,normalizationTotal:s,viewInfoParams:e.viewInfoParams,fieldInfos:e.fieldInfos},n);return z$1(m,{field:o,normalizationType:t,normalizationField:l,normalizationTotal:s,classificationMethod:r,standardDeviationInterval:e.standardDeviationInterval,numBins:e.numBins,minValue:e.minValue,maxValue:e.maxValue})}async function z(a){const{attribute:n,features:o}=a,{field:t,radius:l,fieldOffset:s,transform:r,spatialReference:m,size:u}=n,f=I(o,r,m,u),{count:d,min:p,max:v,mean:c,stdDev:z}=$(f,l,s,t,u[0],u[1]);return {count:d,min:p,max:v,avg:c,stddev:z}}

export { v as classBreaks, z as heatmapStatistics, c as histogram, d as summaryStatistics, p as uniqueValues };
//# sourceMappingURL=statsWorker.3932a2ea.js.map
