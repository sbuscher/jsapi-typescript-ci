import { fc as t, A as n$1, eT as P, eX as e, eO as u, a6 as q$2, a5 as s$1, eU as l, s as s$2, gr as n$2, fq as a$1, gs as r, eS as r$1, t as t$1, eY as x, eW as _$1, gt as p, f4 as L$1, gq as v, eP as z$1, gu as P$1, C as o, gn as p$1 } from '../index.js';
import { s, c, f } from './vectorStacks.4201351c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var n;!function(n){n[n.X=0]="X",n[n.Y=1]="Y",n[n.Z=2]="Z";}(n||(n={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function d(i){return i?{origin:t(i.origin),direction:t(i.direction)}:{origin:n$1(),direction:n$1()}}function j(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function b(i,n,r){const t=P(i.direction,e(r,n,i.origin));return u(r,i.origin,q$2(r,i.direction,t)),r}function q$1(){return {origin:null,direction:null}}const S=new s(q$1);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function a(o,s){const c=P(o,s)/(s$1(o)*s$1(s));return -l(c)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const R=s$2.getLogger("esri.geometry.support.sphere");function _(){return n$2()}function q(t,r=_()){return a$1(r,t)}function w(t,r$1){return r(t[0],t[1],t[2],r$1)}function C(t){return t}function O(t){t[0]=t[1]=t[2]=t[3]=0;}function T(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function k(t){return t[3]}function E(t){return t}function L(t,r$1,n,o){return r(t,r$1,n,o)}function Z(t,r,n){return t!==n&&r$1(n,t),n[3]=t[3]+r,n}function z(t,r,n){return R.error("sphere.setExtent is not yet supported"),t===n?n:q(t,n)}function U(t,r,n){if(t$1(r))return !1;const{origin:e,direction:s}=r,i=V;i[0]=e[0]-t[0],i[1]=e[1]-t[1],i[2]=e[2]-t[2];const a=s[0]*s[0]+s[1]*s[1]+s[2]*s[2],c=2*(s[0]*i[0]+s[1]*i[1]+s[2]*i[2]),u=c*c-4*a*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return !1;const f=Math.sqrt(u);let m=(-c-f)/(2*a);const p=(-c+f)/(2*a);return (m<0||p<m&&p>0)&&(m=p),!(m<0)&&(n&&(n[0]=e[0]+s[0]*m,n[1]=e[1]+s[1]*m,n[2]=e[2]+s[2]*m),!0)}const V=n$1();function X(t,r){return U(t,r,null)}function Y(t,r,n){if(U(t,r,n))return n;const o=B(t,r,c.get());return u(n,r.origin,q$2(c.get(),r.direction,x(r.origin,o)/s$1(r.direction))),n}function B(t,r,n){const o=c.get(),s=f.get();_$1(o,r.origin,r.direction);const i=k(t);_$1(n,o,r.origin),q$2(n,n,1/s$1(n)*i);const c$1=H(t,r.origin),p$1=a(r.origin,n);return p(s,p$1+c$1,o),L$1(n,n,s),n}function D(t,r,n){return U(t,r,n)?n:(b(r,E(t),n),F(t,n,n))}function F(t,r,n){const o=e(c.get(),r,E(t)),e$1=q$2(c.get(),o,t[3]/s$1(o));return u(n,e$1,E(t))}function G(t,r){const n=e(c.get(),r,E(t)),o=v(n),e$1=t[3]*t[3];return Math.sqrt(Math.abs(o-e$1))}function H(t,n){const o=e(c.get(),n,E(t)),e$1=s$1(o),s=k(t),i=s+Math.abs(s-e$1);return l(s/i)}const I=n$1();function J(t,r,o$1,e$1){const s=e(I,r,E(t));switch(o$1){case n.X:{const t=P$1(s,I)[2];return o(e$1,-Math.sin(t),Math.cos(t),0)}case n.Y:{const t=P$1(s,I),r=t[1],o$1=t[2],i=Math.sin(r);return o(e$1,-i*Math.cos(o$1),-i*Math.sin(o$1),Math.cos(r))}case n.Z:return z$1(e$1,s);default:return}}function K(t,r){const n=e(W,r,E(t));return s$1(n)-t[3]}function N(t,r,n$1,o){const e=K(t,r),s=J(t,r,n.Z,W),c=q$2(W,s,n$1-e);return u(o,r,c)}function Q(t,r){const n=p$1(E(t),r),o=k(t);return n<=o*o}const W=n$1(),$=_();Object.freeze(Object.defineProperty({__proto__:null,create:_,copy:q,fromCenterAndRadius:w,wrap:C,clear:O,fromRadius:T,getRadius:k,getCenter:E,fromValues:L,elevate:Z,setExtent:z,intersectRay:U,intersectsRay:X,intersectRayClosestSilhouette:Y,closestPointOnSilhouette:B,closestPoint:D,projectPoint:F,distanceToSilhouette:G,angleToSilhouette:H,axisAt:J,altitudeAt:K,setAltitudeAt:N,containsPoint:Q,tmpSphere:$},Symbol.toStringTag,{value:"Module"}));

export { E, Q, X, _, d, j, k, q };
//# sourceMappingURL=sphere.cd3303e0.js.map
