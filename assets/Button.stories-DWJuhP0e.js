import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{f as l,g as h,h as d}from"./ContextMenuList-iLopGvLG.js";import"./index-0yr9KlQE.js";import{a as k}from"./index-B-lxVbXh.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const s=n=>{k("onClick")(n)},T={title:"F/Button",component:l,args:{label:"Button",disabled:!1,loading:!1,kind:"primary",size:"medium",IconLeft:void 0,IconRight:void 0,onClick:s,tooltipContent:"Tooltip text",tooltipPlacement:"bottom"}},a={argTypes:{kind:{description:"The kind of button",control:{type:"select"},options:["primary","secondary","tertiary","ghost","danger","primary-danger","tertiary-danger"],defaultValue:"primary"},size:{description:"The size of the button",control:{type:"select"},options:["small","medium","large"],defaultValue:"medium"},onClick:{control:{disable:!0}},IconLeft:{control:{disable:!0}},IconRight:{control:{disable:!0}}}},v=n=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:n.className,children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),o=n=>{const b=h.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1},{size:e,loading:!1,disabled:!0},{size:e,loading:!0,disabled:!1}]);return t.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${d.length}, minmax(0, 1fr))`},children:b.map((e,f)=>d.map((i,y)=>{const x=`${i}-${e.size}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}`;return t.jsxs("div",{style:{gridColumn:`${y+1} / span 1`,gridRow:`${f+1} / span 1`},children:[n.showLabels&&t.jsxs("p",{className:"typography-body-small text-text",children:["size=",e.size,", kind=",i,e.loading?", loading":"",e.disabled?", disabled":""]}),t.jsxs("div",{className:"gap-sm flex flex-row",children:[t.jsx(l,{label:"Button",kind:i,size:e.size,loading:e.loading,disabled:e.disabled,onClick:s,tooltipContent:n.tooltipContent,tooltipPlacement:n.tooltipPlacement}),t.jsx(l,{IconLeft:v,kind:i,size:e.size,loading:e.loading,disabled:e.disabled,onClick:s,tooltipContent:n.tooltipContent,tooltipPlacement:n.tooltipPlacement})]})]},x)}))})};o.args={showLabels:!1};o.__docgenInfo={description:"",methods:[],displayName:"Overview"};o.__docgenInfo={description:"",methods:[],displayName:"Overview"};var r,c,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`(args: any) => {
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
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const R=["Playground","Overview"];export{o as Overview,a as Playground,R as __namedExportsOrder,T as default};
