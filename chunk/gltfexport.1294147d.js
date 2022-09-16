import { cf as E$1, t as t$1, C as o$1, eX as e$1, eW as _, eP as z, r as r$2, a8 as j, A as n, fa as F, kQ as f$3, fc as t$2, k$ as l$1, dH as r$4, dR as F$1, l0 as it } from '../index.js';
import { K, k } from './quat.ebe12c52.js';
import { o as o$2, r as r$3, e as e$2 } from './quatf64.c1e27511.js';
import { c as c$1 } from './meshFeatureSet.a973a2a2.js';
import { P } from './georeference.236c476b.js';
import { C, D } from './enums.f11416db.js';
import { o as o$3, i as i$1, g, s as s$2 } from './imageutils.f339ccda.js';
import './earcut.d6b861a1.js';
import './deduplicate.4ee46abc.js';
import './mat4f64.490cb75d.js';
import './BufferView.d9eb8b2c.js';
import './vec33.cb8de189.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var t;!function(t){t[t.JSON=1313821514]="JSON",t[t.BIN=5130562]="BIN";}(t||(t={}));class e{constructor(i,r){if(!i)throw new Error("GLB requires a JSON gltf chunk");this.length=e.HEADER_SIZE,this.length+=e.CHUNK_HEADER_SIZE;const n=this._textToArrayBuffer(i);if(this.length+=this._alignTo(n.byteLength,4),r&&(this.length+=e.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this._writeHeader();const h=this._writeChunk(n,12,t.JSON,32);r&&this._writeChunk(r,h,t.BIN);}_writeHeader(){this.outView.setUint32(0,e.MAGIC,!0),this.outView.setUint32(4,e.VERSION,!0),this.outView.setUint32(8,this.length,!0);}_writeChunk(t,e,i,r=0){const n=this._alignTo(t.byteLength,4);for(this.outView.setUint32(e,n,!0),this.outView.setUint32(e+=4,i,!0),this._writeArrayBuffer(this.outView.buffer,t,e+=4,0,t.byteLength),e+=t.byteLength;e%4;)r&&this.outView.setUint8(e,r),e++;return e}_writeArrayBuffer(t,e,i,r,n){new Uint8Array(t,i,n).set(new Uint8Array(e,r,n),0);}_textToArrayBuffer(t){return (new TextEncoder).encode(t).buffer}_alignTo(t,e){return e*Math.ceil(t/e)}}e.HEADER_SIZE=12,e.CHUNK_HEADER_SIZE=8,e.MAGIC=1179937895,e.VERSION=2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
var E,A,R,L,o,I,N;!function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB";}(E||(E={})),function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB";}(A||(A={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER";}(R||(R={})),function(E){E.SCALAR="SCALAR",E.VEC2="VEC2",E.VEC3="VEC3",E.VEC4="VEC4",E.MAT2="MAT2",E.MAT3="MAT3",E.MAT4="MAT4";}(L||(L={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN";}(o||(o={})),function(E){E.OPAQUE="OPAQUE",E.MASK="MASK",E.BLEND="BLEND";}(I||(I={})),function(E){E[E.NoColor=0]="NoColor",E[E.FaceColor=1]="FaceColor",E[E.VertexColor=2]="VertexColor";}(N||(N={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class r$1{constructor(e,s,i,r,n){this.buffer=e,this.componentType=i,this.dataType=r,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==R.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=a),s.bufferViews.push(this.bufferView),this.numComponentsForDataType=this._calculateNumComponentsForDataType();}push(e){const t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const s=t%this.numComponentsForDataType,i=this.accessorMin[s];this.accessorMin[s]="number"!=typeof i?e:Math.min(i,e);const r=this.accessorMax[s];this.accessorMax[s]="number"!=typeof r?e:Math.max(r,e);}}get dataSize(){return this.data.length*this._sizeComponentType()}get byteSize(){function e(e,t){return t*Math.ceil(e/t)}return e(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this.componentType){case C.BYTE:return new Int8Array(e,t);case C.FLOAT:return new Float32Array(e,t);case C.SHORT:return new Int16Array(e,t);case C.UNSIGNED_BYTE:return new Uint8Array(e,t);case C.UNSIGNED_INT:return new Uint32Array(e,t);case C.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this.data);}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((e=>{const t=new Uint8Array(e);for(let s=0;s<t.length;++s)this.data.push(t[s]);delete this.asyncWritePromise;})),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t);}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this.numComponentsForDataType,s=(this.data.length-this.accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let i=0;i<this.accessorMin.length;++i)"number"!=typeof this.accessorMin[i]&&(this.accessorMin[i]=0),"number"!=typeof this.accessorMax[i]&&(this.accessorMax[i]=0);const r={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:s,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case C.UNSIGNED_BYTE:case C.UNSIGNED_SHORT:r.normalized=!0;}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((e=>this.finalizedPromiseResolve=e))}finalize(){const t=this.bufferView;return new Promise((t=>{const s=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&s.push(this.asyncWritePromise),t(E$1(s));})).then((()=>{this.isFinalized=!0,t.byteOffset=this.getByteOffset(),t.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve();}))}_getElementSize(){return this._sizeComponentType()*this.numComponentsForDataType}_sizeComponentType(){switch(this.componentType){case C.BYTE:case C.UNSIGNED_BYTE:return 1;case C.SHORT:case C.UNSIGNED_SHORT:return 2;case C.UNSIGNED_INT:case C.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this.dataType){case L.SCALAR:return 1;case L.VEC2:return 2;case L.VEC3:return 3;case L.VEC4:case L.MAT2:return 4;case L.MAT3:return 9;case L.MAT4:return 16}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class r{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const i={byteLength:-1};e.buffers.push(i),this.buffer=i;}addBufferView(e,r,t){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const f=new r$1(this,this.gltf,e,r,t);return this.bufferViews.push(f),f}getByteOffset(e){let i=0;for(const r of this.bufferViews){if(r===e)return i;i+=r.byteSize;}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const i=[];for(const r of this.bufferViews){if(e&&r===e)return i;i.push(r.finalized);}return i}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),i=new ArrayBuffer(e);let r=0;for(const t of this.bufferViews)t.writeOutToBuffer(i,r),r+=t.byteSize;return i}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise((i=>{i(E$1(this.getViewFinalizePromises()));})).then((()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e;})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}_getTotalSize(){let e=0;for(const i of this.bufferViews)e+=i.byteSize;return e}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function f$2(t,n){if(t.components)for(const e of t.components)e.faces&&"smooth"===e.shading&&c(e,n);}function c(n,a){t$1(a.normal)&&(a.normal=new Float32Array(a.position.length));const i=n.faces,{position:f,normal:c}=a,m=i.length/3;for(let t=0;t<m;++t){const n=3*i[3*t+0],s=3*i[3*t+1],a=3*i[3*t+2],m=o$1(l,f[n+0],f[n+1],f[n+2]),h=o$1(p$1,f[s+0],f[s+1],f[s+2]),g=o$1(x,f[a+0],f[a+1],f[a+2]),u=e$1(h,h,m),j=e$1(g,g,m),y=_(u,u,j);c[n+0]+=y[0],c[n+1]+=y[1],c[n+2]+=y[2],c[s+0]+=y[0],c[s+1]+=y[1],c[s+2]+=y[2],c[a+0]+=y[0],c[a+1]+=y[1],c[a+2]+=y[2];}for(let t=0;t<c.length;t+=3)o$1(h,c[t],c[t+1],c[t+2]),z(h,h),c[t+0]=h[0],c[t+1]=h[1],c[t+2]=h[2];}function m$1(t){if(r$2(t.transform))return t.transform.getOriginPoint(t.spatialReference);const e=t.extent.xmax-t.extent.width/2,o=t.extent.ymax-t.extent.height/2,r=t.extent.zmin;return new j({x:e,y:o,z:r,spatialReference:t.extent.spatialReference})}const l=n(),p$1=n(),x=n(),h=n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class M{constructor(e,t,s){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e);}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===E.GLB||this.gltf.extras.options.imageOutputType===A.GLB;t&&(this.gltf.extras.binChunkBuffer=new r(this.gltf)),e.forEachScene((e=>{this._addScene(e);})),t&&this.gltf.extras.binChunkBuffer.finalize();}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this._addNode(e);t.nodes.push(s);})),this.gltf.scenes.push(t);}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;F(s,f$3)||(t.translation=t$2(s));const c=e.rotation;K(c,o$2)||(t.rotation=r$3(c));const u=e.scale;F(u,l$1)||(t.scale=t$2(u)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this._addNode(e);t.children.push(s);}));const f=this.gltf.nodes.length;return this.gltf.nodes.push(t),f}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const s={primitives:[]},i=this.gltf.extras.options.bufferOutputType===E.GLB;let r$1;r$1=i?this.gltf.extras.binChunkBuffer:new r(this.gltf),this.params.origin||(this.params.origin=m$1(e));const a=P(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});f$2(e,a),this._flipYZAxis(a);const o=r$1.addBufferView(C.FLOAT,L.VEC3,R.ARRAY_BUFFER);let n,l,h,c;a.normal&&(n=r$1.addBufferView(C.FLOAT,L.VEC3,R.ARRAY_BUFFER)),e.vertexAttributes.uv&&(l=r$1.addBufferView(C.FLOAT,L.VEC2,R.ARRAY_BUFFER)),a.tangent&&(h=r$1.addBufferView(C.FLOAT,L.VEC4,R.ARRAY_BUFFER)),e.vertexAttributes.color&&(c=r$1.addBufferView(C.UNSIGNED_BYTE,L.VEC4,R.ARRAY_BUFFER)),o.startAccessor("POSITION"),n&&n.startAccessor("NORMAL"),l&&l.startAccessor("TEXCOORD_0"),h&&h.startAccessor("TANGENT"),c&&c.startAccessor("COLOR_0");const g=a.position.length/3,{position:A,normal:R$1,tangent:T}=a,{color:b,uv:M}=e.vertexAttributes;for(let u=0;u<g;++u)o.push(A[3*u+0]),o.push(A[3*u+1]),o.push(A[3*u+2]),n&&r$2(R$1)&&(n.push(R$1[3*u+0]),n.push(R$1[3*u+1]),n.push(R$1[3*u+2])),l&&r$2(M)&&(l.push(M[2*u+0]),l.push(M[2*u+1])),h&&r$2(T)&&(h.push(T[4*u+0]),h.push(T[4*u+1]),h.push(T[4*u+2]),h.push(T[4*u+3])),c&&r$2(b)&&(c.push(b[4*u+0]),c.push(b[4*u+1]),c.push(b[4*u+2]),c.push(b[4*u+3]));const O=o.endAccessor(),N=this._addAccessor(o.index,O);let C$1,B,w,y,I;if(n){const e=n.endAccessor();C$1=this._addAccessor(n.index,e);}if(l){const e=l.endAccessor();B=this._addAccessor(l.index,e);}if(h){const e=h.endAccessor();w=this._addAccessor(h.index,e);}if(c){const e=c.endAccessor();y=this._addAccessor(c.index,e);}e.components&&e.components.length>0&&e.components[0].faces?(I=r$1.addBufferView(C.UNSIGNED_INT,L.SCALAR,R.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(I,e.components,s,N,C$1,B,w,y)):this._addMeshVertexNonIndexed(e.components,s,N,C$1,B,w,y),o.finalize(),n&&n.finalize(),l&&l.finalize(),h&&h.finalize(),I&&I.finalize(),c&&c.finalize(),i||r$1.finalize();const S=this.gltf.meshes.length;return this.gltf.meshes.push(s),S}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4);}_flipYZBuffer(e,t){if(!t$1(e))for(let s=1,i=2;s<e.length;s+=t,i+=t){const t=e[s],r=e[i];e[s]=r,e[i]=-t;}}_addMaterial(e){if(null===e)return;const s=this.materialMap.indexOf(e);if(-1!==s)return s;this.gltf.materials||(this.gltf.materials=[]);const i={};switch(e.alphaMode){case"mask":i.alphaMode=I.MASK;break;case"auto":case"blend":i.alphaMode=I.BLEND;}.5!==e.alphaCutoff&&(i.alphaCutoff=e.alphaCutoff),e.doubleSided&&(i.doubleSided=e.doubleSided),i.pbrMetallicRoughness={};const r=e=>e**2.1,a=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(r$2(e.color)&&(i.pbrMetallicRoughness.baseColorFactor=a(e.color)),r$2(e.colorTexture)&&(i.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),r$2(e.normalTexture)&&(i.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof c$1){if(r$2(e.emissiveTexture)&&(i.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),r$2(e.emissiveColor)){const t=a(e.emissiveColor);i.emissiveFactor=[t[0],t[1],t[2]];}r$2(e.occlusionTexture)&&(i.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),r$2(e.metallicRoughnessTexture)&&(i.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),i.pbrMetallicRoughness.metallicFactor=e.metallic,i.pbrMetallicRoughness.roughnessFactor=e.roughness;}else i.pbrMetallicRoughness.metallicFactor=1,i.pbrMetallicRoughness.roughnessFactor=1;const o=this.gltf.materials.length;return this.gltf.materials.push(i),this.materialMap.push(e),o}_addTexture(t){return this.gltf.textures||(this.gltf.textures=[]),r$4(this.textureMap,t,(()=>{const e={sampler:this._addSampler(t),source:this._addImage(t)},s=this.gltf.textures.length;return this.gltf.textures.push(e),s}))}_addImage(e){const t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else {s.extras=e.data;for(let t=0;t<this.gltf.images.length;++t)if(e.data===this.gltf.images[t].extras)return t;switch(this.gltf.extras.options.imageOutputType){case A.GLB:{const t=this.gltf.extras.binChunkBuffer.addBufferView(C.UNSIGNED_BYTE,L.SCALAR),i=o$3(e.data).then((({data:e,type:t})=>(s.mimeType=t,e)));t.writeAsync(i).then((()=>{t.finalize();})),s.bufferView=t.index;break}case A.DataURI:s.uri=i$1(e.data);break;default:this.gltf.extras.promises.push(o$3(e.data).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t;})));}}const i=this.gltf.images.length;return this.gltf.images.push(s),this.imageMap.set(e,i),i}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=D.REPEAT,s=D.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=D.CLAMP_TO_EDGE,s=D.CLAMP_TO_EDGE;break;case"mirror":t=D.MIRRORED_REPEAT,s=D.MIRRORED_REPEAT;}else {switch(e.wrap.vertical){case"clamp":s=D.CLAMP_TO_EDGE;break;case"mirror":s=D.MIRRORED_REPEAT;}switch(e.wrap.horizontal){case"clamp":t=D.CLAMP_TO_EDGE;break;case"mirror":t=D.MIRRORED_REPEAT;}}const i={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[a]))return a;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i}_addMeshVertexIndexed(e,t,s,i,r,a,o,n){for(const l of t){e.startAccessor("INDICES");for(let s=0;s<l.faces.length;++s)e.push(l.faces[s]);const t=e.endAccessor(),h={attributes:{POSITION:i},indices:this._addAccessor(e.index,t),material:this._addMaterial(l.material)};r&&"flat"!==l.shading&&(h.attributes.NORMAL=r),a&&(h.attributes.TEXCOORD_0=a),o&&"flat"!==l.shading&&(h.attributes.TANGENT=o),n&&(h.attributes.COLOR_0=n),s.primitives.push(h);}}_addMeshVertexNonIndexed(e,t,s,i,r,a,o){const n={attributes:{POSITION:s}};i&&(n.attributes.NORMAL=i),r&&(n.attributes.TEXCOORD_0=r),a&&(n.attributes.TANGENT=a),o&&(n.attributes.COLOR_0=o),e&&(n.material=this._addMaterial(e[0].material)),t.primitives.push(n);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s$1{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[];}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e);}removeScene(s){F$1(this._scenes,s);}forEachScene(e){this._scenes.forEach(e);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class d{constructor(){this.name="",this._nodes=[];}addNode(d){if(this._nodes.includes(d))throw new Error("Node already added");this._nodes.push(d);}forEachNode(d){this._nodes.forEach(d);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class i{constructor(s){this.mesh=s,this.name="",this.translation=n(),this.rotation=e$2(),this.scale=t$2(l$1),this._nodes=[];}addNode(s){if(this._nodes.includes(s))throw new Error("Node already added");this._nodes.push(s);}forEachNode(s){this._nodes.forEach(s);}set rotationAngles(t){k(this.rotation,t[0],t[1],t[2]);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const f$1="model.gltf",p="model.glb";function a(a,m,c){const l=new M(a,m=m||{},c);let g$1=l.params;g$1?g$1.origin||(g$1.origin=new j({x:-1,y:-1,z:-1})):g$1={origin:new j({x:-1,y:-1,z:-1})};const y=g$1.origin,d=l.gltf,j$1=d.extras.promises;let x=1,b=1,B=null;return E$1(j$1).then((()=>{const e$1={origin:y};delete d.extras;const t="number"==typeof m.jsonSpacing?m.jsonSpacing:4,o=JSON.stringify(d,((t,r)=>{if("extras"!==t){if(r instanceof ArrayBuffer){if(g(r))switch(m.imageOutputType){case A.DataURI:case A.GLB:break;case A.External:default:{const t=`img${b}.png`;return b++,e$1[t]=r,t}}switch(m.bufferOutputType){case E.DataURI:return s$2(r);case E.GLB:if(B)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(B=r);case E.External:default:{const t=`data${x}.bin`;return x++,e$1[t]=r,t}}}return r}}),t);return m.bufferOutputType===E.GLB||m.imageOutputType===A.GLB?e$1[p]=new e(o,B).buffer:e$1[f$1]=o,e$1}))}function m(e,t){return a(e,{bufferOutputType:E.GLB,imageOutputType:A.GLB,jsonSpacing:0},t)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s{constructor(e,o){this._file={type:"model/gltf-binary",data:e},this.origin=o;}buffer(){return Promise.resolve(this._file)}download(o){it(new Blob([this._file.data],{type:this._file.type}),o);}}function f(e,f){const d$1=new s$1,l=new d;return d$1.addScene(l),l.addNode(new i(e)),m(d$1,f).then((e=>new s(e[p],e.origin)))}

export { f as toBinaryGLTF };
//# sourceMappingURL=gltfexport.1294147d.js.map
