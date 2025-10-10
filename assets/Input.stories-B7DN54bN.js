import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{ao as t,O as y,ap as u}from"./ContextMenuList-Dq92F7hd.js";import"./index-0yr9KlQE.js";import{a as h}from"./index-B-lxVbXh.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const _={title:"F/Inputs/Input",component:u,argTypes:{state:{control:{type:"select"},options:y},size:{control:{type:"select"},options:t}}},n={args:{id:"input","aria-label":"Label",disabled:!1,loading:!1,state:"default",trailingSlot:void 0,placeholder:"Placeholder",onChange:h("onChange")},argTypes:{}},a=f=>{const m=[{loading:!1,disabled:!1,state:"default"},{loading:!1,disabled:!1,state:"error"},{loading:!1,disabled:!1,state:"warning"},{loading:!1,disabled:!1,state:"success"},{loading:!1,disabled:!1,state:"success",trailingSlot:"Erledigt"},{loading:!0,disabled:!1,state:"default"},{loading:!0,disabled:!0,state:"default"},{loading:!1,disabled:!0,state:"default"}];return s.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${t.length}, minmax(0, 1fr))`},children:m.map((e,b)=>t.map((l,x)=>{const d=`${l}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}-${e.state==="error"?"error":"noerror"}-${e.state==="success"?"success":"nosuccess"}`;return s.jsxs("div",{style:{gridColumn:`${x+1} / span 1`,gridRow:`${b+1} / span 1`},children:[f.showLabels&&s.jsxs("p",{className:"typography-body-small text-text",children:["size=",l,e.loading?", loading":"",e.disabled?", disabled":"",e.state]}),s.jsx("div",{className:"gap-sm flex flex-row",children:s.jsx(u,{id:`${d}-input`,defaultValue:"Text",placeholder:"Placeholder",size:l,loading:e.loading,disabled:e.disabled,state:e.state,className:"w-[192px]"})})]},d)}))})};a.args={showLabels:!1};a.__docgenInfo={description:"",methods:[],displayName:"Overview"};a.__docgenInfo={description:"",methods:[],displayName:"Overview"};var i,o,r;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: "input",
    "aria-label": "Label",
    disabled: false,
    loading: false,
    state: "default",
    trailingSlot: undefined,
    placeholder: "Placeholder",
    onChange: action("onChange")
  },
  argTypes: {}
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var g,p,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(args: any) => {
  const rows: {
    loading: boolean;
    disabled: boolean;
    state: InputState;
    trailingSlot?: React.ReactNode;
  }[] = [{
    loading: false,
    disabled: false,
    state: "default"
  }, {
    loading: false,
    disabled: false,
    state: "error"
  }, {
    loading: false,
    disabled: false,
    state: "warning"
  }, {
    loading: false,
    disabled: false,
    state: "success"
  }, {
    loading: false,
    disabled: false,
    state: "success",
    trailingSlot: "Erledigt"
  }, {
    loading: true,
    disabled: false,
    state: "default"
  }, {
    loading: true,
    disabled: true,
    state: "default"
  }, {
    loading: false,
    disabled: true,
    state: "default"
  }];
  return <div className="gap-xlg grid" style={{
    display: "grid",
    gridTemplateColumns: \`repeat(\${InputSizes.length}, minmax(0, 1fr))\`
  }}>
      {rows.map((rowConfig, rowIndex) => {
      return InputSizes.map((size, columnIndex) => {
        const key = \`\${size}-\${rowConfig.loading ? "loading" : "default"}-\${rowConfig.disabled ? "disabled" : "enabled"}\` + \`-\${rowConfig.state === "error" ? "error" : "noerror"}-\${rowConfig.state === "success" ? "success" : "nosuccess"}\`;
        return <div key={key} style={{
          gridColumn: \`\${columnIndex + 1} / span 1\`,
          gridRow: \`\${rowIndex + 1} / span 1\`
        }}>
              {args.showLabels && <p className="typography-body-small text-text">
                  size={size}
                  {rowConfig.loading ? ", loading" : ""}
                  {rowConfig.disabled ? ", disabled" : ""}
                  {rowConfig.state}
                </p>}
              <div className="gap-sm flex flex-row">
                <Input id={\`\${key}-input\`} defaultValue="Text" placeholder="Placeholder" size={size} loading={rowConfig.loading} disabled={rowConfig.disabled} state={rowConfig.state} className="w-[192px]" />
              </div>
            </div>;
      });
    })}
    </div>;
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const O=["Playground","Overview"];export{a as Overview,n as Playground,O as __namedExportsOrder,_ as default};
