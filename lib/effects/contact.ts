// @ts-nocheck — ported from the Claude Design prototype (Ayla Contact v2)
export default function contact() {

(function(){var hdr=document.getElementById('hdr'),sc=null;
function onScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}
addEventListener('scroll',onScroll,{passive:true});onScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}addEventListener('resize',fit);fit();
var f=document.getElementById('c2-form'),ok=document.getElementById('c2-ok'),er=document.getElementById('c2-err');
f.addEventListener('submit',function(e){e.preventDefault();var bad=false;[].forEach.call(f.querySelectorAll('[required]'),function(el){var b=!el.checkValidity();el.closest('.c2-ln').classList.toggle('c2-bad',b);el.setAttribute('aria-invalid',b);bad=bad||b});
if(!document.getElementById('f-agree').checked)bad=true;ok.hidden=bad;er.hidden=!bad;if(!bad)f.reset()});
f.addEventListener('input',function(e){var t=e.target,l=t.closest&&t.closest('.c2-ln');if(l&&l.classList.contains('c2-bad')&&t.checkValidity()){l.classList.remove('c2-bad');t.removeAttribute('aria-invalid')}});
})();


(function(){var root=document.getElementById('bc');if(!root)return;var els=[].slice.call(root.children),n=els.length;
var P=[1,.5,-.3,-1,.2,.75,-.6,.35,-.85,.1],SIZE=230,SPREAD=165,ROT=8,PUSH=110,HS=1.08,BOUNCE=.6,DELAY=.3,STAG=.07;
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,mid=(n-1)/2;
var slots=els.map(function(_,i){return{x:(i-mid)*SPREAD,y:0,r:ROT*P[i%P.length]}});
var st={h:-1,t:0,layer:-2,started:false},raf=0,last=0;
var B=slots.map(function(s){return{x:s.x,y:s.y,r:s.r,s:reduce?1:0,vx:0,vy:0,vr:0,vs:0}});
function step(v,ve,t,k,d,dt){var nv=ve+((t-v)*k-ve*d)*dt;return[v+nv*dt,nv]}
function frame(now){raf=0;var dt=Math.min(1/30,Math.max(1/240,(now-last)/1000));last=now;st.t+=dt;
var pk=170,pd=2*(1-.85*BOUNCE)*Math.sqrt(pk),mk=210,md=2*(reduce?1:.72)*Math.sqrt(mk),sub=Math.ceil(dt/(1/240)),hh=dt/sub,mv=0;
for(var i=0;i<n;i++){var c=B[i],sl=slots[i],ap=reduce||st.t>=DELAY+i*STAG,tx=sl.x,ty=sl.y,tr=sl.r,ts=ap?1:0;
if(st.h>=0&&ap){if(i===st.h){ty=sl.y-SIZE*.04;tr=0;ts=HS}else tx=sl.x+Math.sign(i-st.h)*PUSH}
for(var k=0;k<sub;k++){var a=step(c.x,c.vx,tx,mk,md,hh);c.x=a[0];c.vx=a[1];a=step(c.y,c.vy,ty,mk,md,hh);c.y=a[0];c.vy=a[1];a=step(c.r,c.vr,tr,mk,md,hh);c.r=a[0];c.vr=a[1];
if(reduce){c.s=ts;c.vs=0}else{a=step(c.s,c.vs,ts,pk,pd,hh);c.s=a[0];c.vs=a[1]}}
mv+=Math.abs(c.vx)+Math.abs(c.vy)+Math.abs(c.vr)+Math.abs(c.vs)*100+Math.abs(tx-c.x)+Math.abs(ty-c.y)+Math.abs(tr-c.r)+Math.abs(ts-c.s)*100+(ap?0:1);
els[i].style.transform='translate(-50%,-50%) translate3d('+c.x.toFixed(2)+'px,'+c.y.toFixed(2)+'px,0) rotate('+c.r.toFixed(3)+'deg) scale('+Math.max(0,c.s).toFixed(4)+')'}
if(st.layer!==st.h){st.layer=st.h;els.forEach(function(el,i){el.style.zIndex=i===st.h?n+1:i+1;el.toggleAttribute('data-active',i===st.h)})}
if(mv>.02)raf=requestAnimationFrame(frame)}
function wake(){if(raf||!st.started)return;last=performance.now();raf=requestAnimationFrame(frame)}
function pick(e){var r=root.getBoundingClientRect(),z=r.width/root.offsetWidth||1,px=(e.clientX-r.left)/z-root.offsetWidth/2,py=(e.clientY-r.top)/z-root.offsetHeight/2,b=-1,d=1e9;
slots.forEach(function(s,i){var g=Math.abs(px-s.x);if(g<d){d=g;b=i}});var half=SIZE/2;if(b<0||Math.abs(py-slots[b].y)>half+12||d>half+12)return -1;
if(st.h>=0&&st.h!==b&&Math.abs(px-slots[st.h].x)-d<6)return st.h;return b}
root.addEventListener('pointermove',function(e){var x=pick(e);if(x!==st.h){st.h=x;wake()}});
root.addEventListener('pointerleave',function(){if(st.h!==-1){st.h=-1;wake()}});
root.addEventListener('focusin',function(e){var i=els.indexOf(e.target);if(i>=0){st.h=i;wake()}});
root.addEventListener('focusout',function(){st.h=-1;wake()});
root.addEventListener('click',function(e){var i=pick(e);if(i>=0&&!reduce){B[i].vs-=2.2;wake()}});
els.forEach(function(el,i){el.style.zIndex=i+1});
new IntersectionObserver(function(es,o){if(es[0].isIntersecting){st.started=true;st.t=0;wake();o.disconnect()}},{threshold:.3}).observe(root);
})();

}
