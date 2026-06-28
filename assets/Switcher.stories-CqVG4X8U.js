import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{B as n,Dn as r,H as i,Ii as a,Li as o,Ri as s,U as c,V as l,oo as u,t as d,ui as f,xo as p}from"./iframe-Bqr6Ljtx.js";var m,h,g,_,v,y,b;e((()=>{f(),d(),m=t(p(),1),h=u(),g={title:`Navigation/Switcher/Switcher`,component:n,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:l},size:{control:`inline-radio`,options:c},children:{control:{disable:!0},table:{disable:!0}}},parameters:{layout:`padded`,docs:{description:{component:`Segmented control for switching between a small number of related views or modes. Use instead of Tabs for compact toggles.`}}}},_={render:function(e){let[t,r]=m.useState(`day`);return m.useEffect(()=>{r(e.kind===`icon`?`grid`:`day`)},[e.kind]),e.kind===`icon`?(0,h.jsxs)(n,{...e,value:t,onValueChange:r,children:[(0,h.jsx)(i,{value:`list`,"aria-label":`List view`,children:(0,h.jsx)(a,{className:`stroke-icon size-4`})}),(0,h.jsx)(i,{value:`grid`,"aria-label":`Grid view`,children:(0,h.jsx)(s,{className:`stroke-icon size-4`})}),(0,h.jsx)(i,{value:`board`,"aria-label":`Board view`,children:(0,h.jsx)(o,{className:`stroke-icon size-4`})})]}):(0,h.jsxs)(n,{...e,value:t,onValueChange:r,children:[(0,h.jsx)(i,{value:`day`,children:`Day`}),(0,h.jsx)(i,{value:`week`,children:`Week`}),(0,h.jsx)(i,{value:`month`,children:`Month`})]})},args:{kind:`text`,size:`small`}},v={parameters:{controls:{disable:!0}},render:function(){let[e,t]=m.useState(`day`),[r,c]=m.useState(`grid`);return(0,h.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,h.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,h.jsx)(`p`,{className:`typography-body-small text-text-accent`,children:`Text`}),(0,h.jsxs)(n,{value:e,onValueChange:t,children:[(0,h.jsx)(i,{value:`day`,children:`Day`}),(0,h.jsx)(i,{value:`week`,children:`Week`}),(0,h.jsx)(i,{value:`month`,children:`Month`})]})]}),(0,h.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,h.jsx)(`p`,{className:`typography-body-small text-text-accent`,children:`Icon`}),(0,h.jsxs)(n,{kind:`icon`,value:r,onValueChange:c,children:[(0,h.jsx)(i,{value:`list`,"aria-label":`List view`,children:(0,h.jsx)(a,{className:`stroke-icon size-4`})}),(0,h.jsx)(i,{value:`grid`,"aria-label":`Grid view`,children:(0,h.jsx)(s,{className:`stroke-icon size-4`})}),(0,h.jsx)(i,{value:`board`,"aria-label":`Board view`,children:(0,h.jsx)(o,{className:`stroke-icon size-4`})})]})]})]})}},y={render:()=>(0,h.jsx)(r,{})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("day");

    // Keep the selected value aligned with the active kind in controls.
    React.useEffect(() => {
      setValue(args.kind === "icon" ? "grid" : "day");
    }, [args.kind]);
    if (args.kind === "icon") {
      return <Switcher {...args} value={value} onValueChange={setValue}>
          <SwitcherItem value="list" aria-label="List view">
            <IconLayoutList className="stroke-icon size-4" />
          </SwitcherItem>
          <SwitcherItem value="grid" aria-label="Grid view">
            <IconLayoutGrid className="stroke-icon size-4" />
          </SwitcherItem>
          <SwitcherItem value="board" aria-label="Board view">
            <IconLayoutKanban className="stroke-icon size-4" />
          </SwitcherItem>
        </Switcher>;
    }
    return <Switcher {...args} value={value} onValueChange={setValue}>
        <SwitcherItem value="day">Day</SwitcherItem>
        <SwitcherItem value="week">Week</SwitcherItem>
        <SwitcherItem value="month">Month</SwitcherItem>
      </Switcher>;
  },
  args: {
    kind: "text",
    size: "small"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: function Render() {
    const [textValue, setTextValue] = React.useState("day");
    const [iconValue, setIconValue] = React.useState("grid");
    return <div className="gap-xlg flex flex-col items-start">
        <div className="gap-sm flex flex-col items-start">
          <p className="typography-body-small text-text-accent">Text</p>
          <Switcher value={textValue} onValueChange={setTextValue}>
            <SwitcherItem value="day">Day</SwitcherItem>
            <SwitcherItem value="week">Week</SwitcherItem>
            <SwitcherItem value="month">Month</SwitcherItem>
          </Switcher>
        </div>

        <div className="gap-sm flex flex-col items-start">
          <p className="typography-body-small text-text-accent">Icon</p>
          <Switcher kind="icon" value={iconValue} onValueChange={setIconValue}>
            <SwitcherItem value="list" aria-label="List view">
              <IconLayoutList className="stroke-icon size-4" />
            </SwitcherItem>
            <SwitcherItem value="grid" aria-label="Grid view">
              <IconLayoutGrid className="stroke-icon size-4" />
            </SwitcherItem>
            <SwitcherItem value="board" aria-label="Board view">
              <IconLayoutKanban className="stroke-icon size-4" />
            </SwitcherItem>
          </Switcher>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <SwitcherSkeleton />
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Overview`,`Skeleton`]}))();export{v as Overview,_ as Playground,y as Skeleton,b as __namedExportsOrder,g as default};