// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function foldCopy() {
(function(){
var f2=document.getElementById('fold2'),fig=f2&&f2.querySelector('figure'),col=fig&&fig.nextElementSibling;if(!col)return;
function split(){var n=0;[].slice.call(col.querySelectorAll('p')).forEach(function(p){
var words=p.textContent.trim().split(/\s+/);p.innerHTML=words.map(function(w){return '<span class="w" style="display:inline">'+w+'</span>'}).join(' ');
var lines=[],top=null;[].slice.call(p.querySelectorAll('.w')).forEach(function(s){var t=s.offsetTop;if(t!==top){lines.push([]);top=t}lines[lines.length-1].push(s.textContent)});
p.innerHTML=lines.map(function(l){var d=(450+(n++)*90);return '<span style="display:block;overflow:hidden"><span class="lrs" style="display:block;will-change:transform,opacity">'+l.join(' ')+'</span></span>'}).join('');});
[].slice.call(col.children).forEach(function(c){if(c.tagName!=='P'){c.classList.add('lrs');c.style.willChange='transform,opacity'}});startScrub();}
function startScrub(){var items=[].slice.call(col.querySelectorAll('.lrs')),cur=items.map(function(){return 0}),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function target(i){if(reduce)return 1;var r=f2.getBoundingClientRect(),vh=innerHeight,b=(vh-r.top)/(r.height*.9);return Math.max(0,Math.min(1,(b-.3-i*.07)/.35))}
function loop(){var any=false;items.forEach(function(el,i){var t=target(i),c=cur[i]+(t-cur[i])*.12;if(Math.abs(t-c)<.001)c=t;else any=true;cur[i]=c;var e=1-Math.pow(1-c,3),big=el.tagName!=='SPAN';el.style.transform='translate3d(0,'+((1-e)*(big?40:110)).toFixed(2)+(big?'px':'%')+',0)';el.style.opacity=e.toFixed(3)});requestAnimationFrame(loop)}
loop();}
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(split);
})();
}
