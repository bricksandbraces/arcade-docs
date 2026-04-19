import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{$ as d,I as $,aS as o}from"./ContextMenuList-CFtwIFak.js";import"./index-CY-HDqYb.js";import{a as C}from"./index-B-lxVbXh.js";import{O as I}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const _={title:"Components/Inputs/Input",component:o,argTypes:{state:{control:{type:"select"},options:$},size:{control:{type:"select"},options:d}}},s={args:{id:"input","aria-label":"Label",disabled:!1,loading:!1,state:"default",trailingSlot:void 0,placeholder:"Placeholder",onChange:C("onChange")},argTypes:{}},n={args:{...s.args,surface:"onCard"},render:t=>a.jsx(I,{children:a.jsx(o,{...t})})},l={parameters:{controls:{disable:!0}},render:t=>{const h=[{loading:!1,disabled:!1,state:"default"},{loading:!1,disabled:!1,state:"error"},{loading:!1,disabled:!1,state:"warning"},{loading:!1,disabled:!1,state:"success"},{loading:!1,disabled:!1,state:"success",trailingSlot:"Erledigt"},{loading:!0,disabled:!1,state:"default"},{loading:!0,disabled:!0,state:"default"},{loading:!1,disabled:!0,state:"default"}];return a.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${d.length}, minmax(0, 1fr))`},children:h.map((e,w)=>d.map((r,S)=>{const i=`${r}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}-${e.state==="error"?"error":"noerror"}-${e.state==="success"?"success":"nosuccess"}`;return a.jsxs("div",{style:{gridColumn:`${S+1} / span 1`,gridRow:`${w+1} / span 1`},children:[t.showLabels&&a.jsxs("p",{className:"typography-body-small text-text",children:["size=",r,e.loading?", loading":"",e.disabled?", disabled":"",e.state]}),a.jsx("div",{className:"gap-sm flex flex-row",children:a.jsx(o,{id:`${i}-input`,defaultValue:"Text",placeholder:"Placeholder",size:r,loading:e.loading,disabled:e.disabled,state:e.state,className:"w-[192px]"})})]},i)}))})},args:{showLabels:!1}};var g,p,c;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,m,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <Input {...args} />
    </OnCardStoryShell>
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var b,x,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: any) => {
    const rows: {
      loading: boolean;
      disabled: boolean;
      state: InputState;
      trailingSlot?: ReactNode;
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
  },
  args: {
    showLabels: false
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const q=["Playground","OnCard","Overview"];export{n as OnCard,l as Overview,s as Playground,q as __namedExportsOrder,_ as default};
