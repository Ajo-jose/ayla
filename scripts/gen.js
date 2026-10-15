const fs=require('fs');
const L=fs.readFileSync('scripts/_lines.txt','utf8').split('\n');
const seg=(a,b)=>L.slice(a-1,b).join('\n');
const T=require('html-to-jsx-transform');
const conv=(html)=>T.htmlToJsx(html);
const secs={
 Hero:[154,178],Fold2:[179,214],Stay:[215,225],Moments:[226,231],Live:[232,241],Stack:[242,250],Duo:[251,255],WhatsOn:[256,259],Featured:[260,263],Footer:[264,285]};
fs.mkdirSync('app/components',{recursive:true});
for(const [name,[a,b]] of Object.entries(secs)){
  let html=seg(a,b);
  let jsx=conv(html);
  if(typeof jsx!=='string') jsx=jsx.toString();
  let imports='',icons=new Set();
  if(name==='Footer'){
    const map={'arrow-right':'ArrowRight','smartphone':'Smartphone','play':'Play','star':'Star','phone':'Phone','printer':'Printer','mail':'Mail','map-pin':'MapPin','facebook':'Facebook','instagram':'Instagram','linkedin':'Linkedin','youtube':'Youtube'};
    jsx=jsx.replace(/<i data-lucide="([\w-]+)"([^>]*)(\/>|><\/i>)/g,(m,n)=>{icons.add(map[n]);return `<${map[n]} size={20} strokeWidth={1.75} aria-hidden="true" />`});
    imports=`import { ${[...icons].join(', ')} } from 'lucide-react'\nimport { useState } from 'react'\n`;
    jsx=jsx.replace(/onSubmit=\{[^}]*\}|onsubmit="[^"]*"/,'onSubmit={onSubmit}');
    jsx=jsx.replace(/<p className="ft-ok" role="status" hidden>/,'<p className="ft-ok" role="status" hidden={!ok}>');
  }
  const body=`${name==='Footer'?"'use client'\n":''}${imports}\nexport default function ${name}() {\n${name==='Footer'?"  const [ok, setOk] = useState(false)\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setOk(true); e.currentTarget.reset() }\n":''}  return (\n    <>\n${jsx}\n    </>\n  )\n}\n`;
  fs.writeFileSync(`app/components/${name}.tsx`,body);
}
// effects
const iifes=[[289,388,'hero'],[389,408,'foldClouds'],[409,415,'foldTitle'],[416,422,'foldReveal'],[423,433,'foldVideo'],[434,446,'foldCopy'],[447,467,'stayStrip'],[468,485,'stayClouds'],[486,492,'stayIntro'],[493,520,'moments'],[521,547,'live'],[548,586,'stack'],[587,604,'duoClouds'],[605,637,'whatsOn']];
const names=[];
for(const [a,b,n] of iifes){
  fs.writeFileSync(`lib/effects/${n}.ts`,`// @ts-nocheck — ported verbatim from the Claude Design prototype (DOM-driven scroll effects)\nexport default function ${n}() {\n${seg(a,b)}\n}\n`);
  names.push(n);
}
fs.writeFileSync('lib/effects/index.ts',names.map(n=>`import ${n} from './${n}'`).join('\n')+`\n\nlet started = false\nexport function initAll() {\n  if (started) return\n  started = true\n${names.map(n=>`  ${n}()`).join('\n')}\n}\n`);
