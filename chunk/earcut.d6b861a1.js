/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var e,n,t,r={exports:{}};e=r,n=function(){function e(e,t,x){x=x||2;var i,u,v,o,y,p,a,l=t&&t.length,h=l?t[0]*x:e.length,s=n(e,0,h,x,!0),c=[];if(!s||s.next===s.prev)return c;if(l&&(s=f(e,t,s,x)),e.length>80*x){i=v=e[0],u=o=e[1];for(var Z=x;Z<h;Z+=x)(y=e[Z])<i&&(i=y),(p=e[Z+1])<u&&(u=p),y>v&&(v=y),p>o&&(o=p);a=0!==(a=Math.max(v-i,o-u))?1/a:0;}return r(s,c,x,i,u,a),c}function n(e,n,t,r,x){var i,u;if(x===E(e,n,t,r)>0)for(i=n;i<t;i+=r)u=B(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=B(i,e[i],e[i+1],u);if(u&&M(u,u.next)){var v=u.next;C(u),u=v;}return u}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!M(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else {var x=r.prev;if(C(r),(r=n=x)===r.next)break;t=!0;}}while(t||r!==n);return n}function r(e,n,f,o,y,p,a){if(e){!a&&p&&h(e,o,y,p);for(var l,s,c=e;e.prev!==e.next;)if(l=e.prev,s=e.next,p?i(e,o,y,p):x(e))n.push(l.i/f),n.push(e.i/f),n.push(s.i/f),C(e),e=s.next,c=s.next;else if((e=s)===c){a?1===a?r(e=u(t(e),n,f),n,f,o,y,p,2):2===a&&v(e,n,f,o,y,p):r(t(e),n,f,o,y,p,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(w(n,t,r)>=0)return !1;for(var x=e.next.next;x!==e.prev;){if(g(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&w(x.prev,x,x.next)>=0)return !1;x=x.next;}return !0}function i(e,n,t,r){var x=e.prev,i=e,u=e.next;if(w(x,i,u)>=0)return !1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,o=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,y=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=c(v,f,n,t,r),a=c(o,y,n,t,r),l=e.prevZ,h=e.nextZ;l&&l.z>=p&&h&&h.z<=a;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return !1;if(l=l.prevZ,h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return !1;h=h.nextZ;}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return !1;l=l.prevZ;}for(;h&&h.z<=a;){if(h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return !1;h=h.nextZ;}return !0}function u(e,n,r){var x=e;do{var i=x.prev,u=x.next.next;!M(i,u)&&z(i,x,x.next,u)&&j(i,u)&&j(u,i)&&(n.push(i.i/r),n.push(x.i/r),n.push(u.i/r),C(x),C(x.next),x=e=u),x=x.next;}while(x!==e);return t(x)}function v(e,n,x,i,u,v){var f=e;do{for(var o=f.next.next;o!==f.prev;){if(f.i!==o.i&&d(f,o)){var y=A(f,o);return f=t(f,f.next),y=t(y,y.next),r(f,n,x,i,u,v),void r(y,n,x,i,u,v)}o=o.next;}f=f.next;}while(f!==e)}function f(e,r,x,i){var u,v,f,y=[];for(u=0,v=r.length;u<v;u++)(f=n(e,r[u]*i,u<v-1?r[u+1]*i:e.length,i,!1))===f.next&&(f.steiner=!0),y.push(Z(f));for(y.sort(o),u=0;u<y.length;u++)x=t(x=p(y[u],x),x.next);return x}function o(e,n){return e.x-n.x}function y(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t;}return n}function p(e,n){var r=a(e,n);if(!r)return n;var x=A(r,e),i=t(r,r.next);let u=y(x);return t(u,u.next),i=y(i),y(n===r?i:n)}function a(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next;}}r=r.next;}while(r!==n);if(!t)return null;if(x===u)return t;var f,o=t,y=t.x,p=t.y,a=1/0;r=t;do{x>=r.x&&r.x>=y&&x!==r.x&&g(i<p?x:u,i,y,p,i<p?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),j(r,e)&&(f<a||f===a&&(r.x>t.x||r.x===t.x&&l(t,r)))&&(t=r,a=f)),r=r.next;}while(r!==o);return t}function l(e,n){return w(e.prev,e,n.prev)<0&&w(n.next,e,e.next)<0}function h(e,n,t,r){var x=e;do{null===x.z&&(x.z=c(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next;}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,s(x);}function s(e){var n,t,r,x,i,u,v,f,o=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<o&&(v++,r=r.nextZ);n++);for(f=o;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r;}i.nextZ=null,o*=2;}while(u>1);return e}function c(e,n,t,r,x){return (e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function Z(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next;}while(n!==e);return t}function g(e,n,t,r,x,i,u,v){return (x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function d(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!k(e,n)&&(j(e,n)&&j(n,e)&&q(e,n)&&(w(e.prev,e,n.prev)||w(e,n.prev,n))||M(e,n)&&w(e.prev,e,e.next)>0&&w(n.prev,n,n.next)>0)}function w(e,n,t){return (n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function M(e,n){return e.x===n.x&&e.y===n.y}function z(e,n,t,r){var x=m(w(e,n,t)),i=m(w(e,n,r)),u=m(w(t,r,e)),v=m(w(t,r,n));return x!==i&&u!==v||!(0!==x||!b(e,t,n))||!(0!==i||!b(e,r,n))||!(0!==u||!b(t,e,r))||!(0!==v||!b(t,n,r))}function b(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function k(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&z(t,t.next,e,n))return !0;t=t.next;}while(t!==e);return !1}function j(e,n){return w(e.prev,e,e.next)<0?w(e,n,e.next)>=0&&w(e,e.prev,n)>=0:w(e,n,e.prev)<0||w(e,e.next,n)<0}function q(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;}while(t!==e);return r}function A(e,n){var t=new D(e.i,e.x,e.y),r=new D(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function B(e,n,t,r){var x=new D(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function C(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ);}function D(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1;}function E(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}return e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(E(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var o=n[v]*t,y=v<f-1?n[v+1]*t:e.length;u-=Math.abs(E(e,o,y,t));}var p=0;for(v=0;v<r.length;v+=3){var a=r[v]*t,l=r[v+1]*t,h=r[v+2]*t;p+=Math.abs((e[a]-e[h])*(e[l+1]-e[a+1])-(e[a]-e[l])*(e[h+1]-e[a+1]));}return 0===u&&0===p?0:Math.abs((p-u)/u)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r));}return t},e},void 0!==(t=n())&&(e.exports=t);const x=r.exports;

export { x };
//# sourceMappingURL=earcut.d6b861a1.js.map
