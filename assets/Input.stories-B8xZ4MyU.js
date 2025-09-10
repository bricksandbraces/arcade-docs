import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./ColorPicker-BjT5yyPB.js";import{I as u,c as l}from"./NumberInput-CRMkQufQ.js";import"./index-0yr9KlQE.js";import{a as x}from"./index-B-lxVbXh.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./index-ChaIqHV-.js";import"./v4-CtRu48qb.js";const P={title:"Components/Input",component:u},r={args:{id:"input","aria-label":"Label",disabled:!1,loading:!1,error:!1,icon:void 0,placeholder:"Placeholder",onChange:x("onChange")},argTypes:{disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},error:{control:{type:"boolean"}}}},s=m=>{const f=[{loading:!1,disabled:!1,error:void 0},{loading:!1,disabled:!1,error:!0},{loading:!1,disabled:!1,error:void 0,successMessage:"Erledigt"},{loading:!0,disabled:!1,error:void 0},{loading:!1,disabled:!0,error:void 0}];return n.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${l.length}, minmax(0, 1fr))`},children:f.map((e,b)=>l.map((a,y)=>{const o=`${a}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}-${e.error?"error":"noerror"}-${e.successMessage?"success":"nosuccess"}`;return n.jsxs("div",{style:{gridColumn:`${y+1} / span 1`,gridRow:`${b+1} / span 1`},children:[m.showLabels&&n.jsxs("p",{className:"typography-body-small text-text",children:["size=",a,e.loading?", loading":"",e.disabled?", disabled":"",e.error?", error":"",e.successMessage?", success":""]}),n.jsx("div",{className:"gap-sm flex flex-row",children:n.jsx(u,{id:`${o}-input`,defaultValue:"Text",placeholder:"Placeholder",size:a,loading:e.loading,disabled:e.disabled,error:e.error,successMessage:e.successMessage,className:"w-[192px]"})})]},o)}))})};s.args={showLabels:!1};s.__docgenInfo={description:"",methods:[],displayName:"Overview"};s.__docgenInfo={description:"",methods:[],displayName:"Overview"};var d,i,t;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: "input",
    "aria-label": "Label",
    disabled: false,
    loading: false,
    error: false,
    icon: undefined,
    placeholder: "Placeholder",
    onChange: action("onChange")
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean"
      }
    },
    loading: {
      control: {
        type: "boolean"
      }
    },
    error: {
      control: {
        type: "boolean"
      }
    }
  }
}`,...(t=(i=r.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var c,p,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(args: any) => {
  const rows = [{
    loading: false,
    disabled: false,
    error: undefined
  }, {
    loading: false,
    disabled: false,
    error: true
  }, {
    loading: false,
    disabled: false,
    error: undefined,
    successMessage: "Erledigt"
  }, {
    loading: true,
    disabled: false,
    error: undefined
  }, {
    loading: false,
    disabled: true,
    error: undefined
  }];
  return <div className="gap-xlg grid" style={{
    display: "grid",
    gridTemplateColumns: \`repeat(\${InputSizes.length}, minmax(0, 1fr))\`
  }}>
      {rows.map((rowConfig, rowIndex) => {
      return InputSizes.map((size, columnIndex) => {
        const key = \`\${size}-\${rowConfig.loading ? "loading" : "default"}-\${rowConfig.disabled ? "disabled" : "enabled"}\` + \`-\${rowConfig.error ? "error" : "noerror"}-\${rowConfig.successMessage ? "success" : "nosuccess"}\`;
        return <div key={key} style={{
          gridColumn: \`\${columnIndex + 1} / span 1\`,
          gridRow: \`\${rowIndex + 1} / span 1\`
        }}>
              {args.showLabels && <p className="typography-body-small text-text">
                  size={size}
                  {rowConfig.loading ? ", loading" : ""}
                  {rowConfig.disabled ? ", disabled" : ""}
                  {rowConfig.error ? ", error" : ""}
                  {rowConfig.successMessage ? ", success" : ""}
                </p>}
              <div className="gap-sm flex flex-row">
                <Input id={\`\${key}-input\`} defaultValue="Text" placeholder="Placeholder" size={size} loading={rowConfig.loading} disabled={rowConfig.disabled} error={rowConfig.error} successMessage={rowConfig.successMessage} className="w-[192px]" />
              </div>
            </div>;
      });
    })}
    </div>;
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const T=["Playground","Overview"];export{s as Overview,r as Playground,T as __namedExportsOrder,P as default};
