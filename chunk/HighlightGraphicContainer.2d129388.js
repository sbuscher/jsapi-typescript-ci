import { $ as e, a1 as n$1 } from '../index.js';
import { I } from './Utils.1fc429c3.js';
import { t } from './BaseGraphicContainer.3090b386.js';
import { _ } from './enums.f11416db.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let i=class extends t{doRender(e){e.drawPhase===I.HIGHLIGHT&&super.doRender(e);}renderChildren(e){if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:r}=e,s=r.effects.highlight;s.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(_.COLOR_BUFFER_BIT),this._renderChildren(e,s.defines.concat(["highlightAll"])),s.draw(e),s.unbind();}};i=e([n$1("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const n=i;

export { n };
//# sourceMappingURL=HighlightGraphicContainer.2d129388.js.map
