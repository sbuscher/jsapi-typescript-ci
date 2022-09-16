import { bw as c, f as s, r, bA as B, bB as j$1, bC as i, bD as d$1, gV as Ot, by as j$2, bz as p, gW as p$1, gX as c$2, gY as p$2, gZ as l, bx as U } from '../index.js';
import { c as c$1, a } from './devEnvironmentUtils.d5854ef4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function j(t,e,r,l){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?d(t,e,l):c(t,e,l).then((o=>h(o,t.name,e,r,l))):Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function h(f,b,j,h,d){const U=f.data,N=j&&r(j.portal)?j.portal:B.getDefault(),w={portal:N,url:j$1(f.baseUrl),origin:"portal-item"},D=U.items.find((t=>t.name===b));if(!D){const t=`The symbol name '${b}' could not be found`;return Promise.reject(new s("symbolstyleutils:symbol-name-not-found",t,{symbolName:b}))}let P=i(d$1(D,h),w),S=D.thumbnail&&D.thumbnail.href;const E=D.thumbnail&&D.thumbnail.imageData;c$1()&&(P=a(P),S=a(S));const O={portal:N,url:j$1(Ot(P)),origin:"portal-item"};return j$2(P,d).then((e=>{const r="cimRef"===h?p(e.data):e.data,o=p$1(r,O);if(o&&c$2(o)){if(S){const t=i(S,w);o.thumbnail=new p$2({url:t});}else E&&(o.thumbnail=new p$2({url:`data:image/png;base64,${E}`}));f.styleUrl?o.styleOrigin=new l({portal:j.portal,styleUrl:f.styleUrl,name:b}):f.styleName&&(o.styleOrigin=new l({portal:j.portal,styleName:f.styleName,name:b}));}return o}))}function d(t,e,r$1){const o=U.replace(/\{SymbolName\}/gi,t.name),i=r(e.portal)?e.portal:B.getDefault();return j$2(o,r$1).then((t=>{const e=p(t.data);return p$1(e,{portal:i,url:j$1(Ot(o)),origin:"portal-item"})}))}

export { h as fetchSymbolFromStyle, j as resolveWebStyleSymbol };
//# sourceMappingURL=webStyleSymbolUtils.1f02122d.js.map
