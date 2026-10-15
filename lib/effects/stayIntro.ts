// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function stayIntro() {
(function(){
var ip=document.getElementById('sw-intro');if(!ip)return;
var words=ip.textContent.trim().split(/\s+/);
ip.setAttribute('aria-label',words.join(' '));
ip.innerHTML=words.map(function(w,i){return '<span class="sw-w" aria-hidden="true" style="transition-delay:'+(i*45)+'ms">'+w+'</span>'}).join(' ');
var io=new IntersectionObserver(function(es){es.forEach(function(e){ip.classList.toggle('sw-in',e.isIntersecting)})},{threshold:1});io.observe(ip);
})();
}
