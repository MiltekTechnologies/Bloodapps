(this.webpackJsonpdonortab=this.webpackJsonpdonortab||[]).push([[0],{185:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return o}));var r=n(22),a=(n(34),n(47)),o=function(t,e,n,o,i){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;o(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,a=e/n,o=t.velocityX,u=n/2,s=o>=0&&(o>.2||t.deltaX>u),d=(s?1-a:a)*n,h=0;if(d>5){var b=d/Math.abs(o);h=Math.min(b,540)}i(s,a<=0?.01:Object(r.c)(0,a,.9999),h)}})}}}]);
//# sourceMappingURL=0.45c66b43.chunk.js.map