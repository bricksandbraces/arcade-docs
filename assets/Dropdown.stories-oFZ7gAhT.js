import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./index-CY-HDqYb.js";import{I as x,$ as w,a0 as d}from"./ContextMenuList-D_gCgxLB.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const y=[{label:"Germany",value:"de"},{label:"France",value:"fr"},{label:"Spain",value:"es"}];function p({id:l,rowConfig:a,filled:n}){const[e,t]=v.useState(n?"de":null);return s.jsx(d,{id:l,label:"Label",title:"Select",size:a.size,disabled:a.disabled,inline:a.inline,state:a.state,value:e,onChange:t,items:y,helperText:"Helper Text",errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Erledigt"})}const E={component:d,title:"Components/Dropdown",args:{title:"Select an option",size:"medium",disabled:!1,inline:!1,fullWidth:!1,items:[{label:"Item 1",value:"item1"},{label:"Item 2",value:"item2"},{label:"Item 3",value:"item3",disabled:!0},{label:"Item 4",value:"item4"},{label:"Item 5",value:"item5"},{label:"Item 6",value:"item6"},{label:"Item 7",value:"item7"},{label:"Item 8",value:"item8"},{label:"Item 9",value:"item9"},{label:"Item 10",value:"item10"}]},argTypes:{size:{control:"inline-radio",options:w},disabled:{control:"boolean"},inline:{control:"boolean"},fullWidth:{control:"boolean"},label:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},helperText:{control:"text"},hideLabel:{control:"boolean"},state:{control:"inline-radio",options:x}},render:l=>{const[a,n]=v.useState(null);return s.jsx(d,{...l,value:a,onChange:n})}},r={args:{id:"playground-dropdown",label:"Select Option",helperText:"Choose one of the available options.",errorMessage:"Error Message",warningMessage:"Warning Message"}},o={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:l=>{const a=w.toReversed().flatMap(e=>[{size:e,disabled:!1,inline:!1,state:"default"},{size:e,disabled:!0,inline:!1,state:"default"},{size:e,disabled:!1,inline:!0,state:"default"},{size:e,disabled:!1,inline:!1,state:"error"},{size:e,disabled:!1,inline:!1,state:"success"}]),n=x;return s.jsx("div",{className:"gap-xlg grid pb-[128px]",style:{display:"grid",gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:a.map((e,t)=>n.map((i,$)=>{const h=`${i}-${e.size}-${e.disabled?"disabled":"enabled"}-${e.state}-${e.inline?"inline":"block"}`;return s.jsxs("div",{style:{gridColumn:`${$+1} / span 1`,gridRow:`${t+1} / span 1`},children:[l.showLabels?s.jsxs("p",{className:"typography-body-small text-text",children:["size=",e.size,", state=",i,e.disabled?", disabled":"",e.inline?", inline":"",e.state!=="default"?`, status=${e.state}`:""]}):null,s.jsxs("div",{className:"gap-sm flex flex-col",children:[s.jsx("div",{className:"pb-[32px]",children:s.jsx(p,{id:`${i}-${e.size}-${t}-empty`,rowConfig:e,filled:!1})}),s.jsx("div",{className:"pb-[32px]",children:s.jsx(p,{id:`${i}-${e.size}-${t}-filled`,rowConfig:e,filled:!0})})]})]},h)}))})}};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: "playground-dropdown",
    label: "Select Option",
    helperText: "Choose one of the available options.",
    errorMessage: "Error Message",
    warningMessage: "Warning Message"
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var b,g,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    showLabels: false
  },
  render: (args: {
    showLabels?: boolean;
  }) => {
    const rows = InputSizes.toReversed().flatMap(size => [{
      size,
      disabled: false,
      inline: false,
      state: "default" as const
    }, {
      size,
      disabled: true,
      inline: false,
      state: "default" as const
    }, {
      size,
      disabled: false,
      inline: true,
      state: "default" as const
    }, {
      size,
      disabled: false,
      inline: false,
      state: "error" as const
    }, {
      size,
      disabled: false,
      inline: false,
      state: "success" as const
    }]);
    const OverviewStates = InputStates;
    return <div className="gap-xlg grid pb-[128px]" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${OverviewStates.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((rowConfig, rowIndex) => {
        return OverviewStates.map((state, columnIndex) => {
          const key = \`\${state}-\${rowConfig.size}-\${rowConfig.disabled ? "disabled" : "enabled"}-\${rowConfig.state}-\${rowConfig.inline ? "inline" : "block"}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels ? <p className="typography-body-small text-text">
                    size={rowConfig.size}, state={state}
                    {rowConfig.disabled ? ", disabled" : ""}
                    {rowConfig.inline ? ", inline" : ""}
                    {rowConfig.state !== "default" ? \`, status=\${rowConfig.state}\` : ""}
                  </p> : null}
                <div className="gap-sm flex flex-col">
                  <div className="pb-[32px]">
                    <DropdownOverviewSlot id={\`\${state}-\${rowConfig.size}-\${rowIndex}-empty\`} rowConfig={rowConfig} filled={false} />
                  </div>
                  <div className="pb-[32px]">
                    <DropdownOverviewSlot id={\`\${state}-\${rowConfig.size}-\${rowIndex}-filled\`} rowConfig={rowConfig} filled />
                  </div>
                </div>
              </div>;
        });
      })}
      </div>;
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const L=["Playground","Overview"];export{o as Overview,r as Playground,L as __namedExportsOrder,E as default};
