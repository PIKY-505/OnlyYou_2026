import{c as Ki,j as e,r as a,u as Qi,C as Fe,a as Zi,F as en,R as vt,b as ot,d as tn,e as nn,f as on,g as sn,h as rn,i as fi,k as an,l as ln,m as pi,n as mi,o as q,p as cn,q as un,s as dn,t as hi,v as fn,w as pn,x as gi,y as xt,z as vi,A as mn,B as hn,D as gn,O as vn,E as xn,G as yn,P as bn,V as re,H as Et,I as xi,S as lt,W as ct,J as wn,M as _t,K as Le,L as Sn,N as Cn,Q as jn,T as Rn,U as An,X as Ln,Y as kn,Z as Ie,_ as Tt,$ as Ze,a0 as rt,a1 as et,a2 as Pn,a3 as Gt,a4 as _n,a5 as En,a6 as Tn,a7 as qt,a8 as Fn,a9 as nt,aa as Mn,ab as In,ac as Wt,ad as Dn,ae as zn,af as Yt,ag as Je,ah as Nn,ai as Un,aj as On,ak as Bn,al as Gn,am as yi,an as qn,ao as Wn,ap as Yn,aq as Xn,ar as bi,as as wi,at as Si,au as Ci,av as ji,aw as Ri,ax as Ai,ay as Hn}from"./vendor-Il3VxK1Q.js";import{u as Ve,a as it,b as Vn,c as tt,m as ie,A as _e}from"./framer-motion-BPWkq_kj.js";import{R as $n,T as Jn,P as Kn,C as Xt,M as Qn}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const w of m.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&n(w)}).observe(document,{childList:!0,subtree:!0});function i(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function n(u){if(u.ep)return;u.ep=!0;const m=i(u);fetch(u.href,m)}})();const Ue=Ki(o=>({isUnlocked:!1,unlockApp:()=>o({isUnlocked:!0}),lockGame:()=>o({isUnlocked:!1}),activeShop:null,openShop:t=>o({activeShop:t}),closeShop:()=>o({activeShop:null}),isGameActive:!1,toggleGame:()=>o(t=>({isGameActive:!t.isGameActive})),coins:0,addCoins:t=>o(i=>({coins:i.coins+t})),gameVolume:.4,setGameVolume:t=>o({gameVolume:t}),activeCoinSkin:"dase",setCoinSkin:t=>o({activeCoinSkin:t}),ownedItems:["gradient","default","none","dase"],buyItem:t=>o(i=>i.ownedItems.includes(t.id)?i:i.coins>=t.price?{coins:i.coins-t.price,ownedItems:[...i.ownedItems,t.id]}:i),achievements:[],notification:null,unlockAchievement:t=>o(i=>i.achievements.includes(t)?i:{achievements:[...i.achievements,t],notification:{type:"achievement",id:t}}),clearNotification:()=>o({notification:null}),resetProgress:()=>o({coins:0,ownedItems:["gradient","default","none","dase"],activeBackground:"gradient",activeCursor:"default",activeTrail:"none",activeCoinSkin:"dase",achievements:[],isGameActive:!1}),activeBackground:"gradient",setBackground:t=>o({activeBackground:t}),activeCursor:"default",setCursor:t=>o({activeCursor:t}),activeTrail:"none",setTrail:t=>o({activeTrail:t})})),Zn=({text:o,disabled:t=!1,speed:i=3,className:n="",color:u="#7c7c7c",shineColor:m="#ffffff",direction:w="right"})=>e.jsx("div",{className:`shiny-text ${w} ${t?"disabled":""} ${n}`,style:{"--shiny-speed":`${i}s`,"--base-color":u,"--shine-color":m},children:o}),Ht=o=>(o=o.replace("#",""),[parseInt(o.slice(0,2),16)/255,parseInt(o.slice(2,4),16)/255,parseInt(o.slice(4,6),16)/255]),eo=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,to=`
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
`,Li=a.forwardRef(function({uniforms:t},i){return Qi((n,u)=>{i.current.material.uniforms.uTime.value+=.1*u}),e.jsxs("mesh",{ref:i,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:eo,fragmentShader:to})]})});Li.displayName="SilkPlane";const ki=({speed:o=1,scale:t=2,color:i="#ff99cc",noiseIntensity:n=.5,rotation:u=0})=>{const m=a.useRef(),w=a.useMemo(()=>({uSpeed:{value:o},uScale:{value:t},uNoiseIntensity:{value:n},uColor:{value:new Fe(...Ht(i))},uRotation:{value:u},uTime:{value:0}}),[]);return a.useEffect(()=>{if(m.current){const S=m.current.material.uniforms;S.uSpeed.value=o,S.uScale.value=t,S.uNoiseIntensity.value=n,S.uColor.value.set(...Ht(i)),S.uRotation.value=u}},[o,t,n,i,u]),a.useEffect(()=>{const y=setInterval(()=>window.dispatchEvent(new Event("resize")),50),j=setTimeout(()=>clearInterval(y),1200);return()=>{clearInterval(y),clearTimeout(j)}},[]),e.jsx(Zi,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(Li,{ref:m,uniforms:w})})},io=()=>{const[o,t]=a.useState(""),[i,n]=a.useState(!1),u=Ue(y=>y.unlockApp),m="230824",w=y=>{const j=y.target.value.replace(/\D/g,"");if(j.length>6)return;let v=j;j.length>2&&(v=j.slice(0,2)+"/"+j.slice(2)),j.length>4&&(v=v.slice(0,5)+"/"+j.slice(4)),t(v),n(!1)},S=y=>{y.preventDefault(),o.replace(/\//g,"")===m?u():(n(!0),setTimeout(()=>n(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(ki,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(Zn,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:S,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:o,onChange:w,className:i?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(en,{size:20})})]})]})]})},no=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,oo=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"})),so=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,ro=Object.freeze(Object.defineProperty({__proto__:null,default:so},Symbol.toStringTag,{value:"Module"})),ao=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,lo=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),co=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,uo=Object.freeze(Object.defineProperty({__proto__:null,default:co},Symbol.toStringTag,{value:"Module"})),fo=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,po=Object.freeze(Object.defineProperty({__proto__:null,default:fo},Symbol.toStringTag,{value:"Module"})),mo=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,ho=Object.freeze(Object.defineProperty({__proto__:null,default:mo},Symbol.toStringTag,{value:"Module"})),go=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,vo=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"})),xo=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,yo=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),bo=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,wo=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"})),So=""+new URL("angel-C_MrdXcC.mp3",import.meta.url).href,Co=Object.freeze(Object.defineProperty({__proto__:null,default:So},Symbol.toStringTag,{value:"Module"})),Pi=""+new URL("angel-BIAg6Grr.png",import.meta.url).href,jo=Object.freeze(Object.defineProperty({__proto__:null,default:Pi},Symbol.toStringTag,{value:"Module"})),Ro=""+new URL("angelshiny-Cl20zV7k.png",import.meta.url).href,Ao=Object.freeze(Object.defineProperty({__proto__:null,default:Ro},Symbol.toStringTag,{value:"Module"})),Lo=""+new URL("cum-ByU__Qqe.mp3",import.meta.url).href,ko=Object.freeze(Object.defineProperty({__proto__:null,default:Lo},Symbol.toStringTag,{value:"Module"})),_i=""+new URL("cum-DtPuu3UA.png",import.meta.url).href,Po=Object.freeze(Object.defineProperty({__proto__:null,default:_i},Symbol.toStringTag,{value:"Module"})),_o=""+new URL("cumshiny-CClAKbp2.png",import.meta.url).href,Eo=Object.freeze(Object.defineProperty({__proto__:null,default:_o},Symbol.toStringTag,{value:"Module"})),To=""+new URL("dase-YSuIB7YX.mp3",import.meta.url).href,Fo=Object.freeze(Object.defineProperty({__proto__:null,default:To},Symbol.toStringTag,{value:"Module"})),Ei=""+new URL("dase-Ul_8ADqZ.png",import.meta.url).href,Mo=Object.freeze(Object.defineProperty({__proto__:null,default:Ei},Symbol.toStringTag,{value:"Module"})),Io=""+new URL("daseshiny-CaXO5CeC.png",import.meta.url).href,Do=Object.freeze(Object.defineProperty({__proto__:null,default:Io},Symbol.toStringTag,{value:"Module"})),Ti=""+new URL("natasha-D39Th0kg.png",import.meta.url).href,zo=Object.freeze(Object.defineProperty({__proto__:null,default:Ti},Symbol.toStringTag,{value:"Module"})),No=""+new URL("natashashiny-CF2gWSQ5.png",import.meta.url).href,Uo=Object.freeze(Object.defineProperty({__proto__:null,default:No},Symbol.toStringTag,{value:"Module"})),Oo=""+new URL("piky-CYu8zWqo.mp3",import.meta.url).href,Bo=Object.freeze(Object.defineProperty({__proto__:null,default:Oo},Symbol.toStringTag,{value:"Module"})),Fi=""+new URL("piky-B2I5vE9P.png",import.meta.url).href,Go=Object.freeze(Object.defineProperty({__proto__:null,default:Fi},Symbol.toStringTag,{value:"Module"})),qo=""+new URL("pikyshiny-B8-wh5r0.png",import.meta.url).href,Wo=Object.freeze(Object.defineProperty({__proto__:null,default:qo},Symbol.toStringTag,{value:"Module"})),Mi=""+new URL("rachel-BMn7rWE_.png",import.meta.url).href,Yo=Object.freeze(Object.defineProperty({__proto__:null,default:Mi},Symbol.toStringTag,{value:"Module"})),Xo=""+new URL("rachelshiny-D25m1LLz.png",import.meta.url).href,Ho=Object.freeze(Object.defineProperty({__proto__:null,default:Xo},Symbol.toStringTag,{value:"Module"})),ze=o=>vt.createElement(o),at={baby_steps:{title:"El Primer Paso",desc:"Recoge tu primera moneda, pobre.",icon:ze(mi)},on_fire:{title:"Dedos de Fuego",desc:"Alcanza un combo x5.",icon:ze(pi)},god_mode:{title:"Modo Dios",desc:"Mantén un combo x10.",icon:ze(ln)},shiny_lover:{title:"Shiny Spotter",desc:"Atrapa una moneda especial.",icon:ze(an)},sniper:{title:"Francotirador",desc:"Caza una moneda a máxima velocidad (>15).",icon:ze(fi)},piggy_bank:{title:"Algo es algo",desc:"Acumula 500 monedas. Para un kebab da.",icon:ze(rn)},stonks:{title:"Lobo de Wall Street",desc:"Consigue 1000 monedas.",icon:ze(sn)},crypto_king:{title:"Cripto Magnate",desc:"Llega a 5000 monedas.",icon:ze(on)},collector:{title:"Coleccionista",desc:"Compra todos los objetos de la tienda.",icon:ze(nn)},matrix_master:{title:"El Elegido",desc:"Descubre el código secreto de administrador.",icon:ze(tn)},prestige:{title:"Prestigio",desc:"Consigue todos los logros.",icon:ze(ot)}},Vo=({targetSelector:o=".cursor-target",spinDuration:t=2,hideDefaultCursor:i=!0,hoverDuration:n=.2,parallaxOn:u=!0})=>{const m=a.useRef(null),w=a.useRef(null),S=a.useRef(null),y=a.useRef(null),j=a.useRef(!1),v=a.useRef(null),L=a.useRef(null),R=a.useRef(0),C=a.useMemo(()=>{const k="ontouchstart"in window||navigator.maxTouchPoints>0,P=window.innerWidth<=768,O=navigator.userAgent||navigator.vendor||window.opera,D=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(O.toLowerCase());return k&&P||D},[]),T=a.useMemo(()=>({borderWidth:3,cornerSize:12}),[]),U=a.useCallback((k,P)=>{m.current&&q.to(m.current,{x:k,y:P,duration:.1,ease:"power3.out"})},[]);return a.useEffect(()=>{if(C||!m.current)return;const k=document.body.style.cursor;i&&(document.body.style.cursor="none");const P=m.current;w.current=P.querySelectorAll(".target-cursor-corner");let O=null,F=null,D=null;const l=Y=>{F&&Y.removeEventListener("mouseleave",F),F=null};q.set(P,{xPercent:-50,yPercent:-50,x:window.innerWidth/2,y:window.innerHeight/2}),S.current&&S.current.kill(),S.current=q.timeline({repeat:-1}).to(P,{rotation:"+=360",duration:t,ease:"none"});const J=()=>{if(!v.current||!m.current||!w.current)return;const Y=R.current;if(Y===0)return;if(O){if(!O.isConnected){F&&F();return}const h=O.getBoundingClientRect(),{borderWidth:p,cornerSize:b}=T;v.current=[{x:h.left-p,y:h.top-p},{x:h.right+p-b,y:h.top-p},{x:h.right+p-b,y:h.bottom+p-b},{x:h.left-p,y:h.bottom+p-b}]}const d=q.getProperty(m.current,"x"),c=q.getProperty(m.current,"y");Array.from(w.current).forEach((h,p)=>{const b=q.getProperty(h,"x"),G=q.getProperty(h,"y"),X=v.current[p].x-d,ae=v.current[p].y-c,$=b+(X-b)*Y,oe=G+(ae-G)*Y,se=Y>=.99?u?.2:0:.05;q.to(h,{x:$,y:oe,duration:se,ease:se===0?"none":"power1.out",overwrite:"auto"})})};L.current=J;const V=Y=>U(Y.clientX,Y.clientY);window.addEventListener("mousemove",V);const A=()=>{if(!O||!m.current)return;const Y=q.getProperty(m.current,"x"),d=q.getProperty(m.current,"y"),c=document.elementFromPoint(Y,d);c&&(c===O||c.closest(o)===O)||F&&F()};window.addEventListener("scroll",A,{passive:!0});const H=()=>{y.current&&(q.to(y.current,{scale:.7,duration:.3}),q.to(m.current,{scale:.9,duration:.2}))},M=()=>{y.current&&(q.to(y.current,{scale:1,duration:.3}),q.to(m.current,{scale:1,duration:.2}))};window.addEventListener("mousedown",H),window.addEventListener("mouseup",M);const W=Y=>{const d=Y.target,c=[];let r=d;for(;r&&r!==document.body;)r.matches(o)&&c.push(r),r=r.parentElement;const h=c[0]||null;if(!h||!m.current||!w.current||O===h)return;O&&l(O),D&&(clearTimeout(D),D=null),O=h;const p=Array.from(w.current);p.forEach(se=>q.killTweensOf(se)),q.killTweensOf(m.current,"rotation"),S.current?.pause(),q.set(m.current,{rotation:0});const b=h.getBoundingClientRect(),{borderWidth:G,cornerSize:X}=T,ae=q.getProperty(m.current,"x"),$=q.getProperty(m.current,"y");v.current=[{x:b.left-G,y:b.top-G},{x:b.right+G-X,y:b.top-G},{x:b.right+G-X,y:b.bottom+G-X},{x:b.left-G,y:b.bottom+G-X}],j.current=!0,q.ticker.add(L.current),q.to(R,{current:1,duration:n,ease:"power2.out"}),p.forEach((se,B)=>{q.to(se,{x:v.current[B].x-ae,y:v.current[B].y-$,duration:.2,ease:"power2.out"})});const oe=()=>{if(q.ticker.remove(L.current),j.current=!1,v.current=null,q.set(R,{current:0,overwrite:!0}),O=null,w.current){const se=Array.from(w.current);q.killTweensOf(se);const{cornerSize:B}=T,te=[{x:-B*1.5,y:-B*1.5},{x:B*.5,y:-B*1.5},{x:B*.5,y:B*.5},{x:-B*1.5,y:B*.5}],le=q.timeline();se.forEach((N,ue)=>{le.to(N,{x:te[ue].x,y:te[ue].y,duration:.3,ease:"power3.out"},0)})}D=setTimeout(()=>{if(!O&&m.current&&S.current){const B=q.getProperty(m.current,"rotation")%360;S.current.kill(),S.current=q.timeline({repeat:-1}).to(m.current,{rotation:"+=360",duration:t,ease:"none"}),q.to(m.current,{rotation:B+360,duration:t*(1-B/360),ease:"none",onComplete:()=>{S.current?.restart()}})}D=null},50),l(h)};F=oe,h.addEventListener("mouseleave",oe)};return window.addEventListener("mouseover",W,{passive:!0}),()=>{L.current&&q.ticker.remove(L.current),window.removeEventListener("mousemove",V),window.removeEventListener("mouseover",W),window.removeEventListener("scroll",A),window.removeEventListener("mousedown",H),window.removeEventListener("mouseup",M),O&&l(O),S.current?.kill(),document.body.style.cursor=k,j.current=!1,v.current=null,R.current=0}},[o,t,U,T,i,C,n,u]),a.useEffect(()=>{C||!m.current||!S.current||S.current.isActive()&&(S.current.kill(),S.current=q.timeline({repeat:-1}).to(m.current,{rotation:"+=360",duration:t,ease:"none"}))},[t,C]),C?null:e.jsxs("div",{ref:m,className:"target-cursor-wrapper",children:[e.jsx("div",{ref:y,className:"target-cursor-dot"}),e.jsx("div",{className:"target-cursor-corner corner-tl"}),e.jsx("div",{className:"target-cursor-corner corner-tr"}),e.jsx("div",{className:"target-cursor-corner corner-br"}),e.jsx("div",{className:"target-cursor-corner corner-bl"})]})};function $o({SIM_RESOLUTION:o=128,DYE_RESOLUTION:t=1440,CAPTURE_RESOLUTION:i=512,DENSITY_DISSIPATION:n=3.5,VELOCITY_DISSIPATION:u=2,PRESSURE:m=.1,PRESSURE_ITERATIONS:w=20,CURL:S=3,SPLAT_RADIUS:y=.2,SPLAT_FORCE:j=6e3,SHADING:v=!0,COLOR_UPDATE_SPEED:L=10,BACK_COLOR:R={r:.5,g:0,b:0},TRANSPARENT:C=!0}){const T=a.useRef(null),U=a.useRef(null);return a.useEffect(()=>{const k=T.current;if(!k)return;let P=!0;function O(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let F={SIM_RESOLUTION:o,DYE_RESOLUTION:t,DENSITY_DISSIPATION:n,VELOCITY_DISSIPATION:u,PRESSURE:m,PRESSURE_ITERATIONS:w,CURL:S,SPLAT_RADIUS:y,SPLAT_FORCE:j,SHADING:v,COLOR_UPDATE_SPEED:L},D=[new O];const{gl:l,ext:z}=J(k);z.supportLinearFiltering||(F.DYE_RESOLUTION=256,F.SHADING=!1);function J(s){const g={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let x=s.getContext("webgl2",g);const E=!!x;E||(x=s.getContext("webgl",g)||s.getContext("experimental-webgl",g));let ee,pe;E?(x.getExtension("EXT_color_buffer_float"),pe=x.getExtension("OES_texture_float_linear")):(ee=x.getExtension("OES_texture_half_float"),pe=x.getExtension("OES_texture_half_float_linear")),x.clearColor(0,0,0,1);const me=E?x.HALF_FLOAT:ee&&ee.HALF_FLOAT_OES;let Pe,ke,Be;return E?(Pe=V(x,x.RGBA16F,x.RGBA,me),ke=V(x,x.RG16F,x.RG,me),Be=V(x,x.R16F,x.RED,me)):(Pe=V(x,x.RGBA,x.RGBA,me),ke=V(x,x.RGBA,x.RGBA,me),Be=V(x,x.RGBA,x.RGBA,me)),{gl:x,ext:{formatRGBA:Pe,formatRG:ke,formatR:Be,halfFloatTexType:me,supportLinearFiltering:pe}}}function V(s,g,x,E){if(!A(s,g,x,E))switch(g){case s.R16F:return V(s,s.RG16F,s.RG,E);case s.RG16F:return V(s,s.RGBA16F,s.RGBA,E);default:return null}return{internalFormat:g,format:x}}function A(s,g,x,E){const ee=s.createTexture();s.bindTexture(s.TEXTURE_2D,ee),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,g,4,4,0,x,E,null);const pe=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,pe),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0),s.checkFramebufferStatus(s.FRAMEBUFFER)===s.FRAMEBUFFER_COMPLETE}class H{constructor(g,x){this.vertexShader=g,this.fragmentShaderSource=x,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(g){let x=0;for(let ee=0;ee<g.length;ee++)x+=Ji(g[ee]);let E=this.programs[x];if(E==null){let ee=d(l.FRAGMENT_SHADER,this.fragmentShaderSource,g);E=W(this.vertexShader,ee),this.programs[x]=E}E!==this.activeProgram&&(this.uniforms=Y(E),this.activeProgram=E)}bind(){l.useProgram(this.activeProgram)}}class M{constructor(g,x){this.uniforms={},this.program=W(g,x),this.uniforms=Y(this.program)}bind(){l.useProgram(this.program)}}function W(s,g){let x=l.createProgram();return l.attachShader(x,s),l.attachShader(x,g),l.linkProgram(x),l.getProgramParameter(x,l.LINK_STATUS)||console.trace(l.getProgramInfoLog(x)),x}function Y(s){let g={},x=l.getProgramParameter(s,l.ACTIVE_UNIFORMS);for(let E=0;E<x;E++){let ee=l.getActiveUniform(s,E).name;g[ee]=l.getUniformLocation(s,ee)}return g}function d(s,g,x){g=c(g,x);const E=l.createShader(s);return l.shaderSource(E,g),l.compileShader(E),l.getShaderParameter(E,l.COMPILE_STATUS)||console.trace(l.getShaderInfoLog(E)),E}function c(s,g){if(!g)return s;let x="";return g.forEach(E=>{x+="#define "+E+`
`}),x+s}const r=d(l.VERTEX_SHADER,`
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
      `),h=d(l.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),p=d(l.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
      `),b=`
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
    `,G=d(l.FRAGMENT_SHADER,`
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
      `),X=d(l.FRAGMENT_SHADER,`
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
      `,z.supportLinearFiltering?null:["MANUAL_FILTERING"]),ae=d(l.FRAGMENT_SHADER,`
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
      `),$=d(l.FRAGMENT_SHADER,`
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
      `),oe=d(l.FRAGMENT_SHADER,`
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
      `),se=d(l.FRAGMENT_SHADER,`
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
      `),B=d(l.FRAGMENT_SHADER,`
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
      `),te=(l.bindBuffer(l.ARRAY_BUFFER,l.createBuffer()),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),l.STATIC_DRAW),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,l.createBuffer()),l.bufferData(l.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),l.STATIC_DRAW),l.vertexAttribPointer(0,2,l.FLOAT,!1,0,0),l.enableVertexAttribArray(0),(s,g=!1)=>{s==null?(l.viewport(0,0,l.drawingBufferWidth,l.drawingBufferHeight),l.bindFramebuffer(l.FRAMEBUFFER,null)):(l.viewport(0,0,s.width,s.height),l.bindFramebuffer(l.FRAMEBUFFER,s.fbo)),g&&(l.clearColor(0,0,0,1),l.clear(l.COLOR_BUFFER_BIT)),l.drawElements(l.TRIANGLES,6,l.UNSIGNED_SHORT,0)});let le,N,ue,xe,ne;const be=new M(r,h),ce=new M(r,p),ge=new M(r,G),de=new M(r,X),Se=new M(r,ae),_=new M(r,$),K=new M(r,oe),I=new M(r,se),Q=new M(r,B),he=new H(r,b);function Z(){let s=It(F.SIM_RESOLUTION),g=It(F.DYE_RESOLUTION);const x=z.halfFloatTexType,E=z.formatRGBA,ee=z.formatRG,pe=z.formatR,me=z.supportLinearFiltering?l.LINEAR:l.NEAREST;l.disable(l.BLEND),le?le=De(le,g.width,g.height,E.internalFormat,E.format,x,me):le=fe(g.width,g.height,E.internalFormat,E.format,x,me),N?N=De(N,s.width,s.height,ee.internalFormat,ee.format,x,me):N=fe(s.width,s.height,ee.internalFormat,ee.format,x,me),ue=ye(s.width,s.height,pe.internalFormat,pe.format,x,l.NEAREST),xe=ye(s.width,s.height,pe.internalFormat,pe.format,x,l.NEAREST),ne=fe(s.width,s.height,pe.internalFormat,pe.format,x,l.NEAREST)}function ye(s,g,x,E,ee,pe){l.activeTexture(l.TEXTURE0);let me=l.createTexture();l.bindTexture(l.TEXTURE_2D,me),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,pe),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,pe),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),l.texImage2D(l.TEXTURE_2D,0,x,s,g,0,E,ee,null);let Pe=l.createFramebuffer();l.bindFramebuffer(l.FRAMEBUFFER,Pe),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,me,0),l.viewport(0,0,s,g),l.clear(l.COLOR_BUFFER_BIT);let ke=1/s,Be=1/g;return{texture:me,fbo:Pe,width:s,height:g,texelSizeX:ke,texelSizeY:Be,attach(Xe){return l.activeTexture(l.TEXTURE0+Xe),l.bindTexture(l.TEXTURE_2D,me),Xe}}}function fe(s,g,x,E,ee,pe){let me=ye(s,g,x,E,ee,pe),Pe=ye(s,g,x,E,ee,pe);return{width:s,height:g,texelSizeX:me.texelSizeX,texelSizeY:me.texelSizeY,get read(){return me},set read(ke){me=ke},get write(){return Pe},set write(ke){Pe=ke},swap(){let ke=me;me=Pe,Pe=ke}}}function Ce(s,g,x,E,ee,pe,me){let Pe=ye(g,x,E,ee,pe,me);return be.bind(),l.uniform1i(be.uniforms.uTexture,s.attach(0)),te(Pe),Pe}function De(s,g,x,E,ee,pe,me){return s.width===g&&s.height===x||(s.read=Ce(s.read,g,x,E,ee,pe,me),s.write=ye(g,x,E,ee,pe,me),s.width=g,s.height=x,s.texelSizeX=1/g,s.texelSizeY=1/x),s}function qe(){let s=[];F.SHADING&&s.push("SHADING"),he.setKeywords(s)}qe(),Z();let we=Date.now(),je=0;function Ee(){if(!P)return;const s=St();$e()&&Z(),Ct(s),f(),ve(s),Me(null),U.current=requestAnimationFrame(Ee)}function St(){let s=Date.now(),g=(s-we)/1e3;return g=Math.min(g,.016666),we=s,g}function $e(){let s=Oe(k.clientWidth),g=Oe(k.clientHeight);return k.width!==s||k.height!==g?(k.width=s,k.height=g,!0):!1}function Ct(s){je+=s*F.COLOR_UPDATE_SPEED,je>=1&&(je=$i(je,0,1),D.forEach(g=>{g.color=ut()}))}function f(){D.forEach(s=>{s.moved&&(s.moved=!1,Gi(s))})}function ve(s){l.disable(l.BLEND),_.bind(),l.uniform2f(_.uniforms.texelSize,N.texelSizeX,N.texelSizeY),l.uniform1i(_.uniforms.uVelocity,N.read.attach(0)),te(xe),K.bind(),l.uniform2f(K.uniforms.texelSize,N.texelSizeX,N.texelSizeY),l.uniform1i(K.uniforms.uVelocity,N.read.attach(0)),l.uniform1i(K.uniforms.uCurl,xe.attach(1)),l.uniform1f(K.uniforms.curl,F.CURL),l.uniform1f(K.uniforms.dt,s),te(N.write),N.swap(),Se.bind(),l.uniform2f(Se.uniforms.texelSize,N.texelSizeX,N.texelSizeY),l.uniform1i(Se.uniforms.uVelocity,N.read.attach(0)),te(ue),ce.bind(),l.uniform1i(ce.uniforms.uTexture,ne.read.attach(0)),l.uniform1f(ce.uniforms.value,F.PRESSURE),te(ne.write),ne.swap(),I.bind(),l.uniform2f(I.uniforms.texelSize,N.texelSizeX,N.texelSizeY),l.uniform1i(I.uniforms.uDivergence,ue.attach(0));for(let x=0;x<F.PRESSURE_ITERATIONS;x++)l.uniform1i(I.uniforms.uPressure,ne.read.attach(1)),te(ne.write),ne.swap();Q.bind(),l.uniform2f(Q.uniforms.texelSize,N.texelSizeX,N.texelSizeY),l.uniform1i(Q.uniforms.uPressure,ne.read.attach(0)),l.uniform1i(Q.uniforms.uVelocity,N.read.attach(1)),te(N.write),N.swap(),de.bind(),l.uniform2f(de.uniforms.texelSize,N.texelSizeX,N.texelSizeY),z.supportLinearFiltering||l.uniform2f(de.uniforms.dyeTexelSize,N.texelSizeX,N.texelSizeY);let g=N.read.attach(0);l.uniform1i(de.uniforms.uVelocity,g),l.uniform1i(de.uniforms.uSource,g),l.uniform1f(de.uniforms.dt,s),l.uniform1f(de.uniforms.dissipation,F.VELOCITY_DISSIPATION),te(N.write),N.swap(),z.supportLinearFiltering||l.uniform2f(de.uniforms.dyeTexelSize,le.texelSizeX,le.texelSizeY),l.uniform1i(de.uniforms.uVelocity,N.read.attach(0)),l.uniform1i(de.uniforms.uSource,le.read.attach(1)),l.uniform1f(de.uniforms.dissipation,F.DENSITY_DISSIPATION),te(le.write),le.swap()}function Me(s){l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.enable(l.BLEND),jt(s)}function jt(s){let g=l.drawingBufferWidth,x=l.drawingBufferHeight;he.bind(),F.SHADING&&l.uniform2f(he.uniforms.texelSize,1/g,1/x),l.uniform1i(he.uniforms.uTexture,le.read.attach(0)),te(s)}function Gi(s){let g=s.deltaX*F.SPLAT_FORCE,x=s.deltaY*F.SPLAT_FORCE;Ft(s.texcoordX,s.texcoordY,g,x,s.color)}function qi(s){const g=ut();g.r*=10,g.g*=10,g.b*=10;let x=10*(Math.random()-.5),E=30*(Math.random()-.5);Ft(s.texcoordX,s.texcoordY,x,E,g)}function Ft(s,g,x,E,ee){ge.bind(),l.uniform1i(ge.uniforms.uTarget,N.read.attach(0)),l.uniform1f(ge.uniforms.aspectRatio,k.width/k.height),l.uniform2f(ge.uniforms.point,s,g),l.uniform3f(ge.uniforms.color,x,E,0),l.uniform1f(ge.uniforms.radius,Wi(F.SPLAT_RADIUS/100)),te(N.write),N.swap(),l.uniform1i(ge.uniforms.uTarget,le.read.attach(0)),l.uniform3f(ge.uniforms.color,ee.r,ee.g,ee.b),te(le.write),le.swap()}function Wi(s){let g=k.width/k.height;return g>1&&(s*=g),s}function Mt(s,g,x,E){s.id=g,s.down=!0,s.moved=!1,s.texcoordX=x/k.width,s.texcoordY=1-E/k.height,s.prevTexcoordX=s.texcoordX,s.prevTexcoordY=s.texcoordY,s.deltaX=0,s.deltaY=0,s.color=ut()}function Rt(s,g,x,E){s.prevTexcoordX=s.texcoordX,s.prevTexcoordY=s.texcoordY,s.texcoordX=g/k.width,s.texcoordY=1-x/k.height,s.deltaX=Xi(s.texcoordX-s.prevTexcoordX),s.deltaY=Hi(s.texcoordY-s.prevTexcoordY),s.moved=Math.abs(s.deltaX)>0||Math.abs(s.deltaY)>0,s.color=E}function Yi(s){s.down=!1}function Xi(s){let g=k.width/k.height;return g<1&&(s*=g),s}function Hi(s){let g=k.width/k.height;return g>1&&(s/=g),s}function ut(){let s=Vi(Math.random(),1,1);return s.r*=.15,s.g*=.15,s.b*=.15,s}function Vi(s,g,x){let E,ee,pe,me,Pe,ke,Be,Xe;switch(me=Math.floor(s*6),Pe=s*6-me,ke=x*(1-g),Be=x*(1-Pe*g),Xe=x*(1-(1-Pe)*g),me%6){case 0:E=x,ee=Xe,pe=ke;break;case 1:E=Be,ee=x,pe=ke;break;case 2:E=ke,ee=x,pe=Xe;break;case 3:E=ke,ee=Be,pe=x;break;case 4:E=Xe,ee=ke,pe=x;break;case 5:E=x,ee=ke,pe=Be;break}return{r:E,g:ee,b:pe}}function $i(s,g,x){const E=x-g;return(s-g)%E+g}function It(s){let g=l.drawingBufferWidth/l.drawingBufferHeight;g<1&&(g=1/g);const x=Math.round(s),E=Math.round(s*g);return l.drawingBufferWidth>l.drawingBufferHeight?{width:E,height:x}:{width:x,height:E}}function Oe(s){const g=window.devicePixelRatio||1;return Math.floor(s*g)}function Ji(s){if(s.length===0)return 0;let g=0;for(let x=0;x<s.length;x++)g=(g<<5)-g+s.charCodeAt(x),g|=0;return g}function Dt(s){let g=D[0],x=Oe(s.clientX),E=Oe(s.clientY);Mt(g,-1,x,E),qi(g)}let zt=!1;function Nt(s){let g=D[0],x=Oe(s.clientX),E=Oe(s.clientY);if(zt)Rt(g,x,E,g.color);else{let ee=ut();Rt(g,x,E,ee),zt=!0}}function Ut(s){const g=s.targetTouches;let x=D[0];for(let E=0;E<g.length;E++){let ee=Oe(g[E].clientX),pe=Oe(g[E].clientY);Mt(x,g[E].identifier,ee,pe)}}function Ot(s){const g=s.targetTouches;let x=D[0];for(let E=0;E<g.length;E++){let ee=Oe(g[E].clientX),pe=Oe(g[E].clientY);Rt(x,ee,pe,x.color)}}function Bt(s){const g=s.changedTouches;let x=D[0];for(let E=0;E<g.length;E++)Yi(x)}return window.addEventListener("mousedown",Dt),window.addEventListener("mousemove",Nt),window.addEventListener("touchstart",Ut),window.addEventListener("touchmove",Ot,!1),window.addEventListener("touchend",Bt),Ee(),()=>{P=!1,U.current&&(cancelAnimationFrame(U.current),U.current=null),window.removeEventListener("mousedown",Dt),window.removeEventListener("mousemove",Nt),window.removeEventListener("touchstart",Ut),window.removeEventListener("touchmove",Ot),window.removeEventListener("touchend",Bt)}},[]),e.jsx("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:e.jsx("canvas",{ref:T,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})}const Jo=(o,t)=>{if(t){const i=t.getBoundingClientRect();return{x:o.clientX-i.left,y:o.clientY-i.top}}return{x:o.clientX,y:o.clientY}},Ko=({color:o="white",containerRef:t=null,targetSelector:i="a, button, .shop-item, .dock-item, .coin-entity"})=>{const n=a.useRef(null),u=a.useRef(null),m=a.useRef(null),w=a.useRef(null),S=a.useRef(null),y=a.useRef(null),j=a.useRef({x:0,y:0});return a.useEffect(()=>{const v=F=>{if(j.current=Jo(F,t?.current),t?.current){const D=t.current.getBoundingClientRect();F.clientX<D.left||F.clientX>D.right||F.clientY<D.top||F.clientY>D.bottom?q.to([u.current,m.current],{opacity:0}):q.to([u.current,m.current],{opacity:1})}},L=t?.current||window;L.addEventListener("mousemove",v),q.set([u.current,m.current],{opacity:0});const R=()=>{q.to([u.current,m.current],{duration:.9,ease:"Power3.easeOut",opacity:1}),y.current=requestAnimationFrame(P),L.removeEventListener("mousemove",R)};L.addEventListener("mousemove",R);const C={turbulence:0},T=q.timeline({paused:!0,onStart:()=>{u.current&&(u.current.style.filter="url(#filter-noise-x)"),m.current&&(m.current.style.filter="url(#filter-noise-y)")},onUpdate:()=>{w.current&&S.current&&(w.current.setAttribute("baseFrequency",C.turbulence),S.current.setAttribute("baseFrequency",C.turbulence))},onComplete:()=>{u.current&&m.current&&(u.current.style.filter=m.current.style.filter="none")}}).to(C,{duration:.5,ease:"power1",startAt:{turbulence:1},turbulence:0}),U=()=>T.restart(),k=()=>T.progress(1).kill(),P=()=>{u.current&&m.current&&(q.set(m.current,{x:j.current.x}),q.set(u.current,{y:j.current.y})),y.current=requestAnimationFrame(P)},O=F=>{if(!F.target||typeof F.target.closest!="function")return;const D=F.target.closest(i);D&&(!F.relatedTarget||!D.contains(F.relatedTarget))&&(U(),D.addEventListener("mouseleave",k,{once:!0}))};return document.addEventListener("mouseover",O),()=>{L.removeEventListener("mousemove",v),L.removeEventListener("mousemove",R),y.current&&cancelAnimationFrame(y.current),document.removeEventListener("mouseover",O)}},[t,i]),e.jsxs("div",{ref:n,className:"cursor",style:{position:t?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1e4},children:[e.jsx("svg",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"},children:e.jsxs("defs",{children:[e.jsxs("filter",{id:"filter-noise-x",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:w}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]}),e.jsxs("filter",{id:"filter-noise-y",children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.000001",numOctaves:"1",ref:S}),e.jsx("feDisplacementMap",{in:"SourceGraphic",scale:"40"})]})]})}),e.jsx("div",{ref:u,style:{position:"absolute",width:"100%",height:"1px",background:o,pointerEvents:"none",top:0,opacity:0}}),e.jsx("div",{ref:m,style:{position:"absolute",height:"100%",width:"1px",background:o,pointerEvents:"none",left:0,opacity:0}})]})},Qo=()=>{const o=Ve(-100),t=Ve(-100),i={damping:20,stiffness:300,mass:.2},n=it(o,i),u=it(t,i),m=Vn(n),w=tt(m,[-2e3,2e3],[-60,60]),S=60,y=tt([o,t,n,u],([v,L,R,C])=>{const T=C+S;return`M ${v-4} ${L} Q ${(v+R)/2-12} ${(L+T)/2} ${R} ${T}`}),j=tt([o,t,n,u],([v,L,R,C])=>{const T=C+S;return`M ${v+4} ${L} Q ${(v+R)/2+12} ${(L+T)/2} ${R} ${T}`});return a.useEffect(()=>{const v=L=>{o.set(L.clientX),t.set(L.clientY)};return window.addEventListener("mousemove",v),()=>window.removeEventListener("mousemove",v)},[o,t]),e.jsxs("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:9999},children:[e.jsxs("svg",{style:{width:"100%",height:"100%",overflow:"visible"},children:[e.jsx(ie.path,{d:y,stroke:"rgba(0,0,0,0.2)",strokeWidth:"4",fill:"none",style:{translateX:2,translateY:2}}),e.jsx(ie.path,{d:j,stroke:"rgba(0,0,0,0.2)",strokeWidth:"4",fill:"none",style:{translateX:2,translateY:2}}),e.jsx(ie.path,{d:y,stroke:"url(#chainGradient)",strokeWidth:"3",strokeDasharray:"1 3",strokeLinecap:"round",fill:"none"}),e.jsx(ie.path,{d:j,stroke:"url(#chainGradient)",strokeWidth:"3",strokeDasharray:"1 3",strokeLinecap:"round",fill:"none"}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"chainGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#ffd700"}),e.jsx("stop",{offset:"50%",stopColor:"#fff"}),e.jsx("stop",{offset:"100%",stopColor:"#ffd700"})]}),e.jsxs("filter",{id:"diamondGlow",children:[e.jsx("feGaussianBlur",{stdDeviation:"4",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]})]}),e.jsx(ie.div,{style:{position:"absolute",top:0,left:0,x:o,y:t,translateX:"-50%",translateY:"-50%",width:12,height:12,background:"radial-gradient(circle, #fff 30%, #ffd700 100%)",borderRadius:"50%",boxShadow:"0 0 10px #ffd700, 0 0 5px #fff",zIndex:20}}),e.jsxs(ie.div,{style:{position:"absolute",top:0,left:0,x:n,y:u,translateX:"-50%",translateY:S-30,rotate:w,zIndex:10,display:"flex",justifyContent:"center",alignItems:"center",width:60,height:60,filter:"drop-shadow(0 15px 25px rgba(0,0,0,0.3))"},children:[e.jsxs("svg",{width:"50",height:"50",viewBox:"0 0 100 100",style:{overflow:"visible"},children:[e.jsxs("g",{filter:"url(#diamondGlow)",children:[e.jsx("path",{d:"M45 15 L55 15 L50 25 Z",fill:"#ffd700"}),e.jsx("path",{d:"M20 35 L80 35 L100 35 L50 95 L0 35 Z",fill:"url(#diamondBodyGrad)",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1"}),e.jsx("path",{d:"M20 35 L35 20 L65 20 L80 35",fill:"#e0f7fa",opacity:"0.6"}),e.jsx("path",{d:"M35 20 L50 35 L65 20",fill:"#b2ebf2",opacity:"0.8"}),e.jsx("path",{d:"M20 35 L50 95 L80 35",fill:"none",stroke:"rgba(255,255,255,0.4)",strokeWidth:"0.5"}),e.jsx("path",{d:"M35 20 L50 95 L65 20",fill:"none",stroke:"rgba(255,255,255,0.3)",strokeWidth:"0.5"}),e.jsx("circle",{cx:"50",cy:"45",r:"15",fill:"white",fillOpacity:"0.2",style:{mixBlendMode:"overlay"}})]}),e.jsx("defs",{children:e.jsxs("linearGradient",{id:"diamondBodyGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#e1f5fe"}),e.jsx("stop",{offset:"40%",stopColor:"#4fc3f7"}),e.jsx("stop",{offset:"100%",stopColor:"#0288d1"})]})})]}),e.jsx("div",{style:{position:"absolute",top:"20%",left:"20%",width:"60%",height:"60%",background:"radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)",mixBlendMode:"screen",opacity:.8,animation:"diamondSparkle 3s infinite ease-in-out",pointerEvents:"none"}})]}),e.jsx("style",{children:`
        @keyframes diamondSparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(45deg); }
        }
      `})]})},Zo=""+new URL("ring-CJvK4024.gif",import.meta.url).href,gt={cursor_neon:{name:"Neon Pulse",price:100,desc:"Estilo Cyberpunk. Cambia de color.",icon:e.jsx(fn,{}),type:"replace",className:"cursor-neon"},cursor_gold:{name:"Gold Sparkle",price:200,desc:"Cursor de oro puro con rastro brillante.",icon:e.jsx(pi,{}),type:"replace",className:"cursor-gold",effect:"sparkle"},cursor_ring:{name:"Anillo",price:250,desc:"Un anillo animado.",icon:e.jsx(hi,{}),type:"replace",className:"cursor-ring",backgroundImage:Zo},cursor_blackhole:{name:"Agujero Negro",price:300,desc:"Singularidad que distorsiona la luz.",icon:e.jsx(dn,{}),type:"replace",className:"cursor-blackhole"},cursor_splash:{name:"Splash Fluid",price:600,desc:"Tinta fluida reactiva.",icon:e.jsx(un,{}),type:"custom",component:$o,hideNative:!1},cursor_crosshair:{name:"Crosshair",price:1e3,desc:"Líneas de precisión con distorsión.",icon:e.jsx(fi,{}),type:"custom",component:Ko},cursor_target:{name:"Target HUD",price:3e3,desc:"Sistema de fijación táctico.",icon:e.jsx(cn,{}),type:"custom",component:Vo},cursor_prestige:{name:"Prestigio",price:0,desc:"Símbolo de máxima excelencia.",icon:e.jsx(ot,{}),type:"custom",component:Qo,requiresAchievement:"prestige",hiddenInShop:!0}};function es(){const{activeCursor:o}=Ue(),t=a.useRef(null),[i,n]=a.useState(!1),[u,m]=a.useState([]),[w,S]=a.useState(!1);a.useRef(),a.useEffect(()=>{const v=k=>{const{clientX:P,clientY:O}=k;k.type==="mousemove"&&S(!0),t.current&&(t.current.style.transform=`translate3d(${P}px, ${O}px, 0)`);const F=gt[o];F?.effect&&F.effect==="sparkle"&&Math.random()>.7&&y(P,O,"sparkle")},L=k=>{if(k.touches.length>0){const P=k.touches[0];v({clientX:P.clientX,clientY:P.clientY,type:"touchmove"})}},R=k=>{S(!0),n(!0),L(k)},C=()=>{n(!1),S(!1)},T=()=>n(!0),U=()=>n(!1);return window.addEventListener("mousemove",v),window.addEventListener("mousedown",T),window.addEventListener("mouseup",U),window.addEventListener("touchmove",L,{passive:!0}),window.addEventListener("touchstart",R,{passive:!0}),window.addEventListener("touchend",C),()=>{window.removeEventListener("mousemove",v),window.removeEventListener("mousedown",T),window.removeEventListener("mouseup",U),window.removeEventListener("touchmove",L),window.removeEventListener("touchstart",R),window.removeEventListener("touchend",C)}},[o]);const y=(v,L,R)=>{const C=Date.now()+Math.random();m(T=>[...T,{id:C,x:v,y:L,type:R}]),setTimeout(()=>{m(T=>T.filter(U=>U.id!==C))},1e3)};a.useEffect(()=>{const v=gt[o];return v&&((v.type==="replace"||v.type==="custom")&&v.hideNative!==!1&&document.body.classList.add("hide-native-cursor"),v.bodyClass&&document.body.classList.add(v.bodyClass)),()=>{document.body.classList.remove("hide-native-cursor"),v&&v.bodyClass&&document.body.classList.remove(v.bodyClass)}},[o]);const j=gt[o];return pn.createPortal(e.jsxs("div",{className:"cursor-overlay",children:[u.map(v=>e.jsx("div",{className:"sparkle-particle",style:{left:v.x,top:v.y}},v.id)),j&&j.type==="replace"&&w&&e.jsx("div",{ref:t,className:"cursor-follower",children:e.jsx("div",{className:`${j.className} ${i?"clicking":""}`,style:j.backgroundImage?{backgroundImage:`url(${j.backgroundImage})`}:{}})}),j&&j.type==="custom"&&w&&e.jsx(j.component,{targetSelector:"button, .shop-item, input, a, .coin-entity, .dock-item, .dock-icon"})]}),document.body)}const Ii=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,Di=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,zi=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,Ni=""+new URL("duck-BnqypGlP.png",import.meta.url).href,Ui="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpAgoQDSR9aWoCAAANHklEQVRo3u1YaXRVRbb+qk6dc+6cm4kwBTMSBkNAMYBEaBEEERGxsRFFRe3GJ9j4wJa37AZppN/CtZ6rl3NAeTTggIDIEIiCCKJMYQqEOSEJZCIkN/cmufM5p+r9SCBEE7BZLN6ffGvd86NuDfur/e3auwroQAc60IEOdODmQa735yuTngAA+AI+QJYRDAQw84W/QYGCgZMG/X/b3gqsrcY3Z74MSZFRfbECEpHMhJBuRFFLtcoy/dOVi3/TxPNeeglvZWfjhbFjYOg6KFNwYt8ujHnqRSz84L1bToS21ajrYehaiAgibI2N9QPCXu/HxOcbpppt0xiTHbIsX3fSpe/9E//IzsbItGQQQmNAyABCpbjYhCSs+2wJXlm16pYTaVNarz//LAhB54qS0iWESHmqrG7hxIgO+P3TzE7nHAJSvWzj5lZj/vO551B8PB8RsZ0Q8vvAdQ2qzZEgAr5lDLhbp3Qvi4h8OuCqqaMCoBKDbLXBHBEJLRjEqCmTMXny5JsmIrXVmDVgAAShRmO9x60oar0h0SP22JgSSPLmb/LyPXKnOFwoPAcA2LlzAfRyIBDwQ4RDoFaH2QgH0wmho7kWnGVjdGy02WzSdP2OgN+vAoiVJJYMSrsSJvMZGzfU7/nXMpw9dAAzZs9BTm7urfPI3Oenwe2qhaaFY0Je7zKqmL4XQu8VER3zP4LzEp1I+GTtOgDA8w8/BE3T8NJ32/Fu1pDhVPBXFUnKMlEazSghFlmGQiWEOYc3HAYXgjf/whpIpUHIp6rd/qGuaV6z3Y6lX2+4dR75+Wg+1icnQwiiUcryHM7IkwIiTGV2GkBw6br1+NusGQgVlSA+NQWDR/+efPHajGcVwZdEm0wDI02qxSrLxMQYJNK0VxIhMDMGi8yIVWbUqsiymdEoXddH+EMhj+fM6b1RCclIjOqM6dOmIvfHH/8tIm0GO2n5aiAo1LXwxaDf9zUB3BACubm5KDt5GnckJ+DktxuR+9myHsww/hpjNsfZFPmq8dcTAgGBKjHYZYXysJF1sCpSXrZmLbjuw4E9PyPnu1y8/MTvsWrJkpuX1rXYtWsXwDmWLJyPbglJqDh/HvWuy3DGdI0J+L33M0UaEZ8YF+O55B7tJJJdZayNiQkEBAQA0fzRhYGQZsDPDQwc1e8gIeSnHTkHma7RtZDVozTk9imOSKQM6o+a4nIsWXd9yd2QyOvPTcO+b3PQPSUNIW8duGTtSqmY6HRanu7dv/uAvncnKql3dseBnaewJ/cYuFdvcnPzzEIAAgCHACQCiVFQJsFsVRGXEIU7ByYi68F0eOsD2PvDKRzdW+gpL6095GvQNgkmb/DVVJRFxifC0DQk3dkfi7M//PeInFyzBos+zoYsK2isqQZTLJ2FCE+J6mSdmj4wMePeB3qT3hkJMNtUQAhoIR2lRdUoOl2BBo8PWkiHpulQVBlWqwKrwwq7wwK70wKTWYbDaUFEpBWKSW52U5M5njovis9UYc+Okyg4WFLgdvnfFbL1C8JDAUMLIz1rKBb+873fRmTNmjXYlP0xhAAs0QnUdeHUKEcEm5c5rNfQEeP7IymtK2RFghC8abuvTEYpQAggSIsrCAAiWq/ULC8hxK8NIgSgBFrQwNmCcmxZuz98ZG/RJ2GDvUmJcAkhMOah0Zi+YOH1iSxYsAAle/aCcwOK2SZ7Llf+OSEl5o0JU4dGDRrWC7KJQXB+I0XeEhCJot7lx+pPfsDOrSdW6jC/yojhlhhB2rDf4c2///1q318dv8kmFUIAztgkqba8cHbfu7q/Nf31cfZ+mcmgFNfI4DZACJgsMtLS41Fb5c4oL6pyqFbHTgpo3upLOFpYdLVrq+N3zpQpYLKC5du+Q2XxsT+m9uk8f9qs0aaEtDgIbtw+Atdy4QL2CDOenjESd2clvRhodP0p/+cdYKoZf/2PP17t18oj+qWLYBLF+n+tHNW5q+2DF+aMdabe2e22Sal9NoDFZkKPxFjpzPEL/SUl8ojP4yo9c/QELjTUtyby2tRnoKgquGAxZgv96MmX7u99z3092wzI2wlCCAilEJzDGW2DJDHbmfyLXQhzbIrqHB16ZfZsbN66tUVa46fPREPNJcDQJ/YflDR0yIg+rU4kIQBu3F7PEAJUXnDh8J6zMAwDEMCQEb2R0qfz0KDXPTDsbcSeLVsBNMfIinfewdJ5c6Ha45yOSHXq78ZkUJNFac7FACEUBXkl+OrTHxAO6reRCcXp4xexfvlu+LwhAIDVbkJaejcrlZAVDrrgjIpuIbJ//wnoQT94ODAgsWdc/7R+3YHmuCAgCPjCyFm9H9UV9SD0hsXALYRAap9u8DUGUVZU2+QiAnRP6ATVxPppak92uaa6hUh0JycMLQgQ0bdrjxibxaq2nLIUuFBUhbLSagwfkwHF3P7t8IqeyS+KRvKrIpKASPTGmyIEomLtsNhNqCxzNSdbICrGAbNZjjUCLtUIh1qIOCIcMIQBAZgpbcqs16yJC0WXYLObkJjWFeCivTVR7/bjXEEZaqsbQJpzraEbcNd5YehXPAwE/WEcP1CMi0U10MLtS1UAYIxCVhj83iCuBK1hGBACukwkzghtITLp+T9AVq2QJHb8/OlKf3WFG4QQcC7ANY46lw+d46NhjzC3W1bUu3344B/r8fbc1TiyrxCgBIQS1F6ux0eLv0FpUU1TCUMJ3LUN+OyDbVj8ly9wLK+4Xc8QEGiagWAgBCpdbUT5hRr4A6Giex5cGrDarACaX1FOHTkBppohqWx34emq7A8XbZjeIynOGgpqRs/0Hvk1VY0OpkiptJ0FhRCw2FSMGj8QdAJFz/TmGCMEFqsZWQ9kQDHTq/VVp26RmDFvAqorPUju1bX9aoE0eTng0xCfGAcQCq/Hh0M/nfMH/UbOsV3PoqS46KqnAQCTs4aCcw5Iktnw+e/lXNxhCOFVrfbdENqr996fMveV+Y9DkgTayyxNRSMA3rogJJRA/EKShJImzXPRbq4ilGLbN4eQ8+U+vPjaONgcJuzIOYqdWwtWhgLKdNVEgsl9emFRdnbLu1ZS5l0o2p8HSmmAKNIOYXAwAkgkDF0XBVUXXUZDvV+KjLa02kFCaUulCwFw/Mowwa+TVCkBaWMMIQSNHj9+3nYCIb+Wt/zdrZqvMax66nxbOWdLiPAF9ZCERdnZrT1yBT/+uAXx/VJxftcJjJzwGJ4akQVuoIsEPeeRKYPvemzqfVDUJsGGwzpOHC5F/r5CcA6k35OAtPQeiIi0AWg7eRJKwHWBy1X1KDlbARCClD7dEBvnhGgeQyhBKKjj6//djS1fHTjFVOuUujpfMRGExdiOu71GBoxwEN1TeuG9r1a3TeSXWLrmc+QsWAg1ImKiKtPsEeP7x46fci8sVhPWr/wJe7YfR3xSHBrcXngbgrDYVDw4cRCGP5QOSSJouZQ07XLhqUp8v/EwzhWUwVvvh9mqQjXLeOyZ4RgyohcIpXDXeLFtw0Fs/mJfaSjIpxGD7DJH26GHDciKBYahIXPIYPx50aJrw+n6ePGxcTACITz5xByyfPlb44QenndHSuyAyFgHKymswtSXRyJzeC+Egwbqahux9/sT2Jl7FI8/MwwjJwwEhAGDN53oBYdLseLdbYiOc2DoyL7olhADm92C7ZsOI2/nKYx+PBOhQBgHfzqLsuKac4aB1/2NtRtjuqeCKRSfbv62XTtvSMTj8WD2E5MgMYaqsgo4IuyxoUBwrGEYszIGJw54450noaisaSpCwA2OVe9/j/27TiL97iRQSuDzhUBAUFJYhYTULpg+92HYnKbmuCLwe0N4+7UvcSq/zEWA81yIrYyxz90nTxV1yhwECoqVO7Zf1052IyJOpxMAMPPRR3DfsCwcO5ZfQyWxgkOqr6ttXH2p3KP2SI1riV1KYbGpqK32Vv+Qc2wDF1wjoCAgEpHExDGPD4qzRVqBK/cbCmhhDWHNABfkbZPZ8nHN4d3eqH6Z6HrfMBih4A1JAO080LWFvLPnsD0vD7lr18MwDDAmlzfWe7ufP1OR4brUSKrL61BefBm7vyvAzi35gXAI/70u7+AbPRQtl2s8N33suG/dZWVJ9e6GgQ6HBQBBXY0XpeeqsXX1fhQcKt1PmfImwGsjklJBJAmZQwdj8fIVv8m+m6oAJw3OBAHAJDkyEAo8QiDuYYx2IQRm3eCVIPIW1WLOpYSEYrt0AQFFeWkhCJW66EFtltUqP2yxqVGccy3gD9f5/dohMPa+4fMXVBwrwMGbsOmmiPzlqadxoegMKJNhhEPQ/ZcgpHhGCKd2S5Lm4+eFrJrAuYG+DzyIxvJyFB8/BKaYYIvvSzyFx2OFoUUIKumcknopMsZDGl38630H8dyj47Bi05bbQwRoSmCznpqMzEfHYfsnyxHw+iCEgKLImPlf87Fq6Uf4aOPGq/3nz5qF03n7wWQZXNOaYoRS6BRgTEGD24WU9P54//Mvb9akDnSgAx3owO3H/wGUgcIFOUeM9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMi0xMFQxNjoxMzozMCswMDowMC3bAQsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDItMTBUMTY6MTM6MzArMDA6MDBchrm3AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAyLTEwVDE2OjEzOjM2KzAwOjAwaEOtUgAAAABJRU5ErkJggg==",Oi=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,ts=""+new URL("galaxy-ChI-pR4w.gif",import.meta.url).href,is=""+new URL("silk-DaWETVYo.gif",import.meta.url).href,ns=""+new URL("ballpit-DiGrqYC4.gif",import.meta.url).href,os=""+new URL("floatinglines-BnKOb4-3.gif",import.meta.url).href,ss=""+new URL("lightpillar-B2qC6hEB.gif",import.meta.url).href,rs=""+new URL("pixel-snow-XBi11QsW.gif",import.meta.url).href,as=""+new URL("hyperspeed-bdn_De3N.gif",import.meta.url).href,yt={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico gradiente.",price:0,type:"background",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:100,type:"background",previewColor:"#ff99cc",image:is},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:200,type:"background",previewColor:"#00ffff",image:ss},{id:"pixelsnow",name:"Pixel Snow",description:"Nevada retro pixelada.",price:300,type:"background",previewColor:"#ffffff",image:rs},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:500,type:"background",previewColor:"#bd71ff",image:os},{id:"galaxy",name:"Galaxy",description:"Un viaje por las estrellas.",price:600,type:"background",previewColor:"#000",image:ts},{id:"hyperspeed",name:"Hyperspeed",description:"Velocidad luz y distorsión.",price:900,type:"background",previewColor:"#d856bf",image:as},{id:"ballpit",name:"Ball Pit",description:"Un parque de bolas!!",price:1500,type:"background",previewColor:"#29b1ff",image:ns}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:0,type:"cursor",previewColor:"transparent",icon:e.jsx(gi,{})},...Object.entries(gt).map(([o,t])=>({id:o,name:t.name,description:t.desc,price:t.price,type:"cursor",previewColor:"transparent",icon:t.icon,requiresAchievement:t.requiresAchievement,hiddenInShop:t.hiddenInShop})).sort((o,t)=>o.price-t.price)],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:0,type:"trail",previewColor:"transparent",icon:e.jsx(mn,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:100,type:"trail",previewColor:"#ffadad",icon:e.jsx("img",{src:Ii,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:100,type:"trail",previewColor:"#a89c8d",icon:e.jsx("img",{src:Di,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:100,type:"trail",previewColor:"#ffecb6",icon:e.jsx("img",{src:zi,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:100,type:"trail",previewColor:"#ebe371",icon:e.jsx("img",{src:Ni,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:100,type:"trail",previewColor:"#e3e4b2",icon:e.jsx("img",{src:Ui,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:100,type:"trail",previewColor:"#a3a3a3",icon:e.jsx("img",{src:Oi,alt:"Skeleton",style:{width:"40px"}})}],skins:[{id:"dase",name:"Dase Original",description:"Esta piba.",price:0,type:"skin",previewColor:"#f6ffa3",icon:e.jsx("img",{src:Ei,alt:"Dase",style:{width:"100px",height:"60px",objectFit:"contain",borderRadius:"20%"}})},{id:"angel",name:"Angel",description:"Monke.",price:0,type:"skin",previewColor:"#e0ffff",icon:e.jsx("img",{src:Pi,alt:"Angel",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})},{id:"rachel",name:"Rachel",description:"La criminologa.",price:0,type:"skin",previewColor:"#ffc0cb",icon:e.jsx("img",{src:Mi,alt:"Rachel",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})},{id:"natasha",name:"Natalia",description:"Es Natalia...",price:0,type:"skin",previewColor:"#ffcccb",icon:e.jsx("img",{src:Ti,alt:"Natasha",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})},{id:"piky",name:"Piky",description:"La moneda de Piky.",price:0,type:"skin",previewColor:"#ff99cc",icon:e.jsx("img",{src:Fi,alt:"Piky",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})},{id:"cum",name:"Cum",description:"La moneda de Cum.",price:0,type:"skin",previewColor:"#ffffff",icon:e.jsx("img",{src:_i,alt:"Cum",style:{width:"60px",height:"60px",objectFit:"contain",borderRadius:"10%"}})}]},ls=[{id:"backgrounds",label:"Fondos",icon:e.jsx(hn,{})},{id:"cursors",label:"Cursores",icon:e.jsx(gi,{})},{id:"trails",label:"Mascotas",icon:e.jsx(gn,{})},{id:"skins",label:"Monedas",icon:e.jsx(hi,{})}],cs=({enableGoldTheme:o=!0})=>{const{activeShop:t,openShop:i,closeShop:n,activeBackground:u,setBackground:m,activeCursor:w,setCursor:S,activeTrail:y,setTrail:j,coins:v,buyItem:L,ownedItems:R,activeCoinSkin:C,setCoinSkin:T,achievements:U,unlockAchievement:k}=Ue(),[P,O]=a.useState(t),[F,D]=a.useState([]),l=a.useRef();a.useEffect(()=>{t&&O(t)},[t]),a.useEffect(()=>{R&&!U.includes("collector")&&Object.values(yt).flat().filter(r=>r.type!=="skin"&&!r.requiresAchievement).every(r=>R.includes(r.id))&&k("collector")},[R,U,k]);const J=U&&U.includes("collector")&&o,V=a.useCallback(()=>{J&&(D(d=>d.map(c=>({...c,x:c.x+c.vx,y:c.y+c.vy,life:c.life-.02,size:c.size*.95})).filter(c=>c.life>0)),l.current=requestAnimationFrame(V))},[J]);a.useEffect(()=>(J&&t&&(l.current=requestAnimationFrame(V)),()=>cancelAnimationFrame(l.current)),[J,t,V]);const A=d=>{if(!J)return;const c=d.currentTarget.getBoundingClientRect(),r=d.clientX-c.left,h=d.clientY-c.top;if(Math.random()>.5)return;const p={id:Math.random(),x:r,y:h,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5+.5,life:1,size:Math.random()*3+2};D(b=>[...b,p])},H=(yt[P]||[]).filter(d=>d.hiddenInShop?!1:d.requiresAchievement?U.includes(d.requiresAchievement):!0),M=d=>R.includes(d.id)||d.price===0,W=d=>{M(d)?(t==="backgrounds"&&m(d.id),t==="cursors"&&S(d.id),t==="trails"&&j(d.id),t==="skins"&&T(d.id)):v>=d.price&&(L(d),t==="backgrounds"&&m(d.id),t==="cursors"&&S(d.id),t==="trails"&&j(d.id),t==="skins"&&T(d.id))},Y=d=>t==="backgrounds"?u===d:t==="cursors"?w===d:t==="trails"?y===d:t==="skins"?C===d:!1;return e.jsx(_e,{children:t&&e.jsxs(ie.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:n,style:{position:"absolute",inset:0,pointerEvents:"auto"}}),e.jsxs(ie.div,{className:`shop-window ${J?"gold-theme":""}`,onMouseMove:A,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[e.jsx(ie.div,{className:"gold-bg-layer",initial:{opacity:0},animate:{opacity:J?1:0},transition:{duration:.8}}),F.map(d=>e.jsx("div",{className:"gold-particle",style:{left:d.x,top:d.y,width:d.size,height:d.size,opacity:d.life}},d.id)),e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:ls.map(d=>e.jsxs("button",{onClick:()=>i(d.id),className:`tab-btn ${t===d.id?"active":""}`,children:[d.icon,e.jsx("span",{children:d.label}),t===d.id&&e.jsx(ie.div,{layoutId:"activeTab",className:"active-line"})]},d.id))}),e.jsxs("div",{className:"coin-display",children:[v," 🪙"]}),e.jsx("button",{onClick:n,className:"close-btn",children:e.jsx(xt,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",P==="backgrounds"?"Fondos":P==="cursors"?"Cursores":P==="trails"?"Mascotas":"Monedas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(_e,{mode:"wait",children:e.jsx(ie.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:H.map(d=>e.jsxs("div",{className:`shop-item ${Y(d.id)?"equipped":""}`,onClick:()=>W(d),children:[e.jsxs("div",{className:`item-preview ${d.type}`,style:{background:d.previewColor},children:[d.image&&e.jsx("img",{src:d.image,alt:d.name,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),d.icon&&e.jsx("div",{className:"preview-icon",style:{zIndex:1},children:d.icon}),Y(d.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(vi,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:d.name}),e.jsx("p",{children:d.description}),M(d)?e.jsx("span",{className:"price-tag",style:{color:"#00e676",background:"rgba(0, 230, 118, 0.15)"},children:Y(d.id)?"Equipado":"En propiedad"}):e.jsxs("span",{className:"price-tag",children:[d.price," Monedas"]})]})]},d.id))},P)})})]})]})})},Te=80,Vt=Object.assign({"../../assets/coin/angel/angel.mp3":Co,"../../assets/coin/angel/angel.png":jo,"../../assets/coin/angel/angelshiny.png":Ao,"../../assets/coin/cum/cum.mp3":ko,"../../assets/coin/cum/cum.png":Po,"../../assets/coin/cum/cumshiny.png":Eo,"../../assets/coin/dase/dase.mp3":Fo,"../../assets/coin/dase/dase.png":Mo,"../../assets/coin/dase/daseshiny.png":Do,"../../assets/coin/natasha/natasha.png":zo,"../../assets/coin/natasha/natashashiny.png":Uo,"../../assets/coin/piky/piky.mp3":Bo,"../../assets/coin/piky/piky.png":Go,"../../assets/coin/piky/pikyshiny.png":Wo,"../../assets/coin/rachel/rachel.png":Yo,"../../assets/coin/rachel/rachelshiny.png":Ho}),Ye={};Object.keys(Vt).forEach(o=>{const t=o.split("/"),i=t[t.length-2],n=t[t.length-1].toLowerCase();Ye[i]||(Ye[i]={normal:null,shiny:null,sound:null});const u=Vt[o].default;n.includes("shiny")?Ye[i].shiny=u:n.endsWith("mp3")||n.endsWith("wav")?Ye[i].sound=u:Ye[i].normal=u});Object.values(Ye).forEach(o=>{!o.shiny&&o.normal&&(o.shiny=o.normal)});function us(){const{addCoins:o,activeCoinSkin:t,gameVolume:i,unlockAchievement:n,coins:u,achievements:m,ownedItems:w,activeCursor:S}=Ue(),[y,j]=a.useState([]),[v,L]=a.useState([]),[R,C]=a.useState(1),T=a.useRef(),U=a.useRef(null),k=a.useRef(!1),P=a.useRef(0),O=a.useRef(0);a.useEffect(()=>(k.current=!0,()=>{k.current=!1}),[]);const F=Ye[t]||Ye.dase||{normal:"",shiny:"",sound:null};a.useEffect(()=>{F&&F.sound&&(U.current=new Audio(F.sound),U.current.volume=i)},[F,i]),a.useEffect(()=>{const r=window.innerWidth,h=window.innerHeight,p=[];for(let b=0;b<5;b++)p.push({id:`normal-${b}`,type:"normal",x:Math.random()*(r-Te),y:Math.random()*(h-Te),vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6,img:F.normal,value:1});p.push({id:"shiny-1",type:"shiny",x:Math.random()*(r-Te),y:Math.random()*(h-Te),vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,img:F.shiny,value:5}),j(p)},[t,F]);const D=a.useCallback(()=>{P.current>0&&Date.now()>P.current&&(C(r=>r>1?1:r),P.current=0),j(r=>r.map(h=>{let{x:p,y:b,vx:G,vy:X}=h;return p+=G,b+=X,(p<=0||p>=window.innerWidth-Te)&&(G=-G,p=Math.max(0,Math.min(p,window.innerWidth-Te))),(b<=0||b>=window.innerHeight-Te)&&(X=-X,b=Math.max(0,Math.min(b,window.innerHeight-Te))),{...h,x:p,y:b,vx:G,vy:X}})),L(r=>r.length===0?r:r.map(h=>({...h,x:h.x+h.vx,y:h.y+h.vy,vy:h.vy+.5,life:h.life-.03})).filter(h=>h.life>0)),T.current=requestAnimationFrame(D)},[]);a.useEffect(()=>(T.current=requestAnimationFrame(D),()=>cancelAnimationFrame(T.current)),[D]);const l=r=>{let h=R+1;h>20&&(h=20),C(h);const p=Math.max(500,2500-h*100);O.current=p,P.current=Date.now()+p;const b=r.value*h;o(b),navigator.vibrate&&(r.type==="shiny"?navigator.vibrate([50,30,50]):navigator.vibrate(40)),n("baby_steps"),h>=5&&n("on_fire"),h>=10&&n("god_mode"),r.type==="shiny"&&n("shiny_lover"),Math.sqrt(r.vx*r.vx+r.vy*r.vy)>15&&n("sniper");const X=u+b;if(X>=500&&n("piggy_bank"),X>=1e3&&n("stonks"),X>=5e3&&n("crypto_king"),Object.values(yt).flat().filter(B=>B.type!=="skin").every(B=>w.includes(B.id))&&n("collector"),m){const B=Object.keys(at);B.length,B.filter(N=>N!=="prestige").every(N=>m.includes(N))&&n("prestige")}if(r.type==="shiny"&&U.current){const B=U.current.cloneNode();B.volume=i,B.play().catch(te=>console.log("Audio error:",te))}const oe=[],se=r.type==="shiny"?"#ffd700":"#ffffff";for(let B=0;B<12;B++)oe.push({id:`${Date.now()}-${B}-${Math.random()}`,x:r.x+Te/2,y:r.y+Te/2,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,life:1,color:se});L(B=>[...B,...oe]),j(B=>B.filter(te=>te.id!==r.id)),setTimeout(()=>{k.current&&j(B=>{const te=window.innerWidth,le=window.innerHeight,N=1+Math.min(h,10)*.15,ue={...r,id:`${r.type}-${Date.now()}-${Math.random()}`,x:Math.random()*(te-Te),y:Math.random()*(le-Te),vx:(Math.random()-.5)*(r.type==="shiny"?12:8)*N,vy:(Math.random()-.5)*(r.type==="shiny"?12:8)*N};return[...B,ue]})},2e3)},z=Date.now(),J=Math.max(0,P.current-z),V=R>1&&O.current>0?J/O.current:0,A=60,H=8,M=A-H*2,W=M*2*Math.PI,Y=W-V*W,c=`hsl(${Math.min(120,Math.max(0,V*120))}, 100%, 50%)`;return e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:30,pointerEvents:"auto",overflow:"hidden",touchAction:"none"},children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"game-hud-coins",style:{position:"absolute",top:"110px",left:"30px",zIndex:100,display:"flex",alignItems:"center",gap:"10px",background:"rgba(0,0,0,0.5)",padding:"10px 20px",borderRadius:"30px",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(5px)",color:"#ffd700",fontFamily:"var(--font-main)",fontWeight:"bold",fontSize:"1.2rem",pointerEvents:"none"},children:[e.jsx("img",{src:F.normal,alt:"coin",style:{width:"24px",height:"24px"}}),e.jsx("span",{children:u})]}),e.jsx("div",{className:"game-hud-combo",style:{position:"absolute",top:"40px",right:"40px",pointerEvents:"none",zIndex:100,display:"flex",justifyContent:"center",alignItems:"center",width:"140px",height:"140px"},children:R>1&&e.jsxs(e.Fragment,{children:[e.jsxs("svg",{height:A*2,width:A*2,style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%) rotate(-90deg)"},children:[e.jsx("circle",{stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:H,fill:"transparent",r:M,cx:A,cy:A}),e.jsx("circle",{stroke:c,strokeWidth:H,strokeDasharray:W+" "+W,style:{strokeDashoffset:Y,transition:"stroke-dashoffset 0.1s linear"},strokeLinecap:"round",fill:"transparent",r:M,cx:A,cy:A})]}),e.jsxs("div",{style:{fontFamily:"var(--font-main)",fontSize:"3rem",fontWeight:"900",color:"#f700ff",textShadow:"0 0 20px rgba(247, 0, 255, 0.8)",transform:`scale(${1+Math.min(R,10)*.1})`,transition:"transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},children:["x",R]})]})}),v.map(r=>e.jsx("div",{style:{position:"absolute",left:r.x,top:r.y,width:"8px",height:"8px",backgroundColor:r.color,borderRadius:"50%",opacity:r.life,pointerEvents:"none",transform:"translate(-50%, -50%)",boxShadow:`0 0 8px ${r.color}`}},r.id)),y.map(r=>{const p=S==="cursor_target"?10:0;return e.jsxs("div",{className:`coin-entity ${r.type==="shiny"?"is-shiny":""}`,onPointerDown:b=>{b.stopPropagation(),b.preventDefault(),l(r)},style:{position:"absolute",transform:`translate3d(${r.x-p}px, ${r.y-p}px, 0)`,width:Te+p*2,height:Te+p*2,cursor:"pointer",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center",zIndex:20,touchAction:"none"},children:[r.type==="shiny"&&e.jsx("div",{className:"shiny-glint"}),e.jsx("img",{src:r.img,alt:"coin",style:{width:Te,height:Te,objectFit:"contain",pointerEvents:"none",borderRadius:"15%",filter:r.type==="shiny"?"drop-shadow(0 0 5px gold)":"none"},draggable:!1})]},r.id)})]})}const ds=Object.assign({"../../assets/img/photos/bridge.jpeg":oo,"../../assets/img/photos/first.jpg":ro,"../../assets/img/photos/graduated.jpeg":lo,"../../assets/img/photos/halloween.jpg":uo,"../../assets/img/photos/miestrella.jpg":po,"../../assets/img/photos/murder.jpeg":ho,"../../assets/img/photos/rock.jpeg":vo,"../../assets/img/photos/sleepy.jpg":yo,"../../assets/img/photos/sunshine.jpeg":wo}),At=Object.values(ds).map(o=>o.default),fs=()=>{const[o,t]=a.useState(null),{isGameActive:i}=Ue();let n=[...At];if(n.length>0)for(;n.length<18;)n=[...n,...At];const u=[...n,...n];return e.jsx(_e,{mode:"wait",children:i?e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{width:"100%",height:"100%"},children:e.jsx(us,{})},"game"):e.jsxs(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"main-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),At.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:u.map((m,w)=>e.jsx("img",{src:m,alt:`Memory ${w}`,className:"gallery-item",onClick:()=>t(m)},w))})}),e.jsx(_e,{children:o&&e.jsx(ie.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(ie.img,{src:o,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:m=>m.stopPropagation()})})})]},"content")})},ps=({color1:o="#b117f8",color2:t="#2c0b2e",speed:i=20})=>e.jsxs("div",{style:{position:"absolute",inset:0,width:"100%",height:"100%",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:`linear-gradient(to bottom, ${o}, ${t})`,animation:`spinGradient ${i}s linear infinite`}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),ms=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,hs=`
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
`,gs=({focal:o=[.5,.5],rotation:t=[1,0],starSpeed:i=0,density:n=1.5,hueShift:u=300,disableAnimation:m=!1,speed:w=.5,glowIntensity:S=.5,saturation:y=.8,twinkleIntensity:j=.5,rotationSpeed:v=.05,transparent:L=!0,colorCycleSpeed:R=10,rainbow:C=!1,warp:T=!1,...U})=>{const k=a.useRef(null),P=a.useRef(u),O=a.useRef(null),F=a.useRef({starSpeed:i,disableAnimation:m,rainbow:C,colorCycleSpeed:R,warp:T,hueShift:u});return a.useEffect(()=>{F.current={starSpeed:i,disableAnimation:m,rainbow:C,colorCycleSpeed:R,warp:T,hueShift:u}},[i,m,C,R,T,u]),a.useEffect(()=>{if(!k.current)return;const D=k.current;D.innerHTML="";const l=new $n({alpha:L,premultipliedAlpha:!1,dpr:1}),z=l.gl;L?(z.enable(z.BLEND),z.blendFunc(z.SRC_ALPHA,z.ONE_MINUS_SRC_ALPHA),z.clearColor(0,0,0,0)):z.clearColor(0,0,0,1);let J;function V(){l.setSize(D.offsetWidth*1,D.offsetHeight*1),O.current&&(O.current.uniforms.uResolution.value=new Xt(z.canvas.width,z.canvas.height,z.canvas.width/z.canvas.height))}window.addEventListener("resize",V,!1),V();const A=new Jn(z);J=new Kn(z,{vertex:ms,fragment:hs,uniforms:{uTime:{value:0},uResolution:{value:new Xt(z.canvas.width,z.canvas.height,z.canvas.width/z.canvas.height)},uFocal:{value:new Float32Array(o)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:i},uDensity:{value:n},uHueShift:{value:u},uSpeed:{value:w},uGlowIntensity:{value:S},uSaturation:{value:y},uTwinkleIntensity:{value:j},uRotationSpeed:{value:v},uTransparent:{value:L}}}),O.current=J;const H=new Qn(z,{geometry:A,program:J});let M,W=0;const d=1e3/30;function c(r){if(M=requestAnimationFrame(c),!k.current||!O.current)return;const h=r-W;if(h<d)return;W=r-h%d;const{starSpeed:p,disableAnimation:b,rainbow:G,colorCycleSpeed:X,warp:ae,hueShift:$}=F.current;if(!b){J.uniforms.uTime.value=r*.001;const oe=ae?p*10:p;J.uniforms.uStarSpeed.value=r*.001*oe/10,G?(P.current+=X*.05,J.uniforms.uHueShift.value=P.current%360):J.uniforms.uHueShift.value=$}l.render({scene:H})}return M=requestAnimationFrame(c),D.appendChild(z.canvas),z.canvas.style.width="100%",z.canvas.style.height="100%",z.canvas.style.display="block",z.canvas.style.willChange="transform",()=>{cancelAnimationFrame(M),window.removeEventListener("resize",V),D&&z.canvas&&D.contains(z.canvas)&&D.removeChild(z.canvas),z.getExtension("WEBGL_lose_context")?.loseContext(),O.current=null}},[L]),a.useEffect(()=>{if(!O.current)return;const D=O.current.uniforms;D.uFocal.value=new Float32Array(o),D.uRotation.value=new Float32Array(t),D.uDensity.value=n,D.uSpeed.value=w,D.uGlowIntensity.value=S,D.uSaturation.value=y,D.uTwinkleIntensity.value=j,D.uRotationSpeed.value=v},[o,t,n,w,S,y,j,v]),e.jsx("div",{ref:k,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},...U})},vs=vt.memo(gs);class xs{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#i;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#C;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#o=!1;#n=!1;isDisposed=!1;#s;#r;#a;#l=new Et;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#h(),this.#g(),this.#v(),this.resize(),this.#x()}#h(){this.camera=new xi,this.cameraFov=this.camera.fov}#g(){this.scene=new lt}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new ct(t),this.renderer.outputColorSpace=wn}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#r=new ResizeObserver(this.#c.bind(this)),this.#r.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#r?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#o=t[0].isIntersecting,this.#o?this.#m():this.#u()}#f(){this.#o&&(document.hidden?this.#u():this.#m())}#c(){this.#a&&clearTimeout(this.#a),this.#a=setTimeout(this.resize.bind(this),100)}resize(){let t,i;this.#e.size instanceof Object?(t=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,i=window.innerHeight),this.size.width=t,this.size.height=i,this.size.ratio=t/i,this.#w(),this.#S(),this.onAfterResize(this.size)}#w(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#p(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#p(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#p(t){const i=Math.tan(_t.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*_t.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#S(){this.renderer.setSize(this.size.width,this.size.height),this.#i?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(Math.min(t,2)),this.size.pixelRatio=t}get postprocessing(){return this.#i}set postprocessing(t){this.#i=t,this.render=t.render.bind(t)}#m(){if(this.#n)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#n=!0,this.#l.start(),t()}#u(){this.#n&&(cancelAnimationFrame(this.#d),this.#n=!1,this.#l.stop())}#C(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(i=>{const n=t.material[i];n!==null&&typeof n=="object"&&typeof n.dispose=="function"&&n.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#i?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const Ge=new Map,Ne=new Le;let Lt=!1;function ys(o){const t={position:new Le,nPosition:new Le,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...o};return(function(i,n){Ge.has(i)||(Ge.set(i,n),Lt||(document.body.addEventListener("pointermove",$t),document.body.addEventListener("pointerleave",Kt),document.body.addEventListener("click",Jt),document.body.addEventListener("touchstart",Qt,{passive:!1}),document.body.addEventListener("touchmove",Zt,{passive:!1}),document.body.addEventListener("touchend",dt,{passive:!1}),document.body.addEventListener("touchcancel",dt,{passive:!1}),Lt=!0))})(o.domElement,t),t.dispose=()=>{const i=o.domElement;Ge.delete(i),Ge.size===0&&(document.body.removeEventListener("pointermove",$t),document.body.removeEventListener("pointerleave",Kt),document.body.removeEventListener("click",Jt),document.body.removeEventListener("touchstart",Qt),document.body.removeEventListener("touchmove",Zt),document.body.removeEventListener("touchend",dt),document.body.removeEventListener("touchcancel",dt),Lt=!1)},t}function $t(o){Ne.x=o.clientX,Ne.y=o.clientY,bs()}function bs(){for(const[o,t]of Ge){const i=o.getBoundingClientRect();wt(i)?(bt(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function Jt(o){Ne.x=o.clientX,Ne.y=o.clientY;for(const[t,i]of Ge){const n=t.getBoundingClientRect();bt(i,n),wt(n)&&i.onClick(i)}}function Kt(){for(const o of Ge.values())o.hover&&(o.hover=!1,o.onLeave(o))}function Qt(o){if(o.touches.length>0){Ne.x=o.touches[0].clientX,Ne.y=o.touches[0].clientY;for(const[t,i]of Ge){const n=t.getBoundingClientRect();wt(n)&&(i.touching=!0,bt(i,n),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function Zt(o){if(o.touches.length>0){Ne.x=o.touches[0].clientX,Ne.y=o.touches[0].clientY;for(const[t,i]of Ge){const n=t.getBoundingClientRect();bt(i,n),wt(n)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function dt(){for(const[,o]of Ge)o.touching&&(o.touching=!1,o.hover&&(o.hover=!1,o.onLeave(o)))}function bt(o,t){const{position:i,nPosition:n}=o;i.x=Ne.x-t.left,i.y=Ne.y-t.top,n.x=i.x/t.width*2-1,n.y=-i.y/t.height*2+1}function wt(o){const{x:t,y:i}=Ne,{left:n,top:u,width:m,height:w}=o;return t>=n&&t<=n+m&&i>=u&&i<=u+w}const{randFloat:ws,randFloatSpread:kt}=_t,Pt=new re,Re=new re,ft=new re,Ss=new re,Ae=new re,pt=new re,Ke=new re,We=new re,mt=new re,ei=new re;class Cs{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new re,this.#e(),this.setSizes()}#e(){const{config:t,positionData:i}=this;this.center.toArray(i,0);for(let n=1;n<t.count;n++){const u=3*n;i[u]=kt(2*t.maxX),i[u+1]=kt(2*t.maxY),i[u+2]=kt(2*t.maxZ)}}setSizes(){const{config:t,sizeData:i}=this;i[0]=t.size0;for(let n=1;n<t.count;n++)i[n]=ws(t.minSize,t.maxSize)}update(t){const{config:i,center:n,positionData:u,sizeData:m,velocityData:w}=this;let S=0;i.controlSphere0&&(S=1,Pt.fromArray(u,0),Pt.lerp(n,.1).toArray(u,0),Ss.set(0,0,0).toArray(w,0));for(let y=S;y<i.count;y++){const j=3*y;Re.fromArray(u,j),Ae.fromArray(w,j),Ae.y-=t.delta*i.gravity*m[y],Ae.multiplyScalar(i.friction),Ae.clampLength(0,i.maxVelocity),Re.add(Ae),Re.toArray(u,j),Ae.toArray(w,j)}for(let y=S;y<i.count;y++){const j=3*y;Re.fromArray(u,j),Ae.fromArray(w,j);const v=m[y];for(let R=y+1;R<i.count;R++){const C=3*R;ft.fromArray(u,C),pt.fromArray(w,C);const T=m[R];Ke.copy(ft).sub(Re);const U=Ke.length(),k=v+T;if(U<k){const P=k-U;We.copy(Ke).normalize().multiplyScalar(.5*P),mt.copy(We).multiplyScalar(Math.max(Ae.length(),1)),ei.copy(We).multiplyScalar(Math.max(pt.length(),1)),Re.sub(We),Ae.sub(mt),Re.toArray(u,j),Ae.toArray(w,j),ft.add(We),pt.add(ei),ft.toArray(u,C),pt.toArray(w,C)}}if(i.controlSphere0){Ke.copy(Pt).sub(Re);const R=Ke.length(),C=v+m[0];if(R<C){const T=C-R;We.copy(Ke.normalize()).multiplyScalar(T),mt.copy(We).multiplyScalar(Math.max(Ae.length(),1)),Re.sub(We),Ae.sub(mt)}}Math.abs(Re.x)+v>i.maxX&&(Re.x=Math.sign(Re.x)*(i.maxX-v),Ae.x=-Ae.x*i.wallBounce),i.gravity===0?Math.abs(Re.y)+v>i.maxY&&(Re.y=Math.sign(Re.y)*(i.maxY-v),Ae.y=-Ae.y*i.wallBounce):Re.y-v<-i.maxY&&(Re.y=-i.maxY+v,Ae.y=-Ae.y*i.wallBounce);const L=Math.max(i.maxZ,i.maxSize);Math.abs(Re.z)+v>L&&(Re.z=Math.sign(Re.z)*(i.maxZ-v),Ae.z=-Ae.z*i.wallBounce),Re.toArray(u,j),Ae.toArray(w,j)}}explode(t,i=2){const{positionData:n,velocityData:u,config:m}=this;for(let w=0;w<m.count;w++){const S=3*w,y=n[S]-t.x,j=n[S+1]-t.y,v=n[S+2]-t.z,L=y*y+j*j+v*v;if(L<60){const R=Math.sqrt(L)+.01,C=i*50/(R+1),T=(Math.random()-.5)*1.5,U=(Math.random()-.5)*1.5,k=(Math.random()-.5)*1.5;u[S]+=(y/R+T)*C,u[S+1]+=(j/R+U)*C,u[S+2]+=(v/R+k)*C}}}}class js extends kn{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
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
      `);const n=Ie.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",n),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const Rs={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0,enableExplosion:!1,rainbow:!1},Qe=new vn;class As extends Sn{constructor(t,i={}){const n={...Rs,...i},u=new Cn,m=new jn(t,.04).fromScene(u).texture,w=new Rn,S=new js({envMap:m,...n.materialParams});S.envMapRotation.x=-Math.PI/2,super(w,S,n.count),this.config=n,this.physics=new Cs(n),this.#e(),this.setColors(n.colors),this.rainbowHue=0}#e(){this.ambientLight=new An(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new Ln(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(n){let u,m;function w(S){u=S,m=[],u.forEach(y=>{m.push(new Fe(y))})}return w(n),{setColors:w,getColorAt:function(S,y=new Fe){const j=Math.max(0,Math.min(1,S))*(u.length-1),v=Math.floor(j),L=m[v];if(v>=u.length-1)return L.clone();const R=j-v,C=m[v+1];return y.r=L.r+R*(C.r-L.r),y.g=L.g+R*(C.g-L.g),y.b=L.b+R*(C.b-L.b),y}}})(t);for(let n=0;n<this.count;n++)this.setColorAt(n,i.getColorAt(n/this.count)),n===0&&this.light.color.copy(i.getColorAt(n/this.count));this.instanceColor.needsUpdate=!0}}update(t){if(this.physics.update(t),this.config.rainbow){this.rainbowHue+=t.delta*.2,this.light.color.setHSL(this.rainbowHue%1,1,.5);for(let i=0;i<this.count;i++){const n=(this.rainbowHue+i*.05)%1,u=new Fe().setHSL(n,.9,.6);this.setColorAt(i,u)}this.instanceColor.needsUpdate=!0}for(let i=0;i<this.count;i++)Qe.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Qe.scale.setScalar(0):Qe.scale.setScalar(this.physics.sizeData[i]),Qe.updateMatrix(),this.setMatrixAt(i,Qe.matrix),i===0&&this.light.position.copy(Qe.position);this.instanceMatrix.needsUpdate=!0}}function Ls(o,t={}){const i=new xs({canvas:o,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let n;i.renderer.toneMapping=xn,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),j(t);const u=new yn,m=new bn(new re(0,0,1),0),w=new re;let S=!1;o.style.touchAction="pan-y",o.style.userSelect="none",o.style.webkitUserSelect="none";const y=ys({domElement:o,onMove(){u.setFromCamera(y.nPosition,i.camera),i.camera.getWorldDirection(m.normal),u.ray.intersectPlane(m,w),n.physics.center.copy(w),n.config.controlSphere0=!0},onClick(){n&&n.config.enableExplosion&&n.physics.explode(n.physics.center)},onLeave(){n.config.controlSphere0=!1}});function j(v){n&&(i.clear(),i.scene.remove(n)),n=new As(i.renderer,v),i.scene.add(n)}return i.onBeforeRender=v=>{S||n.update(v)},i.onAfterResize=v=>{n.config.maxX=v.wWidth/2,n.config.maxY=v.wHeight/2},{three:i,get spheres(){return n},setCount(v){j({...n.config,count:v})},togglePause(){S=!S},dispose(){y.dispose(),i.dispose()}}}const ks=({className:o="",followCursor:t=!0,count:i=100,gravity:n=.5,friction:u=.9975,wallBounce:m=.95,colors:w=[0,0,0],enableExplosion:S=!1,rainbow:y=!1,...j})=>{const v=a.useRef(null),L=a.useRef(null);return a.useEffect(()=>{const R=v.current;if(R)return L.current=Ls(R,{followCursor:t,count:i,gravity:n,friction:u,wallBounce:m,colors:w,enableExplosion:S,rainbow:y,...j}),()=>{L.current&&L.current.dispose()}},[]),a.useEffect(()=>{const R=L.current;if(!R||!R.spheres)return;const C=R.spheres.config;C.gravity=n,C.friction=u,C.wallBounce=m,C.followCursor=t,C.enableExplosion=S,C.rainbow=y,R.spheres.setColors(w)},[n,u,m,t,w,S,y]),a.useEffect(()=>{const R=L.current;R&&R.setCount(i)},[i]),e.jsx("canvas",{className:o,ref:v,style:{width:"100%",height:"100%"}})},Ps=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,_s=`
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
`,ht=8;function ti(o){let t=o.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,n=255,u=255;return t.length===3?(i=parseInt(t[0]+t[0],16),n=parseInt(t[1]+t[1],16),u=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),n=parseInt(t.slice(2,4),16),u=parseInt(t.slice(4,6),16)),new re(i/255,n/255,u/255)}function Es({linesGradient:o,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:n=[5],topWavePosition:u,middleWavePosition:m,bottomWavePosition:w={x:2,y:-.7,rotate:-1},animationSpeed:S=1,interactive:y=!1,bendRadius:j=5,bendStrength:v=-.5,mouseDamping:L=.05,mixBlendMode:R="screen",amplitude:C=1,rainbow:T=!1}){const U=a.useRef(null),k=a.useRef(null),P=a.useRef(null),O=a.useRef(new Le(-1e3,-1e3)),F=a.useRef(new Le(-1e3,-1e3)),D=a.useRef(0),l=a.useRef(0),z=a.useRef(T),J=a.useRef(y);a.useEffect(()=>{J.current=y},[y]),a.useEffect(()=>{z.current=T},[T]);const V=r=>{if(typeof i=="number")return i;if(!t.includes(r))return 0;const h=t.indexOf(r);return i[h]??6},A=r=>{if(typeof n=="number")return n;if(!t.includes(r))return .1;const h=t.indexOf(r);return n[h]??.1},H=t.includes("top")?V("top"):0,M=t.includes("middle")?V("middle"):0,W=t.includes("bottom")?V("bottom"):0,Y=t.includes("top")?A("top")*.01:.01,d=t.includes("middle")?A("middle")*.01:.01,c=t.includes("bottom")?A("bottom")*.01:.01;return a.useEffect(()=>{if(P.current&&o&&o.length>0&&!T){const r=o.slice(0,ht);P.current.uniforms.lineGradientCount.value=r.length,r.forEach((h,p)=>{const b=ti(h);P.current.uniforms.lineGradient.value[p].set(b.x,b.y,b.z)})}},[o,T]),a.useEffect(()=>{if(!P.current)return;const r=P.current.uniforms;r.animationSpeed.value=S,r.amplitude.value=C,r.bendRadius.value=j,r.bendStrength.value=v,r.interactive.value=y,r.enableTop.value=t.includes("top"),r.enableMiddle.value=t.includes("middle"),r.enableBottom.value=t.includes("bottom");const h=b=>{if(typeof i=="number")return i;if(!t.includes(b))return 0;const G=t.indexOf(b);return i[G]??6},p=b=>{if(typeof n=="number")return n;if(!t.includes(b))return .1;const G=t.indexOf(b);return n[G]??.1};r.topLineCount.value=t.includes("top")?h("top"):0,r.middleLineCount.value=t.includes("middle")?h("middle"):0,r.bottomLineCount.value=t.includes("bottom")?h("bottom"):0,r.topLineDistance.value=t.includes("top")?p("top")*.01:.01,r.middleLineDistance.value=t.includes("middle")?p("middle")*.01:.01,r.bottomLineDistance.value=t.includes("bottom")?p("bottom")*.01:.01},[S,C,j,v,y,t,i,n]),a.useEffect(()=>{if(!U.current)return;const r=new lt,h=new Tt(-1,1,1,-1,0,1);h.position.z=1;const p=new ct({antialias:!0,alpha:!1});p.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),p.domElement.style.width="100%",p.domElement.style.height="100%",U.current.appendChild(p.domElement),k.current=p;const b={iTime:{value:0},iResolution:{value:new re(1,1,1)},animationSpeed:{value:S},amplitude:{value:C},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:H},middleLineCount:{value:M},bottomLineCount:{value:W},topLineDistance:{value:Y},middleLineDistance:{value:d},bottomLineDistance:{value:c},topWavePosition:{value:new re(u?.x??10,u?.y??.5,u?.rotate??-.4)},middleWavePosition:{value:new re(m?.x??5,m?.y??0,m?.rotate??.2)},bottomWavePosition:{value:new re(w?.x??2,w?.y??-.7,w?.rotate??.4)},iMouse:{value:new Le(-1e3,-1e3)},interactive:{value:y},bendRadius:{value:j},bendStrength:{value:v},bendInfluence:{value:0},lineGradient:{value:Array.from({length:ht},()=>new re(1,1,1))},lineGradientCount:{value:0}};if(o&&o.length>0){const N=o.slice(0,ht);b.lineGradientCount.value=N.length,N.forEach((ue,xe)=>{const ne=ti(ue);b.lineGradient.value[xe].set(ne.x,ne.y,ne.z)})}const G=new Ze({uniforms:b,vertexShader:Ps,fragmentShader:_s});P.current=G;const X=new rt(2,2),ae=new et(X,G);r.add(ae);const $=new Et,oe=()=>{const N=U.current,ue=N.clientWidth||1,xe=N.clientHeight||1;p.setSize(ue,xe,!1);const ne=p.domElement.width,be=p.domElement.height;b.iResolution.value.set(ne,be,1)};oe();const se=typeof ResizeObserver<"u"?new ResizeObserver(oe):null;se&&U.current&&se.observe(U.current);const B=N=>{if(!J.current)return;const ue=p.domElement.getBoundingClientRect(),xe=N.clientX-ue.left,ne=N.clientY-ue.top,be=p.getPixelRatio();O.current.set(xe*be,(ue.height-ne)*be),D.current=1};window.addEventListener("pointermove",B);let te=0;const le=()=>{if(b.iTime.value=$.getElapsedTime(),J.current&&(F.current.lerp(O.current,L),b.iMouse.value.copy(F.current),l.current+=(D.current-l.current)*L,b.bendInfluence.value=l.current),z.current){const N=$.getElapsedTime();b.lineGradientCount.value<3&&(b.lineGradientCount.value=3);for(let ue=0;ue<ht;ue++){const xe=(N*.1+ue*.15)%1,ne=new Fe().setHSL(xe,.8,.5);b.lineGradient.value[ue].set(ne.r,ne.g,ne.b)}}p.render(r,h),te=requestAnimationFrame(le)};return le(),()=>{cancelAnimationFrame(te),se&&U.current&&se.disconnect(),window.removeEventListener("pointermove",B),X.dispose(),G.dispose(),p.dispose(),p.domElement.parentElement&&p.domElement.parentElement.removeChild(p.domElement)}},[]),e.jsx("div",{ref:U,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:R}})}const Ts=({topColor:o="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:n=.3,interactive:u=!1,className:m="",glowAmount:w=.005,pillarWidth:S=3,pillarHeight:y=.4,noiseIntensity:j=.5,mixBlendMode:v="screen",pillarRotation:L=0,quality:R="high"})=>{const C=a.useRef(null),T=a.useRef(null),U=a.useRef(null),k=a.useRef(null),P=a.useRef(null),O=a.useRef(null),F=a.useRef(null),D=a.useRef(new Le(0,0)),l=a.useRef(0),[z,J]=a.useState(!0);return a.useEffect(()=>{const V=document.createElement("canvas");V.getContext("webgl")||V.getContext("experimental-webgl")||J(!1)},[]),a.useEffect(()=>{if(!C.current||!z)return;const V=C.current,A=V.clientWidth,H=V.clientHeight,M=new lt;P.current=M;const W=new Tt(-1,1,1,-1,0,1);O.current=W;const Y=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),d=Y||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let c=R;d&&R==="high"&&(c="medium"),Y&&R!=="low"&&(c="low");const r={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},h=r[c]||r.medium;let p;try{p=new ct({antialias:!1,alpha:!0,powerPreference:c==="high"?"high-performance":"low-power",precision:h.precision,stencil:!1,depth:!1})}catch{J(!1);return}p.setSize(A,H),p.setPixelRatio(h.pixelRatio),C.current.appendChild(p.domElement),U.current=p;const b=de=>{const Se=new Fe(de);return new re(Se.r,Se.g,Se.b)},G=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,X=`
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
    `,ae=L*Math.PI/180,$=Math.sin(.4),oe=Math.cos(.4),se=new Ze({vertexShader:G,fragmentShader:X,uniforms:{uTime:{value:0},uResolution:{value:new Le(A,H)},uMouse:{value:D.current},uTopColor:{value:b(o)},uBottomColor:{value:b(t)},uIntensity:{value:i},uInteractive:{value:u},uGlowAmount:{value:w},uPillarWidth:{value:S},uPillarHeight:{value:y},uNoiseIntensity:{value:j},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(ae)},uPillarRotSin:{value:Math.sin(ae)},uWaveSin:{value:$},uWaveCos:{value:oe}},transparent:!0,depthWrite:!1,depthTest:!1});k.current=se;const B=new rt(2,2);F.current=B;const te=new et(B,se);M.add(te);let le=null;const N=de=>{if(!u||le)return;le=window.setTimeout(()=>{le=null},16);const Se=V.getBoundingClientRect(),_=(de.clientX-Se.left)/Se.width*2-1,K=-((de.clientY-Se.top)/Se.height)*2+1;D.current.set(_,K)};u&&window.addEventListener("pointermove",N,{passive:!0});let ue=performance.now();const ne=1e3/(c==="low"?30:60),be=de=>{if(!k.current||!U.current||!P.current||!O.current)return;const Se=de-ue;if(Se>=ne){l.current+=.016*n;const _=l.current;k.current.uniforms.uTime.value=_,k.current.uniforms.uRotCos.value=Math.cos(_*.3),k.current.uniforms.uRotSin.value=Math.sin(_*.3),U.current.render(P.current,O.current),ue=de-Se%ne}T.current=requestAnimationFrame(be)};T.current=requestAnimationFrame(be);let ce=null;const ge=()=>{ce&&clearTimeout(ce),ce=window.setTimeout(()=>{if(!U.current||!k.current||!C.current)return;const de=C.current.clientWidth,Se=C.current.clientHeight;U.current.setSize(de,Se),k.current.uniforms.uResolution.value.set(de,Se)},150)};return window.addEventListener("resize",ge,{passive:!0}),()=>{window.removeEventListener("resize",ge),u&&window.removeEventListener("pointermove",N),T.current&&cancelAnimationFrame(T.current),U.current&&(U.current.dispose(),U.current.forceContextLoss(),V.contains(U.current.domElement)&&V.removeChild(U.current.domElement)),k.current&&k.current.dispose(),F.current&&F.current.dispose(),U.current=null,k.current=null,P.current=null,O.current=null,F.current=null,T.current=null}},[o,t,i,n,u,w,S,y,j,L,z,R]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),z?e.jsx("div",{ref:C,className:`light-pillar-container ${m}`,style:{mixBlendMode:v}}):e.jsx("div",{className:`light-pillar-fallback ${m}`,style:{mixBlendMode:v},children:"WebGL not supported"})]})},Fs=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,Ms=`
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
`;function Is({color:o="#ffffff",flakeSize:t=.01,minFlakeSize:i=1.25,pixelResolution:n=200,speed:u=1.25,depthFade:m=8,farPlane:w=20,brightness:S=1,gamma:y=.4545,density:j=.3,variant:v="square",direction:L=125,rainbow:R=!1,storm:C=!1,className:T="",style:U={}}){const k=a.useRef(null),P=a.useRef(0),O=a.useRef(!0),F=a.useRef(null),D=a.useRef(null),l=a.useRef(null),z=a.useMemo(()=>v==="round"?1:v==="snowflake"?2:0,[v]),J=a.useMemo(()=>{const A=new Fe(o);return new re(A.r,A.g,A.b)},[o]),V=a.useCallback(()=>{l.current&&clearTimeout(l.current),l.current=window.setTimeout(()=>{const A=k.current,H=F.current,M=D.current;if(!A||!H||!M)return;const W=A.offsetWidth,Y=A.offsetHeight;H.setSize(W,Y),M.uniforms.uResolution.value.set(W,Y)},100)},[]);return a.useEffect(()=>{const A=k.current;if(!A)return;const H=new IntersectionObserver(([M])=>{O.current=M.isIntersecting},{threshold:0});return H.observe(A),()=>H.disconnect()},[]),a.useEffect(()=>{const A=k.current;if(!A)return;const H=new lt,M=new Tt(-1,1,1,-1,0,1),W=new ct({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.setSize(A.offsetWidth,A.offsetHeight),W.setClearColor(0,0),A.appendChild(W.domElement),F.current=W;const Y=new Ze({vertexShader:Fs,fragmentShader:Ms,uniforms:{uTime:{value:0},uResolution:{value:new Le(A.offsetWidth,A.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:i},uPixelResolution:{value:n},uSpeed:{value:u},uDepthFade:{value:m},uFarPlane:{value:w},uColor:{value:J.clone()},uBrightness:{value:S},uGamma:{value:y},uDensity:{value:j},uVariant:{value:z},uDirection:{value:L*Math.PI/180},uRainbow:{value:R?1:0}},transparent:!0});D.current=Y;const d=new rt(2,2);H.add(new et(d,Y)),window.addEventListener("resize",V);const c=performance.now(),r=()=>{P.current=requestAnimationFrame(r),O.current&&(Y.uniforms.uTime.value=(performance.now()-c)*.001,W.render(H,M))};return r(),()=>{cancelAnimationFrame(P.current),window.removeEventListener("resize",V),l.current&&clearTimeout(l.current),A.contains(W.domElement)&&A.removeChild(W.domElement),W.dispose(),d.dispose(),Y.dispose(),F.current=null,D.current=null}},[V]),a.useEffect(()=>{const A=D.current;A&&(A.uniforms.uFlakeSize.value=t,A.uniforms.uMinFlakeSize.value=i,A.uniforms.uPixelResolution.value=n,A.uniforms.uSpeed.value=C?u*4:u,A.uniforms.uDepthFade.value=m,A.uniforms.uFarPlane.value=w,A.uniforms.uBrightness.value=S,A.uniforms.uGamma.value=y,A.uniforms.uDensity.value=j,A.uniforms.uVariant.value=z,A.uniforms.uDirection.value=L*Math.PI/180,A.uniforms.uColor.value.copy(J),A.uniforms.uRainbow.value=R?1:0)},[t,i,n,u,m,w,S,y,j,z,L,J,R,C]),e.jsx("div",{ref:k,className:`pixel-snow-container ${T}`,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",contain:"layout style paint",...U}})}const Bi=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],ii={colors:Bi[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},Ds=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],ni={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},oi={colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1},si={color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},ri={density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},ai={color1:"#b117f8",color2:"#2c0b2e",speed:20},li={color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,depthFade:3,farPlane:10,gamma:.4545,variant:"snowflake",rainbow:!1,storm:!1},He={cyberpunk:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},akira:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"mountainDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16715818,15415358,16715818],rightCars:[14342906,12499683,9410532],sticks:14342906}},golden:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"deepDistortion",length:400,roadWidth:18,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16724527,10694672,11015432],rightCars:[16645616,15982240,14859144],sticks:16645616}},split:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"LongRaceDistortion",length:400,roadWidth:10,islandWidth:5,lanesPerRoad:2,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:70,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16736115,15158624,16715818],rightCars:[10806246,8442324,5489350],sticks:10806246}},highway:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14441248,14459680,14426144],rightCars:[3361783,15066861,12568307],sticks:12970219}}},zs=({onClose:o,floatingLinesConfig:t,setFloatingLinesConfig:i,lightPillarsConfig:n,setLightPillarsConfig:u,ballpitConfig:m,setBallpitConfig:w,silkConfig:S,setSilkConfig:y,galaxyConfig:j,setGalaxyConfig:v,gradientConfig:L,setGradientConfig:R,pixelSnowConfig:C,setPixelSnowConfig:T,hyperspeedConfig:U,setHyperspeedConfig:k})=>{const{activeBackground:P,floatingLinesConfig:O,setFloatingLinesConfig:F,lightPillarsConfig:D,setLightPillarsConfig:l,ballpitConfig:z,setBallpitConfig:J,silkConfig:V,setSilkConfig:A,galaxyConfig:H,setGalaxyConfig:M,gradientConfig:W,setGradientConfig:Y,pixelSnowConfig:d,setPixelSnowConfig:c,hyperspeedConfig:r,setHyperspeedConfig:h}=Ue(),p=t||O,b=i||F,G=n||D,X=u||l,ae=m||z,$=w||J,oe=S||V,se=y||A,B=j||H,te=v||M,le=L||W,N=R||Y,ue=C||d,xe=T||c,ne=U||r,be=k||h,ce=p||ii,ge=(f,ve)=>{b&&b({...ce,[f]:ve})},de=f=>{const ve=ce.enabledWaves,Me=ve.includes(f)?ve.filter(jt=>jt!==f):[...ve,f];ge("enabledWaves",Me)},Se=(f,ve)=>{const Me=[...ce.colors];Me[f]=ve,ge("colors",Me)},_=G||ni,K=(f,ve)=>{X?X({..._,[f]:ve}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},I=ae||oi,Q=(f,ve)=>{$&&$({...I,[f]:ve})},he=(f,ve)=>{const Me=[...I.colors];Me[f]=ve,Q("colors",Me)},Z=oe||si,ye=(f,ve)=>{se&&se({...Z,[f]:ve})},fe=B||ri,Ce=(f,ve)=>{te&&te({...fe,[f]:ve})},De=le||ai,qe=(f,ve)=>{N&&N({...De,[f]:ve})},we=ue||li,je=(f,ve)=>{xe&&xe({...we,[f]:ve})},Ee=ne||He.cyberpunk,St=f=>{be&&He[f]&&be(He[f])},$e=(f,ve)=>{be&&be({...Ee,[f]:ve})},Ct=()=>{P==="floatinglines"&&b?b(ii):P==="lightpillars"&&X?X(ni):P==="ballpit"&&$?$(oi):P==="silk"&&se?se(si):P==="galaxy"&&te?te(ri):P==="gradient"&&N?N(ai):P==="pixelsnow"&&xe?xe(li):P==="hyperspeed"&&be&&be(He.cyberpunk)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:Ct,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(Pn,{})}),e.jsx("button",{onClick:o,className:"close-btn",children:e.jsx(xt,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[P==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:Bi.map(f=>e.jsx("button",{className:"preset-btn",onClick:()=>ge("colors",f.colors),style:{background:`linear-gradient(to right, ${f.colors[0]}, ${f.colors[1]}, ${f.colors[2]})`},title:f.name,children:JSON.stringify(ce.colors)===JSON.stringify(f.colors)&&e.jsx(vi,{})},f.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:ce.colors.map((f,ve)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:f,onChange:Me=>Se(ve,Me.target.value)}),e.jsx("span",{className:"hex-code",children:f})]},ve))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:ce.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:ce.count,onChange:f=>ge("count",parseInt(f.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:ce.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:ce.distance,onChange:f=>ge("distance",parseInt(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Amplitud de Onda ",e.jsx("span",{children:ce.amplitude})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:ce.amplitude||1,onChange:f=>ge("amplitude",parseFloat(f.target.value))}),e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:ce.bendRadius})]}),e.jsx("input",{type:"range",min:"5",max:"10",step:"0.1",value:ce.bendRadius,onChange:f=>ge("bendRadius",parseFloat(f.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:ce.bendStrength})]}),e.jsx("input",{type:"range",min:"-7",max:"7",step:"0.1",value:ce.bendStrength,onChange:f=>ge("bendStrength",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(f=>e.jsx("button",{className:`toggle-btn ${ce.enabledWaves.includes(f)?"active":""}`,onClick:()=>de(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${ce.interactive!==!1?"active":""}`,onClick:()=>ge("interactive",ce.interactive===!1),style:{width:"100%",textAlign:"center"},children:ce.interactive!==!1?"Activada (Ratón)":"Desactivada"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${ce.rainbow?"active":""}`,onClick:()=>ge("rainbow",!ce.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"})]})]}),P==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:_.topColor,onChange:f=>K("topColor",f.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:_.bottomColor,onChange:f=>K("bottomColor",f.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:_.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:_.intensity,onChange:f=>K("intensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:_.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:_.rotationSpeed,onChange:f=>K("rotationSpeed",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:_.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:_.pillarWidth,onChange:f=>K("pillarWidth",parseFloat(f.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[_.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:_.pillarRotation,onChange:f=>K("pillarRotation",parseInt(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:_.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:_.pillarHeight,onChange:f=>K("pillarHeight",parseFloat(f.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:_.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:_.noiseIntensity,onChange:f=>K("noiseIntensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:_.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:_.glowAmount,onChange:f=>K("glowAmount",parseFloat(f.target.value))})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"toggles-row",children:Ds.map(f=>e.jsx("button",{className:`toggle-btn ${_.quality===f.value?"active":""}`,onClick:()=>K("quality",f.value),children:f.label},f.value))})}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${_.interactive!==!1?"active":""}`,onClick:()=>K("interactive",_.interactive===!1),style:{width:"100%",textAlign:"center"},children:_.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),P==="ballpit"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsx("div",{className:"color-pickers",children:I.colors.map((f,ve)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:f,onChange:Me=>he(ve,Me.target.value)}),e.jsx("span",{className:"hex-code",children:f})]},ve))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad ",e.jsx("span",{children:I.count})]}),e.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:I.count,onChange:f=>Q("count",parseInt(f.target.value))}),e.jsxs("label",{children:["Gravedad ",e.jsx("span",{children:I.gravity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:I.gravity,onChange:f=>Q("gravity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Fricción ",e.jsx("span",{children:I.friction})]}),e.jsx("input",{type:"range",min:"0.8",max:"1",step:"0.001",value:I.friction,onChange:f=>Q("friction",parseFloat(f.target.value))}),e.jsxs("label",{children:["Rebote Pared ",e.jsx("span",{children:I.wallBounce})]}),e.jsx("input",{type:"range",min:"0",max:"1.5",step:"0.05",value:I.wallBounce,onChange:f=>Q("wallBounce",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${I.followCursor?"active":""}`,onClick:()=>Q("followCursor",!I.followCursor),style:{width:"100%",textAlign:"center"},children:I.followCursor?"Seguir Cursor":"Cursor Libre"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Eventos Divertidos"}),e.jsxs("div",{className:"toggles-row",children:[e.jsx("button",{className:`toggle-btn ${I.enableExplosion?"active":""}`,onClick:()=>Q("enableExplosion",!I.enableExplosion),title:"Haz clic para explotar las bolas",children:"💥 Explosión al Clic"}),e.jsx("button",{className:`toggle-btn ${I.rainbow?"active":""}`,onClick:()=>Q("rainbow",!I.rainbow),title:"Ciclo de colores automático",children:"🌈 Modo Arcoíris"})]})]})]}),P==="silk"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:Z.color,onChange:f=>ye("color",f.target.value)}),e.jsx("span",{className:"hex-code",children:Z.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:Z.speed})]}),e.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:Z.speed,onChange:f=>ye("speed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Escala ",e.jsx("span",{children:Z.scale})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:Z.scale,onChange:f=>ye("scale",parseFloat(f.target.value))}),e.jsxs("label",{children:["Ruido ",e.jsx("span",{children:Z.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:Z.noiseIntensity,onChange:f=>ye("noiseIntensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[Z.rotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:Z.rotation,onChange:f=>ye("rotation",parseInt(f.target.value))})]})]}),P==="galaxy"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:fe.density})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:fe.density,onChange:f=>Ce("density",parseFloat(f.target.value))}),e.jsxs("label",{children:["Intensidad Brillo ",e.jsx("span",{children:fe.glowIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:fe.glowIntensity,onChange:f=>Ce("glowIntensity",parseFloat(f.target.value))}),e.jsxs("label",{children:["Saturación ",e.jsx("span",{children:fe.saturation})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:fe.saturation,onChange:f=>Ce("saturation",parseFloat(f.target.value))}),e.jsxs("label",{children:["Cambio de Tono (Hue) ",e.jsx("span",{children:fe.hueShift})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:fe.hueShift,onChange:f=>Ce("hueShift",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad Rotación ",e.jsx("span",{children:fe.rotationSpeed})]}),e.jsx("input",{type:"range",min:"-0.5",max:"0.5",step:"0.01",value:fe.rotationSpeed,onChange:f=>Ce("rotationSpeed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Velocidad Estrellas ",e.jsx("span",{children:fe.starSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:fe.starSpeed,onChange:f=>Ce("starSpeed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Velocidad Animación ",e.jsx("span",{children:fe.speed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:fe.speed,onChange:f=>Ce("speed",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${fe.rainbow?"active":""}`,onClick:()=>Ce("rainbow",!fe.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${fe.warp?"active":""}`,onClick:()=>Ce("warp",!fe.warp),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🚀 Velocidad Warp"})]})]}),P==="gradient"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:De.color1,onChange:f=>qe("color1",f.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:De.color2,onChange:f=>qe("color2",f.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad (segundos) ",e.jsxs("span",{children:[De.speed,"s"]})]}),e.jsx("input",{type:"range",min:"1",max:"60",step:"1",value:De.speed,onChange:f=>qe("speed",parseInt(f.target.value))})]})]}),P==="pixelsnow"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:we.color,onChange:f=>je("color",f.target.value)}),e.jsx("span",{className:"hex-code",children:we.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Variante"}),e.jsx("div",{className:"toggles-row",children:["snowflake","square","round"].map(f=>e.jsx("button",{className:`toggle-btn ${we.variant===f?"active":""}`,onClick:()=>je("variant",f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:we.speed})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:we.speed,onChange:f=>je("speed",parseFloat(f.target.value))}),e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:we.density})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:we.density,onChange:f=>je("density",parseFloat(f.target.value))}),e.jsxs("label",{children:["Dirección ",e.jsxs("span",{children:[we.direction,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:we.direction,onChange:f=>je("direction",parseInt(f.target.value))}),e.jsxs("label",{children:["Tamaño Copo ",e.jsx("span",{children:we.flakeSize})]}),e.jsx("input",{type:"range",min:"0.005",max:"0.05",step:"0.001",value:we.flakeSize,onChange:f=>je("flakeSize",parseFloat(f.target.value))}),e.jsxs("label",{children:["Brillo ",e.jsx("span",{children:we.brightness})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:we.brightness,onChange:f=>je("brightness",parseFloat(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${we.rainbow?"active":""}`,onClick:()=>je("rainbow",!we.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${we.storm?"active":""}`,onClick:()=>je("storm",!we.storm),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🌪️ Modo Tormenta"})]})]}),P==="hyperspeed"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Estilo Visual"}),e.jsx("div",{className:"toggles-row",style:{flexWrap:"wrap"},children:Object.keys(He).map(f=>e.jsx("button",{className:`toggle-btn ${JSON.stringify(Ee.colors)===JSON.stringify(He[f].colors)?"active":""}`,onClick:()=>St(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Geometría"}),e.jsxs("label",{children:["Ancho Carretera ",e.jsx("span",{children:Ee.roadWidth})]}),e.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:Ee.roadWidth,onChange:f=>$e("roadWidth",parseFloat(f.target.value))}),e.jsxs("label",{children:["Ancho Isla ",e.jsx("span",{children:Ee.islandWidth})]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:Ee.islandWidth,onChange:f=>$e("islandWidth",parseFloat(f.target.value))}),e.jsxs("label",{children:["Carriles ",e.jsx("span",{children:Ee.lanesPerRoad})]}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:Ee.lanesPerRoad,onChange:f=>$e("lanesPerRoad",parseInt(f.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Distorsión"}),e.jsxs("select",{value:Ee.distortion,onChange:f=>$e("distortion",f.target.value),style:{width:"100%",padding:"8px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",color:"white",border:"1px solid rgba(255, 255, 255, 0.2)",marginTop:"5px",cursor:"pointer"},children:[e.jsx("option",{style:{color:"black"},value:"turbulentDistortion",children:"Turbulent"}),e.jsx("option",{style:{color:"black"},value:"deepDistortion",children:"Deep"}),e.jsx("option",{style:{color:"black"},value:"mountainDistortion",children:"Mountain"}),e.jsx("option",{style:{color:"black"},value:"xyDistortion",children:"XY"}),e.jsx("option",{style:{color:"black"},value:"LongRaceDistortion",children:"Long Race"})]})]})]})]})]})},Ns=({effectOptions:o=He.cyberpunk})=>{const t=a.useRef(null),i=a.useRef(null);return a.useEffect(()=>{if(i.current){i.current.dispose();const d=document.getElementById("lights");if(d)for(;d.firstChild;)d.removeChild(d.firstChild)}const n={uFreq:{value:new re(3,6,10)},uAmp:{value:new re(30,30,20)}},u={uFreq:{value:new Le(5,2)},uAmp:{value:new Le(25,15)}},m={uFreq:{value:new Le(2,3)},uAmp:{value:new Le(35,10)}},w={uFreq:{value:new Gt(4,8,8,1)},uAmp:{value:new Gt(25,5,10,10)}},S={uFreq:{value:new Le(4,8)},uAmp:{value:new Le(10,20)},uPowY:{value:new Le(20,2)}};let y=d=>Math.sin(d)*.5+.5;const j={mountainDistortion:{uniforms:n,getDistortion:`
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
        `,getJS:(d,c)=>{let r=.02,h=n.uFreq.value,p=n.uAmp.value,b=new re(Math.cos(d*Math.PI*h.x+c)*p.x-Math.cos(r*Math.PI*h.x+c)*p.x,y(d*Math.PI*h.y+c)*p.y-y(r*Math.PI*h.y+c)*p.y,y(d*Math.PI*h.z+c)*p.z-y(r*Math.PI*h.z+c)*p.z),G=new re(2,2,2),X=new re(0,0,-5);return b.multiply(G).add(X)}},xyDistortion:{uniforms:u,getDistortion:`
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
        `,getJS:(d,c)=>{let r=.02,h=u.uFreq.value,p=u.uAmp.value,b=new re(Math.cos(d*Math.PI*h.x+c)*p.x-Math.cos(r*Math.PI*h.x+c)*p.x,Math.sin(d*Math.PI*h.y+c+Math.PI/2)*p.y-Math.sin(r*Math.PI*h.y+c+Math.PI/2)*p.y,0),G=new re(2,.4,1),X=new re(0,0,-3);return b.multiply(G).add(X)}},LongRaceDistortion:{uniforms:m,getDistortion:`
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
        `,getJS:(d,c)=>{let r=.0125,h=m.uFreq.value,p=m.uAmp.value,b=new re(Math.sin(d*Math.PI*h.x+c)*p.x-Math.sin(r*Math.PI*h.x+c)*p.x,Math.sin(d*Math.PI*h.y+c)*p.y-Math.sin(r*Math.PI*h.y+c)*p.y,0),G=new re(1,1,0),X=new re(0,0,-5);return b.multiply(G).add(X)}},turbulentDistortion:{uniforms:w,getDistortion:`
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
        `,getJS:(d,c)=>{const r=w.uFreq.value,h=w.uAmp.value,p=$=>Math.cos(Math.PI*$*r.x+c)*h.x+Math.pow(Math.cos(Math.PI*$*r.y+c*(r.y/r.x)),2)*h.y,b=$=>-y(Math.PI*$*r.z+c)*h.z-Math.pow(y(Math.PI*$*r.w+c/(r.z/r.w)),5)*h.w;let G=new re(p(d)-p(d+.007),b(d)-b(d+.007),0),X=new re(-2,-5,0),ae=new re(0,0,-10);return G.multiply(X).add(ae)}},turbulentDistortionStill:{uniforms:w,getDistortion:`
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
        `,getJS:(d,c)=>{const r=S.uFreq.value,h=S.uAmp.value,p=S.uPowY.value,b=oe=>Math.sin(oe*Math.PI*r.x+c)*h.x,G=oe=>Math.pow(oe*p.x,p.y)+Math.sin(oe*Math.PI*r.y+c)*h.y;let X=new re(b(d)-b(d+.01),G(d)-G(d+.01),0),ae=new re(-2,-4,0),$=new re(0,0,-10);return X.multiply(ae).add($)}}};class v{constructor(c,r={}){this.options=r,this.options.distortion==null&&(this.options.distortion={uniforms:L,getDistortion:R}),this.container=c,this.renderer=new ct({antialias:!1,alpha:!0}),this.renderer.setSize(c.offsetWidth,c.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new _n(this.renderer),c.append(this.renderer.domElement),this.camera=new xi(r.fov,c.offsetWidth/c.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new lt,this.scene.background=null;let h=new En(r.colors.background,r.length*.2,r.length*500);this.scene.fog=h,this.fogUniforms={fogColor:{value:h.color},fogNear:{value:h.near},fogFar:{value:h.far}},this.clock=new Et,this.assets={},this.disposed=!1,this.road=new z(this,r),this.leftCarLights=new k(this,r,r.colors.leftCars,r.movingAwaySpeed,new Le(0,1-r.carLightsFade)),this.rightCarLights=new k(this,r,r.colors.rightCars,r.movingCloserSpeed,new Le(1,0+r.carLightsFade)),this.leftSticks=new F(this,r),this.fovTarget=r.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const c=this.container.offsetWidth,r=this.container.offsetHeight;this.renderer.setSize(c,r),this.camera.aspect=c/r,this.camera.updateProjectionMatrix(),this.composer.setSize(c,r)}initPasses(){this.renderPass=new Tn(this.scene,this.camera),this.bloomPass=new qt(this.camera,new Fn({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const c=new qt(this.camera,new nt({preset:Mn.MEDIUM,searchImage:nt.searchImageDataURL,areaImage:nt.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,c.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(c)}loadAssets(){const c=this.assets;return new Promise(r=>{const h=new In(r),p=new Image,b=new Image;c.smaa={},p.addEventListener("load",function(){c.smaa.search=this,h.itemEnd("smaa-search")}),b.addEventListener("load",function(){c.smaa.area=this,h.itemEnd("smaa-area")}),h.itemStart("smaa-search"),h.itemStart("smaa-area"),p.src=nt.searchImageDataURL,b.src=nt.areaImageDataURL})}init(){this.initPasses();const c=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-c.roadWidth/2-c.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(c.roadWidth/2+c.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(c.roadWidth+c.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(c){this.options.onSpeedUp&&this.options.onSpeedUp(c),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(c){this.options.onSlowDown&&this.options.onSlowDown(c),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(c){this.options.onSpeedUp&&this.options.onSpeedUp(c),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(c){this.options.onSlowDown&&this.options.onSlowDown(c),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(c){c.preventDefault()}update(c){let r=Math.exp(-(-60*Math.log2(.9))*c);this.speedUp+=U(this.speedUp,this.speedUpTarget,r,1e-5),this.timeOffset+=this.speedUp*c;let h=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(h),this.leftCarLights.update(h),this.leftSticks.update(h),this.road.update(h);let p=!1,b=U(this.camera.fov,this.fovTarget,r);if(b!==0&&(this.camera.fov+=b*c*6,p=!0),this.options.distortion.getJS){const G=this.options.distortion.getJS(.025,h);this.camera.lookAt(new re(this.camera.position.x+G.x,this.camera.position.y+G.y,this.camera.position.z+G.z)),p=!0}p&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(c){this.composer.render(c)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(c,r,h){this.composer.setSize(c,r,h)}tick(){if(this.disposed||!this)return;if(Y(this.renderer,this.setSize)){const r=this.renderer.domElement;this.camera.aspect=r.clientWidth/r.clientHeight,this.camera.updateProjectionMatrix()}const c=this.clock.getDelta();this.render(c),this.update(c),requestAnimationFrame(this.tick)}}const L={uDistortionX:{value:new Le(80,3)},uDistortionY:{value:new Le(-40,2.5)}},R=`
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
    `,C=d=>Array.isArray(d)?Math.random()*(d[1]-d[0])+d[0]:Math.random()*d,T=d=>Array.isArray(d)?d[Math.floor(Math.random()*d.length)]:d;function U(d,c,r=.1,h=.001){let p=(c-d)*r;return Math.abs(p)<h&&(p=c-d),p}class k{constructor(c,r,h,p,b){this.webgl=c,this.options=r,this.colors=h,this.speed=p,this.fade=b}init(){const c=this.options;let r=new Dn(new re(0,0,0),new re(0,0,-1)),h=new zn(r,40,1,8,!1),p=new Yt().copy(h);p.instanceCount=c.lightPairsPerRoadWay*2;let b=c.roadWidth/c.lanesPerRoad,G=[],X=[],ae=[],$=this.colors;Array.isArray($)?$=$.map(B=>new Fe(B)):$=new Fe($);for(let B=0;B<c.lightPairsPerRoadWay;B++){let te=C(c.carLightsRadius),le=C(c.carLightsLength),N=C(this.speed),xe=B%c.lanesPerRoad*b-c.roadWidth/2+b/2,ne=C(c.carWidthPercentage)*b,be=C(c.carShiftX)*b;xe+=be;let ce=C(c.carFloorSeparation)+te*1.3,ge=-C(c.length);G.push(xe-ne/2),G.push(ce),G.push(ge),G.push(xe+ne/2),G.push(ce),G.push(ge),X.push(te),X.push(le),X.push(N),X.push(te),X.push(le),X.push(N);let de=T($);ae.push(de.r),ae.push(de.g),ae.push(de.b),ae.push(de.r),ae.push(de.g),ae.push(de.b)}p.setAttribute("aOffset",new Je(new Float32Array(G),3,!1)),p.setAttribute("aMetrics",new Je(new Float32Array(X),3,!1)),p.setAttribute("aColor",new Je(new Float32Array(ae),3,!1));let oe=new Ze({fragmentShader:P,vertexShader:O,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:c.length},uFade:{value:this.fade}},this.webgl.fogUniforms,c.distortion.uniforms)});oe.onBeforeCompile=B=>{B.vertexShader=B.vertexShader.replace("#include <getDistortion_vertex>",c.distortion.getDistortion)};let se=new et(p,oe);se.frustumCulled=!1,this.webgl.scene.add(se),this.mesh=se}update(c){this.mesh.material.uniforms.uTime.value=c}}const P=`
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
    `,O=`
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
    `;class F{constructor(c,r){this.webgl=c,this.options=r}init(){const c=this.options,r=new rt(1,1);let h=new Yt().copy(r),p=c.totalSideLightSticks;h.instanceCount=p;let b=c.length/(p-1);const G=[],X=[],ae=[];let $=c.colors.sticks;Array.isArray($)?$=$.map(B=>new Fe(B)):$=new Fe($);for(let B=0;B<p;B++){let te=C(c.lightStickWidth),le=C(c.lightStickHeight);G.push((B-1)*b*2+b*Math.random());let N=T($);X.push(N.r),X.push(N.g),X.push(N.b),ae.push(te),ae.push(le)}h.setAttribute("aOffset",new Je(new Float32Array(G),1,!1)),h.setAttribute("aColor",new Je(new Float32Array(X),3,!1)),h.setAttribute("aMetrics",new Je(new Float32Array(ae),2,!1));const oe=new Ze({fragmentShader:l,vertexShader:D,side:Wt,uniforms:Object.assign({uTravelLength:{value:c.length},uTime:{value:0}},this.webgl.fogUniforms,c.distortion.uniforms)});oe.onBeforeCompile=B=>{B.vertexShader=B.vertexShader.replace("#include <getDistortion_vertex>",c.distortion.getDistortion)};const se=new et(h,oe);se.frustumCulled=!1,this.webgl.scene.add(se),this.mesh=se}update(c){this.mesh.material.uniforms.uTime.value=c}}const D=`
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
    `,l=`
      #define USE_FOG;
      ${Ie.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${Ie.fog_fragment}
      }
    `;class z{constructor(c,r){this.webgl=c,this.options=r,this.uTime={value:0}}createPlane(c,r,h){const p=this.options;let b=100;const G=new rt(h?p.roadWidth:p.islandWidth,p.length,20,b);let X={uTravelLength:{value:p.length},uColor:{value:new Fe(h?p.colors.roadColor:p.colors.islandColor)},uTime:this.uTime};h&&(X=Object.assign(X,{uLanes:{value:p.lanesPerRoad},uBrokenLinesColor:{value:new Fe(p.colors.brokenLines)},uShoulderLinesColor:{value:new Fe(p.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:p.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:p.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:p.brokenLinesWidthPercentage}}));const ae=new Ze({fragmentShader:h?M:V,vertexShader:W,side:Wt,uniforms:Object.assign(X,this.webgl.fogUniforms,p.distortion.uniforms)});ae.onBeforeCompile=oe=>{oe.vertexShader=oe.vertexShader.replace("#include <getDistortion_vertex>",p.distortion.getDistortion)};const $=new et(G,ae);return $.rotation.x=-Math.PI/2,$.position.z=-p.length/2,$.position.x+=(this.options.islandWidth/2+p.roadWidth/2)*c,this.webgl.scene.add($),$}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(c){this.uTime.value=c}}const J=`
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
    `,V=J.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),M=J.replace("#include <roadMarkings_fragment>",`
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
    `),W=`
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
    `;function Y(d,c){const r=d.domElement,h=r.clientWidth,p=r.clientHeight,b=r.width!==h||r.height!==p;return b&&c(h,p,!1),b}return(function(){const d=document.getElementById("lights"),c={...o};c.distortion=j[c.distortion];const r=new v(d,c);i.current=r,r.loadAssets().then(r.init)})(),()=>{i.current&&i.current.dispose()}},[o]),e.jsx("div",{id:"lights",ref:t})},Us=({floatingLinesConfig:o,lightPillarsConfig:t,ballpitConfig:i,silkConfig:n,galaxyConfig:u,gradientConfig:m,pixelSnowConfig:w,hyperspeedConfig:S})=>{const{activeBackground:y,floatingLinesConfig:j,lightPillarsConfig:v,ballpitConfig:L,silkConfig:R,galaxyConfig:C,gradientConfig:T,pixelSnowConfig:U,hyperspeedConfig:k}=Ue(),P=o||j,O=t||v,F=i||L,D=n||R,l=u||C,z=m||T,J=w||U,V=S||k,A=P||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},H=O||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},M=F||{colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1,rainbow:!1},W=D||{color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},Y=l||{density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},d=z||{color1:"#b117f8",color2:"#2c0b2e",speed:20},c=J||{color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,variant:"snowflake",rainbow:!1,storm:!1};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(_e,{mode:"wait",children:[y==="gradient"&&e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(ps,{color1:d.color1,color2:d.color2,speed:d.speed})},"gradient"),y==="galaxy"&&e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(vs,{density:Y.density,glowIntensity:Y.glowIntensity,saturation:Y.saturation,hueShift:Y.hueShift,twinkleIntensity:Y.twinkleIntensity,rotationSpeed:Y.rotationSpeed,starSpeed:Y.starSpeed,speed:Y.speed,rainbow:Y.rainbow,warp:Y.warp})},"galaxy"),y==="silk"&&e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(ki,{speed:W.speed,scale:W.scale,color:W.color,noiseIntensity:W.noiseIntensity,rotation:W.rotation})},"silk"),y==="ballpit"&&e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:e.jsx(ks,{count:M.count,gravity:M.gravity,friction:M.friction,wallBounce:M.wallBounce,followCursor:M.followCursor,colors:M.colors,enableExplosion:M.enableExplosion,rainbow:M.rainbow})},"ballpit"),y==="floatinglines"&&e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Es,{linesGradient:A.colors,lineCount:A.count,lineDistance:A.distance,animationSpeed:.5,bendRadius:A.bendRadius,bendStrength:A.bendStrength,enabledWaves:A.enabledWaves,interactive:A.interactive??!1,parallax:A.parallax??!1,amplitude:A.amplitude??1,rainbow:A.rainbow})},"floatinglines"),y==="lightpillars"&&e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Ts,{topColor:H.topColor,bottomColor:H.bottomColor,intensity:H.intensity,rotationSpeed:H.rotationSpeed,glowAmount:H.glowAmount??.002,pillarWidth:H.pillarWidth,pillarHeight:H.pillarHeight,noiseIntensity:H.noiseIntensity,pillarRotation:H.pillarRotation,interactive:H.interactive??!0,quality:H.quality??"high"})},"lightpillars"),y==="pixelsnow"&&e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Is,{color:c.color,flakeSize:c.flakeSize,minFlakeSize:c.minFlakeSize,pixelResolution:c.pixelResolution,speed:c.speed,density:c.density,direction:c.direction,brightness:c.brightness,variant:c.variant,rainbow:c.rainbow,storm:c.storm})},"pixelsnow"),y==="hyperspeed"&&e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Ns,{effectOptions:V})},"hyperspeed")]})})},Os=({onItemClick:o,isOpen:t,onToggle:i,position:n="left",colors:u=["#B19EEF","#5227FF"],items:m=[],socialItems:w=[],displaySocials:S=!0,displayItemNumbering:y=!0,className:j,logoUrl:v=null,menuButtonColor:L="#fff",openMenuButtonColor:R="#000",accentColor:C="#5227FF",changeMenuColorOnOpen:T=!0,isFixed:U=!1,closeOnClickAway:k=!0,onMenuOpen:P,onMenuClose:O})=>{const[F,D]=a.useState(!1),l=typeof t=="boolean",z=l?t:F,J=a.useRef(!1),V=a.useRef(null),A=a.useRef(null),H=a.useRef([]),M=a.useRef(null),W=a.useRef(null),Y=a.useRef(null),d=a.useRef(null),c=a.useRef(null),[r,h]=a.useState(["Menu","Close"]),p=a.useRef(null),b=a.useRef(null),G=a.useRef(null),X=a.useRef(null),ae=a.useRef(null),$=a.useRef(null),oe=a.useRef(!1),se=a.useRef(null),B=a.useRef(null),te=a.useRef(null);a.useLayoutEffect(()=>{const _=q.context(()=>{const K=V.current,I=A.current,Q=M.current,he=W.current,Z=Y.current,ye=d.current;if(!K||!Q||!he||!Z||!ye)return;let fe=[];I&&(fe=Array.from(I.querySelectorAll(".sm-prelayer"))),H.current=fe;const Ce=n==="left"?-100:100;q.set([K,...fe],{xPercent:Ce}),q.set(Q,{transformOrigin:"50% 50%",rotate:0}),q.set(he,{transformOrigin:"50% 50%",rotate:90}),q.set(Z,{rotate:0,transformOrigin:"50% 50%"}),q.set(ye,{yPercent:0}),$.current&&q.set($.current,{color:L})});return()=>_.revert()},[L,n]);const le=a.useCallback(()=>{const _=V.current,K=H.current;if(!_)return null;p.current?.kill(),b.current&&(b.current.kill(),b.current=null),se.current?.kill();const I=Array.from(_.querySelectorAll(".sm-panel-itemLabel")),Q=Array.from(_.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),he=_.querySelector(".sm-socials-title"),Z=Array.from(_.querySelectorAll(".sm-socials-link")),ye=K.map(je=>({el:je,start:Number(q.getProperty(je,"xPercent"))})),fe=Number(q.getProperty(_,"xPercent"));I.length&&q.set(I,{yPercent:140,rotate:10}),Q.length&&q.set(Q,{"--sm-num-opacity":0}),he&&q.set(he,{opacity:0}),Z.length&&q.set(Z,{y:25,opacity:0});const Ce=q.timeline({paused:!0});ye.forEach((je,Ee)=>{Ce.fromTo(je.el,{xPercent:je.start},{xPercent:0,duration:.8,ease:"power4.out"},Ee*.07)});const qe=(ye.length?(ye.length-1)*.07:0)+(ye.length?.08:0),we=1;if(Ce.fromTo(_,{xPercent:fe},{xPercent:0,duration:we,ease:"power4.out"},qe),I.length){const Ee=qe+we*.15;Ce.to(I,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},Ee),Q.length&&Ce.to(Q,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},Ee+.1)}if(he||Z.length){const je=qe+we*.4;he&&Ce.to(he,{opacity:1,duration:.5,ease:"power2.out"},je),Z.length&&Ce.to(Z,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{q.set(Z,{clearProps:"opacity"})}},je+.04)}return p.current=Ce,Ce},[]),N=a.useCallback(()=>{if(oe.current)return;oe.current=!0;const _=le();_?(_.eventCallback("onComplete",()=>{oe.current=!1}),_.play(0)):oe.current=!1},[le]),ue=a.useCallback(()=>{p.current?.kill(),p.current=null,se.current?.kill();const _=V.current,K=H.current;if(!_)return;const I=[...K,_];b.current?.kill();const Q=n==="left"?-100:100;b.current=q.to(I,{xPercent:Q,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const he=Array.from(_.querySelectorAll(".sm-panel-itemLabel"));he.length&&q.set(he,{yPercent:140,rotate:10});const Z=Array.from(_.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));Z.length&&q.set(Z,{"--sm-num-opacity":0});const ye=_.querySelector(".sm-socials-title"),fe=Array.from(_.querySelectorAll(".sm-socials-link"));ye&&q.set(ye,{opacity:0}),fe.length&&q.set(fe,{y:25,opacity:0}),oe.current=!1}})},[n]),xe=a.useCallback(_=>{const K=Y.current;K&&(G.current?.kill(),_?G.current=q.to(K,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):G.current=q.to(K,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),ne=a.useCallback(_=>{const K=$.current;if(K)if(ae.current?.kill(),T){const I=_?R:L;ae.current=q.to(K,{color:I,delay:.18,duration:.3,ease:"power2.out"})}else q.set(K,{color:L})},[R,L,T]);vt.useEffect(()=>{if($.current)if(T){const _=J.current?R:L;q.set($.current,{color:_})}else q.set($.current,{color:L})},[T,L,R]);const be=a.useCallback(_=>{const K=d.current;if(!K)return;X.current?.kill();const I=_?"Menu":"Close",Q=_?"Close":"Menu",he=3,Z=[I];let ye=I;for(let De=0;De<he;De++)ye=ye==="Menu"?"Close":"Menu",Z.push(ye);ye!==Q&&Z.push(Q),Z.push(Q),h(Z),q.set(K,{yPercent:0});const fe=Z.length,Ce=(fe-1)/fe*100;X.current=q.to(K,{yPercent:-Ce,duration:.5+fe*.07,ease:"power4.out"})},[]),ce=a.useCallback(()=>{if(l)i&&i(!z);else{const _=!J.current;J.current=_,D(_),_?(P?.(),N()):(O?.(),ue()),xe(_),ne(_),be(_)}},[l,t,i,z,N,ue,xe,ne,be,P,O]);vt.useEffect(()=>{l&&(J.current=t,t?(P?.(),N()):(O?.(),ue()),xe(t),ne(t),be(t))},[t,l,N,ue,xe,ne,be,P,O]);const ge=a.useCallback(()=>{l?z&&i&&i(!1):J.current&&(J.current=!1,D(!1),O?.(),ue(),xe(!1),ne(!1),be(!1))},[l,z,i,ue,xe,ne,be,O]),de=_=>{B.current=_.touches[0].clientX,te.current=_.touches[0].clientY},Se=_=>{if(B.current===null||te.current===null)return;const K=_.changedTouches[0].clientX,I=_.changedTouches[0].clientY,Q=B.current-K,he=te.current-I;Math.abs(Q)>Math.abs(he)&&Math.abs(Q)>50&&(n==="left"&&Q>0&&ge(),n==="right"&&Q<0&&ge()),B.current=null,te.current=null};return e.jsxs("div",{className:(j?j+" ":"")+"staggered-menu-wrapper"+(U?" fixed-wrapper":""),style:C?{"--sm-accent":C}:void 0,"data-position":n,"data-open":z||void 0,children:[z&&k&&e.jsx("div",{className:"sm-backdrop",onClick:()=>ge(),style:{position:"absolute",inset:0,zIndex:5,pointerEvents:"auto"},"aria-hidden":"true"}),e.jsx("div",{ref:A,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let K=[...u&&u.length?u.slice(0,4):["#1e1e22","#35353c"]];if(K.length>=3){const I=Math.floor(K.length/2);K.splice(I,1)}return K.map((I,Q)=>e.jsx("div",{className:"sm-prelayer",style:{background:I}},Q))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:v?e.jsx("img",{src:v,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:$,className:"sm-toggle","aria-label":z?"Close menu":"Open menu","aria-expanded":z,"aria-controls":"staggered-menu-panel",onClick:ce,type:"button",children:[e.jsx("span",{ref:c,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:d,className:"sm-toggle-textInner",children:r.map((_,K)=>e.jsx("span",{className:"sm-toggle-line",children:_},K))})}),e.jsxs("span",{ref:Y,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:M,className:"sm-icon-line"}),e.jsx("span",{ref:W,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:V,className:"staggered-menu-panel","aria-hidden":!z,onTouchStart:de,onTouchEnd:Se,children:e.jsx("div",{className:"sm-panel-inner",children:e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":y||void 0,children:m&&m.length?m.map((_,K)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:I=>{I.preventDefault(),o&&o(_.id)},"aria-label":_.ariaLabel,"data-index":K+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:_.label})})},_.label+K)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})})})})]})};function Bs({children:o,className:t="",onClick:i,mouseX:n,spring:u,distance:m,magnification:w,baseItemSize:S}){const y=a.useRef(null),j=Ve(0),v=tt(n,C=>{if(!y.current)return 1/0;const T=y.current.getBoundingClientRect(),U=T.x+T.width/2;return Math.abs(C-U)}),L=tt(v,[0,m],[w,S]),R=it(L,u);return e.jsx(ie.div,{ref:y,style:{width:R,height:R,minWidth:R,minHeight:R},onHoverStart:()=>j.set(1),onHoverEnd:()=>j.set(0),onClick:i,className:`dock-item ${t}`,"aria-haspopup":"true",children:a.Children.map(o,C=>a.cloneElement(C,{isHovered:j}))})}function Gs({children:o,className:t="",...i}){const{isHovered:n}=i,[u,m]=a.useState(!1);return a.useEffect(()=>{const w=n.on("change",S=>{m(S===1)});return()=>w()},[n]),e.jsx(_e,{children:u&&e.jsx(ie.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:o})})}function qs({children:o,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:o})}function Ws({items:o,className:t="",spring:i={mass:.1,stiffness:300,damping:20},magnification:n=70,distance:u=200,panelHeight:m=68,dockHeight:w=256,baseItemSize:S=50}){const y=Ve(1/0),j=Ve(0),v=a.useMemo(()=>Math.max(w,n+n/2+4),[n,w]),L=tt(j,[0,1],[m,v]),R=it(L,i);return e.jsx(ie.div,{style:{height:R,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(ie.div,{onMouseMove:({pageX:C})=>{j.set(1),y.set(C)},onMouseLeave:()=>{j.set(0),y.set(1/0)},className:`dock-panel ${t}`,style:{height:m},role:"toolbar","aria-label":"Application dock",children:o.map((C,T)=>e.jsxs(Bs,{onClick:C.onClick,className:C.className,mouseX:y,spring:i,distance:u,magnification:n,baseItemSize:S,children:[e.jsx(qs,{children:C.icon}),e.jsx(Gs,{children:C.label})]},T))})})}const Ys=()=>{const{activeTrail:o}=Ue(),t=Ve(-100),i=Ve(-100),n={damping:25,stiffness:70,mass:1},u=it(t,n),m=it(i,n);a.useEffect(()=>{const S=y=>{t.set(y.clientX),i.set(y.clientY)};return window.addEventListener("mousemove",S),()=>window.removeEventListener("mousemove",S)},[t,i]);const w={"apple-cat":Ii,"jump-cat":Di,"rolling-cat":zi,duck:Ni,pompom:Ui,"skeleton-run":Oi,ghost:null};return!o||o==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:w[o]?e.jsx(ie.img,{src:w[o],alt:"trail",style:{x:u,y:m,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):o==="ghost"?e.jsx(ie.div,{style:{x:u,y:m,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},ci=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],Xs=({progress:o})=>{const[t,i]=a.useState(0);return a.useEffect(()=>{const n=setInterval(()=>{i(u=>(u+1)%ci.length)},1500);return()=>clearInterval(n)},[]),e.jsxs(ie.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[o,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(ie.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${o}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(ie.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:ci[t]},t)})]})]})},Hs=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,Vs=Object.freeze(Object.defineProperty({__proto__:null,default:Hs},Symbol.toStringTag,{value:"Module"})),$s=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,Js=Object.freeze(Object.defineProperty({__proto__:null,default:$s},Symbol.toStringTag,{value:"Module"})),Ks=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,Qs=Object.freeze(Object.defineProperty({__proto__:null,default:Ks},Symbol.toStringTag,{value:"Module"})),Zs=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,er=Object.freeze(Object.defineProperty({__proto__:null,default:Zs},Symbol.toStringTag,{value:"Module"})),tr=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,ir=Object.freeze(Object.defineProperty({__proto__:null,default:tr},Symbol.toStringTag,{value:"Module"})),nr=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,or=Object.freeze(Object.defineProperty({__proto__:null,default:nr},Symbol.toStringTag,{value:"Module"})),sr=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,rr=Object.freeze(Object.defineProperty({__proto__:null,default:sr},Symbol.toStringTag,{value:"Module"})),ar=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,lr=Object.freeze(Object.defineProperty({__proto__:null,default:ar},Symbol.toStringTag,{value:"Module"})),cr=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,ur=Object.freeze(Object.defineProperty({__proto__:null,default:cr},Symbol.toStringTag,{value:"Module"})),ui=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":Vs,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":Js,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":Qs,"../../assets/songs/La cena - Las Petunias.mp3":er,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":ir,"../../assets/songs/Tek It - Cafuné.mp3":or,"../../assets/songs/You and I - d4vd .mp3":rr,"../../assets/songs/gourmet - rickyedit.mp3":lr,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":ur}),st=Object.keys(ui).map(o=>({title:o.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,n=>n.toUpperCase()),artist:"Only U Playlist",src:ui[o].default}));st.length===0&&st.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const dr=.1,fr=({visible:o,onClose:t})=>{const i=a.useRef(null),n=a.useRef(null),[u,m]=a.useState(!1),[w,S]=a.useState(0),[y,j]=a.useState(.3),[v,L]=a.useState(!1),[R,C]=a.useState(!1),[T,U]=a.useState(!1),[k,P]=a.useState(0),[O,F]=a.useState(0),D=st[w];a.useEffect(()=>{i.current&&(i.current.volume=v?0:Math.pow(y,2)*dr)},[y,v]),a.useEffect(()=>{u&&i.current&&i.current.play().catch(M=>console.log("Autoplay blocked",M))},[w]),a.useEffect(()=>{o||(C(!1),U(!1))},[o]),a.useEffect(()=>{const M=W=>{o&&(n.current&&n.current.contains(W.target)||W.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[o,t]);const l=()=>{i.current&&(P(i.current.currentTime),F(i.current.duration||0))},z=M=>{const W=parseFloat(M.target.value);P(W),i.current&&(i.current.currentTime=W)},J=()=>{u?i.current.pause():i.current.play(),m(!u)},V=()=>{S(M=>(M+1)%st.length)},A=M=>{S(M),m(!0),U(!1)},H=M=>{if(!M||isNaN(M))return"0:00";const W=Math.floor(M/60),Y=Math.floor(M%60);return`${W}:${Y<10?"0":""}${Y}`};return e.jsxs(ie.div,{ref:n,className:"music-player-container",initial:"hidden",animate:o?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:i,src:D.src,onEnded:V,onTimeUpdate:l,onLoadedMetadata:l,preload:"auto"}),e.jsx(_e,{children:T&&e.jsx(ie.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:st.map((M,W)=>e.jsxs("div",{className:`playlist-item ${W===w?"active":""}`,onClick:()=>A(W),children:[W+1,". ",M.title]},W))})}),e.jsx("div",{className:"compact-info",onClick:()=>U(!T),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:D.title}),e.jsx(Nn,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:J,children:u?e.jsx(Un,{size:16}):e.jsx(On,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:O,value:k,onChange:z,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[H(k)," / ",H(O)]})]}),e.jsx("button",{className:"icon-btn",onClick:V,children:e.jsx(Bn,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${R?"active":""}`,onClick:()=>C(!R),children:v||y===0?e.jsx(Gn,{size:18}):e.jsx(yi,{size:18})}),e.jsx(_e,{children:R&&e.jsx(ie.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:v?0:y,onChange:M=>j(parseFloat(M.target.value))})})})]})]})]})},pr=({goldShopEnabled:o,setGoldShopEnabled:t,onTogglePrestige:i})=>{const[n,u]=a.useState(!1),[m,w]=a.useState(!1),[S,y]=a.useState(!1),j=a.useRef(null),{gameVolume:v,setGameVolume:L,resetProgress:R,achievements:C,ownedItems:T,activeCursor:U,addCoins:k,unlockAchievement:P}=Ue(),[O,F]=a.useState(!1),D=C.includes("prestige"),l=C.includes("collector"),z=U==="cursor_prestige";a.useEffect(()=>{const A=H=>{j.current&&!j.current.contains(H.target)&&u(!1)};return n&&document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[n]),a.useEffect(()=>{const A=()=>F(window.innerWidth<=768);return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);const J=()=>{window.confirm("¿Estás seguro de que quieres borrar todo tu progreso (monedas y compras)?")&&(R(),u(!1))},V=()=>{const A=window.prompt("Introduce código de administrador:");A&&(["KONAMI","ADMIN","MATRIX"].includes(A.toUpperCase())?(k(1e6),P("matrix_master"),alert("¡Acceso concedido! Recursos añadidos."),u(!1)):alert("Código inválido."))};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @media (max-width: 768px) {
          .settings-container {
            top: max(20px, env(safe-area-inset-top) + 15px) !important;
            left: max(20px, env(safe-area-inset-left) + 15px) !important;
          }
        }
      `}),e.jsxs("div",{className:"settings-container",ref:j,children:[e.jsx("button",{className:`settings-btn ${n?"active":""}`,onClick:()=>u(!n),"aria-label":"Ajustes",children:e.jsx(qn,{size:20})}),e.jsx(_e,{children:n&&e.jsxs(ie.div,{className:"settings-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{style:{marginBottom:"15px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(di,{label:"Cursor Prestigio",isActive:z,isLocked:!D,onToggle:()=>i(!z),color:"#f700ff"}),e.jsx(di,{label:"Tienda Dorada",isActive:o,isLocked:!l,onToggle:()=>t(!o),color:"#ffd700"})]}),e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"label",children:[e.jsx(yi,{})," ",e.jsx("span",{children:"Sonido Juego"})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:v,onChange:A=>L(parseFloat(A.target.value))})]}),e.jsx("div",{className:"divider"}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{y(!0),u(!1)},children:[e.jsx(ot,{})," Logros"]}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{w(!0),u(!1)},children:[e.jsx(Wn,{})," Documentación"]}),O&&e.jsxs("button",{className:"setting-action-btn",onClick:V,children:[e.jsx(Yn,{})," Código Admin"]}),e.jsxs("button",{className:"setting-action-btn danger",onClick:J,children:[e.jsx(Xn,{})," Resetear Progreso"]})]})})]}),e.jsx(_e,{children:m&&e.jsx("div",{className:"doc-overlay",onClick:()=>w(!1),children:e.jsxs(ie.div,{className:"doc-modal",onClick:A=>A.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>w(!1),children:e.jsx(xt,{size:24})}),e.jsx("h2",{children:"Guía de Usuario"}),e.jsxs("div",{className:"doc-content",style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{className:"doc-section",children:[e.jsx("h3",{style:{borderBottom:"2px solid #f700ff",paddingBottom:"5px",marginBottom:"15px"},children:"Barra de Navegación (Dock)"}),e.jsx("p",{style:{fontSize:"0.9rem",opacity:.8,marginBottom:"15px"},children:"Tu centro de control en la parte inferior de la pantalla. Pasa el ratón para ampliar los iconos."}),e.jsxs("ul",{style:{listStyle:"none",padding:0,display:"grid",gap:"12px"},children:[e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"rgba(255,255,255,0.1)",padding:"8px",borderRadius:"50%",display:"flex"},children:e.jsx(bi,{color:"#ffd700"})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Texto:"})," Muestra u oculta el contenido principal y la dedicatoria."]})]}),e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"rgba(255,255,255,0.1)",padding:"8px",borderRadius:"50%",display:"flex"},children:e.jsx(wi,{color:"#f700ff"})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Música:"})," Abre el reproductor para controlar la playlist integrada."]})]}),e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"rgba(255,255,255,0.1)",padding:"8px",borderRadius:"50%",display:"flex"},children:e.jsx(Si,{color:"#00ffff"})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Tienda:"})," Accede al catálogo para personalizar fondos, cursores y más."]})]}),e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"rgba(255,255,255,0.1)",padding:"8px",borderRadius:"50%",display:"flex"},children:e.jsx(Ci,{color:"#ff99cc"})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Juego:"})," Activa o desactiva el minijuego de recolección de monedas."]})]}),e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"rgba(255,255,255,0.1)",padding:"8px",borderRadius:"50%",display:"flex"},children:e.jsx(ji,{color:"#bd71ff"})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Fondo:"})," Abre el panel de personalización avanzada para el fondo actual."]})]}),e.jsxs("li",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("div",{style:{background:"rgba(255,255,255,0.1)",padding:"8px",borderRadius:"50%",display:"flex"},children:e.jsx(Ri,{color:"#ffffff"})}),e.jsxs("div",{children:[e.jsx("strong",{children:"Bloquear:"})," Vuelve a la pantalla de bloqueo inicial."]})]})]})]}),e.jsxs("div",{className:"doc-section",children:[e.jsx("h3",{style:{borderBottom:"2px solid #00ffff",paddingBottom:"5px",marginBottom:"10px"},children:"Juego y Tienda"}),e.jsxs("p",{style:{marginBottom:"10px"},children:[e.jsx("strong",{children:"El Juego:"})," El juego que consiste en recolectar monedas y se va haciendo más dificil. Haz clic en ellas para recolectarlas. Las monedas brillantes otorgan bonificaciones. ¡Encadena recolecciones rápidas para aumentar tu ",e.jsx("strong",{children:"Combo"})," y multiplicar tus ganancias!"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"La Tienda:"})," Utiliza tus monedas para desbloquear elementos cosméticos. Puedes cambiar el fondo, el estilo del cursor, añadir una mascota que te siga o cambiar el aspecto de las monedas."]})]}),e.jsxs("div",{className:"doc-section",children:[e.jsx("h3",{style:{borderBottom:"2px solid #ffd700",paddingBottom:"5px",marginBottom:"10px"},children:"Logros y Secretos"}),e.jsx("p",{children:"El sistema cuenta con numerosos logros ocultos. Juega, explora la interfaz y experimenta para desbloquearlos."}),e.jsxs("p",{style:{fontStyle:"italic",color:"#ffd700",marginTop:"10px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(ot,{})," Pista: Algunos logros especiales desbloquean características únicas en este menú de ajustes..."]})]})]})]})})}),e.jsx(_e,{children:S&&e.jsx("div",{className:"doc-overlay",onClick:()=>y(!1),children:e.jsxs(ie.div,{className:"doc-modal",onClick:A=>A.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>y(!1),children:e.jsx(xt,{size:24})}),e.jsxs("h2",{children:[e.jsx(ot,{style:{marginRight:"10px",color:"#ffd700"}})," ","Tus Logros"]}),e.jsx("div",{className:"doc-content",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:Object.entries(at).map(([A,H])=>{const M=C.includes(A);let W=H.desc;if(A==="collector"){const Y=Object.values(yt).flat().filter(r=>r.type!=="skin"),d=Y.length,c=T?Y.filter(r=>T.includes(r.id)).length:0;W=`${H.desc} (${c}/${d})`}if(A==="prestige"){const d=Object.keys(at).filter(r=>r!=="prestige"),c=C.filter(r=>d.includes(r)).length;W=`${H.desc} (${c}/${d.length})`}return e.jsxs("div",{style:{background:M?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)",border:M?"1px solid rgba(255, 215, 0, 0.3)":"1px solid rgba(255, 255, 255, 0.1)",padding:"15px",borderRadius:"12px",opacity:M?1:.5,display:"flex",alignItems:"center",gap:"15px"},children:[e.jsx("div",{style:{fontSize:"2rem"},children:M?H.icon:e.jsx(Ai,{className:"locked-icon"})}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 5px 0",color:M?"#ffd700":"white"},children:H.title}),e.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"rgba(255,255,255,0.7)"},children:W})]})]},A)})})})]})})})]})},di=({label:o,isActive:t,isLocked:i,onToggle:n,color:u})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",opacity:i?.5:1},children:[e.jsxs("span",{style:{fontSize:"0.9rem",fontWeight:500,display:"flex",alignItems:"center",gap:"8px",color:"white"},children:[o," ",i&&e.jsx(Ai,{size:10,style:{opacity:.7}})]}),e.jsx("div",{onClick:i?void 0:n,style:{width:"40px",height:"22px",background:t?u:"rgba(255,255,255,0.2)",borderRadius:"12px",position:"relative",cursor:i?"not-allowed":"pointer",transition:"background 0.3s ease"},children:e.jsx(ie.div,{animate:{x:t?18:2},transition:{type:"spring",stiffness:500,damping:30},style:{width:"18px",height:"18px",background:"white",borderRadius:"50%",position:"absolute",top:"2px",boxShadow:"0 2px 5px rgba(0,0,0,0.2)"}})})]}),mr=()=>{const{notification:o,clearNotification:t}=Ue();a.useEffect(()=>{if(o){const u=setTimeout(()=>{t()},4e3);return()=>clearTimeout(u)}},[o,t]);const i=o&&o.type==="achievement",n=i?at[o.id]:null;return e.jsx(_e,{children:i&&n&&e.jsxs(ie.div,{className:"achievement-toast",initial:{y:-100,x:"-50%",opacity:0},animate:{y:20,x:"-50%",opacity:1},exit:{y:-100,x:"-50%",opacity:0},transition:{type:"spring",stiffness:300,damping:20},children:[e.jsx("div",{className:"icon-container",children:e.jsx(mi,{size:24,color:"#ffd700"})}),e.jsxs("div",{className:"text-container",children:[e.jsx("span",{className:"title",children:"¡Logro Desbloqueado!"}),e.jsxs("span",{className:"name",children:[n.icon," ",n.title]}),e.jsx("span",{className:"desc",children:n.desc})]})]})})},hr=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"},{id:"skins",label:"Monedas",ariaLabel:"Personalizar Monedas"}];function gr(){const{isUnlocked:o,openShop:t,closeShop:i,lockGame:n,activeBackground:u,toggleGame:m,isGameActive:w,activeShop:S,addCoins:y,unlockAchievement:j,achievements:v,setCursor:L,activeCursor:R}=Ue(),[C,T]=a.useState(!0),[U,k]=a.useState(!1),[P,O]=a.useState(!1),[F,D]=a.useState(!1),[l,z]=a.useState(!0),[J,V]=a.useState(!1),[A,H]=a.useState(!1),[M,W]=a.useState(null),[Y,d]=a.useState(null),[c,r]=a.useState(null),[h,p]=a.useState(null),[b,G]=a.useState(null),[X,ae]=a.useState(null),[$,oe]=a.useState(null),[se,B]=a.useState(null);a.useEffect(()=>{const I=(Q,he)=>{let Z=document.querySelector(`meta[name="${Q}"]`);Z||(Z=document.createElement("meta"),Z.name=Q,document.head.appendChild(Z)),Z.setAttribute("content",he)};I("viewport","width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"),I("apple-mobile-web-app-capable","yes"),I("apple-mobile-web-app-status-bar-style","black-translucent")},[]);const[te,le]=a.useState(!0),[N,ue]=a.useState("default"),xe=I=>{I?(R!=="cursor_prestige"&&ue(R),L("cursor_prestige")):L(N||"default")};a.useEffect(()=>{o&&v&&!v.includes("prestige")&&Object.keys(at).filter(Z=>Z!=="prestige").every(Z=>v.includes(Z))&&(j("prestige"),L&&L("cursor_prestige"))},[v,o,j,L]);const ne=a.useRef(0);a.useEffect(()=>{if(!o)return;const I=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],Q=he=>{const Z=he.key.toLowerCase(),ye=I[ne.current].toLowerCase();Z===ye?(ne.current++,ne.current===I.length&&(y(1e6),j("matrix_master"),console.log("CHEAT ACTIVATED: KONAMI CODE!"),ne.current=0)):(ne.current=0,Z===I[0].toLowerCase()&&(ne.current=1))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[o,y,j]),a.useEffect(()=>{const I="toadsiempreseraelfavorito";let Q="";const he=Z=>{Z.key.length===1&&(Q+=Z.key.toLowerCase(),Q.length>I.length&&(Q=Q.slice(-I.length)),Q===I&&(H(!0),Q=""))};return window.addEventListener("keydown",he),()=>window.removeEventListener("keydown",he)},[]);const be=I=>{I&&t(I)},ce=()=>{P?(O(!1),F&&T(!0)):(V(!1),i(),D(C),T(!1),O(!0))},ge=[{icon:e.jsx(bi,{size:22}),label:"Texto",onClick:()=>{i(),w?m():T(!C)}},{icon:e.jsx(wi,{size:22}),label:"Música",onClick:()=>{i(),k(!U)}},{icon:e.jsx(Si,{size:22}),label:"Tienda",onClick:()=>{S&&i(),V(!J)}},{icon:e.jsx(Ci,{size:22,color:w?"#f700ff":"currentColor"}),label:"Juego",onClick:()=>{i(),w?T(l):(z(C),T(!0)),m()}},{icon:e.jsx(ji,{size:22}),label:"Fondo",onClick:ce},{icon:e.jsx(Ri,{size:22}),label:"Bloquear",onClick:()=>{n&&(i(),k(!1),W(null),d(null),r(null),p(null),G(null),ae(null),oe(null),B(null),n())}}],[de,Se]=a.useState(!0),[_,K]=a.useState(0);return a.useEffect(()=>{const I=setInterval(()=>{K(Q=>{const he=Q+Math.floor(Math.random()*15)+5;return he>=100?(clearInterval(I),setTimeout(()=>Se(!1),200),100):he})},200);return()=>clearInterval(I)},[]),e.jsxs("main",{style:{position:"fixed",inset:0,width:"100%",height:"100dvh",overflow:"hidden"},children:[e.jsx(_e,{mode:"wait",children:de&&e.jsx(Xs,{progress:_},"loader")}),e.jsx(_e,{children:!o&&e.jsx(ie.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(io,{})},"lock-screen")}),e.jsx(_e,{children:o&&e.jsxs(ie.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(Us,{floatingLinesConfig:M,lightPillarsConfig:Y,ballpitConfig:c,silkConfig:h,galaxyConfig:b,gradientConfig:X,pixelSnowConfig:$,hyperspeedConfig:se}),e.jsx(pr,{goldShopEnabled:te,setGoldShopEnabled:le,onTogglePrestige:xe}),e.jsx(mr,{}),e.jsx(Os,{isOpen:J,onToggle:I=>{V(I),I&&O(!1)},items:hr,isFixed:!0,position:"right",onItemClick:be,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(es,{}),e.jsx(cs,{enableGoldTheme:te}),e.jsx(Ys,{}),e.jsx(_e,{children:C&&e.jsx(ie.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(fs,{})})}),e.jsx(_e,{children:P&&["floatinglines","lightpillars","ballpit","silk","galaxy","gradient","pixelsnow","hyperspeed"].includes(u)&&e.jsx(ie.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(zs,{onClose:ce,floatingLinesConfig:M,setFloatingLinesConfig:W,lightPillarsConfig:Y,setLightPillarsConfig:d,ballpitConfig:c,setBallpitConfig:r,silkConfig:h,setSilkConfig:p,galaxyConfig:b,setGalaxyConfig:G,gradientConfig:X,setGradientConfig:ae,pixelSnowConfig:$,setPixelSnowConfig:oe,hyperspeedConfig:se,setHyperspeedConfig:B})})})}),e.jsx(fr,{visible:U,onClose:()=>k(!1)}),e.jsx(_e,{children:A&&e.jsx(ie.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{position:"fixed",inset:0,zIndex:99999,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"},onClick:()=>H(!1),children:e.jsxs(ie.div,{initial:{scale:.9,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.9,y:20,opacity:0},onClick:I=>I.stopPropagation(),style:{background:"rgba(20, 20, 25, 0.9)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"24px",padding:"40px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",minWidth:"320px",maxWidth:"90%",position:"relative"},children:[e.jsx("div",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"3px",color:"rgba(255,255,255,0.4)",marginBottom:"10px"},children:"Secret Container"}),e.jsx("h1",{style:{fontSize:"5rem",color:"#fff",margin:"0 0 30px 0",fontWeight:"800",textShadow:"0 0 30px rgba(189, 113, 255, 0.5)",fontVariantNumeric:"tabular-nums",lineHeight:1},children:"0"}),e.jsx("button",{onClick:()=>H(!1),style:{padding:"12px 30px",background:"linear-gradient(135deg, #bd71ff 0%, #f700ff 100%)",border:"none",color:"white",borderRadius:"12px",cursor:"pointer",fontWeight:"600",fontSize:"1rem",boxShadow:"0 10px 20px rgba(247, 0, 255, 0.3)",transition:"transform 0.2s"},onMouseEnter:I=>I.currentTarget.style.transform="scale(1.05)",onMouseLeave:I=>I.currentTarget.style.transform="scale(1)",children:"Cerrar"})]})})}),e.jsx(Ws,{items:ge,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}Hn.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(gr,{})}));
