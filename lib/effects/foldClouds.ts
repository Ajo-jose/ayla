// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function foldClouds() {
(function(){
var f2=document.getElementById('fold2'),cl=document.getElementById('clouds'),pg=document.getElementById('puffs'),wg=document.getElementById('wisps'),NS='http://www.w3.org/2000/svg';
var rnd=(function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}})(11);
var puffs=[],wisps=[];
for(var k=0;k<22;k++){var c=document.createElementNS(NS,'circle'),cx=rnd()*1440,cy=rnd()*820;c.setAttribute('cx',cx.toFixed(0));c.setAttribute('cy',cy.toFixed(0));pg.appendChild(c);
puffs.push({el:c,R:180+rnd()*260,d:cx/1440*.45+rnd()*.06})}
for(var k=0;k<9;k++){var e=document.createElementNS(NS,'ellipse'),cx=rnd()*1440,cy=rnd()*820;e.setAttribute('cx',cx.toFixed(0));e.setAttribute('cy',cy.toFixed(0));e.setAttribute('rx',(160+rnd()*200).toFixed(0));e.setAttribute('ry',(70+rnd()*80).toFixed(0));wg.appendChild(e);
wisps.push({el:e,dir:cx<720?-1:1,sp:300+rnd()*400,d:cx/1440*.45})}
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,ticking=false;
function ease(x){return 1-Math.pow(1-x,3)}
var cp=0;
function upd(){ticking=false;var r=document.getElementById('f2wrap').getBoundingClientRect(),vh=innerHeight;
var tp=reduce?1:Math.max(0,Math.min(1,(vh-r.top)/(vh*1.25)));
cp+=(tp-cp)*.06;if(Math.abs(tp-cp)<.001)cp=tp;else req();var p=cp;
if(p>=1){cl.style.display='none';return}cl.style.display='';
puffs.forEach(function(q){var t=Math.max(0,Math.min(1,(p-q.d)/.55));q.el.setAttribute('r',(q.R*ease(t)).toFixed(1))});
wisps.forEach(function(w){var wp=Math.max(0,Math.min(1,(p-w.d)/.55));w.el.setAttribute('opacity',(1-ease(wp)).toFixed(3));w.el.setAttribute('transform','translate('+(w.dir*w.sp*ease(wp)).toFixed(1)+' 0)');});}
function req(){if(!ticking){ticking=true;requestAnimationFrame(upd)}}
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);upd();
})();
}
