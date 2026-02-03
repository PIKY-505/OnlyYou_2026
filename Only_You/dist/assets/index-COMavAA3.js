import{c as Pt,j as e,r as a,u as Lt,C as we,a as It,F as _t,R as Fe,O as Et,A as Nt,b as Ft,P as Mt,V as oe,d as pt,e as zt,S as ze,W as Te,f as Tt,M as He,g as be,I as Dt,h as Ot,i as Ut,k as Bt,l as Gt,m as qt,n as Ht,o as Vt,p as Ye,q as We,s as Xe,t as Je,v as V,w as Yt,x as ht,y as gt,z as Wt,B as vt,D as Xt,E as Jt,G as Qt,H as Kt,J as Zt,K as $t,L as en,N as tn,Q as nn,T as on,U as sn,X as an,Y as rn,Z as ln}from"./vendor-CWohnw__.js";import{A as he,m as H,u as Pe,a as Ve,b as Me}from"./framer-motion-CQoqgKBs.js";import{R as cn,T as un,P as dn,C as Qe,M as fn}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const Re=Pt(i=>({isUnlocked:!1,unlockApp:()=>i({isUnlocked:!0}),lockGame:()=>i({isUnlocked:!1}),activeShop:null,openShop:t=>i({activeShop:t}),closeShop:()=>i({activeShop:null}),activeBackground:"gradient",setBackground:t=>i({activeBackground:t}),activeCursor:"default",setCursor:t=>i({activeCursor:t}),activeTrail:"none",setTrail:t=>i({activeTrail:t})})),mn=({text:i,disabled:t=!1,speed:n=3,className:o="",color:r="#7c7c7c",shineColor:l="#ffffff",direction:u="right"})=>e.jsx("div",{className:`shiny-text ${u} ${t?"disabled":""} ${o}`,style:{"--shiny-speed":`${n}s`,"--base-color":r,"--shine-color":l},children:i}),Ke=i=>(i=i.replace("#",""),[parseInt(i.slice(0,2),16)/255,parseInt(i.slice(2,4),16)/255,parseInt(i.slice(4,6),16)/255]),pn=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,hn=`
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
`,xt=a.forwardRef(function({uniforms:t},n){return Lt((o,r)=>{n.current.material.uniforms.uTime.value+=.1*r}),e.jsxs("mesh",{ref:n,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:pn,fragmentShader:hn})]})});xt.displayName="SilkPlane";const yt=({speed:i=1,scale:t=2,color:n="#ff99cc",noiseIntensity:o=.5,rotation:r=0})=>{const l=a.useRef(),u=a.useMemo(()=>({uSpeed:{value:i},uScale:{value:t},uNoiseIntensity:{value:o},uColor:{value:new we(...Ke(n))},uRotation:{value:r},uTime:{value:0}}),[]);return a.useEffect(()=>{if(l.current){const d=l.current.material.uniforms;d.uSpeed.value=i,d.uScale.value=t,d.uNoiseIntensity.value=o,d.uColor.value.set(...Ke(n)),d.uRotation.value=r}},[i,t,o,n,r]),a.useEffect(()=>{const c=setInterval(()=>window.dispatchEvent(new Event("resize")),50),f=setTimeout(()=>clearInterval(c),1200);return()=>{clearInterval(c),clearTimeout(f)}},[]),e.jsx(It,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(xt,{ref:l,uniforms:u})})},gn=()=>{const[i,t]=a.useState(""),[n,o]=a.useState(!1),r=Re(c=>c.unlockApp),l="230824",u=c=>{const f=c.target.value.replace(/\D/g,"");if(f.length>6)return;let p=f;f.length>2&&(p=f.slice(0,2)+"/"+f.slice(2)),f.length>4&&(p=p.slice(0,5)+"/"+f.slice(4)),t(p),o(!1)},d=c=>{c.preventDefault(),i.replace(/\//g,"")===l?r():(o(!0),setTimeout(()=>o(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(yt,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(mn,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:d,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:i,onChange:u,className:n?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(_t,{size:20})})]})]})]})},vn=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,xn=Object.freeze(Object.defineProperty({__proto__:null,default:vn},Symbol.toStringTag,{value:"Module"})),yn=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,bn=Object.freeze(Object.defineProperty({__proto__:null,default:yn},Symbol.toStringTag,{value:"Module"})),Cn=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,wn=Object.freeze(Object.defineProperty({__proto__:null,default:Cn},Symbol.toStringTag,{value:"Module"})),jn=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,Sn=Object.freeze(Object.defineProperty({__proto__:null,default:jn},Symbol.toStringTag,{value:"Module"})),Rn=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,An=Object.freeze(Object.defineProperty({__proto__:null,default:Rn},Symbol.toStringTag,{value:"Module"})),kn=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,Pn=Object.freeze(Object.defineProperty({__proto__:null,default:kn},Symbol.toStringTag,{value:"Module"})),Ln=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,In=Object.freeze(Object.defineProperty({__proto__:null,default:Ln},Symbol.toStringTag,{value:"Module"})),_n=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,En=Object.freeze(Object.defineProperty({__proto__:null,default:_n},Symbol.toStringTag,{value:"Module"})),Nn=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,Fn=Object.freeze(Object.defineProperty({__proto__:null,default:Nn},Symbol.toStringTag,{value:"Module"})),Mn=Object.assign({"../../assets/img/photos/bridge.jpeg":xn,"../../assets/img/photos/first.jpg":bn,"../../assets/img/photos/graduated.jpeg":wn,"../../assets/img/photos/halloween.jpg":Sn,"../../assets/img/photos/miestrella.jpg":An,"../../assets/img/photos/murder.jpeg":Pn,"../../assets/img/photos/rock.jpeg":In,"../../assets/img/photos/sleepy.jpg":En,"../../assets/img/photos/sunshine.jpeg":Fn}),Ue=Object.values(Mn).map(i=>i.default),zn=()=>{const[i,t]=a.useState(null);let n=[...Ue];if(n.length>0)for(;n.length<18;)n=[...n,...Ue];const o=[...n,...n];return e.jsxs("div",{className:"main-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),Ue.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:o.map((r,l)=>e.jsx("img",{src:r,alt:`Memory ${l}`,className:"gallery-item",onClick:()=>t(r)},l))})}),e.jsx(he,{children:i&&e.jsx(H.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(H.img,{src:i,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:r=>r.stopPropagation()})})})]})},Tn=({color1:i="#b117f8",color2:t="#2c0b2e",speed:n=20})=>e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:`linear-gradient(to bottom, ${i}, ${t})`,animation:`spinGradient ${n}s linear infinite`}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),Dn=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,On=`
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
`,Un=({focal:i=[.5,.5],rotation:t=[1,0],starSpeed:n=0,density:o=1.5,hueShift:r=300,disableAnimation:l=!1,speed:u=.5,glowIntensity:d=.5,saturation:c=.8,twinkleIntensity:f=.5,rotationSpeed:p=.05,transparent:C=!0,colorCycleSpeed:x=10,rainbow:g=!1,warp:h=!1,...b})=>{const L=a.useRef(null),O=a.useRef(r),T=a.useRef(null),X=a.useRef({starSpeed:n,disableAnimation:l,rainbow:g,colorCycleSpeed:x,warp:h,hueShift:r});return a.useEffect(()=>{X.current={starSpeed:n,disableAnimation:l,rainbow:g,colorCycleSpeed:x,warp:h,hueShift:r}},[n,l,g,x,h,r]),a.useEffect(()=>{if(!L.current)return;const I=L.current;I.innerHTML="";const U=new cn({alpha:C,premultipliedAlpha:!1,dpr:1}),v=U.gl;C?(v.enable(v.BLEND),v.blendFunc(v.SRC_ALPHA,v.ONE_MINUS_SRC_ALPHA),v.clearColor(0,0,0,0)):v.clearColor(0,0,0,1);let A;function S(){U.setSize(I.offsetWidth*1,I.offsetHeight*1),T.current&&(T.current.uniforms.uResolution.value=new Qe(v.canvas.width,v.canvas.height,v.canvas.width/v.canvas.height))}window.addEventListener("resize",S,!1),S();const y=new un(v);A=new dn(v,{vertex:Dn,fragment:On,uniforms:{uTime:{value:0},uResolution:{value:new Qe(v.canvas.width,v.canvas.height,v.canvas.width/v.canvas.height)},uFocal:{value:new Float32Array(i)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:n},uDensity:{value:o},uHueShift:{value:r},uSpeed:{value:u},uGlowIntensity:{value:d},uSaturation:{value:c},uTwinkleIntensity:{value:f},uRotationSpeed:{value:p},uTransparent:{value:C}}}),T.current=A;const N=new fn(v,{geometry:y,program:A});let j,w=0;const se=1e3/30;function ee(k){if(j=requestAnimationFrame(ee),!L.current||!T.current)return;const G=k-w;if(G<se)return;w=k-G%se;const{starSpeed:E,disableAnimation:F,rainbow:W,colorCycleSpeed:le,warp:de,hueShift:te}=X.current;if(!F){A.uniforms.uTime.value=k*.001;const fe=de?E*10:E;A.uniforms.uStarSpeed.value=k*.001*fe/10,W?(O.current+=le*.05,A.uniforms.uHueShift.value=O.current%360):A.uniforms.uHueShift.value=te}U.render({scene:N})}return j=requestAnimationFrame(ee),I.appendChild(v.canvas),v.canvas.style.width="100%",v.canvas.style.height="100%",v.canvas.style.display="block",v.canvas.style.willChange="transform",()=>{cancelAnimationFrame(j),window.removeEventListener("resize",S),I&&v.canvas&&I.contains(v.canvas)&&I.removeChild(v.canvas),v.getExtension("WEBGL_lose_context")?.loseContext(),T.current=null}},[C]),a.useEffect(()=>{if(!T.current)return;const I=T.current.uniforms;I.uFocal.value=new Float32Array(i),I.uRotation.value=new Float32Array(t),I.uDensity.value=o,I.uSpeed.value=u,I.uGlowIntensity.value=d,I.uSaturation.value=c,I.uTwinkleIntensity.value=f,I.uRotationSpeed.value=p},[i,t,o,u,d,c,f,p]),e.jsx("div",{ref:L,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},...b})},Bn=Fe.memo(Un);class Gn{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#n;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#j;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#o=!1;#i=!1;isDisposed=!1;#s;#a;#r;#l=new pt;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#h(),this.#g(),this.#v(),this.resize(),this.#x()}#h(){this.camera=new zt,this.cameraFov=this.camera.fov}#g(){this.scene=new ze}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new Te(t),this.renderer.outputColorSpace=Tt}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#a=new ResizeObserver(this.#c.bind(this)),this.#a.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#a?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#o=t[0].isIntersecting,this.#o?this.#p():this.#u()}#f(){this.#o&&(document.hidden?this.#u():this.#p())}#c(){this.#r&&clearTimeout(this.#r),this.#r=setTimeout(this.resize.bind(this),100)}resize(){let t,n;this.#e.size instanceof Object?(t=this.#e.size.width,n=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,n=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,n=window.innerHeight),this.size.width=t,this.size.height=n,this.size.ratio=t/n,this.#C(),this.#w(),this.onAfterResize(this.size)}#C(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#m(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#m(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#m(t){const n=Math.tan(He.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*He.radToDeg(Math.atan(n))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#w(){this.renderer.setSize(this.size.width,this.size.height),this.#n?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(t),this.size.pixelRatio=t}get postprocessing(){return this.#n}set postprocessing(t){this.#n=t,this.render=t.render.bind(t)}#p(){if(this.#i)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#i=!0,this.#l.start(),t()}#u(){this.#i&&(cancelAnimationFrame(this.#d),this.#i=!1,this.#l.stop())}#j(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(n=>{const o=t.material[n];o!==null&&typeof o=="object"&&typeof o.dispose=="function"&&o.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#n?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const ye=new Map,ve=new be;let Be=!1;function qn(i){const t={position:new be,nPosition:new be,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...i};return(function(n,o){ye.has(n)||(ye.set(n,o),Be||(document.body.addEventListener("pointermove",Ze),document.body.addEventListener("pointerleave",et),document.body.addEventListener("click",$e),document.body.addEventListener("touchstart",tt,{passive:!1}),document.body.addEventListener("touchmove",nt,{passive:!1}),document.body.addEventListener("touchend",Le,{passive:!1}),document.body.addEventListener("touchcancel",Le,{passive:!1}),Be=!0))})(i.domElement,t),t.dispose=()=>{const n=i.domElement;ye.delete(n),ye.size===0&&(document.body.removeEventListener("pointermove",Ze),document.body.removeEventListener("pointerleave",et),document.body.removeEventListener("click",$e),document.body.removeEventListener("touchstart",tt),document.body.removeEventListener("touchmove",nt),document.body.removeEventListener("touchend",Le),document.body.removeEventListener("touchcancel",Le),Be=!1)},t}function Ze(i){ve.x=i.clientX,ve.y=i.clientY,Hn()}function Hn(){for(const[i,t]of ye){const n=i.getBoundingClientRect();Oe(n)?(De(t,n),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function $e(i){ve.x=i.clientX,ve.y=i.clientY;for(const[t,n]of ye){const o=t.getBoundingClientRect();De(n,o),Oe(o)&&n.onClick(n)}}function et(){for(const i of ye.values())i.hover&&(i.hover=!1,i.onLeave(i))}function tt(i){if(i.touches.length>0){i.preventDefault(),ve.x=i.touches[0].clientX,ve.y=i.touches[0].clientY;for(const[t,n]of ye){const o=t.getBoundingClientRect();Oe(o)&&(n.touching=!0,De(n,o),n.hover||(n.hover=!0,n.onEnter(n)),n.onMove(n))}}}function nt(i){if(i.touches.length>0){i.preventDefault(),ve.x=i.touches[0].clientX,ve.y=i.touches[0].clientY;for(const[t,n]of ye){const o=t.getBoundingClientRect();De(n,o),Oe(o)?(n.hover||(n.hover=!0,n.touching=!0,n.onEnter(n)),n.onMove(n)):n.hover&&n.touching&&n.onMove(n)}}}function Le(){for(const[,i]of ye)i.touching&&(i.touching=!1,i.hover&&(i.hover=!1,i.onLeave(i)))}function De(i,t){const{position:n,nPosition:o}=i;n.x=ve.x-t.left,n.y=ve.y-t.top,o.x=n.x/t.width*2-1,o.y=-n.y/t.height*2+1}function Oe(i){const{x:t,y:n}=ve,{left:o,top:r,width:l,height:u}=i;return t>=o&&t<=o+l&&n>=r&&n<=r+u}const{randFloat:Vn,randFloatSpread:Ge}=He,qe=new oe,ne=new oe,Ie=new oe,Yn=new oe,ie=new oe,_e=new oe,je=new oe,Ce=new oe,Ee=new oe,it=new oe;class Wn{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new oe,this.#e(),this.setSizes()}#e(){const{config:t,positionData:n}=this;this.center.toArray(n,0);for(let o=1;o<t.count;o++){const r=3*o;n[r]=Ge(2*t.maxX),n[r+1]=Ge(2*t.maxY),n[r+2]=Ge(2*t.maxZ)}}setSizes(){const{config:t,sizeData:n}=this;n[0]=t.size0;for(let o=1;o<t.count;o++)n[o]=Vn(t.minSize,t.maxSize)}update(t){const{config:n,center:o,positionData:r,sizeData:l,velocityData:u}=this;let d=0;n.controlSphere0&&(d=1,qe.fromArray(r,0),qe.lerp(o,.1).toArray(r,0),Yn.set(0,0,0).toArray(u,0));for(let c=d;c<n.count;c++){const f=3*c;ne.fromArray(r,f),ie.fromArray(u,f),ie.y-=t.delta*n.gravity*l[c],ie.multiplyScalar(n.friction),ie.clampLength(0,n.maxVelocity),ne.add(ie),ne.toArray(r,f),ie.toArray(u,f)}for(let c=d;c<n.count;c++){const f=3*c;ne.fromArray(r,f),ie.fromArray(u,f);const p=l[c];for(let x=c+1;x<n.count;x++){const g=3*x;Ie.fromArray(r,g),_e.fromArray(u,g);const h=l[x];je.copy(Ie).sub(ne);const b=je.length(),L=p+h;if(b<L){const O=L-b;Ce.copy(je).normalize().multiplyScalar(.5*O),Ee.copy(Ce).multiplyScalar(Math.max(ie.length(),1)),it.copy(Ce).multiplyScalar(Math.max(_e.length(),1)),ne.sub(Ce),ie.sub(Ee),ne.toArray(r,f),ie.toArray(u,f),Ie.add(Ce),_e.add(it),Ie.toArray(r,g),_e.toArray(u,g)}}if(n.controlSphere0){je.copy(qe).sub(ne);const x=je.length(),g=p+l[0];if(x<g){const h=g-x;Ce.copy(je.normalize()).multiplyScalar(h),Ee.copy(Ce).multiplyScalar(Math.max(ie.length(),1)),ne.sub(Ce),ie.sub(Ee)}}Math.abs(ne.x)+p>n.maxX&&(ne.x=Math.sign(ne.x)*(n.maxX-p),ie.x=-ie.x*n.wallBounce),n.gravity===0?Math.abs(ne.y)+p>n.maxY&&(ne.y=Math.sign(ne.y)*(n.maxY-p),ie.y=-ie.y*n.wallBounce):ne.y-p<-n.maxY&&(ne.y=-n.maxY+p,ie.y=-ie.y*n.wallBounce);const C=Math.max(n.maxZ,n.maxSize);Math.abs(ne.z)+p>C&&(ne.z=Math.sign(ne.z)*(n.maxZ-p),ie.z=-ie.z*n.wallBounce),ne.toArray(r,f),ie.toArray(u,f)}}explode(t,n=2){const{positionData:o,velocityData:r,config:l}=this;for(let u=0;u<l.count;u++){const d=3*u,c=o[d]-t.x,f=o[d+1]-t.y,p=o[d+2]-t.z,C=c*c+f*f+p*p;if(C<60){const x=Math.sqrt(C)+.01,g=n*50/(x+1),h=(Math.random()-.5)*1.5,b=(Math.random()-.5)*1.5,L=(Math.random()-.5)*1.5;r[d]+=(c/x+h)*g,r[d+1]+=(f/x+b)*g,r[d+2]+=(p/x+L)*g}}}}class Xn extends Ht{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=n=>{Object.assign(n.uniforms,this.uniforms),n.fragmentShader=`
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
      `+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("void main() {",`
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
      `);const o=Vt.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);n.fragmentShader=n.fragmentShader.replace("#include <lights_fragment_begin>",o),this.onBeforeCompile2&&this.onBeforeCompile2(n)}}}const Jn={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0,enableExplosion:!1,rainbow:!1},Se=new Et;class Qn extends Dt{constructor(t,n={}){const o={...Jn,...n},r=new Ot,l=new Ut(t,.04).fromScene(r).texture,u=new Bt,d=new Xn({envMap:l,...o.materialParams});d.envMapRotation.x=-Math.PI/2,super(u,d,o.count),this.config=o,this.physics=new Wn(o),this.#e(),this.setColors(o.colors),this.rainbowHue=0}#e(){this.ambientLight=new Gt(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new qt(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const n=(function(o){let r,l;function u(d){r=d,l=[],r.forEach(c=>{l.push(new we(c))})}return u(o),{setColors:u,getColorAt:function(d,c=new we){const f=Math.max(0,Math.min(1,d))*(r.length-1),p=Math.floor(f),C=l[p];if(p>=r.length-1)return C.clone();const x=f-p,g=l[p+1];return c.r=C.r+x*(g.r-C.r),c.g=C.g+x*(g.g-C.g),c.b=C.b+x*(g.b-C.b),c}}})(t);for(let o=0;o<this.count;o++)this.setColorAt(o,n.getColorAt(o/this.count)),o===0&&this.light.color.copy(n.getColorAt(o/this.count));this.instanceColor.needsUpdate=!0}}update(t){if(this.physics.update(t),this.config.rainbow){this.rainbowHue+=t.delta*.2,this.light.color.setHSL(this.rainbowHue%1,1,.5);for(let n=0;n<this.count;n++){const o=(this.rainbowHue+n*.05)%1,r=new we().setHSL(o,.9,.6);this.setColorAt(n,r)}this.instanceColor.needsUpdate=!0}for(let n=0;n<this.count;n++)Se.position.fromArray(this.physics.positionData,3*n),n===0&&this.config.followCursor===!1?Se.scale.setScalar(0):Se.scale.setScalar(this.physics.sizeData[n]),Se.updateMatrix(),this.setMatrixAt(n,Se.matrix),n===0&&this.light.position.copy(Se.position);this.instanceMatrix.needsUpdate=!0}}function Kn(i,t={}){const n=new Gn({canvas:i,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let o;n.renderer.toneMapping=Nt,n.camera.position.set(0,0,20),n.camera.lookAt(0,0,0),n.cameraMaxAspect=1.5,n.resize(),f(t);const r=new Ft,l=new Mt(new oe(0,0,1),0),u=new oe;let d=!1;i.style.touchAction="none",i.style.userSelect="none",i.style.webkitUserSelect="none";const c=qn({domElement:i,onMove(){r.setFromCamera(c.nPosition,n.camera),n.camera.getWorldDirection(l.normal),r.ray.intersectPlane(l,u),o.physics.center.copy(u),o.config.controlSphere0=!0},onClick(){o&&o.config.enableExplosion&&o.physics.explode(o.physics.center)},onLeave(){o.config.controlSphere0=!1}});function f(p){o&&(n.clear(),n.scene.remove(o)),o=new Qn(n.renderer,p),n.scene.add(o)}return n.onBeforeRender=p=>{d||o.update(p)},n.onAfterResize=p=>{o.config.maxX=p.wWidth/2,o.config.maxY=p.wHeight/2},{three:n,get spheres(){return o},setCount(p){f({...o.config,count:p})},togglePause(){d=!d},dispose(){c.dispose(),n.dispose()}}}const Zn=({className:i="",followCursor:t=!0,count:n=100,gravity:o=.5,friction:r=.9975,wallBounce:l=.95,colors:u=[0,0,0],enableExplosion:d=!1,rainbow:c=!1,...f})=>{const p=a.useRef(null),C=a.useRef(null);return a.useEffect(()=>{const x=p.current;if(x)return C.current=Kn(x,{followCursor:t,count:n,gravity:o,friction:r,wallBounce:l,colors:u,enableExplosion:d,rainbow:c,...f}),()=>{C.current&&C.current.dispose()}},[]),a.useEffect(()=>{const x=C.current;if(!x||!x.spheres)return;const g=x.spheres.config;g.gravity=o,g.friction=r,g.wallBounce=l,g.followCursor=t,g.enableExplosion=d,g.rainbow=c,x.spheres.setColors(u)},[o,r,l,t,u,d,c]),a.useEffect(()=>{const x=C.current;x&&x.setCount(n)},[n]),e.jsx("canvas",{className:i,ref:p,style:{width:"100%",height:"100%"}})},$n=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ei=`
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
`,Ne=8;function ot(i){let t=i.trim();t.startsWith("#")&&(t=t.slice(1));let n=255,o=255,r=255;return t.length===3?(n=parseInt(t[0]+t[0],16),o=parseInt(t[1]+t[1],16),r=parseInt(t[2]+t[2],16)):t.length===6&&(n=parseInt(t.slice(0,2),16),o=parseInt(t.slice(2,4),16),r=parseInt(t.slice(4,6),16)),new oe(n/255,o/255,r/255)}function ti({linesGradient:i,enabledWaves:t=["top","middle","bottom"],lineCount:n=[6],lineDistance:o=[5],topWavePosition:r,middleWavePosition:l,bottomWavePosition:u={x:2,y:-.7,rotate:-1},animationSpeed:d=1,interactive:c=!1,bendRadius:f=5,bendStrength:p=-.5,mouseDamping:C=.05,mixBlendMode:x="screen",amplitude:g=1,rainbow:h=!1}){const b=a.useRef(null),L=a.useRef(null),O=a.useRef(null),T=a.useRef(new be(-1e3,-1e3)),X=a.useRef(new be(-1e3,-1e3)),I=a.useRef(0),U=a.useRef(0),v=a.useRef(h),A=a.useRef(c);a.useEffect(()=>{A.current=c},[c]),a.useEffect(()=>{v.current=h},[h]);const S=k=>{if(typeof n=="number")return n;if(!t.includes(k))return 0;const G=t.indexOf(k);return n[G]??6},y=k=>{if(typeof o=="number")return o;if(!t.includes(k))return .1;const G=t.indexOf(k);return o[G]??.1},N=t.includes("top")?S("top"):0,j=t.includes("middle")?S("middle"):0,w=t.includes("bottom")?S("bottom"):0,Q=t.includes("top")?y("top")*.01:.01,se=t.includes("middle")?y("middle")*.01:.01,ee=t.includes("bottom")?y("bottom")*.01:.01;return a.useEffect(()=>{if(O.current&&i&&i.length>0&&!h){const k=i.slice(0,Ne);O.current.uniforms.lineGradientCount.value=k.length,k.forEach((G,E)=>{const F=ot(G);O.current.uniforms.lineGradient.value[E].set(F.x,F.y,F.z)})}},[i,h]),a.useEffect(()=>{if(!O.current)return;const k=O.current.uniforms;k.animationSpeed.value=d,k.amplitude.value=g,k.bendRadius.value=f,k.bendStrength.value=p,k.interactive.value=c,k.enableTop.value=t.includes("top"),k.enableMiddle.value=t.includes("middle"),k.enableBottom.value=t.includes("bottom");const G=F=>{if(typeof n=="number")return n;if(!t.includes(F))return 0;const W=t.indexOf(F);return n[W]??6},E=F=>{if(typeof o=="number")return o;if(!t.includes(F))return .1;const W=t.indexOf(F);return o[W]??.1};k.topLineCount.value=t.includes("top")?G("top"):0,k.middleLineCount.value=t.includes("middle")?G("middle"):0,k.bottomLineCount.value=t.includes("bottom")?G("bottom"):0,k.topLineDistance.value=t.includes("top")?E("top")*.01:.01,k.middleLineDistance.value=t.includes("middle")?E("middle")*.01:.01,k.bottomLineDistance.value=t.includes("bottom")?E("bottom")*.01:.01},[d,g,f,p,c,t,n,o]),a.useEffect(()=>{if(!b.current)return;const k=new ze,G=new Ye(-1,1,1,-1,0,1);G.position.z=1;const E=new Te({antialias:!0,alpha:!1});E.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),E.domElement.style.width="100%",E.domElement.style.height="100%",b.current.appendChild(E.domElement),L.current=E;const F={iTime:{value:0},iResolution:{value:new oe(1,1,1)},animationSpeed:{value:d},amplitude:{value:g},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:N},middleLineCount:{value:j},bottomLineCount:{value:w},topLineDistance:{value:Q},middleLineDistance:{value:se},bottomLineDistance:{value:ee},topWavePosition:{value:new oe(r?.x??10,r?.y??.5,r?.rotate??-.4)},middleWavePosition:{value:new oe(l?.x??5,l?.y??0,l?.rotate??.2)},bottomWavePosition:{value:new oe(u?.x??2,u?.y??-.7,u?.rotate??.4)},iMouse:{value:new be(-1e3,-1e3)},interactive:{value:c},bendRadius:{value:f},bendStrength:{value:p},bendInfluence:{value:0},lineGradient:{value:Array.from({length:Ne},()=>new oe(1,1,1))},lineGradientCount:{value:0}};if(i&&i.length>0){const q=i.slice(0,Ne);F.lineGradientCount.value=q.length,q.forEach((K,re)=>{const M=ot(K);F.lineGradient.value[re].set(M.x,M.y,M.z)})}const W=new We({uniforms:F,vertexShader:$n,fragmentShader:ei});O.current=W;const le=new Xe(2,2),de=new Je(le,W);k.add(de);const te=new pt,fe=()=>{const q=b.current,K=q.clientWidth||1,re=q.clientHeight||1;E.setSize(K,re,!1);const M=E.domElement.width,Z=E.domElement.height;F.iResolution.value.set(M,Z,1)};fe();const ue=typeof ResizeObserver<"u"?new ResizeObserver(fe):null;ue&&b.current&&ue.observe(b.current);const xe=q=>{if(!A.current)return;const K=E.domElement.getBoundingClientRect(),re=q.clientX-K.left,M=q.clientY-K.top,Z=E.getPixelRatio();T.current.set(re*Z,(K.height-M)*Z),I.current=1};window.addEventListener("pointermove",xe);let me=0;const D=()=>{if(F.iTime.value=te.getElapsedTime(),A.current&&(X.current.lerp(T.current,C),F.iMouse.value.copy(X.current),U.current+=(I.current-U.current)*C,F.bendInfluence.value=U.current),v.current){const q=te.getElapsedTime();F.lineGradientCount.value<3&&(F.lineGradientCount.value=3);for(let K=0;K<Ne;K++){const re=(q*.1+K*.15)%1,M=new we().setHSL(re,.8,.5);F.lineGradient.value[K].set(M.r,M.g,M.b)}}E.render(k,G),me=requestAnimationFrame(D)};return D(),()=>{cancelAnimationFrame(me),ue&&b.current&&ue.disconnect(),window.removeEventListener("pointermove",xe),le.dispose(),W.dispose(),E.dispose(),E.domElement.parentElement&&E.domElement.parentElement.removeChild(E.domElement)}},[]),e.jsx("div",{ref:b,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:x}})}const ni=({topColor:i="#5227FF",bottomColor:t="#FF9FFC",intensity:n=1,rotationSpeed:o=.3,interactive:r=!1,className:l="",glowAmount:u=.005,pillarWidth:d=3,pillarHeight:c=.4,noiseIntensity:f=.5,mixBlendMode:p="screen",pillarRotation:C=0,quality:x="high"})=>{const g=a.useRef(null),h=a.useRef(null),b=a.useRef(null),L=a.useRef(null),O=a.useRef(null),T=a.useRef(null),X=a.useRef(null),I=a.useRef(new be(0,0)),U=a.useRef(0),[v,A]=a.useState(!0);return a.useEffect(()=>{const S=document.createElement("canvas");S.getContext("webgl")||S.getContext("experimental-webgl")||A(!1)},[]),a.useEffect(()=>{if(!g.current||!v)return;const S=g.current,y=S.clientWidth,N=S.clientHeight,j=new ze;O.current=j;const w=new Ye(-1,1,1,-1,0,1);T.current=w;const Q=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),se=Q||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let ee=x;se&&x==="high"&&(ee="medium"),Q&&x!=="low"&&(ee="low");const k={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},G=k[ee]||k.medium;let E;try{E=new Te({antialias:!1,alpha:!0,powerPreference:ee==="high"?"high-performance":"low-power",precision:G.precision,stencil:!1,depth:!1})}catch{A(!1);return}E.setSize(y,N),E.setPixelRatio(G.pixelRatio),g.current.appendChild(E.domElement),b.current=E;const F=z=>{const P=new we(z);return new oe(P.r,P.g,P.b)},W=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,le=`
      precision ${G.precision} float;

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

      const float STEP_MULT = ${G.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${G.iterations};
      const int WAVE_ITER = ${G.waveIterations};

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
    `,de=C*Math.PI/180,te=Math.sin(.4),fe=Math.cos(.4),ue=new We({vertexShader:W,fragmentShader:le,uniforms:{uTime:{value:0},uResolution:{value:new be(y,N)},uMouse:{value:I.current},uTopColor:{value:F(i)},uBottomColor:{value:F(t)},uIntensity:{value:n},uInteractive:{value:r},uGlowAmount:{value:u},uPillarWidth:{value:d},uPillarHeight:{value:c},uNoiseIntensity:{value:f},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(de)},uPillarRotSin:{value:Math.sin(de)},uWaveSin:{value:te},uWaveCos:{value:fe}},transparent:!0,depthWrite:!1,depthTest:!1});L.current=ue;const xe=new Xe(2,2);X.current=xe;const me=new Je(xe,ue);j.add(me);let D=null;const q=z=>{if(!r||D)return;D=window.setTimeout(()=>{D=null},16);const P=S.getBoundingClientRect(),Y=(z.clientX-P.left)/P.width*2-1,_=-((z.clientY-P.top)/P.height)*2+1;I.current.set(Y,_)};r&&S.addEventListener("mousemove",q,{passive:!0});let K=performance.now();const M=1e3/(ee==="low"?30:60),Z=z=>{if(!L.current||!b.current||!O.current||!T.current)return;const P=z-K;if(P>=M){U.current+=.016*o;const Y=U.current;L.current.uniforms.uTime.value=Y,L.current.uniforms.uRotCos.value=Math.cos(Y*.3),L.current.uniforms.uRotSin.value=Math.sin(Y*.3),b.current.render(O.current,T.current),K=z-P%M}h.current=requestAnimationFrame(Z)};h.current=requestAnimationFrame(Z);let m=null;const R=()=>{m&&clearTimeout(m),m=window.setTimeout(()=>{if(!b.current||!L.current||!g.current)return;const z=g.current.clientWidth,P=g.current.clientHeight;b.current.setSize(z,P),L.current.uniforms.uResolution.value.set(z,P)},150)};return window.addEventListener("resize",R,{passive:!0}),()=>{window.removeEventListener("resize",R),r&&S.removeEventListener("mousemove",q),h.current&&cancelAnimationFrame(h.current),b.current&&(b.current.dispose(),b.current.forceContextLoss(),S.contains(b.current.domElement)&&S.removeChild(b.current.domElement)),L.current&&L.current.dispose(),X.current&&X.current.dispose(),b.current=null,L.current=null,O.current=null,T.current=null,X.current=null,h.current=null}},[i,t,n,o,r,u,d,c,f,C,v,x]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),v?e.jsx("div",{ref:g,className:`light-pillar-container ${l}`,style:{mixBlendMode:p}}):e.jsx("div",{className:`light-pillar-fallback ${l}`,style:{mixBlendMode:p},children:"WebGL not supported"})]})},ii=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,oi=`
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
`;function si({color:i="#ffffff",flakeSize:t=.01,minFlakeSize:n=1.25,pixelResolution:o=200,speed:r=1.25,depthFade:l=8,farPlane:u=20,brightness:d=1,gamma:c=.4545,density:f=.3,variant:p="square",direction:C=125,rainbow:x=!1,storm:g=!1,className:h="",style:b={}}){const L=a.useRef(null),O=a.useRef(0),T=a.useRef(!0),X=a.useRef(null),I=a.useRef(null),U=a.useRef(null),v=a.useMemo(()=>p==="round"?1:p==="snowflake"?2:0,[p]),A=a.useMemo(()=>{const y=new we(i);return new oe(y.r,y.g,y.b)},[i]),S=a.useCallback(()=>{U.current&&clearTimeout(U.current),U.current=window.setTimeout(()=>{const y=L.current,N=X.current,j=I.current;if(!y||!N||!j)return;const w=y.offsetWidth,Q=y.offsetHeight;N.setSize(w,Q),j.uniforms.uResolution.value.set(w,Q)},100)},[]);return a.useEffect(()=>{const y=L.current;if(!y)return;const N=new IntersectionObserver(([j])=>{T.current=j.isIntersecting},{threshold:0});return N.observe(y),()=>N.disconnect()},[]),a.useEffect(()=>{const y=L.current;if(!y)return;const N=new ze,j=new Ye(-1,1,1,-1,0,1),w=new Te({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.setSize(y.offsetWidth,y.offsetHeight),w.setClearColor(0,0),y.appendChild(w.domElement),X.current=w;const Q=new We({vertexShader:ii,fragmentShader:oi,uniforms:{uTime:{value:0},uResolution:{value:new be(y.offsetWidth,y.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:n},uPixelResolution:{value:o},uSpeed:{value:r},uDepthFade:{value:l},uFarPlane:{value:u},uColor:{value:A.clone()},uBrightness:{value:d},uGamma:{value:c},uDensity:{value:f},uVariant:{value:v},uDirection:{value:C*Math.PI/180},uRainbow:{value:x?1:0}},transparent:!0});I.current=Q;const se=new Xe(2,2);N.add(new Je(se,Q)),window.addEventListener("resize",S);const ee=performance.now(),k=()=>{O.current=requestAnimationFrame(k),T.current&&(Q.uniforms.uTime.value=(performance.now()-ee)*.001,w.render(N,j))};return k(),()=>{cancelAnimationFrame(O.current),window.removeEventListener("resize",S),U.current&&clearTimeout(U.current),y.contains(w.domElement)&&y.removeChild(w.domElement),w.dispose(),se.dispose(),Q.dispose(),X.current=null,I.current=null}},[S]),a.useEffect(()=>{const y=I.current;y&&(y.uniforms.uFlakeSize.value=t,y.uniforms.uMinFlakeSize.value=n,y.uniforms.uPixelResolution.value=o,y.uniforms.uSpeed.value=g?r*4:r,y.uniforms.uDepthFade.value=l,y.uniforms.uFarPlane.value=u,y.uniforms.uBrightness.value=d,y.uniforms.uGamma.value=c,y.uniforms.uDensity.value=f,y.uniforms.uVariant.value=v,y.uniforms.uDirection.value=C*Math.PI/180,y.uniforms.uColor.value.copy(A),y.uniforms.uRainbow.value=x?1:0)},[t,n,o,r,l,u,d,c,f,v,C,A,x,g]),e.jsx("div",{ref:L,className:`pixel-snow-container ${h}`,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",contain:"layout style paint",...b}})}const ai=({floatingLinesConfig:i,lightPillarsConfig:t,ballpitConfig:n,silkConfig:o,galaxyConfig:r,gradientConfig:l,pixelSnowConfig:u})=>{const{activeBackground:d,floatingLinesConfig:c,lightPillarsConfig:f,ballpitConfig:p,silkConfig:C,galaxyConfig:x,gradientConfig:g,pixelSnowConfig:h}=Re(),b=i||c,L=t||f,O=n||p,T=o||C,X=r||x,I=l||g,U=u||h,v=b||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},A=L||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},S=O||{colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1,rainbow:!1},y=T||{color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},N=X||{density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},j=I||{color1:"#b117f8",color2:"#2c0b2e",speed:20},w=U||{color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,variant:"snowflake",rainbow:!1,storm:!1};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(he,{mode:"wait",children:[d==="gradient"&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(Tn,{color1:j.color1,color2:j.color2,speed:j.speed})},"gradient"),d==="galaxy"&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(Bn,{density:N.density,glowIntensity:N.glowIntensity,saturation:N.saturation,hueShift:N.hueShift,twinkleIntensity:N.twinkleIntensity,rotationSpeed:N.rotationSpeed,starSpeed:N.starSpeed,speed:N.speed,rainbow:N.rainbow,warp:N.warp})},"galaxy"),d==="silk"&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(yt,{speed:y.speed,scale:y.scale,color:y.color,noiseIntensity:y.noiseIntensity,rotation:y.rotation})},"silk"),d==="ballpit"&&e.jsxs(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:[" ",e.jsx(Zn,{count:S.count,gravity:S.gravity,friction:S.friction,wallBounce:S.wallBounce,followCursor:S.followCursor,colors:S.colors,enableExplosion:S.enableExplosion,rainbow:S.rainbow})]},"ballpit"),d==="floatinglines"&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(ti,{linesGradient:v.colors,lineCount:v.count,lineDistance:v.distance,animationSpeed:.5,bendRadius:v.bendRadius,bendStrength:v.bendStrength,enabledWaves:v.enabledWaves,interactive:v.interactive??!1,parallax:v.parallax??!1,amplitude:v.amplitude??1,rainbow:v.rainbow})},"floatinglines"),d==="lightpillars"&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(ni,{topColor:A.topColor,bottomColor:A.bottomColor,intensity:A.intensity,rotationSpeed:A.rotationSpeed,glowAmount:A.glowAmount??.002,pillarWidth:A.pillarWidth,pillarHeight:A.pillarHeight,noiseIntensity:A.noiseIntensity,pillarRotation:A.pillarRotation,interactive:A.interactive??!0,quality:A.quality??"high"})},"lightpillars"),d==="pixelsnow"&&e.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(si,{color:w.color,flakeSize:w.flakeSize,minFlakeSize:w.minFlakeSize,pixelResolution:w.pixelResolution,speed:w.speed,density:w.density,direction:w.direction,brightness:w.brightness,variant:w.variant,rainbow:w.rainbow,storm:w.storm})},"pixelsnow")]})})},ri=({onItemClick:i,isOpen:t,onToggle:n,position:o="left",colors:r=["#B19EEF","#5227FF"],items:l=[],socialItems:u=[],displaySocials:d=!0,displayItemNumbering:c=!0,className:f,logoUrl:p=null,menuButtonColor:C="#fff",openMenuButtonColor:x="#000",accentColor:g="#5227FF",changeMenuColorOnOpen:h=!0,isFixed:b=!1,closeOnClickAway:L=!0,onMenuOpen:O,onMenuClose:T})=>{const[X,I]=a.useState(!1),U=typeof t=="boolean",v=U?t:X,A=a.useRef(!1),S=a.useRef(null),y=a.useRef(null),N=a.useRef([]),j=a.useRef(null),w=a.useRef(null),Q=a.useRef(null),se=a.useRef(null),ee=a.useRef(null),[k,G]=a.useState(["Menu","Close"]),E=a.useRef(null),F=a.useRef(null),W=a.useRef(null),le=a.useRef(null),de=a.useRef(null),te=a.useRef(null),fe=a.useRef(!1),ue=a.useRef(null);a.useLayoutEffect(()=>{const m=V.context(()=>{const R=S.current,z=y.current,P=j.current,Y=w.current,_=Q.current,J=se.current;if(!R||!P||!Y||!_||!J)return;let ae=[];z&&(ae=Array.from(z.querySelectorAll(".sm-prelayer"))),N.current=ae;const ce=o==="left"?-100:100;V.set([R,...ae],{xPercent:ce}),V.set(P,{transformOrigin:"50% 50%",rotate:0}),V.set(Y,{transformOrigin:"50% 50%",rotate:90}),V.set(_,{rotate:0,transformOrigin:"50% 50%"}),V.set(J,{yPercent:0}),te.current&&V.set(te.current,{color:C})});return()=>m.revert()},[C,o]);const xe=a.useCallback(()=>{const m=S.current,R=N.current;if(!m)return null;E.current?.kill(),F.current&&(F.current.kill(),F.current=null),ue.current?.kill();const z=Array.from(m.querySelectorAll(".sm-panel-itemLabel")),P=Array.from(m.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),Y=m.querySelector(".sm-socials-title"),_=Array.from(m.querySelectorAll(".sm-socials-link")),J=R.map(s=>({el:s,start:Number(V.getProperty(s,"xPercent"))})),ae=Number(V.getProperty(m,"xPercent"));z.length&&V.set(z,{yPercent:140,rotate:10}),P.length&&V.set(P,{"--sm-num-opacity":0}),Y&&V.set(Y,{opacity:0}),_.length&&V.set(_,{y:25,opacity:0});const ce=V.timeline({paused:!0});J.forEach((s,B)=>{ce.fromTo(s.el,{xPercent:s.start},{xPercent:0,duration:.8,ease:"power4.out"},B*.07)});const pe=(J.length?(J.length-1)*.07:0)+(J.length?.08:0),Ae=1;if(ce.fromTo(m,{xPercent:ae},{xPercent:0,duration:Ae,ease:"power4.out"},pe),z.length){const B=pe+Ae*.15;ce.to(z,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},B),P.length&&ce.to(P,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},B+.1)}if(Y||_.length){const s=pe+Ae*.4;Y&&ce.to(Y,{opacity:1,duration:.5,ease:"power2.out"},s),_.length&&ce.to(_,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{V.set(_,{clearProps:"opacity"})}},s+.04)}return E.current=ce,ce},[]),me=a.useCallback(()=>{if(fe.current)return;fe.current=!0;const m=xe();m?(m.eventCallback("onComplete",()=>{fe.current=!1}),m.play(0)):fe.current=!1},[xe]),D=a.useCallback(()=>{E.current?.kill(),E.current=null,ue.current?.kill();const m=S.current,R=N.current;if(!m)return;const z=[...R,m];F.current?.kill();const P=o==="left"?-100:100;F.current=V.to(z,{xPercent:P,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const Y=Array.from(m.querySelectorAll(".sm-panel-itemLabel"));Y.length&&V.set(Y,{yPercent:140,rotate:10});const _=Array.from(m.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));_.length&&V.set(_,{"--sm-num-opacity":0});const J=m.querySelector(".sm-socials-title"),ae=Array.from(m.querySelectorAll(".sm-socials-link"));J&&V.set(J,{opacity:0}),ae.length&&V.set(ae,{y:25,opacity:0}),fe.current=!1}})},[o]),q=a.useCallback(m=>{const R=Q.current;R&&(W.current?.kill(),m?W.current=V.to(R,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):W.current=V.to(R,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),K=a.useCallback(m=>{const R=te.current;if(R)if(de.current?.kill(),h){const z=m?x:C;de.current=V.to(R,{color:z,delay:.18,duration:.3,ease:"power2.out"})}else V.set(R,{color:C})},[x,C,h]);Fe.useEffect(()=>{if(te.current)if(h){const m=A.current?x:C;V.set(te.current,{color:m})}else V.set(te.current,{color:C})},[h,C,x]);const re=a.useCallback(m=>{const R=se.current;if(!R)return;le.current?.kill();const z=m?"Menu":"Close",P=m?"Close":"Menu",Y=3,_=[z];let J=z;for(let $=0;$<Y;$++)J=J==="Menu"?"Close":"Menu",_.push(J);J!==P&&_.push(P),_.push(P),G(_),V.set(R,{yPercent:0});const ae=_.length,ce=(ae-1)/ae*100;le.current=V.to(R,{yPercent:-ce,duration:.5+ae*.07,ease:"power4.out"})},[]),M=a.useCallback(()=>{if(U)n&&n(!v);else{const m=!A.current;A.current=m,I(m),m?(O?.(),me()):(T?.(),D()),q(m),K(m),re(m)}},[U,t,n,v,me,D,q,K,re,O,T]);Fe.useEffect(()=>{U&&(A.current=t,t?(O?.(),me()):(T?.(),D()),q(t),K(t),re(t))},[t,U,me,D,q,K,re,O,T]);const Z=a.useCallback(()=>{U?v&&n&&n(!1):A.current&&(A.current=!1,I(!1),T?.(),D(),q(!1),K(!1),re(!1))},[U,v,n,D,q,K,re,T]);return Fe.useEffect(()=>{if(!L||!v)return;const m=R=>{const z=S.current&&S.current.contains(R.target),P=te.current&&te.current.contains(R.target),Y=R.target.closest(".shop-overlay");!z&&!P&&!Y&&Z()};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[L,v,Z]),e.jsxs("div",{className:(f?f+" ":"")+"staggered-menu-wrapper"+(b?" fixed-wrapper":""),style:g?{"--sm-accent":g}:void 0,"data-position":o,"data-open":v||void 0,children:[e.jsx("div",{ref:y,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let R=[...r&&r.length?r.slice(0,4):["#1e1e22","#35353c"]];if(R.length>=3){const z=Math.floor(R.length/2);R.splice(z,1)}return R.map((z,P)=>e.jsx("div",{className:"sm-prelayer",style:{background:z}},P))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:p?e.jsx("img",{src:p,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:te,className:"sm-toggle","aria-label":v?"Close menu":"Open menu","aria-expanded":v,"aria-controls":"staggered-menu-panel",onClick:M,type:"button",children:[e.jsx("span",{ref:ee,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:se,className:"sm-toggle-textInner",children:k.map((m,R)=>e.jsx("span",{className:"sm-toggle-line",children:m},R))})}),e.jsxs("span",{ref:Q,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:j,className:"sm-icon-line"}),e.jsx("span",{ref:w,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:S,className:"staggered-menu-panel","aria-hidden":!v,children:e.jsxs("div",{className:"sm-panel-inner",children:[e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":c||void 0,children:l&&l.length?l.map((m,R)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:z=>{z.preventDefault(),i&&i(m.id)},"aria-label":m.ariaLabel,"data-index":R+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:m.label})})},m.label+R)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})}),d&&u&&u.length>0&&e.jsxs("div",{className:"sm-socials","aria-label":"Social links",children:[e.jsx("h3",{className:"sm-socials-title",children:"Extras"}),e.jsx("ul",{className:"sm-socials-list",role:"list",children:u.map((m,R)=>e.jsx("li",{className:"sm-socials-item",children:e.jsx("a",{href:m.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link",children:m.label})},m.label+R))})]})]})})]})},bt=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],st={colors:bt[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},li=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],at={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},rt={colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1},lt={color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},ct={density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},ut={color1:"#b117f8",color2:"#2c0b2e",speed:20},dt={color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,depthFade:3,farPlane:10,gamma:.4545,variant:"snowflake",rainbow:!1,storm:!1},ci=({onClose:i,floatingLinesConfig:t,setFloatingLinesConfig:n,lightPillarsConfig:o,setLightPillarsConfig:r,ballpitConfig:l,setBallpitConfig:u,silkConfig:d,setSilkConfig:c,galaxyConfig:f,setGalaxyConfig:p,gradientConfig:C,setGradientConfig:x,pixelSnowConfig:g,setPixelSnowConfig:h})=>{const{activeBackground:b,floatingLinesConfig:L,setFloatingLinesConfig:O,lightPillarsConfig:T,setLightPillarsConfig:X,ballpitConfig:I,setBallpitConfig:U,silkConfig:v,setSilkConfig:A,galaxyConfig:S,setGalaxyConfig:y,gradientConfig:N,setGradientConfig:j,pixelSnowConfig:w,setPixelSnowConfig:Q}=Re(),se=t||L,ee=n||O,k=o||T,G=r||X,E=l||I,F=u||U,W=d||v,le=c||A,de=f||S,te=p||y,fe=C||N,ue=x||j,xe=g||w,me=h||Q,D=se||st,q=(s,B)=>{ee&&ee({...D,[s]:B})},K=s=>{const B=D.enabledWaves,ge=B.includes(s)?B.filter(kt=>kt!==s):[...B,s];q("enabledWaves",ge)},re=(s,B)=>{const ge=[...D.colors];ge[s]=B,q("colors",ge)},M=k||at,Z=(s,B)=>{G?G({...M,[s]:B}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},m=E||rt,R=(s,B)=>{F&&F({...m,[s]:B})},z=(s,B)=>{const ge=[...m.colors];ge[s]=B,R("colors",ge)},P=W||lt,Y=(s,B)=>{le&&le({...P,[s]:B})},_=de||ct,J=(s,B)=>{te&&te({..._,[s]:B})},ae=fe||ut,ce=(s,B)=>{ue&&ue({...ae,[s]:B})},$=xe||dt,pe=(s,B)=>{me&&me({...$,[s]:B})},Ae=()=>{b==="floatinglines"&&ee?ee(st):b==="lightpillars"&&G?G(at):b==="ballpit"&&F?F(rt):b==="silk"&&le?le(lt):b==="galaxy"&&te?te(ct):b==="gradient"&&ue?ue(ut):b==="pixelsnow"&&me&&me(dt)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:Ae,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(Yt,{})}),e.jsx("button",{onClick:i,className:"close-btn",children:e.jsx(ht,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[b==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:bt.map(s=>e.jsx("button",{className:"preset-btn",onClick:()=>q("colors",s.colors),style:{background:`linear-gradient(to right, ${s.colors[0]}, ${s.colors[1]}, ${s.colors[2]})`},title:s.name,children:JSON.stringify(D.colors)===JSON.stringify(s.colors)&&e.jsx(gt,{})},s.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:D.colors.map((s,B)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:s,onChange:ge=>re(B,ge.target.value)}),e.jsx("span",{className:"hex-code",children:s})]},B))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:D.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:D.count,onChange:s=>q("count",parseInt(s.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:D.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:D.distance,onChange:s=>q("distance",parseInt(s.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Amplitud de Onda ",e.jsx("span",{children:D.amplitude})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:D.amplitude||1,onChange:s=>q("amplitude",parseFloat(s.target.value))}),e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:D.bendRadius})]}),e.jsx("input",{type:"range",min:"5",max:"10",step:"0.1",value:D.bendRadius,onChange:s=>q("bendRadius",parseFloat(s.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:D.bendStrength})]}),e.jsx("input",{type:"range",min:"-7",max:"7",step:"0.1",value:D.bendStrength,onChange:s=>q("bendStrength",parseFloat(s.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(s=>e.jsx("button",{className:`toggle-btn ${D.enabledWaves.includes(s)?"active":""}`,onClick:()=>K(s),children:s.charAt(0).toUpperCase()+s.slice(1)},s))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${D.interactive!==!1?"active":""}`,onClick:()=>q("interactive",D.interactive===!1),style:{width:"100%",textAlign:"center"},children:D.interactive!==!1?"Activada (Ratón)":"Desactivada"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${D.rainbow?"active":""}`,onClick:()=>q("rainbow",!D.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"})]})]}),b==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:M.topColor,onChange:s=>Z("topColor",s.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:M.bottomColor,onChange:s=>Z("bottomColor",s.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:M.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:M.intensity,onChange:s=>Z("intensity",parseFloat(s.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:M.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:M.rotationSpeed,onChange:s=>Z("rotationSpeed",parseFloat(s.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:M.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:M.pillarWidth,onChange:s=>Z("pillarWidth",parseFloat(s.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[M.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:M.pillarRotation,onChange:s=>Z("pillarRotation",parseInt(s.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:M.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:M.pillarHeight,onChange:s=>Z("pillarHeight",parseFloat(s.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:M.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:M.noiseIntensity,onChange:s=>Z("noiseIntensity",parseFloat(s.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:M.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:M.glowAmount,onChange:s=>Z("glowAmount",parseFloat(s.target.value))})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"toggles-row",children:li.map(s=>e.jsx("button",{className:`toggle-btn ${M.quality===s.value?"active":""}`,onClick:()=>Z("quality",s.value),children:s.label},s.value))})}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${M.interactive!==!1?"active":""}`,onClick:()=>Z("interactive",M.interactive===!1),style:{width:"100%",textAlign:"center"},children:M.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),b==="ballpit"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsx("div",{className:"color-pickers",children:m.colors.map((s,B)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:s,onChange:ge=>z(B,ge.target.value)}),e.jsx("span",{className:"hex-code",children:s})]},B))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad ",e.jsx("span",{children:m.count})]}),e.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:m.count,onChange:s=>R("count",parseInt(s.target.value))}),e.jsxs("label",{children:["Gravedad ",e.jsx("span",{children:m.gravity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:m.gravity,onChange:s=>R("gravity",parseFloat(s.target.value))}),e.jsxs("label",{children:["Fricción ",e.jsx("span",{children:m.friction})]}),e.jsx("input",{type:"range",min:"0.8",max:"1",step:"0.001",value:m.friction,onChange:s=>R("friction",parseFloat(s.target.value))}),e.jsxs("label",{children:["Rebote Pared ",e.jsx("span",{children:m.wallBounce})]}),e.jsx("input",{type:"range",min:"0",max:"1.5",step:"0.05",value:m.wallBounce,onChange:s=>R("wallBounce",parseFloat(s.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${m.followCursor?"active":""}`,onClick:()=>R("followCursor",!m.followCursor),style:{width:"100%",textAlign:"center"},children:m.followCursor?"Seguir Cursor":"Cursor Libre"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Eventos Divertidos"}),e.jsxs("div",{className:"toggles-row",children:[e.jsx("button",{className:`toggle-btn ${m.enableExplosion?"active":""}`,onClick:()=>R("enableExplosion",!m.enableExplosion),title:"Haz clic para explotar las bolas",children:"💥 Explosión al Clic"}),e.jsx("button",{className:`toggle-btn ${m.rainbow?"active":""}`,onClick:()=>R("rainbow",!m.rainbow),title:"Ciclo de colores automático",children:"🌈 Modo Arcoíris"})]})]})]}),b==="silk"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:P.color,onChange:s=>Y("color",s.target.value)}),e.jsx("span",{className:"hex-code",children:P.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:P.speed})]}),e.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:P.speed,onChange:s=>Y("speed",parseFloat(s.target.value))}),e.jsxs("label",{children:["Escala ",e.jsx("span",{children:P.scale})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:P.scale,onChange:s=>Y("scale",parseFloat(s.target.value))}),e.jsxs("label",{children:["Ruido ",e.jsx("span",{children:P.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:P.noiseIntensity,onChange:s=>Y("noiseIntensity",parseFloat(s.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[P.rotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:P.rotation,onChange:s=>Y("rotation",parseInt(s.target.value))})]})]}),b==="galaxy"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:_.density})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:_.density,onChange:s=>J("density",parseFloat(s.target.value))}),e.jsxs("label",{children:["Intensidad Brillo ",e.jsx("span",{children:_.glowIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:_.glowIntensity,onChange:s=>J("glowIntensity",parseFloat(s.target.value))}),e.jsxs("label",{children:["Saturación ",e.jsx("span",{children:_.saturation})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:_.saturation,onChange:s=>J("saturation",parseFloat(s.target.value))}),e.jsxs("label",{children:["Cambio de Tono (Hue) ",e.jsx("span",{children:_.hueShift})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:_.hueShift,onChange:s=>J("hueShift",parseFloat(s.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad Rotación ",e.jsx("span",{children:_.rotationSpeed})]}),e.jsx("input",{type:"range",min:"-0.5",max:"0.5",step:"0.01",value:_.rotationSpeed,onChange:s=>J("rotationSpeed",parseFloat(s.target.value))}),e.jsxs("label",{children:["Velocidad Estrellas ",e.jsx("span",{children:_.starSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:_.starSpeed,onChange:s=>J("starSpeed",parseFloat(s.target.value))}),e.jsxs("label",{children:["Velocidad Animación ",e.jsx("span",{children:_.speed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:_.speed,onChange:s=>J("speed",parseFloat(s.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${_.rainbow?"active":""}`,onClick:()=>J("rainbow",!_.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${_.warp?"active":""}`,onClick:()=>J("warp",!_.warp),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🚀 Velocidad Warp"})]})]}),b==="gradient"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:ae.color1,onChange:s=>ce("color1",s.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:ae.color2,onChange:s=>ce("color2",s.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad (segundos) ",e.jsxs("span",{children:[ae.speed,"s"]})]}),e.jsx("input",{type:"range",min:"1",max:"60",step:"1",value:ae.speed,onChange:s=>ce("speed",parseInt(s.target.value))})]})]}),b==="pixelsnow"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:$.color,onChange:s=>pe("color",s.target.value)}),e.jsx("span",{className:"hex-code",children:$.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Variante"}),e.jsx("div",{className:"toggles-row",children:["snowflake","square","round"].map(s=>e.jsx("button",{className:`toggle-btn ${$.variant===s?"active":""}`,onClick:()=>pe("variant",s),children:s.charAt(0).toUpperCase()+s.slice(1)},s))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:$.speed})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:$.speed,onChange:s=>pe("speed",parseFloat(s.target.value))}),e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:$.density})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:$.density,onChange:s=>pe("density",parseFloat(s.target.value))}),e.jsxs("label",{children:["Dirección ",e.jsxs("span",{children:[$.direction,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:$.direction,onChange:s=>pe("direction",parseInt(s.target.value))}),e.jsxs("label",{children:["Tamaño Copo ",e.jsx("span",{children:$.flakeSize})]}),e.jsx("input",{type:"range",min:"0.005",max:"0.05",step:"0.001",value:$.flakeSize,onChange:s=>pe("flakeSize",parseFloat(s.target.value))}),e.jsxs("label",{children:["Brillo ",e.jsx("span",{children:$.brightness})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:$.brightness,onChange:s=>pe("brightness",parseFloat(s.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${$.rainbow?"active":""}`,onClick:()=>pe("rainbow",!$.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${$.storm?"active":""}`,onClick:()=>pe("storm",!$.storm),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🌪️ Modo Tormenta"})]})]})]})]})};function ui({children:i,className:t="",onClick:n,mouseX:o,spring:r,distance:l,magnification:u,baseItemSize:d}){const c=a.useRef(null),f=Pe(0),p=Ve(o,g=>{if(!c.current)return 1/0;const h=c.current.getBoundingClientRect(),b=h.x+h.width/2;return Math.abs(g-b)}),C=Ve(p,[0,l],[u,d]),x=Me(C,r);return e.jsx(H.div,{ref:c,style:{width:x,height:x,minWidth:x,minHeight:x},onHoverStart:()=>f.set(1),onHoverEnd:()=>f.set(0),onClick:n,className:`dock-item ${t}`,"aria-haspopup":"true",children:a.Children.map(i,g=>a.cloneElement(g,{isHovered:f}))})}function di({children:i,className:t="",...n}){const{isHovered:o}=n,[r,l]=a.useState(!1);return a.useEffect(()=>{const u=o.on("change",d=>{l(d===1)});return()=>u()},[o]),e.jsx(he,{children:r&&e.jsx(H.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:i})})}function fi({children:i,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:i})}function mi({items:i,className:t="",spring:n={mass:.1,stiffness:300,damping:20},magnification:o=70,distance:r=200,panelHeight:l=68,dockHeight:u=256,baseItemSize:d=50}){const c=Pe(1/0),f=Pe(0),p=a.useMemo(()=>Math.max(u,o+o/2+4),[o,u]),C=Ve(f,[0,1],[l,p]),x=Me(C,n);return e.jsx(H.div,{style:{height:x,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(H.div,{onMouseMove:({pageX:g})=>{f.set(1),c.set(g)},onMouseLeave:()=>{f.set(0),c.set(1/0)},className:`dock-panel ${t}`,style:{height:l},role:"toolbar","aria-label":"Application dock",children:i.map((g,h)=>e.jsxs(ui,{onClick:g.onClick,className:g.className,mouseX:c,spring:n,distance:r,magnification:o,baseItemSize:d,children:[e.jsx(fi,{children:g.icon}),e.jsx(di,{children:g.label})]},h))})})}const Ct=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,wt=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,jt=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,St=""+new URL("duck-BnqypGlP.png",import.meta.url).href,Rt="data:image/png;base64,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",At=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,pi={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico atemporal.",price:"Gratis",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"galaxy",name:"Galaxy",description:"Un viaje a las estrellas.",price:"Gratis",previewColor:"#000"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:"Gratis",previewColor:"#ff99cc"},{id:"ballpit",name:"Ball Pit",description:"Física interactiva y relajante.",price:"Gratis",previewColor:"#29b1ff"},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:"Gratis",previewColor:"#bd71ff"},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:"Gratis",previewColor:"#00ffff"},{id:"pixelsnow",name:"Pixel Snow",description:"Nevada suave y distante.",price:"Gratis",previewColor:"#ffffff"}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:"Gratis",previewColor:"transparent",icon:e.jsx(vt,{})}],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:"Gratis",previewColor:"transparent",icon:e.jsx(Jt,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:"Gratis",previewColor:"#ffadad",icon:e.jsx("img",{src:Ct,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:"Gratis",previewColor:"#a89c8d",icon:e.jsx("img",{src:wt,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:"Gratis",previewColor:"#ffecb6",icon:e.jsx("img",{src:jt,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:"Gratis",previewColor:"#ebe371",icon:e.jsx("img",{src:St,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:"Gratis",previewColor:"#e3e4b2",icon:e.jsx("img",{src:Rt,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:"Gratis",previewColor:"#a3a3a3",icon:e.jsx("img",{src:At,alt:"Skeleton",style:{width:"40px"}})}]},hi=[{id:"backgrounds",label:"Fondos",icon:e.jsx(Wt,{})},{id:"cursors",label:"Cursores",icon:e.jsx(vt,{})},{id:"trails",label:"Mascotas",icon:e.jsx(Xt,{})}],gi=()=>{const{activeShop:i,openShop:t,closeShop:n,activeBackground:o,setBackground:r,activeCursor:l,setCursor:u,activeTrail:d,setTrail:c}=Re(),[f,p]=a.useState(i);a.useEffect(()=>{i&&p(i)},[i]);const C=pi[f]||[],x=h=>{i==="backgrounds"&&r(h),i==="cursors"&&u(h),i==="trails"&&c(h)},g=h=>i==="backgrounds"?o===h:i==="cursors"?l===h:i==="trails"?d===h:!1;return e.jsx(he,{children:i&&e.jsxs(H.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:n,style:{position:"absolute",inset:0}}),e.jsxs(H.div,{className:"shop-window",initial:{scale:.9,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.95,y:10,opacity:0,transition:{duration:.2}},children:[e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:hi.map(h=>e.jsxs("button",{onClick:()=>t(h.id),className:`tab-btn ${i===h.id?"active":""}`,children:[h.icon,e.jsx("span",{children:h.label}),i===h.id&&e.jsx(H.div,{layoutId:"activeTab",className:"active-line"})]},h.id))}),e.jsx("button",{onClick:n,className:"close-btn",children:e.jsx(ht,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",f==="backgrounds"?"Fondos":f==="cursors"?"Cursores":"Mascotas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(he,{mode:"wait",children:e.jsx(H.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:C.map(h=>e.jsxs("div",{className:`shop-item ${g(h.id)?"equipped":""}`,onClick:()=>x(h.id),children:[e.jsxs("div",{className:"item-preview",style:{background:h.previewColor},children:[h.icon&&e.jsx("div",{className:"preview-icon",children:h.icon}),g(h.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(gt,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:h.name}),e.jsx("p",{children:h.description}),e.jsx("span",{className:"price-tag",children:h.price})]})]},h.id))},f)})})]})]})})},vi=()=>{const{activeTrail:i}=Re(),t=Pe(-100),n=Pe(-100),o={damping:25,stiffness:70,mass:1},r=Me(t,o),l=Me(n,o);a.useEffect(()=>{const d=c=>{t.set(c.clientX),n.set(c.clientY)};return window.addEventListener("mousemove",d),()=>window.removeEventListener("mousemove",d)},[t,n]);const u={"apple-cat":Ct,"jump-cat":wt,"rolling-cat":jt,duck:St,pompom:Rt,"skeleton-run":At,ghost:null};return!i||i==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:u[i]?e.jsx(H.img,{src:u[i],alt:"trail",style:{x:r,y:l,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):i==="ghost"?e.jsx(H.div,{style:{x:r,y:l,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},ft=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],xi=({progress:i})=>{const[t,n]=a.useState(0);return a.useEffect(()=>{const o=setInterval(()=>{n(r=>(r+1)%ft.length)},1500);return()=>clearInterval(o)},[]),e.jsxs(H.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[i,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(H.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${i}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(H.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:ft[t]},t)})]})]})},yi=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,bi=Object.freeze(Object.defineProperty({__proto__:null,default:yi},Symbol.toStringTag,{value:"Module"})),Ci=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,wi=Object.freeze(Object.defineProperty({__proto__:null,default:Ci},Symbol.toStringTag,{value:"Module"})),ji=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,Si=Object.freeze(Object.defineProperty({__proto__:null,default:ji},Symbol.toStringTag,{value:"Module"})),Ri=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,Ai=Object.freeze(Object.defineProperty({__proto__:null,default:Ri},Symbol.toStringTag,{value:"Module"})),ki=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,Pi=Object.freeze(Object.defineProperty({__proto__:null,default:ki},Symbol.toStringTag,{value:"Module"})),Li=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,Ii=Object.freeze(Object.defineProperty({__proto__:null,default:Li},Symbol.toStringTag,{value:"Module"})),_i=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,Ei=Object.freeze(Object.defineProperty({__proto__:null,default:_i},Symbol.toStringTag,{value:"Module"})),Ni=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,Fi=Object.freeze(Object.defineProperty({__proto__:null,default:Ni},Symbol.toStringTag,{value:"Module"})),Mi=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,zi=Object.freeze(Object.defineProperty({__proto__:null,default:Mi},Symbol.toStringTag,{value:"Module"})),mt=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":bi,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":wi,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":Si,"../../assets/songs/La cena - Las Petunias.mp3":Ai,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":Pi,"../../assets/songs/Tek It - Cafuné.mp3":Ii,"../../assets/songs/You and I - d4vd .mp3":Ei,"../../assets/songs/gourmet - rickyedit.mp3":Fi,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":zi}),ke=Object.keys(mt).map(i=>({title:i.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,o=>o.toUpperCase()),artist:"Only U Playlist",src:mt[i].default}));ke.length===0&&ke.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const Ti=.1,Di=({visible:i,onClose:t})=>{const n=a.useRef(null),o=a.useRef(null),[r,l]=a.useState(!1),[u,d]=a.useState(0),[c,f]=a.useState(.05),[p,C]=a.useState(!1),[x,g]=a.useState(!1),[h,b]=a.useState(!1),[L,O]=a.useState(0),[T,X]=a.useState(0),I=ke[u];a.useEffect(()=>{n.current&&(n.current.volume=p?0:Math.pow(c,2)*Ti)},[c,p]),a.useEffect(()=>{r&&n.current&&n.current.play().catch(j=>console.log("Autoplay blocked",j))},[u]),a.useEffect(()=>{i||(g(!1),b(!1))},[i]),a.useEffect(()=>{const j=w=>{i&&(o.current&&o.current.contains(w.target)||w.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[i,t]);const U=()=>{n.current&&(O(n.current.currentTime),X(n.current.duration||0))},v=j=>{const w=parseFloat(j.target.value);O(w),n.current&&(n.current.currentTime=w)},A=()=>{r?n.current.pause():n.current.play(),l(!r)},S=()=>{d(j=>(j+1)%ke.length)},y=j=>{d(j),l(!0),b(!1)},N=j=>{if(!j||isNaN(j))return"0:00";const w=Math.floor(j/60),Q=Math.floor(j%60);return`${w}:${Q<10?"0":""}${Q}`};return e.jsxs(H.div,{ref:o,className:"music-player-container",initial:"hidden",animate:i?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:n,src:I.src,onEnded:S,onTimeUpdate:U,onLoadedMetadata:U,preload:"auto"}),e.jsx(he,{children:h&&e.jsx(H.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:ke.map((j,w)=>e.jsxs("div",{className:`playlist-item ${w===u?"active":""}`,onClick:()=>y(w),children:[w+1,". ",j.title]},w))})}),e.jsx("div",{className:"compact-info",onClick:()=>b(!h),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:I.title}),e.jsx(Qt,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:A,children:r?e.jsx(Kt,{size:16}):e.jsx(Zt,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:T,value:L,onChange:v,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[N(L)," / ",N(T)]})]}),e.jsx("button",{className:"icon-btn",onClick:S,children:e.jsx($t,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${x?"active":""}`,onClick:()=>g(!x),children:p||c===0?e.jsx(en,{size:18}):e.jsx(tn,{size:18})}),e.jsx(he,{children:x&&e.jsx(H.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p?0:c,onChange:j=>f(parseFloat(j.target.value))})})})]})]})]})},Oi=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"}],Ui=[{label:"GitHub",link:"https://github.com"},{label:"Instagram",link:"https://instagram.com"}];function Bi(){const{isUnlocked:i,openShop:t,closeShop:n,lockGame:o,activeBackground:r}=Re(),[l,u]=a.useState(!0),[d,c]=a.useState(!1),[f,p]=a.useState(!1),[C,x]=a.useState(!1),[g,h]=a.useState(!1),[b,L]=a.useState(null),[O,T]=a.useState(null),[X,I]=a.useState(null),[U,v]=a.useState(null),[A,S]=a.useState(null),[y,N]=a.useState(null),[j,w]=a.useState(null),Q=W=>{W&&t(W)},se=()=>{f?(p(!1),C&&u(!0)):(h(!1),x(l),u(!1),p(!0))},ee=[{icon:e.jsx(nn,{size:22}),label:"Texto",onClick:()=>u(!l)},{icon:e.jsx(on,{size:22}),label:"Música",onClick:()=>c(!d)},{icon:e.jsx(sn,{size:22}),label:"Juego",onClick:()=>console.log("Toggle Game")},{icon:e.jsx(an,{size:22}),label:"Fondo",onClick:se},{icon:e.jsx(rn,{size:22}),label:"Bloquear",onClick:()=>{o&&(n(),c(!1),L(null),T(null),I(null),v(null),S(null),N(null),w(null),o())}}],[k,G]=a.useState(!0),[E,F]=a.useState(0);return a.useEffect(()=>{const W=setInterval(()=>{F(le=>{const de=le+Math.floor(Math.random()*15)+5;return de>=100?(clearInterval(W),setTimeout(()=>G(!1),200),100):de})},200);return()=>clearInterval(W)},[]),e.jsxs("main",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[e.jsx(he,{mode:"wait",children:k&&e.jsx(xi,{progress:E},"loader")}),e.jsx(he,{children:!i&&e.jsx(H.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(gn,{})},"lock-screen")}),e.jsx(he,{children:i&&e.jsxs(H.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(ai,{floatingLinesConfig:b,lightPillarsConfig:O,ballpitConfig:X,silkConfig:U,galaxyConfig:A,gradientConfig:y,pixelSnowConfig:j}),e.jsx(ri,{isOpen:g,onToggle:W=>{h(W),W&&p(!1)},items:Oi,socialItems:Ui,isFixed:!0,position:"right",onItemClick:Q,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(gi,{}),e.jsx(vi,{}),e.jsx(he,{children:l&&e.jsx(H.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(zn,{})})}),e.jsx(he,{children:f&&["floatinglines","lightpillars","ballpit","silk","galaxy","gradient","pixelsnow"].includes(r)&&e.jsx(H.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(ci,{onClose:se,floatingLinesConfig:b,setFloatingLinesConfig:L,lightPillarsConfig:O,setLightPillarsConfig:T,ballpitConfig:X,setBallpitConfig:I,silkConfig:U,setSilkConfig:v,galaxyConfig:A,setGalaxyConfig:S,gradientConfig:y,setGradientConfig:N,pixelSnowConfig:j,setPixelSnowConfig:w})})})}),e.jsx(Di,{visible:d,onClose:()=>c(!1)}),e.jsx(mi,{items:ee,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}ln.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(Bi,{})}));
