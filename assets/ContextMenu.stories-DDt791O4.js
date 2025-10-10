import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{q as A,r as T,s as t,t as l,u as V,v as F,w as W}from"./ContextMenuList-Dq92F7hd.js";import{r as f,R as B}from"./index-0yr9KlQE.js";import{I as s,a as R}from"./IconSquareRounded-Cbe2j3WU.js";import{I as d}from"./IconTrash-Bi4D0LCQ.js";import{A as _,m as K}from"./proxy-AI0w4ipI.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const X=()=>({easing:"cubic-bezier(0.4, 0, 0.2, 1)",animation:{"move-down":{start:-8,end:0},"scale-down":{start:.95,end:1}},duration:.2}),Y=n=>{const r=n.match(/cubic-bezier\(([^)]+)\)/);return r?r[1].split(",").map(o=>parseFloat(o.trim())):[.4,0,.2,1]},G=(n,r)=>{B.useEffect(()=>{const o=a=>{const i=a.target;n.every(m=>m.current&&!m.current.contains(i))&&r()};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[n,r])},H=()=>{const[n,r]=f.useState({x:0,y:0}),[o,a]=f.useState(!1),{refs:i,strategy:L,x:m,y:P,update:b}=V({placement:"bottom-start",middleware:[F(8),W()],strategy:"absolute"});f.useEffect(()=>{if(!o||!i.floating.current)return;const u={getBoundingClientRect(){return{width:0,height:0,x:n.x,y:n.y,top:n.y,left:n.x,right:n.x,bottom:n.y}}};i.setReference(u),b()},[o,n,i,b]);const{easing:q,animation:c,duration:O}=X();G([i.floating],()=>{o&&a(!1)});const E=u=>{r({x:u.clientX,y:u.clientY}),a(!0)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-background-secondary flex h-[400px] w-full cursor-pointer items-center justify-center select-none",onClick:E,children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-foreground-primary text-body-medium mb-xs",children:"Click anywhere to open context menu"}),e.jsx("p",{className:"text-foreground-secondary text-body-small",children:"The menu will stay within viewport bounds"})]})}),e.jsx("div",{ref:i.setFloating,style:{position:L,top:P??0,left:m??0,zIndex:1e3},children:e.jsx(_,{children:o&&e.jsx(K.div,{transition:{duration:O,ease:Y(q)},initial:{y:c["move-down"].start,opacity:0,scale:Number(c["scale-down"].start)},animate:{y:c["move-down"].end,opacity:1,scale:Number(c["scale-down"].end)},exit:{y:c["move-down"].start,opacity:0,scale:Number(c["scale-down"].start)},children:e.jsxs(l,{children:[e.jsx(t,{title:"Copy",badge:"⌘C",IconLeft:s,onSelect:()=>{console.log("Copy selected"),a(!1)}}),e.jsx(t,{title:"Paste",badge:"⌘V",IconLeft:s,onSelect:()=>{console.log("Paste selected"),a(!1)}}),e.jsx(t,{title:"Open Submenu",IconLeft:s,IconRight:R,onSelect:()=>{console.log("Submenu selected")}}),e.jsx(t,{title:"Another Item",badge:"⌘M",IconLeft:s,onSelect:()=>{console.log("Another item selected"),a(!1)}}),e.jsx(t,{title:"Last Item",badge:"⌘L",IconLeft:s,onSelect:()=>{console.log("Last item selected"),a(!1)}}),e.jsx("div",{className:"bg-border-secondary my-xs h-px w-full"}),e.jsx(t,{kind:"danger",title:"Delete",badge:"⌘D",IconLeft:d,onSelect:()=>{console.log("Delete selected"),a(!1)}})]})})})})]})},re={title:"WIP Components/ContextMenu",component:t,argTypes:{kind:{control:"inline-radio",options:T},size:{control:"inline-radio",options:A},title:{control:"text"},badge:{control:"text"}}},x={args:{kind:"default",size:"medium",title:"Context Menu Item",badge:"⌘C",IconLeft:s},render:n=>e.jsx(l,{className:"w-[200px]",children:e.jsx(t,{...n})})},g={render:()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-foreground-primary text-body-medium mb-sm",children:"Default Items"}),e.jsxs(l,{className:"w-[200px]",children:[e.jsx(t,{title:"Small Item",size:"small",badge:"⌘S",IconLeft:s}),e.jsx(t,{title:"Medium Item",size:"medium",badge:"⌘M",IconLeft:s}),e.jsx(t,{title:"Large Item",size:"large",badge:"⌘L",IconLeft:s})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-foreground-primary text-body-medium mb-sm",children:"Danger Items"}),e.jsxs(l,{className:"w-[200px]",children:[e.jsx(t,{kind:"danger",title:"Delete Small",size:"small",badge:"⌘⌫",IconLeft:d}),e.jsx(t,{kind:"danger",title:"Delete Medium",size:"medium",badge:"⌘⌫",IconLeft:d}),e.jsx(t,{kind:"danger",title:"Delete Large",size:"large",badge:"⌘⌫",IconLeft:d})]})]})]})},I={render:()=>e.jsx(H,{})},p={render:()=>e.jsxs(l,{className:"w-[200px]",children:[e.jsx(t,{title:"Copy",badge:"⌘C",IconLeft:s}),e.jsx(t,{title:"Paste",badge:"⌘V",IconLeft:s}),e.jsx(t,{title:"More Options",IconLeft:s,IconRight:R}),e.jsx("div",{className:"bg-border-secondary my-xs h-px w-full"}),e.jsx(t,{kind:"danger",title:"Delete",badge:"⌘D",IconLeft:d})]})};var h,C,y;x.parameters={...x.parameters,docs:{...(h=x.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    kind: "default",
    size: "medium",
    title: "Context Menu Item",
    badge: "⌘C",
    IconLeft: IconSquareRounded
  },
  render: args => <ContextMenuList className="w-[200px]">
      <ContextMenuListItem {...args} />
    </ContextMenuList>
}`,...(y=(C=x.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var j,M,S;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      <div>
        <h3 className="text-foreground-primary text-body-medium mb-sm">
          Default Items
        </h3>
        <ContextMenuList className="w-[200px]">
          <ContextMenuListItem title="Small Item" size="small" badge="⌘S" IconLeft={IconSquareRounded} />
          <ContextMenuListItem title="Medium Item" size="medium" badge="⌘M" IconLeft={IconSquareRounded} />
          <ContextMenuListItem title="Large Item" size="large" badge="⌘L" IconLeft={IconSquareRounded} />
        </ContextMenuList>
      </div>

      <div>
        <h3 className="text-foreground-primary text-body-medium mb-sm">
          Danger Items
        </h3>
        <ContextMenuList className="w-[200px]">
          <ContextMenuListItem kind="danger" title="Delete Small" size="small" badge="⌘⌫" IconLeft={IconTrash} />
          <ContextMenuListItem kind="danger" title="Delete Medium" size="medium" badge="⌘⌫" IconLeft={IconTrash} />
          <ContextMenuListItem kind="danger" title="Delete Large" size="large" badge="⌘⌫" IconLeft={IconTrash} />
        </ContextMenuList>
      </div>
    </div>
}`,...(S=(M=g.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var w,v,N;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ContextMenuDemo />
}`,...(N=(v=I.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var D,k,z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ContextMenuList className="w-[200px]">
      <ContextMenuListItem title="Copy" badge="⌘C" IconLeft={IconSquareRounded} />
      <ContextMenuListItem title="Paste" badge="⌘V" IconLeft={IconSquareRounded} />
      <ContextMenuListItem title="More Options" IconLeft={IconSquareRounded} IconRight={IconCaretRight} />
      <div className="bg-border-secondary my-xs h-px w-full" />
      <ContextMenuListItem kind="danger" title="Delete" badge="⌘D" IconLeft={IconTrash} />
    </ContextMenuList>
}`,...(z=(k=p.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const ie=["Playground","AllVariants","InteractiveDemo","WithSubmenuIndicator"];export{g as AllVariants,I as InteractiveDemo,x as Playground,p as WithSubmenuIndicator,ie as __namedExportsOrder,re as default};
