import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{I as M,$ as v,bK as l}from"./ContextMenuList-CrHLZopD.js";import"./index-CY-HDqYb.js";import{O as z}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const S={title:"Components/Inputs/TextInput",component:l,argTypes:{size:{control:"inline-radio",options:v},disabled:{control:"boolean"},loading:{control:"boolean"},successMessage:{control:"text"},errorMessage:{control:"text"},hideLabel:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},state:{control:"inline-radio",options:M}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading...",helperText:"Helper Text",id:"playground-text-input",label:"Label",placeholder:"Placeholder text...",size:"medium"}},n={args:{}},t={args:{...S.args,surface:"onCard"},render:d=>s.jsx(z,{children:s.jsx(l,{...d})})},r={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:d=>{const $=v.toReversed().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:"default"},{size:e,loading:!1,disabled:!0,state:"default"},{size:e,loading:!0,disabled:!1,state:"default"},{size:e,loading:!1,disabled:!1,state:"error"},{size:e,loading:!1,disabled:!1,state:"success"}]),i=M;return s.jsx("div",{className:"gap-xlg grid pb-[128px]",style:{display:"grid",gridTemplateColumns:`repeat(${i.length}, minmax(0, 1fr))`},children:$.map((e,o)=>i.map((a,y)=>{const w=`${a}-${e.size}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}-${e.state}`;return s.jsxs("div",{style:{gridColumn:`${y+1} / span 1`,gridRow:`${o+1} / span 1`},children:[d.showLabels&&s.jsxs("p",{className:"typography-body-small text-text",children:["size=",e.size,", state=",a,e.loading?", loading":"",e.disabled?", disabled":"",e.state!=="default"?`, status=${e.state}`:""]}),s.jsxs("div",{className:"gap-sm flex flex-col",children:[s.jsx("div",{className:"pb-[32px]",children:s.jsx(l,{id:`${a}-${e.size}-${o}-empty`,label:"Label",placeholder:"Placeholder text...",helperText:"Helper Text",loadingMessage:"Loading...",errorMessage:"Error Message",successMessage:"Success",warningMessage:"Warning Message",size:e.size,state:e.state,loading:e.loading,disabled:e.disabled})}),s.jsx("div",{className:"pb-[32px]",children:s.jsx(l,{id:`${a}-${e.size}-${o}-filled`,label:"Label",placeholder:"Placeholder text...",helperText:"Helper Text",loadingMessage:"Loading...",errorMessage:"Error Message",successMessage:"Success",warningMessage:"Warning Message",size:e.size,state:e.state,loading:e.loading,disabled:e.disabled,value:"john.doe@example.com"})})]})]},w)}))})}};var g,c,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...meta.args,
    surface: "onCard"
  },
  render: args => <OnCardStoryShell>
      <TextInput {...args} />
    </OnCardStoryShell>
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,f,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const R=["Playground","OnCard","Overview"];export{t as OnCard,r as Overview,n as Playground,R as __namedExportsOrder,S as default};
