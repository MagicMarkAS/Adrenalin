import{d as A,C as u}from"./index.ccc1977f.js";import{V as E}from"./fixtures.e9667a2d.js";import{j as t}from"./jsx-runtime.d3c7c51e.js";import"./index.850b16dc.js";import"./theme.e4a64686.js";import"./iframe.dbf4920e.js";import"./index.97a60f9e.js";import"./variants.c6cc17d9.js";import"./index.62f2bfc5.js";import"./index.727ab363.js";import"./index.85d0fafe.js";import"./top-caret.29d78f60.js";import"./index.73d26fdb.js";import"./index.da4ab1f5.js";import"./index.7d49188b.js";import"./index.92508527.js";import"./is-plain-object.ed97bcae.js";import"./index.0c6ad106.js";import"./index.71ddde32.js";import"./index.ec23674a.js";import"./index.56db70fe.js";import"./index.3b5995f3.js";const s="https://source.unsplash.com/featured/248x150",a={type:"text",text:"Lorem ipsum dolor sit amet consectetur"},D={type:"card",title:"Card Message",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:s},te={title:"Components/Chat/SystemResponse",component:A,args:{timestamp:Date.now(),avatar:E,messageDelay:2e3,isLast:!1},argTypes:{timestamp:{control:{type:"date"}}},excludeStories:["RawTemplate"]},F=r=>t(A,{...r}),e=r=>t(u.Container,{children:t(u.Dialog,{css:{padding:"64px 0",display:"flex",flexDirection:"column",justifyContent:"center"},children:t(F,{...r})})}),o=e.bind({});o.args={messages:[{type:"text",text:"Lorem ipsum dolor"}]};const i=e.bind({});i.args={messages:[{type:"text",text:"consecteturaconsecteturaconsecteturaconsecteturaconsecteturaconsectetura"}]};const m=e.bind({});m.args={messages:[a]};const M=e.bind({});M.args={messages:[a,a,a],isLast:!0,actions:[{request:{},name:"Button One"},{request:{},name:"Button Two"},{request:{},name:"Button Three"}]};const n=e.bind({});n.args={messages:[{type:"image",url:s}]};const c=e.bind({});c.args={messages:[D]};const p=e.bind({});p.args={messages:[{...D,actions:[{request:{},name:"First Button"},{request:{},name:"Second Button"},{request:{},name:"Third Button"}]}]};const g=e.bind({});g.args={messages:[{type:"carousel",cards:[{title:"First Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:s,actions:[{request:{},name:"First Button"},{request:{},name:"Second Button"},{request:{},name:"Third Button"}]},{title:"Second Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",image:s,actions:[{request:{},name:"First Button"},{request:{},name:"Second Button"}]},{title:"Third Card",description:"Lorem ipsum dolor sit amet",image:s}]}]};const w=e.bind({});var d,l,x,C,y,T,b;w.args={messages:[...(d=o.args.messages)!=null?d:[],...(l=i.args.messages)!=null?l:[],...(x=m.args.messages)!=null?x:[],...(C=n.args.messages)!=null?C:[],...(y=c.args.messages)!=null?y:[],...(T=p.args.messages)!=null?T:[],...(b=g.args.messages)!=null?b:[]]};const _=e.bind({});var q,h,B,S,f,L,R;_.args={feedback:{onClick:()=>{}},messages:[...(q=o.args.messages)!=null?q:[],...(h=i.args.messages)!=null?h:[],...(B=m.args.messages)!=null?B:[],...(S=n.args.messages)!=null?S:[],...(f=c.args.messages)!=null?f:[],...(L=p.args.messages)!=null?L:[],...(R=g.args.messages)!=null?R:[]]};export{p as ActionableCard,M as ActionableText,c as Card,g as Carousel,n as Image,m as MultilineText,w as Multiple,_ as MultipleWithFeedback,o as SimpleText,i as WrappingText,te as default};
//# sourceMappingURL=SystemResponse.story.7fe6e7fe.js.map