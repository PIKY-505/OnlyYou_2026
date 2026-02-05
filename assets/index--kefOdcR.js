import{c as Ii,j as e,r as a,u as zi,C as Fe,a as Ni,F as Ui,R as mt,b as Lt,d as Oi,e as Bi,f as qi,g as Gi,h as Wi,i as di,k as Yi,l as Xi,m as fi,n as mi,o as B,p as Hi,q as Vi,s as Ji,t as Tt,v as Ki,w as Qi,x as hi,y as ht,z as pi,A as $i,B as Zi,D as en,O as tn,E as nn,G as on,P as sn,V as te,H as kt,I as gi,S as ot,W as st,J as rn,M as Pt,K as Ce,L as an,N as ln,Q as cn,T as un,U as dn,X as fn,Y as mn,Z as De,_ as Ft,$ as Ke,a0 as tt,a1 as Qe,a2 as hn,a3 as qt,a4 as pn,a5 as gn,a6 as vn,a7 as Gt,a8 as xn,a9 as Ze,aa as yn,ab as bn,ac as Wt,ad as wn,ae as Sn,af as Yt,ag as He,ah as Cn,ai as Rn,aj as jn,ak as An,al as Ln,am as vi,an as Pn,ao as En,ap as Tn,aq as kn,ar as Fn,as as Mn,at as _n,au as Dn,av as In,aw as zn,ax as Nn}from"./vendor-DYO69fHc.js";import{A as Pe,m as ce,u as it,a as Et,b as pt}from"./framer-motion-D78Z-W6w.js";import{R as Un,T as On,P as Bn,C as Xt,M as qn}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))r(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const w of f.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&r(w)}).observe(document,{childList:!0,subtree:!0});function i(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(d){if(d.ep)return;d.ep=!0;const f=i(d);fetch(d.href,f)}})();const Ue=Ii(o=>({isUnlocked:!1,unlockApp:()=>o({isUnlocked:!0}),lockGame:()=>o({isUnlocked:!1}),activeShop:null,openShop:t=>o({activeShop:t}),closeShop:()=>o({activeShop:null}),isGameActive:!1,toggleGame:()=>o(t=>({isGameActive:!t.isGameActive})),coins:0,addCoins:t=>o(i=>({coins:i.coins+t})),gameVolume:.4,setGameVolume:t=>o({gameVolume:t}),activeCoinSkin:"dase",setCoinSkin:t=>o({activeCoinSkin:t}),ownedItems:["gradient","default","none","dase"],buyItem:t=>o(i=>i.ownedItems.includes(t.id)?i:i.coins>=t.price?{coins:i.coins-t.price,ownedItems:[...i.ownedItems,t.id]}:i),achievements:[],notification:null,unlockAchievement:t=>o(i=>i.achievements.includes(t)?i:{achievements:[...i.achievements,t],notification:{type:"achievement",id:t}}),clearNotification:()=>o({notification:null}),resetProgress:()=>o({coins:0,ownedItems:["gradient","default","none","dase"],activeBackground:"gradient",activeCursor:"default",activeTrail:"none",activeCoinSkin:"dase",achievements:[],isGameActive:!1}),activeBackground:"gradient",setBackground:t=>o({activeBackground:t}),activeCursor:"default",setCursor:t=>o({activeCursor:t}),activeTrail:"none",setTrail:t=>o({activeTrail:t})})),Gn=({text:o,disabled:t=!1,speed:i=3,className:r="",color:d="#7c7c7c",shineColor:f="#ffffff",direction:w="right"})=>e.jsx("div",{className:`shiny-text ${w} ${t?"disabled":""} ${r}`,style:{"--shiny-speed":`${i}s`,"--base-color":d,"--shine-color":f},children:o}),Ht=o=>(o=o.replace("#",""),[parseInt(o.slice(0,2),16)/255,parseInt(o.slice(2,4),16)/255,parseInt(o.slice(4,6),16)/255]),Wn=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,Yn=`
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
`,xi=a.forwardRef(function({uniforms:t},i){return zi((r,d)=>{i.current.material.uniforms.uTime.value+=.1*d}),e.jsxs("mesh",{ref:i,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:Wn,fragmentShader:Yn})]})});xi.displayName="SilkPlane";const yi=({speed:o=1,scale:t=2,color:i="#ff99cc",noiseIntensity:r=.5,rotation:d=0})=>{const f=a.useRef(),w=a.useMemo(()=>({uSpeed:{value:o},uScale:{value:t},uNoiseIntensity:{value:r},uColor:{value:new Fe(...Ht(i))},uRotation:{value:d},uTime:{value:0}}),[]);return a.useEffect(()=>{if(f.current){const S=f.current.material.uniforms;S.uSpeed.value=o,S.uScale.value=t,S.uNoiseIntensity.value=r,S.uColor.value.set(...Ht(i)),S.uRotation.value=d}},[o,t,r,i,d]),a.useEffect(()=>{const m=setInterval(()=>window.dispatchEvent(new Event("resize")),50),A=setTimeout(()=>clearInterval(m),1200);return()=>{clearInterval(m),clearTimeout(A)}},[]),e.jsx(Ni,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(xi,{ref:f,uniforms:w})})},Xn=()=>{const[o,t]=a.useState(""),[i,r]=a.useState(!1),d=Ue(m=>m.unlockApp),f="230824",w=m=>{const A=m.target.value.replace(/\D/g,"");if(A.length>6)return;let R=A;A.length>2&&(R=A.slice(0,2)+"/"+A.slice(2)),A.length>4&&(R=R.slice(0,5)+"/"+A.slice(4)),t(R),r(!1)},S=m=>{m.preventDefault(),o.replace(/\//g,"")===f?d():(r(!0),setTimeout(()=>r(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(yi,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(Gn,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:S,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:o,onChange:w,className:i?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(Ui,{size:20})})]})]})]})},Hn=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,Vn=Object.freeze(Object.defineProperty({__proto__:null,default:Hn},Symbol.toStringTag,{value:"Module"})),Jn=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,Kn=Object.freeze(Object.defineProperty({__proto__:null,default:Jn},Symbol.toStringTag,{value:"Module"})),Qn=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,$n=Object.freeze(Object.defineProperty({__proto__:null,default:Qn},Symbol.toStringTag,{value:"Module"})),Zn=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,eo=Object.freeze(Object.defineProperty({__proto__:null,default:Zn},Symbol.toStringTag,{value:"Module"})),to=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,io=Object.freeze(Object.defineProperty({__proto__:null,default:to},Symbol.toStringTag,{value:"Module"})),no=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,oo=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"})),so=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,ro=Object.freeze(Object.defineProperty({__proto__:null,default:so},Symbol.toStringTag,{value:"Module"})),ao=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,lo=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),co=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,uo=Object.freeze(Object.defineProperty({__proto__:null,default:co},Symbol.toStringTag,{value:"Module"})),ze=o=>mt.createElement(o),nt={baby_steps:{title:"El Primer Paso",desc:"Recoge tu primera moneda, pobre.",icon:ze(mi)},on_fire:{title:"Dedos de Fuego",desc:"Alcanza un combo x5.",icon:ze(fi)},god_mode:{title:"Modo Dios",desc:"Mantén un combo x10.",icon:ze(Xi)},shiny_lover:{title:"Shiny Spotter",desc:"Atrapa una moneda especial.",icon:ze(Yi)},sniper:{title:"Francotirador",desc:"Caza una moneda a máxima velocidad (>15).",icon:ze(di)},piggy_bank:{title:"Algo es algo",desc:"Acumula 500 monedas. Para un kebab da.",icon:ze(Wi)},stonks:{title:"Lobo de Wall Street",desc:"Consigue 1000 monedas.",icon:ze(Gi)},crypto_king:{title:"Cripto Magnate",desc:"Llega a 5000 monedas.",icon:ze(qi)},collector:{title:"Coleccionista",desc:"Compra todos los objetos de la tienda.",icon:ze(Bi)},matrix_master:{title:"El Elegido",desc:"Descubre el código secreto de administrador.",icon:ze(Oi)},prestige:{title:"Prestigio",desc:"Consigue todos los logros.",icon:ze(Lt)}},fo=({targetSelector:o=".cursor-target",spinDuration:t=2,hideDefaultCursor:i=!0,hoverDuration:r=.2,parallaxOn:d=!0})=>{const f=a.useRef(null),w=a.useRef(null),S=a.useRef(null),m=a.useRef(null),A=a.useRef(!1),R=a.useRef(null),L=a.useRef(null),C=a.useRef(0),b=a.useMemo(()=>{const E="ontouchstart"in window||navigator.maxTouchPoints>0,I=window.innerWidth<=768,O=navigator.userAgent||navigator.vendor||window.opera,g=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(O.toLowerCase());return E&&I||g},[]),_=a.useMemo(()=>({borderWidth:3,cornerSize:12}),[]),z=a.useCallback((E,I)=>{f.current&&B.to(f.current,{x:E,y:I,duration:.1,ease:"power3.out"})},[]);return a.useEffect(()=>{if(b||!f.current)return;const E=document.body.style.cursor;i&&(document.body.style.cursor="none");const I=f.current;w.current=I.querySelectorAll(".target-cursor-corner");let O=null,q=null,g=null;const n=D=>{q&&D.removeEventListener("mouseleave",q),q=null};B.set(I,{xPercent:-50,yPercent:-50,x:window.innerWidth/2,y:window.innerHeight/2}),S.current&&S.current.kill(),S.current=B.timeline({repeat:-1}).to(I,{rotation:"+=360",duration:t,ease:"none"});const H=()=>{if(!R.current||!f.current||!w.current)return;const D=C.current;if(D===0)return;if(O){if(!O.isConnected){q&&q();return}const y=O.getBoundingClientRect(),{borderWidth:v,cornerSize:P}=_;R.current=[{x:y.left-v,y:y.top-v},{x:y.right+v-P,y:y.top-v},{x:y.right+v-P,y:y.bottom+v-P},{x:y.left-v,y:y.bottom+v-P}]}const j=B.getProperty(f.current,"x"),l=B.getProperty(f.current,"y");Array.from(w.current).forEach((y,v)=>{const P=B.getProperty(y,"x"),G=B.getProperty(y,"y"),V=R.current[v].x-j,ie=R.current[v].y-l,W=P+(V-P)*D,le=G+(ie-G)*D,ne=D>=.99?d?.2:0:.05;B.to(y,{x:W,y:le,duration:ne,ease:ne===0?"none":"power1.out",overwrite:"auto"})})};L.current=H;const Y=D=>z(D.clientX,D.clientY);window.addEventListener("mousemove",Y);const M=()=>{if(!O||!f.current)return;const D=B.getProperty(f.current,"x"),j=B.getProperty(f.current,"y"),l=document.elementFromPoint(D,j);l&&(l===O||l.closest(o)===O)||q&&q()};window.addEventListener("scroll",M,{passive:!0});const K=()=>{m.current&&(B.to(m.current,{scale:.7,duration:.3}),B.to(f.current,{scale:.9,duration:.2}))},p=()=>{m.current&&(B.to(m.current,{scale:1,duration:.3}),B.to(f.current,{scale:1,duration:.2}))};window.addEventListener("mousedown",K),window.addEventListener("mouseup",p);const N=D=>{const j=D.target,l=[];let u=j;for(;u&&u!==document.body;)u.matches(o)&&l.push(u),u=u.parentElement;const y=l[0]||null;if(!y||!f.current||!w.current||O===y)return;O&&n(O),g&&(clearTimeout(g),g=null),O=y;const v=Array.from(w.current);v.forEach(ne=>B.killTweensOf(ne)),B.killTweensOf(f.current,"rotation"),S.current?.pause(),B.set(f.current,{rotation:0});const P=y.getBoundingClientRect(),{borderWidth:G,cornerSize:V}=_,ie=B.getProperty(f.current,"x"),W=B.getProperty(f.current,"y");R.current=[{x:P.left-G,y:P.top-G},{x:P.right+G-V,y:P.top-G},{x:P.right+G-V,y:P.bottom+G-V},{x:P.left-G,y:P.bottom+G-V}],A.current=!0,B.ticker.add(L.current),B.to(C,{current:1,duration:r,ease:"power2.out"}),v.forEach((ne,$)=>{B.to(ne,{x:R.current[$].x-ie,y:R.current[$].y-W,duration:.2,ease:"power2.out"})});const le=()=>{if(B.ticker.remove(L.current),A.current=!1,R.current=null,B.set(C,{current:0,overwrite:!0}),O=null,w.current){const ne=Array.from(w.current);B.killTweensOf(ne);const{cornerSize:$}=_,re=[{x:-$*1.5,y:-$*1.5},{x:$*.5,y:-$*1.5},{x:$*.5,y:$*.5},{x:-$*1.5,y:$*.5}],ae=B.timeline();ne.forEach((U,me)=>{ae.to(U,{x:re[me].x,y:re[me].y,duration:.3,ease:"power3.out"},0)})}g=setTimeout(()=>{if(!O&&f.current&&S.current){const $=B.getProperty(f.current,"rotation")%360;S.current.kill(),S.current=B.timeline({repeat:-1}).to(f.current,{rotation:"+=360",duration:t,ease:"none"}),B.to(f.current,{rotation:$+360,duration:t*(1-$/360),ease:"none",onComplete:()=>{S.current?.restart()}})}g=null},50),n(y)};q=le,y.addEventListener("mouseleave",le)};return window.addEventListener("mouseover",N,{passive:!0}),()=>{L.current&&B.ticker.remove(L.current),window.removeEventListener("mousemove",Y),window.removeEventListener("mouseover",N),window.removeEventListener("scroll",M),window.removeEventListener("mousedown",K),window.removeEventListener("mouseup",p),O&&n(O),S.current?.kill(),document.body.style.cursor=E,A.current=!1,R.current=null,C.current=0}},[o,t,z,_,i,b,r,d]),a.useEffect(()=>{b||!f.current||!S.current||S.current.isActive()&&(S.current.kill(),S.current=B.timeline({repeat:-1}).to(f.current,{rotation:"+=360",duration:t,ease:"none"}))},[t,b]),b?null:e.jsxs("div",{ref:f,className:"target-cursor-wrapper",children:[e.jsx("div",{ref:m,className:"target-cursor-dot"}),e.jsx("div",{className:"target-cursor-corner corner-tl"}),e.jsx("div",{className:"target-cursor-corner corner-tr"}),e.jsx("div",{className:"target-cursor-corner corner-br"}),e.jsx("div",{className:"target-cursor-corner corner-bl"})]})};function mo({SIM_RESOLUTION:o=128,DYE_RESOLUTION:t=1440,CAPTURE_RESOLUTION:i=512,DENSITY_DISSIPATION:r=3.5,VELOCITY_DISSIPATION:d=2,PRESSURE:f=.1,PRESSURE_ITERATIONS:w=20,CURL:S=3,SPLAT_RADIUS:m=.2,SPLAT_FORCE:A=6e3,SHADING:R=!0,COLOR_UPDATE_SPEED:L=10,BACK_COLOR:C={r:.5,g:0,b:0},TRANSPARENT:b=!0}){const _=a.useRef(null),z=a.useRef(null);return a.useEffect(()=>{const E=_.current;if(!E)return;let I=!0;function O(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let q={SIM_RESOLUTION:o,DYE_RESOLUTION:t,DENSITY_DISSIPATION:r,VELOCITY_DISSIPATION:d,PRESSURE:f,PRESSURE_ITERATIONS:w,CURL:S,SPLAT_RADIUS:m,SPLAT_FORCE:A,SHADING:R,COLOR_UPDATE_SPEED:L},g=[new O];const{gl:n,ext:T}=H(E);T.supportLinearFiltering||(q.DYE_RESOLUTION=256,q.SHADING=!1);function H(s){const h={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let x=s.getContext("webgl2",h);const F=!!x;F||(x=s.getContext("webgl",h)||s.getContext("experimental-webgl",h));let Q,fe;F?(x.getExtension("EXT_color_buffer_float"),fe=x.getExtension("OES_texture_float_linear")):(Q=x.getExtension("OES_texture_half_float"),fe=x.getExtension("OES_texture_half_float_linear")),x.clearColor(0,0,0,1);const he=F?x.HALF_FLOAT:Q&&Q.HALF_FLOAT_OES;let Le,je,Be;return F?(Le=Y(x,x.RGBA16F,x.RGBA,he),je=Y(x,x.RG16F,x.RG,he),Be=Y(x,x.R16F,x.RED,he)):(Le=Y(x,x.RGBA,x.RGBA,he),je=Y(x,x.RGBA,x.RGBA,he),Be=Y(x,x.RGBA,x.RGBA,he)),{gl:x,ext:{formatRGBA:Le,formatRG:je,formatR:Be,halfFloatTexType:he,supportLinearFiltering:fe}}}function Y(s,h,x,F){if(!M(s,h,x,F))switch(h){case s.R16F:return Y(s,s.RG16F,s.RG,F);case s.RG16F:return Y(s,s.RGBA16F,s.RGBA,F);default:return null}return{internalFormat:h,format:x}}function M(s,h,x,F){const Q=s.createTexture();s.bindTexture(s.TEXTURE_2D,Q),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,h,4,4,0,x,F,null);const fe=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,fe),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0),s.checkFramebufferStatus(s.FRAMEBUFFER)===s.FRAMEBUFFER_COMPLETE}class K{constructor(h,x){this.vertexShader=h,this.fragmentShaderSource=x,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(h){let x=0;for(let Q=0;Q<h.length;Q++)x+=Di(h[Q]);let F=this.programs[x];if(F==null){let Q=j(n.FRAGMENT_SHADER,this.fragmentShaderSource,h);F=N(this.vertexShader,Q),this.programs[x]=F}F!==this.activeProgram&&(this.uniforms=D(F),this.activeProgram=F)}bind(){n.useProgram(this.activeProgram)}}class p{constructor(h,x){this.uniforms={},this.program=N(h,x),this.uniforms=D(this.program)}bind(){n.useProgram(this.program)}}function N(s,h){let x=n.createProgram();return n.attachShader(x,s),n.attachShader(x,h),n.linkProgram(x),n.getProgramParameter(x,n.LINK_STATUS)||console.trace(n.getProgramInfoLog(x)),x}function D(s){let h={},x=n.getProgramParameter(s,n.ACTIVE_UNIFORMS);for(let F=0;F<x;F++){let Q=n.getActiveUniform(s,F).name;h[Q]=n.getUniformLocation(s,Q)}return h}function j(s,h,x){h=l(h,x);const F=n.createShader(s);return n.shaderSource(F,h),n.compileShader(F),n.getShaderParameter(F,n.COMPILE_STATUS)||console.trace(n.getShaderInfoLog(F)),F}function l(s,h){if(!h)return s;let x="";return h.forEach(F=>{x+="#define "+F+`
`}),x+s}const u=j(n.VERTEX_SHADER,`
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
      `),y=j(n.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),v=j(n.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),P=`
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
    `,G=j(n.FRAGMENT_SHADER,`
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
      `),V=j(n.FRAGMENT_SHADER,`
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
      `,T.supportLinearFiltering?null:["MANUAL_FILTERING"]),ie=j(n.FRAGMENT_SHADER,`
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
      `),W=j(n.FRAGMENT_SHADER,`
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
      `),le=j(n.FRAGMENT_SHADER,`
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
      `),ne=j(n.FRAGMENT_SHADER,`
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
      `),$=j(n.FRAGMENT_SHADER,`
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
      `),re=(n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),n.STATIC_DRAW),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(0),(s,h=!1)=>{s==null?(n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.bindFramebuffer(n.FRAMEBUFFER,null)):(n.viewport(0,0,s.width,s.height),n.bindFramebuffer(n.FRAMEBUFFER,s.fbo)),h&&(n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT)),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)});let ae,U,me,ee,ue;const ge=new p(u,y),k=new p(u,v),X=new p(u,G),J=new p(u,V),de=new p(u,ie),Z=new p(u,W),oe=new p(u,le),se=new p(u,ne),xe=new p(u,$),Re=new K(u,P);function Ae(){let s=Dt(q.SIM_RESOLUTION),h=Dt(q.DYE_RESOLUTION);const x=T.halfFloatTexType,F=T.formatRGBA,Q=T.formatRG,fe=T.formatR,he=T.supportLinearFiltering?n.LINEAR:n.NEAREST;n.disable(n.BLEND),ae?ae=Me(ae,h.width,h.height,F.internalFormat,F.format,x,he):ae=ve(h.width,h.height,F.internalFormat,F.format,x,he),U?U=Me(U,s.width,s.height,Q.internalFormat,Q.format,x,he):U=ve(s.width,s.height,Q.internalFormat,Q.format,x,he),me=Ee(s.width,s.height,fe.internalFormat,fe.format,x,n.NEAREST),ee=Ee(s.width,s.height,fe.internalFormat,fe.format,x,n.NEAREST),ue=ve(s.width,s.height,fe.internalFormat,fe.format,x,n.NEAREST)}function Ee(s,h,x,F,Q,fe){n.activeTexture(n.TEXTURE0);let he=n.createTexture();n.bindTexture(n.TEXTURE_2D,he),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,fe),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,fe),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,x,s,h,0,F,Q,null);let Le=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,Le),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0),n.viewport(0,0,s,h),n.clear(n.COLOR_BUFFER_BIT);let je=1/s,Be=1/h;return{texture:he,fbo:Le,width:s,height:h,texelSizeX:je,texelSizeY:Be,attach(We){return n.activeTexture(n.TEXTURE0+We),n.bindTexture(n.TEXTURE_2D,he),We}}}function ve(s,h,x,F,Q,fe){let he=Ee(s,h,x,F,Q,fe),Le=Ee(s,h,x,F,Q,fe);return{width:s,height:h,texelSizeX:he.texelSizeX,texelSizeY:he.texelSizeY,get read(){return he},set read(je){he=je},get write(){return Le},set write(je){Le=je},swap(){let je=he;he=Le,Le=je}}}function ye(s,h,x,F,Q,fe,he){let Le=Ee(h,x,F,Q,fe,he);return ge.bind(),n.uniform1i(ge.uniforms.uTexture,s.attach(0)),re(Le),Le}function Me(s,h,x,F,Q,fe,he){return s.width===h&&s.height===x||(s.read=ye(s.read,h,x,F,Q,fe,he),s.write=Ee(h,x,F,Q,fe,he),s.width=h,s.height=x,s.texelSizeX=1/h,s.texelSizeY=1/x),s}function $e(){let s=[];q.SHADING&&s.push("SHADING"),Re.setKeywords(s)}$e(),Ae();let be=Date.now(),Te=0;function Ie(){if(!I)return;const s=yt();Xe()&&Ae(),bt(s),c(),pe(s),_e(null),z.current=requestAnimationFrame(Ie)}function yt(){let s=Date.now(),h=(s-be)/1e3;return h=Math.min(h,.016666),be=s,h}function Xe(){let s=Oe(E.clientWidth),h=Oe(E.clientHeight);return E.width!==s||E.height!==h?(E.width=s,E.height=h,!0):!1}function bt(s){Te+=s*q.COLOR_UPDATE_SPEED,Te>=1&&(Te=_i(Te,0,1),g.forEach(h=>{h.color=rt()}))}function c(){g.forEach(s=>{s.moved&&(s.moved=!1,Li(s))})}function pe(s){n.disable(n.BLEND),Z.bind(),n.uniform2f(Z.uniforms.texelSize,U.texelSizeX,U.texelSizeY),n.uniform1i(Z.uniforms.uVelocity,U.read.attach(0)),re(ee),oe.bind(),n.uniform2f(oe.uniforms.texelSize,U.texelSizeX,U.texelSizeY),n.uniform1i(oe.uniforms.uVelocity,U.read.attach(0)),n.uniform1i(oe.uniforms.uCurl,ee.attach(1)),n.uniform1f(oe.uniforms.curl,q.CURL),n.uniform1f(oe.uniforms.dt,s),re(U.write),U.swap(),de.bind(),n.uniform2f(de.uniforms.texelSize,U.texelSizeX,U.texelSizeY),n.uniform1i(de.uniforms.uVelocity,U.read.attach(0)),re(me),k.bind(),n.uniform1i(k.uniforms.uTexture,ue.read.attach(0)),n.uniform1f(k.uniforms.value,q.PRESSURE),re(ue.write),ue.swap(),se.bind(),n.uniform2f(se.uniforms.texelSize,U.texelSizeX,U.texelSizeY),n.uniform1i(se.uniforms.uDivergence,me.attach(0));for(let x=0;x<q.PRESSURE_ITERATIONS;x++)n.uniform1i(se.uniforms.uPressure,ue.read.attach(1)),re(ue.write),ue.swap();xe.bind(),n.uniform2f(xe.uniforms.texelSize,U.texelSizeX,U.texelSizeY),n.uniform1i(xe.uniforms.uPressure,ue.read.attach(0)),n.uniform1i(xe.uniforms.uVelocity,U.read.attach(1)),re(U.write),U.swap(),J.bind(),n.uniform2f(J.uniforms.texelSize,U.texelSizeX,U.texelSizeY),T.supportLinearFiltering||n.uniform2f(J.uniforms.dyeTexelSize,U.texelSizeX,U.texelSizeY);let h=U.read.attach(0);n.uniform1i(J.uniforms.uVelocity,h),n.uniform1i(J.uniforms.uSource,h),n.uniform1f(J.uniforms.dt,s),n.uniform1f(J.uniforms.dissipation,q.VELOCITY_DISSIPATION),re(U.write),U.swap(),T.supportLinearFiltering||n.uniform2f(J.uniforms.dyeTexelSize,ae.texelSizeX,ae.texelSizeY),n.uniform1i(J.uniforms.uVelocity,U.read.attach(0)),n.uniform1i(J.uniforms.uSource,ae.read.attach(1)),n.uniform1f(J.uniforms.dissipation,q.DENSITY_DISSIPATION),re(ae.write),ae.swap()}function _e(s){n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n.enable(n.BLEND),wt(s)}function wt(s){let h=n.drawingBufferWidth,x=n.drawingBufferHeight;Re.bind(),q.SHADING&&n.uniform2f(Re.uniforms.texelSize,1/h,1/x),n.uniform1i(Re.uniforms.uTexture,ae.read.attach(0)),re(s)}function Li(s){let h=s.deltaX*q.SPLAT_FORCE,x=s.deltaY*q.SPLAT_FORCE;Mt(s.texcoordX,s.texcoordY,h,x,s.color)}function Pi(s){const h=rt();h.r*=10,h.g*=10,h.b*=10;let x=10*(Math.random()-.5),F=30*(Math.random()-.5);Mt(s.texcoordX,s.texcoordY,x,F,h)}function Mt(s,h,x,F,Q){X.bind(),n.uniform1i(X.uniforms.uTarget,U.read.attach(0)),n.uniform1f(X.uniforms.aspectRatio,E.width/E.height),n.uniform2f(X.uniforms.point,s,h),n.uniform3f(X.uniforms.color,x,F,0),n.uniform1f(X.uniforms.radius,Ei(q.SPLAT_RADIUS/100)),re(U.write),U.swap(),n.uniform1i(X.uniforms.uTarget,ae.read.attach(0)),n.uniform3f(X.uniforms.color,Q.r,Q.g,Q.b),re(ae.write),ae.swap()}function Ei(s){let h=E.width/E.height;return h>1&&(s*=h),s}function _t(s,h,x,F){s.id=h,s.down=!0,s.moved=!1,s.texcoordX=x/E.width,s.texcoordY=1-F/E.height,s.prevTexcoordX=s.texcoordX,s.prevTexcoordY=s.texcoordY,s.deltaX=0,s.deltaY=0,s.color=rt()}function St(s,h,x,F){s.prevTexcoordX=s.texcoordX,s.prevTexcoordY=s.texcoordY,s.texcoordX=h/E.width,s.texcoordY=1-x/E.height,s.deltaX=ki(s.texcoordX-s.prevTexcoordX),s.deltaY=Fi(s.texcoordY-s.prevTexcoordY),s.moved=Math.abs(s.deltaX)>0||Math.abs(s.deltaY)>0,s.color=F}function Ti(s){s.down=!1}function ki(s){let h=E.width/E.height;return h<1&&(s*=h),s}function Fi(s){let h=E.width/E.height;return h>1&&(s/=h),s}function rt(){let s=Mi(Math.random(),1,1);return s.r*=.15,s.g*=.15,s.b*=.15,s}function Mi(s,h,x){let F,Q,fe,he,Le,je,Be,We;switch(he=Math.floor(s*6),Le=s*6-he,je=x*(1-h),Be=x*(1-Le*h),We=x*(1-(1-Le)*h),he%6){case 0:F=x,Q=We,fe=je;break;case 1:F=Be,Q=x,fe=je;break;case 2:F=je,Q=x,fe=We;break;case 3:F=je,Q=Be,fe=x;break;case 4:F=We,Q=je,fe=x;break;case 5:F=x,Q=je,fe=Be;break}return{r:F,g:Q,b:fe}}function _i(s,h,x){const F=x-h;return(s-h)%F+h}function Dt(s){let h=n.drawingBufferWidth/n.drawingBufferHeight;h<1&&(h=1/h);const x=Math.round(s),F=Math.round(s*h);return n.drawingBufferWidth>n.drawingBufferHeight?{width:F,height:x}:{width:x,height:F}}function Oe(s){const h=window.devicePixelRatio||1;return Math.floor(s*h)}function Di(s){if(s.length===0)return 0;let h=0;for(let x=0;x<s.length;x++)h=(h<<5)-h+s.charCodeAt(x),h|=0;return h}function It(s){let h=g[0],x=Oe(s.clientX),F=Oe(s.clientY);_t(h,-1,x,F),Pi(h)}let zt=!1;function Nt(s){let h=g[0],x=Oe(s.clientX),F=Oe(s.clientY);if(zt)St(h,x,F,h.color);else{let Q=rt();St(h,x,F,Q),zt=!0}}function Ut(s){const h=s.targetTouches;let x=g[0];for(let F=0;F<h.length;F++){let Q=Oe(h[F].clientX),fe=Oe(h[F].clientY);_t(x,h[F].identifier,Q,fe)}}function Ot(s){const h=s.targetTouches;let x=g[0];for(let F=0;F<h.length;F++){let Q=Oe(h[F].clientX),fe=Oe(h[F].clientY);St(x,Q,fe,x.color)}}function Bt(s){const h=s.changedTouches;let x=g[0];for(let F=0;F<h.length;F++)Ti(x)}return window.addEventListener("mousedown",It),window.addEventListener("mousemove",Nt),window.addEventListener("touchstart",Ut),window.addEventListener("touchmove",Ot,!1),window.addEventListener("touchend",Bt),Ie(),()=>{I=!1,z.current&&(cancelAnimationFrame(z.current),z.current=null),window.removeEventListener("mousedown",It),window.removeEventListener("mousemove",Nt),window.removeEventListener("touchstart",Ut),window.removeEventListener("touchmove",Ot),window.removeEventListener("touchend",Bt)}},[]),e.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:e.jsx("canvas",{ref:_,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})}const ho=(o,t,i)=>(1-i)*o+i*t,po=(o,t)=>{if(t){const i=t.getBoundingClientRect();return{x:o.clientX-i.left,y:o.clientY-i.top}}return{x:o.clientX,y:o.clientY}},go=({color:o="white",containerRef:t=null,targetSelector:i="a, button, .shop-item, .dock-item, .coin-entity"})=>{const r=a.useRef(null),d=a.useRef(null),f=a.useRef(null),w=a.useRef(null),S=a.useRef(null),m=a.useRef(null),A=a.useRef({x:0,y:0});return a.useEffect(()=>{const R=g=>{if(A.current=po(g,t?.current),t?.current){const n=t.current.getBoundingClientRect();g.clientX<n.left||g.clientX>n.right||g.clientY<n.top||g.clientY>n.bottom?B.to([d.current,f.current],{opacity:0}):B.to([d.current,f.current],{opacity:1})}},L=t?.current||window;L.addEventListener("mousemove",R);const C={tx:{previous:0,current:0,amt:.15},ty:{previous:0,current:0,amt:.15}};B.set([d.current,f.current],{opacity:0});const b=()=>{C.tx.previous=C.tx.current=A.current.x,C.ty.previous=C.ty.current=A.current.y,B.to([d.current,f.current],{duration:.9,ease:"Power3.easeOut",opacity:1}),m.current=requestAnimationFrame(O),L.removeEventListener("mousemove",b)};L.addEventListener("mousemove",b);const _={turbulence:0},z=B.timeline({paused:!0,onStart:()=>{d.current&&(d.current.style.filter="url(#filter-noise-x)"),f.current&&(f.current.style.filter="url(#filter-noise-y)")},onUpdate:()=>{w.current&&S.current&&(w.current.setAttribute("baseFrequency",_.turbulence),S.current.setAttribute("baseFrequency",_.turbulence))},onComplete:()=>{d.current&&f.current&&(d.current.style.filter=f.current.style.filter="none")}}).to(_,{duration:.5,ease:"power1",startAt:{turbulence:1},turbulence:0}),E=()=>z.restart(),I=()=>z.progress(1).kill(),O=()=>{C.tx.current=A.current.x,C.ty.current=A.current.y;for(const g in C)C[g].previous=ho(C[g].previous,C[g].current,C[g].amt);d.current&&f.current&&(B.set(f.current,{x:C.tx.previous}),B.set(d.current,{y:C.ty.previous})),m.current=requestAnimationFrame(O)},q=g=>{if(!g.target||typeof g.target.closest!="function")return;const n=g.target.closest(i);n&&(!g.relatedTarget||!n.contains(g.relatedTarget))&&(E(),n.addEventListener("mouseleave",I,{once:!0}))};return document.addEventListener("mouseover",q),()=>{L.removeEventListener("mousemove",R),L.removeEventListener("mousemove",b),m.current&&cancelAnimationFrame(m.current),document.removeEventListener("mouseover",q)}},[t,i]),e.jsxs("div",{ref:r,className:"cursor",style:{position:t?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1e4},children:[e.jsx("svg",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"},children:e.jsxs("defs",{children:[e.jsxs("filter",{id:"filter-noise-x",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:w}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]}),e.jsxs("filter",{id:"filter-noise-y",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:S}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]})]})}),e.jsx("div",{ref:d,style:{position:"absolute",width:"100%",height:"1px",background:o,pointerEvents:"none",top:0,opacity:0}}),e.jsx("div",{ref:f,style:{position:"absolute",height:"100%",width:"1px",background:o,pointerEvents:"none",left:0,opacity:0}})]})},vo=""+new URL("ring-CJvK4024.gif",import.meta.url).href,ft={cursor_neon:{name:"Neon Pulse",price:500,desc:"Estilo Cyberpunk. Cambia de color.",icon:e.jsx(Ki,{}),type:"replace",className:"cursor-neon"},cursor_gold:{name:"Gold Sparkle",price:1e3,desc:"Cursor de oro puro con rastro brillante.",icon:e.jsx(fi,{}),type:"replace",className:"cursor-gold",effect:"sparkle"},cursor_ring:{name:"Anillo",price:1500,desc:"Un anillo animado.",icon:e.jsx(Tt,{}),type:"replace",className:"cursor-ring",backgroundImage:vo},cursor_blackhole:{name:"Agujero Negro",price:2e3,desc:"Singularidad que distorsiona la luz.",icon:e.jsx(Ji,{}),type:"replace",className:"cursor-blackhole"},cursor_crosshair:{name:"Crosshair",price:3e3,desc:"Líneas de precisión con distorsión.",icon:e.jsx(di,{}),type:"custom",component:go},cursor_splash:{name:"Splash Fluid",price:4e3,desc:"Tinta fluida reactiva.",icon:e.jsx(Vi,{}),type:"custom",component:mo,hideNative:!1},cursor_target:{name:"Target HUD",price:5e3,desc:"Sistema de fijación táctico.",icon:e.jsx(Hi,{}),type:"custom",component:fo}};function xo(){const{activeCursor:o}=Ue(),t=a.useRef(null),[i,r]=a.useState(!1),[d,f]=a.useState([]);a.useRef(),a.useEffect(()=>{const m=L=>{const{clientX:C,clientY:b}=L;t.current&&(t.current.style.transform=`translate3d(${C}px, ${b}px, 0)`);const _=ft[o];_?.effect&&_.effect==="sparkle"&&Math.random()>.7&&w(C,b,"sparkle")},A=()=>r(!0),R=()=>r(!1);return window.addEventListener("mousemove",m),window.addEventListener("mousedown",A),window.addEventListener("mouseup",R),()=>{window.removeEventListener("mousemove",m),window.removeEventListener("mousedown",A),window.removeEventListener("mouseup",R)}},[o]);const w=(m,A,R)=>{const L=Date.now()+Math.random();f(C=>[...C,{id:L,x:m,y:A,type:R}]),setTimeout(()=>{f(C=>C.filter(b=>b.id!==L))},1e3)};a.useEffect(()=>{const m=ft[o];return m&&((m.type==="replace"||m.type==="custom")&&m.hideNative!==!1&&document.body.classList.add("hide-native-cursor"),m.bodyClass&&document.body.classList.add(m.bodyClass)),()=>{document.body.classList.remove("hide-native-cursor"),m&&m.bodyClass&&document.body.classList.remove(m.bodyClass)}},[o]);const S=ft[o];return Qi.createPortal(e.jsxs("div",{className:"cursor-overlay",children:[d.map(m=>e.jsx("div",{className:"sparkle-particle",style:{left:m.x,top:m.y}},m.id)),S&&S.type==="replace"&&e.jsx("div",{ref:t,className:"cursor-follower",children:e.jsx("div",{className:`${S.className} ${i?"clicking":""}`,style:S.backgroundImage?{backgroundImage:`url(${S.backgroundImage})`}:{}})}),S&&S.type==="custom"&&e.jsx(S.component,{targetSelector:"button, .shop-item, input, a, .coin-entity, .dock-item, .dock-icon"})]}),document.body)}const bi=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,wi=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,Si=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,Ci=""+new URL("duck-BnqypGlP.png",import.meta.url).href,Ri="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpAgoQDSR9aWoCAAANHklEQVRo3u1YaXRVRbb+qk6dc+6cm4kwBTMSBkNAMYBEaBEEERGxsRFFRe3GJ9j4wJa37AZppN/CtZ6rl3NAeTTggIDIEIiCCKJMYQqEOSEJZCIkN/cmufM5p+r9SCBEE7BZLN6ffGvd86NuDfur/e3auwroQAc60IEOdODmQa735yuTngAA+AI+QJYRDAQw84W/QYGCgZMG/X/b3gqsrcY3Z74MSZFRfbECEpHMhJBuRFFLtcoy/dOVi3/TxPNeeglvZWfjhbFjYOg6KFNwYt8ujHnqRSz84L1bToS21ajrYehaiAgibI2N9QPCXu/HxOcbpppt0xiTHbIsX3fSpe/9E//IzsbItGQQQmNAyABCpbjYhCSs+2wJXlm16pYTaVNarz//LAhB54qS0iWESHmqrG7hxIgO+P3TzE7nHAJSvWzj5lZj/vO551B8PB8RsZ0Q8vvAdQ2qzZEgAr5lDLhbp3Qvi4h8OuCqqaMCoBKDbLXBHBEJLRjEqCmTMXny5JsmIrXVmDVgAAShRmO9x60oar0h0SP22JgSSPLmb/LyPXKnOFwoPAcA2LlzAfRyIBDwQ4RDoFaH2QgH0wmho7kWnGVjdGy02WzSdP2OgN+vAoiVJJYMSrsSJvMZGzfU7/nXMpw9dAAzZs9BTm7urfPI3Oenwe2qhaaFY0Je7zKqmL4XQu8VER3zP4LzEp1I+GTtOgDA8w8/BE3T8NJ32/Fu1pDhVPBXFUnKMlEazSghFlmGQiWEOYc3HAYXgjf/whpIpUHIp6rd/qGuaV6z3Y6lX2+4dR75+Wg+1icnQwiiUcryHM7IkwIiTGV2GkBw6br1+NusGQgVlSA+NQWDR/+efPHajGcVwZdEm0wDI02qxSrLxMQYJNK0VxIhMDMGi8yIVWbUqsiymdEoXddH+EMhj+fM6b1RCclIjOqM6dOmIvfHH/8tIm0GO2n5aiAo1LXwxaDf9zUB3BACubm5KDt5GnckJ+DktxuR+9myHsww/hpjNsfZFPmq8dcTAgGBKjHYZYXysJF1sCpSXrZmLbjuw4E9PyPnu1y8/MTvsWrJkpuX1rXYtWsXwDmWLJyPbglJqDh/HvWuy3DGdI0J+L33M0UaEZ8YF+O55B7tJJJdZayNiQkEBAQA0fzRhYGQZsDPDQwc1e8gIeSnHTkHma7RtZDVozTk9imOSKQM6o+a4nIsWXd9yd2QyOvPTcO+b3PQPSUNIW8duGTtSqmY6HRanu7dv/uAvncnKql3dseBnaewJ/cYuFdvcnPzzEIAAgCHACQCiVFQJsFsVRGXEIU7ByYi68F0eOsD2PvDKRzdW+gpL6095GvQNgkmb/DVVJRFxifC0DQk3dkfi7M//PeInFyzBos+zoYsK2isqQZTLJ2FCE+J6mSdmj4wMePeB3qT3hkJMNtUQAhoIR2lRdUoOl2BBo8PWkiHpulQVBlWqwKrwwq7wwK70wKTWYbDaUFEpBWKSW52U5M5njovis9UYc+Okyg4WFLgdvnfFbL1C8JDAUMLIz1rKBb+873fRmTNmjXYlP0xhAAs0QnUdeHUKEcEm5c5rNfQEeP7IymtK2RFghC8abuvTEYpQAggSIsrCAAiWq/ULC8hxK8NIgSgBFrQwNmCcmxZuz98ZG/RJ2GDvUmJcAkhMOah0Zi+YOH1iSxYsAAle/aCcwOK2SZ7Llf+OSEl5o0JU4dGDRrWC7KJQXB+I0XeEhCJot7lx+pPfsDOrSdW6jC/yojhlhhB2rDf4c2///1q318dv8kmFUIAztgkqba8cHbfu7q/Nf31cfZ+mcmgFNfI4DZACJgsMtLS41Fb5c4oL6pyqFbHTgpo3upLOFpYdLVrq+N3zpQpYLKC5du+Q2XxsT+m9uk8f9qs0aaEtDgIbtw+Atdy4QL2CDOenjESd2clvRhodP0p/+cdYKoZf/2PP17t18oj+qWLYBLF+n+tHNW5q+2DF+aMdabe2e22Sal9NoDFZkKPxFjpzPEL/SUl8ojP4yo9c/QELjTUtyby2tRnoKgquGAxZgv96MmX7u99z3092wzI2wlCCAilEJzDGW2DJDHbmfyLXQhzbIrqHB16ZfZsbN66tUVa46fPREPNJcDQJ/YflDR0yIg+rU4kIQBu3F7PEAJUXnDh8J6zMAwDEMCQEb2R0qfz0KDXPTDsbcSeLVsBNMfIinfewdJ5c6Ha45yOSHXq78ZkUJNFac7FACEUBXkl+OrTHxAO6reRCcXp4xexfvlu+LwhAIDVbkJaejcrlZAVDrrgjIpuIbJ//wnoQT94ODAgsWdc/7R+3YHmuCAgCPjCyFm9H9UV9SD0hsXALYRAap9u8DUGUVZU2+QiAnRP6ATVxPppak92uaa6hUh0JycMLQgQ0bdrjxibxaq2nLIUuFBUhbLSagwfkwHF3P7t8IqeyS+KRvKrIpKASPTGmyIEomLtsNhNqCxzNSdbICrGAbNZjjUCLtUIh1qIOCIcMIQBAZgpbcqs16yJC0WXYLObkJjWFeCivTVR7/bjXEEZaqsbQJpzraEbcNd5YehXPAwE/WEcP1CMi0U10MLtS1UAYIxCVhj83iCuBK1hGBACukwkzghtITLp+T9AVq2QJHb8/OlKf3WFG4QQcC7ANY46lw+d46NhjzC3W1bUu3344B/r8fbc1TiyrxCgBIQS1F6ux0eLv0FpUU1TCUMJ3LUN+OyDbVj8ly9wLK+4Xc8QEGiagWAgBCpdbUT5hRr4A6Giex5cGrDarACaX1FOHTkBppohqWx34emq7A8XbZjeIynOGgpqRs/0Hvk1VY0OpkiptJ0FhRCw2FSMGj8QdAJFz/TmGCMEFqsZWQ9kQDHTq/VVp26RmDFvAqorPUju1bX9aoE0eTng0xCfGAcQCq/Hh0M/nfMH/UbOsV3PoqS46KqnAQCTs4aCcw5Iktnw+e/lXNxhCOFVrfbdENqr996fMveV+Y9DkgTayyxNRSMA3rogJJRA/EKShJImzXPRbq4ilGLbN4eQ8+U+vPjaONgcJuzIOYqdWwtWhgLKdNVEgsl9emFRdnbLu1ZS5l0o2p8HSmmAKNIOYXAwAkgkDF0XBVUXXUZDvV+KjLa02kFCaUulCwFw/Mowwa+TVCkBaWMMIQSNHj9+3nYCIb+Wt/zdrZqvMax66nxbOWdLiPAF9ZCERdnZrT1yBT/+uAXx/VJxftcJjJzwGJ4akQVuoIsEPeeRKYPvemzqfVDUJsGGwzpOHC5F/r5CcA6k35OAtPQeiIi0AWg7eRJKwHWBy1X1KDlbARCClD7dEBvnhGgeQyhBKKjj6//djS1fHTjFVOuUujpfMRGExdiOu71GBoxwEN1TeuG9r1a3TeSXWLrmc+QsWAg1ImKiKtPsEeP7x46fci8sVhPWr/wJe7YfR3xSHBrcXngbgrDYVDw4cRCGP5QOSSJouZQ07XLhqUp8v/EwzhWUwVvvh9mqQjXLeOyZ4RgyohcIpXDXeLFtw0Fs/mJfaSjIpxGD7DJH26GHDciKBYahIXPIYPx50aJrw+n6ePGxcTACITz5xByyfPlb44QenndHSuyAyFgHKymswtSXRyJzeC+Egwbqahux9/sT2Jl7FI8/MwwjJwwEhAGDN53oBYdLseLdbYiOc2DoyL7olhADm92C7ZsOI2/nKYx+PBOhQBgHfzqLsuKac4aB1/2NtRtjuqeCKRSfbv62XTtvSMTj8WD2E5MgMYaqsgo4IuyxoUBwrGEYszIGJw54450noaisaSpCwA2OVe9/j/27TiL97iRQSuDzhUBAUFJYhYTULpg+92HYnKbmuCLwe0N4+7UvcSq/zEWA81yIrYyxz90nTxV1yhwECoqVO7Zf1052IyJOpxMAMPPRR3DfsCwcO5ZfQyWxgkOqr6ttXH2p3KP2SI1riV1KYbGpqK32Vv+Qc2wDF1wjoCAgEpHExDGPD4qzRVqBK/cbCmhhDWHNABfkbZPZ8nHN4d3eqH6Z6HrfMBih4A1JAO080LWFvLPnsD0vD7lr18MwDDAmlzfWe7ufP1OR4brUSKrL61BefBm7vyvAzi35gXAI/70u7+AbPRQtl2s8N33suG/dZWVJ9e6GgQ6HBQBBXY0XpeeqsXX1fhQcKt1PmfImwGsjklJBJAmZQwdj8fIVv8m+m6oAJw3OBAHAJDkyEAo8QiDuYYx2IQRm3eCVIPIW1WLOpYSEYrt0AQFFeWkhCJW66EFtltUqP2yxqVGccy3gD9f5/dohMPa+4fMXVBwrwMGbsOmmiPzlqadxoegMKJNhhEPQ/ZcgpHhGCKd2S5Lm4+eFrJrAuYG+DzyIxvJyFB8/BKaYYIvvSzyFx2OFoUUIKumcknopMsZDGl38630H8dyj47Bi05bbQwRoSmCznpqMzEfHYfsnyxHw+iCEgKLImPlf87Fq6Uf4aOPGq/3nz5qF03n7wWQZXNOaYoRS6BRgTEGD24WU9P54//Mvb9akDnSgAx3owO3H/wGUgcIFOUeM9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMi0xMFQxNjoxMzozMCswMDowMC3bAQsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDItMTBUMTY6MTM6MzArMDA6MDBchrm3AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAyLTEwVDE2OjEzOjM2KzAwOjAwaEOtUgAAAABJRU5ErkJggg==",ji=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,yo=""+new URL("galaxy-ChI-pR4w.gif",import.meta.url).href,bo=""+new URL("silk-DaWETVYo.gif",import.meta.url).href,wo=""+new URL("ballpit-DiGrqYC4.gif",import.meta.url).href,So=""+new URL("floatinglines-BnKOb4-3.gif",import.meta.url).href,Co=""+new URL("lightpillar-B2qC6hEB.gif",import.meta.url).href,Ro=""+new URL("pixel-snow-XBi11QsW.gif",import.meta.url).href,jo=""+new URL("hyperspeed-bdn_De3N.gif",import.meta.url).href,gt={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico atemporal.",price:0,type:"background",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:50,type:"background",previewColor:"#ff99cc",image:bo},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:100,type:"background",previewColor:"#00ffff",image:Co},{id:"pixelsnow",name:"Pixel Snow",description:"Nevada suave y distante.",price:150,type:"background",previewColor:"#ffffff",image:Ro},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:200,type:"background",previewColor:"#bd71ff",image:So},{id:"galaxy",name:"Galaxy",description:"Un viaje a las estrellas.",price:300,type:"background",previewColor:"#000",image:yo},{id:"hyperspeed",name:"Hyperspeed",description:"Velocidad luz y distorsión.",price:500,type:"background",previewColor:"#d856bf",image:jo},{id:"ballpit",name:"Ball Pit",description:"Física interactiva y relajante.",price:800,type:"background",previewColor:"#29b1ff",image:wo}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:0,type:"cursor",previewColor:"transparent",icon:e.jsx(hi,{})},...Object.entries(ft).map(([o,t])=>({id:o,name:t.name,description:t.desc,price:t.price,type:"cursor",previewColor:"transparent",icon:t.icon})).sort((o,t)=>o.price-t.price)],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:0,type:"trail",previewColor:"transparent",icon:e.jsx($i,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:100,type:"trail",previewColor:"#ffadad",icon:e.jsx("img",{src:bi,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:100,type:"trail",previewColor:"#a89c8d",icon:e.jsx("img",{src:wi,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:100,type:"trail",previewColor:"#ffecb6",icon:e.jsx("img",{src:Si,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:100,type:"trail",previewColor:"#ebe371",icon:e.jsx("img",{src:Ci,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:100,type:"trail",previewColor:"#e3e4b2",icon:e.jsx("img",{src:Ri,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:100,type:"trail",previewColor:"#a3a3a3",icon:e.jsx("img",{src:ji,alt:"Skeleton",style:{width:"40px"}})}],skins:[{id:"dase",name:"Dase Original",description:"La moneda original.",price:0,type:"skin",previewColor:"#ffd700",icon:e.jsx(Tt,{})}]},Ao=[{id:"backgrounds",label:"Fondos",icon:e.jsx(Zi,{})},{id:"cursors",label:"Cursores",icon:e.jsx(hi,{})},{id:"trails",label:"Mascotas",icon:e.jsx(en,{})},{id:"skins",label:"Monedas",icon:e.jsx(Tt,{})}],Lo=()=>{const{activeShop:o,openShop:t,closeShop:i,activeBackground:r,setBackground:d,activeCursor:f,setCursor:w,activeTrail:S,setTrail:m,coins:A,buyItem:R,ownedItems:L,activeCoinSkin:C,setCoinSkin:b,achievements:_,unlockAchievement:z}=Ue(),[E,I]=a.useState(o),[O,q]=a.useState([]),g=a.useRef();a.useEffect(()=>{o&&I(o)},[o]),a.useEffect(()=>{if(L&&!_.includes("collector")){const p=Object.values(gt).reduce((N,D)=>N+D.length,0);L.length>=p&&z("collector")}},[L,_,z]);const n=_&&_.includes("collector"),T=a.useCallback(()=>{n&&(q(p=>p.map(N=>({...N,x:N.x+N.vx,y:N.y+N.vy,life:N.life-.02,size:N.size*.95})).filter(N=>N.life>0)),g.current=requestAnimationFrame(T))},[n]);a.useEffect(()=>(n&&o&&(g.current=requestAnimationFrame(T)),()=>cancelAnimationFrame(g.current)),[n,o,T]);const H=p=>{if(!n)return;const N=p.currentTarget.getBoundingClientRect(),D=p.clientX-N.left,j=p.clientY-N.top;if(Math.random()>.5)return;const l={id:Math.random(),x:D,y:j,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5+.5,life:1,size:Math.random()*3+2};q(u=>[...u,l])},Y=gt[E]||[],M=p=>{L.includes(p.id)?(o==="backgrounds"&&d(p.id),o==="cursors"&&w(p.id),o==="trails"&&m(p.id),o==="skins"&&b(p.id)):A>=p.price&&(R(p),o==="backgrounds"&&d(p.id),o==="cursors"&&w(p.id),o==="trails"&&m(p.id),o==="skins"&&b(p.id))},K=p=>o==="backgrounds"?r===p:o==="cursors"?f===p:o==="trails"?S===p:o==="skins"?C===p:!1;return e.jsx(Pe,{children:o&&e.jsxs(ce.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:i,style:{position:"absolute",inset:0,pointerEvents:"auto"}}),e.jsxs(ce.div,{className:`shop-window ${n?"gold-theme":""}`,onMouseMove:H,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(ce.div,{className:"gold-bg-layer",initial:{opacity:0},animate:{opacity:n?1:0},transition:{duration:.8}}),O.map(p=>e.jsx("div",{className:"gold-particle",style:{left:p.x,top:p.y,width:p.size,height:p.size,opacity:p.life}},p.id)),e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:Ao.map(p=>e.jsxs("button",{onClick:()=>t(p.id),className:`tab-btn ${o===p.id?"active":""}`,children:[p.icon,e.jsx("span",{children:p.label}),o===p.id&&e.jsx(ce.div,{layoutId:"activeTab",className:"active-line"})]},p.id))}),e.jsxs("div",{className:"coin-display",children:[A," 🪙"]}),e.jsx("button",{onClick:i,className:"close-btn",children:e.jsx(ht,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",E==="backgrounds"?"Fondos":E==="cursors"?"Cursores":E==="trails"?"Mascotas":"Monedas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(Pe,{mode:"wait",children:e.jsx(ce.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:Y.map(p=>e.jsxs("div",{className:`shop-item ${K(p.id)?"equipped":""}`,onClick:()=>M(p),children:[e.jsxs("div",{className:`item-preview ${p.type}`,style:{background:p.previewColor},children:[p.image&&e.jsx("img",{src:p.image,alt:p.name,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),p.icon&&e.jsx("div",{className:"preview-icon",style:{zIndex:1},children:p.icon}),K(p.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(pi,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:p.name}),e.jsx("p",{children:p.description}),L.includes(p.id)?e.jsx("span",{className:"price-tag",style:{color:"#00e676",background:"rgba(0, 230, 118, 0.15)"},children:K(p.id)?"Equipado":"En propiedad"}):e.jsxs("span",{className:"price-tag",children:[p.price," Monedas"]})]})]},p.id))},E)})})]})]})})},Po=""+new URL("dase-Ul_8ADqZ.png",import.meta.url).href,Eo=""+new URL("daseshiny-CaXO5CeC.png",import.meta.url).href,To=""+new URL("dase-YSuIB7YX.mp3",import.meta.url).href,ke=80,Vt={dase:{normal:Po,shiny:Eo,sound:To}};function ko(){const{addCoins:o,activeCoinSkin:t,gameVolume:i,unlockAchievement:r,coins:d,achievements:f,ownedItems:w}=Ue(),[S,m]=a.useState([]),[A,R]=a.useState([]),[L,C]=a.useState(1),b=a.useRef(),_=a.useRef(null),z=a.useRef(!1),E=a.useRef(null);a.useEffect(()=>(z.current=!0,()=>{z.current=!1,E.current&&clearTimeout(E.current)}),[]);const I=Vt[t]||Vt.dase;a.useEffect(()=>{I.sound&&(_.current=new Audio(I.sound),_.current.volume=i)},[I,i]),a.useEffect(()=>{const g=window.innerWidth,n=window.innerHeight,T=[];for(let H=0;H<5;H++)T.push({id:`normal-${H}`,type:"normal",x:Math.random()*(g-ke),y:Math.random()*(n-ke),vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6,img:I.normal,value:1});T.push({id:"shiny-1",type:"shiny",x:Math.random()*(g-ke),y:Math.random()*(n-ke),vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,img:I.shiny,value:5}),m(T)},[t,I]);const O=a.useCallback(()=>{m(g=>g.map(n=>{let{x:T,y:H,vx:Y,vy:M}=n;return T+=Y,H+=M,(T<=0||T>=window.innerWidth-ke)&&(Y=-Y,T=Math.max(0,Math.min(T,window.innerWidth-ke))),(H<=0||H>=window.innerHeight-ke)&&(M=-M,H=Math.max(0,Math.min(H,window.innerHeight-ke))),{...n,x:T,y:H,vx:Y,vy:M}})),R(g=>g.length===0?g:g.map(n=>({...n,x:n.x+n.vx,y:n.y+n.vy,vy:n.vy+.5,life:n.life-.03})).filter(n=>n.life>0)),b.current=requestAnimationFrame(O)},[]);a.useEffect(()=>(b.current=requestAnimationFrame(O),()=>cancelAnimationFrame(b.current)),[O]);const q=g=>{let n=L+1;n>10&&(n=10),C(n),E.current&&clearTimeout(E.current);const T=Math.max(500,2500-n*200);E.current=setTimeout(()=>{z.current&&C(1)},T);const H=g.value*n;o(H),r("baby_steps"),n>=5&&r("on_fire"),n>=10&&r("god_mode"),g.type==="shiny"&&r("shiny_lover"),Math.sqrt(g.vx*g.vx+g.vy*g.vy)>15&&r("sniper");const M=d+H;M>=500&&r("piggy_bank"),M>=1e3&&r("stonks"),M>=5e3&&r("crypto_king");const K=Object.values(gt).reduce((D,j)=>D+j.length,0);if(w&&w.length>=K&&r("collector"),f){const D=Object.keys(nt);D.length,D.filter(u=>u!=="prestige").every(u=>f.includes(u))&&r("prestige")}if(g.type==="shiny"&&_.current){const D=_.current.cloneNode();D.volume=i,D.play().catch(j=>console.log("Audio error:",j))}const p=[],N=g.type==="shiny"?"#ffd700":"#ffffff";for(let D=0;D<12;D++)p.push({id:`${Date.now()}-${D}-${Math.random()}`,x:g.x+ke/2,y:g.y+ke/2,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,life:1,color:N});R(D=>[...D,...p]),m(D=>D.filter(j=>j.id!==g.id)),setTimeout(()=>{z.current&&m(D=>{const j=window.innerWidth,l=window.innerHeight,u=1+n*.15,y={...g,id:`${g.type}-${Date.now()}-${Math.random()}`,x:Math.random()*(j-ke),y:Math.random()*(l-ke),vx:(Math.random()-.5)*(g.type==="shiny"?12:8)*u,vy:(Math.random()-.5)*(g.type==="shiny"?12:8)*u};return[...D,y]})},2e3)};return e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:30,pointerEvents:"auto",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"80px",right:"40px",pointerEvents:"none",textAlign:"right",zIndex:100},children:L>1&&e.jsxs("div",{style:{fontFamily:"var(--font-main)",fontSize:"3rem",fontWeight:"900",color:"#f700ff",textShadow:"0 0 20px rgba(247, 0, 255, 0.8)",transform:`scale(${1+L*.1})`,transition:"transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},children:["x",L]})}),A.map(g=>e.jsx("div",{style:{position:"absolute",left:g.x,top:g.y,width:"8px",height:"8px",backgroundColor:g.color,borderRadius:"50%",opacity:g.life,pointerEvents:"none",transform:"translate(-50%, -50%)",boxShadow:`0 0 8px ${g.color}`}},g.id)),S.map(g=>e.jsx("img",{src:g.img,alt:"coin",className:"coin-entity",onMouseDown:n=>{n.stopPropagation(),q(g)},style:{position:"absolute",transform:`translate3d(${g.x}px, ${g.y}px, 0)`,width:ke,height:ke,objectFit:"contain",cursor:"pointer",userSelect:"none",filter:g.type==="shiny"?"drop-shadow(0 0 15px gold) brightness(1.2)":"drop-shadow(0 0 5px rgba(255,255,255,0.3))"},draggable:!1},g.id))]})}const Fo=Object.assign({"../../assets/img/photos/bridge.jpeg":Vn,"../../assets/img/photos/first.jpg":Kn,"../../assets/img/photos/graduated.jpeg":$n,"../../assets/img/photos/halloween.jpg":eo,"../../assets/img/photos/miestrella.jpg":io,"../../assets/img/photos/murder.jpeg":oo,"../../assets/img/photos/rock.jpeg":ro,"../../assets/img/photos/sleepy.jpg":lo,"../../assets/img/photos/sunshine.jpeg":uo}),Ct=Object.values(Fo).map(o=>o.default),Mo=()=>{const[o,t]=a.useState(null),{isGameActive:i}=Ue();let r=[...Ct];if(r.length>0)for(;r.length<18;)r=[...r,...Ct];const d=[...r,...r];return e.jsx(Pe,{mode:"wait",children:i?e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{width:"100%",height:"100%"},children:e.jsx(ko,{})},"game"):e.jsxs(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"main-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),Ct.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:d.map((f,w)=>e.jsx("img",{src:f,alt:`Memory ${w}`,className:"gallery-item",onClick:()=>t(f)},w))})}),e.jsx(Pe,{children:o&&e.jsx(ce.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(ce.img,{src:o,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:f=>f.stopPropagation()})})})]},"content")})},_o=({color1:o="#b117f8",color2:t="#2c0b2e",speed:i=20})=>e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:`linear-gradient(to bottom, ${o}, ${t})`,animation:`spinGradient ${i}s linear infinite`}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),Do=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,Io=`
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
`,zo=({focal:o=[.5,.5],rotation:t=[1,0],starSpeed:i=0,density:r=1.5,hueShift:d=300,disableAnimation:f=!1,speed:w=.5,glowIntensity:S=.5,saturation:m=.8,twinkleIntensity:A=.5,rotationSpeed:R=.05,transparent:L=!0,colorCycleSpeed:C=10,rainbow:b=!1,warp:_=!1,...z})=>{const E=a.useRef(null),I=a.useRef(d),O=a.useRef(null),q=a.useRef({starSpeed:i,disableAnimation:f,rainbow:b,colorCycleSpeed:C,warp:_,hueShift:d});return a.useEffect(()=>{q.current={starSpeed:i,disableAnimation:f,rainbow:b,colorCycleSpeed:C,warp:_,hueShift:d}},[i,f,b,C,_,d]),a.useEffect(()=>{if(!E.current)return;const g=E.current;g.innerHTML="";const n=new Un({alpha:L,premultipliedAlpha:!1,dpr:1}),T=n.gl;L?(T.enable(T.BLEND),T.blendFunc(T.SRC_ALPHA,T.ONE_MINUS_SRC_ALPHA),T.clearColor(0,0,0,0)):T.clearColor(0,0,0,1);let H;function Y(){n.setSize(g.offsetWidth*1,g.offsetHeight*1),O.current&&(O.current.uniforms.uResolution.value=new Xt(T.canvas.width,T.canvas.height,T.canvas.width/T.canvas.height))}window.addEventListener("resize",Y,!1),Y();const M=new On(T);H=new Bn(T,{vertex:Do,fragment:Io,uniforms:{uTime:{value:0},uResolution:{value:new Xt(T.canvas.width,T.canvas.height,T.canvas.width/T.canvas.height)},uFocal:{value:new Float32Array(o)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:i},uDensity:{value:r},uHueShift:{value:d},uSpeed:{value:w},uGlowIntensity:{value:S},uSaturation:{value:m},uTwinkleIntensity:{value:A},uRotationSpeed:{value:R},uTransparent:{value:L}}}),O.current=H;const K=new qn(T,{geometry:M,program:H});let p,N=0;const j=1e3/30;function l(u){if(p=requestAnimationFrame(l),!E.current||!O.current)return;const y=u-N;if(y<j)return;N=u-y%j;const{starSpeed:v,disableAnimation:P,rainbow:G,colorCycleSpeed:V,warp:ie,hueShift:W}=q.current;if(!P){H.uniforms.uTime.value=u*.001;const le=ie?v*10:v;H.uniforms.uStarSpeed.value=u*.001*le/10,G?(I.current+=V*.05,H.uniforms.uHueShift.value=I.current%360):H.uniforms.uHueShift.value=W}n.render({scene:K})}return p=requestAnimationFrame(l),g.appendChild(T.canvas),T.canvas.style.width="100%",T.canvas.style.height="100%",T.canvas.style.display="block",T.canvas.style.willChange="transform",()=>{cancelAnimationFrame(p),window.removeEventListener("resize",Y),g&&T.canvas&&g.contains(T.canvas)&&g.removeChild(T.canvas),T.getExtension("WEBGL_lose_context")?.loseContext(),O.current=null}},[L]),a.useEffect(()=>{if(!O.current)return;const g=O.current.uniforms;g.uFocal.value=new Float32Array(o),g.uRotation.value=new Float32Array(t),g.uDensity.value=r,g.uSpeed.value=w,g.uGlowIntensity.value=S,g.uSaturation.value=m,g.uTwinkleIntensity.value=A,g.uRotationSpeed.value=R},[o,t,r,w,S,m,A,R]),e.jsx("div",{ref:E,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},...z})},No=mt.memo(zo);class Uo{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#i;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#C;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#o=!1;#n=!1;isDisposed=!1;#s;#r;#a;#l=new kt;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#p(),this.#g(),this.#v(),this.resize(),this.#x()}#p(){this.camera=new gi,this.cameraFov=this.camera.fov}#g(){this.scene=new ot}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new st(t),this.renderer.outputColorSpace=rn}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#r=new ResizeObserver(this.#c.bind(this)),this.#r.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#r?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#o=t[0].isIntersecting,this.#o?this.#h():this.#u()}#f(){this.#o&&(document.hidden?this.#u():this.#h())}#c(){this.#a&&clearTimeout(this.#a),this.#a=setTimeout(this.resize.bind(this),100)}resize(){let t,i;this.#e.size instanceof Object?(t=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,i=window.innerHeight),this.size.width=t,this.size.height=i,this.size.ratio=t/i,this.#w(),this.#S(),this.onAfterResize(this.size)}#w(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#m(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#m(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#m(t){const i=Math.tan(Pt.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*Pt.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#S(){this.renderer.setSize(this.size.width,this.size.height),this.#i?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(t),this.size.pixelRatio=t}get postprocessing(){return this.#i}set postprocessing(t){this.#i=t,this.render=t.render.bind(t)}#h(){if(this.#n)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#n=!0,this.#l.start(),t()}#u(){this.#n&&(cancelAnimationFrame(this.#d),this.#n=!1,this.#l.stop())}#C(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(i=>{const r=t.material[i];r!==null&&typeof r=="object"&&typeof r.dispose=="function"&&r.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#i?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const qe=new Map,Ne=new Ce;let Rt=!1;function Oo(o){const t={position:new Ce,nPosition:new Ce,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...o};return(function(i,r){qe.has(i)||(qe.set(i,r),Rt||(document.body.addEventListener("pointermove",Jt),document.body.addEventListener("pointerleave",Qt),document.body.addEventListener("click",Kt),document.body.addEventListener("touchstart",$t,{passive:!1}),document.body.addEventListener("touchmove",Zt,{passive:!1}),document.body.addEventListener("touchend",at,{passive:!1}),document.body.addEventListener("touchcancel",at,{passive:!1}),Rt=!0))})(o.domElement,t),t.dispose=()=>{const i=o.domElement;qe.delete(i),qe.size===0&&(document.body.removeEventListener("pointermove",Jt),document.body.removeEventListener("pointerleave",Qt),document.body.removeEventListener("click",Kt),document.body.removeEventListener("touchstart",$t),document.body.removeEventListener("touchmove",Zt),document.body.removeEventListener("touchend",at),document.body.removeEventListener("touchcancel",at),Rt=!1)},t}function Jt(o){Ne.x=o.clientX,Ne.y=o.clientY,Bo()}function Bo(){for(const[o,t]of qe){const i=o.getBoundingClientRect();xt(i)?(vt(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function Kt(o){Ne.x=o.clientX,Ne.y=o.clientY;for(const[t,i]of qe){const r=t.getBoundingClientRect();vt(i,r),xt(r)&&i.onClick(i)}}function Qt(){for(const o of qe.values())o.hover&&(o.hover=!1,o.onLeave(o))}function $t(o){if(o.touches.length>0){o.preventDefault(),Ne.x=o.touches[0].clientX,Ne.y=o.touches[0].clientY;for(const[t,i]of qe){const r=t.getBoundingClientRect();xt(r)&&(i.touching=!0,vt(i,r),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function Zt(o){if(o.touches.length>0){o.preventDefault(),Ne.x=o.touches[0].clientX,Ne.y=o.touches[0].clientY;for(const[t,i]of qe){const r=t.getBoundingClientRect();vt(i,r),xt(r)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function at(){for(const[,o]of qe)o.touching&&(o.touching=!1,o.hover&&(o.hover=!1,o.onLeave(o)))}function vt(o,t){const{position:i,nPosition:r}=o;i.x=Ne.x-t.left,i.y=Ne.y-t.top,r.x=i.x/t.width*2-1,r.y=-i.y/t.height*2+1}function xt(o){const{x:t,y:i}=Ne,{left:r,top:d,width:f,height:w}=o;return t>=r&&t<=r+f&&i>=d&&i<=d+w}const{randFloat:qo,randFloatSpread:jt}=Pt,At=new te,we=new te,lt=new te,Go=new te,Se=new te,ct=new te,Ve=new te,Ge=new te,ut=new te,ei=new te;class Wo{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new te,this.#e(),this.setSizes()}#e(){const{config:t,positionData:i}=this;this.center.toArray(i,0);for(let r=1;r<t.count;r++){const d=3*r;i[d]=jt(2*t.maxX),i[d+1]=jt(2*t.maxY),i[d+2]=jt(2*t.maxZ)}}setSizes(){const{config:t,sizeData:i}=this;i[0]=t.size0;for(let r=1;r<t.count;r++)i[r]=qo(t.minSize,t.maxSize)}update(t){const{config:i,center:r,positionData:d,sizeData:f,velocityData:w}=this;let S=0;i.controlSphere0&&(S=1,At.fromArray(d,0),At.lerp(r,.1).toArray(d,0),Go.set(0,0,0).toArray(w,0));for(let m=S;m<i.count;m++){const A=3*m;we.fromArray(d,A),Se.fromArray(w,A),Se.y-=t.delta*i.gravity*f[m],Se.multiplyScalar(i.friction),Se.clampLength(0,i.maxVelocity),we.add(Se),we.toArray(d,A),Se.toArray(w,A)}for(let m=S;m<i.count;m++){const A=3*m;we.fromArray(d,A),Se.fromArray(w,A);const R=f[m];for(let C=m+1;C<i.count;C++){const b=3*C;lt.fromArray(d,b),ct.fromArray(w,b);const _=f[C];Ve.copy(lt).sub(we);const z=Ve.length(),E=R+_;if(z<E){const I=E-z;Ge.copy(Ve).normalize().multiplyScalar(.5*I),ut.copy(Ge).multiplyScalar(Math.max(Se.length(),1)),ei.copy(Ge).multiplyScalar(Math.max(ct.length(),1)),we.sub(Ge),Se.sub(ut),we.toArray(d,A),Se.toArray(w,A),lt.add(Ge),ct.add(ei),lt.toArray(d,b),ct.toArray(w,b)}}if(i.controlSphere0){Ve.copy(At).sub(we);const C=Ve.length(),b=R+f[0];if(C<b){const _=b-C;Ge.copy(Ve.normalize()).multiplyScalar(_),ut.copy(Ge).multiplyScalar(Math.max(Se.length(),1)),we.sub(Ge),Se.sub(ut)}}Math.abs(we.x)+R>i.maxX&&(we.x=Math.sign(we.x)*(i.maxX-R),Se.x=-Se.x*i.wallBounce),i.gravity===0?Math.abs(we.y)+R>i.maxY&&(we.y=Math.sign(we.y)*(i.maxY-R),Se.y=-Se.y*i.wallBounce):we.y-R<-i.maxY&&(we.y=-i.maxY+R,Se.y=-Se.y*i.wallBounce);const L=Math.max(i.maxZ,i.maxSize);Math.abs(we.z)+R>L&&(we.z=Math.sign(we.z)*(i.maxZ-R),Se.z=-Se.z*i.wallBounce),we.toArray(d,A),Se.toArray(w,A)}}explode(t,i=2){const{positionData:r,velocityData:d,config:f}=this;for(let w=0;w<f.count;w++){const S=3*w,m=r[S]-t.x,A=r[S+1]-t.y,R=r[S+2]-t.z,L=m*m+A*A+R*R;if(L<60){const C=Math.sqrt(L)+.01,b=i*50/(C+1),_=(Math.random()-.5)*1.5,z=(Math.random()-.5)*1.5,E=(Math.random()-.5)*1.5;d[S]+=(m/C+_)*b,d[S+1]+=(A/C+z)*b,d[S+2]+=(R/C+E)*b}}}}class Yo extends mn{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
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
      `);const r=De.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",r),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const Xo={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0,enableExplosion:!1,rainbow:!1},Je=new tn;class Ho extends an{constructor(t,i={}){const r={...Xo,...i},d=new ln,f=new cn(t,.04).fromScene(d).texture,w=new un,S=new Yo({envMap:f,...r.materialParams});S.envMapRotation.x=-Math.PI/2,super(w,S,r.count),this.config=r,this.physics=new Wo(r),this.#e(),this.setColors(r.colors),this.rainbowHue=0}#e(){this.ambientLight=new dn(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new fn(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(r){let d,f;function w(S){d=S,f=[],d.forEach(m=>{f.push(new Fe(m))})}return w(r),{setColors:w,getColorAt:function(S,m=new Fe){const A=Math.max(0,Math.min(1,S))*(d.length-1),R=Math.floor(A),L=f[R];if(R>=d.length-1)return L.clone();const C=A-R,b=f[R+1];return m.r=L.r+C*(b.r-L.r),m.g=L.g+C*(b.g-L.g),m.b=L.b+C*(b.b-L.b),m}}})(t);for(let r=0;r<this.count;r++)this.setColorAt(r,i.getColorAt(r/this.count)),r===0&&this.light.color.copy(i.getColorAt(r/this.count));this.instanceColor.needsUpdate=!0}}update(t){if(this.physics.update(t),this.config.rainbow){this.rainbowHue+=t.delta*.2,this.light.color.setHSL(this.rainbowHue%1,1,.5);for(let i=0;i<this.count;i++){const r=(this.rainbowHue+i*.05)%1,d=new Fe().setHSL(r,.9,.6);this.setColorAt(i,d)}this.instanceColor.needsUpdate=!0}for(let i=0;i<this.count;i++)Je.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Je.scale.setScalar(0):Je.scale.setScalar(this.physics.sizeData[i]),Je.updateMatrix(),this.setMatrixAt(i,Je.matrix),i===0&&this.light.position.copy(Je.position);this.instanceMatrix.needsUpdate=!0}}function Vo(o,t={}){const i=new Uo({canvas:o,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let r;i.renderer.toneMapping=nn,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),A(t);const d=new on,f=new sn(new te(0,0,1),0),w=new te;let S=!1;o.style.touchAction="none",o.style.userSelect="none",o.style.webkitUserSelect="none";const m=Oo({domElement:o,onMove(){d.setFromCamera(m.nPosition,i.camera),i.camera.getWorldDirection(f.normal),d.ray.intersectPlane(f,w),r.physics.center.copy(w),r.config.controlSphere0=!0},onClick(){r&&r.config.enableExplosion&&r.physics.explode(r.physics.center)},onLeave(){r.config.controlSphere0=!1}});function A(R){r&&(i.clear(),i.scene.remove(r)),r=new Ho(i.renderer,R),i.scene.add(r)}return i.onBeforeRender=R=>{S||r.update(R)},i.onAfterResize=R=>{r.config.maxX=R.wWidth/2,r.config.maxY=R.wHeight/2},{three:i,get spheres(){return r},setCount(R){A({...r.config,count:R})},togglePause(){S=!S},dispose(){m.dispose(),i.dispose()}}}const Jo=({className:o="",followCursor:t=!0,count:i=100,gravity:r=.5,friction:d=.9975,wallBounce:f=.95,colors:w=[0,0,0],enableExplosion:S=!1,rainbow:m=!1,...A})=>{const R=a.useRef(null),L=a.useRef(null);return a.useEffect(()=>{const C=R.current;if(C)return L.current=Vo(C,{followCursor:t,count:i,gravity:r,friction:d,wallBounce:f,colors:w,enableExplosion:S,rainbow:m,...A}),()=>{L.current&&L.current.dispose()}},[]),a.useEffect(()=>{const C=L.current;if(!C||!C.spheres)return;const b=C.spheres.config;b.gravity=r,b.friction=d,b.wallBounce=f,b.followCursor=t,b.enableExplosion=S,b.rainbow=m,C.spheres.setColors(w)},[r,d,f,t,w,S,m]),a.useEffect(()=>{const C=L.current;C&&C.setCount(i)},[i]),e.jsx("canvas",{className:o,ref:R,style:{width:"100%",height:"100%"}})},Ko=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Qo=`
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
`,dt=8;function ti(o){let t=o.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,r=255,d=255;return t.length===3?(i=parseInt(t[0]+t[0],16),r=parseInt(t[1]+t[1],16),d=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),d=parseInt(t.slice(4,6),16)),new te(i/255,r/255,d/255)}function $o({linesGradient:o,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:r=[5],topWavePosition:d,middleWavePosition:f,bottomWavePosition:w={x:2,y:-.7,rotate:-1},animationSpeed:S=1,interactive:m=!1,bendRadius:A=5,bendStrength:R=-.5,mouseDamping:L=.05,mixBlendMode:C="screen",amplitude:b=1,rainbow:_=!1}){const z=a.useRef(null),E=a.useRef(null),I=a.useRef(null),O=a.useRef(new Ce(-1e3,-1e3)),q=a.useRef(new Ce(-1e3,-1e3)),g=a.useRef(0),n=a.useRef(0),T=a.useRef(_),H=a.useRef(m);a.useEffect(()=>{H.current=m},[m]),a.useEffect(()=>{T.current=_},[_]);const Y=u=>{if(typeof i=="number")return i;if(!t.includes(u))return 0;const y=t.indexOf(u);return i[y]??6},M=u=>{if(typeof r=="number")return r;if(!t.includes(u))return .1;const y=t.indexOf(u);return r[y]??.1},K=t.includes("top")?Y("top"):0,p=t.includes("middle")?Y("middle"):0,N=t.includes("bottom")?Y("bottom"):0,D=t.includes("top")?M("top")*.01:.01,j=t.includes("middle")?M("middle")*.01:.01,l=t.includes("bottom")?M("bottom")*.01:.01;return a.useEffect(()=>{if(I.current&&o&&o.length>0&&!_){const u=o.slice(0,dt);I.current.uniforms.lineGradientCount.value=u.length,u.forEach((y,v)=>{const P=ti(y);I.current.uniforms.lineGradient.value[v].set(P.x,P.y,P.z)})}},[o,_]),a.useEffect(()=>{if(!I.current)return;const u=I.current.uniforms;u.animationSpeed.value=S,u.amplitude.value=b,u.bendRadius.value=A,u.bendStrength.value=R,u.interactive.value=m,u.enableTop.value=t.includes("top"),u.enableMiddle.value=t.includes("middle"),u.enableBottom.value=t.includes("bottom");const y=P=>{if(typeof i=="number")return i;if(!t.includes(P))return 0;const G=t.indexOf(P);return i[G]??6},v=P=>{if(typeof r=="number")return r;if(!t.includes(P))return .1;const G=t.indexOf(P);return r[G]??.1};u.topLineCount.value=t.includes("top")?y("top"):0,u.middleLineCount.value=t.includes("middle")?y("middle"):0,u.bottomLineCount.value=t.includes("bottom")?y("bottom"):0,u.topLineDistance.value=t.includes("top")?v("top")*.01:.01,u.middleLineDistance.value=t.includes("middle")?v("middle")*.01:.01,u.bottomLineDistance.value=t.includes("bottom")?v("bottom")*.01:.01},[S,b,A,R,m,t,i,r]),a.useEffect(()=>{if(!z.current)return;const u=new ot,y=new Ft(-1,1,1,-1,0,1);y.position.z=1;const v=new st({antialias:!0,alpha:!1});v.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),v.domElement.style.width="100%",v.domElement.style.height="100%",z.current.appendChild(v.domElement),E.current=v;const P={iTime:{value:0},iResolution:{value:new te(1,1,1)},animationSpeed:{value:S},amplitude:{value:b},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:K},middleLineCount:{value:p},bottomLineCount:{value:N},topLineDistance:{value:D},middleLineDistance:{value:j},bottomLineDistance:{value:l},topWavePosition:{value:new te(d?.x??10,d?.y??.5,d?.rotate??-.4)},middleWavePosition:{value:new te(f?.x??5,f?.y??0,f?.rotate??.2)},bottomWavePosition:{value:new te(w?.x??2,w?.y??-.7,w?.rotate??.4)},iMouse:{value:new Ce(-1e3,-1e3)},interactive:{value:m},bendRadius:{value:A},bendStrength:{value:R},bendInfluence:{value:0},lineGradient:{value:Array.from({length:dt},()=>new te(1,1,1))},lineGradientCount:{value:0}};if(o&&o.length>0){const U=o.slice(0,dt);P.lineGradientCount.value=U.length,U.forEach((me,ee)=>{const ue=ti(me);P.lineGradient.value[ee].set(ue.x,ue.y,ue.z)})}const G=new Ke({uniforms:P,vertexShader:Ko,fragmentShader:Qo});I.current=G;const V=new tt(2,2),ie=new Qe(V,G);u.add(ie);const W=new kt,le=()=>{const U=z.current,me=U.clientWidth||1,ee=U.clientHeight||1;v.setSize(me,ee,!1);const ue=v.domElement.width,ge=v.domElement.height;P.iResolution.value.set(ue,ge,1)};le();const ne=typeof ResizeObserver<"u"?new ResizeObserver(le):null;ne&&z.current&&ne.observe(z.current);const $=U=>{if(!H.current)return;const me=v.domElement.getBoundingClientRect(),ee=U.clientX-me.left,ue=U.clientY-me.top,ge=v.getPixelRatio();O.current.set(ee*ge,(me.height-ue)*ge),g.current=1};window.addEventListener("pointermove",$);let re=0;const ae=()=>{if(P.iTime.value=W.getElapsedTime(),H.current&&(q.current.lerp(O.current,L),P.iMouse.value.copy(q.current),n.current+=(g.current-n.current)*L,P.bendInfluence.value=n.current),T.current){const U=W.getElapsedTime();P.lineGradientCount.value<3&&(P.lineGradientCount.value=3);for(let me=0;me<dt;me++){const ee=(U*.1+me*.15)%1,ue=new Fe().setHSL(ee,.8,.5);P.lineGradient.value[me].set(ue.r,ue.g,ue.b)}}v.render(u,y),re=requestAnimationFrame(ae)};return ae(),()=>{cancelAnimationFrame(re),ne&&z.current&&ne.disconnect(),window.removeEventListener("pointermove",$),V.dispose(),G.dispose(),v.dispose(),v.domElement.parentElement&&v.domElement.parentElement.removeChild(v.domElement)}},[]),e.jsx("div",{ref:z,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:C}})}const Zo=({topColor:o="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:r=.3,interactive:d=!1,className:f="",glowAmount:w=.005,pillarWidth:S=3,pillarHeight:m=.4,noiseIntensity:A=.5,mixBlendMode:R="screen",pillarRotation:L=0,quality:C="high"})=>{const b=a.useRef(null),_=a.useRef(null),z=a.useRef(null),E=a.useRef(null),I=a.useRef(null),O=a.useRef(null),q=a.useRef(null),g=a.useRef(new Ce(0,0)),n=a.useRef(0),[T,H]=a.useState(!0);return a.useEffect(()=>{const Y=document.createElement("canvas");Y.getContext("webgl")||Y.getContext("experimental-webgl")||H(!1)},[]),a.useEffect(()=>{if(!b.current||!T)return;const Y=b.current,M=Y.clientWidth,K=Y.clientHeight,p=new ot;I.current=p;const N=new Ft(-1,1,1,-1,0,1);O.current=N;const D=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),j=D||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let l=C;j&&C==="high"&&(l="medium"),D&&C!=="low"&&(l="low");const u={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},y=u[l]||u.medium;let v;try{v=new st({antialias:!1,alpha:!0,powerPreference:l==="high"?"high-performance":"low-power",precision:y.precision,stencil:!1,depth:!1})}catch{H(!1);return}v.setSize(M,K),v.setPixelRatio(y.pixelRatio),b.current.appendChild(v.domElement),z.current=v;const P=J=>{const de=new Fe(J);return new te(de.r,de.g,de.b)},G=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,V=`
      precision ${y.precision} float;

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

      const float STEP_MULT = ${y.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${y.iterations};
      const int WAVE_ITER = ${y.waveIterations};

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
    `,ie=L*Math.PI/180,W=Math.sin(.4),le=Math.cos(.4),ne=new Ke({vertexShader:G,fragmentShader:V,uniforms:{uTime:{value:0},uResolution:{value:new Ce(M,K)},uMouse:{value:g.current},uTopColor:{value:P(o)},uBottomColor:{value:P(t)},uIntensity:{value:i},uInteractive:{value:d},uGlowAmount:{value:w},uPillarWidth:{value:S},uPillarHeight:{value:m},uNoiseIntensity:{value:A},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(ie)},uPillarRotSin:{value:Math.sin(ie)},uWaveSin:{value:W},uWaveCos:{value:le}},transparent:!0,depthWrite:!1,depthTest:!1});E.current=ne;const $=new tt(2,2);q.current=$;const re=new Qe($,ne);p.add(re);let ae=null;const U=J=>{if(!d||ae)return;ae=window.setTimeout(()=>{ae=null},16);const de=Y.getBoundingClientRect(),Z=(J.clientX-de.left)/de.width*2-1,oe=-((J.clientY-de.top)/de.height)*2+1;g.current.set(Z,oe)};d&&Y.addEventListener("mousemove",U,{passive:!0});let me=performance.now();const ue=1e3/(l==="low"?30:60),ge=J=>{if(!E.current||!z.current||!I.current||!O.current)return;const de=J-me;if(de>=ue){n.current+=.016*r;const Z=n.current;E.current.uniforms.uTime.value=Z,E.current.uniforms.uRotCos.value=Math.cos(Z*.3),E.current.uniforms.uRotSin.value=Math.sin(Z*.3),z.current.render(I.current,O.current),me=J-de%ue}_.current=requestAnimationFrame(ge)};_.current=requestAnimationFrame(ge);let k=null;const X=()=>{k&&clearTimeout(k),k=window.setTimeout(()=>{if(!z.current||!E.current||!b.current)return;const J=b.current.clientWidth,de=b.current.clientHeight;z.current.setSize(J,de),E.current.uniforms.uResolution.value.set(J,de)},150)};return window.addEventListener("resize",X,{passive:!0}),()=>{window.removeEventListener("resize",X),d&&Y.removeEventListener("mousemove",U),_.current&&cancelAnimationFrame(_.current),z.current&&(z.current.dispose(),z.current.forceContextLoss(),Y.contains(z.current.domElement)&&Y.removeChild(z.current.domElement)),E.current&&E.current.dispose(),q.current&&q.current.dispose(),z.current=null,E.current=null,I.current=null,O.current=null,q.current=null,_.current=null}},[o,t,i,r,d,w,S,m,A,L,T,C]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),T?e.jsx("div",{ref:b,className:`light-pillar-container ${f}`,style:{mixBlendMode:R}}):e.jsx("div",{className:`light-pillar-fallback ${f}`,style:{mixBlendMode:R},children:"WebGL not supported"})]})},es=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,ts=`
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
`;function is({color:o="#ffffff",flakeSize:t=.01,minFlakeSize:i=1.25,pixelResolution:r=200,speed:d=1.25,depthFade:f=8,farPlane:w=20,brightness:S=1,gamma:m=.4545,density:A=.3,variant:R="square",direction:L=125,rainbow:C=!1,storm:b=!1,className:_="",style:z={}}){const E=a.useRef(null),I=a.useRef(0),O=a.useRef(!0),q=a.useRef(null),g=a.useRef(null),n=a.useRef(null),T=a.useMemo(()=>R==="round"?1:R==="snowflake"?2:0,[R]),H=a.useMemo(()=>{const M=new Fe(o);return new te(M.r,M.g,M.b)},[o]),Y=a.useCallback(()=>{n.current&&clearTimeout(n.current),n.current=window.setTimeout(()=>{const M=E.current,K=q.current,p=g.current;if(!M||!K||!p)return;const N=M.offsetWidth,D=M.offsetHeight;K.setSize(N,D),p.uniforms.uResolution.value.set(N,D)},100)},[]);return a.useEffect(()=>{const M=E.current;if(!M)return;const K=new IntersectionObserver(([p])=>{O.current=p.isIntersecting},{threshold:0});return K.observe(M),()=>K.disconnect()},[]),a.useEffect(()=>{const M=E.current;if(!M)return;const K=new ot,p=new Ft(-1,1,1,-1,0,1),N=new st({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.setSize(M.offsetWidth,M.offsetHeight),N.setClearColor(0,0),M.appendChild(N.domElement),q.current=N;const D=new Ke({vertexShader:es,fragmentShader:ts,uniforms:{uTime:{value:0},uResolution:{value:new Ce(M.offsetWidth,M.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:i},uPixelResolution:{value:r},uSpeed:{value:d},uDepthFade:{value:f},uFarPlane:{value:w},uColor:{value:H.clone()},uBrightness:{value:S},uGamma:{value:m},uDensity:{value:A},uVariant:{value:T},uDirection:{value:L*Math.PI/180},uRainbow:{value:C?1:0}},transparent:!0});g.current=D;const j=new tt(2,2);K.add(new Qe(j,D)),window.addEventListener("resize",Y);const l=performance.now(),u=()=>{I.current=requestAnimationFrame(u),O.current&&(D.uniforms.uTime.value=(performance.now()-l)*.001,N.render(K,p))};return u(),()=>{cancelAnimationFrame(I.current),window.removeEventListener("resize",Y),n.current&&clearTimeout(n.current),M.contains(N.domElement)&&M.removeChild(N.domElement),N.dispose(),j.dispose(),D.dispose(),q.current=null,g.current=null}},[Y]),a.useEffect(()=>{const M=g.current;M&&(M.uniforms.uFlakeSize.value=t,M.uniforms.uMinFlakeSize.value=i,M.uniforms.uPixelResolution.value=r,M.uniforms.uSpeed.value=b?d*4:d,M.uniforms.uDepthFade.value=f,M.uniforms.uFarPlane.value=w,M.uniforms.uBrightness.value=S,M.uniforms.uGamma.value=m,M.uniforms.uDensity.value=A,M.uniforms.uVariant.value=T,M.uniforms.uDirection.value=L*Math.PI/180,M.uniforms.uColor.value.copy(H),M.uniforms.uRainbow.value=C?1:0)},[t,i,r,d,f,w,S,m,A,T,L,H,C,b]),e.jsx("div",{ref:E,className:`pixel-snow-container ${_}`,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",contain:"layout style paint",...z}})}const Ai=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],ii={colors:Ai[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},ns=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],ni={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},oi={colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1},si={color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},ri={density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},ai={color1:"#b117f8",color2:"#2c0b2e",speed:20},li={color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,depthFade:3,farPlane:10,gamma:.4545,variant:"snowflake",rainbow:!1,storm:!1},Ye={cyberpunk:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},akira:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"mountainDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16715818,15415358,16715818],rightCars:[14342906,12499683,9410532],sticks:14342906}},golden:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"deepDistortion",length:400,roadWidth:18,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16724527,10694672,11015432],rightCars:[16645616,15982240,14859144],sticks:16645616}},split:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"LongRaceDistortion",length:400,roadWidth:10,islandWidth:5,lanesPerRoad:2,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:70,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16736115,15158624,16715818],rightCars:[10806246,8442324,5489350],sticks:10806246}},highway:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14441248,14459680,14426144],rightCars:[3361783,15066861,12568307],sticks:12970219}}},os=({onClose:o,floatingLinesConfig:t,setFloatingLinesConfig:i,lightPillarsConfig:r,setLightPillarsConfig:d,ballpitConfig:f,setBallpitConfig:w,silkConfig:S,setSilkConfig:m,galaxyConfig:A,setGalaxyConfig:R,gradientConfig:L,setGradientConfig:C,pixelSnowConfig:b,setPixelSnowConfig:_,hyperspeedConfig:z,setHyperspeedConfig:E})=>{const{activeBackground:I,floatingLinesConfig:O,setFloatingLinesConfig:q,lightPillarsConfig:g,setLightPillarsConfig:n,ballpitConfig:T,setBallpitConfig:H,silkConfig:Y,setSilkConfig:M,galaxyConfig:K,setGalaxyConfig:p,gradientConfig:N,setGradientConfig:D,pixelSnowConfig:j,setPixelSnowConfig:l,hyperspeedConfig:u,setHyperspeedConfig:y}=Ue(),v=t||O,P=i||q,G=r||g,V=d||n,ie=f||T,W=w||H,le=S||Y,ne=m||M,$=A||K,re=R||p,ae=L||N,U=C||D,me=b||j,ee=_||l,ue=z||u,ge=E||y,k=v||ii,X=(c,pe)=>{P&&P({...k,[c]:pe})},J=c=>{const pe=k.enabledWaves,_e=pe.includes(c)?pe.filter(wt=>wt!==c):[...pe,c];X("enabledWaves",_e)},de=(c,pe)=>{const _e=[...k.colors];_e[c]=pe,X("colors",_e)},Z=G||ni,oe=(c,pe)=>{V?V({...Z,[c]:pe}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},se=ie||oi,xe=(c,pe)=>{W&&W({...se,[c]:pe})},Re=(c,pe)=>{const _e=[...se.colors];_e[c]=pe,xe("colors",_e)},Ae=le||si,Ee=(c,pe)=>{ne&&ne({...Ae,[c]:pe})},ve=$||ri,ye=(c,pe)=>{re&&re({...ve,[c]:pe})},Me=ae||ai,$e=(c,pe)=>{U&&U({...Me,[c]:pe})},be=me||li,Te=(c,pe)=>{ee&&ee({...be,[c]:pe})},Ie=ue||Ye.cyberpunk,yt=c=>{ge&&Ye[c]&&ge(Ye[c])},Xe=(c,pe)=>{ge&&ge({...Ie,[c]:pe})},bt=()=>{I==="floatinglines"&&P?P(ii):I==="lightpillars"&&V?V(ni):I==="ballpit"&&W?W(oi):I==="silk"&&ne?ne(si):I==="galaxy"&&re?re(ri):I==="gradient"&&U?U(ai):I==="pixelsnow"&&ee?ee(li):I==="hyperspeed"&&ge&&ge(Ye.cyberpunk)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:bt,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(hn,{})}),e.jsx("button",{onClick:o,className:"close-btn",children:e.jsx(ht,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[I==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:Ai.map(c=>e.jsx("button",{className:"preset-btn",onClick:()=>X("colors",c.colors),style:{background:`linear-gradient(to right, ${c.colors[0]}, ${c.colors[1]}, ${c.colors[2]})`},title:c.name,children:JSON.stringify(k.colors)===JSON.stringify(c.colors)&&e.jsx(pi,{})},c.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:k.colors.map((c,pe)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:c,onChange:_e=>de(pe,_e.target.value)}),e.jsx("span",{className:"hex-code",children:c})]},pe))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:k.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:k.count,onChange:c=>X("count",parseInt(c.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:k.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:k.distance,onChange:c=>X("distance",parseInt(c.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Amplitud de Onda ",e.jsx("span",{children:k.amplitude})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:k.amplitude||1,onChange:c=>X("amplitude",parseFloat(c.target.value))}),e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:k.bendRadius})]}),e.jsx("input",{type:"range",min:"5",max:"10",step:"0.1",value:k.bendRadius,onChange:c=>X("bendRadius",parseFloat(c.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:k.bendStrength})]}),e.jsx("input",{type:"range",min:"-7",max:"7",step:"0.1",value:k.bendStrength,onChange:c=>X("bendStrength",parseFloat(c.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(c=>e.jsx("button",{className:`toggle-btn ${k.enabledWaves.includes(c)?"active":""}`,onClick:()=>J(c),children:c.charAt(0).toUpperCase()+c.slice(1)},c))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${k.interactive!==!1?"active":""}`,onClick:()=>X("interactive",k.interactive===!1),style:{width:"100%",textAlign:"center"},children:k.interactive!==!1?"Activada (Ratón)":"Desactivada"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${k.rainbow?"active":""}`,onClick:()=>X("rainbow",!k.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"})]})]}),I==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:Z.topColor,onChange:c=>oe("topColor",c.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:Z.bottomColor,onChange:c=>oe("bottomColor",c.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:Z.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:Z.intensity,onChange:c=>oe("intensity",parseFloat(c.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:Z.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:Z.rotationSpeed,onChange:c=>oe("rotationSpeed",parseFloat(c.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:Z.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:Z.pillarWidth,onChange:c=>oe("pillarWidth",parseFloat(c.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[Z.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:Z.pillarRotation,onChange:c=>oe("pillarRotation",parseInt(c.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:Z.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:Z.pillarHeight,onChange:c=>oe("pillarHeight",parseFloat(c.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:Z.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:Z.noiseIntensity,onChange:c=>oe("noiseIntensity",parseFloat(c.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:Z.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:Z.glowAmount,onChange:c=>oe("glowAmount",parseFloat(c.target.value))})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"toggles-row",children:ns.map(c=>e.jsx("button",{className:`toggle-btn ${Z.quality===c.value?"active":""}`,onClick:()=>oe("quality",c.value),children:c.label},c.value))})}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${Z.interactive!==!1?"active":""}`,onClick:()=>oe("interactive",Z.interactive===!1),style:{width:"100%",textAlign:"center"},children:Z.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),I==="ballpit"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsx("div",{className:"color-pickers",children:se.colors.map((c,pe)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:c,onChange:_e=>Re(pe,_e.target.value)}),e.jsx("span",{className:"hex-code",children:c})]},pe))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad ",e.jsx("span",{children:se.count})]}),e.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:se.count,onChange:c=>xe("count",parseInt(c.target.value))}),e.jsxs("label",{children:["Gravedad ",e.jsx("span",{children:se.gravity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:se.gravity,onChange:c=>xe("gravity",parseFloat(c.target.value))}),e.jsxs("label",{children:["Fricción ",e.jsx("span",{children:se.friction})]}),e.jsx("input",{type:"range",min:"0.8",max:"1",step:"0.001",value:se.friction,onChange:c=>xe("friction",parseFloat(c.target.value))}),e.jsxs("label",{children:["Rebote Pared ",e.jsx("span",{children:se.wallBounce})]}),e.jsx("input",{type:"range",min:"0",max:"1.5",step:"0.05",value:se.wallBounce,onChange:c=>xe("wallBounce",parseFloat(c.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${se.followCursor?"active":""}`,onClick:()=>xe("followCursor",!se.followCursor),style:{width:"100%",textAlign:"center"},children:se.followCursor?"Seguir Cursor":"Cursor Libre"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Eventos Divertidos"}),e.jsxs("div",{className:"toggles-row",children:[e.jsx("button",{className:`toggle-btn ${se.enableExplosion?"active":""}`,onClick:()=>xe("enableExplosion",!se.enableExplosion),title:"Haz clic para explotar las bolas",children:"💥 Explosión al Clic"}),e.jsx("button",{className:`toggle-btn ${se.rainbow?"active":""}`,onClick:()=>xe("rainbow",!se.rainbow),title:"Ciclo de colores automático",children:"🌈 Modo Arcoíris"})]})]})]}),I==="silk"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:Ae.color,onChange:c=>Ee("color",c.target.value)}),e.jsx("span",{className:"hex-code",children:Ae.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:Ae.speed})]}),e.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:Ae.speed,onChange:c=>Ee("speed",parseFloat(c.target.value))}),e.jsxs("label",{children:["Escala ",e.jsx("span",{children:Ae.scale})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:Ae.scale,onChange:c=>Ee("scale",parseFloat(c.target.value))}),e.jsxs("label",{children:["Ruido ",e.jsx("span",{children:Ae.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:Ae.noiseIntensity,onChange:c=>Ee("noiseIntensity",parseFloat(c.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[Ae.rotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:Ae.rotation,onChange:c=>Ee("rotation",parseInt(c.target.value))})]})]}),I==="galaxy"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:ve.density})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:ve.density,onChange:c=>ye("density",parseFloat(c.target.value))}),e.jsxs("label",{children:["Intensidad Brillo ",e.jsx("span",{children:ve.glowIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.glowIntensity,onChange:c=>ye("glowIntensity",parseFloat(c.target.value))}),e.jsxs("label",{children:["Saturación ",e.jsx("span",{children:ve.saturation})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.saturation,onChange:c=>ye("saturation",parseFloat(c.target.value))}),e.jsxs("label",{children:["Cambio de Tono (Hue) ",e.jsx("span",{children:ve.hueShift})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:ve.hueShift,onChange:c=>ye("hueShift",parseFloat(c.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad Rotación ",e.jsx("span",{children:ve.rotationSpeed})]}),e.jsx("input",{type:"range",min:"-0.5",max:"0.5",step:"0.01",value:ve.rotationSpeed,onChange:c=>ye("rotationSpeed",parseFloat(c.target.value))}),e.jsxs("label",{children:["Velocidad Estrellas ",e.jsx("span",{children:ve.starSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.starSpeed,onChange:c=>ye("starSpeed",parseFloat(c.target.value))}),e.jsxs("label",{children:["Velocidad Animación ",e.jsx("span",{children:ve.speed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.speed,onChange:c=>ye("speed",parseFloat(c.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${ve.rainbow?"active":""}`,onClick:()=>ye("rainbow",!ve.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${ve.warp?"active":""}`,onClick:()=>ye("warp",!ve.warp),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🚀 Velocidad Warp"})]})]}),I==="gradient"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:Me.color1,onChange:c=>$e("color1",c.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:Me.color2,onChange:c=>$e("color2",c.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad (segundos) ",e.jsxs("span",{children:[Me.speed,"s"]})]}),e.jsx("input",{type:"range",min:"1",max:"60",step:"1",value:Me.speed,onChange:c=>$e("speed",parseInt(c.target.value))})]})]}),I==="pixelsnow"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:be.color,onChange:c=>Te("color",c.target.value)}),e.jsx("span",{className:"hex-code",children:be.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Variante"}),e.jsx("div",{className:"toggles-row",children:["snowflake","square","round"].map(c=>e.jsx("button",{className:`toggle-btn ${be.variant===c?"active":""}`,onClick:()=>Te("variant",c),children:c.charAt(0).toUpperCase()+c.slice(1)},c))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:be.speed})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:be.speed,onChange:c=>Te("speed",parseFloat(c.target.value))}),e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:be.density})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:be.density,onChange:c=>Te("density",parseFloat(c.target.value))}),e.jsxs("label",{children:["Dirección ",e.jsxs("span",{children:[be.direction,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:be.direction,onChange:c=>Te("direction",parseInt(c.target.value))}),e.jsxs("label",{children:["Tamaño Copo ",e.jsx("span",{children:be.flakeSize})]}),e.jsx("input",{type:"range",min:"0.005",max:"0.05",step:"0.001",value:be.flakeSize,onChange:c=>Te("flakeSize",parseFloat(c.target.value))}),e.jsxs("label",{children:["Brillo ",e.jsx("span",{children:be.brightness})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:be.brightness,onChange:c=>Te("brightness",parseFloat(c.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${be.rainbow?"active":""}`,onClick:()=>Te("rainbow",!be.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${be.storm?"active":""}`,onClick:()=>Te("storm",!be.storm),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🌪️ Modo Tormenta"})]})]}),I==="hyperspeed"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Estilo Visual"}),e.jsx("div",{className:"toggles-row",style:{flexWrap:"wrap"},children:Object.keys(Ye).map(c=>e.jsx("button",{className:`toggle-btn ${JSON.stringify(Ie.colors)===JSON.stringify(Ye[c].colors)?"active":""}`,onClick:()=>yt(c),children:c.charAt(0).toUpperCase()+c.slice(1)},c))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Geometría"}),e.jsxs("label",{children:["Ancho Carretera ",e.jsx("span",{children:Ie.roadWidth})]}),e.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:Ie.roadWidth,onChange:c=>Xe("roadWidth",parseFloat(c.target.value))}),e.jsxs("label",{children:["Ancho Isla ",e.jsx("span",{children:Ie.islandWidth})]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:Ie.islandWidth,onChange:c=>Xe("islandWidth",parseFloat(c.target.value))}),e.jsxs("label",{children:["Carriles ",e.jsx("span",{children:Ie.lanesPerRoad})]}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:Ie.lanesPerRoad,onChange:c=>Xe("lanesPerRoad",parseInt(c.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Distorsión"}),e.jsxs("select",{value:Ie.distortion,onChange:c=>Xe("distortion",c.target.value),style:{width:"100%",padding:"8px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",color:"white",border:"1px solid rgba(255, 255, 255, 0.2)",marginTop:"5px",cursor:"pointer"},children:[e.jsx("option",{style:{color:"black"},value:"turbulentDistortion",children:"Turbulent"}),e.jsx("option",{style:{color:"black"},value:"deepDistortion",children:"Deep"}),e.jsx("option",{style:{color:"black"},value:"mountainDistortion",children:"Mountain"}),e.jsx("option",{style:{color:"black"},value:"xyDistortion",children:"XY"}),e.jsx("option",{style:{color:"black"},value:"LongRaceDistortion",children:"Long Race"})]})]})]})]})]})},ss=({effectOptions:o=Ye.cyberpunk})=>{const t=a.useRef(null),i=a.useRef(null);return a.useEffect(()=>{if(i.current){i.current.dispose();const j=document.getElementById("lights");if(j)for(;j.firstChild;)j.removeChild(j.firstChild)}const r={uFreq:{value:new te(3,6,10)},uAmp:{value:new te(30,30,20)}},d={uFreq:{value:new Ce(5,2)},uAmp:{value:new Ce(25,15)}},f={uFreq:{value:new Ce(2,3)},uAmp:{value:new Ce(35,10)}},w={uFreq:{value:new qt(4,8,8,1)},uAmp:{value:new qt(25,5,10,10)}},S={uFreq:{value:new Ce(4,8)},uAmp:{value:new Ce(10,20)},uPowY:{value:new Ce(20,2)}};let m=j=>Math.sin(j)*.5+.5;const A={mountainDistortion:{uniforms:r,getDistortion:`
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
        `,getJS:(j,l)=>{let u=.02,y=r.uFreq.value,v=r.uAmp.value,P=new te(Math.cos(j*Math.PI*y.x+l)*v.x-Math.cos(u*Math.PI*y.x+l)*v.x,m(j*Math.PI*y.y+l)*v.y-m(u*Math.PI*y.y+l)*v.y,m(j*Math.PI*y.z+l)*v.z-m(u*Math.PI*y.z+l)*v.z),G=new te(2,2,2),V=new te(0,0,-5);return P.multiply(G).add(V)}},xyDistortion:{uniforms:d,getDistortion:`
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
        `,getJS:(j,l)=>{let u=.02,y=d.uFreq.value,v=d.uAmp.value,P=new te(Math.cos(j*Math.PI*y.x+l)*v.x-Math.cos(u*Math.PI*y.x+l)*v.x,Math.sin(j*Math.PI*y.y+l+Math.PI/2)*v.y-Math.sin(u*Math.PI*y.y+l+Math.PI/2)*v.y,0),G=new te(2,.4,1),V=new te(0,0,-3);return P.multiply(G).add(V)}},LongRaceDistortion:{uniforms:f,getDistortion:`
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
        `,getJS:(j,l)=>{let u=.0125,y=f.uFreq.value,v=f.uAmp.value,P=new te(Math.sin(j*Math.PI*y.x+l)*v.x-Math.sin(u*Math.PI*y.x+l)*v.x,Math.sin(j*Math.PI*y.y+l)*v.y-Math.sin(u*Math.PI*y.y+l)*v.y,0),G=new te(1,1,0),V=new te(0,0,-5);return P.multiply(G).add(V)}},turbulentDistortion:{uniforms:w,getDistortion:`
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
        `,getJS:(j,l)=>{const u=w.uFreq.value,y=w.uAmp.value,v=W=>Math.cos(Math.PI*W*u.x+l)*y.x+Math.pow(Math.cos(Math.PI*W*u.y+l*(u.y/u.x)),2)*y.y,P=W=>-m(Math.PI*W*u.z+l)*y.z-Math.pow(m(Math.PI*W*u.w+l/(u.z/u.w)),5)*y.w;let G=new te(v(j)-v(j+.007),P(j)-P(j+.007),0),V=new te(-2,-5,0),ie=new te(0,0,-10);return G.multiply(V).add(ie)}},turbulentDistortionStill:{uniforms:w,getDistortion:`
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
        `},deepDistortionStill:{uniforms:S,getDistortion:`
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
        `},deepDistortion:{uniforms:S,getDistortion:`
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
        `,getJS:(j,l)=>{const u=S.uFreq.value,y=S.uAmp.value,v=S.uPowY.value,P=le=>Math.sin(le*Math.PI*u.x+l)*y.x,G=le=>Math.pow(le*v.x,v.y)+Math.sin(le*Math.PI*u.y+l)*y.y;let V=new te(P(j)-P(j+.01),G(j)-G(j+.01),0),ie=new te(-2,-4,0),W=new te(0,0,-10);return V.multiply(ie).add(W)}}};class R{constructor(l,u={}){this.options=u,this.options.distortion==null&&(this.options.distortion={uniforms:L,getDistortion:C}),this.container=l,this.renderer=new st({antialias:!1,alpha:!0}),this.renderer.setSize(l.offsetWidth,l.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new pn(this.renderer),l.append(this.renderer.domElement),this.camera=new gi(u.fov,l.offsetWidth/l.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new ot,this.scene.background=null;let y=new gn(u.colors.background,u.length*.2,u.length*500);this.scene.fog=y,this.fogUniforms={fogColor:{value:y.color},fogNear:{value:y.near},fogFar:{value:y.far}},this.clock=new kt,this.assets={},this.disposed=!1,this.road=new T(this,u),this.leftCarLights=new E(this,u,u.colors.leftCars,u.movingAwaySpeed,new Ce(0,1-u.carLightsFade)),this.rightCarLights=new E(this,u,u.colors.rightCars,u.movingCloserSpeed,new Ce(1,0+u.carLightsFade)),this.leftSticks=new q(this,u),this.fovTarget=u.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const l=this.container.offsetWidth,u=this.container.offsetHeight;this.renderer.setSize(l,u),this.camera.aspect=l/u,this.camera.updateProjectionMatrix(),this.composer.setSize(l,u)}initPasses(){this.renderPass=new vn(this.scene,this.camera),this.bloomPass=new Gt(this.camera,new xn({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const l=new Gt(this.camera,new Ze({preset:yn.MEDIUM,searchImage:Ze.searchImageDataURL,areaImage:Ze.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,l.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(l)}loadAssets(){const l=this.assets;return new Promise(u=>{const y=new bn(u),v=new Image,P=new Image;l.smaa={},v.addEventListener("load",function(){l.smaa.search=this,y.itemEnd("smaa-search")}),P.addEventListener("load",function(){l.smaa.area=this,y.itemEnd("smaa-area")}),y.itemStart("smaa-search"),y.itemStart("smaa-area"),v.src=Ze.searchImageDataURL,P.src=Ze.areaImageDataURL})}init(){this.initPasses();const l=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-l.roadWidth/2-l.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(l.roadWidth/2+l.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(l.roadWidth+l.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(l){this.options.onSpeedUp&&this.options.onSpeedUp(l),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(l){this.options.onSlowDown&&this.options.onSlowDown(l),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(l){this.options.onSpeedUp&&this.options.onSpeedUp(l),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(l){this.options.onSlowDown&&this.options.onSlowDown(l),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(l){l.preventDefault()}update(l){let u=Math.exp(-(-60*Math.log2(.9))*l);this.speedUp+=z(this.speedUp,this.speedUpTarget,u,1e-5),this.timeOffset+=this.speedUp*l;let y=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(y),this.leftCarLights.update(y),this.leftSticks.update(y),this.road.update(y);let v=!1,P=z(this.camera.fov,this.fovTarget,u);if(P!==0&&(this.camera.fov+=P*l*6,v=!0),this.options.distortion.getJS){const G=this.options.distortion.getJS(.025,y);this.camera.lookAt(new te(this.camera.position.x+G.x,this.camera.position.y+G.y,this.camera.position.z+G.z)),v=!0}v&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(l){this.composer.render(l)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(l,u,y){this.composer.setSize(l,u,y)}tick(){if(this.disposed||!this)return;if(D(this.renderer,this.setSize)){const u=this.renderer.domElement;this.camera.aspect=u.clientWidth/u.clientHeight,this.camera.updateProjectionMatrix()}const l=this.clock.getDelta();this.render(l),this.update(l),requestAnimationFrame(this.tick)}}const L={uDistortionX:{value:new Ce(80,3)},uDistortionY:{value:new Ce(-40,2.5)}},C=`
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
    `,b=j=>Array.isArray(j)?Math.random()*(j[1]-j[0])+j[0]:Math.random()*j,_=j=>Array.isArray(j)?j[Math.floor(Math.random()*j.length)]:j;function z(j,l,u=.1,y=.001){let v=(l-j)*u;return Math.abs(v)<y&&(v=l-j),v}class E{constructor(l,u,y,v,P){this.webgl=l,this.options=u,this.colors=y,this.speed=v,this.fade=P}init(){const l=this.options;let u=new wn(new te(0,0,0),new te(0,0,-1)),y=new Sn(u,40,1,8,!1),v=new Yt().copy(y);v.instanceCount=l.lightPairsPerRoadWay*2;let P=l.roadWidth/l.lanesPerRoad,G=[],V=[],ie=[],W=this.colors;Array.isArray(W)?W=W.map($=>new Fe($)):W=new Fe(W);for(let $=0;$<l.lightPairsPerRoadWay;$++){let re=b(l.carLightsRadius),ae=b(l.carLightsLength),U=b(this.speed),ee=$%l.lanesPerRoad*P-l.roadWidth/2+P/2,ue=b(l.carWidthPercentage)*P,ge=b(l.carShiftX)*P;ee+=ge;let k=b(l.carFloorSeparation)+re*1.3,X=-b(l.length);G.push(ee-ue/2),G.push(k),G.push(X),G.push(ee+ue/2),G.push(k),G.push(X),V.push(re),V.push(ae),V.push(U),V.push(re),V.push(ae),V.push(U);let J=_(W);ie.push(J.r),ie.push(J.g),ie.push(J.b),ie.push(J.r),ie.push(J.g),ie.push(J.b)}v.setAttribute("aOffset",new He(new Float32Array(G),3,!1)),v.setAttribute("aMetrics",new He(new Float32Array(V),3,!1)),v.setAttribute("aColor",new He(new Float32Array(ie),3,!1));let le=new Ke({fragmentShader:I,vertexShader:O,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:l.length},uFade:{value:this.fade}},this.webgl.fogUniforms,l.distortion.uniforms)});le.onBeforeCompile=$=>{$.vertexShader=$.vertexShader.replace("#include <getDistortion_vertex>",l.distortion.getDistortion)};let ne=new Qe(v,le);ne.frustumCulled=!1,this.webgl.scene.add(ne),this.mesh=ne}update(l){this.mesh.material.uniforms.uTime.value=l}}const I=`
      #define USE_FOG;
      ${De.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${De.fog_fragment}
      }
    `,O=`
      #define USE_FOG;
      ${De.fog_pars_vertex}
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
        ${De.fog_vertex}
      }
    `;class q{constructor(l,u){this.webgl=l,this.options=u}init(){const l=this.options,u=new tt(1,1);let y=new Yt().copy(u),v=l.totalSideLightSticks;y.instanceCount=v;let P=l.length/(v-1);const G=[],V=[],ie=[];let W=l.colors.sticks;Array.isArray(W)?W=W.map($=>new Fe($)):W=new Fe(W);for(let $=0;$<v;$++){let re=b(l.lightStickWidth),ae=b(l.lightStickHeight);G.push(($-1)*P*2+P*Math.random());let U=_(W);V.push(U.r),V.push(U.g),V.push(U.b),ie.push(re),ie.push(ae)}y.setAttribute("aOffset",new He(new Float32Array(G),1,!1)),y.setAttribute("aColor",new He(new Float32Array(V),3,!1)),y.setAttribute("aMetrics",new He(new Float32Array(ie),2,!1));const le=new Ke({fragmentShader:n,vertexShader:g,side:Wt,uniforms:Object.assign({uTravelLength:{value:l.length},uTime:{value:0}},this.webgl.fogUniforms,l.distortion.uniforms)});le.onBeforeCompile=$=>{$.vertexShader=$.vertexShader.replace("#include <getDistortion_vertex>",l.distortion.getDistortion)};const ne=new Qe(y,le);ne.frustumCulled=!1,this.webgl.scene.add(ne),this.mesh=ne}update(l){this.mesh.material.uniforms.uTime.value=l}}const g=`
      #define USE_FOG;
      ${De.fog_pars_vertex}
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
        ${De.fog_vertex}
      }
    `,n=`
      #define USE_FOG;
      ${De.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${De.fog_fragment}
      }
    `;class T{constructor(l,u){this.webgl=l,this.options=u,this.uTime={value:0}}createPlane(l,u,y){const v=this.options;let P=100;const G=new tt(y?v.roadWidth:v.islandWidth,v.length,20,P);let V={uTravelLength:{value:v.length},uColor:{value:new Fe(y?v.colors.roadColor:v.colors.islandColor)},uTime:this.uTime};y&&(V=Object.assign(V,{uLanes:{value:v.lanesPerRoad},uBrokenLinesColor:{value:new Fe(v.colors.brokenLines)},uShoulderLinesColor:{value:new Fe(v.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:v.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:v.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:v.brokenLinesWidthPercentage}}));const ie=new Ke({fragmentShader:y?p:Y,vertexShader:N,side:Wt,uniforms:Object.assign(V,this.webgl.fogUniforms,v.distortion.uniforms)});ie.onBeforeCompile=le=>{le.vertexShader=le.vertexShader.replace("#include <getDistortion_vertex>",v.distortion.getDistortion)};const W=new Qe(G,ie);return W.rotation.x=-Math.PI/2,W.position.z=-v.length/2,W.position.x+=(this.options.islandWidth/2+v.roadWidth/2)*l,this.webgl.scene.add(W),W}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(l){this.uTime.value=l}}const H=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${De.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${De.fog_fragment}
      }
    `,Y=H.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),p=H.replace("#include <roadMarkings_fragment>",`
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
    `),N=`
      #define USE_FOG;
      uniform float uTime;
      ${De.fog_pars_vertex}
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
        ${De.fog_vertex}
      }
    `;function D(j,l){const u=j.domElement,y=u.clientWidth,v=u.clientHeight,P=u.width!==y||u.height!==v;return P&&l(y,v,!1),P}return(function(){const j=document.getElementById("lights"),l={...o};l.distortion=A[l.distortion];const u=new R(j,l);i.current=u,u.loadAssets().then(u.init)})(),()=>{i.current&&i.current.dispose()}},[o]),e.jsx("div",{id:"lights",ref:t})},rs=({floatingLinesConfig:o,lightPillarsConfig:t,ballpitConfig:i,silkConfig:r,galaxyConfig:d,gradientConfig:f,pixelSnowConfig:w,hyperspeedConfig:S})=>{const{activeBackground:m,floatingLinesConfig:A,lightPillarsConfig:R,ballpitConfig:L,silkConfig:C,galaxyConfig:b,gradientConfig:_,pixelSnowConfig:z,hyperspeedConfig:E}=Ue(),I=o||A,O=t||R,q=i||L,g=r||C,n=d||b,T=f||_,H=w||z,Y=S||E,M=I||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},K=O||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},p=q||{colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1,rainbow:!1},N=g||{color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},D=n||{density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},j=T||{color1:"#b117f8",color2:"#2c0b2e",speed:20},l=H||{color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,variant:"snowflake",rainbow:!1,storm:!1};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(Pe,{mode:"wait",children:[m==="gradient"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(_o,{color1:j.color1,color2:j.color2,speed:j.speed})},"gradient"),m==="galaxy"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(No,{density:D.density,glowIntensity:D.glowIntensity,saturation:D.saturation,hueShift:D.hueShift,twinkleIntensity:D.twinkleIntensity,rotationSpeed:D.rotationSpeed,starSpeed:D.starSpeed,speed:D.speed,rainbow:D.rainbow,warp:D.warp})},"galaxy"),m==="silk"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(yi,{speed:N.speed,scale:N.scale,color:N.color,noiseIntensity:N.noiseIntensity,rotation:N.rotation})},"silk"),m==="ballpit"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:e.jsx(Jo,{count:p.count,gravity:p.gravity,friction:p.friction,wallBounce:p.wallBounce,followCursor:p.followCursor,colors:p.colors,enableExplosion:p.enableExplosion,rainbow:p.rainbow})},"ballpit"),m==="floatinglines"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx($o,{linesGradient:M.colors,lineCount:M.count,lineDistance:M.distance,animationSpeed:.5,bendRadius:M.bendRadius,bendStrength:M.bendStrength,enabledWaves:M.enabledWaves,interactive:M.interactive??!1,parallax:M.parallax??!1,amplitude:M.amplitude??1,rainbow:M.rainbow})},"floatinglines"),m==="lightpillars"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Zo,{topColor:K.topColor,bottomColor:K.bottomColor,intensity:K.intensity,rotationSpeed:K.rotationSpeed,glowAmount:K.glowAmount??.002,pillarWidth:K.pillarWidth,pillarHeight:K.pillarHeight,noiseIntensity:K.noiseIntensity,pillarRotation:K.pillarRotation,interactive:K.interactive??!0,quality:K.quality??"high"})},"lightpillars"),m==="pixelsnow"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(is,{color:l.color,flakeSize:l.flakeSize,minFlakeSize:l.minFlakeSize,pixelResolution:l.pixelResolution,speed:l.speed,density:l.density,direction:l.direction,brightness:l.brightness,variant:l.variant,rainbow:l.rainbow,storm:l.storm})},"pixelsnow"),m==="hyperspeed"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(ss,{effectOptions:Y})},"hyperspeed")]})})},as=({onItemClick:o,isOpen:t,onToggle:i,position:r="left",colors:d=["#B19EEF","#5227FF"],items:f=[],socialItems:w=[],displaySocials:S=!0,displayItemNumbering:m=!0,className:A,logoUrl:R=null,menuButtonColor:L="#fff",openMenuButtonColor:C="#000",accentColor:b="#5227FF",changeMenuColorOnOpen:_=!0,isFixed:z=!1,closeOnClickAway:E=!0,onMenuOpen:I,onMenuClose:O})=>{const[q,g]=a.useState(!1),n=typeof t=="boolean",T=n?t:q,H=a.useRef(!1),Y=a.useRef(null),M=a.useRef(null),K=a.useRef([]),p=a.useRef(null),N=a.useRef(null),D=a.useRef(null),j=a.useRef(null),l=a.useRef(null),[u,y]=a.useState(["Menu","Close"]),v=a.useRef(null),P=a.useRef(null),G=a.useRef(null),V=a.useRef(null),ie=a.useRef(null),W=a.useRef(null),le=a.useRef(!1),ne=a.useRef(null);a.useLayoutEffect(()=>{const k=B.context(()=>{const X=Y.current,J=M.current,de=p.current,Z=N.current,oe=D.current,se=j.current;if(!X||!de||!Z||!oe||!se)return;let xe=[];J&&(xe=Array.from(J.querySelectorAll(".sm-prelayer"))),K.current=xe;const Re=r==="left"?-100:100;B.set([X,...xe],{xPercent:Re}),B.set(de,{transformOrigin:"50% 50%",rotate:0}),B.set(Z,{transformOrigin:"50% 50%",rotate:90}),B.set(oe,{rotate:0,transformOrigin:"50% 50%"}),B.set(se,{yPercent:0}),W.current&&B.set(W.current,{color:L})});return()=>k.revert()},[L,r]);const $=a.useCallback(()=>{const k=Y.current,X=K.current;if(!k)return null;v.current?.kill(),P.current&&(P.current.kill(),P.current=null),ne.current?.kill();const J=Array.from(k.querySelectorAll(".sm-panel-itemLabel")),de=Array.from(k.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),Z=k.querySelector(".sm-socials-title"),oe=Array.from(k.querySelectorAll(".sm-socials-link")),se=X.map(ye=>({el:ye,start:Number(B.getProperty(ye,"xPercent"))})),xe=Number(B.getProperty(k,"xPercent"));J.length&&B.set(J,{yPercent:140,rotate:10}),de.length&&B.set(de,{"--sm-num-opacity":0}),Z&&B.set(Z,{opacity:0}),oe.length&&B.set(oe,{y:25,opacity:0});const Re=B.timeline({paused:!0});se.forEach((ye,Me)=>{Re.fromTo(ye.el,{xPercent:ye.start},{xPercent:0,duration:.8,ease:"power4.out"},Me*.07)});const Ee=(se.length?(se.length-1)*.07:0)+(se.length?.08:0),ve=1;if(Re.fromTo(k,{xPercent:xe},{xPercent:0,duration:ve,ease:"power4.out"},Ee),J.length){const Me=Ee+ve*.15;Re.to(J,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},Me),de.length&&Re.to(de,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},Me+.1)}if(Z||oe.length){const ye=Ee+ve*.4;Z&&Re.to(Z,{opacity:1,duration:.5,ease:"power2.out"},ye),oe.length&&Re.to(oe,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{B.set(oe,{clearProps:"opacity"})}},ye+.04)}return v.current=Re,Re},[]),re=a.useCallback(()=>{if(le.current)return;le.current=!0;const k=$();k?(k.eventCallback("onComplete",()=>{le.current=!1}),k.play(0)):le.current=!1},[$]),ae=a.useCallback(()=>{v.current?.kill(),v.current=null,ne.current?.kill();const k=Y.current,X=K.current;if(!k)return;const J=[...X,k];P.current?.kill();const de=r==="left"?-100:100;P.current=B.to(J,{xPercent:de,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const Z=Array.from(k.querySelectorAll(".sm-panel-itemLabel"));Z.length&&B.set(Z,{yPercent:140,rotate:10});const oe=Array.from(k.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));oe.length&&B.set(oe,{"--sm-num-opacity":0});const se=k.querySelector(".sm-socials-title"),xe=Array.from(k.querySelectorAll(".sm-socials-link"));se&&B.set(se,{opacity:0}),xe.length&&B.set(xe,{y:25,opacity:0}),le.current=!1}})},[r]),U=a.useCallback(k=>{const X=D.current;X&&(G.current?.kill(),k?G.current=B.to(X,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):G.current=B.to(X,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),me=a.useCallback(k=>{const X=W.current;if(X)if(ie.current?.kill(),_){const J=k?C:L;ie.current=B.to(X,{color:J,delay:.18,duration:.3,ease:"power2.out"})}else B.set(X,{color:L})},[C,L,_]);mt.useEffect(()=>{if(W.current)if(_){const k=H.current?C:L;B.set(W.current,{color:k})}else B.set(W.current,{color:L})},[_,L,C]);const ee=a.useCallback(k=>{const X=j.current;if(!X)return;V.current?.kill();const J=k?"Menu":"Close",de=k?"Close":"Menu",Z=3,oe=[J];let se=J;for(let Ae=0;Ae<Z;Ae++)se=se==="Menu"?"Close":"Menu",oe.push(se);se!==de&&oe.push(de),oe.push(de),y(oe),B.set(X,{yPercent:0});const xe=oe.length,Re=(xe-1)/xe*100;V.current=B.to(X,{yPercent:-Re,duration:.5+xe*.07,ease:"power4.out"})},[]),ue=a.useCallback(()=>{if(n)i&&i(!T);else{const k=!H.current;H.current=k,g(k),k?(I?.(),re()):(O?.(),ae()),U(k),me(k),ee(k)}},[n,t,i,T,re,ae,U,me,ee,I,O]);mt.useEffect(()=>{n&&(H.current=t,t?(I?.(),re()):(O?.(),ae()),U(t),me(t),ee(t))},[t,n,re,ae,U,me,ee,I,O]);const ge=a.useCallback(()=>{n?T&&i&&i(!1):H.current&&(H.current=!1,g(!1),O?.(),ae(),U(!1),me(!1),ee(!1))},[n,T,i,ae,U,me,ee,O]);return e.jsxs("div",{className:(A?A+" ":"")+"staggered-menu-wrapper"+(z?" fixed-wrapper":""),style:b?{"--sm-accent":b}:void 0,"data-position":r,"data-open":T||void 0,children:[T&&E&&e.jsx("div",{className:"sm-backdrop",onClick:()=>ge(),style:{position:"absolute",inset:0,zIndex:5,pointerEvents:"auto"},"aria-hidden":"true"}),e.jsx("div",{ref:M,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let X=[...d&&d.length?d.slice(0,4):["#1e1e22","#35353c"]];if(X.length>=3){const J=Math.floor(X.length/2);X.splice(J,1)}return X.map((J,de)=>e.jsx("div",{className:"sm-prelayer",style:{background:J}},de))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:R?e.jsx("img",{src:R,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:W,className:"sm-toggle","aria-label":T?"Close menu":"Open menu","aria-expanded":T,"aria-controls":"staggered-menu-panel",onClick:ue,type:"button",children:[e.jsx("span",{ref:l,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:j,className:"sm-toggle-textInner",children:u.map((k,X)=>e.jsx("span",{className:"sm-toggle-line",children:k},X))})}),e.jsxs("span",{ref:D,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:p,className:"sm-icon-line"}),e.jsx("span",{ref:N,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:Y,className:"staggered-menu-panel","aria-hidden":!T,children:e.jsxs("div",{className:"sm-panel-inner",children:[e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":m||void 0,children:f&&f.length?f.map((k,X)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:J=>{J.preventDefault(),o&&o(k.id)},"aria-label":k.ariaLabel,"data-index":X+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:k.label})})},k.label+X)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})}),S&&w&&w.length>0&&e.jsxs("div",{className:"sm-socials","aria-label":"Social links",children:[e.jsx("h3",{className:"sm-socials-title",children:"Extras"}),e.jsx("ul",{className:"sm-socials-list",role:"list",children:w.map((k,X)=>e.jsx("li",{className:"sm-socials-item",children:e.jsx("a",{href:k.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link",children:k.label})},k.label+X))})]})]})})]})};function ls({children:o,className:t="",onClick:i,mouseX:r,spring:d,distance:f,magnification:w,baseItemSize:S}){const m=a.useRef(null),A=it(0),R=Et(r,b=>{if(!m.current)return 1/0;const _=m.current.getBoundingClientRect(),z=_.x+_.width/2;return Math.abs(b-z)}),L=Et(R,[0,f],[w,S]),C=pt(L,d);return e.jsx(ce.div,{ref:m,style:{width:C,height:C,minWidth:C,minHeight:C},onHoverStart:()=>A.set(1),onHoverEnd:()=>A.set(0),onClick:i,className:`dock-item ${t}`,"aria-haspopup":"true",children:a.Children.map(o,b=>a.cloneElement(b,{isHovered:A}))})}function cs({children:o,className:t="",...i}){const{isHovered:r}=i,[d,f]=a.useState(!1);return a.useEffect(()=>{const w=r.on("change",S=>{f(S===1)});return()=>w()},[r]),e.jsx(Pe,{children:d&&e.jsx(ce.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:o})})}function us({children:o,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:o})}function ds({items:o,className:t="",spring:i={mass:.1,stiffness:300,damping:20},magnification:r=70,distance:d=200,panelHeight:f=68,dockHeight:w=256,baseItemSize:S=50}){const m=it(1/0),A=it(0),R=a.useMemo(()=>Math.max(w,r+r/2+4),[r,w]),L=Et(A,[0,1],[f,R]),C=pt(L,i);return e.jsx(ce.div,{style:{height:C,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(ce.div,{onMouseMove:({pageX:b})=>{A.set(1),m.set(b)},onMouseLeave:()=>{A.set(0),m.set(1/0)},className:`dock-panel ${t}`,style:{height:f},role:"toolbar","aria-label":"Application dock",children:o.map((b,_)=>e.jsxs(ls,{onClick:b.onClick,className:b.className,mouseX:m,spring:i,distance:d,magnification:r,baseItemSize:S,children:[e.jsx(us,{children:b.icon}),e.jsx(cs,{children:b.label})]},_))})})}const fs=()=>{const{activeTrail:o}=Ue(),t=it(-100),i=it(-100),r={damping:25,stiffness:70,mass:1},d=pt(t,r),f=pt(i,r);a.useEffect(()=>{const S=m=>{t.set(m.clientX),i.set(m.clientY)};return window.addEventListener("mousemove",S),()=>window.removeEventListener("mousemove",S)},[t,i]);const w={"apple-cat":bi,"jump-cat":wi,"rolling-cat":Si,duck:Ci,pompom:Ri,"skeleton-run":ji,ghost:null};return!o||o==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:w[o]?e.jsx(ce.img,{src:w[o],alt:"trail",style:{x:d,y:f,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):o==="ghost"?e.jsx(ce.div,{style:{x:d,y:f,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},ci=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],ms=({progress:o})=>{const[t,i]=a.useState(0);return a.useEffect(()=>{const r=setInterval(()=>{i(d=>(d+1)%ci.length)},1500);return()=>clearInterval(r)},[]),e.jsxs(ce.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[o,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(ce.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${o}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(ce.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:ci[t]},t)})]})]})},hs=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,ps=Object.freeze(Object.defineProperty({__proto__:null,default:hs},Symbol.toStringTag,{value:"Module"})),gs=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,vs=Object.freeze(Object.defineProperty({__proto__:null,default:gs},Symbol.toStringTag,{value:"Module"})),xs=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,ys=Object.freeze(Object.defineProperty({__proto__:null,default:xs},Symbol.toStringTag,{value:"Module"})),bs=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,ws=Object.freeze(Object.defineProperty({__proto__:null,default:bs},Symbol.toStringTag,{value:"Module"})),Ss=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,Cs=Object.freeze(Object.defineProperty({__proto__:null,default:Ss},Symbol.toStringTag,{value:"Module"})),Rs=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,js=Object.freeze(Object.defineProperty({__proto__:null,default:Rs},Symbol.toStringTag,{value:"Module"})),As=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,Ls=Object.freeze(Object.defineProperty({__proto__:null,default:As},Symbol.toStringTag,{value:"Module"})),Ps=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,Es=Object.freeze(Object.defineProperty({__proto__:null,default:Ps},Symbol.toStringTag,{value:"Module"})),Ts=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,ks=Object.freeze(Object.defineProperty({__proto__:null,default:Ts},Symbol.toStringTag,{value:"Module"})),ui=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":ps,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":vs,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":ys,"../../assets/songs/La cena - Las Petunias.mp3":ws,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":Cs,"../../assets/songs/Tek It - Cafuné.mp3":js,"../../assets/songs/You and I - d4vd .mp3":Ls,"../../assets/songs/gourmet - rickyedit.mp3":Es,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":ks}),et=Object.keys(ui).map(o=>({title:o.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,r=>r.toUpperCase()),artist:"Only U Playlist",src:ui[o].default}));et.length===0&&et.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const Fs=.1,Ms=({visible:o,onClose:t})=>{const i=a.useRef(null),r=a.useRef(null),[d,f]=a.useState(!1),[w,S]=a.useState(0),[m,A]=a.useState(.3),[R,L]=a.useState(!1),[C,b]=a.useState(!1),[_,z]=a.useState(!1),[E,I]=a.useState(0),[O,q]=a.useState(0),g=et[w];a.useEffect(()=>{i.current&&(i.current.volume=R?0:Math.pow(m,2)*Fs)},[m,R]),a.useEffect(()=>{d&&i.current&&i.current.play().catch(p=>console.log("Autoplay blocked",p))},[w]),a.useEffect(()=>{o||(b(!1),z(!1))},[o]),a.useEffect(()=>{const p=N=>{o&&(r.current&&r.current.contains(N.target)||N.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[o,t]);const n=()=>{i.current&&(I(i.current.currentTime),q(i.current.duration||0))},T=p=>{const N=parseFloat(p.target.value);I(N),i.current&&(i.current.currentTime=N)},H=()=>{d?i.current.pause():i.current.play(),f(!d)},Y=()=>{S(p=>(p+1)%et.length)},M=p=>{S(p),f(!0),z(!1)},K=p=>{if(!p||isNaN(p))return"0:00";const N=Math.floor(p/60),D=Math.floor(p%60);return`${N}:${D<10?"0":""}${D}`};return e.jsxs(ce.div,{ref:r,className:"music-player-container",initial:"hidden",animate:o?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:i,src:g.src,onEnded:Y,onTimeUpdate:n,onLoadedMetadata:n,preload:"auto"}),e.jsx(Pe,{children:_&&e.jsx(ce.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:et.map((p,N)=>e.jsxs("div",{className:`playlist-item ${N===w?"active":""}`,onClick:()=>M(N),children:[N+1,". ",p.title]},N))})}),e.jsx("div",{className:"compact-info",onClick:()=>z(!_),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:g.title}),e.jsx(Cn,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:H,children:d?e.jsx(Rn,{size:16}):e.jsx(jn,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:O,value:E,onChange:T,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[K(E)," / ",K(O)]})]}),e.jsx("button",{className:"icon-btn",onClick:Y,children:e.jsx(An,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${C?"active":""}`,onClick:()=>b(!C),children:R||m===0?e.jsx(Ln,{size:18}):e.jsx(vi,{size:18})}),e.jsx(Pe,{children:C&&e.jsx(ce.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:R?0:m,onChange:p=>A(parseFloat(p.target.value))})})})]})]})]})},_s=()=>{const[o,t]=a.useState(!1),[i,r]=a.useState(!1),[d,f]=a.useState(!1),w=a.useRef(null),{gameVolume:S,setGameVolume:m,resetProgress:A,achievements:R,ownedItems:L}=Ue();a.useEffect(()=>{const b=_=>{w.current&&!w.current.contains(_.target)&&t(!1)};return o&&document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[o]);const C=()=>{window.confirm("¿Estás seguro de que quieres borrar todo tu progreso (monedas y compras)?")&&(A(),t(!1))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"settings-container",ref:w,children:[e.jsx("button",{className:`settings-btn ${o?"active":""}`,onClick:()=>t(!o),"aria-label":"Ajustes",children:e.jsx(Pn,{size:20})}),e.jsx(Pe,{children:o&&e.jsxs(ce.div,{className:"settings-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"label",children:[e.jsx(vi,{})," ",e.jsx("span",{children:"Sonido Juego"})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:S,onChange:b=>m(parseFloat(b.target.value))})]}),e.jsx("div",{className:"divider"}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{f(!0),t(!1)},children:[e.jsx(Lt,{})," Logros"]}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{r(!0),t(!1)},children:[e.jsx(En,{})," Documentación"]}),e.jsxs("button",{className:"setting-action-btn danger",onClick:C,children:[e.jsx(Tn,{})," Resetear Progreso"]})]})})]}),e.jsx(Pe,{children:i&&e.jsx("div",{className:"doc-overlay",onClick:()=>r(!1),children:e.jsxs(ce.div,{className:"doc-modal",onClick:b=>b.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>r(!1),children:e.jsx(ht,{size:24})}),e.jsx("h2",{children:"Mecánicas del Juego"}),e.jsxs("div",{className:"doc-content",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Monedas:"})," Haz click en las monedas flotantes para recolectarlas. Las monedas especiales (brillantes) valen más puntos."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tienda:"})," Usa tus monedas para desbloquear nuevos fondos, cursores y skins para las monedas."]})]})]})})}),e.jsx(Pe,{children:d&&e.jsx("div",{className:"doc-overlay",onClick:()=>f(!1),children:e.jsxs(ce.div,{className:"doc-modal",onClick:b=>b.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>f(!1),children:e.jsx(ht,{size:24})}),e.jsxs("h2",{children:[e.jsx(Lt,{style:{marginRight:"10px",color:"#ffd700"}})," ","Tus Logros"]}),e.jsx("div",{className:"doc-content",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:Object.entries(nt).map(([b,_])=>{const z=R.includes(b);let E=_.desc;if(b==="collector"){const I=Object.values(gt).reduce((q,g)=>q+g.length,0),O=L?L.length:0;E=`${_.desc} (${O}/${I})`}if(b==="prestige"){const O=Object.keys(nt).filter(g=>g!=="prestige"),q=R.filter(g=>O.includes(g)).length;E=`${_.desc} (${q}/${O.length})`}return e.jsxs("div",{style:{background:z?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)",border:z?"1px solid rgba(255, 215, 0, 0.3)":"1px solid rgba(255, 255, 255, 0.1)",padding:"15px",borderRadius:"12px",opacity:z?1:.5,display:"flex",alignItems:"center",gap:"15px"},children:[e.jsx("div",{style:{fontSize:"2rem"},children:z?_.icon:e.jsx(kn,{className:"locked-icon"})}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 5px 0",color:z?"#ffd700":"white"},children:_.title}),e.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"rgba(255,255,255,0.7)"},children:E})]})]},b)})})})]})})})]})},Ds=()=>{const{notification:o,clearNotification:t}=Ue();a.useEffect(()=>{if(o){const d=setTimeout(()=>{t()},4e3);return()=>clearTimeout(d)}},[o,t]);const i=o&&o.type==="achievement",r=i?nt[o.id]:null;return e.jsx(Pe,{children:i&&r&&e.jsxs(ce.div,{className:"achievement-toast",initial:{y:-100,x:"-50%",opacity:0},animate:{y:20,x:"-50%",opacity:1},exit:{y:-100,x:"-50%",opacity:0},transition:{type:"spring",stiffness:300,damping:20},children:[e.jsx("div",{className:"icon-container",children:e.jsx(mi,{size:24,color:"#ffd700"})}),e.jsxs("div",{className:"text-container",children:[e.jsx("span",{className:"title",children:"¡Logro Desbloqueado!"}),e.jsxs("span",{className:"name",children:[r.icon," ",r.title]}),e.jsx("span",{className:"desc",children:r.desc})]})]})})},Is=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"},{id:"skins",label:"Monedas",ariaLabel:"Personalizar Monedas"}],zs=[{label:"GitHub",link:"https://github.com"},{label:"Instagram",link:"https://instagram.com"}];function Ns(){const{isUnlocked:o,openShop:t,closeShop:i,lockGame:r,activeBackground:d,toggleGame:f,isGameActive:w,activeShop:S,addCoins:m,unlockAchievement:A,achievements:R}=Ue(),[L,C]=a.useState(!0),[b,_]=a.useState(!1),[z,E]=a.useState(!1),[I,O]=a.useState(!1),[q,g]=a.useState(!0),[n,T]=a.useState(!1),[H,Y]=a.useState(null),[M,K]=a.useState(null),[p,N]=a.useState(null),[D,j]=a.useState(null),[l,u]=a.useState(null),[y,v]=a.useState(null),[P,G]=a.useState(null),[V,ie]=a.useState(null);a.useEffect(()=>{o&&R&&!R.includes("prestige")&&Object.keys(nt).filter(k=>k!=="prestige").every(k=>R.includes(k))&&A("prestige")},[R,o,A]);const W=a.useRef(0);a.useEffect(()=>{if(!o)return;const ee=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],ue=ge=>{const k=ge.key.toLowerCase(),X=ee[W.current].toLowerCase();k===X?(W.current++,W.current===ee.length&&(m(1e6),A("matrix_master"),console.log("CHEAT ACTIVATED: KONAMI CODE!"),W.current=0)):(W.current=0,k===ee[0].toLowerCase()&&(W.current=1))};return window.addEventListener("keydown",ue),()=>window.removeEventListener("keydown",ue)},[o,m,A]);const le=ee=>{ee&&t(ee)},ne=()=>{z?(E(!1),I&&C(!0)):(T(!1),i(),O(L),C(!1),E(!0))},$=[{icon:e.jsx(Fn,{size:22}),label:"Texto",onClick:()=>{i(),w?f():C(!L)}},{icon:e.jsx(Mn,{size:22}),label:"Música",onClick:()=>{i(),_(!b)}},{icon:e.jsx(_n,{size:22}),label:"Tienda",onClick:()=>{S&&i(),T(!n)}},{icon:e.jsx(Dn,{size:22,color:w?"#f700ff":"currentColor"}),label:"Juego",onClick:()=>{i(),w?C(q):(g(L),C(!0)),f()}},{icon:e.jsx(In,{size:22}),label:"Fondo",onClick:ne},{icon:e.jsx(zn,{size:22}),label:"Bloquear",onClick:()=>{r&&(i(),_(!1),Y(null),K(null),N(null),j(null),u(null),v(null),G(null),ie(null),r())}}],[re,ae]=a.useState(!0),[U,me]=a.useState(0);return a.useEffect(()=>{const ee=setInterval(()=>{me(ue=>{const ge=ue+Math.floor(Math.random()*15)+5;return ge>=100?(clearInterval(ee),setTimeout(()=>ae(!1),200),100):ge})},200);return()=>clearInterval(ee)},[]),e.jsxs("main",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[e.jsx(Pe,{mode:"wait",children:re&&e.jsx(ms,{progress:U},"loader")}),e.jsx(Pe,{children:!o&&e.jsx(ce.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(Xn,{})},"lock-screen")}),e.jsx(Pe,{children:o&&e.jsxs(ce.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(rs,{floatingLinesConfig:H,lightPillarsConfig:M,ballpitConfig:p,silkConfig:D,galaxyConfig:l,gradientConfig:y,pixelSnowConfig:P,hyperspeedConfig:V}),e.jsx(_s,{}),e.jsx(Ds,{}),e.jsx(as,{isOpen:n,onToggle:ee=>{T(ee),ee&&E(!1)},items:Is,socialItems:zs,isFixed:!0,position:"right",onItemClick:le,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(xo,{}),e.jsx(Lo,{}),e.jsx(fs,{}),e.jsx(Pe,{children:L&&e.jsx(ce.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(Mo,{})})}),e.jsx(Pe,{children:z&&["floatinglines","lightpillars","ballpit","silk","galaxy","gradient","pixelsnow","hyperspeed"].includes(d)&&e.jsx(ce.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(os,{onClose:ne,floatingLinesConfig:H,setFloatingLinesConfig:Y,lightPillarsConfig:M,setLightPillarsConfig:K,ballpitConfig:p,setBallpitConfig:N,silkConfig:D,setSilkConfig:j,galaxyConfig:l,setGalaxyConfig:u,gradientConfig:y,setGradientConfig:v,pixelSnowConfig:P,setPixelSnowConfig:G,hyperspeedConfig:V,setHyperspeedConfig:ie})})})}),e.jsx(Ms,{visible:b,onClose:()=>_(!1)}),e.jsx(ds,{items:$,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}Nn.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(Ns,{})}));
