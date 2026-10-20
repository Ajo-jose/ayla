// @ts-nocheck — ported from the Claude Design prototype (Ayla News Article)
export default function article() {
var off=[];function on(t,f,o){addEventListener(t,f,o);off.push(function(){removeEventListener(t,f,o)})}
var hdr=document.getElementById('hdr'),sc=null;function onScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}on('scroll',onScroll,{passive:true});onScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}on('resize',fit);fit();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}})},{threshold:.15});
function curs(root){root.addEventListener('pointermove',function(e){var m=e.target.closest&&e.target.closest('.nw-img');if(!m)return;var r=m.getBoundingClientRect(),z=r.width/m.offsetWidth||1;m.style.setProperty('--x',((e.clientX-r.left)/z)+'px');m.style.setProperty('--y',((e.clientY-r.top)/z)+'px')})}
var h=document.getElementById('dt-h1');h.innerHTML=h.textContent.split(' ').map(function(w,i){return '<span class="dt-w" style="transition-delay:'+(i*.035)+'s">'+w+'</span>'}).join(' ');
requestAnimationFrame(function(){requestAnimationFrame(function(){document.querySelector('.dt-hero').classList.add('dt-in')})});
document.querySelectorAll('#dt-rel .nw-card').forEach(function(c){io.observe(c)});curs(document.getElementById('dt-rel'));
var fig=document.getElementById('dt-fig'),fi=fig.querySelector('.dt-fimg'),art=document.getElementById('dt-art'),rp=document.getElementById('dt-rp'),tp=document.getElementById('dt-prog');
function cl(v){return Math.max(0,Math.min(1,v))}
function tick(){var vh=innerHeight,r=fig.getBoundingClientRect(),p=cl((vh*.95-r.top)/(vh*.75)),e=1-Math.pow(1-p,3);fi.style.setProperty('--in',(64*(1-e))+'px');fi.style.setProperty('--r',(8*(1-e))+'px');fi.style.setProperty('--s',(1.12-.12*e).toFixed(4));
var a=art.getBoundingClientRect(),q=cl((vh*.3-a.top)/(a.height-vh*.5));rp.style.transform='scaleX('+q+')';tp.style.transform='scaleX('+q+')'}
on('scroll',tick,{passive:true});on('resize',tick);tick();
var toast=document.getElementById('dt-toast'),tt;document.getElementById('dt-copy').addEventListener('click',function(){try{navigator.clipboard.writeText(location.href)}catch(e){}toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},1800)});


return function(){off.forEach(function(f){f()});io.disconnect()}
}
