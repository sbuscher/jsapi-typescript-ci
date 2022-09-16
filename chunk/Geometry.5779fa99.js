/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t,s){this.x=t,this.y=s;}clone(){return new t(this.x,this.y)}equals(t,s){return t===this.x&&s===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,s){this.x=t,this.y=s;}normalize(){const t=this.x,s=this.y,i=Math.sqrt(t*t+s*s);this.x/=i,this.y/=i;}rightPerpendicular(){const t=this.x;this.x=this.y,this.y=-t;}move(t,s){this.x+=t,this.y+=s;}assign(t){this.x=t.x,this.y=t.y;}assignAdd(t,s){this.x=t.x+s.x,this.y=t.y+s.y;}assignSub(t,s){this.x=t.x-s.x,this.y=t.y-s.y;}rotate(t,s){const i=this.x,n=this.y;this.x=i*t-n*s,this.y=i*s+n*t;}scale(t){this.x*=t,this.y*=t;}length(){const t=this.x,s=this.y;return Math.sqrt(t*t+s*s)}static distance(t,s){const i=s.x-t.x,n=s.y-t.y;return Math.sqrt(i*i+n*n)}static add(s,i){return new t(s.x+i.x,s.y+i.y)}static sub(s,i){return new t(s.x-i.x,s.y-i.y)}}var s;!function(t){t[t.Unknown=0]="Unknown",t[t.Point=1]="Point",t[t.LineString=2]="LineString",t[t.Polygon=3]="Polygon";}(s||(s={}));

export { s, t };
//# sourceMappingURL=Geometry.5779fa99.js.map
