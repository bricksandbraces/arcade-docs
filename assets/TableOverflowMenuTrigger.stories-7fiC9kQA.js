import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Mo as n,_o as r,pi as i,t as a}from"./iframe-RM7UoaZg.js";var o,s,c,l,u,d;e((()=>{a(),o=t(n(),1),s=r(),c={component:i,tags:[`autodocs`],title:`Overlays & Menus/OverflowMenu/TableOverflowMenuTrigger`,args:{disabled:!1},argTypes:{disabled:{control:{type:`boolean`}}},render:e=>{let[t,n]=(0,o.useState)(!1);return(0,s.jsx)(i,{...e,open:t,onClick:()=>n(e=>!e)})}},l={},u={render:e=>{let[t,n]=(0,o.useState)(!1);return(0,s.jsxs)(`div`,{className:`gap-lg flex items-center`,children:[(0,s.jsx)(`div`,{className:`outline-border size-container-xs outline-1 outline-dashed`,children:(0,s.jsx)(i,{...e,open:t,onClick:()=>n(e=>!e)})}),(0,s.jsx)(`span`,{className:`typography-body-small text-text-secondary`,children:`24 x 24, radius 8px`})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`A fixed 24x24 square with an 8px radius, independent of the menu item size.
The dashed box marks the expected bounds.`,...u.parameters?.docs?.description}}},d=[`Playground`,`FixedSize`]}))();export{u as FixedSize,l as Playground,d as __namedExportsOrder,c as default};