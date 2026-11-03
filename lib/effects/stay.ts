// @ts-nocheck — ported from the Claude Design prototype (Ayla Stay)
export default function stay() {
var off=[];function on(t,f,o){addEventListener(t,f,o);off.push(function(){removeEventListener(t,f,o)})}
var hdr=document.getElementById('hdr'),sc=null;function onScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}on('scroll',onScroll,{passive:true});onScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}on('resize',fit);fit();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.vp-rv,.vp-ri').forEach(function(el){io.observe(el)});
var himg=document.getElementById('mv-himg');on('scroll',function(){var y=scrollY;if(y<1000)himg.style.translate='0 '+(y*.25).toFixed(1)+'px'},{passive:true});
var st=document.getElementById('st-it');[].forEach.call(st.querySelectorAll('.pv-sw'),function(w,i){w.style.transitionDelay=(i*45)+'ms'});
var io2=new IntersectionObserver(function(es){es.forEach(function(e){st.classList.toggle('sw-in',e.isIntersecting)})},{threshold:1});io2.observe(st);
var m=document.querySelector('.st-map'),io3=new IntersectionObserver(function(es,o){if(es[0].isIntersecting){m.classList.add('rv-in');o.disconnect()}},{threshold:.1});io3.observe(document.querySelector('.st-find'));
var cs=[].slice.call(document.querySelectorAll('.st-card'));
function f(){var vh=innerHeight;cs.forEach(function(c,i){var nx=cs[i+1],inn=c.firstElementChild;if(!nx){inn.style.transform='';return}var r=nx.getBoundingClientRect(),p=Math.min(1,Math.max(0,1-(r.top-120)/(vh*.8)));inn.style.transform='scale('+(1-p*.06).toFixed(4)+')';inn.style.filter='brightness('+(1-p*.25).toFixed(3)+')'})}
on('scroll',f,{passive:true});on('resize',f);f();
return function(){off.forEach(function(x){x()});io.disconnect();io2.disconnect();io3.disconnect()}
}
