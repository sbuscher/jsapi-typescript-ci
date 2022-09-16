import { fc as t, A as n, eS as r, eX as e, eT as P, gq as v$1, a6 as q, W as o, eO as u } from '../index.js';
import { s, c } from './vectorStacks.4201351c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function v(t$1){return t$1?{origin:t(t$1.origin),vector:t(t$1.vector)}:{origin:n(),vector:n()}}function l(t,r$1,i=v()){return r(i.origin,t),e(i.vector,r$1,t),i}function d(t,r,n){return A(t,r,0,1,n)}function A(r,n,s,a,g){const{vector:v,origin:p}=r,h=e(c.get(),n,p),m=P(v,h)/v$1(v);return q(g,v,o(m,s,a)),u(g,g,r.origin)}new s((()=>({origin:null,vector:null})));

export { d, l, v };
//# sourceMappingURL=lineSegment.c80cb9d8.js.map
