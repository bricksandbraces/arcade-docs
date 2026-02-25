import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as l,g as k,h as r}from"./ContextMenuList-BjZtb4V3.js";import"./index-CY-HDqYb.js";import{a as h}from"./index-B-lxVbXh.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const s=n=>{h("onClick")(n)},N={title:"F/Button",component:l,args:{label:"Button",disabled:!1,loading:!1,kind:"primary",size:"medium",IconLeft:void 0,IconRight:void 0,onClick:s,tooltipContent:"Tooltip text",tooltipPlacement:"bottom"}},i={argTypes:{kind:{description:"The kind of button",control:{type:"select"},options:["primary","secondary","tertiary","ghost","danger","primary-danger","tertiary-danger"],defaultValue:"primary"},size:{description:"The size of the button",control:{type:"select"},options:["small","medium","large"],defaultValue:"medium"},onClick:{control:{disable:!0}},IconLeft:{control:{disable:!0}},IconRight:{control:{disable:!0}}}},C=n=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:n.className,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),a={parameters:{controls:{disable:!0}},render:n=>{const b=k.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1},{size:e,loading:!1,disabled:!0},{size:e,loading:!0,disabled:!1}]);return t.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${r.length}, minmax(0, 1fr))`},children:b.map((e,f)=>r.map((o,y)=>{const x=`${o}-${e.size}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}`;return t.jsxs("div",{style:{gridColumn:`${y+1} / span 1`,gridRow:`${f+1} / span 1`},children:[n.showLabels&&t.jsxs("p",{className:"typography-body-small text-text",children:["size=",e.size,", kind=",o,e.loading?", loading":"",e.disabled?", disabled":""]}),t.jsxs("div",{className:"gap-sm flex flex-row",children:[t.jsx(l,{label:"Button",kind:o,size:e.size,loading:e.loading,disabled:e.disabled,onClick:s,tooltipContent:n.tooltipContent,tooltipPlacement:n.tooltipPlacement}),t.jsx(l,{IconLeft:C,kind:o,size:e.size,loading:e.loading,disabled:e.disabled,onClick:s,tooltipContent:n.tooltipContent,tooltipPlacement:n.tooltipPlacement})]})]},x)}))})},args:{showLabels:!1}};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: {
    kind: {
      description: "The kind of button",
      control: {
        type: "select"
      },
      options: ["primary", "secondary", "tertiary", "ghost", "danger", "primary-danger", "tertiary-danger"],
      defaultValue: "primary"
    },
    size: {
      description: "The size of the button",
      control: {
        type: "select"
      },
      options: ["small", "medium", "large"],
      defaultValue: "medium"
    },
    onClick: {
      control: {
        disable: true
      }
    },
    IconLeft: {
      control: {
        disable: true
      }
    },
    IconRight: {
      control: {
        disable: true
      }
    }
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: any) => {
    const rows = ButtonSizes.toReversed().flatMap(size => [{
      size,
      loading: false,
      disabled: false
    }, {
      size,
      loading: false,
      disabled: true
    }, {
      size,
      loading: true,
      disabled: false
    }]);
    return <div className="gap-xlg grid" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${ButtonKinds.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((rowConfig, rowIndex) => {
        return ButtonKinds.map((kind, columnIndex) => {
          const key = \`\${kind}-\${rowConfig.size}-\${rowConfig.loading ? "loading" : "default"}-\${rowConfig.disabled ? "disabled" : "enabled"}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className="typography-body-small text-text">
                    size={rowConfig.size}, kind={kind}
                    {rowConfig.loading ? ", loading" : ""}
                    {rowConfig.disabled ? ", disabled" : ""}
                  </p>}
                <div className="gap-sm flex flex-row">
                  <Button label="Button" kind={kind} size={rowConfig.size} loading={rowConfig.loading} disabled={rowConfig.disabled} onClick={clickAction} tooltipContent={args.tooltipContent} tooltipPlacement={args.tooltipPlacement} />
                  <Button IconLeft={SampleIcon} kind={kind} size={rowConfig.size} loading={rowConfig.loading} disabled={rowConfig.disabled} onClick={clickAction} tooltipContent={args.tooltipContent} tooltipPlacement={args.tooltipPlacement} />
                </div>
              </div>;
        });
      })}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const R=["Playground","Overview"];export{a as Overview,i as Playground,R as __namedExportsOrder,N as default};
