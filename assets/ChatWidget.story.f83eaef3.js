import{r as u,j as w}from"./jsx-runtime.11df4289.js";import{r as O}from"./index.759803e9.js";import{c as $,C as x,K as V,U as W,o as R,S as z}from"./index.a9a0d5b7.js";import"./index.7b22cb5f.js";import{B as v}from"./index.957263c1.js";import"./index.3f034a03.js";import"./index.41e9cc76.js";import"./index.abfbe5c6.js";import{c as D}from"./index.2603eee7.js";import"./index.6f741956.js";import"./index.ae0daebd.js";import"./index.b4835948.js";import{L}from"./index.896191fc.js";import"./index.061eb885.js";import"./index.685581b9.js";import"./index.ee1c568e.js";import"./index.402b5a60.js";import{s as U}from"./theme.3fdd99ea.js";import"./iframe.43996c26.js";import"./variants.e2d53559.js";import"./top-caret.cac3b0b8.js";const M=n=>({type:"intent",payload:n});class k{constructor(t){var a,r;if(this.options=t,this.fetch=(r=t.fetchPonyfill)!=null?r:(a=globalThis.fetch)==null?void 0:a.bind(globalThis),!this.fetch)throw new TypeError("fetch implementation was not provided and a global fetch was not available")}async send(t,a={}){var o,p;const r=new URL(t,this.options.url);a.params&&(r.search=a.params.toString());const i=await this.fetch(r,{method:(o=a.method)!=null?o:"GET",body:a.body?JSON.stringify(a.body):void 0,headers:{"content-type":"application/json",...(p=a.headers)!=null?p:{}}}),l=await i.json().catch(()=>null);if(!i.ok)throw $(i.status,i.statusText,l);return l}async interact(t){return this.send(`state/${t.versionID}/user/${t.sessionID}/interact`,{method:"POST",body:{action:t.action,config:t.config},headers:{authorization:this.options.authorization},params:new URLSearchParams({verbose:"true"})})}}class P{constructor(t={}){var a;this.traces=[],this.registerTraces((a=t.traces)!=null?a:[])}registerTrace(t){return this.traces.push(t),this}registerTraces(t){return t.forEach(a=>this.registerTrace(a)),this}async processTrace(t,a,r){const i={request:a,state:r.state,context:t};for(const l of r.trace){const o=this.traces.find(p=>p.canHandle(l));o&&(i.context=await o.handle(i,l))}return i.context}}class j{constructor(t){this.runtime=new k(t),this.trace=new P(t)}registerStep(t){return this.trace.registerTrace(t),this}async interact(t,a){const r=await this.runtime.interact(a);return this.trace.processTrace(t,a,r)}intent(t){return this.interact(t.context,{action:M(t.payload),sessionID:t.sessionID})}}const _=n=>t=>typeof t=="function"?{canHandle:a=>a.type===n,handle:t}:t,Y=_("choice"),H=_("text"),N=_("visual");var T=(n=>(n.USER="user",n.SYSTEM="system",n))(T||{});const B="https://general-runtime.voiceflow.com",F=()=>({messages:[]}),K=({url:n=B,versionID:t,...a})=>{const[r,i]=u.exports.useState([]),l=u.exports.useMemo(()=>D(),[]),o=u.exports.useMemo(()=>new j({...a,url:n}),[a.authorization]),p=async e=>{const s=await o.interact(F(),{versionID:t,sessionID:l,action:e});i(c=>[...c,{id:D(),type:T.SYSTEM,timestamp:new Date,...s}])},d=async(e,s)=>{i(c=>[...c,{id:D(),type:T.USER,message:e,timestamp:new Date}]),await p(s)};o.registerStep(H(({context:e},{payload:{message:s}})=>(e.messages.push({type:"text",text:s}),e))),o.registerStep(N(({context:e},{payload:{image:s}})=>(e.messages.push({type:"image",url:s}),e))),o.registerStep(Y(({context:e},{payload:{buttons:s}})=>(e.actions=s.map(({name:c,request:f})=>({label:c,onClick:()=>d(c,f)})),e))),o.registerStep({canHandle:({type:e})=>e==="cardV2",handle:({context:e},{payload:{title:s,imageUrl:c,description:f,buttons:g}})=>(e.messages.push({type:"card",title:s,description:f.text,image:c,actions:g.map(({name:h,request:m})=>({label:h,onClick:()=>d(h,m)}))}),e)}),o.registerStep({canHandle:({type:e})=>e==="carousel",handle:({context:e},{payload:{cards:s}})=>(e.messages.push({type:"carousel",cards:s.map(({title:c,description:f,imageUrl:g,buttons:h})=>({title:c,description:f.text,image:g,actions:h.map(({name:m,request:S})=>({label:m,onClick:()=>d(m,S)}))}))}),e)});const C=()=>i([]);return{turns:r,reset:C,launch:async()=>{r.length&&C(),await p({type:"launch",payload:null})},reply:async e=>d(e,{type:"text",payload:e})}},A=U("div",{position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:10,"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",[`& ${v.Container}`]:{color:"$white"},[`& ${x.Container}`]:{height:800},[`& ${x.Dialog}`]:{flex:1},[`& ${L}`]:{margin:"auto"},[`
    & > ${v.Container},
    & > ${x.Container}
  `]:{position:"absolute",right:"$6",bottom:"$6"}}),G=2e3,E=({assistant:n,versionID:t,authorization:a,messageDelay:r=G})=>{const[i,l]=u.exports.useState(!1),[o,p]=u.exports.useState(!1),[d,C]=u.exports.useState(null),y=K({versionID:t,authorization:a}),b=u.exports.useRef({}),e=()=>l(!1),s=async()=>{C({startTime:new Date}),p(!1),await y.launch()},c=async()=>{l(!0),d||await s()},f=()=>{e(),p(!0)},g=h=>()=>{b.current[h]=!0};return O.exports.createPortal(w(A,{children:i&&!!d?w(x,{title:n.name,description:n.description,image:n.image,startTime:d.startTime,hasEnded:o,isLoading:!y.turns.length,onStart:s,onEnd:f,onSend:y.reply,onMinimize:e,children:y.turns.map(h=>V(h).with({type:T.USER},({id:m,...S})=>u.exports.createElement(W,{...R(S,["type"]),key:m})).with({type:T.SYSTEM},({id:m,...S})=>u.exports.createElement(z,{...R(S,["type"]),image:n.image,isAnimated:!b.current[m],messageDelay:r,onAnimationEnd:g(m),key:m})).exhaustive())}):w(v,{svg:"launch",onClick:c})}),document.body)},I=Object.assign(E,{Container:A});try{E.displayName="ChatWidget",E.__docgenInfo={description:"",displayName:"ChatWidget",props:{assistant:{defaultValue:null,description:"",name:"assistant",required:!0,type:{name:"{ name: string; description: string; image: string; }"}},messageDelay:{defaultValue:{value:"2000"},description:"",name:"messageDelay",required:!1,type:{name:"number"}},versionID:{defaultValue:null,description:"",name:"versionID",required:!0,type:{name:"string"}},authorization:{defaultValue:null,description:"",name:"authorization",required:!0,type:{name:"string"}},fetchPonyfill:{defaultValue:null,description:"A ponyfill to use for `fetch()`.\nDefaults to the global `fetch()`.",name:"fetchPonyfill",required:!1,type:{name:"FetchFn"}},traces:{defaultValue:null,description:"",name:"traces",required:!1,type:{name:"TraceDeclaration<RuntimeContext, any>[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/views/ChatWidget/index.tsx#ChatWidget"]={docgenInfo:E.__docgenInfo,name:"ChatWidget",path:"src/views/ChatWidget/index.tsx#ChatWidget"})}catch{}const St={title:"Views/ChatWidget",component:I,args:{versionID:"",authorization:"",assistant:{name:"Assistant Name",image:"https://source.unsplash.com/random/72x72",description:"Voiceflow's virtual assistant is here to help."}}},J=n=>w(I,{...n}),q=J.bind({});q.args={};export{q as Default,St as default};
//# sourceMappingURL=ChatWidget.story.f83eaef3.js.map