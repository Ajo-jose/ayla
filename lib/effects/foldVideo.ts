// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function foldVideo() {
(function(){
var wrap=document.getElementById('f2wrap'),f2=document.getElementById('fold2'),vb=document.getElementById('vbox'),fig=f2.querySelector('figure'),col=fig.nextElementSibling,ttl=fig.previousElementSibling,tk=false;
function io(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}
function upd(){tk=false;var r=wrap.getBoundingClientRect(),fr=f2.getBoundingClientRect();
var sp=document.getElementById('f2spacer').getBoundingClientRect().height||1;var p=Math.max(0,Math.min(1,-r.top/(sp*.85))),e=io(p);
var x0=fig.offsetLeft,y0=fig.offsetTop,w0=fig.offsetWidth,h0=fig.offsetHeight,W=f2.offsetWidth,H=f2.offsetHeight;
vb.style.left=(x0*(1-e))+'px';vb.style.top=(y0*(1-e))+'px';vb.style.width=(w0+(W-w0)*e)+'px';vb.style.height=(h0+(H-h0)*e)+'px';
var o=Math.max(0,1-p*2.5);col.style.opacity=o;ttl.style.opacity=o;}
function req(){if(!tk){tk=true;requestAnimationFrame(upd)}}
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);upd();
})();
}
