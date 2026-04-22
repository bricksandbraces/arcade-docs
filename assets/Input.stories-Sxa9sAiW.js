import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{a6 as o,I as N,aO as i}from"./ContextMenu-CxMNWebl.js";import"./index-CY-HDqYb.js";import{a as v}from"./index-B-lxVbXh.js";import{O}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./v4-CtRu48qb.js";const U={title:"Components/Inputs/Input",component:i,argTypes:{state:{control:{type:"select"},options:N},size:{control:{type:"select"},options:o}}},n={args:{id:"input","aria-label":"Label",disabled:!1,loading:!1,state:"default",trailingSlot:void 0,placeholder:"Placeholder",onChange:v("onChange")},argTypes:{}},s={args:{...n.args,id:"slot-input",defaultValue:"123.45",leadingSlot:a.jsx("span",{className:"typography-label text-text-accent inline-flex min-w-[3ch] justify-center",children:"EUR"}),trailingSlot:a.jsx("span",{className:"typography-label text-text-accent inline-flex min-w-[3ch] justify-center",children:"NET"}),trailingSlotPadding:"inset"}},t={args:{...n.args,surface:"onCard"},render:r=>a.jsx(O,{children:a.jsx(i,{...r})})},l={parameters:{controls:{disable:!0}},render:r=>{const $=[{loading:!1,disabled:!1,state:"default"},{loading:!1,disabled:!1,state:"error"},{loading:!1,disabled:!1,state:"warning"},{loading:!1,disabled:!1,state:"success"},{loading:!1,disabled:!1,state:"success",trailingSlot:"Done"},{loading:!0,disabled:!1,state:"default"},{loading:!0,disabled:!0,state:"default"},{loading:!1,disabled:!0,state:"default"}];return a.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${o.length}, minmax(0, 1fr))`},children:$.map((e,j)=>o.map((d,I)=>{const c=`${d}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}-${e.state==="error"?"error":"noerror"}-${e.state==="success"?"success":"nosuccess"}`;return a.jsxs("div",{style:{gridColumn:`${I+1} / span 1`,gridRow:`${j+1} / span 1`},children:[r.showLabels&&a.jsxs("p",{className:"typography-body-small text-text",children:["size=",d,e.loading?", loading":"",e.disabled?", disabled":"",e.state]}),a.jsx("div",{className:"gap-sm flex flex-row",children:a.jsx(i,{id:`${c}-input`,defaultValue:"Text",placeholder:"Placeholder",size:d,loading:e.loading,disabled:e.disabled,state:e.state,className:"w-[192px]"})})]},c)}))})},args:{showLabels:!1}};var g,p,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    id: "slot-input",
    defaultValue: "123.45",
    leadingSlot: <span className="typography-label text-text-accent inline-flex min-w-[3ch] justify-center">
        EUR
      </span>,
    trailingSlot: <span className="typography-label text-text-accent inline-flex min-w-[3ch] justify-center">
        NET
      </span>,
    trailingSlotPadding: "inset"
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,y,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Playground.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <Input {...args} />
    </OnCardStoryShell>
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,w,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      trailingSlot: "Done"
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
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const _=["Playground","Slot","OnCard","Overview"];export{t as OnCard,l as Overview,n as Playground,s as Slot,_ as __namedExportsOrder,U as default};
