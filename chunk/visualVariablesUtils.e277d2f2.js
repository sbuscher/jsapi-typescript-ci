import { s, f as s$1 } from '../index.js';
import { Q, l as A } from './Utils.83ec6664.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const l=s.getLogger("esri.views.2d.engine.webgl");function o(s){return Q(s.minDataValue)&&Q(s.maxDataValue)&&null!=s.minSize&&null!=s.maxSize?A.SIZE_MINMAX_VALUE:(s.expression&&"view.scale"===s.expression||s.valueExpression&&"$view.scale"===s.valueExpression)&&Array.isArray(s.stops)?A.SIZE_SCALE_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&(Array.isArray(s.stops)||"levels"in s&&s.levels)?A.SIZE_FIELD_STOPS:(null!=s.field||s.expression&&"view.scale"!==s.expression||s.valueExpression&&"$view.scale"!==s.valueExpression)&&null!=s.valueUnit?A.SIZE_UNIT_VALUE:(l.error(new s$1("mapview-bad-type","Found invalid size VisualVariable",s)),A.NONE)}

export { o };
//# sourceMappingURL=visualVariablesUtils.e277d2f2.js.map
