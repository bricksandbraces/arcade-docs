import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bZ as Q,b_ as ee,b$ as l,aU as p,c0 as j,c1 as te,c2 as ne,c3 as se}from"./ContextMenuList-EtAKU-e4.js";import{r as o,R as oe}from"./index-CY-HDqYb.js";import{I as M}from"./IconTrash-epZxuUuM.js";import{I as X}from"./IconCaretRight-BEmUoCPm.js";import{M as re,u as G,P as ie,a as ae,b as ce,L as le,m as de}from"./proxy-D8cSsUJ6.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";class ue extends o.Component{getSnapshotBeforeUpdate(i){const t=this.props.childRef.current;if(t&&i.isPresent&&!this.props.isPresent){const s=t.offsetParent,a=s instanceof HTMLElement&&s.offsetWidth||0,c=this.props.sizeRef.current;c.height=t.offsetHeight||0,c.width=t.offsetWidth||0,c.top=t.offsetTop,c.left=t.offsetLeft,c.right=a-c.width-c.left}return null}componentDidUpdate(){}render(){return this.props.children}}function me({children:n,isPresent:i,anchorX:t}){const s=o.useId(),a=o.useRef(null),c=o.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:m}=o.useContext(re);return o.useInsertionEffect(()=>{const{width:C,height:d,top:I,left:r,right:h}=c.current;if(i||!a.current||!C||!d)return;const x=t==="left"?`left: ${r}`:`right: ${h}`;a.current.dataset.motionPopId=s;const u=document.createElement("style");return m&&(u.nonce=m),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${C}px !important;
            height: ${d}px !important;
            ${x}px !important;
            top: ${I}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[i]),e.jsx(ue,{isPresent:i,childRef:a,sizeRef:c,children:o.cloneElement(n,{ref:a})})}const fe=({children:n,initial:i,isPresent:t,onExitComplete:s,custom:a,presenceAffectsLayout:c,mode:m,anchorX:C})=>{const d=G(xe),I=o.useId(),r=o.useCallback(x=>{d.set(x,!0);for(const u of d.values())if(!u)return;s&&s()},[d,s]),h=o.useMemo(()=>({id:I,initial:i,isPresent:t,custom:a,onExitComplete:r,register:x=>(d.set(x,!1),()=>d.delete(x))}),c?[Math.random(),r]:[t,r]);return o.useMemo(()=>{d.forEach((x,u)=>d.set(u,!1))},[t]),o.useEffect(()=>{!t&&!d.size&&s&&s()},[t]),m==="popLayout"&&(n=e.jsx(me,{isPresent:t,anchorX:C,children:n})),e.jsx(ie.Provider,{value:h,children:n})};function xe(){return new Map}const w=n=>n.key||"";function O(n){const i=[];return o.Children.forEach(n,t=>{o.isValidElement(t)&&i.push(t)}),i}const pe=({children:n,custom:i,initial:t=!0,onExitComplete:s,presenceAffectsLayout:a=!0,mode:c="sync",propagate:m=!1,anchorX:C="left"})=>{const[d,I]=ae(m),r=o.useMemo(()=>O(n),[n]),h=m&&!d?[]:r.map(w),x=o.useRef(!0),u=o.useRef(r),b=G(()=>new Map),[Y,Z]=o.useState(r),[L,E]=o.useState(r);ce(()=>{x.current=!1,u.current=r;for(let g=0;g<L.length;g++){const f=w(L[g]);h.includes(f)?b.delete(f):b.get(f)!==!0&&b.set(f,!1)}},[L,h.length,h.join("-")]);const k=[];if(r!==Y){let g=[...r];for(let f=0;f<L.length;f++){const y=L[f],N=w(y);h.includes(N)||(g.splice(f,0,y),k.push(y))}return c==="wait"&&k.length&&(g=k),E(O(g)),Z(r),null}const{forceRender:D}=o.useContext(le);return e.jsx(e.Fragment,{children:L.map(g=>{const f=w(g),y=m&&!d?!1:r===L||h.includes(f),N=()=>{if(b.has(f))b.set(f,!0);else return;let P=!0;b.forEach(J=>{J||(P=!1)}),P&&(D==null||D(),E(u.current),m&&(I==null||I()),s&&s())};return e.jsx(fe,{isPresent:y,initial:!x.current||t?void 0:!1,custom:i,presenceAffectsLayout:a,mode:c,onExitComplete:y?void 0:N,anchorX:C,children:g},f)})})},he=()=>({easing:"cubic-bezier(0.4, 0, 0.2, 1)",animation:{"move-down":{start:-8,end:0},"scale-down":{start:.95,end:1}},duration:.2}),ge=n=>{const i=n.match(/cubic-bezier\(([^)]+)\)/);return i?i[1].split(",").map(t=>parseFloat(t.trim())):[.4,0,.2,1]},Ie=(n,i)=>{oe.useEffect(()=>{const t=s=>{const a=s.target;n.every(m=>m.current&&!m.current.contains(a))&&i()};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[n,i])},Ce=()=>{const[n,i]=o.useState({x:0,y:0}),[t,s]=o.useState(!1),{refs:a,strategy:c,x:m,y:C,update:d}=te({placement:"bottom-start",middleware:[ne(8),se()],strategy:"absolute"});o.useEffect(()=>{if(!t||!a.floating.current)return;const u={getBoundingClientRect(){return{width:0,height:0,x:n.x,y:n.y,top:n.y,left:n.x,right:n.x,bottom:n.y}}};a.setReference(u),d()},[t,n,a,d]);const{easing:I,animation:r,duration:h}=he();Ie([a.floating],()=>{t&&s(!1)});const x=u=>{i({x:u.clientX,y:u.clientY}),s(!0)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-background-secondary flex h-[400px] w-full cursor-pointer items-center justify-center select-none",onClick:x,children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-foreground-primary text-body-medium mb-xs",children:"Click anywhere to open context menu"}),e.jsx("p",{className:"text-foreground-secondary text-body-small",children:"The menu will stay within viewport bounds"})]})}),e.jsx("div",{ref:a.setFloating,style:{position:c,top:C??0,left:m??0,zIndex:1e3},children:e.jsx(pe,{children:t&&e.jsx(de.div,{transition:{duration:h,ease:ge(I)},initial:{y:r["move-down"].start,opacity:0,scale:Number(r["scale-down"].start)},animate:{y:r["move-down"].end,opacity:1,scale:Number(r["scale-down"].end)},exit:{y:r["move-down"].start,opacity:0,scale:Number(r["scale-down"].start)},children:e.jsxs(j,{children:[e.jsx(l,{title:"Copy",badge:"⌘C",IconLeft:p,onSelect:()=>{console.log("Copy selected"),s(!1)}}),e.jsx(l,{title:"Paste",badge:"⌘V",IconLeft:p,onSelect:()=>{console.log("Paste selected"),s(!1)}}),e.jsx(l,{title:"Open Submenu",IconLeft:p,IconRight:X,onSelect:()=>{console.log("Submenu selected")}}),e.jsx(l,{title:"Another Item",badge:"⌘M",IconLeft:p,onSelect:()=>{console.log("Another item selected"),s(!1)}}),e.jsx(l,{title:"Last Item",badge:"⌘L",IconLeft:p,onSelect:()=>{console.log("Last item selected"),s(!1)}}),e.jsx("div",{className:"bg-border-secondary my-xs h-px w-full"}),e.jsx(l,{kind:"danger",title:"Delete",badge:"⌘D",IconLeft:M,onSelect:()=>{console.log("Delete selected"),s(!1)}})]})})})})]})},ze={title:"WIP Components/ContextMenu",component:l,argTypes:{kind:{control:"inline-radio",options:ee},size:{control:"inline-radio",options:Q},title:{control:"text"},badge:{control:"text"}}},S={args:{kind:"default",size:"medium",title:"Context Menu Item",badge:"⌘C",IconLeft:p},render:n=>e.jsx(j,{className:"w-[200px]",children:e.jsx(l,{...n})})},v={render:()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-foreground-primary text-body-medium mb-sm",children:"Default Items"}),e.jsxs(j,{className:"w-[200px]",children:[e.jsx(l,{title:"Small Item",size:"small",badge:"⌘S",IconLeft:p}),e.jsx(l,{title:"Medium Item",size:"medium",badge:"⌘M",IconLeft:p}),e.jsx(l,{title:"Large Item",size:"large",badge:"⌘L",IconLeft:p})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-foreground-primary text-body-medium mb-sm",children:"Danger Items"}),e.jsxs(j,{className:"w-[200px]",children:[e.jsx(l,{kind:"danger",title:"Delete Small",size:"small",badge:"⌘⌫",IconLeft:M}),e.jsx(l,{kind:"danger",title:"Delete Medium",size:"medium",badge:"⌘⌫",IconLeft:M}),e.jsx(l,{kind:"danger",title:"Delete Large",size:"large",badge:"⌘⌫",IconLeft:M})]})]})]})},R={render:()=>e.jsx(Ce,{})},z={render:()=>e.jsxs(j,{className:"w-[200px]",children:[e.jsx(l,{title:"Copy",badge:"⌘C",IconLeft:p}),e.jsx(l,{title:"Paste",badge:"⌘V",IconLeft:p}),e.jsx(l,{title:"More Options",IconLeft:p,IconRight:X}),e.jsx("div",{className:"bg-border-secondary my-xs h-px w-full"}),e.jsx(l,{kind:"danger",title:"Delete",badge:"⌘D",IconLeft:M})]})};var q,T,$;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...($=(T=S.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var A,V,W;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(V=v.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,_,B;R.parameters={...R.parameters,docs:{...(F=R.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <ContextMenuDemo />
}`,...(B=(_=R.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var K,U,H;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <ContextMenuList className="w-[200px]">
      <ContextMenuListItem title="Copy" badge="⌘C" IconLeft={IconSquareRounded} />
      <ContextMenuListItem title="Paste" badge="⌘V" IconLeft={IconSquareRounded} />
      <ContextMenuListItem title="More Options" IconLeft={IconSquareRounded} IconRight={IconCaretRight} />
      <div className="bg-border-secondary my-xs h-px w-full" />
      <ContextMenuListItem kind="danger" title="Delete" badge="⌘D" IconLeft={IconTrash} />
    </ContextMenuList>
}`,...(H=(U=z.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};const ke=["Playground","AllVariants","InteractiveDemo","WithSubmenuIndicator"];export{v as AllVariants,R as InteractiveDemo,S as Playground,z as WithSubmenuIndicator,ke as __namedExportsOrder,ze as default};
