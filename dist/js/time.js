"use strict";window.onload=function(){function e(){var e=new Date,n=new Date(2020,8,27,23),t=(n=n.getTime())-(e=e.getTime()),a=t/864e5,o=(t-=1e3*(a=Math.floor(a))*60*60*24)/36e5,c=(t-=36e5*(o=parseInt(o)))/6e4;t-=6e4*(c=Math.floor(c));var i=Math.floor(t/1e3);document.querySelector(".countdown").innerHTML=" <span>".concat(o,"</span><i>:</i><span>").concat(c,"</span><i>:</i><span>").concat(i,"</span></div>")}setInterval(e,1e3),e()};