// @ts-nocheck — ported from the Claude Design prototype (Ayla Marina Village)
export default function marinaVillage() {
var off=[];function on(t,f,o,tg){(tg||window).addEventListener(t,f,o);off.push(function(){(tg||window).removeEventListener(t,f,o)})}
var hdr=document.getElementById('hdr'),sc=null;function onScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}on('scroll',onScroll,{passive:true});onScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}on('resize',fit);fit();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.vp-rv,.vp-ri').forEach(function(el){io.observe(el)});
document.querySelectorAll('.mv-track').forEach(function(t){var sec=t.parentNode,pv=sec.querySelector('.mv-prev'),nx=sec.querySelector('.mv-next'),pr=sec.querySelector('.mv-prog i');
function step(){var c=t.querySelector('.mv-card');return c?c.offsetWidth+24:376}
function upd(){var m=t.scrollWidth-t.clientWidth,s=t.scrollLeft;pv.disabled=s<4;nx.disabled=s>m-4;pr.style.setProperty('--p',(t.clientWidth/t.scrollWidth+(1-t.clientWidth/t.scrollWidth)*(m?s/m:0)).toFixed(3))}
on('click',function(){t.scrollBy({left:-step(),behavior:'smooth'})},false,pv);on('click',function(){t.scrollBy({left:step(),behavior:'smooth'})},false,nx);
on('scroll',upd,{passive:true},t);on('resize',upd);requestAnimationFrame(upd);var ro=null;if(window.ResizeObserver){ro=new ResizeObserver(upd);ro.observe(t);off.push(function(){ro.disconnect()})}upd();
var down=0,x0=0,s0=0,moved=0;on('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=1;moved=0;x0=e.clientX;s0=t.scrollLeft},false,t);
on('pointermove',function(e){if(!down)return;var dx=e.clientX-x0;if(Math.abs(dx)>5){moved=1;t.classList.add('drag')}if(moved)t.scrollLeft=s0-dx});
on('pointerup',function(){if(!down)return;down=0;if(moved){t.classList.remove('drag');var st=step();t.scrollTo({left:Math.round(t.scrollLeft/st)*st,behavior:'smooth'})}});
on('click',function(e){if(moved){e.preventDefault();moved=0}},true,t)});
var bar=document.getElementById('mv-bar'),chs=[].slice.call(bar.querySelectorAll('.vp-chip'));
function act(id){chs.forEach(function(c){c.setAttribute('aria-pressed',c.dataset.t===id)})}
on('click',function(e){var b=e.target.closest('.vp-chip');if(!b)return;var el=document.getElementById(b.dataset.t);act(b.dataset.t);window.scrollTo({top:el.getBoundingClientRect().top+scrollY-150,behavior:'smooth'})},false,bar);
var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)act(e.target.id)})},{rootMargin:'-40% 0px -55% 0px'});document.querySelectorAll('.mv-sec').forEach(function(s){spy.observe(s)});
var lastY=scrollY;on('scroll',function(){var y=scrollY,d=y-lastY;if(Math.abs(d)<6)return;document.body.classList.toggle('nav-off',d>0&&y>200);lastY=y},{passive:true});
var himg=document.getElementById('mv-himg');on('scroll',function(){var y=scrollY;if(y<1000)himg.style.translate='0 '+(y*.25).toFixed(1)+'px'},{passive:true});
return function(){off.forEach(function(f){f()});io.disconnect();spy.disconnect();document.body.classList.remove('nav-off')}
}
