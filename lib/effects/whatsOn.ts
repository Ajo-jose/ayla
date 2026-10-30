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
var TORN=["polygon(0.0% 10.6%,4.2% 10.4%,8.3% 12.1%,12.5% 10.2%,16.7% 6.3%,20.8% 7.3%,25.0% 5.5%,29.2% 5.5%,33.3% 5.3%,37.5% 7.7%,41.7% 9.1%,45.8% 9.0%,50.0% 10.5%,54.2% 10.1%,58.3% 9.5%,62.5% 6.6%,66.7% 4.9%,70.8% 5.2%,75.0% 6.3%,79.2% 4.0%,83.3% 7.6%,87.5% 8.7%,91.7% 9.2%,95.8% 9.3%,100.0% 12.0%,100% 100%,0 100%)", "polygon(0.0% 10.2%,4.2% 8.3%,8.3% 6.7%,12.5% 6.9%,16.7% 3.9%,20.8% 4.3%,25.0% 5.3%,29.2% 6.7%,33.3% 8.1%,37.5% 9.3%,41.7% 11.5%,45.8% 11.9%,50.0% 10.2%,54.2% 10.4%,58.3% 7.6%,62.5% 5.2%,66.7% 5.9%,70.8% 5.4%,75.0% 6.1%,79.2% 8.3%,83.3% 7.8%,87.5% 9.8%,91.7% 9.3%,95.8% 10.4%,100.0% 7.8%,100% 100%,0 100%)", "polygon(0.0% 7.2%,4.2% 8.0%,8.3% 4.7%,12.5% 5.1%,16.7% 4.1%,20.8% 7.7%,25.0% 7.6%,29.2% 9.0%,33.3% 10.6%,37.5% 12.5%,41.7% 11.1%,45.8% 8.4%,50.0% 7.7%,54.2% 6.3%,58.3% 3.0%,62.5% 6.1%,66.7% 6.3%,70.8% 8.3%,75.0% 7.6%,79.2% 9.3%,83.3% 10.3%,87.5% 11.9%,91.7% 10.0%,95.8% 9.0%,100.0% 5.7%,100% 100%,0 100%)"];
var ARROW='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
EVENTS.forEach(function(ev,ci){
var a=document.createElement('a');a.className='wo-fc';a.href=ev.href||'#';a.style.setProperty('--torn',TORN[ci%TORN.length]);a.setAttribute('aria-labelledby','wo-t'+ci);
var im=(ev.images||[])[0];
var media=im?'<img src="'+esc(im.src)+'" alt="" loading="lazy" draggable="false">':'<div class="wo-ph" role="img" aria-label="Image coming soon">'+ICON+'</div>';
var meta=[ev.category,ev.location].filter(Boolean).join(' \u00b7 ');
a.innerHTML='<div class="wo-fc-top"><h3 id="wo-t'+ci+'">'+esc(ev.title)+'</h3>'+(ev.date?'<p class="wo-fc-date">'+esc(ev.date)+'</p>':'')+'<span class="wo-fc-rule" aria-hidden="true"></span><p class="wo-fc-meta">'+esc(meta)+'</p></div><div class="wo-fc-img">'+media+'<span class="wo-fc-link">View details'+ARROW+'</span></div>';
grid.appendChild(a);
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
