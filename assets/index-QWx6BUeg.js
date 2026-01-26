import{c as bt,j as e,r as a,u as wt,C as Me,a as Ct,F as jt,R as _e,O as St,A as Rt,b as At,P as Lt,V as Y,d as nt,e as _t,S as qe,W as He,f as Mt,M as Be,g as pe,I as Pt,h as It,i as kt,k as Et,l as Nt,m as Ft,n as zt,o as Tt,p as ot,q as st,s as at,t as rt,v as I,w as Dt,x as lt,y as ct,z as Ot,B as ut,D as Ut,E as Bt,G as Gt,H as qt,J as Ht,K as Yt,L as Wt,N as Vt,Q as Jt,T as Xt,U as Qt,X as Kt,Y as Zt,Z as $t}from"./vendor-CWohnw__.js";import{A as re,m as k,u as we,a as Ge,b as Pe}from"./framer-motion-CQoqgKBs.js";import{R as ei,T as ti,P as ii,C as Ye,M as ni}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();const xe=bt(n=>({isUnlocked:!1,unlockApp:()=>n({isUnlocked:!0}),lockGame:()=>n({isUnlocked:!1}),activeShop:null,openShop:t=>n({activeShop:t}),closeShop:()=>n({activeShop:null}),activeBackground:"gradient",setBackground:t=>n({activeBackground:t}),activeCursor:"default",setCursor:t=>n({activeCursor:t}),activeTrail:"none",setTrail:t=>n({activeTrail:t})})),oi=({text:n,disabled:t=!1,speed:i=3,className:o="",color:s="#7c7c7c",shineColor:l="#ffffff",direction:d="right"})=>e.jsx("div",{className:`shiny-text ${d} ${t?"disabled":""} ${o}`,style:{"--shiny-speed":`${i}s`,"--base-color":s,"--shine-color":l},children:n}),si=n=>(n=n.replace("#",""),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]),ai=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,ri=`
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
`,dt=a.forwardRef(function({uniforms:t},i){return wt((o,s)=>{i.current.material.uniforms.uTime.value+=.1*s}),e.jsxs("mesh",{ref:i,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:ai,fragmentShader:ri})]})});dt.displayName="SilkPlane";const ft=({speed:n=1,scale:t=2,color:i="#ff99cc",noiseIntensity:o=.5,rotation:s=0})=>{const l=a.useRef(),d=a.useMemo(()=>({uSpeed:{value:n},uScale:{value:t},uNoiseIntensity:{value:o},uColor:{value:new Me(...si(i))},uRotation:{value:s},uTime:{value:0}}),[n,t,o,i,s]);return a.useEffect(()=>{const c=setInterval(()=>window.dispatchEvent(new Event("resize")),50),f=setTimeout(()=>clearInterval(c),1200);return()=>{clearInterval(c),clearTimeout(f)}},[]),e.jsx(Ct,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(dt,{ref:l,uniforms:d})})},li=()=>{const[n,t]=a.useState(""),[i,o]=a.useState(!1),s=xe(c=>c.unlockApp),l="230824",d=c=>{const f=c.target.value.replace(/\D/g,"");if(f.length>6)return;let m=f;f.length>2&&(m=f.slice(0,2)+"/"+f.slice(2)),f.length>4&&(m=m.slice(0,5)+"/"+f.slice(4)),t(m),o(!1)},p=c=>{c.preventDefault(),n.replace(/\//g,"")===l?s():(o(!0),setTimeout(()=>o(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(ft,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(oi,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:p,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:n,onChange:d,className:i?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(jt,{size:20})})]})]})]})},ci=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,ui=Object.freeze(Object.defineProperty({__proto__:null,default:ci},Symbol.toStringTag,{value:"Module"})),di=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,fi=Object.freeze(Object.defineProperty({__proto__:null,default:di},Symbol.toStringTag,{value:"Module"})),mi=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,pi=Object.freeze(Object.defineProperty({__proto__:null,default:mi},Symbol.toStringTag,{value:"Module"})),hi=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,gi=Object.freeze(Object.defineProperty({__proto__:null,default:hi},Symbol.toStringTag,{value:"Module"})),vi=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,xi=Object.freeze(Object.defineProperty({__proto__:null,default:vi},Symbol.toStringTag,{value:"Module"})),yi=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,bi=Object.freeze(Object.defineProperty({__proto__:null,default:yi},Symbol.toStringTag,{value:"Module"})),wi=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,Ci=Object.freeze(Object.defineProperty({__proto__:null,default:wi},Symbol.toStringTag,{value:"Module"})),ji=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,Si=Object.freeze(Object.defineProperty({__proto__:null,default:ji},Symbol.toStringTag,{value:"Module"})),Ri=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,Ai=Object.freeze(Object.defineProperty({__proto__:null,default:Ri},Symbol.toStringTag,{value:"Module"})),Li=Object.assign({"../../assets/img/photos/bridge.jpeg":ui,"../../assets/img/photos/first.jpg":fi,"../../assets/img/photos/graduated.jpeg":pi,"../../assets/img/photos/halloween.jpg":gi,"../../assets/img/photos/miestrella.jpg":xi,"../../assets/img/photos/murder.jpeg":bi,"../../assets/img/photos/rock.jpeg":Ci,"../../assets/img/photos/sleepy.jpg":Si,"../../assets/img/photos/sunshine.jpeg":Ai}),ze=Object.values(Li).map(n=>n.default),_i=()=>{const[n,t]=a.useState(null);let i=[...ze];if(i.length>0)for(;i.length<18;)i=[...i,...ze];const o=[...i,...i];return e.jsxs("div",{className:"main-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),ze.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:o.map((s,l)=>e.jsx("img",{src:s,alt:`Memory ${l}`,className:"gallery-item",onClick:()=>t(s)},l))})}),e.jsx(re,{children:n&&e.jsx(k.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(k.img,{src:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:s=>s.stopPropagation()})})})]})},Mi=()=>e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:"linear-gradient(to bottom, #b117f8, #2c0b2e)",animation:"spinGradient 20s linear infinite"}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),Pi=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,Ii=`
precision highp float;
uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
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
  vec2 mouseNorm = uMouse - vec2(0.5);
  
  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }
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
`,ki=({focal:n=[.5,.5],rotation:t=[1,0],starSpeed:i=0,density:o=1.5,hueShift:s=300,disableAnimation:l=!1,speed:d=.5,mouseInteraction:p=!0,glowIntensity:c=.5,saturation:f=.8,mouseRepulsion:m=!0,repulsionStrength:C=.5,twinkleIntensity:w=.5,rotationSpeed:h=.05,autoCenterRepulsion:u=0,transparent:y=!0,...P})=>{const E=a.useRef(null),b=a.useRef({x:.5,y:.5}),A=a.useRef({x:.5,y:.5}),O=a.useRef(0),r=a.useRef(0);return a.useEffect(()=>{if(!E.current)return;const x=E.current;x.innerHTML="";const N=new ei({alpha:y,premultipliedAlpha:!1,dpr:1}),v=N.gl;y?(v.enable(v.BLEND),v.blendFunc(v.SRC_ALPHA,v.ONE_MINUS_SRC_ALPHA),v.clearColor(0,0,0,0)):v.clearColor(0,0,0,1);let D;function z(){N.setSize(x.offsetWidth*1,x.offsetHeight*1),D&&(D.uniforms.uResolution.value=new Ye(v.canvas.width,v.canvas.height,v.canvas.width/v.canvas.height))}window.addEventListener("resize",z,!1),z();const _=new ti(v);D=new ii(v,{vertex:Pi,fragment:Ii,uniforms:{uTime:{value:0},uResolution:{value:new Ye(v.canvas.width,v.canvas.height,v.canvas.width/v.canvas.height)},uFocal:{value:new Float32Array(n)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:i},uDensity:{value:o},uHueShift:{value:s},uSpeed:{value:d},uMouse:{value:new Float32Array([.5,.5])},uGlowIntensity:{value:c},uSaturation:{value:f},uMouseRepulsion:{value:m},uTwinkleIntensity:{value:w},uRotationSpeed:{value:h},uRepulsionStrength:{value:C},uMouseActiveFactor:{value:0},uAutoCenterRepulsion:{value:u},uTransparent:{value:y}}});const T=new ni(v,{geometry:_,program:D});let j,U=0;const F=1e3/30;function W(X){if(j=requestAnimationFrame(W),!E.current)return;const $=X-U;if($<F)return;U=X-$%F,l||(D.uniforms.uTime.value=X*.001,D.uniforms.uStarSpeed.value=X*.001*i/10);const Q=.05;A.current.x+=(b.current.x-A.current.x)*Q,A.current.y+=(b.current.y-A.current.y)*Q,r.current+=(O.current-r.current)*Q,D.uniforms.uMouse.value[0]=A.current.x,D.uniforms.uMouse.value[1]=A.current.y,D.uniforms.uMouseActiveFactor.value=r.current,N.render({scene:T})}j=requestAnimationFrame(W),x.appendChild(v.canvas),v.canvas.style.width="100%",v.canvas.style.height="100%",v.canvas.style.display="block",v.canvas.style.willChange="transform";function J(X){const $=x.getBoundingClientRect(),Q=(X.clientX-$.left)/$.width,K=1-(X.clientY-$.top)/$.height;b.current={x:Q,y:K},O.current=1}function oe(){O.current=0}return p&&(x.addEventListener("mousemove",J),x.addEventListener("mouseleave",oe)),()=>{cancelAnimationFrame(j),window.removeEventListener("resize",z),p&&(x.removeEventListener("mousemove",J),x.removeEventListener("mouseleave",oe)),x&&v.canvas&&x.contains(v.canvas)&&x.removeChild(v.canvas),v.getExtension("WEBGL_lose_context")?.loseContext()}},[n,t,i,o,s,l,d,p,c,f,m,w,h,C,u,y]),e.jsx("div",{ref:E,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},...P})},Ei=_e.memo(ki);class Ni{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#i;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#j;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#o=!1;#n=!1;isDisposed=!1;#s;#a;#r;#l=new nt;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#h(),this.#g(),this.#v(),this.resize(),this.#x()}#h(){this.camera=new _t,this.cameraFov=this.camera.fov}#g(){this.scene=new qe}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new He(t),this.renderer.outputColorSpace=Mt}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#a=new ResizeObserver(this.#c.bind(this)),this.#a.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#a?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#o=t[0].isIntersecting,this.#o?this.#p():this.#u()}#f(){this.#o&&(document.hidden?this.#u():this.#p())}#c(){this.#r&&clearTimeout(this.#r),this.#r=setTimeout(this.resize.bind(this),100)}resize(){let t,i;this.#e.size instanceof Object?(t=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,i=window.innerHeight),this.size.width=t,this.size.height=i,this.size.ratio=t/i,this.#w(),this.#C(),this.onAfterResize(this.size)}#w(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#m(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#m(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#m(t){const i=Math.tan(Be.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*Be.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#C(){this.renderer.setSize(this.size.width,this.size.height),this.#i?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(t),this.size.pixelRatio=t}get postprocessing(){return this.#i}set postprocessing(t){this.#i=t,this.render=t.render.bind(t)}#p(){if(this.#n)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#n=!0,this.#l.start(),t()}#u(){this.#n&&(cancelAnimationFrame(this.#d),this.#n=!1,this.#l.stop())}#j(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(i=>{const o=t.material[i];o!==null&&typeof o=="object"&&typeof o.dispose=="function"&&o.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#i?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const ue=new Map,le=new pe;let Te=!1;function Fi(n){const t={position:new pe,nPosition:new pe,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...n};return(function(i,o){ue.has(i)||(ue.set(i,o),Te||(document.body.addEventListener("pointermove",We),document.body.addEventListener("pointerleave",Je),document.body.addEventListener("click",Ve),document.body.addEventListener("touchstart",Xe,{passive:!1}),document.body.addEventListener("touchmove",Qe,{passive:!1}),document.body.addEventListener("touchend",Se,{passive:!1}),document.body.addEventListener("touchcancel",Se,{passive:!1}),Te=!0))})(n.domElement,t),t.dispose=()=>{const i=n.domElement;ue.delete(i),ue.size===0&&(document.body.removeEventListener("pointermove",We),document.body.removeEventListener("pointerleave",Je),document.body.removeEventListener("click",Ve),document.body.removeEventListener("touchstart",Xe),document.body.removeEventListener("touchmove",Qe),document.body.removeEventListener("touchend",Se),document.body.removeEventListener("touchcancel",Se),Te=!1)},t}function We(n){le.x=n.clientX,le.y=n.clientY,zi()}function zi(){for(const[n,t]of ue){const i=n.getBoundingClientRect();ke(i)?(Ie(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function Ve(n){le.x=n.clientX,le.y=n.clientY;for(const[t,i]of ue){const o=t.getBoundingClientRect();Ie(i,o),ke(o)&&i.onClick(i)}}function Je(){for(const n of ue.values())n.hover&&(n.hover=!1,n.onLeave(n))}function Xe(n){if(n.touches.length>0){n.preventDefault(),le.x=n.touches[0].clientX,le.y=n.touches[0].clientY;for(const[t,i]of ue){const o=t.getBoundingClientRect();ke(o)&&(i.touching=!0,Ie(i,o),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function Qe(n){if(n.touches.length>0){n.preventDefault(),le.x=n.touches[0].clientX,le.y=n.touches[0].clientY;for(const[t,i]of ue){const o=t.getBoundingClientRect();Ie(i,o),ke(o)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function Se(){for(const[,n]of ue)n.touching&&(n.touching=!1,n.hover&&(n.hover=!1,n.onLeave(n)))}function Ie(n,t){const{position:i,nPosition:o}=n;i.x=le.x-t.left,i.y=le.y-t.top,o.x=i.x/t.width*2-1,o.y=-i.y/t.height*2+1}function ke(n){const{x:t,y:i}=le,{left:o,top:s,width:l,height:d}=n;return t>=o&&t<=o+l&&i>=s&&i<=s+d}const{randFloat:Ti,randFloatSpread:De}=Be,Oe=new Y,G=new Y,Re=new Y,Di=new Y,q=new Y,Ae=new Y,ge=new Y,me=new Y,Le=new Y,Ke=new Y;class Oi{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new Y,this.#e(),this.setSizes()}#e(){const{config:t,positionData:i}=this;this.center.toArray(i,0);for(let o=1;o<t.count;o++){const s=3*o;i[s]=De(2*t.maxX),i[s+1]=De(2*t.maxY),i[s+2]=De(2*t.maxZ)}}setSizes(){const{config:t,sizeData:i}=this;i[0]=t.size0;for(let o=1;o<t.count;o++)i[o]=Ti(t.minSize,t.maxSize)}update(t){const{config:i,center:o,positionData:s,sizeData:l,velocityData:d}=this;let p=0;i.controlSphere0&&(p=1,Oe.fromArray(s,0),Oe.lerp(o,.1).toArray(s,0),Di.set(0,0,0).toArray(d,0));for(let c=p;c<i.count;c++){const f=3*c;G.fromArray(s,f),q.fromArray(d,f),q.y-=t.delta*i.gravity*l[c],q.multiplyScalar(i.friction),q.clampLength(0,i.maxVelocity),G.add(q),G.toArray(s,f),q.toArray(d,f)}for(let c=p;c<i.count;c++){const f=3*c;G.fromArray(s,f),q.fromArray(d,f);const m=l[c];for(let w=c+1;w<i.count;w++){const h=3*w;Re.fromArray(s,h),Ae.fromArray(d,h);const u=l[w];ge.copy(Re).sub(G);const y=ge.length(),P=m+u;if(y<P){const E=P-y;me.copy(ge).normalize().multiplyScalar(.5*E),Le.copy(me).multiplyScalar(Math.max(q.length(),1)),Ke.copy(me).multiplyScalar(Math.max(Ae.length(),1)),G.sub(me),q.sub(Le),G.toArray(s,f),q.toArray(d,f),Re.add(me),Ae.add(Ke),Re.toArray(s,h),Ae.toArray(d,h)}}if(i.controlSphere0){ge.copy(Oe).sub(G);const w=ge.length(),h=m+l[0];if(w<h){const u=h-w;me.copy(ge.normalize()).multiplyScalar(u),Le.copy(me).multiplyScalar(Math.max(q.length(),2)),G.sub(me),q.sub(Le)}}Math.abs(G.x)+m>i.maxX&&(G.x=Math.sign(G.x)*(i.maxX-m),q.x=-q.x*i.wallBounce),i.gravity===0?Math.abs(G.y)+m>i.maxY&&(G.y=Math.sign(G.y)*(i.maxY-m),q.y=-q.y*i.wallBounce):G.y-m<-i.maxY&&(G.y=-i.maxY+m,q.y=-q.y*i.wallBounce);const C=Math.max(i.maxZ,i.maxSize);Math.abs(G.z)+m>C&&(G.z=Math.sign(G.z)*(i.maxZ-m),q.z=-q.z*i.wallBounce),G.toArray(s,f),q.toArray(d,f)}}}class Ui extends zt{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
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
      `);const o=Tt.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",o),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const Bi={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0},ve=new St;class Gi extends Pt{constructor(t,i={}){const o={...Bi,...i},s=new It,l=new kt(t,.04).fromScene(s).texture,d=new Et,p=new Ui({envMap:l,...o.materialParams});p.envMapRotation.x=-Math.PI/2,super(d,p,o.count),this.config=o,this.physics=new Oi(o),this.#e(),this.setColors(o.colors)}#e(){this.ambientLight=new Nt(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new Ft(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(o){let s,l;function d(p){s=p,l=[],s.forEach(c=>{l.push(new Me(c))})}return d(o),{setColors:d,getColorAt:function(p,c=new Me){const f=Math.max(0,Math.min(1,p))*(s.length-1),m=Math.floor(f),C=l[m];if(m>=s.length-1)return C.clone();const w=f-m,h=l[m+1];return c.r=C.r+w*(h.r-C.r),c.g=C.g+w*(h.g-C.g),c.b=C.b+w*(h.b-C.b),c}}})(t);for(let o=0;o<this.count;o++)this.setColorAt(o,i.getColorAt(o/this.count)),o===0&&this.light.color.copy(i.getColorAt(o/this.count));this.instanceColor.needsUpdate=!0}}update(t){this.physics.update(t);for(let i=0;i<this.count;i++)ve.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?ve.scale.setScalar(0):ve.scale.setScalar(this.physics.sizeData[i]),ve.updateMatrix(),this.setMatrixAt(i,ve.matrix),i===0&&this.light.position.copy(ve.position);this.instanceMatrix.needsUpdate=!0}}function qi(n,t={}){const i=new Ni({canvas:n,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let o;i.renderer.toneMapping=Rt,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),f(t);const s=new At,l=new Lt(new Y(0,0,1),0),d=new Y;let p=!1;n.style.touchAction="none",n.style.userSelect="none",n.style.webkitUserSelect="none";const c=Fi({domElement:n,onMove(){s.setFromCamera(c.nPosition,i.camera),i.camera.getWorldDirection(l.normal),s.ray.intersectPlane(l,d),o.physics.center.copy(d),o.config.controlSphere0=!0},onLeave(){o.config.controlSphere0=!1}});function f(m){o&&(i.clear(),i.scene.remove(o)),o=new Gi(i.renderer,m),i.scene.add(o)}return i.onBeforeRender=m=>{p||o.update(m)},i.onAfterResize=m=>{o.config.maxX=m.wWidth/2,o.config.maxY=m.wHeight/2},{three:i,get spheres(){return o},setCount(m){f({...o.config,count:m})},togglePause(){p=!p},dispose(){c.dispose(),i.dispose()}}}const Hi=({className:n="",followCursor:t=!0,...i})=>{const o=a.useRef(null),s=a.useRef(null);return a.useEffect(()=>{const l=o.current;if(l)return s.current=qi(l,{followCursor:t,...i}),()=>{s.current&&s.current.dispose()}},[]),e.jsx("canvas",{className:n,ref:o,style:{width:"100%",height:"100%"}})},Yi=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Wi=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

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
  float amp        = sin(offset + time * 0.2) * 0.3;
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
`,Ue=8;function Ze(n){let t=n.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,o=255,s=255;return t.length===3?(i=parseInt(t[0]+t[0],16),o=parseInt(t[1]+t[1],16),s=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),o=parseInt(t.slice(2,4),16),s=parseInt(t.slice(4,6),16)),new Y(i/255,o/255,s/255)}function Vi({linesGradient:n,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:o=[5],topWavePosition:s,middleWavePosition:l,bottomWavePosition:d={x:2,y:-.7,rotate:-1},animationSpeed:p=1,interactive:c=!1,bendRadius:f=5,bendStrength:m=-.5,mouseDamping:C=.05,mixBlendMode:w="screen"}){const h=a.useRef(null),u=a.useRef(null),y=a.useRef(null),P=a.useRef(new pe(-1e3,-1e3)),E=a.useRef(new pe(-1e3,-1e3)),b=a.useRef(0),A=a.useRef(0),O=a.useRef(c);a.useEffect(()=>{O.current=c},[c]);const r=j=>{if(typeof i=="number")return i;if(!t.includes(j))return 0;const U=t.indexOf(j);return i[U]??6},x=j=>{if(typeof o=="number")return o;if(!t.includes(j))return .1;const U=t.indexOf(j);return o[U]??.1},N=t.includes("top")?r("top"):0,v=t.includes("middle")?r("middle"):0,D=t.includes("bottom")?r("bottom"):0,z=t.includes("top")?x("top")*.01:.01,_=t.includes("middle")?x("middle")*.01:.01,T=t.includes("bottom")?x("bottom")*.01:.01;return a.useEffect(()=>{if(y.current&&n&&n.length>0){const j=n.slice(0,Ue);y.current.uniforms.lineGradientCount.value=j.length,j.forEach((U,M)=>{const F=Ze(U);y.current.uniforms.lineGradient.value[M].set(F.x,F.y,F.z)})}},[n]),a.useEffect(()=>{if(!y.current)return;const j=y.current.uniforms;j.animationSpeed.value=p,j.bendRadius.value=f,j.bendStrength.value=m,j.interactive.value=c,j.enableTop.value=t.includes("top"),j.enableMiddle.value=t.includes("middle"),j.enableBottom.value=t.includes("bottom");const U=F=>{if(typeof i=="number")return i;if(!t.includes(F))return 0;const W=t.indexOf(F);return i[W]??6},M=F=>{if(typeof o=="number")return o;if(!t.includes(F))return .1;const W=t.indexOf(F);return o[W]??.1};j.topLineCount.value=t.includes("top")?U("top"):0,j.middleLineCount.value=t.includes("middle")?U("middle"):0,j.bottomLineCount.value=t.includes("bottom")?U("bottom"):0,j.topLineDistance.value=t.includes("top")?M("top")*.01:.01,j.middleLineDistance.value=t.includes("middle")?M("middle")*.01:.01,j.bottomLineDistance.value=t.includes("bottom")?M("bottom")*.01:.01},[p,f,m,c,t,i,o]),a.useEffect(()=>{if(!h.current)return;const j=new qe,U=new ot(-1,1,1,-1,0,1);U.position.z=1;const M=new He({antialias:!0,alpha:!1});M.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),M.domElement.style.width="100%",M.domElement.style.height="100%",h.current.appendChild(M.domElement),u.current=M;const F={iTime:{value:0},iResolution:{value:new Y(1,1,1)},animationSpeed:{value:p},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:N},middleLineCount:{value:v},bottomLineCount:{value:D},topLineDistance:{value:z},middleLineDistance:{value:_},bottomLineDistance:{value:T},topWavePosition:{value:new Y(s?.x??10,s?.y??.5,s?.rotate??-.4)},middleWavePosition:{value:new Y(l?.x??5,l?.y??0,l?.rotate??.2)},bottomWavePosition:{value:new Y(d?.x??2,d?.y??-.7,d?.rotate??.4)},iMouse:{value:new pe(-1e3,-1e3)},interactive:{value:c},bendRadius:{value:f},bendStrength:{value:m},bendInfluence:{value:0},lineGradient:{value:Array.from({length:Ue},()=>new Y(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const te=n.slice(0,Ue);F.lineGradientCount.value=te.length,te.forEach((ie,Z)=>{const V=Ze(ie);F.lineGradient.value[Z].set(V.x,V.y,V.z)})}const W=new st({uniforms:F,vertexShader:Yi,fragmentShader:Wi});y.current=W;const J=new at(2,2),oe=new rt(J,W);j.add(oe);const X=new nt,$=()=>{const te=h.current,ie=te.clientWidth||1,Z=te.clientHeight||1;M.setSize(ie,Z,!1);const V=M.domElement.width,ne=M.domElement.height;F.iResolution.value.set(V,ne,1)};$();const Q=typeof ResizeObserver<"u"?new ResizeObserver($):null;Q&&h.current&&Q.observe(h.current);const K=te=>{if(!O.current)return;const ie=M.domElement.getBoundingClientRect(),Z=te.clientX-ie.left,V=te.clientY-ie.top,ne=M.getPixelRatio();P.current.set(Z*ne,(ie.height-V)*ne),b.current=1};window.addEventListener("pointermove",K);let ce=0;const fe=()=>{F.iTime.value=X.getElapsedTime(),O.current&&(E.current.lerp(P.current,C),F.iMouse.value.copy(E.current),A.current+=(b.current-A.current)*C,F.bendInfluence.value=A.current),M.render(j,U),ce=requestAnimationFrame(fe)};return fe(),()=>{cancelAnimationFrame(ce),Q&&h.current&&Q.disconnect(),window.removeEventListener("pointermove",K),J.dispose(),W.dispose(),M.dispose(),M.domElement.parentElement&&M.domElement.parentElement.removeChild(M.domElement)}},[]),e.jsx("div",{ref:h,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:w}})}const Ji=({topColor:n="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:o=.3,interactive:s=!1,className:l="",glowAmount:d=.005,pillarWidth:p=3,pillarHeight:c=.4,noiseIntensity:f=.5,mixBlendMode:m="screen",pillarRotation:C=0,quality:w="high"})=>{const h=a.useRef(null),u=a.useRef(null),y=a.useRef(null),P=a.useRef(null),E=a.useRef(null),b=a.useRef(null),A=a.useRef(null),O=a.useRef(new pe(0,0)),r=a.useRef(0),[x,N]=a.useState(!0);return a.useEffect(()=>{const v=document.createElement("canvas");v.getContext("webgl")||v.getContext("experimental-webgl")||N(!1)},[]),a.useEffect(()=>{if(!h.current||!x)return;const v=h.current,D=v.clientWidth,z=v.clientHeight,_=new qe;E.current=_;const T=new ot(-1,1,1,-1,0,1);b.current=T;const j=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),U=j||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let M=w;U&&w==="high"&&(M="medium"),j&&w!=="low"&&(M="low");const F={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},W=F[M]||F.medium;let J;try{J=new He({antialias:!1,alpha:!0,powerPreference:M==="high"?"high-performance":"low-power",precision:W.precision,stencil:!1,depth:!1})}catch{N(!1);return}J.setSize(D,z),J.setPixelRatio(W.pixelRatio),h.current.appendChild(J.domElement),y.current=J;const oe=R=>{const L=new Me(R);return new Y(L.r,L.g,L.b)},X=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,$=`
      precision ${W.precision} float;

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

      const float STEP_MULT = ${W.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${W.iterations};
      const int WAVE_ITER = ${W.waveIterations};

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
    `,Q=C*Math.PI/180,K=Math.sin(.4),ce=Math.cos(.4),fe=new st({vertexShader:X,fragmentShader:$,uniforms:{uTime:{value:0},uResolution:{value:new pe(D,z)},uMouse:{value:O.current},uTopColor:{value:oe(n)},uBottomColor:{value:oe(t)},uIntensity:{value:i},uInteractive:{value:s},uGlowAmount:{value:d},uPillarWidth:{value:p},uPillarHeight:{value:c},uNoiseIntensity:{value:f},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(Q)},uPillarRotSin:{value:Math.sin(Q)},uWaveSin:{value:K},uWaveCos:{value:ce}},transparent:!0,depthWrite:!1,depthTest:!1});P.current=fe;const te=new at(2,2);A.current=te;const ie=new rt(te,fe);_.add(ie);let Z=null;const V=R=>{if(!s||Z)return;Z=window.setTimeout(()=>{Z=null},16);const L=v.getBoundingClientRect(),B=(R.clientX-L.left)/L.width*2-1,H=-((R.clientY-L.top)/L.height)*2+1;O.current.set(B,H)};s&&v.addEventListener("mousemove",V,{passive:!0});let ne=performance.now();const Ce=1e3/(M==="low"?30:60),ye=R=>{if(!P.current||!y.current||!E.current||!b.current)return;const L=R-ne;if(L>=Ce){r.current+=.016*o;const B=r.current;P.current.uniforms.uTime.value=B,P.current.uniforms.uRotCos.value=Math.cos(B*.3),P.current.uniforms.uRotSin.value=Math.sin(B*.3),y.current.render(E.current,b.current),ne=R-L%Ce}u.current=requestAnimationFrame(ye)};u.current=requestAnimationFrame(ye);let g=null;const S=()=>{g&&clearTimeout(g),g=window.setTimeout(()=>{if(!y.current||!P.current||!h.current)return;const R=h.current.clientWidth,L=h.current.clientHeight;y.current.setSize(R,L),P.current.uniforms.uResolution.value.set(R,L)},150)};return window.addEventListener("resize",S,{passive:!0}),()=>{window.removeEventListener("resize",S),s&&v.removeEventListener("mousemove",V),u.current&&cancelAnimationFrame(u.current),y.current&&(y.current.dispose(),y.current.forceContextLoss(),v.contains(y.current.domElement)&&v.removeChild(y.current.domElement)),P.current&&P.current.dispose(),A.current&&A.current.dispose(),y.current=null,P.current=null,E.current=null,b.current=null,A.current=null,u.current=null}},[n,t,i,o,s,d,p,c,f,C,x,w]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),x?e.jsx("div",{ref:h,className:`light-pillar-container ${l}`,style:{mixBlendMode:m}}):e.jsx("div",{className:`light-pillar-fallback ${l}`,style:{mixBlendMode:m},children:"WebGL not supported"})]})},Xi=({floatingLinesConfig:n,lightPillarsConfig:t})=>{const{activeBackground:i,floatingLinesConfig:o,lightPillarsConfig:s}=xe(),l=n||o,d=t||s,p=l||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1},c=d||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(re,{mode:"wait",children:[i==="gradient"&&e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(Mi,{})},"gradient"),i==="galaxy"&&e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(Ei,{mouseRepulsion:!1,mouseInteraction:!1,density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5})},"galaxy"),i==="silk"&&e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(ft,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0})},"silk"),i==="ballpit"&&e.jsxs(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:[" ",e.jsx(Hi,{count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,colors:["#f700ff","#bd71ff","#29b1ff"]})]},"ballpit"),i==="floatinglines"&&e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Vi,{linesGradient:p.colors,lineCount:p.count,lineDistance:p.distance,animationSpeed:.5,bendRadius:p.bendRadius,bendStrength:p.bendStrength,enabledWaves:p.enabledWaves,interactive:p.interactive??!1,parallax:p.parallax??!1})},"floatinglines"),i==="lightpillars"&&e.jsx(k.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Ji,{topColor:c.topColor,bottomColor:c.bottomColor,intensity:c.intensity,rotationSpeed:c.rotationSpeed,glowAmount:c.glowAmount??.002,pillarWidth:c.pillarWidth,pillarHeight:c.pillarHeight,noiseIntensity:c.noiseIntensity,pillarRotation:c.pillarRotation,interactive:c.interactive??!0,quality:c.quality??"high"})},"lightpillars")]})})},Qi=({onItemClick:n,isOpen:t,onToggle:i,position:o="left",colors:s=["#B19EEF","#5227FF"],items:l=[],socialItems:d=[],displaySocials:p=!0,displayItemNumbering:c=!0,className:f,logoUrl:m=null,menuButtonColor:C="#fff",openMenuButtonColor:w="#000",accentColor:h="#5227FF",changeMenuColorOnOpen:u=!0,isFixed:y=!1,closeOnClickAway:P=!0,onMenuOpen:E,onMenuClose:b})=>{const[A,O]=a.useState(!1),r=typeof t=="boolean",x=r?t:A,N=a.useRef(!1),v=a.useRef(null),D=a.useRef(null),z=a.useRef([]),_=a.useRef(null),T=a.useRef(null),j=a.useRef(null),U=a.useRef(null),M=a.useRef(null),[F,W]=a.useState(["Menu","Close"]),J=a.useRef(null),oe=a.useRef(null),X=a.useRef(null),$=a.useRef(null),Q=a.useRef(null),K=a.useRef(null),ce=a.useRef(!1),fe=a.useRef(null);a.useLayoutEffect(()=>{const g=I.context(()=>{const S=v.current,R=D.current,L=_.current,B=T.current,H=j.current,ee=U.current;if(!S||!L||!B||!H||!ee)return;let se=[];R&&(se=Array.from(R.querySelectorAll(".sm-prelayer"))),z.current=se;const ae=o==="left"?-100:100;I.set([S,...se],{xPercent:ae}),I.set(L,{transformOrigin:"50% 50%",rotate:0}),I.set(B,{transformOrigin:"50% 50%",rotate:90}),I.set(H,{rotate:0,transformOrigin:"50% 50%"}),I.set(ee,{yPercent:0}),K.current&&I.set(K.current,{color:C})});return()=>g.revert()},[C,o]);const te=a.useCallback(()=>{const g=v.current,S=z.current;if(!g)return null;J.current?.kill(),oe.current&&(oe.current.kill(),oe.current=null),fe.current?.kill();const R=Array.from(g.querySelectorAll(".sm-panel-itemLabel")),L=Array.from(g.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),B=g.querySelector(".sm-socials-title"),H=Array.from(g.querySelectorAll(".sm-socials-link")),ee=S.map(de=>({el:de,start:Number(I.getProperty(de,"xPercent"))})),se=Number(I.getProperty(g,"xPercent"));R.length&&I.set(R,{yPercent:140,rotate:10}),L.length&&I.set(L,{"--sm-num-opacity":0}),B&&I.set(B,{opacity:0}),H.length&&I.set(H,{y:25,opacity:0});const ae=I.timeline({paused:!0});ee.forEach((de,je)=>{ae.fromTo(de.el,{xPercent:de.start},{xPercent:0,duration:.8,ease:"power4.out"},je*.07)});const Ne=(ee.length?(ee.length-1)*.07:0)+(ee.length?.08:0),Fe=1;if(ae.fromTo(g,{xPercent:se},{xPercent:0,duration:Fe,ease:"power4.out"},Ne),R.length){const je=Ne+Fe*.15;ae.to(R,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},je),L.length&&ae.to(L,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},je+.1)}if(B||H.length){const de=Ne+Fe*.4;B&&ae.to(B,{opacity:1,duration:.5,ease:"power2.out"},de),H.length&&ae.to(H,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{I.set(H,{clearProps:"opacity"})}},de+.04)}return J.current=ae,ae},[]),ie=a.useCallback(()=>{if(ce.current)return;ce.current=!0;const g=te();g?(g.eventCallback("onComplete",()=>{ce.current=!1}),g.play(0)):ce.current=!1},[te]),Z=a.useCallback(()=>{J.current?.kill(),J.current=null,fe.current?.kill();const g=v.current,S=z.current;if(!g)return;const R=[...S,g];oe.current?.kill();const L=o==="left"?-100:100;oe.current=I.to(R,{xPercent:L,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const B=Array.from(g.querySelectorAll(".sm-panel-itemLabel"));B.length&&I.set(B,{yPercent:140,rotate:10});const H=Array.from(g.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));H.length&&I.set(H,{"--sm-num-opacity":0});const ee=g.querySelector(".sm-socials-title"),se=Array.from(g.querySelectorAll(".sm-socials-link"));ee&&I.set(ee,{opacity:0}),se.length&&I.set(se,{y:25,opacity:0}),ce.current=!1}})},[o]),V=a.useCallback(g=>{const S=j.current;S&&(X.current?.kill(),g?X.current=I.to(S,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):X.current=I.to(S,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),ne=a.useCallback(g=>{const S=K.current;if(S)if(Q.current?.kill(),u){const R=g?w:C;Q.current=I.to(S,{color:R,delay:.18,duration:.3,ease:"power2.out"})}else I.set(S,{color:C})},[w,C,u]);_e.useEffect(()=>{if(K.current)if(u){const g=N.current?w:C;I.set(K.current,{color:g})}else I.set(K.current,{color:C})},[u,C,w]);const he=a.useCallback(g=>{const S=U.current;if(!S)return;$.current?.kill();const R=g?"Menu":"Close",L=g?"Close":"Menu",B=3,H=[R];let ee=R;for(let Ee=0;Ee<B;Ee++)ee=ee==="Menu"?"Close":"Menu",H.push(ee);ee!==L&&H.push(L),H.push(L),W(H),I.set(S,{yPercent:0});const se=H.length,ae=(se-1)/se*100;$.current=I.to(S,{yPercent:-ae,duration:.5+se*.07,ease:"power4.out"})},[]),Ce=a.useCallback(()=>{if(r)i&&i(!x);else{const g=!N.current;N.current=g,O(g),g?(E?.(),ie()):(b?.(),Z()),V(g),ne(g),he(g)}},[r,t,i,x,ie,Z,V,ne,he,E,b]);_e.useEffect(()=>{r&&(N.current=t,t?(E?.(),ie()):(b?.(),Z()),V(t),ne(t),he(t))},[t,r,ie,Z,V,ne,he,E,b]);const ye=a.useCallback(()=>{r?x&&i&&i(!1):N.current&&(N.current=!1,O(!1),b?.(),Z(),V(!1),ne(!1),he(!1))},[r,x,i,Z,V,ne,he,b]);return _e.useEffect(()=>{if(!P||!x)return;const g=S=>{const R=v.current&&v.current.contains(S.target),L=K.current&&K.current.contains(S.target),B=S.target.closest(".shop-overlay");!R&&!L&&!B&&ye()};return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[P,x,ye]),e.jsxs("div",{className:(f?f+" ":"")+"staggered-menu-wrapper"+(y?" fixed-wrapper":""),style:h?{"--sm-accent":h}:void 0,"data-position":o,"data-open":x||void 0,children:[e.jsx("div",{ref:D,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let S=[...s&&s.length?s.slice(0,4):["#1e1e22","#35353c"]];if(S.length>=3){const R=Math.floor(S.length/2);S.splice(R,1)}return S.map((R,L)=>e.jsx("div",{className:"sm-prelayer",style:{background:R}},L))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:m?e.jsx("img",{src:m,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:K,className:"sm-toggle","aria-label":x?"Close menu":"Open menu","aria-expanded":x,"aria-controls":"staggered-menu-panel",onClick:Ce,type:"button",children:[e.jsx("span",{ref:M,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:U,className:"sm-toggle-textInner",children:F.map((g,S)=>e.jsx("span",{className:"sm-toggle-line",children:g},S))})}),e.jsxs("span",{ref:j,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:_,className:"sm-icon-line"}),e.jsx("span",{ref:T,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:v,className:"staggered-menu-panel","aria-hidden":!x,children:e.jsxs("div",{className:"sm-panel-inner",children:[e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":c||void 0,children:l&&l.length?l.map((g,S)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:R=>{R.preventDefault(),n&&n(g.id)},"aria-label":g.ariaLabel,"data-index":S+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:g.label})})},g.label+S)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})}),p&&d&&d.length>0&&e.jsxs("div",{className:"sm-socials","aria-label":"Social links",children:[e.jsx("h3",{className:"sm-socials-title",children:"Extras"}),e.jsx("ul",{className:"sm-socials-list",role:"list",children:d.map((g,S)=>e.jsx("li",{className:"sm-socials-item",children:e.jsx("a",{href:g.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link",children:g.label})},g.label+S))})]})]})})]})},mt=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],$e={colors:mt[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1},Ki=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],et={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},Zi=({onClose:n,floatingLinesConfig:t,setFloatingLinesConfig:i,lightPillarsConfig:o,setLightPillarsConfig:s})=>{const{activeBackground:l,floatingLinesConfig:d,setFloatingLinesConfig:p,lightPillarsConfig:c,setLightPillarsConfig:f}=xe(),m=t||d,C=i||p,w=o||c,h=s||f,u=m||$e,y=(r,x)=>{C&&C({...u,[r]:x})},P=r=>{const x=u.enabledWaves,N=x.includes(r)?x.filter(v=>v!==r):[...x,r];y("enabledWaves",N)},E=(r,x)=>{const N=[...u.colors];N[r]=x,y("colors",N)},b=w||et,A=(r,x)=>{h?h({...b,[r]:x}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},O=()=>{l==="floatinglines"&&C?C($e):l==="lightpillars"&&h&&h(et)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:O,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(Dt,{})}),e.jsx("button",{onClick:n,className:"close-btn",children:e.jsx(lt,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[l==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:mt.map(r=>e.jsx("button",{className:"preset-btn",onClick:()=>y("colors",r.colors),style:{background:`linear-gradient(to right, ${r.colors[0]}, ${r.colors[1]}, ${r.colors[2]})`},title:r.name,children:JSON.stringify(u.colors)===JSON.stringify(r.colors)&&e.jsx(ct,{})},r.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:u.colors.map((r,x)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:r,onChange:N=>E(x,N.target.value)}),e.jsx("span",{className:"hex-code",children:r})]},x))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:u.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:u.count,onChange:r=>y("count",parseInt(r.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:u.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:u.distance,onChange:r=>y("distance",parseInt(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:u.bendRadius})]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.1",value:u.bendRadius,onChange:r=>y("bendRadius",parseFloat(r.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:u.bendStrength})]}),e.jsx("input",{type:"range",min:"-2",max:"2",step:"0.1",value:u.bendStrength,onChange:r=>y("bendStrength",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(r=>e.jsx("button",{className:`toggle-btn ${u.enabledWaves.includes(r)?"active":""}`,onClick:()=>P(r),children:r.charAt(0).toUpperCase()+r.slice(1)},r))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${u.interactive!==!1?"active":""}`,onClick:()=>y("interactive",u.interactive===!1),style:{width:"100%",textAlign:"center"},children:u.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),l==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:b.topColor,onChange:r=>A("topColor",r.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:b.bottomColor,onChange:r=>A("bottomColor",r.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:b.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:b.intensity,onChange:r=>A("intensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:b.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:b.rotationSpeed,onChange:r=>A("rotationSpeed",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:b.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:b.pillarWidth,onChange:r=>A("pillarWidth",parseFloat(r.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[b.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:b.pillarRotation,onChange:r=>A("pillarRotation",parseInt(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:b.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:b.pillarHeight,onChange:r=>A("pillarHeight",parseFloat(r.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:b.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:b.noiseIntensity,onChange:r=>A("noiseIntensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:b.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:b.glowAmount,onChange:r=>A("glowAmount",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Calidad"}),e.jsx("div",{className:"toggles-row",children:Ki.map(r=>e.jsx("button",{className:`toggle-btn ${b.quality===r.value?"active":""}`,onClick:()=>A("quality",r.value),children:r.label},r.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${b.interactive!==!1?"active":""}`,onClick:()=>A("interactive",b.interactive===!1),style:{width:"100%",textAlign:"center"},children:b.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]})]})]})};function $i({children:n,className:t="",onClick:i,mouseX:o,spring:s,distance:l,magnification:d,baseItemSize:p}){const c=a.useRef(null),f=we(0),m=Ge(o,h=>{if(!c.current)return 1/0;const u=c.current.getBoundingClientRect(),y=u.x+u.width/2;return Math.abs(h-y)}),C=Ge(m,[0,l],[d,p]),w=Pe(C,s);return e.jsx(k.div,{ref:c,style:{width:w,height:w,minWidth:w,minHeight:w},onHoverStart:()=>f.set(1),onHoverEnd:()=>f.set(0),onClick:i,className:`dock-item ${t}`,"aria-haspopup":"true",children:a.Children.map(n,h=>a.cloneElement(h,{isHovered:f}))})}function en({children:n,className:t="",...i}){const{isHovered:o}=i,[s,l]=a.useState(!1);return a.useEffect(()=>{const d=o.on("change",p=>{l(p===1)});return()=>d()},[o]),e.jsx(re,{children:s&&e.jsx(k.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:n})})}function tn({children:n,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:n})}function nn({items:n,className:t="",spring:i={mass:.1,stiffness:300,damping:20},magnification:o=70,distance:s=200,panelHeight:l=68,dockHeight:d=256,baseItemSize:p=50}){const c=we(1/0),f=we(0),m=a.useMemo(()=>Math.max(d,o+o/2+4),[o,d]),C=Ge(f,[0,1],[l,m]),w=Pe(C,i);return e.jsx(k.div,{style:{height:w,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(k.div,{onMouseMove:({pageX:h})=>{f.set(1),c.set(h)},onMouseLeave:()=>{f.set(0),c.set(1/0)},className:`dock-panel ${t}`,style:{height:l},role:"toolbar","aria-label":"Application dock",children:n.map((h,u)=>e.jsxs($i,{onClick:h.onClick,className:h.className,mouseX:c,spring:i,distance:s,magnification:o,baseItemSize:p,children:[e.jsx(tn,{children:h.icon}),e.jsx(en,{children:h.label})]},u))})})}const pt=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,ht=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,gt=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,vt=""+new URL("duck-BnqypGlP.png",import.meta.url).href,xt="data:image/png;base64,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",yt=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,on={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico atemporal.",price:"Gratis",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"galaxy",name:"Galaxy",description:"Un viaje a las estrellas.",price:"Gratis",previewColor:"#000"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:"Gratis",previewColor:"#ff99cc"},{id:"ballpit",name:"Ball Pit",description:"Física interactiva y relajante.",price:"Gratis",previewColor:"#29b1ff"},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:"Gratis",previewColor:"#bd71ff"},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:"Gratis",previewColor:"#00ffff"}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:"Gratis",previewColor:"transparent",icon:e.jsx(ut,{})}],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:"Gratis",previewColor:"transparent",icon:e.jsx(Bt,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:"Gratis",previewColor:"#ffadad",icon:e.jsx("img",{src:pt,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:"Gratis",previewColor:"#a89c8d",icon:e.jsx("img",{src:ht,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:"Gratis",previewColor:"#ffecb6",icon:e.jsx("img",{src:gt,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:"Gratis",previewColor:"#ebe371",icon:e.jsx("img",{src:vt,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:"Gratis",previewColor:"#e3e4b2",icon:e.jsx("img",{src:xt,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:"Gratis",previewColor:"#a3a3a3",icon:e.jsx("img",{src:yt,alt:"Skeleton",style:{width:"40px"}})}]},sn=[{id:"backgrounds",label:"Fondos",icon:e.jsx(Ot,{})},{id:"cursors",label:"Cursores",icon:e.jsx(ut,{})},{id:"trails",label:"Mascotas",icon:e.jsx(Ut,{})}],an=()=>{const{activeShop:n,openShop:t,closeShop:i,activeBackground:o,setBackground:s,activeCursor:l,setCursor:d,activeTrail:p,setTrail:c}=xe(),[f,m]=a.useState(n);a.useEffect(()=>{n&&m(n)},[n]);const C=on[f]||[],w=u=>{n==="backgrounds"&&s(u),n==="cursors"&&d(u),n==="trails"&&c(u)},h=u=>n==="backgrounds"?o===u:n==="cursors"?l===u:n==="trails"?p===u:!1;return e.jsx(re,{children:n&&e.jsxs(k.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:i,style:{position:"absolute",inset:0}}),e.jsxs(k.div,{className:"shop-window",initial:{scale:.9,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.95,y:10,opacity:0,transition:{duration:.2}},children:[e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:sn.map(u=>e.jsxs("button",{onClick:()=>t(u.id),className:`tab-btn ${n===u.id?"active":""}`,children:[u.icon,e.jsx("span",{children:u.label}),n===u.id&&e.jsx(k.div,{layoutId:"activeTab",className:"active-line"})]},u.id))}),e.jsx("button",{onClick:i,className:"close-btn",children:e.jsx(lt,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",f==="backgrounds"?"Fondos":f==="cursors"?"Cursores":"Mascotas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(re,{mode:"wait",children:e.jsx(k.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:C.map(u=>e.jsxs("div",{className:`shop-item ${h(u.id)?"equipped":""}`,onClick:()=>w(u.id),children:[e.jsxs("div",{className:"item-preview",style:{background:u.previewColor},children:[u.icon&&e.jsx("div",{className:"preview-icon",children:u.icon}),h(u.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(ct,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:u.name}),e.jsx("p",{children:u.description}),e.jsx("span",{className:"price-tag",children:u.price})]})]},u.id))},f)})})]})]})})},rn=()=>{const{activeTrail:n}=xe(),t=we(-100),i=we(-100),o={damping:25,stiffness:70,mass:1},s=Pe(t,o),l=Pe(i,o);a.useEffect(()=>{const p=c=>{t.set(c.clientX),i.set(c.clientY)};return window.addEventListener("mousemove",p),()=>window.removeEventListener("mousemove",p)},[t,i]);const d={"apple-cat":pt,"jump-cat":ht,"rolling-cat":gt,duck:vt,pompom:xt,"skeleton-run":yt,ghost:null};return!n||n==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:d[n]?e.jsx(k.img,{src:d[n],alt:"trail",style:{x:s,y:l,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):n==="ghost"?e.jsx(k.div,{style:{x:s,y:l,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},tt=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],ln=({progress:n})=>{const[t,i]=a.useState(0);return a.useEffect(()=>{const o=setInterval(()=>{i(s=>(s+1)%tt.length)},1500);return()=>clearInterval(o)},[]),e.jsxs(k.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[n,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(k.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${n}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(k.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:tt[t]},t)})]})]})},cn=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,un=Object.freeze(Object.defineProperty({__proto__:null,default:cn},Symbol.toStringTag,{value:"Module"})),dn=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,fn=Object.freeze(Object.defineProperty({__proto__:null,default:dn},Symbol.toStringTag,{value:"Module"})),mn=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,pn=Object.freeze(Object.defineProperty({__proto__:null,default:mn},Symbol.toStringTag,{value:"Module"})),hn=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,gn=Object.freeze(Object.defineProperty({__proto__:null,default:hn},Symbol.toStringTag,{value:"Module"})),vn=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,xn=Object.freeze(Object.defineProperty({__proto__:null,default:vn},Symbol.toStringTag,{value:"Module"})),yn=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,bn=Object.freeze(Object.defineProperty({__proto__:null,default:yn},Symbol.toStringTag,{value:"Module"})),wn=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,Cn=Object.freeze(Object.defineProperty({__proto__:null,default:wn},Symbol.toStringTag,{value:"Module"})),jn=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,Sn=Object.freeze(Object.defineProperty({__proto__:null,default:jn},Symbol.toStringTag,{value:"Module"})),Rn=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,An=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"})),it=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":un,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":fn,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":pn,"../../assets/songs/La cena - Las Petunias.mp3":gn,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":xn,"../../assets/songs/Tek It - Cafuné.mp3":bn,"../../assets/songs/You and I - d4vd .mp3":Cn,"../../assets/songs/gourmet - rickyedit.mp3":Sn,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":An}),be=Object.keys(it).map(n=>({title:n.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase()),artist:"Only U Playlist",src:it[n].default}));be.length===0&&be.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const Ln=.1,_n=({visible:n,onClose:t})=>{const i=a.useRef(null),o=a.useRef(null),[s,l]=a.useState(!1),[d,p]=a.useState(0),[c,f]=a.useState(.05),[m,C]=a.useState(!1),[w,h]=a.useState(!1),[u,y]=a.useState(!1),[P,E]=a.useState(0),[b,A]=a.useState(0),O=be[d];a.useEffect(()=>{i.current&&(i.current.volume=m?0:Math.pow(c,2)*Ln)},[c,m]),a.useEffect(()=>{s&&i.current&&i.current.play().catch(_=>console.log("Autoplay blocked",_))},[d]),a.useEffect(()=>{n||(h(!1),y(!1))},[n]),a.useEffect(()=>{const _=T=>{n&&(o.current&&o.current.contains(T.target)||T.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[n,t]);const r=()=>{i.current&&(E(i.current.currentTime),A(i.current.duration||0))},x=_=>{const T=parseFloat(_.target.value);E(T),i.current&&(i.current.currentTime=T)},N=()=>{s?i.current.pause():i.current.play(),l(!s)},v=()=>{p(_=>(_+1)%be.length)},D=_=>{p(_),l(!0),y(!1)},z=_=>{if(!_||isNaN(_))return"0:00";const T=Math.floor(_/60),j=Math.floor(_%60);return`${T}:${j<10?"0":""}${j}`};return e.jsxs(k.div,{ref:o,className:"music-player-container",initial:"hidden",animate:n?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:i,src:O.src,onEnded:v,onTimeUpdate:r,onLoadedMetadata:r,preload:"auto"}),e.jsx(re,{children:u&&e.jsx(k.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:be.map((_,T)=>e.jsxs("div",{className:`playlist-item ${T===d?"active":""}`,onClick:()=>D(T),children:[T+1,". ",_.title]},T))})}),e.jsx("div",{className:"compact-info",onClick:()=>y(!u),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:O.title}),e.jsx(Gt,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:N,children:s?e.jsx(qt,{size:16}):e.jsx(Ht,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:b,value:P,onChange:x,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[z(P)," / ",z(b)]})]}),e.jsx("button",{className:"icon-btn",onClick:v,children:e.jsx(Yt,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${w?"active":""}`,onClick:()=>h(!w),children:m||c===0?e.jsx(Wt,{size:18}):e.jsx(Vt,{size:18})}),e.jsx(re,{children:w&&e.jsx(k.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:m?0:c,onChange:_=>f(parseFloat(_.target.value))})})})]})]})]})},Mn=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"}],Pn=[{label:"GitHub",link:"https://github.com"},{label:"Instagram",link:"https://instagram.com"}];function In(){const{isUnlocked:n,openShop:t,closeShop:i,lockGame:o,activeBackground:s}=xe(),[l,d]=a.useState(!0),[p,c]=a.useState(!1),[f,m]=a.useState(!1),[C,w]=a.useState(!1),[h,u]=a.useState(!1),[y,P]=a.useState(null),[E,b]=a.useState(null),A=z=>{z&&t(z)},O=()=>{f?(m(!1),C&&d(!0)):(u(!1),w(l),d(!1),m(!0))},r=[{icon:e.jsx(Jt,{size:22}),label:"Texto",onClick:()=>d(!l)},{icon:e.jsx(Xt,{size:22}),label:"Música",onClick:()=>c(!p)},{icon:e.jsx(Qt,{size:22}),label:"Juego",onClick:()=>console.log("Toggle Game")},{icon:e.jsx(Kt,{size:22}),label:"Fondo",onClick:O},{icon:e.jsx(Zt,{size:22}),label:"Bloquear",onClick:()=>{o&&(i(),c(!1),o())}}],[x,N]=a.useState(!0),[v,D]=a.useState(0);return a.useEffect(()=>{const z=setInterval(()=>{D(_=>{const T=_+Math.floor(Math.random()*15)+5;return T>=100?(clearInterval(z),setTimeout(()=>N(!1),200),100):T})},200);return()=>clearInterval(z)},[]),e.jsxs("main",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[e.jsx(re,{mode:"wait",children:x&&e.jsx(ln,{progress:v},"loader")}),e.jsx(re,{children:!n&&e.jsx(k.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(li,{})},"lock-screen")}),e.jsx(re,{children:n&&e.jsxs(k.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(Xi,{floatingLinesConfig:y,lightPillarsConfig:E}),e.jsx(Qi,{isOpen:h,onToggle:z=>{u(z),z&&m(!1)},items:Mn,socialItems:Pn,isFixed:!0,position:"right",onItemClick:A,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(an,{}),e.jsx(rn,{}),e.jsx(re,{children:l&&e.jsx(k.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(_i,{})})}),e.jsx(re,{children:f&&(s==="floatinglines"||s==="lightpillars")&&e.jsx(k.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(Zi,{onClose:O,floatingLinesConfig:y,setFloatingLinesConfig:P,lightPillarsConfig:E,setLightPillarsConfig:b})})})}),e.jsx(_n,{visible:p,onClose:()=>c(!1)}),e.jsx(nn,{items:r,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}$t.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(In,{})}));
