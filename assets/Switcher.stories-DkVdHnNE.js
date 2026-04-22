import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bv as I,bw as y,bx as n,by as a}from"./ContextMenu-CxMNWebl.js";import{R as o}from"./index-CY-HDqYb.js";import{I as v,a as w,b as p}from"./IconLayoutList-C5atMoB2.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const L={title:"Components/Fabian Supervision/Switcher/Switcher",component:n,argTypes:{kind:{control:"inline-radio",options:y},size:{control:"inline-radio",options:I},children:{control:{disable:!0},table:{disable:!0}}},parameters:{layout:"padded"}},i={render:function(t){const[r,s]=o.useState("day");return o.useEffect(()=>{s(t.kind==="icon"?"grid":"day")},[t.kind]),t.kind==="icon"?e.jsxs(n,{...t,value:r,onValueChange:s,children:[e.jsx(a,{value:"list","aria-label":"List view",children:e.jsx(v,{className:"stroke-icon size-4",stroke:1.5})}),e.jsx(a,{value:"grid","aria-label":"Grid view",children:e.jsx(w,{className:"stroke-icon size-4",stroke:1.5})}),e.jsx(a,{value:"board","aria-label":"Board view",children:e.jsx(p,{className:"stroke-icon size-4",stroke:1.5})})]}):e.jsxs(n,{...t,value:r,onValueChange:s,children:[e.jsx(a,{value:"day",children:"Day"}),e.jsx(a,{value:"week",children:"Week"}),e.jsx(a,{value:"month",children:"Month"})]})},args:{kind:"text",size:"small"}},l={parameters:{controls:{disable:!0}},render:function(){const[t,r]=o.useState("day"),[s,k]=o.useState("grid");return e.jsxs("div",{className:"gap-xlg flex flex-col items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-start",children:[e.jsx("p",{className:"typography-body-small text-text-accent",children:"Text"}),e.jsxs(n,{value:t,onValueChange:r,children:[e.jsx(a,{value:"day",children:"Day"}),e.jsx(a,{value:"week",children:"Week"}),e.jsx(a,{value:"month",children:"Month"})]})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-start",children:[e.jsx("p",{className:"typography-body-small text-text-accent",children:"Icon"}),e.jsxs(n,{kind:"icon",value:s,onValueChange:k,children:[e.jsx(a,{value:"list","aria-label":"List view",children:e.jsx(v,{className:"stroke-icon size-4",stroke:1.5})}),e.jsx(a,{value:"grid","aria-label":"Grid view",children:e.jsx(w,{className:"stroke-icon size-4",stroke:1.5})}),e.jsx(a,{value:"board","aria-label":"Board view",children:e.jsx(p,{className:"stroke-icon size-4",stroke:1.5})})]})]})]})}};var c,d,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = React.useState("day");

    // Keep the selected value aligned with the active kind in controls.
    React.useEffect(() => {
      setValue(args.kind === "icon" ? "grid" : "day");
    }, [args.kind]);
    if (args.kind === "icon") {
      return <Switcher {...args} value={value} onValueChange={setValue}>
          <SwitcherItem value="list" aria-label="List view">
            <IconLayoutList className="stroke-icon size-4" stroke={1.5} />
          </SwitcherItem>
          <SwitcherItem value="grid" aria-label="Grid view">
            <IconLayoutGrid className="stroke-icon size-4" stroke={1.5} />
          </SwitcherItem>
          <SwitcherItem value="board" aria-label="Board view">
            <IconLayoutKanban className="stroke-icon size-4" stroke={1.5} />
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,h,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <IconLayoutList className="stroke-icon size-4" stroke={1.5} />
            </SwitcherItem>
            <SwitcherItem value="grid" aria-label="Grid view">
              <IconLayoutGrid className="stroke-icon size-4" stroke={1.5} />
            </SwitcherItem>
            <SwitcherItem value="board" aria-label="Board view">
              <IconLayoutKanban className="stroke-icon size-4" stroke={1.5} />
            </SwitcherItem>
          </Switcher>
        </div>
      </div>;
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const R=["Playground","Overview"];export{l as Overview,i as Playground,R as __namedExportsOrder,L as default};
