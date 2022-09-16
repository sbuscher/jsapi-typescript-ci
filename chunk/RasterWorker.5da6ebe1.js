import { r, cu as M, h as e, gm as s } from '../index.js';
import { u, M as M$1, a as u$1, C, U as U$1 } from './pixelUtils.cfc3a349.js';
import { S, U, m as m$1 } from './RasterSymbolizer.2b3a504c.js';
import { M as M$2, k, V } from './rasterProjectionHelper.b23e22a1.js';
import { m, p, u as u$2 } from './dataUtils.c224d7a4.js';
import { i } from './utils.e6480b04.js';
import './colorUtils.e4beacce.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class O{convertVectorFieldData(e){const t=u.fromJSON(e.pixelBlock),o=m(t,e.type);return Promise.resolve(r(o)&&o.toJSON())}async decode(r){const e=await S(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=u.fromJSON(e.pixelBlock),e.extent=e.extent?M.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(r(t)&&t.toJSON())}async updateSymbolizer(r){this.symbolizer=U.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=r.histograms);}stretch(e){const t=this.symbolizer.simpleStretch(u.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(r(t)&&t.toJSON())}estimateStatisticsHistograms(r){const e=m$1(u.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=M$1(u.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return e&&e.forEach(((r,t)=>{e.set(t,r?.toJSON());})),Promise.resolve(e)}async mosaicAndTransform(r){const t=r.srcPixelBlocks.map((r=>r?new u(r):null)),o=u$1(t,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize});let i,l=o;return r.coefs&&(l=C(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(i=U$1(r.destDimension,r.gcsGrid),l=e(p(l,r.isUV?"vector-uv":"vector-magdir",i))),{pixelBlock:l?.toJSON(),localNorthDirections:i}}async createFlowMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),mask:new Uint8Array(r.flowData.maskBuffer),width:r.flowData.width,height:r.flowData.height},{vertexData:s,indexData:o}=await u$2(r.meshType,r.simulationSettings,t,e.signal);return {result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(r){const e=M.fromJSON(r.projectedExtent),s$1=M.fromJSON(r.srcBufferExtent);let o=null;r.datumTransformationSteps&&(o=new s({steps:r.datumTransformationSteps})),(r.includeGCSGrid||M$2(e.spatialReference,s$1.spatialReference,o))&&await k();const i$1=r.rasterTransform?i(r.rasterTransform):null;return V({...r,projectedExtent:e,srcBufferExtent:s$1,datumTransformation:o,rasterTransform:i$1})}}

export { O as default };
//# sourceMappingURL=RasterWorker.5da6ebe1.js.map
