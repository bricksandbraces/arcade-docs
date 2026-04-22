import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{I as S,a6 as w,bT as t}from"./ContextMenu-BkKyX4kk.js";import"./index-CY-HDqYb.js";import{O as L}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const j={title:"Components/Inputs/TextInput",component:t,argTypes:{size:{control:"inline-radio",options:w},disabled:{control:"boolean"},loading:{control:"boolean"},successMessage:{control:"text"},errorMessage:{control:"text"},hideLabel:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},state:{control:"inline-radio",options:S}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading...",helperText:"Helper Text",id:"playground-text-input",label:"Label",placeholder:"Placeholder text...",size:"medium"}},l={args:{}},r={args:{...j.args,surface:"onCard"},render:a=>s.jsx(L,{children:s.jsx(t,{...a})})},o={args:{id:"slot-text-input",label:"Label",placeholder:"Placeholder text...",trailingSlot:s.jsx("span",{className:"typography-label text-text-accent",children:"ID"})},render:a=>s.jsx(t,{...a})},d={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:a=>{const z=w.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:"default"},{size:e,loading:!1,disabled:!0,state:"default"},{size:e,loading:!0,disabled:!1,state:"default"},{size:e,loading:!1,disabled:!1,state:"error"},{size:e,loading:!1,disabled:!1,state:"success"}]),g=S;return s.jsx("div",{className:"gap-xlg grid pb-[128px]",style:{display:"grid",gridTemplateColumns:`repeat(${g.length}, minmax(0, 1fr))`},children:z.map((e,i)=>g.map((n,T)=>{const I=`${n}-${e.size}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}-${e.state}`;return s.jsxs("div",{style:{gridColumn:`${T+1} / span 1`,gridRow:`${i+1} / span 1`},children:[a.showLabels&&s.jsxs("p",{className:"typography-body-small text-text",children:["size=",e.size,", state=",n,e.loading?", loading":"",e.disabled?", disabled":"",e.state!=="default"?`, status=${e.state}`:""]}),s.jsxs("div",{className:"gap-sm flex flex-col",children:[s.jsx("div",{className:"pb-[32px]",children:s.jsx(t,{id:`${n}-${e.size}-${i}-empty`,label:"Label",placeholder:"Placeholder text...",helperText:"Helper Text",loadingMessage:"Loading...",errorMessage:"Error Message",successMessage:"Success",warningMessage:"Warning Message",size:e.size,state:e.state,loading:e.loading,disabled:e.disabled})}),s.jsx("div",{className:"pb-[32px]",children:s.jsx(t,{id:`${n}-${e.size}-${i}-filled`,label:"Label",placeholder:"Placeholder text...",helperText:"Helper Text",loadingMessage:"Loading...",errorMessage:"Error Message",successMessage:"Success",warningMessage:"Warning Message",size:e.size,state:e.state,loading:e.loading,disabled:e.disabled,value:"john.doe@example.com"})})]})]},I)}))})}};var c,p,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(u=(p=l.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,x,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <TextInput {...args} />
    </OnCardStoryShell>
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,h,M;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "slot-text-input",
    label: "Label",
    placeholder: "Placeholder text...",
    trailingSlot: <span className="typography-label text-text-accent">ID</span>
  },
  render: args => <TextInput {...args} />
}`,...(M=(h=o.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var v,y,$;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    showLabels: false
  },
  render: (args: any) => {
    const rows = InputSizes.toReversed().flatMap(size => [{
      size,
      loading: false,
      disabled: false,
      state: "default" as const
    }, {
      size,
      loading: false,
      disabled: true,
      state: "default" as const
    }, {
      size,
      loading: true,
      disabled: false,
      state: "default" as const
    }, {
      size,
      loading: false,
      disabled: false,
      state: "error" as const
    }, {
      size,
      loading: false,
      disabled: false,
      state: "success" as const
    }]);
    const OverviewStates = InputStates;
    return <div className="gap-xlg grid pb-[128px]" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${OverviewStates.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((rowConfig, rowIndex) => {
        return OverviewStates.map((state, columnIndex) => {
          const key = \`\${state}-\${rowConfig.size}-\${rowConfig.loading ? "loading" : "default"}-\${rowConfig.disabled ? "disabled" : "enabled"}-\${rowConfig.state}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className="typography-body-small text-text">
                    size={rowConfig.size}, state={state}
                    {rowConfig.loading ? ", loading" : ""}
                    {rowConfig.disabled ? ", disabled" : ""}
                    {rowConfig.state !== "default" ? \`, status=\${rowConfig.state}\` : ""}
                  </p>}
                <div className="gap-sm flex flex-col">
                  <div className="pb-[32px]">
                    <TextInput id={\`\${state}-\${rowConfig.size}-\${rowIndex}-empty\`} label="Label" placeholder="Placeholder text..." helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} />
                  </div>
                  <div className="pb-[32px]">
                    <TextInput id={\`\${state}-\${rowConfig.size}-\${rowIndex}-filled\`} label="Label" placeholder="Placeholder text..." helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} value="john.doe@example.com" />
                  </div>
                </div>
              </div>;
        });
      })}
      </div>;
  }
}`,...($=(y=d.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};const W=["Playground","OnCard","Slot","Overview"];export{r as OnCard,d as Overview,l as Playground,o as Slot,W as __namedExportsOrder,j as default};
