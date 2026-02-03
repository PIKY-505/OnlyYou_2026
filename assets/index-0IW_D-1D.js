import{c as Yt,j as e,r,u as Xt,C as ye,a as Vt,F as Jt,R as Je,O as Qt,A as Kt,b as Zt,P as $t,V as O,d as at,e as Ft,S as We,W as qe,f as ei,M as ot,g as he,I as ti,h as ii,i as ni,k as oi,l as si,m as ai,n as ri,o as be,p as rt,q as Ee,s as Ue,t as De,v as lt,E as li,w as ci,x as ui,y as ct,B as di,z as ze,D as fi,L as hi,G as ut,H as pi,T as mi,J as dt,K as Fe,N as te,Q as gi,U as It,X as Mt,Y as vi,Z as _t,_ as xi,$ as yi,a0 as bi,a1 as wi,a2 as Ci,a3 as Si,a4 as ji,a5 as Pi,a6 as Ai,a7 as Ri,a8 as Li,a9 as ki,aa as Fi,ab as Ii}from"./vendor-C78qK2YJ.js";import{A as we,m as Z,u as Oe,a as st,b as Qe}from"./framer-motion-cs_FrZFU.js";import{R as Mi,T as _i,P as Ei,C as ft,M as Di}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();const Te=Yt(n=>({isUnlocked:!1,unlockApp:()=>n({isUnlocked:!0}),lockGame:()=>n({isUnlocked:!1}),activeShop:null,openShop:t=>n({activeShop:t}),closeShop:()=>n({activeShop:null}),activeBackground:"gradient",setBackground:t=>n({activeBackground:t}),activeCursor:"default",setCursor:t=>n({activeCursor:t}),activeTrail:"none",setTrail:t=>n({activeTrail:t})})),Ti=({text:n,disabled:t=!1,speed:i=3,className:o="",color:l="#7c7c7c",shineColor:f="#ffffff",direction:p="right"})=>e.jsx("div",{className:`shiny-text ${p} ${t?"disabled":""} ${o}`,style:{"--shiny-speed":`${i}s`,"--base-color":l,"--shine-color":f},children:n}),ht=n=>(n=n.replace("#",""),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]),zi=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,Ni=`
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
`,Et=r.forwardRef(function({uniforms:t},i){return Xt((o,l)=>{i.current.material.uniforms.uTime.value+=.1*l}),e.jsxs("mesh",{ref:i,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:zi,fragmentShader:Ni})]})});Et.displayName="SilkPlane";const Dt=({speed:n=1,scale:t=2,color:i="#ff99cc",noiseIntensity:o=.5,rotation:l=0})=>{const f=r.useRef(),p=r.useMemo(()=>({uSpeed:{value:n},uScale:{value:t},uNoiseIntensity:{value:o},uColor:{value:new ye(...ht(i))},uRotation:{value:l},uTime:{value:0}}),[]);return r.useEffect(()=>{if(f.current){const g=f.current.material.uniforms;g.uSpeed.value=n,g.uScale.value=t,g.uNoiseIntensity.value=o,g.uColor.value.set(...ht(i)),g.uRotation.value=l}},[n,t,o,i,l]),r.useEffect(()=>{const d=setInterval(()=>window.dispatchEvent(new Event("resize")),50),x=setTimeout(()=>clearInterval(d),1200);return()=>{clearInterval(d),clearTimeout(x)}},[]),e.jsx(Vt,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(Et,{ref:f,uniforms:p})})},Ui=()=>{const[n,t]=r.useState(""),[i,o]=r.useState(!1),l=Te(d=>d.unlockApp),f="230824",p=d=>{const x=d.target.value.replace(/\D/g,"");if(x.length>6)return;let y=x;x.length>2&&(y=x.slice(0,2)+"/"+x.slice(2)),x.length>4&&(y=y.slice(0,5)+"/"+x.slice(4)),t(y),o(!1)},g=d=>{d.preventDefault(),n.replace(/\//g,"")===f?l():(o(!0),setTimeout(()=>o(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(Dt,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(Ti,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:g,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:n,onChange:p,className:i?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(Jt,{size:20})})]})]})]})},Oi=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,Wi=Object.freeze(Object.defineProperty({__proto__:null,default:Oi},Symbol.toStringTag,{value:"Module"})),qi=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,Bi=Object.freeze(Object.defineProperty({__proto__:null,default:qi},Symbol.toStringTag,{value:"Module"})),Gi=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,Hi=Object.freeze(Object.defineProperty({__proto__:null,default:Gi},Symbol.toStringTag,{value:"Module"})),Yi=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,Xi=Object.freeze(Object.defineProperty({__proto__:null,default:Yi},Symbol.toStringTag,{value:"Module"})),Vi=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,Ji=Object.freeze(Object.defineProperty({__proto__:null,default:Vi},Symbol.toStringTag,{value:"Module"})),Qi=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,Ki=Object.freeze(Object.defineProperty({__proto__:null,default:Qi},Symbol.toStringTag,{value:"Module"})),Zi=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,$i=Object.freeze(Object.defineProperty({__proto__:null,default:Zi},Symbol.toStringTag,{value:"Module"})),en=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,tn=Object.freeze(Object.defineProperty({__proto__:null,default:en},Symbol.toStringTag,{value:"Module"})),nn=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,on=Object.freeze(Object.defineProperty({__proto__:null,default:nn},Symbol.toStringTag,{value:"Module"})),sn=Object.assign({"../../assets/img/photos/bridge.jpeg":Wi,"../../assets/img/photos/first.jpg":Bi,"../../assets/img/photos/graduated.jpeg":Hi,"../../assets/img/photos/halloween.jpg":Xi,"../../assets/img/photos/miestrella.jpg":Ji,"../../assets/img/photos/murder.jpeg":Ki,"../../assets/img/photos/rock.jpeg":$i,"../../assets/img/photos/sleepy.jpg":tn,"../../assets/img/photos/sunshine.jpeg":on}),et=Object.values(sn).map(n=>n.default),an=()=>{const[n,t]=r.useState(null);let i=[...et];if(i.length>0)for(;i.length<18;)i=[...i,...et];const o=[...i,...i];return e.jsxs("div",{className:"main-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),et.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:o.map((l,f)=>e.jsx("img",{src:l,alt:`Memory ${f}`,className:"gallery-item",onClick:()=>t(l)},f))})}),e.jsx(we,{children:n&&e.jsx(Z.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(Z.img,{src:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:l=>l.stopPropagation()})})})]})},rn=({color1:n="#b117f8",color2:t="#2c0b2e",speed:i=20})=>e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:`linear-gradient(to bottom, ${n}, ${t})`,animation:`spinGradient ${i}s linear infinite`}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),ln=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,cn=`
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
`,un=({focal:n=[.5,.5],rotation:t=[1,0],starSpeed:i=0,density:o=1.5,hueShift:l=300,disableAnimation:f=!1,speed:p=.5,glowIntensity:g=.5,saturation:d=.8,twinkleIntensity:x=.5,rotationSpeed:y=.05,transparent:A=!0,colorCycleSpeed:S=10,rainbow:v=!1,warp:b=!1,..._})=>{const E=r.useRef(null),L=r.useRef(l),G=r.useRef(null),ie=r.useRef({starSpeed:i,disableAnimation:f,rainbow:v,colorCycleSpeed:S,warp:b,hueShift:l});return r.useEffect(()=>{ie.current={starSpeed:i,disableAnimation:f,rainbow:v,colorCycleSpeed:S,warp:b,hueShift:l}},[i,f,v,S,b,l]),r.useEffect(()=>{if(!E.current)return;const N=E.current;N.innerHTML="";const Y=new Mi({alpha:A,premultipliedAlpha:!1,dpr:1}),P=Y.gl;A?(P.enable(P.BLEND),P.blendFunc(P.SRC_ALPHA,P.ONE_MINUS_SRC_ALPHA),P.clearColor(0,0,0,0)):P.clearColor(0,0,0,1);let H;function U(){Y.setSize(N.offsetWidth*1,N.offsetHeight*1),G.current&&(G.current.uniforms.uResolution.value=new ft(P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height))}window.addEventListener("resize",U,!1),U();const j=new _i(P);H=new Ei(P,{vertex:ln,fragment:cn,uniforms:{uTime:{value:0},uResolution:{value:new ft(P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height)},uFocal:{value:new Float32Array(n)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:i},uDensity:{value:o},uHueShift:{value:l},uSpeed:{value:p},uGlowIntensity:{value:g},uSaturation:{value:d},uTwinkleIntensity:{value:x},uRotationSpeed:{value:y},uTransparent:{value:A}}}),G.current=H;const W=new Di(P,{geometry:j,program:H});let R,I=0;const w=1e3/30;function s(c){if(R=requestAnimationFrame(s),!E.current||!G.current)return;const h=c-I;if(h<w)return;I=c-h%w;const{starSpeed:u,disableAnimation:C,rainbow:M,colorCycleSpeed:D,warp:q,hueShift:k}=ie.current;if(!C){H.uniforms.uTime.value=c*.001;const K=q?u*10:u;H.uniforms.uStarSpeed.value=c*.001*K/10,M?(L.current+=D*.05,H.uniforms.uHueShift.value=L.current%360):H.uniforms.uHueShift.value=k}Y.render({scene:W})}return R=requestAnimationFrame(s),N.appendChild(P.canvas),P.canvas.style.width="100%",P.canvas.style.height="100%",P.canvas.style.display="block",P.canvas.style.willChange="transform",()=>{cancelAnimationFrame(R),window.removeEventListener("resize",U),N&&P.canvas&&N.contains(P.canvas)&&N.removeChild(P.canvas),P.getExtension("WEBGL_lose_context")?.loseContext(),G.current=null}},[A]),r.useEffect(()=>{if(!G.current)return;const N=G.current.uniforms;N.uFocal.value=new Float32Array(n),N.uRotation.value=new Float32Array(t),N.uDensity.value=o,N.uSpeed.value=p,N.uGlowIntensity.value=g,N.uSaturation.value=d,N.uTwinkleIntensity.value=x,N.uRotationSpeed.value=y},[n,t,o,p,g,d,x,y]),e.jsx("div",{ref:E,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},..._})},dn=Je.memo(un);class fn{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#i;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#S;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#o=!1;#n=!1;isDisposed=!1;#s;#a;#r;#l=new at;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#m(),this.#g(),this.#v(),this.resize(),this.#x()}#m(){this.camera=new Ft,this.cameraFov=this.camera.fov}#g(){this.scene=new We}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new qe(t),this.renderer.outputColorSpace=ei}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#a=new ResizeObserver(this.#c.bind(this)),this.#a.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#a?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#o=t[0].isIntersecting,this.#o?this.#p():this.#u()}#f(){this.#o&&(document.hidden?this.#u():this.#p())}#c(){this.#r&&clearTimeout(this.#r),this.#r=setTimeout(this.resize.bind(this),100)}resize(){let t,i;this.#e.size instanceof Object?(t=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,i=window.innerHeight),this.size.width=t,this.size.height=i,this.size.ratio=t/i,this.#w(),this.#C(),this.onAfterResize(this.size)}#w(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#h(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#h(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#h(t){const i=Math.tan(ot.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*ot.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#C(){this.renderer.setSize(this.size.width,this.size.height),this.#i?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(t),this.size.pixelRatio=t}get postprocessing(){return this.#i}set postprocessing(t){this.#i=t,this.render=t.render.bind(t)}#p(){if(this.#n)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#n=!0,this.#l.start(),t()}#u(){this.#n&&(cancelAnimationFrame(this.#d),this.#n=!1,this.#l.stop())}#S(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(i=>{const o=t.material[i];o!==null&&typeof o=="object"&&typeof o.dispose=="function"&&o.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#i?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const Pe=new Map,Se=new he;let tt=!1;function hn(n){const t={position:new he,nPosition:new he,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...n};return(function(i,o){Pe.has(i)||(Pe.set(i,o),tt||(document.body.addEventListener("pointermove",pt),document.body.addEventListener("pointerleave",gt),document.body.addEventListener("click",mt),document.body.addEventListener("touchstart",vt,{passive:!1}),document.body.addEventListener("touchmove",xt,{passive:!1}),document.body.addEventListener("touchend",Ge,{passive:!1}),document.body.addEventListener("touchcancel",Ge,{passive:!1}),tt=!0))})(n.domElement,t),t.dispose=()=>{const i=n.domElement;Pe.delete(i),Pe.size===0&&(document.body.removeEventListener("pointermove",pt),document.body.removeEventListener("pointerleave",gt),document.body.removeEventListener("click",mt),document.body.removeEventListener("touchstart",vt),document.body.removeEventListener("touchmove",xt),document.body.removeEventListener("touchend",Ge),document.body.removeEventListener("touchcancel",Ge),tt=!1)},t}function pt(n){Se.x=n.clientX,Se.y=n.clientY,pn()}function pn(){for(const[n,t]of Pe){const i=n.getBoundingClientRect();Ze(i)?(Ke(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function mt(n){Se.x=n.clientX,Se.y=n.clientY;for(const[t,i]of Pe){const o=t.getBoundingClientRect();Ke(i,o),Ze(o)&&i.onClick(i)}}function gt(){for(const n of Pe.values())n.hover&&(n.hover=!1,n.onLeave(n))}function vt(n){if(n.touches.length>0){n.preventDefault(),Se.x=n.touches[0].clientX,Se.y=n.touches[0].clientY;for(const[t,i]of Pe){const o=t.getBoundingClientRect();Ze(o)&&(i.touching=!0,Ke(i,o),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function xt(n){if(n.touches.length>0){n.preventDefault(),Se.x=n.touches[0].clientX,Se.y=n.touches[0].clientY;for(const[t,i]of Pe){const o=t.getBoundingClientRect();Ke(i,o),Ze(o)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function Ge(){for(const[,n]of Pe)n.touching&&(n.touching=!1,n.hover&&(n.hover=!1,n.onLeave(n)))}function Ke(n,t){const{position:i,nPosition:o}=n;i.x=Se.x-t.left,i.y=Se.y-t.top,o.x=i.x/t.width*2-1,o.y=-i.y/t.height*2+1}function Ze(n){const{x:t,y:i}=Se,{left:o,top:l,width:f,height:p}=n;return t>=o&&t<=o+f&&i>=l&&i<=l+p}const{randFloat:mn,randFloatSpread:it}=ot,nt=new O,ce=new O,He=new O,gn=new O,ue=new O,Ye=new O,Ie=new O,ke=new O,Xe=new O,yt=new O;class vn{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new O,this.#e(),this.setSizes()}#e(){const{config:t,positionData:i}=this;this.center.toArray(i,0);for(let o=1;o<t.count;o++){const l=3*o;i[l]=it(2*t.maxX),i[l+1]=it(2*t.maxY),i[l+2]=it(2*t.maxZ)}}setSizes(){const{config:t,sizeData:i}=this;i[0]=t.size0;for(let o=1;o<t.count;o++)i[o]=mn(t.minSize,t.maxSize)}update(t){const{config:i,center:o,positionData:l,sizeData:f,velocityData:p}=this;let g=0;i.controlSphere0&&(g=1,nt.fromArray(l,0),nt.lerp(o,.1).toArray(l,0),gn.set(0,0,0).toArray(p,0));for(let d=g;d<i.count;d++){const x=3*d;ce.fromArray(l,x),ue.fromArray(p,x),ue.y-=t.delta*i.gravity*f[d],ue.multiplyScalar(i.friction),ue.clampLength(0,i.maxVelocity),ce.add(ue),ce.toArray(l,x),ue.toArray(p,x)}for(let d=g;d<i.count;d++){const x=3*d;ce.fromArray(l,x),ue.fromArray(p,x);const y=f[d];for(let S=d+1;S<i.count;S++){const v=3*S;He.fromArray(l,v),Ye.fromArray(p,v);const b=f[S];Ie.copy(He).sub(ce);const _=Ie.length(),E=y+b;if(_<E){const L=E-_;ke.copy(Ie).normalize().multiplyScalar(.5*L),Xe.copy(ke).multiplyScalar(Math.max(ue.length(),1)),yt.copy(ke).multiplyScalar(Math.max(Ye.length(),1)),ce.sub(ke),ue.sub(Xe),ce.toArray(l,x),ue.toArray(p,x),He.add(ke),Ye.add(yt),He.toArray(l,v),Ye.toArray(p,v)}}if(i.controlSphere0){Ie.copy(nt).sub(ce);const S=Ie.length(),v=y+f[0];if(S<v){const b=v-S;ke.copy(Ie.normalize()).multiplyScalar(b),Xe.copy(ke).multiplyScalar(Math.max(ue.length(),1)),ce.sub(ke),ue.sub(Xe)}}Math.abs(ce.x)+y>i.maxX&&(ce.x=Math.sign(ce.x)*(i.maxX-y),ue.x=-ue.x*i.wallBounce),i.gravity===0?Math.abs(ce.y)+y>i.maxY&&(ce.y=Math.sign(ce.y)*(i.maxY-y),ue.y=-ue.y*i.wallBounce):ce.y-y<-i.maxY&&(ce.y=-i.maxY+y,ue.y=-ue.y*i.wallBounce);const A=Math.max(i.maxZ,i.maxSize);Math.abs(ce.z)+y>A&&(ce.z=Math.sign(ce.z)*(i.maxZ-y),ue.z=-ue.z*i.wallBounce),ce.toArray(l,x),ue.toArray(p,x)}}explode(t,i=2){const{positionData:o,velocityData:l,config:f}=this;for(let p=0;p<f.count;p++){const g=3*p,d=o[g]-t.x,x=o[g+1]-t.y,y=o[g+2]-t.z,A=d*d+x*x+y*y;if(A<60){const S=Math.sqrt(A)+.01,v=i*50/(S+1),b=(Math.random()-.5)*1.5,_=(Math.random()-.5)*1.5,E=(Math.random()-.5)*1.5;l[g]+=(d/S+b)*v,l[g+1]+=(x/S+_)*v,l[g+2]+=(y/S+E)*v}}}}class xn extends ri{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
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
      `);const o=be.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",o),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const yn={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0,enableExplosion:!1,rainbow:!1},Me=new Qt;class bn extends ti{constructor(t,i={}){const o={...yn,...i},l=new ii,f=new ni(t,.04).fromScene(l).texture,p=new oi,g=new xn({envMap:f,...o.materialParams});g.envMapRotation.x=-Math.PI/2,super(p,g,o.count),this.config=o,this.physics=new vn(o),this.#e(),this.setColors(o.colors),this.rainbowHue=0}#e(){this.ambientLight=new si(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new ai(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(o){let l,f;function p(g){l=g,f=[],l.forEach(d=>{f.push(new ye(d))})}return p(o),{setColors:p,getColorAt:function(g,d=new ye){const x=Math.max(0,Math.min(1,g))*(l.length-1),y=Math.floor(x),A=f[y];if(y>=l.length-1)return A.clone();const S=x-y,v=f[y+1];return d.r=A.r+S*(v.r-A.r),d.g=A.g+S*(v.g-A.g),d.b=A.b+S*(v.b-A.b),d}}})(t);for(let o=0;o<this.count;o++)this.setColorAt(o,i.getColorAt(o/this.count)),o===0&&this.light.color.copy(i.getColorAt(o/this.count));this.instanceColor.needsUpdate=!0}}update(t){if(this.physics.update(t),this.config.rainbow){this.rainbowHue+=t.delta*.2,this.light.color.setHSL(this.rainbowHue%1,1,.5);for(let i=0;i<this.count;i++){const o=(this.rainbowHue+i*.05)%1,l=new ye().setHSL(o,.9,.6);this.setColorAt(i,l)}this.instanceColor.needsUpdate=!0}for(let i=0;i<this.count;i++)Me.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Me.scale.setScalar(0):Me.scale.setScalar(this.physics.sizeData[i]),Me.updateMatrix(),this.setMatrixAt(i,Me.matrix),i===0&&this.light.position.copy(Me.position);this.instanceMatrix.needsUpdate=!0}}function wn(n,t={}){const i=new fn({canvas:n,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let o;i.renderer.toneMapping=Kt,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),x(t);const l=new Zt,f=new $t(new O(0,0,1),0),p=new O;let g=!1;n.style.touchAction="none",n.style.userSelect="none",n.style.webkitUserSelect="none";const d=hn({domElement:n,onMove(){l.setFromCamera(d.nPosition,i.camera),i.camera.getWorldDirection(f.normal),l.ray.intersectPlane(f,p),o.physics.center.copy(p),o.config.controlSphere0=!0},onClick(){o&&o.config.enableExplosion&&o.physics.explode(o.physics.center)},onLeave(){o.config.controlSphere0=!1}});function x(y){o&&(i.clear(),i.scene.remove(o)),o=new bn(i.renderer,y),i.scene.add(o)}return i.onBeforeRender=y=>{g||o.update(y)},i.onAfterResize=y=>{o.config.maxX=y.wWidth/2,o.config.maxY=y.wHeight/2},{three:i,get spheres(){return o},setCount(y){x({...o.config,count:y})},togglePause(){g=!g},dispose(){d.dispose(),i.dispose()}}}const Cn=({className:n="",followCursor:t=!0,count:i=100,gravity:o=.5,friction:l=.9975,wallBounce:f=.95,colors:p=[0,0,0],enableExplosion:g=!1,rainbow:d=!1,...x})=>{const y=r.useRef(null),A=r.useRef(null);return r.useEffect(()=>{const S=y.current;if(S)return A.current=wn(S,{followCursor:t,count:i,gravity:o,friction:l,wallBounce:f,colors:p,enableExplosion:g,rainbow:d,...x}),()=>{A.current&&A.current.dispose()}},[]),r.useEffect(()=>{const S=A.current;if(!S||!S.spheres)return;const v=S.spheres.config;v.gravity=o,v.friction=l,v.wallBounce=f,v.followCursor=t,v.enableExplosion=g,v.rainbow=d,S.spheres.setColors(p)},[o,l,f,t,p,g,d]),r.useEffect(()=>{const S=A.current;S&&S.setCount(i)},[i]),e.jsx("canvas",{className:n,ref:y,style:{width:"100%",height:"100%"}})},Sn=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,jn=`
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
`,Ve=8;function bt(n){let t=n.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,o=255,l=255;return t.length===3?(i=parseInt(t[0]+t[0],16),o=parseInt(t[1]+t[1],16),l=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),o=parseInt(t.slice(2,4),16),l=parseInt(t.slice(4,6),16)),new O(i/255,o/255,l/255)}function Pn({linesGradient:n,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:o=[5],topWavePosition:l,middleWavePosition:f,bottomWavePosition:p={x:2,y:-.7,rotate:-1},animationSpeed:g=1,interactive:d=!1,bendRadius:x=5,bendStrength:y=-.5,mouseDamping:A=.05,mixBlendMode:S="screen",amplitude:v=1,rainbow:b=!1}){const _=r.useRef(null),E=r.useRef(null),L=r.useRef(null),G=r.useRef(new he(-1e3,-1e3)),ie=r.useRef(new he(-1e3,-1e3)),N=r.useRef(0),Y=r.useRef(0),P=r.useRef(b),H=r.useRef(d);r.useEffect(()=>{H.current=d},[d]),r.useEffect(()=>{P.current=b},[b]);const U=c=>{if(typeof i=="number")return i;if(!t.includes(c))return 0;const h=t.indexOf(c);return i[h]??6},j=c=>{if(typeof o=="number")return o;if(!t.includes(c))return .1;const h=t.indexOf(c);return o[h]??.1},W=t.includes("top")?U("top"):0,R=t.includes("middle")?U("middle"):0,I=t.includes("bottom")?U("bottom"):0,B=t.includes("top")?j("top")*.01:.01,w=t.includes("middle")?j("middle")*.01:.01,s=t.includes("bottom")?j("bottom")*.01:.01;return r.useEffect(()=>{if(L.current&&n&&n.length>0&&!b){const c=n.slice(0,Ve);L.current.uniforms.lineGradientCount.value=c.length,c.forEach((h,u)=>{const C=bt(h);L.current.uniforms.lineGradient.value[u].set(C.x,C.y,C.z)})}},[n,b]),r.useEffect(()=>{if(!L.current)return;const c=L.current.uniforms;c.animationSpeed.value=g,c.amplitude.value=v,c.bendRadius.value=x,c.bendStrength.value=y,c.interactive.value=d,c.enableTop.value=t.includes("top"),c.enableMiddle.value=t.includes("middle"),c.enableBottom.value=t.includes("bottom");const h=C=>{if(typeof i=="number")return i;if(!t.includes(C))return 0;const M=t.indexOf(C);return i[M]??6},u=C=>{if(typeof o=="number")return o;if(!t.includes(C))return .1;const M=t.indexOf(C);return o[M]??.1};c.topLineCount.value=t.includes("top")?h("top"):0,c.middleLineCount.value=t.includes("middle")?h("middle"):0,c.bottomLineCount.value=t.includes("bottom")?h("bottom"):0,c.topLineDistance.value=t.includes("top")?u("top")*.01:.01,c.middleLineDistance.value=t.includes("middle")?u("middle")*.01:.01,c.bottomLineDistance.value=t.includes("bottom")?u("bottom")*.01:.01},[g,v,x,y,d,t,i,o]),r.useEffect(()=>{if(!_.current)return;const c=new We,h=new rt(-1,1,1,-1,0,1);h.position.z=1;const u=new qe({antialias:!0,alpha:!1});u.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),u.domElement.style.width="100%",u.domElement.style.height="100%",_.current.appendChild(u.domElement),E.current=u;const C={iTime:{value:0},iResolution:{value:new O(1,1,1)},animationSpeed:{value:g},amplitude:{value:v},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:W},middleLineCount:{value:R},bottomLineCount:{value:I},topLineDistance:{value:B},middleLineDistance:{value:w},bottomLineDistance:{value:s},topWavePosition:{value:new O(l?.x??10,l?.y??.5,l?.rotate??-.4)},middleWavePosition:{value:new O(f?.x??5,f?.y??0,f?.rotate??.2)},bottomWavePosition:{value:new O(p?.x??2,p?.y??-.7,p?.rotate??.4)},iMouse:{value:new he(-1e3,-1e3)},interactive:{value:d},bendRadius:{value:x},bendStrength:{value:y},bendInfluence:{value:0},lineGradient:{value:Array.from({length:Ve},()=>new O(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const J=n.slice(0,Ve);C.lineGradientCount.value=J.length,J.forEach((ne,oe)=>{const re=bt(ne);C.lineGradient.value[oe].set(re.x,re.y,re.z)})}const M=new Ee({uniforms:C,vertexShader:Sn,fragmentShader:jn});L.current=M;const D=new Ue(2,2),q=new De(D,M);c.add(q);const k=new at,K=()=>{const J=_.current,ne=J.clientWidth||1,oe=J.clientHeight||1;u.setSize(ne,oe,!1);const re=u.domElement.width,pe=u.domElement.height;C.iResolution.value.set(re,pe,1)};K();const se=typeof ResizeObserver<"u"?new ResizeObserver(K):null;se&&_.current&&se.observe(_.current);const ee=J=>{if(!H.current)return;const ne=u.domElement.getBoundingClientRect(),oe=J.clientX-ne.left,re=J.clientY-ne.top,pe=u.getPixelRatio();G.current.set(oe*pe,(ne.height-re)*pe),N.current=1};window.addEventListener("pointermove",ee);let de=0;const fe=()=>{if(C.iTime.value=k.getElapsedTime(),H.current&&(ie.current.lerp(G.current,A),C.iMouse.value.copy(ie.current),Y.current+=(N.current-Y.current)*A,C.bendInfluence.value=Y.current),P.current){const J=k.getElapsedTime();C.lineGradientCount.value<3&&(C.lineGradientCount.value=3);for(let ne=0;ne<Ve;ne++){const oe=(J*.1+ne*.15)%1,re=new ye().setHSL(oe,.8,.5);C.lineGradient.value[ne].set(re.r,re.g,re.b)}}u.render(c,h),de=requestAnimationFrame(fe)};return fe(),()=>{cancelAnimationFrame(de),se&&_.current&&se.disconnect(),window.removeEventListener("pointermove",ee),D.dispose(),M.dispose(),u.dispose(),u.domElement.parentElement&&u.domElement.parentElement.removeChild(u.domElement)}},[]),e.jsx("div",{ref:_,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:S}})}const An=({topColor:n="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:o=.3,interactive:l=!1,className:f="",glowAmount:p=.005,pillarWidth:g=3,pillarHeight:d=.4,noiseIntensity:x=.5,mixBlendMode:y="screen",pillarRotation:A=0,quality:S="high"})=>{const v=r.useRef(null),b=r.useRef(null),_=r.useRef(null),E=r.useRef(null),L=r.useRef(null),G=r.useRef(null),ie=r.useRef(null),N=r.useRef(new he(0,0)),Y=r.useRef(0),[P,H]=r.useState(!0);return r.useEffect(()=>{const U=document.createElement("canvas");U.getContext("webgl")||U.getContext("experimental-webgl")||H(!1)},[]),r.useEffect(()=>{if(!v.current||!P)return;const U=v.current,j=U.clientWidth,W=U.clientHeight,R=new We;L.current=R;const I=new rt(-1,1,1,-1,0,1);G.current=I;const B=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),w=B||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let s=S;w&&S==="high"&&(s="medium"),B&&S!=="low"&&(s="low");const c={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},h=c[s]||c.medium;let u;try{u=new qe({antialias:!1,alpha:!0,powerPreference:s==="high"?"high-performance":"low-power",precision:h.precision,stencil:!1,depth:!1})}catch{H(!1);return}u.setSize(j,W),u.setPixelRatio(h.pixelRatio),v.current.appendChild(u.domElement),_.current=u;const C=T=>{const X=new ye(T);return new O(X.r,X.g,X.b)},M=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,D=`
      precision ${h.precision} float;

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

      const float STEP_MULT = ${h.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${h.iterations};
      const int WAVE_ITER = ${h.waveIterations};

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
    `,q=A*Math.PI/180,k=Math.sin(.4),K=Math.cos(.4),se=new Ee({vertexShader:M,fragmentShader:D,uniforms:{uTime:{value:0},uResolution:{value:new he(j,W)},uMouse:{value:N.current},uTopColor:{value:C(n)},uBottomColor:{value:C(t)},uIntensity:{value:i},uInteractive:{value:l},uGlowAmount:{value:p},uPillarWidth:{value:g},uPillarHeight:{value:d},uNoiseIntensity:{value:x},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(q)},uPillarRotSin:{value:Math.sin(q)},uWaveSin:{value:k},uWaveCos:{value:K}},transparent:!0,depthWrite:!1,depthTest:!1});E.current=se;const ee=new Ue(2,2);ie.current=ee;const de=new De(ee,se);R.add(de);let fe=null;const J=T=>{if(!l||fe)return;fe=window.setTimeout(()=>{fe=null},16);const X=U.getBoundingClientRect(),z=(T.clientX-X.left)/X.width*2-1,Q=-((T.clientY-X.top)/X.height)*2+1;N.current.set(z,Q)};l&&U.addEventListener("mousemove",J,{passive:!0});let ne=performance.now();const re=1e3/(s==="low"?30:60),pe=T=>{if(!E.current||!_.current||!L.current||!G.current)return;const X=T-ne;if(X>=re){Y.current+=.016*o;const z=Y.current;E.current.uniforms.uTime.value=z,E.current.uniforms.uRotCos.value=Math.cos(z*.3),E.current.uniforms.uRotSin.value=Math.sin(z*.3),_.current.render(L.current,G.current),ne=T-X%re}b.current=requestAnimationFrame(pe)};b.current=requestAnimationFrame(pe);let m=null;const F=()=>{m&&clearTimeout(m),m=window.setTimeout(()=>{if(!_.current||!E.current||!v.current)return;const T=v.current.clientWidth,X=v.current.clientHeight;_.current.setSize(T,X),E.current.uniforms.uResolution.value.set(T,X)},150)};return window.addEventListener("resize",F,{passive:!0}),()=>{window.removeEventListener("resize",F),l&&U.removeEventListener("mousemove",J),b.current&&cancelAnimationFrame(b.current),_.current&&(_.current.dispose(),_.current.forceContextLoss(),U.contains(_.current.domElement)&&U.removeChild(_.current.domElement)),E.current&&E.current.dispose(),ie.current&&ie.current.dispose(),_.current=null,E.current=null,L.current=null,G.current=null,ie.current=null,b.current=null}},[n,t,i,o,l,p,g,d,x,A,P,S]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),P?e.jsx("div",{ref:v,className:`light-pillar-container ${f}`,style:{mixBlendMode:y}}):e.jsx("div",{className:`light-pillar-fallback ${f}`,style:{mixBlendMode:y},children:"WebGL not supported"})]})},Rn=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,Ln=`
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
`;function kn({color:n="#ffffff",flakeSize:t=.01,minFlakeSize:i=1.25,pixelResolution:o=200,speed:l=1.25,depthFade:f=8,farPlane:p=20,brightness:g=1,gamma:d=.4545,density:x=.3,variant:y="square",direction:A=125,rainbow:S=!1,storm:v=!1,className:b="",style:_={}}){const E=r.useRef(null),L=r.useRef(0),G=r.useRef(!0),ie=r.useRef(null),N=r.useRef(null),Y=r.useRef(null),P=r.useMemo(()=>y==="round"?1:y==="snowflake"?2:0,[y]),H=r.useMemo(()=>{const j=new ye(n);return new O(j.r,j.g,j.b)},[n]),U=r.useCallback(()=>{Y.current&&clearTimeout(Y.current),Y.current=window.setTimeout(()=>{const j=E.current,W=ie.current,R=N.current;if(!j||!W||!R)return;const I=j.offsetWidth,B=j.offsetHeight;W.setSize(I,B),R.uniforms.uResolution.value.set(I,B)},100)},[]);return r.useEffect(()=>{const j=E.current;if(!j)return;const W=new IntersectionObserver(([R])=>{G.current=R.isIntersecting},{threshold:0});return W.observe(j),()=>W.disconnect()},[]),r.useEffect(()=>{const j=E.current;if(!j)return;const W=new We,R=new rt(-1,1,1,-1,0,1),I=new qe({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});I.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.setSize(j.offsetWidth,j.offsetHeight),I.setClearColor(0,0),j.appendChild(I.domElement),ie.current=I;const B=new Ee({vertexShader:Rn,fragmentShader:Ln,uniforms:{uTime:{value:0},uResolution:{value:new he(j.offsetWidth,j.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:i},uPixelResolution:{value:o},uSpeed:{value:l},uDepthFade:{value:f},uFarPlane:{value:p},uColor:{value:H.clone()},uBrightness:{value:g},uGamma:{value:d},uDensity:{value:x},uVariant:{value:P},uDirection:{value:A*Math.PI/180},uRainbow:{value:S?1:0}},transparent:!0});N.current=B;const w=new Ue(2,2);W.add(new De(w,B)),window.addEventListener("resize",U);const s=performance.now(),c=()=>{L.current=requestAnimationFrame(c),G.current&&(B.uniforms.uTime.value=(performance.now()-s)*.001,I.render(W,R))};return c(),()=>{cancelAnimationFrame(L.current),window.removeEventListener("resize",U),Y.current&&clearTimeout(Y.current),j.contains(I.domElement)&&j.removeChild(I.domElement),I.dispose(),w.dispose(),B.dispose(),ie.current=null,N.current=null}},[U]),r.useEffect(()=>{const j=N.current;j&&(j.uniforms.uFlakeSize.value=t,j.uniforms.uMinFlakeSize.value=i,j.uniforms.uPixelResolution.value=o,j.uniforms.uSpeed.value=v?l*4:l,j.uniforms.uDepthFade.value=f,j.uniforms.uFarPlane.value=p,j.uniforms.uBrightness.value=g,j.uniforms.uGamma.value=d,j.uniforms.uDensity.value=x,j.uniforms.uVariant.value=P,j.uniforms.uDirection.value=A*Math.PI/180,j.uniforms.uColor.value.copy(H),j.uniforms.uRainbow.value=S?1:0)},[t,i,o,l,f,p,g,d,x,P,A,H,S,v]),e.jsx("div",{ref:E,className:`pixel-snow-container ${b}`,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",contain:"layout style paint",..._}})}const Fn=({effectOptions:n={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}}})=>{const t=r.useRef(null),i=r.useRef(null);return r.useEffect(()=>{if(i.current){i.current.dispose();const w=document.getElementById("lights");if(w)for(;w.firstChild;)w.removeChild(w.firstChild)}const o={uFreq:{value:new O(3,6,10)},uAmp:{value:new O(30,30,20)}},l={uFreq:{value:new he(5,2)},uAmp:{value:new he(25,15)}},f={uFreq:{value:new he(2,3)},uAmp:{value:new he(35,10)}},p={uFreq:{value:new lt(4,8,8,1)},uAmp:{value:new lt(25,5,10,10)}},g={uFreq:{value:new he(4,8)},uAmp:{value:new he(10,20)},uPowY:{value:new he(20,2)}};let d=w=>Math.sin(w)*.5+.5;const x={mountainDistortion:{uniforms:o,getDistortion:`
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
        `,getJS:(w,s)=>{let c=.02,h=o.uFreq.value,u=o.uAmp.value,C=new O(Math.cos(w*Math.PI*h.x+s)*u.x-Math.cos(c*Math.PI*h.x+s)*u.x,d(w*Math.PI*h.y+s)*u.y-d(c*Math.PI*h.y+s)*u.y,d(w*Math.PI*h.z+s)*u.z-d(c*Math.PI*h.z+s)*u.z),M=new O(2,2,2),D=new O(0,0,-5);return C.multiply(M).add(D)}},xyDistortion:{uniforms:l,getDistortion:`
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
        `,getJS:(w,s)=>{let c=.02,h=l.uFreq.value,u=l.uAmp.value,C=new O(Math.cos(w*Math.PI*h.x+s)*u.x-Math.cos(c*Math.PI*h.x+s)*u.x,Math.sin(w*Math.PI*h.y+s+Math.PI/2)*u.y-Math.sin(c*Math.PI*h.y+s+Math.PI/2)*u.y,0),M=new O(2,.4,1),D=new O(0,0,-3);return C.multiply(M).add(D)}},LongRaceDistortion:{uniforms:f,getDistortion:`
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
        `,getJS:(w,s)=>{let c=.0125,h=f.uFreq.value,u=f.uAmp.value,C=new O(Math.sin(w*Math.PI*h.x+s)*u.x-Math.sin(c*Math.PI*h.x+s)*u.x,Math.sin(w*Math.PI*h.y+s)*u.y-Math.sin(c*Math.PI*h.y+s)*u.y,0),M=new O(1,1,0),D=new O(0,0,-5);return C.multiply(M).add(D)}},turbulentDistortion:{uniforms:p,getDistortion:`
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
        `,getJS:(w,s)=>{const c=p.uFreq.value,h=p.uAmp.value,u=k=>Math.cos(Math.PI*k*c.x+s)*h.x+Math.pow(Math.cos(Math.PI*k*c.y+s*(c.y/c.x)),2)*h.y,C=k=>-d(Math.PI*k*c.z+s)*h.z-Math.pow(d(Math.PI*k*c.w+s/(c.z/c.w)),5)*h.w;let M=new O(u(w)-u(w+.007),C(w)-C(w+.007),0),D=new O(-2,-5,0),q=new O(0,0,-10);return M.multiply(D).add(q)}},turbulentDistortionStill:{uniforms:p,getDistortion:`
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
        `},deepDistortionStill:{uniforms:g,getDistortion:`
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
        `},deepDistortion:{uniforms:g,getDistortion:`
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
        `,getJS:(w,s)=>{const c=g.uFreq.value,h=g.uAmp.value,u=g.uPowY.value,C=K=>Math.sin(K*Math.PI*c.x+s)*h.x,M=K=>Math.pow(K*u.x,u.y)+Math.sin(K*Math.PI*c.y+s)*h.y;let D=new O(C(w)-C(w+.01),M(w)-M(w+.01),0),q=new O(-2,-4,0),k=new O(0,0,-10);return D.multiply(q).add(k)}}};class y{constructor(s,c={}){this.options=c,this.options.distortion==null&&(this.options.distortion={uniforms:A,getDistortion:S}),this.container=s,this.renderer=new qe({antialias:!1,alpha:!0}),this.renderer.setSize(s.offsetWidth,s.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new li(this.renderer),s.append(this.renderer.domElement),this.camera=new Ft(c.fov,s.offsetWidth/s.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new We,this.scene.background=null;let h=new ci(c.colors.background,c.length*.2,c.length*500);this.scene.fog=h,this.fogUniforms={fogColor:{value:h.color},fogNear:{value:h.near},fogFar:{value:h.far}},this.clock=new at,this.assets={},this.disposed=!1,this.road=new P(this,c),this.leftCarLights=new E(this,c,c.colors.leftCars,c.movingAwaySpeed,new he(0,1-c.carLightsFade)),this.rightCarLights=new E(this,c,c.colors.rightCars,c.movingCloserSpeed,new he(1,0+c.carLightsFade)),this.leftSticks=new ie(this,c),this.fovTarget=c.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const s=this.container.offsetWidth,c=this.container.offsetHeight;this.renderer.setSize(s,c),this.camera.aspect=s/c,this.camera.updateProjectionMatrix(),this.composer.setSize(s,c)}initPasses(){this.renderPass=new ui(this.scene,this.camera),this.bloomPass=new ct(this.camera,new di({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const s=new ct(this.camera,new ze({preset:fi.MEDIUM,searchImage:ze.searchImageDataURL,areaImage:ze.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,s.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(s)}loadAssets(){const s=this.assets;return new Promise(c=>{const h=new hi(c),u=new Image,C=new Image;s.smaa={},u.addEventListener("load",function(){s.smaa.search=this,h.itemEnd("smaa-search")}),C.addEventListener("load",function(){s.smaa.area=this,h.itemEnd("smaa-area")}),h.itemStart("smaa-search"),h.itemStart("smaa-area"),u.src=ze.searchImageDataURL,C.src=ze.areaImageDataURL})}init(){this.initPasses();const s=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-s.roadWidth/2-s.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(s.roadWidth/2+s.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(s.roadWidth+s.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(s){this.options.onSpeedUp&&this.options.onSpeedUp(s),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(s){this.options.onSlowDown&&this.options.onSlowDown(s),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(s){this.options.onSpeedUp&&this.options.onSpeedUp(s),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(s){this.options.onSlowDown&&this.options.onSlowDown(s),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(s){s.preventDefault()}update(s){let c=Math.exp(-(-60*Math.log2(.9))*s);this.speedUp+=_(this.speedUp,this.speedUpTarget,c,1e-5),this.timeOffset+=this.speedUp*s;let h=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(h),this.leftCarLights.update(h),this.leftSticks.update(h),this.road.update(h);let u=!1,C=_(this.camera.fov,this.fovTarget,c);if(C!==0&&(this.camera.fov+=C*s*6,u=!0),this.options.distortion.getJS){const M=this.options.distortion.getJS(.025,h);this.camera.lookAt(new O(this.camera.position.x+M.x,this.camera.position.y+M.y,this.camera.position.z+M.z)),u=!0}u&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(s){this.composer.render(s)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(s,c,h){this.composer.setSize(s,c,h)}tick(){if(this.disposed||!this)return;if(B(this.renderer,this.setSize)){const c=this.renderer.domElement;this.camera.aspect=c.clientWidth/c.clientHeight,this.camera.updateProjectionMatrix()}const s=this.clock.getDelta();this.render(s),this.update(s),requestAnimationFrame(this.tick)}}const A={uDistortionX:{value:new he(80,3)},uDistortionY:{value:new he(-40,2.5)}},S=`
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
    `,v=w=>Array.isArray(w)?Math.random()*(w[1]-w[0])+w[0]:Math.random()*w,b=w=>Array.isArray(w)?w[Math.floor(Math.random()*w.length)]:w;function _(w,s,c=.1,h=.001){let u=(s-w)*c;return Math.abs(u)<h&&(u=s-w),u}class E{constructor(s,c,h,u,C){this.webgl=s,this.options=c,this.colors=h,this.speed=u,this.fade=C}init(){const s=this.options;let c=new pi(new O(0,0,0),new O(0,0,-1)),h=new mi(c,40,1,8,!1),u=new dt().copy(h);u.instanceCount=s.lightPairsPerRoadWay*2;let C=s.roadWidth/s.lanesPerRoad,M=[],D=[],q=[],k=this.colors;Array.isArray(k)?k=k.map(ee=>new ye(ee)):k=new ye(k);for(let ee=0;ee<s.lightPairsPerRoadWay;ee++){let de=v(s.carLightsRadius),fe=v(s.carLightsLength),J=v(this.speed),oe=ee%s.lanesPerRoad*C-s.roadWidth/2+C/2,re=v(s.carWidthPercentage)*C,pe=v(s.carShiftX)*C;oe+=pe;let m=v(s.carFloorSeparation)+de*1.3,F=-v(s.length);M.push(oe-re/2),M.push(m),M.push(F),M.push(oe+re/2),M.push(m),M.push(F),D.push(de),D.push(fe),D.push(J),D.push(de),D.push(fe),D.push(J);let T=b(k);q.push(T.r),q.push(T.g),q.push(T.b),q.push(T.r),q.push(T.g),q.push(T.b)}u.setAttribute("aOffset",new Fe(new Float32Array(M),3,!1)),u.setAttribute("aMetrics",new Fe(new Float32Array(D),3,!1)),u.setAttribute("aColor",new Fe(new Float32Array(q),3,!1));let K=new Ee({fragmentShader:L,vertexShader:G,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:s.length},uFade:{value:this.fade}},this.webgl.fogUniforms,s.distortion.uniforms)});K.onBeforeCompile=ee=>{ee.vertexShader=ee.vertexShader.replace("#include <getDistortion_vertex>",s.distortion.getDistortion)};let se=new De(u,K);se.frustumCulled=!1,this.webgl.scene.add(se),this.mesh=se}update(s){this.mesh.material.uniforms.uTime.value=s}}const L=`
      #define USE_FOG;
      ${be.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${be.fog_fragment}
      }
    `,G=`
      #define USE_FOG;
      ${be.fog_pars_vertex}
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
        ${be.fog_vertex}
      }
    `;class ie{constructor(s,c){this.webgl=s,this.options=c}init(){const s=this.options,c=new Ue(1,1);let h=new dt().copy(c),u=s.totalSideLightSticks;h.instanceCount=u;let C=s.length/(u-1);const M=[],D=[],q=[];let k=s.colors.sticks;Array.isArray(k)?k=k.map(ee=>new ye(ee)):k=new ye(k);for(let ee=0;ee<u;ee++){let de=v(s.lightStickWidth),fe=v(s.lightStickHeight);M.push((ee-1)*C*2+C*Math.random());let J=b(k);D.push(J.r),D.push(J.g),D.push(J.b),q.push(de),q.push(fe)}h.setAttribute("aOffset",new Fe(new Float32Array(M),1,!1)),h.setAttribute("aColor",new Fe(new Float32Array(D),3,!1)),h.setAttribute("aMetrics",new Fe(new Float32Array(q),2,!1));const K=new Ee({fragmentShader:Y,vertexShader:N,side:ut,uniforms:Object.assign({uTravelLength:{value:s.length},uTime:{value:0}},this.webgl.fogUniforms,s.distortion.uniforms)});K.onBeforeCompile=ee=>{ee.vertexShader=ee.vertexShader.replace("#include <getDistortion_vertex>",s.distortion.getDistortion)};const se=new De(h,K);se.frustumCulled=!1,this.webgl.scene.add(se),this.mesh=se}update(s){this.mesh.material.uniforms.uTime.value=s}}const N=`
      #define USE_FOG;
      ${be.fog_pars_vertex}
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
        ${be.fog_vertex}
      }
    `,Y=`
      #define USE_FOG;
      ${be.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${be.fog_fragment}
      }
    `;class P{constructor(s,c){this.webgl=s,this.options=c,this.uTime={value:0}}createPlane(s,c,h){const u=this.options;let C=100;const M=new Ue(h?u.roadWidth:u.islandWidth,u.length,20,C);let D={uTravelLength:{value:u.length},uColor:{value:new ye(h?u.colors.roadColor:u.colors.islandColor)},uTime:this.uTime};h&&(D=Object.assign(D,{uLanes:{value:u.lanesPerRoad},uBrokenLinesColor:{value:new ye(u.colors.brokenLines)},uShoulderLinesColor:{value:new ye(u.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:u.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:u.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:u.brokenLinesWidthPercentage}}));const q=new Ee({fragmentShader:h?R:U,vertexShader:I,side:ut,uniforms:Object.assign(D,this.webgl.fogUniforms,u.distortion.uniforms)});q.onBeforeCompile=K=>{K.vertexShader=K.vertexShader.replace("#include <getDistortion_vertex>",u.distortion.getDistortion)};const k=new De(M,q);return k.rotation.x=-Math.PI/2,k.position.z=-u.length/2,k.position.x+=(this.options.islandWidth/2+u.roadWidth/2)*s,this.webgl.scene.add(k),k}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(s){this.uTime.value=s}}const H=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${be.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${be.fog_fragment}
      }
    `,U=H.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),R=H.replace("#include <roadMarkings_fragment>",`
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
    `),I=`
      #define USE_FOG;
      uniform float uTime;
      ${be.fog_pars_vertex}
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
        ${be.fog_vertex}
      }
    `;function B(w,s){const c=w.domElement,h=c.clientWidth,u=c.clientHeight,C=c.width!==h||c.height!==u;return C&&s(h,u,!1),C}return(function(){const w=document.getElementById("lights"),s={...n};s.distortion=x[s.distortion];const c=new y(w,s);i.current=c,c.loadAssets().then(c.init)})(),()=>{i.current&&i.current.dispose()}},[n]),e.jsx("div",{id:"lights",ref:t})},In=({floatingLinesConfig:n,lightPillarsConfig:t,ballpitConfig:i,silkConfig:o,galaxyConfig:l,gradientConfig:f,pixelSnowConfig:p,hyperspeedConfig:g})=>{const{activeBackground:d,floatingLinesConfig:x,lightPillarsConfig:y,ballpitConfig:A,silkConfig:S,galaxyConfig:v,gradientConfig:b,pixelSnowConfig:_,hyperspeedConfig:E}=Te(),L=n||x,G=t||y,ie=i||A,N=o||S,Y=l||v,P=f||b,H=p||_,U=g||E,j=L||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},W=G||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},R=ie||{colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1,rainbow:!1},I=N||{color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},B=Y||{density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},w=P||{color1:"#b117f8",color2:"#2c0b2e",speed:20},s=H||{color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,variant:"snowflake",rainbow:!1,storm:!1};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(we,{mode:"wait",children:[d==="gradient"&&e.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(rn,{color1:w.color1,color2:w.color2,speed:w.speed})},"gradient"),d==="galaxy"&&e.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(dn,{density:B.density,glowIntensity:B.glowIntensity,saturation:B.saturation,hueShift:B.hueShift,twinkleIntensity:B.twinkleIntensity,rotationSpeed:B.rotationSpeed,starSpeed:B.starSpeed,speed:B.speed,rainbow:B.rainbow,warp:B.warp})},"galaxy"),d==="silk"&&e.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(Dt,{speed:I.speed,scale:I.scale,color:I.color,noiseIntensity:I.noiseIntensity,rotation:I.rotation})},"silk"),d==="ballpit"&&e.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:e.jsx(Cn,{count:R.count,gravity:R.gravity,friction:R.friction,wallBounce:R.wallBounce,followCursor:R.followCursor,colors:R.colors,enableExplosion:R.enableExplosion,rainbow:R.rainbow})},"ballpit"),d==="floatinglines"&&e.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Pn,{linesGradient:j.colors,lineCount:j.count,lineDistance:j.distance,animationSpeed:.5,bendRadius:j.bendRadius,bendStrength:j.bendStrength,enabledWaves:j.enabledWaves,interactive:j.interactive??!1,parallax:j.parallax??!1,amplitude:j.amplitude??1,rainbow:j.rainbow})},"floatinglines"),d==="lightpillars"&&e.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(An,{topColor:W.topColor,bottomColor:W.bottomColor,intensity:W.intensity,rotationSpeed:W.rotationSpeed,glowAmount:W.glowAmount??.002,pillarWidth:W.pillarWidth,pillarHeight:W.pillarHeight,noiseIntensity:W.noiseIntensity,pillarRotation:W.pillarRotation,interactive:W.interactive??!0,quality:W.quality??"high"})},"lightpillars"),d==="pixelsnow"&&e.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(kn,{color:s.color,flakeSize:s.flakeSize,minFlakeSize:s.minFlakeSize,pixelResolution:s.pixelResolution,speed:s.speed,density:s.density,direction:s.direction,brightness:s.brightness,variant:s.variant,rainbow:s.rainbow,storm:s.storm})},"pixelsnow"),d==="hyperspeed"&&e.jsx(Z.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Fn,{effectOptions:U})},"hyperspeed")]})})},Mn=({onItemClick:n,isOpen:t,onToggle:i,position:o="left",colors:l=["#B19EEF","#5227FF"],items:f=[],socialItems:p=[],displaySocials:g=!0,displayItemNumbering:d=!0,className:x,logoUrl:y=null,menuButtonColor:A="#fff",openMenuButtonColor:S="#000",accentColor:v="#5227FF",changeMenuColorOnOpen:b=!0,isFixed:_=!1,closeOnClickAway:E=!0,onMenuOpen:L,onMenuClose:G})=>{const[ie,N]=r.useState(!1),Y=typeof t=="boolean",P=Y?t:ie,H=r.useRef(!1),U=r.useRef(null),j=r.useRef(null),W=r.useRef([]),R=r.useRef(null),I=r.useRef(null),B=r.useRef(null),w=r.useRef(null),s=r.useRef(null),[c,h]=r.useState(["Menu","Close"]),u=r.useRef(null),C=r.useRef(null),M=r.useRef(null),D=r.useRef(null),q=r.useRef(null),k=r.useRef(null),K=r.useRef(!1),se=r.useRef(null);r.useLayoutEffect(()=>{const m=te.context(()=>{const F=U.current,T=j.current,X=R.current,z=I.current,Q=B.current,V=w.current;if(!F||!X||!z||!Q||!V)return;let le=[];T&&(le=Array.from(T.querySelectorAll(".sm-prelayer"))),W.current=le;const xe=o==="left"?-100:100;te.set([F,...le],{xPercent:xe}),te.set(X,{transformOrigin:"50% 50%",rotate:0}),te.set(z,{transformOrigin:"50% 50%",rotate:90}),te.set(Q,{rotate:0,transformOrigin:"50% 50%"}),te.set(V,{yPercent:0}),k.current&&te.set(k.current,{color:A})});return()=>m.revert()},[A,o]);const ee=r.useCallback(()=>{const m=U.current,F=W.current;if(!m)return null;u.current?.kill(),C.current&&(C.current.kill(),C.current=null),se.current?.kill();const T=Array.from(m.querySelectorAll(".sm-panel-itemLabel")),X=Array.from(m.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),z=m.querySelector(".sm-socials-title"),Q=Array.from(m.querySelectorAll(".sm-socials-link")),V=F.map(me=>({el:me,start:Number(te.getProperty(me,"xPercent"))})),le=Number(te.getProperty(m,"xPercent"));T.length&&te.set(T,{yPercent:140,rotate:10}),X.length&&te.set(X,{"--sm-num-opacity":0}),z&&te.set(z,{opacity:0}),Q.length&&te.set(Q,{y:25,opacity:0});const xe=te.timeline({paused:!0});V.forEach((me,je)=>{xe.fromTo(me.el,{xPercent:me.start},{xPercent:0,duration:.8,ease:"power4.out"},je*.07)});const Ae=(V.length?(V.length-1)*.07:0)+(V.length?.08:0),ae=1;if(xe.fromTo(m,{xPercent:le},{xPercent:0,duration:ae,ease:"power4.out"},Ae),T.length){const je=Ae+ae*.15;xe.to(T,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},je),X.length&&xe.to(X,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},je+.1)}if(z||Q.length){const me=Ae+ae*.4;z&&xe.to(z,{opacity:1,duration:.5,ease:"power2.out"},me),Q.length&&xe.to(Q,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{te.set(Q,{clearProps:"opacity"})}},me+.04)}return u.current=xe,xe},[]),de=r.useCallback(()=>{if(K.current)return;K.current=!0;const m=ee();m?(m.eventCallback("onComplete",()=>{K.current=!1}),m.play(0)):K.current=!1},[ee]),fe=r.useCallback(()=>{u.current?.kill(),u.current=null,se.current?.kill();const m=U.current,F=W.current;if(!m)return;const T=[...F,m];C.current?.kill();const X=o==="left"?-100:100;C.current=te.to(T,{xPercent:X,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const z=Array.from(m.querySelectorAll(".sm-panel-itemLabel"));z.length&&te.set(z,{yPercent:140,rotate:10});const Q=Array.from(m.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));Q.length&&te.set(Q,{"--sm-num-opacity":0});const V=m.querySelector(".sm-socials-title"),le=Array.from(m.querySelectorAll(".sm-socials-link"));V&&te.set(V,{opacity:0}),le.length&&te.set(le,{y:25,opacity:0}),K.current=!1}})},[o]),J=r.useCallback(m=>{const F=B.current;F&&(M.current?.kill(),m?M.current=te.to(F,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):M.current=te.to(F,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),ne=r.useCallback(m=>{const F=k.current;if(F)if(q.current?.kill(),b){const T=m?S:A;q.current=te.to(F,{color:T,delay:.18,duration:.3,ease:"power2.out"})}else te.set(F,{color:A})},[S,A,b]);Je.useEffect(()=>{if(k.current)if(b){const m=H.current?S:A;te.set(k.current,{color:m})}else te.set(k.current,{color:A})},[b,A,S]);const oe=r.useCallback(m=>{const F=w.current;if(!F)return;D.current?.kill();const T=m?"Menu":"Close",X=m?"Close":"Menu",z=3,Q=[T];let V=T;for(let ve=0;ve<z;ve++)V=V==="Menu"?"Close":"Menu",Q.push(V);V!==X&&Q.push(X),Q.push(X),h(Q),te.set(F,{yPercent:0});const le=Q.length,xe=(le-1)/le*100;D.current=te.to(F,{yPercent:-xe,duration:.5+le*.07,ease:"power4.out"})},[]),re=r.useCallback(()=>{if(Y)i&&i(!P);else{const m=!H.current;H.current=m,N(m),m?(L?.(),de()):(G?.(),fe()),J(m),ne(m),oe(m)}},[Y,t,i,P,de,fe,J,ne,oe,L,G]);Je.useEffect(()=>{Y&&(H.current=t,t?(L?.(),de()):(G?.(),fe()),J(t),ne(t),oe(t))},[t,Y,de,fe,J,ne,oe,L,G]);const pe=r.useCallback(()=>{Y?P&&i&&i(!1):H.current&&(H.current=!1,N(!1),G?.(),fe(),J(!1),ne(!1),oe(!1))},[Y,P,i,fe,J,ne,oe,G]);return Je.useEffect(()=>{if(!E||!P)return;const m=F=>{const T=U.current&&U.current.contains(F.target),X=k.current&&k.current.contains(F.target),z=F.target.closest(".shop-overlay");!T&&!X&&!z&&pe()};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[E,P,pe]),e.jsxs("div",{className:(x?x+" ":"")+"staggered-menu-wrapper"+(_?" fixed-wrapper":""),style:v?{"--sm-accent":v}:void 0,"data-position":o,"data-open":P||void 0,children:[e.jsx("div",{ref:j,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let F=[...l&&l.length?l.slice(0,4):["#1e1e22","#35353c"]];if(F.length>=3){const T=Math.floor(F.length/2);F.splice(T,1)}return F.map((T,X)=>e.jsx("div",{className:"sm-prelayer",style:{background:T}},X))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:y?e.jsx("img",{src:y,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:k,className:"sm-toggle","aria-label":P?"Close menu":"Open menu","aria-expanded":P,"aria-controls":"staggered-menu-panel",onClick:re,type:"button",children:[e.jsx("span",{ref:s,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:w,className:"sm-toggle-textInner",children:c.map((m,F)=>e.jsx("span",{className:"sm-toggle-line",children:m},F))})}),e.jsxs("span",{ref:B,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:R,className:"sm-icon-line"}),e.jsx("span",{ref:I,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:U,className:"staggered-menu-panel","aria-hidden":!P,children:e.jsxs("div",{className:"sm-panel-inner",children:[e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":d||void 0,children:f&&f.length?f.map((m,F)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:T=>{T.preventDefault(),n&&n(m.id)},"aria-label":m.ariaLabel,"data-index":F+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:m.label})})},m.label+F)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})}),g&&p&&p.length>0&&e.jsxs("div",{className:"sm-socials","aria-label":"Social links",children:[e.jsx("h3",{className:"sm-socials-title",children:"Extras"}),e.jsx("ul",{className:"sm-socials-list",role:"list",children:p.map((m,F)=>e.jsx("li",{className:"sm-socials-item",children:e.jsx("a",{href:m.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link",children:m.label})},m.label+F))})]})]})})]})},Tt=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],wt={colors:Tt[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},_n=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],Ct={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},St={colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1},jt={color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},Pt={density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},At={color1:"#b117f8",color2:"#2c0b2e",speed:20},Rt={color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,depthFade:3,farPlane:10,gamma:.4545,variant:"snowflake",rainbow:!1,storm:!1},_e={cyberpunk:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},akira:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"mountainDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16715818,15415358,16715818],rightCars:[14342906,12499683,9410532],sticks:14342906}},golden:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"deepDistortion",length:400,roadWidth:18,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16724527,10694672,11015432],rightCars:[16645616,15982240,14859144],sticks:16645616}},split:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"LongRaceDistortion",length:400,roadWidth:10,islandWidth:5,lanesPerRoad:2,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:70,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16736115,15158624,16715818],rightCars:[10806246,8442324,5489350],sticks:10806246}},highway:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14441248,14459680,14426144],rightCars:[3361783,15066861,12568307],sticks:12970219}}},En=({onClose:n,floatingLinesConfig:t,setFloatingLinesConfig:i,lightPillarsConfig:o,setLightPillarsConfig:l,ballpitConfig:f,setBallpitConfig:p,silkConfig:g,setSilkConfig:d,galaxyConfig:x,setGalaxyConfig:y,gradientConfig:A,setGradientConfig:S,pixelSnowConfig:v,setPixelSnowConfig:b,hyperspeedConfig:_,setHyperspeedConfig:E})=>{const{activeBackground:L,floatingLinesConfig:G,setFloatingLinesConfig:ie,lightPillarsConfig:N,setLightPillarsConfig:Y,ballpitConfig:P,setBallpitConfig:H,silkConfig:U,setSilkConfig:j,galaxyConfig:W,setGalaxyConfig:R,gradientConfig:I,setGradientConfig:B,pixelSnowConfig:w,setPixelSnowConfig:s,hyperspeedConfig:c,setHyperspeedConfig:h}=Te(),u=t||G,C=i||ie,M=o||N,D=l||Y,q=f||P,k=p||H,K=g||U,se=d||j,ee=x||W,de=y||R,fe=A||I,J=S||B,ne=v||w,oe=b||s,re=_||c,pe=E||h,m=u||wt,F=(a,$)=>{C&&C({...m,[a]:$})},T=a=>{const $=m.enabledWaves,Ce=$.includes(a)?$.filter(Ht=>Ht!==a):[...$,a];F("enabledWaves",Ce)},X=(a,$)=>{const Ce=[...m.colors];Ce[a]=$,F("colors",Ce)},z=M||Ct,Q=(a,$)=>{D?D({...z,[a]:$}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},V=q||St,le=(a,$)=>{k&&k({...V,[a]:$})},xe=(a,$)=>{const Ce=[...V.colors];Ce[a]=$,le("colors",Ce)},ve=K||jt,Ae=(a,$)=>{se&&se({...ve,[a]:$})},ae=ee||Pt,me=(a,$)=>{de&&de({...ae,[a]:$})},je=fe||At,$e=(a,$)=>{J&&J({...je,[a]:$})},ge=ne||Rt,Re=(a,$)=>{oe&&oe({...ge,[a]:$})},Le=re||_e.cyberpunk,Bt=a=>{pe&&_e[a]&&pe(_e[a])},Be=(a,$)=>{pe&&pe({...Le,[a]:$})},Gt=()=>{L==="floatinglines"&&C?C(wt):L==="lightpillars"&&D?D(Ct):L==="ballpit"&&k?k(St):L==="silk"&&se?se(jt):L==="galaxy"&&de?de(Pt):L==="gradient"&&J?J(At):L==="pixelsnow"&&oe?oe(Rt):L==="hyperspeed"&&pe&&pe(_e.cyberpunk)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:Gt,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(gi,{})}),e.jsx("button",{onClick:n,className:"close-btn",children:e.jsx(It,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[L==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:Tt.map(a=>e.jsx("button",{className:"preset-btn",onClick:()=>F("colors",a.colors),style:{background:`linear-gradient(to right, ${a.colors[0]}, ${a.colors[1]}, ${a.colors[2]})`},title:a.name,children:JSON.stringify(m.colors)===JSON.stringify(a.colors)&&e.jsx(Mt,{})},a.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:m.colors.map((a,$)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:a,onChange:Ce=>X($,Ce.target.value)}),e.jsx("span",{className:"hex-code",children:a})]},$))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:m.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:m.count,onChange:a=>F("count",parseInt(a.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:m.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:m.distance,onChange:a=>F("distance",parseInt(a.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Amplitud de Onda ",e.jsx("span",{children:m.amplitude})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:m.amplitude||1,onChange:a=>F("amplitude",parseFloat(a.target.value))}),e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:m.bendRadius})]}),e.jsx("input",{type:"range",min:"5",max:"10",step:"0.1",value:m.bendRadius,onChange:a=>F("bendRadius",parseFloat(a.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:m.bendStrength})]}),e.jsx("input",{type:"range",min:"-7",max:"7",step:"0.1",value:m.bendStrength,onChange:a=>F("bendStrength",parseFloat(a.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(a=>e.jsx("button",{className:`toggle-btn ${m.enabledWaves.includes(a)?"active":""}`,onClick:()=>T(a),children:a.charAt(0).toUpperCase()+a.slice(1)},a))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${m.interactive!==!1?"active":""}`,onClick:()=>F("interactive",m.interactive===!1),style:{width:"100%",textAlign:"center"},children:m.interactive!==!1?"Activada (Ratón)":"Desactivada"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${m.rainbow?"active":""}`,onClick:()=>F("rainbow",!m.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"})]})]}),L==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:z.topColor,onChange:a=>Q("topColor",a.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:z.bottomColor,onChange:a=>Q("bottomColor",a.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:z.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:z.intensity,onChange:a=>Q("intensity",parseFloat(a.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:z.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:z.rotationSpeed,onChange:a=>Q("rotationSpeed",parseFloat(a.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:z.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:z.pillarWidth,onChange:a=>Q("pillarWidth",parseFloat(a.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[z.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:z.pillarRotation,onChange:a=>Q("pillarRotation",parseInt(a.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:z.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:z.pillarHeight,onChange:a=>Q("pillarHeight",parseFloat(a.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:z.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:z.noiseIntensity,onChange:a=>Q("noiseIntensity",parseFloat(a.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:z.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:z.glowAmount,onChange:a=>Q("glowAmount",parseFloat(a.target.value))})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"toggles-row",children:_n.map(a=>e.jsx("button",{className:`toggle-btn ${z.quality===a.value?"active":""}`,onClick:()=>Q("quality",a.value),children:a.label},a.value))})}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${z.interactive!==!1?"active":""}`,onClick:()=>Q("interactive",z.interactive===!1),style:{width:"100%",textAlign:"center"},children:z.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),L==="ballpit"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsx("div",{className:"color-pickers",children:V.colors.map((a,$)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:a,onChange:Ce=>xe($,Ce.target.value)}),e.jsx("span",{className:"hex-code",children:a})]},$))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad ",e.jsx("span",{children:V.count})]}),e.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:V.count,onChange:a=>le("count",parseInt(a.target.value))}),e.jsxs("label",{children:["Gravedad ",e.jsx("span",{children:V.gravity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:V.gravity,onChange:a=>le("gravity",parseFloat(a.target.value))}),e.jsxs("label",{children:["Fricción ",e.jsx("span",{children:V.friction})]}),e.jsx("input",{type:"range",min:"0.8",max:"1",step:"0.001",value:V.friction,onChange:a=>le("friction",parseFloat(a.target.value))}),e.jsxs("label",{children:["Rebote Pared ",e.jsx("span",{children:V.wallBounce})]}),e.jsx("input",{type:"range",min:"0",max:"1.5",step:"0.05",value:V.wallBounce,onChange:a=>le("wallBounce",parseFloat(a.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${V.followCursor?"active":""}`,onClick:()=>le("followCursor",!V.followCursor),style:{width:"100%",textAlign:"center"},children:V.followCursor?"Seguir Cursor":"Cursor Libre"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Eventos Divertidos"}),e.jsxs("div",{className:"toggles-row",children:[e.jsx("button",{className:`toggle-btn ${V.enableExplosion?"active":""}`,onClick:()=>le("enableExplosion",!V.enableExplosion),title:"Haz clic para explotar las bolas",children:"💥 Explosión al Clic"}),e.jsx("button",{className:`toggle-btn ${V.rainbow?"active":""}`,onClick:()=>le("rainbow",!V.rainbow),title:"Ciclo de colores automático",children:"🌈 Modo Arcoíris"})]})]})]}),L==="silk"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:ve.color,onChange:a=>Ae("color",a.target.value)}),e.jsx("span",{className:"hex-code",children:ve.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:ve.speed})]}),e.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:ve.speed,onChange:a=>Ae("speed",parseFloat(a.target.value))}),e.jsxs("label",{children:["Escala ",e.jsx("span",{children:ve.scale})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:ve.scale,onChange:a=>Ae("scale",parseFloat(a.target.value))}),e.jsxs("label",{children:["Ruido ",e.jsx("span",{children:ve.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:ve.noiseIntensity,onChange:a=>Ae("noiseIntensity",parseFloat(a.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[ve.rotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:ve.rotation,onChange:a=>Ae("rotation",parseInt(a.target.value))})]})]}),L==="galaxy"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:ae.density})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:ae.density,onChange:a=>me("density",parseFloat(a.target.value))}),e.jsxs("label",{children:["Intensidad Brillo ",e.jsx("span",{children:ae.glowIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ae.glowIntensity,onChange:a=>me("glowIntensity",parseFloat(a.target.value))}),e.jsxs("label",{children:["Saturación ",e.jsx("span",{children:ae.saturation})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ae.saturation,onChange:a=>me("saturation",parseFloat(a.target.value))}),e.jsxs("label",{children:["Cambio de Tono (Hue) ",e.jsx("span",{children:ae.hueShift})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:ae.hueShift,onChange:a=>me("hueShift",parseFloat(a.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad Rotación ",e.jsx("span",{children:ae.rotationSpeed})]}),e.jsx("input",{type:"range",min:"-0.5",max:"0.5",step:"0.01",value:ae.rotationSpeed,onChange:a=>me("rotationSpeed",parseFloat(a.target.value))}),e.jsxs("label",{children:["Velocidad Estrellas ",e.jsx("span",{children:ae.starSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ae.starSpeed,onChange:a=>me("starSpeed",parseFloat(a.target.value))}),e.jsxs("label",{children:["Velocidad Animación ",e.jsx("span",{children:ae.speed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ae.speed,onChange:a=>me("speed",parseFloat(a.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${ae.rainbow?"active":""}`,onClick:()=>me("rainbow",!ae.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${ae.warp?"active":""}`,onClick:()=>me("warp",!ae.warp),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🚀 Velocidad Warp"})]})]}),L==="gradient"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:je.color1,onChange:a=>$e("color1",a.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:je.color2,onChange:a=>$e("color2",a.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad (segundos) ",e.jsxs("span",{children:[je.speed,"s"]})]}),e.jsx("input",{type:"range",min:"1",max:"60",step:"1",value:je.speed,onChange:a=>$e("speed",parseInt(a.target.value))})]})]}),L==="pixelsnow"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:ge.color,onChange:a=>Re("color",a.target.value)}),e.jsx("span",{className:"hex-code",children:ge.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Variante"}),e.jsx("div",{className:"toggles-row",children:["snowflake","square","round"].map(a=>e.jsx("button",{className:`toggle-btn ${ge.variant===a?"active":""}`,onClick:()=>Re("variant",a),children:a.charAt(0).toUpperCase()+a.slice(1)},a))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:ge.speed})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:ge.speed,onChange:a=>Re("speed",parseFloat(a.target.value))}),e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:ge.density})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ge.density,onChange:a=>Re("density",parseFloat(a.target.value))}),e.jsxs("label",{children:["Dirección ",e.jsxs("span",{children:[ge.direction,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:ge.direction,onChange:a=>Re("direction",parseInt(a.target.value))}),e.jsxs("label",{children:["Tamaño Copo ",e.jsx("span",{children:ge.flakeSize})]}),e.jsx("input",{type:"range",min:"0.005",max:"0.05",step:"0.001",value:ge.flakeSize,onChange:a=>Re("flakeSize",parseFloat(a.target.value))}),e.jsxs("label",{children:["Brillo ",e.jsx("span",{children:ge.brightness})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:ge.brightness,onChange:a=>Re("brightness",parseFloat(a.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${ge.rainbow?"active":""}`,onClick:()=>Re("rainbow",!ge.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${ge.storm?"active":""}`,onClick:()=>Re("storm",!ge.storm),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🌪️ Modo Tormenta"})]})]}),L==="hyperspeed"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Estilo Visual"}),e.jsx("div",{className:"toggles-row",style:{flexWrap:"wrap"},children:Object.keys(_e).map(a=>e.jsx("button",{className:`toggle-btn ${JSON.stringify(Le.colors)===JSON.stringify(_e[a].colors)?"active":""}`,onClick:()=>Bt(a),children:a.charAt(0).toUpperCase()+a.slice(1)},a))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Geometría"}),e.jsxs("label",{children:["Ancho Carretera ",e.jsx("span",{children:Le.roadWidth})]}),e.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:Le.roadWidth,onChange:a=>Be("roadWidth",parseFloat(a.target.value))}),e.jsxs("label",{children:["Ancho Isla ",e.jsx("span",{children:Le.islandWidth})]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:Le.islandWidth,onChange:a=>Be("islandWidth",parseFloat(a.target.value))}),e.jsxs("label",{children:["Carriles ",e.jsx("span",{children:Le.lanesPerRoad})]}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:Le.lanesPerRoad,onChange:a=>Be("lanesPerRoad",parseInt(a.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Distorsión"}),e.jsxs("select",{value:Le.distortion,onChange:a=>Be("distortion",a.target.value),style:{width:"100%",padding:"8px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",color:"white",border:"1px solid rgba(255, 255, 255, 0.2)",marginTop:"5px",cursor:"pointer"},children:[e.jsx("option",{style:{color:"black"},value:"turbulentDistortion",children:"Turbulent"}),e.jsx("option",{style:{color:"black"},value:"deepDistortion",children:"Deep"}),e.jsx("option",{style:{color:"black"},value:"mountainDistortion",children:"Mountain"}),e.jsx("option",{style:{color:"black"},value:"xyDistortion",children:"XY"}),e.jsx("option",{style:{color:"black"},value:"LongRaceDistortion",children:"Long Race"})]})]})]})]})]})};function Dn({children:n,className:t="",onClick:i,mouseX:o,spring:l,distance:f,magnification:p,baseItemSize:g}){const d=r.useRef(null),x=Oe(0),y=st(o,v=>{if(!d.current)return 1/0;const b=d.current.getBoundingClientRect(),_=b.x+b.width/2;return Math.abs(v-_)}),A=st(y,[0,f],[p,g]),S=Qe(A,l);return e.jsx(Z.div,{ref:d,style:{width:S,height:S,minWidth:S,minHeight:S},onHoverStart:()=>x.set(1),onHoverEnd:()=>x.set(0),onClick:i,className:`dock-item ${t}`,"aria-haspopup":"true",children:r.Children.map(n,v=>r.cloneElement(v,{isHovered:x}))})}function Tn({children:n,className:t="",...i}){const{isHovered:o}=i,[l,f]=r.useState(!1);return r.useEffect(()=>{const p=o.on("change",g=>{f(g===1)});return()=>p()},[o]),e.jsx(we,{children:l&&e.jsx(Z.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:n})})}function zn({children:n,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:n})}function Nn({items:n,className:t="",spring:i={mass:.1,stiffness:300,damping:20},magnification:o=70,distance:l=200,panelHeight:f=68,dockHeight:p=256,baseItemSize:g=50}){const d=Oe(1/0),x=Oe(0),y=r.useMemo(()=>Math.max(p,o+o/2+4),[o,p]),A=st(x,[0,1],[f,y]),S=Qe(A,i);return e.jsx(Z.div,{style:{height:S,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(Z.div,{onMouseMove:({pageX:v})=>{x.set(1),d.set(v)},onMouseLeave:()=>{x.set(0),d.set(1/0)},className:`dock-panel ${t}`,style:{height:f},role:"toolbar","aria-label":"Application dock",children:n.map((v,b)=>e.jsxs(Dn,{onClick:v.onClick,className:v.className,mouseX:d,spring:i,distance:l,magnification:o,baseItemSize:g,children:[e.jsx(zn,{children:v.icon}),e.jsx(Tn,{children:v.label})]},b))})})}const zt=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,Nt=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,Ut=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,Ot=""+new URL("duck-BnqypGlP.png",import.meta.url).href,Wt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpAgoQDSR9aWoCAAANHklEQVRo3u1YaXRVRbb+qk6dc+6cm4kwBTMSBkNAMYBEaBEEERGxsRFFRe3GJ9j4wJa37AZppN/CtZ6rl3NAeTTggIDIEIiCCKJMYQqEOSEJZCIkN/cmufM5p+r9SCBEE7BZLN6ffGvd86NuDfur/e3auwroQAc60IEOdODmQa735yuTngAA+AI+QJYRDAQw84W/QYGCgZMG/X/b3gqsrcY3Z74MSZFRfbECEpHMhJBuRFFLtcoy/dOVi3/TxPNeeglvZWfjhbFjYOg6KFNwYt8ujHnqRSz84L1bToS21ajrYehaiAgibI2N9QPCXu/HxOcbpppt0xiTHbIsX3fSpe/9E//IzsbItGQQQmNAyABCpbjYhCSs+2wJXlm16pYTaVNarz//LAhB54qS0iWESHmqrG7hxIgO+P3TzE7nHAJSvWzj5lZj/vO551B8PB8RsZ0Q8vvAdQ2qzZEgAr5lDLhbp3Qvi4h8OuCqqaMCoBKDbLXBHBEJLRjEqCmTMXny5JsmIrXVmDVgAAShRmO9x60oar0h0SP22JgSSPLmb/LyPXKnOFwoPAcA2LlzAfRyIBDwQ4RDoFaH2QgH0wmho7kWnGVjdGy02WzSdP2OgN+vAoiVJJYMSrsSJvMZGzfU7/nXMpw9dAAzZs9BTm7urfPI3Oenwe2qhaaFY0Je7zKqmL4XQu8VER3zP4LzEp1I+GTtOgDA8w8/BE3T8NJ32/Fu1pDhVPBXFUnKMlEazSghFlmGQiWEOYc3HAYXgjf/whpIpUHIp6rd/qGuaV6z3Y6lX2+4dR75+Wg+1icnQwiiUcryHM7IkwIiTGV2GkBw6br1+NusGQgVlSA+NQWDR/+efPHajGcVwZdEm0wDI02qxSrLxMQYJNK0VxIhMDMGi8yIVWbUqsiymdEoXddH+EMhj+fM6b1RCclIjOqM6dOmIvfHH/8tIm0GO2n5aiAo1LXwxaDf9zUB3BACubm5KDt5GnckJ+DktxuR+9myHsww/hpjNsfZFPmq8dcTAgGBKjHYZYXysJF1sCpSXrZmLbjuw4E9PyPnu1y8/MTvsWrJkpuX1rXYtWsXwDmWLJyPbglJqDh/HvWuy3DGdI0J+L33M0UaEZ8YF+O55B7tJJJdZayNiQkEBAQA0fzRhYGQZsDPDQwc1e8gIeSnHTkHma7RtZDVozTk9imOSKQM6o+a4nIsWXd9yd2QyOvPTcO+b3PQPSUNIW8duGTtSqmY6HRanu7dv/uAvncnKql3dseBnaewJ/cYuFdvcnPzzEIAAgCHACQCiVFQJsFsVRGXEIU7ByYi68F0eOsD2PvDKRzdW+gpL6095GvQNgkmb/DVVJRFxifC0DQk3dkfi7M//PeInFyzBos+zoYsK2isqQZTLJ2FCE+J6mSdmj4wMePeB3qT3hkJMNtUQAhoIR2lRdUoOl2BBo8PWkiHpulQVBlWqwKrwwq7wwK70wKTWYbDaUFEpBWKSW52U5M5njovis9UYc+Okyg4WFLgdvnfFbL1C8JDAUMLIz1rKBb+873fRmTNmjXYlP0xhAAs0QnUdeHUKEcEm5c5rNfQEeP7IymtK2RFghC8abuvTEYpQAggSIsrCAAiWq/ULC8hxK8NIgSgBFrQwNmCcmxZuz98ZG/RJ2GDvUmJcAkhMOah0Zi+YOH1iSxYsAAle/aCcwOK2SZ7Llf+OSEl5o0JU4dGDRrWC7KJQXB+I0XeEhCJot7lx+pPfsDOrSdW6jC/yojhlhhB2rDf4c2///1q318dv8kmFUIAztgkqba8cHbfu7q/Nf31cfZ+mcmgFNfI4DZACJgsMtLS41Fb5c4oL6pyqFbHTgpo3upLOFpYdLVrq+N3zpQpYLKC5du+Q2XxsT+m9uk8f9qs0aaEtDgIbtw+Atdy4QL2CDOenjESd2clvRhodP0p/+cdYKoZf/2PP17t18oj+qWLYBLF+n+tHNW5q+2DF+aMdabe2e22Sal9NoDFZkKPxFjpzPEL/SUl8ojP4yo9c/QELjTUtyby2tRnoKgquGAxZgv96MmX7u99z3092wzI2wlCCAilEJzDGW2DJDHbmfyLXQhzbIrqHB16ZfZsbN66tUVa46fPREPNJcDQJ/YflDR0yIg+rU4kIQBu3F7PEAJUXnDh8J6zMAwDEMCQEb2R0qfz0KDXPTDsbcSeLVsBNMfIinfewdJ5c6Ha45yOSHXq78ZkUJNFac7FACEUBXkl+OrTHxAO6reRCcXp4xexfvlu+LwhAIDVbkJaejcrlZAVDrrgjIpuIbJ//wnoQT94ODAgsWdc/7R+3YHmuCAgCPjCyFm9H9UV9SD0hsXALYRAap9u8DUGUVZU2+QiAnRP6ATVxPppak92uaa6hUh0JycMLQgQ0bdrjxibxaq2nLIUuFBUhbLSagwfkwHF3P7t8IqeyS+KRvKrIpKASPTGmyIEomLtsNhNqCxzNSdbICrGAbNZjjUCLtUIh1qIOCIcMIQBAZgpbcqs16yJC0WXYLObkJjWFeCivTVR7/bjXEEZaqsbQJpzraEbcNd5YehXPAwE/WEcP1CMi0U10MLtS1UAYIxCVhj83iCuBK1hGBACukwkzghtITLp+T9AVq2QJHb8/OlKf3WFG4QQcC7ANY46lw+d46NhjzC3W1bUu3344B/r8fbc1TiyrxCgBIQS1F6ux0eLv0FpUU1TCUMJ3LUN+OyDbVj8ly9wLK+4Xc8QEGiagWAgBCpdbUT5hRr4A6Giex5cGrDarACaX1FOHTkBppohqWx34emq7A8XbZjeIynOGgpqRs/0Hvk1VY0OpkiptJ0FhRCw2FSMGj8QdAJFz/TmGCMEFqsZWQ9kQDHTq/VVp26RmDFvAqorPUju1bX9aoE0eTng0xCfGAcQCq/Hh0M/nfMH/UbOsV3PoqS46KqnAQCTs4aCcw5Iktnw+e/lXNxhCOFVrfbdENqr996fMveV+Y9DkgTayyxNRSMA3rogJJRA/EKShJImzXPRbq4ilGLbN4eQ8+U+vPjaONgcJuzIOYqdWwtWhgLKdNVEgsl9emFRdnbLu1ZS5l0o2p8HSmmAKNIOYXAwAkgkDF0XBVUXXUZDvV+KjLa02kFCaUulCwFw/Mowwa+TVCkBaWMMIQSNHj9+3nYCIb+Wt/zdrZqvMax66nxbOWdLiPAF9ZCERdnZrT1yBT/+uAXx/VJxftcJjJzwGJ4akQVuoIsEPeeRKYPvemzqfVDUJsGGwzpOHC5F/r5CcA6k35OAtPQeiIi0AWg7eRJKwHWBy1X1KDlbARCClD7dEBvnhGgeQyhBKKjj6//djS1fHTjFVOuUujpfMRGExdiOu71GBoxwEN1TeuG9r1a3TeSXWLrmc+QsWAg1ImKiKtPsEeP7x46fci8sVhPWr/wJe7YfR3xSHBrcXngbgrDYVDw4cRCGP5QOSSJouZQ07XLhqUp8v/EwzhWUwVvvh9mqQjXLeOyZ4RgyohcIpXDXeLFtw0Fs/mJfaSjIpxGD7DJH26GHDciKBYahIXPIYPx50aJrw+n6ePGxcTACITz5xByyfPlb44QenndHSuyAyFgHKymswtSXRyJzeC+Egwbqahux9/sT2Jl7FI8/MwwjJwwEhAGDN53oBYdLseLdbYiOc2DoyL7olhADm92C7ZsOI2/nKYx+PBOhQBgHfzqLsuKac4aB1/2NtRtjuqeCKRSfbv62XTtvSMTj8WD2E5MgMYaqsgo4IuyxoUBwrGEYszIGJw54450noaisaSpCwA2OVe9/j/27TiL97iRQSuDzhUBAUFJYhYTULpg+92HYnKbmuCLwe0N4+7UvcSq/zEWA81yIrYyxz90nTxV1yhwECoqVO7Zf1052IyJOpxMAMPPRR3DfsCwcO5ZfQyWxgkOqr6ttXH2p3KP2SI1riV1KYbGpqK32Vv+Qc2wDF1wjoCAgEpHExDGPD4qzRVqBK/cbCmhhDWHNABfkbZPZ8nHN4d3eqH6Z6HrfMBih4A1JAO080LWFvLPnsD0vD7lr18MwDDAmlzfWe7ufP1OR4brUSKrL61BefBm7vyvAzi35gXAI/70u7+AbPRQtl2s8N33suG/dZWVJ9e6GgQ6HBQBBXY0XpeeqsXX1fhQcKt1PmfImwGsjklJBJAmZQwdj8fIVv8m+m6oAJw3OBAHAJDkyEAo8QiDuYYx2IQRm3eCVIPIW1WLOpYSEYrt0AQFFeWkhCJW66EFtltUqP2yxqVGccy3gD9f5/dohMPa+4fMXVBwrwMGbsOmmiPzlqadxoegMKJNhhEPQ/ZcgpHhGCKd2S5Lm4+eFrJrAuYG+DzyIxvJyFB8/BKaYYIvvSzyFx2OFoUUIKumcknopMsZDGl38630H8dyj47Bi05bbQwRoSmCznpqMzEfHYfsnyxHw+iCEgKLImPlf87Fq6Uf4aOPGq/3nz5qF03n7wWQZXNOaYoRS6BRgTEGD24WU9P54//Mvb9akDnSgAx3owO3H/wGUgcIFOUeM9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMi0xMFQxNjoxMzozMCswMDowMC3bAQsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDItMTBUMTY6MTM6MzArMDA6MDBchrm3AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAyLTEwVDE2OjEzOjM2KzAwOjAwaEOtUgAAAABJRU5ErkJggg==",qt=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,Un={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico atemporal.",price:"Gratis",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"galaxy",name:"Galaxy",description:"Un viaje a las estrellas.",price:"Gratis",previewColor:"#000"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:"Gratis",previewColor:"#ff99cc"},{id:"ballpit",name:"Ball Pit",description:"Física interactiva y relajante.",price:"Gratis",previewColor:"#29b1ff"},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:"Gratis",previewColor:"#bd71ff"},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:"Gratis",previewColor:"#00ffff"},{id:"pixelsnow",name:"Pixel Snow",description:"Nevada suave y distante.",price:"Gratis",previewColor:"#ffffff"},{id:"hyperspeed",name:"Hyperspeed",description:"Velocidad luz y distorsión.",price:"Gratis",previewColor:"#d856bf"}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:"Gratis",previewColor:"transparent",icon:e.jsx(_t,{})}],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:"Gratis",previewColor:"transparent",icon:e.jsx(yi,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:"Gratis",previewColor:"#ffadad",icon:e.jsx("img",{src:zt,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:"Gratis",previewColor:"#a89c8d",icon:e.jsx("img",{src:Nt,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:"Gratis",previewColor:"#ffecb6",icon:e.jsx("img",{src:Ut,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:"Gratis",previewColor:"#ebe371",icon:e.jsx("img",{src:Ot,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:"Gratis",previewColor:"#e3e4b2",icon:e.jsx("img",{src:Wt,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:"Gratis",previewColor:"#a3a3a3",icon:e.jsx("img",{src:qt,alt:"Skeleton",style:{width:"40px"}})}]},On=[{id:"backgrounds",label:"Fondos",icon:e.jsx(vi,{})},{id:"cursors",label:"Cursores",icon:e.jsx(_t,{})},{id:"trails",label:"Mascotas",icon:e.jsx(xi,{})}],Wn=()=>{const{activeShop:n,openShop:t,closeShop:i,activeBackground:o,setBackground:l,activeCursor:f,setCursor:p,activeTrail:g,setTrail:d}=Te(),[x,y]=r.useState(n);r.useEffect(()=>{n&&y(n)},[n]);const A=Un[x]||[],S=b=>{n==="backgrounds"&&l(b),n==="cursors"&&p(b),n==="trails"&&d(b)},v=b=>n==="backgrounds"?o===b:n==="cursors"?f===b:n==="trails"?g===b:!1;return e.jsx(we,{children:n&&e.jsxs(Z.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:i,style:{position:"absolute",inset:0}}),e.jsxs(Z.div,{className:"shop-window",initial:{scale:.9,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.95,y:10,opacity:0,transition:{duration:.2}},children:[e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:On.map(b=>e.jsxs("button",{onClick:()=>t(b.id),className:`tab-btn ${n===b.id?"active":""}`,children:[b.icon,e.jsx("span",{children:b.label}),n===b.id&&e.jsx(Z.div,{layoutId:"activeTab",className:"active-line"})]},b.id))}),e.jsx("button",{onClick:i,className:"close-btn",children:e.jsx(It,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",x==="backgrounds"?"Fondos":x==="cursors"?"Cursores":"Mascotas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(we,{mode:"wait",children:e.jsx(Z.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:A.map(b=>e.jsxs("div",{className:`shop-item ${v(b.id)?"equipped":""}`,onClick:()=>S(b.id),children:[e.jsxs("div",{className:"item-preview",style:{background:b.previewColor},children:[b.icon&&e.jsx("div",{className:"preview-icon",children:b.icon}),v(b.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(Mt,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:b.name}),e.jsx("p",{children:b.description}),e.jsx("span",{className:"price-tag",children:b.price})]})]},b.id))},x)})})]})]})})},qn=()=>{const{activeTrail:n}=Te(),t=Oe(-100),i=Oe(-100),o={damping:25,stiffness:70,mass:1},l=Qe(t,o),f=Qe(i,o);r.useEffect(()=>{const g=d=>{t.set(d.clientX),i.set(d.clientY)};return window.addEventListener("mousemove",g),()=>window.removeEventListener("mousemove",g)},[t,i]);const p={"apple-cat":zt,"jump-cat":Nt,"rolling-cat":Ut,duck:Ot,pompom:Wt,"skeleton-run":qt,ghost:null};return!n||n==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:p[n]?e.jsx(Z.img,{src:p[n],alt:"trail",style:{x:l,y:f,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):n==="ghost"?e.jsx(Z.div,{style:{x:l,y:f,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},Lt=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],Bn=({progress:n})=>{const[t,i]=r.useState(0);return r.useEffect(()=>{const o=setInterval(()=>{i(l=>(l+1)%Lt.length)},1500);return()=>clearInterval(o)},[]),e.jsxs(Z.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[n,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(Z.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${n}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(Z.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:Lt[t]},t)})]})]})},Gn=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,Hn=Object.freeze(Object.defineProperty({__proto__:null,default:Gn},Symbol.toStringTag,{value:"Module"})),Yn=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,Xn=Object.freeze(Object.defineProperty({__proto__:null,default:Yn},Symbol.toStringTag,{value:"Module"})),Vn=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,Jn=Object.freeze(Object.defineProperty({__proto__:null,default:Vn},Symbol.toStringTag,{value:"Module"})),Qn=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,Kn=Object.freeze(Object.defineProperty({__proto__:null,default:Qn},Symbol.toStringTag,{value:"Module"})),Zn=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,$n=Object.freeze(Object.defineProperty({__proto__:null,default:Zn},Symbol.toStringTag,{value:"Module"})),eo=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,to=Object.freeze(Object.defineProperty({__proto__:null,default:eo},Symbol.toStringTag,{value:"Module"})),io=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,no=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"})),oo=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,so=Object.freeze(Object.defineProperty({__proto__:null,default:oo},Symbol.toStringTag,{value:"Module"})),ao=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,ro=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),kt=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":Hn,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":Xn,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":Jn,"../../assets/songs/La cena - Las Petunias.mp3":Kn,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":$n,"../../assets/songs/Tek It - Cafuné.mp3":to,"../../assets/songs/You and I - d4vd .mp3":no,"../../assets/songs/gourmet - rickyedit.mp3":so,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":ro}),Ne=Object.keys(kt).map(n=>({title:n.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase()),artist:"Only U Playlist",src:kt[n].default}));Ne.length===0&&Ne.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const lo=.1,co=({visible:n,onClose:t})=>{const i=r.useRef(null),o=r.useRef(null),[l,f]=r.useState(!1),[p,g]=r.useState(0),[d,x]=r.useState(.05),[y,A]=r.useState(!1),[S,v]=r.useState(!1),[b,_]=r.useState(!1),[E,L]=r.useState(0),[G,ie]=r.useState(0),N=Ne[p];r.useEffect(()=>{i.current&&(i.current.volume=y?0:Math.pow(d,2)*lo)},[d,y]),r.useEffect(()=>{l&&i.current&&i.current.play().catch(R=>console.log("Autoplay blocked",R))},[p]),r.useEffect(()=>{n||(v(!1),_(!1))},[n]),r.useEffect(()=>{const R=I=>{n&&(o.current&&o.current.contains(I.target)||I.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[n,t]);const Y=()=>{i.current&&(L(i.current.currentTime),ie(i.current.duration||0))},P=R=>{const I=parseFloat(R.target.value);L(I),i.current&&(i.current.currentTime=I)},H=()=>{l?i.current.pause():i.current.play(),f(!l)},U=()=>{g(R=>(R+1)%Ne.length)},j=R=>{g(R),f(!0),_(!1)},W=R=>{if(!R||isNaN(R))return"0:00";const I=Math.floor(R/60),B=Math.floor(R%60);return`${I}:${B<10?"0":""}${B}`};return e.jsxs(Z.div,{ref:o,className:"music-player-container",initial:"hidden",animate:n?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:i,src:N.src,onEnded:U,onTimeUpdate:Y,onLoadedMetadata:Y,preload:"auto"}),e.jsx(we,{children:b&&e.jsx(Z.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:Ne.map((R,I)=>e.jsxs("div",{className:`playlist-item ${I===p?"active":""}`,onClick:()=>j(I),children:[I+1,". ",R.title]},I))})}),e.jsx("div",{className:"compact-info",onClick:()=>_(!b),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:N.title}),e.jsx(bi,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:H,children:l?e.jsx(wi,{size:16}):e.jsx(Ci,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:G,value:E,onChange:P,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[W(E)," / ",W(G)]})]}),e.jsx("button",{className:"icon-btn",onClick:U,children:e.jsx(Si,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${S?"active":""}`,onClick:()=>v(!S),children:y||d===0?e.jsx(ji,{size:18}):e.jsx(Pi,{size:18})}),e.jsx(we,{children:S&&e.jsx(Z.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:y?0:d,onChange:R=>x(parseFloat(R.target.value))})})})]})]})]})},uo=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"}],fo=[{label:"GitHub",link:"https://github.com"},{label:"Instagram",link:"https://instagram.com"}];function ho(){const{isUnlocked:n,openShop:t,closeShop:i,lockGame:o,activeBackground:l}=Te(),[f,p]=r.useState(!0),[g,d]=r.useState(!1),[x,y]=r.useState(!1),[A,S]=r.useState(!1),[v,b]=r.useState(!1),[_,E]=r.useState(null),[L,G]=r.useState(null),[ie,N]=r.useState(null),[Y,P]=r.useState(null),[H,U]=r.useState(null),[j,W]=r.useState(null),[R,I]=r.useState(null),[B,w]=r.useState(null),s=q=>{q&&t(q)},c=()=>{x?(y(!1),A&&p(!0)):(b(!1),i(),S(f),p(!1),y(!0))},h=[{icon:e.jsx(Ai,{size:22}),label:"Texto",onClick:()=>p(!f)},{icon:e.jsx(Ri,{size:22}),label:"Música",onClick:()=>d(!g)},{icon:e.jsx(Li,{size:22}),label:"Juego",onClick:()=>console.log("Toggle Game")},{icon:e.jsx(ki,{size:22}),label:"Fondo",onClick:c},{icon:e.jsx(Fi,{size:22}),label:"Bloquear",onClick:()=>{o&&(i(),d(!1),E(null),G(null),N(null),P(null),U(null),W(null),I(null),w(null),o())}}],[u,C]=r.useState(!0),[M,D]=r.useState(0);return r.useEffect(()=>{const q=setInterval(()=>{D(k=>{const K=k+Math.floor(Math.random()*15)+5;return K>=100?(clearInterval(q),setTimeout(()=>C(!1),200),100):K})},200);return()=>clearInterval(q)},[]),e.jsxs("main",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[e.jsx(we,{mode:"wait",children:u&&e.jsx(Bn,{progress:M},"loader")}),e.jsx(we,{children:!n&&e.jsx(Z.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(Ui,{})},"lock-screen")}),e.jsx(we,{children:n&&e.jsxs(Z.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(In,{floatingLinesConfig:_,lightPillarsConfig:L,ballpitConfig:ie,silkConfig:Y,galaxyConfig:H,gradientConfig:j,pixelSnowConfig:R,hyperspeedConfig:B}),e.jsx(Mn,{isOpen:v,onToggle:q=>{b(q),q&&y(!1)},items:uo,socialItems:fo,isFixed:!0,position:"right",onItemClick:s,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(Wn,{}),e.jsx(qn,{}),e.jsx(we,{children:f&&e.jsx(Z.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(an,{})})}),e.jsx(we,{children:x&&["floatinglines","lightpillars","ballpit","silk","galaxy","gradient","pixelsnow","hyperspeed"].includes(l)&&e.jsx(Z.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(En,{onClose:c,floatingLinesConfig:_,setFloatingLinesConfig:E,lightPillarsConfig:L,setLightPillarsConfig:G,ballpitConfig:ie,setBallpitConfig:N,silkConfig:Y,setSilkConfig:P,galaxyConfig:H,setGalaxyConfig:U,gradientConfig:j,setGradientConfig:W,pixelSnowConfig:R,setPixelSnowConfig:I,hyperspeedConfig:B,setHyperspeedConfig:w})})})}),e.jsx(co,{visible:g,onClose:()=>d(!1)}),e.jsx(Nn,{items:h,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}Ii.createRoot(document.getElementById("root")).render(e.jsx(r.StrictMode,{children:e.jsx(ho,{})}));
