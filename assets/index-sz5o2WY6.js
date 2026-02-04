import{c as $t,j as e,r as s,u as Zt,C as we,a as ei,F as ti,R as st,O as ii,A as ni,b as oi,P as si,V as H,d as lt,e as Et,S as We,W as Be,f as ai,M as at,g as he,I as ri,h as li,i as ci,k as ui,l as di,m as fi,n as hi,o as Ce,p as ct,q as De,s as Oe,t as ze,v as mi,w as Ke,x as _t,y as ut,E as pi,z as gi,B as vi,D as dt,G as xi,H as Ne,J as yi,L as bi,K as ft,N as wi,T as Ci,Q as ht,U as Ee,X as ne,Y as Si,Z as Tt,_ as ji,$ as Dt,a0 as Ai,a1 as Pi,a2 as ki,a3 as Ri,a4 as Li,a5 as Ii,a6 as zt,a7 as Mi,a8 as Nt,a9 as Fi,aa as Ei,ab as _i,ac as Ti,ad as Di,ae as zi,af as Ni,ag as Ui,ah as Oi}from"./vendor-IQ90vm_F.js";import{A as ve,m as V,u as qe,a as rt,b as Qe}from"./framer-motion-Dl6E-1V9.js";import{R as qi,T as Wi,P as Bi,C as mt,M as Gi}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();const ke=$t(n=>({isUnlocked:!1,unlockApp:()=>n({isUnlocked:!0}),lockGame:()=>n({isUnlocked:!1}),activeShop:null,openShop:t=>n({activeShop:t}),closeShop:()=>n({activeShop:null}),isGameActive:!1,toggleGame:()=>n(t=>({isGameActive:!t.isGameActive})),coins:0,addCoins:t=>n(i=>({coins:i.coins+t})),gameVolume:.4,setGameVolume:t=>n({gameVolume:t}),activeCoinSkin:"dase",setCoinSkin:t=>n({activeCoinSkin:t}),ownedItems:["gradient","default","none","dase"],buyItem:t=>n(i=>i.ownedItems.includes(t.id)?i:i.coins>=t.price?{coins:i.coins-t.price,ownedItems:[...i.ownedItems,t.id]}:i),achievements:[],notification:null,unlockAchievement:t=>n(i=>i.achievements.includes(t)?i:{achievements:[...i.achievements,t],notification:{type:"achievement",id:t}}),clearNotification:()=>n({notification:null}),resetProgress:()=>n({coins:0,ownedItems:["gradient","default","none","dase"],activeBackground:"gradient",activeCursor:"default",activeTrail:"none",activeCoinSkin:"dase",achievements:[],isGameActive:!1}),activeBackground:"gradient",setBackground:t=>n({activeBackground:t}),activeCursor:"default",setCursor:t=>n({activeCursor:t}),activeTrail:"none",setTrail:t=>n({activeTrail:t})})),Hi=({text:n,disabled:t=!1,speed:i=3,className:o="",color:l="#7c7c7c",shineColor:f="#ffffff",direction:h="right"})=>e.jsx("div",{className:`shiny-text ${h} ${t?"disabled":""} ${o}`,style:{"--shiny-speed":`${i}s`,"--base-color":l,"--shine-color":f},children:n}),pt=n=>(n=n.replace("#",""),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]),Yi=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,Vi=`
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
`,Ut=s.forwardRef(function({uniforms:t},i){return Zt((o,l)=>{i.current.material.uniforms.uTime.value+=.1*l}),e.jsxs("mesh",{ref:i,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:Yi,fragmentShader:Vi})]})});Ut.displayName="SilkPlane";const Ot=({speed:n=1,scale:t=2,color:i="#ff99cc",noiseIntensity:o=.5,rotation:l=0})=>{const f=s.useRef(),h=s.useMemo(()=>({uSpeed:{value:n},uScale:{value:t},uNoiseIntensity:{value:o},uColor:{value:new we(...pt(i))},uRotation:{value:l},uTime:{value:0}}),[]);return s.useEffect(()=>{if(f.current){const y=f.current.material.uniforms;y.uSpeed.value=n,y.uScale.value=t,y.uNoiseIntensity.value=o,y.uColor.value.set(...pt(i)),y.uRotation.value=l}},[n,t,o,i,l]),s.useEffect(()=>{const d=setInterval(()=>window.dispatchEvent(new Event("resize")),50),x=setTimeout(()=>clearInterval(d),1200);return()=>{clearInterval(d),clearTimeout(x)}},[]),e.jsx(ei,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(Ut,{ref:f,uniforms:h})})},Xi=()=>{const[n,t]=s.useState(""),[i,o]=s.useState(!1),l=ke(d=>d.unlockApp),f="230824",h=d=>{const x=d.target.value.replace(/\D/g,"");if(x.length>6)return;let b=x;x.length>2&&(b=x.slice(0,2)+"/"+x.slice(2)),x.length>4&&(b=b.slice(0,5)+"/"+x.slice(4)),t(b),o(!1)},y=d=>{d.preventDefault(),n.replace(/\//g,"")===f?l():(o(!0),setTimeout(()=>o(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(Ot,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(Hi,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:y,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:n,onChange:h,className:i?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(ti,{size:20})})]})]})]})},Ji=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,Ki=Object.freeze(Object.defineProperty({__proto__:null,default:Ji},Symbol.toStringTag,{value:"Module"})),Qi=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,$i=Object.freeze(Object.defineProperty({__proto__:null,default:Qi},Symbol.toStringTag,{value:"Module"})),Zi=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,en=Object.freeze(Object.defineProperty({__proto__:null,default:Zi},Symbol.toStringTag,{value:"Module"})),tn=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,nn=Object.freeze(Object.defineProperty({__proto__:null,default:tn},Symbol.toStringTag,{value:"Module"})),on=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,sn=Object.freeze(Object.defineProperty({__proto__:null,default:on},Symbol.toStringTag,{value:"Module"})),an=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,rn=Object.freeze(Object.defineProperty({__proto__:null,default:an},Symbol.toStringTag,{value:"Module"})),ln=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,cn=Object.freeze(Object.defineProperty({__proto__:null,default:ln},Symbol.toStringTag,{value:"Module"})),un=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,dn=Object.freeze(Object.defineProperty({__proto__:null,default:un},Symbol.toStringTag,{value:"Module"})),fn=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,hn=Object.freeze(Object.defineProperty({__proto__:null,default:fn},Symbol.toStringTag,{value:"Module"})),mn=""+new URL("dase-Ul_8ADqZ.png",import.meta.url).href,pn=""+new URL("daseshiny-CaXO5CeC.png",import.meta.url).href,gn=""+new URL("dase-YSuIB7YX.mp3",import.meta.url).href,be=80,gt={dase:{normal:mn,shiny:pn,sound:gn}};function vn(){const{addCoins:n,activeCoinSkin:t,gameVolume:i,unlockAchievement:o,coins:l}=ke(),[f,h]=s.useState([]),[y,d]=s.useState([]),[x,b]=s.useState(1),k=s.useRef(),v=s.useRef(null),g=s.useRef(!1),R=s.useRef(null);s.useEffect(()=>(g.current=!0,()=>{g.current=!1,R.current&&clearTimeout(R.current)}),[]);const M=gt[t]||gt.dase;s.useEffect(()=>{M.sound&&(v.current=new Audio(M.sound),v.current.volume=i)},[M,i]),s.useEffect(()=>{const C=m=>{m.ctrlKey&&m.altKey&&(m.key==="k"||m.key==="K")&&(n(1e6),o("hacker"),console.log("CHEAT ACTIVATED: +1,000,000 Coins"))};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[n,o]),s.useEffect(()=>{const C=window.innerWidth,m=window.innerHeight,I=[];for(let _=0;_<5;_++)I.push({id:`normal-${_}`,type:"normal",x:Math.random()*(C-be),y:Math.random()*(m-be),vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6,img:M.normal,value:1});I.push({id:"shiny-1",type:"shiny",x:Math.random()*(C-be),y:Math.random()*(m-be),vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,img:M.shiny,value:5}),h(I)},[t,M]);const D=s.useCallback(()=>{h(C=>C.map(m=>{let{x:I,y:_,vx:P,vy:O}=m;return I+=P,_+=O,(I<=0||I>=window.innerWidth-be)&&(P=-P,I=Math.max(0,Math.min(I,window.innerWidth-be))),(_<=0||_>=window.innerHeight-be)&&(O=-O,_=Math.max(0,Math.min(_,window.innerHeight-be))),{...m,x:I,y:_,vx:P,vy:O}})),d(C=>C.length===0?C:C.map(m=>({...m,x:m.x+m.vx,y:m.y+m.vy,vy:m.vy+.5,life:m.life-.03})).filter(m=>m.life>0)),k.current=requestAnimationFrame(D)},[]);s.useEffect(()=>(k.current=requestAnimationFrame(D),()=>cancelAnimationFrame(k.current)),[D]);const F=C=>{let m=x+1;m>10&&(m=10),b(m),R.current&&clearTimeout(R.current);const I=Math.max(500,2500-m*200);R.current=setTimeout(()=>{g.current&&b(1)},I);const _=C.value*m;n(_),o("first_coin"),m>=10&&o("velocista");const P=l+_;if(P>=100&&o("rico"),P>=1e3&&o("millonario"),C.type==="shiny"&&v.current){const w=v.current.cloneNode();w.volume=i,w.play().catch(U=>console.log("Audio error:",U))}const O=[],W=C.type==="shiny"?"#ffd700":"#ffffff";for(let w=0;w<12;w++)O.push({id:`${Date.now()}-${w}-${Math.random()}`,x:C.x+be/2,y:C.y+be/2,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,life:1,color:W});d(w=>[...w,...O]),h(w=>w.filter(U=>U.id!==C.id)),setTimeout(()=>{g.current&&h(w=>{const U=window.innerWidth,L=window.innerHeight,E=1+m*.15,Y={...C,id:`${C.type}-${Date.now()}-${Math.random()}`,x:Math.random()*(U-be),y:Math.random()*(L-be),vx:(Math.random()-.5)*(C.type==="shiny"?12:8)*E,vy:(Math.random()-.5)*(C.type==="shiny"?12:8)*E};return[...w,Y]})},2e3)};return e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:30,pointerEvents:"auto",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"80px",right:"40px",pointerEvents:"none",textAlign:"right",zIndex:100},children:x>1&&e.jsxs("div",{style:{fontFamily:"var(--font-main)",fontSize:"3rem",fontWeight:"900",color:"#f700ff",textShadow:"0 0 20px rgba(247, 0, 255, 0.8)",transform:`scale(${1+x*.1})`,transition:"transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},children:["x",x]})}),y.map(C=>e.jsx("div",{style:{position:"absolute",left:C.x,top:C.y,width:"8px",height:"8px",backgroundColor:C.color,borderRadius:"50%",opacity:C.life,pointerEvents:"none",transform:"translate(-50%, -50%)",boxShadow:`0 0 8px ${C.color}`}},C.id)),f.map(C=>e.jsx("img",{src:C.img,alt:"coin",onMouseDown:m=>{m.stopPropagation(),F(C)},style:{position:"absolute",transform:`translate3d(${C.x}px, ${C.y}px, 0)`,width:be,height:be,cursor:"pointer",userSelect:"none",filter:C.type==="shiny"?"drop-shadow(0 0 15px gold) brightness(1.2)":"drop-shadow(0 0 5px rgba(255,255,255,0.3))"},draggable:!1},C.id))]})}const xn=Object.assign({"../../assets/img/photos/bridge.jpeg":Ki,"../../assets/img/photos/first.jpg":$i,"../../assets/img/photos/graduated.jpeg":en,"../../assets/img/photos/halloween.jpg":nn,"../../assets/img/photos/miestrella.jpg":sn,"../../assets/img/photos/murder.jpeg":rn,"../../assets/img/photos/rock.jpeg":cn,"../../assets/img/photos/sleepy.jpg":dn,"../../assets/img/photos/sunshine.jpeg":hn}),tt=Object.values(xn).map(n=>n.default),yn=()=>{const[n,t]=s.useState(null),{isGameActive:i}=ke();let o=[...tt];if(o.length>0)for(;o.length<18;)o=[...o,...tt];const l=[...o,...o];return e.jsx(ve,{mode:"wait",children:i?e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{width:"100%",height:"100%"},children:e.jsx(vn,{})},"game"):e.jsxs(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"main-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),tt.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:l.map((f,h)=>e.jsx("img",{src:f,alt:`Memory ${h}`,className:"gallery-item",onClick:()=>t(f)},h))})}),e.jsx(ve,{children:n&&e.jsx(V.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(V.img,{src:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:f=>f.stopPropagation()})})})]},"content")})},bn=({color1:n="#b117f8",color2:t="#2c0b2e",speed:i=20})=>e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:`linear-gradient(to bottom, ${n}, ${t})`,animation:`spinGradient ${i}s linear infinite`}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),wn=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,Cn=`
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
`,Sn=({focal:n=[.5,.5],rotation:t=[1,0],starSpeed:i=0,density:o=1.5,hueShift:l=300,disableAnimation:f=!1,speed:h=.5,glowIntensity:y=.5,saturation:d=.8,twinkleIntensity:x=.5,rotationSpeed:b=.05,transparent:k=!0,colorCycleSpeed:v=10,rainbow:g=!1,warp:R=!1,...M})=>{const D=s.useRef(null),F=s.useRef(l),C=s.useRef(null),m=s.useRef({starSpeed:i,disableAnimation:f,rainbow:g,colorCycleSpeed:v,warp:R,hueShift:l});return s.useEffect(()=>{m.current={starSpeed:i,disableAnimation:f,rainbow:g,colorCycleSpeed:v,warp:R,hueShift:l}},[i,f,g,v,R,l]),s.useEffect(()=>{if(!D.current)return;const I=D.current;I.innerHTML="";const _=new qi({alpha:k,premultipliedAlpha:!1,dpr:1}),P=_.gl;k?(P.enable(P.BLEND),P.blendFunc(P.SRC_ALPHA,P.ONE_MINUS_SRC_ALPHA),P.clearColor(0,0,0,0)):P.clearColor(0,0,0,1);let O;function W(){_.setSize(I.offsetWidth*1,I.offsetHeight*1),C.current&&(C.current.uniforms.uResolution.value=new mt(P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height))}window.addEventListener("resize",W,!1),W();const w=new Wi(P);O=new Bi(P,{vertex:wn,fragment:Cn,uniforms:{uTime:{value:0},uResolution:{value:new mt(P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height)},uFocal:{value:new Float32Array(n)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:i},uDensity:{value:o},uHueShift:{value:l},uSpeed:{value:h},uGlowIntensity:{value:y},uSaturation:{value:d},uTwinkleIntensity:{value:x},uRotationSpeed:{value:b},uTransparent:{value:k}}}),C.current=O;const U=new Gi(P,{geometry:w,program:O});let L,E=0;const A=1e3/30;function a(c){if(L=requestAnimationFrame(a),!D.current||!C.current)return;const p=c-E;if(p<A)return;E=c-p%A;const{starSpeed:u,disableAnimation:j,rainbow:z,colorCycleSpeed:q,warp:K,hueShift:T}=m.current;if(!j){O.uniforms.uTime.value=c*.001;const Z=K?u*10:u;O.uniforms.uStarSpeed.value=c*.001*Z/10,z?(F.current+=q*.05,O.uniforms.uHueShift.value=F.current%360):O.uniforms.uHueShift.value=T}_.render({scene:U})}return L=requestAnimationFrame(a),I.appendChild(P.canvas),P.canvas.style.width="100%",P.canvas.style.height="100%",P.canvas.style.display="block",P.canvas.style.willChange="transform",()=>{cancelAnimationFrame(L),window.removeEventListener("resize",W),I&&P.canvas&&I.contains(P.canvas)&&I.removeChild(P.canvas),P.getExtension("WEBGL_lose_context")?.loseContext(),C.current=null}},[k]),s.useEffect(()=>{if(!C.current)return;const I=C.current.uniforms;I.uFocal.value=new Float32Array(n),I.uRotation.value=new Float32Array(t),I.uDensity.value=o,I.uSpeed.value=h,I.uGlowIntensity.value=y,I.uSaturation.value=d,I.uTwinkleIntensity.value=x,I.uRotationSpeed.value=b},[n,t,o,h,y,d,x,b]),e.jsx("div",{ref:D,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},...M})},jn=st.memo(Sn);class An{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#i;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#S;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#o=!1;#n=!1;isDisposed=!1;#s;#a;#r;#l=new lt;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#p(),this.#g(),this.#v(),this.resize(),this.#x()}#p(){this.camera=new Et,this.cameraFov=this.camera.fov}#g(){this.scene=new We}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new Be(t),this.renderer.outputColorSpace=ai}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#a=new ResizeObserver(this.#c.bind(this)),this.#a.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#a?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#o=t[0].isIntersecting,this.#o?this.#m():this.#u()}#f(){this.#o&&(document.hidden?this.#u():this.#m())}#c(){this.#r&&clearTimeout(this.#r),this.#r=setTimeout(this.resize.bind(this),100)}resize(){let t,i;this.#e.size instanceof Object?(t=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,i=window.innerHeight),this.size.width=t,this.size.height=i,this.size.ratio=t/i,this.#w(),this.#C(),this.onAfterResize(this.size)}#w(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#h(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#h(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#h(t){const i=Math.tan(at.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*at.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#C(){this.renderer.setSize(this.size.width,this.size.height),this.#i?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(t),this.size.pixelRatio=t}get postprocessing(){return this.#i}set postprocessing(t){this.#i=t,this.render=t.render.bind(t)}#m(){if(this.#n)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#n=!0,this.#l.start(),t()}#u(){this.#n&&(cancelAnimationFrame(this.#d),this.#n=!1,this.#l.stop())}#S(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(i=>{const o=t.material[i];o!==null&&typeof o=="object"&&typeof o.dispose=="function"&&o.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#i?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const Pe=new Map,je=new he;let it=!1;function Pn(n){const t={position:new he,nPosition:new he,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...n};return(function(i,o){Pe.has(i)||(Pe.set(i,o),it||(document.body.addEventListener("pointermove",vt),document.body.addEventListener("pointerleave",yt),document.body.addEventListener("click",xt),document.body.addEventListener("touchstart",bt,{passive:!1}),document.body.addEventListener("touchmove",wt,{passive:!1}),document.body.addEventListener("touchend",He,{passive:!1}),document.body.addEventListener("touchcancel",He,{passive:!1}),it=!0))})(n.domElement,t),t.dispose=()=>{const i=n.domElement;Pe.delete(i),Pe.size===0&&(document.body.removeEventListener("pointermove",vt),document.body.removeEventListener("pointerleave",yt),document.body.removeEventListener("click",xt),document.body.removeEventListener("touchstart",bt),document.body.removeEventListener("touchmove",wt),document.body.removeEventListener("touchend",He),document.body.removeEventListener("touchcancel",He),it=!1)},t}function vt(n){je.x=n.clientX,je.y=n.clientY,kn()}function kn(){for(const[n,t]of Pe){const i=n.getBoundingClientRect();Ze(i)?($e(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function xt(n){je.x=n.clientX,je.y=n.clientY;for(const[t,i]of Pe){const o=t.getBoundingClientRect();$e(i,o),Ze(o)&&i.onClick(i)}}function yt(){for(const n of Pe.values())n.hover&&(n.hover=!1,n.onLeave(n))}function bt(n){if(n.touches.length>0){n.preventDefault(),je.x=n.touches[0].clientX,je.y=n.touches[0].clientY;for(const[t,i]of Pe){const o=t.getBoundingClientRect();Ze(o)&&(i.touching=!0,$e(i,o),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function wt(n){if(n.touches.length>0){n.preventDefault(),je.x=n.touches[0].clientX,je.y=n.touches[0].clientY;for(const[t,i]of Pe){const o=t.getBoundingClientRect();$e(i,o),Ze(o)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function He(){for(const[,n]of Pe)n.touching&&(n.touching=!1,n.hover&&(n.hover=!1,n.onLeave(n)))}function $e(n,t){const{position:i,nPosition:o}=n;i.x=je.x-t.left,i.y=je.y-t.top,o.x=i.x/t.width*2-1,o.y=-i.y/t.height*2+1}function Ze(n){const{x:t,y:i}=je,{left:o,top:l,width:f,height:h}=n;return t>=o&&t<=o+f&&i>=l&&i<=l+h}const{randFloat:Rn,randFloatSpread:nt}=at,ot=new H,de=new H,Ye=new H,Ln=new H,fe=new H,Ve=new H,_e=new H,Me=new H,Xe=new H,Ct=new H;class In{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new H,this.#e(),this.setSizes()}#e(){const{config:t,positionData:i}=this;this.center.toArray(i,0);for(let o=1;o<t.count;o++){const l=3*o;i[l]=nt(2*t.maxX),i[l+1]=nt(2*t.maxY),i[l+2]=nt(2*t.maxZ)}}setSizes(){const{config:t,sizeData:i}=this;i[0]=t.size0;for(let o=1;o<t.count;o++)i[o]=Rn(t.minSize,t.maxSize)}update(t){const{config:i,center:o,positionData:l,sizeData:f,velocityData:h}=this;let y=0;i.controlSphere0&&(y=1,ot.fromArray(l,0),ot.lerp(o,.1).toArray(l,0),Ln.set(0,0,0).toArray(h,0));for(let d=y;d<i.count;d++){const x=3*d;de.fromArray(l,x),fe.fromArray(h,x),fe.y-=t.delta*i.gravity*f[d],fe.multiplyScalar(i.friction),fe.clampLength(0,i.maxVelocity),de.add(fe),de.toArray(l,x),fe.toArray(h,x)}for(let d=y;d<i.count;d++){const x=3*d;de.fromArray(l,x),fe.fromArray(h,x);const b=f[d];for(let v=d+1;v<i.count;v++){const g=3*v;Ye.fromArray(l,g),Ve.fromArray(h,g);const R=f[v];_e.copy(Ye).sub(de);const M=_e.length(),D=b+R;if(M<D){const F=D-M;Me.copy(_e).normalize().multiplyScalar(.5*F),Xe.copy(Me).multiplyScalar(Math.max(fe.length(),1)),Ct.copy(Me).multiplyScalar(Math.max(Ve.length(),1)),de.sub(Me),fe.sub(Xe),de.toArray(l,x),fe.toArray(h,x),Ye.add(Me),Ve.add(Ct),Ye.toArray(l,g),Ve.toArray(h,g)}}if(i.controlSphere0){_e.copy(ot).sub(de);const v=_e.length(),g=b+f[0];if(v<g){const R=g-v;Me.copy(_e.normalize()).multiplyScalar(R),Xe.copy(Me).multiplyScalar(Math.max(fe.length(),1)),de.sub(Me),fe.sub(Xe)}}Math.abs(de.x)+b>i.maxX&&(de.x=Math.sign(de.x)*(i.maxX-b),fe.x=-fe.x*i.wallBounce),i.gravity===0?Math.abs(de.y)+b>i.maxY&&(de.y=Math.sign(de.y)*(i.maxY-b),fe.y=-fe.y*i.wallBounce):de.y-b<-i.maxY&&(de.y=-i.maxY+b,fe.y=-fe.y*i.wallBounce);const k=Math.max(i.maxZ,i.maxSize);Math.abs(de.z)+b>k&&(de.z=Math.sign(de.z)*(i.maxZ-b),fe.z=-fe.z*i.wallBounce),de.toArray(l,x),fe.toArray(h,x)}}explode(t,i=2){const{positionData:o,velocityData:l,config:f}=this;for(let h=0;h<f.count;h++){const y=3*h,d=o[y]-t.x,x=o[y+1]-t.y,b=o[y+2]-t.z,k=d*d+x*x+b*b;if(k<60){const v=Math.sqrt(k)+.01,g=i*50/(v+1),R=(Math.random()-.5)*1.5,M=(Math.random()-.5)*1.5,D=(Math.random()-.5)*1.5;l[y]+=(d/v+R)*g,l[y+1]+=(x/v+M)*g,l[y+2]+=(b/v+D)*g}}}}class Mn extends hi{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
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
      `);const o=Ce.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",o),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const Fn={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0,enableExplosion:!1,rainbow:!1},Te=new ii;class En extends ri{constructor(t,i={}){const o={...Fn,...i},l=new li,f=new ci(t,.04).fromScene(l).texture,h=new ui,y=new Mn({envMap:f,...o.materialParams});y.envMapRotation.x=-Math.PI/2,super(h,y,o.count),this.config=o,this.physics=new In(o),this.#e(),this.setColors(o.colors),this.rainbowHue=0}#e(){this.ambientLight=new di(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new fi(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(o){let l,f;function h(y){l=y,f=[],l.forEach(d=>{f.push(new we(d))})}return h(o),{setColors:h,getColorAt:function(y,d=new we){const x=Math.max(0,Math.min(1,y))*(l.length-1),b=Math.floor(x),k=f[b];if(b>=l.length-1)return k.clone();const v=x-b,g=f[b+1];return d.r=k.r+v*(g.r-k.r),d.g=k.g+v*(g.g-k.g),d.b=k.b+v*(g.b-k.b),d}}})(t);for(let o=0;o<this.count;o++)this.setColorAt(o,i.getColorAt(o/this.count)),o===0&&this.light.color.copy(i.getColorAt(o/this.count));this.instanceColor.needsUpdate=!0}}update(t){if(this.physics.update(t),this.config.rainbow){this.rainbowHue+=t.delta*.2,this.light.color.setHSL(this.rainbowHue%1,1,.5);for(let i=0;i<this.count;i++){const o=(this.rainbowHue+i*.05)%1,l=new we().setHSL(o,.9,.6);this.setColorAt(i,l)}this.instanceColor.needsUpdate=!0}for(let i=0;i<this.count;i++)Te.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Te.scale.setScalar(0):Te.scale.setScalar(this.physics.sizeData[i]),Te.updateMatrix(),this.setMatrixAt(i,Te.matrix),i===0&&this.light.position.copy(Te.position);this.instanceMatrix.needsUpdate=!0}}function _n(n,t={}){const i=new An({canvas:n,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let o;i.renderer.toneMapping=ni,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),x(t);const l=new oi,f=new si(new H(0,0,1),0),h=new H;let y=!1;n.style.touchAction="none",n.style.userSelect="none",n.style.webkitUserSelect="none";const d=Pn({domElement:n,onMove(){l.setFromCamera(d.nPosition,i.camera),i.camera.getWorldDirection(f.normal),l.ray.intersectPlane(f,h),o.physics.center.copy(h),o.config.controlSphere0=!0},onClick(){o&&o.config.enableExplosion&&o.physics.explode(o.physics.center)},onLeave(){o.config.controlSphere0=!1}});function x(b){o&&(i.clear(),i.scene.remove(o)),o=new En(i.renderer,b),i.scene.add(o)}return i.onBeforeRender=b=>{y||o.update(b)},i.onAfterResize=b=>{o.config.maxX=b.wWidth/2,o.config.maxY=b.wHeight/2},{three:i,get spheres(){return o},setCount(b){x({...o.config,count:b})},togglePause(){y=!y},dispose(){d.dispose(),i.dispose()}}}const Tn=({className:n="",followCursor:t=!0,count:i=100,gravity:o=.5,friction:l=.9975,wallBounce:f=.95,colors:h=[0,0,0],enableExplosion:y=!1,rainbow:d=!1,...x})=>{const b=s.useRef(null),k=s.useRef(null);return s.useEffect(()=>{const v=b.current;if(v)return k.current=_n(v,{followCursor:t,count:i,gravity:o,friction:l,wallBounce:f,colors:h,enableExplosion:y,rainbow:d,...x}),()=>{k.current&&k.current.dispose()}},[]),s.useEffect(()=>{const v=k.current;if(!v||!v.spheres)return;const g=v.spheres.config;g.gravity=o,g.friction=l,g.wallBounce=f,g.followCursor=t,g.enableExplosion=y,g.rainbow=d,v.spheres.setColors(h)},[o,l,f,t,h,y,d]),s.useEffect(()=>{const v=k.current;v&&v.setCount(i)},[i]),e.jsx("canvas",{className:n,ref:b,style:{width:"100%",height:"100%"}})},Dn=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,zn=`
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
`,Je=8;function St(n){let t=n.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,o=255,l=255;return t.length===3?(i=parseInt(t[0]+t[0],16),o=parseInt(t[1]+t[1],16),l=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),o=parseInt(t.slice(2,4),16),l=parseInt(t.slice(4,6),16)),new H(i/255,o/255,l/255)}function Nn({linesGradient:n,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:o=[5],topWavePosition:l,middleWavePosition:f,bottomWavePosition:h={x:2,y:-.7,rotate:-1},animationSpeed:y=1,interactive:d=!1,bendRadius:x=5,bendStrength:b=-.5,mouseDamping:k=.05,mixBlendMode:v="screen",amplitude:g=1,rainbow:R=!1}){const M=s.useRef(null),D=s.useRef(null),F=s.useRef(null),C=s.useRef(new he(-1e3,-1e3)),m=s.useRef(new he(-1e3,-1e3)),I=s.useRef(0),_=s.useRef(0),P=s.useRef(R),O=s.useRef(d);s.useEffect(()=>{O.current=d},[d]),s.useEffect(()=>{P.current=R},[R]);const W=c=>{if(typeof i=="number")return i;if(!t.includes(c))return 0;const p=t.indexOf(c);return i[p]??6},w=c=>{if(typeof o=="number")return o;if(!t.includes(c))return .1;const p=t.indexOf(c);return o[p]??.1},U=t.includes("top")?W("top"):0,L=t.includes("middle")?W("middle"):0,E=t.includes("bottom")?W("bottom"):0,Y=t.includes("top")?w("top")*.01:.01,A=t.includes("middle")?w("middle")*.01:.01,a=t.includes("bottom")?w("bottom")*.01:.01;return s.useEffect(()=>{if(F.current&&n&&n.length>0&&!R){const c=n.slice(0,Je);F.current.uniforms.lineGradientCount.value=c.length,c.forEach((p,u)=>{const j=St(p);F.current.uniforms.lineGradient.value[u].set(j.x,j.y,j.z)})}},[n,R]),s.useEffect(()=>{if(!F.current)return;const c=F.current.uniforms;c.animationSpeed.value=y,c.amplitude.value=g,c.bendRadius.value=x,c.bendStrength.value=b,c.interactive.value=d,c.enableTop.value=t.includes("top"),c.enableMiddle.value=t.includes("middle"),c.enableBottom.value=t.includes("bottom");const p=j=>{if(typeof i=="number")return i;if(!t.includes(j))return 0;const z=t.indexOf(j);return i[z]??6},u=j=>{if(typeof o=="number")return o;if(!t.includes(j))return .1;const z=t.indexOf(j);return o[z]??.1};c.topLineCount.value=t.includes("top")?p("top"):0,c.middleLineCount.value=t.includes("middle")?p("middle"):0,c.bottomLineCount.value=t.includes("bottom")?p("bottom"):0,c.topLineDistance.value=t.includes("top")?u("top")*.01:.01,c.middleLineDistance.value=t.includes("middle")?u("middle")*.01:.01,c.bottomLineDistance.value=t.includes("bottom")?u("bottom")*.01:.01},[y,g,x,b,d,t,i,o]),s.useEffect(()=>{if(!M.current)return;const c=new We,p=new ct(-1,1,1,-1,0,1);p.position.z=1;const u=new Be({antialias:!0,alpha:!1});u.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),u.domElement.style.width="100%",u.domElement.style.height="100%",M.current.appendChild(u.domElement),D.current=u;const j={iTime:{value:0},iResolution:{value:new H(1,1,1)},animationSpeed:{value:y},amplitude:{value:g},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:U},middleLineCount:{value:L},bottomLineCount:{value:E},topLineDistance:{value:Y},middleLineDistance:{value:A},bottomLineDistance:{value:a},topWavePosition:{value:new H(l?.x??10,l?.y??.5,l?.rotate??-.4)},middleWavePosition:{value:new H(f?.x??5,f?.y??0,f?.rotate??.2)},bottomWavePosition:{value:new H(h?.x??2,h?.y??-.7,h?.rotate??.4)},iMouse:{value:new he(-1e3,-1e3)},interactive:{value:d},bendRadius:{value:x},bendStrength:{value:b},bendInfluence:{value:0},lineGradient:{value:Array.from({length:Je},()=>new H(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const X=n.slice(0,Je);j.lineGradientCount.value=X.length,X.forEach((se,ae)=>{const ce=St(se);j.lineGradient.value[ae].set(ce.x,ce.y,ce.z)})}const z=new De({uniforms:j,vertexShader:Dn,fragmentShader:zn});F.current=z;const q=new Oe(2,2),K=new ze(q,z);c.add(K);const T=new lt,Z=()=>{const X=M.current,se=X.clientWidth||1,ae=X.clientHeight||1;u.setSize(se,ae,!1);const ce=u.domElement.width,pe=u.domElement.height;j.iResolution.value.set(ce,pe,1)};Z();const oe=typeof ResizeObserver<"u"?new ResizeObserver(Z):null;oe&&M.current&&oe.observe(M.current);const ee=X=>{if(!O.current)return;const se=u.domElement.getBoundingClientRect(),ae=X.clientX-se.left,ce=X.clientY-se.top,pe=u.getPixelRatio();C.current.set(ae*pe,(se.height-ce)*pe),I.current=1};window.addEventListener("pointermove",ee);let te=0;const le=()=>{if(j.iTime.value=T.getElapsedTime(),O.current&&(m.current.lerp(C.current,k),j.iMouse.value.copy(m.current),_.current+=(I.current-_.current)*k,j.bendInfluence.value=_.current),P.current){const X=T.getElapsedTime();j.lineGradientCount.value<3&&(j.lineGradientCount.value=3);for(let se=0;se<Je;se++){const ae=(X*.1+se*.15)%1,ce=new we().setHSL(ae,.8,.5);j.lineGradient.value[se].set(ce.r,ce.g,ce.b)}}u.render(c,p),te=requestAnimationFrame(le)};return le(),()=>{cancelAnimationFrame(te),oe&&M.current&&oe.disconnect(),window.removeEventListener("pointermove",ee),q.dispose(),z.dispose(),u.dispose(),u.domElement.parentElement&&u.domElement.parentElement.removeChild(u.domElement)}},[]),e.jsx("div",{ref:M,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:v}})}const Un=({topColor:n="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:o=.3,interactive:l=!1,className:f="",glowAmount:h=.005,pillarWidth:y=3,pillarHeight:d=.4,noiseIntensity:x=.5,mixBlendMode:b="screen",pillarRotation:k=0,quality:v="high"})=>{const g=s.useRef(null),R=s.useRef(null),M=s.useRef(null),D=s.useRef(null),F=s.useRef(null),C=s.useRef(null),m=s.useRef(null),I=s.useRef(new he(0,0)),_=s.useRef(0),[P,O]=s.useState(!0);return s.useEffect(()=>{const W=document.createElement("canvas");W.getContext("webgl")||W.getContext("experimental-webgl")||O(!1)},[]),s.useEffect(()=>{if(!g.current||!P)return;const W=g.current,w=W.clientWidth,U=W.clientHeight,L=new We;F.current=L;const E=new ct(-1,1,1,-1,0,1);C.current=E;const Y=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),A=Y||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let a=v;A&&v==="high"&&(a="medium"),Y&&v!=="low"&&(a="low");const c={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},p=c[a]||c.medium;let u;try{u=new Be({antialias:!1,alpha:!0,powerPreference:a==="high"?"high-performance":"low-power",precision:p.precision,stencil:!1,depth:!1})}catch{O(!1);return}u.setSize(w,U),u.setPixelRatio(p.pixelRatio),g.current.appendChild(u.domElement),M.current=u;const j=B=>{const Q=new we(B);return new H(Q.r,Q.g,Q.b)},z=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,q=`
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
    `,K=k*Math.PI/180,T=Math.sin(.4),Z=Math.cos(.4),oe=new De({vertexShader:z,fragmentShader:q,uniforms:{uTime:{value:0},uResolution:{value:new he(w,U)},uMouse:{value:I.current},uTopColor:{value:j(n)},uBottomColor:{value:j(t)},uIntensity:{value:i},uInteractive:{value:l},uGlowAmount:{value:h},uPillarWidth:{value:y},uPillarHeight:{value:d},uNoiseIntensity:{value:x},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(K)},uPillarRotSin:{value:Math.sin(K)},uWaveSin:{value:T},uWaveCos:{value:Z}},transparent:!0,depthWrite:!1,depthTest:!1});D.current=oe;const ee=new Oe(2,2);m.current=ee;const te=new ze(ee,oe);L.add(te);let le=null;const X=B=>{if(!l||le)return;le=window.setTimeout(()=>{le=null},16);const Q=W.getBoundingClientRect(),G=(B.clientX-Q.left)/Q.width*2-1,$=-((B.clientY-Q.top)/Q.height)*2+1;I.current.set(G,$)};l&&W.addEventListener("mousemove",X,{passive:!0});let se=performance.now();const ce=1e3/(a==="low"?30:60),pe=B=>{if(!D.current||!M.current||!F.current||!C.current)return;const Q=B-se;if(Q>=ce){_.current+=.016*o;const G=_.current;D.current.uniforms.uTime.value=G,D.current.uniforms.uRotCos.value=Math.cos(G*.3),D.current.uniforms.uRotSin.value=Math.sin(G*.3),M.current.render(F.current,C.current),se=B-Q%ce}R.current=requestAnimationFrame(pe)};R.current=requestAnimationFrame(pe);let S=null;const N=()=>{S&&clearTimeout(S),S=window.setTimeout(()=>{if(!M.current||!D.current||!g.current)return;const B=g.current.clientWidth,Q=g.current.clientHeight;M.current.setSize(B,Q),D.current.uniforms.uResolution.value.set(B,Q)},150)};return window.addEventListener("resize",N,{passive:!0}),()=>{window.removeEventListener("resize",N),l&&W.removeEventListener("mousemove",X),R.current&&cancelAnimationFrame(R.current),M.current&&(M.current.dispose(),M.current.forceContextLoss(),W.contains(M.current.domElement)&&W.removeChild(M.current.domElement)),D.current&&D.current.dispose(),m.current&&m.current.dispose(),M.current=null,D.current=null,F.current=null,C.current=null,m.current=null,R.current=null}},[n,t,i,o,l,h,y,d,x,k,P,v]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),P?e.jsx("div",{ref:g,className:`light-pillar-container ${f}`,style:{mixBlendMode:b}}):e.jsx("div",{className:`light-pillar-fallback ${f}`,style:{mixBlendMode:b},children:"WebGL not supported"})]})},On=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,qn=`
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
`;function Wn({color:n="#ffffff",flakeSize:t=.01,minFlakeSize:i=1.25,pixelResolution:o=200,speed:l=1.25,depthFade:f=8,farPlane:h=20,brightness:y=1,gamma:d=.4545,density:x=.3,variant:b="square",direction:k=125,rainbow:v=!1,storm:g=!1,className:R="",style:M={}}){const D=s.useRef(null),F=s.useRef(0),C=s.useRef(!0),m=s.useRef(null),I=s.useRef(null),_=s.useRef(null),P=s.useMemo(()=>b==="round"?1:b==="snowflake"?2:0,[b]),O=s.useMemo(()=>{const w=new we(n);return new H(w.r,w.g,w.b)},[n]),W=s.useCallback(()=>{_.current&&clearTimeout(_.current),_.current=window.setTimeout(()=>{const w=D.current,U=m.current,L=I.current;if(!w||!U||!L)return;const E=w.offsetWidth,Y=w.offsetHeight;U.setSize(E,Y),L.uniforms.uResolution.value.set(E,Y)},100)},[]);return s.useEffect(()=>{const w=D.current;if(!w)return;const U=new IntersectionObserver(([L])=>{C.current=L.isIntersecting},{threshold:0});return U.observe(w),()=>U.disconnect()},[]),s.useEffect(()=>{const w=D.current;if(!w)return;const U=new We,L=new ct(-1,1,1,-1,0,1),E=new Be({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.setSize(w.offsetWidth,w.offsetHeight),E.setClearColor(0,0),w.appendChild(E.domElement),m.current=E;const Y=new De({vertexShader:On,fragmentShader:qn,uniforms:{uTime:{value:0},uResolution:{value:new he(w.offsetWidth,w.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:i},uPixelResolution:{value:o},uSpeed:{value:l},uDepthFade:{value:f},uFarPlane:{value:h},uColor:{value:O.clone()},uBrightness:{value:y},uGamma:{value:d},uDensity:{value:x},uVariant:{value:P},uDirection:{value:k*Math.PI/180},uRainbow:{value:v?1:0}},transparent:!0});I.current=Y;const A=new Oe(2,2);U.add(new ze(A,Y)),window.addEventListener("resize",W);const a=performance.now(),c=()=>{F.current=requestAnimationFrame(c),C.current&&(Y.uniforms.uTime.value=(performance.now()-a)*.001,E.render(U,L))};return c(),()=>{cancelAnimationFrame(F.current),window.removeEventListener("resize",W),_.current&&clearTimeout(_.current),w.contains(E.domElement)&&w.removeChild(E.domElement),E.dispose(),A.dispose(),Y.dispose(),m.current=null,I.current=null}},[W]),s.useEffect(()=>{const w=I.current;w&&(w.uniforms.uFlakeSize.value=t,w.uniforms.uMinFlakeSize.value=i,w.uniforms.uPixelResolution.value=o,w.uniforms.uSpeed.value=g?l*4:l,w.uniforms.uDepthFade.value=f,w.uniforms.uFarPlane.value=h,w.uniforms.uBrightness.value=y,w.uniforms.uGamma.value=d,w.uniforms.uDensity.value=x,w.uniforms.uVariant.value=P,w.uniforms.uDirection.value=k*Math.PI/180,w.uniforms.uColor.value.copy(O),w.uniforms.uRainbow.value=v?1:0)},[t,i,o,l,f,h,y,d,x,P,k,O,v,g]),e.jsx("div",{ref:D,className:`pixel-snow-container ${R}`,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",contain:"layout style paint",...M}})}const qt=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],jt={colors:qt[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},Bn=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],At={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},Pt={colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1},kt={color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},Rt={density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},Lt={color1:"#b117f8",color2:"#2c0b2e",speed:20},It={color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,depthFade:3,farPlane:10,gamma:.4545,variant:"snowflake",rainbow:!1,storm:!1},Fe={cyberpunk:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},akira:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"mountainDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16715818,15415358,16715818],rightCars:[14342906,12499683,9410532],sticks:14342906}},golden:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"deepDistortion",length:400,roadWidth:18,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16724527,10694672,11015432],rightCars:[16645616,15982240,14859144],sticks:16645616}},split:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"LongRaceDistortion",length:400,roadWidth:10,islandWidth:5,lanesPerRoad:2,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:70,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16736115,15158624,16715818],rightCars:[10806246,8442324,5489350],sticks:10806246}},highway:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14441248,14459680,14426144],rightCars:[3361783,15066861,12568307],sticks:12970219}}},Gn=({onClose:n,floatingLinesConfig:t,setFloatingLinesConfig:i,lightPillarsConfig:o,setLightPillarsConfig:l,ballpitConfig:f,setBallpitConfig:h,silkConfig:y,setSilkConfig:d,galaxyConfig:x,setGalaxyConfig:b,gradientConfig:k,setGradientConfig:v,pixelSnowConfig:g,setPixelSnowConfig:R,hyperspeedConfig:M,setHyperspeedConfig:D})=>{const{activeBackground:F,floatingLinesConfig:C,setFloatingLinesConfig:m,lightPillarsConfig:I,setLightPillarsConfig:_,ballpitConfig:P,setBallpitConfig:O,silkConfig:W,setSilkConfig:w,galaxyConfig:U,setGalaxyConfig:L,gradientConfig:E,setGradientConfig:Y,pixelSnowConfig:A,setPixelSnowConfig:a,hyperspeedConfig:c,setHyperspeedConfig:p}=ke(),u=t||C,j=i||m,z=o||I,q=l||_,K=f||P,T=h||O,Z=y||W,oe=d||w,ee=x||U,te=b||L,le=k||E,X=v||Y,se=g||A,ae=R||a,ce=M||c,pe=D||p,S=u||jt,N=(r,ie)=>{j&&j({...S,[r]:ie})},B=r=>{const ie=S.enabledWaves,Se=ie.includes(r)?ie.filter(Qt=>Qt!==r):[...ie,r];N("enabledWaves",Se)},Q=(r,ie)=>{const Se=[...S.colors];Se[r]=ie,N("colors",Se)},G=z||At,$=(r,ie)=>{q?q({...G,[r]:ie}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},J=K||Pt,ue=(r,ie)=>{T&&T({...J,[r]:ie})},ye=(r,ie)=>{const Se=[...J.colors];Se[r]=ie,ue("colors",Se)},xe=Z||kt,Re=(r,ie)=>{oe&&oe({...xe,[r]:ie})},re=ee||Rt,me=(r,ie)=>{te&&te({...re,[r]:ie})},Ae=le||Lt,et=(r,ie)=>{X&&X({...Ae,[r]:ie})},ge=se||It,Le=(r,ie)=>{ae&&ae({...ge,[r]:ie})},Ie=ce||Fe.cyberpunk,Jt=r=>{pe&&Fe[r]&&pe(Fe[r])},Ge=(r,ie)=>{pe&&pe({...Ie,[r]:ie})},Kt=()=>{F==="floatinglines"&&j?j(jt):F==="lightpillars"&&q?q(At):F==="ballpit"&&T?T(Pt):F==="silk"&&oe?oe(kt):F==="galaxy"&&te?te(Rt):F==="gradient"&&X?X(Lt):F==="pixelsnow"&&ae?ae(It):F==="hyperspeed"&&pe&&pe(Fe.cyberpunk)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:Kt,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(mi,{})}),e.jsx("button",{onClick:n,className:"close-btn",children:e.jsx(Ke,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[F==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:qt.map(r=>e.jsx("button",{className:"preset-btn",onClick:()=>N("colors",r.colors),style:{background:`linear-gradient(to right, ${r.colors[0]}, ${r.colors[1]}, ${r.colors[2]})`},title:r.name,children:JSON.stringify(S.colors)===JSON.stringify(r.colors)&&e.jsx(_t,{})},r.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:S.colors.map((r,ie)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:r,onChange:Se=>Q(ie,Se.target.value)}),e.jsx("span",{className:"hex-code",children:r})]},ie))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:S.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:S.count,onChange:r=>N("count",parseInt(r.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:S.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:S.distance,onChange:r=>N("distance",parseInt(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Amplitud de Onda ",e.jsx("span",{children:S.amplitude})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:S.amplitude||1,onChange:r=>N("amplitude",parseFloat(r.target.value))}),e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:S.bendRadius})]}),e.jsx("input",{type:"range",min:"5",max:"10",step:"0.1",value:S.bendRadius,onChange:r=>N("bendRadius",parseFloat(r.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:S.bendStrength})]}),e.jsx("input",{type:"range",min:"-7",max:"7",step:"0.1",value:S.bendStrength,onChange:r=>N("bendStrength",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(r=>e.jsx("button",{className:`toggle-btn ${S.enabledWaves.includes(r)?"active":""}`,onClick:()=>B(r),children:r.charAt(0).toUpperCase()+r.slice(1)},r))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${S.interactive!==!1?"active":""}`,onClick:()=>N("interactive",S.interactive===!1),style:{width:"100%",textAlign:"center"},children:S.interactive!==!1?"Activada (Ratón)":"Desactivada"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${S.rainbow?"active":""}`,onClick:()=>N("rainbow",!S.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"})]})]}),F==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:G.topColor,onChange:r=>$("topColor",r.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:G.bottomColor,onChange:r=>$("bottomColor",r.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:G.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:G.intensity,onChange:r=>$("intensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:G.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:G.rotationSpeed,onChange:r=>$("rotationSpeed",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:G.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:G.pillarWidth,onChange:r=>$("pillarWidth",parseFloat(r.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[G.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:G.pillarRotation,onChange:r=>$("pillarRotation",parseInt(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:G.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:G.pillarHeight,onChange:r=>$("pillarHeight",parseFloat(r.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:G.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:G.noiseIntensity,onChange:r=>$("noiseIntensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:G.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:G.glowAmount,onChange:r=>$("glowAmount",parseFloat(r.target.value))})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"toggles-row",children:Bn.map(r=>e.jsx("button",{className:`toggle-btn ${G.quality===r.value?"active":""}`,onClick:()=>$("quality",r.value),children:r.label},r.value))})}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${G.interactive!==!1?"active":""}`,onClick:()=>$("interactive",G.interactive===!1),style:{width:"100%",textAlign:"center"},children:G.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),F==="ballpit"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsx("div",{className:"color-pickers",children:J.colors.map((r,ie)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:r,onChange:Se=>ye(ie,Se.target.value)}),e.jsx("span",{className:"hex-code",children:r})]},ie))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad ",e.jsx("span",{children:J.count})]}),e.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:J.count,onChange:r=>ue("count",parseInt(r.target.value))}),e.jsxs("label",{children:["Gravedad ",e.jsx("span",{children:J.gravity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:J.gravity,onChange:r=>ue("gravity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Fricción ",e.jsx("span",{children:J.friction})]}),e.jsx("input",{type:"range",min:"0.8",max:"1",step:"0.001",value:J.friction,onChange:r=>ue("friction",parseFloat(r.target.value))}),e.jsxs("label",{children:["Rebote Pared ",e.jsx("span",{children:J.wallBounce})]}),e.jsx("input",{type:"range",min:"0",max:"1.5",step:"0.05",value:J.wallBounce,onChange:r=>ue("wallBounce",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${J.followCursor?"active":""}`,onClick:()=>ue("followCursor",!J.followCursor),style:{width:"100%",textAlign:"center"},children:J.followCursor?"Seguir Cursor":"Cursor Libre"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Eventos Divertidos"}),e.jsxs("div",{className:"toggles-row",children:[e.jsx("button",{className:`toggle-btn ${J.enableExplosion?"active":""}`,onClick:()=>ue("enableExplosion",!J.enableExplosion),title:"Haz clic para explotar las bolas",children:"💥 Explosión al Clic"}),e.jsx("button",{className:`toggle-btn ${J.rainbow?"active":""}`,onClick:()=>ue("rainbow",!J.rainbow),title:"Ciclo de colores automático",children:"🌈 Modo Arcoíris"})]})]})]}),F==="silk"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:xe.color,onChange:r=>Re("color",r.target.value)}),e.jsx("span",{className:"hex-code",children:xe.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:xe.speed})]}),e.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:xe.speed,onChange:r=>Re("speed",parseFloat(r.target.value))}),e.jsxs("label",{children:["Escala ",e.jsx("span",{children:xe.scale})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:xe.scale,onChange:r=>Re("scale",parseFloat(r.target.value))}),e.jsxs("label",{children:["Ruido ",e.jsx("span",{children:xe.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:xe.noiseIntensity,onChange:r=>Re("noiseIntensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[xe.rotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:xe.rotation,onChange:r=>Re("rotation",parseInt(r.target.value))})]})]}),F==="galaxy"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:re.density})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:re.density,onChange:r=>me("density",parseFloat(r.target.value))}),e.jsxs("label",{children:["Intensidad Brillo ",e.jsx("span",{children:re.glowIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:re.glowIntensity,onChange:r=>me("glowIntensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Saturación ",e.jsx("span",{children:re.saturation})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:re.saturation,onChange:r=>me("saturation",parseFloat(r.target.value))}),e.jsxs("label",{children:["Cambio de Tono (Hue) ",e.jsx("span",{children:re.hueShift})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:re.hueShift,onChange:r=>me("hueShift",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad Rotación ",e.jsx("span",{children:re.rotationSpeed})]}),e.jsx("input",{type:"range",min:"-0.5",max:"0.5",step:"0.01",value:re.rotationSpeed,onChange:r=>me("rotationSpeed",parseFloat(r.target.value))}),e.jsxs("label",{children:["Velocidad Estrellas ",e.jsx("span",{children:re.starSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:re.starSpeed,onChange:r=>me("starSpeed",parseFloat(r.target.value))}),e.jsxs("label",{children:["Velocidad Animación ",e.jsx("span",{children:re.speed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:re.speed,onChange:r=>me("speed",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${re.rainbow?"active":""}`,onClick:()=>me("rainbow",!re.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${re.warp?"active":""}`,onClick:()=>me("warp",!re.warp),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🚀 Velocidad Warp"})]})]}),F==="gradient"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:Ae.color1,onChange:r=>et("color1",r.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:Ae.color2,onChange:r=>et("color2",r.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad (segundos) ",e.jsxs("span",{children:[Ae.speed,"s"]})]}),e.jsx("input",{type:"range",min:"1",max:"60",step:"1",value:Ae.speed,onChange:r=>et("speed",parseInt(r.target.value))})]})]}),F==="pixelsnow"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:ge.color,onChange:r=>Le("color",r.target.value)}),e.jsx("span",{className:"hex-code",children:ge.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Variante"}),e.jsx("div",{className:"toggles-row",children:["snowflake","square","round"].map(r=>e.jsx("button",{className:`toggle-btn ${ge.variant===r?"active":""}`,onClick:()=>Le("variant",r),children:r.charAt(0).toUpperCase()+r.slice(1)},r))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:ge.speed})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:ge.speed,onChange:r=>Le("speed",parseFloat(r.target.value))}),e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:ge.density})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ge.density,onChange:r=>Le("density",parseFloat(r.target.value))}),e.jsxs("label",{children:["Dirección ",e.jsxs("span",{children:[ge.direction,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:ge.direction,onChange:r=>Le("direction",parseInt(r.target.value))}),e.jsxs("label",{children:["Tamaño Copo ",e.jsx("span",{children:ge.flakeSize})]}),e.jsx("input",{type:"range",min:"0.005",max:"0.05",step:"0.001",value:ge.flakeSize,onChange:r=>Le("flakeSize",parseFloat(r.target.value))}),e.jsxs("label",{children:["Brillo ",e.jsx("span",{children:ge.brightness})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:ge.brightness,onChange:r=>Le("brightness",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${ge.rainbow?"active":""}`,onClick:()=>Le("rainbow",!ge.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${ge.storm?"active":""}`,onClick:()=>Le("storm",!ge.storm),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🌪️ Modo Tormenta"})]})]}),F==="hyperspeed"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Estilo Visual"}),e.jsx("div",{className:"toggles-row",style:{flexWrap:"wrap"},children:Object.keys(Fe).map(r=>e.jsx("button",{className:`toggle-btn ${JSON.stringify(Ie.colors)===JSON.stringify(Fe[r].colors)?"active":""}`,onClick:()=>Jt(r),children:r.charAt(0).toUpperCase()+r.slice(1)},r))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Geometría"}),e.jsxs("label",{children:["Ancho Carretera ",e.jsx("span",{children:Ie.roadWidth})]}),e.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:Ie.roadWidth,onChange:r=>Ge("roadWidth",parseFloat(r.target.value))}),e.jsxs("label",{children:["Ancho Isla ",e.jsx("span",{children:Ie.islandWidth})]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:Ie.islandWidth,onChange:r=>Ge("islandWidth",parseFloat(r.target.value))}),e.jsxs("label",{children:["Carriles ",e.jsx("span",{children:Ie.lanesPerRoad})]}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:Ie.lanesPerRoad,onChange:r=>Ge("lanesPerRoad",parseInt(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Distorsión"}),e.jsxs("select",{value:Ie.distortion,onChange:r=>Ge("distortion",r.target.value),style:{width:"100%",padding:"8px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",color:"white",border:"1px solid rgba(255, 255, 255, 0.2)",marginTop:"5px",cursor:"pointer"},children:[e.jsx("option",{style:{color:"black"},value:"turbulentDistortion",children:"Turbulent"}),e.jsx("option",{style:{color:"black"},value:"deepDistortion",children:"Deep"}),e.jsx("option",{style:{color:"black"},value:"mountainDistortion",children:"Mountain"}),e.jsx("option",{style:{color:"black"},value:"xyDistortion",children:"XY"}),e.jsx("option",{style:{color:"black"},value:"LongRaceDistortion",children:"Long Race"})]})]})]})]})]})},Hn=({effectOptions:n=Fe.cyberpunk})=>{const t=s.useRef(null),i=s.useRef(null);return s.useEffect(()=>{if(i.current){i.current.dispose();const A=document.getElementById("lights");if(A)for(;A.firstChild;)A.removeChild(A.firstChild)}const o={uFreq:{value:new H(3,6,10)},uAmp:{value:new H(30,30,20)}},l={uFreq:{value:new he(5,2)},uAmp:{value:new he(25,15)}},f={uFreq:{value:new he(2,3)},uAmp:{value:new he(35,10)}},h={uFreq:{value:new ut(4,8,8,1)},uAmp:{value:new ut(25,5,10,10)}},y={uFreq:{value:new he(4,8)},uAmp:{value:new he(10,20)},uPowY:{value:new he(20,2)}};let d=A=>Math.sin(A)*.5+.5;const x={mountainDistortion:{uniforms:o,getDistortion:`
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
        `,getJS:(A,a)=>{let c=.02,p=o.uFreq.value,u=o.uAmp.value,j=new H(Math.cos(A*Math.PI*p.x+a)*u.x-Math.cos(c*Math.PI*p.x+a)*u.x,d(A*Math.PI*p.y+a)*u.y-d(c*Math.PI*p.y+a)*u.y,d(A*Math.PI*p.z+a)*u.z-d(c*Math.PI*p.z+a)*u.z),z=new H(2,2,2),q=new H(0,0,-5);return j.multiply(z).add(q)}},xyDistortion:{uniforms:l,getDistortion:`
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
        `,getJS:(A,a)=>{let c=.02,p=l.uFreq.value,u=l.uAmp.value,j=new H(Math.cos(A*Math.PI*p.x+a)*u.x-Math.cos(c*Math.PI*p.x+a)*u.x,Math.sin(A*Math.PI*p.y+a+Math.PI/2)*u.y-Math.sin(c*Math.PI*p.y+a+Math.PI/2)*u.y,0),z=new H(2,.4,1),q=new H(0,0,-3);return j.multiply(z).add(q)}},LongRaceDistortion:{uniforms:f,getDistortion:`
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
        `,getJS:(A,a)=>{let c=.0125,p=f.uFreq.value,u=f.uAmp.value,j=new H(Math.sin(A*Math.PI*p.x+a)*u.x-Math.sin(c*Math.PI*p.x+a)*u.x,Math.sin(A*Math.PI*p.y+a)*u.y-Math.sin(c*Math.PI*p.y+a)*u.y,0),z=new H(1,1,0),q=new H(0,0,-5);return j.multiply(z).add(q)}},turbulentDistortion:{uniforms:h,getDistortion:`
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
        `,getJS:(A,a)=>{const c=h.uFreq.value,p=h.uAmp.value,u=T=>Math.cos(Math.PI*T*c.x+a)*p.x+Math.pow(Math.cos(Math.PI*T*c.y+a*(c.y/c.x)),2)*p.y,j=T=>-d(Math.PI*T*c.z+a)*p.z-Math.pow(d(Math.PI*T*c.w+a/(c.z/c.w)),5)*p.w;let z=new H(u(A)-u(A+.007),j(A)-j(A+.007),0),q=new H(-2,-5,0),K=new H(0,0,-10);return z.multiply(q).add(K)}},turbulentDistortionStill:{uniforms:h,getDistortion:`
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
        `,getJS:(A,a)=>{const c=y.uFreq.value,p=y.uAmp.value,u=y.uPowY.value,j=Z=>Math.sin(Z*Math.PI*c.x+a)*p.x,z=Z=>Math.pow(Z*u.x,u.y)+Math.sin(Z*Math.PI*c.y+a)*p.y;let q=new H(j(A)-j(A+.01),z(A)-z(A+.01),0),K=new H(-2,-4,0),T=new H(0,0,-10);return q.multiply(K).add(T)}}};class b{constructor(a,c={}){this.options=c,this.options.distortion==null&&(this.options.distortion={uniforms:k,getDistortion:v}),this.container=a,this.renderer=new Be({antialias:!1,alpha:!0}),this.renderer.setSize(a.offsetWidth,a.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new pi(this.renderer),a.append(this.renderer.domElement),this.camera=new Et(c.fov,a.offsetWidth/a.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new We,this.scene.background=null;let p=new gi(c.colors.background,c.length*.2,c.length*500);this.scene.fog=p,this.fogUniforms={fogColor:{value:p.color},fogNear:{value:p.near},fogFar:{value:p.far}},this.clock=new lt,this.assets={},this.disposed=!1,this.road=new P(this,c),this.leftCarLights=new D(this,c,c.colors.leftCars,c.movingAwaySpeed,new he(0,1-c.carLightsFade)),this.rightCarLights=new D(this,c,c.colors.rightCars,c.movingCloserSpeed,new he(1,0+c.carLightsFade)),this.leftSticks=new m(this,c),this.fovTarget=c.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const a=this.container.offsetWidth,c=this.container.offsetHeight;this.renderer.setSize(a,c),this.camera.aspect=a/c,this.camera.updateProjectionMatrix(),this.composer.setSize(a,c)}initPasses(){this.renderPass=new vi(this.scene,this.camera),this.bloomPass=new dt(this.camera,new xi({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const a=new dt(this.camera,new Ne({preset:yi.MEDIUM,searchImage:Ne.searchImageDataURL,areaImage:Ne.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,a.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(a)}loadAssets(){const a=this.assets;return new Promise(c=>{const p=new bi(c),u=new Image,j=new Image;a.smaa={},u.addEventListener("load",function(){a.smaa.search=this,p.itemEnd("smaa-search")}),j.addEventListener("load",function(){a.smaa.area=this,p.itemEnd("smaa-area")}),p.itemStart("smaa-search"),p.itemStart("smaa-area"),u.src=Ne.searchImageDataURL,j.src=Ne.areaImageDataURL})}init(){this.initPasses();const a=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-a.roadWidth/2-a.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(a.roadWidth/2+a.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(a.roadWidth+a.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(a){this.options.onSpeedUp&&this.options.onSpeedUp(a),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(a){this.options.onSlowDown&&this.options.onSlowDown(a),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(a){this.options.onSpeedUp&&this.options.onSpeedUp(a),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(a){this.options.onSlowDown&&this.options.onSlowDown(a),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(a){a.preventDefault()}update(a){let c=Math.exp(-(-60*Math.log2(.9))*a);this.speedUp+=M(this.speedUp,this.speedUpTarget,c,1e-5),this.timeOffset+=this.speedUp*a;let p=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(p),this.leftCarLights.update(p),this.leftSticks.update(p),this.road.update(p);let u=!1,j=M(this.camera.fov,this.fovTarget,c);if(j!==0&&(this.camera.fov+=j*a*6,u=!0),this.options.distortion.getJS){const z=this.options.distortion.getJS(.025,p);this.camera.lookAt(new H(this.camera.position.x+z.x,this.camera.position.y+z.y,this.camera.position.z+z.z)),u=!0}u&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(a){this.composer.render(a)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(a,c,p){this.composer.setSize(a,c,p)}tick(){if(this.disposed||!this)return;if(Y(this.renderer,this.setSize)){const c=this.renderer.domElement;this.camera.aspect=c.clientWidth/c.clientHeight,this.camera.updateProjectionMatrix()}const a=this.clock.getDelta();this.render(a),this.update(a),requestAnimationFrame(this.tick)}}const k={uDistortionX:{value:new he(80,3)},uDistortionY:{value:new he(-40,2.5)}},v=`
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
    `,g=A=>Array.isArray(A)?Math.random()*(A[1]-A[0])+A[0]:Math.random()*A,R=A=>Array.isArray(A)?A[Math.floor(Math.random()*A.length)]:A;function M(A,a,c=.1,p=.001){let u=(a-A)*c;return Math.abs(u)<p&&(u=a-A),u}class D{constructor(a,c,p,u,j){this.webgl=a,this.options=c,this.colors=p,this.speed=u,this.fade=j}init(){const a=this.options;let c=new wi(new H(0,0,0),new H(0,0,-1)),p=new Ci(c,40,1,8,!1),u=new ht().copy(p);u.instanceCount=a.lightPairsPerRoadWay*2;let j=a.roadWidth/a.lanesPerRoad,z=[],q=[],K=[],T=this.colors;Array.isArray(T)?T=T.map(ee=>new we(ee)):T=new we(T);for(let ee=0;ee<a.lightPairsPerRoadWay;ee++){let te=g(a.carLightsRadius),le=g(a.carLightsLength),X=g(this.speed),ae=ee%a.lanesPerRoad*j-a.roadWidth/2+j/2,ce=g(a.carWidthPercentage)*j,pe=g(a.carShiftX)*j;ae+=pe;let S=g(a.carFloorSeparation)+te*1.3,N=-g(a.length);z.push(ae-ce/2),z.push(S),z.push(N),z.push(ae+ce/2),z.push(S),z.push(N),q.push(te),q.push(le),q.push(X),q.push(te),q.push(le),q.push(X);let B=R(T);K.push(B.r),K.push(B.g),K.push(B.b),K.push(B.r),K.push(B.g),K.push(B.b)}u.setAttribute("aOffset",new Ee(new Float32Array(z),3,!1)),u.setAttribute("aMetrics",new Ee(new Float32Array(q),3,!1)),u.setAttribute("aColor",new Ee(new Float32Array(K),3,!1));let Z=new De({fragmentShader:F,vertexShader:C,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:a.length},uFade:{value:this.fade}},this.webgl.fogUniforms,a.distortion.uniforms)});Z.onBeforeCompile=ee=>{ee.vertexShader=ee.vertexShader.replace("#include <getDistortion_vertex>",a.distortion.getDistortion)};let oe=new ze(u,Z);oe.frustumCulled=!1,this.webgl.scene.add(oe),this.mesh=oe}update(a){this.mesh.material.uniforms.uTime.value=a}}const F=`
      #define USE_FOG;
      ${Ce.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${Ce.fog_fragment}
      }
    `,C=`
      #define USE_FOG;
      ${Ce.fog_pars_vertex}
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
        ${Ce.fog_vertex}
      }
    `;class m{constructor(a,c){this.webgl=a,this.options=c}init(){const a=this.options,c=new Oe(1,1);let p=new ht().copy(c),u=a.totalSideLightSticks;p.instanceCount=u;let j=a.length/(u-1);const z=[],q=[],K=[];let T=a.colors.sticks;Array.isArray(T)?T=T.map(ee=>new we(ee)):T=new we(T);for(let ee=0;ee<u;ee++){let te=g(a.lightStickWidth),le=g(a.lightStickHeight);z.push((ee-1)*j*2+j*Math.random());let X=R(T);q.push(X.r),q.push(X.g),q.push(X.b),K.push(te),K.push(le)}p.setAttribute("aOffset",new Ee(new Float32Array(z),1,!1)),p.setAttribute("aColor",new Ee(new Float32Array(q),3,!1)),p.setAttribute("aMetrics",new Ee(new Float32Array(K),2,!1));const Z=new De({fragmentShader:_,vertexShader:I,side:ft,uniforms:Object.assign({uTravelLength:{value:a.length},uTime:{value:0}},this.webgl.fogUniforms,a.distortion.uniforms)});Z.onBeforeCompile=ee=>{ee.vertexShader=ee.vertexShader.replace("#include <getDistortion_vertex>",a.distortion.getDistortion)};const oe=new ze(p,Z);oe.frustumCulled=!1,this.webgl.scene.add(oe),this.mesh=oe}update(a){this.mesh.material.uniforms.uTime.value=a}}const I=`
      #define USE_FOG;
      ${Ce.fog_pars_vertex}
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
        ${Ce.fog_vertex}
      }
    `,_=`
      #define USE_FOG;
      ${Ce.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${Ce.fog_fragment}
      }
    `;class P{constructor(a,c){this.webgl=a,this.options=c,this.uTime={value:0}}createPlane(a,c,p){const u=this.options;let j=100;const z=new Oe(p?u.roadWidth:u.islandWidth,u.length,20,j);let q={uTravelLength:{value:u.length},uColor:{value:new we(p?u.colors.roadColor:u.colors.islandColor)},uTime:this.uTime};p&&(q=Object.assign(q,{uLanes:{value:u.lanesPerRoad},uBrokenLinesColor:{value:new we(u.colors.brokenLines)},uShoulderLinesColor:{value:new we(u.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:u.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:u.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:u.brokenLinesWidthPercentage}}));const K=new De({fragmentShader:p?L:W,vertexShader:E,side:ft,uniforms:Object.assign(q,this.webgl.fogUniforms,u.distortion.uniforms)});K.onBeforeCompile=Z=>{Z.vertexShader=Z.vertexShader.replace("#include <getDistortion_vertex>",u.distortion.getDistortion)};const T=new ze(z,K);return T.rotation.x=-Math.PI/2,T.position.z=-u.length/2,T.position.x+=(this.options.islandWidth/2+u.roadWidth/2)*a,this.webgl.scene.add(T),T}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(a){this.uTime.value=a}}const O=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${Ce.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${Ce.fog_fragment}
      }
    `,W=O.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),L=O.replace("#include <roadMarkings_fragment>",`
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
    `),E=`
      #define USE_FOG;
      uniform float uTime;
      ${Ce.fog_pars_vertex}
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
        ${Ce.fog_vertex}
      }
    `;function Y(A,a){const c=A.domElement,p=c.clientWidth,u=c.clientHeight,j=c.width!==p||c.height!==u;return j&&a(p,u,!1),j}return(function(){const A=document.getElementById("lights"),a={...n};a.distortion=x[a.distortion];const c=new b(A,a);i.current=c,c.loadAssets().then(c.init)})(),()=>{i.current&&i.current.dispose()}},[n]),e.jsx("div",{id:"lights",ref:t})},Yn=({floatingLinesConfig:n,lightPillarsConfig:t,ballpitConfig:i,silkConfig:o,galaxyConfig:l,gradientConfig:f,pixelSnowConfig:h,hyperspeedConfig:y})=>{const{activeBackground:d,floatingLinesConfig:x,lightPillarsConfig:b,ballpitConfig:k,silkConfig:v,galaxyConfig:g,gradientConfig:R,pixelSnowConfig:M,hyperspeedConfig:D}=ke(),F=n||x,C=t||b,m=i||k,I=o||v,_=l||g,P=f||R,O=h||M,W=y||D,w=F||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},U=C||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},L=m||{colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1,rainbow:!1},E=I||{color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},Y=_||{density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},A=P||{color1:"#b117f8",color2:"#2c0b2e",speed:20},a=O||{color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,variant:"snowflake",rainbow:!1,storm:!1};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(ve,{mode:"wait",children:[d==="gradient"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(bn,{color1:A.color1,color2:A.color2,speed:A.speed})},"gradient"),d==="galaxy"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(jn,{density:Y.density,glowIntensity:Y.glowIntensity,saturation:Y.saturation,hueShift:Y.hueShift,twinkleIntensity:Y.twinkleIntensity,rotationSpeed:Y.rotationSpeed,starSpeed:Y.starSpeed,speed:Y.speed,rainbow:Y.rainbow,warp:Y.warp})},"galaxy"),d==="silk"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(Ot,{speed:E.speed,scale:E.scale,color:E.color,noiseIntensity:E.noiseIntensity,rotation:E.rotation})},"silk"),d==="ballpit"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:e.jsx(Tn,{count:L.count,gravity:L.gravity,friction:L.friction,wallBounce:L.wallBounce,followCursor:L.followCursor,colors:L.colors,enableExplosion:L.enableExplosion,rainbow:L.rainbow})},"ballpit"),d==="floatinglines"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Nn,{linesGradient:w.colors,lineCount:w.count,lineDistance:w.distance,animationSpeed:.5,bendRadius:w.bendRadius,bendStrength:w.bendStrength,enabledWaves:w.enabledWaves,interactive:w.interactive??!1,parallax:w.parallax??!1,amplitude:w.amplitude??1,rainbow:w.rainbow})},"floatinglines"),d==="lightpillars"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Un,{topColor:U.topColor,bottomColor:U.bottomColor,intensity:U.intensity,rotationSpeed:U.rotationSpeed,glowAmount:U.glowAmount??.002,pillarWidth:U.pillarWidth,pillarHeight:U.pillarHeight,noiseIntensity:U.noiseIntensity,pillarRotation:U.pillarRotation,interactive:U.interactive??!0,quality:U.quality??"high"})},"lightpillars"),d==="pixelsnow"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Wn,{color:a.color,flakeSize:a.flakeSize,minFlakeSize:a.minFlakeSize,pixelResolution:a.pixelResolution,speed:a.speed,density:a.density,direction:a.direction,brightness:a.brightness,variant:a.variant,rainbow:a.rainbow,storm:a.storm})},"pixelsnow"),d==="hyperspeed"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Hn,{effectOptions:W})},"hyperspeed")]})})},Vn=({onItemClick:n,isOpen:t,onToggle:i,position:o="left",colors:l=["#B19EEF","#5227FF"],items:f=[],socialItems:h=[],displaySocials:y=!0,displayItemNumbering:d=!0,className:x,logoUrl:b=null,menuButtonColor:k="#fff",openMenuButtonColor:v="#000",accentColor:g="#5227FF",changeMenuColorOnOpen:R=!0,isFixed:M=!1,closeOnClickAway:D=!0,onMenuOpen:F,onMenuClose:C})=>{const[m,I]=s.useState(!1),_=typeof t=="boolean",P=_?t:m,O=s.useRef(!1),W=s.useRef(null),w=s.useRef(null),U=s.useRef([]),L=s.useRef(null),E=s.useRef(null),Y=s.useRef(null),A=s.useRef(null),a=s.useRef(null),[c,p]=s.useState(["Menu","Close"]),u=s.useRef(null),j=s.useRef(null),z=s.useRef(null),q=s.useRef(null),K=s.useRef(null),T=s.useRef(null),Z=s.useRef(!1),oe=s.useRef(null);s.useLayoutEffect(()=>{const S=ne.context(()=>{const N=W.current,B=w.current,Q=L.current,G=E.current,$=Y.current,J=A.current;if(!N||!Q||!G||!$||!J)return;let ue=[];B&&(ue=Array.from(B.querySelectorAll(".sm-prelayer"))),U.current=ue;const ye=o==="left"?-100:100;ne.set([N,...ue],{xPercent:ye}),ne.set(Q,{transformOrigin:"50% 50%",rotate:0}),ne.set(G,{transformOrigin:"50% 50%",rotate:90}),ne.set($,{rotate:0,transformOrigin:"50% 50%"}),ne.set(J,{yPercent:0}),T.current&&ne.set(T.current,{color:k})});return()=>S.revert()},[k,o]);const ee=s.useCallback(()=>{const S=W.current,N=U.current;if(!S)return null;u.current?.kill(),j.current&&(j.current.kill(),j.current=null),oe.current?.kill();const B=Array.from(S.querySelectorAll(".sm-panel-itemLabel")),Q=Array.from(S.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),G=S.querySelector(".sm-socials-title"),$=Array.from(S.querySelectorAll(".sm-socials-link")),J=N.map(me=>({el:me,start:Number(ne.getProperty(me,"xPercent"))})),ue=Number(ne.getProperty(S,"xPercent"));B.length&&ne.set(B,{yPercent:140,rotate:10}),Q.length&&ne.set(Q,{"--sm-num-opacity":0}),G&&ne.set(G,{opacity:0}),$.length&&ne.set($,{y:25,opacity:0});const ye=ne.timeline({paused:!0});J.forEach((me,Ae)=>{ye.fromTo(me.el,{xPercent:me.start},{xPercent:0,duration:.8,ease:"power4.out"},Ae*.07)});const Re=(J.length?(J.length-1)*.07:0)+(J.length?.08:0),re=1;if(ye.fromTo(S,{xPercent:ue},{xPercent:0,duration:re,ease:"power4.out"},Re),B.length){const Ae=Re+re*.15;ye.to(B,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},Ae),Q.length&&ye.to(Q,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},Ae+.1)}if(G||$.length){const me=Re+re*.4;G&&ye.to(G,{opacity:1,duration:.5,ease:"power2.out"},me),$.length&&ye.to($,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{ne.set($,{clearProps:"opacity"})}},me+.04)}return u.current=ye,ye},[]),te=s.useCallback(()=>{if(Z.current)return;Z.current=!0;const S=ee();S?(S.eventCallback("onComplete",()=>{Z.current=!1}),S.play(0)):Z.current=!1},[ee]),le=s.useCallback(()=>{u.current?.kill(),u.current=null,oe.current?.kill();const S=W.current,N=U.current;if(!S)return;const B=[...N,S];j.current?.kill();const Q=o==="left"?-100:100;j.current=ne.to(B,{xPercent:Q,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const G=Array.from(S.querySelectorAll(".sm-panel-itemLabel"));G.length&&ne.set(G,{yPercent:140,rotate:10});const $=Array.from(S.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));$.length&&ne.set($,{"--sm-num-opacity":0});const J=S.querySelector(".sm-socials-title"),ue=Array.from(S.querySelectorAll(".sm-socials-link"));J&&ne.set(J,{opacity:0}),ue.length&&ne.set(ue,{y:25,opacity:0}),Z.current=!1}})},[o]),X=s.useCallback(S=>{const N=Y.current;N&&(z.current?.kill(),S?z.current=ne.to(N,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):z.current=ne.to(N,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),se=s.useCallback(S=>{const N=T.current;if(N)if(K.current?.kill(),R){const B=S?v:k;K.current=ne.to(N,{color:B,delay:.18,duration:.3,ease:"power2.out"})}else ne.set(N,{color:k})},[v,k,R]);st.useEffect(()=>{if(T.current)if(R){const S=O.current?v:k;ne.set(T.current,{color:S})}else ne.set(T.current,{color:k})},[R,k,v]);const ae=s.useCallback(S=>{const N=A.current;if(!N)return;q.current?.kill();const B=S?"Menu":"Close",Q=S?"Close":"Menu",G=3,$=[B];let J=B;for(let xe=0;xe<G;xe++)J=J==="Menu"?"Close":"Menu",$.push(J);J!==Q&&$.push(Q),$.push(Q),p($),ne.set(N,{yPercent:0});const ue=$.length,ye=(ue-1)/ue*100;q.current=ne.to(N,{yPercent:-ye,duration:.5+ue*.07,ease:"power4.out"})},[]),ce=s.useCallback(()=>{if(_)i&&i(!P);else{const S=!O.current;O.current=S,I(S),S?(F?.(),te()):(C?.(),le()),X(S),se(S),ae(S)}},[_,t,i,P,te,le,X,se,ae,F,C]);st.useEffect(()=>{_&&(O.current=t,t?(F?.(),te()):(C?.(),le()),X(t),se(t),ae(t))},[t,_,te,le,X,se,ae,F,C]);const pe=s.useCallback(()=>{_?P&&i&&i(!1):O.current&&(O.current=!1,I(!1),C?.(),le(),X(!1),se(!1),ae(!1))},[_,P,i,le,X,se,ae,C]);return e.jsxs("div",{className:(x?x+" ":"")+"staggered-menu-wrapper"+(M?" fixed-wrapper":""),style:g?{"--sm-accent":g}:void 0,"data-position":o,"data-open":P||void 0,children:[P&&D&&e.jsx("div",{className:"sm-backdrop",onClick:()=>pe(),style:{position:"absolute",inset:0,zIndex:5,pointerEvents:"auto"},"aria-hidden":"true"}),e.jsx("div",{ref:w,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let N=[...l&&l.length?l.slice(0,4):["#1e1e22","#35353c"]];if(N.length>=3){const B=Math.floor(N.length/2);N.splice(B,1)}return N.map((B,Q)=>e.jsx("div",{className:"sm-prelayer",style:{background:B}},Q))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:b?e.jsx("img",{src:b,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:T,className:"sm-toggle","aria-label":P?"Close menu":"Open menu","aria-expanded":P,"aria-controls":"staggered-menu-panel",onClick:ce,type:"button",children:[e.jsx("span",{ref:a,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:A,className:"sm-toggle-textInner",children:c.map((S,N)=>e.jsx("span",{className:"sm-toggle-line",children:S},N))})}),e.jsxs("span",{ref:Y,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:L,className:"sm-icon-line"}),e.jsx("span",{ref:E,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:W,className:"staggered-menu-panel","aria-hidden":!P,children:e.jsxs("div",{className:"sm-panel-inner",children:[e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":d||void 0,children:f&&f.length?f.map((S,N)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:B=>{B.preventDefault(),n&&n(S.id)},"aria-label":S.ariaLabel,"data-index":N+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:S.label})})},S.label+N)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})}),y&&h&&h.length>0&&e.jsxs("div",{className:"sm-socials","aria-label":"Social links",children:[e.jsx("h3",{className:"sm-socials-title",children:"Extras"}),e.jsx("ul",{className:"sm-socials-list",role:"list",children:h.map((S,N)=>e.jsx("li",{className:"sm-socials-item",children:e.jsx("a",{href:S.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link",children:S.label})},S.label+N))})]})]})})]})};function Xn({children:n,className:t="",onClick:i,mouseX:o,spring:l,distance:f,magnification:h,baseItemSize:y}){const d=s.useRef(null),x=qe(0),b=rt(o,g=>{if(!d.current)return 1/0;const R=d.current.getBoundingClientRect(),M=R.x+R.width/2;return Math.abs(g-M)}),k=rt(b,[0,f],[h,y]),v=Qe(k,l);return e.jsx(V.div,{ref:d,style:{width:v,height:v,minWidth:v,minHeight:v},onHoverStart:()=>x.set(1),onHoverEnd:()=>x.set(0),onClick:i,className:`dock-item ${t}`,"aria-haspopup":"true",children:s.Children.map(n,g=>s.cloneElement(g,{isHovered:x}))})}function Jn({children:n,className:t="",...i}){const{isHovered:o}=i,[l,f]=s.useState(!1);return s.useEffect(()=>{const h=o.on("change",y=>{f(y===1)});return()=>h()},[o]),e.jsx(ve,{children:l&&e.jsx(V.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:n})})}function Kn({children:n,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:n})}function Qn({items:n,className:t="",spring:i={mass:.1,stiffness:300,damping:20},magnification:o=70,distance:l=200,panelHeight:f=68,dockHeight:h=256,baseItemSize:y=50}){const d=qe(1/0),x=qe(0),b=s.useMemo(()=>Math.max(h,o+o/2+4),[o,h]),k=rt(x,[0,1],[f,b]),v=Qe(k,i);return e.jsx(V.div,{style:{height:v,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(V.div,{onMouseMove:({pageX:g})=>{x.set(1),d.set(g)},onMouseLeave:()=>{x.set(0),d.set(1/0)},className:`dock-panel ${t}`,style:{height:f},role:"toolbar","aria-label":"Application dock",children:n.map((g,R)=>e.jsxs(Xn,{onClick:g.onClick,className:g.className,mouseX:d,spring:i,distance:l,magnification:o,baseItemSize:y,children:[e.jsx(Kn,{children:g.icon}),e.jsx(Jn,{children:g.label})]},R))})})}const Wt=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,Bt=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,Gt=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,Ht=""+new URL("duck-BnqypGlP.png",import.meta.url).href,Yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpAgoQDSR9aWoCAAANHklEQVRo3u1YaXRVRbb+qk6dc+6cm4kwBTMSBkNAMYBEaBEEERGxsRFFRe3GJ9j4wJa37AZppN/CtZ6rl3NAeTTggIDIEIiCCKJMYQqEOSEJZCIkN/cmufM5p+r9SCBEE7BZLN6ffGvd86NuDfur/e3auwroQAc60IEOdODmQa735yuTngAA+AI+QJYRDAQw84W/QYGCgZMG/X/b3gqsrcY3Z74MSZFRfbECEpHMhJBuRFFLtcoy/dOVi3/TxPNeeglvZWfjhbFjYOg6KFNwYt8ujHnqRSz84L1bToS21ajrYehaiAgibI2N9QPCXu/HxOcbpppt0xiTHbIsX3fSpe/9E//IzsbItGQQQmNAyABCpbjYhCSs+2wJXlm16pYTaVNarz//LAhB54qS0iWESHmqrG7hxIgO+P3TzE7nHAJSvWzj5lZj/vO551B8PB8RsZ0Q8vvAdQ2qzZEgAr5lDLhbp3Qvi4h8OuCqqaMCoBKDbLXBHBEJLRjEqCmTMXny5JsmIrXVmDVgAAShRmO9x60oar0h0SP22JgSSPLmb/LyPXKnOFwoPAcA2LlzAfRyIBDwQ4RDoFaH2QgH0wmho7kWnGVjdGy02WzSdP2OgN+vAoiVJJYMSrsSJvMZGzfU7/nXMpw9dAAzZs9BTm7urfPI3Oenwe2qhaaFY0Je7zKqmL4XQu8VER3zP4LzEp1I+GTtOgDA8w8/BE3T8NJ32/Fu1pDhVPBXFUnKMlEazSghFlmGQiWEOYc3HAYXgjf/whpIpUHIp6rd/qGuaV6z3Y6lX2+4dR75+Wg+1icnQwiiUcryHM7IkwIiTGV2GkBw6br1+NusGQgVlSA+NQWDR/+efPHajGcVwZdEm0wDI02qxSrLxMQYJNK0VxIhMDMGi8yIVWbUqsiymdEoXddH+EMhj+fM6b1RCclIjOqM6dOmIvfHH/8tIm0GO2n5aiAo1LXwxaDf9zUB3BACubm5KDt5GnckJ+DktxuR+9myHsww/hpjNsfZFPmq8dcTAgGBKjHYZYXysJF1sCpSXrZmLbjuw4E9PyPnu1y8/MTvsWrJkpuX1rXYtWsXwDmWLJyPbglJqDh/HvWuy3DGdI0J+L33M0UaEZ8YF+O55B7tJJJdZayNiQkEBAQA0fzRhYGQZsDPDQwc1e8gIeSnHTkHma7RtZDVozTk9imOSKQM6o+a4nIsWXd9yd2QyOvPTcO+b3PQPSUNIW8duGTtSqmY6HRanu7dv/uAvncnKql3dseBnaewJ/cYuFdvcnPzzEIAAgCHACQCiVFQJsFsVRGXEIU7ByYi68F0eOsD2PvDKRzdW+gpL6095GvQNgkmb/DVVJRFxifC0DQk3dkfi7M//PeInFyzBos+zoYsK2isqQZTLJ2FCE+J6mSdmj4wMePeB3qT3hkJMNtUQAhoIR2lRdUoOl2BBo8PWkiHpulQVBlWqwKrwwq7wwK70wKTWYbDaUFEpBWKSW52U5M5njovis9UYc+Okyg4WFLgdvnfFbL1C8JDAUMLIz1rKBb+873fRmTNmjXYlP0xhAAs0QnUdeHUKEcEm5c5rNfQEeP7IymtK2RFghC8abuvTEYpQAggSIsrCAAiWq/ULC8hxK8NIgSgBFrQwNmCcmxZuz98ZG/RJ2GDvUmJcAkhMOah0Zi+YOH1iSxYsAAle/aCcwOK2SZ7Llf+OSEl5o0JU4dGDRrWC7KJQXB+I0XeEhCJot7lx+pPfsDOrSdW6jC/yojhlhhB2rDf4c2///1q318dv8kmFUIAztgkqba8cHbfu7q/Nf31cfZ+mcmgFNfI4DZACJgsMtLS41Fb5c4oL6pyqFbHTgpo3upLOFpYdLVrq+N3zpQpYLKC5du+Q2XxsT+m9uk8f9qs0aaEtDgIbtw+Atdy4QL2CDOenjESd2clvRhodP0p/+cdYKoZf/2PP17t18oj+qWLYBLF+n+tHNW5q+2DF+aMdabe2e22Sal9NoDFZkKPxFjpzPEL/SUl8ojP4yo9c/QELjTUtyby2tRnoKgquGAxZgv96MmX7u99z3092wzI2wlCCAilEJzDGW2DJDHbmfyLXQhzbIrqHB16ZfZsbN66tUVa46fPREPNJcDQJ/YflDR0yIg+rU4kIQBu3F7PEAJUXnDh8J6zMAwDEMCQEb2R0qfz0KDXPTDsbcSeLVsBNMfIinfewdJ5c6Ha45yOSHXq78ZkUJNFac7FACEUBXkl+OrTHxAO6reRCcXp4xexfvlu+LwhAIDVbkJaejcrlZAVDrrgjIpuIbJ//wnoQT94ODAgsWdc/7R+3YHmuCAgCPjCyFm9H9UV9SD0hsXALYRAap9u8DUGUVZU2+QiAnRP6ATVxPppak92uaa6hUh0JycMLQgQ0bdrjxibxaq2nLIUuFBUhbLSagwfkwHF3P7t8IqeyS+KRvKrIpKASPTGmyIEomLtsNhNqCxzNSdbICrGAbNZjjUCLtUIh1qIOCIcMIQBAZgpbcqs16yJC0WXYLObkJjWFeCivTVR7/bjXEEZaqsbQJpzraEbcNd5YehXPAwE/WEcP1CMi0U10MLtS1UAYIxCVhj83iCuBK1hGBACukwkzghtITLp+T9AVq2QJHb8/OlKf3WFG4QQcC7ANY46lw+d46NhjzC3W1bUu3344B/r8fbc1TiyrxCgBIQS1F6ux0eLv0FpUU1TCUMJ3LUN+OyDbVj8ly9wLK+4Xc8QEGiagWAgBCpdbUT5hRr4A6Giex5cGrDarACaX1FOHTkBppohqWx34emq7A8XbZjeIynOGgpqRs/0Hvk1VY0OpkiptJ0FhRCw2FSMGj8QdAJFz/TmGCMEFqsZWQ9kQDHTq/VVp26RmDFvAqorPUju1bX9aoE0eTng0xCfGAcQCq/Hh0M/nfMH/UbOsV3PoqS46KqnAQCTs4aCcw5Iktnw+e/lXNxhCOFVrfbdENqr996fMveV+Y9DkgTayyxNRSMA3rogJJRA/EKShJImzXPRbq4ilGLbN4eQ8+U+vPjaONgcJuzIOYqdWwtWhgLKdNVEgsl9emFRdnbLu1ZS5l0o2p8HSmmAKNIOYXAwAkgkDF0XBVUXXUZDvV+KjLa02kFCaUulCwFw/Mowwa+TVCkBaWMMIQSNHj9+3nYCIb+Wt/zdrZqvMax66nxbOWdLiPAF9ZCERdnZrT1yBT/+uAXx/VJxftcJjJzwGJ4akQVuoIsEPeeRKYPvemzqfVDUJsGGwzpOHC5F/r5CcA6k35OAtPQeiIi0AWg7eRJKwHWBy1X1KDlbARCClD7dEBvnhGgeQyhBKKjj6//djS1fHTjFVOuUujpfMRGExdiOu71GBoxwEN1TeuG9r1a3TeSXWLrmc+QsWAg1ImKiKtPsEeP7x46fci8sVhPWr/wJe7YfR3xSHBrcXngbgrDYVDw4cRCGP5QOSSJouZQ07XLhqUp8v/EwzhWUwVvvh9mqQjXLeOyZ4RgyohcIpXDXeLFtw0Fs/mJfaSjIpxGD7DJH26GHDciKBYahIXPIYPx50aJrw+n6ePGxcTACITz5xByyfPlb44QenndHSuyAyFgHKymswtSXRyJzeC+Egwbqahux9/sT2Jl7FI8/MwwjJwwEhAGDN53oBYdLseLdbYiOc2DoyL7olhADm92C7ZsOI2/nKYx+PBOhQBgHfzqLsuKac4aB1/2NtRtjuqeCKRSfbv62XTtvSMTj8WD2E5MgMYaqsgo4IuyxoUBwrGEYszIGJw54450noaisaSpCwA2OVe9/j/27TiL97iRQSuDzhUBAUFJYhYTULpg+92HYnKbmuCLwe0N4+7UvcSq/zEWA81yIrYyxz90nTxV1yhwECoqVO7Zf1052IyJOpxMAMPPRR3DfsCwcO5ZfQyWxgkOqr6ttXH2p3KP2SI1riV1KYbGpqK32Vv+Qc2wDF1wjoCAgEpHExDGPD4qzRVqBK/cbCmhhDWHNABfkbZPZ8nHN4d3eqH6Z6HrfMBih4A1JAO080LWFvLPnsD0vD7lr18MwDDAmlzfWe7ufP1OR4brUSKrL61BefBm7vyvAzi35gXAI/70u7+AbPRQtl2s8N33suG/dZWVJ9e6GgQ6HBQBBXY0XpeeqsXX1fhQcKt1PmfImwGsjklJBJAmZQwdj8fIVv8m+m6oAJw3OBAHAJDkyEAo8QiDuYYx2IQRm3eCVIPIW1WLOpYSEYrt0AQFFeWkhCJW66EFtltUqP2yxqVGccy3gD9f5/dohMPa+4fMXVBwrwMGbsOmmiPzlqadxoegMKJNhhEPQ/ZcgpHhGCKd2S5Lm4+eFrJrAuYG+DzyIxvJyFB8/BKaYYIvvSzyFx2OFoUUIKumcknopMsZDGl38630H8dyj47Bi05bbQwRoSmCznpqMzEfHYfsnyxHw+iCEgKLImPlf87Fq6Uf4aOPGq/3nz5qF03n7wWQZXNOaYoRS6BRgTEGD24WU9P54//Mvb9akDnSgAx3owO3H/wGUgcIFOUeM9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMi0xMFQxNjoxMzozMCswMDowMC3bAQsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDItMTBUMTY6MTM6MzArMDA6MDBchrm3AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAyLTEwVDE2OjEzOjM2KzAwOjAwaEOtUgAAAABJRU5ErkJggg==",Vt=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,$n={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico atemporal.",price:0,type:"background",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"galaxy",name:"Galaxy",description:"Un viaje a las estrellas.",price:50,type:"background",previewColor:"#000"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:100,type:"background",previewColor:"#ff99cc"},{id:"ballpit",name:"Ball Pit",description:"Física interactiva y relajante.",price:150,type:"background",previewColor:"#29b1ff"},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:200,type:"background",previewColor:"#bd71ff"},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:250,type:"background",previewColor:"#00ffff"},{id:"pixelsnow",name:"Pixel Snow",description:"Nevada suave y distante.",price:300,type:"background",previewColor:"#ffffff"},{id:"hyperspeed",name:"Hyperspeed",description:"Velocidad luz y distorsión.",price:500,type:"background",previewColor:"#d856bf"}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:0,type:"cursor",previewColor:"transparent",icon:e.jsx(Tt,{})}],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:0,type:"trail",previewColor:"transparent",icon:e.jsx(Ai,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:100,type:"trail",previewColor:"#ffadad",icon:e.jsx("img",{src:Wt,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:100,type:"trail",previewColor:"#a89c8d",icon:e.jsx("img",{src:Bt,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:100,type:"trail",previewColor:"#ffecb6",icon:e.jsx("img",{src:Gt,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:100,type:"trail",previewColor:"#ebe371",icon:e.jsx("img",{src:Ht,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:100,type:"trail",previewColor:"#e3e4b2",icon:e.jsx("img",{src:Yt,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:100,type:"trail",previewColor:"#a3a3a3",icon:e.jsx("img",{src:Vt,alt:"Skeleton",style:{width:"40px"}})}],skins:[{id:"dase",name:"Dase Original",description:"La moneda original.",price:0,type:"skin",previewColor:"#ffd700",icon:e.jsx(Dt,{})}]},Zn=[{id:"backgrounds",label:"Fondos",icon:e.jsx(Si,{})},{id:"cursors",label:"Cursores",icon:e.jsx(Tt,{})},{id:"trails",label:"Mascotas",icon:e.jsx(ji,{})},{id:"skins",label:"Monedas",icon:e.jsx(Dt,{})}],eo=()=>{const{activeShop:n,openShop:t,closeShop:i,activeBackground:o,setBackground:l,activeCursor:f,setCursor:h,activeTrail:y,setTrail:d,coins:x,buyItem:b,ownedItems:k,activeCoinSkin:v,setCoinSkin:g}=ke(),[R,M]=s.useState(n);s.useEffect(()=>{n&&M(n)},[n]);const D=$n[R]||[],F=m=>{k.includes(m.id)?(n==="backgrounds"&&l(m.id),n==="cursors"&&h(m.id),n==="trails"&&d(m.id),n==="skins"&&g(m.id)):x>=m.price&&b(m)},C=m=>n==="backgrounds"?o===m:n==="cursors"?f===m:n==="trails"?y===m:n==="skins"?v===m:!1;return e.jsx(ve,{children:n&&e.jsxs(V.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:i,style:{position:"absolute",inset:0,pointerEvents:"auto"}}),e.jsxs(V.div,{className:"shop-window",initial:{scale:.9,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.95,y:10,opacity:0,transition:{duration:.2}},children:[e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:Zn.map(m=>e.jsxs("button",{onClick:()=>t(m.id),className:`tab-btn ${n===m.id?"active":""}`,children:[m.icon,e.jsx("span",{children:m.label}),n===m.id&&e.jsx(V.div,{layoutId:"activeTab",className:"active-line"})]},m.id))}),e.jsxs("div",{className:"coin-display",style:{color:"#ffd700",fontWeight:"bold",fontSize:"1.2rem",marginRight:"20px"},children:[x," 🪙"]}),e.jsx("button",{onClick:i,className:"close-btn",children:e.jsx(Ke,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",R==="backgrounds"?"Fondos":R==="cursors"?"Cursores":R==="trails"?"Mascotas":"Monedas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(ve,{mode:"wait",children:e.jsx(V.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:D.map(m=>e.jsxs("div",{className:`shop-item ${C(m.id)?"equipped":""}`,onClick:()=>F(m),children:[e.jsxs("div",{className:"item-preview",style:{background:m.previewColor},children:[m.icon&&e.jsx("div",{className:"preview-icon",children:m.icon}),C(m.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(_t,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:m.name}),e.jsx("p",{children:m.description}),k.includes(m.id)?e.jsx("span",{className:"price-tag",style:{color:"#00e676",background:"rgba(0, 230, 118, 0.15)"},children:C(m.id)?"Equipado":"En propiedad"}):e.jsxs("span",{className:"price-tag",children:[m.price," Monedas"]})]})]},m.id))},R)})})]})]})})},to=()=>{const{activeTrail:n}=ke(),t=qe(-100),i=qe(-100),o={damping:25,stiffness:70,mass:1},l=Qe(t,o),f=Qe(i,o);s.useEffect(()=>{const y=d=>{t.set(d.clientX),i.set(d.clientY)};return window.addEventListener("mousemove",y),()=>window.removeEventListener("mousemove",y)},[t,i]);const h={"apple-cat":Wt,"jump-cat":Bt,"rolling-cat":Gt,duck:Ht,pompom:Yt,"skeleton-run":Vt,ghost:null};return!n||n==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:h[n]?e.jsx(V.img,{src:h[n],alt:"trail",style:{x:l,y:f,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):n==="ghost"?e.jsx(V.div,{style:{x:l,y:f,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},Mt=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],io=({progress:n})=>{const[t,i]=s.useState(0);return s.useEffect(()=>{const o=setInterval(()=>{i(l=>(l+1)%Mt.length)},1500);return()=>clearInterval(o)},[]),e.jsxs(V.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[n,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(V.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${n}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(V.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:Mt[t]},t)})]})]})},no=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,oo=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"})),so=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,ao=Object.freeze(Object.defineProperty({__proto__:null,default:so},Symbol.toStringTag,{value:"Module"})),ro=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,lo=Object.freeze(Object.defineProperty({__proto__:null,default:ro},Symbol.toStringTag,{value:"Module"})),co=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,uo=Object.freeze(Object.defineProperty({__proto__:null,default:co},Symbol.toStringTag,{value:"Module"})),fo=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,ho=Object.freeze(Object.defineProperty({__proto__:null,default:fo},Symbol.toStringTag,{value:"Module"})),mo=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,po=Object.freeze(Object.defineProperty({__proto__:null,default:mo},Symbol.toStringTag,{value:"Module"})),go=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,vo=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"})),xo=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,yo=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),bo=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,wo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"})),Ft=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":oo,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":ao,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":lo,"../../assets/songs/La cena - Las Petunias.mp3":uo,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":ho,"../../assets/songs/Tek It - Cafuné.mp3":po,"../../assets/songs/You and I - d4vd .mp3":vo,"../../assets/songs/gourmet - rickyedit.mp3":yo,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":wo}),Ue=Object.keys(Ft).map(n=>({title:n.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase()),artist:"Only U Playlist",src:Ft[n].default}));Ue.length===0&&Ue.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const Co=.1,So=({visible:n,onClose:t})=>{const i=s.useRef(null),o=s.useRef(null),[l,f]=s.useState(!1),[h,y]=s.useState(0),[d,x]=s.useState(.3),[b,k]=s.useState(!1),[v,g]=s.useState(!1),[R,M]=s.useState(!1),[D,F]=s.useState(0),[C,m]=s.useState(0),I=Ue[h];s.useEffect(()=>{i.current&&(i.current.volume=b?0:Math.pow(d,2)*Co)},[d,b]),s.useEffect(()=>{l&&i.current&&i.current.play().catch(L=>console.log("Autoplay blocked",L))},[h]),s.useEffect(()=>{n||(g(!1),M(!1))},[n]),s.useEffect(()=>{const L=E=>{n&&(o.current&&o.current.contains(E.target)||E.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[n,t]);const _=()=>{i.current&&(F(i.current.currentTime),m(i.current.duration||0))},P=L=>{const E=parseFloat(L.target.value);F(E),i.current&&(i.current.currentTime=E)},O=()=>{l?i.current.pause():i.current.play(),f(!l)},W=()=>{y(L=>(L+1)%Ue.length)},w=L=>{y(L),f(!0),M(!1)},U=L=>{if(!L||isNaN(L))return"0:00";const E=Math.floor(L/60),Y=Math.floor(L%60);return`${E}:${Y<10?"0":""}${Y}`};return e.jsxs(V.div,{ref:o,className:"music-player-container",initial:"hidden",animate:n?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:i,src:I.src,onEnded:W,onTimeUpdate:_,onLoadedMetadata:_,preload:"auto"}),e.jsx(ve,{children:R&&e.jsx(V.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:Ue.map((L,E)=>e.jsxs("div",{className:`playlist-item ${E===h?"active":""}`,onClick:()=>w(E),children:[E+1,". ",L.title]},E))})}),e.jsx("div",{className:"compact-info",onClick:()=>M(!R),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:I.title}),e.jsx(Pi,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:O,children:l?e.jsx(ki,{size:16}):e.jsx(Ri,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:C,value:D,onChange:P,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[U(D)," / ",U(C)]})]}),e.jsx("button",{className:"icon-btn",onClick:W,children:e.jsx(Li,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${v?"active":""}`,onClick:()=>g(!v),children:b||d===0?e.jsx(Ii,{size:18}):e.jsx(zt,{size:18})}),e.jsx(ve,{children:v&&e.jsx(V.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:b?0:d,onChange:L=>x(parseFloat(L.target.value))})})})]})]})]})},Xt={first_coin:{title:"Primeros Pasos",desc:"Recolecta tu primera moneda.",icon:"🪙"},velocista:{title:"Velocista",desc:"Alcanza un combo x10.",icon:"⚡"},rico:{title:"Rico",desc:"Acumula 100 monedas.",icon:"💰"},millonario:{title:"Millonario",desc:"Acumula 1.000 monedas.",icon:"💎"},hacker:{title:"Hacker",desc:"Descubre el código secreto de administrador.",icon:"💻"}},jo=()=>{const[n,t]=s.useState(!1),[i,o]=s.useState(!1),[l,f]=s.useState(!1),h=s.useRef(null),{gameVolume:y,setGameVolume:d,resetProgress:x,achievements:b}=ke();s.useEffect(()=>{const v=g=>{h.current&&!h.current.contains(g.target)&&t(!1)};return n&&document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[n]);const k=()=>{window.confirm("¿Estás seguro de que quieres borrar todo tu progreso (monedas y compras)?")&&(x(),t(!1))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"settings-container",ref:h,children:[e.jsx("button",{className:`settings-btn ${n?"active":""}`,onClick:()=>t(!n),"aria-label":"Ajustes",children:e.jsx(Mi,{size:20})}),e.jsx(ve,{children:n&&e.jsxs(V.div,{className:"settings-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"label",children:[e.jsx(zt,{})," ",e.jsx("span",{children:"Sonido Juego"})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:y,onChange:v=>d(parseFloat(v.target.value))})]}),e.jsx("div",{className:"divider"}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{f(!0),t(!1)},children:[e.jsx(Nt,{})," Logros"]}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{o(!0),t(!1)},children:[e.jsx(Fi,{})," Documentación"]}),e.jsxs("button",{className:"setting-action-btn danger",onClick:k,children:[e.jsx(Ei,{})," Resetear Progreso"]})]})})]}),e.jsx(ve,{children:i&&e.jsx("div",{className:"doc-overlay",onClick:()=>o(!1),children:e.jsxs(V.div,{className:"doc-modal",onClick:v=>v.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>o(!1),children:e.jsx(Ke,{size:24})}),e.jsx("h2",{children:"Mecánicas del Juego"}),e.jsxs("div",{className:"doc-content",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Monedas:"})," Haz click en las monedas flotantes para recolectarlas. Las monedas especiales (brillantes) valen más puntos."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tienda:"})," Usa tus monedas para desbloquear nuevos fondos, cursores y skins para las monedas."]})]})]})})}),e.jsx(ve,{children:l&&e.jsx("div",{className:"doc-overlay",onClick:()=>f(!1),children:e.jsxs(V.div,{className:"doc-modal",onClick:v=>v.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>f(!1),children:e.jsx(Ke,{size:24})}),e.jsx("h2",{children:"🏆 Tus Logros"}),e.jsx("div",{className:"doc-content",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:Object.entries(Xt).map(([v,g])=>{const R=b.includes(v);return e.jsxs("div",{style:{background:R?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)",border:R?"1px solid rgba(255, 215, 0, 0.3)":"1px solid rgba(255, 255, 255, 0.1)",padding:"15px",borderRadius:"12px",opacity:R?1:.5,display:"flex",alignItems:"center",gap:"15px"},children:[e.jsx("div",{style:{fontSize:"2rem"},children:R?g.icon:"🔒"}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 5px 0",color:R?"#ffd700":"white"},children:g.title}),e.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"rgba(255,255,255,0.7)"},children:g.desc})]})]},v)})})})]})})})]})},Ao=()=>{const{notification:n,clearNotification:t}=ke();s.useEffect(()=>{if(n){const l=setTimeout(()=>{t()},4e3);return()=>clearTimeout(l)}},[n,t]);const i=n&&n.type==="achievement",o=i?Xt[n.id]:null;return e.jsx(ve,{children:i&&o&&e.jsxs(V.div,{className:"achievement-toast",initial:{y:-100,x:"-50%",opacity:0},animate:{y:20,x:"-50%",opacity:1},exit:{y:-100,x:"-50%",opacity:0},transition:{type:"spring",stiffness:300,damping:20},children:[e.jsx("div",{className:"icon-container",children:e.jsx(Nt,{size:24,color:"#ffd700"})}),e.jsxs("div",{className:"text-container",children:[e.jsx("span",{className:"title",children:"¡Logro Desbloqueado!"}),e.jsxs("span",{className:"name",children:[o.icon," ",o.title]}),e.jsx("span",{className:"desc",children:o.desc})]})]})})},Po=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"},{id:"skins",label:"Monedas",ariaLabel:"Personalizar Monedas"}],ko=[{label:"GitHub",link:"https://github.com"},{label:"Instagram",link:"https://instagram.com"}];function Ro(){const{isUnlocked:n,openShop:t,closeShop:i,lockGame:o,activeBackground:l,toggleGame:f,isGameActive:h,activeShop:y}=ke(),[d,x]=s.useState(!0),[b,k]=s.useState(!1),[v,g]=s.useState(!1),[R,M]=s.useState(!1),[D,F]=s.useState(!0),[C,m]=s.useState(!1),[I,_]=s.useState(null),[P,O]=s.useState(null),[W,w]=s.useState(null),[U,L]=s.useState(null),[E,Y]=s.useState(null),[A,a]=s.useState(null),[c,p]=s.useState(null),[u,j]=s.useState(null),z=te=>{te&&t(te)},q=()=>{v?(g(!1),R&&x(!0)):(m(!1),i(),M(d),x(!1),g(!0))},K=[{icon:e.jsx(_i,{size:22}),label:"Texto",onClick:()=>{i(),h?f():x(!d)}},{icon:e.jsx(Ti,{size:22}),label:"Música",onClick:()=>{i(),k(!b)}},{icon:e.jsx(Di,{size:22}),label:"Tienda",onClick:()=>{y&&i(),m(!C)}},{icon:e.jsx(zi,{size:22,color:h?"#f700ff":"currentColor"}),label:"Juego",onClick:()=>{i(),h?x(D):(F(d),x(!0)),f()}},{icon:e.jsx(Ni,{size:22}),label:"Fondo",onClick:q},{icon:e.jsx(Ui,{size:22}),label:"Bloquear",onClick:()=>{o&&(i(),k(!1),_(null),O(null),w(null),L(null),Y(null),a(null),p(null),j(null),o())}}],[T,Z]=s.useState(!0),[oe,ee]=s.useState(0);return s.useEffect(()=>{const te=setInterval(()=>{ee(le=>{const X=le+Math.floor(Math.random()*15)+5;return X>=100?(clearInterval(te),setTimeout(()=>Z(!1),200),100):X})},200);return()=>clearInterval(te)},[]),e.jsxs("main",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[e.jsx(ve,{mode:"wait",children:T&&e.jsx(io,{progress:oe},"loader")}),e.jsx(ve,{children:!n&&e.jsx(V.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(Xi,{})},"lock-screen")}),e.jsx(ve,{children:n&&e.jsxs(V.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(Yn,{floatingLinesConfig:I,lightPillarsConfig:P,ballpitConfig:W,silkConfig:U,galaxyConfig:E,gradientConfig:A,pixelSnowConfig:c,hyperspeedConfig:u}),e.jsx(jo,{}),e.jsx(Ao,{}),e.jsx(Vn,{isOpen:C,onToggle:te=>{m(te),te&&g(!1)},items:Po,socialItems:ko,isFixed:!0,position:"right",onItemClick:z,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(eo,{}),e.jsx(to,{}),e.jsx(ve,{children:d&&e.jsx(V.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(yn,{})})}),e.jsx(ve,{children:v&&["floatinglines","lightpillars","ballpit","silk","galaxy","gradient","pixelsnow","hyperspeed"].includes(l)&&e.jsx(V.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(Gn,{onClose:q,floatingLinesConfig:I,setFloatingLinesConfig:_,lightPillarsConfig:P,setLightPillarsConfig:O,ballpitConfig:W,setBallpitConfig:w,silkConfig:U,setSilkConfig:L,galaxyConfig:E,setGalaxyConfig:Y,gradientConfig:A,setGradientConfig:a,pixelSnowConfig:c,setPixelSnowConfig:p,hyperspeedConfig:u,setHyperspeedConfig:j})})})}),e.jsx(So,{visible:b,onClose:()=>k(!1)}),e.jsx(Qn,{items:K,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}Oi.createRoot(document.getElementById("root")).render(e.jsx(s.StrictMode,{children:e.jsx(Ro,{})}));
