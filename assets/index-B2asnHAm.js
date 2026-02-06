import{c as qi,j as e,r as l,u as Wi,C as Fe,a as Yi,F as Xi,R as gt,b as vt,d as Hi,e as Vi,f as $i,g as Ji,h as Ki,i as fi,k as Qi,l as Zi,m as mi,n as hi,o as G,p as en,q as tn,s as nn,t as pi,v as on,w as sn,x as gi,y as xt,z as vi,A as rn,B as an,D as ln,O as cn,E as un,G as dn,P as fn,V as se,H as Tt,I as xi,S as at,W as lt,J as mn,M as kt,K as Le,L as hn,N as pn,Q as gn,T as vn,U as xn,X as yn,Y as bn,Z as Ie,_ as _t,$ as Ze,a0 as st,a1 as et,a2 as wn,a3 as Gt,a4 as Sn,a5 as Cn,a6 as jn,a7 as qt,a8 as Rn,a9 as nt,aa as An,ab as Ln,ac as Wt,ad as Pn,ae as En,af as Yt,ag as Je,ah as kn,ai as Tn,aj as _n,ak as Fn,al as Mn,am as yi,an as In,ao as Dn,ap as zn,aq as Nn,ar as bi,as as Un,at as On,au as Bn,av as Gn,aw as qn,ax as Wn,ay as Yn}from"./vendor-h1W2Ujxf.js";import{u as Ve,a as it,b as Xn,c as tt,m as ee,A as Te}from"./framer-motion-BUPS9Ar2.js";import{R as Hn,T as Vn,P as $n,C as Xt,M as Jn}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const S of h.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&s(S)}).observe(document,{childList:!0,subtree:!0});function i(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(u){if(u.ep)return;u.ep=!0;const h=i(u);fetch(u.href,h)}})();const Ue=qi(n=>({isUnlocked:!1,unlockApp:()=>n({isUnlocked:!0}),lockGame:()=>n({isUnlocked:!1}),activeShop:null,openShop:t=>n({activeShop:t}),closeShop:()=>n({activeShop:null}),isGameActive:!1,toggleGame:()=>n(t=>({isGameActive:!t.isGameActive})),coins:0,addCoins:t=>n(i=>({coins:i.coins+t})),gameVolume:.4,setGameVolume:t=>n({gameVolume:t}),activeCoinSkin:"dase",setCoinSkin:t=>n({activeCoinSkin:t}),ownedItems:["gradient","default","none","dase"],buyItem:t=>n(i=>i.ownedItems.includes(t.id)?i:i.coins>=t.price?{coins:i.coins-t.price,ownedItems:[...i.ownedItems,t.id]}:i),achievements:[],notification:null,unlockAchievement:t=>n(i=>i.achievements.includes(t)?i:{achievements:[...i.achievements,t],notification:{type:"achievement",id:t}}),clearNotification:()=>n({notification:null}),resetProgress:()=>n({coins:0,ownedItems:["gradient","default","none","dase"],activeBackground:"gradient",activeCursor:"default",activeTrail:"none",activeCoinSkin:"dase",achievements:[],isGameActive:!1}),activeBackground:"gradient",setBackground:t=>n({activeBackground:t}),activeCursor:"default",setCursor:t=>n({activeCursor:t}),activeTrail:"none",setTrail:t=>n({activeTrail:t})})),Kn=({text:n,disabled:t=!1,speed:i=3,className:s="",color:u="#7c7c7c",shineColor:h="#ffffff",direction:S="right"})=>e.jsx("div",{className:`shiny-text ${S} ${t?"disabled":""} ${s}`,style:{"--shiny-speed":`${i}s`,"--base-color":u,"--shine-color":h},children:n}),Ht=n=>(n=n.replace("#",""),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]),Qn=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,Zn=`
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
`,wi=l.forwardRef(function({uniforms:t},i){return Wi((s,u)=>{i.current.material.uniforms.uTime.value+=.1*u}),e.jsxs("mesh",{ref:i,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:Qn,fragmentShader:Zn})]})});wi.displayName="SilkPlane";const Si=({speed:n=1,scale:t=2,color:i="#ff99cc",noiseIntensity:s=.5,rotation:u=0})=>{const h=l.useRef(),S=l.useMemo(()=>({uSpeed:{value:n},uScale:{value:t},uNoiseIntensity:{value:s},uColor:{value:new Fe(...Ht(i))},uRotation:{value:u},uTime:{value:0}}),[]);return l.useEffect(()=>{if(h.current){const C=h.current.material.uniforms;C.uSpeed.value=n,C.uScale.value=t,C.uNoiseIntensity.value=s,C.uColor.value.set(...Ht(i)),C.uRotation.value=u}},[n,t,s,i,u]),l.useEffect(()=>{const y=setInterval(()=>window.dispatchEvent(new Event("resize")),50),j=setTimeout(()=>clearInterval(y),1200);return()=>{clearInterval(y),clearTimeout(j)}},[]),e.jsx(Yi,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(wi,{ref:h,uniforms:S})})},eo=()=>{const[n,t]=l.useState(""),[i,s]=l.useState(!1),u=Ue(y=>y.unlockApp),h="230824",S=y=>{const j=y.target.value.replace(/\D/g,"");if(j.length>6)return;let v=j;j.length>2&&(v=j.slice(0,2)+"/"+j.slice(2)),j.length>4&&(v=v.slice(0,5)+"/"+j.slice(4)),t(v),s(!1)},C=y=>{y.preventDefault(),n.replace(/\//g,"")===h?u():(s(!0),setTimeout(()=>s(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(Si,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(Kn,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:C,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:n,onChange:S,className:i?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(Xi,{size:20})})]})]})]})},to=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,io=Object.freeze(Object.defineProperty({__proto__:null,default:to},Symbol.toStringTag,{value:"Module"})),no=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,oo=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"})),so=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,ro=Object.freeze(Object.defineProperty({__proto__:null,default:so},Symbol.toStringTag,{value:"Module"})),ao=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,lo=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),co=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,uo=Object.freeze(Object.defineProperty({__proto__:null,default:co},Symbol.toStringTag,{value:"Module"})),fo=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,mo=Object.freeze(Object.defineProperty({__proto__:null,default:fo},Symbol.toStringTag,{value:"Module"})),ho=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,po=Object.freeze(Object.defineProperty({__proto__:null,default:ho},Symbol.toStringTag,{value:"Module"})),go=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,vo=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"})),xo=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,yo=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),bo=""+new URL("angel-C_MrdXcC.mp3",import.meta.url).href,wo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"})),Ci=""+new URL("angel-BIAg6Grr.png",import.meta.url).href,So=Object.freeze(Object.defineProperty({__proto__:null,default:Ci},Symbol.toStringTag,{value:"Module"})),Co=""+new URL("angelshiny-Cl20zV7k.png",import.meta.url).href,jo=Object.freeze(Object.defineProperty({__proto__:null,default:Co},Symbol.toStringTag,{value:"Module"})),Ro=""+new URL("dase-YSuIB7YX.mp3",import.meta.url).href,Ao=Object.freeze(Object.defineProperty({__proto__:null,default:Ro},Symbol.toStringTag,{value:"Module"})),ji=""+new URL("dase-Ul_8ADqZ.png",import.meta.url).href,Lo=Object.freeze(Object.defineProperty({__proto__:null,default:ji},Symbol.toStringTag,{value:"Module"})),Po=""+new URL("daseshiny-CaXO5CeC.png",import.meta.url).href,Eo=Object.freeze(Object.defineProperty({__proto__:null,default:Po},Symbol.toStringTag,{value:"Module"})),Ri=""+new URL("natasha-D39Th0kg.png",import.meta.url).href,ko=Object.freeze(Object.defineProperty({__proto__:null,default:Ri},Symbol.toStringTag,{value:"Module"})),To=""+new URL("natashashiny-CF2gWSQ5.png",import.meta.url).href,_o=Object.freeze(Object.defineProperty({__proto__:null,default:To},Symbol.toStringTag,{value:"Module"})),Ai=""+new URL("rachel-BMn7rWE_.png",import.meta.url).href,Fo=Object.freeze(Object.defineProperty({__proto__:null,default:Ai},Symbol.toStringTag,{value:"Module"})),Mo=""+new URL("rachelshiny-CD4t9jtC.png",import.meta.url).href,Io=Object.freeze(Object.defineProperty({__proto__:null,default:Mo},Symbol.toStringTag,{value:"Module"})),ze=n=>gt.createElement(n),rt={baby_steps:{title:"El Primer Paso",desc:"Recoge tu primera moneda, pobre.",icon:ze(hi)},on_fire:{title:"Dedos de Fuego",desc:"Alcanza un combo x5.",icon:ze(mi)},god_mode:{title:"Modo Dios",desc:"Mantén un combo x10.",icon:ze(Zi)},shiny_lover:{title:"Shiny Spotter",desc:"Atrapa una moneda especial.",icon:ze(Qi)},sniper:{title:"Francotirador",desc:"Caza una moneda a máxima velocidad (>15).",icon:ze(fi)},piggy_bank:{title:"Algo es algo",desc:"Acumula 500 monedas. Para un kebab da.",icon:ze(Ki)},stonks:{title:"Lobo de Wall Street",desc:"Consigue 1000 monedas.",icon:ze(Ji)},crypto_king:{title:"Cripto Magnate",desc:"Llega a 5000 monedas.",icon:ze($i)},collector:{title:"Coleccionista",desc:"Compra todos los objetos de la tienda.",icon:ze(Vi)},matrix_master:{title:"El Elegido",desc:"Descubre el código secreto de administrador.",icon:ze(Hi)},prestige:{title:"Prestigio",desc:"Consigue todos los logros.",icon:ze(vt)}},Do=({targetSelector:n=".cursor-target",spinDuration:t=2,hideDefaultCursor:i=!0,hoverDuration:s=.2,parallaxOn:u=!0})=>{const h=l.useRef(null),S=l.useRef(null),C=l.useRef(null),y=l.useRef(null),j=l.useRef(!1),v=l.useRef(null),P=l.useRef(null),b=l.useRef(0),R=l.useMemo(()=>{const E="ontouchstart"in window||navigator.maxTouchPoints>0,T=window.innerWidth<=768,N=navigator.userAgent||navigator.vendor||window.opera,F=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(N.toLowerCase());return E&&T||F},[]),k=l.useMemo(()=>({borderWidth:3,cornerSize:12}),[]),I=l.useCallback((E,T)=>{h.current&&G.to(h.current,{x:E,y:T,duration:.1,ease:"power3.out"})},[]);return l.useEffect(()=>{if(R||!h.current)return;const E=document.body.style.cursor;i&&(document.body.style.cursor="none");const T=h.current;S.current=T.querySelectorAll(".target-cursor-corner");let N=null,U=null,F=null;const o=W=>{U&&W.removeEventListener("mouseleave",U),U=null};G.set(T,{xPercent:-50,yPercent:-50,x:window.innerWidth/2,y:window.innerHeight/2}),C.current&&C.current.kill(),C.current=G.timeline({repeat:-1}).to(T,{rotation:"+=360",duration:t,ease:"none"});const J=()=>{if(!v.current||!h.current||!S.current)return;const W=b.current;if(W===0)return;if(N){if(!N.isConnected){U&&U();return}const p=N.getBoundingClientRect(),{borderWidth:m,cornerSize:w}=k;v.current=[{x:p.left-m,y:p.top-m},{x:p.right+m-w,y:p.top-m},{x:p.right+m-w,y:p.bottom+m-w},{x:p.left-m,y:p.bottom+m-w}]}const d=G.getProperty(h.current,"x"),c=G.getProperty(h.current,"y");Array.from(S.current).forEach((p,m)=>{const w=G.getProperty(p,"x"),B=G.getProperty(p,"y"),Y=v.current[m].x-d,re=v.current[m].y-c,V=w+(Y-w)*W,te=B+(re-B)*W,ie=W>=.99?u?.2:0:.05;G.to(p,{x:V,y:te,duration:ie,ease:ie===0?"none":"power1.out",overwrite:"auto"})})};P.current=J;const X=W=>I(W.clientX,W.clientY);window.addEventListener("mousemove",X);const A=()=>{if(!N||!h.current)return;const W=G.getProperty(h.current,"x"),d=G.getProperty(h.current,"y"),c=document.elementFromPoint(W,d);c&&(c===N||c.closest(n)===N)||U&&U()};window.addEventListener("scroll",A,{passive:!0});const H=()=>{y.current&&(G.to(y.current,{scale:.7,duration:.3}),G.to(h.current,{scale:.9,duration:.2}))},M=()=>{y.current&&(G.to(y.current,{scale:1,duration:.3}),G.to(h.current,{scale:1,duration:.2}))};window.addEventListener("mousedown",H),window.addEventListener("mouseup",M);const q=W=>{const d=W.target,c=[];let a=d;for(;a&&a!==document.body;)a.matches(n)&&c.push(a),a=a.parentElement;const p=c[0]||null;if(!p||!h.current||!S.current||N===p)return;N&&o(N),F&&(clearTimeout(F),F=null),N=p;const m=Array.from(S.current);m.forEach(ie=>G.killTweensOf(ie)),G.killTweensOf(h.current,"rotation"),C.current?.pause(),G.set(h.current,{rotation:0});const w=p.getBoundingClientRect(),{borderWidth:B,cornerSize:Y}=k,re=G.getProperty(h.current,"x"),V=G.getProperty(h.current,"y");v.current=[{x:w.left-B,y:w.top-B},{x:w.right+B-Y,y:w.top-B},{x:w.right+B-Y,y:w.bottom+B-Y},{x:w.left-B,y:w.bottom+B-Y}],j.current=!0,G.ticker.add(P.current),G.to(b,{current:1,duration:s,ease:"power2.out"}),m.forEach((ie,O)=>{G.to(ie,{x:v.current[O].x-re,y:v.current[O].y-V,duration:.2,ease:"power2.out"})});const te=()=>{if(G.ticker.remove(P.current),j.current=!1,v.current=null,G.set(b,{current:0,overwrite:!0}),N=null,S.current){const ie=Array.from(S.current);G.killTweensOf(ie);const{cornerSize:O}=k,Z=[{x:-O*1.5,y:-O*1.5},{x:O*.5,y:-O*1.5},{x:O*.5,y:O*.5},{x:-O*1.5,y:O*.5}],le=G.timeline();ie.forEach((z,ne)=>{le.to(z,{x:Z[ne].x,y:Z[ne].y,duration:.3,ease:"power3.out"},0)})}F=setTimeout(()=>{if(!N&&h.current&&C.current){const O=G.getProperty(h.current,"rotation")%360;C.current.kill(),C.current=G.timeline({repeat:-1}).to(h.current,{rotation:"+=360",duration:t,ease:"none"}),G.to(h.current,{rotation:O+360,duration:t*(1-O/360),ease:"none",onComplete:()=>{C.current?.restart()}})}F=null},50),o(p)};U=te,p.addEventListener("mouseleave",te)};return window.addEventListener("mouseover",q,{passive:!0}),()=>{P.current&&G.ticker.remove(P.current),window.removeEventListener("mousemove",X),window.removeEventListener("mouseover",q),window.removeEventListener("scroll",A),window.removeEventListener("mousedown",H),window.removeEventListener("mouseup",M),N&&o(N),C.current?.kill(),document.body.style.cursor=E,j.current=!1,v.current=null,b.current=0}},[n,t,I,k,i,R,s,u]),l.useEffect(()=>{R||!h.current||!C.current||C.current.isActive()&&(C.current.kill(),C.current=G.timeline({repeat:-1}).to(h.current,{rotation:"+=360",duration:t,ease:"none"}))},[t,R]),R?null:e.jsxs("div",{ref:h,className:"target-cursor-wrapper",children:[e.jsx("div",{ref:y,className:"target-cursor-dot"}),e.jsx("div",{className:"target-cursor-corner corner-tl"}),e.jsx("div",{className:"target-cursor-corner corner-tr"}),e.jsx("div",{className:"target-cursor-corner corner-br"}),e.jsx("div",{className:"target-cursor-corner corner-bl"})]})};function zo({SIM_RESOLUTION:n=128,DYE_RESOLUTION:t=1440,CAPTURE_RESOLUTION:i=512,DENSITY_DISSIPATION:s=3.5,VELOCITY_DISSIPATION:u=2,PRESSURE:h=.1,PRESSURE_ITERATIONS:S=20,CURL:C=3,SPLAT_RADIUS:y=.2,SPLAT_FORCE:j=6e3,SHADING:v=!0,COLOR_UPDATE_SPEED:P=10,BACK_COLOR:b={r:.5,g:0,b:0},TRANSPARENT:R=!0}){const k=l.useRef(null),I=l.useRef(null);return l.useEffect(()=>{const E=k.current;if(!E)return;let T=!0;function N(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let U={SIM_RESOLUTION:n,DYE_RESOLUTION:t,DENSITY_DISSIPATION:s,VELOCITY_DISSIPATION:u,PRESSURE:h,PRESSURE_ITERATIONS:S,CURL:C,SPLAT_RADIUS:y,SPLAT_FORCE:j,SHADING:v,COLOR_UPDATE_SPEED:P},F=[new N];const{gl:o,ext:D}=J(E);D.supportLinearFiltering||(U.DYE_RESOLUTION=256,U.SHADING=!1);function J(r){const g={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let x=r.getContext("webgl2",g);const _=!!x;_||(x=r.getContext("webgl",g)||r.getContext("experimental-webgl",g));let Q,fe;_?(x.getExtension("EXT_color_buffer_float"),fe=x.getExtension("OES_texture_float_linear")):(Q=x.getExtension("OES_texture_half_float"),fe=x.getExtension("OES_texture_half_float_linear")),x.clearColor(0,0,0,1);const me=_?x.HALF_FLOAT:Q&&Q.HALF_FLOAT_OES;let Ee,Pe,Be;return _?(Ee=X(x,x.RGBA16F,x.RGBA,me),Pe=X(x,x.RG16F,x.RG,me),Be=X(x,x.R16F,x.RED,me)):(Ee=X(x,x.RGBA,x.RGBA,me),Pe=X(x,x.RGBA,x.RGBA,me),Be=X(x,x.RGBA,x.RGBA,me)),{gl:x,ext:{formatRGBA:Ee,formatRG:Pe,formatR:Be,halfFloatTexType:me,supportLinearFiltering:fe}}}function X(r,g,x,_){if(!A(r,g,x,_))switch(g){case r.R16F:return X(r,r.RG16F,r.RG,_);case r.RG16F:return X(r,r.RGBA16F,r.RGBA,_);default:return null}return{internalFormat:g,format:x}}function A(r,g,x,_){const Q=r.createTexture();r.bindTexture(r.TEXTURE_2D,Q),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,g,4,4,0,x,_,null);const fe=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,fe),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0),r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE}class H{constructor(g,x){this.vertexShader=g,this.fragmentShaderSource=x,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(g){let x=0;for(let Q=0;Q<g.length;Q++)x+=Gi(g[Q]);let _=this.programs[x];if(_==null){let Q=d(o.FRAGMENT_SHADER,this.fragmentShaderSource,g);_=q(this.vertexShader,Q),this.programs[x]=_}_!==this.activeProgram&&(this.uniforms=W(_),this.activeProgram=_)}bind(){o.useProgram(this.activeProgram)}}class M{constructor(g,x){this.uniforms={},this.program=q(g,x),this.uniforms=W(this.program)}bind(){o.useProgram(this.program)}}function q(r,g){let x=o.createProgram();return o.attachShader(x,r),o.attachShader(x,g),o.linkProgram(x),o.getProgramParameter(x,o.LINK_STATUS)||console.trace(o.getProgramInfoLog(x)),x}function W(r){let g={},x=o.getProgramParameter(r,o.ACTIVE_UNIFORMS);for(let _=0;_<x;_++){let Q=o.getActiveUniform(r,_).name;g[Q]=o.getUniformLocation(r,Q)}return g}function d(r,g,x){g=c(g,x);const _=o.createShader(r);return o.shaderSource(_,g),o.compileShader(_),o.getShaderParameter(_,o.COMPILE_STATUS)||console.trace(o.getShaderInfoLog(_)),_}function c(r,g){if(!g)return r;let x="";return g.forEach(_=>{x+="#define "+_+`
`}),x+r}const a=d(o.VERTEX_SHADER,`
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
      `),p=d(o.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),m=d(o.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),w=`
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
    `,B=d(o.FRAGMENT_SHADER,`
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
      `),Y=d(o.FRAGMENT_SHADER,`
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
      `,D.supportLinearFiltering?null:["MANUAL_FILTERING"]),re=d(o.FRAGMENT_SHADER,`
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
      `),V=d(o.FRAGMENT_SHADER,`
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
      `),te=d(o.FRAGMENT_SHADER,`
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
      `),ie=d(o.FRAGMENT_SHADER,`
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
      `),O=d(o.FRAGMENT_SHADER,`
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
      `),Z=(o.bindBuffer(o.ARRAY_BUFFER,o.createBuffer()),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),o.STATIC_DRAW),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,o.createBuffer()),o.bufferData(o.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),o.STATIC_DRAW),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(0),(r,g=!1)=>{r==null?(o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight),o.bindFramebuffer(o.FRAMEBUFFER,null)):(o.viewport(0,0,r.width,r.height),o.bindFramebuffer(o.FRAMEBUFFER,r.fbo)),g&&(o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT)),o.drawElements(o.TRIANGLES,6,o.UNSIGNED_SHORT,0)});let le,z,ne,ve,ae;const xe=new M(a,p),ce=new M(a,m),pe=new M(a,B),ue=new M(a,Y),we=new M(a,re),L=new M(a,V),$=new M(a,te),K=new M(a,ie),oe=new M(a,O),Se=new H(a,w);function he(){let r=It(U.SIM_RESOLUTION),g=It(U.DYE_RESOLUTION);const x=D.halfFloatTexType,_=D.formatRGBA,Q=D.formatRG,fe=D.formatR,me=D.supportLinearFiltering?o.LINEAR:o.NEAREST;o.disable(o.BLEND),le?le=De(le,g.width,g.height,_.internalFormat,_.format,x,me):le=de(g.width,g.height,_.internalFormat,_.format,x,me),z?z=De(z,r.width,r.height,Q.internalFormat,Q.format,x,me):z=de(r.width,r.height,Q.internalFormat,Q.format,x,me),ne=ye(r.width,r.height,fe.internalFormat,fe.format,x,o.NEAREST),ve=ye(r.width,r.height,fe.internalFormat,fe.format,x,o.NEAREST),ae=de(r.width,r.height,fe.internalFormat,fe.format,x,o.NEAREST)}function ye(r,g,x,_,Q,fe){o.activeTexture(o.TEXTURE0);let me=o.createTexture();o.bindTexture(o.TEXTURE_2D,me),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,fe),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,fe),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_2D,0,x,r,g,0,_,Q,null);let Ee=o.createFramebuffer();o.bindFramebuffer(o.FRAMEBUFFER,Ee),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0),o.viewport(0,0,r,g),o.clear(o.COLOR_BUFFER_BIT);let Pe=1/r,Be=1/g;return{texture:me,fbo:Ee,width:r,height:g,texelSizeX:Pe,texelSizeY:Be,attach(Xe){return o.activeTexture(o.TEXTURE0+Xe),o.bindTexture(o.TEXTURE_2D,me),Xe}}}function de(r,g,x,_,Q,fe){let me=ye(r,g,x,_,Q,fe),Ee=ye(r,g,x,_,Q,fe);return{width:r,height:g,texelSizeX:me.texelSizeX,texelSizeY:me.texelSizeY,get read(){return me},set read(Pe){me=Pe},get write(){return Ee},set write(Pe){Ee=Pe},swap(){let Pe=me;me=Ee,Ee=Pe}}}function Ce(r,g,x,_,Q,fe,me){let Ee=ye(g,x,_,Q,fe,me);return xe.bind(),o.uniform1i(xe.uniforms.uTexture,r.attach(0)),Z(Ee),Ee}function De(r,g,x,_,Q,fe,me){return r.width===g&&r.height===x||(r.read=Ce(r.read,g,x,_,Q,fe,me),r.write=ye(g,x,_,Q,fe,me),r.width=g,r.height=x,r.texelSizeX=1/g,r.texelSizeY=1/x),r}function qe(){let r=[];U.SHADING&&r.push("SHADING"),Se.setKeywords(r)}qe(),he();let be=Date.now(),je=0;function ke(){if(!T)return;const r=St();$e()&&he(),Ct(r),f(),ge(r),Me(null),I.current=requestAnimationFrame(ke)}function St(){let r=Date.now(),g=(r-be)/1e3;return g=Math.min(g,.016666),be=r,g}function $e(){let r=Oe(E.clientWidth),g=Oe(E.clientHeight);return E.width!==r||E.height!==g?(E.width=r,E.height=g,!0):!1}function Ct(r){je+=r*U.COLOR_UPDATE_SPEED,je>=1&&(je=Bi(je,0,1),F.forEach(g=>{g.color=ct()}))}function f(){F.forEach(r=>{r.moved&&(r.moved=!1,Mi(r))})}function ge(r){o.disable(o.BLEND),L.bind(),o.uniform2f(L.uniforms.texelSize,z.texelSizeX,z.texelSizeY),o.uniform1i(L.uniforms.uVelocity,z.read.attach(0)),Z(ve),$.bind(),o.uniform2f($.uniforms.texelSize,z.texelSizeX,z.texelSizeY),o.uniform1i($.uniforms.uVelocity,z.read.attach(0)),o.uniform1i($.uniforms.uCurl,ve.attach(1)),o.uniform1f($.uniforms.curl,U.CURL),o.uniform1f($.uniforms.dt,r),Z(z.write),z.swap(),we.bind(),o.uniform2f(we.uniforms.texelSize,z.texelSizeX,z.texelSizeY),o.uniform1i(we.uniforms.uVelocity,z.read.attach(0)),Z(ne),ce.bind(),o.uniform1i(ce.uniforms.uTexture,ae.read.attach(0)),o.uniform1f(ce.uniforms.value,U.PRESSURE),Z(ae.write),ae.swap(),K.bind(),o.uniform2f(K.uniforms.texelSize,z.texelSizeX,z.texelSizeY),o.uniform1i(K.uniforms.uDivergence,ne.attach(0));for(let x=0;x<U.PRESSURE_ITERATIONS;x++)o.uniform1i(K.uniforms.uPressure,ae.read.attach(1)),Z(ae.write),ae.swap();oe.bind(),o.uniform2f(oe.uniforms.texelSize,z.texelSizeX,z.texelSizeY),o.uniform1i(oe.uniforms.uPressure,ae.read.attach(0)),o.uniform1i(oe.uniforms.uVelocity,z.read.attach(1)),Z(z.write),z.swap(),ue.bind(),o.uniform2f(ue.uniforms.texelSize,z.texelSizeX,z.texelSizeY),D.supportLinearFiltering||o.uniform2f(ue.uniforms.dyeTexelSize,z.texelSizeX,z.texelSizeY);let g=z.read.attach(0);o.uniform1i(ue.uniforms.uVelocity,g),o.uniform1i(ue.uniforms.uSource,g),o.uniform1f(ue.uniforms.dt,r),o.uniform1f(ue.uniforms.dissipation,U.VELOCITY_DISSIPATION),Z(z.write),z.swap(),D.supportLinearFiltering||o.uniform2f(ue.uniforms.dyeTexelSize,le.texelSizeX,le.texelSizeY),o.uniform1i(ue.uniforms.uVelocity,z.read.attach(0)),o.uniform1i(ue.uniforms.uSource,le.read.attach(1)),o.uniform1f(ue.uniforms.dissipation,U.DENSITY_DISSIPATION),Z(le.write),le.swap()}function Me(r){o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o.enable(o.BLEND),jt(r)}function jt(r){let g=o.drawingBufferWidth,x=o.drawingBufferHeight;Se.bind(),U.SHADING&&o.uniform2f(Se.uniforms.texelSize,1/g,1/x),o.uniform1i(Se.uniforms.uTexture,le.read.attach(0)),Z(r)}function Mi(r){let g=r.deltaX*U.SPLAT_FORCE,x=r.deltaY*U.SPLAT_FORCE;Ft(r.texcoordX,r.texcoordY,g,x,r.color)}function Ii(r){const g=ct();g.r*=10,g.g*=10,g.b*=10;let x=10*(Math.random()-.5),_=30*(Math.random()-.5);Ft(r.texcoordX,r.texcoordY,x,_,g)}function Ft(r,g,x,_,Q){pe.bind(),o.uniform1i(pe.uniforms.uTarget,z.read.attach(0)),o.uniform1f(pe.uniforms.aspectRatio,E.width/E.height),o.uniform2f(pe.uniforms.point,r,g),o.uniform3f(pe.uniforms.color,x,_,0),o.uniform1f(pe.uniforms.radius,Di(U.SPLAT_RADIUS/100)),Z(z.write),z.swap(),o.uniform1i(pe.uniforms.uTarget,le.read.attach(0)),o.uniform3f(pe.uniforms.color,Q.r,Q.g,Q.b),Z(le.write),le.swap()}function Di(r){let g=E.width/E.height;return g>1&&(r*=g),r}function Mt(r,g,x,_){r.id=g,r.down=!0,r.moved=!1,r.texcoordX=x/E.width,r.texcoordY=1-_/E.height,r.prevTexcoordX=r.texcoordX,r.prevTexcoordY=r.texcoordY,r.deltaX=0,r.deltaY=0,r.color=ct()}function Rt(r,g,x,_){r.prevTexcoordX=r.texcoordX,r.prevTexcoordY=r.texcoordY,r.texcoordX=g/E.width,r.texcoordY=1-x/E.height,r.deltaX=Ni(r.texcoordX-r.prevTexcoordX),r.deltaY=Ui(r.texcoordY-r.prevTexcoordY),r.moved=Math.abs(r.deltaX)>0||Math.abs(r.deltaY)>0,r.color=_}function zi(r){r.down=!1}function Ni(r){let g=E.width/E.height;return g<1&&(r*=g),r}function Ui(r){let g=E.width/E.height;return g>1&&(r/=g),r}function ct(){let r=Oi(Math.random(),1,1);return r.r*=.15,r.g*=.15,r.b*=.15,r}function Oi(r,g,x){let _,Q,fe,me,Ee,Pe,Be,Xe;switch(me=Math.floor(r*6),Ee=r*6-me,Pe=x*(1-g),Be=x*(1-Ee*g),Xe=x*(1-(1-Ee)*g),me%6){case 0:_=x,Q=Xe,fe=Pe;break;case 1:_=Be,Q=x,fe=Pe;break;case 2:_=Pe,Q=x,fe=Xe;break;case 3:_=Pe,Q=Be,fe=x;break;case 4:_=Xe,Q=Pe,fe=x;break;case 5:_=x,Q=Pe,fe=Be;break}return{r:_,g:Q,b:fe}}function Bi(r,g,x){const _=x-g;return(r-g)%_+g}function It(r){let g=o.drawingBufferWidth/o.drawingBufferHeight;g<1&&(g=1/g);const x=Math.round(r),_=Math.round(r*g);return o.drawingBufferWidth>o.drawingBufferHeight?{width:_,height:x}:{width:x,height:_}}function Oe(r){const g=window.devicePixelRatio||1;return Math.floor(r*g)}function Gi(r){if(r.length===0)return 0;let g=0;for(let x=0;x<r.length;x++)g=(g<<5)-g+r.charCodeAt(x),g|=0;return g}function Dt(r){let g=F[0],x=Oe(r.clientX),_=Oe(r.clientY);Mt(g,-1,x,_),Ii(g)}let zt=!1;function Nt(r){let g=F[0],x=Oe(r.clientX),_=Oe(r.clientY);if(zt)Rt(g,x,_,g.color);else{let Q=ct();Rt(g,x,_,Q),zt=!0}}function Ut(r){const g=r.targetTouches;let x=F[0];for(let _=0;_<g.length;_++){let Q=Oe(g[_].clientX),fe=Oe(g[_].clientY);Mt(x,g[_].identifier,Q,fe)}}function Ot(r){const g=r.targetTouches;let x=F[0];for(let _=0;_<g.length;_++){let Q=Oe(g[_].clientX),fe=Oe(g[_].clientY);Rt(x,Q,fe,x.color)}}function Bt(r){const g=r.changedTouches;let x=F[0];for(let _=0;_<g.length;_++)zi(x)}return window.addEventListener("mousedown",Dt),window.addEventListener("mousemove",Nt),window.addEventListener("touchstart",Ut),window.addEventListener("touchmove",Ot,!1),window.addEventListener("touchend",Bt),ke(),()=>{T=!1,I.current&&(cancelAnimationFrame(I.current),I.current=null),window.removeEventListener("mousedown",Dt),window.removeEventListener("mousemove",Nt),window.removeEventListener("touchstart",Ut),window.removeEventListener("touchmove",Ot),window.removeEventListener("touchend",Bt)}},[]),e.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:e.jsx("canvas",{ref:k,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})}const No=(n,t,i)=>(1-i)*n+i*t,Uo=(n,t)=>{if(t){const i=t.getBoundingClientRect();return{x:n.clientX-i.left,y:n.clientY-i.top}}return{x:n.clientX,y:n.clientY}},Oo=({color:n="white",containerRef:t=null,targetSelector:i="a, button, .shop-item, .dock-item, .coin-entity"})=>{const s=l.useRef(null),u=l.useRef(null),h=l.useRef(null),S=l.useRef(null),C=l.useRef(null),y=l.useRef(null),j=l.useRef({x:0,y:0});return l.useEffect(()=>{const v=F=>{if(j.current=Uo(F,t?.current),t?.current){const o=t.current.getBoundingClientRect();F.clientX<o.left||F.clientX>o.right||F.clientY<o.top||F.clientY>o.bottom?G.to([u.current,h.current],{opacity:0}):G.to([u.current,h.current],{opacity:1})}},P=t?.current||window;P.addEventListener("mousemove",v);const b={tx:{previous:0,current:0,amt:.15},ty:{previous:0,current:0,amt:.15}};G.set([u.current,h.current],{opacity:0});const R=()=>{b.tx.previous=b.tx.current=j.current.x,b.ty.previous=b.ty.current=j.current.y,G.to([u.current,h.current],{duration:.9,ease:"Power3.easeOut",opacity:1}),y.current=requestAnimationFrame(N),P.removeEventListener("mousemove",R)};P.addEventListener("mousemove",R);const k={turbulence:0},I=G.timeline({paused:!0,onStart:()=>{u.current&&(u.current.style.filter="url(#filter-noise-x)"),h.current&&(h.current.style.filter="url(#filter-noise-y)")},onUpdate:()=>{S.current&&C.current&&(S.current.setAttribute("baseFrequency",k.turbulence),C.current.setAttribute("baseFrequency",k.turbulence))},onComplete:()=>{u.current&&h.current&&(u.current.style.filter=h.current.style.filter="none")}}).to(k,{duration:.5,ease:"power1",startAt:{turbulence:1},turbulence:0}),E=()=>I.restart(),T=()=>I.progress(1).kill(),N=()=>{b.tx.current=j.current.x,b.ty.current=j.current.y;for(const F in b)b[F].previous=No(b[F].previous,b[F].current,b[F].amt);u.current&&h.current&&(G.set(h.current,{x:b.tx.previous}),G.set(u.current,{y:b.ty.previous})),y.current=requestAnimationFrame(N)},U=F=>{if(!F.target||typeof F.target.closest!="function")return;const o=F.target.closest(i);o&&(!F.relatedTarget||!o.contains(F.relatedTarget))&&(E(),o.addEventListener("mouseleave",T,{once:!0}))};return document.addEventListener("mouseover",U),()=>{P.removeEventListener("mousemove",v),P.removeEventListener("mousemove",R),y.current&&cancelAnimationFrame(y.current),document.removeEventListener("mouseover",U)}},[t,i]),e.jsxs("div",{ref:s,className:"cursor",style:{position:t?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1e4},children:[e.jsx("svg",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"},children:e.jsxs("defs",{children:[e.jsxs("filter",{id:"filter-noise-x",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:S}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]}),e.jsxs("filter",{id:"filter-noise-y",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:C}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]})]})}),e.jsx("div",{ref:u,style:{position:"absolute",width:"100%",height:"1px",background:n,pointerEvents:"none",top:0,opacity:0}}),e.jsx("div",{ref:h,style:{position:"absolute",height:"100%",width:"1px",background:n,pointerEvents:"none",left:0,opacity:0}})]})},Bo=()=>{const n=Ve(-100),t=Ve(-100),i={damping:20,stiffness:300,mass:.2},s=it(n,i),u=it(t,i),h=Xn(s),S=tt(h,[-2e3,2e3],[-60,60]),C=60,y=tt([n,t,s,u],([v,P,b,R])=>{const k=R+C;return`M ${v-4} ${P} Q ${(v+b)/2-12} ${(P+k)/2} ${b} ${k}`}),j=tt([n,t,s,u],([v,P,b,R])=>{const k=R+C;return`M ${v+4} ${P} Q ${(v+b)/2+12} ${(P+k)/2} ${b} ${k}`});return l.useEffect(()=>{const v=P=>{n.set(P.clientX),t.set(P.clientY)};return window.addEventListener("mousemove",v),()=>window.removeEventListener("mousemove",v)},[n,t]),e.jsxs("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:9999},children:[e.jsxs("svg",{style:{width:"100%",height:"100%",overflow:"visible"},children:[e.jsx(ee.path,{d:y,stroke:"rgba(0,0,0,0.2)",strokeWidth:"4",fill:"none",style:{translateX:2,translateY:2}}),e.jsx(ee.path,{d:j,stroke:"rgba(0,0,0,0.2)",strokeWidth:"4",fill:"none",style:{translateX:2,translateY:2}}),e.jsx(ee.path,{d:y,stroke:"url(#chainGradient)",strokeWidth:"3",strokeDasharray:"1 3",strokeLinecap:"round",fill:"none"}),e.jsx(ee.path,{d:j,stroke:"url(#chainGradient)",strokeWidth:"3",strokeDasharray:"1 3",strokeLinecap:"round",fill:"none"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"chainGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#ffd700"}),e.jsx("stop",{offset:"50%",stopColor:"#fff"}),e.jsx("stop",{offset:"100%",stopColor:"#ffd700"})]}),e.jsxs("filter",{id:"diamondGlow",children:[e.jsx("feGaussianBlur",{stdDeviation:"4",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),e.jsx(ee.div,{style:{position:"absolute",top:0,left:0,x:n,y:t,translateX:"-50%",translateY:"-50%",width:12,height:12,background:"radial-gradient(circle, #fff 30%, #ffd700 100%)",borderRadius:"50%",boxShadow:"0 0 10px #ffd700, 0 0 5px #fff",zIndex:20}}),e.jsxs(ee.div,{style:{position:"absolute",top:0,left:0,x:s,y:u,translateX:"-50%",translateY:C-30,rotate:S,zIndex:10,display:"flex",justifyContent:"center",alignItems:"center",width:60,height:60,filter:"drop-shadow(0 15px 25px rgba(0,0,0,0.3))"},children:[e.jsxs("svg",{width:"50",height:"50",viewBox:"0 0 100 100",style:{overflow:"visible"},children:[e.jsxs("g",{filter:"url(#diamondGlow)",children:[e.jsx("path",{d:"M45 15 L55 15 L50 25 Z",fill:"#ffd700"}),e.jsx("path",{d:"M20 35 L80 35 L100 35 L50 95 L0 35 Z",fill:"url(#diamondBodyGrad)",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1"}),e.jsx("path",{d:"M20 35 L35 20 L65 20 L80 35",fill:"#e0f7fa",opacity:"0.6"}),e.jsx("path",{d:"M35 20 L50 35 L65 20",fill:"#b2ebf2",opacity:"0.8"}),e.jsx("path",{d:"M20 35 L50 95 L80 35",fill:"none",stroke:"rgba(255,255,255,0.4)",strokeWidth:"0.5"}),e.jsx("path",{d:"M35 20 L50 95 L65 20",fill:"none",stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),e.jsx("circle",{cx:"50",cy:"45",r:"15",fill:"white",fillOpacity:"0.2",style:{mixBlendMode:"overlay"}})]}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"diamondBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#e1f5fe"}),e.jsx("stop",{offset:"40%",stopColor:"#4fc3f7"}),e.jsx("stop",{offset:"100%",stopColor:"#0288d1"})]})})]}),e.jsx("div",{style:{position:"absolute",top:"20%",left:"20%",width:"60%",height:"60%",background:"radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)",mixBlendMode:"screen",opacity:.8,animation:"diamondSparkle 3s infinite ease-in-out",pointerEvents:"none"}})]}),e.jsx("style",{children:`
        @keyframes diamondSparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(45deg); }
        }
      `})]})},Go=""+new URL("ring-CJvK4024.gif",import.meta.url).href,pt={cursor_neon:{name:"Neon Pulse",price:500,desc:"Estilo Cyberpunk. Cambia de color.",icon:e.jsx(on,{}),type:"replace",className:"cursor-neon"},cursor_gold:{name:"Gold Sparkle",price:1e3,desc:"Cursor de oro puro con rastro brillante.",icon:e.jsx(mi,{}),type:"replace",className:"cursor-gold",effect:"sparkle"},cursor_ring:{name:"Anillo",price:1500,desc:"Un anillo animado.",icon:e.jsx(pi,{}),type:"replace",className:"cursor-ring",backgroundImage:Go},cursor_blackhole:{name:"Agujero Negro",price:2e3,desc:"Singularidad que distorsiona la luz.",icon:e.jsx(nn,{}),type:"replace",className:"cursor-blackhole"},cursor_crosshair:{name:"Crosshair",price:3e3,desc:"Líneas de precisión con distorsión.",icon:e.jsx(fi,{}),type:"custom",component:Oo},cursor_splash:{name:"Splash Fluid",price:4e3,desc:"Tinta fluida reactiva.",icon:e.jsx(tn,{}),type:"custom",component:zo,hideNative:!1},cursor_target:{name:"Target HUD",price:5e3,desc:"Sistema de fijación táctico.",icon:e.jsx(en,{}),type:"custom",component:Do},cursor_prestige:{name:"Prestigio",price:0,desc:"Símbolo de máxima excelencia.",icon:e.jsx(vt,{}),type:"custom",component:Bo,requiresAchievement:"prestige",hiddenInShop:!0}};function qo(){const{activeCursor:n}=Ue(),t=l.useRef(null),[i,s]=l.useState(!1),[u,h]=l.useState([]),[S,C]=l.useState(!1);l.useRef(),l.useEffect(()=>{const v=E=>{const{clientX:T,clientY:N}=E;E.type==="mousemove"&&C(!0),t.current&&(t.current.style.transform=`translate3d(${T}px, ${N}px, 0)`);const U=pt[n];U?.effect&&U.effect==="sparkle"&&Math.random()>.7&&y(T,N,"sparkle")},P=E=>{if(E.touches.length>0){const T=E.touches[0];v({clientX:T.clientX,clientY:T.clientY,type:"touchmove"})}},b=E=>{C(!0),s(!0),P(E)},R=()=>{s(!1),C(!1)},k=()=>s(!0),I=()=>s(!1);return window.addEventListener("mousemove",v),window.addEventListener("mousedown",k),window.addEventListener("mouseup",I),window.addEventListener("touchmove",P,{passive:!0}),window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchend",R),()=>{window.removeEventListener("mousemove",v),window.removeEventListener("mousedown",k),window.removeEventListener("mouseup",I),window.removeEventListener("touchmove",P),window.removeEventListener("touchstart",b),window.removeEventListener("touchend",R)}},[n]);const y=(v,P,b)=>{const R=Date.now()+Math.random();h(k=>[...k,{id:R,x:v,y:P,type:b}]),setTimeout(()=>{h(k=>k.filter(I=>I.id!==R))},1e3)};l.useEffect(()=>{const v=pt[n];return v&&((v.type==="replace"||v.type==="custom")&&v.hideNative!==!1&&document.body.classList.add("hide-native-cursor"),v.bodyClass&&document.body.classList.add(v.bodyClass)),()=>{document.body.classList.remove("hide-native-cursor"),v&&v.bodyClass&&document.body.classList.remove(v.bodyClass)}},[n]);const j=pt[n];return sn.createPortal(e.jsxs("div",{className:"cursor-overlay",children:[u.map(v=>e.jsx("div",{className:"sparkle-particle",style:{left:v.x,top:v.y}},v.id)),j&&j.type==="replace"&&S&&e.jsx("div",{ref:t,className:"cursor-follower",children:e.jsx("div",{className:`${j.className} ${i?"clicking":""}`,style:j.backgroundImage?{backgroundImage:`url(${j.backgroundImage})`}:{}})}),j&&j.type==="custom"&&S&&e.jsx(j.component,{targetSelector:"button, .shop-item, input, a, .coin-entity, .dock-item, .dock-icon"})]}),document.body)}const Li=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,Pi=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,Ei=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,ki=""+new URL("duck-BnqypGlP.png",import.meta.url).href,Ti="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpAgoQDSR9aWoCAAANHklEQVRo3u1YaXRVRbb+qk6dc+6cm4kwBTMSBkNAMYBEaBEEERGxsRFFRe3GJ9j4wJa37AZppN/CtZ6rl3NAeTTggIDIEIiCCKJMYQqEOSEJZCIkN/cmufM5p+r9SCBEE7BZLN6ffGvd86NuDfur/e3auwroQAc60IEOdODmQa735yuTngAA+AI+QJYRDAQw84W/QYGCgZMG/X/b3gqsrcY3Z74MSZFRfbECEpHMhJBuRFFLtcoy/dOVi3/TxPNeeglvZWfjhbFjYOg6KFNwYt8ujHnqRSz84L1bToS21ajrYehaiAgibI2N9QPCXu/HxOcbpppt0xiTHbIsX3fSpe/9E//IzsbItGQQQmNAyABCpbjYhCSs+2wJXlm16pYTaVNarz//LAhB54qS0iWESHmqrG7hxIgO+P3TzE7nHAJSvWzj5lZj/vO551B8PB8RsZ0Q8vvAdQ2qzZEgAr5lDLhbp3Qvi4h8OuCqqaMCoBKDbLXBHBEJLRjEqCmTMXny5JsmIrXVmDVgAAShRmO9x60oar0h0SP22JgSSPLmb/LyPXKnOFwoPAcA2LlzAfRyIBDwQ4RDoFaH2QgH0wmho7kWnGVjdGy02WzSdP2OgN+vAoiVJJYMSrsSJvMZGzfU7/nXMpw9dAAzZs9BTm7urfPI3Oenwe2qhaaFY0Je7zKqmL4XQu8VER3zP4LzEp1I+GTtOgDA8w8/BE3T8NJ32/Fu1pDhVPBXFUnKMlEazSghFlmGQiWEOYc3HAYXgjf/whpIpUHIp6rd/qGuaV6z3Y6lX2+4dR75+Wg+1icnQwiiUcryHM7IkwIiTGV2GkBw6br1+NusGQgVlSA+NQWDR/+efPHajGcVwZdEm0wDI02qxSrLxMQYJNK0VxIhMDMGi8yIVWbUqsiymdEoXddH+EMhj+fM6b1RCclIjOqM6dOmIvfHH/8tIm0GO2n5aiAo1LXwxaDf9zUB3BACubm5KDt5GnckJ+DktxuR+9myHsww/hpjNsfZFPmq8dcTAgGBKjHYZYXysJF1sCpSXrZmLbjuw4E9PyPnu1y8/MTvsWrJkpuX1rXYtWsXwDmWLJyPbglJqDh/HvWuy3DGdI0J+L33M0UaEZ8YF+O55B7tJJJdZayNiQkEBAQA0fzRhYGQZsDPDQwc1e8gIeSnHTkHma7RtZDVozTk9imOSKQM6o+a4nIsWXd9yd2QyOvPTcO+b3PQPSUNIW8duGTtSqmY6HRanu7dv/uAvncnKql3dseBnaewJ/cYuFdvcnPzzEIAAgCHACQCiVFQJsFsVRGXEIU7ByYi68F0eOsD2PvDKRzdW+gpL6095GvQNgkmb/DVVJRFxifC0DQk3dkfi7M//PeInFyzBos+zoYsK2isqQZTLJ2FCE+J6mSdmj4wMePeB3qT3hkJMNtUQAhoIR2lRdUoOl2BBo8PWkiHpulQVBlWqwKrwwq7wwK70wKTWYbDaUFEpBWKSW52U5M5njovis9UYc+Okyg4WFLgdvnfFbL1C8JDAUMLIz1rKBb+873fRmTNmjXYlP0xhAAs0QnUdeHUKEcEm5c5rNfQEeP7IymtK2RFghC8abuvTEYpQAggSIsrCAAiWq/ULC8hxK8NIgSgBFrQwNmCcmxZuz98ZG/RJ2GDvUmJcAkhMOah0Zi+YOH1iSxYsAAle/aCcwOK2SZ7Llf+OSEl5o0JU4dGDRrWC7KJQXB+I0XeEhCJot7lx+pPfsDOrSdW6jC/yojhlhhB2rDf4c2///1q318dv8kmFUIAztgkqba8cHbfu7q/Nf31cfZ+mcmgFNfI4DZACJgsMtLS41Fb5c4oL6pyqFbHTgpo3upLOFpYdLVrq+N3zpQpYLKC5du+Q2XxsT+m9uk8f9qs0aaEtDgIbtw+Atdy4QL2CDOenjESd2clvRhodP0p/+cdYKoZf/2PP17t18oj+qWLYBLF+n+tHNW5q+2DF+aMdabe2e22Sal9NoDFZkKPxFjpzPEL/SUl8ojP4yo9c/QELjTUtyby2tRnoKgquGAxZgv96MmX7u99z3092wzI2wlCCAilEJzDGW2DJDHbmfyLXQhzbIrqHB16ZfZsbN66tUVa46fPREPNJcDQJ/YflDR0yIg+rU4kIQBu3F7PEAJUXnDh8J6zMAwDEMCQEb2R0qfz0KDXPTDsbcSeLVsBNMfIinfewdJ5c6Ha45yOSHXq78ZkUJNFac7FACEUBXkl+OrTHxAO6reRCcXp4xexfvlu+LwhAIDVbkJaejcrlZAVDrrgjIpuIbJ//wnoQT94ODAgsWdc/7R+3YHmuCAgCPjCyFm9H9UV9SD0hsXALYRAap9u8DUGUVZU2+QiAnRP6ATVxPppak92uaa6hUh0JycMLQgQ0bdrjxibxaq2nLIUuFBUhbLSagwfkwHF3P7t8IqeyS+KRvKrIpKASPTGmyIEomLtsNhNqCxzNSdbICrGAbNZjjUCLtUIh1qIOCIcMIQBAZgpbcqs16yJC0WXYLObkJjWFeCivTVR7/bjXEEZaqsbQJpzraEbcNd5YehXPAwE/WEcP1CMi0U10MLtS1UAYIxCVhj83iCuBK1hGBACukwkzghtITLp+T9AVq2QJHb8/OlKf3WFG4QQcC7ANY46lw+d46NhjzC3W1bUu3344B/r8fbc1TiyrxCgBIQS1F6ux0eLv0FpUU1TCUMJ3LUN+OyDbVj8ly9wLK+4Xc8QEGiagWAgBCpdbUT5hRr4A6Giex5cGrDarACaX1FOHTkBppohqWx34emq7A8XbZjeIynOGgpqRs/0Hvk1VY0OpkiptJ0FhRCw2FSMGj8QdAJFz/TmGCMEFqsZWQ9kQDHTq/VVp26RmDFvAqorPUju1bX9aoE0eTng0xCfGAcQCq/Hh0M/nfMH/UbOsV3PoqS46KqnAQCTs4aCcw5Iktnw+e/lXNxhCOFVrfbdENqr996fMveV+Y9DkgTayyxNRSMA3rogJJRA/EKShJImzXPRbq4ilGLbN4eQ8+U+vPjaONgcJuzIOYqdWwtWhgLKdNVEgsl9emFRdnbLu1ZS5l0o2p8HSmmAKNIOYXAwAkgkDF0XBVUXXUZDvV+KjLa02kFCaUulCwFw/Mowwa+TVCkBaWMMIQSNHj9+3nYCIb+Wt/zdrZqvMax66nxbOWdLiPAF9ZCERdnZrT1yBT/+uAXx/VJxftcJjJzwGJ4akQVuoIsEPeeRKYPvemzqfVDUJsGGwzpOHC5F/r5CcA6k35OAtPQeiIi0AWg7eRJKwHWBy1X1KDlbARCClD7dEBvnhGgeQyhBKKjj6//djS1fHTjFVOuUujpfMRGExdiOu71GBoxwEN1TeuG9r1a3TeSXWLrmc+QsWAg1ImKiKtPsEeP7x46fci8sVhPWr/wJe7YfR3xSHBrcXngbgrDYVDw4cRCGP5QOSSJouZQ07XLhqUp8v/EwzhWUwVvvh9mqQjXLeOyZ4RgyohcIpXDXeLFtw0Fs/mJfaSjIpxGD7DJH26GHDciKBYahIXPIYPx50aJrw+n6ePGxcTACITz5xByyfPlb44QenndHSuyAyFgHKymswtSXRyJzeC+Egwbqahux9/sT2Jl7FI8/MwwjJwwEhAGDN53oBYdLseLdbYiOc2DoyL7olhADm92C7ZsOI2/nKYx+PBOhQBgHfzqLsuKac4aB1/2NtRtjuqeCKRSfbv62XTtvSMTj8WD2E5MgMYaqsgo4IuyxoUBwrGEYszIGJw54450noaisaSpCwA2OVe9/j/27TiL97iRQSuDzhUBAUFJYhYTULpg+92HYnKbmuCLwe0N4+7UvcSq/zEWA81yIrYyxz90nTxV1yhwECoqVO7Zf1052IyJOpxMAMPPRR3DfsCwcO5ZfQyWxgkOqr6ttXH2p3KP2SI1riV1KYbGpqK32Vv+Qc2wDF1wjoCAgEpHExDGPD4qzRVqBK/cbCmhhDWHNABfkbZPZ8nHN4d3eqH6Z6HrfMBih4A1JAO080LWFvLPnsD0vD7lr18MwDDAmlzfWe7ufP1OR4brUSKrL61BefBm7vyvAzi35gXAI/70u7+AbPRQtl2s8N33suG/dZWVJ9e6GgQ6HBQBBXY0XpeeqsXX1fhQcKt1PmfImwGsjklJBJAmZQwdj8fIVv8m+m6oAJw3OBAHAJDkyEAo8QiDuYYx2IQRm3eCVIPIW1WLOpYSEYrt0AQFFeWkhCJW66EFtltUqP2yxqVGccy3gD9f5/dohMPa+4fMXVBwrwMGbsOmmiPzlqadxoegMKJNhhEPQ/ZcgpHhGCKd2S5Lm4+eFrJrAuYG+DzyIxvJyFB8/BKaYYIvvSzyFx2OFoUUIKumcknopMsZDGl38630H8dyj47Bi05bbQwRoSmCznpqMzEfHYfsnyxHw+iCEgKLImPlf87Fq6Uf4aOPGq/3nz5qF03n7wWQZXNOaYoRS6BRgTEGD24WU9P54//Mvb9akDnSgAx3owO3H/wGUgcIFOUeM9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMi0xMFQxNjoxMzozMCswMDowMC3bAQsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDItMTBUMTY6MTM6MzArMDA6MDBchrm3AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAyLTEwVDE2OjEzOjM2KzAwOjAwaEOtUgAAAABJRU5ErkJggg==",_i=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,Wo=""+new URL("galaxy-ChI-pR4w.gif",import.meta.url).href,Yo=""+new URL("silk-DaWETVYo.gif",import.meta.url).href,Xo=""+new URL("ballpit-DiGrqYC4.gif",import.meta.url).href,Ho=""+new URL("floatinglines-BnKOb4-3.gif",import.meta.url).href,Vo=""+new URL("lightpillar-B2qC6hEB.gif",import.meta.url).href,$o=""+new URL("pixel-snow-XBi11QsW.gif",import.meta.url).href,Jo=""+new URL("hyperspeed-bdn_De3N.gif",import.meta.url).href,yt={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico atemporal.",price:0,type:"background",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:50,type:"background",previewColor:"#ff99cc",image:Yo},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:100,type:"background",previewColor:"#00ffff",image:Vo},{id:"pixelsnow",name:"Pixel Snow",description:"Nevada suave y distante.",price:150,type:"background",previewColor:"#ffffff",image:$o},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:200,type:"background",previewColor:"#bd71ff",image:Ho},{id:"galaxy",name:"Galaxy",description:"Un viaje a las estrellas.",price:300,type:"background",previewColor:"#000",image:Wo},{id:"hyperspeed",name:"Hyperspeed",description:"Velocidad luz y distorsión.",price:500,type:"background",previewColor:"#d856bf",image:Jo},{id:"ballpit",name:"Ball Pit",description:"Física interactiva y relajante.",price:800,type:"background",previewColor:"#29b1ff",image:Xo}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:0,type:"cursor",previewColor:"transparent",icon:e.jsx(gi,{})},...Object.entries(pt).map(([n,t])=>({id:n,name:t.name,description:t.desc,price:t.price,type:"cursor",previewColor:"transparent",icon:t.icon,requiresAchievement:t.requiresAchievement,hiddenInShop:t.hiddenInShop})).sort((n,t)=>n.price-t.price)],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:0,type:"trail",previewColor:"transparent",icon:e.jsx(rn,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:100,type:"trail",previewColor:"#ffadad",icon:e.jsx("img",{src:Li,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:100,type:"trail",previewColor:"#a89c8d",icon:e.jsx("img",{src:Pi,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:100,type:"trail",previewColor:"#ffecb6",icon:e.jsx("img",{src:Ei,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:100,type:"trail",previewColor:"#ebe371",icon:e.jsx("img",{src:ki,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:100,type:"trail",previewColor:"#e3e4b2",icon:e.jsx("img",{src:Ti,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:100,type:"trail",previewColor:"#a3a3a3",icon:e.jsx("img",{src:_i,alt:"Skeleton",style:{width:"40px"}})}],skins:[{id:"dase",name:"Dase Original",description:"La moneda original.",price:0,type:"skin",previewColor:"#f6ffa3",icon:e.jsx("img",{src:ji,alt:"Dase",style:{width:"100px",height:"60px",objectFit:"contain",borderRadius:"20%"}})},{id:"angel",name:"Angel",description:"Monke.",price:0,type:"skin",previewColor:"#e0ffff",icon:e.jsx("img",{src:Ci,alt:"Angel",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})},{id:"rachel",name:"Rachel",description:"La criminologa.",price:0,type:"skin",previewColor:"#ffc0cb",icon:e.jsx("img",{src:Ai,alt:"Rachel",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})},{id:"natalia",name:"Natalia",description:"Es Natalia...",price:0,type:"skin",previewColor:"#ffcccb",icon:e.jsx("img",{src:Ri,alt:"Natalia",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})}]},Ko=[{id:"backgrounds",label:"Fondos",icon:e.jsx(an,{})},{id:"cursors",label:"Cursores",icon:e.jsx(gi,{})},{id:"trails",label:"Mascotas",icon:e.jsx(ln,{})},{id:"skins",label:"Monedas",icon:e.jsx(pi,{})}],Qo=({enableGoldTheme:n=!0})=>{const{activeShop:t,openShop:i,closeShop:s,activeBackground:u,setBackground:h,activeCursor:S,setCursor:C,activeTrail:y,setTrail:j,coins:v,buyItem:P,ownedItems:b,activeCoinSkin:R,setCoinSkin:k,achievements:I,unlockAchievement:E}=Ue(),[T,N]=l.useState(t),[U,F]=l.useState([]),o=l.useRef();l.useEffect(()=>{t&&N(t)},[t]),l.useEffect(()=>{b&&!I.includes("collector")&&Object.values(yt).flat().filter(a=>a.type!=="skin"&&!a.requiresAchievement).every(a=>b.includes(a.id))&&E("collector")},[b,I,E]);const J=I&&I.includes("collector")&&n,X=l.useCallback(()=>{J&&(F(d=>d.map(c=>({...c,x:c.x+c.vx,y:c.y+c.vy,life:c.life-.02,size:c.size*.95})).filter(c=>c.life>0)),o.current=requestAnimationFrame(X))},[J]);l.useEffect(()=>(J&&t&&(o.current=requestAnimationFrame(X)),()=>cancelAnimationFrame(o.current)),[J,t,X]);const A=d=>{if(!J)return;const c=d.currentTarget.getBoundingClientRect(),a=d.clientX-c.left,p=d.clientY-c.top;if(Math.random()>.5)return;const m={id:Math.random(),x:a,y:p,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5+.5,life:1,size:Math.random()*3+2};F(w=>[...w,m])},H=(yt[T]||[]).filter(d=>d.hiddenInShop?!1:d.requiresAchievement?I.includes(d.requiresAchievement):!0),M=d=>b.includes(d.id)||d.price===0,q=d=>{M(d)?(t==="backgrounds"&&h(d.id),t==="cursors"&&C(d.id),t==="trails"&&j(d.id),t==="skins"&&k(d.id)):v>=d.price&&(P(d),t==="backgrounds"&&h(d.id),t==="cursors"&&C(d.id),t==="trails"&&j(d.id),t==="skins"&&k(d.id))},W=d=>t==="backgrounds"?u===d:t==="cursors"?S===d:t==="trails"?y===d:t==="skins"?R===d:!1;return e.jsx(Te,{children:t&&e.jsxs(ee.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:s,style:{position:"absolute",inset:0,pointerEvents:"auto"}}),e.jsxs(ee.div,{className:`shop-window ${J?"gold-theme":""}`,onMouseMove:A,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(ee.div,{className:"gold-bg-layer",initial:{opacity:0},animate:{opacity:J?1:0},transition:{duration:.8}}),U.map(d=>e.jsx("div",{className:"gold-particle",style:{left:d.x,top:d.y,width:d.size,height:d.size,opacity:d.life}},d.id)),e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:Ko.map(d=>e.jsxs("button",{onClick:()=>i(d.id),className:`tab-btn ${t===d.id?"active":""}`,children:[d.icon,e.jsx("span",{children:d.label}),t===d.id&&e.jsx(ee.div,{layoutId:"activeTab",className:"active-line"})]},d.id))}),e.jsxs("div",{className:"coin-display",children:[v," 🪙"]}),e.jsx("button",{onClick:s,className:"close-btn",children:e.jsx(xt,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",T==="backgrounds"?"Fondos":T==="cursors"?"Cursores":T==="trails"?"Mascotas":"Monedas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(Te,{mode:"wait",children:e.jsx(ee.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:H.map(d=>e.jsxs("div",{className:`shop-item ${W(d.id)?"equipped":""}`,onClick:()=>q(d),children:[e.jsxs("div",{className:`item-preview ${d.type}`,style:{background:d.previewColor},children:[d.image&&e.jsx("img",{src:d.image,alt:d.name,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),d.icon&&e.jsx("div",{className:"preview-icon",style:{zIndex:1},children:d.icon}),W(d.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(vi,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:d.name}),e.jsx("p",{children:d.description}),M(d)?e.jsx("span",{className:"price-tag",style:{color:"#00e676",background:"rgba(0, 230, 118, 0.15)"},children:W(d.id)?"Equipado":"En propiedad"}):e.jsxs("span",{className:"price-tag",children:[d.price," Monedas"]})]})]},d.id))},T)})})]})]})})},_e=80,Vt=Object.assign({"../../assets/coin/angel/angel.mp3":wo,"../../assets/coin/angel/angel.png":So,"../../assets/coin/angel/angelshiny.png":jo,"../../assets/coin/dase/dase.mp3":Ao,"../../assets/coin/dase/dase.png":Lo,"../../assets/coin/dase/daseshiny.png":Eo,"../../assets/coin/natasha/natasha.png":ko,"../../assets/coin/natasha/natashashiny.png":_o,"../../assets/coin/rachel/rachel.png":Fo,"../../assets/coin/rachel/rachelshiny.png":Io}),Ye={};Object.keys(Vt).forEach(n=>{const t=n.split("/"),i=t[t.length-2],s=t[t.length-1].toLowerCase();Ye[i]||(Ye[i]={normal:null,shiny:null,sound:null});const u=Vt[n].default;s.includes("shiny")?Ye[i].shiny=u:s.endsWith("mp3")||s.endsWith("wav")?Ye[i].sound=u:Ye[i].normal=u});Object.values(Ye).forEach(n=>{!n.shiny&&n.normal&&(n.shiny=n.normal)});function Zo(){const{addCoins:n,activeCoinSkin:t,gameVolume:i,unlockAchievement:s,coins:u,achievements:h,ownedItems:S,activeCursor:C}=Ue(),[y,j]=l.useState([]),[v,P]=l.useState([]),[b,R]=l.useState(1),k=l.useRef(),I=l.useRef(null),E=l.useRef(!1),T=l.useRef(0),N=l.useRef(0);l.useEffect(()=>(E.current=!0,()=>{E.current=!1}),[]);const U=Ye[t]||Ye.dase||{normal:"",shiny:"",sound:null};l.useEffect(()=>{U&&U.sound&&(I.current=new Audio(U.sound),I.current.volume=i)},[U,i]),l.useEffect(()=>{const a=window.innerWidth,p=window.innerHeight,m=[];for(let w=0;w<5;w++)m.push({id:`normal-${w}`,type:"normal",x:Math.random()*(a-_e),y:Math.random()*(p-_e),vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6,img:U.normal,value:1});m.push({id:"shiny-1",type:"shiny",x:Math.random()*(a-_e),y:Math.random()*(p-_e),vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,img:U.shiny,value:5}),j(m)},[t,U]);const F=l.useCallback(()=>{T.current>0&&Date.now()>T.current&&(R(a=>a>1?1:a),T.current=0),j(a=>a.map(p=>{let{x:m,y:w,vx:B,vy:Y}=p;return m+=B,w+=Y,(m<=0||m>=window.innerWidth-_e)&&(B=-B,m=Math.max(0,Math.min(m,window.innerWidth-_e))),(w<=0||w>=window.innerHeight-_e)&&(Y=-Y,w=Math.max(0,Math.min(w,window.innerHeight-_e))),{...p,x:m,y:w,vx:B,vy:Y}})),P(a=>a.length===0?a:a.map(p=>({...p,x:p.x+p.vx,y:p.y+p.vy,vy:p.vy+.5,life:p.life-.03})).filter(p=>p.life>0)),k.current=requestAnimationFrame(F)},[]);l.useEffect(()=>(k.current=requestAnimationFrame(F),()=>cancelAnimationFrame(k.current)),[F]);const o=a=>{let p=b+1;p>20&&(p=20),R(p);const m=Math.max(500,2500-p*100);N.current=m,T.current=Date.now()+m;const w=a.value*p;n(w),navigator.vibrate&&(a.type==="shiny"?navigator.vibrate([50,30,50]):navigator.vibrate(40)),s("baby_steps"),p>=5&&s("on_fire"),p>=10&&s("god_mode"),a.type==="shiny"&&s("shiny_lover"),Math.sqrt(a.vx*a.vx+a.vy*a.vy)>15&&s("sniper");const Y=u+w;if(Y>=500&&s("piggy_bank"),Y>=1e3&&s("stonks"),Y>=5e3&&s("crypto_king"),Object.values(yt).flat().filter(O=>O.type!=="skin").every(O=>S.includes(O.id))&&s("collector"),h){const O=Object.keys(rt);O.length,O.filter(z=>z!=="prestige").every(z=>h.includes(z))&&s("prestige")}if(a.type==="shiny"&&I.current){const O=I.current.cloneNode();O.volume=i,O.play().catch(Z=>console.log("Audio error:",Z))}const te=[],ie=a.type==="shiny"?"#ffd700":"#ffffff";for(let O=0;O<12;O++)te.push({id:`${Date.now()}-${O}-${Math.random()}`,x:a.x+_e/2,y:a.y+_e/2,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,life:1,color:ie});P(O=>[...O,...te]),j(O=>O.filter(Z=>Z.id!==a.id)),setTimeout(()=>{E.current&&j(O=>{const Z=window.innerWidth,le=window.innerHeight,z=1+Math.min(p,10)*.15,ne={...a,id:`${a.type}-${Date.now()}-${Math.random()}`,x:Math.random()*(Z-_e),y:Math.random()*(le-_e),vx:(Math.random()-.5)*(a.type==="shiny"?12:8)*z,vy:(Math.random()-.5)*(a.type==="shiny"?12:8)*z};return[...O,ne]})},2e3)},D=Date.now(),J=Math.max(0,T.current-D),X=b>1&&N.current>0?J/N.current:0,A=60,H=8,M=A-H*2,q=M*2*Math.PI,W=q-X*q,c=`hsl(${Math.min(120,Math.max(0,X*120))}, 100%, 50%)`;return e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:30,pointerEvents:"auto",overflow:"hidden",touchAction:"none"},children:[e.jsx("style",{children:`
        @media (max-width: 768px) {
          .game-hud-coins {
            top: calc(80px + env(safe-area-inset-top)) !important;
            left: 20px !important;
            font-size: 1rem !important;
            padding: 6px 12px !important;
          }
          .game-hud-combo {
            top: 20px !important;
            right: 20px !important;
            width: 100px !important;
            height: 100px !important;
          }
        }
      `}),e.jsxs("div",{className:"game-hud-coins",style:{position:"absolute",top:"110px",left:"30px",zIndex:100,display:"flex",alignItems:"center",gap:"10px",background:"rgba(0,0,0,0.5)",padding:"10px 20px",borderRadius:"30px",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(5px)",color:"#ffd700",fontFamily:"var(--font-main)",fontWeight:"bold",fontSize:"1.2rem",pointerEvents:"none"},children:[e.jsx("img",{src:U.normal,alt:"coin",style:{width:"24px",height:"24px"}}),e.jsx("span",{children:u})]}),e.jsx("div",{className:"game-hud-combo",style:{position:"absolute",top:"40px",right:"40px",pointerEvents:"none",zIndex:100,display:"flex",justifyContent:"center",alignItems:"center",width:"140px",height:"140px"},children:b>1&&e.jsxs(e.Fragment,{children:[e.jsxs("svg",{height:A*2,width:A*2,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%) rotate(-90deg)"},children:[e.jsx("circle",{stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:H,fill:"transparent",r:M,cx:A,cy:A}),e.jsx("circle",{stroke:c,strokeWidth:H,strokeDasharray:q+" "+q,style:{strokeDashoffset:W,transition:"stroke-dashoffset 0.1s linear"},strokeLinecap:"round",fill:"transparent",r:M,cx:A,cy:A})]}),e.jsxs("div",{style:{fontFamily:"var(--font-main)",fontSize:"3rem",fontWeight:"900",color:"#f700ff",textShadow:"0 0 20px rgba(247, 0, 255, 0.8)",transform:`scale(${1+Math.min(b,10)*.1})`,transition:"transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},children:["x",b]})]})}),v.map(a=>e.jsx("div",{style:{position:"absolute",left:a.x,top:a.y,width:"8px",height:"8px",backgroundColor:a.color,borderRadius:"50%",opacity:a.life,pointerEvents:"none",transform:"translate(-50%, -50%)",boxShadow:`0 0 8px ${a.color}`}},a.id)),y.map(a=>{const m=C==="cursor_target"?10:0;return e.jsx("div",{className:"coin-entity",onPointerDown:w=>{w.stopPropagation(),w.preventDefault(),o(a)},style:{position:"absolute",transform:`translate3d(${a.x-m}px, ${a.y-m}px, 0)`,width:_e+m*2,height:_e+m*2,cursor:"pointer",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",zIndex:20,touchAction:"none"},children:e.jsx("img",{src:a.img,alt:"coin",style:{width:_e,height:_e,objectFit:"contain",filter:a.type==="shiny"?"brightness(1.3) sepia(0.2)":"none",pointerEvents:"none"},draggable:!1})},a.id)})]})}const es=Object.assign({"../../assets/img/photos/bridge.jpeg":io,"../../assets/img/photos/first.jpg":oo,"../../assets/img/photos/graduated.jpeg":ro,"../../assets/img/photos/halloween.jpg":lo,"../../assets/img/photos/miestrella.jpg":uo,"../../assets/img/photos/murder.jpeg":mo,"../../assets/img/photos/rock.jpeg":po,"../../assets/img/photos/sleepy.jpg":vo,"../../assets/img/photos/sunshine.jpeg":yo}),At=Object.values(es).map(n=>n.default),ts=()=>{const[n,t]=l.useState(null),{isGameActive:i}=Ue();let s=[...At];if(s.length>0)for(;s.length<18;)s=[...s,...At];const u=[...s,...s];return e.jsx(Te,{mode:"wait",children:i?e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{width:"100%",height:"100%"},children:e.jsx(Zo,{})},"game"):e.jsxs(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"main-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),At.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:u.map((h,S)=>e.jsx("img",{src:h,alt:`Memory ${S}`,className:"gallery-item",onClick:()=>t(h)},S))})}),e.jsx(Te,{children:n&&e.jsx(ee.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(ee.img,{src:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:h=>h.stopPropagation()})})})]},"content")})},is=({color1:n="#b117f8",color2:t="#2c0b2e",speed:i=20})=>e.jsxs("div",{style:{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:`linear-gradient(to bottom, ${n}, ${t})`,animation:`spinGradient ${i}s linear infinite`}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),ns=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,os=`
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
`,ss=({focal:n=[.5,.5],rotation:t=[1,0],starSpeed:i=0,density:s=1.5,hueShift:u=300,disableAnimation:h=!1,speed:S=.5,glowIntensity:C=.5,saturation:y=.8,twinkleIntensity:j=.5,rotationSpeed:v=.05,transparent:P=!0,colorCycleSpeed:b=10,rainbow:R=!1,warp:k=!1,...I})=>{const E=l.useRef(null),T=l.useRef(u),N=l.useRef(null),U=l.useRef({starSpeed:i,disableAnimation:h,rainbow:R,colorCycleSpeed:b,warp:k,hueShift:u});return l.useEffect(()=>{U.current={starSpeed:i,disableAnimation:h,rainbow:R,colorCycleSpeed:b,warp:k,hueShift:u}},[i,h,R,b,k,u]),l.useEffect(()=>{if(!E.current)return;const F=E.current;F.innerHTML="";const o=new Hn({alpha:P,premultipliedAlpha:!1,dpr:1}),D=o.gl;P?(D.enable(D.BLEND),D.blendFunc(D.SRC_ALPHA,D.ONE_MINUS_SRC_ALPHA),D.clearColor(0,0,0,0)):D.clearColor(0,0,0,1);let J;function X(){o.setSize(F.offsetWidth*1,F.offsetHeight*1),N.current&&(N.current.uniforms.uResolution.value=new Xt(D.canvas.width,D.canvas.height,D.canvas.width/D.canvas.height))}window.addEventListener("resize",X,!1),X();const A=new Vn(D);J=new $n(D,{vertex:ns,fragment:os,uniforms:{uTime:{value:0},uResolution:{value:new Xt(D.canvas.width,D.canvas.height,D.canvas.width/D.canvas.height)},uFocal:{value:new Float32Array(n)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:i},uDensity:{value:s},uHueShift:{value:u},uSpeed:{value:S},uGlowIntensity:{value:C},uSaturation:{value:y},uTwinkleIntensity:{value:j},uRotationSpeed:{value:v},uTransparent:{value:P}}}),N.current=J;const H=new Jn(D,{geometry:A,program:J});let M,q=0;const d=1e3/30;function c(a){if(M=requestAnimationFrame(c),!E.current||!N.current)return;const p=a-q;if(p<d)return;q=a-p%d;const{starSpeed:m,disableAnimation:w,rainbow:B,colorCycleSpeed:Y,warp:re,hueShift:V}=U.current;if(!w){J.uniforms.uTime.value=a*.001;const te=re?m*10:m;J.uniforms.uStarSpeed.value=a*.001*te/10,B?(T.current+=Y*.05,J.uniforms.uHueShift.value=T.current%360):J.uniforms.uHueShift.value=V}o.render({scene:H})}return M=requestAnimationFrame(c),F.appendChild(D.canvas),D.canvas.style.width="100%",D.canvas.style.height="100%",D.canvas.style.display="block",D.canvas.style.willChange="transform",()=>{cancelAnimationFrame(M),window.removeEventListener("resize",X),F&&D.canvas&&F.contains(D.canvas)&&F.removeChild(D.canvas),D.getExtension("WEBGL_lose_context")?.loseContext(),N.current=null}},[P]),l.useEffect(()=>{if(!N.current)return;const F=N.current.uniforms;F.uFocal.value=new Float32Array(n),F.uRotation.value=new Float32Array(t),F.uDensity.value=s,F.uSpeed.value=S,F.uGlowIntensity.value=C,F.uSaturation.value=y,F.uTwinkleIntensity.value=j,F.uRotationSpeed.value=v},[n,t,s,S,C,y,j,v]),e.jsx("div",{ref:E,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},...I})},rs=gt.memo(ss);class as{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#i;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#C;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#o=!1;#n=!1;isDisposed=!1;#s;#r;#a;#l=new Tt;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#p(),this.#g(),this.#v(),this.resize(),this.#x()}#p(){this.camera=new xi,this.cameraFov=this.camera.fov}#g(){this.scene=new at}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new lt(t),this.renderer.outputColorSpace=mn}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#r=new ResizeObserver(this.#c.bind(this)),this.#r.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#r?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#o=t[0].isIntersecting,this.#o?this.#h():this.#u()}#f(){this.#o&&(document.hidden?this.#u():this.#h())}#c(){this.#a&&clearTimeout(this.#a),this.#a=setTimeout(this.resize.bind(this),100)}resize(){let t,i;this.#e.size instanceof Object?(t=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,i=window.innerHeight),this.size.width=t,this.size.height=i,this.size.ratio=t/i,this.#w(),this.#S(),this.onAfterResize(this.size)}#w(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#m(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#m(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#m(t){const i=Math.tan(kt.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*kt.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#S(){this.renderer.setSize(this.size.width,this.size.height),this.#i?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(Math.min(t,2)),this.size.pixelRatio=t}get postprocessing(){return this.#i}set postprocessing(t){this.#i=t,this.render=t.render.bind(t)}#h(){if(this.#n)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#n=!0,this.#l.start(),t()}#u(){this.#n&&(cancelAnimationFrame(this.#d),this.#n=!1,this.#l.stop())}#C(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(i=>{const s=t.material[i];s!==null&&typeof s=="object"&&typeof s.dispose=="function"&&s.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#i?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const Ge=new Map,Ne=new Le;let Lt=!1;function ls(n){const t={position:new Le,nPosition:new Le,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...n};return(function(i,s){Ge.has(i)||(Ge.set(i,s),Lt||(document.body.addEventListener("pointermove",$t),document.body.addEventListener("pointerleave",Kt),document.body.addEventListener("click",Jt),document.body.addEventListener("touchstart",Qt,{passive:!1}),document.body.addEventListener("touchmove",Zt,{passive:!1}),document.body.addEventListener("touchend",ut,{passive:!1}),document.body.addEventListener("touchcancel",ut,{passive:!1}),Lt=!0))})(n.domElement,t),t.dispose=()=>{const i=n.domElement;Ge.delete(i),Ge.size===0&&(document.body.removeEventListener("pointermove",$t),document.body.removeEventListener("pointerleave",Kt),document.body.removeEventListener("click",Jt),document.body.removeEventListener("touchstart",Qt),document.body.removeEventListener("touchmove",Zt),document.body.removeEventListener("touchend",ut),document.body.removeEventListener("touchcancel",ut),Lt=!1)},t}function $t(n){Ne.x=n.clientX,Ne.y=n.clientY,cs()}function cs(){for(const[n,t]of Ge){const i=n.getBoundingClientRect();wt(i)?(bt(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function Jt(n){Ne.x=n.clientX,Ne.y=n.clientY;for(const[t,i]of Ge){const s=t.getBoundingClientRect();bt(i,s),wt(s)&&i.onClick(i)}}function Kt(){for(const n of Ge.values())n.hover&&(n.hover=!1,n.onLeave(n))}function Qt(n){if(n.touches.length>0){Ne.x=n.touches[0].clientX,Ne.y=n.touches[0].clientY;for(const[t,i]of Ge){const s=t.getBoundingClientRect();wt(s)&&(i.touching=!0,bt(i,s),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function Zt(n){if(n.touches.length>0){Ne.x=n.touches[0].clientX,Ne.y=n.touches[0].clientY;for(const[t,i]of Ge){const s=t.getBoundingClientRect();bt(i,s),wt(s)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function ut(){for(const[,n]of Ge)n.touching&&(n.touching=!1,n.hover&&(n.hover=!1,n.onLeave(n)))}function bt(n,t){const{position:i,nPosition:s}=n;i.x=Ne.x-t.left,i.y=Ne.y-t.top,s.x=i.x/t.width*2-1,s.y=-i.y/t.height*2+1}function wt(n){const{x:t,y:i}=Ne,{left:s,top:u,width:h,height:S}=n;return t>=s&&t<=s+h&&i>=u&&i<=u+S}const{randFloat:us,randFloatSpread:Pt}=kt,Et=new se,Re=new se,dt=new se,ds=new se,Ae=new se,ft=new se,Ke=new se,We=new se,mt=new se,ei=new se;class fs{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new se,this.#e(),this.setSizes()}#e(){const{config:t,positionData:i}=this;this.center.toArray(i,0);for(let s=1;s<t.count;s++){const u=3*s;i[u]=Pt(2*t.maxX),i[u+1]=Pt(2*t.maxY),i[u+2]=Pt(2*t.maxZ)}}setSizes(){const{config:t,sizeData:i}=this;i[0]=t.size0;for(let s=1;s<t.count;s++)i[s]=us(t.minSize,t.maxSize)}update(t){const{config:i,center:s,positionData:u,sizeData:h,velocityData:S}=this;let C=0;i.controlSphere0&&(C=1,Et.fromArray(u,0),Et.lerp(s,.1).toArray(u,0),ds.set(0,0,0).toArray(S,0));for(let y=C;y<i.count;y++){const j=3*y;Re.fromArray(u,j),Ae.fromArray(S,j),Ae.y-=t.delta*i.gravity*h[y],Ae.multiplyScalar(i.friction),Ae.clampLength(0,i.maxVelocity),Re.add(Ae),Re.toArray(u,j),Ae.toArray(S,j)}for(let y=C;y<i.count;y++){const j=3*y;Re.fromArray(u,j),Ae.fromArray(S,j);const v=h[y];for(let b=y+1;b<i.count;b++){const R=3*b;dt.fromArray(u,R),ft.fromArray(S,R);const k=h[b];Ke.copy(dt).sub(Re);const I=Ke.length(),E=v+k;if(I<E){const T=E-I;We.copy(Ke).normalize().multiplyScalar(.5*T),mt.copy(We).multiplyScalar(Math.max(Ae.length(),1)),ei.copy(We).multiplyScalar(Math.max(ft.length(),1)),Re.sub(We),Ae.sub(mt),Re.toArray(u,j),Ae.toArray(S,j),dt.add(We),ft.add(ei),dt.toArray(u,R),ft.toArray(S,R)}}if(i.controlSphere0){Ke.copy(Et).sub(Re);const b=Ke.length(),R=v+h[0];if(b<R){const k=R-b;We.copy(Ke.normalize()).multiplyScalar(k),mt.copy(We).multiplyScalar(Math.max(Ae.length(),1)),Re.sub(We),Ae.sub(mt)}}Math.abs(Re.x)+v>i.maxX&&(Re.x=Math.sign(Re.x)*(i.maxX-v),Ae.x=-Ae.x*i.wallBounce),i.gravity===0?Math.abs(Re.y)+v>i.maxY&&(Re.y=Math.sign(Re.y)*(i.maxY-v),Ae.y=-Ae.y*i.wallBounce):Re.y-v<-i.maxY&&(Re.y=-i.maxY+v,Ae.y=-Ae.y*i.wallBounce);const P=Math.max(i.maxZ,i.maxSize);Math.abs(Re.z)+v>P&&(Re.z=Math.sign(Re.z)*(i.maxZ-v),Ae.z=-Ae.z*i.wallBounce),Re.toArray(u,j),Ae.toArray(S,j)}}explode(t,i=2){const{positionData:s,velocityData:u,config:h}=this;for(let S=0;S<h.count;S++){const C=3*S,y=s[C]-t.x,j=s[C+1]-t.y,v=s[C+2]-t.z,P=y*y+j*j+v*v;if(P<60){const b=Math.sqrt(P)+.01,R=i*50/(b+1),k=(Math.random()-.5)*1.5,I=(Math.random()-.5)*1.5,E=(Math.random()-.5)*1.5;u[C]+=(y/b+k)*R,u[C+1]+=(j/b+I)*R,u[C+2]+=(v/b+E)*R}}}}class ms extends bn{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
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
      `);const s=Ie.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",s),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const hs={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0,enableExplosion:!1,rainbow:!1},Qe=new cn;class ps extends hn{constructor(t,i={}){const s={...hs,...i},u=new pn,h=new gn(t,.04).fromScene(u).texture,S=new vn,C=new ms({envMap:h,...s.materialParams});C.envMapRotation.x=-Math.PI/2,super(S,C,s.count),this.config=s,this.physics=new fs(s),this.#e(),this.setColors(s.colors),this.rainbowHue=0}#e(){this.ambientLight=new xn(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new yn(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(s){let u,h;function S(C){u=C,h=[],u.forEach(y=>{h.push(new Fe(y))})}return S(s),{setColors:S,getColorAt:function(C,y=new Fe){const j=Math.max(0,Math.min(1,C))*(u.length-1),v=Math.floor(j),P=h[v];if(v>=u.length-1)return P.clone();const b=j-v,R=h[v+1];return y.r=P.r+b*(R.r-P.r),y.g=P.g+b*(R.g-P.g),y.b=P.b+b*(R.b-P.b),y}}})(t);for(let s=0;s<this.count;s++)this.setColorAt(s,i.getColorAt(s/this.count)),s===0&&this.light.color.copy(i.getColorAt(s/this.count));this.instanceColor.needsUpdate=!0}}update(t){if(this.physics.update(t),this.config.rainbow){this.rainbowHue+=t.delta*.2,this.light.color.setHSL(this.rainbowHue%1,1,.5);for(let i=0;i<this.count;i++){const s=(this.rainbowHue+i*.05)%1,u=new Fe().setHSL(s,.9,.6);this.setColorAt(i,u)}this.instanceColor.needsUpdate=!0}for(let i=0;i<this.count;i++)Qe.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Qe.scale.setScalar(0):Qe.scale.setScalar(this.physics.sizeData[i]),Qe.updateMatrix(),this.setMatrixAt(i,Qe.matrix),i===0&&this.light.position.copy(Qe.position);this.instanceMatrix.needsUpdate=!0}}function gs(n,t={}){const i=new as({canvas:n,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let s;i.renderer.toneMapping=un,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),j(t);const u=new dn,h=new fn(new se(0,0,1),0),S=new se;let C=!1;n.style.touchAction="pan-y",n.style.userSelect="none",n.style.webkitUserSelect="none";const y=ls({domElement:n,onMove(){u.setFromCamera(y.nPosition,i.camera),i.camera.getWorldDirection(h.normal),u.ray.intersectPlane(h,S),s.physics.center.copy(S),s.config.controlSphere0=!0},onClick(){s&&s.config.enableExplosion&&s.physics.explode(s.physics.center)},onLeave(){s.config.controlSphere0=!1}});function j(v){s&&(i.clear(),i.scene.remove(s)),s=new ps(i.renderer,v),i.scene.add(s)}return i.onBeforeRender=v=>{C||s.update(v)},i.onAfterResize=v=>{s.config.maxX=v.wWidth/2,s.config.maxY=v.wHeight/2},{three:i,get spheres(){return s},setCount(v){j({...s.config,count:v})},togglePause(){C=!C},dispose(){y.dispose(),i.dispose()}}}const vs=({className:n="",followCursor:t=!0,count:i=100,gravity:s=.5,friction:u=.9975,wallBounce:h=.95,colors:S=[0,0,0],enableExplosion:C=!1,rainbow:y=!1,...j})=>{const v=l.useRef(null),P=l.useRef(null);return l.useEffect(()=>{const b=v.current;if(b)return P.current=gs(b,{followCursor:t,count:i,gravity:s,friction:u,wallBounce:h,colors:S,enableExplosion:C,rainbow:y,...j}),()=>{P.current&&P.current.dispose()}},[]),l.useEffect(()=>{const b=P.current;if(!b||!b.spheres)return;const R=b.spheres.config;R.gravity=s,R.friction=u,R.wallBounce=h,R.followCursor=t,R.enableExplosion=C,R.rainbow=y,b.spheres.setColors(S)},[s,u,h,t,S,C,y]),l.useEffect(()=>{const b=P.current;b&&b.setCount(i)},[i]),e.jsx("canvas",{className:n,ref:v,style:{width:"100%",height:"100%"}})},xs=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ys=`
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
`,ht=8;function ti(n){let t=n.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,s=255,u=255;return t.length===3?(i=parseInt(t[0]+t[0],16),s=parseInt(t[1]+t[1],16),u=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),s=parseInt(t.slice(2,4),16),u=parseInt(t.slice(4,6),16)),new se(i/255,s/255,u/255)}function bs({linesGradient:n,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:s=[5],topWavePosition:u,middleWavePosition:h,bottomWavePosition:S={x:2,y:-.7,rotate:-1},animationSpeed:C=1,interactive:y=!1,bendRadius:j=5,bendStrength:v=-.5,mouseDamping:P=.05,mixBlendMode:b="screen",amplitude:R=1,rainbow:k=!1}){const I=l.useRef(null),E=l.useRef(null),T=l.useRef(null),N=l.useRef(new Le(-1e3,-1e3)),U=l.useRef(new Le(-1e3,-1e3)),F=l.useRef(0),o=l.useRef(0),D=l.useRef(k),J=l.useRef(y);l.useEffect(()=>{J.current=y},[y]),l.useEffect(()=>{D.current=k},[k]);const X=a=>{if(typeof i=="number")return i;if(!t.includes(a))return 0;const p=t.indexOf(a);return i[p]??6},A=a=>{if(typeof s=="number")return s;if(!t.includes(a))return .1;const p=t.indexOf(a);return s[p]??.1},H=t.includes("top")?X("top"):0,M=t.includes("middle")?X("middle"):0,q=t.includes("bottom")?X("bottom"):0,W=t.includes("top")?A("top")*.01:.01,d=t.includes("middle")?A("middle")*.01:.01,c=t.includes("bottom")?A("bottom")*.01:.01;return l.useEffect(()=>{if(T.current&&n&&n.length>0&&!k){const a=n.slice(0,ht);T.current.uniforms.lineGradientCount.value=a.length,a.forEach((p,m)=>{const w=ti(p);T.current.uniforms.lineGradient.value[m].set(w.x,w.y,w.z)})}},[n,k]),l.useEffect(()=>{if(!T.current)return;const a=T.current.uniforms;a.animationSpeed.value=C,a.amplitude.value=R,a.bendRadius.value=j,a.bendStrength.value=v,a.interactive.value=y,a.enableTop.value=t.includes("top"),a.enableMiddle.value=t.includes("middle"),a.enableBottom.value=t.includes("bottom");const p=w=>{if(typeof i=="number")return i;if(!t.includes(w))return 0;const B=t.indexOf(w);return i[B]??6},m=w=>{if(typeof s=="number")return s;if(!t.includes(w))return .1;const B=t.indexOf(w);return s[B]??.1};a.topLineCount.value=t.includes("top")?p("top"):0,a.middleLineCount.value=t.includes("middle")?p("middle"):0,a.bottomLineCount.value=t.includes("bottom")?p("bottom"):0,a.topLineDistance.value=t.includes("top")?m("top")*.01:.01,a.middleLineDistance.value=t.includes("middle")?m("middle")*.01:.01,a.bottomLineDistance.value=t.includes("bottom")?m("bottom")*.01:.01},[C,R,j,v,y,t,i,s]),l.useEffect(()=>{if(!I.current)return;const a=new at,p=new _t(-1,1,1,-1,0,1);p.position.z=1;const m=new lt({antialias:!0,alpha:!1});m.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),m.domElement.style.width="100%",m.domElement.style.height="100%",I.current.appendChild(m.domElement),E.current=m;const w={iTime:{value:0},iResolution:{value:new se(1,1,1)},animationSpeed:{value:C},amplitude:{value:R},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:H},middleLineCount:{value:M},bottomLineCount:{value:q},topLineDistance:{value:W},middleLineDistance:{value:d},bottomLineDistance:{value:c},topWavePosition:{value:new se(u?.x??10,u?.y??.5,u?.rotate??-.4)},middleWavePosition:{value:new se(h?.x??5,h?.y??0,h?.rotate??.2)},bottomWavePosition:{value:new se(S?.x??2,S?.y??-.7,S?.rotate??.4)},iMouse:{value:new Le(-1e3,-1e3)},interactive:{value:y},bendRadius:{value:j},bendStrength:{value:v},bendInfluence:{value:0},lineGradient:{value:Array.from({length:ht},()=>new se(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const z=n.slice(0,ht);w.lineGradientCount.value=z.length,z.forEach((ne,ve)=>{const ae=ti(ne);w.lineGradient.value[ve].set(ae.x,ae.y,ae.z)})}const B=new Ze({uniforms:w,vertexShader:xs,fragmentShader:ys});T.current=B;const Y=new st(2,2),re=new et(Y,B);a.add(re);const V=new Tt,te=()=>{const z=I.current,ne=z.clientWidth||1,ve=z.clientHeight||1;m.setSize(ne,ve,!1);const ae=m.domElement.width,xe=m.domElement.height;w.iResolution.value.set(ae,xe,1)};te();const ie=typeof ResizeObserver<"u"?new ResizeObserver(te):null;ie&&I.current&&ie.observe(I.current);const O=z=>{if(!J.current)return;const ne=m.domElement.getBoundingClientRect(),ve=z.clientX-ne.left,ae=z.clientY-ne.top,xe=m.getPixelRatio();N.current.set(ve*xe,(ne.height-ae)*xe),F.current=1};window.addEventListener("pointermove",O);let Z=0;const le=()=>{if(w.iTime.value=V.getElapsedTime(),J.current&&(U.current.lerp(N.current,P),w.iMouse.value.copy(U.current),o.current+=(F.current-o.current)*P,w.bendInfluence.value=o.current),D.current){const z=V.getElapsedTime();w.lineGradientCount.value<3&&(w.lineGradientCount.value=3);for(let ne=0;ne<ht;ne++){const ve=(z*.1+ne*.15)%1,ae=new Fe().setHSL(ve,.8,.5);w.lineGradient.value[ne].set(ae.r,ae.g,ae.b)}}m.render(a,p),Z=requestAnimationFrame(le)};return le(),()=>{cancelAnimationFrame(Z),ie&&I.current&&ie.disconnect(),window.removeEventListener("pointermove",O),Y.dispose(),B.dispose(),m.dispose(),m.domElement.parentElement&&m.domElement.parentElement.removeChild(m.domElement)}},[]),e.jsx("div",{ref:I,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:b}})}const ws=({topColor:n="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:s=.3,interactive:u=!1,className:h="",glowAmount:S=.005,pillarWidth:C=3,pillarHeight:y=.4,noiseIntensity:j=.5,mixBlendMode:v="screen",pillarRotation:P=0,quality:b="high"})=>{const R=l.useRef(null),k=l.useRef(null),I=l.useRef(null),E=l.useRef(null),T=l.useRef(null),N=l.useRef(null),U=l.useRef(null),F=l.useRef(new Le(0,0)),o=l.useRef(0),[D,J]=l.useState(!0);return l.useEffect(()=>{const X=document.createElement("canvas");X.getContext("webgl")||X.getContext("experimental-webgl")||J(!1)},[]),l.useEffect(()=>{if(!R.current||!D)return;const X=R.current,A=X.clientWidth,H=X.clientHeight,M=new at;T.current=M;const q=new _t(-1,1,1,-1,0,1);N.current=q;const W=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),d=W||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let c=b;d&&b==="high"&&(c="medium"),W&&b!=="low"&&(c="low");const a={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},p=a[c]||a.medium;let m;try{m=new lt({antialias:!1,alpha:!0,powerPreference:c==="high"?"high-performance":"low-power",precision:p.precision,stencil:!1,depth:!1})}catch{J(!1);return}m.setSize(A,H),m.setPixelRatio(p.pixelRatio),R.current.appendChild(m.domElement),I.current=m;const w=ue=>{const we=new Fe(ue);return new se(we.r,we.g,we.b)},B=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,Y=`
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
    `,re=P*Math.PI/180,V=Math.sin(.4),te=Math.cos(.4),ie=new Ze({vertexShader:B,fragmentShader:Y,uniforms:{uTime:{value:0},uResolution:{value:new Le(A,H)},uMouse:{value:F.current},uTopColor:{value:w(n)},uBottomColor:{value:w(t)},uIntensity:{value:i},uInteractive:{value:u},uGlowAmount:{value:S},uPillarWidth:{value:C},uPillarHeight:{value:y},uNoiseIntensity:{value:j},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(re)},uPillarRotSin:{value:Math.sin(re)},uWaveSin:{value:V},uWaveCos:{value:te}},transparent:!0,depthWrite:!1,depthTest:!1});E.current=ie;const O=new st(2,2);U.current=O;const Z=new et(O,ie);M.add(Z);let le=null;const z=ue=>{if(!u||le)return;le=window.setTimeout(()=>{le=null},16);const we=X.getBoundingClientRect(),L=(ue.clientX-we.left)/we.width*2-1,$=-((ue.clientY-we.top)/we.height)*2+1;F.current.set(L,$)};u&&window.addEventListener("pointermove",z,{passive:!0});let ne=performance.now();const ae=1e3/(c==="low"?30:60),xe=ue=>{if(!E.current||!I.current||!T.current||!N.current)return;const we=ue-ne;if(we>=ae){o.current+=.016*s;const L=o.current;E.current.uniforms.uTime.value=L,E.current.uniforms.uRotCos.value=Math.cos(L*.3),E.current.uniforms.uRotSin.value=Math.sin(L*.3),I.current.render(T.current,N.current),ne=ue-we%ae}k.current=requestAnimationFrame(xe)};k.current=requestAnimationFrame(xe);let ce=null;const pe=()=>{ce&&clearTimeout(ce),ce=window.setTimeout(()=>{if(!I.current||!E.current||!R.current)return;const ue=R.current.clientWidth,we=R.current.clientHeight;I.current.setSize(ue,we),E.current.uniforms.uResolution.value.set(ue,we)},150)};return window.addEventListener("resize",pe,{passive:!0}),()=>{window.removeEventListener("resize",pe),u&&window.removeEventListener("pointermove",z),k.current&&cancelAnimationFrame(k.current),I.current&&(I.current.dispose(),I.current.forceContextLoss(),X.contains(I.current.domElement)&&X.removeChild(I.current.domElement)),E.current&&E.current.dispose(),U.current&&U.current.dispose(),I.current=null,E.current=null,T.current=null,N.current=null,U.current=null,k.current=null}},[n,t,i,s,u,S,C,y,j,P,D,b]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),D?e.jsx("div",{ref:R,className:`light-pillar-container ${h}`,style:{mixBlendMode:v}}):e.jsx("div",{className:`light-pillar-fallback ${h}`,style:{mixBlendMode:v},children:"WebGL not supported"})]})},Ss=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,Cs=`
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
`;function js({color:n="#ffffff",flakeSize:t=.01,minFlakeSize:i=1.25,pixelResolution:s=200,speed:u=1.25,depthFade:h=8,farPlane:S=20,brightness:C=1,gamma:y=.4545,density:j=.3,variant:v="square",direction:P=125,rainbow:b=!1,storm:R=!1,className:k="",style:I={}}){const E=l.useRef(null),T=l.useRef(0),N=l.useRef(!0),U=l.useRef(null),F=l.useRef(null),o=l.useRef(null),D=l.useMemo(()=>v==="round"?1:v==="snowflake"?2:0,[v]),J=l.useMemo(()=>{const A=new Fe(n);return new se(A.r,A.g,A.b)},[n]),X=l.useCallback(()=>{o.current&&clearTimeout(o.current),o.current=window.setTimeout(()=>{const A=E.current,H=U.current,M=F.current;if(!A||!H||!M)return;const q=A.offsetWidth,W=A.offsetHeight;H.setSize(q,W),M.uniforms.uResolution.value.set(q,W)},100)},[]);return l.useEffect(()=>{const A=E.current;if(!A)return;const H=new IntersectionObserver(([M])=>{N.current=M.isIntersecting},{threshold:0});return H.observe(A),()=>H.disconnect()},[]),l.useEffect(()=>{const A=E.current;if(!A)return;const H=new at,M=new _t(-1,1,1,-1,0,1),q=new lt({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});q.setPixelRatio(Math.min(window.devicePixelRatio,2)),q.setSize(A.offsetWidth,A.offsetHeight),q.setClearColor(0,0),A.appendChild(q.domElement),U.current=q;const W=new Ze({vertexShader:Ss,fragmentShader:Cs,uniforms:{uTime:{value:0},uResolution:{value:new Le(A.offsetWidth,A.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:i},uPixelResolution:{value:s},uSpeed:{value:u},uDepthFade:{value:h},uFarPlane:{value:S},uColor:{value:J.clone()},uBrightness:{value:C},uGamma:{value:y},uDensity:{value:j},uVariant:{value:D},uDirection:{value:P*Math.PI/180},uRainbow:{value:b?1:0}},transparent:!0});F.current=W;const d=new st(2,2);H.add(new et(d,W)),window.addEventListener("resize",X);const c=performance.now(),a=()=>{T.current=requestAnimationFrame(a),N.current&&(W.uniforms.uTime.value=(performance.now()-c)*.001,q.render(H,M))};return a(),()=>{cancelAnimationFrame(T.current),window.removeEventListener("resize",X),o.current&&clearTimeout(o.current),A.contains(q.domElement)&&A.removeChild(q.domElement),q.dispose(),d.dispose(),W.dispose(),U.current=null,F.current=null}},[X]),l.useEffect(()=>{const A=F.current;A&&(A.uniforms.uFlakeSize.value=t,A.uniforms.uMinFlakeSize.value=i,A.uniforms.uPixelResolution.value=s,A.uniforms.uSpeed.value=R?u*4:u,A.uniforms.uDepthFade.value=h,A.uniforms.uFarPlane.value=S,A.uniforms.uBrightness.value=C,A.uniforms.uGamma.value=y,A.uniforms.uDensity.value=j,A.uniforms.uVariant.value=D,A.uniforms.uDirection.value=P*Math.PI/180,A.uniforms.uColor.value.copy(J),A.uniforms.uRainbow.value=b?1:0)},[t,i,s,u,h,S,C,y,j,D,P,J,b,R]),e.jsx("div",{ref:E,className:`pixel-snow-container ${k}`,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",contain:"layout style paint",...I}})}const Fi=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],ii={colors:Fi[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},Rs=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],ni={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},oi={colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1},si={color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},ri={density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},ai={color1:"#b117f8",color2:"#2c0b2e",speed:20},li={color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,depthFade:3,farPlane:10,gamma:.4545,variant:"snowflake",rainbow:!1,storm:!1},He={cyberpunk:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},akira:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"mountainDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16715818,15415358,16715818],rightCars:[14342906,12499683,9410532],sticks:14342906}},golden:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"deepDistortion",length:400,roadWidth:18,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16724527,10694672,11015432],rightCars:[16645616,15982240,14859144],sticks:16645616}},split:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"LongRaceDistortion",length:400,roadWidth:10,islandWidth:5,lanesPerRoad:2,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:70,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16736115,15158624,16715818],rightCars:[10806246,8442324,5489350],sticks:10806246}},highway:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14441248,14459680,14426144],rightCars:[3361783,15066861,12568307],sticks:12970219}}},As=({onClose:n,floatingLinesConfig:t,setFloatingLinesConfig:i,lightPillarsConfig:s,setLightPillarsConfig:u,ballpitConfig:h,setBallpitConfig:S,silkConfig:C,setSilkConfig:y,galaxyConfig:j,setGalaxyConfig:v,gradientConfig:P,setGradientConfig:b,pixelSnowConfig:R,setPixelSnowConfig:k,hyperspeedConfig:I,setHyperspeedConfig:E})=>{const{activeBackground:T,floatingLinesConfig:N,setFloatingLinesConfig:U,lightPillarsConfig:F,setLightPillarsConfig:o,ballpitConfig:D,setBallpitConfig:J,silkConfig:X,setSilkConfig:A,galaxyConfig:H,setGalaxyConfig:M,gradientConfig:q,setGradientConfig:W,pixelSnowConfig:d,setPixelSnowConfig:c,hyperspeedConfig:a,setHyperspeedConfig:p}=Ue(),m=t||N,w=i||U,B=s||F,Y=u||o,re=h||D,V=S||J,te=C||X,ie=y||A,O=j||H,Z=v||M,le=P||q,z=b||W,ne=R||d,ve=k||c,ae=I||a,xe=E||p,ce=m||ii,pe=(f,ge)=>{w&&w({...ce,[f]:ge})},ue=f=>{const ge=ce.enabledWaves,Me=ge.includes(f)?ge.filter(jt=>jt!==f):[...ge,f];pe("enabledWaves",Me)},we=(f,ge)=>{const Me=[...ce.colors];Me[f]=ge,pe("colors",Me)},L=B||ni,$=(f,ge)=>{Y?Y({...L,[f]:ge}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},K=re||oi,oe=(f,ge)=>{V&&V({...K,[f]:ge})},Se=(f,ge)=>{const Me=[...K.colors];Me[f]=ge,oe("colors",Me)},he=te||si,ye=(f,ge)=>{ie&&ie({...he,[f]:ge})},de=O||ri,Ce=(f,ge)=>{Z&&Z({...de,[f]:ge})},De=le||ai,qe=(f,ge)=>{z&&z({...De,[f]:ge})},be=ne||li,je=(f,ge)=>{ve&&ve({...be,[f]:ge})},ke=ae||He.cyberpunk,St=f=>{xe&&He[f]&&xe(He[f])},$e=(f,ge)=>{xe&&xe({...ke,[f]:ge})},Ct=()=>{T==="floatinglines"&&w?w(ii):T==="lightpillars"&&Y?Y(ni):T==="ballpit"&&V?V(oi):T==="silk"&&ie?ie(si):T==="galaxy"&&Z?Z(ri):T==="gradient"&&z?z(ai):T==="pixelsnow"&&ve?ve(li):T==="hyperspeed"&&xe&&xe(He.cyberpunk)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsx("style",{children:`
        @media (max-width: 768px) {
          .bg-customizer-panel {
            width: 100% !important;
            max-width: 100% !important;
            height: 60vh !important;
            top: auto !important;
            bottom: 0 !important;
            border-radius: 20px 20px 0 0 !important;
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.2) !important;
            box-shadow: 0 -10px 30px rgba(0,0,0,0.5) !important;
            animation: slideUp 0.3s ease-out forwards;
          }
          @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
        }
      `}),e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:Ct,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(wn,{})}),e.jsx("button",{onClick:n,className:"close-btn",children:e.jsx(xt,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[T==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:Fi.map(f=>e.jsx("button",{className:"preset-btn",onClick:()=>pe("colors",f.colors),style:{background:`linear-gradient(to right, ${f.colors[0]}, ${f.colors[1]}, ${f.colors[2]})`},title:f.name,children:JSON.stringify(ce.colors)===JSON.stringify(f.colors)&&e.jsx(vi,{})},f.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:ce.colors.map((f,ge)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:f,onChange:Me=>we(ge,Me.target.value)}),e.jsx("span",{className:"hex-code",children:f})]},ge))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:ce.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:ce.count,onChange:f=>pe("count",parseInt(f.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:ce.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:ce.distance,onChange:f=>pe("distance",parseInt(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Amplitud de Onda ",e.jsx("span",{children:ce.amplitude})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:ce.amplitude||1,onChange:f=>pe("amplitude",parseFloat(f.target.value))}),e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:ce.bendRadius})]}),e.jsx("input",{type:"range",min:"5",max:"10",step:"0.1",value:ce.bendRadius,onChange:f=>pe("bendRadius",parseFloat(f.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:ce.bendStrength})]}),e.jsx("input",{type:"range",min:"-7",max:"7",step:"0.1",value:ce.bendStrength,onChange:f=>pe("bendStrength",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(f=>e.jsx("button",{className:`toggle-btn ${ce.enabledWaves.includes(f)?"active":""}`,onClick:()=>ue(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${ce.interactive!==!1?"active":""}`,onClick:()=>pe("interactive",ce.interactive===!1),style:{width:"100%",textAlign:"center"},children:ce.interactive!==!1?"Activada (Ratón)":"Desactivada"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${ce.rainbow?"active":""}`,onClick:()=>pe("rainbow",!ce.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"})]})]}),T==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:L.topColor,onChange:f=>$("topColor",f.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:L.bottomColor,onChange:f=>$("bottomColor",f.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:L.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:L.intensity,onChange:f=>$("intensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:L.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:L.rotationSpeed,onChange:f=>$("rotationSpeed",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:L.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:L.pillarWidth,onChange:f=>$("pillarWidth",parseFloat(f.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[L.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:L.pillarRotation,onChange:f=>$("pillarRotation",parseInt(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:L.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:L.pillarHeight,onChange:f=>$("pillarHeight",parseFloat(f.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:L.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:L.noiseIntensity,onChange:f=>$("noiseIntensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:L.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:L.glowAmount,onChange:f=>$("glowAmount",parseFloat(f.target.value))})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"toggles-row",children:Rs.map(f=>e.jsx("button",{className:`toggle-btn ${L.quality===f.value?"active":""}`,onClick:()=>$("quality",f.value),children:f.label},f.value))})}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${L.interactive!==!1?"active":""}`,onClick:()=>$("interactive",L.interactive===!1),style:{width:"100%",textAlign:"center"},children:L.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),T==="ballpit"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsx("div",{className:"color-pickers",children:K.colors.map((f,ge)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:f,onChange:Me=>Se(ge,Me.target.value)}),e.jsx("span",{className:"hex-code",children:f})]},ge))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad ",e.jsx("span",{children:K.count})]}),e.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:K.count,onChange:f=>oe("count",parseInt(f.target.value))}),e.jsxs("label",{children:["Gravedad ",e.jsx("span",{children:K.gravity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:K.gravity,onChange:f=>oe("gravity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Fricción ",e.jsx("span",{children:K.friction})]}),e.jsx("input",{type:"range",min:"0.8",max:"1",step:"0.001",value:K.friction,onChange:f=>oe("friction",parseFloat(f.target.value))}),e.jsxs("label",{children:["Rebote Pared ",e.jsx("span",{children:K.wallBounce})]}),e.jsx("input",{type:"range",min:"0",max:"1.5",step:"0.05",value:K.wallBounce,onChange:f=>oe("wallBounce",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${K.followCursor?"active":""}`,onClick:()=>oe("followCursor",!K.followCursor),style:{width:"100%",textAlign:"center"},children:K.followCursor?"Seguir Cursor":"Cursor Libre"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Eventos Divertidos"}),e.jsxs("div",{className:"toggles-row",children:[e.jsx("button",{className:`toggle-btn ${K.enableExplosion?"active":""}`,onClick:()=>oe("enableExplosion",!K.enableExplosion),title:"Haz clic para explotar las bolas",children:"💥 Explosión al Clic"}),e.jsx("button",{className:`toggle-btn ${K.rainbow?"active":""}`,onClick:()=>oe("rainbow",!K.rainbow),title:"Ciclo de colores automático",children:"🌈 Modo Arcoíris"})]})]})]}),T==="silk"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:he.color,onChange:f=>ye("color",f.target.value)}),e.jsx("span",{className:"hex-code",children:he.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:he.speed})]}),e.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:he.speed,onChange:f=>ye("speed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Escala ",e.jsx("span",{children:he.scale})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:he.scale,onChange:f=>ye("scale",parseFloat(f.target.value))}),e.jsxs("label",{children:["Ruido ",e.jsx("span",{children:he.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:he.noiseIntensity,onChange:f=>ye("noiseIntensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[he.rotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:he.rotation,onChange:f=>ye("rotation",parseInt(f.target.value))})]})]}),T==="galaxy"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:de.density})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:de.density,onChange:f=>Ce("density",parseFloat(f.target.value))}),e.jsxs("label",{children:["Intensidad Brillo ",e.jsx("span",{children:de.glowIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:de.glowIntensity,onChange:f=>Ce("glowIntensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Saturación ",e.jsx("span",{children:de.saturation})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:de.saturation,onChange:f=>Ce("saturation",parseFloat(f.target.value))}),e.jsxs("label",{children:["Cambio de Tono (Hue) ",e.jsx("span",{children:de.hueShift})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:de.hueShift,onChange:f=>Ce("hueShift",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad Rotación ",e.jsx("span",{children:de.rotationSpeed})]}),e.jsx("input",{type:"range",min:"-0.5",max:"0.5",step:"0.01",value:de.rotationSpeed,onChange:f=>Ce("rotationSpeed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Velocidad Estrellas ",e.jsx("span",{children:de.starSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:de.starSpeed,onChange:f=>Ce("starSpeed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Velocidad Animación ",e.jsx("span",{children:de.speed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:de.speed,onChange:f=>Ce("speed",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${de.rainbow?"active":""}`,onClick:()=>Ce("rainbow",!de.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${de.warp?"active":""}`,onClick:()=>Ce("warp",!de.warp),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🚀 Velocidad Warp"})]})]}),T==="gradient"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:De.color1,onChange:f=>qe("color1",f.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:De.color2,onChange:f=>qe("color2",f.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad (segundos) ",e.jsxs("span",{children:[De.speed,"s"]})]}),e.jsx("input",{type:"range",min:"1",max:"60",step:"1",value:De.speed,onChange:f=>qe("speed",parseInt(f.target.value))})]})]}),T==="pixelsnow"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:be.color,onChange:f=>je("color",f.target.value)}),e.jsx("span",{className:"hex-code",children:be.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Variante"}),e.jsx("div",{className:"toggles-row",children:["snowflake","square","round"].map(f=>e.jsx("button",{className:`toggle-btn ${be.variant===f?"active":""}`,onClick:()=>je("variant",f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:be.speed})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:be.speed,onChange:f=>je("speed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:be.density})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:be.density,onChange:f=>je("density",parseFloat(f.target.value))}),e.jsxs("label",{children:["Dirección ",e.jsxs("span",{children:[be.direction,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:be.direction,onChange:f=>je("direction",parseInt(f.target.value))}),e.jsxs("label",{children:["Tamaño Copo ",e.jsx("span",{children:be.flakeSize})]}),e.jsx("input",{type:"range",min:"0.005",max:"0.05",step:"0.001",value:be.flakeSize,onChange:f=>je("flakeSize",parseFloat(f.target.value))}),e.jsxs("label",{children:["Brillo ",e.jsx("span",{children:be.brightness})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:be.brightness,onChange:f=>je("brightness",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${be.rainbow?"active":""}`,onClick:()=>je("rainbow",!be.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${be.storm?"active":""}`,onClick:()=>je("storm",!be.storm),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🌪️ Modo Tormenta"})]})]}),T==="hyperspeed"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Estilo Visual"}),e.jsx("div",{className:"toggles-row",style:{flexWrap:"wrap"},children:Object.keys(He).map(f=>e.jsx("button",{className:`toggle-btn ${JSON.stringify(ke.colors)===JSON.stringify(He[f].colors)?"active":""}`,onClick:()=>St(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Geometría"}),e.jsxs("label",{children:["Ancho Carretera ",e.jsx("span",{children:ke.roadWidth})]}),e.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:ke.roadWidth,onChange:f=>$e("roadWidth",parseFloat(f.target.value))}),e.jsxs("label",{children:["Ancho Isla ",e.jsx("span",{children:ke.islandWidth})]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:ke.islandWidth,onChange:f=>$e("islandWidth",parseFloat(f.target.value))}),e.jsxs("label",{children:["Carriles ",e.jsx("span",{children:ke.lanesPerRoad})]}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:ke.lanesPerRoad,onChange:f=>$e("lanesPerRoad",parseInt(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Distorsión"}),e.jsxs("select",{value:ke.distortion,onChange:f=>$e("distortion",f.target.value),style:{width:"100%",padding:"8px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",color:"white",border:"1px solid rgba(255, 255, 255, 0.2)",marginTop:"5px",cursor:"pointer"},children:[e.jsx("option",{style:{color:"black"},value:"turbulentDistortion",children:"Turbulent"}),e.jsx("option",{style:{color:"black"},value:"deepDistortion",children:"Deep"}),e.jsx("option",{style:{color:"black"},value:"mountainDistortion",children:"Mountain"}),e.jsx("option",{style:{color:"black"},value:"xyDistortion",children:"XY"}),e.jsx("option",{style:{color:"black"},value:"LongRaceDistortion",children:"Long Race"})]})]})]})]})]})},Ls=({effectOptions:n=He.cyberpunk})=>{const t=l.useRef(null),i=l.useRef(null);return l.useEffect(()=>{if(i.current){i.current.dispose();const d=document.getElementById("lights");if(d)for(;d.firstChild;)d.removeChild(d.firstChild)}const s={uFreq:{value:new se(3,6,10)},uAmp:{value:new se(30,30,20)}},u={uFreq:{value:new Le(5,2)},uAmp:{value:new Le(25,15)}},h={uFreq:{value:new Le(2,3)},uAmp:{value:new Le(35,10)}},S={uFreq:{value:new Gt(4,8,8,1)},uAmp:{value:new Gt(25,5,10,10)}},C={uFreq:{value:new Le(4,8)},uAmp:{value:new Le(10,20)},uPowY:{value:new Le(20,2)}};let y=d=>Math.sin(d)*.5+.5;const j={mountainDistortion:{uniforms:s,getDistortion:`
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
        `,getJS:(d,c)=>{let a=.02,p=s.uFreq.value,m=s.uAmp.value,w=new se(Math.cos(d*Math.PI*p.x+c)*m.x-Math.cos(a*Math.PI*p.x+c)*m.x,y(d*Math.PI*p.y+c)*m.y-y(a*Math.PI*p.y+c)*m.y,y(d*Math.PI*p.z+c)*m.z-y(a*Math.PI*p.z+c)*m.z),B=new se(2,2,2),Y=new se(0,0,-5);return w.multiply(B).add(Y)}},xyDistortion:{uniforms:u,getDistortion:`
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
        `,getJS:(d,c)=>{let a=.02,p=u.uFreq.value,m=u.uAmp.value,w=new se(Math.cos(d*Math.PI*p.x+c)*m.x-Math.cos(a*Math.PI*p.x+c)*m.x,Math.sin(d*Math.PI*p.y+c+Math.PI/2)*m.y-Math.sin(a*Math.PI*p.y+c+Math.PI/2)*m.y,0),B=new se(2,.4,1),Y=new se(0,0,-3);return w.multiply(B).add(Y)}},LongRaceDistortion:{uniforms:h,getDistortion:`
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
        `,getJS:(d,c)=>{let a=.0125,p=h.uFreq.value,m=h.uAmp.value,w=new se(Math.sin(d*Math.PI*p.x+c)*m.x-Math.sin(a*Math.PI*p.x+c)*m.x,Math.sin(d*Math.PI*p.y+c)*m.y-Math.sin(a*Math.PI*p.y+c)*m.y,0),B=new se(1,1,0),Y=new se(0,0,-5);return w.multiply(B).add(Y)}},turbulentDistortion:{uniforms:S,getDistortion:`
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
        `,getJS:(d,c)=>{const a=S.uFreq.value,p=S.uAmp.value,m=V=>Math.cos(Math.PI*V*a.x+c)*p.x+Math.pow(Math.cos(Math.PI*V*a.y+c*(a.y/a.x)),2)*p.y,w=V=>-y(Math.PI*V*a.z+c)*p.z-Math.pow(y(Math.PI*V*a.w+c/(a.z/a.w)),5)*p.w;let B=new se(m(d)-m(d+.007),w(d)-w(d+.007),0),Y=new se(-2,-5,0),re=new se(0,0,-10);return B.multiply(Y).add(re)}},turbulentDistortionStill:{uniforms:S,getDistortion:`
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
        `},deepDistortionStill:{uniforms:C,getDistortion:`
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
        `},deepDistortion:{uniforms:C,getDistortion:`
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
        `,getJS:(d,c)=>{const a=C.uFreq.value,p=C.uAmp.value,m=C.uPowY.value,w=te=>Math.sin(te*Math.PI*a.x+c)*p.x,B=te=>Math.pow(te*m.x,m.y)+Math.sin(te*Math.PI*a.y+c)*p.y;let Y=new se(w(d)-w(d+.01),B(d)-B(d+.01),0),re=new se(-2,-4,0),V=new se(0,0,-10);return Y.multiply(re).add(V)}}};class v{constructor(c,a={}){this.options=a,this.options.distortion==null&&(this.options.distortion={uniforms:P,getDistortion:b}),this.container=c,this.renderer=new lt({antialias:!1,alpha:!0}),this.renderer.setSize(c.offsetWidth,c.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new Sn(this.renderer),c.append(this.renderer.domElement),this.camera=new xi(a.fov,c.offsetWidth/c.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new at,this.scene.background=null;let p=new Cn(a.colors.background,a.length*.2,a.length*500);this.scene.fog=p,this.fogUniforms={fogColor:{value:p.color},fogNear:{value:p.near},fogFar:{value:p.far}},this.clock=new Tt,this.assets={},this.disposed=!1,this.road=new D(this,a),this.leftCarLights=new E(this,a,a.colors.leftCars,a.movingAwaySpeed,new Le(0,1-a.carLightsFade)),this.rightCarLights=new E(this,a,a.colors.rightCars,a.movingCloserSpeed,new Le(1,0+a.carLightsFade)),this.leftSticks=new U(this,a),this.fovTarget=a.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const c=this.container.offsetWidth,a=this.container.offsetHeight;this.renderer.setSize(c,a),this.camera.aspect=c/a,this.camera.updateProjectionMatrix(),this.composer.setSize(c,a)}initPasses(){this.renderPass=new jn(this.scene,this.camera),this.bloomPass=new qt(this.camera,new Rn({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const c=new qt(this.camera,new nt({preset:An.MEDIUM,searchImage:nt.searchImageDataURL,areaImage:nt.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,c.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(c)}loadAssets(){const c=this.assets;return new Promise(a=>{const p=new Ln(a),m=new Image,w=new Image;c.smaa={},m.addEventListener("load",function(){c.smaa.search=this,p.itemEnd("smaa-search")}),w.addEventListener("load",function(){c.smaa.area=this,p.itemEnd("smaa-area")}),p.itemStart("smaa-search"),p.itemStart("smaa-area"),m.src=nt.searchImageDataURL,w.src=nt.areaImageDataURL})}init(){this.initPasses();const c=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-c.roadWidth/2-c.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(c.roadWidth/2+c.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(c.roadWidth+c.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(c){this.options.onSpeedUp&&this.options.onSpeedUp(c),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(c){this.options.onSlowDown&&this.options.onSlowDown(c),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(c){this.options.onSpeedUp&&this.options.onSpeedUp(c),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(c){this.options.onSlowDown&&this.options.onSlowDown(c),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(c){c.preventDefault()}update(c){let a=Math.exp(-(-60*Math.log2(.9))*c);this.speedUp+=I(this.speedUp,this.speedUpTarget,a,1e-5),this.timeOffset+=this.speedUp*c;let p=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(p),this.leftCarLights.update(p),this.leftSticks.update(p),this.road.update(p);let m=!1,w=I(this.camera.fov,this.fovTarget,a);if(w!==0&&(this.camera.fov+=w*c*6,m=!0),this.options.distortion.getJS){const B=this.options.distortion.getJS(.025,p);this.camera.lookAt(new se(this.camera.position.x+B.x,this.camera.position.y+B.y,this.camera.position.z+B.z)),m=!0}m&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(c){this.composer.render(c)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(c,a,p){this.composer.setSize(c,a,p)}tick(){if(this.disposed||!this)return;if(W(this.renderer,this.setSize)){const a=this.renderer.domElement;this.camera.aspect=a.clientWidth/a.clientHeight,this.camera.updateProjectionMatrix()}const c=this.clock.getDelta();this.render(c),this.update(c),requestAnimationFrame(this.tick)}}const P={uDistortionX:{value:new Le(80,3)},uDistortionY:{value:new Le(-40,2.5)}},b=`
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
    `,R=d=>Array.isArray(d)?Math.random()*(d[1]-d[0])+d[0]:Math.random()*d,k=d=>Array.isArray(d)?d[Math.floor(Math.random()*d.length)]:d;function I(d,c,a=.1,p=.001){let m=(c-d)*a;return Math.abs(m)<p&&(m=c-d),m}class E{constructor(c,a,p,m,w){this.webgl=c,this.options=a,this.colors=p,this.speed=m,this.fade=w}init(){const c=this.options;let a=new Pn(new se(0,0,0),new se(0,0,-1)),p=new En(a,40,1,8,!1),m=new Yt().copy(p);m.instanceCount=c.lightPairsPerRoadWay*2;let w=c.roadWidth/c.lanesPerRoad,B=[],Y=[],re=[],V=this.colors;Array.isArray(V)?V=V.map(O=>new Fe(O)):V=new Fe(V);for(let O=0;O<c.lightPairsPerRoadWay;O++){let Z=R(c.carLightsRadius),le=R(c.carLightsLength),z=R(this.speed),ve=O%c.lanesPerRoad*w-c.roadWidth/2+w/2,ae=R(c.carWidthPercentage)*w,xe=R(c.carShiftX)*w;ve+=xe;let ce=R(c.carFloorSeparation)+Z*1.3,pe=-R(c.length);B.push(ve-ae/2),B.push(ce),B.push(pe),B.push(ve+ae/2),B.push(ce),B.push(pe),Y.push(Z),Y.push(le),Y.push(z),Y.push(Z),Y.push(le),Y.push(z);let ue=k(V);re.push(ue.r),re.push(ue.g),re.push(ue.b),re.push(ue.r),re.push(ue.g),re.push(ue.b)}m.setAttribute("aOffset",new Je(new Float32Array(B),3,!1)),m.setAttribute("aMetrics",new Je(new Float32Array(Y),3,!1)),m.setAttribute("aColor",new Je(new Float32Array(re),3,!1));let te=new Ze({fragmentShader:T,vertexShader:N,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:c.length},uFade:{value:this.fade}},this.webgl.fogUniforms,c.distortion.uniforms)});te.onBeforeCompile=O=>{O.vertexShader=O.vertexShader.replace("#include <getDistortion_vertex>",c.distortion.getDistortion)};let ie=new et(m,te);ie.frustumCulled=!1,this.webgl.scene.add(ie),this.mesh=ie}update(c){this.mesh.material.uniforms.uTime.value=c}}const T=`
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
    `;class U{constructor(c,a){this.webgl=c,this.options=a}init(){const c=this.options,a=new st(1,1);let p=new Yt().copy(a),m=c.totalSideLightSticks;p.instanceCount=m;let w=c.length/(m-1);const B=[],Y=[],re=[];let V=c.colors.sticks;Array.isArray(V)?V=V.map(O=>new Fe(O)):V=new Fe(V);for(let O=0;O<m;O++){let Z=R(c.lightStickWidth),le=R(c.lightStickHeight);B.push((O-1)*w*2+w*Math.random());let z=k(V);Y.push(z.r),Y.push(z.g),Y.push(z.b),re.push(Z),re.push(le)}p.setAttribute("aOffset",new Je(new Float32Array(B),1,!1)),p.setAttribute("aColor",new Je(new Float32Array(Y),3,!1)),p.setAttribute("aMetrics",new Je(new Float32Array(re),2,!1));const te=new Ze({fragmentShader:o,vertexShader:F,side:Wt,uniforms:Object.assign({uTravelLength:{value:c.length},uTime:{value:0}},this.webgl.fogUniforms,c.distortion.uniforms)});te.onBeforeCompile=O=>{O.vertexShader=O.vertexShader.replace("#include <getDistortion_vertex>",c.distortion.getDistortion)};const ie=new et(p,te);ie.frustumCulled=!1,this.webgl.scene.add(ie),this.mesh=ie}update(c){this.mesh.material.uniforms.uTime.value=c}}const F=`
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
    `,o=`
      #define USE_FOG;
      ${Ie.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${Ie.fog_fragment}
      }
    `;class D{constructor(c,a){this.webgl=c,this.options=a,this.uTime={value:0}}createPlane(c,a,p){const m=this.options;let w=100;const B=new st(p?m.roadWidth:m.islandWidth,m.length,20,w);let Y={uTravelLength:{value:m.length},uColor:{value:new Fe(p?m.colors.roadColor:m.colors.islandColor)},uTime:this.uTime};p&&(Y=Object.assign(Y,{uLanes:{value:m.lanesPerRoad},uBrokenLinesColor:{value:new Fe(m.colors.brokenLines)},uShoulderLinesColor:{value:new Fe(m.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:m.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:m.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:m.brokenLinesWidthPercentage}}));const re=new Ze({fragmentShader:p?M:X,vertexShader:q,side:Wt,uniforms:Object.assign(Y,this.webgl.fogUniforms,m.distortion.uniforms)});re.onBeforeCompile=te=>{te.vertexShader=te.vertexShader.replace("#include <getDistortion_vertex>",m.distortion.getDistortion)};const V=new et(B,re);return V.rotation.x=-Math.PI/2,V.position.z=-m.length/2,V.position.x+=(this.options.islandWidth/2+m.roadWidth/2)*c,this.webgl.scene.add(V),V}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(c){this.uTime.value=c}}const J=`
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
    `,X=J.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),M=J.replace("#include <roadMarkings_fragment>",`
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
    `),q=`
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
    `;function W(d,c){const a=d.domElement,p=a.clientWidth,m=a.clientHeight,w=a.width!==p||a.height!==m;return w&&c(p,m,!1),w}return(function(){const d=document.getElementById("lights"),c={...n};c.distortion=j[c.distortion];const a=new v(d,c);i.current=a,a.loadAssets().then(a.init)})(),()=>{i.current&&i.current.dispose()}},[n]),e.jsx("div",{id:"lights",ref:t})},Ps=({floatingLinesConfig:n,lightPillarsConfig:t,ballpitConfig:i,silkConfig:s,galaxyConfig:u,gradientConfig:h,pixelSnowConfig:S,hyperspeedConfig:C})=>{const{activeBackground:y,floatingLinesConfig:j,lightPillarsConfig:v,ballpitConfig:P,silkConfig:b,galaxyConfig:R,gradientConfig:k,pixelSnowConfig:I,hyperspeedConfig:E}=Ue(),T=n||j,N=t||v,U=i||P,F=s||b,o=u||R,D=h||k,J=S||I,X=C||E,A=T||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},H=N||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},M=U||{colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1,rainbow:!1},q=F||{color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},W=o||{density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},d=D||{color1:"#b117f8",color2:"#2c0b2e",speed:20},c=J||{color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,variant:"snowflake",rainbow:!1,storm:!1};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(Te,{mode:"wait",children:[y==="gradient"&&e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(is,{color1:d.color1,color2:d.color2,speed:d.speed})},"gradient"),y==="galaxy"&&e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(rs,{density:W.density,glowIntensity:W.glowIntensity,saturation:W.saturation,hueShift:W.hueShift,twinkleIntensity:W.twinkleIntensity,rotationSpeed:W.rotationSpeed,starSpeed:W.starSpeed,speed:W.speed,rainbow:W.rainbow,warp:W.warp})},"galaxy"),y==="silk"&&e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(Si,{speed:q.speed,scale:q.scale,color:q.color,noiseIntensity:q.noiseIntensity,rotation:q.rotation})},"silk"),y==="ballpit"&&e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:e.jsx(vs,{count:M.count,gravity:M.gravity,friction:M.friction,wallBounce:M.wallBounce,followCursor:M.followCursor,colors:M.colors,enableExplosion:M.enableExplosion,rainbow:M.rainbow})},"ballpit"),y==="floatinglines"&&e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(bs,{linesGradient:A.colors,lineCount:A.count,lineDistance:A.distance,animationSpeed:.5,bendRadius:A.bendRadius,bendStrength:A.bendStrength,enabledWaves:A.enabledWaves,interactive:A.interactive??!1,parallax:A.parallax??!1,amplitude:A.amplitude??1,rainbow:A.rainbow})},"floatinglines"),y==="lightpillars"&&e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(ws,{topColor:H.topColor,bottomColor:H.bottomColor,intensity:H.intensity,rotationSpeed:H.rotationSpeed,glowAmount:H.glowAmount??.002,pillarWidth:H.pillarWidth,pillarHeight:H.pillarHeight,noiseIntensity:H.noiseIntensity,pillarRotation:H.pillarRotation,interactive:H.interactive??!0,quality:H.quality??"high"})},"lightpillars"),y==="pixelsnow"&&e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(js,{color:c.color,flakeSize:c.flakeSize,minFlakeSize:c.minFlakeSize,pixelResolution:c.pixelResolution,speed:c.speed,density:c.density,direction:c.direction,brightness:c.brightness,variant:c.variant,rainbow:c.rainbow,storm:c.storm})},"pixelsnow"),y==="hyperspeed"&&e.jsx(ee.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Ls,{effectOptions:X})},"hyperspeed")]})})},Es=({onItemClick:n,isOpen:t,onToggle:i,position:s="left",colors:u=["#B19EEF","#5227FF"],items:h=[],socialItems:S=[],displaySocials:C=!0,displayItemNumbering:y=!0,className:j,logoUrl:v=null,menuButtonColor:P="#fff",openMenuButtonColor:b="#000",accentColor:R="#5227FF",changeMenuColorOnOpen:k=!0,isFixed:I=!1,closeOnClickAway:E=!0,onMenuOpen:T,onMenuClose:N})=>{const[U,F]=l.useState(!1),o=typeof t=="boolean",D=o?t:U,J=l.useRef(!1),X=l.useRef(null),A=l.useRef(null),H=l.useRef([]),M=l.useRef(null),q=l.useRef(null),W=l.useRef(null),d=l.useRef(null),c=l.useRef(null),[a,p]=l.useState(["Menu","Close"]),m=l.useRef(null),w=l.useRef(null),B=l.useRef(null),Y=l.useRef(null),re=l.useRef(null),V=l.useRef(null),te=l.useRef(!1),ie=l.useRef(null),O=l.useRef(null),Z=l.useRef(null);l.useLayoutEffect(()=>{const L=G.context(()=>{const $=X.current,K=A.current,oe=M.current,Se=q.current,he=W.current,ye=d.current;if(!$||!oe||!Se||!he||!ye)return;let de=[];K&&(de=Array.from(K.querySelectorAll(".sm-prelayer"))),H.current=de;const Ce=s==="left"?-100:100;G.set([$,...de],{xPercent:Ce}),G.set(oe,{transformOrigin:"50% 50%",rotate:0}),G.set(Se,{transformOrigin:"50% 50%",rotate:90}),G.set(he,{rotate:0,transformOrigin:"50% 50%"}),G.set(ye,{yPercent:0}),V.current&&G.set(V.current,{color:P})});return()=>L.revert()},[P,s]);const le=l.useCallback(()=>{const L=X.current,$=H.current;if(!L)return null;m.current?.kill(),w.current&&(w.current.kill(),w.current=null),ie.current?.kill();const K=Array.from(L.querySelectorAll(".sm-panel-itemLabel")),oe=Array.from(L.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),Se=L.querySelector(".sm-socials-title"),he=Array.from(L.querySelectorAll(".sm-socials-link")),ye=$.map(je=>({el:je,start:Number(G.getProperty(je,"xPercent"))})),de=Number(G.getProperty(L,"xPercent"));K.length&&G.set(K,{yPercent:140,rotate:10}),oe.length&&G.set(oe,{"--sm-num-opacity":0}),Se&&G.set(Se,{opacity:0}),he.length&&G.set(he,{y:25,opacity:0});const Ce=G.timeline({paused:!0});ye.forEach((je,ke)=>{Ce.fromTo(je.el,{xPercent:je.start},{xPercent:0,duration:.8,ease:"power4.out"},ke*.07)});const qe=(ye.length?(ye.length-1)*.07:0)+(ye.length?.08:0),be=1;if(Ce.fromTo(L,{xPercent:de},{xPercent:0,duration:be,ease:"power4.out"},qe),K.length){const ke=qe+be*.15;Ce.to(K,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},ke),oe.length&&Ce.to(oe,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},ke+.1)}if(Se||he.length){const je=qe+be*.4;Se&&Ce.to(Se,{opacity:1,duration:.5,ease:"power2.out"},je),he.length&&Ce.to(he,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{G.set(he,{clearProps:"opacity"})}},je+.04)}return m.current=Ce,Ce},[]),z=l.useCallback(()=>{if(te.current)return;te.current=!0;const L=le();L?(L.eventCallback("onComplete",()=>{te.current=!1}),L.play(0)):te.current=!1},[le]),ne=l.useCallback(()=>{m.current?.kill(),m.current=null,ie.current?.kill();const L=X.current,$=H.current;if(!L)return;const K=[...$,L];w.current?.kill();const oe=s==="left"?-100:100;w.current=G.to(K,{xPercent:oe,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const Se=Array.from(L.querySelectorAll(".sm-panel-itemLabel"));Se.length&&G.set(Se,{yPercent:140,rotate:10});const he=Array.from(L.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));he.length&&G.set(he,{"--sm-num-opacity":0});const ye=L.querySelector(".sm-socials-title"),de=Array.from(L.querySelectorAll(".sm-socials-link"));ye&&G.set(ye,{opacity:0}),de.length&&G.set(de,{y:25,opacity:0}),te.current=!1}})},[s]),ve=l.useCallback(L=>{const $=W.current;$&&(B.current?.kill(),L?B.current=G.to($,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):B.current=G.to($,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),ae=l.useCallback(L=>{const $=V.current;if($)if(re.current?.kill(),k){const K=L?b:P;re.current=G.to($,{color:K,delay:.18,duration:.3,ease:"power2.out"})}else G.set($,{color:P})},[b,P,k]);gt.useEffect(()=>{if(V.current)if(k){const L=J.current?b:P;G.set(V.current,{color:L})}else G.set(V.current,{color:P})},[k,P,b]);const xe=l.useCallback(L=>{const $=d.current;if(!$)return;Y.current?.kill();const K=L?"Menu":"Close",oe=L?"Close":"Menu",Se=3,he=[K];let ye=K;for(let De=0;De<Se;De++)ye=ye==="Menu"?"Close":"Menu",he.push(ye);ye!==oe&&he.push(oe),he.push(oe),p(he),G.set($,{yPercent:0});const de=he.length,Ce=(de-1)/de*100;Y.current=G.to($,{yPercent:-Ce,duration:.5+de*.07,ease:"power4.out"})},[]),ce=l.useCallback(()=>{if(o)i&&i(!D);else{const L=!J.current;J.current=L,F(L),L?(T?.(),z()):(N?.(),ne()),ve(L),ae(L),xe(L)}},[o,t,i,D,z,ne,ve,ae,xe,T,N]);gt.useEffect(()=>{o&&(J.current=t,t?(T?.(),z()):(N?.(),ne()),ve(t),ae(t),xe(t))},[t,o,z,ne,ve,ae,xe,T,N]);const pe=l.useCallback(()=>{o?D&&i&&i(!1):J.current&&(J.current=!1,F(!1),N?.(),ne(),ve(!1),ae(!1),xe(!1))},[o,D,i,ne,ve,ae,xe,N]),ue=L=>{O.current=L.touches[0].clientX,Z.current=L.touches[0].clientY},we=L=>{if(O.current===null||Z.current===null)return;const $=L.changedTouches[0].clientX,K=L.changedTouches[0].clientY,oe=O.current-$,Se=Z.current-K;Math.abs(oe)>Math.abs(Se)&&Math.abs(oe)>50&&(s==="left"&&oe>0&&pe(),s==="right"&&oe<0&&pe()),O.current=null,Z.current=null};return e.jsxs("div",{className:(j?j+" ":"")+"staggered-menu-wrapper"+(I?" fixed-wrapper":""),style:R?{"--sm-accent":R}:void 0,"data-position":s,"data-open":D||void 0,children:[D&&E&&e.jsx("div",{className:"sm-backdrop",onClick:()=>pe(),style:{position:"absolute",inset:0,zIndex:5,pointerEvents:"auto"},"aria-hidden":"true"}),e.jsx("div",{ref:A,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let $=[...u&&u.length?u.slice(0,4):["#1e1e22","#35353c"]];if($.length>=3){const K=Math.floor($.length/2);$.splice(K,1)}return $.map((K,oe)=>e.jsx("div",{className:"sm-prelayer",style:{background:K}},oe))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:v?e.jsx("img",{src:v,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:V,className:"sm-toggle","aria-label":D?"Close menu":"Open menu","aria-expanded":D,"aria-controls":"staggered-menu-panel",onClick:ce,type:"button",children:[e.jsx("span",{ref:c,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:d,className:"sm-toggle-textInner",children:a.map((L,$)=>e.jsx("span",{className:"sm-toggle-line",children:L},$))})}),e.jsxs("span",{ref:W,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:M,className:"sm-icon-line"}),e.jsx("span",{ref:q,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:X,className:"staggered-menu-panel","aria-hidden":!D,onTouchStart:ue,onTouchEnd:we,children:e.jsx("div",{className:"sm-panel-inner",children:e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":y||void 0,children:h&&h.length?h.map((L,$)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:K=>{K.preventDefault(),n&&n(L.id)},"aria-label":L.ariaLabel,"data-index":$+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:L.label})})},L.label+$)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})})})})]})};function ks({children:n,className:t="",onClick:i,mouseX:s,spring:u,distance:h,magnification:S,baseItemSize:C}){const y=l.useRef(null),j=Ve(0),v=tt(s,R=>{if(!y.current)return 1/0;const k=y.current.getBoundingClientRect(),I=k.x+k.width/2;return Math.abs(R-I)}),P=tt(v,[0,h],[S,C]),b=it(P,u);return e.jsx(ee.div,{ref:y,style:{width:b,height:b,minWidth:b,minHeight:b},onHoverStart:()=>j.set(1),onHoverEnd:()=>j.set(0),onClick:i,className:`dock-item ${t}`,"aria-haspopup":"true",children:l.Children.map(n,R=>l.cloneElement(R,{isHovered:j}))})}function Ts({children:n,className:t="",...i}){const{isHovered:s}=i,[u,h]=l.useState(!1);return l.useEffect(()=>{const S=s.on("change",C=>{h(C===1)});return()=>S()},[s]),e.jsx(Te,{children:u&&e.jsx(ee.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:n})})}function _s({children:n,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:n})}function Fs({items:n,className:t="",spring:i={mass:.1,stiffness:300,damping:20},magnification:s=70,distance:u=200,panelHeight:h=68,dockHeight:S=256,baseItemSize:C=50}){const y=Ve(1/0),j=Ve(0),v=l.useMemo(()=>Math.max(S,s+s/2+4),[s,S]),P=tt(j,[0,1],[h,v]),b=it(P,i);return e.jsx(ee.div,{style:{height:b,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(ee.div,{onMouseMove:({pageX:R})=>{j.set(1),y.set(R)},onMouseLeave:()=>{j.set(0),y.set(1/0)},className:`dock-panel ${t}`,style:{height:h},role:"toolbar","aria-label":"Application dock",children:n.map((R,k)=>e.jsxs(ks,{onClick:R.onClick,className:R.className,mouseX:y,spring:i,distance:u,magnification:s,baseItemSize:C,children:[e.jsx(_s,{children:R.icon}),e.jsx(Ts,{children:R.label})]},k))})})}const Ms=()=>{const{activeTrail:n}=Ue(),t=Ve(-100),i=Ve(-100),s={damping:25,stiffness:70,mass:1},u=it(t,s),h=it(i,s);l.useEffect(()=>{const C=y=>{t.set(y.clientX),i.set(y.clientY)};return window.addEventListener("mousemove",C),()=>window.removeEventListener("mousemove",C)},[t,i]);const S={"apple-cat":Li,"jump-cat":Pi,"rolling-cat":Ei,duck:ki,pompom:Ti,"skeleton-run":_i,ghost:null};return!n||n==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:S[n]?e.jsx(ee.img,{src:S[n],alt:"trail",style:{x:u,y:h,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):n==="ghost"?e.jsx(ee.div,{style:{x:u,y:h,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},ci=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],Is=({progress:n})=>{const[t,i]=l.useState(0);return l.useEffect(()=>{const s=setInterval(()=>{i(u=>(u+1)%ci.length)},1500);return()=>clearInterval(s)},[]),e.jsxs(ee.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[n,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(ee.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${n}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(ee.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:ci[t]},t)})]})]})},Ds=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,zs=Object.freeze(Object.defineProperty({__proto__:null,default:Ds},Symbol.toStringTag,{value:"Module"})),Ns=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,Us=Object.freeze(Object.defineProperty({__proto__:null,default:Ns},Symbol.toStringTag,{value:"Module"})),Os=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,Bs=Object.freeze(Object.defineProperty({__proto__:null,default:Os},Symbol.toStringTag,{value:"Module"})),Gs=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,qs=Object.freeze(Object.defineProperty({__proto__:null,default:Gs},Symbol.toStringTag,{value:"Module"})),Ws=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,Ys=Object.freeze(Object.defineProperty({__proto__:null,default:Ws},Symbol.toStringTag,{value:"Module"})),Xs=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,Hs=Object.freeze(Object.defineProperty({__proto__:null,default:Xs},Symbol.toStringTag,{value:"Module"})),Vs=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,$s=Object.freeze(Object.defineProperty({__proto__:null,default:Vs},Symbol.toStringTag,{value:"Module"})),Js=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,Ks=Object.freeze(Object.defineProperty({__proto__:null,default:Js},Symbol.toStringTag,{value:"Module"})),Qs=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,Zs=Object.freeze(Object.defineProperty({__proto__:null,default:Qs},Symbol.toStringTag,{value:"Module"})),ui=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":zs,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":Us,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":Bs,"../../assets/songs/La cena - Las Petunias.mp3":qs,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":Ys,"../../assets/songs/Tek It - Cafuné.mp3":Hs,"../../assets/songs/You and I - d4vd .mp3":$s,"../../assets/songs/gourmet - rickyedit.mp3":Ks,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":Zs}),ot=Object.keys(ui).map(n=>({title:n.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,s=>s.toUpperCase()),artist:"Only U Playlist",src:ui[n].default}));ot.length===0&&ot.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const er=.1,tr=({visible:n,onClose:t})=>{const i=l.useRef(null),s=l.useRef(null),[u,h]=l.useState(!1),[S,C]=l.useState(0),[y,j]=l.useState(.3),[v,P]=l.useState(!1),[b,R]=l.useState(!1),[k,I]=l.useState(!1),[E,T]=l.useState(0),[N,U]=l.useState(0),F=ot[S];l.useEffect(()=>{i.current&&(i.current.volume=v?0:Math.pow(y,2)*er)},[y,v]),l.useEffect(()=>{u&&i.current&&i.current.play().catch(M=>console.log("Autoplay blocked",M))},[S]),l.useEffect(()=>{n||(R(!1),I(!1))},[n]),l.useEffect(()=>{const M=q=>{n&&(s.current&&s.current.contains(q.target)||q.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[n,t]);const o=()=>{i.current&&(T(i.current.currentTime),U(i.current.duration||0))},D=M=>{const q=parseFloat(M.target.value);T(q),i.current&&(i.current.currentTime=q)},J=()=>{u?i.current.pause():i.current.play(),h(!u)},X=()=>{C(M=>(M+1)%ot.length)},A=M=>{C(M),h(!0),I(!1)},H=M=>{if(!M||isNaN(M))return"0:00";const q=Math.floor(M/60),W=Math.floor(M%60);return`${q}:${W<10?"0":""}${W}`};return e.jsxs(ee.div,{ref:s,className:"music-player-container",initial:"hidden",animate:n?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:i,src:F.src,onEnded:X,onTimeUpdate:o,onLoadedMetadata:o,preload:"auto"}),e.jsx(Te,{children:k&&e.jsx(ee.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:ot.map((M,q)=>e.jsxs("div",{className:`playlist-item ${q===S?"active":""}`,onClick:()=>A(q),children:[q+1,". ",M.title]},q))})}),e.jsx("div",{className:"compact-info",onClick:()=>I(!k),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:F.title}),e.jsx(kn,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:J,children:u?e.jsx(Tn,{size:16}):e.jsx(_n,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:N,value:E,onChange:D,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[H(E)," / ",H(N)]})]}),e.jsx("button",{className:"icon-btn",onClick:X,children:e.jsx(Fn,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${b?"active":""}`,onClick:()=>R(!b),children:v||y===0?e.jsx(Mn,{size:18}):e.jsx(yi,{size:18})}),e.jsx(Te,{children:b&&e.jsx(ee.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:v?0:y,onChange:M=>j(parseFloat(M.target.value))})})})]})]})]})},ir=({goldShopEnabled:n,setGoldShopEnabled:t,onTogglePrestige:i})=>{const[s,u]=l.useState(!1),[h,S]=l.useState(!1),[C,y]=l.useState(!1),j=l.useRef(null),{gameVolume:v,setGameVolume:P,resetProgress:b,achievements:R,ownedItems:k,activeCursor:I,addCoins:E,unlockAchievement:T}=Ue(),[N,U]=l.useState(!1),F=R.includes("prestige"),o=R.includes("collector"),D=I==="cursor_prestige";l.useEffect(()=>{const A=H=>{j.current&&!j.current.contains(H.target)&&u(!1)};return s&&document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[s]),l.useEffect(()=>{const A=()=>U(window.innerWidth<=768);return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);const J=()=>{window.confirm("¿Estás seguro de que quieres borrar todo tu progreso (monedas y compras)?")&&(b(),u(!1))},X=()=>{const A=window.prompt("Introduce código de administrador:");A&&(["KONAMI","ADMIN","MATRIX"].includes(A.toUpperCase())?(E(1e6),T("matrix_master"),alert("¡Acceso concedido! Recursos añadidos."),u(!1)):alert("Código inválido."))};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @media (max-width: 768px) {
          .settings-container {
            top: max(20px, env(safe-area-inset-top) + 15px) !important;
            left: max(20px, env(safe-area-inset-left) + 15px) !important;
          }
        }
      `}),e.jsxs("div",{className:"settings-container",ref:j,children:[e.jsx("button",{className:`settings-btn ${s?"active":""}`,onClick:()=>u(!s),"aria-label":"Ajustes",children:e.jsx(In,{size:20})}),e.jsx(Te,{children:s&&e.jsxs(ee.div,{className:"settings-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{style:{marginBottom:"15px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(di,{label:"Cursor Prestigio",isActive:D,isLocked:!F,onToggle:()=>i(!D),color:"#f700ff"}),e.jsx(di,{label:"Tienda Dorada",isActive:n,isLocked:!o,onToggle:()=>t(!n),color:"#ffd700"})]}),e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"label",children:[e.jsx(yi,{})," ",e.jsx("span",{children:"Sonido Juego"})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:v,onChange:A=>P(parseFloat(A.target.value))})]}),e.jsx("div",{className:"divider"}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{y(!0),u(!1)},children:[e.jsx(vt,{})," Logros"]}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{S(!0),u(!1)},children:[e.jsx(Dn,{})," Documentación"]}),N&&e.jsxs("button",{className:"setting-action-btn",onClick:X,children:[e.jsx(zn,{})," Código Admin"]}),e.jsxs("button",{className:"setting-action-btn danger",onClick:J,children:[e.jsx(Nn,{})," Resetear Progreso"]})]})})]}),e.jsx(Te,{children:h&&e.jsx("div",{className:"doc-overlay",onClick:()=>S(!1),children:e.jsxs(ee.div,{className:"doc-modal",onClick:A=>A.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>S(!1),children:e.jsx(xt,{size:24})}),e.jsx("h2",{children:"Mecánicas del Juego"}),e.jsxs("div",{className:"doc-content",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Monedas:"})," Haz click en las monedas flotantes para recolectarlas. Las monedas especiales (brillantes) valen más puntos."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tienda:"})," Usa tus monedas para desbloquear nuevos fondos, cursores y skins para las monedas."]})]})]})})}),e.jsx(Te,{children:C&&e.jsx("div",{className:"doc-overlay",onClick:()=>y(!1),children:e.jsxs(ee.div,{className:"doc-modal",onClick:A=>A.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>y(!1),children:e.jsx(xt,{size:24})}),e.jsxs("h2",{children:[e.jsx(vt,{style:{marginRight:"10px",color:"#ffd700"}})," ","Tus Logros"]}),e.jsx("div",{className:"doc-content",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:Object.entries(rt).map(([A,H])=>{const M=R.includes(A);let q=H.desc;if(A==="collector"){const W=Object.values(yt).flat().filter(a=>a.type!=="skin"),d=W.length,c=k?W.filter(a=>k.includes(a.id)).length:0;q=`${H.desc} (${c}/${d})`}if(A==="prestige"){const d=Object.keys(rt).filter(a=>a!=="prestige"),c=R.filter(a=>d.includes(a)).length;q=`${H.desc} (${c}/${d.length})`}return e.jsxs("div",{style:{background:M?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)",border:M?"1px solid rgba(255, 215, 0, 0.3)":"1px solid rgba(255, 255, 255, 0.1)",padding:"15px",borderRadius:"12px",opacity:M?1:.5,display:"flex",alignItems:"center",gap:"15px"},children:[e.jsx("div",{style:{fontSize:"2rem"},children:M?H.icon:e.jsx(bi,{className:"locked-icon"})}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 5px 0",color:M?"#ffd700":"white"},children:H.title}),e.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"rgba(255,255,255,0.7)"},children:q})]})]},A)})})})]})})})]})},di=({label:n,isActive:t,isLocked:i,onToggle:s,color:u})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",opacity:i?.5:1},children:[e.jsxs("span",{style:{fontSize:"0.9rem",fontWeight:500,display:"flex",alignItems:"center",gap:"8px",color:"white"},children:[n," ",i&&e.jsx(bi,{size:10,style:{opacity:.7}})]}),e.jsx("div",{onClick:i?void 0:s,style:{width:"40px",height:"22px",background:t?u:"rgba(255,255,255,0.2)",borderRadius:"12px",position:"relative",cursor:i?"not-allowed":"pointer",transition:"background 0.3s ease"},children:e.jsx(ee.div,{animate:{x:t?18:2},transition:{type:"spring",stiffness:500,damping:30},style:{width:"18px",height:"18px",background:"white",borderRadius:"50%",position:"absolute",top:"2px",boxShadow:"0 2px 5px rgba(0,0,0,0.2)"}})})]}),nr=()=>{const{notification:n,clearNotification:t}=Ue();l.useEffect(()=>{if(n){const u=setTimeout(()=>{t()},4e3);return()=>clearTimeout(u)}},[n,t]);const i=n&&n.type==="achievement",s=i?rt[n.id]:null;return e.jsx(Te,{children:i&&s&&e.jsxs(ee.div,{className:"achievement-toast",initial:{y:-100,x:"-50%",opacity:0},animate:{y:20,x:"-50%",opacity:1},exit:{y:-100,x:"-50%",opacity:0},transition:{type:"spring",stiffness:300,damping:20},children:[e.jsx("div",{className:"icon-container",children:e.jsx(hi,{size:24,color:"#ffd700"})}),e.jsxs("div",{className:"text-container",children:[e.jsx("span",{className:"title",children:"¡Logro Desbloqueado!"}),e.jsxs("span",{className:"name",children:[s.icon," ",s.title]}),e.jsx("span",{className:"desc",children:s.desc})]})]})})},or=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"},{id:"skins",label:"Monedas",ariaLabel:"Personalizar Monedas"}];function sr(){const{isUnlocked:n,openShop:t,closeShop:i,lockGame:s,activeBackground:u,toggleGame:h,isGameActive:S,activeShop:C,addCoins:y,unlockAchievement:j,achievements:v,setCursor:P,activeCursor:b}=Ue(),[R,k]=l.useState(!0),[I,E]=l.useState(!1),[T,N]=l.useState(!1),[U,F]=l.useState(!1),[o,D]=l.useState(!0),[J,X]=l.useState(!1),[A,H]=l.useState(null),[M,q]=l.useState(null),[W,d]=l.useState(null),[c,a]=l.useState(null),[p,m]=l.useState(null),[w,B]=l.useState(null),[Y,re]=l.useState(null),[V,te]=l.useState(null),[ie,O]=l.useState(!0),[Z,le]=l.useState("default"),z=L=>{L?(b!=="cursor_prestige"&&le(b),P("cursor_prestige")):P(Z||"default")};l.useEffect(()=>{n&&v&&!v.includes("prestige")&&Object.keys(rt).filter(oe=>oe!=="prestige").every(oe=>v.includes(oe))&&(j("prestige"),P&&P("cursor_prestige"))},[v,n,j,P]);const ne=l.useRef(0);l.useEffect(()=>{if(!n)return;const L=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],$=K=>{const oe=K.key.toLowerCase(),Se=L[ne.current].toLowerCase();oe===Se?(ne.current++,ne.current===L.length&&(y(1e6),j("matrix_master"),console.log("CHEAT ACTIVATED: KONAMI CODE!"),ne.current=0)):(ne.current=0,oe===L[0].toLowerCase()&&(ne.current=1))};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[n,y,j]);const ve=L=>{L&&t(L)},ae=()=>{T?(N(!1),U&&k(!0)):(X(!1),i(),F(R),k(!1),N(!0))},xe=[{icon:e.jsx(Un,{size:22}),label:"Texto",onClick:()=>{i(),S?h():k(!R)}},{icon:e.jsx(On,{size:22}),label:"Música",onClick:()=>{i(),E(!I)}},{icon:e.jsx(Bn,{size:22}),label:"Tienda",onClick:()=>{C&&i(),X(!J)}},{icon:e.jsx(Gn,{size:22,color:S?"#f700ff":"currentColor"}),label:"Juego",onClick:()=>{i(),S?k(o):(D(R),k(!0)),h()}},{icon:e.jsx(qn,{size:22}),label:"Fondo",onClick:ae},{icon:e.jsx(Wn,{size:22}),label:"Bloquear",onClick:()=>{s&&(i(),E(!1),H(null),q(null),d(null),a(null),m(null),B(null),re(null),te(null),s())}}],[ce,pe]=l.useState(!0),[ue,we]=l.useState(0);return l.useEffect(()=>{const L=setInterval(()=>{we($=>{const K=$+Math.floor(Math.random()*15)+5;return K>=100?(clearInterval(L),setTimeout(()=>pe(!1),200),100):K})},200);return()=>clearInterval(L)},[]),e.jsxs("main",{style:{position:"fixed",inset:0,width:"100%",height:"100dvh",overflow:"hidden"},children:[e.jsx(Te,{mode:"wait",children:ce&&e.jsx(Is,{progress:ue},"loader")}),e.jsx(Te,{children:!n&&e.jsx(ee.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(eo,{})},"lock-screen")}),e.jsx(Te,{children:n&&e.jsxs(ee.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(Ps,{floatingLinesConfig:A,lightPillarsConfig:M,ballpitConfig:W,silkConfig:c,galaxyConfig:p,gradientConfig:w,pixelSnowConfig:Y,hyperspeedConfig:V}),e.jsx(ir,{goldShopEnabled:ie,setGoldShopEnabled:O,onTogglePrestige:z}),e.jsx(nr,{}),e.jsx(Es,{isOpen:J,onToggle:L=>{X(L),L&&N(!1)},items:or,isFixed:!0,position:"right",onItemClick:ve,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(qo,{}),e.jsx(Qo,{enableGoldTheme:ie}),e.jsx(Ms,{}),e.jsx(Te,{children:R&&e.jsx(ee.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(ts,{})})}),e.jsx(Te,{children:T&&["floatinglines","lightpillars","ballpit","silk","galaxy","gradient","pixelsnow","hyperspeed"].includes(u)&&e.jsx(ee.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(As,{onClose:ae,floatingLinesConfig:A,setFloatingLinesConfig:H,lightPillarsConfig:M,setLightPillarsConfig:q,ballpitConfig:W,setBallpitConfig:d,silkConfig:c,setSilkConfig:a,galaxyConfig:p,setGalaxyConfig:m,gradientConfig:w,setGradientConfig:B,pixelSnowConfig:Y,setPixelSnowConfig:re,hyperspeedConfig:V,setHyperspeedConfig:te})})})}),e.jsx(tr,{visible:I,onClose:()=>E(!1)}),e.jsx(Fs,{items:xe,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}Yn.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(sr,{})}));
