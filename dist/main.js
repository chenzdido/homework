!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r){e.exports=function(e){for(var r=0,t=0;t<=2;t++)for(var n=0;n<=2;n++)1==e[t][n]&&(r+=1);return(r-=e[1][1])>3||r<2?0:3==r?1:2==r&&1==e[1][1]?1:0}},function(e,r){e.exports=function(e){let r,t,n=e.length,o=e[0].length;for(padded_world=new Array,r=0;r<n+2;r++)for(padded_world[r]=Array(o+2),t=0;t<o+2;t++)padded_world[r][t]=0==r||0==t||r==n+1||t==o+1?0:e[r-1][t-1];return padded_world}},function(e,r,t){t(0),t(1);const n=t(3);for(var o=new Array,l=0;l<20;l++){o[l]=new Array;for(var d=0;d<30;d++)o[l][d]=0}var a=document.getElementById("test-canvas"),f=document.getElementById("start"),u=document.getElementById("stop"),c=document.getElementById("clear"),i=document.getElementById("speed"),y=i.value,s=!1,v=a.getContext("2d");for(l=0;l<=300;l++){for(d=0;d<=200;d++)v.fillStyle="grey",v.fillRect(l,d,9,9),d+=9;l+=9}function m(){y=i.value,timer=setInterval(function(){!function(){n(o);for(var e=0;e<20;e++)for(var r=0;r<30;r++)v.fillStyle="grey",v.fillRect(10*r,10*e,9,9),1==o[e][r]&&(v.fillStyle="blue",v.fillRect(10*r,10*e,9,9))}()},y),s=!1}function _(){timer&&clearInterval(timer),s=!0}a.addEventListener("click",function(e){p=function(e){var r,t;(e.layerX||0==e.layerX)&&(r=e.layerX,t=e.layerY);return{x:r,y:t}}(e);var r=10*parseInt(p.x/10),t=parseInt(p.x/10),n=parseInt(p.y/10),l=10*parseInt(p.y/10);v.fillStyle="blue",v.fillRect(r,l,9,9),o[n][t]=1}),i.addEventListener("click",function(){y=i.value,clearInterval(timer),s||m()}),c.addEventListener("click",function(){for(var e=0;e<=300;e++){for(var r=0;r<=200;r++)v.fillStyle="grey",v.fillRect(e,r,9,9),r+=9;e+=9}for(e=0;e<20;e++){o[e]=new Array;for(r=0;r<30;r++)o[e][r]=0}}),f.onclick=m,u.onclick=_},function(e,r,t){const n=t(0),o=t(1);e.exports=function(e){let r,t,l=e.length,d=e[0].length;for(padded_world=o(e),r=1;r<l+1;r++)for(t=1;t<d+1;t++){array3=[[padded_world[r-1][t-1],padded_world[r-1][t],padded_world[r-1][t+1]],[padded_world[r][t-1],padded_world[r][t],padded_world[r][t+1]],[padded_world[r+1][t-1],padded_world[r+1][t],padded_world[r+1][t+1]]];let o=n(array3);e[r-1][t-1]=o}return e}}]);