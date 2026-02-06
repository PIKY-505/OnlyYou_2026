import{c as qi,j as e,r as a,u as Wi,C as Te,a as Xi,F as Yi,R as gt,b as vt,d as Hi,e as Vi,f as $i,g as Ji,h as Ki,i as fi,k as Qi,l as Zi,m as mi,n as hi,o as G,p as en,q as tn,s as nn,t as pi,v as on,w as sn,x as gi,y as xt,z as vi,A as rn,B as an,D as ln,O as cn,E as un,G as dn,P as fn,V as le,H as _t,I as xi,S as at,W as lt,J as mn,M as Et,K as je,L as hn,N as pn,Q as gn,T as vn,U as xn,X as yn,Y as bn,Z as Ie,_ as Tt,$ as Qe,a0 as st,a1 as Ze,a2 as wn,a3 as Gt,a4 as Sn,a5 as Cn,a6 as jn,a7 as qt,a8 as Rn,a9 as nt,aa as An,ab as Ln,ac as Wt,ad as Pn,ae as kn,af as Xt,ag as $e,ah as En,ai as _n,aj as Tn,ak as Fn,al as Mn,am as yi,an as In,ao as Dn,ap as zn,aq as bi,ar as Nn,as as Un,at as On,au as Bn,av as Gn,aw as qn,ax as Wn}from"./vendor-DYO69fHc.js";import{u as He,a as tt,b as Xn,c as et,m as ne,A as Pe}from"./framer-motion-v7nQ6Ab2.js";import{R as Yn,T as Hn,P as Vn,C as Yt,M as $n}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const C of h.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&r(C)}).observe(document,{childList:!0,subtree:!0});function i(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(u){if(u.ep)return;u.ep=!0;const h=i(u);fetch(u.href,h)}})();const Ue=qi(o=>({isUnlocked:!1,unlockApp:()=>o({isUnlocked:!0}),lockGame:()=>o({isUnlocked:!1}),activeShop:null,openShop:t=>o({activeShop:t}),closeShop:()=>o({activeShop:null}),isGameActive:!1,toggleGame:()=>o(t=>({isGameActive:!t.isGameActive})),coins:0,addCoins:t=>o(i=>({coins:i.coins+t})),gameVolume:.4,setGameVolume:t=>o({gameVolume:t}),activeCoinSkin:"dase",setCoinSkin:t=>o({activeCoinSkin:t}),ownedItems:["gradient","default","none","dase"],buyItem:t=>o(i=>i.ownedItems.includes(t.id)?i:i.coins>=t.price?{coins:i.coins-t.price,ownedItems:[...i.ownedItems,t.id]}:i),achievements:[],notification:null,unlockAchievement:t=>o(i=>i.achievements.includes(t)?i:{achievements:[...i.achievements,t],notification:{type:"achievement",id:t}}),clearNotification:()=>o({notification:null}),resetProgress:()=>o({coins:0,ownedItems:["gradient","default","none","dase"],activeBackground:"gradient",activeCursor:"default",activeTrail:"none",activeCoinSkin:"dase",achievements:[],isGameActive:!1}),activeBackground:"gradient",setBackground:t=>o({activeBackground:t}),activeCursor:"default",setCursor:t=>o({activeCursor:t}),activeTrail:"none",setTrail:t=>o({activeTrail:t})})),Jn=({text:o,disabled:t=!1,speed:i=3,className:r="",color:u="#7c7c7c",shineColor:h="#ffffff",direction:C="right"})=>e.jsx("div",{className:`shiny-text ${C} ${t?"disabled":""} ${r}`,style:{"--shiny-speed":`${i}s`,"--base-color":u,"--shine-color":h},children:o}),Ht=o=>(o=o.replace("#",""),[parseInt(o.slice(0,2),16)/255,parseInt(o.slice(2,4),16)/255,parseInt(o.slice(4,6),16)/255]),Kn=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,Qn=`
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`,wi=a.forwardRef(function({uniforms:t},i){return Wi((r,u)=>{i.current.material.uniforms.uTime.value+=.1*u}),e.jsxs("mesh",{ref:i,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:Kn,fragmentShader:Qn})]})});wi.displayName="SilkPlane";const Si=({speed:o=1,scale:t=2,color:i="#ff99cc",noiseIntensity:r=.5,rotation:u=0})=>{const h=a.useRef(),C=a.useMemo(()=>({uSpeed:{value:o},uScale:{value:t},uNoiseIntensity:{value:r},uColor:{value:new Te(...Ht(i))},uRotation:{value:u},uTime:{value:0}}),[]);return a.useEffect(()=>{if(h.current){const y=h.current.material.uniforms;y.uSpeed.value=o,y.uScale.value=t,y.uNoiseIntensity.value=r,y.uColor.value.set(...Ht(i)),y.uRotation.value=u}},[o,t,r,i,u]),a.useEffect(()=>{const g=setInterval(()=>window.dispatchEvent(new Event("resize")),50),R=setTimeout(()=>clearInterval(g),1200);return()=>{clearInterval(g),clearTimeout(R)}},[]),e.jsx(Xi,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(wi,{ref:h,uniforms:C})})},Zn=()=>{const[o,t]=a.useState(""),[i,r]=a.useState(!1),u=Ue(g=>g.unlockApp),h="230824",C=g=>{const R=g.target.value.replace(/\D/g,"");if(R.length>6)return;let w=R;R.length>2&&(w=R.slice(0,2)+"/"+R.slice(2)),R.length>4&&(w=w.slice(0,5)+"/"+R.slice(4)),t(w),r(!1)},y=g=>{g.preventDefault(),o.replace(/\//g,"")===h?u():(r(!0),setTimeout(()=>r(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(Si,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(Jn,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:y,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:o,onChange:C,className:i?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(Yi,{size:20})})]})]})]})},eo=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,to=Object.freeze(Object.defineProperty({__proto__:null,default:eo},Symbol.toStringTag,{value:"Module"})),io=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,no=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"})),oo=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,so=Object.freeze(Object.defineProperty({__proto__:null,default:oo},Symbol.toStringTag,{value:"Module"})),ro=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,ao=Object.freeze(Object.defineProperty({__proto__:null,default:ro},Symbol.toStringTag,{value:"Module"})),lo=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,co=Object.freeze(Object.defineProperty({__proto__:null,default:lo},Symbol.toStringTag,{value:"Module"})),uo=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,fo=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"})),mo=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,ho=Object.freeze(Object.defineProperty({__proto__:null,default:mo},Symbol.toStringTag,{value:"Module"})),po=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,go=Object.freeze(Object.defineProperty({__proto__:null,default:po},Symbol.toStringTag,{value:"Module"})),vo=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,xo=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"})),yo=""+new URL("angel-C_MrdXcC.mp3",import.meta.url).href,bo=Object.freeze(Object.defineProperty({__proto__:null,default:yo},Symbol.toStringTag,{value:"Module"})),Ci=""+new URL("angel-BIAg6Grr.png",import.meta.url).href,wo=Object.freeze(Object.defineProperty({__proto__:null,default:Ci},Symbol.toStringTag,{value:"Module"})),So=""+new URL("angelshiny-Cl20zV7k.png",import.meta.url).href,Co=Object.freeze(Object.defineProperty({__proto__:null,default:So},Symbol.toStringTag,{value:"Module"})),jo=""+new URL("dase-YSuIB7YX.mp3",import.meta.url).href,Ro=Object.freeze(Object.defineProperty({__proto__:null,default:jo},Symbol.toStringTag,{value:"Module"})),ji=""+new URL("dase-Ul_8ADqZ.png",import.meta.url).href,Ao=Object.freeze(Object.defineProperty({__proto__:null,default:ji},Symbol.toStringTag,{value:"Module"})),Lo=""+new URL("daseshiny-CaXO5CeC.png",import.meta.url).href,Po=Object.freeze(Object.defineProperty({__proto__:null,default:Lo},Symbol.toStringTag,{value:"Module"})),Ri=""+new URL("natasha-D39Th0kg.png",import.meta.url).href,ko=Object.freeze(Object.defineProperty({__proto__:null,default:Ri},Symbol.toStringTag,{value:"Module"})),Eo=""+new URL("natashashiny-CF2gWSQ5.png",import.meta.url).href,_o=Object.freeze(Object.defineProperty({__proto__:null,default:Eo},Symbol.toStringTag,{value:"Module"})),Ai=""+new URL("rachel-BMn7rWE_.png",import.meta.url).href,To=Object.freeze(Object.defineProperty({__proto__:null,default:Ai},Symbol.toStringTag,{value:"Module"})),Fo=""+new URL("rachelshiny-CD4t9jtC.png",import.meta.url).href,Mo=Object.freeze(Object.defineProperty({__proto__:null,default:Fo},Symbol.toStringTag,{value:"Module"})),ze=o=>gt.createElement(o),rt={baby_steps:{title:"El Primer Paso",desc:"Recoge tu primera moneda, pobre.",icon:ze(hi)},on_fire:{title:"Dedos de Fuego",desc:"Alcanza un combo x5.",icon:ze(mi)},god_mode:{title:"Modo Dios",desc:"Mantén un combo x10.",icon:ze(Zi)},shiny_lover:{title:"Shiny Spotter",desc:"Atrapa una moneda especial.",icon:ze(Qi)},sniper:{title:"Francotirador",desc:"Caza una moneda a máxima velocidad (>15).",icon:ze(fi)},piggy_bank:{title:"Algo es algo",desc:"Acumula 500 monedas. Para un kebab da.",icon:ze(Ki)},stonks:{title:"Lobo de Wall Street",desc:"Consigue 1000 monedas.",icon:ze(Ji)},crypto_king:{title:"Cripto Magnate",desc:"Llega a 5000 monedas.",icon:ze($i)},collector:{title:"Coleccionista",desc:"Compra todos los objetos de la tienda.",icon:ze(Vi)},matrix_master:{title:"El Elegido",desc:"Descubre el código secreto de administrador.",icon:ze(Hi)},prestige:{title:"Prestigio",desc:"Consigue todos los logros.",icon:ze(vt)}},Io=({targetSelector:o=".cursor-target",spinDuration:t=2,hideDefaultCursor:i=!0,hoverDuration:r=.2,parallaxOn:u=!0})=>{const h=a.useRef(null),C=a.useRef(null),y=a.useRef(null),g=a.useRef(null),R=a.useRef(!1),w=a.useRef(null),L=a.useRef(null),b=a.useRef(0),j=a.useMemo(()=>{const _="ontouchstart"in window||navigator.maxTouchPoints>0,M=window.innerWidth<=768,N=navigator.userAgent||navigator.vendor||window.opera,A=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(N.toLowerCase());return _&&M||A},[]),T=a.useMemo(()=>({borderWidth:3,cornerSize:12}),[]),z=a.useCallback((_,M)=>{h.current&&G.to(h.current,{x:_,y:M,duration:.1,ease:"power3.out"})},[]);return a.useEffect(()=>{if(j||!h.current)return;const _=document.body.style.cursor;i&&(document.body.style.cursor="none");const M=h.current;C.current=M.querySelectorAll(".target-cursor-corner");let N=null,U=null,A=null;const n=Y=>{U&&Y.removeEventListener("mouseleave",U),U=null};G.set(M,{xPercent:-50,yPercent:-50,x:window.innerWidth/2,y:window.innerHeight/2}),y.current&&y.current.kill(),y.current=G.timeline({repeat:-1}).to(M,{rotation:"+=360",duration:t,ease:"none"});const J=()=>{if(!w.current||!h.current||!C.current)return;const Y=b.current;if(Y===0)return;if(N){if(!N.isConnected){U&&U();return}const p=N.getBoundingClientRect(),{borderWidth:m,cornerSize:S}=T;w.current=[{x:p.left-m,y:p.top-m},{x:p.right+m-S,y:p.top-m},{x:p.right+m-S,y:p.bottom+m-S},{x:p.left-m,y:p.bottom+m-S}]}const d=G.getProperty(h.current,"x"),c=G.getProperty(h.current,"y");Array.from(C.current).forEach((p,m)=>{const S=G.getProperty(p,"x"),O=G.getProperty(p,"y"),W=w.current[m].x-d,ce=w.current[m].y-c,V=S+(W-S)*Y,oe=O+(ce-O)*Y,se=Y>=.99?u?.2:0:.05;G.to(p,{x:V,y:oe,duration:se,ease:se===0?"none":"power1.out",overwrite:"auto"})})};L.current=J;const q=Y=>z(Y.clientX,Y.clientY);window.addEventListener("mousemove",q);const P=()=>{if(!N||!h.current)return;const Y=G.getProperty(h.current,"x"),d=G.getProperty(h.current,"y"),c=document.elementFromPoint(Y,d);c&&(c===N||c.closest(o)===N)||U&&U()};window.addEventListener("scroll",P,{passive:!0});const K=()=>{g.current&&(G.to(g.current,{scale:.7,duration:.3}),G.to(h.current,{scale:.9,duration:.2}))},E=()=>{g.current&&(G.to(g.current,{scale:1,duration:.3}),G.to(h.current,{scale:1,duration:.2}))};window.addEventListener("mousedown",K),window.addEventListener("mouseup",E);const X=Y=>{const d=Y.target,c=[];let l=d;for(;l&&l!==document.body;)l.matches(o)&&c.push(l),l=l.parentElement;const p=c[0]||null;if(!p||!h.current||!C.current||N===p)return;N&&n(N),A&&(clearTimeout(A),A=null),N=p;const m=Array.from(C.current);m.forEach(se=>G.killTweensOf(se)),G.killTweensOf(h.current,"rotation"),y.current?.pause(),G.set(h.current,{rotation:0});const S=p.getBoundingClientRect(),{borderWidth:O,cornerSize:W}=T,ce=G.getProperty(h.current,"x"),V=G.getProperty(h.current,"y");w.current=[{x:S.left-O,y:S.top-O},{x:S.right+O-W,y:S.top-O},{x:S.right+O-W,y:S.bottom+O-W},{x:S.left-O,y:S.bottom+O-W}],R.current=!0,G.ticker.add(L.current),G.to(b,{current:1,duration:r,ease:"power2.out"}),m.forEach((se,B)=>{G.to(se,{x:w.current[B].x-ce,y:w.current[B].y-V,duration:.2,ease:"power2.out"})});const oe=()=>{if(G.ticker.remove(L.current),R.current=!1,w.current=null,G.set(b,{current:0,overwrite:!0}),N=null,C.current){const se=Array.from(C.current);G.killTweensOf(se);const{cornerSize:B}=T,ee=[{x:-B*1.5,y:-B*1.5},{x:B*.5,y:-B*1.5},{x:B*.5,y:B*.5},{x:-B*1.5,y:B*.5}],re=G.timeline();se.forEach((D,ae)=>{re.to(D,{x:ee[ae].x,y:ee[ae].y,duration:.3,ease:"power3.out"},0)})}A=setTimeout(()=>{if(!N&&h.current&&y.current){const B=G.getProperty(h.current,"rotation")%360;y.current.kill(),y.current=G.timeline({repeat:-1}).to(h.current,{rotation:"+=360",duration:t,ease:"none"}),G.to(h.current,{rotation:B+360,duration:t*(1-B/360),ease:"none",onComplete:()=>{y.current?.restart()}})}A=null},50),n(p)};U=oe,p.addEventListener("mouseleave",oe)};return window.addEventListener("mouseover",X,{passive:!0}),()=>{L.current&&G.ticker.remove(L.current),window.removeEventListener("mousemove",q),window.removeEventListener("mouseover",X),window.removeEventListener("scroll",P),window.removeEventListener("mousedown",K),window.removeEventListener("mouseup",E),N&&n(N),y.current?.kill(),document.body.style.cursor=_,R.current=!1,w.current=null,b.current=0}},[o,t,z,T,i,j,r,u]),a.useEffect(()=>{j||!h.current||!y.current||y.current.isActive()&&(y.current.kill(),y.current=G.timeline({repeat:-1}).to(h.current,{rotation:"+=360",duration:t,ease:"none"}))},[t,j]),j?null:e.jsxs("div",{ref:h,className:"target-cursor-wrapper",children:[e.jsx("div",{ref:g,className:"target-cursor-dot"}),e.jsx("div",{className:"target-cursor-corner corner-tl"}),e.jsx("div",{className:"target-cursor-corner corner-tr"}),e.jsx("div",{className:"target-cursor-corner corner-br"}),e.jsx("div",{className:"target-cursor-corner corner-bl"})]})};function Do({SIM_RESOLUTION:o=128,DYE_RESOLUTION:t=1440,CAPTURE_RESOLUTION:i=512,DENSITY_DISSIPATION:r=3.5,VELOCITY_DISSIPATION:u=2,PRESSURE:h=.1,PRESSURE_ITERATIONS:C=20,CURL:y=3,SPLAT_RADIUS:g=.2,SPLAT_FORCE:R=6e3,SHADING:w=!0,COLOR_UPDATE_SPEED:L=10,BACK_COLOR:b={r:.5,g:0,b:0},TRANSPARENT:j=!0}){const T=a.useRef(null),z=a.useRef(null);return a.useEffect(()=>{const _=T.current;if(!_)return;let M=!0;function N(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let U={SIM_RESOLUTION:o,DYE_RESOLUTION:t,DENSITY_DISSIPATION:r,VELOCITY_DISSIPATION:u,PRESSURE:h,PRESSURE_ITERATIONS:C,CURL:y,SPLAT_RADIUS:g,SPLAT_FORCE:R,SHADING:w,COLOR_UPDATE_SPEED:L},A=[new N];const{gl:n,ext:I}=J(_);I.supportLinearFiltering||(U.DYE_RESOLUTION=256,U.SHADING=!1);function J(s){const v={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let x=s.getContext("webgl2",v);const k=!!x;k||(x=s.getContext("webgl",v)||s.getContext("experimental-webgl",v));let Z,de;k?(x.getExtension("EXT_color_buffer_float"),de=x.getExtension("OES_texture_float_linear")):(Z=x.getExtension("OES_texture_half_float"),de=x.getExtension("OES_texture_half_float_linear")),x.clearColor(0,0,0,1);const fe=k?x.HALF_FLOAT:Z&&Z.HALF_FLOAT_OES;let Le,Re,Be;return k?(Le=q(x,x.RGBA16F,x.RGBA,fe),Re=q(x,x.RG16F,x.RG,fe),Be=q(x,x.R16F,x.RED,fe)):(Le=q(x,x.RGBA,x.RGBA,fe),Re=q(x,x.RGBA,x.RGBA,fe),Be=q(x,x.RGBA,x.RGBA,fe)),{gl:x,ext:{formatRGBA:Le,formatRG:Re,formatR:Be,halfFloatTexType:fe,supportLinearFiltering:de}}}function q(s,v,x,k){if(!P(s,v,x,k))switch(v){case s.R16F:return q(s,s.RG16F,s.RG,k);case s.RG16F:return q(s,s.RGBA16F,s.RGBA,k);default:return null}return{internalFormat:v,format:x}}function P(s,v,x,k){const Z=s.createTexture();s.bindTexture(s.TEXTURE_2D,Z),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,v,4,4,0,x,k,null);const de=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,de),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Z,0),s.checkFramebufferStatus(s.FRAMEBUFFER)===s.FRAMEBUFFER_COMPLETE}class K{constructor(v,x){this.vertexShader=v,this.fragmentShaderSource=x,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(v){let x=0;for(let Z=0;Z<v.length;Z++)x+=Gi(v[Z]);let k=this.programs[x];if(k==null){let Z=d(n.FRAGMENT_SHADER,this.fragmentShaderSource,v);k=X(this.vertexShader,Z),this.programs[x]=k}k!==this.activeProgram&&(this.uniforms=Y(k),this.activeProgram=k)}bind(){n.useProgram(this.activeProgram)}}class E{constructor(v,x){this.uniforms={},this.program=X(v,x),this.uniforms=Y(this.program)}bind(){n.useProgram(this.program)}}function X(s,v){let x=n.createProgram();return n.attachShader(x,s),n.attachShader(x,v),n.linkProgram(x),n.getProgramParameter(x,n.LINK_STATUS)||console.trace(n.getProgramInfoLog(x)),x}function Y(s){let v={},x=n.getProgramParameter(s,n.ACTIVE_UNIFORMS);for(let k=0;k<x;k++){let Z=n.getActiveUniform(s,k).name;v[Z]=n.getUniformLocation(s,Z)}return v}function d(s,v,x){v=c(v,x);const k=n.createShader(s);return n.shaderSource(k,v),n.compileShader(k),n.getShaderParameter(k,n.COMPILE_STATUS)||console.trace(n.getShaderInfoLog(k)),k}function c(s,v){if(!v)return s;let x="";return v.forEach(k=>{x+="#define "+k+`
`}),x+s}const l=d(n.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),p=d(n.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),m=d(n.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),S=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,O=d(n.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `),W=d(n.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,I.supportLinearFiltering?null:["MANUAL_FILTERING"]),ce=d(n.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),V=d(n.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),oe=d(n.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),se=d(n.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),B=d(n.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),ee=(n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),n.STATIC_DRAW),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(0),(s,v=!1)=>{s==null?(n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.bindFramebuffer(n.FRAMEBUFFER,null)):(n.viewport(0,0,s.width,s.height),n.bindFramebuffer(n.FRAMEBUFFER,s.fbo)),v&&(n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT)),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)});let re,D,ae,ge,me;const xe=new E(l,p),F=new E(l,m),$=new E(l,O),Q=new E(l,W),ue=new E(l,ce),H=new E(l,V),te=new E(l,oe),ie=new E(l,se),he=new E(l,B),ye=new K(l,S);function Ae(){let s=It(U.SIM_RESOLUTION),v=It(U.DYE_RESOLUTION);const x=I.halfFloatTexType,k=I.formatRGBA,Z=I.formatRG,de=I.formatR,fe=I.supportLinearFiltering?n.LINEAR:n.NEAREST;n.disable(n.BLEND),re?re=Fe(re,v.width,v.height,k.internalFormat,k.format,x,fe):re=ve(v.width,v.height,k.internalFormat,k.format,x,fe),D?D=Fe(D,s.width,s.height,Z.internalFormat,Z.format,x,fe):D=ve(s.width,s.height,Z.internalFormat,Z.format,x,fe),ae=ke(s.width,s.height,de.internalFormat,de.format,x,n.NEAREST),ge=ke(s.width,s.height,de.internalFormat,de.format,x,n.NEAREST),me=ve(s.width,s.height,de.internalFormat,de.format,x,n.NEAREST)}function ke(s,v,x,k,Z,de){n.activeTexture(n.TEXTURE0);let fe=n.createTexture();n.bindTexture(n.TEXTURE_2D,fe),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,de),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,de),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,x,s,v,0,k,Z,null);let Le=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,Le),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0),n.viewport(0,0,s,v),n.clear(n.COLOR_BUFFER_BIT);let Re=1/s,Be=1/v;return{texture:fe,fbo:Le,width:s,height:v,texelSizeX:Re,texelSizeY:Be,attach(Xe){return n.activeTexture(n.TEXTURE0+Xe),n.bindTexture(n.TEXTURE_2D,fe),Xe}}}function ve(s,v,x,k,Z,de){let fe=ke(s,v,x,k,Z,de),Le=ke(s,v,x,k,Z,de);return{width:s,height:v,texelSizeX:fe.texelSizeX,texelSizeY:fe.texelSizeY,get read(){return fe},set read(Re){fe=Re},get write(){return Le},set write(Re){Le=Re},swap(){let Re=fe;fe=Le,Le=Re}}}function be(s,v,x,k,Z,de,fe){let Le=ke(v,x,k,Z,de,fe);return xe.bind(),n.uniform1i(xe.uniforms.uTexture,s.attach(0)),ee(Le),Le}function Fe(s,v,x,k,Z,de,fe){return s.width===v&&s.height===x||(s.read=be(s.read,v,x,k,Z,de,fe),s.write=ke(v,x,k,Z,de,fe),s.width=v,s.height=x,s.texelSizeX=1/v,s.texelSizeY=1/x),s}function it(){let s=[];U.SHADING&&s.push("SHADING"),ye.setKeywords(s)}it(),Ae();let we=Date.now(),_e=0;function De(){if(!M)return;const s=St();Ve()&&Ae(),Ct(s),f(),pe(s),Me(null),z.current=requestAnimationFrame(De)}function St(){let s=Date.now(),v=(s-we)/1e3;return v=Math.min(v,.016666),we=s,v}function Ve(){let s=Oe(_.clientWidth),v=Oe(_.clientHeight);return _.width!==s||_.height!==v?(_.width=s,_.height=v,!0):!1}function Ct(s){_e+=s*U.COLOR_UPDATE_SPEED,_e>=1&&(_e=Bi(_e,0,1),A.forEach(v=>{v.color=ct()}))}function f(){A.forEach(s=>{s.moved&&(s.moved=!1,Mi(s))})}function pe(s){n.disable(n.BLEND),H.bind(),n.uniform2f(H.uniforms.texelSize,D.texelSizeX,D.texelSizeY),n.uniform1i(H.uniforms.uVelocity,D.read.attach(0)),ee(ge),te.bind(),n.uniform2f(te.uniforms.texelSize,D.texelSizeX,D.texelSizeY),n.uniform1i(te.uniforms.uVelocity,D.read.attach(0)),n.uniform1i(te.uniforms.uCurl,ge.attach(1)),n.uniform1f(te.uniforms.curl,U.CURL),n.uniform1f(te.uniforms.dt,s),ee(D.write),D.swap(),ue.bind(),n.uniform2f(ue.uniforms.texelSize,D.texelSizeX,D.texelSizeY),n.uniform1i(ue.uniforms.uVelocity,D.read.attach(0)),ee(ae),F.bind(),n.uniform1i(F.uniforms.uTexture,me.read.attach(0)),n.uniform1f(F.uniforms.value,U.PRESSURE),ee(me.write),me.swap(),ie.bind(),n.uniform2f(ie.uniforms.texelSize,D.texelSizeX,D.texelSizeY),n.uniform1i(ie.uniforms.uDivergence,ae.attach(0));for(let x=0;x<U.PRESSURE_ITERATIONS;x++)n.uniform1i(ie.uniforms.uPressure,me.read.attach(1)),ee(me.write),me.swap();he.bind(),n.uniform2f(he.uniforms.texelSize,D.texelSizeX,D.texelSizeY),n.uniform1i(he.uniforms.uPressure,me.read.attach(0)),n.uniform1i(he.uniforms.uVelocity,D.read.attach(1)),ee(D.write),D.swap(),Q.bind(),n.uniform2f(Q.uniforms.texelSize,D.texelSizeX,D.texelSizeY),I.supportLinearFiltering||n.uniform2f(Q.uniforms.dyeTexelSize,D.texelSizeX,D.texelSizeY);let v=D.read.attach(0);n.uniform1i(Q.uniforms.uVelocity,v),n.uniform1i(Q.uniforms.uSource,v),n.uniform1f(Q.uniforms.dt,s),n.uniform1f(Q.uniforms.dissipation,U.VELOCITY_DISSIPATION),ee(D.write),D.swap(),I.supportLinearFiltering||n.uniform2f(Q.uniforms.dyeTexelSize,re.texelSizeX,re.texelSizeY),n.uniform1i(Q.uniforms.uVelocity,D.read.attach(0)),n.uniform1i(Q.uniforms.uSource,re.read.attach(1)),n.uniform1f(Q.uniforms.dissipation,U.DENSITY_DISSIPATION),ee(re.write),re.swap()}function Me(s){n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n.enable(n.BLEND),jt(s)}function jt(s){let v=n.drawingBufferWidth,x=n.drawingBufferHeight;ye.bind(),U.SHADING&&n.uniform2f(ye.uniforms.texelSize,1/v,1/x),n.uniform1i(ye.uniforms.uTexture,re.read.attach(0)),ee(s)}function Mi(s){let v=s.deltaX*U.SPLAT_FORCE,x=s.deltaY*U.SPLAT_FORCE;Ft(s.texcoordX,s.texcoordY,v,x,s.color)}function Ii(s){const v=ct();v.r*=10,v.g*=10,v.b*=10;let x=10*(Math.random()-.5),k=30*(Math.random()-.5);Ft(s.texcoordX,s.texcoordY,x,k,v)}function Ft(s,v,x,k,Z){$.bind(),n.uniform1i($.uniforms.uTarget,D.read.attach(0)),n.uniform1f($.uniforms.aspectRatio,_.width/_.height),n.uniform2f($.uniforms.point,s,v),n.uniform3f($.uniforms.color,x,k,0),n.uniform1f($.uniforms.radius,Di(U.SPLAT_RADIUS/100)),ee(D.write),D.swap(),n.uniform1i($.uniforms.uTarget,re.read.attach(0)),n.uniform3f($.uniforms.color,Z.r,Z.g,Z.b),ee(re.write),re.swap()}function Di(s){let v=_.width/_.height;return v>1&&(s*=v),s}function Mt(s,v,x,k){s.id=v,s.down=!0,s.moved=!1,s.texcoordX=x/_.width,s.texcoordY=1-k/_.height,s.prevTexcoordX=s.texcoordX,s.prevTexcoordY=s.texcoordY,s.deltaX=0,s.deltaY=0,s.color=ct()}function Rt(s,v,x,k){s.prevTexcoordX=s.texcoordX,s.prevTexcoordY=s.texcoordY,s.texcoordX=v/_.width,s.texcoordY=1-x/_.height,s.deltaX=Ni(s.texcoordX-s.prevTexcoordX),s.deltaY=Ui(s.texcoordY-s.prevTexcoordY),s.moved=Math.abs(s.deltaX)>0||Math.abs(s.deltaY)>0,s.color=k}function zi(s){s.down=!1}function Ni(s){let v=_.width/_.height;return v<1&&(s*=v),s}function Ui(s){let v=_.width/_.height;return v>1&&(s/=v),s}function ct(){let s=Oi(Math.random(),1,1);return s.r*=.15,s.g*=.15,s.b*=.15,s}function Oi(s,v,x){let k,Z,de,fe,Le,Re,Be,Xe;switch(fe=Math.floor(s*6),Le=s*6-fe,Re=x*(1-v),Be=x*(1-Le*v),Xe=x*(1-(1-Le)*v),fe%6){case 0:k=x,Z=Xe,de=Re;break;case 1:k=Be,Z=x,de=Re;break;case 2:k=Re,Z=x,de=Xe;break;case 3:k=Re,Z=Be,de=x;break;case 4:k=Xe,Z=Re,de=x;break;case 5:k=x,Z=Re,de=Be;break}return{r:k,g:Z,b:de}}function Bi(s,v,x){const k=x-v;return(s-v)%k+v}function It(s){let v=n.drawingBufferWidth/n.drawingBufferHeight;v<1&&(v=1/v);const x=Math.round(s),k=Math.round(s*v);return n.drawingBufferWidth>n.drawingBufferHeight?{width:k,height:x}:{width:x,height:k}}function Oe(s){const v=window.devicePixelRatio||1;return Math.floor(s*v)}function Gi(s){if(s.length===0)return 0;let v=0;for(let x=0;x<s.length;x++)v=(v<<5)-v+s.charCodeAt(x),v|=0;return v}function Dt(s){let v=A[0],x=Oe(s.clientX),k=Oe(s.clientY);Mt(v,-1,x,k),Ii(v)}let zt=!1;function Nt(s){let v=A[0],x=Oe(s.clientX),k=Oe(s.clientY);if(zt)Rt(v,x,k,v.color);else{let Z=ct();Rt(v,x,k,Z),zt=!0}}function Ut(s){const v=s.targetTouches;let x=A[0];for(let k=0;k<v.length;k++){let Z=Oe(v[k].clientX),de=Oe(v[k].clientY);Mt(x,v[k].identifier,Z,de)}}function Ot(s){const v=s.targetTouches;let x=A[0];for(let k=0;k<v.length;k++){let Z=Oe(v[k].clientX),de=Oe(v[k].clientY);Rt(x,Z,de,x.color)}}function Bt(s){const v=s.changedTouches;let x=A[0];for(let k=0;k<v.length;k++)zi(x)}return window.addEventListener("mousedown",Dt),window.addEventListener("mousemove",Nt),window.addEventListener("touchstart",Ut),window.addEventListener("touchmove",Ot,!1),window.addEventListener("touchend",Bt),De(),()=>{M=!1,z.current&&(cancelAnimationFrame(z.current),z.current=null),window.removeEventListener("mousedown",Dt),window.removeEventListener("mousemove",Nt),window.removeEventListener("touchstart",Ut),window.removeEventListener("touchmove",Ot),window.removeEventListener("touchend",Bt)}},[]),e.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:e.jsx("canvas",{ref:T,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})}const zo=(o,t,i)=>(1-i)*o+i*t,No=(o,t)=>{if(t){const i=t.getBoundingClientRect();return{x:o.clientX-i.left,y:o.clientY-i.top}}return{x:o.clientX,y:o.clientY}},Uo=({color:o="white",containerRef:t=null,targetSelector:i="a, button, .shop-item, .dock-item, .coin-entity"})=>{const r=a.useRef(null),u=a.useRef(null),h=a.useRef(null),C=a.useRef(null),y=a.useRef(null),g=a.useRef(null),R=a.useRef({x:0,y:0});return a.useEffect(()=>{const w=A=>{if(R.current=No(A,t?.current),t?.current){const n=t.current.getBoundingClientRect();A.clientX<n.left||A.clientX>n.right||A.clientY<n.top||A.clientY>n.bottom?G.to([u.current,h.current],{opacity:0}):G.to([u.current,h.current],{opacity:1})}},L=t?.current||window;L.addEventListener("mousemove",w);const b={tx:{previous:0,current:0,amt:.15},ty:{previous:0,current:0,amt:.15}};G.set([u.current,h.current],{opacity:0});const j=()=>{b.tx.previous=b.tx.current=R.current.x,b.ty.previous=b.ty.current=R.current.y,G.to([u.current,h.current],{duration:.9,ease:"Power3.easeOut",opacity:1}),g.current=requestAnimationFrame(N),L.removeEventListener("mousemove",j)};L.addEventListener("mousemove",j);const T={turbulence:0},z=G.timeline({paused:!0,onStart:()=>{u.current&&(u.current.style.filter="url(#filter-noise-x)"),h.current&&(h.current.style.filter="url(#filter-noise-y)")},onUpdate:()=>{C.current&&y.current&&(C.current.setAttribute("baseFrequency",T.turbulence),y.current.setAttribute("baseFrequency",T.turbulence))},onComplete:()=>{u.current&&h.current&&(u.current.style.filter=h.current.style.filter="none")}}).to(T,{duration:.5,ease:"power1",startAt:{turbulence:1},turbulence:0}),_=()=>z.restart(),M=()=>z.progress(1).kill(),N=()=>{b.tx.current=R.current.x,b.ty.current=R.current.y;for(const A in b)b[A].previous=zo(b[A].previous,b[A].current,b[A].amt);u.current&&h.current&&(G.set(h.current,{x:b.tx.previous}),G.set(u.current,{y:b.ty.previous})),g.current=requestAnimationFrame(N)},U=A=>{if(!A.target||typeof A.target.closest!="function")return;const n=A.target.closest(i);n&&(!A.relatedTarget||!n.contains(A.relatedTarget))&&(_(),n.addEventListener("mouseleave",M,{once:!0}))};return document.addEventListener("mouseover",U),()=>{L.removeEventListener("mousemove",w),L.removeEventListener("mousemove",j),g.current&&cancelAnimationFrame(g.current),document.removeEventListener("mouseover",U)}},[t,i]),e.jsxs("div",{ref:r,className:"cursor",style:{position:t?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1e4},children:[e.jsx("svg",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"},children:e.jsxs("defs",{children:[e.jsxs("filter",{id:"filter-noise-x",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:C}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]}),e.jsxs("filter",{id:"filter-noise-y",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:y}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]})]})}),e.jsx("div",{ref:u,style:{position:"absolute",width:"100%",height:"1px",background:o,pointerEvents:"none",top:0,opacity:0}}),e.jsx("div",{ref:h,style:{position:"absolute",height:"100%",width:"1px",background:o,pointerEvents:"none",left:0,opacity:0}})]})},Oo=()=>{const o=He(-100),t=He(-100),i={damping:20,stiffness:300,mass:.2},r=tt(o,i),u=tt(t,i),h=Xn(r),C=et(h,[-2e3,2e3],[-60,60]),y=60,g=et([o,t,r,u],([w,L,b,j])=>{const T=j+y;return`M ${w-4} ${L} Q ${(w+b)/2-12} ${(L+T)/2} ${b} ${T}`}),R=et([o,t,r,u],([w,L,b,j])=>{const T=j+y;return`M ${w+4} ${L} Q ${(w+b)/2+12} ${(L+T)/2} ${b} ${T}`});return a.useEffect(()=>{const w=L=>{o.set(L.clientX),t.set(L.clientY)};return window.addEventListener("mousemove",w),()=>window.removeEventListener("mousemove",w)},[o,t]),e.jsxs("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:9999},children:[e.jsxs("svg",{style:{width:"100%",height:"100%",overflow:"visible"},children:[e.jsx(ne.path,{d:g,stroke:"rgba(0,0,0,0.2)",strokeWidth:"4",fill:"none",style:{translateX:2,translateY:2}}),e.jsx(ne.path,{d:R,stroke:"rgba(0,0,0,0.2)",strokeWidth:"4",fill:"none",style:{translateX:2,translateY:2}}),e.jsx(ne.path,{d:g,stroke:"url(#chainGradient)",strokeWidth:"3",strokeDasharray:"1 3",strokeLinecap:"round",fill:"none"}),e.jsx(ne.path,{d:R,stroke:"url(#chainGradient)",strokeWidth:"3",strokeDasharray:"1 3",strokeLinecap:"round",fill:"none"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"chainGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#ffd700"}),e.jsx("stop",{offset:"50%",stopColor:"#fff"}),e.jsx("stop",{offset:"100%",stopColor:"#ffd700"})]}),e.jsxs("filter",{id:"diamondGlow",children:[e.jsx("feGaussianBlur",{stdDeviation:"4",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),e.jsx(ne.div,{style:{position:"absolute",top:0,left:0,x:o,y:t,translateX:"-50%",translateY:"-50%",width:12,height:12,background:"radial-gradient(circle, #fff 30%, #ffd700 100%)",borderRadius:"50%",boxShadow:"0 0 10px #ffd700, 0 0 5px #fff",zIndex:20}}),e.jsxs(ne.div,{style:{position:"absolute",top:0,left:0,x:r,y:u,translateX:"-50%",translateY:y-30,rotate:C,zIndex:10,display:"flex",justifyContent:"center",alignItems:"center",width:60,height:60,filter:"drop-shadow(0 15px 25px rgba(0,0,0,0.3))"},children:[e.jsxs("svg",{width:"50",height:"50",viewBox:"0 0 100 100",style:{overflow:"visible"},children:[e.jsxs("g",{filter:"url(#diamondGlow)",children:[e.jsx("path",{d:"M45 15 L55 15 L50 25 Z",fill:"#ffd700"}),e.jsx("path",{d:"M20 35 L80 35 L100 35 L50 95 L0 35 Z",fill:"url(#diamondBodyGrad)",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1"}),e.jsx("path",{d:"M20 35 L35 20 L65 20 L80 35",fill:"#e0f7fa",opacity:"0.6"}),e.jsx("path",{d:"M35 20 L50 35 L65 20",fill:"#b2ebf2",opacity:"0.8"}),e.jsx("path",{d:"M20 35 L50 95 L80 35",fill:"none",stroke:"rgba(255,255,255,0.4)",strokeWidth:"0.5"}),e.jsx("path",{d:"M35 20 L50 95 L65 20",fill:"none",stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),e.jsx("circle",{cx:"50",cy:"45",r:"15",fill:"white",fillOpacity:"0.2",style:{mixBlendMode:"overlay"}})]}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"diamondBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#e1f5fe"}),e.jsx("stop",{offset:"40%",stopColor:"#4fc3f7"}),e.jsx("stop",{offset:"100%",stopColor:"#0288d1"})]})})]}),e.jsx("div",{style:{position:"absolute",top:"20%",left:"20%",width:"60%",height:"60%",background:"radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)",mixBlendMode:"screen",opacity:.8,animation:"diamondSparkle 3s infinite ease-in-out",pointerEvents:"none"}})]}),e.jsx("style",{children:`
        @keyframes diamondSparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(45deg); }
        }
      `})]})},Bo=""+new URL("ring-CJvK4024.gif",import.meta.url).href,pt={cursor_neon:{name:"Neon Pulse",price:500,desc:"Estilo Cyberpunk. Cambia de color.",icon:e.jsx(on,{}),type:"replace",className:"cursor-neon"},cursor_gold:{name:"Gold Sparkle",price:1e3,desc:"Cursor de oro puro con rastro brillante.",icon:e.jsx(mi,{}),type:"replace",className:"cursor-gold",effect:"sparkle"},cursor_ring:{name:"Anillo",price:1500,desc:"Un anillo animado.",icon:e.jsx(pi,{}),type:"replace",className:"cursor-ring",backgroundImage:Bo},cursor_blackhole:{name:"Agujero Negro",price:2e3,desc:"Singularidad que distorsiona la luz.",icon:e.jsx(nn,{}),type:"replace",className:"cursor-blackhole"},cursor_crosshair:{name:"Crosshair",price:3e3,desc:"Líneas de precisión con distorsión.",icon:e.jsx(fi,{}),type:"custom",component:Uo},cursor_splash:{name:"Splash Fluid",price:4e3,desc:"Tinta fluida reactiva.",icon:e.jsx(tn,{}),type:"custom",component:Do,hideNative:!1},cursor_target:{name:"Target HUD",price:5e3,desc:"Sistema de fijación táctico.",icon:e.jsx(en,{}),type:"custom",component:Io},cursor_prestige:{name:"Prestigio",price:0,desc:"Símbolo de máxima excelencia.",icon:e.jsx(vt,{}),type:"custom",component:Oo,requiresAchievement:"prestige",hiddenInShop:!0}};function Go(){const{activeCursor:o}=Ue(),t=a.useRef(null),[i,r]=a.useState(!1),[u,h]=a.useState([]);a.useRef(),a.useEffect(()=>{const g=L=>{const{clientX:b,clientY:j}=L;t.current&&(t.current.style.transform=`translate3d(${b}px, ${j}px, 0)`);const T=pt[o];T?.effect&&T.effect==="sparkle"&&Math.random()>.7&&C(b,j,"sparkle")},R=()=>r(!0),w=()=>r(!1);return window.addEventListener("mousemove",g),window.addEventListener("mousedown",R),window.addEventListener("mouseup",w),()=>{window.removeEventListener("mousemove",g),window.removeEventListener("mousedown",R),window.removeEventListener("mouseup",w)}},[o]);const C=(g,R,w)=>{const L=Date.now()+Math.random();h(b=>[...b,{id:L,x:g,y:R,type:w}]),setTimeout(()=>{h(b=>b.filter(j=>j.id!==L))},1e3)};a.useEffect(()=>{const g=pt[o];return g&&((g.type==="replace"||g.type==="custom")&&g.hideNative!==!1&&document.body.classList.add("hide-native-cursor"),g.bodyClass&&document.body.classList.add(g.bodyClass)),()=>{document.body.classList.remove("hide-native-cursor"),g&&g.bodyClass&&document.body.classList.remove(g.bodyClass)}},[o]);const y=pt[o];return sn.createPortal(e.jsxs("div",{className:"cursor-overlay",children:[u.map(g=>e.jsx("div",{className:"sparkle-particle",style:{left:g.x,top:g.y}},g.id)),y&&y.type==="replace"&&e.jsx("div",{ref:t,className:"cursor-follower",children:e.jsx("div",{className:`${y.className} ${i?"clicking":""}`,style:y.backgroundImage?{backgroundImage:`url(${y.backgroundImage})`}:{}})}),y&&y.type==="custom"&&e.jsx(y.component,{targetSelector:"button, .shop-item, input, a, .coin-entity, .dock-item, .dock-icon"})]}),document.body)}const Li=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,Pi=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,ki=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,Ei=""+new URL("duck-BnqypGlP.png",import.meta.url).href,_i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpAgoQDSR9aWoCAAANHklEQVRo3u1YaXRVRbb+qk6dc+6cm4kwBTMSBkNAMYBEaBEEERGxsRFFRe3GJ9j4wJa37AZppN/CtZ6rl3NAeTTggIDIEIiCCKJMYQqEOSEJZCIkN/cmufM5p+r9SCBEE7BZLN6ffGvd86NuDfur/e3auwroQAc60IEOdODmQa735yuTngAA+AI+QJYRDAQw84W/QYGCgZMG/X/b3gqsrcY3Z74MSZFRfbECEpHMhJBuRFFLtcoy/dOVi3/TxPNeeglvZWfjhbFjYOg6KFNwYt8ujHnqRSz84L1bToS21ajrYehaiAgibI2N9QPCXu/HxOcbpppt0xiTHbIsX3fSpe/9E//IzsbItGQQQmNAyABCpbjYhCSs+2wJXlm16pYTaVNarz//LAhB54qS0iWESHmqrG7hxIgO+P3TzE7nHAJSvWzj5lZj/vO551B8PB8RsZ0Q8vvAdQ2qzZEgAr5lDLhbp3Qvi4h8OuCqqaMCoBKDbLXBHBEJLRjEqCmTMXny5JsmIrXVmDVgAAShRmO9x60oar0h0SP22JgSSPLmb/LyPXKnOFwoPAcA2LlzAfRyIBDwQ4RDoFaH2QgH0wmho7kWnGVjdGy02WzSdP2OgN+vAoiVJJYMSrsSJvMZGzfU7/nXMpw9dAAzZs9BTm7urfPI3Oenwe2qhaaFY0Je7zKqmL4XQu8VER3zP4LzEp1I+GTtOgDA8w8/BE3T8NJ32/Fu1pDhVPBXFUnKMlEazSghFlmGQiWEOYc3HAYXgjf/whpIpUHIp6rd/qGuaV6z3Y6lX2+4dR75+Wg+1icnQwiiUcryHM7IkwIiTGV2GkBw6br1+NusGQgVlSA+NQWDR/+efPHajGcVwZdEm0wDI02qxSrLxMQYJNK0VxIhMDMGi8yIVWbUqsiymdEoXddH+EMhj+fM6b1RCclIjOqM6dOmIvfHH/8tIm0GO2n5aiAo1LXwxaDf9zUB3BACubm5KDt5GnckJ+DktxuR+9myHsww/hpjNsfZFPmq8dcTAgGBKjHYZYXysJF1sCpSXrZmLbjuw4E9PyPnu1y8/MTvsWrJkpuX1rXYtWsXwDmWLJyPbglJqDh/HvWuy3DGdI0J+L33M0UaEZ8YF+O55B7tJJJdZayNiQkEBAQA0fzRhYGQZsDPDQwc1e8gIeSnHTkHma7RtZDVozTk9imOSKQM6o+a4nIsWXd9yd2QyOvPTcO+b3PQPSUNIW8duGTtSqmY6HRanu7dv/uAvncnKql3dseBnaewJ/cYuFdvcnPzzEIAAgCHACQCiVFQJsFsVRGXEIU7ByYi68F0eOsD2PvDKRzdW+gpL6095GvQNgkmb/DVVJRFxifC0DQk3dkfi7M//PeInFyzBos+zoYsK2isqQZTLJ2FCE+J6mSdmj4wMePeB3qT3hkJMNtUQAhoIR2lRdUoOl2BBo8PWkiHpulQVBlWqwKrwwq7wwK70wKTWYbDaUFEpBWKSW52U5M5njovis9UYc+Okyg4WFLgdvnfFbL1C8JDAUMLIz1rKBb+873fRmTNmjXYlP0xhAAs0QnUdeHUKEcEm5c5rNfQEeP7IymtK2RFghC8abuvTEYpQAggSIsrCAAiWq/ULC8hxK8NIgSgBFrQwNmCcmxZuz98ZG/RJ2GDvUmJcAkhMOah0Zi+YOH1iSxYsAAle/aCcwOK2SZ7Llf+OSEl5o0JU4dGDRrWC7KJQXB+I0XeEhCJot7lx+pPfsDOrSdW6jC/yojhlhhB2rDf4c2///1q318dv8kmFUIAztgkqba8cHbfu7q/Nf31cfZ+mcmgFNfI4DZACJgsMtLS41Fb5c4oL6pyqFbHTgpo3upLOFpYdLVrq+N3zpQpYLKC5du+Q2XxsT+m9uk8f9qs0aaEtDgIbtw+Atdy4QL2CDOenjESd2clvRhodP0p/+cdYKoZf/2PP17t18oj+qWLYBLF+n+tHNW5q+2DF+aMdabe2e22Sal9NoDFZkKPxFjpzPEL/SUl8ojP4yo9c/QELjTUtyby2tRnoKgquGAxZgv96MmX7u99z3092wzI2wlCCAilEJzDGW2DJDHbmfyLXQhzbIrqHB16ZfZsbN66tUVa46fPREPNJcDQJ/YflDR0yIg+rU4kIQBu3F7PEAJUXnDh8J6zMAwDEMCQEb2R0qfz0KDXPTDsbcSeLVsBNMfIinfewdJ5c6Ha45yOSHXq78ZkUJNFac7FACEUBXkl+OrTHxAO6reRCcXp4xexfvlu+LwhAIDVbkJaejcrlZAVDrrgjIpuIbJ//wnoQT94ODAgsWdc/7R+3YHmuCAgCPjCyFm9H9UV9SD0hsXALYRAap9u8DUGUVZU2+QiAnRP6ATVxPppak92uaa6hUh0JycMLQgQ0bdrjxibxaq2nLIUuFBUhbLSagwfkwHF3P7t8IqeyS+KRvKrIpKASPTGmyIEomLtsNhNqCxzNSdbICrGAbNZjjUCLtUIh1qIOCIcMIQBAZgpbcqs16yJC0WXYLObkJjWFeCivTVR7/bjXEEZaqsbQJpzraEbcNd5YehXPAwE/WEcP1CMi0U10MLtS1UAYIxCVhj83iCuBK1hGBACukwkzghtITLp+T9AVq2QJHb8/OlKf3WFG4QQcC7ANY46lw+d46NhjzC3W1bUu3344B/r8fbc1TiyrxCgBIQS1F6ux0eLv0FpUU1TCUMJ3LUN+OyDbVj8ly9wLK+4Xc8QEGiagWAgBCpdbUT5hRr4A6Giex5cGrDarACaX1FOHTkBppohqWx34emq7A8XbZjeIynOGgpqRs/0Hvk1VY0OpkiptJ0FhRCw2FSMGj8QdAJFz/TmGCMEFqsZWQ9kQDHTq/VVp26RmDFvAqorPUju1bX9aoE0eTng0xCfGAcQCq/Hh0M/nfMH/UbOsV3PoqS46KqnAQCTs4aCcw5Iktnw+e/lXNxhCOFVrfbdENqr996fMveV+Y9DkgTayyxNRSMA3rogJJRA/EKShJImzXPRbq4ilGLbN4eQ8+U+vPjaONgcJuzIOYqdWwtWhgLKdNVEgsl9emFRdnbLu1ZS5l0o2p8HSmmAKNIOYXAwAkgkDF0XBVUXXUZDvV+KjLa02kFCaUulCwFw/Mowwa+TVCkBaWMMIQSNHj9+3nYCIb+Wt/zdrZqvMax66nxbOWdLiPAF9ZCERdnZrT1yBT/+uAXx/VJxftcJjJzwGJ4akQVuoIsEPeeRKYPvemzqfVDUJsGGwzpOHC5F/r5CcA6k35OAtPQeiIi0AWg7eRJKwHWBy1X1KDlbARCClD7dEBvnhGgeQyhBKKjj6//djS1fHTjFVOuUujpfMRGExdiOu71GBoxwEN1TeuG9r1a3TeSXWLrmc+QsWAg1ImKiKtPsEeP7x46fci8sVhPWr/wJe7YfR3xSHBrcXngbgrDYVDw4cRCGP5QOSSJouZQ07XLhqUp8v/EwzhWUwVvvh9mqQjXLeOyZ4RgyohcIpXDXeLFtw0Fs/mJfaSjIpxGD7DJH26GHDciKBYahIXPIYPx50aJrw+n6ePGxcTACITz5xByyfPlb44QenndHSuyAyFgHKymswtSXRyJzeC+Egwbqahux9/sT2Jl7FI8/MwwjJwwEhAGDN53oBYdLseLdbYiOc2DoyL7olhADm92C7ZsOI2/nKYx+PBOhQBgHfzqLsuKac4aB1/2NtRtjuqeCKRSfbv62XTtvSMTj8WD2E5MgMYaqsgo4IuyxoUBwrGEYszIGJw54450noaisaSpCwA2OVe9/j/27TiL97iRQSuDzhUBAUFJYhYTULpg+92HYnKbmuCLwe0N4+7UvcSq/zEWA81yIrYyxz90nTxV1yhwECoqVO7Zf1052IyJOpxMAMPPRR3DfsCwcO5ZfQyWxgkOqr6ttXH2p3KP2SI1riV1KYbGpqK32Vv+Qc2wDF1wjoCAgEpHExDGPD4qzRVqBK/cbCmhhDWHNABfkbZPZ8nHN4d3eqH6Z6HrfMBih4A1JAO080LWFvLPnsD0vD7lr18MwDDAmlzfWe7ufP1OR4brUSKrL61BefBm7vyvAzi35gXAI/70u7+AbPRQtl2s8N33suG/dZWVJ9e6GgQ6HBQBBXY0XpeeqsXX1fhQcKt1PmfImwGsjklJBJAmZQwdj8fIVv8m+m6oAJw3OBAHAJDkyEAo8QiDuYYx2IQRm3eCVIPIW1WLOpYSEYrt0AQFFeWkhCJW66EFtltUqP2yxqVGccy3gD9f5/dohMPa+4fMXVBwrwMGbsOmmiPzlqadxoegMKJNhhEPQ/ZcgpHhGCKd2S5Lm4+eFrJrAuYG+DzyIxvJyFB8/BKaYYIvvSzyFx2OFoUUIKumcknopMsZDGl38630H8dyj47Bi05bbQwRoSmCznpqMzEfHYfsnyxHw+iCEgKLImPlf87Fq6Uf4aOPGq/3nz5qF03n7wWQZXNOaYoRS6BRgTEGD24WU9P54//Mvb9akDnSgAx3owO3H/wGUgcIFOUeM9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMi0xMFQxNjoxMzozMCswMDowMC3bAQsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDItMTBUMTY6MTM6MzArMDA6MDBchrm3AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAyLTEwVDE2OjEzOjM2KzAwOjAwaEOtUgAAAABJRU5ErkJggg==",Ti=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,qo=""+new URL("galaxy-ChI-pR4w.gif",import.meta.url).href,Wo=""+new URL("silk-DaWETVYo.gif",import.meta.url).href,Xo=""+new URL("ballpit-DiGrqYC4.gif",import.meta.url).href,Yo=""+new URL("floatinglines-BnKOb4-3.gif",import.meta.url).href,Ho=""+new URL("lightpillar-B2qC6hEB.gif",import.meta.url).href,Vo=""+new URL("pixel-snow-XBi11QsW.gif",import.meta.url).href,$o=""+new URL("hyperspeed-bdn_De3N.gif",import.meta.url).href,yt={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico atemporal.",price:0,type:"background",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:50,type:"background",previewColor:"#ff99cc",image:Wo},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:100,type:"background",previewColor:"#00ffff",image:Ho},{id:"pixelsnow",name:"Pixel Snow",description:"Nevada suave y distante.",price:150,type:"background",previewColor:"#ffffff",image:Vo},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:200,type:"background",previewColor:"#bd71ff",image:Yo},{id:"galaxy",name:"Galaxy",description:"Un viaje a las estrellas.",price:300,type:"background",previewColor:"#000",image:qo},{id:"hyperspeed",name:"Hyperspeed",description:"Velocidad luz y distorsión.",price:500,type:"background",previewColor:"#d856bf",image:$o},{id:"ballpit",name:"Ball Pit",description:"Física interactiva y relajante.",price:800,type:"background",previewColor:"#29b1ff",image:Xo}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:0,type:"cursor",previewColor:"transparent",icon:e.jsx(gi,{})},...Object.entries(pt).map(([o,t])=>({id:o,name:t.name,description:t.desc,price:t.price,type:"cursor",previewColor:"transparent",icon:t.icon,requiresAchievement:t.requiresAchievement,hiddenInShop:t.hiddenInShop})).sort((o,t)=>o.price-t.price)],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:0,type:"trail",previewColor:"transparent",icon:e.jsx(rn,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:100,type:"trail",previewColor:"#ffadad",icon:e.jsx("img",{src:Li,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:100,type:"trail",previewColor:"#a89c8d",icon:e.jsx("img",{src:Pi,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:100,type:"trail",previewColor:"#ffecb6",icon:e.jsx("img",{src:ki,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:100,type:"trail",previewColor:"#ebe371",icon:e.jsx("img",{src:Ei,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:100,type:"trail",previewColor:"#e3e4b2",icon:e.jsx("img",{src:_i,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:100,type:"trail",previewColor:"#a3a3a3",icon:e.jsx("img",{src:Ti,alt:"Skeleton",style:{width:"40px"}})}],skins:[{id:"dase",name:"Dase Original",description:"La moneda original.",price:0,type:"skin",previewColor:"#f6ffa3",icon:e.jsx("img",{src:ji,alt:"Dase",style:{width:"100px",height:"60px",objectFit:"contain",borderRadius:"20%"}})},{id:"angel",name:"Angel",description:"Monke.",price:0,type:"skin",previewColor:"#e0ffff",icon:e.jsx("img",{src:Ci,alt:"Angel",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})},{id:"rachel",name:"Rachel",description:"La criminologa.",price:0,type:"skin",previewColor:"#ffc0cb",icon:e.jsx("img",{src:Ai,alt:"Rachel",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})},{id:"natalia",name:"Natalia",description:"Es Natalia...",price:0,type:"skin",previewColor:"#ffcccb",icon:e.jsx("img",{src:Ri,alt:"Natalia",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})}]},Jo=[{id:"backgrounds",label:"Fondos",icon:e.jsx(an,{})},{id:"cursors",label:"Cursores",icon:e.jsx(gi,{})},{id:"trails",label:"Mascotas",icon:e.jsx(ln,{})},{id:"skins",label:"Monedas",icon:e.jsx(pi,{})}],Ko=({enableGoldTheme:o=!0})=>{const{activeShop:t,openShop:i,closeShop:r,activeBackground:u,setBackground:h,activeCursor:C,setCursor:y,activeTrail:g,setTrail:R,coins:w,buyItem:L,ownedItems:b,activeCoinSkin:j,setCoinSkin:T,achievements:z,unlockAchievement:_}=Ue(),[M,N]=a.useState(t),[U,A]=a.useState([]),n=a.useRef();a.useEffect(()=>{t&&N(t)},[t]),a.useEffect(()=>{b&&!z.includes("collector")&&Object.values(yt).flat().filter(l=>l.type!=="skin"&&!l.requiresAchievement).every(l=>b.includes(l.id))&&_("collector")},[b,z,_]);const J=z&&z.includes("collector")&&o,q=a.useCallback(()=>{J&&(A(d=>d.map(c=>({...c,x:c.x+c.vx,y:c.y+c.vy,life:c.life-.02,size:c.size*.95})).filter(c=>c.life>0)),n.current=requestAnimationFrame(q))},[J]);a.useEffect(()=>(J&&t&&(n.current=requestAnimationFrame(q)),()=>cancelAnimationFrame(n.current)),[J,t,q]);const P=d=>{if(!J)return;const c=d.currentTarget.getBoundingClientRect(),l=d.clientX-c.left,p=d.clientY-c.top;if(Math.random()>.5)return;const m={id:Math.random(),x:l,y:p,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5+.5,life:1,size:Math.random()*3+2};A(S=>[...S,m])},K=(yt[M]||[]).filter(d=>d.hiddenInShop?!1:d.requiresAchievement?z.includes(d.requiresAchievement):!0),E=d=>b.includes(d.id)||d.price===0,X=d=>{E(d)?(t==="backgrounds"&&h(d.id),t==="cursors"&&y(d.id),t==="trails"&&R(d.id),t==="skins"&&T(d.id)):w>=d.price&&(L(d),t==="backgrounds"&&h(d.id),t==="cursors"&&y(d.id),t==="trails"&&R(d.id),t==="skins"&&T(d.id))},Y=d=>t==="backgrounds"?u===d:t==="cursors"?C===d:t==="trails"?g===d:t==="skins"?j===d:!1;return e.jsx(Pe,{children:t&&e.jsxs(ne.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:r,style:{position:"absolute",inset:0,pointerEvents:"auto"}}),e.jsxs(ne.div,{className:`shop-window ${J?"gold-theme":""}`,onMouseMove:P,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(ne.div,{className:"gold-bg-layer",initial:{opacity:0},animate:{opacity:J?1:0},transition:{duration:.8}}),U.map(d=>e.jsx("div",{className:"gold-particle",style:{left:d.x,top:d.y,width:d.size,height:d.size,opacity:d.life}},d.id)),e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:Jo.map(d=>e.jsxs("button",{onClick:()=>i(d.id),className:`tab-btn ${t===d.id?"active":""}`,children:[d.icon,e.jsx("span",{children:d.label}),t===d.id&&e.jsx(ne.div,{layoutId:"activeTab",className:"active-line"})]},d.id))}),e.jsxs("div",{className:"coin-display",children:[w," 🪙"]}),e.jsx("button",{onClick:r,className:"close-btn",children:e.jsx(xt,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",M==="backgrounds"?"Fondos":M==="cursors"?"Cursores":M==="trails"?"Mascotas":"Monedas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(Pe,{mode:"wait",children:e.jsx(ne.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:K.map(d=>e.jsxs("div",{className:`shop-item ${Y(d.id)?"equipped":""}`,onClick:()=>X(d),children:[e.jsxs("div",{className:`item-preview ${d.type}`,style:{background:d.previewColor},children:[d.image&&e.jsx("img",{src:d.image,alt:d.name,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),d.icon&&e.jsx("div",{className:"preview-icon",style:{zIndex:1},children:d.icon}),Y(d.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(vi,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:d.name}),e.jsx("p",{children:d.description}),E(d)?e.jsx("span",{className:"price-tag",style:{color:"#00e676",background:"rgba(0, 230, 118, 0.15)"},children:Y(d.id)?"Equipado":"En propiedad"}):e.jsxs("span",{className:"price-tag",children:[d.price," Monedas"]})]})]},d.id))},M)})})]})]})})},Ee=80,Vt=Object.assign({"../../assets/coin/angel/angel.mp3":bo,"../../assets/coin/angel/angel.png":wo,"../../assets/coin/angel/angelshiny.png":Co,"../../assets/coin/dase/dase.mp3":Ro,"../../assets/coin/dase/dase.png":Ao,"../../assets/coin/dase/daseshiny.png":Po,"../../assets/coin/natasha/natasha.png":ko,"../../assets/coin/natasha/natashashiny.png":_o,"../../assets/coin/rachel/rachel.png":To,"../../assets/coin/rachel/rachelshiny.png":Mo}),We={};Object.keys(Vt).forEach(o=>{const t=o.split("/"),i=t[t.length-2],r=t[t.length-1].toLowerCase();We[i]||(We[i]={normal:null,shiny:null,sound:null});const u=Vt[o].default;r.includes("shiny")?We[i].shiny=u:r.endsWith("mp3")||r.endsWith("wav")?We[i].sound=u:We[i].normal=u});Object.values(We).forEach(o=>{!o.shiny&&o.normal&&(o.shiny=o.normal)});function Qo(){const{addCoins:o,activeCoinSkin:t,gameVolume:i,unlockAchievement:r,coins:u,achievements:h,ownedItems:C,activeCursor:y}=Ue(),[g,R]=a.useState([]),[w,L]=a.useState([]),[b,j]=a.useState(1),T=a.useRef(),z=a.useRef(null),_=a.useRef(!1),M=a.useRef(0),N=a.useRef(0);a.useEffect(()=>(_.current=!0,()=>{_.current=!1}),[]);const U=We[t]||We.dase||{normal:"",shiny:"",sound:null};a.useEffect(()=>{U&&U.sound&&(z.current=new Audio(U.sound),z.current.volume=i)},[U,i]),a.useEffect(()=>{const l=window.innerWidth,p=window.innerHeight,m=[];for(let S=0;S<5;S++)m.push({id:`normal-${S}`,type:"normal",x:Math.random()*(l-Ee),y:Math.random()*(p-Ee),vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6,img:U.normal,value:1});m.push({id:"shiny-1",type:"shiny",x:Math.random()*(l-Ee),y:Math.random()*(p-Ee),vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,img:U.shiny,value:5}),R(m)},[t,U]);const A=a.useCallback(()=>{M.current>0&&Date.now()>M.current&&(j(l=>l>1?1:l),M.current=0),R(l=>l.map(p=>{let{x:m,y:S,vx:O,vy:W}=p;return m+=O,S+=W,(m<=0||m>=window.innerWidth-Ee)&&(O=-O,m=Math.max(0,Math.min(m,window.innerWidth-Ee))),(S<=0||S>=window.innerHeight-Ee)&&(W=-W,S=Math.max(0,Math.min(S,window.innerHeight-Ee))),{...p,x:m,y:S,vx:O,vy:W}})),L(l=>l.length===0?l:l.map(p=>({...p,x:p.x+p.vx,y:p.y+p.vy,vy:p.vy+.5,life:p.life-.03})).filter(p=>p.life>0)),T.current=requestAnimationFrame(A)},[]);a.useEffect(()=>(T.current=requestAnimationFrame(A),()=>cancelAnimationFrame(T.current)),[A]);const n=l=>{let p=b+1;p>20&&(p=20),j(p);const m=Math.max(500,2500-p*100);N.current=m,M.current=Date.now()+m;const S=l.value*p;o(S),r("baby_steps"),p>=5&&r("on_fire"),p>=10&&r("god_mode"),l.type==="shiny"&&r("shiny_lover"),Math.sqrt(l.vx*l.vx+l.vy*l.vy)>15&&r("sniper");const W=u+S;if(W>=500&&r("piggy_bank"),W>=1e3&&r("stonks"),W>=5e3&&r("crypto_king"),Object.values(yt).flat().filter(B=>B.type!=="skin").every(B=>C.includes(B.id))&&r("collector"),h){const B=Object.keys(rt);B.length,B.filter(D=>D!=="prestige").every(D=>h.includes(D))&&r("prestige")}if(l.type==="shiny"&&z.current){const B=z.current.cloneNode();B.volume=i,B.play().catch(ee=>console.log("Audio error:",ee))}const oe=[],se=l.type==="shiny"?"#ffd700":"#ffffff";for(let B=0;B<12;B++)oe.push({id:`${Date.now()}-${B}-${Math.random()}`,x:l.x+Ee/2,y:l.y+Ee/2,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,life:1,color:se});L(B=>[...B,...oe]),R(B=>B.filter(ee=>ee.id!==l.id)),setTimeout(()=>{_.current&&R(B=>{const ee=window.innerWidth,re=window.innerHeight,D=1+Math.min(p,10)*.15,ae={...l,id:`${l.type}-${Date.now()}-${Math.random()}`,x:Math.random()*(ee-Ee),y:Math.random()*(re-Ee),vx:(Math.random()-.5)*(l.type==="shiny"?12:8)*D,vy:(Math.random()-.5)*(l.type==="shiny"?12:8)*D};return[...B,ae]})},2e3)},I=Date.now(),J=Math.max(0,M.current-I),q=b>1&&N.current>0?J/N.current:0,P=60,K=8,E=P-K*2,X=E*2*Math.PI,Y=X-q*X,c=`hsl(${Math.min(120,Math.max(0,q*120))}, 100%, 50%)`;return e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:30,pointerEvents:"auto",overflow:"hidden"},children:[e.jsxs("div",{style:{position:"absolute",top:"110px",left:"30px",zIndex:100,display:"flex",alignItems:"center",gap:"10px",background:"rgba(0,0,0,0.5)",padding:"10px 20px",borderRadius:"30px",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(5px)",color:"#ffd700",fontFamily:"var(--font-main)",fontWeight:"bold",fontSize:"1.2rem",pointerEvents:"none"},children:[e.jsx("img",{src:U.normal,alt:"coin",style:{width:"24px",height:"24px"}}),e.jsx("span",{children:u})]}),e.jsx("div",{style:{position:"absolute",top:"40px",right:"40px",pointerEvents:"none",zIndex:100,display:"flex",justifyContent:"center",alignItems:"center",width:"140px",height:"140px"},children:b>1&&e.jsxs(e.Fragment,{children:[e.jsxs("svg",{height:P*2,width:P*2,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%) rotate(-90deg)"},children:[e.jsx("circle",{stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:K,fill:"transparent",r:E,cx:P,cy:P}),e.jsx("circle",{stroke:c,strokeWidth:K,strokeDasharray:X+" "+X,style:{strokeDashoffset:Y,transition:"stroke-dashoffset 0.1s linear"},strokeLinecap:"round",fill:"transparent",r:E,cx:P,cy:P})]}),e.jsxs("div",{style:{fontFamily:"var(--font-main)",fontSize:"3rem",fontWeight:"900",color:"#f700ff",textShadow:"0 0 20px rgba(247, 0, 255, 0.8)",transform:`scale(${1+Math.min(b,10)*.1})`,transition:"transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},children:["x",b]})]})}),w.map(l=>e.jsx("div",{style:{position:"absolute",left:l.x,top:l.y,width:"8px",height:"8px",backgroundColor:l.color,borderRadius:"50%",opacity:l.life,pointerEvents:"none",transform:"translate(-50%, -50%)",boxShadow:`0 0 8px ${l.color}`}},l.id)),g.map(l=>{const m=y==="cursor_target"?10:0;return e.jsx("div",{className:"coin-entity",onMouseDown:S=>{S.stopPropagation(),n(l)},style:{position:"absolute",transform:`translate3d(${l.x-m}px, ${l.y-m}px, 0)`,width:Ee+m*2,height:Ee+m*2,cursor:"pointer",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",zIndex:20},children:e.jsx("img",{src:l.img,alt:"coin",style:{width:Ee,height:Ee,objectFit:"contain",filter:l.type==="shiny"?"drop-shadow(0 0 15px gold) brightness(1.2)":"drop-shadow(0 0 5px rgba(255,255,255,0.3))",pointerEvents:"none"},draggable:!1})},l.id)})]})}const Zo=Object.assign({"../../assets/img/photos/bridge.jpeg":to,"../../assets/img/photos/first.jpg":no,"../../assets/img/photos/graduated.jpeg":so,"../../assets/img/photos/halloween.jpg":ao,"../../assets/img/photos/miestrella.jpg":co,"../../assets/img/photos/murder.jpeg":fo,"../../assets/img/photos/rock.jpeg":ho,"../../assets/img/photos/sleepy.jpg":go,"../../assets/img/photos/sunshine.jpeg":xo}),At=Object.values(Zo).map(o=>o.default),es=()=>{const[o,t]=a.useState(null),{isGameActive:i}=Ue();let r=[...At];if(r.length>0)for(;r.length<18;)r=[...r,...At];const u=[...r,...r];return e.jsx(Pe,{mode:"wait",children:i?e.jsx(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{width:"100%",height:"100%"},children:e.jsx(Qo,{})},"game"):e.jsxs(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"main-container",children:[e.jsx("style",{children:`
        .gallery-container {
          margin-top: 0; /* El espaciado lo controla el contenedor padre ahora */
          width: 100%;
          overflow: hidden;
          position: relative;
          flex-shrink: 0; /* IMPORTANTE: Evita que la galería se aplaste o corte */
          /* Máscara para desvanecer los bordes suavemente */
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .gallery-track {
          display: flex;
          align-items: center;
          gap: 15px;
          width: max-content;
          animation: scrollLeft 60s linear infinite; /* Más lento (60s) */
          padding: 30px 0; /* Espacio vertical para evitar recortes al hacer hover */
        }
        .gallery-track:hover {
          animation-play-state: paused;
        }
        .gallery-item {
          height: 220px;
          width: 150px; /* Ancho fijo para consistencia total */
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
          transition: transform 0.3s ease;
          object-fit: cover;
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
        }
        .gallery-item:hover {
          transform: scale(1.15);
          border-color: #f700ff;
          box-shadow: 0 0 25px rgba(247, 0, 255, 0.5);
          z-index: 10;
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),At.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:u.map((h,C)=>e.jsx("img",{src:h,alt:`Memory ${C}`,className:"gallery-item",onClick:()=>t(h)},C))})}),e.jsx(Pe,{children:o&&e.jsx(ne.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(ne.img,{src:o,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:h=>h.stopPropagation()})})})]},"content")})},ts=({color1:o="#b117f8",color2:t="#2c0b2e",speed:i=20})=>e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:`linear-gradient(to bottom, ${o}, ${t})`,animation:`spinGradient ${i}s linear infinite`}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),is=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,ns=`
precision highp float;
uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform bool uTransparent;
varying vec2 vUv;

// --- OPTIMIZACIÓN 1: Reducimos las capas a 3.0 para equilibrio calidad/rendimiento ---
#define NUM_LAYER 3.0 
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float tri(float x) { return abs(fract(x) * 2.0 - 1.0); }
float tris(float x) { float t = fract(x); return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0)); }
float trisn(float x) { float t = fract(x); return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0; }
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}
vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);
  vec2 gv = fract(uv) - 0.5; 
  vec2 id = floor(uv);
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;
      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));
      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;
      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;
      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      col += star * size * color;
    }
  }
  return col;
}
void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;
  
  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;
  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;
  vec3 col = vec3(0.0);
  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }
  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`,os=({focal:o=[.5,.5],rotation:t=[1,0],starSpeed:i=0,density:r=1.5,hueShift:u=300,disableAnimation:h=!1,speed:C=.5,glowIntensity:y=.5,saturation:g=.8,twinkleIntensity:R=.5,rotationSpeed:w=.05,transparent:L=!0,colorCycleSpeed:b=10,rainbow:j=!1,warp:T=!1,...z})=>{const _=a.useRef(null),M=a.useRef(u),N=a.useRef(null),U=a.useRef({starSpeed:i,disableAnimation:h,rainbow:j,colorCycleSpeed:b,warp:T,hueShift:u});return a.useEffect(()=>{U.current={starSpeed:i,disableAnimation:h,rainbow:j,colorCycleSpeed:b,warp:T,hueShift:u}},[i,h,j,b,T,u]),a.useEffect(()=>{if(!_.current)return;const A=_.current;A.innerHTML="";const n=new Yn({alpha:L,premultipliedAlpha:!1,dpr:1}),I=n.gl;L?(I.enable(I.BLEND),I.blendFunc(I.SRC_ALPHA,I.ONE_MINUS_SRC_ALPHA),I.clearColor(0,0,0,0)):I.clearColor(0,0,0,1);let J;function q(){n.setSize(A.offsetWidth*1,A.offsetHeight*1),N.current&&(N.current.uniforms.uResolution.value=new Yt(I.canvas.width,I.canvas.height,I.canvas.width/I.canvas.height))}window.addEventListener("resize",q,!1),q();const P=new Hn(I);J=new Vn(I,{vertex:is,fragment:ns,uniforms:{uTime:{value:0},uResolution:{value:new Yt(I.canvas.width,I.canvas.height,I.canvas.width/I.canvas.height)},uFocal:{value:new Float32Array(o)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:i},uDensity:{value:r},uHueShift:{value:u},uSpeed:{value:C},uGlowIntensity:{value:y},uSaturation:{value:g},uTwinkleIntensity:{value:R},uRotationSpeed:{value:w},uTransparent:{value:L}}}),N.current=J;const K=new $n(I,{geometry:P,program:J});let E,X=0;const d=1e3/30;function c(l){if(E=requestAnimationFrame(c),!_.current||!N.current)return;const p=l-X;if(p<d)return;X=l-p%d;const{starSpeed:m,disableAnimation:S,rainbow:O,colorCycleSpeed:W,warp:ce,hueShift:V}=U.current;if(!S){J.uniforms.uTime.value=l*.001;const oe=ce?m*10:m;J.uniforms.uStarSpeed.value=l*.001*oe/10,O?(M.current+=W*.05,J.uniforms.uHueShift.value=M.current%360):J.uniforms.uHueShift.value=V}n.render({scene:K})}return E=requestAnimationFrame(c),A.appendChild(I.canvas),I.canvas.style.width="100%",I.canvas.style.height="100%",I.canvas.style.display="block",I.canvas.style.willChange="transform",()=>{cancelAnimationFrame(E),window.removeEventListener("resize",q),A&&I.canvas&&A.contains(I.canvas)&&A.removeChild(I.canvas),I.getExtension("WEBGL_lose_context")?.loseContext(),N.current=null}},[L]),a.useEffect(()=>{if(!N.current)return;const A=N.current.uniforms;A.uFocal.value=new Float32Array(o),A.uRotation.value=new Float32Array(t),A.uDensity.value=r,A.uSpeed.value=C,A.uGlowIntensity.value=y,A.uSaturation.value=g,A.uTwinkleIntensity.value=R,A.uRotationSpeed.value=w},[o,t,r,C,y,g,R,w]),e.jsx("div",{ref:_,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},...z})},ss=gt.memo(os);class rs{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#i;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#C;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#o=!1;#n=!1;isDisposed=!1;#s;#r;#a;#l=new _t;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#p(),this.#g(),this.#v(),this.resize(),this.#x()}#p(){this.camera=new xi,this.cameraFov=this.camera.fov}#g(){this.scene=new at}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new lt(t),this.renderer.outputColorSpace=mn}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#r=new ResizeObserver(this.#c.bind(this)),this.#r.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#r?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#o=t[0].isIntersecting,this.#o?this.#h():this.#u()}#f(){this.#o&&(document.hidden?this.#u():this.#h())}#c(){this.#a&&clearTimeout(this.#a),this.#a=setTimeout(this.resize.bind(this),100)}resize(){let t,i;this.#e.size instanceof Object?(t=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,i=window.innerHeight),this.size.width=t,this.size.height=i,this.size.ratio=t/i,this.#w(),this.#S(),this.onAfterResize(this.size)}#w(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#m(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#m(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#m(t){const i=Math.tan(Et.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*Et.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#S(){this.renderer.setSize(this.size.width,this.size.height),this.#i?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(t),this.size.pixelRatio=t}get postprocessing(){return this.#i}set postprocessing(t){this.#i=t,this.render=t.render.bind(t)}#h(){if(this.#n)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#n=!0,this.#l.start(),t()}#u(){this.#n&&(cancelAnimationFrame(this.#d),this.#n=!1,this.#l.stop())}#C(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(i=>{const r=t.material[i];r!==null&&typeof r=="object"&&typeof r.dispose=="function"&&r.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#i?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const Ge=new Map,Ne=new je;let Lt=!1;function as(o){const t={position:new je,nPosition:new je,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...o};return(function(i,r){Ge.has(i)||(Ge.set(i,r),Lt||(document.body.addEventListener("pointermove",$t),document.body.addEventListener("pointerleave",Kt),document.body.addEventListener("click",Jt),document.body.addEventListener("touchstart",Qt,{passive:!1}),document.body.addEventListener("touchmove",Zt,{passive:!1}),document.body.addEventListener("touchend",ut,{passive:!1}),document.body.addEventListener("touchcancel",ut,{passive:!1}),Lt=!0))})(o.domElement,t),t.dispose=()=>{const i=o.domElement;Ge.delete(i),Ge.size===0&&(document.body.removeEventListener("pointermove",$t),document.body.removeEventListener("pointerleave",Kt),document.body.removeEventListener("click",Jt),document.body.removeEventListener("touchstart",Qt),document.body.removeEventListener("touchmove",Zt),document.body.removeEventListener("touchend",ut),document.body.removeEventListener("touchcancel",ut),Lt=!1)},t}function $t(o){Ne.x=o.clientX,Ne.y=o.clientY,ls()}function ls(){for(const[o,t]of Ge){const i=o.getBoundingClientRect();wt(i)?(bt(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function Jt(o){Ne.x=o.clientX,Ne.y=o.clientY;for(const[t,i]of Ge){const r=t.getBoundingClientRect();bt(i,r),wt(r)&&i.onClick(i)}}function Kt(){for(const o of Ge.values())o.hover&&(o.hover=!1,o.onLeave(o))}function Qt(o){if(o.touches.length>0){o.preventDefault(),Ne.x=o.touches[0].clientX,Ne.y=o.touches[0].clientY;for(const[t,i]of Ge){const r=t.getBoundingClientRect();wt(r)&&(i.touching=!0,bt(i,r),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function Zt(o){if(o.touches.length>0){o.preventDefault(),Ne.x=o.touches[0].clientX,Ne.y=o.touches[0].clientY;for(const[t,i]of Ge){const r=t.getBoundingClientRect();bt(i,r),wt(r)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function ut(){for(const[,o]of Ge)o.touching&&(o.touching=!1,o.hover&&(o.hover=!1,o.onLeave(o)))}function bt(o,t){const{position:i,nPosition:r}=o;i.x=Ne.x-t.left,i.y=Ne.y-t.top,r.x=i.x/t.width*2-1,r.y=-i.y/t.height*2+1}function wt(o){const{x:t,y:i}=Ne,{left:r,top:u,width:h,height:C}=o;return t>=r&&t<=r+h&&i>=u&&i<=u+C}const{randFloat:cs,randFloatSpread:Pt}=Et,kt=new le,Se=new le,dt=new le,us=new le,Ce=new le,ft=new le,Je=new le,qe=new le,mt=new le,ei=new le;class ds{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new le,this.#e(),this.setSizes()}#e(){const{config:t,positionData:i}=this;this.center.toArray(i,0);for(let r=1;r<t.count;r++){const u=3*r;i[u]=Pt(2*t.maxX),i[u+1]=Pt(2*t.maxY),i[u+2]=Pt(2*t.maxZ)}}setSizes(){const{config:t,sizeData:i}=this;i[0]=t.size0;for(let r=1;r<t.count;r++)i[r]=cs(t.minSize,t.maxSize)}update(t){const{config:i,center:r,positionData:u,sizeData:h,velocityData:C}=this;let y=0;i.controlSphere0&&(y=1,kt.fromArray(u,0),kt.lerp(r,.1).toArray(u,0),us.set(0,0,0).toArray(C,0));for(let g=y;g<i.count;g++){const R=3*g;Se.fromArray(u,R),Ce.fromArray(C,R),Ce.y-=t.delta*i.gravity*h[g],Ce.multiplyScalar(i.friction),Ce.clampLength(0,i.maxVelocity),Se.add(Ce),Se.toArray(u,R),Ce.toArray(C,R)}for(let g=y;g<i.count;g++){const R=3*g;Se.fromArray(u,R),Ce.fromArray(C,R);const w=h[g];for(let b=g+1;b<i.count;b++){const j=3*b;dt.fromArray(u,j),ft.fromArray(C,j);const T=h[b];Je.copy(dt).sub(Se);const z=Je.length(),_=w+T;if(z<_){const M=_-z;qe.copy(Je).normalize().multiplyScalar(.5*M),mt.copy(qe).multiplyScalar(Math.max(Ce.length(),1)),ei.copy(qe).multiplyScalar(Math.max(ft.length(),1)),Se.sub(qe),Ce.sub(mt),Se.toArray(u,R),Ce.toArray(C,R),dt.add(qe),ft.add(ei),dt.toArray(u,j),ft.toArray(C,j)}}if(i.controlSphere0){Je.copy(kt).sub(Se);const b=Je.length(),j=w+h[0];if(b<j){const T=j-b;qe.copy(Je.normalize()).multiplyScalar(T),mt.copy(qe).multiplyScalar(Math.max(Ce.length(),1)),Se.sub(qe),Ce.sub(mt)}}Math.abs(Se.x)+w>i.maxX&&(Se.x=Math.sign(Se.x)*(i.maxX-w),Ce.x=-Ce.x*i.wallBounce),i.gravity===0?Math.abs(Se.y)+w>i.maxY&&(Se.y=Math.sign(Se.y)*(i.maxY-w),Ce.y=-Ce.y*i.wallBounce):Se.y-w<-i.maxY&&(Se.y=-i.maxY+w,Ce.y=-Ce.y*i.wallBounce);const L=Math.max(i.maxZ,i.maxSize);Math.abs(Se.z)+w>L&&(Se.z=Math.sign(Se.z)*(i.maxZ-w),Ce.z=-Ce.z*i.wallBounce),Se.toArray(u,R),Ce.toArray(C,R)}}explode(t,i=2){const{positionData:r,velocityData:u,config:h}=this;for(let C=0;C<h.count;C++){const y=3*C,g=r[y]-t.x,R=r[y+1]-t.y,w=r[y+2]-t.z,L=g*g+R*R+w*w;if(L<60){const b=Math.sqrt(L)+.01,j=i*50/(b+1),T=(Math.random()-.5)*1.5,z=(Math.random()-.5)*1.5,_=(Math.random()-.5)*1.5;u[y]+=(g/b+T)*j,u[y+1]+=(R/b+z)*j,u[y+2]+=(w/b+_)*j}}}}class fs extends bn{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
      `+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("void main() {",`
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
      `);const r=Ie.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",r),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const ms={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0,enableExplosion:!1,rainbow:!1},Ke=new cn;class hs extends hn{constructor(t,i={}){const r={...ms,...i},u=new pn,h=new gn(t,.04).fromScene(u).texture,C=new vn,y=new fs({envMap:h,...r.materialParams});y.envMapRotation.x=-Math.PI/2,super(C,y,r.count),this.config=r,this.physics=new ds(r),this.#e(),this.setColors(r.colors),this.rainbowHue=0}#e(){this.ambientLight=new xn(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new yn(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(r){let u,h;function C(y){u=y,h=[],u.forEach(g=>{h.push(new Te(g))})}return C(r),{setColors:C,getColorAt:function(y,g=new Te){const R=Math.max(0,Math.min(1,y))*(u.length-1),w=Math.floor(R),L=h[w];if(w>=u.length-1)return L.clone();const b=R-w,j=h[w+1];return g.r=L.r+b*(j.r-L.r),g.g=L.g+b*(j.g-L.g),g.b=L.b+b*(j.b-L.b),g}}})(t);for(let r=0;r<this.count;r++)this.setColorAt(r,i.getColorAt(r/this.count)),r===0&&this.light.color.copy(i.getColorAt(r/this.count));this.instanceColor.needsUpdate=!0}}update(t){if(this.physics.update(t),this.config.rainbow){this.rainbowHue+=t.delta*.2,this.light.color.setHSL(this.rainbowHue%1,1,.5);for(let i=0;i<this.count;i++){const r=(this.rainbowHue+i*.05)%1,u=new Te().setHSL(r,.9,.6);this.setColorAt(i,u)}this.instanceColor.needsUpdate=!0}for(let i=0;i<this.count;i++)Ke.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Ke.scale.setScalar(0):Ke.scale.setScalar(this.physics.sizeData[i]),Ke.updateMatrix(),this.setMatrixAt(i,Ke.matrix),i===0&&this.light.position.copy(Ke.position);this.instanceMatrix.needsUpdate=!0}}function ps(o,t={}){const i=new rs({canvas:o,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let r;i.renderer.toneMapping=un,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),R(t);const u=new dn,h=new fn(new le(0,0,1),0),C=new le;let y=!1;o.style.touchAction="none",o.style.userSelect="none",o.style.webkitUserSelect="none";const g=as({domElement:o,onMove(){u.setFromCamera(g.nPosition,i.camera),i.camera.getWorldDirection(h.normal),u.ray.intersectPlane(h,C),r.physics.center.copy(C),r.config.controlSphere0=!0},onClick(){r&&r.config.enableExplosion&&r.physics.explode(r.physics.center)},onLeave(){r.config.controlSphere0=!1}});function R(w){r&&(i.clear(),i.scene.remove(r)),r=new hs(i.renderer,w),i.scene.add(r)}return i.onBeforeRender=w=>{y||r.update(w)},i.onAfterResize=w=>{r.config.maxX=w.wWidth/2,r.config.maxY=w.wHeight/2},{three:i,get spheres(){return r},setCount(w){R({...r.config,count:w})},togglePause(){y=!y},dispose(){g.dispose(),i.dispose()}}}const gs=({className:o="",followCursor:t=!0,count:i=100,gravity:r=.5,friction:u=.9975,wallBounce:h=.95,colors:C=[0,0,0],enableExplosion:y=!1,rainbow:g=!1,...R})=>{const w=a.useRef(null),L=a.useRef(null);return a.useEffect(()=>{const b=w.current;if(b)return L.current=ps(b,{followCursor:t,count:i,gravity:r,friction:u,wallBounce:h,colors:C,enableExplosion:y,rainbow:g,...R}),()=>{L.current&&L.current.dispose()}},[]),a.useEffect(()=>{const b=L.current;if(!b||!b.spheres)return;const j=b.spheres.config;j.gravity=r,j.friction=u,j.wallBounce=h,j.followCursor=t,j.enableExplosion=y,j.rainbow=g,b.spheres.setColors(C)},[r,u,h,t,C,y,g]),a.useEffect(()=>{const b=L.current;b&&b.setCount(i)},[i]),e.jsx("canvas",{className:o,ref:w,style:{width:"100%",height:"100%"}})},vs=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,xs=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;
uniform float amplitude;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3 * amplitude;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,ht=8;function ti(o){let t=o.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,r=255,u=255;return t.length===3?(i=parseInt(t[0]+t[0],16),r=parseInt(t[1]+t[1],16),u=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),u=parseInt(t.slice(4,6),16)),new le(i/255,r/255,u/255)}function ys({linesGradient:o,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:r=[5],topWavePosition:u,middleWavePosition:h,bottomWavePosition:C={x:2,y:-.7,rotate:-1},animationSpeed:y=1,interactive:g=!1,bendRadius:R=5,bendStrength:w=-.5,mouseDamping:L=.05,mixBlendMode:b="screen",amplitude:j=1,rainbow:T=!1}){const z=a.useRef(null),_=a.useRef(null),M=a.useRef(null),N=a.useRef(new je(-1e3,-1e3)),U=a.useRef(new je(-1e3,-1e3)),A=a.useRef(0),n=a.useRef(0),I=a.useRef(T),J=a.useRef(g);a.useEffect(()=>{J.current=g},[g]),a.useEffect(()=>{I.current=T},[T]);const q=l=>{if(typeof i=="number")return i;if(!t.includes(l))return 0;const p=t.indexOf(l);return i[p]??6},P=l=>{if(typeof r=="number")return r;if(!t.includes(l))return .1;const p=t.indexOf(l);return r[p]??.1},K=t.includes("top")?q("top"):0,E=t.includes("middle")?q("middle"):0,X=t.includes("bottom")?q("bottom"):0,Y=t.includes("top")?P("top")*.01:.01,d=t.includes("middle")?P("middle")*.01:.01,c=t.includes("bottom")?P("bottom")*.01:.01;return a.useEffect(()=>{if(M.current&&o&&o.length>0&&!T){const l=o.slice(0,ht);M.current.uniforms.lineGradientCount.value=l.length,l.forEach((p,m)=>{const S=ti(p);M.current.uniforms.lineGradient.value[m].set(S.x,S.y,S.z)})}},[o,T]),a.useEffect(()=>{if(!M.current)return;const l=M.current.uniforms;l.animationSpeed.value=y,l.amplitude.value=j,l.bendRadius.value=R,l.bendStrength.value=w,l.interactive.value=g,l.enableTop.value=t.includes("top"),l.enableMiddle.value=t.includes("middle"),l.enableBottom.value=t.includes("bottom");const p=S=>{if(typeof i=="number")return i;if(!t.includes(S))return 0;const O=t.indexOf(S);return i[O]??6},m=S=>{if(typeof r=="number")return r;if(!t.includes(S))return .1;const O=t.indexOf(S);return r[O]??.1};l.topLineCount.value=t.includes("top")?p("top"):0,l.middleLineCount.value=t.includes("middle")?p("middle"):0,l.bottomLineCount.value=t.includes("bottom")?p("bottom"):0,l.topLineDistance.value=t.includes("top")?m("top")*.01:.01,l.middleLineDistance.value=t.includes("middle")?m("middle")*.01:.01,l.bottomLineDistance.value=t.includes("bottom")?m("bottom")*.01:.01},[y,j,R,w,g,t,i,r]),a.useEffect(()=>{if(!z.current)return;const l=new at,p=new Tt(-1,1,1,-1,0,1);p.position.z=1;const m=new lt({antialias:!0,alpha:!1});m.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),m.domElement.style.width="100%",m.domElement.style.height="100%",z.current.appendChild(m.domElement),_.current=m;const S={iTime:{value:0},iResolution:{value:new le(1,1,1)},animationSpeed:{value:y},amplitude:{value:j},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:K},middleLineCount:{value:E},bottomLineCount:{value:X},topLineDistance:{value:Y},middleLineDistance:{value:d},bottomLineDistance:{value:c},topWavePosition:{value:new le(u?.x??10,u?.y??.5,u?.rotate??-.4)},middleWavePosition:{value:new le(h?.x??5,h?.y??0,h?.rotate??.2)},bottomWavePosition:{value:new le(C?.x??2,C?.y??-.7,C?.rotate??.4)},iMouse:{value:new je(-1e3,-1e3)},interactive:{value:g},bendRadius:{value:R},bendStrength:{value:w},bendInfluence:{value:0},lineGradient:{value:Array.from({length:ht},()=>new le(1,1,1))},lineGradientCount:{value:0}};if(o&&o.length>0){const D=o.slice(0,ht);S.lineGradientCount.value=D.length,D.forEach((ae,ge)=>{const me=ti(ae);S.lineGradient.value[ge].set(me.x,me.y,me.z)})}const O=new Qe({uniforms:S,vertexShader:vs,fragmentShader:xs});M.current=O;const W=new st(2,2),ce=new Ze(W,O);l.add(ce);const V=new _t,oe=()=>{const D=z.current,ae=D.clientWidth||1,ge=D.clientHeight||1;m.setSize(ae,ge,!1);const me=m.domElement.width,xe=m.domElement.height;S.iResolution.value.set(me,xe,1)};oe();const se=typeof ResizeObserver<"u"?new ResizeObserver(oe):null;se&&z.current&&se.observe(z.current);const B=D=>{if(!J.current)return;const ae=m.domElement.getBoundingClientRect(),ge=D.clientX-ae.left,me=D.clientY-ae.top,xe=m.getPixelRatio();N.current.set(ge*xe,(ae.height-me)*xe),A.current=1};window.addEventListener("pointermove",B);let ee=0;const re=()=>{if(S.iTime.value=V.getElapsedTime(),J.current&&(U.current.lerp(N.current,L),S.iMouse.value.copy(U.current),n.current+=(A.current-n.current)*L,S.bendInfluence.value=n.current),I.current){const D=V.getElapsedTime();S.lineGradientCount.value<3&&(S.lineGradientCount.value=3);for(let ae=0;ae<ht;ae++){const ge=(D*.1+ae*.15)%1,me=new Te().setHSL(ge,.8,.5);S.lineGradient.value[ae].set(me.r,me.g,me.b)}}m.render(l,p),ee=requestAnimationFrame(re)};return re(),()=>{cancelAnimationFrame(ee),se&&z.current&&se.disconnect(),window.removeEventListener("pointermove",B),W.dispose(),O.dispose(),m.dispose(),m.domElement.parentElement&&m.domElement.parentElement.removeChild(m.domElement)}},[]),e.jsx("div",{ref:z,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:b}})}const bs=({topColor:o="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:r=.3,interactive:u=!1,className:h="",glowAmount:C=.005,pillarWidth:y=3,pillarHeight:g=.4,noiseIntensity:R=.5,mixBlendMode:w="screen",pillarRotation:L=0,quality:b="high"})=>{const j=a.useRef(null),T=a.useRef(null),z=a.useRef(null),_=a.useRef(null),M=a.useRef(null),N=a.useRef(null),U=a.useRef(null),A=a.useRef(new je(0,0)),n=a.useRef(0),[I,J]=a.useState(!0);return a.useEffect(()=>{const q=document.createElement("canvas");q.getContext("webgl")||q.getContext("experimental-webgl")||J(!1)},[]),a.useEffect(()=>{if(!j.current||!I)return;const q=j.current,P=q.clientWidth,K=q.clientHeight,E=new at;M.current=E;const X=new Tt(-1,1,1,-1,0,1);N.current=X;const Y=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),d=Y||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let c=b;d&&b==="high"&&(c="medium"),Y&&b!=="low"&&(c="low");const l={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},p=l[c]||l.medium;let m;try{m=new lt({antialias:!1,alpha:!0,powerPreference:c==="high"?"high-performance":"low-power",precision:p.precision,stencil:!1,depth:!1})}catch{J(!1);return}m.setSize(P,K),m.setPixelRatio(p.pixelRatio),j.current.appendChild(m.domElement),z.current=m;const S=Q=>{const ue=new Te(Q);return new le(ue.r,ue.g,ue.b)},O=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,W=`
      precision ${p.precision} float;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uRotCos;
      uniform float uRotSin;
      uniform float uPillarRotCos;
      uniform float uPillarRotSin;
      uniform float uWaveSin;
      uniform float uWaveCos;
      varying vec2 vUv;

      const float STEP_MULT = ${p.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${p.iterations};
      const int WAVE_ITER = ${p.waveIterations};

      void main() {
        vec2 uv = (vUv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
        uv = vec2(uPillarRotCos * uv.x - uPillarRotSin * uv.y, uPillarRotSin * uv.x + uPillarRotCos * uv.y);

        vec3 ro = vec3(0.0, 0.0, -10.0);
        vec3 rd = normalize(vec3(uv, 1.0));

        float rotC = uRotCos;
        float rotS = uRotSin;
        if(uInteractive && (uMouse.x != 0.0 || uMouse.y != 0.0)) {
          float a = uMouse.x * 6.283185;
          rotC = cos(a);
          rotS = sin(a);
        }

        vec3 col = vec3(0.0);
        float t = 0.1;
        
        for(int i = 0; i < MAX_ITER; i++) {
          vec3 p = ro + rd * t;
          p.xz = vec2(rotC * p.x - rotS * p.z, rotS * p.x + rotC * p.z);

          vec3 q = p;
          q.y = p.y * uPillarHeight + uTime;
          
          float freq = 1.0;
          float amp = 1.0;
          for(int j = 0; j < WAVE_ITER; j++) {
            q.xz = vec2(uWaveCos * q.x - uWaveSin * q.z, uWaveSin * q.x + uWaveCos * q.z);
            q += cos(q.zxy * freq - uTime * float(j) * 2.0) * amp;
            freq *= 2.0;
            amp *= 0.5;
          }
          
          float d = length(cos(q.xz)) - 0.2;
          float bound = length(p.xz) - uPillarWidth;
          float k = 4.0;
          float h = max(k - abs(d - bound), 0.0);
          d = max(d, bound) + h * h * 0.0625 / k;
          d = abs(d) * 0.15 + 0.01;

          float grad = clamp((15.0 - p.y) / 30.0, 0.0, 1.0);
          col += mix(uBottomColor, uTopColor, grad) / d;

          t += d * STEP_MULT;
          if(t > 50.0) break;
        }

        float widthNorm = uPillarWidth / 3.0;
        col = tanh(col * uGlowAmount / widthNorm);
        
        col -= fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) / 15.0 * uNoiseIntensity;
        
        gl_FragColor = vec4(col * uIntensity, 1.0);
      }
    `,ce=L*Math.PI/180,V=Math.sin(.4),oe=Math.cos(.4),se=new Qe({vertexShader:O,fragmentShader:W,uniforms:{uTime:{value:0},uResolution:{value:new je(P,K)},uMouse:{value:A.current},uTopColor:{value:S(o)},uBottomColor:{value:S(t)},uIntensity:{value:i},uInteractive:{value:u},uGlowAmount:{value:C},uPillarWidth:{value:y},uPillarHeight:{value:g},uNoiseIntensity:{value:R},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(ce)},uPillarRotSin:{value:Math.sin(ce)},uWaveSin:{value:V},uWaveCos:{value:oe}},transparent:!0,depthWrite:!1,depthTest:!1});_.current=se;const B=new st(2,2);U.current=B;const ee=new Ze(B,se);E.add(ee);let re=null;const D=Q=>{if(!u||re)return;re=window.setTimeout(()=>{re=null},16);const ue=q.getBoundingClientRect(),H=(Q.clientX-ue.left)/ue.width*2-1,te=-((Q.clientY-ue.top)/ue.height)*2+1;A.current.set(H,te)};u&&q.addEventListener("mousemove",D,{passive:!0});let ae=performance.now();const me=1e3/(c==="low"?30:60),xe=Q=>{if(!_.current||!z.current||!M.current||!N.current)return;const ue=Q-ae;if(ue>=me){n.current+=.016*r;const H=n.current;_.current.uniforms.uTime.value=H,_.current.uniforms.uRotCos.value=Math.cos(H*.3),_.current.uniforms.uRotSin.value=Math.sin(H*.3),z.current.render(M.current,N.current),ae=Q-ue%me}T.current=requestAnimationFrame(xe)};T.current=requestAnimationFrame(xe);let F=null;const $=()=>{F&&clearTimeout(F),F=window.setTimeout(()=>{if(!z.current||!_.current||!j.current)return;const Q=j.current.clientWidth,ue=j.current.clientHeight;z.current.setSize(Q,ue),_.current.uniforms.uResolution.value.set(Q,ue)},150)};return window.addEventListener("resize",$,{passive:!0}),()=>{window.removeEventListener("resize",$),u&&q.removeEventListener("mousemove",D),T.current&&cancelAnimationFrame(T.current),z.current&&(z.current.dispose(),z.current.forceContextLoss(),q.contains(z.current.domElement)&&q.removeChild(z.current.domElement)),_.current&&_.current.dispose(),U.current&&U.current.dispose(),z.current=null,_.current=null,M.current=null,N.current=null,U.current=null,T.current=null}},[o,t,i,r,u,C,y,g,R,L,I,b]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          .light-pillar-fallback {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.1);
            color: #888;
            font-size: 14px;
          }

          .light-pillar-container {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        `}),I?e.jsx("div",{ref:j,className:`light-pillar-container ${h}`,style:{mixBlendMode:w}}):e.jsx("div",{className:`light-pillar-fallback ${h}`,style:{mixBlendMode:w},children:"WebGL not supported"})]})},ws=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,Ss=`
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uFlakeSize;
uniform float uMinFlakeSize;
uniform float uPixelResolution;
uniform float uSpeed;
uniform float uDepthFade;
uniform float uFarPlane;
uniform vec3 uColor;
uniform float uBrightness;
uniform float uGamma;
uniform float uDensity;
uniform float uVariant;
uniform float uDirection;
uniform float uRainbow; // 0.0 o 1.0

// Precomputed constants
#define PI 3.14159265
#define PI_OVER_6 0.5235988
#define PI_OVER_3 1.0471976
#define INV_SQRT3 0.57735027
#define M1 1597334677U
#define M2 3812015801U
#define M3 3299493293U
#define F0 2.3283064e-10

// Optimized hash - inline multiplication
#define hash(n) (n * (n ^ (n >> 15)))
#define coord3(p) (uvec3(p).x * M1 ^ uvec3(p).y * M2 ^ uvec3(p).z * M3)

// Precomputed camera basis vectors (normalized vec3(1,1,1), vec3(1,0,-1))
const vec3 camK = vec3(0.57735027, 0.57735027, 0.57735027);
const vec3 camI = vec3(0.70710678, 0.0, -0.70710678);
const vec3 camJ = vec3(-0.40824829, 0.81649658, -0.40824829);

// Precomputed branch direction
const vec2 b1d = vec2(0.574, 0.819);

vec3 hash3(uint n) {
  uvec3 hashed = hash(n) * uvec3(1U, 511U, 262143U);
  return vec3(hashed) * F0;
}

// Helper para HSV a RGB
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float snowflakeDist(vec2 p) {
  float r = length(p);
  float a = atan(p.y, p.x);
  a = abs(mod(a + PI_OVER_6, PI_OVER_3) - PI_OVER_6);
  vec2 q = r * vec2(cos(a), sin(a));
  float dMain = max(abs(q.y), max(-q.x, q.x - 1.0));
  float b1t = clamp(dot(q - vec2(0.4, 0.0), b1d), 0.0, 0.4);
  float dB1 = length(q - vec2(0.4, 0.0) - b1t * b1d);
  float b2t = clamp(dot(q - vec2(0.7, 0.0), b1d), 0.0, 0.25);
  float dB2 = length(q - vec2(0.7, 0.0) - b2t * b1d);
  return min(dMain, min(dB1, dB2)) * 10.0;
}

void main() {
  // Precompute reciprocals to avoid division
  float invPixelRes = 1.0 / uPixelResolution;
  float pixelSize = max(1.0, floor(0.5 + uResolution.x * invPixelRes));
  float invPixelSize = 1.0 / pixelSize;
  
  vec2 fragCoord = floor(gl_FragCoord.xy * invPixelSize);
  vec2 res = uResolution * invPixelSize;
  float invResX = 1.0 / res.x;

  vec3 ray = normalize(vec3((fragCoord - res * 0.5) * invResX, 1.0));
  ray = ray.x * camI + ray.y * camJ + ray.z * camK;

  // Precompute time-based values
  float timeSpeed = uTime * uSpeed;
  float windX = cos(uDirection) * 0.4;
  float windY = sin(uDirection) * 0.4;
  vec3 camPos = (windX * camI + windY * camJ + 0.1 * camK) * timeSpeed;
  vec3 pos = camPos;

  // Precompute ray reciprocal for strides
  vec3 absRay = max(abs(ray), vec3(0.001));
  vec3 strides = 1.0 / absRay;
  vec3 raySign = step(ray, vec3(0.0));
  vec3 phase = fract(pos) * strides;
  phase = mix(strides - phase, phase, raySign);

  // Precompute for intersection test
  float rayDotCamK = dot(ray, camK);
  float invRayDotCamK = 1.0 / rayDotCamK;
  float invDepthFade = 1.0 / uDepthFade;
  float halfInvResX = 0.5 * invResX;
  vec3 timeAnim = timeSpeed * 0.1 * vec3(7.0, 8.0, 5.0);

  float t = 0.0;
  for (int i = 0; i < 128; i++) {
    if (t >= uFarPlane) break;
    
    vec3 fpos = floor(pos);
    uint cellCoord = coord3(fpos);
    float cellHash = hash3(cellCoord).x;

    if (cellHash < uDensity) {
      vec3 h = hash3(cellCoord);
      
      // Optimized flake position calculation
      vec3 sinArg1 = fpos.yzx * 0.073;
      vec3 sinArg2 = fpos.zxy * 0.27;
      vec3 flakePos = 0.5 - 0.5 * cos(4.0 * sin(sinArg1) + 4.0 * sin(sinArg2) + 2.0 * h + timeAnim);
      flakePos = flakePos * 0.8 + 0.1 + fpos;

      float toIntersection = dot(flakePos - pos, camK) * invRayDotCamK;
      
      if (toIntersection > 0.0) {
        vec3 testPos = pos + ray * toIntersection - flakePos;
        float testX = dot(testPos, camI);
        float testY = dot(testPos, camJ);
        vec2 testUV = abs(vec2(testX, testY));
        
        float depth = dot(flakePos - camPos, camK);
        float flakeSize = max(uFlakeSize, uMinFlakeSize * depth * halfInvResX);
        
        // Avoid branching with step functions where possible
        float dist;
        if (uVariant < 0.5) {
          dist = max(testUV.x, testUV.y);
        } else if (uVariant < 1.5) {
          dist = length(testUV);
        } else {
          float invFlakeSize = 1.0 / flakeSize;
          dist = snowflakeDist(vec2(testX, testY) * invFlakeSize) * flakeSize;
        }

        if (dist < flakeSize) {
          float flakeSizeRatio = uFlakeSize / flakeSize;
          float intensity = exp2(-(t + toIntersection) * invDepthFade) *
                           min(1.0, flakeSizeRatio * flakeSizeRatio) * uBrightness;
          
          vec3 finalColor = uColor;
          if (uRainbow > 0.5) {
             // Color aleatorio basado en el hash de la celda y el tiempo
             float hue = fract(cellHash * 10.0 + uTime * 0.2);
             finalColor = hsv2rgb(vec3(hue, 0.7, 1.0));
          }
          gl_FragColor = vec4(finalColor * pow(vec3(intensity), vec3(uGamma)), 1.0);
          return;
        }
      }
    }

    float nextStep = min(min(phase.x, phase.y), phase.z);
    vec3 sel = step(phase, vec3(nextStep));
    phase = phase - nextStep + strides * sel;
    t += nextStep;
    pos = mix(pos + ray * nextStep, floor(pos + ray * nextStep + 0.5), sel);
  }

  gl_FragColor = vec4(0.0);
}
`;function Cs({color:o="#ffffff",flakeSize:t=.01,minFlakeSize:i=1.25,pixelResolution:r=200,speed:u=1.25,depthFade:h=8,farPlane:C=20,brightness:y=1,gamma:g=.4545,density:R=.3,variant:w="square",direction:L=125,rainbow:b=!1,storm:j=!1,className:T="",style:z={}}){const _=a.useRef(null),M=a.useRef(0),N=a.useRef(!0),U=a.useRef(null),A=a.useRef(null),n=a.useRef(null),I=a.useMemo(()=>w==="round"?1:w==="snowflake"?2:0,[w]),J=a.useMemo(()=>{const P=new Te(o);return new le(P.r,P.g,P.b)},[o]),q=a.useCallback(()=>{n.current&&clearTimeout(n.current),n.current=window.setTimeout(()=>{const P=_.current,K=U.current,E=A.current;if(!P||!K||!E)return;const X=P.offsetWidth,Y=P.offsetHeight;K.setSize(X,Y),E.uniforms.uResolution.value.set(X,Y)},100)},[]);return a.useEffect(()=>{const P=_.current;if(!P)return;const K=new IntersectionObserver(([E])=>{N.current=E.isIntersecting},{threshold:0});return K.observe(P),()=>K.disconnect()},[]),a.useEffect(()=>{const P=_.current;if(!P)return;const K=new at,E=new Tt(-1,1,1,-1,0,1),X=new lt({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.setSize(P.offsetWidth,P.offsetHeight),X.setClearColor(0,0),P.appendChild(X.domElement),U.current=X;const Y=new Qe({vertexShader:ws,fragmentShader:Ss,uniforms:{uTime:{value:0},uResolution:{value:new je(P.offsetWidth,P.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:i},uPixelResolution:{value:r},uSpeed:{value:u},uDepthFade:{value:h},uFarPlane:{value:C},uColor:{value:J.clone()},uBrightness:{value:y},uGamma:{value:g},uDensity:{value:R},uVariant:{value:I},uDirection:{value:L*Math.PI/180},uRainbow:{value:b?1:0}},transparent:!0});A.current=Y;const d=new st(2,2);K.add(new Ze(d,Y)),window.addEventListener("resize",q);const c=performance.now(),l=()=>{M.current=requestAnimationFrame(l),N.current&&(Y.uniforms.uTime.value=(performance.now()-c)*.001,X.render(K,E))};return l(),()=>{cancelAnimationFrame(M.current),window.removeEventListener("resize",q),n.current&&clearTimeout(n.current),P.contains(X.domElement)&&P.removeChild(X.domElement),X.dispose(),d.dispose(),Y.dispose(),U.current=null,A.current=null}},[q]),a.useEffect(()=>{const P=A.current;P&&(P.uniforms.uFlakeSize.value=t,P.uniforms.uMinFlakeSize.value=i,P.uniforms.uPixelResolution.value=r,P.uniforms.uSpeed.value=j?u*4:u,P.uniforms.uDepthFade.value=h,P.uniforms.uFarPlane.value=C,P.uniforms.uBrightness.value=y,P.uniforms.uGamma.value=g,P.uniforms.uDensity.value=R,P.uniforms.uVariant.value=I,P.uniforms.uDirection.value=L*Math.PI/180,P.uniforms.uColor.value.copy(J),P.uniforms.uRainbow.value=b?1:0)},[t,i,r,u,h,C,y,g,R,I,L,J,b,j]),e.jsx("div",{ref:_,className:`pixel-snow-container ${T}`,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",contain:"layout style paint",...z}})}const Fi=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],ii={colors:Fi[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},js=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],ni={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},oi={colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1},si={color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},ri={density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},ai={color1:"#b117f8",color2:"#2c0b2e",speed:20},li={color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,depthFade:3,farPlane:10,gamma:.4545,variant:"snowflake",rainbow:!1,storm:!1},Ye={cyberpunk:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},akira:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"mountainDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16715818,15415358,16715818],rightCars:[14342906,12499683,9410532],sticks:14342906}},golden:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"deepDistortion",length:400,roadWidth:18,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16724527,10694672,11015432],rightCars:[16645616,15982240,14859144],sticks:16645616}},split:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"LongRaceDistortion",length:400,roadWidth:10,islandWidth:5,lanesPerRoad:2,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:70,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16736115,15158624,16715818],rightCars:[10806246,8442324,5489350],sticks:10806246}},highway:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14441248,14459680,14426144],rightCars:[3361783,15066861,12568307],sticks:12970219}}},Rs=({onClose:o,floatingLinesConfig:t,setFloatingLinesConfig:i,lightPillarsConfig:r,setLightPillarsConfig:u,ballpitConfig:h,setBallpitConfig:C,silkConfig:y,setSilkConfig:g,galaxyConfig:R,setGalaxyConfig:w,gradientConfig:L,setGradientConfig:b,pixelSnowConfig:j,setPixelSnowConfig:T,hyperspeedConfig:z,setHyperspeedConfig:_})=>{const{activeBackground:M,floatingLinesConfig:N,setFloatingLinesConfig:U,lightPillarsConfig:A,setLightPillarsConfig:n,ballpitConfig:I,setBallpitConfig:J,silkConfig:q,setSilkConfig:P,galaxyConfig:K,setGalaxyConfig:E,gradientConfig:X,setGradientConfig:Y,pixelSnowConfig:d,setPixelSnowConfig:c,hyperspeedConfig:l,setHyperspeedConfig:p}=Ue(),m=t||N,S=i||U,O=r||A,W=u||n,ce=h||I,V=C||J,oe=y||q,se=g||P,B=R||K,ee=w||E,re=L||X,D=b||Y,ae=j||d,ge=T||c,me=z||l,xe=_||p,F=m||ii,$=(f,pe)=>{S&&S({...F,[f]:pe})},Q=f=>{const pe=F.enabledWaves,Me=pe.includes(f)?pe.filter(jt=>jt!==f):[...pe,f];$("enabledWaves",Me)},ue=(f,pe)=>{const Me=[...F.colors];Me[f]=pe,$("colors",Me)},H=O||ni,te=(f,pe)=>{W?W({...H,[f]:pe}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},ie=ce||oi,he=(f,pe)=>{V&&V({...ie,[f]:pe})},ye=(f,pe)=>{const Me=[...ie.colors];Me[f]=pe,he("colors",Me)},Ae=oe||si,ke=(f,pe)=>{se&&se({...Ae,[f]:pe})},ve=B||ri,be=(f,pe)=>{ee&&ee({...ve,[f]:pe})},Fe=re||ai,it=(f,pe)=>{D&&D({...Fe,[f]:pe})},we=ae||li,_e=(f,pe)=>{ge&&ge({...we,[f]:pe})},De=me||Ye.cyberpunk,St=f=>{xe&&Ye[f]&&xe(Ye[f])},Ve=(f,pe)=>{xe&&xe({...De,[f]:pe})},Ct=()=>{M==="floatinglines"&&S?S(ii):M==="lightpillars"&&W?W(ni):M==="ballpit"&&V?V(oi):M==="silk"&&se?se(si):M==="galaxy"&&ee?ee(ri):M==="gradient"&&D?D(ai):M==="pixelsnow"&&ge?ge(li):M==="hyperspeed"&&xe&&xe(Ye.cyberpunk)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:Ct,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(wn,{})}),e.jsx("button",{onClick:o,className:"close-btn",children:e.jsx(xt,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[M==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:Fi.map(f=>e.jsx("button",{className:"preset-btn",onClick:()=>$("colors",f.colors),style:{background:`linear-gradient(to right, ${f.colors[0]}, ${f.colors[1]}, ${f.colors[2]})`},title:f.name,children:JSON.stringify(F.colors)===JSON.stringify(f.colors)&&e.jsx(vi,{})},f.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:F.colors.map((f,pe)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:f,onChange:Me=>ue(pe,Me.target.value)}),e.jsx("span",{className:"hex-code",children:f})]},pe))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:F.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:F.count,onChange:f=>$("count",parseInt(f.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:F.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:F.distance,onChange:f=>$("distance",parseInt(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Amplitud de Onda ",e.jsx("span",{children:F.amplitude})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:F.amplitude||1,onChange:f=>$("amplitude",parseFloat(f.target.value))}),e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:F.bendRadius})]}),e.jsx("input",{type:"range",min:"5",max:"10",step:"0.1",value:F.bendRadius,onChange:f=>$("bendRadius",parseFloat(f.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:F.bendStrength})]}),e.jsx("input",{type:"range",min:"-7",max:"7",step:"0.1",value:F.bendStrength,onChange:f=>$("bendStrength",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(f=>e.jsx("button",{className:`toggle-btn ${F.enabledWaves.includes(f)?"active":""}`,onClick:()=>Q(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${F.interactive!==!1?"active":""}`,onClick:()=>$("interactive",F.interactive===!1),style:{width:"100%",textAlign:"center"},children:F.interactive!==!1?"Activada (Ratón)":"Desactivada"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${F.rainbow?"active":""}`,onClick:()=>$("rainbow",!F.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"})]})]}),M==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:H.topColor,onChange:f=>te("topColor",f.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:H.bottomColor,onChange:f=>te("bottomColor",f.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:H.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:H.intensity,onChange:f=>te("intensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:H.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:H.rotationSpeed,onChange:f=>te("rotationSpeed",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:H.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:H.pillarWidth,onChange:f=>te("pillarWidth",parseFloat(f.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[H.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:H.pillarRotation,onChange:f=>te("pillarRotation",parseInt(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:H.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:H.pillarHeight,onChange:f=>te("pillarHeight",parseFloat(f.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:H.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:H.noiseIntensity,onChange:f=>te("noiseIntensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:H.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:H.glowAmount,onChange:f=>te("glowAmount",parseFloat(f.target.value))})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"toggles-row",children:js.map(f=>e.jsx("button",{className:`toggle-btn ${H.quality===f.value?"active":""}`,onClick:()=>te("quality",f.value),children:f.label},f.value))})}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${H.interactive!==!1?"active":""}`,onClick:()=>te("interactive",H.interactive===!1),style:{width:"100%",textAlign:"center"},children:H.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),M==="ballpit"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsx("div",{className:"color-pickers",children:ie.colors.map((f,pe)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:f,onChange:Me=>ye(pe,Me.target.value)}),e.jsx("span",{className:"hex-code",children:f})]},pe))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad ",e.jsx("span",{children:ie.count})]}),e.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:ie.count,onChange:f=>he("count",parseInt(f.target.value))}),e.jsxs("label",{children:["Gravedad ",e.jsx("span",{children:ie.gravity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ie.gravity,onChange:f=>he("gravity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Fricción ",e.jsx("span",{children:ie.friction})]}),e.jsx("input",{type:"range",min:"0.8",max:"1",step:"0.001",value:ie.friction,onChange:f=>he("friction",parseFloat(f.target.value))}),e.jsxs("label",{children:["Rebote Pared ",e.jsx("span",{children:ie.wallBounce})]}),e.jsx("input",{type:"range",min:"0",max:"1.5",step:"0.05",value:ie.wallBounce,onChange:f=>he("wallBounce",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${ie.followCursor?"active":""}`,onClick:()=>he("followCursor",!ie.followCursor),style:{width:"100%",textAlign:"center"},children:ie.followCursor?"Seguir Cursor":"Cursor Libre"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Eventos Divertidos"}),e.jsxs("div",{className:"toggles-row",children:[e.jsx("button",{className:`toggle-btn ${ie.enableExplosion?"active":""}`,onClick:()=>he("enableExplosion",!ie.enableExplosion),title:"Haz clic para explotar las bolas",children:"💥 Explosión al Clic"}),e.jsx("button",{className:`toggle-btn ${ie.rainbow?"active":""}`,onClick:()=>he("rainbow",!ie.rainbow),title:"Ciclo de colores automático",children:"🌈 Modo Arcoíris"})]})]})]}),M==="silk"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:Ae.color,onChange:f=>ke("color",f.target.value)}),e.jsx("span",{className:"hex-code",children:Ae.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:Ae.speed})]}),e.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:Ae.speed,onChange:f=>ke("speed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Escala ",e.jsx("span",{children:Ae.scale})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:Ae.scale,onChange:f=>ke("scale",parseFloat(f.target.value))}),e.jsxs("label",{children:["Ruido ",e.jsx("span",{children:Ae.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:Ae.noiseIntensity,onChange:f=>ke("noiseIntensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[Ae.rotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:Ae.rotation,onChange:f=>ke("rotation",parseInt(f.target.value))})]})]}),M==="galaxy"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:ve.density})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:ve.density,onChange:f=>be("density",parseFloat(f.target.value))}),e.jsxs("label",{children:["Intensidad Brillo ",e.jsx("span",{children:ve.glowIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.glowIntensity,onChange:f=>be("glowIntensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Saturación ",e.jsx("span",{children:ve.saturation})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.saturation,onChange:f=>be("saturation",parseFloat(f.target.value))}),e.jsxs("label",{children:["Cambio de Tono (Hue) ",e.jsx("span",{children:ve.hueShift})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:ve.hueShift,onChange:f=>be("hueShift",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad Rotación ",e.jsx("span",{children:ve.rotationSpeed})]}),e.jsx("input",{type:"range",min:"-0.5",max:"0.5",step:"0.01",value:ve.rotationSpeed,onChange:f=>be("rotationSpeed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Velocidad Estrellas ",e.jsx("span",{children:ve.starSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.starSpeed,onChange:f=>be("starSpeed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Velocidad Animación ",e.jsx("span",{children:ve.speed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.speed,onChange:f=>be("speed",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${ve.rainbow?"active":""}`,onClick:()=>be("rainbow",!ve.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${ve.warp?"active":""}`,onClick:()=>be("warp",!ve.warp),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🚀 Velocidad Warp"})]})]}),M==="gradient"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:Fe.color1,onChange:f=>it("color1",f.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:Fe.color2,onChange:f=>it("color2",f.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad (segundos) ",e.jsxs("span",{children:[Fe.speed,"s"]})]}),e.jsx("input",{type:"range",min:"1",max:"60",step:"1",value:Fe.speed,onChange:f=>it("speed",parseInt(f.target.value))})]})]}),M==="pixelsnow"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:we.color,onChange:f=>_e("color",f.target.value)}),e.jsx("span",{className:"hex-code",children:we.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Variante"}),e.jsx("div",{className:"toggles-row",children:["snowflake","square","round"].map(f=>e.jsx("button",{className:`toggle-btn ${we.variant===f?"active":""}`,onClick:()=>_e("variant",f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:we.speed})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:we.speed,onChange:f=>_e("speed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:we.density})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:we.density,onChange:f=>_e("density",parseFloat(f.target.value))}),e.jsxs("label",{children:["Dirección ",e.jsxs("span",{children:[we.direction,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:we.direction,onChange:f=>_e("direction",parseInt(f.target.value))}),e.jsxs("label",{children:["Tamaño Copo ",e.jsx("span",{children:we.flakeSize})]}),e.jsx("input",{type:"range",min:"0.005",max:"0.05",step:"0.001",value:we.flakeSize,onChange:f=>_e("flakeSize",parseFloat(f.target.value))}),e.jsxs("label",{children:["Brillo ",e.jsx("span",{children:we.brightness})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:we.brightness,onChange:f=>_e("brightness",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${we.rainbow?"active":""}`,onClick:()=>_e("rainbow",!we.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${we.storm?"active":""}`,onClick:()=>_e("storm",!we.storm),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🌪️ Modo Tormenta"})]})]}),M==="hyperspeed"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Estilo Visual"}),e.jsx("div",{className:"toggles-row",style:{flexWrap:"wrap"},children:Object.keys(Ye).map(f=>e.jsx("button",{className:`toggle-btn ${JSON.stringify(De.colors)===JSON.stringify(Ye[f].colors)?"active":""}`,onClick:()=>St(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Geometría"}),e.jsxs("label",{children:["Ancho Carretera ",e.jsx("span",{children:De.roadWidth})]}),e.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:De.roadWidth,onChange:f=>Ve("roadWidth",parseFloat(f.target.value))}),e.jsxs("label",{children:["Ancho Isla ",e.jsx("span",{children:De.islandWidth})]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:De.islandWidth,onChange:f=>Ve("islandWidth",parseFloat(f.target.value))}),e.jsxs("label",{children:["Carriles ",e.jsx("span",{children:De.lanesPerRoad})]}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:De.lanesPerRoad,onChange:f=>Ve("lanesPerRoad",parseInt(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Distorsión"}),e.jsxs("select",{value:De.distortion,onChange:f=>Ve("distortion",f.target.value),style:{width:"100%",padding:"8px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",color:"white",border:"1px solid rgba(255, 255, 255, 0.2)",marginTop:"5px",cursor:"pointer"},children:[e.jsx("option",{style:{color:"black"},value:"turbulentDistortion",children:"Turbulent"}),e.jsx("option",{style:{color:"black"},value:"deepDistortion",children:"Deep"}),e.jsx("option",{style:{color:"black"},value:"mountainDistortion",children:"Mountain"}),e.jsx("option",{style:{color:"black"},value:"xyDistortion",children:"XY"}),e.jsx("option",{style:{color:"black"},value:"LongRaceDistortion",children:"Long Race"})]})]})]})]})]})},As=({effectOptions:o=Ye.cyberpunk})=>{const t=a.useRef(null),i=a.useRef(null);return a.useEffect(()=>{if(i.current){i.current.dispose();const d=document.getElementById("lights");if(d)for(;d.firstChild;)d.removeChild(d.firstChild)}const r={uFreq:{value:new le(3,6,10)},uAmp:{value:new le(30,30,20)}},u={uFreq:{value:new je(5,2)},uAmp:{value:new je(25,15)}},h={uFreq:{value:new je(2,3)},uAmp:{value:new je(35,10)}},C={uFreq:{value:new Gt(4,8,8,1)},uAmp:{value:new Gt(25,5,10,10)}},y={uFreq:{value:new je(4,8)},uAmp:{value:new je(10,20)},uPowY:{value:new je(20,2)}};let g=d=>Math.sin(d)*.5+.5;const R={mountainDistortion:{uniforms:r,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(d,c)=>{let l=.02,p=r.uFreq.value,m=r.uAmp.value,S=new le(Math.cos(d*Math.PI*p.x+c)*m.x-Math.cos(l*Math.PI*p.x+c)*m.x,g(d*Math.PI*p.y+c)*m.y-g(l*Math.PI*p.y+c)*m.y,g(d*Math.PI*p.z+c)*m.z-g(l*Math.PI*p.z+c)*m.z),O=new le(2,2,2),W=new le(0,0,-5);return S.multiply(O).add(W)}},xyDistortion:{uniforms:u,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(d,c)=>{let l=.02,p=u.uFreq.value,m=u.uAmp.value,S=new le(Math.cos(d*Math.PI*p.x+c)*m.x-Math.cos(l*Math.PI*p.x+c)*m.x,Math.sin(d*Math.PI*p.y+c+Math.PI/2)*m.y-Math.sin(l*Math.PI*p.y+c+Math.PI/2)*m.y,0),O=new le(2,.4,1),W=new le(0,0,-3);return S.multiply(O).add(W)}},LongRaceDistortion:{uniforms:h,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(d,c)=>{let l=.0125,p=h.uFreq.value,m=h.uAmp.value,S=new le(Math.sin(d*Math.PI*p.x+c)*m.x-Math.sin(l*Math.PI*p.x+c)*m.x,Math.sin(d*Math.PI*p.y+c)*m.y-Math.sin(l*Math.PI*p.y+c)*m.y,0),O=new le(1,1,0),W=new le(0,0,-5);return S.multiply(O).add(W)}},turbulentDistortion:{uniforms:C,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(d,c)=>{const l=C.uFreq.value,p=C.uAmp.value,m=V=>Math.cos(Math.PI*V*l.x+c)*p.x+Math.pow(Math.cos(Math.PI*V*l.y+c*(l.y/l.x)),2)*p.y,S=V=>-g(Math.PI*V*l.z+c)*p.z-Math.pow(g(Math.PI*V*l.w+c/(l.z/l.w)),5)*p.w;let O=new le(m(d)-m(d+.007),S(d)-S(d+.007),0),W=new le(-2,-5,0),ce=new le(0,0,-10);return O.multiply(W).add(ce)}},turbulentDistortionStill:{uniforms:C,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:y,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:y,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(d,c)=>{const l=y.uFreq.value,p=y.uAmp.value,m=y.uPowY.value,S=oe=>Math.sin(oe*Math.PI*l.x+c)*p.x,O=oe=>Math.pow(oe*m.x,m.y)+Math.sin(oe*Math.PI*l.y+c)*p.y;let W=new le(S(d)-S(d+.01),O(d)-O(d+.01),0),ce=new le(-2,-4,0),V=new le(0,0,-10);return W.multiply(ce).add(V)}}};class w{constructor(c,l={}){this.options=l,this.options.distortion==null&&(this.options.distortion={uniforms:L,getDistortion:b}),this.container=c,this.renderer=new lt({antialias:!1,alpha:!0}),this.renderer.setSize(c.offsetWidth,c.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new Sn(this.renderer),c.append(this.renderer.domElement),this.camera=new xi(l.fov,c.offsetWidth/c.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new at,this.scene.background=null;let p=new Cn(l.colors.background,l.length*.2,l.length*500);this.scene.fog=p,this.fogUniforms={fogColor:{value:p.color},fogNear:{value:p.near},fogFar:{value:p.far}},this.clock=new _t,this.assets={},this.disposed=!1,this.road=new I(this,l),this.leftCarLights=new _(this,l,l.colors.leftCars,l.movingAwaySpeed,new je(0,1-l.carLightsFade)),this.rightCarLights=new _(this,l,l.colors.rightCars,l.movingCloserSpeed,new je(1,0+l.carLightsFade)),this.leftSticks=new U(this,l),this.fovTarget=l.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const c=this.container.offsetWidth,l=this.container.offsetHeight;this.renderer.setSize(c,l),this.camera.aspect=c/l,this.camera.updateProjectionMatrix(),this.composer.setSize(c,l)}initPasses(){this.renderPass=new jn(this.scene,this.camera),this.bloomPass=new qt(this.camera,new Rn({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const c=new qt(this.camera,new nt({preset:An.MEDIUM,searchImage:nt.searchImageDataURL,areaImage:nt.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,c.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(c)}loadAssets(){const c=this.assets;return new Promise(l=>{const p=new Ln(l),m=new Image,S=new Image;c.smaa={},m.addEventListener("load",function(){c.smaa.search=this,p.itemEnd("smaa-search")}),S.addEventListener("load",function(){c.smaa.area=this,p.itemEnd("smaa-area")}),p.itemStart("smaa-search"),p.itemStart("smaa-area"),m.src=nt.searchImageDataURL,S.src=nt.areaImageDataURL})}init(){this.initPasses();const c=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-c.roadWidth/2-c.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(c.roadWidth/2+c.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(c.roadWidth+c.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(c){this.options.onSpeedUp&&this.options.onSpeedUp(c),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(c){this.options.onSlowDown&&this.options.onSlowDown(c),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(c){this.options.onSpeedUp&&this.options.onSpeedUp(c),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(c){this.options.onSlowDown&&this.options.onSlowDown(c),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(c){c.preventDefault()}update(c){let l=Math.exp(-(-60*Math.log2(.9))*c);this.speedUp+=z(this.speedUp,this.speedUpTarget,l,1e-5),this.timeOffset+=this.speedUp*c;let p=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(p),this.leftCarLights.update(p),this.leftSticks.update(p),this.road.update(p);let m=!1,S=z(this.camera.fov,this.fovTarget,l);if(S!==0&&(this.camera.fov+=S*c*6,m=!0),this.options.distortion.getJS){const O=this.options.distortion.getJS(.025,p);this.camera.lookAt(new le(this.camera.position.x+O.x,this.camera.position.y+O.y,this.camera.position.z+O.z)),m=!0}m&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(c){this.composer.render(c)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(c,l,p){this.composer.setSize(c,l,p)}tick(){if(this.disposed||!this)return;if(Y(this.renderer,this.setSize)){const l=this.renderer.domElement;this.camera.aspect=l.clientWidth/l.clientHeight,this.camera.updateProjectionMatrix()}const c=this.clock.getDelta();this.render(c),this.update(c),requestAnimationFrame(this.tick)}}const L={uDistortionX:{value:new je(80,3)},uDistortionY:{value:new je(-40,2.5)}},b=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,j=d=>Array.isArray(d)?Math.random()*(d[1]-d[0])+d[0]:Math.random()*d,T=d=>Array.isArray(d)?d[Math.floor(Math.random()*d.length)]:d;function z(d,c,l=.1,p=.001){let m=(c-d)*l;return Math.abs(m)<p&&(m=c-d),m}class _{constructor(c,l,p,m,S){this.webgl=c,this.options=l,this.colors=p,this.speed=m,this.fade=S}init(){const c=this.options;let l=new Pn(new le(0,0,0),new le(0,0,-1)),p=new kn(l,40,1,8,!1),m=new Xt().copy(p);m.instanceCount=c.lightPairsPerRoadWay*2;let S=c.roadWidth/c.lanesPerRoad,O=[],W=[],ce=[],V=this.colors;Array.isArray(V)?V=V.map(B=>new Te(B)):V=new Te(V);for(let B=0;B<c.lightPairsPerRoadWay;B++){let ee=j(c.carLightsRadius),re=j(c.carLightsLength),D=j(this.speed),ge=B%c.lanesPerRoad*S-c.roadWidth/2+S/2,me=j(c.carWidthPercentage)*S,xe=j(c.carShiftX)*S;ge+=xe;let F=j(c.carFloorSeparation)+ee*1.3,$=-j(c.length);O.push(ge-me/2),O.push(F),O.push($),O.push(ge+me/2),O.push(F),O.push($),W.push(ee),W.push(re),W.push(D),W.push(ee),W.push(re),W.push(D);let Q=T(V);ce.push(Q.r),ce.push(Q.g),ce.push(Q.b),ce.push(Q.r),ce.push(Q.g),ce.push(Q.b)}m.setAttribute("aOffset",new $e(new Float32Array(O),3,!1)),m.setAttribute("aMetrics",new $e(new Float32Array(W),3,!1)),m.setAttribute("aColor",new $e(new Float32Array(ce),3,!1));let oe=new Qe({fragmentShader:M,vertexShader:N,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:c.length},uFade:{value:this.fade}},this.webgl.fogUniforms,c.distortion.uniforms)});oe.onBeforeCompile=B=>{B.vertexShader=B.vertexShader.replace("#include <getDistortion_vertex>",c.distortion.getDistortion)};let se=new Ze(m,oe);se.frustumCulled=!1,this.webgl.scene.add(se),this.mesh=se}update(c){this.mesh.material.uniforms.uTime.value=c}}const M=`
      #define USE_FOG;
      ${Ie.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${Ie.fog_fragment}
      }
    `,N=`
      #define USE_FOG;
      ${Ie.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${Ie.fog_vertex}
      }
    `;class U{constructor(c,l){this.webgl=c,this.options=l}init(){const c=this.options,l=new st(1,1);let p=new Xt().copy(l),m=c.totalSideLightSticks;p.instanceCount=m;let S=c.length/(m-1);const O=[],W=[],ce=[];let V=c.colors.sticks;Array.isArray(V)?V=V.map(B=>new Te(B)):V=new Te(V);for(let B=0;B<m;B++){let ee=j(c.lightStickWidth),re=j(c.lightStickHeight);O.push((B-1)*S*2+S*Math.random());let D=T(V);W.push(D.r),W.push(D.g),W.push(D.b),ce.push(ee),ce.push(re)}p.setAttribute("aOffset",new $e(new Float32Array(O),1,!1)),p.setAttribute("aColor",new $e(new Float32Array(W),3,!1)),p.setAttribute("aMetrics",new $e(new Float32Array(ce),2,!1));const oe=new Qe({fragmentShader:n,vertexShader:A,side:Wt,uniforms:Object.assign({uTravelLength:{value:c.length},uTime:{value:0}},this.webgl.fogUniforms,c.distortion.uniforms)});oe.onBeforeCompile=B=>{B.vertexShader=B.vertexShader.replace("#include <getDistortion_vertex>",c.distortion.getDistortion)};const se=new Ze(p,oe);se.frustumCulled=!1,this.webgl.scene.add(se),this.mesh=se}update(c){this.mesh.material.uniforms.uTime.value=c}}const A=`
      #define USE_FOG;
      ${Ie.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${Ie.fog_vertex}
      }
    `,n=`
      #define USE_FOG;
      ${Ie.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${Ie.fog_fragment}
      }
    `;class I{constructor(c,l){this.webgl=c,this.options=l,this.uTime={value:0}}createPlane(c,l,p){const m=this.options;let S=100;const O=new st(p?m.roadWidth:m.islandWidth,m.length,20,S);let W={uTravelLength:{value:m.length},uColor:{value:new Te(p?m.colors.roadColor:m.colors.islandColor)},uTime:this.uTime};p&&(W=Object.assign(W,{uLanes:{value:m.lanesPerRoad},uBrokenLinesColor:{value:new Te(m.colors.brokenLines)},uShoulderLinesColor:{value:new Te(m.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:m.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:m.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:m.brokenLinesWidthPercentage}}));const ce=new Qe({fragmentShader:p?E:q,vertexShader:X,side:Wt,uniforms:Object.assign(W,this.webgl.fogUniforms,m.distortion.uniforms)});ce.onBeforeCompile=oe=>{oe.vertexShader=oe.vertexShader.replace("#include <getDistortion_vertex>",m.distortion.getDistortion)};const V=new Ze(O,ce);return V.rotation.x=-Math.PI/2,V.position.z=-m.length/2,V.position.x+=(this.options.islandWidth/2+m.roadWidth/2)*c,this.webgl.scene.add(V),V}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(c){this.uTime.value=c}}const J=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${Ie.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${Ie.fog_fragment}
      }
    `,q=J.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),E=J.replace("#include <roadMarkings_fragment>",`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `).replace("#include <roadMarkings_vars>",`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `),X=`
      #define USE_FOG;
      uniform float uTime;
      ${Ie.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${Ie.fog_vertex}
      }
    `;function Y(d,c){const l=d.domElement,p=l.clientWidth,m=l.clientHeight,S=l.width!==p||l.height!==m;return S&&c(p,m,!1),S}return(function(){const d=document.getElementById("lights"),c={...o};c.distortion=R[c.distortion];const l=new w(d,c);i.current=l,l.loadAssets().then(l.init)})(),()=>{i.current&&i.current.dispose()}},[o]),e.jsx("div",{id:"lights",ref:t})},Ls=({floatingLinesConfig:o,lightPillarsConfig:t,ballpitConfig:i,silkConfig:r,galaxyConfig:u,gradientConfig:h,pixelSnowConfig:C,hyperspeedConfig:y})=>{const{activeBackground:g,floatingLinesConfig:R,lightPillarsConfig:w,ballpitConfig:L,silkConfig:b,galaxyConfig:j,gradientConfig:T,pixelSnowConfig:z,hyperspeedConfig:_}=Ue(),M=o||R,N=t||w,U=i||L,A=r||b,n=u||j,I=h||T,J=C||z,q=y||_,P=M||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},K=N||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},E=U||{colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1,rainbow:!1},X=A||{color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},Y=n||{density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},d=I||{color1:"#b117f8",color2:"#2c0b2e",speed:20},c=J||{color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,variant:"snowflake",rainbow:!1,storm:!1};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(Pe,{mode:"wait",children:[g==="gradient"&&e.jsx(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(ts,{color1:d.color1,color2:d.color2,speed:d.speed})},"gradient"),g==="galaxy"&&e.jsx(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(ss,{density:Y.density,glowIntensity:Y.glowIntensity,saturation:Y.saturation,hueShift:Y.hueShift,twinkleIntensity:Y.twinkleIntensity,rotationSpeed:Y.rotationSpeed,starSpeed:Y.starSpeed,speed:Y.speed,rainbow:Y.rainbow,warp:Y.warp})},"galaxy"),g==="silk"&&e.jsx(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(Si,{speed:X.speed,scale:X.scale,color:X.color,noiseIntensity:X.noiseIntensity,rotation:X.rotation})},"silk"),g==="ballpit"&&e.jsx(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:e.jsx(gs,{count:E.count,gravity:E.gravity,friction:E.friction,wallBounce:E.wallBounce,followCursor:E.followCursor,colors:E.colors,enableExplosion:E.enableExplosion,rainbow:E.rainbow})},"ballpit"),g==="floatinglines"&&e.jsx(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(ys,{linesGradient:P.colors,lineCount:P.count,lineDistance:P.distance,animationSpeed:.5,bendRadius:P.bendRadius,bendStrength:P.bendStrength,enabledWaves:P.enabledWaves,interactive:P.interactive??!1,parallax:P.parallax??!1,amplitude:P.amplitude??1,rainbow:P.rainbow})},"floatinglines"),g==="lightpillars"&&e.jsx(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(bs,{topColor:K.topColor,bottomColor:K.bottomColor,intensity:K.intensity,rotationSpeed:K.rotationSpeed,glowAmount:K.glowAmount??.002,pillarWidth:K.pillarWidth,pillarHeight:K.pillarHeight,noiseIntensity:K.noiseIntensity,pillarRotation:K.pillarRotation,interactive:K.interactive??!0,quality:K.quality??"high"})},"lightpillars"),g==="pixelsnow"&&e.jsx(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Cs,{color:c.color,flakeSize:c.flakeSize,minFlakeSize:c.minFlakeSize,pixelResolution:c.pixelResolution,speed:c.speed,density:c.density,direction:c.direction,brightness:c.brightness,variant:c.variant,rainbow:c.rainbow,storm:c.storm})},"pixelsnow"),g==="hyperspeed"&&e.jsx(ne.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(As,{effectOptions:q})},"hyperspeed")]})})},Ps=({onItemClick:o,isOpen:t,onToggle:i,position:r="left",colors:u=["#B19EEF","#5227FF"],items:h=[],socialItems:C=[],displaySocials:y=!0,displayItemNumbering:g=!0,className:R,logoUrl:w=null,menuButtonColor:L="#fff",openMenuButtonColor:b="#000",accentColor:j="#5227FF",changeMenuColorOnOpen:T=!0,isFixed:z=!1,closeOnClickAway:_=!0,onMenuOpen:M,onMenuClose:N})=>{const[U,A]=a.useState(!1),n=typeof t=="boolean",I=n?t:U,J=a.useRef(!1),q=a.useRef(null),P=a.useRef(null),K=a.useRef([]),E=a.useRef(null),X=a.useRef(null),Y=a.useRef(null),d=a.useRef(null),c=a.useRef(null),[l,p]=a.useState(["Menu","Close"]),m=a.useRef(null),S=a.useRef(null),O=a.useRef(null),W=a.useRef(null),ce=a.useRef(null),V=a.useRef(null),oe=a.useRef(!1),se=a.useRef(null);a.useLayoutEffect(()=>{const F=G.context(()=>{const $=q.current,Q=P.current,ue=E.current,H=X.current,te=Y.current,ie=d.current;if(!$||!ue||!H||!te||!ie)return;let he=[];Q&&(he=Array.from(Q.querySelectorAll(".sm-prelayer"))),K.current=he;const ye=r==="left"?-100:100;G.set([$,...he],{xPercent:ye}),G.set(ue,{transformOrigin:"50% 50%",rotate:0}),G.set(H,{transformOrigin:"50% 50%",rotate:90}),G.set(te,{rotate:0,transformOrigin:"50% 50%"}),G.set(ie,{yPercent:0}),V.current&&G.set(V.current,{color:L})});return()=>F.revert()},[L,r]);const B=a.useCallback(()=>{const F=q.current,$=K.current;if(!F)return null;m.current?.kill(),S.current&&(S.current.kill(),S.current=null),se.current?.kill();const Q=Array.from(F.querySelectorAll(".sm-panel-itemLabel")),ue=Array.from(F.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),H=F.querySelector(".sm-socials-title"),te=Array.from(F.querySelectorAll(".sm-socials-link")),ie=$.map(be=>({el:be,start:Number(G.getProperty(be,"xPercent"))})),he=Number(G.getProperty(F,"xPercent"));Q.length&&G.set(Q,{yPercent:140,rotate:10}),ue.length&&G.set(ue,{"--sm-num-opacity":0}),H&&G.set(H,{opacity:0}),te.length&&G.set(te,{y:25,opacity:0});const ye=G.timeline({paused:!0});ie.forEach((be,Fe)=>{ye.fromTo(be.el,{xPercent:be.start},{xPercent:0,duration:.8,ease:"power4.out"},Fe*.07)});const ke=(ie.length?(ie.length-1)*.07:0)+(ie.length?.08:0),ve=1;if(ye.fromTo(F,{xPercent:he},{xPercent:0,duration:ve,ease:"power4.out"},ke),Q.length){const Fe=ke+ve*.15;ye.to(Q,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},Fe),ue.length&&ye.to(ue,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},Fe+.1)}if(H||te.length){const be=ke+ve*.4;H&&ye.to(H,{opacity:1,duration:.5,ease:"power2.out"},be),te.length&&ye.to(te,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{G.set(te,{clearProps:"opacity"})}},be+.04)}return m.current=ye,ye},[]),ee=a.useCallback(()=>{if(oe.current)return;oe.current=!0;const F=B();F?(F.eventCallback("onComplete",()=>{oe.current=!1}),F.play(0)):oe.current=!1},[B]),re=a.useCallback(()=>{m.current?.kill(),m.current=null,se.current?.kill();const F=q.current,$=K.current;if(!F)return;const Q=[...$,F];S.current?.kill();const ue=r==="left"?-100:100;S.current=G.to(Q,{xPercent:ue,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const H=Array.from(F.querySelectorAll(".sm-panel-itemLabel"));H.length&&G.set(H,{yPercent:140,rotate:10});const te=Array.from(F.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));te.length&&G.set(te,{"--sm-num-opacity":0});const ie=F.querySelector(".sm-socials-title"),he=Array.from(F.querySelectorAll(".sm-socials-link"));ie&&G.set(ie,{opacity:0}),he.length&&G.set(he,{y:25,opacity:0}),oe.current=!1}})},[r]),D=a.useCallback(F=>{const $=Y.current;$&&(O.current?.kill(),F?O.current=G.to($,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):O.current=G.to($,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),ae=a.useCallback(F=>{const $=V.current;if($)if(ce.current?.kill(),T){const Q=F?b:L;ce.current=G.to($,{color:Q,delay:.18,duration:.3,ease:"power2.out"})}else G.set($,{color:L})},[b,L,T]);gt.useEffect(()=>{if(V.current)if(T){const F=J.current?b:L;G.set(V.current,{color:F})}else G.set(V.current,{color:L})},[T,L,b]);const ge=a.useCallback(F=>{const $=d.current;if(!$)return;W.current?.kill();const Q=F?"Menu":"Close",ue=F?"Close":"Menu",H=3,te=[Q];let ie=Q;for(let Ae=0;Ae<H;Ae++)ie=ie==="Menu"?"Close":"Menu",te.push(ie);ie!==ue&&te.push(ue),te.push(ue),p(te),G.set($,{yPercent:0});const he=te.length,ye=(he-1)/he*100;W.current=G.to($,{yPercent:-ye,duration:.5+he*.07,ease:"power4.out"})},[]),me=a.useCallback(()=>{if(n)i&&i(!I);else{const F=!J.current;J.current=F,A(F),F?(M?.(),ee()):(N?.(),re()),D(F),ae(F),ge(F)}},[n,t,i,I,ee,re,D,ae,ge,M,N]);gt.useEffect(()=>{n&&(J.current=t,t?(M?.(),ee()):(N?.(),re()),D(t),ae(t),ge(t))},[t,n,ee,re,D,ae,ge,M,N]);const xe=a.useCallback(()=>{n?I&&i&&i(!1):J.current&&(J.current=!1,A(!1),N?.(),re(),D(!1),ae(!1),ge(!1))},[n,I,i,re,D,ae,ge,N]);return e.jsxs("div",{className:(R?R+" ":"")+"staggered-menu-wrapper"+(z?" fixed-wrapper":""),style:j?{"--sm-accent":j}:void 0,"data-position":r,"data-open":I||void 0,children:[I&&_&&e.jsx("div",{className:"sm-backdrop",onClick:()=>xe(),style:{position:"absolute",inset:0,zIndex:5,pointerEvents:"auto"},"aria-hidden":"true"}),e.jsx("div",{ref:P,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let $=[...u&&u.length?u.slice(0,4):["#1e1e22","#35353c"]];if($.length>=3){const Q=Math.floor($.length/2);$.splice(Q,1)}return $.map((Q,ue)=>e.jsx("div",{className:"sm-prelayer",style:{background:Q}},ue))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:w?e.jsx("img",{src:w,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:V,className:"sm-toggle","aria-label":I?"Close menu":"Open menu","aria-expanded":I,"aria-controls":"staggered-menu-panel",onClick:me,type:"button",children:[e.jsx("span",{ref:c,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:d,className:"sm-toggle-textInner",children:l.map((F,$)=>e.jsx("span",{className:"sm-toggle-line",children:F},$))})}),e.jsxs("span",{ref:Y,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:E,className:"sm-icon-line"}),e.jsx("span",{ref:X,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:q,className:"staggered-menu-panel","aria-hidden":!I,children:e.jsx("div",{className:"sm-panel-inner",children:e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":g||void 0,children:h&&h.length?h.map((F,$)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:Q=>{Q.preventDefault(),o&&o(F.id)},"aria-label":F.ariaLabel,"data-index":$+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:F.label})})},F.label+$)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})})})})]})};function ks({children:o,className:t="",onClick:i,mouseX:r,spring:u,distance:h,magnification:C,baseItemSize:y}){const g=a.useRef(null),R=He(0),w=et(r,j=>{if(!g.current)return 1/0;const T=g.current.getBoundingClientRect(),z=T.x+T.width/2;return Math.abs(j-z)}),L=et(w,[0,h],[C,y]),b=tt(L,u);return e.jsx(ne.div,{ref:g,style:{width:b,height:b,minWidth:b,minHeight:b},onHoverStart:()=>R.set(1),onHoverEnd:()=>R.set(0),onClick:i,className:`dock-item ${t}`,"aria-haspopup":"true",children:a.Children.map(o,j=>a.cloneElement(j,{isHovered:R}))})}function Es({children:o,className:t="",...i}){const{isHovered:r}=i,[u,h]=a.useState(!1);return a.useEffect(()=>{const C=r.on("change",y=>{h(y===1)});return()=>C()},[r]),e.jsx(Pe,{children:u&&e.jsx(ne.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:o})})}function _s({children:o,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:o})}function Ts({items:o,className:t="",spring:i={mass:.1,stiffness:300,damping:20},magnification:r=70,distance:u=200,panelHeight:h=68,dockHeight:C=256,baseItemSize:y=50}){const g=He(1/0),R=He(0),w=a.useMemo(()=>Math.max(C,r+r/2+4),[r,C]),L=et(R,[0,1],[h,w]),b=tt(L,i);return e.jsx(ne.div,{style:{height:b,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(ne.div,{onMouseMove:({pageX:j})=>{R.set(1),g.set(j)},onMouseLeave:()=>{R.set(0),g.set(1/0)},className:`dock-panel ${t}`,style:{height:h},role:"toolbar","aria-label":"Application dock",children:o.map((j,T)=>e.jsxs(ks,{onClick:j.onClick,className:j.className,mouseX:g,spring:i,distance:u,magnification:r,baseItemSize:y,children:[e.jsx(_s,{children:j.icon}),e.jsx(Es,{children:j.label})]},T))})})}const Fs=()=>{const{activeTrail:o}=Ue(),t=He(-100),i=He(-100),r={damping:25,stiffness:70,mass:1},u=tt(t,r),h=tt(i,r);a.useEffect(()=>{const y=g=>{t.set(g.clientX),i.set(g.clientY)};return window.addEventListener("mousemove",y),()=>window.removeEventListener("mousemove",y)},[t,i]);const C={"apple-cat":Li,"jump-cat":Pi,"rolling-cat":ki,duck:Ei,pompom:_i,"skeleton-run":Ti,ghost:null};return!o||o==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:C[o]?e.jsx(ne.img,{src:C[o],alt:"trail",style:{x:u,y:h,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):o==="ghost"?e.jsx(ne.div,{style:{x:u,y:h,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},ci=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],Ms=({progress:o})=>{const[t,i]=a.useState(0);return a.useEffect(()=>{const r=setInterval(()=>{i(u=>(u+1)%ci.length)},1500);return()=>clearInterval(r)},[]),e.jsxs(ne.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[o,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(ne.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${o}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(ne.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:ci[t]},t)})]})]})},Is=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,Ds=Object.freeze(Object.defineProperty({__proto__:null,default:Is},Symbol.toStringTag,{value:"Module"})),zs=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,Ns=Object.freeze(Object.defineProperty({__proto__:null,default:zs},Symbol.toStringTag,{value:"Module"})),Us=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,Os=Object.freeze(Object.defineProperty({__proto__:null,default:Us},Symbol.toStringTag,{value:"Module"})),Bs=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,Gs=Object.freeze(Object.defineProperty({__proto__:null,default:Bs},Symbol.toStringTag,{value:"Module"})),qs=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,Ws=Object.freeze(Object.defineProperty({__proto__:null,default:qs},Symbol.toStringTag,{value:"Module"})),Xs=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,Ys=Object.freeze(Object.defineProperty({__proto__:null,default:Xs},Symbol.toStringTag,{value:"Module"})),Hs=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,Vs=Object.freeze(Object.defineProperty({__proto__:null,default:Hs},Symbol.toStringTag,{value:"Module"})),$s=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,Js=Object.freeze(Object.defineProperty({__proto__:null,default:$s},Symbol.toStringTag,{value:"Module"})),Ks=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,Qs=Object.freeze(Object.defineProperty({__proto__:null,default:Ks},Symbol.toStringTag,{value:"Module"})),ui=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":Ds,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":Ns,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":Os,"../../assets/songs/La cena - Las Petunias.mp3":Gs,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":Ws,"../../assets/songs/Tek It - Cafuné.mp3":Ys,"../../assets/songs/You and I - d4vd .mp3":Vs,"../../assets/songs/gourmet - rickyedit.mp3":Js,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":Qs}),ot=Object.keys(ui).map(o=>({title:o.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,r=>r.toUpperCase()),artist:"Only U Playlist",src:ui[o].default}));ot.length===0&&ot.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const Zs=.1,er=({visible:o,onClose:t})=>{const i=a.useRef(null),r=a.useRef(null),[u,h]=a.useState(!1),[C,y]=a.useState(0),[g,R]=a.useState(.3),[w,L]=a.useState(!1),[b,j]=a.useState(!1),[T,z]=a.useState(!1),[_,M]=a.useState(0),[N,U]=a.useState(0),A=ot[C];a.useEffect(()=>{i.current&&(i.current.volume=w?0:Math.pow(g,2)*Zs)},[g,w]),a.useEffect(()=>{u&&i.current&&i.current.play().catch(E=>console.log("Autoplay blocked",E))},[C]),a.useEffect(()=>{o||(j(!1),z(!1))},[o]),a.useEffect(()=>{const E=X=>{o&&(r.current&&r.current.contains(X.target)||X.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[o,t]);const n=()=>{i.current&&(M(i.current.currentTime),U(i.current.duration||0))},I=E=>{const X=parseFloat(E.target.value);M(X),i.current&&(i.current.currentTime=X)},J=()=>{u?i.current.pause():i.current.play(),h(!u)},q=()=>{y(E=>(E+1)%ot.length)},P=E=>{y(E),h(!0),z(!1)},K=E=>{if(!E||isNaN(E))return"0:00";const X=Math.floor(E/60),Y=Math.floor(E%60);return`${X}:${Y<10?"0":""}${Y}`};return e.jsxs(ne.div,{ref:r,className:"music-player-container",initial:"hidden",animate:o?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:i,src:A.src,onEnded:q,onTimeUpdate:n,onLoadedMetadata:n,preload:"auto"}),e.jsx(Pe,{children:T&&e.jsx(ne.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:ot.map((E,X)=>e.jsxs("div",{className:`playlist-item ${X===C?"active":""}`,onClick:()=>P(X),children:[X+1,". ",E.title]},X))})}),e.jsx("div",{className:"compact-info",onClick:()=>z(!T),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:A.title}),e.jsx(En,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:J,children:u?e.jsx(_n,{size:16}):e.jsx(Tn,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:N,value:_,onChange:I,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[K(_)," / ",K(N)]})]}),e.jsx("button",{className:"icon-btn",onClick:q,children:e.jsx(Fn,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${b?"active":""}`,onClick:()=>j(!b),children:w||g===0?e.jsx(Mn,{size:18}):e.jsx(yi,{size:18})}),e.jsx(Pe,{children:b&&e.jsx(ne.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:w?0:g,onChange:E=>R(parseFloat(E.target.value))})})})]})]})]})},tr=({goldShopEnabled:o,setGoldShopEnabled:t,onTogglePrestige:i})=>{const[r,u]=a.useState(!1),[h,C]=a.useState(!1),[y,g]=a.useState(!1),R=a.useRef(null),{gameVolume:w,setGameVolume:L,resetProgress:b,achievements:j,ownedItems:T,activeCursor:z}=Ue(),_=j.includes("prestige"),M=j.includes("collector"),N=z==="cursor_prestige";a.useEffect(()=>{const A=n=>{R.current&&!R.current.contains(n.target)&&u(!1)};return r&&document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[r]);const U=()=>{window.confirm("¿Estás seguro de que quieres borrar todo tu progreso (monedas y compras)?")&&(b(),u(!1))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"settings-container",ref:R,children:[e.jsx("button",{className:`settings-btn ${r?"active":""}`,onClick:()=>u(!r),"aria-label":"Ajustes",children:e.jsx(In,{size:20})}),e.jsx(Pe,{children:r&&e.jsxs(ne.div,{className:"settings-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{style:{marginBottom:"15px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(di,{label:"Cursor Prestigio",isActive:N,isLocked:!_,onToggle:()=>i(!N),color:"#f700ff"}),e.jsx(di,{label:"Tienda Dorada",isActive:o,isLocked:!M,onToggle:()=>t(!o),color:"#ffd700"})]}),e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"label",children:[e.jsx(yi,{})," ",e.jsx("span",{children:"Sonido Juego"})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:w,onChange:A=>L(parseFloat(A.target.value))})]}),e.jsx("div",{className:"divider"}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{g(!0),u(!1)},children:[e.jsx(vt,{})," Logros"]}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{C(!0),u(!1)},children:[e.jsx(Dn,{})," Documentación"]}),e.jsxs("button",{className:"setting-action-btn danger",onClick:U,children:[e.jsx(zn,{})," Resetear Progreso"]})]})})]}),e.jsx(Pe,{children:h&&e.jsx("div",{className:"doc-overlay",onClick:()=>C(!1),children:e.jsxs(ne.div,{className:"doc-modal",onClick:A=>A.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>C(!1),children:e.jsx(xt,{size:24})}),e.jsx("h2",{children:"Mecánicas del Juego"}),e.jsxs("div",{className:"doc-content",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Monedas:"})," Haz click en las monedas flotantes para recolectarlas. Las monedas especiales (brillantes) valen más puntos."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tienda:"})," Usa tus monedas para desbloquear nuevos fondos, cursores y skins para las monedas."]})]})]})})}),e.jsx(Pe,{children:y&&e.jsx("div",{className:"doc-overlay",onClick:()=>g(!1),children:e.jsxs(ne.div,{className:"doc-modal",onClick:A=>A.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>g(!1),children:e.jsx(xt,{size:24})}),e.jsxs("h2",{children:[e.jsx(vt,{style:{marginRight:"10px",color:"#ffd700"}})," ","Tus Logros"]}),e.jsx("div",{className:"doc-content",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:Object.entries(rt).map(([A,n])=>{const I=j.includes(A);let J=n.desc;if(A==="collector"){const q=Object.values(yt).flat().filter(E=>E.type!=="skin"),P=q.length,K=T?q.filter(E=>T.includes(E.id)).length:0;J=`${n.desc} (${K}/${P})`}if(A==="prestige"){const P=Object.keys(rt).filter(E=>E!=="prestige"),K=j.filter(E=>P.includes(E)).length;J=`${n.desc} (${K}/${P.length})`}return e.jsxs("div",{style:{background:I?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)",border:I?"1px solid rgba(255, 215, 0, 0.3)":"1px solid rgba(255, 255, 255, 0.1)",padding:"15px",borderRadius:"12px",opacity:I?1:.5,display:"flex",alignItems:"center",gap:"15px"},children:[e.jsx("div",{style:{fontSize:"2rem"},children:I?n.icon:e.jsx(bi,{className:"locked-icon"})}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 5px 0",color:I?"#ffd700":"white"},children:n.title}),e.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"rgba(255,255,255,0.7)"},children:J})]})]},A)})})})]})})})]})},di=({label:o,isActive:t,isLocked:i,onToggle:r,color:u})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",opacity:i?.5:1},children:[e.jsxs("span",{style:{fontSize:"0.9rem",fontWeight:500,display:"flex",alignItems:"center",gap:"8px",color:"white"},children:[o," ",i&&e.jsx(bi,{size:10,style:{opacity:.7}})]}),e.jsx("div",{onClick:i?void 0:r,style:{width:"40px",height:"22px",background:t?u:"rgba(255,255,255,0.2)",borderRadius:"12px",position:"relative",cursor:i?"not-allowed":"pointer",transition:"background 0.3s ease"},children:e.jsx(ne.div,{animate:{x:t?18:2},transition:{type:"spring",stiffness:500,damping:30},style:{width:"18px",height:"18px",background:"white",borderRadius:"50%",position:"absolute",top:"2px",boxShadow:"0 2px 5px rgba(0,0,0,0.2)"}})})]}),ir=()=>{const{notification:o,clearNotification:t}=Ue();a.useEffect(()=>{if(o){const u=setTimeout(()=>{t()},4e3);return()=>clearTimeout(u)}},[o,t]);const i=o&&o.type==="achievement",r=i?rt[o.id]:null;return e.jsx(Pe,{children:i&&r&&e.jsxs(ne.div,{className:"achievement-toast",initial:{y:-100,x:"-50%",opacity:0},animate:{y:20,x:"-50%",opacity:1},exit:{y:-100,x:"-50%",opacity:0},transition:{type:"spring",stiffness:300,damping:20},children:[e.jsx("div",{className:"icon-container",children:e.jsx(hi,{size:24,color:"#ffd700"})}),e.jsxs("div",{className:"text-container",children:[e.jsx("span",{className:"title",children:"¡Logro Desbloqueado!"}),e.jsxs("span",{className:"name",children:[r.icon," ",r.title]}),e.jsx("span",{className:"desc",children:r.desc})]})]})})},nr=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"},{id:"skins",label:"Monedas",ariaLabel:"Personalizar Monedas"}];function or(){const{isUnlocked:o,openShop:t,closeShop:i,lockGame:r,activeBackground:u,toggleGame:h,isGameActive:C,activeShop:y,addCoins:g,unlockAchievement:R,achievements:w,setCursor:L,activeCursor:b}=Ue(),[j,T]=a.useState(!0),[z,_]=a.useState(!1),[M,N]=a.useState(!1),[U,A]=a.useState(!1),[n,I]=a.useState(!0),[J,q]=a.useState(!1),[P,K]=a.useState(null),[E,X]=a.useState(null),[Y,d]=a.useState(null),[c,l]=a.useState(null),[p,m]=a.useState(null),[S,O]=a.useState(null),[W,ce]=a.useState(null),[V,oe]=a.useState(null),[se,B]=a.useState(!0),[ee,re]=a.useState("default"),D=H=>{H?(b!=="cursor_prestige"&&re(b),L("cursor_prestige")):L(ee||"default")};a.useEffect(()=>{o&&w&&!w.includes("prestige")&&Object.keys(rt).filter(he=>he!=="prestige").every(he=>w.includes(he))&&(R("prestige"),L&&L("cursor_prestige"))},[w,o,R,L]);const ae=a.useRef(0);a.useEffect(()=>{if(!o)return;const H=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],te=ie=>{const he=ie.key.toLowerCase(),ye=H[ae.current].toLowerCase();he===ye?(ae.current++,ae.current===H.length&&(g(1e6),R("matrix_master"),console.log("CHEAT ACTIVATED: KONAMI CODE!"),ae.current=0)):(ae.current=0,he===H[0].toLowerCase()&&(ae.current=1))};return window.addEventListener("keydown",te),()=>window.removeEventListener("keydown",te)},[o,g,R]);const ge=H=>{H&&t(H)},me=()=>{M?(N(!1),U&&T(!0)):(q(!1),i(),A(j),T(!1),N(!0))},xe=[{icon:e.jsx(Nn,{size:22}),label:"Texto",onClick:()=>{i(),C?h():T(!j)}},{icon:e.jsx(Un,{size:22}),label:"Música",onClick:()=>{i(),_(!z)}},{icon:e.jsx(On,{size:22}),label:"Tienda",onClick:()=>{y&&i(),q(!J)}},{icon:e.jsx(Bn,{size:22,color:C?"#f700ff":"currentColor"}),label:"Juego",onClick:()=>{i(),C?T(n):(I(j),T(!0)),h()}},{icon:e.jsx(Gn,{size:22}),label:"Fondo",onClick:me},{icon:e.jsx(qn,{size:22}),label:"Bloquear",onClick:()=>{r&&(i(),_(!1),K(null),X(null),d(null),l(null),m(null),O(null),ce(null),oe(null),r())}}],[F,$]=a.useState(!0),[Q,ue]=a.useState(0);return a.useEffect(()=>{const H=setInterval(()=>{ue(te=>{const ie=te+Math.floor(Math.random()*15)+5;return ie>=100?(clearInterval(H),setTimeout(()=>$(!1),200),100):ie})},200);return()=>clearInterval(H)},[]),e.jsxs("main",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[e.jsx(Pe,{mode:"wait",children:F&&e.jsx(Ms,{progress:Q},"loader")}),e.jsx(Pe,{children:!o&&e.jsx(ne.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(Zn,{})},"lock-screen")}),e.jsx(Pe,{children:o&&e.jsxs(ne.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(Ls,{floatingLinesConfig:P,lightPillarsConfig:E,ballpitConfig:Y,silkConfig:c,galaxyConfig:p,gradientConfig:S,pixelSnowConfig:W,hyperspeedConfig:V}),e.jsx(tr,{goldShopEnabled:se,setGoldShopEnabled:B,onTogglePrestige:D}),e.jsx(ir,{}),e.jsx(Ps,{isOpen:J,onToggle:H=>{q(H),H&&N(!1)},items:nr,isFixed:!0,position:"right",onItemClick:ge,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(Go,{}),e.jsx(Ko,{enableGoldTheme:se}),e.jsx(Fs,{}),e.jsx(Pe,{children:j&&e.jsx(ne.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(es,{})})}),e.jsx(Pe,{children:M&&["floatinglines","lightpillars","ballpit","silk","galaxy","gradient","pixelsnow","hyperspeed"].includes(u)&&e.jsx(ne.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(Rs,{onClose:me,floatingLinesConfig:P,setFloatingLinesConfig:K,lightPillarsConfig:E,setLightPillarsConfig:X,ballpitConfig:Y,setBallpitConfig:d,silkConfig:c,setSilkConfig:l,galaxyConfig:p,setGalaxyConfig:m,gradientConfig:S,setGradientConfig:O,pixelSnowConfig:W,setPixelSnowConfig:ce,hyperspeedConfig:V,setHyperspeedConfig:oe})})})}),e.jsx(er,{visible:z,onClose:()=>_(!1)}),e.jsx(Ts,{items:xe,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}Wn.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(or,{})}));
