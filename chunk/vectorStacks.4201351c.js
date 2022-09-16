import { gv as t, d$ as o, gw as o$1, gx as u, gy as u$1 } from '../index.js';
import { n, b as n$2 } from './quatf64.c1e27511.js';
import { n as n$1 } from './mat4f64.490cb75d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this._grow();}get(){return 0===this._itemsPtr&&t((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0;}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this.allocator());}}const i=1024;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class a{constructor(t,e,s){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this.itemByteSize);}get(){0===this._itemsPtr&&t((()=>this._reset()));const t$1=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t$1;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t);}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0;}static createVec2f64(t=c$1){return new a(16,o$1,t)}static createVec3f64(t=c$1){return new a(24,u,t)}static createVec4f64(t=c$1){return new a(32,u$1,t)}static createMat3f64(t=c$1){return new a(72,n,t)}static createMat4f64(t=c$1){return new a(128,n$1,t)}static createQuatf64(t=c$1){return new a(32,n$2,t)}get test(){return {size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const c$1=4*o.KILOBYTES;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
a.createVec2f64();const c=a.createVec3f64();a.createVec4f64();a.createMat3f64();const f=a.createMat4f64();a.createQuatf64();

export { c, f, s };
//# sourceMappingURL=vectorStacks.4201351c.js.map
