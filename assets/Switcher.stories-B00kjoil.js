import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{J as n,Ja as r,K as i,Os as a,Us as o,Xa as s,Y as c,Ya as l,_a as u,ar as d,q as f,t as p}from"./iframe-BrfqoxEp.js";import{n as m,t as h}from"./figmaDesign-DDiUnvXT.js";var g,_,v,y,b,x,S;e((()=>{u(),p(),g=t(o(),1),m(),_=a(),v={title:`Navigation/Switcher/Switcher`,component:i,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:f},size:{control:`inline-radio`,options:c},children:{control:{disable:!0},table:{disable:!0}}},parameters:{design:h(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2301-2140`),layout:`padded`,docs:{description:{component:`Segmented control for switching between a small number of related views or modes. Use instead of Tabs for compact toggles.`}}}},y={render:function(e){let[t,a]=g.useState(`day`);return g.useEffect(()=>{a(e.kind===`icon`?`grid`:`day`)},[e.kind]),e.kind===`icon`?(0,_.jsxs)(i,{...e,value:t,onValueChange:a,children:[(0,_.jsx)(n,{value:`list`,"aria-label":`List view`,children:(0,_.jsx)(r,{className:`stroke-icon size-4`})}),(0,_.jsx)(n,{value:`grid`,"aria-label":`Grid view`,children:(0,_.jsx)(s,{className:`stroke-icon size-4`})}),(0,_.jsx)(n,{value:`board`,"aria-label":`Board view`,children:(0,_.jsx)(l,{className:`stroke-icon size-4`})})]}):(0,_.jsxs)(i,{...e,value:t,onValueChange:a,children:[(0,_.jsx)(n,{value:`day`,children:`Day`}),(0,_.jsx)(n,{value:`week`,children:`Week`}),(0,_.jsx)(n,{value:`month`,children:`Month`})]})},args:{kind:`text`,size:`small`}},b={parameters:{controls:{disable:!0}},render:function(){let[e,t]=g.useState(`day`),[a,o]=g.useState(`grid`);return(0,_.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,_.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,_.jsx)(`p`,{className:`typography-body-small text-text-accent`,children:`Text`}),(0,_.jsxs)(i,{value:e,onValueChange:t,children:[(0,_.jsx)(n,{value:`day`,children:`Day`}),(0,_.jsx)(n,{value:`week`,children:`Week`}),(0,_.jsx)(n,{value:`month`,children:`Month`})]})]}),(0,_.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,_.jsx)(`p`,{className:`typography-body-small text-text-accent`,children:`Icon`}),(0,_.jsxs)(i,{kind:`icon`,value:a,onValueChange:o,children:[(0,_.jsx)(n,{value:`list`,"aria-label":`List view`,children:(0,_.jsx)(r,{className:`stroke-icon size-4`})}),(0,_.jsx)(n,{value:`grid`,"aria-label":`Grid view`,children:(0,_.jsx)(s,{className:`stroke-icon size-4`})}),(0,_.jsx)(n,{value:`board`,"aria-label":`Board view`,children:(0,_.jsx)(l,{className:`stroke-icon size-4`})})]})]})]})}},x={render:()=>(0,_.jsx)(d,{})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <SwitcherSkeleton />
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`Overview`,`Skeleton`]}))();export{b as Overview,y as Playground,x as Skeleton,S as __namedExportsOrder,v as default};