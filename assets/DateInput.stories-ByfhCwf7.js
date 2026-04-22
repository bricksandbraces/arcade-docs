import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{X as H,I as O,Y as E,Z as R,_ as i,$ as o}from"./ContextMenu-BkKyX4kk.js";import{r as b}from"./index-CY-HDqYb.js";import{a as x}from"./index-B-lxVbXh.js";import{O as W}from"./onCardStoryShell-BJaWLAPz.js";import{I as _}from"./IconClockHour4-7wrxc2YF.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./v4-CtRu48qb.js";const P=["DD.MM.YYYY","DD-MM-YYYY","YYYY/MM/DD","MM/DD/YYYY"],ee={title:"Components/Inputs/DateInput",component:i,argTypes:{kind:{control:"inline-radio",options:R},size:{control:"inline-radio",options:E},disabled:{control:"boolean"},loading:{control:"boolean"},state:{control:"inline-radio",options:O},errorMessage:{control:"text"},warningMessage:{control:"text"},successMessage:{control:"text"},loadingMessage:{control:"text"},helperText:{control:"text"},label:{control:"text"},dateFormat:{control:"inline-radio",options:P},placeholder:{control:"text"},direction:{control:"inline-radio",options:H}},args:{errorMessage:"Error Message",warningMessage:"Warning Message",successMessage:"Success",loadingMessage:"Loading...",helperText:"Helper Text"},render:n=>{if(n.kind==="single"){const[e,r]=b.useState(n.value||null);return a.jsx(i,{...n,kind:"single",value:e??null,onChange:l=>{x("onChange")(l),r(l)}})}const[s,t]=b.useState([n.startValue||null,n.endValue||null]);return a.jsx(i,{...n,kind:"range",startValue:s==null?void 0:s[0],endValue:s==null?void 0:s[1],onRangeChange:(e,r)=>{x("onRangeChange")(e,r),t([e,r])}})}},d={args:{id:"playground-date-input",label:"Date",dateFormat:o,kind:"single",size:"medium"}},g={args:{id:"on-card-date-input",label:"Date",dateFormat:o,kind:"single",size:"medium",surface:"onCard"},render:n=>{const[s,t]=b.useState(null);return a.jsx(W,{children:a.jsx(i,{...n,kind:"single",value:s,onChange:e=>{x("onChange")(e),t(e)}})})}},u={args:{id:"single-date-input",label:"Date",dateFormat:o,kind:"single",size:"medium"}},c={args:{id:"range-date-input",label:"Date Range",startLabel:"Start date",endLabel:"End date",kind:"range",size:"medium",direction:"horizontal"}},p={args:{id:"slot-date-input",label:"Date with slot",kind:"single",size:"medium",dateFormat:o,helperText:"External trailing slot appears left of the date picker control."},render:n=>{const[s,t]=b.useState(null);return a.jsx(i,{...n,kind:"single",value:s,onChange:e=>{x("onChange")(e),t(e)},trailingSlot:a.jsx(_,{"aria-hidden":!0,className:"stroke-icon-accent size-4",stroke:1.5})})}},m={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:n=>{const s=[...E].reverse().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:"default"},{size:e,loading:!1,disabled:!0,state:"default"},{size:e,loading:!0,disabled:!1,state:"default"},{size:e,loading:!1,disabled:!1,state:"error"},{size:e,loading:!1,disabled:!1,state:"success"}]),t=O;return a.jsx("div",{className:"gap-xlg grid pb-[128px]",style:{display:"grid",gridTemplateColumns:`repeat(${t.length}, minmax(0, 1fr))`},children:s.map((e,r)=>t.map((l,N)=>{const V=`${l}-${e.size}-${e.loading?"loading":"default"}-${e.disabled?"disabled":"enabled"}-${e.state}`;return a.jsxs("div",{style:{gridColumn:`${N+1} / span 1`,gridRow:`${r+1} / span 1`},children:[n.showLabels&&a.jsxs("p",{className:"typography-body-small text-text",children:["size=",e.size,", state=",l,e.loading?", loading":"",e.disabled?", disabled":"",e.state!=="default"?`, status=${e.state}`:""]}),a.jsxs("div",{className:"gap-sm flex flex-col",children:[a.jsx("div",{className:"pb-[32px]",children:a.jsx(i,{id:`${l}-${e.size}-${r}-empty`,kind:"single",label:"Label",dateFormat:o,helperText:"Helper Text",loadingMessage:"Loading...",errorMessage:"Error Message",successMessage:"Success",warningMessage:"Warning Message",size:e.size,state:e.state,loading:e.loading,disabled:e.disabled,value:null,onChange:()=>{}})}),a.jsx("div",{className:"pb-[32px]",children:a.jsx(i,{id:`${l}-${e.size}-${r}-filled`,kind:"single",label:"Label",dateFormat:o,helperText:"Helper Text",loadingMessage:"Loading...",errorMessage:"Error Message",successMessage:"Success",warningMessage:"Warning Message",size:e.size,state:e.state,loading:e.loading,disabled:e.disabled,value:new Date(2024,11,15),onChange:()=>{}})})]})]},V)}))})}};var f,D,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "playground-date-input",
    label: "Date",
    dateFormat: DateInputDefaultDateFormat,
    kind: "single",
    size: "medium"
  }
}`,...(h=(D=d.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var v,M,S;g.parameters={...g.parameters,docs:{...(v=g.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(M=g.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var k,z,C;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: "single-date-input",
    label: "Date",
    dateFormat: DateInputDefaultDateFormat,
    kind: "single",
    size: "medium"
  }
}`,...(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var $,w,I;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    id: "range-date-input",
    label: "Date Range",
    startLabel: "Start date",
    endLabel: "End date",
    kind: "range",
    size: "medium",
    direction: "horizontal"
  }
}`,...(I=(w=c.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var y,F,L;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    id: "slot-date-input",
    label: "Date with slot",
    kind: "single",
    size: "medium",
    dateFormat: DateInputDefaultDateFormat,
    helperText: "External trailing slot appears left of the date picker control."
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<Date | null>(null);
    return <DateInput {...args} kind="single" value={value} onChange={date => {
      action("onChange")(date);
      setValue(date);
    }} trailingSlot={<IconClockHour4 aria-hidden className="stroke-icon-accent size-4" stroke={1.5} />} />;
  }
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var Y,j,T;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(T=(j=m.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const ae=["Playground","OnCard","Single","Range","Slot","Overview"];export{g as OnCard,m as Overview,d as Playground,c as Range,u as Single,p as Slot,ae as __namedExportsOrder,ee as default};
