// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function stayStrip() {
(function(){
var wrap=document.getElementById('staywrap'),stage=document.getElementById('stay'),strip=document.getElementById('sw-strip'),title=document.getElementById('sw-h');
if(!wrap)return;var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var PROPS=[{name:'Hyatt Regency',href:'#',img:'/assets/4832270e23473a056a719250ca0b381a.png',alt:'Paddleboarder on calm water at the marina'},{name:'Pulse',href:'#',img:'/assets/2882b24b799ca7a4515f17d6e845880f.png',alt:'Marina promenade on a sunny day'},{name:'Cloud7',href:'#',img:'/assets/0eedfcae95800cf90c8e055d017aac34.png',alt:'Balcony view over the sea'}];
var CW=300,CH=420,GAP=120,LEFT=(1440-(CW*3+GAP*2))/2,TOP=160,W=1440,LERP=.08;
var els=PROPS.map(function(pr,i){var d=document.createElement('div');d.className='sw-tile';d.setAttribute('role','listitem');d.style.width=CW+'px';
d.innerHTML='<div class="sw-img" style="height:'+CH+'px"><img src="'+pr.img+'" alt="'+pr.name+': '+pr.alt+'" draggable="false"><a class="sw-explore" href="'+pr.href+'" tabindex="-1" aria-label="Explore more: '+pr.name+'">Explore more</a></div><div class="sw-cap"><h3>'+pr.name+'</h3></div>';
strip.appendChild(d);return {el:d,img:d.querySelector('.sw-img'),pic:d.querySelector('img'),a:d.querySelector('a'),fx:LEFT+i*(CW+GAP),on:false}});
var cp=0,run=false;
function eo(x){return 1-Math.pow(1-x,4)}
function cl(x){return Math.max(0,Math.min(1,x))}
function target(){var r=wrap.getBoundingClientRect(),f=stage.getBoundingClientRect();return cl(-r.top/Math.max(1,r.height-f.height))}
function frame(){if(!run)return;requestAnimationFrame(frame);
var tg=RM?1:target();cp=RM?1:cp+(tg-cp)*LERP;if(Math.abs(tg-cp)<.0005)cp=tg;
var tf=eo(cl((cp-.24)/.36));title.style.opacity=(1-tf*.88).toFixed(3);var ip=document.getElementById('sw-intro');if(ip)ip.style.opacity=(1-tf).toFixed(3);title.style.transform='translateY(-54%) scale('+(1-.06*tf).toFixed(4)+')';
var t=cl((cp-.28)/.68),sh=(1-t)*(W-LEFT+40);
els.forEach(function(o,i){var x=o.fx+sh;
o.el.style.transform='translate3d('+x.toFixed(1)+'px,'+TOP+'px,0)';
var on=x<1440;if(on!==o.on){o.on=on;o.a.tabIndex=on?0:-1}});}
new IntersectionObserver(function(es){var v=es[0].isIntersecting;if(v&&!run){run=true;requestAnimationFrame(frame)}else if(!v)run=false},{rootMargin:'200px'}).observe(wrap);
})();
}
