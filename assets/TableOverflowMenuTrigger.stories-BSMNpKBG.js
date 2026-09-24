import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ps as n,ea as r,i,ys as a}from"./iframe-V2Vd6Pm7.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p;e((()=>{i(),c=t(n(),1),o(),l=a(),u={parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2331-13861`)},component:r,tags:[`autodocs`],title:`Overlays & Menus/OverflowMenu/TableOverflowMenuTrigger`,args:{disabled:!1},argTypes:{disabled:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsx)(r,{...e,open:t,onClick:()=>n(e=>!e)})}},d={},f={render:e=>{let[t,n]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{className:`gap-lg flex items-center`,children:[(0,l.jsx)(`div`,{className:`outline-border size-container-xs outline-1 outline-dashed`,children:(0,l.jsx)(r,{...e,open:t,onClick:()=>n(e=>!e)})}),(0,l.jsx)(`span`,{className:`typography-body-small text-text-secondary`,children:`24 x 24, radius 8px`})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return <div className="gap-lg flex items-center">
        <div className="outline-border size-container-xs outline-1 outline-dashed">
          <TableOverflowMenuTrigger {...args} open={open} onClick={() => setOpen(v => !v)} />
        </div>
        <span className="typography-body-small text-text-secondary">
          24 x 24, radius 8px
        </span>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`A fixed 24x24 square with an 8px radius, independent of the menu item size.
The dashed box marks the expected bounds.`,...f.parameters?.docs?.description}}},p=[`Playground`,`FixedSize`]}))();export{f as FixedSize,d as Playground,p as __namedExportsOrder,u as default};