// @ts-nocheck — ported from the Claude Design prototype (Ayla detail pages: Hyatt Regency, Live, Azure Beach)
export default function detail() {
var off=[],obs=[],timers=[];
function addEventListener(t,f,o){window.addEventListener(t,f,o);off.push(function(){window.removeEventListener(t,f,o)})}
function docOn(t,f,o){document.addEventListener(t,f,o);off.push(function(){document.removeEventListener(t,f,o)})}
function IO(a,b){var o=new IntersectionObserver(a,b);obs.push(o);return o}
function T(f,ms){var id=setTimeout(f,ms);timers.push(id);return id}
var hdr=document.getElementById('hdr'),sc=null;function hdrScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}addEventListener('scroll',hdrScroll,{passive:true});hdrScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}addEventListener('resize',fit);fit();
var io=IO(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('rv-in');io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.vp-rv,.vp-ri').forEach(function(el){io.observe(el)});
var toast=document.getElementById('vp-toast'),tt;window.say=function(m){toast.textContent=m;toast.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove('on')},1800)};

var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var page=document.getElementById('page');
function zoom(){return parseFloat(getComputedStyle(page).getPropertyValue('--z'))||1}
function clamp(v,a,b){return Math.min(b,Math.max(a,v))}
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var ticks=[];function onScroll(f){ticks.push(f)}
var raf=0;function run(){raf=0;ticks.forEach(function(f){f()})}
addEventListener('scroll',function(){if(!raf)raf=requestAnimationFrame(run)},{passive:true});addEventListener('resize',function(){if(!raf)raf=requestAnimationFrame(run)});

/* clip-path reveals: observe the parent (a fully clipped element never reports as intersecting) */
$$('.vp-ri').forEach(function(el){IO(function(es,o){if(es[0].isIntersecting){el.classList.add('rv-in');o.disconnect()}},{threshold:.15}).observe(el.parentElement)});

/* hero parallax */
var par=$('[data-par]');if(par&&!reduce)onScroll(function(){var y=scrollY;if(y<1200)par.style.translate='0 '+(y*.25).toFixed(1)+'px'});

/* scroll-scrubbed statement */
$$('.x-state').forEach(function(s){var ws=$$('.w',s),n=ws.length;
onScroll(function(){var r=s.getBoundingClientRect(),vh=innerHeight;var p=clamp((vh*.82-r.top)/(r.height+vh*.28),0,1);var k=Math.round(p*n*1.04);ws.forEach(function(w,i){w.classList.toggle('on',i<k)})})});

/* word-by-word blur reveal (same as the Stay intro) */
$$('.pv-st').forEach(function(st){$$('.pv-sw',st).forEach(function(w,i){w.style.transitionDelay=(i*45)+'ms'});IO(function(es){es.forEach(function(e){st.classList.toggle('sw-in',e.isIntersecting)})},{threshold:.6}).observe(st)});

/* count-up */
function fmt(v,d){return v.toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d})}
var co=IO(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var el=e.target,to=parseFloat(el.dataset.count),d=+(el.dataset.dec||0);if(reduce){el.textContent=fmt(to,d);return}var t0=performance.now(),D=1500;(function f(t){var k=clamp((t-t0)/D,0,1),v=to*(k===1?1:1-Math.pow(2,-10*k));el.textContent=fmt(v,d);if(k<1)requestAnimationFrame(f)})(t0)})},{threshold:.6});
$$('[data-count]').forEach(function(el){co.observe(el)});

/* amenity hover list */
$$('.hy-am').forEach(function(sec){var rows=$$('.hy-ar',sec),imgs=$$('.hy-amm img',sec),cap=$('.hy-amc b',sec),num=$('.hy-amc span',sec);
function set(i){rows.forEach(function(r,j){r.classList.toggle('on',j===i)});imgs.forEach(function(m,j){m.classList.toggle('on',j===i)});if(cap)cap.textContent=rows[i].dataset.name;if(num)num.textContent=('0'+(i+1)).slice(-2)+' / '+('0'+rows.length).slice(-2)}
rows.forEach(function(r,i){r.addEventListener('mouseenter',function(){set(i)});r.addEventListener('focus',function(){set(i)});r.addEventListener('click',function(){set(i)})});set(0)});

/* horizontal tracks (arrows, drag, progress) */
$$('.mv-sec').forEach(function(sec){var tr=$('.mv-track',sec);if(!tr)return;var prev=$('[data-dir="-1"]',sec),next=$('[data-dir="1"]',sec),bar=$('.mv-prog i',sec);
function upd(){var m=tr.scrollWidth-tr.clientWidth;if(bar)bar.style.setProperty('--p',((tr.scrollLeft+tr.clientWidth)/tr.scrollWidth).toFixed(3));if(prev)prev.disabled=tr.scrollLeft<4;if(next)next.disabled=tr.scrollLeft>m-4}
function step(d){tr.scrollBy({left:d*376,behavior:'smooth'})}
if(prev)prev.addEventListener('click',function(){step(-1)});if(next)next.addEventListener('click',function(){step(1)});
tr.addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();
var down=false,sx=0,sl=0,moved=false;
tr.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;down=true;moved=false;sx=e.clientX;sl=tr.scrollLeft});
addEventListener('pointermove',function(e){if(!down)return;var dx=(e.clientX-sx)/zoom();if(Math.abs(dx)>4){moved=true;tr.classList.add('drag')}if(moved)tr.scrollLeft=sl-dx});
addEventListener('pointerup',function(){if(!down)return;down=false;tr.classList.remove('drag')});
tr.addEventListener('click',function(e){if(moved){e.preventDefault();moved=false}},true)});

/* anchor bar + scrollspy */
var chips=$$('.mv-barin [data-t]');
if(chips.length){var tg=chips.map(function(c){return document.getElementById(c.dataset.t)});
chips.forEach(function(c,i){c.addEventListener('click',function(){var el=tg[i];if(!el)return;var y=el.getBoundingClientRect().top+scrollY-150*zoom();scrollTo({top:y,behavior:reduce?'auto':'smooth'})})});
onScroll(function(){var cur=-1;tg.forEach(function(el,i){if(el&&el.getBoundingClientRect().top<innerHeight*.42)cur=i});chips.forEach(function(c,i){if(!c.classList.contains('x-book'))c.setAttribute('aria-pressed',i===cur?'true':'false')})})}
$$('[data-go]').forEach(function(a){a.addEventListener('click',function(e){var el=document.getElementById(a.dataset.go);if(!el)return;e.preventDefault();scrollTo({top:el.getBoundingClientRect().top+scrollY-110*zoom(),behavior:reduce?'auto':'smooth'})})});

/* faq */
$$('.lw-qi').forEach(function(q){var b=$('.lw-qb',q);b.addEventListener('click',function(){var o=!q.classList.contains('open');$$('.lw-qi').forEach(function(x){x.classList.remove('open');$('.lw-qb',x).setAttribute('aria-expanded','false')});if(o){q.classList.add('open');b.setAttribute('aria-expanded','true')}})});

/* hero slider (Azure) */
$$('.py-hero').forEach(function(h){var sl=$$('.py-s',h),sg=$$('.py-seg',h);if(sl.length<2)return;var i=0,t;
function go(n){i=(n+sl.length)%sl.length;sl.forEach(function(s,j){s.classList.toggle('on',j===i)});sg.forEach(function(s,j){s.classList.remove('on','done');if(j<i)s.classList.add('done');if(j===i){void s.offsetWidth;s.classList.add('on')}});clearTimeout(t);t=T(function(){go(i+1)},6000)}
sg.forEach(function(s,j){s.addEventListener('click',function(){go(j)})});go(0)});

/* residence card slides */
$$('.lw-slides').forEach(function(box){var im=$$('img',box),dots=$$('.lw-dots button',box.parentNode),i=0,t;
function go(n){i=(n+im.length)%im.length;im.forEach(function(m,j){m.classList.toggle('on',j===i)});dots.forEach(function(d,j){d.setAttribute('aria-current',j===i?'true':'false')});clearTimeout(t);if(!reduce)t=T(function(){go(i+1)},4800)}
dots.forEach(function(d,j){d.addEventListener('click',function(){go(j)})});$$('[data-hs]',box.parentNode).forEach(function(b){b.addEventListener('click',function(){go(i+parseInt(b.dataset.hs,10))})});go(0)});

/* compare table column highlight */
$$('.lw-ct').forEach(function(t){$$('[data-c]',t).forEach(function(c){c.addEventListener('mouseenter',function(){t.dataset.hl=c.dataset.c});});t.addEventListener('mouseleave',function(){t.dataset.hl=''})});

/* unit explorer */
var PLANS={
'1':{r:[[20,20,210,210,'Living / kitchen'],[230,20,170,120,'Bedroom'],[230,140,90,90,'Bath'],[320,140,80,90,'Hall']],b:[20,230,210,40]},
'1.5':{r:[[20,20,195,210,'Living / kitchen'],[215,20,185,100,'Bedroom'],[215,120,95,110,'Study'],[310,120,90,110,'Bath']],b:[20,230,195,40]},
'2':{r:[[20,20,170,210,'Living / kitchen'],[190,20,210,90,'Bedroom 1'],[190,110,105,120,'Bedroom 2'],[295,110,105,120,'Bath']],b:[20,230,170,40]},
'2.5':{r:[[20,20,150,210,'Living'],[170,20,115,100,'Bedroom 1'],[285,20,115,100,'Bedroom 2'],[170,120,80,110,'Study'],[250,120,75,110,'Bath'],[325,120,75,110,'Hall']],b:[20,230,380,40]}};
function plan(k){var p=PLANS[k],s='<svg viewBox="0 0 420 292" role="img" aria-label="Indicative floorplan">';
s+='<rect class="bl" x="'+p.b[0]+'" y="'+p.b[1]+'" width="'+p.b[2]+'" height="'+p.b[3]+'"/><text x="'+(p.b[0]+p.b[2]/2)+'" y="'+(p.b[1]+25)+'" text-anchor="middle">Balcony</text>';
p.r.forEach(function(r){s+='<rect class="pt" x="'+r[0]+'" y="'+r[1]+'" width="'+r[2]+'" height="'+r[3]+'"/><text x="'+(r[0]+r[2]/2)+'" y="'+(r[1]+r[3]/2+4)+'" text-anchor="middle">'+r[4]+'</text>'});
s+='<rect class="wl" x="20" y="20" width="380" height="210"/></svg>';return s}
var ux=$('.az-ux');if(ux){var btns=$$('.az-ub',ux),box=$('.az-svg',ux),sz=$('.az-sz',ux),nm=$('[data-un]',ux),bd=$('[data-ub]',ux),cur=null;
function pick(i,first){var b=btns[i];btns.forEach(function(x,j){x.classList.toggle('on',j===i);x.setAttribute('aria-pressed',j===i?'true':'false')});
var apply=function(){if(box)box.innerHTML=plan(b.dataset.k);sz.innerHTML=b.dataset.min+' – '+b.dataset.max+'<small>m²</small>';nm.textContent=b.dataset.name;bd.textContent=b.dataset.k+(b.dataset.k==='1'?' bedroom':' bedrooms');var sel=$('#az-unit');if(sel&&!first)sel.value=b.dataset.name};
var old=box&&$('svg',box);if(old&&!first&&!reduce){old.classList.add('out');T(apply,260)}else apply()}
btns.forEach(function(b,i){b.addEventListener('click',function(){pick(i)})});pick(0,true);
var en=$('[data-enq]',ux);if(en)en.addEventListener('click',function(e){e.preventDefault();var sel=$('#az-unit'),on=$('.az-ub.on',ux);if(sel&&on)sel.value=on.dataset.name;var el=document.getElementById('enquire');scrollTo({top:el.getBoundingClientRect().top+scrollY-90*zoom(),behavior:'smooth'})})}

/* pinned horizontal gallery */
var gal=$('.az-gal');if(gal){var tr=$('.az-gt',gal),cnt=$('.az-gc b',gal),hd=$('.az-gh',gal),fs=$$('.az-gf',gal),idx=0,VIS=3,STEP=448,mx=Math.max(0,fs.length-VIS);
var nav=document.createElement('div');nav.className='az-nav';nav.innerHTML='<button type="button" class="az-ar" aria-label="Previous"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" class="az-ar" aria-label="Next"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></button>';
if(hd)hd.appendChild(nav);var pv=nav.children[0],nx=nav.children[1];
function go(i){idx=clamp(i,0,mx);tr.style.transform='translate3d('+(-idx*STEP)+'px,0,0)';pv.disabled=idx===0;nx.disabled=idx===mx;if(cnt)cnt.textContent=('0'+(idx+1)).slice(-2)}
pv.addEventListener('click',function(){go(idx-1)});nx.addEventListener('click',function(){go(idx+1)});go(0)}

/* bounce cards (quick routes) */
(function(){var root=document.getElementById('bc');if(!root)return;var els=[].slice.call(root.children),n=els.length;
var P=[1,.5,-.3,-1,.2,.75,-.6,.35,-.85,.1],SIZE=230,SPREAD=165,ROT=8,PUSH=110,HS=1.08,BOUNCE=.6,DELAY=.3,STAG=.07;
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,mid=(n-1)/2;
var slots=els.map(function(_,i){return{x:(i-mid)*SPREAD,y:0,r:ROT*P[i%P.length]}});
var st={h:-1,t:0,layer:-2,started:false},raf=0,last=0;
var B=slots.map(function(s){return{x:s.x,y:s.y,r:s.r,s:reduce?1:0,vx:0,vy:0,vr:0,vs:0}});
function step(v,ve,t,k,d,dt){var nv=ve+((t-v)*k-ve*d)*dt;return[v+nv*dt,nv]}
function frame(now){raf=0;var dt=Math.min(1/30,Math.max(1/240,(now-last)/1000));last=now;st.t+=dt;
var pk=170,pd=2*(1-.85*BOUNCE)*Math.sqrt(pk),mk=210,md=2*(reduce?1:.72)*Math.sqrt(mk),sub=Math.ceil(dt/(1/240)),hh=dt/sub,mv=0;
for(var i=0;i<n;i++){var c=B[i],sl=slots[i],ap=reduce||st.t>=DELAY+i*STAG,tx=sl.x,ty=sl.y,tr=sl.r,ts=ap?1:0;
if(st.h>=0&&ap){if(i===st.h){ty=sl.y-SIZE*.04;tr=0;ts=HS}else tx=sl.x+Math.sign(i-st.h)*PUSH}
for(var k=0;k<sub;k++){var a=step(c.x,c.vx,tx,mk,md,hh);c.x=a[0];c.vx=a[1];a=step(c.y,c.vy,ty,mk,md,hh);c.y=a[0];c.vy=a[1];a=step(c.r,c.vr,tr,mk,md,hh);c.r=a[0];c.vr=a[1];
if(reduce){c.s=ts;c.vs=0}else{a=step(c.s,c.vs,ts,pk,pd,hh);c.s=a[0];c.vs=a[1]}}
mv+=Math.abs(c.vx)+Math.abs(c.vy)+Math.abs(c.vr)+Math.abs(c.vs)*100+Math.abs(tx-c.x)+Math.abs(ty-c.y)+Math.abs(tr-c.r)+Math.abs(ts-c.s)*100+(ap?0:1);
els[i].style.transform='translate(-50%,-50%) translate3d('+c.x.toFixed(2)+'px,'+c.y.toFixed(2)+'px,0) rotate('+c.r.toFixed(3)+'deg) scale('+Math.max(0,c.s).toFixed(4)+')'}
if(st.layer!==st.h){st.layer=st.h;els.forEach(function(el,i){el.style.zIndex=i===st.h?n+1:i+1;el.toggleAttribute('data-active',i===st.h)})}
if(mv>.02)raf=requestAnimationFrame(frame)}
function wake(){if(raf||!st.started)return;last=performance.now();raf=requestAnimationFrame(frame)}
function pick(e){var r=root.getBoundingClientRect(),z=r.width/root.offsetWidth||1,px=(e.clientX-r.left)/z-root.offsetWidth/2,py=(e.clientY-r.top)/z-root.offsetHeight/2,b=-1,d=1e9;
slots.forEach(function(s,i){var g=Math.abs(px-s.x);if(g<d){d=g;b=i}});var half=SIZE/2;if(b<0||Math.abs(py-slots[b].y)>half+12||d>half+12)return -1;
if(st.h>=0&&st.h!==b&&Math.abs(px-slots[st.h].x)-d<6)return st.h;return b}
root.addEventListener('pointermove',function(e){var x=pick(e);if(x!==st.h){st.h=x;wake()}});
root.addEventListener('pointerleave',function(){if(st.h!==-1){st.h=-1;wake()}});
root.addEventListener('focusin',function(e){var i=els.indexOf(e.target);if(i>=0){st.h=i;wake()}});
root.addEventListener('focusout',function(){st.h=-1;wake()});
root.addEventListener('click',function(e){var i=pick(e);if(i>=0&&!reduce){B[i].vs-=2.2;wake()}});
els.forEach(function(el,i){el.style.zIndex=i+1});
new IntersectionObserver(function(es,o){if(es[0].isIntersecting){st.started=true;st.t=0;wake();o.disconnect()}},{threshold:.3}).observe(root);
})();

/* stacked cards: scale back as the next card arrives */
var cs=$$('.st-card');if(cs.length){onScroll(function(){var vh=innerHeight;cs.forEach(function(c,i){var nx=cs[i+1],inn=c.firstElementChild;if(!nx){inn.style.transform='';return}var r=nx.getBoundingClientRect(),p=clamp(1-(r.top-120)/(vh*.8),0,1);inn.style.transform='scale('+(1-p*.06).toFixed(4)+')';inn.style.filter='brightness('+(1-p*.25).toFixed(3)+')'})})}

/* forms (design only — shows the confirmation state) */
$$('form[data-f]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var m=$('.c2-msg',f),ok=$('.ft-ok',f);if(m)m.hidden=false;if(ok)ok.hidden=false;if(!m&&!ok&&window.say)say('Thank you — we will be in touch.');f.reset()})});

/* image lightbox: expand button (liquid glass) + modal */
var lbT=$$('.az-gi,.az-slot.has');if(lbT.length){
var XP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>';
var lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');lb.setAttribute('aria-label','Image viewer');lb.hidden=true;
lb.innerHTML='<div class="lb-bd"></div><figure class="lb-f"><img alt=""><figcaption></figcaption></figure><button class="lb-x lb-g" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button><button class="lb-p lb-g" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg></button><button class="lb-n lb-g" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>';
document.body.appendChild(lb);off.push(function(){lb.remove();document.documentElement.classList.remove('lb-open')});
var li=$('img',lb),lc=$('figcaption',lb),cur=0,set=[];
function show(i){cur=(i+set.length)%set.length;var im=$('img',set[cur]),f=set[cur].closest('figure'),cp=f&&$('figcaption',f);li.classList.remove('in');li.src=im.currentSrc||im.src;li.alt=im.alt||'';lc.textContent=cp?cp.textContent:'';void li.offsetWidth;li.classList.add('in')}
function open(el){set=lbT.filter(function(x){return x.closest('.az-gal')===el.closest('.az-gal')||(!x.closest('.az-gal')&&!el.closest('.az-gal'))});show(set.indexOf(el));lb.hidden=false;requestAnimationFrame(function(){lb.classList.add('on')});document.documentElement.classList.add('lb-open');$('.lb-x',lb).focus()}
function close(){lb.classList.remove('on');document.documentElement.classList.remove('lb-open');T(function(){lb.hidden=true},300)}
lbT.forEach(function(el){var b=document.createElement('button');b.className='lb-ex lb-g';b.type='button';b.setAttribute('aria-label','Expand image');b.innerHTML=XP;el.appendChild(b);el.classList.add('lb-t');el.addEventListener('click',function(){open(el)})});
$('.lb-bd',lb).addEventListener('click',close);$('.lb-x',lb).addEventListener('click',close);
$('.lb-p',lb).addEventListener('click',function(){show(cur-1)});$('.lb-n',lb).addEventListener('click',function(){show(cur+1)});
docOn('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')close();else if(e.key==='ArrowLeft')show(cur-1);else if(e.key==='ArrowRight')show(cur+1)})}

/* events: pinned horizontal story */
var eps=$('.ep-hs');if(eps){var ept=$('.ep-tr',eps),epp=$('.ep-prog',eps),epb=$$('.ep-bg',eps),epn=epb.length;
onScroll(function(){if(reduce||innerWidth<768){return}var r=eps.getBoundingClientRect(),tot=r.height-innerHeight,p=clamp(tot>0?-r.top/tot:0,0,1),ease=p;ept.style.transform='translate3d('+(-ease*1440*(epn-1)).toFixed(1)+'px,0,0)';epp.style.setProperty('--p',p.toFixed(3));epb.forEach(function(g,i){var c=(p*(epn-1)-i);g.style.transform='translate3d('+(c*-7).toFixed(2)+'%,0,0)'})})}
/* why-ayla: overlapping cards, next card comes to front on scroll */
var ewh=$('.ew-wh');if(ewh){var ewc=$$('.ew-it',ewh),ewl=ewc.length,ewa=-1;
function ewset(a){if(a===ewa)return;ewa=a;ewc.forEach(function(c,i){c.setAttribute('data-d',String((i-a+ewl)%ewl))})}
ewset(0);var ewlock=0;
ewc.forEach(function(c,i){c.style.cursor='pointer';c.addEventListener('click',function(e){if(innerWidth<768||+c.getAttribute('data-d')===0)return;e.preventDefault();ewlock=Date.now()+900;ewset(i);var r=ewh.getBoundingClientRect(),tot=r.height-innerHeight,y=scrollY+r.top+tot*((i+.5)/ewl);scrollTo({top:y,behavior:reduce?'auto':'smooth'})})});
onScroll(function(){if(innerWidth<768){ewset(0);return}if(Date.now()<ewlock)return;var r=ewh.getBoundingClientRect(),tot=r.height-innerHeight,p=clamp(tot>0?-r.top/tot:0,0,.999);ewset(Math.floor(p*ewl))})}
/* golf: events filter */
var gfl=$('.gf-fl');if(gfl){var gb=$$('button',gfl),ge=$$('.gf-ev');gb.forEach(function(b){b.addEventListener('click',function(){gb.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});ge.forEach(function(e){e.hidden=b.dataset.m!=='all'&&e.dataset.m!==b.dataset.m})})})}
/* legal: toc highlight + faq filter */
(function(){var t=document.querySelector('.lg-toc');if(t){var links=[].slice.call(t.querySelectorAll('a'));var secs=links.map(function(a){return document.getElementById(a.dataset.go)});var upd=function(){var cur=0;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<200*zoom())cur=i});links.forEach(function(a,i){a.classList.toggle('on',i===cur)})};addEventListener('scroll',upd,{passive:true});upd()}
var f=document.querySelector('.lg-ft');if(f){var bs=[].slice.call(f.querySelectorAll('button'));bs.forEach(function(b){b.addEventListener('click',function(){bs.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});[].slice.call(document.querySelectorAll('.lw-qi')).forEach(function(q){q.hidden=!(b.dataset.c==='all'||q.dataset.c===b.dataset.c)})})})}})();
/* sustainability: sticky chapter images */
(function(){var ch=$('.sb-ch');if(!ch)return;var im=$$('.sb-sk img',ch),cn=$('.sb-cn b',ch),cs=$$('.sb-c',ch);
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var i=+e.target.dataset.i;im.forEach(function(m,j){m.classList.toggle('on',j===i)});if(cn)cn.textContent=('0'+(i+1)).slice(-2)})},{rootMargin:'-45% 0px -45% 0px'});cs.forEach(function(c){io.observe(c)})})();
run();

/* marina */
(function(){var rg=$('#mr-rg');if(rg){var fv=$('#mr-fv'),fc=$('#mr-fc'),fb=$('#mr-fb'),C=['Up to 15 m berth','15 \u2013 25 m berth','25 \u2013 35 m berth','35 \u2013 45 m berth'];
function up(){var v=+rg.value,i=v<=15?0:v<=25?1:v<=35?2:3;fv.textContent=v;fc.textContent=C[i];fb.style.setProperty('--w',(18+(v-8)/37*82)+'%');rg.style.setProperty('--f',((v-8)/37*100)+'%');rg._i=i}
rg.addEventListener('input',up);up();$('#mr-fk').addEventListener('click',function(){var s=document.getElementById('mr-len');if(s)s.selectedIndex=rg._i})}
var pt=document.getElementById('mr-pt'),sw=$('.mr-sw');if(pt&&sw){var L=pt.getTotalLength(),dot=document.getElementById('mr-dot'),ring=document.getElementById('mr-ring');pt.style.strokeDasharray=L;
function tick(){var r=sw.getBoundingClientRect(),h=innerHeight,p=clamp(-r.top/Math.max(1,r.height-h)+.08,0,1);if(reduce)p=1;pt.style.strokeDashoffset=L*(1-p);var q=pt.getPointAtLength(L*p);dot.setAttribute('cx',q.x);dot.setAttribute('cy',q.y);ring.setAttribute('cx',q.x);ring.setAttribute('cy',q.y);var rd=document.getElementById('mr-rd');if(rd)rd.textContent=(Math.round(L*(1-p)*2.4/10)*10).toLocaleString('en-US')+' m to berth'}
addEventListener('scroll',tick,{passive:true});addEventListener('resize',tick);tick()}
$$('.mr-ck button').forEach(function(b){b.addEventListener('click',function(){b.setAttribute('aria-pressed',b.getAttribute('aria-pressed')==='true'?'false':'true')})})})();


return function(){off.forEach(function(x){x()});obs.forEach(function(o){o.disconnect()});timers.forEach(function(t){clearTimeout(t)});clearTimeout(tt)}
}
