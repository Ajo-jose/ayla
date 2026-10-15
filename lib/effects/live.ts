// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function live() {
(function(){
var wrap=document.getElementById('livewrap'),st=document.getElementById('live'),v=document.getElementById('live-v'),cl=document.getElementById('live-clouds'),ttl=document.getElementById('live-h');if(!wrap)return;
var pg=document.getElementById('live-puffs'),wg=document.getElementById('live-wisps'),NS='http://www.w3.org/2000/svg',RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var rnd=(function(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}})(41),puffs=[],wisps=[];
for(var k=0;k<24;k++){var c=document.createElementNS(NS,'circle'),cx=rnd()*1440,cy=rnd()*820;c.setAttribute('cx',cx.toFixed(0));c.setAttribute('cy',cy.toFixed(0));pg.appendChild(c);puffs.push({el:c,R:190+rnd()*260,d:Math.hypot(cx-720,cy-410)/830*.4+rnd()*.08})}
for(var k=0;k<10;k++){var e=document.createElementNS(NS,'ellipse'),cx=rnd()*1440,cy=rnd()*820;e.setAttribute('cx',cx.toFixed(0));e.setAttribute('cy',cy.toFixed(0));e.setAttribute('rx',(170+rnd()*200).toFixed(0));e.setAttribute('ry',(70+rnd()*80).toFixed(0));wg.appendChild(e);wisps.push({el:e,dir:cx<720?-1:1,sp:300+rnd()*400,d:Math.abs(cx-720)/720*.3})}
var END=5,cp=0,vp=0,run=false,seeking=false,wasLive=null,dim=document.getElementById('live-dim'),content=document.getElementById('live-content'),items=[].slice.call(content.querySelectorAll('.lv-card,.lv-bar'));
v.addEventListener('seeked',function(){seeking=false});
var ready=false;fetch(v.dataset.src).then(function(r){return r.blob()}).then(function(b){v.src=URL.createObjectURL(b);v.load()}).catch(function(){v.src=v.dataset.src});
v.addEventListener('canplaythrough',function(){ready=true});
v.addEventListener('loadedmetadata',function(){END=Math.min(5,v.duration||5)});
function ease(x){return 1-Math.pow(1-x,3)}function clp(x){return Math.max(0,Math.min(1,x))}
function frame(){if(!run)return;requestAnimationFrame(frame);
var r=wrap.getBoundingClientRect(),f=st.getBoundingClientRect(),vh=innerHeight,pin=Math.max(1,r.height-f.height);
var ct=RM?1:clp((vh-r.top)/(vh*1.1));cp+=(ct-cp)*.07;if(Math.abs(ct-cp)<.001)cp=ct;
if(cp>=1){cl.style.display='none'}else{cl.style.display='';
puffs.forEach(function(q){q.el.setAttribute('r',(q.R*ease(clp((cp-q.d)/.55))).toFixed(1))});
wisps.forEach(function(w){var t=ease(clp((cp-w.d)/.55));w.el.setAttribute('opacity',(1-t).toFixed(3));w.el.setAttribute('transform','translate('+(w.dir*w.sp*t).toFixed(1)+' 0)')})}
var vt=RM?1:clp(-r.top/pin);vp+=(vt-vp)*.08;if(Math.abs(vt-vp)<.0005)vp=vt;
var ph=ease(clp((vp-.5)/.22));
var tt=ease(clp((cp-.35)/.6));ttl.style.opacity=tt.toFixed(3);ttl.style.transform='translateY(calc(-50% + '+((1-tt)*30-ph*265).toFixed(1)+'px)) scale('+((1.04-.04*tt)*(1-.48*ph)).toFixed(4)+')';
dim.style.opacity=ph.toFixed(3);
items.forEach(function(el,i){var t=ease(clp((vp-.6-i*.06)/.2));el.style.opacity=t.toFixed(3);el.style.transform='translateY('+((1-t)*40).toFixed(1)+'px)'});
var live=vp>.8;if(live!==wasLive){wasLive=live;content.classList.toggle('lv-live',live);content.querySelectorAll('a').forEach(function(a){a.tabIndex=live?0:-1})}
if(ready&&v.readyState>=2&&!seeking&&v.seekable.length&&v.seekable.end(0)>0){var want=clp(vp/.5)*END;if(Math.abs(v.currentTime-want)>.033){seeking=true;v.currentTime=want}}}
new IntersectionObserver(function(es){var on=es[0].isIntersecting;if(on&&!run){run=true;requestAnimationFrame(frame)}else if(!on)run=false},{rootMargin:'300px'}).observe(wrap);
})();
}
