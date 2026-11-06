// @ts-nocheck — ported from the Claude Design prototype (Ayla Play)
export default function play() {
var off=[];function on(t,f,o,tg){(tg||window).addEventListener(t,f,o);off.push(function(){(tg||window).removeEventListener(t,f,o)})}
var hdr=document.getElementById('hdr'),sc=null;function onScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}on('scroll',onScroll,{passive:true});onScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}on('resize',fit);fit();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.vp-rv,.vp-ri').forEach(function(el){io.observe(el)});
var hero=document.getElementById('wh-hero'),S=[].slice.call(hero.querySelectorAll('.wh-s')),B=[].slice.call(hero.querySelectorAll('.wh-nav button')),cur=0,lock=0;
function go(n){if(n===cur||Date.now()<lock)return;lock=Date.now()+900;var o=S[cur],s=S[n];S.forEach(function(x){x.classList.remove('was')});o.classList.replace('on','was');o.setAttribute('aria-hidden','true');s.classList.add('on');s.setAttribute('aria-hidden','false');B[cur].classList.remove('on');B[n].classList.add('on');cur=n;var _c=document.getElementById('wh-cur');if(_c)_c.textContent='0'+(n+1);setTimeout(function(){o.classList.remove('was')},1250)}
B.forEach(function(b){on('click',function(){go(+b.dataset.i)},false,b);on('animationend',function(){if(b.classList.contains('on'))go((cur+1)%S.length)},false,b.querySelector('.wh-bar'))});
on('pointerenter',function(){hero.classList.add('pause')},false,hero);on('pointerleave',function(){hero.classList.remove('pause')},false,hero);
var g=document.getElementById('py-grid'),cs=[].slice.call(g.children);
function run(f){var first=cs.map(function(c){return c.getBoundingClientRect()});cs.forEach(function(c){c.hidden=!(f==='all'||c.dataset.g.split(' ').indexOf(f)>-1)});
cs.forEach(function(c,k){if(c.hidden)return;var l=c.getBoundingClientRect(),o=first[k];if(!o.width){c.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'none'}],{duration:600,easing:'cubic-bezier(.22,1,.36,1)'});return}var dx=o.left-l.left,dy=o.top-l.top;if(dx||dy)c.animate([{transform:'translate('+dx+'px,'+dy+'px)'},{transform:'none'}],{duration:600,easing:'cubic-bezier(.22,1,.36,1)'})})}
var tabs=document.querySelector('.py-tabs');on('click',function(e){var b=e.target.closest('.vp-chip');if(!b)return;tabs.querySelectorAll('.vp-chip').forEach(function(x){x.setAttribute('aria-pressed',x===b)});run(b.dataset.f)},false,tabs);
var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('dv-in');io2.unobserve(e.target)}})},{threshold:.15});cs.forEach(function(c,k){c.style.setProperty('--d',k%3);io2.observe(c)});
document.querySelectorAll('.mv-track').forEach(function(t){var sec=t.closest('section'),pv=sec.querySelector('.mv-prev'),nx=sec.querySelector('.mv-next'),pr=sec.querySelector('.mv-prog i');
function step(){var c=t.querySelector('.mv-card');return c?c.offsetWidth+24:376}
function upd(){var m=t.scrollWidth-t.clientWidth,s=t.scrollLeft;pv.disabled=s<4;nx.disabled=s>m-4;pr.style.setProperty('--p',(t.clientWidth/t.scrollWidth+(1-t.clientWidth/t.scrollWidth)*(m?s/m:0)).toFixed(3))}
on('click',function(){t.scrollBy({left:-step(),behavior:'smooth'})},false,pv);on('click',function(){t.scrollBy({left:step(),behavior:'smooth'})},false,nx);
on('scroll',upd,{passive:true},t);on('resize',upd);requestAnimationFrame(upd);var ro=null;if(window.ResizeObserver){ro=new ResizeObserver(upd);ro.observe(t);off.push(function(){ro.disconnect()})}upd();
var down=0,x0=0,s0=0,moved=0;on('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=1;moved=0;x0=e.clientX;s0=t.scrollLeft},false,t);
on('pointermove',function(e){if(!down)return;var dx=e.clientX-x0;if(Math.abs(dx)>5){moved=1;t.classList.add('drag')}if(moved)t.scrollLeft=s0-dx});
on('pointerup',function(){if(!down)return;down=0;if(moved){t.classList.remove('drag');var st=step();t.scrollTo({left:Math.round(t.scrollLeft/st)*st,behavior:'smooth'})}});
on('click',function(e){if(moved){e.preventDefault();moved=0}},true,t)});
return function(){off.forEach(function(x){x()});io.disconnect();io2.disconnect()}
}
