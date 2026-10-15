// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function stack() {
(function(){
var SLIDES=[
{title:'Marina Village',body:'Body copy goes here — one or two sentences of intro for this section. Replace with real words once the content is written.',ctas:[{label:'Berth enquiry',href:'#',variant:'primary'},{label:'Marina Village',href:'#',variant:'outline'}],media:{type:'image',src:'/assets/4832270e23473a056a719250ca0b381a.png',poster:'',alt:'Paddleboarder in the marina'}},
{title:'Dine',body:'Body copy goes here — one or two sentences of intro for this section. Replace with real words once the content is written.',ctas:[{label:'Explore Dine',href:'#',variant:'primary'}],media:{type:'image',src:'/assets/c4a023d5c6e76ebbeba11c362135d2e9.png',alt:'Restaurant table by the water'}},
{title:'Beach clubs',body:'Body copy goes here — one or two sentences of intro for this section. Replace with real words once the content is written.',ctas:[{label:'Explore Beach',href:'#',variant:'primary'}],media:{type:'image',src:'/assets/0eedfcae95800cf90c8e055d017aac34.png',alt:'Sea view from a balcony'}}];
var wrap=document.getElementById('stackwrap'),st=document.getElementById('stack');if(!wrap)return;
var mediaEl=document.getElementById('st-media'),textEl=document.getElementById('st-text'),list=document.getElementById('st-list'),dots=document.getElementById('st-dots'),live=document.getElementById('st-live');
var N=SLIDES.length,STEP=540,DUR=1100,RM=matchMedia('(prefers-reduced-motion: reduce)').matches,idx=0,lock=false;
var items=SLIDES.map(function(s){var d=document.createElement('div');d.className='st-item';
d.innerHTML=s.media.type==='video'?'<video src="'+s.media.src+'" poster="'+(s.media.poster||'')+'" autoplay muted loop playsinline></video>':'<img src="'+s.media.src+'" alt="'+s.media.alt+'" draggable="false">';mediaEl.appendChild(d);return d});
var texts=SLIDES.map(function(s,i){var d=document.createElement('div');d.className='st-slide';d.setAttribute('role','group');d.setAttribute('aria-roledescription','slide');d.setAttribute('aria-label',(i+1)+' of '+N);
d.innerHTML='<h2>'+s.title+'</h2><p>'+s.body+'</p><div class="st-ctas">'+s.ctas.map(function(c){return '<a class="st-btn st-'+c.variant+'" href="'+c.href+'">'+c.label+'</a>'}).join('')+'</div>';textEl.appendChild(d);return d});
var lis=SLIDES.map(function(s,i){var li=document.createElement('li');li.innerHTML='<button type="button"><span>'+String(i+1).padStart(2,'0')+'</span>'+s.title+'</button>';li.firstChild.onclick=function(){jump(i)};list.appendChild(li);return li.firstChild});
var dts=SLIDES.map(function(s,i){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Go to '+s.title);b.innerHTML='<span></span>';b.onclick=function(){jump(i)};dots.appendChild(b);return b});
function layout(){items.forEach(function(d,i){var k=i-idx,act=k===0,sc=act?1:.72,ty=k*STEP;
d.style.transformOrigin=k<0?'50% 100%':k>0?'50% 0%':'50% 50%';
if(RM){d.style.transform='translateY('+ty+'px) scale('+sc+')';d.style.opacity=Math.abs(k)>1?0:1}else{d.style.transform='translateY('+ty+'px) scale('+sc+')';d.style.opacity=Math.abs(k)>1?0:1}
d.classList.toggle('st-act',act)});
texts.forEach(function(t,i){var on=i===idx;if(on&&!t.classList.contains('st-on')){t.classList.add('st-pre');void t.offsetWidth;t.classList.remove('st-pre');t.classList.add('st-on')}else if(!on)t.classList.remove('st-on');t.querySelectorAll('a').forEach(function(a){a.tabIndex=on?0:-1})});
lis.forEach(function(b,i){b.setAttribute('aria-current',i===idx?'true':'false')});dts.forEach(function(b,i){b.setAttribute('aria-current',i===idx?'true':'false')});
live.textContent='Slide '+(idx+1)+' of '+N+': '+SLIDES[idx].title}
function geo(){var r=wrap.getBoundingClientRect(),f=st.getBoundingClientRect(),pin=r.height-f.height;return {top:r.top,pin:pin,page:pin/(N-1),abs:scrollY+r.top,pinned:r.top<=1&&-r.top<=pin+1}}
var arrived=0,lastW=0,released=0;function edgeReady(now){return !lock&&now-arrived>350&&now-lastW>220}
function go(i){i=Math.max(0,Math.min(N-1,i));if(i===idx||lock)return;idx=i;lock=true;released=0;layout();setTimeout(function(){lock=false;arrived=performance.now()},RM?600:DUR);var g=geo();window.scrollTo(0,Math.round(g.abs+idx*g.page))}
function jump(i){var g=geo();if(!g.pinned)window.scrollTo(0,Math.round(g.abs+i*g.page));lock=false;go(i)}
addEventListener('wheel',function(e){var g=geo();if(!g.pinned)return;var now=performance.now(),prev=lastW;lastW=now;if(lock){e.preventDefault();return}
if(Math.abs(e.deltaY)<2){if(!released)e.preventDefault();return}var dir=e.deltaY>0?1:-1;
if((dir>0&&idx===N-1)||(dir<0&&idx===0)){if(released===dir)return;if(now-arrived>500){released=dir;return}e.preventDefault();return}
released=0;
e.preventDefault();go(idx+dir)},{passive:false});
var ty0=null;
addEventListener('touchstart',function(e){ty0=e.touches[0].clientY},{passive:true});
addEventListener('touchmove',function(e){var g=geo();if(!g.pinned||ty0==null)return;var dy=ty0-e.touches[0].clientY,dir=dy>0?1:-1;if((dir>0&&idx===N-1)||(dir<0&&idx===0)){if(lock||performance.now()-arrived<350)e.preventDefault();return}e.preventDefault();if(!lock&&Math.abs(dy)>40){go(idx+dir);ty0=null}},{passive:false});
addEventListener('touchend',function(){ty0=null});
st.addEventListener('keydown',function(e){if(e.key==='ArrowDown'||e.key==='ArrowRight'){if(idx<N-1){e.preventDefault();go(idx+1)}}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){if(idx>0){e.preventDefault();go(idx-1)}}});
st.tabIndex=-1;
addEventListener('scroll',function(){if(lock)return;var g=geo();if(!g.pinned&&g.top>0){if(idx!==0){idx=0;layout()}return}if(-g.top>g.pin){if(idx!==N-1){idx=N-1;layout()}return}var want=Math.round(-g.top/g.page);if(want!==idx){idx=want;layout()}},{passive:true});
layout();
})();
}
