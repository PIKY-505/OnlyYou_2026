import{c as ti,j as e,r as o,u as ii,C as we,a as ni,F as si,R as $e,b as ct,d as oi,e as ai,f as ri,g as li,h as ci,i as ui,k as di,l as fi,m as hi,n as zt,o as Ze,p as Nt,q as Ut,s as mi,t as Ot,v as pi,w as gi,O as vi,A as xi,x as yi,P as bi,V as H,y as ft,z as qt,S as Ge,W as He,B as wi,M as ut,D as me,I as Ci,E as Si,G as ji,H as Ai,J as ki,K as Pi,L as Ri,N as Ce,Q as ht,T as ze,U as qe,X as Ne,Y as Li,Z as mt,_ as Mi,$ as Ii,a0 as Fi,a1 as pt,a2 as Ei,a3 as Ue,a4 as _i,a5 as Di,a6 as gt,a7 as Ti,a8 as zi,a9 as vt,aa as _e,ab as ne,ac as Ni,ad as Ui,ae as Oi,af as qi,ag as Wi,ah as Wt,ai as Bi,aj as Gi,ak as Hi,al as Yi,am as Vi,an as Xi,ao as Ji,ap as Ki,aq as Qi,ar as $i,as as Zi}from"./vendor-CoN7QmUD.js";import{A as ve,m as V,u as We,a as dt,b as et}from"./framer-motion-DdwNV8iD.js";import{R as en,T as tn,P as nn,C as xt,M as sn}from"./ogl--UM621jO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const p of h.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(c){if(c.ep)return;c.ep=!0;const h=i(c);fetch(c.href,h)}})();const Re=ti(n=>({isUnlocked:!1,unlockApp:()=>n({isUnlocked:!0}),lockGame:()=>n({isUnlocked:!1}),activeShop:null,openShop:t=>n({activeShop:t}),closeShop:()=>n({activeShop:null}),isGameActive:!1,toggleGame:()=>n(t=>({isGameActive:!t.isGameActive})),coins:0,addCoins:t=>n(i=>({coins:i.coins+t})),gameVolume:.4,setGameVolume:t=>n({gameVolume:t}),activeCoinSkin:"dase",setCoinSkin:t=>n({activeCoinSkin:t}),ownedItems:["gradient","default","none","dase"],buyItem:t=>n(i=>i.ownedItems.includes(t.id)?i:i.coins>=t.price?{coins:i.coins-t.price,ownedItems:[...i.ownedItems,t.id]}:i),achievements:[],notification:null,unlockAchievement:t=>n(i=>i.achievements.includes(t)?i:{achievements:[...i.achievements,t],notification:{type:"achievement",id:t}}),clearNotification:()=>n({notification:null}),resetProgress:()=>n({coins:0,ownedItems:["gradient","default","none","dase"],activeBackground:"gradient",activeCursor:"default",activeTrail:"none",activeCoinSkin:"dase",achievements:[],isGameActive:!1}),activeBackground:"gradient",setBackground:t=>n({activeBackground:t}),activeCursor:"default",setCursor:t=>n({activeCursor:t}),activeTrail:"none",setTrail:t=>n({activeTrail:t})})),on=({text:n,disabled:t=!1,speed:i=3,className:s="",color:c="#7c7c7c",shineColor:h="#ffffff",direction:p="right"})=>e.jsx("div",{className:`shiny-text ${p} ${t?"disabled":""} ${s}`,style:{"--shiny-speed":`${i}s`,"--base-color":c,"--shine-color":h},children:n}),yt=n=>(n=n.replace("#",""),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255]),an=`
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  // FIX: Usar coordenadas de clip directas para llenar la pantalla siempre
  gl_Position = vec4(position, 1.0);
}
`,rn=`
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
`,Bt=o.forwardRef(function({uniforms:t},i){return ii((s,c)=>{i.current.material.uniforms.uTime.value+=.1*c}),e.jsxs("mesh",{ref:i,children:[e.jsx("planeGeometry",{args:[2,2]}),e.jsx("shaderMaterial",{uniforms:t,vertexShader:an,fragmentShader:rn})]})});Bt.displayName="SilkPlane";const Gt=({speed:n=1,scale:t=2,color:i="#ff99cc",noiseIntensity:s=.5,rotation:c=0})=>{const h=o.useRef(),p=o.useMemo(()=>({uSpeed:{value:n},uScale:{value:t},uNoiseIntensity:{value:s},uColor:{value:new we(...yt(i))},uRotation:{value:c},uTime:{value:0}}),[]);return o.useEffect(()=>{if(h.current){const w=h.current.material.uniforms;w.uSpeed.value=n,w.uScale.value=t,w.uNoiseIntensity.value=s,w.uColor.value.set(...yt(i)),w.uRotation.value=c}},[n,t,s,i,c]),o.useEffect(()=>{const f=setInterval(()=>window.dispatchEvent(new Event("resize")),50),C=setTimeout(()=>clearInterval(f),1200);return()=>{clearInterval(f),clearTimeout(C)}},[]),e.jsx(ni,{dpr:[1,2],frameloop:"always",resize:{debounce:0},style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"black"},children:e.jsx(Bt,{ref:h,uniforms:p})})},ln=()=>{const[n,t]=o.useState(""),[i,s]=o.useState(!1),c=Re(f=>f.unlockApp),h="230824",p=f=>{const C=f.target.value.replace(/\D/g,"");if(C.length>6)return;let y=C;C.length>2&&(y=C.slice(0,2)+"/"+C.slice(2)),C.length>4&&(y=y.slice(0,5)+"/"+C.slice(4)),t(y),s(!1)},w=f=>{f.preventDefault(),n.replace(/\//g,"")===h?c():(s(!0),setTimeout(()=>s(!1),1e3))};return e.jsxs("div",{className:"lock-screen",children:[e.jsx(Gt,{speed:4,scale:1,color:"#9726fa",noiseIntensity:1.5,rotation:0}),e.jsxs("div",{className:"lock-content",children:[e.jsx("h1",{children:e.jsx(on,{text:"La fecha donde empezó todo"})}),e.jsxs("form",{onSubmit:w,children:[e.jsx("input",{type:"text",inputMode:"numeric",placeholder:"DD/MM/AA",value:n,onChange:p,className:i?"error":""}),e.jsx("button",{type:"submit",children:e.jsx(si,{size:20})})]})]})]})},cn=""+new URL("bridge-CojLCfPY.jpeg",import.meta.url).href,un=Object.freeze(Object.defineProperty({__proto__:null,default:cn},Symbol.toStringTag,{value:"Module"})),dn=""+new URL("first-D3M4TVfP.jpg",import.meta.url).href,fn=Object.freeze(Object.defineProperty({__proto__:null,default:dn},Symbol.toStringTag,{value:"Module"})),hn=""+new URL("graduated-B6wsMf9J.jpeg",import.meta.url).href,mn=Object.freeze(Object.defineProperty({__proto__:null,default:hn},Symbol.toStringTag,{value:"Module"})),pn=""+new URL("halloween-BidyR4aF.jpg",import.meta.url).href,gn=Object.freeze(Object.defineProperty({__proto__:null,default:pn},Symbol.toStringTag,{value:"Module"})),vn=""+new URL("miestrella-TqC41RJI.jpg",import.meta.url).href,xn=Object.freeze(Object.defineProperty({__proto__:null,default:vn},Symbol.toStringTag,{value:"Module"})),yn=""+new URL("murder-olQPuXYs.jpeg",import.meta.url).href,bn=Object.freeze(Object.defineProperty({__proto__:null,default:yn},Symbol.toStringTag,{value:"Module"})),wn=""+new URL("rock-DJ9ByMrB.jpeg",import.meta.url).href,Cn=Object.freeze(Object.defineProperty({__proto__:null,default:wn},Symbol.toStringTag,{value:"Module"})),Sn=""+new URL("sleepy-vWyZnVIh.jpg",import.meta.url).href,jn=Object.freeze(Object.defineProperty({__proto__:null,default:Sn},Symbol.toStringTag,{value:"Module"})),An=""+new URL("sunshine-B5Zoex-L.jpeg",import.meta.url).href,kn=Object.freeze(Object.defineProperty({__proto__:null,default:An},Symbol.toStringTag,{value:"Module"})),je=n=>$e.createElement(n),Be={baby_steps:{title:"El Primer Paso",desc:"Recoge tu primera moneda, pobre.",icon:je(zt)},on_fire:{title:"Dedos de Fuego",desc:"Alcanza un combo x5.",icon:je(hi)},god_mode:{title:"Modo Dios",desc:"Mantén un combo x10.",icon:je(fi)},shiny_lover:{title:"Shiny Spotter",desc:"Atrapa una moneda especial.",icon:je(di)},sniper:{title:"Francotirador",desc:"Caza una moneda a máxima velocidad (>15).",icon:je(ui)},piggy_bank:{title:"Algo es algo",desc:"Acumula 500 monedas. Para un kebab da.",icon:je(ci)},stonks:{title:"Lobo de Wall Street",desc:"Consigue 1000 monedas.",icon:je(li)},crypto_king:{title:"Cripto Magnate",desc:"Llega a 5000 monedas.",icon:je(ri)},collector:{title:"Coleccionista",desc:"Compra todos los objetos de la tienda.",icon:je(ai)},matrix_master:{title:"El Elegido",desc:"Descubre el código secreto de administrador.",icon:je(oi)},prestige:{title:"Prestigio",desc:"Consigue todos los logros.",icon:je(ct)}},Ht=""+new URL("apple-cat-BHTFRffC.gif",import.meta.url).href,Yt=""+new URL("jump-cat-BVsZ-jsy.gif",import.meta.url).href,Vt=""+new URL("rolling-cat-BlLA7Xch.gif",import.meta.url).href,Xt=""+new URL("duck-BnqypGlP.png",import.meta.url).href,Jt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfpAgoQDSR9aWoCAAANHklEQVRo3u1YaXRVRbb+qk6dc+6cm4kwBTMSBkNAMYBEaBEEERGxsRFFRe3GJ9j4wJa37AZppN/CtZ6rl3NAeTTggIDIEIiCCKJMYQqEOSEJZCIkN/cmufM5p+r9SCBEE7BZLN6ffGvd86NuDfur/e3auwroQAc60IEOdODmQa735yuTngAA+AI+QJYRDAQw84W/QYGCgZMG/X/b3gqsrcY3Z74MSZFRfbECEpHMhJBuRFFLtcoy/dOVi3/TxPNeeglvZWfjhbFjYOg6KFNwYt8ujHnqRSz84L1bToS21ajrYehaiAgibI2N9QPCXu/HxOcbpppt0xiTHbIsX3fSpe/9E//IzsbItGQQQmNAyABCpbjYhCSs+2wJXlm16pYTaVNarz//LAhB54qS0iWESHmqrG7hxIgO+P3TzE7nHAJSvWzj5lZj/vO551B8PB8RsZ0Q8vvAdQ2qzZEgAr5lDLhbp3Qvi4h8OuCqqaMCoBKDbLXBHBEJLRjEqCmTMXny5JsmIrXVmDVgAAShRmO9x60oar0h0SP22JgSSPLmb/LyPXKnOFwoPAcA2LlzAfRyIBDwQ4RDoFaH2QgH0wmho7kWnGVjdGy02WzSdP2OgN+vAoiVJJYMSrsSJvMZGzfU7/nXMpw9dAAzZs9BTm7urfPI3Oenwe2qhaaFY0Je7zKqmL4XQu8VER3zP4LzEp1I+GTtOgDA8w8/BE3T8NJ32/Fu1pDhVPBXFUnKMlEazSghFlmGQiWEOYc3HAYXgjf/whpIpUHIp6rd/qGuaV6z3Y6lX2+4dR75+Wg+1icnQwiiUcryHM7IkwIiTGV2GkBw6br1+NusGQgVlSA+NQWDR/+efPHajGcVwZdEm0wDI02qxSrLxMQYJNK0VxIhMDMGi8yIVWbUqsiymdEoXddH+EMhj+fM6b1RCclIjOqM6dOmIvfHH/8tIm0GO2n5aiAo1LXwxaDf9zUB3BACubm5KDt5GnckJ+DktxuR+9myHsww/hpjNsfZFPmq8dcTAgGBKjHYZYXysJF1sCpSXrZmLbjuw4E9PyPnu1y8/MTvsWrJkpuX1rXYtWsXwDmWLJyPbglJqDh/HvWuy3DGdI0J+L33M0UaEZ8YF+O55B7tJJJdZayNiQkEBAQA0fzRhYGQZsDPDQwc1e8gIeSnHTkHma7RtZDVozTk9imOSKQM6o+a4nIsWXd9yd2QyOvPTcO+b3PQPSUNIW8duGTtSqmY6HRanu7dv/uAvncnKql3dseBnaewJ/cYuFdvcnPzzEIAAgCHACQCiVFQJsFsVRGXEIU7ByYi68F0eOsD2PvDKRzdW+gpL6095GvQNgkmb/DVVJRFxifC0DQk3dkfi7M//PeInFyzBos+zoYsK2isqQZTLJ2FCE+J6mSdmj4wMePeB3qT3hkJMNtUQAhoIR2lRdUoOl2BBo8PWkiHpulQVBlWqwKrwwq7wwK70wKTWYbDaUFEpBWKSW52U5M5njovis9UYc+Okyg4WFLgdvnfFbL1C8JDAUMLIz1rKBb+873fRmTNmjXYlP0xhAAs0QnUdeHUKEcEm5c5rNfQEeP7IymtK2RFghC8abuvTEYpQAggSIsrCAAiWq/ULC8hxK8NIgSgBFrQwNmCcmxZuz98ZG/RJ2GDvUmJcAkhMOah0Zi+YOH1iSxYsAAle/aCcwOK2SZ7Llf+OSEl5o0JU4dGDRrWC7KJQXB+I0XeEhCJot7lx+pPfsDOrSdW6jC/yojhlhhB2rDf4c2///1q318dv8kmFUIAztgkqba8cHbfu7q/Nf31cfZ+mcmgFNfI4DZACJgsMtLS41Fb5c4oL6pyqFbHTgpo3upLOFpYdLVrq+N3zpQpYLKC5du+Q2XxsT+m9uk8f9qs0aaEtDgIbtw+Atdy4QL2CDOenjESd2clvRhodP0p/+cdYKoZf/2PP17t18oj+qWLYBLF+n+tHNW5q+2DF+aMdabe2e22Sal9NoDFZkKPxFjpzPEL/SUl8ojP4yo9c/QELjTUtyby2tRnoKgquGAxZgv96MmX7u99z3092wzI2wlCCAilEJzDGW2DJDHbmfyLXQhzbIrqHB16ZfZsbN66tUVa46fPREPNJcDQJ/YflDR0yIg+rU4kIQBu3F7PEAJUXnDh8J6zMAwDEMCQEb2R0qfz0KDXPTDsbcSeLVsBNMfIinfewdJ5c6Ha45yOSHXq78ZkUJNFac7FACEUBXkl+OrTHxAO6reRCcXp4xexfvlu+LwhAIDVbkJaejcrlZAVDrrgjIpuIbJ//wnoQT94ODAgsWdc/7R+3YHmuCAgCPjCyFm9H9UV9SD0hsXALYRAap9u8DUGUVZU2+QiAnRP6ATVxPppak92uaa6hUh0JycMLQgQ0bdrjxibxaq2nLIUuFBUhbLSagwfkwHF3P7t8IqeyS+KRvKrIpKASPTGmyIEomLtsNhNqCxzNSdbICrGAbNZjjUCLtUIh1qIOCIcMIQBAZgpbcqs16yJC0WXYLObkJjWFeCivTVR7/bjXEEZaqsbQJpzraEbcNd5YehXPAwE/WEcP1CMi0U10MLtS1UAYIxCVhj83iCuBK1hGBACukwkzghtITLp+T9AVq2QJHb8/OlKf3WFG4QQcC7ANY46lw+d46NhjzC3W1bUu3344B/r8fbc1TiyrxCgBIQS1F6ux0eLv0FpUU1TCUMJ3LUN+OyDbVj8ly9wLK+4Xc8QEGiagWAgBCpdbUT5hRr4A6Giex5cGrDarACaX1FOHTkBppohqWx34emq7A8XbZjeIynOGgpqRs/0Hvk1VY0OpkiptJ0FhRCw2FSMGj8QdAJFz/TmGCMEFqsZWQ9kQDHTq/VVp26RmDFvAqorPUju1bX9aoE0eTng0xCfGAcQCq/Hh0M/nfMH/UbOsV3PoqS46KqnAQCTs4aCcw5Iktnw+e/lXNxhCOFVrfbdENqr996fMveV+Y9DkgTayyxNRSMA3rogJJRA/EKShJImzXPRbq4ilGLbN4eQ8+U+vPjaONgcJuzIOYqdWwtWhgLKdNVEgsl9emFRdnbLu1ZS5l0o2p8HSmmAKNIOYXAwAkgkDF0XBVUXXUZDvV+KjLa02kFCaUulCwFw/Mowwa+TVCkBaWMMIQSNHj9+3nYCIb+Wt/zdrZqvMax66nxbOWdLiPAF9ZCERdnZrT1yBT/+uAXx/VJxftcJjJzwGJ4akQVuoIsEPeeRKYPvemzqfVDUJsGGwzpOHC5F/r5CcA6k35OAtPQeiIi0AWg7eRJKwHWBy1X1KDlbARCClD7dEBvnhGgeQyhBKKjj6//djS1fHTjFVOuUujpfMRGExdiOu71GBoxwEN1TeuG9r1a3TeSXWLrmc+QsWAg1ImKiKtPsEeP7x46fci8sVhPWr/wJe7YfR3xSHBrcXngbgrDYVDw4cRCGP5QOSSJouZQ07XLhqUp8v/EwzhWUwVvvh9mqQjXLeOyZ4RgyohcIpXDXeLFtw0Fs/mJfaSjIpxGD7DJH26GHDciKBYahIXPIYPx50aJrw+n6ePGxcTACITz5xByyfPlb44QenndHSuyAyFgHKymswtSXRyJzeC+Egwbqahux9/sT2Jl7FI8/MwwjJwwEhAGDN53oBYdLseLdbYiOc2DoyL7olhADm92C7ZsOI2/nKYx+PBOhQBgHfzqLsuKac4aB1/2NtRtjuqeCKRSfbv62XTtvSMTj8WD2E5MgMYaqsgo4IuyxoUBwrGEYszIGJw54450noaisaSpCwA2OVe9/j/27TiL97iRQSuDzhUBAUFJYhYTULpg+92HYnKbmuCLwe0N4+7UvcSq/zEWA81yIrYyxz90nTxV1yhwECoqVO7Zf1052IyJOpxMAMPPRR3DfsCwcO5ZfQyWxgkOqr6ttXH2p3KP2SI1riV1KYbGpqK32Vv+Qc2wDF1wjoCAgEpHExDGPD4qzRVqBK/cbCmhhDWHNABfkbZPZ8nHN4d3eqH6Z6HrfMBih4A1JAO080LWFvLPnsD0vD7lr18MwDDAmlzfWe7ufP1OR4brUSKrL61BefBm7vyvAzi35gXAI/70u7+AbPRQtl2s8N33suG/dZWVJ9e6GgQ6HBQBBXY0XpeeqsXX1fhQcKt1PmfImwGsjklJBJAmZQwdj8fIVv8m+m6oAJw3OBAHAJDkyEAo8QiDuYYx2IQRm3eCVIPIW1WLOpYSEYrt0AQFFeWkhCJW66EFtltUqP2yxqVGccy3gD9f5/dohMPa+4fMXVBwrwMGbsOmmiPzlqadxoegMKJNhhEPQ/ZcgpHhGCKd2S5Lm4+eFrJrAuYG+DzyIxvJyFB8/BKaYYIvvSzyFx2OFoUUIKumcknopMsZDGl38630H8dyj47Bi05bbQwRoSmCznpqMzEfHYfsnyxHw+iCEgKLImPlf87Fq6Uf4aOPGq/3nz5qF03n7wWQZXNOaYoRS6BRgTEGD24WU9P54//Mvb9akDnSgAx3owO3H/wGUgcIFOUeM9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNS0wMi0xMFQxNjoxMzozMCswMDowMC3bAQsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjUtMDItMTBUMTY6MTM6MzArMDA6MDBchrm3AAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI1LTAyLTEwVDE2OjEzOjM2KzAwOjAwaEOtUgAAAABJRU5ErkJggg==",Kt=""+new URL("skeleton-run-CHzXkBxe.gif",import.meta.url).href,tt={backgrounds:[{id:"gradient",name:"Original Gradient",description:"El clásico atemporal.",price:0,type:"background",previewColor:"linear-gradient(45deg, #8629b1, #f700ff)"},{id:"galaxy",name:"Galaxy",description:"Un viaje a las estrellas.",price:50,type:"background",previewColor:"#000"},{id:"silk",name:"Silk",description:"Suavidad y elegancia.",price:100,type:"background",previewColor:"#ff99cc"},{id:"ballpit",name:"Ball Pit",description:"Física interactiva y relajante.",price:150,type:"background",previewColor:"#29b1ff"},{id:"floatinglines",name:"Floating Lines",description:"Ondas de energía interactivas.",price:200,type:"background",previewColor:"#bd71ff"},{id:"lightpillars",name:"Light Pillars",description:"Pilares de luz etéreos.",price:250,type:"background",previewColor:"#00ffff"},{id:"pixelsnow",name:"Pixel Snow",description:"Nevada suave y distante.",price:300,type:"background",previewColor:"#ffffff"},{id:"hyperspeed",name:"Hyperspeed",description:"Velocidad luz y distorsión.",price:500,type:"background",previewColor:"#d856bf"}],cursors:[{id:"default",name:"Ratón Estándar",description:"El cursor de toda la vida.",price:0,type:"cursor",previewColor:"transparent",icon:e.jsx(Ot,{})}],trails:[{id:"none",name:"Ninguno",description:"Sin rastro, limpio y rápido.",price:0,type:"trail",previewColor:"transparent",icon:e.jsx(mi,{})},{id:"apple-cat",name:"Gato Manzana",description:"Un gatito adorable en una manzana.",price:100,type:"trail",previewColor:"#ffadad",icon:e.jsx("img",{src:Ht,alt:"Apple Cat",style:{width:"40px"}})},{id:"jump-cat",name:"Gato Saltarín",description:"Siempre lleno de energía.",price:100,type:"trail",previewColor:"#a89c8d",icon:e.jsx("img",{src:Yt,alt:"Jump Cat",style:{width:"40px"}})},{id:"rolling-cat",name:"Gato Rodante",description:"Rodando hacia tu corazón.",price:100,type:"trail",previewColor:"#ffecb6",icon:e.jsx("img",{src:Vt,alt:"Rolling Cat",style:{width:"40px"}})},{id:"duck",name:"Pato",description:"Cuack cuack.",price:100,type:"trail",previewColor:"#ebe371",icon:e.jsx("img",{src:Xt,alt:"Duck",style:{width:"40px"}})},{id:"pompom",name:"Pompom",description:"Suave y esponjoso.",price:100,type:"trail",previewColor:"#e3e4b2",icon:e.jsx("img",{src:Jt,alt:"Pompom",style:{width:"40px"}})},{id:"skeleton-run",name:"Esqueleto",description:"Spooky scary skeletons.",price:100,type:"trail",previewColor:"#a3a3a3",icon:e.jsx("img",{src:Kt,alt:"Skeleton",style:{width:"40px"}})}],skins:[{id:"dase",name:"Dase Original",description:"La moneda original.",price:0,type:"skin",previewColor:"#ffd700",icon:e.jsx(Ut,{})}]},Pn=[{id:"backgrounds",label:"Fondos",icon:e.jsx(pi,{})},{id:"cursors",label:"Cursores",icon:e.jsx(Ot,{})},{id:"trails",label:"Mascotas",icon:e.jsx(gi,{})},{id:"skins",label:"Monedas",icon:e.jsx(Ut,{})}],Rn=()=>{const{activeShop:n,openShop:t,closeShop:i,activeBackground:s,setBackground:c,activeCursor:h,setCursor:p,activeTrail:w,setTrail:f,coins:C,buyItem:y,ownedItems:k,activeCoinSkin:S,setCoinSkin:m,achievements:L,unlockAchievement:F}=Re(),[_,I]=o.useState(n),[U,X]=o.useState([]),v=o.useRef();o.useEffect(()=>{n&&I(n)},[n]),o.useEffect(()=>{if(k&&!L.includes("collector")){const d=Object.values(tt).reduce((M,E)=>M+E.length,0);k.length>=d&&F("collector")}},[k,L,F]);const R=L&&L.includes("collector"),j=o.useCallback(()=>{R&&(X(d=>d.map(M=>({...M,x:M.x+M.vx,y:M.y+M.vy,life:M.life-.02,size:M.size*.95})).filter(M=>M.life>0)),v.current=requestAnimationFrame(j))},[R]);o.useEffect(()=>(R&&n&&(v.current=requestAnimationFrame(j)),()=>cancelAnimationFrame(v.current)),[R,n,j]);const T=d=>{if(!R)return;const M=d.currentTarget.getBoundingClientRect(),E=d.clientX-M.left,b=d.clientY-M.top;if(Math.random()>.5)return;const a={id:Math.random(),x:E,y:b,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5+.5,life:1,size:Math.random()*3+2};X(l=>[...l,a])},O=tt[_]||[],A=d=>{k.includes(d.id)?(n==="backgrounds"&&c(d.id),n==="cursors"&&p(d.id),n==="trails"&&f(d.id),n==="skins"&&m(d.id)):C>=d.price&&y(d)},q=d=>n==="backgrounds"?s===d:n==="cursors"?h===d:n==="trails"?w===d:n==="skins"?S===d:!1;return e.jsx(ve,{children:n&&e.jsxs(V.div,{className:"shop-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.2}},children:[e.jsx("div",{className:"click-outside-layer",onClick:i,style:{position:"absolute",inset:0,pointerEvents:"auto"}}),e.jsxs(V.div,{className:`shop-window ${R?"gold-theme":""}`,onMouseMove:T,initial:{scale:.5,opacity:0,rotate:-10},animate:{scale:1,opacity:1,rotate:0},exit:{scale:.95,y:10,opacity:0,transition:{duration:.2}},transition:{type:"spring",stiffness:120,damping:12},children:[e.jsx(V.div,{className:"gold-bg-layer",initial:{opacity:0},animate:{opacity:R?1:0},transition:{duration:.8}}),U.map(d=>e.jsx("div",{className:"gold-particle",style:{left:d.x,top:d.y,width:d.size,height:d.size,opacity:d.life}},d.id)),e.jsxs("div",{className:"shop-header-row",children:[e.jsx("div",{className:"shop-tabs",children:Pn.map(d=>e.jsxs("button",{onClick:()=>t(d.id),className:`tab-btn ${n===d.id?"active":""}`,children:[d.icon,e.jsx("span",{children:d.label}),n===d.id&&e.jsx(V.div,{layoutId:"activeTab",className:"active-line"})]},d.id))}),e.jsxs("div",{className:"coin-display",children:[C," 🪙"]}),e.jsx("button",{onClick:i,className:"close-btn",children:e.jsx(Ze,{})})]}),e.jsxs("div",{className:"shop-section-title",children:["Catálogo de"," ",_==="backgrounds"?"Fondos":_==="cursors"?"Cursores":_==="trails"?"Mascotas":"Monedas"]}),e.jsx("div",{className:"shop-grid",children:e.jsx(ve,{mode:"wait",children:e.jsx(V.div,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:-10},transition:{duration:.2},style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"20px",width:"100%"},children:O.map(d=>e.jsxs("div",{className:`shop-item ${q(d.id)?"equipped":""}`,onClick:()=>A(d),children:[e.jsxs("div",{className:"item-preview",style:{background:d.previewColor},children:[d.icon&&e.jsx("div",{className:"preview-icon",children:d.icon}),q(d.id)&&e.jsx("div",{className:"check-badge",children:e.jsx(Nt,{})})]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h3",{children:d.name}),e.jsx("p",{children:d.description}),k.includes(d.id)?e.jsx("span",{className:"price-tag",style:{color:"#00e676",background:"rgba(0, 230, 118, 0.15)"},children:q(d.id)?"Equipado":"En propiedad"}):e.jsxs("span",{className:"price-tag",children:[d.price," Monedas"]})]})]},d.id))},_)})})]})]})})},Ln=""+new URL("dase-Ul_8ADqZ.png",import.meta.url).href,Mn=""+new URL("daseshiny-CaXO5CeC.png",import.meta.url).href,In=""+new URL("dase-YSuIB7YX.mp3",import.meta.url).href,be=80,bt={dase:{normal:Ln,shiny:Mn,sound:In}};function Fn(){const{addCoins:n,activeCoinSkin:t,gameVolume:i,unlockAchievement:s,coins:c,achievements:h,ownedItems:p}=Re(),[w,f]=o.useState([]),[C,y]=o.useState([]),[k,S]=o.useState(1),m=o.useRef(),L=o.useRef(null),F=o.useRef(!1),_=o.useRef(null);o.useEffect(()=>(F.current=!0,()=>{F.current=!1,_.current&&clearTimeout(_.current)}),[]);const I=bt[t]||bt.dase;o.useEffect(()=>{I.sound&&(L.current=new Audio(I.sound),L.current.volume=i)},[I,i]),o.useEffect(()=>{const v=window.innerWidth,R=window.innerHeight,j=[];for(let T=0;T<5;T++)j.push({id:`normal-${T}`,type:"normal",x:Math.random()*(v-be),y:Math.random()*(R-be),vx:(Math.random()-.5)*6,vy:(Math.random()-.5)*6,img:I.normal,value:1});j.push({id:"shiny-1",type:"shiny",x:Math.random()*(v-be),y:Math.random()*(R-be),vx:(Math.random()-.5)*10,vy:(Math.random()-.5)*10,img:I.shiny,value:5}),f(j)},[t,I]);const U=o.useCallback(()=>{f(v=>v.map(R=>{let{x:j,y:T,vx:O,vy:A}=R;return j+=O,T+=A,(j<=0||j>=window.innerWidth-be)&&(O=-O,j=Math.max(0,Math.min(j,window.innerWidth-be))),(T<=0||T>=window.innerHeight-be)&&(A=-A,T=Math.max(0,Math.min(T,window.innerHeight-be))),{...R,x:j,y:T,vx:O,vy:A}})),y(v=>v.length===0?v:v.map(R=>({...R,x:R.x+R.vx,y:R.y+R.vy,vy:R.vy+.5,life:R.life-.03})).filter(R=>R.life>0)),m.current=requestAnimationFrame(U)},[]);o.useEffect(()=>(m.current=requestAnimationFrame(U),()=>cancelAnimationFrame(m.current)),[U]);const X=v=>{let R=k+1;R>10&&(R=10),S(R),_.current&&clearTimeout(_.current);const j=Math.max(500,2500-R*200);_.current=setTimeout(()=>{F.current&&S(1)},j);const T=v.value*R;n(T),s("baby_steps"),R>=5&&s("on_fire"),R>=10&&s("god_mode"),v.type==="shiny"&&s("shiny_lover"),Math.sqrt(v.vx*v.vx+v.vy*v.vy)>15&&s("sniper");const A=c+T;A>=500&&s("piggy_bank"),A>=1e3&&s("stonks"),A>=5e3&&s("crypto_king");const q=Object.values(tt).reduce((E,b)=>E+b.length,0);if(p&&p.length>=q&&s("collector"),h){const E=Object.keys(Be);E.length,E.filter(l=>l!=="prestige").every(l=>h.includes(l))&&s("prestige")}if(v.type==="shiny"&&L.current){const E=L.current.cloneNode();E.volume=i,E.play().catch(b=>console.log("Audio error:",b))}const d=[],M=v.type==="shiny"?"#ffd700":"#ffffff";for(let E=0;E<12;E++)d.push({id:`${Date.now()}-${E}-${Math.random()}`,x:v.x+be/2,y:v.y+be/2,vx:(Math.random()-.5)*15,vy:(Math.random()-.5)*15,life:1,color:M});y(E=>[...E,...d]),f(E=>E.filter(b=>b.id!==v.id)),setTimeout(()=>{F.current&&f(E=>{const b=window.innerWidth,a=window.innerHeight,l=1+R*.15,g={...v,id:`${v.type}-${Date.now()}-${Math.random()}`,x:Math.random()*(b-be),y:Math.random()*(a-be),vx:(Math.random()-.5)*(v.type==="shiny"?12:8)*l,vy:(Math.random()-.5)*(v.type==="shiny"?12:8)*l};return[...E,g]})},2e3)};return e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:30,pointerEvents:"auto",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"80px",right:"40px",pointerEvents:"none",textAlign:"right",zIndex:100},children:k>1&&e.jsxs("div",{style:{fontFamily:"var(--font-main)",fontSize:"3rem",fontWeight:"900",color:"#f700ff",textShadow:"0 0 20px rgba(247, 0, 255, 0.8)",transform:`scale(${1+k*.1})`,transition:"transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)"},children:["x",k]})}),C.map(v=>e.jsx("div",{style:{position:"absolute",left:v.x,top:v.y,width:"8px",height:"8px",backgroundColor:v.color,borderRadius:"50%",opacity:v.life,pointerEvents:"none",transform:"translate(-50%, -50%)",boxShadow:`0 0 8px ${v.color}`}},v.id)),w.map(v=>e.jsx("img",{src:v.img,alt:"coin",onMouseDown:R=>{R.stopPropagation(),X(v)},style:{position:"absolute",transform:`translate3d(${v.x}px, ${v.y}px, 0)`,width:be,height:be,objectFit:"contain",cursor:"pointer",userSelect:"none",filter:v.type==="shiny"?"drop-shadow(0 0 15px gold) brightness(1.2)":"drop-shadow(0 0 5px rgba(255,255,255,0.3))"},draggable:!1},v.id))]})}const En=Object.assign({"../../assets/img/photos/bridge.jpeg":un,"../../assets/img/photos/first.jpg":fn,"../../assets/img/photos/graduated.jpeg":mn,"../../assets/img/photos/halloween.jpg":gn,"../../assets/img/photos/miestrella.jpg":xn,"../../assets/img/photos/murder.jpeg":bn,"../../assets/img/photos/rock.jpeg":Cn,"../../assets/img/photos/sleepy.jpg":jn,"../../assets/img/photos/sunshine.jpeg":kn}),ot=Object.values(En).map(n=>n.default),_n=()=>{const[n,t]=o.useState(null),{isGameActive:i}=Re();let s=[...ot];if(s.length>0)for(;s.length<18;)s=[...s,...ot];const c=[...s,...s];return e.jsx(ve,{mode:"wait",children:i?e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{width:"100%",height:"100%"},children:e.jsx(Fn,{})},"game"):e.jsxs(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"main-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"glass-card",children:[e.jsxs("header",{children:[e.jsx("h1",{children:"Lorem Ipsum"}),e.jsx("div",{className:"subtitle",children:"Dolor sit amet, consectetur adipiscing elit"})]}),e.jsxs("div",{className:"content-body",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),ot.length>0&&e.jsx("div",{className:"gallery-container",children:e.jsx("div",{className:"gallery-track",children:c.map((h,p)=>e.jsx("img",{src:h,alt:`Memory ${p}`,className:"gallery-item",onClick:()=>t(h)},p))})}),e.jsx(ve,{children:n&&e.jsx(V.div,{initial:{opacity:0,backdropFilter:"blur(0px)"},animate:{opacity:1,backdropFilter:"blur(10px)"},exit:{opacity:0,backdropFilter:"blur(0px)"},onClick:()=>t(null),style:{position:"fixed",inset:0,zIndex:1e4,background:"rgba(0, 0, 0, 0.7)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out"},children:e.jsx(V.img,{src:n,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{type:"spring",damping:25,stiffness:300},style:{maxHeight:"85vh",maxWidth:"90vw",borderRadius:"16px",boxShadow:"0 20px 50px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},onClick:h=>h.stopPropagation()})})})]},"content")})},Dn=({color1:n="#b117f8",color2:t="#2c0b2e",speed:i=20})=>e.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:-1,background:"#050505",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",width:"200vmax",height:"200vmax",transform:"translate(-50%, -50%)",background:`linear-gradient(to bottom, ${n}, ${t})`,animation:`spinGradient ${i}s linear infinite`}}),e.jsx("style",{children:`
          @keyframes spinGradient {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `})]}),Tn=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,zn=`
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
`,Nn=({focal:n=[.5,.5],rotation:t=[1,0],starSpeed:i=0,density:s=1.5,hueShift:c=300,disableAnimation:h=!1,speed:p=.5,glowIntensity:w=.5,saturation:f=.8,twinkleIntensity:C=.5,rotationSpeed:y=.05,transparent:k=!0,colorCycleSpeed:S=10,rainbow:m=!1,warp:L=!1,...F})=>{const _=o.useRef(null),I=o.useRef(c),U=o.useRef(null),X=o.useRef({starSpeed:i,disableAnimation:h,rainbow:m,colorCycleSpeed:S,warp:L,hueShift:c});return o.useEffect(()=>{X.current={starSpeed:i,disableAnimation:h,rainbow:m,colorCycleSpeed:S,warp:L,hueShift:c}},[i,h,m,S,L,c]),o.useEffect(()=>{if(!_.current)return;const v=_.current;v.innerHTML="";const R=new en({alpha:k,premultipliedAlpha:!1,dpr:1}),j=R.gl;k?(j.enable(j.BLEND),j.blendFunc(j.SRC_ALPHA,j.ONE_MINUS_SRC_ALPHA),j.clearColor(0,0,0,0)):j.clearColor(0,0,0,1);let T;function O(){R.setSize(v.offsetWidth*1,v.offsetHeight*1),U.current&&(U.current.uniforms.uResolution.value=new xt(j.canvas.width,j.canvas.height,j.canvas.width/j.canvas.height))}window.addEventListener("resize",O,!1),O();const A=new tn(j);T=new nn(j,{vertex:Tn,fragment:zn,uniforms:{uTime:{value:0},uResolution:{value:new xt(j.canvas.width,j.canvas.height,j.canvas.width/j.canvas.height)},uFocal:{value:new Float32Array(n)},uRotation:{value:new Float32Array(t)},uStarSpeed:{value:i},uDensity:{value:s},uHueShift:{value:c},uSpeed:{value:p},uGlowIntensity:{value:w},uSaturation:{value:f},uTwinkleIntensity:{value:C},uRotationSpeed:{value:y},uTransparent:{value:k}}}),U.current=T;const q=new sn(j,{geometry:A,program:T});let d,M=0;const b=1e3/30;function a(l){if(d=requestAnimationFrame(a),!_.current||!U.current)return;const g=l-M;if(g<b)return;M=l-g%b;const{starSpeed:u,disableAnimation:P,rainbow:N,colorCycleSpeed:W,warp:Q,hueShift:D}=X.current;if(!P){T.uniforms.uTime.value=l*.001;const ee=Q?u*10:u;T.uniforms.uStarSpeed.value=l*.001*ee/10,N?(I.current+=W*.05,T.uniforms.uHueShift.value=I.current%360):T.uniforms.uHueShift.value=D}R.render({scene:q})}return d=requestAnimationFrame(a),v.appendChild(j.canvas),j.canvas.style.width="100%",j.canvas.style.height="100%",j.canvas.style.display="block",j.canvas.style.willChange="transform",()=>{cancelAnimationFrame(d),window.removeEventListener("resize",O),v&&j.canvas&&v.contains(j.canvas)&&v.removeChild(j.canvas),j.getExtension("WEBGL_lose_context")?.loseContext(),U.current=null}},[k]),o.useEffect(()=>{if(!U.current)return;const v=U.current.uniforms;v.uFocal.value=new Float32Array(n),v.uRotation.value=new Float32Array(t),v.uDensity.value=s,v.uSpeed.value=p,v.uGlowIntensity.value=w,v.uSaturation.value=f,v.uTwinkleIntensity.value=C,v.uRotationSpeed.value=y},[n,t,s,p,w,f,C,y]),e.jsx("div",{ref:_,className:"galaxy-container",style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,contain:"strict",overflow:"hidden"},...F})},Un=$e.memo(Nn);class On{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#i;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#S;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#s=!1;#n=!1;isDisposed=!1;#o;#a;#r;#l=new ft;#t={elapsed:0,delta:0};#d;constructor(t){this.#e={...t},this.#p(),this.#g(),this.#v(),this.resize(),this.#x()}#p(){this.camera=new qt,this.cameraFov=this.camera.fov}#g(){this.scene=new Ge}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const t={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new He(t),this.renderer.outputColorSpace=wi}#x(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#a=new ResizeObserver(this.#c.bind(this)),this.#a.observe(this.canvas.parentNode))),this.#o=new IntersectionObserver(this.#b.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#o.observe(this.canvas),document.addEventListener("visibilitychange",this.#f.bind(this))}#y(){window.removeEventListener("resize",this.#c.bind(this)),this.#a?.disconnect(),this.#o?.disconnect(),document.removeEventListener("visibilitychange",this.#f.bind(this))}#b(t){this.#s=t[0].isIntersecting,this.#s?this.#m():this.#u()}#f(){this.#s&&(document.hidden?this.#u():this.#m())}#c(){this.#r&&clearTimeout(this.#r),this.#r=setTimeout(this.resize.bind(this),100)}resize(){let t,i;this.#e.size instanceof Object?(t=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(t=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(t=window.innerWidth,i=window.innerHeight),this.size.width=t,this.size.height=i,this.size.ratio=t/i,this.#w(),this.#C(),this.onAfterResize(this.size)}#w(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#h(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#h(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#h(t){const i=Math.tan(ut.degToRad(this.cameraFov/2))/(this.camera.aspect/t);this.camera.fov=2*ut.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const t=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(t/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#C(){this.renderer.setSize(this.size.width,this.size.height),this.#i?.setSize(this.size.width,this.size.height);let t=window.devicePixelRatio;this.maxPixelRatio&&t>this.maxPixelRatio?t=this.maxPixelRatio:this.minPixelRatio&&t<this.minPixelRatio&&(t=this.minPixelRatio),this.renderer.setPixelRatio(t),this.size.pixelRatio=t}get postprocessing(){return this.#i}set postprocessing(t){this.#i=t,this.render=t.render.bind(t)}#m(){if(this.#n)return;const t=()=>{this.#d=requestAnimationFrame(t),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#n=!0,this.#l.start(),t()}#u(){this.#n&&(cancelAnimationFrame(this.#d),this.#n=!1,this.#l.stop())}#S(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(t=>{t.isMesh&&typeof t.material=="object"&&t.material!==null&&(Object.keys(t.material).forEach(i=>{const s=t.material[i];s!==null&&typeof s=="object"&&typeof s.dispose=="function"&&s.dispose()}),t.material.dispose(),t.geometry.dispose())}),this.scene.clear()}dispose(){this.#y(),this.#u(),this.clear(),this.#i?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const Pe=new Map,Ae=new me;let at=!1;function qn(n){const t={position:new me,nPosition:new me,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...n};return(function(i,s){Pe.has(i)||(Pe.set(i,s),at||(document.body.addEventListener("pointermove",wt),document.body.addEventListener("pointerleave",St),document.body.addEventListener("click",Ct),document.body.addEventListener("touchstart",jt,{passive:!1}),document.body.addEventListener("touchmove",At,{passive:!1}),document.body.addEventListener("touchend",Ve,{passive:!1}),document.body.addEventListener("touchcancel",Ve,{passive:!1}),at=!0))})(n.domElement,t),t.dispose=()=>{const i=n.domElement;Pe.delete(i),Pe.size===0&&(document.body.removeEventListener("pointermove",wt),document.body.removeEventListener("pointerleave",St),document.body.removeEventListener("click",Ct),document.body.removeEventListener("touchstart",jt),document.body.removeEventListener("touchmove",At),document.body.removeEventListener("touchend",Ve),document.body.removeEventListener("touchcancel",Ve),at=!1)},t}function wt(n){Ae.x=n.clientX,Ae.y=n.clientY,Wn()}function Wn(){for(const[n,t]of Pe){const i=n.getBoundingClientRect();nt(i)?(it(t,i),t.hover||(t.hover=!0,t.onEnter(t)),t.onMove(t)):t.hover&&!t.touching&&(t.hover=!1,t.onLeave(t))}}function Ct(n){Ae.x=n.clientX,Ae.y=n.clientY;for(const[t,i]of Pe){const s=t.getBoundingClientRect();it(i,s),nt(s)&&i.onClick(i)}}function St(){for(const n of Pe.values())n.hover&&(n.hover=!1,n.onLeave(n))}function jt(n){if(n.touches.length>0){n.preventDefault(),Ae.x=n.touches[0].clientX,Ae.y=n.touches[0].clientY;for(const[t,i]of Pe){const s=t.getBoundingClientRect();nt(s)&&(i.touching=!0,it(i,s),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function At(n){if(n.touches.length>0){n.preventDefault(),Ae.x=n.touches[0].clientX,Ae.y=n.touches[0].clientY;for(const[t,i]of Pe){const s=t.getBoundingClientRect();it(i,s),nt(s)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function Ve(){for(const[,n]of Pe)n.touching&&(n.touching=!1,n.hover&&(n.hover=!1,n.onLeave(n)))}function it(n,t){const{position:i,nPosition:s}=n;i.x=Ae.x-t.left,i.y=Ae.y-t.top,s.x=i.x/t.width*2-1,s.y=-i.y/t.height*2+1}function nt(n){const{x:t,y:i}=Ae,{left:s,top:c,width:h,height:p}=n;return t>=s&&t<=s+h&&i>=c&&i<=c+p}const{randFloat:Bn,randFloatSpread:rt}=ut,lt=new H,fe=new H,Xe=new H,Gn=new H,he=new H,Je=new H,De=new H,Fe=new H,Ke=new H,kt=new H;class Hn{constructor(t){this.config=t,this.positionData=new Float32Array(3*t.count).fill(0),this.velocityData=new Float32Array(3*t.count).fill(0),this.sizeData=new Float32Array(t.count).fill(1),this.center=new H,this.#e(),this.setSizes()}#e(){const{config:t,positionData:i}=this;this.center.toArray(i,0);for(let s=1;s<t.count;s++){const c=3*s;i[c]=rt(2*t.maxX),i[c+1]=rt(2*t.maxY),i[c+2]=rt(2*t.maxZ)}}setSizes(){const{config:t,sizeData:i}=this;i[0]=t.size0;for(let s=1;s<t.count;s++)i[s]=Bn(t.minSize,t.maxSize)}update(t){const{config:i,center:s,positionData:c,sizeData:h,velocityData:p}=this;let w=0;i.controlSphere0&&(w=1,lt.fromArray(c,0),lt.lerp(s,.1).toArray(c,0),Gn.set(0,0,0).toArray(p,0));for(let f=w;f<i.count;f++){const C=3*f;fe.fromArray(c,C),he.fromArray(p,C),he.y-=t.delta*i.gravity*h[f],he.multiplyScalar(i.friction),he.clampLength(0,i.maxVelocity),fe.add(he),fe.toArray(c,C),he.toArray(p,C)}for(let f=w;f<i.count;f++){const C=3*f;fe.fromArray(c,C),he.fromArray(p,C);const y=h[f];for(let S=f+1;S<i.count;S++){const m=3*S;Xe.fromArray(c,m),Je.fromArray(p,m);const L=h[S];De.copy(Xe).sub(fe);const F=De.length(),_=y+L;if(F<_){const I=_-F;Fe.copy(De).normalize().multiplyScalar(.5*I),Ke.copy(Fe).multiplyScalar(Math.max(he.length(),1)),kt.copy(Fe).multiplyScalar(Math.max(Je.length(),1)),fe.sub(Fe),he.sub(Ke),fe.toArray(c,C),he.toArray(p,C),Xe.add(Fe),Je.add(kt),Xe.toArray(c,m),Je.toArray(p,m)}}if(i.controlSphere0){De.copy(lt).sub(fe);const S=De.length(),m=y+h[0];if(S<m){const L=m-S;Fe.copy(De.normalize()).multiplyScalar(L),Ke.copy(Fe).multiplyScalar(Math.max(he.length(),1)),fe.sub(Fe),he.sub(Ke)}}Math.abs(fe.x)+y>i.maxX&&(fe.x=Math.sign(fe.x)*(i.maxX-y),he.x=-he.x*i.wallBounce),i.gravity===0?Math.abs(fe.y)+y>i.maxY&&(fe.y=Math.sign(fe.y)*(i.maxY-y),he.y=-he.y*i.wallBounce):fe.y-y<-i.maxY&&(fe.y=-i.maxY+y,he.y=-he.y*i.wallBounce);const k=Math.max(i.maxZ,i.maxSize);Math.abs(fe.z)+y>k&&(fe.z=Math.sign(fe.z)*(i.maxZ-y),he.z=-he.z*i.wallBounce),fe.toArray(c,C),he.toArray(p,C)}}explode(t,i=2){const{positionData:s,velocityData:c,config:h}=this;for(let p=0;p<h.count;p++){const w=3*p,f=s[w]-t.x,C=s[w+1]-t.y,y=s[w+2]-t.z,k=f*f+C*C+y*y;if(k<60){const S=Math.sqrt(k)+.01,m=i*50/(S+1),L=(Math.random()-.5)*1.5,F=(Math.random()-.5)*1.5,_=(Math.random()-.5)*1.5;c[w]+=(f/S+L)*m,c[w+1]+=(C/S+F)*m,c[w+2]+=(y/S+_)*m}}}}class Yn extends Ri{constructor(t){super(t),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
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
      `);const s=Ce.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",s),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const Vn={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0,enableExplosion:!1,rainbow:!1},Te=new vi;class Xn extends Ci{constructor(t,i={}){const s={...Vn,...i},c=new Si,h=new ji(t,.04).fromScene(c).texture,p=new Ai,w=new Yn({envMap:h,...s.materialParams});w.envMapRotation.x=-Math.PI/2,super(p,w,s.count),this.config=s,this.physics=new Hn(s),this.#e(),this.setColors(s.colors),this.rainbowHue=0}#e(){this.ambientLight=new ki(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new Pi(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(t){if(Array.isArray(t)&&t.length>1){const i=(function(s){let c,h;function p(w){c=w,h=[],c.forEach(f=>{h.push(new we(f))})}return p(s),{setColors:p,getColorAt:function(w,f=new we){const C=Math.max(0,Math.min(1,w))*(c.length-1),y=Math.floor(C),k=h[y];if(y>=c.length-1)return k.clone();const S=C-y,m=h[y+1];return f.r=k.r+S*(m.r-k.r),f.g=k.g+S*(m.g-k.g),f.b=k.b+S*(m.b-k.b),f}}})(t);for(let s=0;s<this.count;s++)this.setColorAt(s,i.getColorAt(s/this.count)),s===0&&this.light.color.copy(i.getColorAt(s/this.count));this.instanceColor.needsUpdate=!0}}update(t){if(this.physics.update(t),this.config.rainbow){this.rainbowHue+=t.delta*.2,this.light.color.setHSL(this.rainbowHue%1,1,.5);for(let i=0;i<this.count;i++){const s=(this.rainbowHue+i*.05)%1,c=new we().setHSL(s,.9,.6);this.setColorAt(i,c)}this.instanceColor.needsUpdate=!0}for(let i=0;i<this.count;i++)Te.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Te.scale.setScalar(0):Te.scale.setScalar(this.physics.sizeData[i]),Te.updateMatrix(),this.setMatrixAt(i,Te.matrix),i===0&&this.light.position.copy(Te.position);this.instanceMatrix.needsUpdate=!0}}function Jn(n,t={}){const i=new On({canvas:n,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let s;i.renderer.toneMapping=xi,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),C(t);const c=new yi,h=new bi(new H(0,0,1),0),p=new H;let w=!1;n.style.touchAction="none",n.style.userSelect="none",n.style.webkitUserSelect="none";const f=qn({domElement:n,onMove(){c.setFromCamera(f.nPosition,i.camera),i.camera.getWorldDirection(h.normal),c.ray.intersectPlane(h,p),s.physics.center.copy(p),s.config.controlSphere0=!0},onClick(){s&&s.config.enableExplosion&&s.physics.explode(s.physics.center)},onLeave(){s.config.controlSphere0=!1}});function C(y){s&&(i.clear(),i.scene.remove(s)),s=new Xn(i.renderer,y),i.scene.add(s)}return i.onBeforeRender=y=>{w||s.update(y)},i.onAfterResize=y=>{s.config.maxX=y.wWidth/2,s.config.maxY=y.wHeight/2},{three:i,get spheres(){return s},setCount(y){C({...s.config,count:y})},togglePause(){w=!w},dispose(){f.dispose(),i.dispose()}}}const Kn=({className:n="",followCursor:t=!0,count:i=100,gravity:s=.5,friction:c=.9975,wallBounce:h=.95,colors:p=[0,0,0],enableExplosion:w=!1,rainbow:f=!1,...C})=>{const y=o.useRef(null),k=o.useRef(null);return o.useEffect(()=>{const S=y.current;if(S)return k.current=Jn(S,{followCursor:t,count:i,gravity:s,friction:c,wallBounce:h,colors:p,enableExplosion:w,rainbow:f,...C}),()=>{k.current&&k.current.dispose()}},[]),o.useEffect(()=>{const S=k.current;if(!S||!S.spheres)return;const m=S.spheres.config;m.gravity=s,m.friction=c,m.wallBounce=h,m.followCursor=t,m.enableExplosion=w,m.rainbow=f,S.spheres.setColors(p)},[s,c,h,t,p,w,f]),o.useEffect(()=>{const S=k.current;S&&S.setCount(i)},[i]),e.jsx("canvas",{className:n,ref:y,style:{width:"100%",height:"100%"}})},Qn=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,$n=`
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
`,Qe=8;function Pt(n){let t=n.trim();t.startsWith("#")&&(t=t.slice(1));let i=255,s=255,c=255;return t.length===3?(i=parseInt(t[0]+t[0],16),s=parseInt(t[1]+t[1],16),c=parseInt(t[2]+t[2],16)):t.length===6&&(i=parseInt(t.slice(0,2),16),s=parseInt(t.slice(2,4),16),c=parseInt(t.slice(4,6),16)),new H(i/255,s/255,c/255)}function Zn({linesGradient:n,enabledWaves:t=["top","middle","bottom"],lineCount:i=[6],lineDistance:s=[5],topWavePosition:c,middleWavePosition:h,bottomWavePosition:p={x:2,y:-.7,rotate:-1},animationSpeed:w=1,interactive:f=!1,bendRadius:C=5,bendStrength:y=-.5,mouseDamping:k=.05,mixBlendMode:S="screen",amplitude:m=1,rainbow:L=!1}){const F=o.useRef(null),_=o.useRef(null),I=o.useRef(null),U=o.useRef(new me(-1e3,-1e3)),X=o.useRef(new me(-1e3,-1e3)),v=o.useRef(0),R=o.useRef(0),j=o.useRef(L),T=o.useRef(f);o.useEffect(()=>{T.current=f},[f]),o.useEffect(()=>{j.current=L},[L]);const O=l=>{if(typeof i=="number")return i;if(!t.includes(l))return 0;const g=t.indexOf(l);return i[g]??6},A=l=>{if(typeof s=="number")return s;if(!t.includes(l))return .1;const g=t.indexOf(l);return s[g]??.1},q=t.includes("top")?O("top"):0,d=t.includes("middle")?O("middle"):0,M=t.includes("bottom")?O("bottom"):0,E=t.includes("top")?A("top")*.01:.01,b=t.includes("middle")?A("middle")*.01:.01,a=t.includes("bottom")?A("bottom")*.01:.01;return o.useEffect(()=>{if(I.current&&n&&n.length>0&&!L){const l=n.slice(0,Qe);I.current.uniforms.lineGradientCount.value=l.length,l.forEach((g,u)=>{const P=Pt(g);I.current.uniforms.lineGradient.value[u].set(P.x,P.y,P.z)})}},[n,L]),o.useEffect(()=>{if(!I.current)return;const l=I.current.uniforms;l.animationSpeed.value=w,l.amplitude.value=m,l.bendRadius.value=C,l.bendStrength.value=y,l.interactive.value=f,l.enableTop.value=t.includes("top"),l.enableMiddle.value=t.includes("middle"),l.enableBottom.value=t.includes("bottom");const g=P=>{if(typeof i=="number")return i;if(!t.includes(P))return 0;const N=t.indexOf(P);return i[N]??6},u=P=>{if(typeof s=="number")return s;if(!t.includes(P))return .1;const N=t.indexOf(P);return s[N]??.1};l.topLineCount.value=t.includes("top")?g("top"):0,l.middleLineCount.value=t.includes("middle")?g("middle"):0,l.bottomLineCount.value=t.includes("bottom")?g("bottom"):0,l.topLineDistance.value=t.includes("top")?u("top")*.01:.01,l.middleLineDistance.value=t.includes("middle")?u("middle")*.01:.01,l.bottomLineDistance.value=t.includes("bottom")?u("bottom")*.01:.01},[w,m,C,y,f,t,i,s]),o.useEffect(()=>{if(!F.current)return;const l=new Ge,g=new ht(-1,1,1,-1,0,1);g.position.z=1;const u=new He({antialias:!0,alpha:!1});u.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),u.domElement.style.width="100%",u.domElement.style.height="100%",F.current.appendChild(u.domElement),_.current=u;const P={iTime:{value:0},iResolution:{value:new H(1,1,1)},animationSpeed:{value:w},amplitude:{value:m},enableTop:{value:t.includes("top")},enableMiddle:{value:t.includes("middle")},enableBottom:{value:t.includes("bottom")},topLineCount:{value:q},middleLineCount:{value:d},bottomLineCount:{value:M},topLineDistance:{value:E},middleLineDistance:{value:b},bottomLineDistance:{value:a},topWavePosition:{value:new H(c?.x??10,c?.y??.5,c?.rotate??-.4)},middleWavePosition:{value:new H(h?.x??5,h?.y??0,h?.rotate??.2)},bottomWavePosition:{value:new H(p?.x??2,p?.y??-.7,p?.rotate??.4)},iMouse:{value:new me(-1e3,-1e3)},interactive:{value:f},bendRadius:{value:C},bendStrength:{value:y},bendInfluence:{value:0},lineGradient:{value:Array.from({length:Qe},()=>new H(1,1,1))},lineGradientCount:{value:0}};if(n&&n.length>0){const J=n.slice(0,Qe);P.lineGradientCount.value=J.length,J.forEach((se,Y)=>{const oe=Pt(se);P.lineGradient.value[Y].set(oe.x,oe.y,oe.z)})}const N=new ze({uniforms:P,vertexShader:Qn,fragmentShader:$n});I.current=N;const W=new qe(2,2),Q=new Ne(W,N);l.add(Q);const D=new ft,ee=()=>{const J=F.current,se=J.clientWidth||1,Y=J.clientHeight||1;u.setSize(se,Y,!1);const oe=u.domElement.width,re=u.domElement.height;P.iResolution.value.set(oe,re,1)};ee();const ae=typeof ResizeObserver<"u"?new ResizeObserver(ee):null;ae&&F.current&&ae.observe(F.current);const te=J=>{if(!T.current)return;const se=u.domElement.getBoundingClientRect(),Y=J.clientX-se.left,oe=J.clientY-se.top,re=u.getPixelRatio();U.current.set(Y*re,(se.height-oe)*re),v.current=1};window.addEventListener("pointermove",te);let ce=0;const ue=()=>{if(P.iTime.value=D.getElapsedTime(),T.current&&(X.current.lerp(U.current,k),P.iMouse.value.copy(X.current),R.current+=(v.current-R.current)*k,P.bendInfluence.value=R.current),j.current){const J=D.getElapsedTime();P.lineGradientCount.value<3&&(P.lineGradientCount.value=3);for(let se=0;se<Qe;se++){const Y=(J*.1+se*.15)%1,oe=new we().setHSL(Y,.8,.5);P.lineGradient.value[se].set(oe.r,oe.g,oe.b)}}u.render(l,g),ce=requestAnimationFrame(ue)};return ue(),()=>{cancelAnimationFrame(ce),ae&&F.current&&ae.disconnect(),window.removeEventListener("pointermove",te),W.dispose(),N.dispose(),u.dispose(),u.domElement.parentElement&&u.domElement.parentElement.removeChild(u.domElement)}},[]),e.jsx("div",{ref:F,className:"floating-lines-container",style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",mixBlendMode:S}})}const es=({topColor:n="#5227FF",bottomColor:t="#FF9FFC",intensity:i=1,rotationSpeed:s=.3,interactive:c=!1,className:h="",glowAmount:p=.005,pillarWidth:w=3,pillarHeight:f=.4,noiseIntensity:C=.5,mixBlendMode:y="screen",pillarRotation:k=0,quality:S="high"})=>{const m=o.useRef(null),L=o.useRef(null),F=o.useRef(null),_=o.useRef(null),I=o.useRef(null),U=o.useRef(null),X=o.useRef(null),v=o.useRef(new me(0,0)),R=o.useRef(0),[j,T]=o.useState(!0);return o.useEffect(()=>{const O=document.createElement("canvas");O.getContext("webgl")||O.getContext("experimental-webgl")||T(!1)},[]),o.useEffect(()=>{if(!m.current||!j)return;const O=m.current,A=O.clientWidth,q=O.clientHeight,d=new Ge;I.current=d;const M=new ht(-1,1,1,-1,0,1);U.current=M;const E=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),b=E||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let a=S;b&&S==="high"&&(a="medium"),E&&S!=="low"&&(a="low");const l={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},g=l[a]||l.medium;let u;try{u=new He({antialias:!1,alpha:!0,powerPreference:a==="high"?"high-performance":"low-power",precision:g.precision,stencil:!1,depth:!1})}catch{T(!1);return}u.setSize(A,q),u.setPixelRatio(g.pixelRatio),m.current.appendChild(u.domElement),F.current=u;const P=B=>{const $=new we(B);return new H($.r,$.g,$.b)},N=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,W=`
      precision ${g.precision} float;

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

      const float STEP_MULT = ${g.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${g.iterations};
      const int WAVE_ITER = ${g.waveIterations};

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
    `,Q=k*Math.PI/180,D=Math.sin(.4),ee=Math.cos(.4),ae=new ze({vertexShader:N,fragmentShader:W,uniforms:{uTime:{value:0},uResolution:{value:new me(A,q)},uMouse:{value:v.current},uTopColor:{value:P(n)},uBottomColor:{value:P(t)},uIntensity:{value:i},uInteractive:{value:c},uGlowAmount:{value:p},uPillarWidth:{value:w},uPillarHeight:{value:f},uNoiseIntensity:{value:C},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(Q)},uPillarRotSin:{value:Math.sin(Q)},uWaveSin:{value:D},uWaveCos:{value:ee}},transparent:!0,depthWrite:!1,depthTest:!1});_.current=ae;const te=new qe(2,2);X.current=te;const ce=new Ne(te,ae);d.add(ce);let ue=null;const J=B=>{if(!c||ue)return;ue=window.setTimeout(()=>{ue=null},16);const $=O.getBoundingClientRect(),G=(B.clientX-$.left)/$.width*2-1,Z=-((B.clientY-$.top)/$.height)*2+1;v.current.set(G,Z)};c&&O.addEventListener("mousemove",J,{passive:!0});let se=performance.now();const oe=1e3/(a==="low"?30:60),re=B=>{if(!_.current||!F.current||!I.current||!U.current)return;const $=B-se;if($>=oe){R.current+=.016*s;const G=R.current;_.current.uniforms.uTime.value=G,_.current.uniforms.uRotCos.value=Math.cos(G*.3),_.current.uniforms.uRotSin.value=Math.sin(G*.3),F.current.render(I.current,U.current),se=B-$%oe}L.current=requestAnimationFrame(re)};L.current=requestAnimationFrame(re);let x=null;const z=()=>{x&&clearTimeout(x),x=window.setTimeout(()=>{if(!F.current||!_.current||!m.current)return;const B=m.current.clientWidth,$=m.current.clientHeight;F.current.setSize(B,$),_.current.uniforms.uResolution.value.set(B,$)},150)};return window.addEventListener("resize",z,{passive:!0}),()=>{window.removeEventListener("resize",z),c&&O.removeEventListener("mousemove",J),L.current&&cancelAnimationFrame(L.current),F.current&&(F.current.dispose(),F.current.forceContextLoss(),O.contains(F.current.domElement)&&O.removeChild(F.current.domElement)),_.current&&_.current.dispose(),X.current&&X.current.dispose(),F.current=null,_.current=null,I.current=null,U.current=null,X.current=null,L.current=null}},[n,t,i,s,c,p,w,f,C,k,j,S]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),j?e.jsx("div",{ref:m,className:`light-pillar-container ${h}`,style:{mixBlendMode:y}}):e.jsx("div",{className:`light-pillar-fallback ${h}`,style:{mixBlendMode:y},children:"WebGL not supported"})]})},ts=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,is=`
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
`;function ns({color:n="#ffffff",flakeSize:t=.01,minFlakeSize:i=1.25,pixelResolution:s=200,speed:c=1.25,depthFade:h=8,farPlane:p=20,brightness:w=1,gamma:f=.4545,density:C=.3,variant:y="square",direction:k=125,rainbow:S=!1,storm:m=!1,className:L="",style:F={}}){const _=o.useRef(null),I=o.useRef(0),U=o.useRef(!0),X=o.useRef(null),v=o.useRef(null),R=o.useRef(null),j=o.useMemo(()=>y==="round"?1:y==="snowflake"?2:0,[y]),T=o.useMemo(()=>{const A=new we(n);return new H(A.r,A.g,A.b)},[n]),O=o.useCallback(()=>{R.current&&clearTimeout(R.current),R.current=window.setTimeout(()=>{const A=_.current,q=X.current,d=v.current;if(!A||!q||!d)return;const M=A.offsetWidth,E=A.offsetHeight;q.setSize(M,E),d.uniforms.uResolution.value.set(M,E)},100)},[]);return o.useEffect(()=>{const A=_.current;if(!A)return;const q=new IntersectionObserver(([d])=>{U.current=d.isIntersecting},{threshold:0});return q.observe(A),()=>q.disconnect()},[]),o.useEffect(()=>{const A=_.current;if(!A)return;const q=new Ge,d=new ht(-1,1,1,-1,0,1),M=new He({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});M.setPixelRatio(Math.min(window.devicePixelRatio,2)),M.setSize(A.offsetWidth,A.offsetHeight),M.setClearColor(0,0),A.appendChild(M.domElement),X.current=M;const E=new ze({vertexShader:ts,fragmentShader:is,uniforms:{uTime:{value:0},uResolution:{value:new me(A.offsetWidth,A.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:i},uPixelResolution:{value:s},uSpeed:{value:c},uDepthFade:{value:h},uFarPlane:{value:p},uColor:{value:T.clone()},uBrightness:{value:w},uGamma:{value:f},uDensity:{value:C},uVariant:{value:j},uDirection:{value:k*Math.PI/180},uRainbow:{value:S?1:0}},transparent:!0});v.current=E;const b=new qe(2,2);q.add(new Ne(b,E)),window.addEventListener("resize",O);const a=performance.now(),l=()=>{I.current=requestAnimationFrame(l),U.current&&(E.uniforms.uTime.value=(performance.now()-a)*.001,M.render(q,d))};return l(),()=>{cancelAnimationFrame(I.current),window.removeEventListener("resize",O),R.current&&clearTimeout(R.current),A.contains(M.domElement)&&A.removeChild(M.domElement),M.dispose(),b.dispose(),E.dispose(),X.current=null,v.current=null}},[O]),o.useEffect(()=>{const A=v.current;A&&(A.uniforms.uFlakeSize.value=t,A.uniforms.uMinFlakeSize.value=i,A.uniforms.uPixelResolution.value=s,A.uniforms.uSpeed.value=m?c*4:c,A.uniforms.uDepthFade.value=h,A.uniforms.uFarPlane.value=p,A.uniforms.uBrightness.value=w,A.uniforms.uGamma.value=f,A.uniforms.uDensity.value=C,A.uniforms.uVariant.value=j,A.uniforms.uDirection.value=k*Math.PI/180,A.uniforms.uColor.value.copy(T),A.uniforms.uRainbow.value=S?1:0)},[t,i,s,c,h,p,w,f,C,j,k,T,S,m]),e.jsx("div",{ref:_,className:`pixel-snow-container ${L}`,style:{width:"100%",height:"100%",position:"relative",overflow:"hidden",contain:"layout style paint",...F}})}const Qt=[{name:"Neon",colors:["#f700ff","#bd71ff","#29b1ff"]},{name:"Fire",colors:["#ff0000","#ff7f00","#ffff00"]},{name:"Matrix",colors:["#00ff00","#003300","#ccffcc"]},{name:"Ice",colors:["#00ffff","#ffffff","#0088ff"]},{name:"CMY",colors:["#ff00ff","#ffff00","#00ffff"]}],Rt={colors:Qt[0].colors,count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},ss=[{label:"Baja",value:"low"},{label:"Media",value:"medium"},{label:"Alta",value:"high"}],Lt={topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},Mt={colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1},It={color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},Ft={density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},Et={color1:"#b117f8",color2:"#2c0b2e",speed:20},_t={color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,depthFade:3,farPlane:10,gamma:.4545,variant:"snowflake",rainbow:!1,storm:!1},Ee={cyberpunk:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},akira:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"mountainDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16715818,15415358,16715818],rightCars:[14342906,12499683,9410532],sticks:14342906}},golden:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"deepDistortion",length:400,roadWidth:18,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16724527,10694672,11015432],rightCars:[16645616,15982240,14859144],sticks:16645616}},split:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"LongRaceDistortion",length:400,roadWidth:10,islandWidth:5,lanesPerRoad:2,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:70,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[16736115,15158624,16715818],rightCars:[10806246,8442324,5489350],sticks:10806246}},highway:{onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:9,islandWidth:2,lanesPerRoad:3,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:50,lightPairsPerRoadWay:50,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.05,400*.15],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.2,.2],carFloorSeparation:[.05,1],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:1250072,brokenLines:1250072,leftCars:[14441248,14459680,14426144],rightCars:[3361783,15066861,12568307],sticks:12970219}}},os=({onClose:n,floatingLinesConfig:t,setFloatingLinesConfig:i,lightPillarsConfig:s,setLightPillarsConfig:c,ballpitConfig:h,setBallpitConfig:p,silkConfig:w,setSilkConfig:f,galaxyConfig:C,setGalaxyConfig:y,gradientConfig:k,setGradientConfig:S,pixelSnowConfig:m,setPixelSnowConfig:L,hyperspeedConfig:F,setHyperspeedConfig:_})=>{const{activeBackground:I,floatingLinesConfig:U,setFloatingLinesConfig:X,lightPillarsConfig:v,setLightPillarsConfig:R,ballpitConfig:j,setBallpitConfig:T,silkConfig:O,setSilkConfig:A,galaxyConfig:q,setGalaxyConfig:d,gradientConfig:M,setGradientConfig:E,pixelSnowConfig:b,setPixelSnowConfig:a,hyperspeedConfig:l,setHyperspeedConfig:g}=Re(),u=t||U,P=i||X,N=s||v,W=c||R,Q=h||j,D=p||T,ee=w||O,ae=f||A,te=C||q,ce=y||d,ue=k||M,J=S||E,se=m||b,Y=L||a,oe=F||l,re=_||g,x=u||Rt,z=(r,ie)=>{P&&P({...x,[r]:ie})},B=r=>{const ie=x.enabledWaves,Se=ie.includes(r)?ie.filter(ei=>ei!==r):[...ie,r];z("enabledWaves",Se)},$=(r,ie)=>{const Se=[...x.colors];Se[r]=ie,z("colors",Se)},G=N||Lt,Z=(r,ie)=>{W?W({...G,[r]:ie}):console.warn("setLightPillarsConfig no está definido en el store. Asegúrate de agregarlo.")},K=Q||Mt,de=(r,ie)=>{D&&D({...K,[r]:ie})},ye=(r,ie)=>{const Se=[...K.colors];Se[r]=ie,de("colors",Se)},xe=ee||It,Le=(r,ie)=>{ae&&ae({...xe,[r]:ie})},le=te||Ft,pe=(r,ie)=>{ce&&ce({...le,[r]:ie})},ke=ue||Et,st=(r,ie)=>{J&&J({...ke,[r]:ie})},ge=se||_t,Me=(r,ie)=>{Y&&Y({...ge,[r]:ie})},Ie=oe||Ee.cyberpunk,$t=r=>{re&&Ee[r]&&re(Ee[r])},Ye=(r,ie)=>{re&&re({...Ie,[r]:ie})},Zt=()=>{I==="floatinglines"&&P?P(Rt):I==="lightpillars"&&W?W(Lt):I==="ballpit"&&D?D(Mt):I==="silk"&&ae?ae(It):I==="galaxy"&&ce?ce(Ft):I==="gradient"&&J?J(Et):I==="pixelsnow"&&Y?Y(_t):I==="hyperspeed"&&re&&re(Ee.cyberpunk)};return e.jsxs("div",{className:"bg-customizer-panel",style:{pointerEvents:"auto"},children:[e.jsxs("div",{className:"bg-customizer-header",children:[e.jsx("h3",{children:"Personalizar Fondo"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx("button",{onClick:Zt,className:"reset-btn",title:"Restaurar valores por defecto",children:e.jsx(Li,{})}),e.jsx("button",{onClick:n,className:"close-btn",children:e.jsx(Ze,{})})]})]}),e.jsxs("div",{className:"bg-customizer-content",children:[I==="floatinglines"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Presets de Color"}),e.jsx("div",{className:"presets-grid",children:Qt.map(r=>e.jsx("button",{className:"preset-btn",onClick:()=>z("colors",r.colors),style:{background:`linear-gradient(to right, ${r.colors[0]}, ${r.colors[1]}, ${r.colors[2]})`},title:r.name,children:JSON.stringify(x.colors)===JSON.stringify(r.colors)&&e.jsx(Nt,{})},r.name))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores Personalizados"}),e.jsx("div",{className:"color-pickers",children:x.colors.map((r,ie)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:r,onChange:Se=>$(ie,Se.target.value)}),e.jsx("span",{className:"hex-code",children:r})]},ie))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad de Líneas ",e.jsx("span",{children:x.count})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:x.count,onChange:r=>z("count",parseInt(r.target.value))}),e.jsxs("label",{children:["Distancia entre Líneas ",e.jsx("span",{children:x.distance})]}),e.jsx("input",{type:"range",min:"1",max:"20",value:x.distance,onChange:r=>z("distance",parseInt(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Amplitud de Onda ",e.jsx("span",{children:x.amplitude})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:x.amplitude||1,onChange:r=>z("amplitude",parseFloat(r.target.value))}),e.jsxs("label",{children:["Radio de Curvatura ",e.jsx("span",{children:x.bendRadius})]}),e.jsx("input",{type:"range",min:"5",max:"10",step:"0.1",value:x.bendRadius,onChange:r=>z("bendRadius",parseFloat(r.target.value))}),e.jsxs("label",{children:["Fuerza de Curvatura ",e.jsx("span",{children:x.bendStrength})]}),e.jsx("input",{type:"range",min:"-7",max:"7",step:"0.1",value:x.bendStrength,onChange:r=>z("bendStrength",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Capas Activas"}),e.jsx("div",{className:"toggles-row",children:["top","middle","bottom"].map(r=>e.jsx("button",{className:`toggle-btn ${x.enabledWaves.includes(r)?"active":""}`,onClick:()=>B(r),children:r.charAt(0).toUpperCase()+r.slice(1)},r))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${x.interactive!==!1?"active":""}`,onClick:()=>z("interactive",x.interactive===!1),style:{width:"100%",textAlign:"center"},children:x.interactive!==!1?"Activada (Ratón)":"Desactivada"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${x.rainbow?"active":""}`,onClick:()=>z("rainbow",!x.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"})]})]}),I==="lightpillars"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:G.topColor,onChange:r=>Z("topColor",r.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:G.bottomColor,onChange:r=>Z("bottomColor",r.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Intensidad ",e.jsx("span",{children:G.intensity})]}),e.jsx("input",{type:"range",min:"0.1",max:"3",step:"0.1",value:G.intensity,onChange:r=>Z("intensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:G.rotationSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:G.rotationSpeed,onChange:r=>Z("rotationSpeed",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Ancho del Pilar ",e.jsx("span",{children:G.pillarWidth})]}),e.jsx("input",{type:"range",min:"0.5",max:"10",step:"0.5",value:G.pillarWidth,onChange:r=>Z("pillarWidth",parseFloat(r.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[G.pillarRotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:G.pillarRotation,onChange:r=>Z("pillarRotation",parseInt(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Altura del Pilar ",e.jsx("span",{children:G.pillarHeight})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:G.pillarHeight,onChange:r=>Z("pillarHeight",parseFloat(r.target.value))}),e.jsxs("label",{children:["Intensidad Ruido ",e.jsx("span",{children:G.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:G.noiseIntensity,onChange:r=>Z("noiseIntensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Resplandor ",e.jsx("span",{children:G.glowAmount})]}),e.jsx("input",{type:"range",min:"0.0001",max:"0.02",step:"0.0001",value:G.glowAmount,onChange:r=>Z("glowAmount",parseFloat(r.target.value))})]}),e.jsx("div",{className:"section",children:e.jsx("div",{className:"toggles-row",children:ss.map(r=>e.jsx("button",{className:`toggle-btn ${G.quality===r.value?"active":""}`,onClick:()=>Z("quality",r.value),children:r.label},r.value))})}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${G.interactive!==!1?"active":""}`,onClick:()=>Z("interactive",G.interactive===!1),style:{width:"100%",textAlign:"center"},children:G.interactive!==!1?"Activada (Ratón)":"Desactivada"})]})]}),I==="ballpit"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsx("div",{className:"color-pickers",children:K.colors.map((r,ie)=>e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:r,onChange:Se=>ye(ie,Se.target.value)}),e.jsx("span",{className:"hex-code",children:r})]},ie))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Cantidad ",e.jsx("span",{children:K.count})]}),e.jsx("input",{type:"range",min:"10",max:"200",step:"10",value:K.count,onChange:r=>de("count",parseInt(r.target.value))}),e.jsxs("label",{children:["Gravedad ",e.jsx("span",{children:K.gravity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:K.gravity,onChange:r=>de("gravity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Fricción ",e.jsx("span",{children:K.friction})]}),e.jsx("input",{type:"range",min:"0.8",max:"1",step:"0.001",value:K.friction,onChange:r=>de("friction",parseFloat(r.target.value))}),e.jsxs("label",{children:["Rebote Pared ",e.jsx("span",{children:K.wallBounce})]}),e.jsx("input",{type:"range",min:"0",max:"1.5",step:"0.05",value:K.wallBounce,onChange:r=>de("wallBounce",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Interacción"}),e.jsx("button",{className:`toggle-btn ${K.followCursor?"active":""}`,onClick:()=>de("followCursor",!K.followCursor),style:{width:"100%",textAlign:"center"},children:K.followCursor?"Seguir Cursor":"Cursor Libre"})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Eventos Divertidos"}),e.jsxs("div",{className:"toggles-row",children:[e.jsx("button",{className:`toggle-btn ${K.enableExplosion?"active":""}`,onClick:()=>de("enableExplosion",!K.enableExplosion),title:"Haz clic para explotar las bolas",children:"💥 Explosión al Clic"}),e.jsx("button",{className:`toggle-btn ${K.rainbow?"active":""}`,onClick:()=>de("rainbow",!K.rainbow),title:"Ciclo de colores automático",children:"🌈 Modo Arcoíris"})]})]})]}),I==="silk"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:xe.color,onChange:r=>Le("color",r.target.value)}),e.jsx("span",{className:"hex-code",children:xe.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:xe.speed})]}),e.jsx("input",{type:"range",min:"0.1",max:"10",step:"0.1",value:xe.speed,onChange:r=>Le("speed",parseFloat(r.target.value))}),e.jsxs("label",{children:["Escala ",e.jsx("span",{children:xe.scale})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:xe.scale,onChange:r=>Le("scale",parseFloat(r.target.value))}),e.jsxs("label",{children:["Ruido ",e.jsx("span",{children:xe.noiseIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:xe.noiseIntensity,onChange:r=>Le("noiseIntensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Rotación ",e.jsxs("span",{children:[xe.rotation,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"15",value:xe.rotation,onChange:r=>Le("rotation",parseInt(r.target.value))})]})]}),I==="galaxy"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:le.density})]}),e.jsx("input",{type:"range",min:"0.1",max:"2",step:"0.1",value:le.density,onChange:r=>pe("density",parseFloat(r.target.value))}),e.jsxs("label",{children:["Intensidad Brillo ",e.jsx("span",{children:le.glowIntensity})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:le.glowIntensity,onChange:r=>pe("glowIntensity",parseFloat(r.target.value))}),e.jsxs("label",{children:["Saturación ",e.jsx("span",{children:le.saturation})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:le.saturation,onChange:r=>pe("saturation",parseFloat(r.target.value))}),e.jsxs("label",{children:["Cambio de Tono (Hue) ",e.jsx("span",{children:le.hueShift})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:le.hueShift,onChange:r=>pe("hueShift",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad Rotación ",e.jsx("span",{children:le.rotationSpeed})]}),e.jsx("input",{type:"range",min:"-0.5",max:"0.5",step:"0.01",value:le.rotationSpeed,onChange:r=>pe("rotationSpeed",parseFloat(r.target.value))}),e.jsxs("label",{children:["Velocidad Estrellas ",e.jsx("span",{children:le.starSpeed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:le.starSpeed,onChange:r=>pe("starSpeed",parseFloat(r.target.value))}),e.jsxs("label",{children:["Velocidad Animación ",e.jsx("span",{children:le.speed})]}),e.jsx("input",{type:"range",min:"0",max:"2",step:"0.1",value:le.speed,onChange:r=>pe("speed",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${le.rainbow?"active":""}`,onClick:()=>pe("rainbow",!le.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${le.warp?"active":""}`,onClick:()=>pe("warp",!le.warp),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🚀 Velocidad Warp"})]})]}),I==="gradient"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Colores"}),e.jsxs("div",{className:"color-pickers",children:[e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Superior"}),e.jsx("input",{type:"color",value:ke.color1,onChange:r=>st("color1",r.target.value)})]}),e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("label",{style:{fontSize:"0.8rem",marginBottom:5},children:"Inferior"}),e.jsx("input",{type:"color",value:ke.color2,onChange:r=>st("color2",r.target.value)})]})]})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad (segundos) ",e.jsxs("span",{children:[ke.speed,"s"]})]}),e.jsx("input",{type:"range",min:"1",max:"60",step:"1",value:ke.speed,onChange:r=>st("speed",parseInt(r.target.value))})]})]}),I==="pixelsnow"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Color"}),e.jsx("div",{className:"color-pickers",children:e.jsxs("div",{className:"color-input-wrapper",children:[e.jsx("input",{type:"color",value:ge.color,onChange:r=>Me("color",r.target.value)}),e.jsx("span",{className:"hex-code",children:ge.color})]})})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Variante"}),e.jsx("div",{className:"toggles-row",children:["snowflake","square","round"].map(r=>e.jsx("button",{className:`toggle-btn ${ge.variant===r?"active":""}`,onClick:()=>Me("variant",r),children:r.charAt(0).toUpperCase()+r.slice(1)},r))})]}),e.jsxs("div",{className:"section",children:[e.jsxs("label",{children:["Velocidad ",e.jsx("span",{children:ge.speed})]}),e.jsx("input",{type:"range",min:"0",max:"5",step:"0.1",value:ge.speed,onChange:r=>Me("speed",parseFloat(r.target.value))}),e.jsxs("label",{children:["Densidad ",e.jsx("span",{children:ge.density})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:ge.density,onChange:r=>Me("density",parseFloat(r.target.value))}),e.jsxs("label",{children:["Dirección ",e.jsxs("span",{children:[ge.direction,"°"]})]}),e.jsx("input",{type:"range",min:"0",max:"360",step:"5",value:ge.direction,onChange:r=>Me("direction",parseInt(r.target.value))}),e.jsxs("label",{children:["Tamaño Copo ",e.jsx("span",{children:ge.flakeSize})]}),e.jsx("input",{type:"range",min:"0.005",max:"0.05",step:"0.001",value:ge.flakeSize,onChange:r=>Me("flakeSize",parseFloat(r.target.value))}),e.jsxs("label",{children:["Brillo ",e.jsx("span",{children:ge.brightness})]}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:ge.brightness,onChange:r=>Me("brightness",parseFloat(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Efectos"}),e.jsx("button",{className:`toggle-btn ${ge.rainbow?"active":""}`,onClick:()=>Me("rainbow",!ge.rainbow),style:{width:"100%",textAlign:"center"},children:"🌈 Modo Arcoíris"}),e.jsx("button",{className:`toggle-btn ${ge.storm?"active":""}`,onClick:()=>Me("storm",!ge.storm),style:{width:"100%",textAlign:"center",marginTop:"10px"},children:"🌪️ Modo Tormenta"})]})]}),I==="hyperspeed"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Estilo Visual"}),e.jsx("div",{className:"toggles-row",style:{flexWrap:"wrap"},children:Object.keys(Ee).map(r=>e.jsx("button",{className:`toggle-btn ${JSON.stringify(Ie.colors)===JSON.stringify(Ee[r].colors)?"active":""}`,onClick:()=>$t(r),children:r.charAt(0).toUpperCase()+r.slice(1)},r))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Geometría"}),e.jsxs("label",{children:["Ancho Carretera ",e.jsx("span",{children:Ie.roadWidth})]}),e.jsx("input",{type:"range",min:"5",max:"30",step:"1",value:Ie.roadWidth,onChange:r=>Ye("roadWidth",parseFloat(r.target.value))}),e.jsxs("label",{children:["Ancho Isla ",e.jsx("span",{children:Ie.islandWidth})]}),e.jsx("input",{type:"range",min:"1",max:"10",step:"0.5",value:Ie.islandWidth,onChange:r=>Ye("islandWidth",parseFloat(r.target.value))}),e.jsxs("label",{children:["Carriles ",e.jsx("span",{children:Ie.lanesPerRoad})]}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:Ie.lanesPerRoad,onChange:r=>Ye("lanesPerRoad",parseInt(r.target.value))})]}),e.jsxs("div",{className:"section",children:[e.jsx("label",{children:"Distorsión"}),e.jsxs("select",{value:Ie.distortion,onChange:r=>Ye("distortion",r.target.value),style:{width:"100%",padding:"8px",borderRadius:"8px",background:"rgba(255, 255, 255, 0.1)",color:"white",border:"1px solid rgba(255, 255, 255, 0.2)",marginTop:"5px",cursor:"pointer"},children:[e.jsx("option",{style:{color:"black"},value:"turbulentDistortion",children:"Turbulent"}),e.jsx("option",{style:{color:"black"},value:"deepDistortion",children:"Deep"}),e.jsx("option",{style:{color:"black"},value:"mountainDistortion",children:"Mountain"}),e.jsx("option",{style:{color:"black"},value:"xyDistortion",children:"XY"}),e.jsx("option",{style:{color:"black"},value:"LongRaceDistortion",children:"Long Race"})]})]})]})]})]})},as=({effectOptions:n=Ee.cyberpunk})=>{const t=o.useRef(null),i=o.useRef(null);return o.useEffect(()=>{if(i.current){i.current.dispose();const b=document.getElementById("lights");if(b)for(;b.firstChild;)b.removeChild(b.firstChild)}const s={uFreq:{value:new H(3,6,10)},uAmp:{value:new H(30,30,20)}},c={uFreq:{value:new me(5,2)},uAmp:{value:new me(25,15)}},h={uFreq:{value:new me(2,3)},uAmp:{value:new me(35,10)}},p={uFreq:{value:new mt(4,8,8,1)},uAmp:{value:new mt(25,5,10,10)}},w={uFreq:{value:new me(4,8)},uAmp:{value:new me(10,20)},uPowY:{value:new me(20,2)}};let f=b=>Math.sin(b)*.5+.5;const C={mountainDistortion:{uniforms:s,getDistortion:`
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
        `,getJS:(b,a)=>{let l=.02,g=s.uFreq.value,u=s.uAmp.value,P=new H(Math.cos(b*Math.PI*g.x+a)*u.x-Math.cos(l*Math.PI*g.x+a)*u.x,f(b*Math.PI*g.y+a)*u.y-f(l*Math.PI*g.y+a)*u.y,f(b*Math.PI*g.z+a)*u.z-f(l*Math.PI*g.z+a)*u.z),N=new H(2,2,2),W=new H(0,0,-5);return P.multiply(N).add(W)}},xyDistortion:{uniforms:c,getDistortion:`
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
        `,getJS:(b,a)=>{let l=.02,g=c.uFreq.value,u=c.uAmp.value,P=new H(Math.cos(b*Math.PI*g.x+a)*u.x-Math.cos(l*Math.PI*g.x+a)*u.x,Math.sin(b*Math.PI*g.y+a+Math.PI/2)*u.y-Math.sin(l*Math.PI*g.y+a+Math.PI/2)*u.y,0),N=new H(2,.4,1),W=new H(0,0,-3);return P.multiply(N).add(W)}},LongRaceDistortion:{uniforms:h,getDistortion:`
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
        `,getJS:(b,a)=>{let l=.0125,g=h.uFreq.value,u=h.uAmp.value,P=new H(Math.sin(b*Math.PI*g.x+a)*u.x-Math.sin(l*Math.PI*g.x+a)*u.x,Math.sin(b*Math.PI*g.y+a)*u.y-Math.sin(l*Math.PI*g.y+a)*u.y,0),N=new H(1,1,0),W=new H(0,0,-5);return P.multiply(N).add(W)}},turbulentDistortion:{uniforms:p,getDistortion:`
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
        `,getJS:(b,a)=>{const l=p.uFreq.value,g=p.uAmp.value,u=D=>Math.cos(Math.PI*D*l.x+a)*g.x+Math.pow(Math.cos(Math.PI*D*l.y+a*(l.y/l.x)),2)*g.y,P=D=>-f(Math.PI*D*l.z+a)*g.z-Math.pow(f(Math.PI*D*l.w+a/(l.z/l.w)),5)*g.w;let N=new H(u(b)-u(b+.007),P(b)-P(b+.007),0),W=new H(-2,-5,0),Q=new H(0,0,-10);return N.multiply(W).add(Q)}},turbulentDistortionStill:{uniforms:p,getDistortion:`
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
        `,getJS:(b,a)=>{const l=w.uFreq.value,g=w.uAmp.value,u=w.uPowY.value,P=ee=>Math.sin(ee*Math.PI*l.x+a)*g.x,N=ee=>Math.pow(ee*u.x,u.y)+Math.sin(ee*Math.PI*l.y+a)*g.y;let W=new H(P(b)-P(b+.01),N(b)-N(b+.01),0),Q=new H(-2,-4,0),D=new H(0,0,-10);return W.multiply(Q).add(D)}}};class y{constructor(a,l={}){this.options=l,this.options.distortion==null&&(this.options.distortion={uniforms:k,getDistortion:S}),this.container=a,this.renderer=new He({antialias:!1,alpha:!0}),this.renderer.setSize(a.offsetWidth,a.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new Mi(this.renderer),a.append(this.renderer.domElement),this.camera=new qt(l.fov,a.offsetWidth/a.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new Ge,this.scene.background=null;let g=new Ii(l.colors.background,l.length*.2,l.length*500);this.scene.fog=g,this.fogUniforms={fogColor:{value:g.color},fogNear:{value:g.near},fogFar:{value:g.far}},this.clock=new ft,this.assets={},this.disposed=!1,this.road=new j(this,l),this.leftCarLights=new _(this,l,l.colors.leftCars,l.movingAwaySpeed,new me(0,1-l.carLightsFade)),this.rightCarLights=new _(this,l,l.colors.rightCars,l.movingCloserSpeed,new me(1,0+l.carLightsFade)),this.leftSticks=new X(this,l),this.fovTarget=l.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const a=this.container.offsetWidth,l=this.container.offsetHeight;this.renderer.setSize(a,l),this.camera.aspect=a/l,this.camera.updateProjectionMatrix(),this.composer.setSize(a,l)}initPasses(){this.renderPass=new Fi(this.scene,this.camera),this.bloomPass=new pt(this.camera,new Ei({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const a=new pt(this.camera,new Ue({preset:_i.MEDIUM,searchImage:Ue.searchImageDataURL,areaImage:Ue.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,a.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(a)}loadAssets(){const a=this.assets;return new Promise(l=>{const g=new Di(l),u=new Image,P=new Image;a.smaa={},u.addEventListener("load",function(){a.smaa.search=this,g.itemEnd("smaa-search")}),P.addEventListener("load",function(){a.smaa.area=this,g.itemEnd("smaa-area")}),g.itemStart("smaa-search"),g.itemStart("smaa-area"),u.src=Ue.searchImageDataURL,P.src=Ue.areaImageDataURL})}init(){this.initPasses();const a=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-a.roadWidth/2-a.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(a.roadWidth/2+a.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(a.roadWidth+a.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(a){this.options.onSpeedUp&&this.options.onSpeedUp(a),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(a){this.options.onSlowDown&&this.options.onSlowDown(a),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(a){this.options.onSpeedUp&&this.options.onSpeedUp(a),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(a){this.options.onSlowDown&&this.options.onSlowDown(a),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(a){a.preventDefault()}update(a){let l=Math.exp(-(-60*Math.log2(.9))*a);this.speedUp+=F(this.speedUp,this.speedUpTarget,l,1e-5),this.timeOffset+=this.speedUp*a;let g=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(g),this.leftCarLights.update(g),this.leftSticks.update(g),this.road.update(g);let u=!1,P=F(this.camera.fov,this.fovTarget,l);if(P!==0&&(this.camera.fov+=P*a*6,u=!0),this.options.distortion.getJS){const N=this.options.distortion.getJS(.025,g);this.camera.lookAt(new H(this.camera.position.x+N.x,this.camera.position.y+N.y,this.camera.position.z+N.z)),u=!0}u&&this.camera.updateProjectionMatrix(),this.options.isHyper&&console.log(this.options.isHyper)}render(a){this.composer.render(a)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(a,l,g){this.composer.setSize(a,l,g)}tick(){if(this.disposed||!this)return;if(E(this.renderer,this.setSize)){const l=this.renderer.domElement;this.camera.aspect=l.clientWidth/l.clientHeight,this.camera.updateProjectionMatrix()}const a=this.clock.getDelta();this.render(a),this.update(a),requestAnimationFrame(this.tick)}}const k={uDistortionX:{value:new me(80,3)},uDistortionY:{value:new me(-40,2.5)}},S=`
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
    `,m=b=>Array.isArray(b)?Math.random()*(b[1]-b[0])+b[0]:Math.random()*b,L=b=>Array.isArray(b)?b[Math.floor(Math.random()*b.length)]:b;function F(b,a,l=.1,g=.001){let u=(a-b)*l;return Math.abs(u)<g&&(u=a-b),u}class _{constructor(a,l,g,u,P){this.webgl=a,this.options=l,this.colors=g,this.speed=u,this.fade=P}init(){const a=this.options;let l=new Ti(new H(0,0,0),new H(0,0,-1)),g=new zi(l,40,1,8,!1),u=new vt().copy(g);u.instanceCount=a.lightPairsPerRoadWay*2;let P=a.roadWidth/a.lanesPerRoad,N=[],W=[],Q=[],D=this.colors;Array.isArray(D)?D=D.map(te=>new we(te)):D=new we(D);for(let te=0;te<a.lightPairsPerRoadWay;te++){let ce=m(a.carLightsRadius),ue=m(a.carLightsLength),J=m(this.speed),Y=te%a.lanesPerRoad*P-a.roadWidth/2+P/2,oe=m(a.carWidthPercentage)*P,re=m(a.carShiftX)*P;Y+=re;let x=m(a.carFloorSeparation)+ce*1.3,z=-m(a.length);N.push(Y-oe/2),N.push(x),N.push(z),N.push(Y+oe/2),N.push(x),N.push(z),W.push(ce),W.push(ue),W.push(J),W.push(ce),W.push(ue),W.push(J);let B=L(D);Q.push(B.r),Q.push(B.g),Q.push(B.b),Q.push(B.r),Q.push(B.g),Q.push(B.b)}u.setAttribute("aOffset",new _e(new Float32Array(N),3,!1)),u.setAttribute("aMetrics",new _e(new Float32Array(W),3,!1)),u.setAttribute("aColor",new _e(new Float32Array(Q),3,!1));let ee=new ze({fragmentShader:I,vertexShader:U,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:a.length},uFade:{value:this.fade}},this.webgl.fogUniforms,a.distortion.uniforms)});ee.onBeforeCompile=te=>{te.vertexShader=te.vertexShader.replace("#include <getDistortion_vertex>",a.distortion.getDistortion)};let ae=new Ne(u,ee);ae.frustumCulled=!1,this.webgl.scene.add(ae),this.mesh=ae}update(a){this.mesh.material.uniforms.uTime.value=a}}const I=`
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
    `,U=`
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
    `;class X{constructor(a,l){this.webgl=a,this.options=l}init(){const a=this.options,l=new qe(1,1);let g=new vt().copy(l),u=a.totalSideLightSticks;g.instanceCount=u;let P=a.length/(u-1);const N=[],W=[],Q=[];let D=a.colors.sticks;Array.isArray(D)?D=D.map(te=>new we(te)):D=new we(D);for(let te=0;te<u;te++){let ce=m(a.lightStickWidth),ue=m(a.lightStickHeight);N.push((te-1)*P*2+P*Math.random());let J=L(D);W.push(J.r),W.push(J.g),W.push(J.b),Q.push(ce),Q.push(ue)}g.setAttribute("aOffset",new _e(new Float32Array(N),1,!1)),g.setAttribute("aColor",new _e(new Float32Array(W),3,!1)),g.setAttribute("aMetrics",new _e(new Float32Array(Q),2,!1));const ee=new ze({fragmentShader:R,vertexShader:v,side:gt,uniforms:Object.assign({uTravelLength:{value:a.length},uTime:{value:0}},this.webgl.fogUniforms,a.distortion.uniforms)});ee.onBeforeCompile=te=>{te.vertexShader=te.vertexShader.replace("#include <getDistortion_vertex>",a.distortion.getDistortion)};const ae=new Ne(g,ee);ae.frustumCulled=!1,this.webgl.scene.add(ae),this.mesh=ae}update(a){this.mesh.material.uniforms.uTime.value=a}}const v=`
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
    `,R=`
      #define USE_FOG;
      ${Ce.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${Ce.fog_fragment}
      }
    `;class j{constructor(a,l){this.webgl=a,this.options=l,this.uTime={value:0}}createPlane(a,l,g){const u=this.options;let P=100;const N=new qe(g?u.roadWidth:u.islandWidth,u.length,20,P);let W={uTravelLength:{value:u.length},uColor:{value:new we(g?u.colors.roadColor:u.colors.islandColor)},uTime:this.uTime};g&&(W=Object.assign(W,{uLanes:{value:u.lanesPerRoad},uBrokenLinesColor:{value:new we(u.colors.brokenLines)},uShoulderLinesColor:{value:new we(u.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:u.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:u.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:u.brokenLinesWidthPercentage}}));const Q=new ze({fragmentShader:g?d:O,vertexShader:M,side:gt,uniforms:Object.assign(W,this.webgl.fogUniforms,u.distortion.uniforms)});Q.onBeforeCompile=ee=>{ee.vertexShader=ee.vertexShader.replace("#include <getDistortion_vertex>",u.distortion.getDistortion)};const D=new Ne(N,Q);return D.rotation.x=-Math.PI/2,D.position.z=-u.length/2,D.position.x+=(this.options.islandWidth/2+u.roadWidth/2)*a,this.webgl.scene.add(D),D}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(a){this.uTime.value=a}}const T=`
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
    `,O=T.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),d=T.replace("#include <roadMarkings_fragment>",`
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
    `),M=`
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
    `;function E(b,a){const l=b.domElement,g=l.clientWidth,u=l.clientHeight,P=l.width!==g||l.height!==u;return P&&a(g,u,!1),P}return(function(){const b=document.getElementById("lights"),a={...n};a.distortion=C[a.distortion];const l=new y(b,a);i.current=l,l.loadAssets().then(l.init)})(),()=>{i.current&&i.current.dispose()}},[n]),e.jsx("div",{id:"lights",ref:t})},rs=({floatingLinesConfig:n,lightPillarsConfig:t,ballpitConfig:i,silkConfig:s,galaxyConfig:c,gradientConfig:h,pixelSnowConfig:p,hyperspeedConfig:w})=>{const{activeBackground:f,floatingLinesConfig:C,lightPillarsConfig:y,ballpitConfig:k,silkConfig:S,galaxyConfig:m,gradientConfig:L,pixelSnowConfig:F,hyperspeedConfig:_}=Re(),I=n||C,U=t||y,X=i||k,v=s||S,R=c||m,j=h||L,T=p||F,O=w||_,A=I||{colors:["#f700ff","#bd71ff","#29b1ff"],count:6,distance:5,bendRadius:5,bendStrength:-.5,enabledWaves:["top","middle","bottom"],interactive:!1,amplitude:1,rainbow:!1},q=U||{topColor:"#5227FF",bottomColor:"#FF9FFC",intensity:1,rotationSpeed:.3,pillarWidth:3,pillarHeight:.4,noiseIntensity:.5,pillarRotation:293,interactive:!1,glowAmount:.002,quality:"high"},d=X||{colors:["#f700ff","#bd71ff","#29b1ff"],count:60,gravity:.1,friction:.995,wallBounce:.9,followCursor:!1,enableExplosion:!1,rainbow:!1},M=v||{color:"#9726fa",speed:4,scale:1,noiseIntensity:1.5,rotation:0},E=R||{density:1,glowIntensity:.5,saturation:1,hueShift:110,twinkleIntensity:.3,rotationSpeed:.1,starSpeed:.5,speed:.5,rainbow:!1,warp:!1},b=j||{color1:"#b117f8",color2:"#2c0b2e",speed:20},a=T||{color:"#c9c9c9",flakeSize:.021,minFlakeSize:.6,pixelResolution:800,speed:.9,density:.6,direction:100,brightness:1.5,variant:"snowflake",rainbow:!1,storm:!1};return e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:e.jsxs(ve,{mode:"wait",children:[f==="gradient"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(Dn,{color1:b.color1,color2:b.color2,speed:b.speed})},"gradient"),f==="galaxy"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5},style:{position:"absolute",inset:0,background:"#050010"},children:e.jsx(Un,{density:E.density,glowIntensity:E.glowIntensity,saturation:E.saturation,hueShift:E.hueShift,twinkleIntensity:E.twinkleIntensity,rotationSpeed:E.rotationSpeed,starSpeed:E.starSpeed,speed:E.speed,rainbow:E.rainbow,warp:E.warp})},"galaxy"),f==="silk"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0},children:e.jsx(Gt,{speed:M.speed,scale:M.scale,color:M.color,noiseIntensity:M.noiseIntensity,rotation:M.rotation})},"silk"),f==="ballpit"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#111111"},children:e.jsx(Kn,{count:d.count,gravity:d.gravity,friction:d.friction,wallBounce:d.wallBounce,followCursor:d.followCursor,colors:d.colors,enableExplosion:d.enableExplosion,rainbow:d.rainbow})},"ballpit"),f==="floatinglines"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(Zn,{linesGradient:A.colors,lineCount:A.count,lineDistance:A.distance,animationSpeed:.5,bendRadius:A.bendRadius,bendStrength:A.bendStrength,enabledWaves:A.enabledWaves,interactive:A.interactive??!1,parallax:A.parallax??!1,amplitude:A.amplitude??1,rainbow:A.rainbow})},"floatinglines"),f==="lightpillars"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(es,{topColor:q.topColor,bottomColor:q.bottomColor,intensity:q.intensity,rotationSpeed:q.rotationSpeed,glowAmount:q.glowAmount??.002,pillarWidth:q.pillarWidth,pillarHeight:q.pillarHeight,noiseIntensity:q.noiseIntensity,pillarRotation:q.pillarRotation,interactive:q.interactive??!0,quality:q.quality??"high"})},"lightpillars"),f==="pixelsnow"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(ns,{color:a.color,flakeSize:a.flakeSize,minFlakeSize:a.minFlakeSize,pixelResolution:a.pixelResolution,speed:a.speed,density:a.density,direction:a.direction,brightness:a.brightness,variant:a.variant,rainbow:a.rainbow,storm:a.storm})},"pixelsnow"),f==="hyperspeed"&&e.jsx(V.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},style:{position:"absolute",inset:0,background:"#000"},children:e.jsx(as,{effectOptions:O})},"hyperspeed")]})})},ls=({onItemClick:n,isOpen:t,onToggle:i,position:s="left",colors:c=["#B19EEF","#5227FF"],items:h=[],socialItems:p=[],displaySocials:w=!0,displayItemNumbering:f=!0,className:C,logoUrl:y=null,menuButtonColor:k="#fff",openMenuButtonColor:S="#000",accentColor:m="#5227FF",changeMenuColorOnOpen:L=!0,isFixed:F=!1,closeOnClickAway:_=!0,onMenuOpen:I,onMenuClose:U})=>{const[X,v]=o.useState(!1),R=typeof t=="boolean",j=R?t:X,T=o.useRef(!1),O=o.useRef(null),A=o.useRef(null),q=o.useRef([]),d=o.useRef(null),M=o.useRef(null),E=o.useRef(null),b=o.useRef(null),a=o.useRef(null),[l,g]=o.useState(["Menu","Close"]),u=o.useRef(null),P=o.useRef(null),N=o.useRef(null),W=o.useRef(null),Q=o.useRef(null),D=o.useRef(null),ee=o.useRef(!1),ae=o.useRef(null);o.useLayoutEffect(()=>{const x=ne.context(()=>{const z=O.current,B=A.current,$=d.current,G=M.current,Z=E.current,K=b.current;if(!z||!$||!G||!Z||!K)return;let de=[];B&&(de=Array.from(B.querySelectorAll(".sm-prelayer"))),q.current=de;const ye=s==="left"?-100:100;ne.set([z,...de],{xPercent:ye}),ne.set($,{transformOrigin:"50% 50%",rotate:0}),ne.set(G,{transformOrigin:"50% 50%",rotate:90}),ne.set(Z,{rotate:0,transformOrigin:"50% 50%"}),ne.set(K,{yPercent:0}),D.current&&ne.set(D.current,{color:k})});return()=>x.revert()},[k,s]);const te=o.useCallback(()=>{const x=O.current,z=q.current;if(!x)return null;u.current?.kill(),P.current&&(P.current.kill(),P.current=null),ae.current?.kill();const B=Array.from(x.querySelectorAll(".sm-panel-itemLabel")),$=Array.from(x.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),G=x.querySelector(".sm-socials-title"),Z=Array.from(x.querySelectorAll(".sm-socials-link")),K=z.map(pe=>({el:pe,start:Number(ne.getProperty(pe,"xPercent"))})),de=Number(ne.getProperty(x,"xPercent"));B.length&&ne.set(B,{yPercent:140,rotate:10}),$.length&&ne.set($,{"--sm-num-opacity":0}),G&&ne.set(G,{opacity:0}),Z.length&&ne.set(Z,{y:25,opacity:0});const ye=ne.timeline({paused:!0});K.forEach((pe,ke)=>{ye.fromTo(pe.el,{xPercent:pe.start},{xPercent:0,duration:.8,ease:"power4.out"},ke*.07)});const Le=(K.length?(K.length-1)*.07:0)+(K.length?.08:0),le=1;if(ye.fromTo(x,{xPercent:de},{xPercent:0,duration:le,ease:"power4.out"},Le),B.length){const ke=Le+le*.15;ye.to(B,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},ke),$.length&&ye.to($,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},ke+.1)}if(G||Z.length){const pe=Le+le*.4;G&&ye.to(G,{opacity:1,duration:.5,ease:"power2.out"},pe),Z.length&&ye.to(Z,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>{ne.set(Z,{clearProps:"opacity"})}},pe+.04)}return u.current=ye,ye},[]),ce=o.useCallback(()=>{if(ee.current)return;ee.current=!0;const x=te();x?(x.eventCallback("onComplete",()=>{ee.current=!1}),x.play(0)):ee.current=!1},[te]),ue=o.useCallback(()=>{u.current?.kill(),u.current=null,ae.current?.kill();const x=O.current,z=q.current;if(!x)return;const B=[...z,x];P.current?.kill();const $=s==="left"?-100:100;P.current=ne.to(B,{xPercent:$,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const G=Array.from(x.querySelectorAll(".sm-panel-itemLabel"));G.length&&ne.set(G,{yPercent:140,rotate:10});const Z=Array.from(x.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));Z.length&&ne.set(Z,{"--sm-num-opacity":0});const K=x.querySelector(".sm-socials-title"),de=Array.from(x.querySelectorAll(".sm-socials-link"));K&&ne.set(K,{opacity:0}),de.length&&ne.set(de,{y:25,opacity:0}),ee.current=!1}})},[s]),J=o.useCallback(x=>{const z=E.current;z&&(N.current?.kill(),x?N.current=ne.to(z,{rotate:225,duration:.8,ease:"power4.out",overwrite:"auto"}):N.current=ne.to(z,{rotate:0,duration:.35,ease:"power3.inOut",overwrite:"auto"}))},[]),se=o.useCallback(x=>{const z=D.current;if(z)if(Q.current?.kill(),L){const B=x?S:k;Q.current=ne.to(z,{color:B,delay:.18,duration:.3,ease:"power2.out"})}else ne.set(z,{color:k})},[S,k,L]);$e.useEffect(()=>{if(D.current)if(L){const x=T.current?S:k;ne.set(D.current,{color:x})}else ne.set(D.current,{color:k})},[L,k,S]);const Y=o.useCallback(x=>{const z=b.current;if(!z)return;W.current?.kill();const B=x?"Menu":"Close",$=x?"Close":"Menu",G=3,Z=[B];let K=B;for(let xe=0;xe<G;xe++)K=K==="Menu"?"Close":"Menu",Z.push(K);K!==$&&Z.push($),Z.push($),g(Z),ne.set(z,{yPercent:0});const de=Z.length,ye=(de-1)/de*100;W.current=ne.to(z,{yPercent:-ye,duration:.5+de*.07,ease:"power4.out"})},[]),oe=o.useCallback(()=>{if(R)i&&i(!j);else{const x=!T.current;T.current=x,v(x),x?(I?.(),ce()):(U?.(),ue()),J(x),se(x),Y(x)}},[R,t,i,j,ce,ue,J,se,Y,I,U]);$e.useEffect(()=>{R&&(T.current=t,t?(I?.(),ce()):(U?.(),ue()),J(t),se(t),Y(t))},[t,R,ce,ue,J,se,Y,I,U]);const re=o.useCallback(()=>{R?j&&i&&i(!1):T.current&&(T.current=!1,v(!1),U?.(),ue(),J(!1),se(!1),Y(!1))},[R,j,i,ue,J,se,Y,U]);return e.jsxs("div",{className:(C?C+" ":"")+"staggered-menu-wrapper"+(F?" fixed-wrapper":""),style:m?{"--sm-accent":m}:void 0,"data-position":s,"data-open":j||void 0,children:[j&&_&&e.jsx("div",{className:"sm-backdrop",onClick:()=>re(),style:{position:"absolute",inset:0,zIndex:5,pointerEvents:"auto"},"aria-hidden":"true"}),e.jsx("div",{ref:A,className:"sm-prelayers","aria-hidden":"true",children:(()=>{let z=[...c&&c.length?c.slice(0,4):["#1e1e22","#35353c"]];if(z.length>=3){const B=Math.floor(z.length/2);z.splice(B,1)}return z.map((B,$)=>e.jsx("div",{className:"sm-prelayer",style:{background:B}},$))})()}),e.jsxs("header",{className:"staggered-menu-header","aria-label":"Main navigation header",children:[e.jsx("div",{className:"sm-logo","aria-label":"Logo",children:y?e.jsx("img",{src:y,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):null}),e.jsxs("button",{ref:D,className:"sm-toggle","aria-label":j?"Close menu":"Open menu","aria-expanded":j,"aria-controls":"staggered-menu-panel",onClick:oe,type:"button",children:[e.jsx("span",{ref:a,className:"sm-toggle-textWrap","aria-hidden":"true",children:e.jsx("span",{ref:b,className:"sm-toggle-textInner",children:l.map((x,z)=>e.jsx("span",{className:"sm-toggle-line",children:x},z))})}),e.jsxs("span",{ref:E,className:"sm-icon","aria-hidden":"true",children:[e.jsx("span",{ref:d,className:"sm-icon-line"}),e.jsx("span",{ref:M,className:"sm-icon-line sm-icon-line-v"})]})]})]}),e.jsx("aside",{id:"staggered-menu-panel",ref:O,className:"staggered-menu-panel","aria-hidden":!j,children:e.jsxs("div",{className:"sm-panel-inner",children:[e.jsx("ul",{className:"sm-panel-list",role:"list","data-numbering":f||void 0,children:h&&h.length?h.map((x,z)=>e.jsx("li",{className:"sm-panel-itemWrap",children:e.jsx("a",{className:"sm-panel-item",href:"#",onClick:B=>{B.preventDefault(),n&&n(x.id)},"aria-label":x.ariaLabel,"data-index":z+1,children:e.jsx("span",{className:"sm-panel-itemLabel",children:x.label})})},x.label+z)):e.jsx("li",{className:"sm-panel-itemWrap","aria-hidden":"true",children:e.jsx("span",{className:"sm-panel-item",children:e.jsx("span",{className:"sm-panel-itemLabel",children:"No items"})})})}),w&&p&&p.length>0&&e.jsxs("div",{className:"sm-socials","aria-label":"Social links",children:[e.jsx("h3",{className:"sm-socials-title",children:"Extras"}),e.jsx("ul",{className:"sm-socials-list",role:"list",children:p.map((x,z)=>e.jsx("li",{className:"sm-socials-item",children:e.jsx("a",{href:x.link,target:"_blank",rel:"noopener noreferrer",className:"sm-socials-link",children:x.label})},x.label+z))})]})]})})]})};function cs({children:n,className:t="",onClick:i,mouseX:s,spring:c,distance:h,magnification:p,baseItemSize:w}){const f=o.useRef(null),C=We(0),y=dt(s,m=>{if(!f.current)return 1/0;const L=f.current.getBoundingClientRect(),F=L.x+L.width/2;return Math.abs(m-F)}),k=dt(y,[0,h],[p,w]),S=et(k,c);return e.jsx(V.div,{ref:f,style:{width:S,height:S,minWidth:S,minHeight:S},onHoverStart:()=>C.set(1),onHoverEnd:()=>C.set(0),onClick:i,className:`dock-item ${t}`,"aria-haspopup":"true",children:o.Children.map(n,m=>o.cloneElement(m,{isHovered:C}))})}function us({children:n,className:t="",...i}){const{isHovered:s}=i,[c,h]=o.useState(!1);return o.useEffect(()=>{const p=s.on("change",w=>{h(w===1)});return()=>p()},[s]),e.jsx(ve,{children:c&&e.jsx(V.div,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:1,y:0,x:"-50%"},exit:{opacity:0,y:5,x:"-50%"},transition:{duration:.2},className:`dock-label ${t}`,role:"tooltip",style:{left:"50%",x:"-50%"},children:n})})}function ds({children:n,className:t=""}){return e.jsx("div",{className:`dock-icon ${t}`,children:n})}function fs({items:n,className:t="",spring:i={mass:.1,stiffness:300,damping:20},magnification:s=70,distance:c=200,panelHeight:h=68,dockHeight:p=256,baseItemSize:w=50}){const f=We(1/0),C=We(0),y=o.useMemo(()=>Math.max(p,s+s/2+4),[s,p]),k=dt(C,[0,1],[h,y]),S=et(k,i);return e.jsx(V.div,{style:{height:S,scrollbarWidth:"none"},className:"dock-outer",children:e.jsx(V.div,{onMouseMove:({pageX:m})=>{C.set(1),f.set(m)},onMouseLeave:()=>{C.set(0),f.set(1/0)},className:`dock-panel ${t}`,style:{height:h},role:"toolbar","aria-label":"Application dock",children:n.map((m,L)=>e.jsxs(cs,{onClick:m.onClick,className:m.className,mouseX:f,spring:i,distance:c,magnification:s,baseItemSize:w,children:[e.jsx(ds,{children:m.icon}),e.jsx(us,{children:m.label})]},L))})})}const hs=()=>{const{activeTrail:n}=Re(),t=We(-100),i=We(-100),s={damping:25,stiffness:70,mass:1},c=et(t,s),h=et(i,s);o.useEffect(()=>{const w=f=>{t.set(f.clientX),i.set(f.clientY)};return window.addEventListener("mousemove",w),()=>window.removeEventListener("mousemove",w)},[t,i]);const p={"apple-cat":Ht,"jump-cat":Yt,"rolling-cat":Vt,duck:Xt,pompom:Jt,"skeleton-run":Kt,ghost:null};return!n||n==="none"?null:e.jsx("div",{style:{position:"fixed",top:0,left:0,pointerEvents:"none",zIndex:9999},children:p[n]?e.jsx(V.img,{src:p[n],alt:"trail",style:{x:c,y:h,translateX:25,translateY:25,width:"70px",height:"auto",filter:"drop-shadow(0 4px 6px rgba(0,0,0,0.3))"}}):n==="ghost"?e.jsx(V.div,{style:{x:c,y:h,translateX:20,translateY:20,fontSize:"2rem",filter:"drop-shadow(0 0 10px rgba(255,255,255,0.5))"},children:"👻"}):null})},Dt=["Alineando las estrellas...","Despertando a los gatos...","Cargando recuerdos...","Preparando el universo..."],ms=({progress:n})=>{const[t,i]=o.useState(0);return o.useEffect(()=>{const s=setInterval(()=>{i(c=>(c+1)%Dt.length)},1500);return()=>clearInterval(s)},[]),e.jsxs(V.div,{className:"loading-screen",exit:{opacity:0,pointerEvents:"none",transition:{duration:.8,ease:"easeInOut"}},children:[e.jsx("div",{className:"loading-background-effect"}),e.jsxs("div",{className:"loading-content",children:[e.jsx("h1",{className:"loading-title",children:"ONLY YOU"}),e.jsxs("div",{className:"progress-wrapper",children:[e.jsxs("div",{className:"progress-info",children:[e.jsx("span",{className:"loading-label",children:"Cargando sistema"}),e.jsxs("span",{className:"loading-percent",children:[n,"%"]})]}),e.jsx("div",{className:"progress-bar-bg",children:e.jsx(V.div,{className:"progress-bar-fill",initial:{width:0},animate:{width:`${n}%`},transition:{type:"spring",stiffness:50,damping:15}})})]}),e.jsx("div",{className:"message-container",children:e.jsx(V.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:-5},transition:{duration:.3},className:"loading-message",children:Dt[t]},t)})]})]})},ps=""+new URL("For You I'll Die - JAY SAV-BGIKD8t9.mp3",import.meta.url).href,gs=Object.freeze(Object.defineProperty({__proto__:null,default:ps},Symbol.toStringTag,{value:"Module"})),vs=""+new URL("From The Start (Sped Up) - Laufey-D4ysqUTI.mp3",import.meta.url).href,xs=Object.freeze(Object.defineProperty({__proto__:null,default:vs},Symbol.toStringTag,{value:"Module"})),ys=""+new URL("I Really Want to Stay At Your House - Rosa Walton-BKlM1ya2.mp3",import.meta.url).href,bs=Object.freeze(Object.defineProperty({__proto__:null,default:ys},Symbol.toStringTag,{value:"Module"})),ws=""+new URL("La cena - Las Petunias-BzZvyMnw.mp3",import.meta.url).href,Cs=Object.freeze(Object.defineProperty({__proto__:null,default:ws},Symbol.toStringTag,{value:"Module"})),Ss=""+new URL("Let You Down - Dawid Podsiadło-CMbNZyx7.mp3",import.meta.url).href,js=Object.freeze(Object.defineProperty({__proto__:null,default:Ss},Symbol.toStringTag,{value:"Module"})),As=""+new URL("Tek It - Cafuné-DeWKFaBa.mp3",import.meta.url).href,ks=Object.freeze(Object.defineProperty({__proto__:null,default:As},Symbol.toStringTag,{value:"Module"})),Ps=""+new URL("You and I - d4vd -DLXjY2fT.mp3",import.meta.url).href,Rs=Object.freeze(Object.defineProperty({__proto__:null,default:Ps},Symbol.toStringTag,{value:"Module"})),Ls=""+new URL("gourmet - rickyedit-u4-Lg7PG.mp3",import.meta.url).href,Ms=Object.freeze(Object.defineProperty({__proto__:null,default:Ls},Symbol.toStringTag,{value:"Module"})),Is=""+new URL("una manera perfecta de morir - INTERROGACIÓN AMOR-Bn3KiH1Y.mp3",import.meta.url).href,Fs=Object.freeze(Object.defineProperty({__proto__:null,default:Is},Symbol.toStringTag,{value:"Module"})),Tt=Object.assign({"../../assets/songs/For You I'll Die - JAY SAV.mp3":gs,"../../assets/songs/From The Start (Sped Up) - Laufey.mp3":xs,"../../assets/songs/I Really Want to Stay At Your House - Rosa Walton.mp3":bs,"../../assets/songs/La cena - Las Petunias.mp3":Cs,"../../assets/songs/Let You Down - Dawid Podsiadło.mp3":js,"../../assets/songs/Tek It - Cafuné.mp3":ks,"../../assets/songs/You and I - d4vd .mp3":Rs,"../../assets/songs/gourmet - rickyedit.mp3":Ms,"../../assets/songs/una manera perfecta de morir - INTERROGACIÓN AMOR.mp3":Fs}),Oe=Object.keys(Tt).map(n=>({title:n.split("/").pop().split(".")[0].replace(/-/g," ").replace(/\b\w/g,s=>s.toUpperCase()),artist:"Only U Playlist",src:Tt[n].default}));Oe.length===0&&Oe.push({title:"No Songs Found",artist:"Add mp3 to assets/songs",src:""});const Es=.1,_s=({visible:n,onClose:t})=>{const i=o.useRef(null),s=o.useRef(null),[c,h]=o.useState(!1),[p,w]=o.useState(0),[f,C]=o.useState(.3),[y,k]=o.useState(!1),[S,m]=o.useState(!1),[L,F]=o.useState(!1),[_,I]=o.useState(0),[U,X]=o.useState(0),v=Oe[p];o.useEffect(()=>{i.current&&(i.current.volume=y?0:Math.pow(f,2)*Es)},[f,y]),o.useEffect(()=>{c&&i.current&&i.current.play().catch(d=>console.log("Autoplay blocked",d))},[p]),o.useEffect(()=>{n||(m(!1),F(!1))},[n]),o.useEffect(()=>{const d=M=>{n&&(s.current&&s.current.contains(M.target)||M.target.closest(".dock-outer")||t&&t())};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[n,t]);const R=()=>{i.current&&(I(i.current.currentTime),X(i.current.duration||0))},j=d=>{const M=parseFloat(d.target.value);I(M),i.current&&(i.current.currentTime=M)},T=()=>{c?i.current.pause():i.current.play(),h(!c)},O=()=>{w(d=>(d+1)%Oe.length)},A=d=>{w(d),h(!0),F(!1)},q=d=>{if(!d||isNaN(d))return"0:00";const M=Math.floor(d/60),E=Math.floor(d%60);return`${M}:${E<10?"0":""}${E}`};return e.jsxs(V.div,{ref:s,className:"music-player-container",initial:"hidden",animate:n?"visible":"hidden",variants:{visible:{opacity:1,y:0,scale:1,pointerEvents:"auto"},hidden:{opacity:0,y:50,scale:.95,pointerEvents:"none"}},transition:{type:"spring",stiffness:300,damping:30},children:[e.jsx("audio",{ref:i,src:v.src,onEnded:O,onTimeUpdate:R,onLoadedMetadata:R,preload:"auto"}),e.jsx(ve,{children:L&&e.jsx(V.div,{className:"playlist-popup",initial:{opacity:0,y:10,scale:.95,x:"-50%"},animate:{opacity:1,y:0,scale:1,x:"-50%"},exit:{opacity:0,y:10,scale:.95,x:"-50%"},transition:{duration:.2},children:Oe.map((d,M)=>e.jsxs("div",{className:`playlist-item ${M===p?"active":""}`,onClick:()=>A(M),children:[M+1,". ",d.title]},M))})}),e.jsx("div",{className:"compact-info",onClick:()=>F(!L),children:e.jsxs("div",{className:"song-title-wrapper",style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{className:"song-title",children:v.title}),e.jsx(Ni,{size:14,style:{minWidth:14,marginLeft:8,opacity:.6}})]})}),e.jsxs("div",{className:"compact-controls-row",children:[e.jsx("button",{className:"mini-play-btn",onClick:T,children:c?e.jsx(Ui,{size:16}):e.jsx(Oi,{size:16,style:{marginLeft:"2px"}})}),e.jsxs("div",{className:"seek-bar-container",children:[e.jsx("input",{type:"range",min:"0",max:U,value:_,onChange:j,className:"seek-slider"}),e.jsxs("div",{className:"time-display",children:[q(_)," / ",q(U)]})]}),e.jsx("button",{className:"icon-btn",onClick:O,children:e.jsx(qi,{size:18})}),e.jsxs("div",{className:"volume-wrapper",children:[e.jsx("button",{className:`icon-btn ${S?"active":""}`,onClick:()=>m(!S),children:y||f===0?e.jsx(Wi,{size:18}):e.jsx(Wt,{size:18})}),e.jsx(ve,{children:S&&e.jsx(V.div,{className:"volume-popup",initial:{opacity:0,scale:.8,x:10},animate:{opacity:1,scale:1,x:0},exit:{opacity:0,scale:.8,x:0},children:e.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:y?0:f,onChange:d=>C(parseFloat(d.target.value))})})})]})]})]})},Ds=()=>{const[n,t]=o.useState(!1),[i,s]=o.useState(!1),[c,h]=o.useState(!1),p=o.useRef(null),{gameVolume:w,setGameVolume:f,resetProgress:C,achievements:y,ownedItems:k}=Re();o.useEffect(()=>{const m=L=>{p.current&&!p.current.contains(L.target)&&t(!1)};return n&&document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[n]);const S=()=>{window.confirm("¿Estás seguro de que quieres borrar todo tu progreso (monedas y compras)?")&&(C(),t(!1))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"settings-container",ref:p,children:[e.jsx("button",{className:`settings-btn ${n?"active":""}`,onClick:()=>t(!n),"aria-label":"Ajustes",children:e.jsx(Bi,{size:20})}),e.jsx(ve,{children:n&&e.jsxs(V.div,{className:"settings-dropdown",initial:{opacity:0,y:-10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.95},transition:{duration:.2},children:[e.jsxs("div",{className:"setting-item",children:[e.jsxs("div",{className:"label",children:[e.jsx(Wt,{})," ",e.jsx("span",{children:"Sonido Juego"})]}),e.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:w,onChange:m=>f(parseFloat(m.target.value))})]}),e.jsx("div",{className:"divider"}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{h(!0),t(!1)},children:[e.jsx(ct,{})," Logros"]}),e.jsxs("button",{className:"setting-action-btn",onClick:()=>{s(!0),t(!1)},children:[e.jsx(Gi,{})," Documentación"]}),e.jsxs("button",{className:"setting-action-btn danger",onClick:S,children:[e.jsx(Hi,{})," Resetear Progreso"]})]})})]}),e.jsx(ve,{children:i&&e.jsx("div",{className:"doc-overlay",onClick:()=>s(!1),children:e.jsxs(V.div,{className:"doc-modal",onClick:m=>m.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>s(!1),children:e.jsx(Ze,{size:24})}),e.jsx("h2",{children:"Mecánicas del Juego"}),e.jsxs("div",{className:"doc-content",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs("p",{children:[e.jsx("strong",{children:"Monedas:"})," Haz click en las monedas flotantes para recolectarlas. Las monedas especiales (brillantes) valen más puntos."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Tienda:"})," Usa tus monedas para desbloquear nuevos fondos, cursores y skins para las monedas."]})]})]})})}),e.jsx(ve,{children:c&&e.jsx("div",{className:"doc-overlay",onClick:()=>h(!1),children:e.jsxs(V.div,{className:"doc-modal",onClick:m=>m.stopPropagation(),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[e.jsx("button",{className:"close-doc-btn",onClick:()=>h(!1),children:e.jsx(Ze,{size:24})}),e.jsxs("h2",{children:[e.jsx(ct,{style:{marginRight:"10px",color:"#ffd700"}})," ","Tus Logros"]}),e.jsx("div",{className:"doc-content",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:Object.entries(Be).map(([m,L])=>{const F=y.includes(m);let _=L.desc;if(m==="collector"){const I=Object.values(tt).reduce((X,v)=>X+v.length,0),U=k?k.length:0;_=`${L.desc} (${U}/${I})`}if(m==="prestige"){const U=Object.keys(Be).filter(v=>v!=="prestige"),X=y.filter(v=>U.includes(v)).length;_=`${L.desc} (${X}/${U.length})`}return e.jsxs("div",{style:{background:F?"rgba(255, 215, 0, 0.1)":"rgba(255, 255, 255, 0.05)",border:F?"1px solid rgba(255, 215, 0, 0.3)":"1px solid rgba(255, 255, 255, 0.1)",padding:"15px",borderRadius:"12px",opacity:F?1:.5,display:"flex",alignItems:"center",gap:"15px"},children:[e.jsx("div",{style:{fontSize:"2rem"},children:F?L.icon:e.jsx(Yi,{className:"locked-icon"})}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 5px 0",color:F?"#ffd700":"white"},children:L.title}),e.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"rgba(255,255,255,0.7)"},children:_})]})]},m)})})})]})})})]})},Ts=()=>{const{notification:n,clearNotification:t}=Re();o.useEffect(()=>{if(n){const c=setTimeout(()=>{t()},4e3);return()=>clearTimeout(c)}},[n,t]);const i=n&&n.type==="achievement",s=i?Be[n.id]:null;return e.jsx(ve,{children:i&&s&&e.jsxs(V.div,{className:"achievement-toast",initial:{y:-100,x:"-50%",opacity:0},animate:{y:20,x:"-50%",opacity:1},exit:{y:-100,x:"-50%",opacity:0},transition:{type:"spring",stiffness:300,damping:20},children:[e.jsx("div",{className:"icon-container",children:e.jsx(zt,{size:24,color:"#ffd700"})}),e.jsxs("div",{className:"text-container",children:[e.jsx("span",{className:"title",children:"¡Logro Desbloqueado!"}),e.jsxs("span",{className:"name",children:[s.icon," ",s.title]}),e.jsx("span",{className:"desc",children:s.desc})]})]})})},zs=[{id:"backgrounds",label:"Fondos",ariaLabel:"Galería de Fondos"},{id:"cursors",label:"Cursores",ariaLabel:"Personalizar Cursor"},{id:"trails",label:"Mascotas",ariaLabel:"Personalizar Mascota"},{id:"skins",label:"Monedas",ariaLabel:"Personalizar Monedas"}],Ns=[{label:"GitHub",link:"https://github.com"},{label:"Instagram",link:"https://instagram.com"}];function Us(){const{isUnlocked:n,openShop:t,closeShop:i,lockGame:s,activeBackground:c,toggleGame:h,isGameActive:p,activeShop:w,addCoins:f,unlockAchievement:C,achievements:y}=Re(),[k,S]=o.useState(!0),[m,L]=o.useState(!1),[F,_]=o.useState(!1),[I,U]=o.useState(!1),[X,v]=o.useState(!0),[R,j]=o.useState(!1),[T,O]=o.useState(null),[A,q]=o.useState(null),[d,M]=o.useState(null),[E,b]=o.useState(null),[a,l]=o.useState(null),[g,u]=o.useState(null),[P,N]=o.useState(null),[W,Q]=o.useState(null);o.useEffect(()=>{n&&y&&!y.includes("prestige")&&Object.keys(Be).filter(x=>x!=="prestige").every(x=>y.includes(x))&&C("prestige")},[y,n,C]);const D=o.useRef(0);o.useEffect(()=>{if(!n)return;const Y=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"],oe=re=>{const x=re.key.toLowerCase(),z=Y[D.current].toLowerCase();x===z?(D.current++,D.current===Y.length&&(f(1e6),C("matrix_master"),console.log("CHEAT ACTIVATED: KONAMI CODE!"),D.current=0)):(D.current=0,x===Y[0].toLowerCase()&&(D.current=1))};return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},[n,f,C]);const ee=Y=>{Y&&t(Y)},ae=()=>{F?(_(!1),I&&S(!0)):(j(!1),i(),U(k),S(!1),_(!0))},te=[{icon:e.jsx(Vi,{size:22}),label:"Texto",onClick:()=>{i(),p?h():S(!k)}},{icon:e.jsx(Xi,{size:22}),label:"Música",onClick:()=>{i(),L(!m)}},{icon:e.jsx(Ji,{size:22}),label:"Tienda",onClick:()=>{w&&i(),j(!R)}},{icon:e.jsx(Ki,{size:22,color:p?"#f700ff":"currentColor"}),label:"Juego",onClick:()=>{i(),p?S(X):(v(k),S(!0)),h()}},{icon:e.jsx(Qi,{size:22}),label:"Fondo",onClick:ae},{icon:e.jsx($i,{size:22}),label:"Bloquear",onClick:()=>{s&&(i(),L(!1),O(null),q(null),M(null),b(null),l(null),u(null),N(null),Q(null),s())}}],[ce,ue]=o.useState(!0),[J,se]=o.useState(0);return o.useEffect(()=>{const Y=setInterval(()=>{se(oe=>{const re=oe+Math.floor(Math.random()*15)+5;return re>=100?(clearInterval(Y),setTimeout(()=>ue(!1),200),100):re})},200);return()=>clearInterval(Y)},[]),e.jsxs("main",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[e.jsx(ve,{mode:"wait",children:ce&&e.jsx(ms,{progress:J},"loader")}),e.jsx(ve,{children:!n&&e.jsx(V.div,{initial:{opacity:0,filter:"blur(20px)",scale:1.1},animate:{opacity:1,filter:"blur(0px)",scale:1},exit:{opacity:0,filter:"blur(20px)",scale:1.1,transition:{duration:2}},transition:{duration:2,ease:"easeInOut"},style:{position:"fixed",zIndex:9999,inset:0,background:"#000"},children:e.jsx(ln,{})},"lock-screen")}),e.jsx(ve,{children:n&&e.jsxs(V.div,{className:"app-content",initial:{opacity:0,scale:.95,filter:"blur(10px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},exit:{opacity:0,scale:1.1,filter:"blur(10px)",transition:{duration:1}},transition:{duration:1},style:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},children:[e.jsx(rs,{floatingLinesConfig:T,lightPillarsConfig:A,ballpitConfig:d,silkConfig:E,galaxyConfig:a,gradientConfig:g,pixelSnowConfig:P,hyperspeedConfig:W}),e.jsx(Ds,{}),e.jsx(Ts,{}),e.jsx(ls,{isOpen:R,onToggle:Y=>{j(Y),Y&&_(!1)},items:zs,socialItems:Ns,isFixed:!0,position:"right",onItemClick:ee,colors:["#f700ff","#bd71ff","#8629b1"],accentColor:"#f700ff",menuButtonColor:"#fff",openMenuButtonColor:"#ffffff",displayItemNumbering:!0,logoUrl:null}),e.jsx(Rn,{}),e.jsx(hs,{}),e.jsx(ve,{children:k&&e.jsx(V.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},style:{position:"absolute",width:"100%",height:"100%",zIndex:10},children:e.jsx(_n,{})})}),e.jsx(ve,{children:F&&["floatinglines","lightpillars","ballpit","silk","galaxy","gradient","pixelsnow","hyperspeed"].includes(c)&&e.jsx(V.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{duration:.3},style:{position:"absolute",top:0,right:0,zIndex:200,height:"100%",pointerEvents:"auto"},children:e.jsx("div",{style:{height:"100%"},children:e.jsx(os,{onClose:ae,floatingLinesConfig:T,setFloatingLinesConfig:O,lightPillarsConfig:A,setLightPillarsConfig:q,ballpitConfig:d,setBallpitConfig:M,silkConfig:E,setSilkConfig:b,galaxyConfig:a,setGalaxyConfig:l,gradientConfig:g,setGradientConfig:u,pixelSnowConfig:P,setPixelSnowConfig:N,hyperspeedConfig:W,setHyperspeedConfig:Q})})})}),e.jsx(_s,{visible:m,onClose:()=>L(!1)}),e.jsx(fs,{items:te,panelHeight:60,baseItemSize:45,magnification:60})]},"main-content")})]})}Zi.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(Us,{})}));
