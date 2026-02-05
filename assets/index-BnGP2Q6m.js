import{c as Oi,j as e,r as a,u as Bi,C as _e,a as qi,F as Gi,R as ht,b as Pt,d as Wi,e as Yi,f as Xi,g as Hi,h as Vi,i as di,k as Ji,l as Ki,m as fi,n as mi,o as W,p as $i,q as Qi,s as Zi,t as hi,v as en,w as tn,x as pi,y as pt,z as gi,A as nn,B as on,D as sn,O as rn,E as an,G as ln,P as cn,V as oe,H as Tt,I as vi,S as st,W as rt,J as un,M as Et,K as Ce,L as dn,N as fn,Q as mn,T as hn,U as pn,X as gn,Y as vn,Z as De,_ as _t,$ as $e,a0 as it,a1 as Qe,a2 as xn,a3 as qt,a4 as yn,a5 as bn,a6 as wn,a7 as Gt,a8 as Sn,a9 as et,aa as Cn,ab as Rn,ac as Wt,ad as jn,ae as An,af as Yt,ag as Ve,ah as Ln,ai as Pn,aj as En,ak as kn,al as Tn,am as xi,an as _n,ao as Fn,ap as Mn,aq as Dn,ar as In,as as zn,at as Nn,au as Un,av as On,aw as Bn,ax as qn}from"./vendor-DYO69fHc.js";import{A as Pe,m as ce,u as nt,a as kt,b as gt}from"./framer-motion-D78Z-W6w.js";import{R as Gn,T as Wn,P as Yn,C as Xt,M as Xn}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const b of h.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&r(b)}).observe(document,{childList:!0,subtree:!0});function i(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function r(u){if(u.ep)return;u.ep=!0;const h=i(u);fetch(u.href,h)}})();const Ue=Oi(n=>({isUnlocked:!1,unlockApp:()=>n({isUnlocked:!0}),lockGame:()=>n({isUnlocked:!1}),activeShop:null,openShop:t=>n({activeShop:t}),closeShop:()=>n({activeShop:null}),isGameActive:!1,toggleGame:()=>n(t=>({isGameActive:!t.isGameActive})),coins:0,addCoins:t=>n(i=>({coins:i.coins+t})),gameVolume:.4,setGameVolume:t=>n({gameVolume:t}),activeCoinSkin:"dase",setCoinSkin:t=>n({activeCoinSkin:t}),ownedItems:["gradient","default","none","dase"],buyItem:t=>n(i=>i.ownedItems.includes(t.id)?i:i.coins>=t.price?{coins:i.coins-t.price,ownedItems:[...i.ownedItems,t.id]}:i),achievements:[],notification:null,unlockAchievement:t=>n(i=>i.achievements.includes(t)?i:{achievements:[...i.achievements,t],notification:{type:"achievement",id:t}}),clearNotification:()=>n({notification:null}),resetProgress:()=>n({coins:0,ownedItems:["gradient","default","none","dase"],activeBackground:"gradient",activeCursor:"default",activeTrail:"none",activeCoinSkin:"dase",achievements:[],isGameActive:!1}),activeBackground:"gradient",setBackground:t=>n({activeBackground:t}),activeCursor:"default",setCursor:t=>n({activeCursor:t}),activeTrail:"none",setTrail:t=>n({activeTrail:t})})),Hn=({text:n,disabled:t=!1,speed:i=3,className:r="",color:u="#7c7c7c",shineColor:h="#ffffff",direction:b="right"})=>e.jsx("div",{className:`shiny-text ${b} ${t?"disabled":""} ${r}`,style:{"--shiny-speed":`${i}s`,"--base-color":u,"--shine-color":h},children:n}),Ht=n=>(n=n.replace("#",""),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]),Vn=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,Jn=`
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
`,yi=a.forwardRef(function({uniforms:t},i){return Bi((r,u)=>{i.current.material.uniforms.uTime.value+=.1*u}),e.jsxs("mesh",{ref:i,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:Vn,fragmentShader:Jn})]})});yi.displayName="SilkPlane";const bi=({speed:n=1,scale:t=2,color:i="#ff99cc",noiseIntensity:r=.5,rotation:u=0})=>{const h=a.useRef(),b=a.useMemo(()=>({uSpeed:{value:n},uScale:{value:t},uNoiseIntensity:{value:r},uColor:{value:new _e(...Ht(i))},uRotation:{value:u},uTime:{value:0}}),[]);return a.useEffect(()=>{if(h.current){const w=h.current.material.uniforms;w.uSpeed.value=n,w.uScale.value=t,w.uNoiseIntensity.value=r,w.uColor.value.set(...Ht(i)),w.uRotation.value=u}},[n,t,r,i,u]),a.useEffect(()=>{const p=setInterval(()=>window.dispatchEvent(new Event("resize")),50),j=setTimeout(()=>clearInterval(p),1200);return()=>{clearInterval(p),clearTimeout(j)}},[]),e.jsx(qi,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(yi,{ref:h,uniforms:b})})},Kn=()=>{const[n,t]=a.useState(""),[i,r]=a.useState(!1),u=Ue(p=>p.unlockApp),h="230824",b=p=>{const j=p.target.value.replace(/\D/g,"");if(j.length>6)return;let R=j;j.length>2&&(R=j.slice(0,2)+"/"+j.slice(2)),j.length>4&&(R=R.slice(0,5)+"/"+j.slice(4)),t(R),r(!1)},w=p=>{p.preventDefault(),n.replace(/\//g,"")===h?u():(r(!0),setTimeout(()=>r(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(bi,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(Hn,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:w,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:n,onChange:b,className:i?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(Gi,{size:20})})]})]})]})},$n=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,Qn=Object.freeze(Object.defineProperty({__proto__:null,default:$n},Symbol.toStringTag,{value:"Module"})),Zn=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,eo=Object.freeze(Object.defineProperty({__proto__:null,default:Zn},Symbol.toStringTag,{value:"Module"})),to=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,io=Object.freeze(Object.defineProperty({__proto__:null,default:to},Symbol.toStringTag,{value:"Module"})),no=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,oo=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"})),so=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,ro=Object.freeze(Object.defineProperty({__proto__:null,default:so},Symbol.toStringTag,{value:"Module"})),ao=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,lo=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),co=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,uo=Object.freeze(Object.defineProperty({__proto__:null,default:co},Symbol.toStringTag,{value:"Module"})),fo=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,mo=Object.freeze(Object.defineProperty({__proto__:null,default:fo},Symbol.toStringTag,{value:"Module"})),ho=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,po=Object.freeze(Object.defineProperty({__proto__:null,default:ho},Symbol.toStringTag,{value:"Module"})),go=""+new URL("angel-C_MrdXcC.mp3",import.meta.url).href,vo=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"})),wi=""+new URL("angel-BIAg6Grr.png",import.meta.url).href,xo=Object.freeze(Object.defineProperty({__proto__:null,default:wi},Symbol.toStringTag,{value:"Module"})),yo=""+new URL("angelshiny-Cl20zV7k.png",import.meta.url).href,bo=Object.freeze(Object.defineProperty({__proto__:null,default:yo},Symbol.toStringTag,{value:"Module"})),wo=""+new URL("dase-YSuIB7YX.mp3",import.meta.url).href,So=Object.freeze(Object.defineProperty({__proto__:null,default:wo},Symbol.toStringTag,{value:"Module"})),Si=""+new URL("dase-Ul_8ADqZ.png",import.meta.url).href,Co=Object.freeze(Object.defineProperty({__proto__:null,default:Si},Symbol.toStringTag,{value:"Module"})),Ro=""+new URL("daseshiny-CaXO5CeC.png",import.meta.url).href,jo=Object.freeze(Object.defineProperty({__proto__:null,default:Ro},Symbol.toStringTag,{value:"Module"})),Ci=""+new URL("rachel-DeRuLfeE.png",import.meta.url).href,Ao=Object.freeze(Object.defineProperty({__proto__:null,default:Ci},Symbol.toStringTag,{value:"Module"})),Lo=""+new URL("rachelshiny-BHCPmip9.png",import.meta.url).href,Po=Object.freeze(Object.defineProperty({__proto__:null,default:Lo},Symbol.toStringTag,{value:"Module"})),ze=n=>ht.createElement(n),ot={baby_steps:{title:"El Primer Paso",desc:"Recoge tu primera moneda, pobre.",icon:ze(mi)},on_fire:{title:"Dedos de Fuego",desc:"Alcanza un combo x5.",icon:ze(fi)},god_mode:{title:"Modo Dios",desc:"Mantén un combo x10.",icon:ze(Ki)},shiny_lover:{title:"Shiny Spotter",desc:"Atrapa una moneda especial.",icon:ze(Ji)},sniper:{title:"Francotirador",desc:"Caza una moneda a máxima velocidad (>15).",icon:ze(di)},piggy_bank:{title:"Algo es algo",desc:"Acumula 500 monedas. Para un kebab da.",icon:ze(Vi)},stonks:{title:"Lobo de Wall Street",desc:"Consigue 1000 monedas.",icon:ze(Hi)},crypto_king:{title:"Cripto Magnate",desc:"Llega a 5000 monedas.",icon:ze(Xi)},collector:{title:"Coleccionista",desc:"Compra todos los objetos de la tienda.",icon:ze(Yi)},matrix_master:{title:"El Elegido",desc:"Descubre el código secreto de administrador.",icon:ze(Wi)},prestige:{title:"Prestigio",desc:"Consigue todos los logros.",icon:ze(Pt)}},Eo=({targetSelector:n=".cursor-target",spinDuration:t=2,hideDefaultCursor:i=!0,hoverDuration:r=.2,parallaxOn:u=!0})=>{const h=a.useRef(null),b=a.useRef(null),w=a.useRef(null),p=a.useRef(null),j=a.useRef(!1),R=a.useRef(null),P=a.useRef(null),S=a.useRef(0),y=a.useMemo(()=>{const k="ontouchstart"in window||navigator.maxTouchPoints>0,I=window.innerWidth<=768,B=navigator.userAgent||navigator.vendor||window.opera,L=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(B.toLowerCase());return k&&I||L},[]),F=a.useMemo(()=>({borderWidth:3,cornerSize:12}),[]),N=a.useCallback((k,I)=>{h.current&&W.to(h.current,{x:k,y:I,duration:.1,ease:"power3.out"})},[]);return a.useEffect(()=>{if(y||!h.current)return;const k=document.body.style.cursor;i&&(document.body.style.cursor="none");const I=h.current;b.current=I.querySelectorAll(".target-cursor-corner");let B=null,U=null,L=null;const o=O=>{U&&O.removeEventListener("mouseleave",U),U=null};W.set(I,{xPercent:-50,yPercent:-50,x:window.innerWidth/2,y:window.innerHeight/2}),w.current&&w.current.kill(),w.current=W.timeline({repeat:-1}).to(I,{rotation:"+=360",duration:t,ease:"none"});const Q=()=>{if(!R.current||!h.current||!b.current)return;const O=S.current;if(O===0)return;if(B){if(!B.isConnected){U&&U();return}const f=B.getBoundingClientRect(),{borderWidth:m,cornerSize:C}=F;R.current=[{x:f.left-m,y:f.top-m},{x:f.right+m-C,y:f.top-m},{x:f.right+m-C,y:f.bottom+m-C},{x:f.left-m,y:f.bottom+m-C}]}const A=W.getProperty(h.current,"x"),c=W.getProperty(h.current,"y");Array.from(b.current).forEach((f,m)=>{const C=W.getProperty(f,"x"),q=W.getProperty(f,"y"),Y=R.current[m].x-A,se=R.current[m].y-c,X=C+(Y-C)*O,re=q+(se-q)*O,ie=O>=.99?u?.2:0:.05;W.to(f,{x:X,y:re,duration:ie,ease:ie===0?"none":"power1.out",overwrite:"auto"})})};P.current=Q;const V=O=>N(O.clientX,O.clientY);window.addEventListener("mousemove",V);const _=()=>{if(!B||!h.current)return;const O=W.getProperty(h.current,"x"),A=W.getProperty(h.current,"y"),c=document.elementFromPoint(O,A);c&&(c===B||c.closest(n)===B)||U&&U()};window.addEventListener("scroll",_,{passive:!0});const K=()=>{p.current&&(W.to(p.current,{scale:.7,duration:.3}),W.to(h.current,{scale:.9,duration:.2}))},z=()=>{p.current&&(W.to(p.current,{scale:1,duration:.3}),W.to(h.current,{scale:1,duration:.2}))};window.addEventListener("mousedown",K),window.addEventListener("mouseup",z);const x=O=>{const A=O.target,c=[];let l=A;for(;l&&l!==document.body;)l.matches(n)&&c.push(l),l=l.parentElement;const f=c[0]||null;if(!f||!h.current||!b.current||B===f)return;B&&o(B),L&&(clearTimeout(L),L=null),B=f;const m=Array.from(b.current);m.forEach(ie=>W.killTweensOf(ie)),W.killTweensOf(h.current,"rotation"),w.current?.pause(),W.set(h.current,{rotation:0});const C=f.getBoundingClientRect(),{borderWidth:q,cornerSize:Y}=F,se=W.getProperty(h.current,"x"),X=W.getProperty(h.current,"y");R.current=[{x:C.left-q,y:C.top-q},{x:C.right+q-Y,y:C.top-q},{x:C.right+q-Y,y:C.bottom+q-Y},{x:C.left-q,y:C.bottom+q-Y}],j.current=!0,W.ticker.add(P.current),W.to(S,{current:1,duration:r,ease:"power2.out"}),m.forEach((ie,G)=>{W.to(ie,{x:R.current[G].x-se,y:R.current[G].y-X,duration:.2,ease:"power2.out"})});const re=()=>{if(W.ticker.remove(P.current),j.current=!1,R.current=null,W.set(S,{current:0,overwrite:!0}),B=null,b.current){const ie=Array.from(b.current);W.killTweensOf(ie);const{cornerSize:G}=F,Z=[{x:-G*1.5,y:-G*1.5},{x:G*.5,y:-G*1.5},{x:G*.5,y:G*.5},{x:-G*1.5,y:G*.5}],ne=W.timeline();ie.forEach((D,ue)=>{ne.to(D,{x:Z[ue].x,y:Z[ue].y,duration:.3,ease:"power3.out"},0)})}L=setTimeout(()=>{if(!B&&h.current&&w.current){const G=W.getProperty(h.current,"rotation")%360;w.current.kill(),w.current=W.timeline({repeat:-1}).to(h.current,{rotation:"+=360",duration:t,ease:"none"}),W.to(h.current,{rotation:G+360,duration:t*(1-G/360),ease:"none",onComplete:()=>{w.current?.restart()}})}L=null},50),o(f)};U=re,f.addEventListener("mouseleave",re)};return window.addEventListener("mouseover",x,{passive:!0}),()=>{P.current&&W.ticker.remove(P.current),window.removeEventListener("mousemove",V),window.removeEventListener("mouseover",x),window.removeEventListener("scroll",_),window.removeEventListener("mousedown",K),window.removeEventListener("mouseup",z),B&&o(B),w.current?.kill(),document.body.style.cursor=k,j.current=!1,R.current=null,S.current=0}},[n,t,N,F,i,y,r,u]),a.useEffect(()=>{y||!h.current||!w.current||w.current.isActive()&&(w.current.kill(),w.current=W.timeline({repeat:-1}).to(h.current,{rotation:"+=360",duration:t,ease:"none"}))},[t,y]),y?null:e.jsxs("div",{ref:h,className:"target-cursor-wrapper",children:[e.jsx("div",{ref:p,className:"target-cursor-dot"}),e.jsx("div",{className:"target-cursor-corner corner-tl"}),e.jsx("div",{className:"target-cursor-corner corner-tr"}),e.jsx("div",{className:"target-cursor-corner corner-br"}),e.jsx("div",{className:"target-cursor-corner corner-bl"})]})};function ko({SIM_RESOLUTION:n=128,DYE_RESOLUTION:t=1440,CAPTURE_RESOLUTION:i=512,DENSITY_DISSIPATION:r=3.5,VELOCITY_DISSIPATION:u=2,PRESSURE:h=.1,PRESSURE_ITERATIONS:b=20,CURL:w=3,SPLAT_RADIUS:p=.2,SPLAT_FORCE:j=6e3,SHADING:R=!0,COLOR_UPDATE_SPEED:P=10,BACK_COLOR:S={r:.5,g:0,b:0},TRANSPARENT:y=!0}){const F=a.useRef(null),N=a.useRef(null);return a.useEffect(()=>{const k=F.current;if(!k)return;let I=!0;function B(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let U={SIM_RESOLUTION:n,DYE_RESOLUTION:t,DENSITY_DISSIPATION:r,VELOCITY_DISSIPATION:u,PRESSURE:h,PRESSURE_ITERATIONS:b,CURL:w,SPLAT_RADIUS:p,SPLAT_FORCE:j,SHADING:R,COLOR_UPDATE_SPEED:P},L=[new B];const{gl:o,ext:M}=Q(k);M.supportLinearFiltering||(U.DYE_RESOLUTION=256,U.SHADING=!1);function Q(s){const g={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let v=s.getContext("webgl2",g);const T=!!v;T||(v=s.getContext("webgl",g)||s.getContext("experimental-webgl",g));let $,me;T?(v.getExtension("EXT_color_buffer_float"),me=v.getExtension("OES_texture_float_linear")):($=v.getExtension("OES_texture_half_float"),me=v.getExtension("OES_texture_half_float_linear")),v.clearColor(0,0,0,1);const he=T?v.HALF_FLOAT:$&&$.HALF_FLOAT_OES;let Le,je,Be;return T?(Le=V(v,v.RGBA16F,v.RGBA,he),je=V(v,v.RG16F,v.RG,he),Be=V(v,v.R16F,v.RED,he)):(Le=V(v,v.RGBA,v.RGBA,he),je=V(v,v.RGBA,v.RGBA,he),Be=V(v,v.RGBA,v.RGBA,he)),{gl:v,ext:{formatRGBA:Le,formatRG:je,formatR:Be,halfFloatTexType:he,supportLinearFiltering:me}}}function V(s,g,v,T){if(!_(s,g,v,T))switch(g){case s.R16F:return V(s,s.RG16F,s.RG,T);case s.RG16F:return V(s,s.RGBA16F,s.RGBA,T);default:return null}return{internalFormat:g,format:v}}function _(s,g,v,T){const $=s.createTexture();s.bindTexture(s.TEXTURE_2D,$),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,g,4,4,0,v,T,null);const me=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,me),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0),s.checkFramebufferStatus(s.FRAMEBUFFER)===s.FRAMEBUFFER_COMPLETE}class K{constructor(g,v){this.vertexShader=g,this.fragmentShaderSource=v,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(g){let v=0;for(let $=0;$<g.length;$++)v+=Ui(g[$]);let T=this.programs[v];if(T==null){let $=A(o.FRAGMENT_SHADER,this.fragmentShaderSource,g);T=x(this.vertexShader,$),this.programs[v]=T}T!==this.activeProgram&&(this.uniforms=O(T),this.activeProgram=T)}bind(){o.useProgram(this.activeProgram)}}class z{constructor(g,v){this.uniforms={},this.program=x(g,v),this.uniforms=O(this.program)}bind(){o.useProgram(this.program)}}function x(s,g){let v=o.createProgram();return o.attachShader(v,s),o.attachShader(v,g),o.linkProgram(v),o.getProgramParameter(v,o.LINK_STATUS)||console.trace(o.getProgramInfoLog(v)),v}function O(s){let g={},v=o.getProgramParameter(s,o.ACTIVE_UNIFORMS);for(let T=0;T<v;T++){let $=o.getActiveUniform(s,T).name;g[$]=o.getUniformLocation(s,$)}return g}function A(s,g,v){g=c(g,v);const T=o.createShader(s);return o.shaderSource(T,g),o.compileShader(T),o.getShaderParameter(T,o.COMPILE_STATUS)||console.trace(o.getShaderInfoLog(T)),T}function c(s,g){if(!g)return s;let v="";return g.forEach(T=>{v+="#define "+T+`
`}),v+s}const l=A(o.VERTEX_SHADER,`
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
      `),f=A(o.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),m=A(o.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),C=`
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
    `,q=A(o.FRAGMENT_SHADER,`
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
      `),Y=A(o.FRAGMENT_SHADER,`
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
      `,M.supportLinearFiltering?null:["MANUAL_FILTERING"]),se=A(o.FRAGMENT_SHADER,`
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
      `),X=A(o.FRAGMENT_SHADER,`
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
      `),re=A(o.FRAGMENT_SHADER,`
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
      `),ie=A(o.FRAGMENT_SHADER,`
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
      `),G=A(o.FRAGMENT_SHADER,`
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
      `),Z=(o.bindBuffer(o.ARRAY_BUFFER,o.createBuffer()),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),o.STATIC_DRAW),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,o.createBuffer()),o.bufferData(o.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),o.STATIC_DRAW),o.vertexAttribPointer(0,2,o.FLOAT,!1,0,0),o.enableVertexAttribArray(0),(s,g=!1)=>{s==null?(o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight),o.bindFramebuffer(o.FRAMEBUFFER,null)):(o.viewport(0,0,s.width,s.height),o.bindFramebuffer(o.FRAMEBUFFER,s.fbo)),g&&(o.clearColor(0,0,0,1),o.clear(o.COLOR_BUFFER_BIT)),o.drawElements(o.TRIANGLES,6,o.UNSIGNED_SHORT,0)});let ne,D,ue,te,de;const ge=new z(l,f),E=new z(l,m),H=new z(l,q),J=new z(l,Y),fe=new z(l,se),ee=new z(l,X),ae=new z(l,re),le=new z(l,ie),xe=new z(l,G),Re=new K(l,C);function Ae(){let s=Dt(U.SIM_RESOLUTION),g=Dt(U.DYE_RESOLUTION);const v=M.halfFloatTexType,T=M.formatRGBA,$=M.formatRG,me=M.formatR,he=M.supportLinearFiltering?o.LINEAR:o.NEAREST;o.disable(o.BLEND),ne?ne=Fe(ne,g.width,g.height,T.internalFormat,T.format,v,he):ne=ve(g.width,g.height,T.internalFormat,T.format,v,he),D?D=Fe(D,s.width,s.height,$.internalFormat,$.format,v,he):D=ve(s.width,s.height,$.internalFormat,$.format,v,he),ue=Ee(s.width,s.height,me.internalFormat,me.format,v,o.NEAREST),te=Ee(s.width,s.height,me.internalFormat,me.format,v,o.NEAREST),de=ve(s.width,s.height,me.internalFormat,me.format,v,o.NEAREST)}function Ee(s,g,v,T,$,me){o.activeTexture(o.TEXTURE0);let he=o.createTexture();o.bindTexture(o.TEXTURE_2D,he),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,me),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,me),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_2D,0,v,s,g,0,T,$,null);let Le=o.createFramebuffer();o.bindFramebuffer(o.FRAMEBUFFER,Le),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,he,0),o.viewport(0,0,s,g),o.clear(o.COLOR_BUFFER_BIT);let je=1/s,Be=1/g;return{texture:he,fbo:Le,width:s,height:g,texelSizeX:je,texelSizeY:Be,attach(Ye){return o.activeTexture(o.TEXTURE0+Ye),o.bindTexture(o.TEXTURE_2D,he),Ye}}}function ve(s,g,v,T,$,me){let he=Ee(s,g,v,T,$,me),Le=Ee(s,g,v,T,$,me);return{width:s,height:g,texelSizeX:he.texelSizeX,texelSizeY:he.texelSizeY,get read(){return he},set read(je){he=je},get write(){return Le},set write(je){Le=je},swap(){let je=he;he=Le,Le=je}}}function ye(s,g,v,T,$,me,he){let Le=Ee(g,v,T,$,me,he);return ge.bind(),o.uniform1i(ge.uniforms.uTexture,s.attach(0)),Z(Le),Le}function Fe(s,g,v,T,$,me,he){return s.width===g&&s.height===v||(s.read=ye(s.read,g,v,T,$,me,he),s.write=Ee(g,v,T,$,me,he),s.width=g,s.height=v,s.texelSizeX=1/g,s.texelSizeY=1/v),s}function Ze(){let s=[];U.SHADING&&s.push("SHADING"),Re.setKeywords(s)}Ze(),Ae();let be=Date.now(),Te=0;function Ie(){if(!I)return;const s=bt();He()&&Ae(),wt(s),d(),pe(s),Me(null),N.current=requestAnimationFrame(Ie)}function bt(){let s=Date.now(),g=(s-be)/1e3;return g=Math.min(g,.016666),be=s,g}function He(){let s=Oe(k.clientWidth),g=Oe(k.clientHeight);return k.width!==s||k.height!==g?(k.width=s,k.height=g,!0):!1}function wt(s){Te+=s*U.COLOR_UPDATE_SPEED,Te>=1&&(Te=Ni(Te,0,1),L.forEach(g=>{g.color=at()}))}function d(){L.forEach(s=>{s.moved&&(s.moved=!1,Ti(s))})}function pe(s){o.disable(o.BLEND),ee.bind(),o.uniform2f(ee.uniforms.texelSize,D.texelSizeX,D.texelSizeY),o.uniform1i(ee.uniforms.uVelocity,D.read.attach(0)),Z(te),ae.bind(),o.uniform2f(ae.uniforms.texelSize,D.texelSizeX,D.texelSizeY),o.uniform1i(ae.uniforms.uVelocity,D.read.attach(0)),o.uniform1i(ae.uniforms.uCurl,te.attach(1)),o.uniform1f(ae.uniforms.curl,U.CURL),o.uniform1f(ae.uniforms.dt,s),Z(D.write),D.swap(),fe.bind(),o.uniform2f(fe.uniforms.texelSize,D.texelSizeX,D.texelSizeY),o.uniform1i(fe.uniforms.uVelocity,D.read.attach(0)),Z(ue),E.bind(),o.uniform1i(E.uniforms.uTexture,de.read.attach(0)),o.uniform1f(E.uniforms.value,U.PRESSURE),Z(de.write),de.swap(),le.bind(),o.uniform2f(le.uniforms.texelSize,D.texelSizeX,D.texelSizeY),o.uniform1i(le.uniforms.uDivergence,ue.attach(0));for(let v=0;v<U.PRESSURE_ITERATIONS;v++)o.uniform1i(le.uniforms.uPressure,de.read.attach(1)),Z(de.write),de.swap();xe.bind(),o.uniform2f(xe.uniforms.texelSize,D.texelSizeX,D.texelSizeY),o.uniform1i(xe.uniforms.uPressure,de.read.attach(0)),o.uniform1i(xe.uniforms.uVelocity,D.read.attach(1)),Z(D.write),D.swap(),J.bind(),o.uniform2f(J.uniforms.texelSize,D.texelSizeX,D.texelSizeY),M.supportLinearFiltering||o.uniform2f(J.uniforms.dyeTexelSize,D.texelSizeX,D.texelSizeY);let g=D.read.attach(0);o.uniform1i(J.uniforms.uVelocity,g),o.uniform1i(J.uniforms.uSource,g),o.uniform1f(J.uniforms.dt,s),o.uniform1f(J.uniforms.dissipation,U.VELOCITY_DISSIPATION),Z(D.write),D.swap(),M.supportLinearFiltering||o.uniform2f(J.uniforms.dyeTexelSize,ne.texelSizeX,ne.texelSizeY),o.uniform1i(J.uniforms.uVelocity,D.read.attach(0)),o.uniform1i(J.uniforms.uSource,ne.read.attach(1)),o.uniform1f(J.uniforms.dissipation,U.DENSITY_DISSIPATION),Z(ne.write),ne.swap()}function Me(s){o.blendFunc(o.ONE,o.ONE_MINUS_SRC_ALPHA),o.enable(o.BLEND),St(s)}function St(s){let g=o.drawingBufferWidth,v=o.drawingBufferHeight;Re.bind(),U.SHADING&&o.uniform2f(Re.uniforms.texelSize,1/g,1/v),o.uniform1i(Re.uniforms.uTexture,ne.read.attach(0)),Z(s)}function Ti(s){let g=s.deltaX*U.SPLAT_FORCE,v=s.deltaY*U.SPLAT_FORCE;Ft(s.texcoordX,s.texcoordY,g,v,s.color)}function _i(s){const g=at();g.r*=10,g.g*=10,g.b*=10;let v=10*(Math.random()-.5),T=30*(Math.random()-.5);Ft(s.texcoordX,s.texcoordY,v,T,g)}function Ft(s,g,v,T,$){H.bind(),o.uniform1i(H.uniforms.uTarget,D.read.attach(0)),o.uniform1f(H.uniforms.aspectRatio,k.width/k.height),o.uniform2f(H.uniforms.point,s,g),o.uniform3f(H.uniforms.color,v,T,0),o.uniform1f(H.uniforms.radius,Fi(U.SPLAT_RADIUS/100)),Z(D.write),D.swap(),o.uniform1i(H.uniforms.uTarget,ne.read.attach(0)),o.uniform3f(H.uniforms.color,$.r,$.g,$.b),Z(ne.write),ne.swap()}function Fi(s){let g=k.width/k.height;return g>1&&(s*=g),s}function Mt(s,g,v,T){s.id=g,s.down=!0,s.moved=!1,s.texcoordX=v/k.width,s.texcoordY=1-T/k.height,s.prevTexcoordX=s.texcoordX,s.prevTexcoordY=s.texcoordY,s.deltaX=0,s.deltaY=0,s.color=at()}function Ct(s,g,v,T){s.prevTexcoordX=s.texcoordX,s.prevTexcoordY=s.texcoordY,s.texcoordX=g/k.width,s.texcoordY=1-v/k.height,s.deltaX=Di(s.texcoordX-s.prevTexcoordX),s.deltaY=Ii(s.texcoordY-s.prevTexcoordY),s.moved=Math.abs(s.deltaX)>0||Math.abs(s.deltaY)>0,s.color=T}function Mi(s){s.down=!1}function Di(s){let g=k.width/k.height;return g<1&&(s*=g),s}function Ii(s){let g=k.width/k.height;return g>1&&(s/=g),s}function at(){let s=zi(Math.random(),1,1);return s.r*=.15,s.g*=.15,s.b*=.15,s}function zi(s,g,v){let T,$,me,he,Le,je,Be,Ye;switch(he=Math.floor(s*6),Le=s*6-he,je=v*(1-g),Be=v*(1-Le*g),Ye=v*(1-(1-Le)*g),he%6){case 0:T=v,$=Ye,me=je;break;case 1:T=Be,$=v,me=je;break;case 2:T=je,$=v,me=Ye;break;case 3:T=je,$=Be,me=v;break;case 4:T=Ye,$=je,me=v;break;case 5:T=v,$=je,me=Be;break}return{r:T,g:$,b:me}}function Ni(s,g,v){const T=v-g;return(s-g)%T+g}function Dt(s){let g=o.drawingBufferWidth/o.drawingBufferHeight;g<1&&(g=1/g);const v=Math.round(s),T=Math.round(s*g);return o.drawingBufferWidth>o.drawingBufferHeight?{width:T,height:v}:{width:v,height:T}}function Oe(s){const g=window.devicePixelRatio||1;return Math.floor(s*g)}function Ui(s){if(s.length===0)return 0;let g=0;for(let v=0;v<s.length;v++)g=(g<<5)-g+s.charCodeAt(v),g|=0;return g}function It(s){let g=L[0],v=Oe(s.clientX),T=Oe(s.clientY);Mt(g,-1,v,T),_i(g)}let zt=!1;function Nt(s){let g=L[0],v=Oe(s.clientX),T=Oe(s.clientY);if(zt)Ct(g,v,T,g.color);else{let $=at();Ct(g,v,T,$),zt=!0}}function Ut(s){const g=s.targetTouches;let v=L[0];for(let T=0;T<g.length;T++){let $=Oe(g[T].clientX),me=Oe(g[T].clientY);Mt(v,g[T].identifier,$,me)}}function Ot(s){const g=s.targetTouches;let v=L[0];for(let T=0;T<g.length;T++){let $=Oe(g[T].clientX),me=Oe(g[T].clientY);Ct(v,$,me,v.color)}}function Bt(s){const g=s.changedTouches;let v=L[0];for(let T=0;T<g.length;T++)Mi(v)}return window.addEventListener("mousedown",It),window.addEventListener("mousemove",Nt),window.addEventListener("touchstart",Ut),window.addEventListener("touchmove",Ot,!1),window.addEventListener("touchend",Bt),Ie(),()=>{I=!1,N.current&&(cancelAnimationFrame(N.current),N.current=null),window.removeEventListener("mousedown",It),window.removeEventListener("mousemove",Nt),window.removeEventListener("touchstart",Ut),window.removeEventListener("touchmove",Ot),window.removeEventListener("touchend",Bt)}},[]),e.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:e.jsx("canvas",{ref:F,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})}const To=(n,t,i)=>(1-i)*n+i*t,_o=(n,t)=>{if(t){const i=t.getBoundingClientRect();return{x:n.clientX-i.left,y:n.clientY-i.top}}return{x:n.clientX,y:n.clientY}},Fo=({color:n="white",containerRef:t=null,targetSelector:i="a, button, .shop-item, .dock-item, .coin-entity"})=>{const r=a.useRef(null),u=a.useRef(null),h=a.useRef(null),b=a.useRef(null),w=a.useRef(null),p=a.useRef(null),j=a.useRef({x:0,y:0});return a.useEffect(()=>{const R=L=>{if(j.current=_o(L,t?.current),t?.current){const o=t.current.getBoundingClientRect();L.clientX<o.left||L.clientX>o.right||L.clientY<o.top||L.clientY>o.bottom?W.to([u.current,h.current],{opacity:0}):W.to([u.current,h.current],{opacity:1})}},P=t?.current||window;P.addEventListener("mousemove",R);const S={tx:{previous:0,current:0,amt:.15},ty:{previous:0,current:0,amt:.15}};W.set([u.current,h.current],{opacity:0});const y=()=>{S.tx.previous=S.tx.current=j.current.x,S.ty.previous=S.ty.current=j.current.y,W.to([u.current,h.current],{duration:.9,ease:"Power3.easeOut",opacity:1}),p.current=requestAnimationFrame(B),P.removeEventListener("mousemove",y)};P.addEventListener("mousemove",y);const F={turbulence:0},N=W.timeline({paused:!0,onStart:()=>{u.current&&(u.current.style.filter="url(#filter-noise-x)"),h.current&&(h.current.style.filter="url(#filter-noise-y)")},onUpdate:()=>{b.current&&w.current&&(b.current.setAttribute("baseFrequency",F.turbulence),w.current.setAttribute("baseFrequency",F.turbulence))},onComplete:()=>{u.current&&h.current&&(u.current.style.filter=h.current.style.filter="none")}}).to(F,{duration:.5,ease:"power1",startAt:{turbulence:1},turbulence:0}),k=()=>N.restart(),I=()=>N.progress(1).kill(),B=()=>{S.tx.current=j.current.x,S.ty.current=j.current.y;for(const L in S)S[L].previous=To(S[L].previous,S[L].current,S[L].amt);u.current&&h.current&&(W.set(h.current,{x:S.tx.previous}),W.set(u.current,{y:S.ty.previous})),p.current=requestAnimationFrame(B)},U=L=>{if(!L.target||typeof L.target.closest!="function")return;const o=L.target.closest(i);o&&(!L.relatedTarget||!o.contains(L.relatedTarget))&&(k(),o.addEventListener("mouseleave",I,{once:!0}))};return document.addEventListener("mouseover",U),()=>{P.removeEventListener("mousemove",R),P.removeEventListener("mousemove",y),p.current&&cancelAnimationFrame(p.current),document.removeEventListener("mouseover",U)}},[t,i]),e.jsxs("div",{ref:r,className:"cursor",style:{position:t?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1e4},children:[e.jsx("svg",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"},children:e.jsxs("defs",{children:[e.jsxs("filter",{id:"filter-noise-x",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:b}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]}),e.jsxs("filter",{id:"filter-noise-y",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:w}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]})]})}),e.jsx("div",{ref:u,style:{position:"absolute",width:"100%",height:"1px",background:n,pointerEvents:"none",top:0,opacity:0}}),e.jsx("div",{ref:h,style:{position:"absolute",height:"100%",width:"1px",background:n,pointerEvents:"none",left:0,opacity:0}})]})},Mo=""+new URL("ring-CJvK4024.gif",import.meta.url).href,mt={cursor_neon:{name:"Neon Pulse",price:500,desc:"Estilo Cyberpunk. Cambia de color.",icon:e.jsx(en,{}),type:"replace",className:"cursor-neon"},cursor_gold:{name:"Gold Sparkle",price:1e3,desc:"Cursor de oro puro con rastro brillante.",icon:e.jsx(fi,{}),type:"replace",className:"cursor-gold",effect:"sparkle"},cursor_ring:{name:"Anillo",price:1500,desc:"Un anillo animado.",icon:e.jsx(hi,{}),type:"replace",className:"cursor-ring",backgroundImage:Mo},cursor_blackhole:{name:"Agujero Negro",price:2e3,desc:"Singularidad que distorsiona la luz.",icon:e.jsx(Zi,{}),type:"replace",className:"cursor-blackhole"},cursor_crosshair:{name:"Crosshair",price:3e3,desc:"Líneas de precisión con distorsión.",icon:e.jsx(di,{}),type:"custom",component:Fo},cursor_splash:{name:"Splash Fluid",price:4e3,desc:"Tinta fluida reactiva.",icon:e.jsx(Qi,{}),type:"custom",component:ko,hideNative:!1},cursor_target:{name:"Target HUD",price:5e3,desc:"Sistema de fijación táctico.",icon:e.jsx($i,{}),type:"custom",component:Eo}};function Do(){const{activeCursor:n}=Ue(),t=a.useRef(null),[i,r]=a.useState(!1),[u,h]=a.useState([]);a.useRef(),a.useEffect(()=>{const p=P=>{const{clientX:S,clientY:y}=P;t.current&&(t.current.style.transform=`translate3d(${S}px, ${y}px, 0)`);const F=mt[n];F?.effect&&F.effect==="sparkle"&&Math.random()>.7&&b(S,y,"sparkle")},j=()=>r(!0),R=()=>r(!1);return window.addEventListener("mousemove",p),window.addEventListener("mousedown",j),window.addEventListener("mouseup",R),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mousedown",j),window.removeEventListener("mouseup",R)}},[n]);const b=(p,j,R)=>{const P=Date.now()+Math.random();h(S=>[...S,{id:P,x:p,y:j,type:R}]),setTimeout(()=>{h(S=>S.filter(y=>y.id!==P))},1e3)};a.useEffect(()=>{const p=mt[n];return p&&((p.type==="replace"||p.type==="custom")&&p.hideNative!==!1&&document.body.classList.add("hide-native-cursor"),p.bodyClass&&document.body.classList.add(p.bodyClass)),()=>{document.body.classList.remove("hide-native-cursor"),p&&p.bodyClass&&document.body.classList.remove(p.bodyClass)}},[n]);const w=mt[n];return tn.createPortal(e.jsxs("div",{className:"cursor-overlay",children:[u.map(p=>e.jsx("div",{className:"sparkle-particle",style:{left:p.x,top:p.y}},p.id)),w&&w.type==="replace"&&e.jsx("div",{ref:t,className:"cursor-follower",children:e.jsx("div",{className:`${w.className} ${i?"clicking":""}`,style:w.backgroundImage?{backgroundImage:`url(${w.backgroundImage})`}:{}})}),w&&w.type==="custom"&&e.jsx(w.component,{targetSelector:"button, .shop-item, input, a, .coin-entity, .dock-item, .dock-icon"})]}),document.body)}const Ri=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,ji=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,Ai=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,Li=""+new URL("duck-BnqypGlP.png",import.meta.url).href,Pi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpAgoQDSR9aWoCAAANHklEQVRo3u1YaXRVRbb+qk6dc+6cm4kwBTMSBkNAMYBEaBEEERGxsRFFRe3GJ9j4wJa37AZppN/CtZ6rl3NAeTTggIDIEIiCCKJMYQqEOSEJZCIkN/cmufM5p+r9SCBEE7BZLN6ffGvd86NuDfur/e3auwroQAc60IEOdODmQa735yuTngAA+AI+QJYRDAQw84W/QYGCgZMG/X/b3gqsrcY3Z74MSZFRfbECEpHMhJBuRFFLtcoy/dOVi3/TxPNeeglvZWfjhbFjYOg6KFNwYt8ujHnqRSz84L1bToS21ajrYehaiAgibI2N9QPCXu/HxOcbpppt0xiTHbIsX3fSpe/9E//IzsbItGQQQmNAyABCpbjYhCSs+2wJXlm16pYTaVNarz//LAhB54qS0iWESHmqrG7hxIgO+P3TzE7nHAJSvWzj5lZj/vO551B8PB8RsZ0Q8vvAdQ2qzZEgAr5lDLhbp3Qvi4h8OuCqqaMCoBKDbLXBHBEJLRjEqCmTMXny5JsmIrXVmDVgAAShRmO9x60oar0h0SP22JgSSPLmb/LyPXKnOFwoPAcA2LlzAfRyIBDwQ4RDoFaH2QgH0wmho7kWnGVjdGy02WzSdP2OgN+vAoiVJJYMSrsSJvMZGzfU7/nXMpw9dAAzZs9BTm7urfPI3Oenwe2qhaaFY0Je7zKqmL4XQu8VER3zP4LzEp1I+GTtOgDA8w8/BE3T8NJ32/Fu1pDhVPBXFUnKMlEazSghFlmGQiWEOYc3HAYXgjf/whpIpUHIp6rd/qGuaV6z3Y6lX2+4dR75+Wg+1icnQwiiUcryHM7IkwIiTGV2GkBw6br1+NusGQgVlSA+NQWDR/+efPHajGcVwZdEm0wDI02qxSrLxMQYJNK0VxIhMDMGi8yIVWbUqsiymdEoXddH+EMhj+fM6b1RCclIjOqM6dOmIvfHH/8tIm0GO2n5aiAo1LXwxaDf9zUB3BACubm5KDt5GnckJ+DktxuR+9myHsww/hpjNsfZFPmq8dcTAgGBKjHYZYXysJF1sCpSXrZmLbjuw4E9PyPnu1y8/MTvsWrJkpuX1rXYtWsXwDmWLJyPbglJqDh/HvWuy3DGdI0J+L33M0UaEZ8YF+O55B7tJJJdZayNiQkEBAQA0fzRhYGQZsDPDQwc1e8gIeSnHTkHma7RtZDVozTk9imOSKQM6o+a4nIsWXd9yd2QyOvPTcO+b3PQPSUNIW8duGTtSqmY6HRanu7dv/uAvncnKql3dseBnaewJ/cYuFdvcnPzzEIAAgCHACQCiVFQJsFsVRGXEIU7ByYi68F0eOsD2PvDKRzdW+gpL6095GvQNgkmb/DVVJRFxifC0DQk3dkfi7M//PeInFyzBos+zoYsK2isqQZTLJ2FCE+J6mSdmj4wMePeB3qT3hkJMNtUQAhoIR2lRdUoOl2BBo8PWkiHpulQVBlWqwKrwwq7wwK70wKTWYbDaUFEpBWKSW52U5M5njovis9UYc+Okyg4WFLgdvnfFbL1C8JDAUMLIz1rKBb+873fRmTNmjXYlP0xhAAs0QnUdeHUKEcEm5c5rNfQEeP7IymtK2RFghC8abuvTEYpQAggSIsrCAAiWq/ULC8hxK8NIgSgBFrQwNmCcmxZuz98ZG/RJ2GDvUmJcAkhMOah0Zi+YOH1iSxYsAAle/aCcwOK2SZ7Llf+OSEl5o0JU4dGDRrWC7KJQXB+I0XeEhCJot7lx+pPfsDOrSdW6jC/yojhlhhB2rDf4c2///1q318dv8kmFUIAztgkqba8cHbfu7q/Nf31cfZ+mcmgFNfI4DZACJgsMtLS41Fb5c4oL6pyqFbHTgpo3upLOFpYdLVrq+N3zpQpYLKC5du+Q2XxsT+m9uk8f9qs0aaEtDgIbtw+Atdy4QL2CDOenjESd2clvRhodP0p/+cdYKoZf/2PP17t18oj+qWLYBLF+n+tHNW5q+2DF+aMdabe2e22Sal9NoDFZkKPxFjpzPEL/SUl8ojP4yo9c/QELjTUtyby2tRnoKgquGAxZgv96MmX7u99z3092wzI2wlCCAilEJzDGW2DJDHbmfyLXQhzbIrqHB16ZfZsbN66tUVa46fPREPNJcDQJ/YflDR0yIg+rU4kIQBu3F7PEAJUXnDh8J6zMAwDEMCQEb2R0qfz0KDXPTDsbcSeLVsBNMfIinfewdJ5c6Ha45yOSHXq78ZkUJNFac7FACEUBXkl+OrTHxAO6reRCcXp4xexfvlu+LwhAIDVbkJaejcrlZAVDrrgjIpuIbJ//wnoQT94ODAgsWdc/7R+3YHmuCAgCPjCyFm9H9UV9SD0hsXALYRAap9u8DUGUVZU2+QiAnRP6ATVxPppak92uaa6hUh0JycMLQgQ0bdrjxibxaq2nLIUuFBUhbLSagwfkwHF3P7t8IqeyS+KRvKrIpKASPTGmyIEomLtsNhNqCxzNSdbICrGAbNZjjUCLtUIh1qIOCIcMIQBAZgpbcqs16yJC0WXYLObkJjWFeCivTVR7/bjXEEZaqsbQJpzraEbcNd5YehXPAwE/WEcP1CMi0U10MLtS1UAYIxCVhj83iCuBK1hGBACukwkzghtITLp+T9AVq2QJHb8/OlKf3WFG4QQcC7ANY46lw+d46NhjzC3W1bUu3344B/r8fbc1TiyrxCgBIQS1F6ux0eLv0FpUU1TCUMJ3LUN+OyDbVj8ly9wLK+4Xc8QEGiagWAgBCpdbUT5hRr4A6Giex5cGrDarACaX1FOHTkBppohqWx34emq7A8XbZjeIynOGgpqRs/0Hvk1VY0OpkiptJ0FhRCw2FSMGj8QdAJFz/TmGCMEFqsZWQ9kQDHTq/VVp26RmDFvAqorPUju1bX9aoE0eTng0xCfGAcQCq/Hh0M/nfMH/UbOsV3PoqS46KqnAQCTs4aCcw5Iktnw+e/lXNxhCOFVrfbdENqr996fMveV+Y9DkgTayyxNRSMA3rogJJRA/EKShJImzXPRbq4ilGLbN4eQ8+U+vPjaONgcJuzIOYqdWwtWhgLKdNVEgsl9emFRdnbLu1ZS5l0o2p8HSmmAKNIOYXAwAkgkDF0XBVUXXUZDvV+KjLa02kFCaUulCwFw/Mowwa+TVCkBaWMMIQSNHj9+3nYCIb+Wt/zdrZqvMax66nxbOWdLiPAF9ZCERdnZrT1yBT/+uAXx/VJxftcJjJzwGJ4akQVuoIsEPeeRKYPvemzqfVDUJsGGwzpOHC5F/r5CcA6k35OAtPQeiIi0AWg7eRJKwHWBy1X1KDlbARCClD7dEBvnhGgeQyhBKKjj6//djS1fHTjFVOuUujpfMRGExdiOu71GBoxwEN1TeuG9r1a3TeSXWLrmc+QsWAg1ImKiKtPsEeP7x46fci8sVhPWr/wJe7YfR3xSHBrcXngbgrDYVDw4cRCGP5QOSSJouZQ07XLhqUp8v/EwzhWUwVvvh9mqQjXLeOyZ4RgyohcIpXDXeLFtw0Fs/mJfaSjIpxGD7DJH26GHDciKBYahIXPIYPx50aJrw+n6ePGxcTACITz5xByyfPlb44QenndHSuyAyFgHKymswtSXRyJzeC+Egwbqahux9/sT2Jl7FI8/MwwjJwwEhAGDN53oBYdLseLdbYiOc2DoyL7olhADm92C7ZsOI2/nKYx+PBOhQBgHfzqLsuKac4aB1/2NtRtjuqeCKRSfbv62XTtvSMTj8WD2E5MgMYaqsgo4IuyxoUBwrGEYszIGJw54450noaisaSpCwA2OVe9/j/27TiL97iRQSuDzhUBAUFJYhYTULpg+92HYnKbmuCLwe0N4+7UvcSq/zEWA81yIrYyxz90nTxV1yhwECoqVO7Zf1052IyJOpxMAMPPRR3DfsCwcO5ZfQyWxgkOqr6ttXH2p3KP2SI1riV1KYbGpqK32Vv+Qc2wDF1wjoCAgEpHExDGPD4qzRVqBK/cbCmhhDWHNABfkbZPZ8nHN4d3eqH6Z6HrfMBih4A1JAO080LWFvLPnsD0vD7lr18MwDDAmlzfWe7ufP1OR4brUSKrL61BefBm7vyvAzi35gXAI/70u7+AbPRQtl2s8N33suG/dZWVJ9e6GgQ6HBQBBXY0XpeeqsXX1fhQcKt1PmfImwGsjklJBJAmZQwdj8fIVv8m+m6oAJw3OBAHAJDkyEAo8QiDuYYx2IQRm3eCVIPIW1WLOpYSEYrt0AQFFeWkhCJW66EFtltUqP2yxqVGccy3gD9f5/dohMPa+4fMXVBwrwMGbsOmmiPzlqadxoegMKJNhhEPQ/ZcgpHhGCKd2S5Lm4+eFrJrAuYG+DzyIxvJyFB8/BKaYYIvvSzyFx2OFoUUIKumcknopMsZDGl38630H8dyj47Bi05bbQwRoSmCznpqMzEfHYfsnyxHw+iCEgKLImPlf87Fq6Uf4aOPGq/3nz5qF03n7wWQZXNOaYoRS6BRgTEGD24WU9P54//Mvb9akDnSgAx3owO3H/wGUgcIFOUeM9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMi0xMFQxNjoxMzozMCswMDowMC3bAQsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDItMTBUMTY6MTM6MzArMDA6MDBchrm3AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAyLTEwVDE2OjEzOjM2KzAwOjAwaEOtUgAAAABJRU5ErkJggg==",Ei=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,Io=""+new URL("galaxy-ChI-pR4w.gif",import.meta.url).href,zo=""+new URL("silk-DaWETVYo.gif",import.meta.url).href,No=""+new URL("ballpit-DiGrqYC4.gif",import.meta.url).href,Uo=""+new URL("floatinglines-BnKOb4-3.gif",import.meta.url).href,Oo=""+new URL("lightpillar-B2qC6hEB.gif",import.meta.url).href,Bo=""+new URL("pixel-snow-XBi11QsW.gif",import.meta.url).href,qo=""+new URL("hyperspeed-bdn_De3N.gif",import.meta.url).href,vt={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico atemporal.",price:0,type:"background",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:50,type:"background",previewColor:"#ff99cc",image:zo},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:100,type:"background",previewColor:"#00ffff",image:Oo},{id:"pixelsnow",name:"Pixel Snow",description:"Nevada suave y distante.",price:150,type:"background",previewColor:"#ffffff",image:Bo},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:200,type:"background",previewColor:"#bd71ff",image:Uo},{id:"galaxy",name:"Galaxy",description:"Un viaje a las estrellas.",price:300,type:"background",previewColor:"#000",image:Io},{id:"hyperspeed",name:"Hyperspeed",description:"Velocidad luz y distorsión.",price:500,type:"background",previewColor:"#d856bf",image:qo},{id:"ballpit",name:"Ball Pit",description:"Física interactiva y relajante.",price:800,type:"background",previewColor:"#29b1ff",image:No}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:0,type:"cursor",previewColor:"transparent",icon:e.jsx(pi,{})},...Object.entries(mt).map(([n,t])=>({id:n,name:t.name,description:t.desc,price:t.price,type:"cursor",previewColor:"transparent",icon:t.icon})).sort((n,t)=>n.price-t.price)],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:0,type:"trail",previewColor:"transparent",icon:e.jsx(nn,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:100,type:"trail",previewColor:"#ffadad",icon:e.jsx("img",{src:Ri,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:100,type:"trail",previewColor:"#a89c8d",icon:e.jsx("img",{src:ji,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:100,type:"trail",previewColor:"#ffecb6",icon:e.jsx("img",{src:Ai,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:100,type:"trail",previewColor:"#ebe371",icon:e.jsx("img",{src:Li,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:100,type:"trail",previewColor:"#e3e4b2",icon:e.jsx("img",{src:Pi,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:100,type:"trail",previewColor:"#a3a3a3",icon:e.jsx("img",{src:Ei,alt:"Skeleton",style:{width:"40px"}})}],skins:[{id:"dase",name:"Dase Original",description:"La moneda original.",price:0,type:"skin",previewColor:"#ffd700",icon:e.jsx("img",{src:Si,alt:"Dase",style:{width:"60px",height:"60px",objectFit:"contain"}})},{id:"angel",name:"Angel",description:"Bendecida por los dioses.",price:0,type:"skin",previewColor:"#e0ffff",icon:e.jsx("img",{src:wi,alt:"Angel",style:{width:"60px",height:"60px",objectFit:"contain"}})},{id:"rachel",name:"Rachel",description:"Estilo inconfundible.",price:0,type:"skin",previewColor:"#ffc0cb",icon:e.jsx("img",{src:Ci,alt:"Rachel",style:{width:"60px",height:"60px",objectFit:"contain"}})}]},Go=[{id:"backgrounds",label:"Fondos",icon:e.jsx(on,{})},{id:"cursors",label:"Cursores",icon:e.jsx(pi,{})},{id:"trails",label:"Mascotas",icon:e.jsx(sn,{})},{id:"skins",label:"Monedas",icon:e.jsx(hi,{})}],Wo=()=>{const{activeShop:n,openShop:t,closeShop:i,activeBackground:r,setBackground:u,activeCursor:h,setCursor:b,activeTrail:w,setTrail:p,coins:j,buyItem:R,ownedItems:P,activeCoinSkin:S,setCoinSkin:y,achievements:F,unlockAchievement:N}=Ue(),[k,I]=a.useState(n),[B,U]=a.useState([]),L=a.useRef();a.useEffect(()=>{n&&I(n)},[n]),a.useEffect(()=>{P&&!F.includes("collector")&&Object.values(vt).flat().filter(A=>A.type!=="skin").every(A=>P.includes(A.id))&&N("collector")},[P,F,N]);const o=F&&F.includes("collector"),M=a.useCallback(()=>{o&&(U(x=>x.map(O=>({...O,x:O.x+O.vx,y:O.y+O.vy,life:O.life-.02,size:O.size*.95})).filter(O=>O.life>0)),L.current=requestAnimationFrame(M))},[o]);a.useEffect(()=>(o&&n&&(L.current=requestAnimationFrame(M)),()=>cancelAnimationFrame(L.current)),[o,n,M]);const Q=x=>{if(!o)return;const O=x.currentTarget.getBoundingClientRect(),A=x.clientX-O.left,c=x.clientY-O.top;if(Math.random()>.5)return;const l={id:Math.random(),x:A,y:c,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5+.5,life:1,size:Math.random()*3+2};U(f=>[...f,l])},V=vt[k]||[],_=x=>P.includes(x.id)||x.price===0,K=x=>{_(x)?(n==="backgrounds"&&u(x.id),n==="cursors"&&b(x.id),n==="trails"&&p(x.id),n==="skins"&&y(x.id)):j>=x.price&&(R(x),n==="backgrounds"&&u(x.id),n==="cursors"&&b(x.id),n==="trails"&&p(x.id),n==="skins"&&y(x.id))},z=x=>n==="backgrounds"?r===x:n==="cursors"?h===x:n==="trails"?w===x:n==="skins"?S===x:!1;return e.jsx(Pe,{children:n&&e.jsxs(ce.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:i,style:{position:"absolute",inset:0,pointerEvents:"auto"}}),e.jsxs(ce.div,{className:`shop-window ${o?"gold-theme":""}`,onMouseMove:Q,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(ce.div,{className:"gold-bg-layer",initial:{opacity:0},animate:{opacity:o?1:0},transition:{duration:.8}}),B.map(x=>e.jsx("div",{className:"gold-particle",style:{left:x.x,top:x.y,width:x.size,height:x.size,opacity:x.life}},x.id)),e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:Go.map(x=>e.jsxs("button",{onClick:()=>t(x.id),className:`tab-btn ${n===x.id?"active":""}`,children:[x.icon,e.jsx("span",{children:x.label}),n===x.id&&e.jsx(ce.div,{layoutId:"activeTab",className:"active-line"})]},x.id))}),e.jsxs("div",{className:"coin-display",children:[j," 🪙"]}),e.jsx("button",{onClick:i,className:"close-btn",children:e.jsx(pt,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",k==="backgrounds"?"Fondos":k==="cursors"?"Cursores":k==="trails"?"Mascotas":"Monedas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(Pe,{mode:"wait",children:e.jsx(ce.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:V.map(x=>e.jsxs("div",{className:`shop-item ${z(x.id)?"equipped":""}`,onClick:()=>K(x),children:[e.jsxs("div",{className:`item-preview ${x.type}`,style:{background:x.previewColor},children:[x.image&&e.jsx("img",{src:x.image,alt:x.name,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),x.icon&&e.jsx("div",{className:"preview-icon",style:{zIndex:1},children:x.icon}),z(x.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(gi,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:x.name}),e.jsx("p",{children:x.description}),_(x)?e.jsx("span",{className:"price-tag",style:{color:"#00e676",background:"rgba(0, 230, 118, 0.15)"},children:z(x.id)?"Equipado":"En propiedad"}):e.jsxs("span",{className:"price-tag",children:[x.price," Monedas"]})]})]},x.id))},k)})})]})]})})},ke=80,Vt=Object.assign({"../../assets/coin/angel/angel.mp3":vo,"../../assets/coin/angel/angel.png":xo,"../../assets/coin/angel/angelshiny.png":bo,"../../assets/coin/dase/dase.mp3":So,"../../assets/coin/dase/dase.png":Co,"../../assets/coin/dase/daseshiny.png":jo,"../../assets/coin/rachel/rachel.png":Ao,"../../assets/coin/rachel/rachelshiny.png":Po}),We={};Object.keys(Vt).forEach(n=>{const t=n.split("/"),i=t[t.length-2],r=t[t.length-1].toLowerCase();We[i]||(We[i]={normal:null,shiny:null,sound:null});const u=Vt[n].default;r.includes("shiny")?We[i].shiny=u:r.endsWith("mp3")||r.endsWith("wav")?We[i].sound=u:We[i].normal=u});Object.values(We).forEach(n=>{!n.shiny&&n.normal&&(n.shiny=n.normal)});function Yo(){const{addCoins:n,activeCoinSkin:t,gameVolume:i,unlockAchievement:r,coins:u,achievements:h,ownedItems:b,activeCursor:w}=Ue(),[p,j]=a.useState([]),[R,P]=a.useState([]),[S,y]=a.useState(1),F=a.useRef(),N=a.useRef(null),k=a.useRef(!1),I=a.useRef(0),B=a.useRef(0);a.useEffect(()=>(k.current=!0,()=>{k.current=!1}),[]);const U=We[t]||We.dase||{normal:"",shiny:"",sound:null};a.useEffect(()=>{U&&U.sound&&(N.current=new Audio(U.sound),N.current.volume=i)},[U,i]),a.useEffect(()=>{const l=window.innerWidth,f=window.innerHeight,m=[];for(let C=0;C<5;C++)m.push({id:`normal-${C}`,type:"normal",x:Math.random()*(l-ke),y:Math.random()*(f-ke),vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6,img:U.normal,value:1});m.push({id:"shiny-1",type:"shiny",x:Math.random()*(l-ke),y:Math.random()*(f-ke),vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,img:U.shiny,value:5}),j(m)},[t,U]);const L=a.useCallback(()=>{I.current>0&&Date.now()>I.current&&(y(l=>l>1?1:l),I.current=0),j(l=>l.map(f=>{let{x:m,y:C,vx:q,vy:Y}=f;return m+=q,C+=Y,(m<=0||m>=window.innerWidth-ke)&&(q=-q,m=Math.max(0,Math.min(m,window.innerWidth-ke))),(C<=0||C>=window.innerHeight-ke)&&(Y=-Y,C=Math.max(0,Math.min(C,window.innerHeight-ke))),{...f,x:m,y:C,vx:q,vy:Y}})),P(l=>l.length===0?l:l.map(f=>({...f,x:f.x+f.vx,y:f.y+f.vy,vy:f.vy+.5,life:f.life-.03})).filter(f=>f.life>0)),F.current=requestAnimationFrame(L)},[]);a.useEffect(()=>(F.current=requestAnimationFrame(L),()=>cancelAnimationFrame(F.current)),[L]);const o=l=>{let f=S+1;f>20&&(f=20),y(f);const m=Math.max(500,2500-f*100);B.current=m,I.current=Date.now()+m;const C=l.value*f;n(C),r("baby_steps"),f>=5&&r("on_fire"),f>=10&&r("god_mode"),l.type==="shiny"&&r("shiny_lover"),Math.sqrt(l.vx*l.vx+l.vy*l.vy)>15&&r("sniper");const Y=u+C;if(Y>=500&&r("piggy_bank"),Y>=1e3&&r("stonks"),Y>=5e3&&r("crypto_king"),Object.values(vt).flat().filter(G=>G.type!=="skin").every(G=>b.includes(G.id))&&r("collector"),h){const G=Object.keys(ot);G.length,G.filter(D=>D!=="prestige").every(D=>h.includes(D))&&r("prestige")}if(l.type==="shiny"&&N.current){const G=N.current.cloneNode();G.volume=i,G.play().catch(Z=>console.log("Audio error:",Z))}const re=[],ie=l.type==="shiny"?"#ffd700":"#ffffff";for(let G=0;G<12;G++)re.push({id:`${Date.now()}-${G}-${Math.random()}`,x:l.x+ke/2,y:l.y+ke/2,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,life:1,color:ie});P(G=>[...G,...re]),j(G=>G.filter(Z=>Z.id!==l.id)),setTimeout(()=>{k.current&&j(G=>{const Z=window.innerWidth,ne=window.innerHeight,D=1+Math.min(f,10)*.15,ue={...l,id:`${l.type}-${Date.now()}-${Math.random()}`,x:Math.random()*(Z-ke),y:Math.random()*(ne-ke),vx:(Math.random()-.5)*(l.type==="shiny"?12:8)*D,vy:(Math.random()-.5)*(l.type==="shiny"?12:8)*D};return[...G,ue]})},2e3)},M=Date.now(),Q=Math.max(0,I.current-M),V=S>1&&B.current>0?Q/B.current:0,_=60,K=8,z=_-K*2,x=z*2*Math.PI,O=x-V*x,c=`hsl(${Math.min(120,Math.max(0,V*120))}, 100%, 50%)`;return e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:30,pointerEvents:"auto",overflow:"hidden"},children:[e.jsxs("div",{style:{position:"absolute",top:"110px",left:"30px",zIndex:100,display:"flex",alignItems:"center",gap:"10px",background:"rgba(0,0,0,0.5)",padding:"10px 20px",borderRadius:"30px",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(5px)",color:"#ffd700",fontFamily:"var(--font-main)",fontWeight:"bold",fontSize:"1.2rem",pointerEvents:"none"},children:[e.jsx("img",{src:U.normal,alt:"coin",style:{width:"24px",height:"24px"}}),e.jsx("span",{children:u})]}),e.jsx("div",{style:{position:"absolute",top:"40px",right:"40px",pointerEvents:"none",zIndex:100,display:"flex",justifyContent:"center",alignItems:"center",width:"140px",height:"140px"},children:S>1&&e.jsxs(e.Fragment,{children:[e.jsxs("svg",{height:_*2,width:_*2,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%) rotate(-90deg)"},children:[e.jsx("circle",{stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:K,fill:"transparent",r:z,cx:_,cy:_}),e.jsx("circle",{stroke:c,strokeWidth:K,strokeDasharray:x+" "+x,style:{strokeDashoffset:O,transition:"stroke-dashoffset 0.1s linear"},strokeLinecap:"round",fill:"transparent",r:z,cx:_,cy:_})]}),e.jsxs("div",{style:{fontFamily:"var(--font-main)",fontSize:"3rem",fontWeight:"900",color:"#f700ff",textShadow:"0 0 20px rgba(247, 0, 255, 0.8)",transform:`scale(${1+Math.min(S,10)*.1})`,transition:"transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},children:["x",S]})]})}),R.map(l=>e.jsx("div",{style:{position:"absolute",left:l.x,top:l.y,width:"8px",height:"8px",backgroundColor:l.color,borderRadius:"50%",opacity:l.life,pointerEvents:"none",transform:"translate(-50%, -50%)",boxShadow:`0 0 8px ${l.color}`}},l.id)),p.map(l=>{const m=w==="cursor_target"?10:0;return e.jsx("div",{className:"coin-entity",onMouseDown:C=>{C.stopPropagation(),o(l)},style:{position:"absolute",transform:`translate3d(${l.x-m}px, ${l.y-m}px, 0)`,width:ke+m*2,height:ke+m*2,cursor:"pointer",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",zIndex:20},children:e.jsx("img",{src:l.img,alt:"coin",style:{width:ke,height:ke,objectFit:"contain",filter:l.type==="shiny"?"drop-shadow(0 0 15px gold) brightness(1.2)":"drop-shadow(0 0 5px rgba(255,255,255,0.3))",pointerEvents:"none"},draggable:!1})},l.id)})]})}const Xo=Object.assign({"../../assets/img/photos/bridge.jpeg":Qn,"../../assets/img/photos/first.jpg":eo,"../../assets/img/photos/graduated.jpeg":io,"../../assets/img/photos/halloween.jpg":oo,"../../assets/img/photos/miestrella.jpg":ro,"../../assets/img/photos/murder.jpeg":lo,"../../assets/img/photos/rock.jpeg":uo,"../../assets/img/photos/sleepy.jpg":mo,"../../assets/img/photos/sunshine.jpeg":po}),Rt=Object.values(Xo).map(n=>n.default),Ho=()=>{const[n,t]=a.useState(null),{isGameActive:i}=Ue();let r=[...Rt];if(r.length>0)for(;r.length<18;)r=[...r,...Rt];const u=[...r,...r];return e.jsx(Pe,{mode:"wait",children:i?e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{width:"100%",height:"100%"},children:e.jsx(Yo,{})},"game"):e.jsxs(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"main-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),Rt.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:u.map((h,b)=>e.jsx("img",{src:h,alt:`Memory ${b}`,className:"gallery-item",onClick:()=>t(h)},b))})}),e.jsx(Pe,{children:n&&e.jsx(ce.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(ce.img,{src:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:h=>h.stopPropagation()})})})]},"content")})},Vo=({color1:n="#b117f8",color2:t="#2c0b2e",speed:i=20})=>e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:`linear-gradient(to bottom, ${n}, ${t})`,animation:`spinGradient ${i}s linear infinite`}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),Jo=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,Ko=`
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
`,$o=({focal:n=[.5,.5],rotation:t=[1,0],starSpeed:i=0,density:r=1.5,hueShift:u=300,disableAnimation:h=!1,speed:b=.5,glowIntensity:w=.5,saturation:p=.8,twinkleIntensity:j=.5,rotationSpeed:R=.05,transparent:P=!0,colorCycleSpeed:S=10,rainbow:y=!1,warp:F=!1,...N})=>{const k=a.useRef(null),I=a.useRef(u),B=a.useRef(null),U=a.useRef({starSpeed:i,disableAnimation:h,rainbow:y,colorCycleSpeed:S,warp:F,hueShift:u});return a.useEffect(()=>{U.current={starSpeed:i,disableAnimation:h,rainbow:y,colorCycleSpeed:S,warp:F,hueShift:u}},[i,h,y,S,F,u]),a.useEffect(()=>{if(!k.current)return;const L=k.current;L.innerHTML="";const o=new Gn({alpha:P,premultipliedAlpha:!1,dpr:1}),M=o.gl;P?(M.enable(M.BLEND),M.blendFunc(M.SRC_ALPHA,M.ONE_MINUS_SRC_ALPHA),M.clearColor(0,0,0,0)):M.clearColor(0,0,0,1);let Q;function V(){o.setSize(L.offsetWidth*1,L.offsetHeight*1),B.current&&(B.current.uniforms.uResolution.value=new Xt(M.canvas.width,M.canvas.height,M.canvas.width/M.canvas.height))}window.addEventListener("resize",V,!1),V();const _=new Wn(M);Q=new Yn(M,{vertex:Jo,fragment:Ko,uniforms:{uTime:{value:0},uResolution:{value:new Xt(M.canvas.width,M.canvas.height,M.canvas.width/M.canvas.height)},uFocal:{value:new Float32Array(n)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:i},uDensity:{value:r},uHueShift:{value:u},uSpeed:{value:b},uGlowIntensity:{value:w},uSaturation:{value:p},uTwinkleIntensity:{value:j},uRotationSpeed:{value:R},uTransparent:{value:P}}}),B.current=Q;const K=new Xn(M,{geometry:_,program:Q});let z,x=0;const A=1e3/30;function c(l){if(z=requestAnimationFrame(c),!k.current||!B.current)return;const f=l-x;if(f<A)return;x=l-f%A;const{starSpeed:m,disableAnimation:C,rainbow:q,colorCycleSpeed:Y,warp:se,hueShift:X}=U.current;if(!C){Q.uniforms.uTime.value=l*.001;const re=se?m*10:m;Q.uniforms.uStarSpeed.value=l*.001*re/10,q?(I.current+=Y*.05,Q.uniforms.uHueShift.value=I.current%360):Q.uniforms.uHueShift.value=X}o.render({scene:K})}return z=requestAnimationFrame(c),L.appendChild(M.canvas),M.canvas.style.width="100%",M.canvas.style.height="100%",M.canvas.style.display="block",M.canvas.style.willChange="transform",()=>{cancelAnimationFrame(z),window.removeEventListener("resize",V),L&&M.canvas&&L.contains(M.canvas)&&L.removeChild(M.canvas),M.getExtension("WEBGL_lose_context")?.loseContext(),B.current=null}},[P]),a.useEffect(()=>{if(!B.current)return;const L=B.current.uniforms;L.uFocal.value=new Float32Array(n),L.uRotation.value=new Float32Array(t),L.uDensity.value=r,L.uSpeed.value=b,L.uGlowIntensity.value=w,L.uSaturation.value=p,L.uTwinkleIntensity.value=j,L.uRotationSpeed.value=R},[n,t,r,b,w,p,j,R]),e.jsx("div",{ref:k,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},...N})},Qo=ht.memo($o);class Zo{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#i;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#C;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#o=!1;#n=!1;isDisposed=!1;#s;#r;#a;#l=new Tt;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#p(),this.#g(),this.#v(),this.resize(),this.#x()}#p(){this.camera=new vi,this.cameraFov=this.camera.fov}#g(){this.scene=new st}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new rt(t),this.renderer.outputColorSpace=un}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#r=new ResizeObserver(this.#c.bind(this)),this.#r.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#r?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#o=t[0].isIntersecting,this.#o?this.#h():this.#u()}#f(){this.#o&&(document.hidden?this.#u():this.#h())}#c(){this.#a&&clearTimeout(this.#a),this.#a=setTimeout(this.resize.bind(this),100)}resize(){let t,i;this.#e.size instanceof Object?(t=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,i=window.innerHeight),this.size.width=t,this.size.height=i,this.size.ratio=t/i,this.#w(),this.#S(),this.onAfterResize(this.size)}#w(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#m(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#m(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#m(t){const i=Math.tan(Et.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*Et.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#S(){this.renderer.setSize(this.size.width,this.size.height),this.#i?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(t),this.size.pixelRatio=t}get postprocessing(){return this.#i}set postprocessing(t){this.#i=t,this.render=t.render.bind(t)}#h(){if(this.#n)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#n=!0,this.#l.start(),t()}#u(){this.#n&&(cancelAnimationFrame(this.#d),this.#n=!1,this.#l.stop())}#C(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(i=>{const r=t.material[i];r!==null&&typeof r=="object"&&typeof r.dispose=="function"&&r.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#i?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const qe=new Map,Ne=new Ce;let jt=!1;function es(n){const t={position:new Ce,nPosition:new Ce,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...n};return(function(i,r){qe.has(i)||(qe.set(i,r),jt||(document.body.addEventListener("pointermove",Jt),document.body.addEventListener("pointerleave",$t),document.body.addEventListener("click",Kt),document.body.addEventListener("touchstart",Qt,{passive:!1}),document.body.addEventListener("touchmove",Zt,{passive:!1}),document.body.addEventListener("touchend",lt,{passive:!1}),document.body.addEventListener("touchcancel",lt,{passive:!1}),jt=!0))})(n.domElement,t),t.dispose=()=>{const i=n.domElement;qe.delete(i),qe.size===0&&(document.body.removeEventListener("pointermove",Jt),document.body.removeEventListener("pointerleave",$t),document.body.removeEventListener("click",Kt),document.body.removeEventListener("touchstart",Qt),document.body.removeEventListener("touchmove",Zt),document.body.removeEventListener("touchend",lt),document.body.removeEventListener("touchcancel",lt),jt=!1)},t}function Jt(n){Ne.x=n.clientX,Ne.y=n.clientY,ts()}function ts(){for(const[n,t]of qe){const i=n.getBoundingClientRect();yt(i)?(xt(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function Kt(n){Ne.x=n.clientX,Ne.y=n.clientY;for(const[t,i]of qe){const r=t.getBoundingClientRect();xt(i,r),yt(r)&&i.onClick(i)}}function $t(){for(const n of qe.values())n.hover&&(n.hover=!1,n.onLeave(n))}function Qt(n){if(n.touches.length>0){n.preventDefault(),Ne.x=n.touches[0].clientX,Ne.y=n.touches[0].clientY;for(const[t,i]of qe){const r=t.getBoundingClientRect();yt(r)&&(i.touching=!0,xt(i,r),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function Zt(n){if(n.touches.length>0){n.preventDefault(),Ne.x=n.touches[0].clientX,Ne.y=n.touches[0].clientY;for(const[t,i]of qe){const r=t.getBoundingClientRect();xt(i,r),yt(r)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function lt(){for(const[,n]of qe)n.touching&&(n.touching=!1,n.hover&&(n.hover=!1,n.onLeave(n)))}function xt(n,t){const{position:i,nPosition:r}=n;i.x=Ne.x-t.left,i.y=Ne.y-t.top,r.x=i.x/t.width*2-1,r.y=-i.y/t.height*2+1}function yt(n){const{x:t,y:i}=Ne,{left:r,top:u,width:h,height:b}=n;return t>=r&&t<=r+h&&i>=u&&i<=u+b}const{randFloat:is,randFloatSpread:At}=Et,Lt=new oe,we=new oe,ct=new oe,ns=new oe,Se=new oe,ut=new oe,Je=new oe,Ge=new oe,dt=new oe,ei=new oe;class os{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new oe,this.#e(),this.setSizes()}#e(){const{config:t,positionData:i}=this;this.center.toArray(i,0);for(let r=1;r<t.count;r++){const u=3*r;i[u]=At(2*t.maxX),i[u+1]=At(2*t.maxY),i[u+2]=At(2*t.maxZ)}}setSizes(){const{config:t,sizeData:i}=this;i[0]=t.size0;for(let r=1;r<t.count;r++)i[r]=is(t.minSize,t.maxSize)}update(t){const{config:i,center:r,positionData:u,sizeData:h,velocityData:b}=this;let w=0;i.controlSphere0&&(w=1,Lt.fromArray(u,0),Lt.lerp(r,.1).toArray(u,0),ns.set(0,0,0).toArray(b,0));for(let p=w;p<i.count;p++){const j=3*p;we.fromArray(u,j),Se.fromArray(b,j),Se.y-=t.delta*i.gravity*h[p],Se.multiplyScalar(i.friction),Se.clampLength(0,i.maxVelocity),we.add(Se),we.toArray(u,j),Se.toArray(b,j)}for(let p=w;p<i.count;p++){const j=3*p;we.fromArray(u,j),Se.fromArray(b,j);const R=h[p];for(let S=p+1;S<i.count;S++){const y=3*S;ct.fromArray(u,y),ut.fromArray(b,y);const F=h[S];Je.copy(ct).sub(we);const N=Je.length(),k=R+F;if(N<k){const I=k-N;Ge.copy(Je).normalize().multiplyScalar(.5*I),dt.copy(Ge).multiplyScalar(Math.max(Se.length(),1)),ei.copy(Ge).multiplyScalar(Math.max(ut.length(),1)),we.sub(Ge),Se.sub(dt),we.toArray(u,j),Se.toArray(b,j),ct.add(Ge),ut.add(ei),ct.toArray(u,y),ut.toArray(b,y)}}if(i.controlSphere0){Je.copy(Lt).sub(we);const S=Je.length(),y=R+h[0];if(S<y){const F=y-S;Ge.copy(Je.normalize()).multiplyScalar(F),dt.copy(Ge).multiplyScalar(Math.max(Se.length(),1)),we.sub(Ge),Se.sub(dt)}}Math.abs(we.x)+R>i.maxX&&(we.x=Math.sign(we.x)*(i.maxX-R),Se.x=-Se.x*i.wallBounce),i.gravity===0?Math.abs(we.y)+R>i.maxY&&(we.y=Math.sign(we.y)*(i.maxY-R),Se.y=-Se.y*i.wallBounce):we.y-R<-i.maxY&&(we.y=-i.maxY+R,Se.y=-Se.y*i.wallBounce);const P=Math.max(i.maxZ,i.maxSize);Math.abs(we.z)+R>P&&(we.z=Math.sign(we.z)*(i.maxZ-R),Se.z=-Se.z*i.wallBounce),we.toArray(u,j),Se.toArray(b,j)}}explode(t,i=2){const{positionData:r,velocityData:u,config:h}=this;for(let b=0;b<h.count;b++){const w=3*b,p=r[w]-t.x,j=r[w+1]-t.y,R=r[w+2]-t.z,P=p*p+j*j+R*R;if(P<60){const S=Math.sqrt(P)+.01,y=i*50/(S+1),F=(Math.random()-.5)*1.5,N=(Math.random()-.5)*1.5,k=(Math.random()-.5)*1.5;u[w]+=(p/S+F)*y,u[w+1]+=(j/S+N)*y,u[w+2]+=(R/S+k)*y}}}}class ss extends vn{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
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
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",r),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const rs={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0,enableExplosion:!1,rainbow:!1},Ke=new rn;class as extends dn{constructor(t,i={}){const r={...rs,...i},u=new fn,h=new mn(t,.04).fromScene(u).texture,b=new hn,w=new ss({envMap:h,...r.materialParams});w.envMapRotation.x=-Math.PI/2,super(b,w,r.count),this.config=r,this.physics=new os(r),this.#e(),this.setColors(r.colors),this.rainbowHue=0}#e(){this.ambientLight=new pn(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new gn(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(r){let u,h;function b(w){u=w,h=[],u.forEach(p=>{h.push(new _e(p))})}return b(r),{setColors:b,getColorAt:function(w,p=new _e){const j=Math.max(0,Math.min(1,w))*(u.length-1),R=Math.floor(j),P=h[R];if(R>=u.length-1)return P.clone();const S=j-R,y=h[R+1];return p.r=P.r+S*(y.r-P.r),p.g=P.g+S*(y.g-P.g),p.b=P.b+S*(y.b-P.b),p}}})(t);for(let r=0;r<this.count;r++)this.setColorAt(r,i.getColorAt(r/this.count)),r===0&&this.light.color.copy(i.getColorAt(r/this.count));this.instanceColor.needsUpdate=!0}}update(t){if(this.physics.update(t),this.config.rainbow){this.rainbowHue+=t.delta*.2,this.light.color.setHSL(this.rainbowHue%1,1,.5);for(let i=0;i<this.count;i++){const r=(this.rainbowHue+i*.05)%1,u=new _e().setHSL(r,.9,.6);this.setColorAt(i,u)}this.instanceColor.needsUpdate=!0}for(let i=0;i<this.count;i++)Ke.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Ke.scale.setScalar(0):Ke.scale.setScalar(this.physics.sizeData[i]),Ke.updateMatrix(),this.setMatrixAt(i,Ke.matrix),i===0&&this.light.position.copy(Ke.position);this.instanceMatrix.needsUpdate=!0}}function ls(n,t={}){const i=new Zo({canvas:n,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let r;i.renderer.toneMapping=an,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),j(t);const u=new ln,h=new cn(new oe(0,0,1),0),b=new oe;let w=!1;n.style.touchAction="none",n.style.userSelect="none",n.style.webkitUserSelect="none";const p=es({domElement:n,onMove(){u.setFromCamera(p.nPosition,i.camera),i.camera.getWorldDirection(h.normal),u.ray.intersectPlane(h,b),r.physics.center.copy(b),r.config.controlSphere0=!0},onClick(){r&&r.config.enableExplosion&&r.physics.explode(r.physics.center)},onLeave(){r.config.controlSphere0=!1}});function j(R){r&&(i.clear(),i.scene.remove(r)),r=new as(i.renderer,R),i.scene.add(r)}return i.onBeforeRender=R=>{w||r.update(R)},i.onAfterResize=R=>{r.config.maxX=R.wWidth/2,r.config.maxY=R.wHeight/2},{three:i,get spheres(){return r},setCount(R){j({...r.config,count:R})},togglePause(){w=!w},dispose(){p.dispose(),i.dispose()}}}const cs=({className:n="",followCursor:t=!0,count:i=100,gravity:r=.5,friction:u=.9975,wallBounce:h=.95,colors:b=[0,0,0],enableExplosion:w=!1,rainbow:p=!1,...j})=>{const R=a.useRef(null),P=a.useRef(null);return a.useEffect(()=>{const S=R.current;if(S)return P.current=ls(S,{followCursor:t,count:i,gravity:r,friction:u,wallBounce:h,colors:b,enableExplosion:w,rainbow:p,...j}),()=>{P.current&&P.current.dispose()}},[]),a.useEffect(()=>{const S=P.current;if(!S||!S.spheres)return;const y=S.spheres.config;y.gravity=r,y.friction=u,y.wallBounce=h,y.followCursor=t,y.enableExplosion=w,y.rainbow=p,S.spheres.setColors(b)},[r,u,h,t,b,w,p]),a.useEffect(()=>{const S=P.current;S&&S.setCount(i)},[i]),e.jsx("canvas",{className:n,ref:R,style:{width:"100%",height:"100%"}})},us=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,ds=`
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
`,ft=8;function ti(n){let t=n.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,r=255,u=255;return t.length===3?(i=parseInt(t[0]+t[0],16),r=parseInt(t[1]+t[1],16),u=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),u=parseInt(t.slice(4,6),16)),new oe(i/255,r/255,u/255)}function fs({linesGradient:n,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:r=[5],topWavePosition:u,middleWavePosition:h,bottomWavePosition:b={x:2,y:-.7,rotate:-1},animationSpeed:w=1,interactive:p=!1,bendRadius:j=5,bendStrength:R=-.5,mouseDamping:P=.05,mixBlendMode:S="screen",amplitude:y=1,rainbow:F=!1}){const N=a.useRef(null),k=a.useRef(null),I=a.useRef(null),B=a.useRef(new Ce(-1e3,-1e3)),U=a.useRef(new Ce(-1e3,-1e3)),L=a.useRef(0),o=a.useRef(0),M=a.useRef(F),Q=a.useRef(p);a.useEffect(()=>{Q.current=p},[p]),a.useEffect(()=>{M.current=F},[F]);const V=l=>{if(typeof i=="number")return i;if(!t.includes(l))return 0;const f=t.indexOf(l);return i[f]??6},_=l=>{if(typeof r=="number")return r;if(!t.includes(l))return .1;const f=t.indexOf(l);return r[f]??.1},K=t.includes("top")?V("top"):0,z=t.includes("middle")?V("middle"):0,x=t.includes("bottom")?V("bottom"):0,O=t.includes("top")?_("top")*.01:.01,A=t.includes("middle")?_("middle")*.01:.01,c=t.includes("bottom")?_("bottom")*.01:.01;return a.useEffect(()=>{if(I.current&&n&&n.length>0&&!F){const l=n.slice(0,ft);I.current.uniforms.lineGradientCount.value=l.length,l.forEach((f,m)=>{const C=ti(f);I.current.uniforms.lineGradient.value[m].set(C.x,C.y,C.z)})}},[n,F]),a.useEffect(()=>{if(!I.current)return;const l=I.current.uniforms;l.animationSpeed.value=w,l.amplitude.value=y,l.bendRadius.value=j,l.bendStrength.value=R,l.interactive.value=p,l.enableTop.value=t.includes("top"),l.enableMiddle.value=t.includes("middle"),l.enableBottom.value=t.includes("bottom");const f=C=>{if(typeof i=="number")return i;if(!t.includes(C))return 0;const q=t.indexOf(C);return i[q]??6},m=C=>{if(typeof r=="number")return r;if(!t.includes(C))return .1;const q=t.indexOf(C);return r[q]??.1};l.topLineCount.value=t.includes("top")?f("top"):0,l.middleLineCount.value=t.includes("middle")?f("middle"):0,l.bottomLineCount.value=t.includes("bottom")?f("bottom"):0,l.topLineDistance.value=t.includes("top")?m("top")*.01:.01,l.middleLineDistance.value=t.includes("middle")?m("middle")*.01:.01,l.bottomLineDistance.value=t.includes("bottom")?m("bottom")*.01:.01},[w,y,j,R,p,t,i,r]),a.useEffect(()=>{if(!N.current)return;const l=new st,f=new _t(-1,1,1,-1,0,1);f.position.z=1;const m=new rt({antialias:!0,alpha:!1});m.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),m.domElement.style.width="100%",m.domElement.style.height="100%",N.current.appendChild(m.domElement),k.current=m;const C={iTime:{value:0},iResolution:{value:new oe(1,1,1)},animationSpeed:{value:w},amplitude:{value:y},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:K},middleLineCount:{value:z},bottomLineCount:{value:x},topLineDistance:{value:O},middleLineDistance:{value:A},bottomLineDistance:{value:c},topWavePosition:{value:new oe(u?.x??10,u?.y??.5,u?.rotate??-.4)},middleWavePosition:{value:new oe(h?.x??5,h?.y??0,h?.rotate??.2)},bottomWavePosition:{value:new oe(b?.x??2,b?.y??-.7,b?.rotate??.4)},iMouse:{value:new Ce(-1e3,-1e3)},interactive:{value:p},bendRadius:{value:j},bendStrength:{value:R},bendInfluence:{value:0},lineGradient:{value:Array.from({length:ft},()=>new oe(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const D=n.slice(0,ft);C.lineGradientCount.value=D.length,D.forEach((ue,te)=>{const de=ti(ue);C.lineGradient.value[te].set(de.x,de.y,de.z)})}const q=new $e({uniforms:C,vertexShader:us,fragmentShader:ds});I.current=q;const Y=new it(2,2),se=new Qe(Y,q);l.add(se);const X=new Tt,re=()=>{const D=N.current,ue=D.clientWidth||1,te=D.clientHeight||1;m.setSize(ue,te,!1);const de=m.domElement.width,ge=m.domElement.height;C.iResolution.value.set(de,ge,1)};re();const ie=typeof ResizeObserver<"u"?new ResizeObserver(re):null;ie&&N.current&&ie.observe(N.current);const G=D=>{if(!Q.current)return;const ue=m.domElement.getBoundingClientRect(),te=D.clientX-ue.left,de=D.clientY-ue.top,ge=m.getPixelRatio();B.current.set(te*ge,(ue.height-de)*ge),L.current=1};window.addEventListener("pointermove",G);let Z=0;const ne=()=>{if(C.iTime.value=X.getElapsedTime(),Q.current&&(U.current.lerp(B.current,P),C.iMouse.value.copy(U.current),o.current+=(L.current-o.current)*P,C.bendInfluence.value=o.current),M.current){const D=X.getElapsedTime();C.lineGradientCount.value<3&&(C.lineGradientCount.value=3);for(let ue=0;ue<ft;ue++){const te=(D*.1+ue*.15)%1,de=new _e().setHSL(te,.8,.5);C.lineGradient.value[ue].set(de.r,de.g,de.b)}}m.render(l,f),Z=requestAnimationFrame(ne)};return ne(),()=>{cancelAnimationFrame(Z),ie&&N.current&&ie.disconnect(),window.removeEventListener("pointermove",G),Y.dispose(),q.dispose(),m.dispose(),m.domElement.parentElement&&m.domElement.parentElement.removeChild(m.domElement)}},[]),e.jsx("div",{ref:N,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:S}})}const ms=({topColor:n="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:r=.3,interactive:u=!1,className:h="",glowAmount:b=.005,pillarWidth:w=3,pillarHeight:p=.4,noiseIntensity:j=.5,mixBlendMode:R="screen",pillarRotation:P=0,quality:S="high"})=>{const y=a.useRef(null),F=a.useRef(null),N=a.useRef(null),k=a.useRef(null),I=a.useRef(null),B=a.useRef(null),U=a.useRef(null),L=a.useRef(new Ce(0,0)),o=a.useRef(0),[M,Q]=a.useState(!0);return a.useEffect(()=>{const V=document.createElement("canvas");V.getContext("webgl")||V.getContext("experimental-webgl")||Q(!1)},[]),a.useEffect(()=>{if(!y.current||!M)return;const V=y.current,_=V.clientWidth,K=V.clientHeight,z=new st;I.current=z;const x=new _t(-1,1,1,-1,0,1);B.current=x;const O=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),A=O||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let c=S;A&&S==="high"&&(c="medium"),O&&S!=="low"&&(c="low");const l={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},f=l[c]||l.medium;let m;try{m=new rt({antialias:!1,alpha:!0,powerPreference:c==="high"?"high-performance":"low-power",precision:f.precision,stencil:!1,depth:!1})}catch{Q(!1);return}m.setSize(_,K),m.setPixelRatio(f.pixelRatio),y.current.appendChild(m.domElement),N.current=m;const C=J=>{const fe=new _e(J);return new oe(fe.r,fe.g,fe.b)},q=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,Y=`
      precision ${f.precision} float;

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

      const float STEP_MULT = ${f.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${f.iterations};
      const int WAVE_ITER = ${f.waveIterations};

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
    `,se=P*Math.PI/180,X=Math.sin(.4),re=Math.cos(.4),ie=new $e({vertexShader:q,fragmentShader:Y,uniforms:{uTime:{value:0},uResolution:{value:new Ce(_,K)},uMouse:{value:L.current},uTopColor:{value:C(n)},uBottomColor:{value:C(t)},uIntensity:{value:i},uInteractive:{value:u},uGlowAmount:{value:b},uPillarWidth:{value:w},uPillarHeight:{value:p},uNoiseIntensity:{value:j},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(se)},uPillarRotSin:{value:Math.sin(se)},uWaveSin:{value:X},uWaveCos:{value:re}},transparent:!0,depthWrite:!1,depthTest:!1});k.current=ie;const G=new it(2,2);U.current=G;const Z=new Qe(G,ie);z.add(Z);let ne=null;const D=J=>{if(!u||ne)return;ne=window.setTimeout(()=>{ne=null},16);const fe=V.getBoundingClientRect(),ee=(J.clientX-fe.left)/fe.width*2-1,ae=-((J.clientY-fe.top)/fe.height)*2+1;L.current.set(ee,ae)};u&&V.addEventListener("mousemove",D,{passive:!0});let ue=performance.now();const de=1e3/(c==="low"?30:60),ge=J=>{if(!k.current||!N.current||!I.current||!B.current)return;const fe=J-ue;if(fe>=de){o.current+=.016*r;const ee=o.current;k.current.uniforms.uTime.value=ee,k.current.uniforms.uRotCos.value=Math.cos(ee*.3),k.current.uniforms.uRotSin.value=Math.sin(ee*.3),N.current.render(I.current,B.current),ue=J-fe%de}F.current=requestAnimationFrame(ge)};F.current=requestAnimationFrame(ge);let E=null;const H=()=>{E&&clearTimeout(E),E=window.setTimeout(()=>{if(!N.current||!k.current||!y.current)return;const J=y.current.clientWidth,fe=y.current.clientHeight;N.current.setSize(J,fe),k.current.uniforms.uResolution.value.set(J,fe)},150)};return window.addEventListener("resize",H,{passive:!0}),()=>{window.removeEventListener("resize",H),u&&V.removeEventListener("mousemove",D),F.current&&cancelAnimationFrame(F.current),N.current&&(N.current.dispose(),N.current.forceContextLoss(),V.contains(N.current.domElement)&&V.removeChild(N.current.domElement)),k.current&&k.current.dispose(),U.current&&U.current.dispose(),N.current=null,k.current=null,I.current=null,B.current=null,U.current=null,F.current=null}},[n,t,i,r,u,b,w,p,j,P,M,S]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),M?e.jsx("div",{ref:y,className:`light-pillar-container ${h}`,style:{mixBlendMode:R}}):e.jsx("div",{className:`light-pillar-fallback ${h}`,style:{mixBlendMode:R},children:"WebGL not supported"})]})},hs=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,ps=`
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
`;function gs({color:n="#ffffff",flakeSize:t=.01,minFlakeSize:i=1.25,pixelResolution:r=200,speed:u=1.25,depthFade:h=8,farPlane:b=20,brightness:w=1,gamma:p=.4545,density:j=.3,variant:R="square",direction:P=125,rainbow:S=!1,storm:y=!1,className:F="",style:N={}}){const k=a.useRef(null),I=a.useRef(0),B=a.useRef(!0),U=a.useRef(null),L=a.useRef(null),o=a.useRef(null),M=a.useMemo(()=>R==="round"?1:R==="snowflake"?2:0,[R]),Q=a.useMemo(()=>{const _=new _e(n);return new oe(_.r,_.g,_.b)},[n]),V=a.useCallback(()=>{o.current&&clearTimeout(o.current),o.current=window.setTimeout(()=>{const _=k.current,K=U.current,z=L.current;if(!_||!K||!z)return;const x=_.offsetWidth,O=_.offsetHeight;K.setSize(x,O),z.uniforms.uResolution.value.set(x,O)},100)},[]);return a.useEffect(()=>{const _=k.current;if(!_)return;const K=new IntersectionObserver(([z])=>{B.current=z.isIntersecting},{threshold:0});return K.observe(_),()=>K.disconnect()},[]),a.useEffect(()=>{const _=k.current;if(!_)return;const K=new st,z=new _t(-1,1,1,-1,0,1),x=new rt({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.setSize(_.offsetWidth,_.offsetHeight),x.setClearColor(0,0),_.appendChild(x.domElement),U.current=x;const O=new $e({vertexShader:hs,fragmentShader:ps,uniforms:{uTime:{value:0},uResolution:{value:new Ce(_.offsetWidth,_.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:i},uPixelResolution:{value:r},uSpeed:{value:u},uDepthFade:{value:h},uFarPlane:{value:b},uColor:{value:Q.clone()},uBrightness:{value:w},uGamma:{value:p},uDensity:{value:j},uVariant:{value:M},uDirection:{value:P*Math.PI/180},uRainbow:{value:S?1:0}},transparent:!0});L.current=O;const A=new it(2,2);K.add(new Qe(A,O)),window.addEventListener("resize",V);const c=performance.now(),l=()=>{I.current=requestAnimationFrame(l),B.current&&(O.uniforms.uTime.value=(performance.now()-c)*.001,x.render(K,z))};return l(),()=>{cancelAnimationFrame(I.current),window.removeEventListener("resize",V),o.current&&clearTimeout(o.current),_.contains(x.domElement)&&_.removeChild(x.domElement),x.dispose(),A.dispose(),O.dispose(),U.current=null,L.current=null}},[V]),a.useEffect(()=>{const _=L.current;_&&(_.uniforms.uFlakeSize.value=t,_.uniforms.uMinFlakeSize.value=i,_.uniforms.uPixelResolution.value=r,_.uniforms.uSpeed.value=y?u*4:u,_.uniforms.uDepthFade.value=h,_.uniforms.uFarPlane.value=b,_.uniforms.uBrightness.value=w,_.uniforms.uGamma.value=p,_.uniforms.uDensity.value=j,_.uniforms.uVariant.value=M,_.uniforms.uDirection.value=P*Math.PI/180,_.uniforms.uColor.value.copy(Q),_.uniforms.uRainbow.value=S?1:0)},[t,i,r,u,h,b,w,p,j,M,P,Q,S,y]),e.jsx("div",{ref:k,className:`pixel-snow-container ${F}`,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",contain:"layout style paint",...N}})}const ki=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],ii={colors:ki[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},vs=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],ni={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},oi={colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1},si={color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},ri={density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},ai={color1:"#b117f8",color2:"#2c0b2e",speed:20},li={color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,depthFade:3,farPlane:10,gamma:.4545,variant:"snowflake",rainbow:!1,storm:!1},Xe={cyberpunk:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},akira:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"mountainDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16715818,15415358,16715818],rightCars:[14342906,12499683,9410532],sticks:14342906}},golden:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"deepDistortion",length:400,roadWidth:18,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16724527,10694672,11015432],rightCars:[16645616,15982240,14859144],sticks:16645616}},split:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"LongRaceDistortion",length:400,roadWidth:10,islandWidth:5,lanesPerRoad:2,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:70,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16736115,15158624,16715818],rightCars:[10806246,8442324,5489350],sticks:10806246}},highway:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14441248,14459680,14426144],rightCars:[3361783,15066861,12568307],sticks:12970219}}},xs=({onClose:n,floatingLinesConfig:t,setFloatingLinesConfig:i,lightPillarsConfig:r,setLightPillarsConfig:u,ballpitConfig:h,setBallpitConfig:b,silkConfig:w,setSilkConfig:p,galaxyConfig:j,setGalaxyConfig:R,gradientConfig:P,setGradientConfig:S,pixelSnowConfig:y,setPixelSnowConfig:F,hyperspeedConfig:N,setHyperspeedConfig:k})=>{const{activeBackground:I,floatingLinesConfig:B,setFloatingLinesConfig:U,lightPillarsConfig:L,setLightPillarsConfig:o,ballpitConfig:M,setBallpitConfig:Q,silkConfig:V,setSilkConfig:_,galaxyConfig:K,setGalaxyConfig:z,gradientConfig:x,setGradientConfig:O,pixelSnowConfig:A,setPixelSnowConfig:c,hyperspeedConfig:l,setHyperspeedConfig:f}=Ue(),m=t||B,C=i||U,q=r||L,Y=u||o,se=h||M,X=b||Q,re=w||V,ie=p||_,G=j||K,Z=R||z,ne=P||x,D=S||O,ue=y||A,te=F||c,de=N||l,ge=k||f,E=m||ii,H=(d,pe)=>{C&&C({...E,[d]:pe})},J=d=>{const pe=E.enabledWaves,Me=pe.includes(d)?pe.filter(St=>St!==d):[...pe,d];H("enabledWaves",Me)},fe=(d,pe)=>{const Me=[...E.colors];Me[d]=pe,H("colors",Me)},ee=q||ni,ae=(d,pe)=>{Y?Y({...ee,[d]:pe}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},le=se||oi,xe=(d,pe)=>{X&&X({...le,[d]:pe})},Re=(d,pe)=>{const Me=[...le.colors];Me[d]=pe,xe("colors",Me)},Ae=re||si,Ee=(d,pe)=>{ie&&ie({...Ae,[d]:pe})},ve=G||ri,ye=(d,pe)=>{Z&&Z({...ve,[d]:pe})},Fe=ne||ai,Ze=(d,pe)=>{D&&D({...Fe,[d]:pe})},be=ue||li,Te=(d,pe)=>{te&&te({...be,[d]:pe})},Ie=de||Xe.cyberpunk,bt=d=>{ge&&Xe[d]&&ge(Xe[d])},He=(d,pe)=>{ge&&ge({...Ie,[d]:pe})},wt=()=>{I==="floatinglines"&&C?C(ii):I==="lightpillars"&&Y?Y(ni):I==="ballpit"&&X?X(oi):I==="silk"&&ie?ie(si):I==="galaxy"&&Z?Z(ri):I==="gradient"&&D?D(ai):I==="pixelsnow"&&te?te(li):I==="hyperspeed"&&ge&&ge(Xe.cyberpunk)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:wt,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(xn,{})}),e.jsx("button",{onClick:n,className:"close-btn",children:e.jsx(pt,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[I==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:ki.map(d=>e.jsx("button",{className:"preset-btn",onClick:()=>H("colors",d.colors),style:{background:`linear-gradient(to right, ${d.colors[0]}, ${d.colors[1]}, ${d.colors[2]})`},title:d.name,children:JSON.stringify(E.colors)===JSON.stringify(d.colors)&&e.jsx(gi,{})},d.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:E.colors.map((d,pe)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:d,onChange:Me=>fe(pe,Me.target.value)}),e.jsx("span",{className:"hex-code",children:d})]},pe))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:E.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:E.count,onChange:d=>H("count",parseInt(d.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:E.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:E.distance,onChange:d=>H("distance",parseInt(d.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Amplitud de Onda ",e.jsx("span",{children:E.amplitude})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:E.amplitude||1,onChange:d=>H("amplitude",parseFloat(d.target.value))}),e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:E.bendRadius})]}),e.jsx("input",{type:"range",min:"5",max:"10",step:"0.1",value:E.bendRadius,onChange:d=>H("bendRadius",parseFloat(d.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:E.bendStrength})]}),e.jsx("input",{type:"range",min:"-7",max:"7",step:"0.1",value:E.bendStrength,onChange:d=>H("bendStrength",parseFloat(d.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(d=>e.jsx("button",{className:`toggle-btn ${E.enabledWaves.includes(d)?"active":""}`,onClick:()=>J(d),children:d.charAt(0).toUpperCase()+d.slice(1)},d))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${E.interactive!==!1?"active":""}`,onClick:()=>H("interactive",E.interactive===!1),style:{width:"100%",textAlign:"center"},children:E.interactive!==!1?"Activada (Ratón)":"Desactivada"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${E.rainbow?"active":""}`,onClick:()=>H("rainbow",!E.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"})]})]}),I==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:ee.topColor,onChange:d=>ae("topColor",d.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:ee.bottomColor,onChange:d=>ae("bottomColor",d.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:ee.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:ee.intensity,onChange:d=>ae("intensity",parseFloat(d.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:ee.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ee.rotationSpeed,onChange:d=>ae("rotationSpeed",parseFloat(d.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:ee.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:ee.pillarWidth,onChange:d=>ae("pillarWidth",parseFloat(d.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[ee.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:ee.pillarRotation,onChange:d=>ae("pillarRotation",parseInt(d.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:ee.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:ee.pillarHeight,onChange:d=>ae("pillarHeight",parseFloat(d.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:ee.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ee.noiseIntensity,onChange:d=>ae("noiseIntensity",parseFloat(d.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:ee.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:ee.glowAmount,onChange:d=>ae("glowAmount",parseFloat(d.target.value))})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"toggles-row",children:vs.map(d=>e.jsx("button",{className:`toggle-btn ${ee.quality===d.value?"active":""}`,onClick:()=>ae("quality",d.value),children:d.label},d.value))})}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${ee.interactive!==!1?"active":""}`,onClick:()=>ae("interactive",ee.interactive===!1),style:{width:"100%",textAlign:"center"},children:ee.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),I==="ballpit"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsx("div",{className:"color-pickers",children:le.colors.map((d,pe)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:d,onChange:Me=>Re(pe,Me.target.value)}),e.jsx("span",{className:"hex-code",children:d})]},pe))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad ",e.jsx("span",{children:le.count})]}),e.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:le.count,onChange:d=>xe("count",parseInt(d.target.value))}),e.jsxs("label",{children:["Gravedad ",e.jsx("span",{children:le.gravity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:le.gravity,onChange:d=>xe("gravity",parseFloat(d.target.value))}),e.jsxs("label",{children:["Fricción ",e.jsx("span",{children:le.friction})]}),e.jsx("input",{type:"range",min:"0.8",max:"1",step:"0.001",value:le.friction,onChange:d=>xe("friction",parseFloat(d.target.value))}),e.jsxs("label",{children:["Rebote Pared ",e.jsx("span",{children:le.wallBounce})]}),e.jsx("input",{type:"range",min:"0",max:"1.5",step:"0.05",value:le.wallBounce,onChange:d=>xe("wallBounce",parseFloat(d.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${le.followCursor?"active":""}`,onClick:()=>xe("followCursor",!le.followCursor),style:{width:"100%",textAlign:"center"},children:le.followCursor?"Seguir Cursor":"Cursor Libre"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Eventos Divertidos"}),e.jsxs("div",{className:"toggles-row",children:[e.jsx("button",{className:`toggle-btn ${le.enableExplosion?"active":""}`,onClick:()=>xe("enableExplosion",!le.enableExplosion),title:"Haz clic para explotar las bolas",children:"💥 Explosión al Clic"}),e.jsx("button",{className:`toggle-btn ${le.rainbow?"active":""}`,onClick:()=>xe("rainbow",!le.rainbow),title:"Ciclo de colores automático",children:"🌈 Modo Arcoíris"})]})]})]}),I==="silk"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:Ae.color,onChange:d=>Ee("color",d.target.value)}),e.jsx("span",{className:"hex-code",children:Ae.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:Ae.speed})]}),e.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:Ae.speed,onChange:d=>Ee("speed",parseFloat(d.target.value))}),e.jsxs("label",{children:["Escala ",e.jsx("span",{children:Ae.scale})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:Ae.scale,onChange:d=>Ee("scale",parseFloat(d.target.value))}),e.jsxs("label",{children:["Ruido ",e.jsx("span",{children:Ae.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:Ae.noiseIntensity,onChange:d=>Ee("noiseIntensity",parseFloat(d.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[Ae.rotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:Ae.rotation,onChange:d=>Ee("rotation",parseInt(d.target.value))})]})]}),I==="galaxy"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:ve.density})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:ve.density,onChange:d=>ye("density",parseFloat(d.target.value))}),e.jsxs("label",{children:["Intensidad Brillo ",e.jsx("span",{children:ve.glowIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.glowIntensity,onChange:d=>ye("glowIntensity",parseFloat(d.target.value))}),e.jsxs("label",{children:["Saturación ",e.jsx("span",{children:ve.saturation})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.saturation,onChange:d=>ye("saturation",parseFloat(d.target.value))}),e.jsxs("label",{children:["Cambio de Tono (Hue) ",e.jsx("span",{children:ve.hueShift})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:ve.hueShift,onChange:d=>ye("hueShift",parseFloat(d.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad Rotación ",e.jsx("span",{children:ve.rotationSpeed})]}),e.jsx("input",{type:"range",min:"-0.5",max:"0.5",step:"0.01",value:ve.rotationSpeed,onChange:d=>ye("rotationSpeed",parseFloat(d.target.value))}),e.jsxs("label",{children:["Velocidad Estrellas ",e.jsx("span",{children:ve.starSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.starSpeed,onChange:d=>ye("starSpeed",parseFloat(d.target.value))}),e.jsxs("label",{children:["Velocidad Animación ",e.jsx("span",{children:ve.speed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:ve.speed,onChange:d=>ye("speed",parseFloat(d.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${ve.rainbow?"active":""}`,onClick:()=>ye("rainbow",!ve.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${ve.warp?"active":""}`,onClick:()=>ye("warp",!ve.warp),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🚀 Velocidad Warp"})]})]}),I==="gradient"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:Fe.color1,onChange:d=>Ze("color1",d.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:Fe.color2,onChange:d=>Ze("color2",d.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad (segundos) ",e.jsxs("span",{children:[Fe.speed,"s"]})]}),e.jsx("input",{type:"range",min:"1",max:"60",step:"1",value:Fe.speed,onChange:d=>Ze("speed",parseInt(d.target.value))})]})]}),I==="pixelsnow"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:be.color,onChange:d=>Te("color",d.target.value)}),e.jsx("span",{className:"hex-code",children:be.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Variante"}),e.jsx("div",{className:"toggles-row",children:["snowflake","square","round"].map(d=>e.jsx("button",{className:`toggle-btn ${be.variant===d?"active":""}`,onClick:()=>Te("variant",d),children:d.charAt(0).toUpperCase()+d.slice(1)},d))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:be.speed})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:be.speed,onChange:d=>Te("speed",parseFloat(d.target.value))}),e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:be.density})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:be.density,onChange:d=>Te("density",parseFloat(d.target.value))}),e.jsxs("label",{children:["Dirección ",e.jsxs("span",{children:[be.direction,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:be.direction,onChange:d=>Te("direction",parseInt(d.target.value))}),e.jsxs("label",{children:["Tamaño Copo ",e.jsx("span",{children:be.flakeSize})]}),e.jsx("input",{type:"range",min:"0.005",max:"0.05",step:"0.001",value:be.flakeSize,onChange:d=>Te("flakeSize",parseFloat(d.target.value))}),e.jsxs("label",{children:["Brillo ",e.jsx("span",{children:be.brightness})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:be.brightness,onChange:d=>Te("brightness",parseFloat(d.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${be.rainbow?"active":""}`,onClick:()=>Te("rainbow",!be.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${be.storm?"active":""}`,onClick:()=>Te("storm",!be.storm),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🌪️ Modo Tormenta"})]})]}),I==="hyperspeed"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Estilo Visual"}),e.jsx("div",{className:"toggles-row",style:{flexWrap:"wrap"},children:Object.keys(Xe).map(d=>e.jsx("button",{className:`toggle-btn ${JSON.stringify(Ie.colors)===JSON.stringify(Xe[d].colors)?"active":""}`,onClick:()=>bt(d),children:d.charAt(0).toUpperCase()+d.slice(1)},d))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Geometría"}),e.jsxs("label",{children:["Ancho Carretera ",e.jsx("span",{children:Ie.roadWidth})]}),e.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:Ie.roadWidth,onChange:d=>He("roadWidth",parseFloat(d.target.value))}),e.jsxs("label",{children:["Ancho Isla ",e.jsx("span",{children:Ie.islandWidth})]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:Ie.islandWidth,onChange:d=>He("islandWidth",parseFloat(d.target.value))}),e.jsxs("label",{children:["Carriles ",e.jsx("span",{children:Ie.lanesPerRoad})]}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:Ie.lanesPerRoad,onChange:d=>He("lanesPerRoad",parseInt(d.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Distorsión"}),e.jsxs("select",{value:Ie.distortion,onChange:d=>He("distortion",d.target.value),style:{width:"100%",padding:"8px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",color:"white",border:"1px solid rgba(255, 255, 255, 0.2)",marginTop:"5px",cursor:"pointer"},children:[e.jsx("option",{style:{color:"black"},value:"turbulentDistortion",children:"Turbulent"}),e.jsx("option",{style:{color:"black"},value:"deepDistortion",children:"Deep"}),e.jsx("option",{style:{color:"black"},value:"mountainDistortion",children:"Mountain"}),e.jsx("option",{style:{color:"black"},value:"xyDistortion",children:"XY"}),e.jsx("option",{style:{color:"black"},value:"LongRaceDistortion",children:"Long Race"})]})]})]})]})]})},ys=({effectOptions:n=Xe.cyberpunk})=>{const t=a.useRef(null),i=a.useRef(null);return a.useEffect(()=>{if(i.current){i.current.dispose();const A=document.getElementById("lights");if(A)for(;A.firstChild;)A.removeChild(A.firstChild)}const r={uFreq:{value:new oe(3,6,10)},uAmp:{value:new oe(30,30,20)}},u={uFreq:{value:new Ce(5,2)},uAmp:{value:new Ce(25,15)}},h={uFreq:{value:new Ce(2,3)},uAmp:{value:new Ce(35,10)}},b={uFreq:{value:new qt(4,8,8,1)},uAmp:{value:new qt(25,5,10,10)}},w={uFreq:{value:new Ce(4,8)},uAmp:{value:new Ce(10,20)},uPowY:{value:new Ce(20,2)}};let p=A=>Math.sin(A)*.5+.5;const j={mountainDistortion:{uniforms:r,getDistortion:`
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
        `,getJS:(A,c)=>{let l=.02,f=r.uFreq.value,m=r.uAmp.value,C=new oe(Math.cos(A*Math.PI*f.x+c)*m.x-Math.cos(l*Math.PI*f.x+c)*m.x,p(A*Math.PI*f.y+c)*m.y-p(l*Math.PI*f.y+c)*m.y,p(A*Math.PI*f.z+c)*m.z-p(l*Math.PI*f.z+c)*m.z),q=new oe(2,2,2),Y=new oe(0,0,-5);return C.multiply(q).add(Y)}},xyDistortion:{uniforms:u,getDistortion:`
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
        `,getJS:(A,c)=>{let l=.02,f=u.uFreq.value,m=u.uAmp.value,C=new oe(Math.cos(A*Math.PI*f.x+c)*m.x-Math.cos(l*Math.PI*f.x+c)*m.x,Math.sin(A*Math.PI*f.y+c+Math.PI/2)*m.y-Math.sin(l*Math.PI*f.y+c+Math.PI/2)*m.y,0),q=new oe(2,.4,1),Y=new oe(0,0,-3);return C.multiply(q).add(Y)}},LongRaceDistortion:{uniforms:h,getDistortion:`
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
        `,getJS:(A,c)=>{let l=.0125,f=h.uFreq.value,m=h.uAmp.value,C=new oe(Math.sin(A*Math.PI*f.x+c)*m.x-Math.sin(l*Math.PI*f.x+c)*m.x,Math.sin(A*Math.PI*f.y+c)*m.y-Math.sin(l*Math.PI*f.y+c)*m.y,0),q=new oe(1,1,0),Y=new oe(0,0,-5);return C.multiply(q).add(Y)}},turbulentDistortion:{uniforms:b,getDistortion:`
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
        `,getJS:(A,c)=>{const l=b.uFreq.value,f=b.uAmp.value,m=X=>Math.cos(Math.PI*X*l.x+c)*f.x+Math.pow(Math.cos(Math.PI*X*l.y+c*(l.y/l.x)),2)*f.y,C=X=>-p(Math.PI*X*l.z+c)*f.z-Math.pow(p(Math.PI*X*l.w+c/(l.z/l.w)),5)*f.w;let q=new oe(m(A)-m(A+.007),C(A)-C(A+.007),0),Y=new oe(-2,-5,0),se=new oe(0,0,-10);return q.multiply(Y).add(se)}},turbulentDistortionStill:{uniforms:b,getDistortion:`
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
        `},deepDistortionStill:{uniforms:w,getDistortion:`
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
        `},deepDistortion:{uniforms:w,getDistortion:`
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
        `,getJS:(A,c)=>{const l=w.uFreq.value,f=w.uAmp.value,m=w.uPowY.value,C=re=>Math.sin(re*Math.PI*l.x+c)*f.x,q=re=>Math.pow(re*m.x,m.y)+Math.sin(re*Math.PI*l.y+c)*f.y;let Y=new oe(C(A)-C(A+.01),q(A)-q(A+.01),0),se=new oe(-2,-4,0),X=new oe(0,0,-10);return Y.multiply(se).add(X)}}};class R{constructor(c,l={}){this.options=l,this.options.distortion==null&&(this.options.distortion={uniforms:P,getDistortion:S}),this.container=c,this.renderer=new rt({antialias:!1,alpha:!0}),this.renderer.setSize(c.offsetWidth,c.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new yn(this.renderer),c.append(this.renderer.domElement),this.camera=new vi(l.fov,c.offsetWidth/c.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new st,this.scene.background=null;let f=new bn(l.colors.background,l.length*.2,l.length*500);this.scene.fog=f,this.fogUniforms={fogColor:{value:f.color},fogNear:{value:f.near},fogFar:{value:f.far}},this.clock=new Tt,this.assets={},this.disposed=!1,this.road=new M(this,l),this.leftCarLights=new k(this,l,l.colors.leftCars,l.movingAwaySpeed,new Ce(0,1-l.carLightsFade)),this.rightCarLights=new k(this,l,l.colors.rightCars,l.movingCloserSpeed,new Ce(1,0+l.carLightsFade)),this.leftSticks=new U(this,l),this.fovTarget=l.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const c=this.container.offsetWidth,l=this.container.offsetHeight;this.renderer.setSize(c,l),this.camera.aspect=c/l,this.camera.updateProjectionMatrix(),this.composer.setSize(c,l)}initPasses(){this.renderPass=new wn(this.scene,this.camera),this.bloomPass=new Gt(this.camera,new Sn({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const c=new Gt(this.camera,new et({preset:Cn.MEDIUM,searchImage:et.searchImageDataURL,areaImage:et.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,c.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(c)}loadAssets(){const c=this.assets;return new Promise(l=>{const f=new Rn(l),m=new Image,C=new Image;c.smaa={},m.addEventListener("load",function(){c.smaa.search=this,f.itemEnd("smaa-search")}),C.addEventListener("load",function(){c.smaa.area=this,f.itemEnd("smaa-area")}),f.itemStart("smaa-search"),f.itemStart("smaa-area"),m.src=et.searchImageDataURL,C.src=et.areaImageDataURL})}init(){this.initPasses();const c=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-c.roadWidth/2-c.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(c.roadWidth/2+c.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(c.roadWidth+c.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(c){this.options.onSpeedUp&&this.options.onSpeedUp(c),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(c){this.options.onSlowDown&&this.options.onSlowDown(c),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(c){this.options.onSpeedUp&&this.options.onSpeedUp(c),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(c){this.options.onSlowDown&&this.options.onSlowDown(c),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(c){c.preventDefault()}update(c){let l=Math.exp(-(-60*Math.log2(.9))*c);this.speedUp+=N(this.speedUp,this.speedUpTarget,l,1e-5),this.timeOffset+=this.speedUp*c;let f=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(f),this.leftCarLights.update(f),this.leftSticks.update(f),this.road.update(f);let m=!1,C=N(this.camera.fov,this.fovTarget,l);if(C!==0&&(this.camera.fov+=C*c*6,m=!0),this.options.distortion.getJS){const q=this.options.distortion.getJS(.025,f);this.camera.lookAt(new oe(this.camera.position.x+q.x,this.camera.position.y+q.y,this.camera.position.z+q.z)),m=!0}m&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(c){this.composer.render(c)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(c,l,f){this.composer.setSize(c,l,f)}tick(){if(this.disposed||!this)return;if(O(this.renderer,this.setSize)){const l=this.renderer.domElement;this.camera.aspect=l.clientWidth/l.clientHeight,this.camera.updateProjectionMatrix()}const c=this.clock.getDelta();this.render(c),this.update(c),requestAnimationFrame(this.tick)}}const P={uDistortionX:{value:new Ce(80,3)},uDistortionY:{value:new Ce(-40,2.5)}},S=`
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
    `,y=A=>Array.isArray(A)?Math.random()*(A[1]-A[0])+A[0]:Math.random()*A,F=A=>Array.isArray(A)?A[Math.floor(Math.random()*A.length)]:A;function N(A,c,l=.1,f=.001){let m=(c-A)*l;return Math.abs(m)<f&&(m=c-A),m}class k{constructor(c,l,f,m,C){this.webgl=c,this.options=l,this.colors=f,this.speed=m,this.fade=C}init(){const c=this.options;let l=new jn(new oe(0,0,0),new oe(0,0,-1)),f=new An(l,40,1,8,!1),m=new Yt().copy(f);m.instanceCount=c.lightPairsPerRoadWay*2;let C=c.roadWidth/c.lanesPerRoad,q=[],Y=[],se=[],X=this.colors;Array.isArray(X)?X=X.map(G=>new _e(G)):X=new _e(X);for(let G=0;G<c.lightPairsPerRoadWay;G++){let Z=y(c.carLightsRadius),ne=y(c.carLightsLength),D=y(this.speed),te=G%c.lanesPerRoad*C-c.roadWidth/2+C/2,de=y(c.carWidthPercentage)*C,ge=y(c.carShiftX)*C;te+=ge;let E=y(c.carFloorSeparation)+Z*1.3,H=-y(c.length);q.push(te-de/2),q.push(E),q.push(H),q.push(te+de/2),q.push(E),q.push(H),Y.push(Z),Y.push(ne),Y.push(D),Y.push(Z),Y.push(ne),Y.push(D);let J=F(X);se.push(J.r),se.push(J.g),se.push(J.b),se.push(J.r),se.push(J.g),se.push(J.b)}m.setAttribute("aOffset",new Ve(new Float32Array(q),3,!1)),m.setAttribute("aMetrics",new Ve(new Float32Array(Y),3,!1)),m.setAttribute("aColor",new Ve(new Float32Array(se),3,!1));let re=new $e({fragmentShader:I,vertexShader:B,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:c.length},uFade:{value:this.fade}},this.webgl.fogUniforms,c.distortion.uniforms)});re.onBeforeCompile=G=>{G.vertexShader=G.vertexShader.replace("#include <getDistortion_vertex>",c.distortion.getDistortion)};let ie=new Qe(m,re);ie.frustumCulled=!1,this.webgl.scene.add(ie),this.mesh=ie}update(c){this.mesh.material.uniforms.uTime.value=c}}const I=`
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
    `,B=`
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
    `;class U{constructor(c,l){this.webgl=c,this.options=l}init(){const c=this.options,l=new it(1,1);let f=new Yt().copy(l),m=c.totalSideLightSticks;f.instanceCount=m;let C=c.length/(m-1);const q=[],Y=[],se=[];let X=c.colors.sticks;Array.isArray(X)?X=X.map(G=>new _e(G)):X=new _e(X);for(let G=0;G<m;G++){let Z=y(c.lightStickWidth),ne=y(c.lightStickHeight);q.push((G-1)*C*2+C*Math.random());let D=F(X);Y.push(D.r),Y.push(D.g),Y.push(D.b),se.push(Z),se.push(ne)}f.setAttribute("aOffset",new Ve(new Float32Array(q),1,!1)),f.setAttribute("aColor",new Ve(new Float32Array(Y),3,!1)),f.setAttribute("aMetrics",new Ve(new Float32Array(se),2,!1));const re=new $e({fragmentShader:o,vertexShader:L,side:Wt,uniforms:Object.assign({uTravelLength:{value:c.length},uTime:{value:0}},this.webgl.fogUniforms,c.distortion.uniforms)});re.onBeforeCompile=G=>{G.vertexShader=G.vertexShader.replace("#include <getDistortion_vertex>",c.distortion.getDistortion)};const ie=new Qe(f,re);ie.frustumCulled=!1,this.webgl.scene.add(ie),this.mesh=ie}update(c){this.mesh.material.uniforms.uTime.value=c}}const L=`
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
    `,o=`
      #define USE_FOG;
      ${De.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${De.fog_fragment}
      }
    `;class M{constructor(c,l){this.webgl=c,this.options=l,this.uTime={value:0}}createPlane(c,l,f){const m=this.options;let C=100;const q=new it(f?m.roadWidth:m.islandWidth,m.length,20,C);let Y={uTravelLength:{value:m.length},uColor:{value:new _e(f?m.colors.roadColor:m.colors.islandColor)},uTime:this.uTime};f&&(Y=Object.assign(Y,{uLanes:{value:m.lanesPerRoad},uBrokenLinesColor:{value:new _e(m.colors.brokenLines)},uShoulderLinesColor:{value:new _e(m.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:m.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:m.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:m.brokenLinesWidthPercentage}}));const se=new $e({fragmentShader:f?z:V,vertexShader:x,side:Wt,uniforms:Object.assign(Y,this.webgl.fogUniforms,m.distortion.uniforms)});se.onBeforeCompile=re=>{re.vertexShader=re.vertexShader.replace("#include <getDistortion_vertex>",m.distortion.getDistortion)};const X=new Qe(q,se);return X.rotation.x=-Math.PI/2,X.position.z=-m.length/2,X.position.x+=(this.options.islandWidth/2+m.roadWidth/2)*c,this.webgl.scene.add(X),X}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(c){this.uTime.value=c}}const Q=`
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
    `,V=Q.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),z=Q.replace("#include <roadMarkings_fragment>",`
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
    `),x=`
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
    `;function O(A,c){const l=A.domElement,f=l.clientWidth,m=l.clientHeight,C=l.width!==f||l.height!==m;return C&&c(f,m,!1),C}return(function(){const A=document.getElementById("lights"),c={...n};c.distortion=j[c.distortion];const l=new R(A,c);i.current=l,l.loadAssets().then(l.init)})(),()=>{i.current&&i.current.dispose()}},[n]),e.jsx("div",{id:"lights",ref:t})},bs=({floatingLinesConfig:n,lightPillarsConfig:t,ballpitConfig:i,silkConfig:r,galaxyConfig:u,gradientConfig:h,pixelSnowConfig:b,hyperspeedConfig:w})=>{const{activeBackground:p,floatingLinesConfig:j,lightPillarsConfig:R,ballpitConfig:P,silkConfig:S,galaxyConfig:y,gradientConfig:F,pixelSnowConfig:N,hyperspeedConfig:k}=Ue(),I=n||j,B=t||R,U=i||P,L=r||S,o=u||y,M=h||F,Q=b||N,V=w||k,_=I||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},K=B||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},z=U||{colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1,rainbow:!1},x=L||{color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},O=o||{density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},A=M||{color1:"#b117f8",color2:"#2c0b2e",speed:20},c=Q||{color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,variant:"snowflake",rainbow:!1,storm:!1};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(Pe,{mode:"wait",children:[p==="gradient"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(Vo,{color1:A.color1,color2:A.color2,speed:A.speed})},"gradient"),p==="galaxy"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(Qo,{density:O.density,glowIntensity:O.glowIntensity,saturation:O.saturation,hueShift:O.hueShift,twinkleIntensity:O.twinkleIntensity,rotationSpeed:O.rotationSpeed,starSpeed:O.starSpeed,speed:O.speed,rainbow:O.rainbow,warp:O.warp})},"galaxy"),p==="silk"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(bi,{speed:x.speed,scale:x.scale,color:x.color,noiseIntensity:x.noiseIntensity,rotation:x.rotation})},"silk"),p==="ballpit"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:e.jsx(cs,{count:z.count,gravity:z.gravity,friction:z.friction,wallBounce:z.wallBounce,followCursor:z.followCursor,colors:z.colors,enableExplosion:z.enableExplosion,rainbow:z.rainbow})},"ballpit"),p==="floatinglines"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(fs,{linesGradient:_.colors,lineCount:_.count,lineDistance:_.distance,animationSpeed:.5,bendRadius:_.bendRadius,bendStrength:_.bendStrength,enabledWaves:_.enabledWaves,interactive:_.interactive??!1,parallax:_.parallax??!1,amplitude:_.amplitude??1,rainbow:_.rainbow})},"floatinglines"),p==="lightpillars"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(ms,{topColor:K.topColor,bottomColor:K.bottomColor,intensity:K.intensity,rotationSpeed:K.rotationSpeed,glowAmount:K.glowAmount??.002,pillarWidth:K.pillarWidth,pillarHeight:K.pillarHeight,noiseIntensity:K.noiseIntensity,pillarRotation:K.pillarRotation,interactive:K.interactive??!0,quality:K.quality??"high"})},"lightpillars"),p==="pixelsnow"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(gs,{color:c.color,flakeSize:c.flakeSize,minFlakeSize:c.minFlakeSize,pixelResolution:c.pixelResolution,speed:c.speed,density:c.density,direction:c.direction,brightness:c.brightness,variant:c.variant,rainbow:c.rainbow,storm:c.storm})},"pixelsnow"),p==="hyperspeed"&&e.jsx(ce.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(ys,{effectOptions:V})},"hyperspeed")]})})},ws=({onItemClick:n,isOpen:t,onToggle:i,position:r="left",colors:u=["#B19EEF","#5227FF"],items:h=[],socialItems:b=[],displaySocials:w=!0,displayItemNumbering:p=!0,className:j,logoUrl:R=null,menuButtonColor:P="#fff",openMenuButtonColor:S="#000",accentColor:y="#5227FF",changeMenuColorOnOpen:F=!0,isFixed:N=!1,closeOnClickAway:k=!0,onMenuOpen:I,onMenuClose:B})=>{const[U,L]=a.useState(!1),o=typeof t=="boolean",M=o?t:U,Q=a.useRef(!1),V=a.useRef(null),_=a.useRef(null),K=a.useRef([]),z=a.useRef(null),x=a.useRef(null),O=a.useRef(null),A=a.useRef(null),c=a.useRef(null),[l,f]=a.useState(["Menu","Close"]),m=a.useRef(null),C=a.useRef(null),q=a.useRef(null),Y=a.useRef(null),se=a.useRef(null),X=a.useRef(null),re=a.useRef(!1),ie=a.useRef(null);a.useLayoutEffect(()=>{const E=W.context(()=>{const H=V.current,J=_.current,fe=z.current,ee=x.current,ae=O.current,le=A.current;if(!H||!fe||!ee||!ae||!le)return;let xe=[];J&&(xe=Array.from(J.querySelectorAll(".sm-prelayer"))),K.current=xe;const Re=r==="left"?-100:100;W.set([H,...xe],{xPercent:Re}),W.set(fe,{transformOrigin:"50% 50%",rotate:0}),W.set(ee,{transformOrigin:"50% 50%",rotate:90}),W.set(ae,{rotate:0,transformOrigin:"50% 50%"}),W.set(le,{yPercent:0}),X.current&&W.set(X.current,{color:P})});return()=>E.revert()},[P,r]);const G=a.useCallback(()=>{const E=V.current,H=K.current;if(!E)return null;m.current?.kill(),C.current&&(C.current.kill(),C.current=null),ie.current?.kill();const J=Array.from(E.querySelectorAll(".sm-panel-itemLabel")),fe=Array.from(E.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),ee=E.querySelector(".sm-socials-title"),ae=Array.from(E.querySelectorAll(".sm-socials-link")),le=H.map(ye=>({el:ye,start:Number(W.getProperty(ye,"xPercent"))})),xe=Number(W.getProperty(E,"xPercent"));J.length&&W.set(J,{yPercent:140,rotate:10}),fe.length&&W.set(fe,{"--sm-num-opacity":0}),ee&&W.set(ee,{opacity:0}),ae.length&&W.set(ae,{y:25,opacity:0});const Re=W.timeline({paused:!0});le.forEach((ye,Fe)=>{Re.fromTo(ye.el,{xPercent:ye.start},{xPercent:0,duration:.8,ease:"power4.out"},Fe*.07)});const Ee=(le.length?(le.length-1)*.07:0)+(le.length?.08:0),ve=1;if(Re.fromTo(E,{xPercent:xe},{xPercent:0,duration:ve,ease:"power4.out"},Ee),J.length){const Fe=Ee+ve*.15;Re.to(J,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},Fe),fe.length&&Re.to(fe,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},Fe+.1)}if(ee||ae.length){const ye=Ee+ve*.4;ee&&Re.to(ee,{opacity:1,duration:.5,ease:"power2.out"},ye),ae.length&&Re.to(ae,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{W.set(ae,{clearProps:"opacity"})}},ye+.04)}return m.current=Re,Re},[]),Z=a.useCallback(()=>{if(re.current)return;re.current=!0;const E=G();E?(E.eventCallback("onComplete",()=>{re.current=!1}),E.play(0)):re.current=!1},[G]),ne=a.useCallback(()=>{m.current?.kill(),m.current=null,ie.current?.kill();const E=V.current,H=K.current;if(!E)return;const J=[...H,E];C.current?.kill();const fe=r==="left"?-100:100;C.current=W.to(J,{xPercent:fe,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const ee=Array.from(E.querySelectorAll(".sm-panel-itemLabel"));ee.length&&W.set(ee,{yPercent:140,rotate:10});const ae=Array.from(E.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));ae.length&&W.set(ae,{"--sm-num-opacity":0});const le=E.querySelector(".sm-socials-title"),xe=Array.from(E.querySelectorAll(".sm-socials-link"));le&&W.set(le,{opacity:0}),xe.length&&W.set(xe,{y:25,opacity:0}),re.current=!1}})},[r]),D=a.useCallback(E=>{const H=O.current;H&&(q.current?.kill(),E?q.current=W.to(H,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):q.current=W.to(H,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),ue=a.useCallback(E=>{const H=X.current;if(H)if(se.current?.kill(),F){const J=E?S:P;se.current=W.to(H,{color:J,delay:.18,duration:.3,ease:"power2.out"})}else W.set(H,{color:P})},[S,P,F]);ht.useEffect(()=>{if(X.current)if(F){const E=Q.current?S:P;W.set(X.current,{color:E})}else W.set(X.current,{color:P})},[F,P,S]);const te=a.useCallback(E=>{const H=A.current;if(!H)return;Y.current?.kill();const J=E?"Menu":"Close",fe=E?"Close":"Menu",ee=3,ae=[J];let le=J;for(let Ae=0;Ae<ee;Ae++)le=le==="Menu"?"Close":"Menu",ae.push(le);le!==fe&&ae.push(fe),ae.push(fe),f(ae),W.set(H,{yPercent:0});const xe=ae.length,Re=(xe-1)/xe*100;Y.current=W.to(H,{yPercent:-Re,duration:.5+xe*.07,ease:"power4.out"})},[]),de=a.useCallback(()=>{if(o)i&&i(!M);else{const E=!Q.current;Q.current=E,L(E),E?(I?.(),Z()):(B?.(),ne()),D(E),ue(E),te(E)}},[o,t,i,M,Z,ne,D,ue,te,I,B]);ht.useEffect(()=>{o&&(Q.current=t,t?(I?.(),Z()):(B?.(),ne()),D(t),ue(t),te(t))},[t,o,Z,ne,D,ue,te,I,B]);const ge=a.useCallback(()=>{o?M&&i&&i(!1):Q.current&&(Q.current=!1,L(!1),B?.(),ne(),D(!1),ue(!1),te(!1))},[o,M,i,ne,D,ue,te,B]);return e.jsxs("div",{className:(j?j+" ":"")+"staggered-menu-wrapper"+(N?" fixed-wrapper":""),style:y?{"--sm-accent":y}:void 0,"data-position":r,"data-open":M||void 0,children:[M&&k&&e.jsx("div",{className:"sm-backdrop",onClick:()=>ge(),style:{position:"absolute",inset:0,zIndex:5,pointerEvents:"auto"},"aria-hidden":"true"}),e.jsx("div",{ref:_,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let H=[...u&&u.length?u.slice(0,4):["#1e1e22","#35353c"]];if(H.length>=3){const J=Math.floor(H.length/2);H.splice(J,1)}return H.map((J,fe)=>e.jsx("div",{className:"sm-prelayer",style:{background:J}},fe))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:R?e.jsx("img",{src:R,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:X,className:"sm-toggle","aria-label":M?"Close menu":"Open menu","aria-expanded":M,"aria-controls":"staggered-menu-panel",onClick:de,type:"button",children:[e.jsx("span",{ref:c,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:A,className:"sm-toggle-textInner",children:l.map((E,H)=>e.jsx("span",{className:"sm-toggle-line",children:E},H))})}),e.jsxs("span",{ref:O,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:z,className:"sm-icon-line"}),e.jsx("span",{ref:x,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:V,className:"staggered-menu-panel","aria-hidden":!M,children:e.jsxs("div",{className:"sm-panel-inner",children:[e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":p||void 0,children:h&&h.length?h.map((E,H)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:J=>{J.preventDefault(),n&&n(E.id)},"aria-label":E.ariaLabel,"data-index":H+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:E.label})})},E.label+H)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})}),w&&b&&b.length>0&&e.jsxs("div",{className:"sm-socials","aria-label":"Social links",children:[e.jsx("h3",{className:"sm-socials-title",children:"Extras"}),e.jsx("ul",{className:"sm-socials-list",role:"list",children:b.map((E,H)=>e.jsx("li",{className:"sm-socials-item",children:e.jsx("a",{href:E.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link",children:E.label})},E.label+H))})]})]})})]})};function Ss({children:n,className:t="",onClick:i,mouseX:r,spring:u,distance:h,magnification:b,baseItemSize:w}){const p=a.useRef(null),j=nt(0),R=kt(r,y=>{if(!p.current)return 1/0;const F=p.current.getBoundingClientRect(),N=F.x+F.width/2;return Math.abs(y-N)}),P=kt(R,[0,h],[b,w]),S=gt(P,u);return e.jsx(ce.div,{ref:p,style:{width:S,height:S,minWidth:S,minHeight:S},onHoverStart:()=>j.set(1),onHoverEnd:()=>j.set(0),onClick:i,className:`dock-item ${t}`,"aria-haspopup":"true",children:a.Children.map(n,y=>a.cloneElement(y,{isHovered:j}))})}function Cs({children:n,className:t="",...i}){const{isHovered:r}=i,[u,h]=a.useState(!1);return a.useEffect(()=>{const b=r.on("change",w=>{h(w===1)});return()=>b()},[r]),e.jsx(Pe,{children:u&&e.jsx(ce.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:n})})}function Rs({children:n,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:n})}function js({items:n,className:t="",spring:i={mass:.1,stiffness:300,damping:20},magnification:r=70,distance:u=200,panelHeight:h=68,dockHeight:b=256,baseItemSize:w=50}){const p=nt(1/0),j=nt(0),R=a.useMemo(()=>Math.max(b,r+r/2+4),[r,b]),P=kt(j,[0,1],[h,R]),S=gt(P,i);return e.jsx(ce.div,{style:{height:S,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(ce.div,{onMouseMove:({pageX:y})=>{j.set(1),p.set(y)},onMouseLeave:()=>{j.set(0),p.set(1/0)},className:`dock-panel ${t}`,style:{height:h},role:"toolbar","aria-label":"Application dock",children:n.map((y,F)=>e.jsxs(Ss,{onClick:y.onClick,className:y.className,mouseX:p,spring:i,distance:u,magnification:r,baseItemSize:w,children:[e.jsx(Rs,{children:y.icon}),e.jsx(Cs,{children:y.label})]},F))})})}const As=()=>{const{activeTrail:n}=Ue(),t=nt(-100),i=nt(-100),r={damping:25,stiffness:70,mass:1},u=gt(t,r),h=gt(i,r);a.useEffect(()=>{const w=p=>{t.set(p.clientX),i.set(p.clientY)};return window.addEventListener("mousemove",w),()=>window.removeEventListener("mousemove",w)},[t,i]);const b={"apple-cat":Ri,"jump-cat":ji,"rolling-cat":Ai,duck:Li,pompom:Pi,"skeleton-run":Ei,ghost:null};return!n||n==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:b[n]?e.jsx(ce.img,{src:b[n],alt:"trail",style:{x:u,y:h,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):n==="ghost"?e.jsx(ce.div,{style:{x:u,y:h,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},ci=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],Ls=({progress:n})=>{const[t,i]=a.useState(0);return a.useEffect(()=>{const r=setInterval(()=>{i(u=>(u+1)%ci.length)},1500);return()=>clearInterval(r)},[]),e.jsxs(ce.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[n,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(ce.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${n}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(ce.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:ci[t]},t)})]})]})},Ps=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,Es=Object.freeze(Object.defineProperty({__proto__:null,default:Ps},Symbol.toStringTag,{value:"Module"})),ks=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,Ts=Object.freeze(Object.defineProperty({__proto__:null,default:ks},Symbol.toStringTag,{value:"Module"})),_s=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,Fs=Object.freeze(Object.defineProperty({__proto__:null,default:_s},Symbol.toStringTag,{value:"Module"})),Ms=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,Ds=Object.freeze(Object.defineProperty({__proto__:null,default:Ms},Symbol.toStringTag,{value:"Module"})),Is=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,zs=Object.freeze(Object.defineProperty({__proto__:null,default:Is},Symbol.toStringTag,{value:"Module"})),Ns=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,Us=Object.freeze(Object.defineProperty({__proto__:null,default:Ns},Symbol.toStringTag,{value:"Module"})),Os=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,Bs=Object.freeze(Object.defineProperty({__proto__:null,default:Os},Symbol.toStringTag,{value:"Module"})),qs=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,Gs=Object.freeze(Object.defineProperty({__proto__:null,default:qs},Symbol.toStringTag,{value:"Module"})),Ws=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,Ys=Object.freeze(Object.defineProperty({__proto__:null,default:Ws},Symbol.toStringTag,{value:"Module"})),ui=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":Es,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":Ts,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":Fs,"../../assets/songs/La cena - Las Petunias.mp3":Ds,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":zs,"../../assets/songs/Tek It - Cafuné.mp3":Us,"../../assets/songs/You and I - d4vd .mp3":Bs,"../../assets/songs/gourmet - rickyedit.mp3":Gs,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":Ys}),tt=Object.keys(ui).map(n=>({title:n.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,r=>r.toUpperCase()),artist:"Only U Playlist",src:ui[n].default}));tt.length===0&&tt.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const Xs=.1,Hs=({visible:n,onClose:t})=>{const i=a.useRef(null),r=a.useRef(null),[u,h]=a.useState(!1),[b,w]=a.useState(0),[p,j]=a.useState(.3),[R,P]=a.useState(!1),[S,y]=a.useState(!1),[F,N]=a.useState(!1),[k,I]=a.useState(0),[B,U]=a.useState(0),L=tt[b];a.useEffect(()=>{i.current&&(i.current.volume=R?0:Math.pow(p,2)*Xs)},[p,R]),a.useEffect(()=>{u&&i.current&&i.current.play().catch(z=>console.log("Autoplay blocked",z))},[b]),a.useEffect(()=>{n||(y(!1),N(!1))},[n]),a.useEffect(()=>{const z=x=>{n&&(r.current&&r.current.contains(x.target)||x.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[n,t]);const o=()=>{i.current&&(I(i.current.currentTime),U(i.current.duration||0))},M=z=>{const x=parseFloat(z.target.value);I(x),i.current&&(i.current.currentTime=x)},Q=()=>{u?i.current.pause():i.current.play(),h(!u)},V=()=>{w(z=>(z+1)%tt.length)},_=z=>{w(z),h(!0),N(!1)},K=z=>{if(!z||isNaN(z))return"0:00";const x=Math.floor(z/60),O=Math.floor(z%60);return`${x}:${O<10?"0":""}${O}`};return e.jsxs(ce.div,{ref:r,className:"music-player-container",initial:"hidden",animate:n?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:i,src:L.src,onEnded:V,onTimeUpdate:o,onLoadedMetadata:o,preload:"auto"}),e.jsx(Pe,{children:F&&e.jsx(ce.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:tt.map((z,x)=>e.jsxs("div",{className:`playlist-item ${x===b?"active":""}`,onClick:()=>_(x),children:[x+1,". ",z.title]},x))})}),e.jsx("div",{className:"compact-info",onClick:()=>N(!F),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:L.title}),e.jsx(Ln,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:Q,children:u?e.jsx(Pn,{size:16}):e.jsx(En,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:B,value:k,onChange:M,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[K(k)," / ",K(B)]})]}),e.jsx("button",{className:"icon-btn",onClick:V,children:e.jsx(kn,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${S?"active":""}`,onClick:()=>y(!S),children:R||p===0?e.jsx(Tn,{size:18}):e.jsx(xi,{size:18})}),e.jsx(Pe,{children:S&&e.jsx(ce.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:R?0:p,onChange:z=>j(parseFloat(z.target.value))})})})]})]})]})},Vs=()=>{const[n,t]=a.useState(!1),[i,r]=a.useState(!1),[u,h]=a.useState(!1),b=a.useRef(null),{gameVolume:w,setGameVolume:p,resetProgress:j,achievements:R,ownedItems:P}=Ue();a.useEffect(()=>{const y=F=>{b.current&&!b.current.contains(F.target)&&t(!1)};return n&&document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[n]);const S=()=>{window.confirm("¿Estás seguro de que quieres borrar todo tu progreso (monedas y compras)?")&&(j(),t(!1))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"settings-container",ref:b,children:[e.jsx("button",{className:`settings-btn ${n?"active":""}`,onClick:()=>t(!n),"aria-label":"Ajustes",children:e.jsx(_n,{size:20})}),e.jsx(Pe,{children:n&&e.jsxs(ce.div,{className:"settings-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"label",children:[e.jsx(xi,{})," ",e.jsx("span",{children:"Sonido Juego"})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:w,onChange:y=>p(parseFloat(y.target.value))})]}),e.jsx("div",{className:"divider"}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{h(!0),t(!1)},children:[e.jsx(Pt,{})," Logros"]}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{r(!0),t(!1)},children:[e.jsx(Fn,{})," Documentación"]}),e.jsxs("button",{className:"setting-action-btn danger",onClick:S,children:[e.jsx(Mn,{})," Resetear Progreso"]})]})})]}),e.jsx(Pe,{children:i&&e.jsx("div",{className:"doc-overlay",onClick:()=>r(!1),children:e.jsxs(ce.div,{className:"doc-modal",onClick:y=>y.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>r(!1),children:e.jsx(pt,{size:24})}),e.jsx("h2",{children:"Mecánicas del Juego"}),e.jsxs("div",{className:"doc-content",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Monedas:"})," Haz click en las monedas flotantes para recolectarlas. Las monedas especiales (brillantes) valen más puntos."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tienda:"})," Usa tus monedas para desbloquear nuevos fondos, cursores y skins para las monedas."]})]})]})})}),e.jsx(Pe,{children:u&&e.jsx("div",{className:"doc-overlay",onClick:()=>h(!1),children:e.jsxs(ce.div,{className:"doc-modal",onClick:y=>y.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>h(!1),children:e.jsx(pt,{size:24})}),e.jsxs("h2",{children:[e.jsx(Pt,{style:{marginRight:"10px",color:"#ffd700"}})," ","Tus Logros"]}),e.jsx("div",{className:"doc-content",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:Object.entries(ot).map(([y,F])=>{const N=R.includes(y);let k=F.desc;if(y==="collector"){const I=Object.values(vt).flat().filter(L=>L.type!=="skin"),B=I.length,U=P?I.filter(L=>P.includes(L.id)).length:0;k=`${F.desc} (${U}/${B})`}if(y==="prestige"){const B=Object.keys(ot).filter(L=>L!=="prestige"),U=R.filter(L=>B.includes(L)).length;k=`${F.desc} (${U}/${B.length})`}return e.jsxs("div",{style:{background:N?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)",border:N?"1px solid rgba(255, 215, 0, 0.3)":"1px solid rgba(255, 255, 255, 0.1)",padding:"15px",borderRadius:"12px",opacity:N?1:.5,display:"flex",alignItems:"center",gap:"15px"},children:[e.jsx("div",{style:{fontSize:"2rem"},children:N?F.icon:e.jsx(Dn,{className:"locked-icon"})}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 5px 0",color:N?"#ffd700":"white"},children:F.title}),e.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"rgba(255,255,255,0.7)"},children:k})]})]},y)})})})]})})})]})},Js=()=>{const{notification:n,clearNotification:t}=Ue();a.useEffect(()=>{if(n){const u=setTimeout(()=>{t()},4e3);return()=>clearTimeout(u)}},[n,t]);const i=n&&n.type==="achievement",r=i?ot[n.id]:null;return e.jsx(Pe,{children:i&&r&&e.jsxs(ce.div,{className:"achievement-toast",initial:{y:-100,x:"-50%",opacity:0},animate:{y:20,x:"-50%",opacity:1},exit:{y:-100,x:"-50%",opacity:0},transition:{type:"spring",stiffness:300,damping:20},children:[e.jsx("div",{className:"icon-container",children:e.jsx(mi,{size:24,color:"#ffd700"})}),e.jsxs("div",{className:"text-container",children:[e.jsx("span",{className:"title",children:"¡Logro Desbloqueado!"}),e.jsxs("span",{className:"name",children:[r.icon," ",r.title]}),e.jsx("span",{className:"desc",children:r.desc})]})]})})},Ks=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"},{id:"skins",label:"Monedas",ariaLabel:"Personalizar Monedas"}],$s=[{label:"GitHub",link:"https://github.com"},{label:"Instagram",link:"https://instagram.com"}];function Qs(){const{isUnlocked:n,openShop:t,closeShop:i,lockGame:r,activeBackground:u,toggleGame:h,isGameActive:b,activeShop:w,addCoins:p,unlockAchievement:j,achievements:R}=Ue(),[P,S]=a.useState(!0),[y,F]=a.useState(!1),[N,k]=a.useState(!1),[I,B]=a.useState(!1),[U,L]=a.useState(!0),[o,M]=a.useState(!1),[Q,V]=a.useState(null),[_,K]=a.useState(null),[z,x]=a.useState(null),[O,A]=a.useState(null),[c,l]=a.useState(null),[f,m]=a.useState(null),[C,q]=a.useState(null),[Y,se]=a.useState(null);a.useEffect(()=>{n&&R&&!R.includes("prestige")&&Object.keys(ot).filter(E=>E!=="prestige").every(E=>R.includes(E))&&j("prestige")},[R,n,j]);const X=a.useRef(0);a.useEffect(()=>{if(!n)return;const te=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],de=ge=>{const E=ge.key.toLowerCase(),H=te[X.current].toLowerCase();E===H?(X.current++,X.current===te.length&&(p(1e6),j("matrix_master"),console.log("CHEAT ACTIVATED: KONAMI CODE!"),X.current=0)):(X.current=0,E===te[0].toLowerCase()&&(X.current=1))};return window.addEventListener("keydown",de),()=>window.removeEventListener("keydown",de)},[n,p,j]);const re=te=>{te&&t(te)},ie=()=>{N?(k(!1),I&&S(!0)):(M(!1),i(),B(P),S(!1),k(!0))},G=[{icon:e.jsx(In,{size:22}),label:"Texto",onClick:()=>{i(),b?h():S(!P)}},{icon:e.jsx(zn,{size:22}),label:"Música",onClick:()=>{i(),F(!y)}},{icon:e.jsx(Nn,{size:22}),label:"Tienda",onClick:()=>{w&&i(),M(!o)}},{icon:e.jsx(Un,{size:22,color:b?"#f700ff":"currentColor"}),label:"Juego",onClick:()=>{i(),b?S(U):(L(P),S(!0)),h()}},{icon:e.jsx(On,{size:22}),label:"Fondo",onClick:ie},{icon:e.jsx(Bn,{size:22}),label:"Bloquear",onClick:()=>{r&&(i(),F(!1),V(null),K(null),x(null),A(null),l(null),m(null),q(null),se(null),r())}}],[Z,ne]=a.useState(!0),[D,ue]=a.useState(0);return a.useEffect(()=>{const te=setInterval(()=>{ue(de=>{const ge=de+Math.floor(Math.random()*15)+5;return ge>=100?(clearInterval(te),setTimeout(()=>ne(!1),200),100):ge})},200);return()=>clearInterval(te)},[]),e.jsxs("main",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[e.jsx(Pe,{mode:"wait",children:Z&&e.jsx(Ls,{progress:D},"loader")}),e.jsx(Pe,{children:!n&&e.jsx(ce.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(Kn,{})},"lock-screen")}),e.jsx(Pe,{children:n&&e.jsxs(ce.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(bs,{floatingLinesConfig:Q,lightPillarsConfig:_,ballpitConfig:z,silkConfig:O,galaxyConfig:c,gradientConfig:f,pixelSnowConfig:C,hyperspeedConfig:Y}),e.jsx(Vs,{}),e.jsx(Js,{}),e.jsx(ws,{isOpen:o,onToggle:te=>{M(te),te&&k(!1)},items:Ks,socialItems:$s,isFixed:!0,position:"right",onItemClick:re,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(Do,{}),e.jsx(Wo,{}),e.jsx(As,{}),e.jsx(Pe,{children:P&&e.jsx(ce.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(Ho,{})})}),e.jsx(Pe,{children:N&&["floatinglines","lightpillars","ballpit","silk","galaxy","gradient","pixelsnow","hyperspeed"].includes(u)&&e.jsx(ce.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(xs,{onClose:ie,floatingLinesConfig:Q,setFloatingLinesConfig:V,lightPillarsConfig:_,setLightPillarsConfig:K,ballpitConfig:z,setBallpitConfig:x,silkConfig:O,setSilkConfig:A,galaxyConfig:c,setGalaxyConfig:l,gradientConfig:f,setGradientConfig:m,pixelSnowConfig:C,setPixelSnowConfig:q,hyperspeedConfig:Y,setHyperspeedConfig:se})})})}),e.jsx(Hs,{visible:y,onClose:()=>F(!1)}),e.jsx(js,{items:G,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}qn.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(Qs,{})}));
