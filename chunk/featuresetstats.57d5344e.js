import { hl as G, hV as J, hk as L, h9 as w, ho as E, hn as I } from '../index.js';
import { n as l } from './arcadeUtils.74a97a17.js';
import { WhereClause as m } from './WhereClause.c61765bb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
async function o(n,e,o,f,l$1,d){if(1===f.length){if(L(f[0]))return l(n,f[0],I(f[1],-1));if(E(f[0]))return l(n,f[0].toArray(),I(f[1],-1))}else if(2===f.length){if(L(f[0]))return l(n,f[0],I(f[1],-1));if(E(f[0]))return l(n,f[0].toArray(),I(f[1],-1));if(J(f[0])){const t=await f[0].load(),r=await s(m.create(f[1],t.getFieldsIndex()),d,l$1);return f[0].calculateStatistic(n,r,I(f[2],1e3),e.abortSignal)}}else if(3===f.length&&J(f[0])){const t=await f[0].load(),r=await s(m.create(f[1],t.getFieldsIndex()),d,l$1);return f[0].calculateStatistic(n,r,I(f[2],1e3),e.abortSignal)}return l(n,f,-1)}async function s(n,t,r){const e=n.getVariables();if(e.length>0){const a=[];for(let n=0;n<e.length;n++){const i={name:e[n]};a.push(await t.evaluateIdentifier(r,i));}const i={};for(let n=0;n<e.length;n++)i[e[n]]=a[n];return n.parameters=i,n}return n}function f(i){"async"===i.mode&&(i.functions.stdev=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("stdev",t,r,e,n,i)}))},i.functions.variance=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("variance",t,r,e,n,i)}))},i.functions.average=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("mean",t,r,e,n,i)}))},i.functions.mean=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("mean",t,r,e,n,i)}))},i.functions.sum=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("sum",t,r,e,n,i)}))},i.functions.min=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("min",t,r,e,n,i)}))},i.functions.max=function(n,t){return i.standardFunctionAsync(n,t,(function(t,r,e){return o("max",t,r,e,n,i)}))},i.functions.count=function(u,c){return i.standardFunctionAsync(u,c,(function(i,u,c){if(G(c,1,1),J(c[0]))return c[0].count(i.abortSignal);if(L(c[0])||w(c[0]))return c[0].length;if(E(c[0]))return c[0].length();throw new Error("Invalid Parameters for Count")}))});}

export { f as registerFunctions };
//# sourceMappingURL=featuresetstats.57d5344e.js.map