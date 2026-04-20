import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as A,u as T,v as t,w as s,x as l,y as V,z as F,D as W}from"./ContextMenuList-BW71qWtN.js";import{r as f,R as B}from"./index-CY-HDqYb.js";import{I as d}from"./IconTrash-X5yv4lc9.js";import{I as R}from"./IconCaretRight-CbG_GAMg.js";import{A as _,m as K}from"./proxy-Dj28WCFa.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const X=()=>({easing:"cubic-bezier(0.4, 0, 0.2, 1)",animation:{"move-down":{start:-8,end:0},"scale-down":{start:.95,end:1}},duration:.2}),Y=n=>{const i=n.match(/cubic-bezier\(([^)]+)\)/);return i?i[1].split(",").map(o=>parseFloat(o.trim())):[.4,0,.2,1]},G=(n,i)=>{B.useEffect(()=>{const o=a=>{const r=a.target;n.every(m=>m.current&&!m.current.contains(r))&&i()};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[n,i])},H=()=>{const[n,i]=f.useState({x:0,y:0}),[o,a]=f.useState(!1),{refs:r,strategy:L,x:m,y:P,update:b}=V({placement:"bottom-start",middleware:[F(8),W()],strategy:"absolute"});f.useEffect(()=>{if(!o||!r.floating.current)return;const u={getBoundingClientRect(){return{width:0,height:0,x:n.x,y:n.y,top:n.y,left:n.x,right:n.x,bottom:n.y}}};r.setReference(u),b()},[o,n,r,b]);const{easing:O,animation:c,duration:q}=X();G([r.floating],()=>{o&&a(!1)});const E=u=>{i({x:u.clientX,y:u.clientY}),a(!0)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-background-secondary flex h-[400px] w-full cursor-pointer items-center justify-center select-none",onClick:E,children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-foreground-primary text-body-medium mb-xs",children:"Click anywhere to open context menu"}),e.jsx("p",{className:"text-foreground-secondary text-body-small",children:"The menu will stay within viewport bounds"})]})}),e.jsx("div",{ref:r.setFloating,style:{position:L,top:P??0,left:m??0,zIndex:1e3},children:e.jsx(_,{children:o&&e.jsx(K.div,{transition:{duration:q,ease:Y(O)},initial:{y:c["move-down"].start,opacity:0,scale:Number(c["scale-down"].start)},animate:{y:c["move-down"].end,opacity:1,scale:Number(c["scale-down"].end)},exit:{y:c["move-down"].start,opacity:0,scale:Number(c["scale-down"].start)},children:e.jsxs(l,{children:[e.jsx(t,{title:"Copy",badge:"⌘C",IconLeft:s,onSelect:()=>{console.log("Copy selected"),a(!1)}}),e.jsx(t,{title:"Paste",badge:"⌘V",IconLeft:s,onSelect:()=>{console.log("Paste selected"),a(!1)}}),e.jsx(t,{title:"Open Submenu",IconLeft:s,IconRight:R,onSelect:()=>{console.log("Submenu selected")}}),e.jsx(t,{title:"Another Item",badge:"⌘M",IconLeft:s,onSelect:()=>{console.log("Another item selected"),a(!1)}}),e.jsx(t,{title:"Last Item",badge:"⌘L",IconLeft:s,onSelect:()=>{console.log("Last item selected"),a(!1)}}),e.jsx("div",{className:"bg-border-secondary my-xs h-px w-full"}),e.jsx(t,{kind:"danger",title:"Delete",badge:"⌘D",IconLeft:d,onSelect:()=>{console.log("Delete selected"),a(!1)}})]})})})})]})},re={title:"WIP Components/ContextMenu",component:t,argTypes:{kind:{control:"inline-radio",options:T},size:{control:"inline-radio",options:A},title:{control:"text"},badge:{control:"text"}}},x={args:{kind:"default",size:"medium",title:"Context Menu Item",badge:"⌘C",IconLeft:s},render:n=>e.jsx(l,{className:"w-[200px]",children:e.jsx(t,{...n})})},g={render:()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-foreground-primary text-body-medium mb-sm",children:"Default Items"}),e.jsxs(l,{className:"w-[200px]",children:[e.jsx(t,{title:"Small Item",size:"small",badge:"⌘S",IconLeft:s}),e.jsx(t,{title:"Medium Item",size:"medium",badge:"⌘M",IconLeft:s}),e.jsx(t,{title:"Large Item",size:"large",badge:"⌘L",IconLeft:s})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-foreground-primary text-body-medium mb-sm",children:"Danger Items"}),e.jsxs(l,{className:"w-[200px]",children:[e.jsx(t,{kind:"danger",title:"Delete Small",size:"small",badge:"⌘⌫",IconLeft:d}),e.jsx(t,{kind:"danger",title:"Delete Medium",size:"medium",badge:"⌘⌫",IconLeft:d}),e.jsx(t,{kind:"danger",title:"Delete Large",size:"large",badge:"⌘⌫",IconLeft:d})]})]})]})},p={render:()=>e.jsx(H,{})},I={render:()=>e.jsxs(l,{className:"w-[200px]",children:[e.jsx(t,{title:"Copy",badge:"⌘C",IconLeft:s}),e.jsx(t,{title:"Paste",badge:"⌘V",IconLeft:s}),e.jsx(t,{title:"More Options",IconLeft:s,IconRight:R}),e.jsx("div",{className:"bg-border-secondary my-xs h-px w-full"}),e.jsx(t,{kind:"danger",title:"Delete",badge:"⌘D",IconLeft:d})]})};var h,C,y;x.parameters={...x.parameters,docs:{...(h=x.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(M=g.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var w,v,N;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ContextMenuDemo />
}`,...(N=(v=p.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var D,z,k;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ContextMenuList className="w-[200px]">
      <ContextMenuListItem title="Copy" badge="⌘C" IconLeft={IconSquareRounded} />
      <ContextMenuListItem title="Paste" badge="⌘V" IconLeft={IconSquareRounded} />
      <ContextMenuListItem title="More Options" IconLeft={IconSquareRounded} IconRight={IconCaretRight} />
      <div className="bg-border-secondary my-xs h-px w-full" />
      <ContextMenuListItem kind="danger" title="Delete" badge="⌘D" IconLeft={IconTrash} />
    </ContextMenuList>
}`,...(k=(z=I.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};const ce=["Playground","AllVariants","InteractiveDemo","WithSubmenuIndicator"];export{g as AllVariants,p as InteractiveDemo,x as Playground,I as WithSubmenuIndicator,ce as __namedExportsOrder,re as default};
