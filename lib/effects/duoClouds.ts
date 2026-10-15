// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function duoClouds() {
(function(){
var sec=document.getElementById('duo'),cl=document.getElementById('we-clouds');if(!sec||!cl)return;
var pg=document.getElementById('we-puffs'),wg=document.getElementById('we-wisps'),NS='http://www.w3.org/2000/svg';
var rnd=(function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}})(57),puffs=[],wisps=[];
for(var k=0;k<24;k++){var c=document.createElementNS(NS,'circle'),cx=rnd()*1440,cy=rnd()*820;c.setAttribute('cx',cx.toFixed(0));c.setAttribute('cy',cy.toFixed(0));pg.appendChild(c);puffs.push({el:c,R:190+rnd()*260,d:Math.hypot(cx-720,cy-410)/830*.4+rnd()*.08})}
for(var k=0;k<10;k++){var e=document.createElementNS(NS,'ellipse'),cx=rnd()*1440,cy=rnd()*820;e.setAttribute('cx',cx.toFixed(0));e.setAttribute('cy',cy.toFixed(0));e.setAttribute('rx',(170+rnd()*200).toFixed(0));e.setAttribute('ry',(70+rnd()*80).toFixed(0));wg.appendChild(e);wisps.push({el:e,dir:cx<720?-1:1,sp:300+rnd()*400,d:Math.abs(cx-720)/720*.3})}
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches,cp=0,tk=false,weGo=false;
function ease(x){return 1-Math.pow(1-x,3)}function clp(x){return Math.max(0,Math.min(1,x))}
function upd(){tk=false;var r=sec.getBoundingClientRect(),vh=innerHeight;
var de=document.documentElement,maxS=Math.max(1,de.scrollHeight-vh),endTop=r.top-(maxS-scrollY),st0=vh*.65,st1=Math.min(st0-1,Math.max(-.15*vh,endTop));
if(r.top<=st0)weGo=true;else if(r.top>vh)weGo=false;
var tp=RM||weGo?1:0;if(weGo){cp=Math.min(1,cp+1/150)}else{cp+=(tp-cp)*.2}if(Math.abs(tp-cp)<.001)cp=tp;else req();
if(cp>=1){cl.style.display='none';return}cl.style.display='';
puffs.forEach(function(q){q.el.setAttribute('r',(q.R*ease(clp((cp-q.d)/.5))).toFixed(1))});
wisps.forEach(function(w){var t=ease(clp((cp-w.d)/.55));w.el.setAttribute('opacity',(1-t).toFixed(3));w.el.setAttribute('transform','translate('+(w.dir*w.sp*t).toFixed(1)+' 0)')})}
function req(){if(!tk){tk=true;requestAnimationFrame(upd)}}
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);upd();
})();
}
