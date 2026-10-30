// @ts-nocheck — ported from the Claude Design prototype (Ayla Dine v2)
export default function dine() {
var off=[];function on(t,f,o,tg){(tg||window).addEventListener(t,f,o);off.push(function(){(tg||window).removeEventListener(t,f,o)})}
var hdr=document.getElementById('hdr'),sc=null;function onScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}on('scroll',onScroll,{passive:true});onScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}on('resize',fit);fit();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.vp-rv,.vp-ri').forEach(function(el){io.observe(el)});
var g=document.getElementById('dv-grid'),cs=[].slice.call(g.children).filter(function(c){return c.classList.contains('dv-card')}),f='all',q='',em=document.getElementById('dv-empty');
function run(){var first=cs.map(function(c){return c.getBoundingClientRect()});var n=0;
cs.forEach(function(c){var ok=(f==='all'||c.dataset.g===f)&&(!q||c.dataset.n.indexOf(q)>-1);c.hidden=!ok;if(ok)n++});em.hidden=n>0;
var so=document.getElementById('dv-sort').value;cs.slice().sort(function(x,y){if(so==='az')return x.dataset.n<y.dataset.n?-1:1;if(so==='o')return (x.dataset.o-y.dataset.o)||(x.dataset.i-y.dataset.i);return x.dataset.i-y.dataset.i}).forEach(function(c){g.appendChild(c)});
cs.forEach(function(c,k){if(c.hidden)return;var l=c.getBoundingClientRect(),o=first[k];if(!o.width){c.animate([{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'none'}],{duration:600,easing:'cubic-bezier(.22,1,.36,1)'});return}var dx=o.left-l.left,dy=o.top-l.top;if(dx||dy)c.animate([{transform:'translate('+dx+'px,'+dy+'px)'},{transform:'none'}],{duration:600,easing:'cubic-bezier(.22,1,.36,1)'})})}
on('click',function(e){var b=e.target.closest('.vp-chip');if(!b)return;f=b.dataset.f;document.querySelectorAll('.dv-tabs .vp-chip').forEach(function(x){x.setAttribute('aria-pressed',x===b)});run()},false,document.querySelector('.dv-tabs'));
on('change',run,false,document.getElementById('dv-sort'));on('input',function(e){q=e.target.value.trim().toLowerCase();run()},false,document.getElementById('dv-q'));
var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('dv-in');io2.unobserve(e.target)}})},{threshold:.15});cs.forEach(function(c,k){c.style.setProperty('--d',k%3);io2.observe(c)});
var himg=document.getElementById('mv-himg');on('scroll',function(){var y=scrollY;if(y<1000)himg.style.translate='0 '+(y*.25).toFixed(1)+'px'},{passive:true});
return function(){off.forEach(function(x){x()});io.disconnect();io2.disconnect()}
}
