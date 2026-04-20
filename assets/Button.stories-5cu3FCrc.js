import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{h as s,i as h,j as x}from"./ContextMenuList-BnwLxK8t.js";import"./index-CY-HDqYb.js";import{a as v}from"./index-B-lxVbXh.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const l=n=>{v("onClick")(n)},O={title:"Components/Button",component:s,args:{label:"Button",disabled:!1,loading:!1,kind:"primary",size:"medium",IconLeft:void 0,IconRight:void 0,onClick:l,tooltipContent:"Tooltip text",tooltipPlacement:"bottom"}},i={args:{kind:"primary"},argTypes:{kind:{description:"The kind of button",control:{type:"select"},options:["primary","secondary","tertiary","ghost","primary-danger","tertiary-danger","ghost-danger"],defaultValue:"primary"},size:{description:"The size of the button",control:{type:"select"},options:["small","medium","large"],defaultValue:"medium"},onClick:{control:{disable:!0}},IconLeft:{control:{disable:!0}},IconRight:{control:{disable:!0}}}},w=n=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:n.className,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),a={parameters:{controls:{disable:!0}},render:n=>{const b=h.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1},{size:e,loading:!1,disabled:!0},{size:e,loading:!0,disabled:!1}]),r=x;return t.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${r.length}, minmax(0, 1fr))`},children:b.map((e,f)=>r.map((o,y)=>{const k=`${o}-${e.size}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}`;return t.jsxs("div",{style:{gridColumn:`${y+1} / span 1`,gridRow:`${f+1} / span 1`},children:[n.showLabels&&t.jsxs("p",{className:"typography-body-small text-text",children:["size=",e.size,", kind=",o,e.loading?", loading":"",e.disabled?", disabled":""]}),t.jsxs("div",{className:"gap-sm flex flex-row",children:[t.jsx(s,{label:"Button",kind:o,size:e.size,loading:e.loading,disabled:e.disabled,onClick:l,tooltipContent:n.tooltipContent,tooltipPlacement:n.tooltipPlacement}),t.jsx(s,{kind:o,size:e.size,loading:e.loading,disabled:e.disabled,IconLeft:w,onClick:l,tooltipContent:n.tooltipContent,tooltipPlacement:n.tooltipPlacement})]})]},k)}))})},args:{showLabels:!1}};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    kind: "primary"
  },
  argTypes: {
    kind: {
      description: "The kind of button",
      control: {
        type: "select"
      },
      options: ["primary", "secondary", "tertiary", "ghost", "primary-danger", "tertiary-danger", "ghost-danger"],
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
    const OverviewKinds = ButtonKinds;
    return <div className="gap-xlg grid" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${OverviewKinds.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((rowConfig, rowIndex) => {
        return OverviewKinds.map((kind, columnIndex) => {
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
                  <Button kind={kind} size={rowConfig.size} loading={rowConfig.loading} disabled={rowConfig.disabled} IconLeft={SampleIcon} onClick={clickAction} tooltipContent={args.tooltipContent} tooltipPlacement={args.tooltipPlacement} />
                </div>
              </div>;
        });
      })}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const K=["Playground","Overview"];export{a as Overview,i as Playground,K as __namedExportsOrder,O as default};
