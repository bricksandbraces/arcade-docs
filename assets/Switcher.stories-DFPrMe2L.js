import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Do as n,J as r,Oo as i,X as a,Y as o,Z as s,kc as c,ko as l,mc as u,pr as d,q as f,qa as p,t as m}from"./iframe-DIsD1qwU.js";import{n as h,t as g}from"./figmaDesign-DLesXS3c.js";function _(){let[e,t]=v.useState(!0),[n,r]=v.useState(!1),[i,o]=v.useState(``);return(0,y.jsxs)(`div`,{className:`gap-lg flex flex-col items-start`,children:[(0,y.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),children:`Toggle hidden parent`}),(0,y.jsx)(`div`,{hidden:e,"data-testid":`hidden-parent`,children:(0,y.jsxs)(f,{defaultValue:`third`,"aria-label":`Hidden parent`,children:[(0,y.jsx)(a,{value:`first`,children:`First`}),(0,y.jsx)(a,{value:`second`,children:`Second`}),(0,y.jsx)(a,{value:`third`,children:`Third`})]})}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>r(e=>!e),children:`Toggle mounted`}),n&&(0,y.jsx)(`div`,{"data-testid":`mounted`,children:(0,y.jsxs)(f,{defaultValue:`third`,"aria-label":`Mounted later`,children:[(0,y.jsx)(a,{value:`first`,children:`First`}),(0,y.jsx)(a,{value:`second`,children:`Second`}),(0,y.jsx)(a,{value:`third`,children:`Third`})]})}),(0,y.jsx)(`button`,{type:`button`,onClick:()=>o(`third`),children:`Set late value`}),(0,y.jsx)(`div`,{"data-testid":`late-value`,children:(0,y.jsxs)(f,{value:i,onValueChange:o,"aria-label":`Late value`,children:[(0,y.jsx)(a,{value:`first`,children:`First`}),(0,y.jsx)(a,{value:`second`,children:`Second`}),(0,y.jsx)(a,{value:`third`,children:`Third`})]})})]})}var v,y,b,x,S,C,w,T;e((()=>{p(),m(),v=t(c(),1),h(),y=u(),b={title:`Components/Switcher`,component:f,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:r},variant:{control:`inline-radio`,options:o},size:{control:`inline-radio`,options:s},children:{control:{disable:!0},table:{disable:!0}}},parameters:{design:g(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2301-2140`),layout:`padded`,docs:{description:{component:`Segmented control for switching between a small number of related views or modes. Use instead of Tabs for compact toggles.`}}}},x={render:function(e){let[t,r]=v.useState(`day`);return v.useEffect(()=>{r(e.kind===`icon`?`grid`:`day`)},[e.kind]),e.kind===`icon`?(0,y.jsxs)(f,{...e,value:t,onValueChange:r,children:[(0,y.jsx)(a,{value:`list`,"aria-label":`List view`,children:(0,y.jsx)(n,{className:`stroke-icon size-4`})}),(0,y.jsx)(a,{value:`grid`,"aria-label":`Grid view`,children:(0,y.jsx)(l,{className:`stroke-icon size-4`})}),(0,y.jsx)(a,{value:`board`,"aria-label":`Board view`,children:(0,y.jsx)(i,{className:`stroke-icon size-4`})})]}):(0,y.jsxs)(f,{...e,value:t,onValueChange:r,children:[(0,y.jsx)(a,{value:`day`,children:`Day`}),(0,y.jsx)(a,{value:`week`,children:`Week`}),(0,y.jsx)(a,{value:`month`,children:`Month`})]})},args:{kind:`text`,variant:`default`}},S={parameters:{controls:{disable:!0}},render:function(){let[e,t]=v.useState(`day`),[r,o]=v.useState(`grid`);return(0,y.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,y.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,y.jsx)(`p`,{className:`typography-body-small text-text-accent`,children:`Text`}),(0,y.jsxs)(f,{value:e,onValueChange:t,children:[(0,y.jsx)(a,{value:`day`,children:`Day`}),(0,y.jsx)(a,{value:`week`,children:`Week`}),(0,y.jsx)(a,{value:`month`,children:`Month`})]})]}),(0,y.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,y.jsx)(`p`,{className:`typography-body-small text-text-accent`,children:`Icon`}),(0,y.jsxs)(f,{kind:`icon`,value:r,onValueChange:o,children:[(0,y.jsx)(a,{value:`list`,"aria-label":`List view`,children:(0,y.jsx)(n,{className:`stroke-icon size-4`})}),(0,y.jsx)(a,{value:`grid`,"aria-label":`Grid view`,children:(0,y.jsx)(l,{className:`stroke-icon size-4`})}),(0,y.jsx)(a,{value:`board`,"aria-label":`Board view`,children:(0,y.jsx)(i,{className:`stroke-icon size-4`})})]})]}),(0,y.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,y.jsx)(`p`,{className:`typography-body-small text-text-accent`,children:`Plain`}),(0,y.jsxs)(f,{variant:`plain`,value:e,onValueChange:t,children:[(0,y.jsx)(a,{value:`day`,children:`Day`}),(0,y.jsx)(a,{value:`week`,children:`Week`}),(0,y.jsx)(a,{value:`month`,children:`Month`})]})]})]})}},C={render:()=>(0,y.jsx)(_,{}),parameters:{docs:{description:{story:`The indicator appears in place the first time it can be placed, whether the Switcher is revealed, mounted or gets its value late. Only later selection changes animate.`}}}},w={render:()=>(0,y.jsx)(d,{})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    variant: "default"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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

        <div className="gap-sm flex flex-col items-start">
          <p className="typography-body-small text-text-accent">Plain</p>
          <Switcher variant="plain" value={textValue} onValueChange={setTextValue}>
            <SwitcherItem value="day">Day</SwitcherItem>
            <SwitcherItem value="week">Week</SwitcherItem>
            <SwitcherItem value="month">Month</SwitcherItem>
          </Switcher>
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <SwitcherFirstReveal />,
  parameters: {
    docs: {
      description: {
        story: "The indicator appears in place the first time it can be placed, whether the Switcher is revealed, mounted or gets its value late. Only later selection changes animate."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <SwitcherSkeleton />
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`Overview`,`FirstReveal`,`Skeleton`]}))();export{C as FirstReveal,S as Overview,x as Playground,w as Skeleton,T as __namedExportsOrder,b as default};