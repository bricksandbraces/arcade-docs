import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ar as n,J as r,Mr as i,X as a,Y as o,Z as s,ca as c,cr as l,jr as u,qi as d,t as f}from"./iframe-BmX5hFjR.js";var p,m,h,g,_,v;e((()=>{l(),f(),p=t(c(),1),m=d(),h={title:`Components/Switcher/Switcher`,component:r,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:o},size:{control:`inline-radio`,options:s},children:{control:{disable:!0},table:{disable:!0}}},parameters:{layout:`padded`,docs:{description:{component:`Segmented control for switching between a small number of related views or modes. Use instead of Tabs for compact toggles.`}}}},g={render:function(e){let[t,o]=p.useState(`day`);return p.useEffect(()=>{o(e.kind===`icon`?`grid`:`day`)},[e.kind]),e.kind===`icon`?(0,m.jsxs)(r,{...e,value:t,onValueChange:o,children:[(0,m.jsx)(a,{value:`list`,"aria-label":`List view`,children:(0,m.jsx)(n,{className:`stroke-icon size-4`})}),(0,m.jsx)(a,{value:`grid`,"aria-label":`Grid view`,children:(0,m.jsx)(i,{className:`stroke-icon size-4`})}),(0,m.jsx)(a,{value:`board`,"aria-label":`Board view`,children:(0,m.jsx)(u,{className:`stroke-icon size-4`})})]}):(0,m.jsxs)(r,{...e,value:t,onValueChange:o,children:[(0,m.jsx)(a,{value:`day`,children:`Day`}),(0,m.jsx)(a,{value:`week`,children:`Week`}),(0,m.jsx)(a,{value:`month`,children:`Month`})]})},args:{kind:`text`,size:`small`}},_={parameters:{controls:{disable:!0}},render:function(){let[e,t]=p.useState(`day`),[o,s]=p.useState(`grid`);return(0,m.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,m.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,m.jsx)(`p`,{className:`typography-body-small text-text-accent`,children:`Text`}),(0,m.jsxs)(r,{value:e,onValueChange:t,children:[(0,m.jsx)(a,{value:`day`,children:`Day`}),(0,m.jsx)(a,{value:`week`,children:`Week`}),(0,m.jsx)(a,{value:`month`,children:`Month`})]})]}),(0,m.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,m.jsx)(`p`,{className:`typography-body-small text-text-accent`,children:`Icon`}),(0,m.jsxs)(r,{kind:`icon`,value:o,onValueChange:s,children:[(0,m.jsx)(a,{value:`list`,"aria-label":`List view`,children:(0,m.jsx)(n,{className:`stroke-icon size-4`})}),(0,m.jsx)(a,{value:`grid`,"aria-label":`Grid view`,children:(0,m.jsx)(i,{className:`stroke-icon size-4`})}),(0,m.jsx)(a,{value:`board`,"aria-label":`Board view`,children:(0,m.jsx)(u,{className:`stroke-icon size-4`})})]})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Overview`]}))();export{_ as Overview,g as Playground,v as __namedExportsOrder,h as default};