import{S as a,C as i}from"./index.ac88f2e0.js";import{j as o}from"./jsx-runtime.1f6943e2.js";import"./index.9a75f017.js";import"./theme.5a02fa41.js";import"./iframe.b604c220.js";import"./index.f048caae.js";import"./variants.0d3867e1.js";import"./index.23b1ede7.js";import"./index.467313e8.js";import"./index.732c292c.js";import"./index.dc0f825f.js";import"./index.24b56b8b.js";import"./index.3ddf8879.js";import"./index.37ac5351.js";import"./index.873b0a06.js";import"./index.f9a3581c.js";const e="https://source.unsplash.com/random/248x150",s={type:"text",text:"Lorem ipsum dolor sit amet consectetur"},r={type:"card",title:"Card Message",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:e},M={title:"Components/Chat/SystemResponse",component:a,args:{timestamp:new Date,image:"https://source.unsplash.com/random/26x26"},argTypes:{timestamp:{control:{type:"date"}}}},t=m=>o(i.Container,{children:o(i.Dialog,{css:{padding:"64px 0",display:"flex",flexDirection:"column",justifyContent:"center"},children:o(a,{...m})})}),n=t.bind({});n.args={messages:[s]};const l=t.bind({});l.args={messages:[s,s,s]};const p=t.bind({});p.args={...n.args,actions:[{label:"Button One"},{label:"Button Two"},{label:"Button Three"}]};const c=t.bind({});c.args={messages:[r]};const d=t.bind({});d.args={messages:[{...r,actions:[{label:"First Button"},{label:"Second Button"},{label:"Third Button"}]}]};const u=t.bind({});u.args={messages:[{type:"carousel",cards:[{title:"First Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:e},{title:"Second Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",image:e,actions:[{label:"First Button"},{label:"Second Button"}]},{title:"Third Card",description:"Lorem ipsum dolor sit amet",image:e,actions:[{label:"First Button"},{label:"Second Button"},{label:"Third Button"}]}]}]};export{d as ActionableCard,p as ActionableText,c as Card,u as Carousel,l as MultipleText,n as SingleText,M as default};
//# sourceMappingURL=SystemResponse.story.c7004325.js.map
