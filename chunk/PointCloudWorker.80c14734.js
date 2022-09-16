import { f as s$2, s as s$3, aX as m$2, t as t$2, r as r$2, gh as o$1, aM as k, f8 as Un, gi as S$1 } from '../index.js';
import { S } from './quat.ebe12c52.js';
import { r as r$3, n as n$2 } from './vec3f32.d9d17da6.js';
import { a as a$3, b as a$4, d as d$3 } from './PointCloudUniqueValueRenderer.e57e77a8.js';
import { O as O$1 } from './VertexAttribute.33243f22.js';
import './quatf64.c1e27511.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(){const e=new Float32Array(4);return e[3]=1,e}function r$1(e){const r=new Float32Array(4);return r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r}function t$1(e,r,t,n){const o=new Float32Array(4);return o[0]=e,o[1]=r,o[2]=t,o[3]=n,o}function n$1(e,r){return new Float32Array(e,r,4)}Object.freeze(Object.defineProperty({__proto__:null,create:e,clone:r$1,fromValues:t$1,createView:n$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t=!0,o={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function r(e,r,n){return {identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+o.identifierOffset,o.identifierLength)),version:r.getUint16(n+o.versionOffset,t),checksum:r.getUint32(n+o.checksumOffset,t)}}const n={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function i(e,o){return {sizeLo:e.getUint32(o+n.sizeLo,t),sizeHi:e.getUint32(o+n.sizeHi,t),minX:e.getFloat64(o+n.minX,t),minY:e.getFloat64(o+n.minY,t),minZ:e.getFloat64(o+n.minZ,t),maxX:e.getFloat64(o+n.maxX,t),maxY:e.getFloat64(o+n.maxY,t),maxZ:e.getFloat64(o+n.maxZ,t),errorX:e.getFloat64(o+n.errorX,t),errorY:e.getFloat64(o+n.errorY,t),errorZ:e.getFloat64(o+n.errorZ,t),count:e.getUint32(o+n.count,t),reserved:e.getUint32(o+n.reserved,t)}}function c$3(t){const c=new DataView(t,0);let d=0;const{identifier:l,version:a}=r(t,c,d);if(d+=o.byteCount,"LEPCC     "!==l)throw new s$2("lepcc-decode-error","Bad identifier");if(a>1)throw new s$2("lepcc-decode-error","Unknown version");const u=i(c,d);d+=n.byteCount;if(u.sizeHi*2**32+u.sizeLo!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");const f=new Float64Array(3*u.count),h=[],w=[],g=[],p=[];if(d=s$1(t,d,h),d=s$1(t,d,w),d=s$1(t,d,g),d=s$1(t,d,p),d!==t.byteLength)throw new s$2("lepcc-decode-error","Bad length");let m=0,U=0;for(let e=0;e<h.length;e++){U+=h[e];let t=0;for(let o=0;o<w[e];o++){t+=g[m];const e=p[m];f[3*m]=Math.min(u.maxX,u.minX+2*u.errorX*t),f[3*m+1]=Math.min(u.maxY,u.minY+2*u.errorY*U),f[3*m+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*e),m++;}}return {errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:f}}function s$1(e,t,o){const r=[];t=d$2(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=d$2(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i]);}return t}function d$2(o,r,n){const i=new DataView(o,r),c=i.getUint8(0),s=31&c,d=!!(32&c),l=(192&c)>>6;let a=0;if(0===l)a=i.getUint32(1,t),r+=5;else if(1===l)a=i.getUint16(1,t),r+=3;else {if(2!==l)throw new s$2("lepcc-decode-error","Bad count type");a=i.getUint8(1),r+=2;}if(d)throw new s$2("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*s/8),f=new Uint8Array(o,r,u);let h=0,w=0,g=0;const p=-1>>>32-s;for(let e=0;e<a;e++){for(;w<s;)h|=f[g]<<w,w+=8,g+=1;n[e]=h&p,h>>>=s,w-=s,w+s>32&&(h|=f[g-1]>>8-w);}return r+g}const l$1={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function a$2(e,o){return {sizeLo:e.getUint32(o+l$1.sizeLo,t),sizeHi:e.getUint32(o+l$1.sizeHi,t),count:e.getUint32(o+l$1.count,t),colorMapCount:e.getUint16(o+l$1.colorMapCount,t),lookupMethod:e.getUint8(o+l$1.lookupMethod),compressionMethod:e.getUint8(o+l$1.compressionMethod)}}function u$1(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"ClusterRGB"!==c)throw new s$2("lepcc-decode-error","Bad identifier");if(s>1)throw new s$2("lepcc-decode-error","Unknown version");const d=a$2(n,i);i+=l$1.byteCount;if(d.sizeHi*2**32+d.sizeLo!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");if((2===d.lookupMethod||1===d.lookupMethod)&&0===d.compressionMethod){if(3*d.colorMapCount+d.count+i!==t.byteLength||d.colorMapCount>256)throw new s$2("lepcc-decode-error","Bad count");const o=new Uint8Array(t,i,3*d.colorMapCount),r=new Uint8Array(t,i+3*d.colorMapCount,d.count),n=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++){const t=r[e];n[3*e]=o[3*t],n[3*e+1]=o[3*t+1],n[3*e+2]=o[3*t+2];}return n}if(0===d.lookupMethod&&0===d.compressionMethod){if(3*d.count+i!==t.byteLength||0!==d.colorMapCount)throw new s$2("lepcc-decode-error","Bad count");return new Uint8Array(t,i).slice()}if(d.lookupMethod<=2&&1===d.compressionMethod){if(i+3!==t.byteLength||1!==d.colorMapCount)throw new s$2("lepcc-decode-error","Bad count");const o=n.getUint8(i),r=n.getUint8(i+1),c=n.getUint8(i+2),s=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=c;return s}throw new s$2("lepcc-decode-error","Bad method "+d.lookupMethod+","+d.compressionMethod)}const f$2={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h$2(e,o){return {sizeLo:e.getUint32(o+f$2.sizeLo,t),sizeHi:e.getUint32(o+f$2.sizeHi,t),count:e.getUint32(o+f$2.count,t),scaleFactor:e.getUint16(o+f$2.scaleFactor,t),bitsPerPoint:e.getUint8(o+f$2.bitsPerPoint),reserved:e.getUint8(o+f$2.reserved)}}function w(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"Intensity "!==c)throw new s$2("lepcc-decode-error","Bad identifier");if(s>1)throw new s$2("lepcc-decode-error","Unknown version");const l=h$2(n,i);i+=f$2.byteCount;if(l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");const a=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+i!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");const o=new Uint8Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor;}else if(16===l.bitsPerPoint){if(2*l.count+i!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");const o=new Uint16Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor;}else {const o=[];if(d$2(t,i,o)!==t.byteLength)throw new s$2("lepcc-decode-error","Bad size");for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor;}return a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const u=s$3.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function a$1(t,n,r){let o="",i=0;for(;i<r;){const u=t[n+i];if(u<128)o+=String.fromCharCode(u),i++;else if(u>=192&&u<224){if(i+1>=r)throw new s$2("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&u)<<6|63&t[n+i+1];o+=String.fromCharCode(a),i+=2;}else if(u>=224&&u<240){if(i+2>=r)throw new s$2("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&u)<<12|(63&t[n+i+1])<<6|63&t[n+i+2];o+=String.fromCharCode(a),i+=3;}else {if(!(u>=240&&u<248))throw new s$2("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new s$2("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&u)<<18|(63&t[n+i+1])<<12|(63&t[n+i+2])<<6|63&t[n+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t);}else o+=String.fromCharCode(a);i+=4;}}}return o}function s(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],u=i.valueType||i.type,a=h$1[u];n.fields[i.property]=a(e,r),r+=m$1[u].BYTES_PER_ELEMENT;}return n.byteCount=r,n}function c$2(t,n,r){const o=[];let i,u,s=0;for(u=0;u<t;u+=1){if(i=n[u],i>0){if(o.push(a$1(r,s,i-1)),0!==r[s+i-1])throw new s$2("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i;}return o}function f$1(e,t){return new(m$1[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function l(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function b$1(n,r,o){const i=null!=r.header?s(n,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},u={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let s=0;s<r.ordering.length;s++){const n=r.ordering[s],o=m$2(r[n]);if(o.count=i.fields.count,"String"===o.valueType){if(o.byteOffset=a,o.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==o.encoding)throw new s$2("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding})}else {if(!A(o.valueType))throw new s$2("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=O(o.valueType);a+=a%e!=0?e-a%e:0,o.byteOffset=a,o.byteCount=e*o.valuesPerElement*o.count;}}a+=o.byteCount,u.entries[n]=o;}return u.byteCount=a-u.byteOffset,u}function d$1(t,n,r){if(n!==t&&u.error(`Invalid ${r} buffer size\n expected: ${t}, actual: ${n})`),n<t)throw new s$2("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:n})}function g(e,t){const n=s(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const e={...t.vertexAttributes[s],byteOffset:r,count:u},n=C[s]?C[s]:"_"+s;o.vertexAttributes[n]=e,r+=O(e.valueType)*e.valuesPerElement*u;}const a=i.faceCount;if(t.faces&&a){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:a};o.faces[e]=n,r+=O(n.valueType)*n.valuesPerElement*a;}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n;r+=("UInt64"===n.valueType?8:O(n.valueType))*n.valuesPerElement*c;}}return d$1(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}const C={position:O$1.POSITION,normal:O$1.NORMAL,color:O$1.COLOR,uv0:O$1.UV0,region:O$1.UVREGION};function I(t,n,i){if("lepcc-rgb"===t.encoding)return u$1(n);if("lepcc-intensity"===t.encoding)return w(n);if(null!=t.encoding&&""!==t.encoding)throw new s$2("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(u.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(u.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const a=b$1(n,t,i);d$1(a.byteOffset+a.byteCount,n.byteLength,"attribute");const s=a.entries.attributeValues||a.entries.objectIds;if(s){if("String"===s.valueType){const e=a.entries.attributeByteCounts,t=f$1(n,e),r=l(n,s);return c$2(e.count,t,r)}return f$1(n,s)}throw new s$2("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const m$1={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},h$1={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function A(e){return m$1.hasOwnProperty(e)}function O(e){return A(e)?m$1[e].BYTES_PER_ELEMENT:0}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function f(e,o,n,s){const{rendererJSON:i,isRGBRenderer:u}=e;let f=null,c=null;if(o&&u)f=o;else if(o&&"pointCloudUniqueValueRenderer"===i.type){c=a$3.fromJSON(i);const e=c.colorUniqueValueInfos;f=new Uint8Array(3*s);const r=p$1(c.fieldTransformType);for(let t=0;t<s;t++){const l=(r?r(o[t]):o[t])+"";for(let o=0;o<e.length;o++)if(e[o].values.includes(l)){f[3*t]=e[o].color.r,f[3*t+1]=e[o].color.g,f[3*t+2]=e[o].color.b;break}}}else if(o&&"pointCloudStretchRenderer"===i.type){c=a$4.fromJSON(i);const e=c.stops;f=new Uint8Array(3*s);const r=p$1(c.fieldTransformType);for(let t=0;t<s;t++){const l=r?r(o[t]):o[t],n=e.length-1;if(l<e[0].value)f[3*t]=e[0].color.r,f[3*t+1]=e[0].color.g,f[3*t+2]=e[0].color.b;else if(l>=e[n].value)f[3*t]=e[n].color.r,f[3*t+1]=e[n].color.g,f[3*t+2]=e[n].color.b;else for(let o=1;o<e.length;o++)if(l<e[o].value){const r=(l-e[o-1].value)/(e[o].value-e[o-1].value);f[3*t]=e[o].color.r*r+e[o-1].color.r*(1-r),f[3*t+1]=e[o].color.g*r+e[o-1].color.g*(1-r),f[3*t+2]=e[o].color.b*r+e[o-1].color.b*(1-r);break}}}else if(o&&"pointCloudClassBreaksRenderer"===i.type){c=d$3.fromJSON(i);const e=c.colorClassBreakInfos;f=new Uint8Array(3*s);const t=p$1(c.fieldTransformType);for(let r=0;r<s;r++){const l=t?t(o[r]):o[r];for(let o=0;o<e.length;o++)if(l>=e[o].minValue&&l<=e[o].maxValue){f[3*r]=e[o].color.r,f[3*r+1]=e[o].color.g,f[3*r+2]=e[o].color.b;break}}}else {f=new Uint8Array(3*s);for(let e=0;e<f.length;e++)f[e]=255;}if(n&&c&&c.colorModulation){const e=c.colorModulation.minValue,o=c.colorModulation.maxValue,r=.3;for(let t=0;t<s;t++){const l=n[t],s=l>=o?1:l<=e?r:r+(1-r)*(l-e)/(o-e);f[3*t]=s*f[3*t],f[3*t+1]=s*f[3*t+1],f[3*t+2]=s*f[3*t+2];}}return f}function c$1(o,r){if(null==o.encoding||""===o.encoding){const t=g(r,o);if(t$2(t.vertexAttributes.position))return;const l=f$1(r,t.vertexAttributes.position),i=t.header.fields,u=[i.offsetX,i.offsetY,i.offsetZ],f=[i.scaleX,i.scaleY,i.scaleZ],c=l.length/3,a=new Float64Array(3*c);for(let e=0;e<c;e++)a[3*e]=l[3*e]*f[0]+u[0],a[3*e+1]=l[3*e+1]*f[1]+u[1],a[3*e+2]=l[3*e+2]*f[2]+u[2];return a}if("lepcc-xyz"===o.encoding)return c$3(r).result}function a(e,r,t){return r$2(e)&&e.attributeInfo.useElevation?d(r,t):r$2(e)?I(e.attributeInfo.storageInfo,e.buffer,t):null}function d(e,o){const r=new Float64Array(o);for(let t=0;t<o;t++)r[t]=e[3*t+2];return r}function m(e,o,r,t,l){const n=e.length/3;let s=0;for(let i=0;i<n;i++){let n=!0;for(let e=0;e<t.length&&n;e++){const{filterJSON:o}=t[e],r=l[e].values[i];switch(o.type){case"pointCloudValueFilter":{const e="exclude"===o.mode;o.values.includes(r)===e&&(n=!1);break}case"pointCloudBitfieldFilter":{const e=b(o.requiredSetBits),t=b(o.requiredClearBits);(r&e)===e&&0==(r&t)||(n=!1);break}case"pointCloudReturnFilter":{const e=15&r,t=r>>>4&15,l=t>1,s=1===e,i=e===t;let u=!1;for(const r of o.includedReturns)if("last"===r&&i||"firstOfMany"===r&&s&&l||"lastOfMany"===r&&i&&l||"single"===r&&!l){u=!0;break}u||(n=!1);break}}}n&&(r[s]=i,e[3*s]=e[3*i],e[3*s+1]=e[3*i+1],e[3*s+2]=e[3*i+2],o[3*s]=o[3*i],o[3*s+1]=o[3*i+1],o[3*s+2]=o[3*i+2],s++);}return s}function p$1(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function b(e){let o=0;for(const r of e||[])o|=1<<r;return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class c{transform(e){const a=this._transform(e),o=[a.points.buffer,a.rgb.buffer];r$2(a.pointIdFilterMap)&&o.push(a.pointIdFilterMap.buffer);for(const t of a.attributes)"buffer"in t.values&&o$1(t.values.buffer)&&t.values.buffer!==a.rgb.buffer&&o.push(t.values.buffer);return Promise.resolve({result:a,transferList:o})}_transform(r){const e=c$1(r.schema,r.geometryBuffer);let a$1=e.length/3,o=null;const f$1=[],s=a(r.primaryAttributeData,e,a$1);r$2(r.primaryAttributeData)&&s&&f$1.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:s});const i=a(r.modulationAttributeData,e,a$1);r$2(r.modulationAttributeData)&&i&&f$1.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:i});let c=f(r.rendererInfo,s,i,a$1);if(r.filterInfo&&r.filterInfo.length>0&&r$2(r.filterAttributesData)){const t=r.filterAttributesData.map((t=>{const r=a(t,e,a$1),o={attributeInfo:t.attributeInfo,values:r};return f$1.push(o),o}));o=new Uint32Array(a$1),a$1=m(e,c,o,r.filterInfo,t);}for(const t of r.userAttributesData){const r=a(t,e,a$1);f$1.push({attributeInfo:t.attributeInfo,values:r});}3*a$1<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*a$1))),this._applyElevationOffsetInPlace(e,a$1,r.elevationOffset);const p=this._transformCoordinates(e,a$1,r.obb,k.fromJSON(r.inSR),k.fromJSON(r.outSR));return {obb:r.obb,points:p,rgb:c,attributes:f$1,pointIdFilterMap:o}}_transformCoordinates(t,r,a,n,u){if(!Un(t,n,0,t,u,0,r))throw Error("Can't reproject");const l=r$3(a.center[0],a.center[1],a.center[2]),b=n$2(),m=n$2();S(p,a.quaternion);const c=new Float32Array(3*r);for(let e=0;e<r;e++)b[0]=t[3*e]-l[0],b[1]=t[3*e+1]-l[1],b[2]=t[3*e+2]-l[2],S$1(m,b,p),a.halfSize[0]=Math.max(a.halfSize[0],Math.abs(m[0])),a.halfSize[1]=Math.max(a.halfSize[1],Math.abs(m[1])),a.halfSize[2]=Math.max(a.halfSize[2],Math.abs(m[2])),c[3*e]=b[0],c[3*e+1]=b[1],c[3*e+2]=b[2];return c}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e;}}const p=e();function h(){return new c}

export { h as default };
//# sourceMappingURL=PointCloudWorker.80c14734.js.map
