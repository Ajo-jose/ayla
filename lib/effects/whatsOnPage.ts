// @ts-nocheck — ported from the Claude Design prototype (Ayla What's On)
export default function whatsOnPage() {
var off=[];function on(t,f,o){addEventListener(t,f,o);off.push(function(){removeEventListener(t,f,o)})}
var hdr=document.getElementById('hdr'),sc=null;function onScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}on('scroll',onScroll,{passive:true});onScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}on('resize',fit);fit();
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.vp-rv,.vp-ri').forEach(function(el){io.observe(el)});
var toast=document.getElementById('vp-toast'),tt;function say(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},1800)}

var hero=document.getElementById('wh-hero'),S=[].slice.call(hero.querySelectorAll('.wh-s')),B=[].slice.call(hero.querySelectorAll('.wh-nav button')),cur=0,lock=0;
function go(n){if(n===cur||Date.now()<lock)return;lock=Date.now()+900;var o=S[cur],s=S[n];S.forEach(function(x){x.classList.remove('was')});o.classList.replace('on','was');o.setAttribute('aria-hidden','true');s.classList.add('on');s.setAttribute('aria-hidden','false');B[cur].classList.remove('on');B[n].classList.add('on');cur=n;document.getElementById('wh-cur').textContent='0'+(n+1);setTimeout(function(){o.classList.remove('was')},1250)}
B.forEach(function(b){b.addEventListener('click',function(){go(+b.dataset.i)});b.querySelector('.wh-bar').addEventListener('animationend',function(){if(b.classList.contains('on'))go((cur+1)%S.length)})});
hero.addEventListener('pointerenter',function(){hero.classList.add('pause')});hero.addEventListener('pointerleave',function(){hero.classList.remove('pause')});
var CAT={Wellness:'color-mix(in srgb,var(--sage) 45%,#fff)',Fitness:'color-mix(in srgb,var(--sand) 70%,#fff)',Workshops:'color-mix(in srgb,var(--amber) 32%,#fff)',Talks:'color-mix(in srgb,var(--ayla-sky) 60%,#fff)',Music:'color-mix(in srgb,var(--teal) 30%,#fff)',Dining:'color-mix(in srgb,var(--rust) 28%,#fff)'};
var ENT={1:['5-Minute Workouts for Busy People','Robert Fox','Wellness'],4:['How to Start Exercising as a Beginner','Annette Black','Workshops'],6:['Best Stretches to Improve Flexibility','Dianne Russell','Wellness'],8:['Bodyweight Exercises You Can Do at Home','Darrell Steward','Fitness'],14:['How to Stay Motivated to Work Out','Kristin Watson','Talks'],18:['The Benefits of Walking Every Day','Devon Lane','Talks'],20:['Strength Training vs. Cardio: Which Is Better?','Eleanor Pena','Fitness'],23:['Simple Exercises to Reduce Back Pain','Jane Cooper','Wellness'],26:['How to Create a Workout Routine That Works for You','Wade Warren','Workshops'],29:['Common Workout Mistakes and How to Fix Them','Bessie Cooper','Fitness']};
var WD=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
function evs(d){var l=[];if(ENT[d])l.push({tm:'10:00 AM',t:ENT[d][0],v:ENT[d][1],c:ENT[d][2]});
if(d===1){l.push({tm:'6:00 PM',t:'Sunset Yoga',v:'Beach Lawn',c:'Wellness'},{tm:'7:30 PM',t:'Live DJ Set',v:'Vista Lounge',c:'Music'},{tm:'8:00 PM',t:'Sardinian Tasting',v:'Mama Gaia',c:'Dining'},{tm:'9:00 PM',t:'Live Music',v:'Red Restaurant',c:'Music'})}
else{var w=(d+1)%7;if(w===5||w===6)l.push({tm:'7:30 PM',t:'Live DJ Set',v:'Vista Lounge',c:'Music'},{tm:'9:00 PM',t:'Live Music',v:'Red Restaurant',c:'Music'});if(w===0)l.push({tm:'8:00 PM',t:'Sardinian Tasting',v:'Mama Gaia',c:'Dining'})}
return l.filter(function(e){return flt==='All'||e.c===flt})}
var flt='All',sel=1,fw=document.getElementById('wh-filters');
fw.innerHTML=['All'].concat(Object.keys(CAT)).map(function(k){return '<button class="vp-chip" aria-pressed="'+(k==='All')+'" data-k="'+k+'" style="--c:'+(CAT[k]||'transparent')+'">'+(CAT[k]?'<i></i>':'')+k+'</button>'}).join('');
fw.addEventListener('click',function(e){var b=e.target.closest('.vp-chip');if(!b)return;flt=b.dataset.k;fw.querySelectorAll('.vp-chip').forEach(function(x){x.setAttribute('aria-pressed',x===b)});drawCal();drawDay()});
var days=document.getElementById('wh-days');
function drawCal(){var h='';[30,31].forEach(function(n){h+='<div class="wh-d out" aria-hidden="true"><span class="num">'+n+'</span></div>'});
for(var d=1;d<=30;d++){var l=evs(d);h+='<button class="wh-d'+(d===sel?' sel':'')+'" data-d="'+d+'" aria-label="April '+d+', '+l.length+' events" aria-pressed="'+(d===sel)+'"><span class="num">'+d+'</span>'+(l.length?'<span><span class="wh-pill" style="--c:'+CAT[l[0].c]+'">'+l[0].t+'</span>'+(l.length>1?'<span class="wh-more">+'+(l.length-1)+' more</span>':'')+'</span>':'')+'</button>'}
[1,2,3].forEach(function(n){h+='<div class="wh-d out" aria-hidden="true"><span class="num">'+n+'</span></div>'});days.innerHTML=h}
function drawDay(){var l=evs(sel),box=document.getElementById('wh-evs');document.getElementById('wh-wd').textContent=WD[(sel+1)%7];document.getElementById('wh-pdate').textContent='April '+sel;
if(l.length){box.innerHTML='<ul class="wh-ev">'+l.map(function(e,i){return '<li style="--i:'+i+'"><time>'+e.tm+'</time><div><strong>'+e.t+'</strong><span><i style="--c:'+CAT[e.c]+'"></i>'+e.v+'</span><a href="#">Reserve</a></div><button class="wh-add" aria-label="Add '+e.t+' to calendar" data-t="'+e.t+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="M16 19h6"/><path d="M19 16v6"/></svg></button></li>'}).join('')+'</ul>'}
else{var nx=0;for(var d=sel+1;d<=30;d++){if(evs(d).length){nx=d;break}}box.innerHTML='<div class="wh-empty"><p>Nothing scheduled'+(flt!=='All'?' in '+flt:'')+' on this day.</p>'+(nx?'<button class="wh-nextbtn" data-d="'+nx+'">Next: April '+nx+'</button>':'')+'</div>'}
}
function pick(d){sel=d;days.querySelectorAll('.wh-d[data-d]').forEach(function(b){var on=+b.dataset.d===d;b.classList.toggle('sel',on);b.setAttribute('aria-pressed',on)});drawDay()}
days.addEventListener('click',function(e){var b=e.target.closest('.wh-d[data-d]');if(b)pick(+b.dataset.d)});
document.getElementById('wh-evs').addEventListener('click',function(e){var a=e.target.closest('.wh-add');if(a)say(a.dataset.t+' added to your calendar');var n=e.target.closest('.wh-nextbtn');if(n)pick(+n.dataset.d)});
drawCal();drawDay();


return function(){off.forEach(function(f){f()});io.disconnect()}
}
