// @ts-nocheck — ported from the Claude Design prototype (Ayla Plan Your Visit)
export default function planVisit() {
var off=[];function on(t,f,o){addEventListener(t,f,o);off.push(function(){removeEventListener(t,f,o)})}
var hdr=document.getElementById('hdr'),sc=null;function onScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}on('scroll',onScroll,{passive:true});onScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}on('resize',fit);fit();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.vp-rv,.vp-ri').forEach(function(el){io.observe(el)});
var toast=document.getElementById('vp-toast'),tt;function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},1800)}

requestAnimationFrame(function(){requestAnimationFrame(function(){document.getElementById('pv-hero').classList.add('lr-in','rv-in')})});
var hv=document.querySelector('#pv-hero video'),par=document.querySelector('[data-par] img'),pw=[].slice.call(document.querySelectorAll('.pv-sw')),st=document.getElementById('pv-st');
function tick(){var vh=innerHeight,y=scrollY;hv.style.setProperty('--hs',(1+Math.min(y,900)/3000).toFixed(4));
var r=par.parentNode.getBoundingClientRect();par.style.setProperty('--py',(-((vh-r.top)/(vh+r.height))*15).toFixed(2)+'%');
}
pw.forEach(function(w,i){w.style.transitionDelay=(i*45)+'ms'});new IntersectionObserver(function(es){es.forEach(function(e){st.classList.toggle('sw-in',e.isIntersecting)})},{threshold:1}).observe(st);
on('scroll',tick,{passive:true});on('resize',tick);tick();
var cnt=document.getElementById('pv-cnt'),cio=new IntersectionObserver(function(es){if(es[0].isIntersecting){cio.disconnect();var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/1400),e=1-Math.pow(1-k,3);cnt.textContent=Math.round(15*e);if(k<1)requestAnimationFrame(f)})(t0)}},{threshold:.6});cnt.textContent='0';cio.observe(cnt);
var mi=document.getElementById('pv-mapin'),pins=[].slice.call(document.querySelectorAll('.pv-pin'));
function zoom(x,y){mi.style.setProperty('--ox',x+'%');mi.style.setProperty('--oy',y+'%');mi.classList.add('z')}
pins.forEach(function(p){var b=p.querySelector('button');b.addEventListener('click',function(){var on=!p.classList.contains('on');pins.forEach(function(q){q.classList.remove('on')});if(on){p.classList.add('on');zoom(b.dataset.x,b.dataset.y)}else mi.classList.remove('z')})});
document.getElementById('pv-zin').addEventListener('click',function(){var a=pins.filter(function(p){return p.classList.contains('on')})[0];a?zoom(a.querySelector('button').dataset.x,a.querySelector('button').dataset.y):zoom(60,52)});
document.getElementById('pv-zout').addEventListener('click',function(){mi.classList.remove('z');pins.forEach(function(q){q.classList.remove('on')})});
var mf=document.getElementById('pv-mf');mf.addEventListener('click',function(e){var b=e.target.closest('.vp-chip');if(!b)return;var k=b.dataset.k;mf.querySelectorAll('.vp-chip').forEach(function(x){x.setAttribute('aria-pressed',x===b)});pins.forEach(function(p){p.classList.toggle('off',k!=='All'&&p.dataset.c!==k);p.classList.remove('on')});mi.classList.remove('z')});
(function(){var s=document.getElementById('pv-sus'),tr=document.getElementById('pv-trail'),I=['0eedfcae95800cf90c8e055d017aac34','2882b24b799ca7a4515f17d6e845880f','4832270e23473a056a719250ca0b381a','c4a023d5c6e76ebbeba11c362135d2e9'],k=0,lx=-999,ly=-999;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
s.addEventListener('pointermove',function(e){var r=s.getBoundingClientRect(),z=r.width/s.offsetWidth||1,x=(e.clientX-r.left)/z,y=(e.clientY-r.top)/z;if(Math.hypot(x-lx,y-ly)<60)return;lx=x;ly=y;var im=document.createElement('img');im.src='/assets/'+I[k++%I.length]+'.png';im.alt='';im.style.left=x+'px';im.style.top=y+'px';im.style.setProperty('--r',(Math.random()*12-6).toFixed(1)+'deg');tr.appendChild(im);setTimeout(function(){im.classList.add('out')},650);setTimeout(function(){im.remove()},1500);while(tr.children.length>10)tr.firstChild.remove()})})();
document.querySelectorAll('.pv-qb').forEach(function(b){b.addEventListener('click',function(){var it=b.parentNode,on=!it.classList.contains('open');document.querySelectorAll('.pv-qi').forEach(function(q){q.classList.remove('open');q.querySelector('.pv-qb').setAttribute('aria-expanded','false')});if(on){it.classList.add('open');b.setAttribute('aria-expanded','true')}})});
document.querySelectorAll('.pv-toc a').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var t=document.querySelector(a.getAttribute('href')),z=parseFloat(getComputedStyle(document.getElementById('page')).getPropertyValue('--z'))||1;window.scrollTo({top:t.getBoundingClientRect().top+scrollY-80,behavior:'smooth'})})});


return function(){off.forEach(function(f){f()});io.disconnect()}
}
