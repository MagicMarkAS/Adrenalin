import{r as n,R as L,a as g,j as i}from"./jsx-runtime.30c34616.js";import{A as F}from"./index.15353256.js";import{u as S,T as a,i as P,c as z,C as O,a as B,S as w,K as U,b as A,U as G,o as N,d as y,e as I}from"./index.472c6168.js";import{V}from"./fixtures.e9667a2d.js";import{b as Y,s as E}from"./theme.546a82de.js";import"./index.bf4d4adc.js";import{L as _}from"./index.fddc970a.js";import"./index.c65e0a97.js";import"./index.297a63fb.js";import{c as J}from"./index.0bfd286a.js";import"./index.8d930f05.js";import"./index.f7823852.js";import"./index.a3635a07.js";import"./index.8b216a07.js";import"./index.f73e8200.js";import"./index.213abc45.js";import"./index.bad6db7a.js";import"./index.ea3a9f27.js";import"./iframe.3634bab9.js";import"./is-plain-object.ed97bcae.js";import"./index.8fdcaebd.js";import"./variants.7355bf44.js";import"./top-caret.b663a361.js";const $=e=>{const[r,s]=n.exports.useState("");return n.exports.useEffect(()=>{e!=null&&e.color&&s(Y({color:e.color}))},[e==null?void 0:e.color]),r},K=380,X=800,l=E("div",{width:K,overflow:"hidden",borderRadius:"$2",boxShadow:"0 2px 48px rgba(19,33,68,0.16), 0 0 0 1px $shadow4",height:"90%",maxHeight:X}),d=E("div",{}),k={opacity:1,pointerEvents:"auto",transform:"translateY(0%)",transition:"transform 300ms cubic-bezier(0, 0.95, 0.1, 1), opacity 150ms linear"},H={opacity:0,pointerEvents:"none",transform:"translateY(100%)",transition:"transform 300ms cubic-bezier(0.85, 0, 0.6, 1), opacity 150ms linear"},D=E("div",{position:"fixed",inset:0,"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",pointerEvents:"none",zIndex:1e4,[`
    & > ${d},
    & > ${l}
  `]:{position:"absolute"},variants:{withChat:{true:{[`& > ${l}`]:{...k},[`& > ${d}`]:{...H}},false:{[`& > ${l}`]:{...H},[`& > ${d}`]:{...k}}},isHidden:{true:{display:"none"}}}}),Q=({children:e,chatAPI:r,sendMessage:s,assistant:t})=>{var f;const[b,u]=n.exports.useState(!1),[h,C]=n.exports.useState(!1),o=$(t);S(a.CLOSE,()=>u(!1)),S(a.OPEN,()=>u(!0));const p=L.useCallback(()=>s({type:a.OPEN}),[]),x=L.useCallback(()=>s({type:a.CLOSE}),[]);n.exports.useEffect(()=>{!P(r)||Object.assign(r,{open:p,close:x,hide:()=>C(!0),show:()=>C(!1),interact:m=>s({type:a.INTERACT,payload:m})})},[]);const T=(f=t==null?void 0:t.position)!=null?f:z.ChatPosition.RIGHT,c={bottom:t==null?void 0:t.spacing.bottom,[T]:t==null?void 0:t.spacing.side};return g(D,{withChat:b,isHidden:h,className:o,children:[!!t&&i(d,{style:c,children:i(_,{onClick:p,image:t.launcher})}),i(l,{style:c,children:e})]})},Z=Object.assign(Q,{Launcher:_,Container:D,ChatContainer:l,LauncherContainer:d}),ee=E("div",{height:"100%",[`& ${O.Container}`]:{height:"100%"}}),R=e=>{const r=JSON.stringify(e);window.postMessage(r),window.parent.postMessage(r,"*")},te=({assistant:e,versionID:r,verify:s,user:t,url:b,session:u})=>{const h=n.exports.useCallback(()=>R({type:a.CLOSE}),[]),C=n.exports.useCallback(c=>R({type:a.SAVE_SESSION,payload:c}),[]),o=B({versionID:r,verify:s,url:b,user:t,session:u,saveSession:C});S(a.INTERACT,({payload:c})=>o.interact(c)),S(a.OPEN,async()=>{o.isStatus(w.IDLE)&&await p()});const p=async()=>{await o.launch()},x=n.exports.useCallback(()=>{o.setStatus(w.ENDED),h()},[]),T=$(e);return i(J,{...o,children:i(ee,{className:T,children:g(O,{title:e.title,description:e.description,image:e.image,avatar:e.avatar,withWatermark:e.watermark,startTime:o.session.startTime,hasEnded:o.isStatus(w.ENDED),isLoading:!o.session.turns.length,onStart:p,onEnd:x,onSend:o.reply,onMinimize:h,children:[o.session.turns.map((c,f)=>U(c).with({type:A.USER},({id:m,...v})=>n.exports.createElement(G,{...N(v,["type"]),key:m})).with({type:A.SYSTEM},({id:m,...v})=>i(y,{...N(v,["type"]),avatar:e.avatar,isLast:f===o.session.turns.length-1},m)).exhaustive()),o.indicator&&i(y.Indicator,{avatar:e.avatar})]})})})};Object.assign(te,{sendMessage:R});const M="https://source.unsplash.com/featured/248x150",j={title:"First Card",description:"Lorem ipsum dolor sit amet",image:M,actions:[{request:{},name:"First Button"},{request:{},name:"Second Button"},{request:{},name:"Third Button"}]},W=[j,{title:"Second Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:M},{title:"Third Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",actions:[{request:{},name:"Fourth Button"},{request:{},name:"Fifth Button"}]}],Le={title:"Components/Carousel",component:I},q=e=>i(I,{...e}),oe=q.bind({});oe.args={cards:[j]};const re=q.bind({});re.args={cards:W};const ie=e=>{const r=n.exports.useRef(null),s=n.exports.useRef(null);return i(Z.ChatContainer,{children:g(O.Dialog,{children:[i(y.Controls,{ref:s}),g(y.Container,{ref:r,withImage:!0,scrollable:!0,children:[i(F,{avatar:V}),i(I,{...e,controlsRef:s,containerRef:r})]})]})})},ne=ie.bind({});ne.args={cards:W};export{re as MultipleCards,oe as SingleCard,ne as WithControls,Le as default};
//# sourceMappingURL=Carousel.story.f9b493bf.js.map