import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{V as O,I as L,W as Y,X as E,Y as i,Z as o}from"./ContextMenuList-l6zkpsAq.js";import{r as m}from"./index-CY-HDqYb.js";import{a as b}from"./index-B-lxVbXh.js";import{O as N}from"./onCardStoryShell-BJaWLAPz.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";import"./v4-CtRu48qb.js";const V=["DD.MM.YYYY","DD-MM-YYYY","YYYY/MM/DD","MM/DD/YYYY"],J={title:"Components/Inputs/DateInput",component:i,argTypes:{kind:{control:"inline-radio",options:E},size:{control:"inline-radio",options:Y},disabled:{control:"boolean"},loading:{control:"boolean"},state:{control:"inline-radio",options:L},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},loadingMessage:{control:"text"},helperText:{control:"text"},label:{control:"text"},dateFormat:{control:"inline-radio",options:V},placeholder:{control:"text"},direction:{control:"inline-radio",options:O}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading...",helperText:"Helper Text"},render:s=>{if(s.kind==="single"){const[e,t]=m.useState(s.value||null);return a.jsx(i,{...s,kind:"single",value:e??null,onChange:r=>{b("onChange")(r),t(r)}})}const[n,l]=m.useState([s.startValue||null,s.endValue||null]);return a.jsx(i,{...s,kind:"range",startValue:n==null?void 0:n[0],endValue:n==null?void 0:n[1],onRangeChange:(e,t)=>{b("onRangeChange")(e,t),l([e,t])}})}},d={args:{id:"playground-date-input",label:"Date",dateFormat:o,kind:"single",size:"medium"}},g={args:{id:"on-card-date-input",label:"Date",dateFormat:o,kind:"single",size:"medium",surface:"onCard"},render:s=>{const[n,l]=m.useState(null);return a.jsx(N,{children:a.jsx(i,{...s,kind:"single",value:n,onChange:e=>{b("onChange")(e),l(e)}})})}},u={args:{id:"single-date-input",label:"Date",dateFormat:o,kind:"single",size:"medium"}},c={args:{id:"range-date-input",label:"Date Range",startLabel:"Start date",endLabel:"End date",kind:"range",size:"medium",direction:"horizontal"}},p={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:s=>{const n=[...Y].reverse().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:"default"},{size:e,loading:!1,disabled:!0,state:"default"},{size:e,loading:!0,disabled:!1,state:"default"},{size:e,loading:!1,disabled:!1,state:"error"},{size:e,loading:!1,disabled:!1,state:"success"}]),l=L;return a.jsx("div",{className:"gap-xlg grid pb-[128px]",style:{display:"grid",gridTemplateColumns:`repeat(${l.length}, minmax(0, 1fr))`},children:n.map((e,t)=>l.map((r,j)=>{const T=`${r}-${e.size}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}-${e.state}`;return a.jsxs("div",{style:{gridColumn:`${j+1} / span 1`,gridRow:`${t+1} / span 1`},children:[s.showLabels&&a.jsxs("p",{className:"typography-body-small text-text",children:["size=",e.size,", state=",r,e.loading?", loading":"",e.disabled?", disabled":"",e.state!=="default"?`, status=${e.state}`:""]}),a.jsxs("div",{className:"gap-sm flex flex-col",children:[a.jsx("div",{className:"pb-[32px]",children:a.jsx(i,{id:`${r}-${e.size}-${t}-empty`,kind:"single",label:"Label",dateFormat:o,helperText:"Helper Text",loadingMessage:"Loading...",errorMessage:"Error Message",successMessage:"Success",warningMessage:"Warning Message",size:e.size,state:e.state,loading:e.loading,disabled:e.disabled,value:null,onChange:()=>{}})}),a.jsx("div",{className:"pb-[32px]",children:a.jsx(i,{id:`${r}-${e.size}-${t}-filled`,kind:"single",label:"Label",dateFormat:o,helperText:"Helper Text",loadingMessage:"Loading...",errorMessage:"Error Message",successMessage:"Success",warningMessage:"Warning Message",size:e.size,state:e.state,loading:e.loading,disabled:e.disabled,value:new Date(2024,11,15),onChange:()=>{}})})]})]},T)}))})}};var x,f,D;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: "playground-date-input",
    label: "Date",
    dateFormat: DateInputDefaultDateFormat,
    kind: "single",
    size: "medium"
  }
}`,...(D=(f=d.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var M,h,v;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: "on-card-date-input",
    label: "Date",
    dateFormat: DateInputDefaultDateFormat,
    kind: "single",
    size: "medium",
    surface: "onCard"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<Date | null>(null);
    return <OnCardStoryShell>
        <DateInput {...args} kind="single" value={value} onChange={date => {
        action("onChange")(date);
        setValue(date);
      }} />
      </OnCardStoryShell>;
  }
}`,...(v=(h=g.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var z,S,$;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    id: "single-date-input",
    label: "Date",
    dateFormat: DateInputDefaultDateFormat,
    kind: "single",
    size: "medium"
  }
}`,...($=(S=u.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var w,y,C;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: "range-date-input",
    label: "Date Range",
    startLabel: "Start date",
    endLabel: "End date",
    kind: "range",
    size: "medium",
    direction: "horizontal"
  }
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,I,F;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  args: {
    showLabels: false
  },
  render: (args: any) => {
    const rows = [...DateInputSizes].reverse().flatMap(size => [{
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
                    <DateInput id={\`\${state}-\${rowConfig.size}-\${rowIndex}-empty\`} kind="single" label="Label" dateFormat={DateInputDefaultDateFormat} helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} value={null} onChange={() => {}} />
                  </div>
                  <div className="pb-[32px]">
                    <DateInput id={\`\${state}-\${rowConfig.size}-\${rowIndex}-filled\`} kind="single" label="Label" dateFormat={DateInputDefaultDateFormat} helperText="Helper Text" loadingMessage="Loading..." errorMessage="Error Message" successMessage="Success" warningMessage="Warning Message" size={rowConfig.size} state={rowConfig.state} loading={rowConfig.loading} disabled={rowConfig.disabled} value={new Date(2024, 11, 15)} onChange={() => {}} />
                  </div>
                </div>
              </div>;
        });
      })}
      </div>;
  }
}`,...(F=(I=p.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};const Q=["Playground","OnCard","Single","Range","Overview"];export{g as OnCard,p as Overview,d as Playground,c as Range,u as Single,Q as __namedExportsOrder,J as default};
