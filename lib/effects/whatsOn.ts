// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function whatsOn() {
(function(){
var EVENTS=[
{images:[{src:'/assets/4832270e23473a056a719250ca0b381a.png',alt:'Paddleboarder on the marina at sunset'},{src:'/assets/2882b24b799ca7a4515f17d6e845880f.png',alt:'Couple walking along the promenade'},{src:'/assets/0eedfcae95800cf90c8e055d017aac34.png',alt:'Balcony view over the sea'}],date:'12 Nov',category:'Category',location:'Location',title:'Event title goes here',description:'Short event description goes here.',href:'#'},
{images:[{src:'/assets/c4a023d5c6e76ebbeba11c362135d2e9.png',alt:'Guest dining at a waterfront restaurant'}],date:'24 Nov',category:'Category',location:'Location',title:'Event title goes here',description:'Short event description goes here.',href:'#'},
{images:[{src:'/assets/whatson-fire.png',alt:'Fire performer spinning flaming staffs at night'}],date:'3 Dec',category:'Category',title:'Event title goes here',description:'Short event description goes here.',href:'#'}];
var grid=document.getElementById('wo-grid');if(!grid)return;
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var ICON='<svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="#b8cdea" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"></path></svg>';
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function tint(card,img){try{var c=document.createElement('canvas');c.width=24;c.height=24;var x=c.getContext('2d');var w=img.naturalWidth,ht=img.naturalHeight;x.drawImage(img,0,ht*.6,w,ht*.4,0,0,24,24);var d=x.getImageData(0,0,24,24).data,r=0,g=0,b=0,n=d.length/4;for(var i=0;i<d.length;i+=4){r+=d[i];g+=d[i+1];b+=d[i+2]}r/=n;g/=n;b/=n;var k=Math.min(1,62/Math.max(r,g,b,1));r=Math.round(r*k);g=Math.round(g*k);b=Math.round(b*k);card.style.setProperty('--wo-c','rgb('+r+','+g+','+b+')');card.style.setProperty('--wo-c0','rgba('+r+','+g+','+b+',.35)')}catch(_){}}
EVENTS.forEach(function(ev,ci){
var a=document.createElement('article');a.className='wo-card';a.setAttribute('aria-labelledby','wo-t'+ci);
var imgs=(ev.images||[]).slice(0,1),multi=false;
var media=imgs.length?imgs.map(function(im,i){return '<img src="'+esc(im.src)+'" alt="'+esc(im.alt)+'"'+(i?' aria-hidden="true"':'')+' class="'+(i?'':'wo-on')+'" draggable="false">'}).join(''):'<div class="wo-ph" role="img" aria-label="Image coming soon">'+ICON+'</div>';
var chips=[ev.category,ev.location].filter(Boolean).map(function(c){return '<span class="wo-chip">'+esc(c)+'</span>'}).join('');
a.innerHTML='<div class="wo-media">'+media+'</div><div class="wo-fade" aria-hidden="true"></div><div class="wo-body">'+
(ev.date?'<div class="wo-count" style="color: '+(['#FFFFFF67','#FFFFFF56','#FFFFFF50'][ci]||'#FFFFFF56')+'">'+esc(ev.date)+'</div>':'')+
'<div class="wo-title"><h3 id="wo-t'+ci+'">'+esc(ev.title)+'</h3></div>'+
'<p class="wo-desc">'+esc(ev.description)+'</p>'+(chips?'<div class="wo-chips">'+chips+'</div>':'')+
'<a class="wo-btn" href="'+esc(ev.href||'#')+'" aria-label="More info: '+esc(ev.title)+'">More Info</a></div>';
grid.appendChild(a);
var els=[].slice.call(a.querySelectorAll('.wo-media img'));
if(els[0]){if(els[0].complete&&els[0].naturalWidth)tint(a,els[0]);else els[0].addEventListener('load',function(){tint(a,els[0])})}
return;
var cnt=a.querySelector('.wo-count'),num=a.querySelector('.wo-n'),cur=0,timer=0;
function show(i){cur=(i+els.length)%els.length;els.forEach(function(im,j){im.classList.toggle('wo-on',j===cur);im.setAttribute('aria-hidden',j===cur?'false':'true')});num.textContent=String(cur+1).padStart(2,'0');cnt.setAttribute('aria-label','Image '+(cur+1)+' of '+els.length)}
function auto(){clearInterval(timer);if(!RM)timer=setInterval(function(){if(!document.hidden&&!a.matches(':hover'))show(cur+1)},4200+ci*500)}
var m=a.querySelector('.wo-media'),x0=null;
m.addEventListener('pointerdown',function(e){x0=e.clientX});
m.addEventListener('pointerup',function(e){if(x0==null)return;var dx=e.clientX-x0;x0=null;if(Math.abs(dx)>30){show(cur+(dx<0?1:-1));auto()}});
auto();
});
})();
}
