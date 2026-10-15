// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function foldTitle() {
(function(){
var h2=document.querySelector('#fold2 h2');if(!h2)return;
var lines=[].slice.call(h2.children);
lines.forEach(function(s,i){var inner=document.createElement('span');inner.className='lr';inner.style.transitionDelay=(i*140)+'ms';while(s.firstChild)inner.appendChild(s.firstChild);s.appendChild(inner);s.style.overflow='hidden';s.style.paddingBottom='0.08em'});
if(matchMedia('(prefers-reduced-motion: reduce)').matches){h2.classList.add('lr-in');return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){h2.classList.add('lr-in');io.disconnect()}})},{threshold:.6});io.observe(h2);
})();
}
