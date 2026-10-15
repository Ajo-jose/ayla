// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function foldReveal() {
(function(){
var f2=document.getElementById('fold2');if(!f2)return;
var fig=f2.querySelector('figure'),col=fig&&fig.nextElementSibling;document.getElementById('vbox').style.transitionDelay='700ms';
if(col){[].slice.call(col.children).forEach(function(c,i){})}
if(matchMedia('(prefers-reduced-motion: reduce)').matches){f2.classList.add('rv-in');return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){f2.classList.add('rv-in');io.disconnect()}})},{threshold:.45});io.observe(f2);
})();
}
