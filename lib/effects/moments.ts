// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function moments() {
(function(){
var ring=document.getElementById('mo-ring'),sec=document.getElementById('moments');if(!ring)return;
var IM=['/assets/4832270e23473a056a719250ca0b381a.png','/assets/0eedfcae95800cf90c8e055d017aac34.png','/assets/2882b24b799ca7a4515f17d6e845880f.png','/assets/c4a023d5c6e76ebbeba11c362135d2e9.png'];
var ACTS=['Water','Land','Family','Adventure','Shop'],BODY='Body copy goes here — one or two sentences of intro for this section. Replace with real words once the content is written.';var CAPS=ACTS.concat(ACTS);
var N=CAPS.length,STEP=26,SPAN=N*STEP,R=930,RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var cards=CAPS.map(function(c,i){var d=document.createElement('article');d.className='mo-card';d.innerHTML='<div class="mo-img"><img src="'+IM[i%IM.length]+'" alt="" draggable="false"></div><h3>'+c+'</h3>';ring.appendChild(d);return d});
var off=0,tg=0,vel=0,down=null,run=false,lastA=-1,wheelT=0,bar=document.getElementById('mo-bar');
var lastI=performance.now(),hov=false;function poke(){lastI=performance.now()}
sec.addEventListener('pointerenter',function(){hov=true});sec.addEventListener('pointerleave',function(){hov=false;poke()});sec.addEventListener('focusin',poke);
setInterval(function(){if(RM||!run||hov||down||document.hidden)return;if(performance.now()-lastI<6000)return;vel=0;tg=Math.round(tg/STEP+1)*STEP;lastI=performance.now()},250);
document.getElementById('mo-prev').onclick=function(){poke();vel=0;tg=Math.round(tg/STEP-1)*STEP};document.getElementById('mo-next').onclick=function(){poke();vel=0;tg=Math.round(tg/STEP+1)*STEP};
function zf(){return (sec.getBoundingClientRect().width||1440)/1440}
function frame(){if(!run)return;requestAnimationFrame(frame);
if(!down){if(Math.abs(vel)>.05){tg+=vel;vel*=.92}else if(performance.now()-wheelT>160){vel=0;tg=Math.round(tg/STEP)*STEP}}
off+=(tg-off)*.08;
cards.forEach(function(d,i){var a=((i*STEP-off)%SPAN+SPAN*1.5)%SPAN-SPAN/2,r=a*Math.PI/180;
var x=Math.sin(r)*R,z=(Math.cos(r)-1)*R,vis=Math.abs(a)<74;
d.style.visibility=vis?'visible':'hidden';d.style.transform='translate3d('+x.toFixed(1)+'px,0,'+z.toFixed(1)+'px) rotateY('+a.toFixed(2)+'deg)';
d.style.opacity=Math.max(0,Math.min(1,(74-Math.abs(a))/18)).toFixed(3);d.style.zIndex=String(200-Math.round(Math.abs(a)));
var on=Math.abs(a)<STEP/2;d.setAttribute('aria-hidden',on?'false':'true');d.classList.toggle('mo-on',on);if(on){var ai=i%ACTS.length;if(ai!==lastA){lastA=ai;bar.style.transform='translateX('+(ai*100)+'%)'}}})}
new IntersectionObserver(function(es){var v=es[0].isIntersecting;if(v&&!run){run=true;requestAnimationFrame(frame)}else if(!v)run=false},{rootMargin:'200px'}).observe(sec);
ring.addEventListener('pointerdown',function(e){poke();down={x:e.clientX,lx:e.clientX,t:tg};vel=0;ring.classList.add('mo-drag');try{ring.setPointerCapture(e.pointerId)}catch(_){}});
ring.addEventListener('pointermove',function(e){if(!down)return;var k=.06/zf();tg=down.t-(e.clientX-down.x)*k;vel=-(e.clientX-down.lx)*k;down.lx=e.clientX});
function up(){if(!down)return;down=null;poke();ring.classList.remove('mo-drag')}
ring.addEventListener('pointerup',up);ring.addEventListener('pointercancel',up);
sec.addEventListener('wheel',function(e){if(Math.abs(e.deltaX)>Math.abs(e.deltaY)){e.preventDefault();tg+=e.deltaX*.05/zf();vel=0;wheelT=performance.now();poke()}},{passive:false});
ring.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){tg=Math.round(tg/STEP+1)*STEP;e.preventDefault()}if(e.key==='ArrowLeft'){tg=Math.round(tg/STEP-1)*STEP;e.preventDefault()}});
})();
}
