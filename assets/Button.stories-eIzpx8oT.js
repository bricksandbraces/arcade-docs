import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{f as t,g as h,h as l}from"./TextArea-V7Z0Yj8U.js";import"./index-D4lIrffr.js";import{a as x}from"./index-B-lxVbXh.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./borders-N_bRvfGw.js";import"./colors-DFCrPdrr.js";import"./index-C7yw4mlf.js";import"./v4-CtRu48qb.js";const d=o=>{x("onClick")(o)},T={title:"Components/Button",component:t},a={args:{label:"Button",disabled:!1,loading:!1,kind:"primary",size:"medium",IconLeft:void 0,IconRight:void 0,onClick:d},argTypes:{kind:{description:"The kind of button",control:{type:"select"},options:["primary","secondary","tertiary","ghost","danger","primary-danger","tertiary-danger"],defaultValue:"primary"},size:{description:"The size of the button",control:{type:"select"},options:["small","medium","large"],defaultValue:"medium"},onClick:{control:{disable:!0}},IconLeft:{control:{disable:!0}},IconRight:{control:{disable:!0}}}},v=o=>n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:o.className,children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),i=o=>{const f=h.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1},{size:e,loading:!1,disabled:!0},{size:e,loading:!0,disabled:!1}]);return n.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${l.length}, minmax(0, 1fr))`},children:f.map((e,b)=>l.map((s,y)=>{const k=`${s}-${e.size}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}`;return n.jsxs("div",{style:{gridColumn:`${y+1} / span 1`,gridRow:`${b+1} / span 1`},children:[o.showLabels&&n.jsxs("p",{className:"typography-body-small text-text",children:["size=",e.size,", kind=",s,e.loading?", loading":"",e.disabled?", disabled":""]}),n.jsxs("div",{className:"gap-sm flex flex-row",children:[n.jsx(t,{label:"Button",kind:s,size:e.size,loading:e.loading,disabled:e.disabled,onClick:d}),n.jsx(t,{IconLeft:v,kind:s,size:e.size,loading:e.loading,disabled:e.disabled,onClick:d})]})]},k)}))})};i.args={showLabels:!1};i.__docgenInfo={description:"",methods:[],displayName:"Overview"};i.__docgenInfo={description:"",methods:[],displayName:"Overview"};var r,c,m;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: "Button",
    disabled: false,
    loading: false,
    kind: "primary",
    size: "medium",
    IconLeft: undefined,
    IconRight: undefined,
    onClick: clickAction
  },
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
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`(args: any) => {
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
                <Button label="Button" kind={kind} size={rowConfig.size} loading={rowConfig.loading} disabled={rowConfig.disabled} onClick={clickAction}></Button>
                <Button IconLeft={SampleIcon} kind={kind} size={rowConfig.size} loading={rowConfig.loading} disabled={rowConfig.disabled} onClick={clickAction} />
              </div>
            </div>;
      });
    })}
    </div>;
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const _=["Playground","Overview"];export{i as Overview,a as Playground,_ as __namedExportsOrder,T as default};
