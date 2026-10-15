// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function stayClouds() {
(function(){
var wrap=document.getElementById('staywrap'),cl=document.getElementById('sw-clouds');if(!wrap||!cl)return;
var pg=document.getElementById('sw-puffs'),wg=document.getElementById('sw-wisps'),NS='http://www.w3.org/2000/svg';
var rnd=(function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}})(23),puffs=[],wisps=[];
for(var k=0;k<20;k++){var c=document.createElementNS(NS,'circle'),cx=rnd()*1440,cy=230+rnd()*360;c.setAttribute('cx',cx.toFixed(0));c.setAttribute('cy',cy.toFixed(0));pg.appendChild(c);puffs.push({el:c,R:170+rnd()*220,d:cx/1440*.45+rnd()*.06})}
for(var k=0;k<8;k++){var e=document.createElementNS(NS,'ellipse'),cx=rnd()*1440,cy=260+rnd()*300;e.setAttribute('cx',cx.toFixed(0));e.setAttribute('cy',cy.toFixed(0));e.setAttribute('rx',(160+rnd()*180).toFixed(0));e.setAttribute('ry',(60+rnd()*70).toFixed(0));wg.appendChild(e);wisps.push({el:e,dir:cx<720?-1:1,sp:300+rnd()*400,d:cx/1440*.45})}
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,cp=0,tk=false;
function ease(x){return 1-Math.pow(1-x,3)}
function upd(){tk=false;var r=wrap.getBoundingClientRect(),vh=innerHeight;
var st=document.getElementById('stay'),z=(st.getBoundingClientRect().width||1440)/1440,pinLen=r.height-st.getBoundingClientRect().height,a0=vh-560*z,a1=-.22*pinLen;
var tp=reduce?1:Math.max(0,Math.min(1,(a0-r.top)/Math.max(1,a0-a1)));
cp+=(tp-cp)*.06;if(Math.abs(tp-cp)<.001)cp=tp;else req();var p=cp;
if(p>=1){cl.style.display='none';return}cl.style.display='';
puffs.forEach(function(q){var t=Math.max(0,Math.min(1,(p-q.d)/.55));q.el.setAttribute('r',(q.R*ease(t)).toFixed(1))});
wisps.forEach(function(w){var t=Math.max(0,Math.min(1,(p-w.d)/.55));w.el.setAttribute('opacity',(1-ease(t)).toFixed(3));w.el.setAttribute('transform','translate('+(w.dir*w.sp*ease(t)).toFixed(1)+' 0)')});}
function req(){if(!tk){tk=true;requestAnimationFrame(upd)}}
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);upd();
})();
}
