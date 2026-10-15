// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)
export default function hero() {
(function(){
var INTENSITY=.55,ABERRATION=.35,DRIFT=.4,SCALE=2.4,DUR=1100,AUTOPLAY=6000;
var data=[
{word:'Marina',bg:'/assets/4832270e23473a056a719250ca0b381a.png',fg:'/assets/f4822b32b0f04051c7d830b02ae78b89.png',w:1440,h:968,left:0,top:-148,cx:340,side:'L',sky:'#6aa6d8',ripple:true,alt:'Paddleboarder standing on a board, paddle in hand'},
{word:'Stay',bg:'/assets/0eedfcae95800cf90c8e055d017aac34.png',fg:'/assets/0b58776450154823f45c3cb8e042f9b3.png',w:1440,h:962,left:0,top:-142,cx:340,side:'L',sky:'#6b9fe0',ripple:false,alt:'Couple leaning on a blue balcony railing, seen from behind'},
{word:'Play',bg:'/assets/2882b24b799ca7a4515f17d6e845880f.png',fg:'/assets/031dabd9dac523b90a61e21f2bafb3d5.png',w:1440,h:962,left:0,top:-142,cx:1100,side:'R',sky:'#6aa8e8',ripple:false,alt:'Couple walking along the marina promenade'},
{word:'Live',bg:'/assets/c4a023d5c6e76ebbeba11c362135d2e9.png',fg:'/assets/a53e791093aa902d295aef552ec7dfd6.png',w:1440,h:962,left:0,top:-142,cx:1100,side:'R',sky:'#1a1612',ripple:false,alt:'Woman in sunglasses seated at a restaurant table'}];
var stage=document.getElementById('stage');
var cv=document.createElement('canvas');cv.setAttribute('aria-hidden','true');cv.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block';
var gl=cv.getContext('webgl',{antialias:false,premultipliedAlpha:false});var GL=!!gl;
if(GL)stage.appendChild(cv);
var n=data.length,stage=document.getElementById('stage'),dotsEl=document.getElementById('dots');
var els=data.map(function(s,i){
var sec=document.createElement('section');sec.className='sl';sec.setAttribute('aria-label','Slide '+(i+1)+' of '+n+': '+s.word);
sec.style.cssText='position:absolute;inset:0;overflow:hidden;background:'+(GL?'transparent':s.sky)+';opacity:'+(i?0:1)+';visibility:'+(i?'hidden':'visible')+';will-change:opacity';
var scrim=s.side==='R'?'linear-gradient(to left, rgba(0, 95, 155,0.3), rgba(0, 95, 155,0) 66%)':'linear-gradient(to right, rgba(0, 95, 155,0.3), rgba(0, 95, 155,0) 66%)';
var box='position:absolute;left:'+s.left+'px;top:'+s.top+'px;width:'+s.w+'px;height:'+s.h+'px;will-change:transform';
sec.innerHTML=(GL?'':'<div class="bg" aria-hidden="true" style="'+box+'"><img src="'+s.bg+'" alt="" draggable="false" style="width:100%;height:100%;display:block;pointer-events:none">'+
(s.ripple?'<div class="rip" style="position:absolute;left:0;right:0;top:77%;bottom:0;overflow:hidden;pointer-events:none;-webkit-mask-image:linear-gradient(to bottom,transparent,#000 22%);mask-image:linear-gradient(to bottom,transparent,#000 22%)"><div style="position:absolute;inset:0;filter:url(#ripple)"><img src="'+s.bg+'" alt="" draggable="false" style="position:absolute;left:0;top:-'+Math.round(s.h*.77)+'px;width:'+s.w+'px;height:'+s.h+'px;display:block;pointer-events:none"></div></div>':'')+'</div>')+
'<div aria-hidden="true" style="position:absolute;inset:0;background:'+scrim+'"></div>'+
'<div aria-hidden="true" style="position:absolute;left:0;right:0;bottom:0;height:240px;background:linear-gradient(to bottom, rgba(0, 95, 155,0), rgba(0, 95, 155,0.3))"></div>'+
'<div class="ct" style="position:absolute;left:'+(s.cx-400)+'px;top:0;bottom:0;width:800px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;color:#ffffff;will-change:transform">'+
'<h2 style="margin:0;display:flex;flex-direction:column;align-items:center;line-height:1;margin:-24px 0 -16px"><span style="padding:0 16px 8px;line-height:.9;white-space:nowrap;font-family:\'Meno Banner\',\'Cormorant Garamond\',Georgia,serif;font-style:italic;font-weight:500;letter-spacing:-0.05em;font-size:200px;background:linear-gradient(to bottom,#ffffff 40%,#99d1dc);-webkit-background-clip:text;background-clip:text;color:transparent">'+s.word+'</span></h2>'+
'<p style="margin:0;max-width:480px;font-size:18px;line-height:1.55">Body copy goes here — one or two sentences of intro for this section. Replace with real words once the content is written.</p>'+
'<div style="display:flex;gap:12px;margin-top:12px"><button class="btn btn-line">Explore</button></div></div>'+
(GL?'':'<div class="fg" style="'+box+';pointer-events:none"><img src="'+s.fg+'" alt="'+s.alt+'" draggable="false" style="width:100%;height:100%;display:block;pointer-events:none"></div>');
stage.appendChild(sec);
var b=document.createElement('button');b.setAttribute('aria-label','Go to slide '+(i+1)+': '+s.word);
b.style.cssText='width:96px;height:44px;transition:width .4s cubic-bezier(.2,0,0,1);padding:0;border:0;background:transparent;display:flex;align-items:center;cursor:pointer;color:inherit';
b.innerHTML='<span style="display:block;width:100%;height:2px;border-radius:1px;background:currentColor;transition:opacity 0.3s"></span>';
b.onclick=function(){go(i,true)};dotsEl.appendChild(b);
return {sec:sec,ct:sec.querySelector('.ct'),dot:b};
});

var cur=0,nxt=-1,p=0,queued=-1,timer=0,anim=null,hover=false,drag=null;
function e2(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
function animate(to,dur,ease,done){anim={from:p,to:to,t0:performance.now(),dur:dur,ease:ease,done:done}}
function commit(){cur=nxt;nxt=-1;p=0;anim=null;ui();if(queued>=0&&queued!==cur){var q=queued;queued=-1;go(q)}else queued=-1}
function sm(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)}
function ui(){els.forEach(function(e,i){var o=0,y=0;
if(nxt<0){o=i===cur?1:0}else if(i===cur){o=1-sm(p*2.2);y=24*sm(p*2.2)}else if(i===nxt){o=sm((p-.45)/.5);y=-24*(1-o)}
e.sec.style.opacity=o.toFixed(3);e.sec.style.visibility=o>.001?'visible':'hidden';e.sec.style.pointerEvents=o>.5?'auto':'none';e.ct.style.transform='translate3d(0,'+y.toFixed(1)+'px,0)';
var a=(nxt<0?cur:(p<.5?cur:nxt))===i;e.sec.setAttribute('aria-hidden',a?'false':'true');e.dot.setAttribute('aria-current',a?'true':'false');e.dot.firstChild.style.opacity=a?1:.4;e.dot.style.width=a?'160px':'96px';});}
function go(i,user){i=((i%n)+n)%n;if(user)restart();if(nxt>=0||drag&&drag.on){queued=i;return}if(i===cur)return;nxt=i;p=0;if(!GL){cur=nxt;nxt=-1;ui();return}animate(1,DUR,e2,commit)}
function restart(){clearInterval(timer);timer=setInterval(function(){if(!document.hidden&&!hover&&!(drag&&drag.on))go(cur+1)},AUTOPLAY)}
var heroEl=stage.parentNode;heroEl.addEventListener('mouseenter',function(){hover=true});heroEl.addEventListener('mouseleave',function(){hover=false});
stage.addEventListener('pointerdown',function(e){if(e.target.closest('button')||nxt>=0||!GL)return;drag={x:e.clientX,w:stage.getBoundingClientRect().width||1440,on:true,dir:0};stage.classList.add('drag');restart()});
addEventListener('pointermove',function(e){if(!drag)return;var dx=(e.clientX-drag.x)/drag.w,dir=dx<0?1:-1;if(Math.abs(dx)<.005)return;if(dir!==drag.dir){drag.dir=dir;nxt=((cur+dir)%n+n)%n}p=Math.min(1,Math.abs(dx));ui()});
function up(){if(!drag)return;var d=drag;drag=null;stage.classList.remove('drag');if(!d.dir){return}if(p>.4)animate(1,500,function(t){return 1-(1-t)*(1-t)},commit);else animate(0,500,function(t){return 1-(1-t)*(1-t)},function(){nxt=-1;p=0;anim=null;ui()})}
addEventListener('pointerup',up);addEventListener('pointercancel',up);
document.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(cur+1,true);if(e.key==='ArrowLeft')go(cur-1,true)});
ui();restart();
if(GL){
var dpr=Math.min(2,devicePixelRatio||1);cv.width=1440*dpr;cv.height=820*dpr;gl.viewport(0,0,cv.width,cv.height);
var vs='attribute vec2 a;varying vec2 v;void main(){v=vec2(a.x*.5+.5,.5-a.y*.5);gl_Position=vec4(a,0.,1.);}';
var fs=[
'precision highp float;uniform sampler2D uA,uB;uniform float uP,uT,uI,uAb,uDr,uSc;varying vec2 v;',
'float hash21(vec2 p){vec3 p3=fract(vec3(p.xyx)*.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}',
'float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);float a=hash21(i),b=hash21(i+vec2(1.,0.)),c=hash21(i+vec2(0.,1.)),d=hash21(i+vec2(1.,1.));return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}',
'float fbm(vec2 p){float r=0.,a=.5;for(int i=0;i<5;i++){r+=a*noise(p);p*=2.;a*=.5;}return r;}',
'void main(){float p=clamp(uP,0.,1.);float env=sin(p*3.14159265);vec2 uv=v;',
'uv+=vec2(sin(uT*.25+uv.y*4.),cos(uT*.22+uv.x*4.))*uDr*.008;',
'uv=(uv-.5)*(1.-uDr*.02*sin(uT*.4))+.5;',
'float nn=fbm(uv*uSc+uT*.03);float warp=fbm(uv*uSc*1.7-uT*.02);vec2 g=vec2(nn,warp)-.5;',
'vec2 uvC=uv+g*uI*.5*p;vec2 uvN=uv-g*uI*.5*(1.-p);float m=smoothstep(nn-.15,nn+.15,p);',
'float ca=uAb*env*.03;',
'vec3 cC=vec3(texture2D(uA,uvC+vec2(ca,0.)).r,texture2D(uA,uvC).g,texture2D(uA,uvC-vec2(ca,0.)).b);',
'vec3 cN=vec3(texture2D(uB,uvN+vec2(ca,0.)).r,texture2D(uB,uvN).g,texture2D(uB,uvN-vec2(ca,0.)).b);',
'vec3 col=mix(cC,cN,m);float vig=smoothstep(1.25,.25,length(uv-.5));col=mix(col,vec3(0.),(1.-vig)*.28);',
'gl_FragColor=vec4(col,1.);}'].join('\n');
function sh(t,src){var o=gl.createShader(t);gl.shaderSource(o,src);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))console.error(gl.getShaderInfoLog(o));return o}
var pg=gl.createProgram();gl.attachShader(pg,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pg,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pg);gl.useProgram(pg);
var bf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,bf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
var la=gl.getAttribLocation(pg,'a');gl.enableVertexAttribArray(la);gl.vertexAttribPointer(la,2,gl.FLOAT,false,0,0);
var U={};['uA','uB','uP','uT','uI','uAb','uDr','uSc'].forEach(function(k){U[k]=gl.getUniformLocation(pg,k)});
gl.uniform1i(U.uA,0);gl.uniform1i(U.uB,1);gl.uniform1f(U.uI,INTENSITY);gl.uniform1f(U.uAb,ABERRATION);gl.uniform1f(U.uDr,DRIFT);gl.uniform1f(U.uSc,SCALE);
function load(src){return new Promise(function(r){var im=new Image();im.onload=function(){r(im)};im.onerror=function(){r(null)};im.src=src})}
var tex=data.map(function(){var t=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,t);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([106,166,216,255]));
[gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T].forEach(function(w){gl.texParameteri(gl.TEXTURE_2D,w,gl.CLAMP_TO_EDGE)});gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);return t});
data.forEach(function(s,i){Promise.all([load(s.bg),load(s.fg)]).then(function(r){var c=document.createElement('canvas');c.width=1440;c.height=820;var x=c.getContext('2d');x.fillStyle=s.sky;x.fillRect(0,0,1440,820);
if(r[0])x.drawImage(r[0],s.left,s.top,s.w,s.h);if(r[1])x.drawImage(r[1],s.left,s.top,s.w,s.h);gl.bindTexture(gl.TEXTURE_2D,tex[i]);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,c)})});
var vis=true;new IntersectionObserver(function(es){vis=es[0].isIntersecting}).observe(stage);
var T0=performance.now();
function frame(now){requestAnimationFrame(frame);
if(anim){var k=Math.min(1,(now-anim.t0)/anim.dur);p=anim.from+(anim.to-anim.from)*anim.ease(k);ui();if(k>=1){var dn=anim.done;anim=null;dn()}}
if(!vis)return;
gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,tex[cur]);gl.activeTexture(gl.TEXTURE1);gl.bindTexture(gl.TEXTURE_2D,tex[nxt>=0?nxt:cur]);
gl.uniform1f(U.uP,nxt>=0?p:0);gl.uniform1f(U.uT,(now-T0)/1000);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}
requestAnimationFrame(frame);
}
var hdr=document.getElementById('hdr'),sc=null;
function onScroll(){var s=(window.scrollY||0)>60;if(s!==sc){sc=s;hdr.style.setProperty('--tint',s?'linear-gradient(to bottom, rgba(0, 95, 155, 0.8), rgba(0, 95, 155, 0))':'linear-gradient(to bottom, rgba(0, 95, 155, 0.3), rgba(0, 95, 155, 0))')}}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}
window.addEventListener('resize',fit);fit();
function fit(){document.getElementById('page').style.setProperty('--z',document.documentElement.clientWidth/1440||1)}
})();
}
