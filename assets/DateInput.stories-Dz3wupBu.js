import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bt as n,Di as r,En as i,Hi as a,Ht as o,Or as s,Rt as c,Vt as l,qn as u,t as d,zt as f}from"./iframe-BK1IgQO6.js";import{n as p,t as m}from"./onCardStoryShell-BefFPNKk.js";var h,g,_,v,y,b,x,S,C,w,T;e((()=>{d(),h=t(a(),1),u(),p(),g=r(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v={title:`Components/Inputs/DateInput`,component:c,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:l},size:{control:`inline-radio`,options:o},disabled:{control:`boolean`},loading:{control:`boolean`},state:{control:`inline-radio`,options:i},errorMessage:{control:`text`},warningMessage:{control:`text`},successMessage:{control:`text`},loadingMessage:{control:`text`},helperText:{control:`text`},label:{control:`text`},dateFormat:{control:`inline-radio`,options:[`DD.MM.YYYY`,`DD-MM-YYYY`,`YYYY/MM/DD`,`MM/DD/YYYY`]},placeholder:{control:`text`},direction:{control:`inline-radio`,options:n}},args:{errorMessage:`Error Message`,warningMessage:`Warning Message`,successMessage:`Success`,loadingMessage:`Loading...`,helperText:`Helper Text`},parameters:{docs:{description:{component:`Text input paired with a Calendar popover for picking a single date or range. Use for form fields that capture dates.`}}},render:e=>{if(e.kind===`single`){let[t,n]=(0,h.useState)(e.value||null);return(0,g.jsx)(c,{...e,kind:`single`,value:t??null,onChange:e=>{_(`onChange`)(e),n(e)}})}let[t,n]=(0,h.useState)([e.startValue||null,e.endValue||null]);return(0,g.jsx)(c,{...e,kind:`range`,startValue:t?.[0],endValue:t?.[1],onRangeChange:(e,t)=>{_(`onRangeChange`)(e,t),n([e,t])}})}},y={args:{id:`playground-date-input`,label:`Date`,dateFormat:f,kind:`single`,size:`medium`}},b={args:{id:`on-card-date-input`,label:`Date`,dateFormat:f,kind:`single`,size:`medium`,surface:`onCard`},render:e=>{let[t,n]=(0,h.useState)(null);return(0,g.jsx)(m,{children:(0,g.jsx)(c,{...e,kind:`single`,value:t,onChange:e=>{_(`onChange`)(e),n(e)}})})}},x={args:{id:`single-date-input`,label:`Date`,dateFormat:f,kind:`single`,size:`medium`}},S={args:{id:`range-date-input`,label:`Date Range`,startLabel:`Start date`,endLabel:`End date`,kind:`range`,size:`medium`,direction:`horizontal`}},C={args:{id:`slot-date-input`,label:`Date with slot`,kind:`single`,size:`medium`,dateFormat:f,helperText:`External trailing slot appears left of the date picker control.`},render:e=>{let[t,n]=(0,h.useState)(null);return(0,g.jsx)(c,{...e,kind:`single`,value:t,onChange:e=>{_(`onChange`)(e),n(e)},trailingSlot:(0,g.jsx)(s,{"aria-hidden":!0,className:`stroke-icon-accent size-4`,stroke:1.5})})}},w={parameters:{controls:{disable:!0}},args:{showLabels:!1},render:e=>{let t=[...o].reverse().flatMap(e=>[{size:e,loading:!1,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!0,state:`default`},{size:e,loading:!0,disabled:!1,state:`default`},{size:e,loading:!1,disabled:!1,state:`error`},{size:e,loading:!1,disabled:!1,state:`success`}]),n=i;return(0,g.jsx)(`div`,{className:`gap-xlg grid pb-[128px]`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:t.map((t,r)=>n.map((n,i)=>{let a=`${n}-${t.size}-${t.loading?`loading`:`default`}-${t.disabled?`disabled`:`enabled`}-${t.state}`;return(0,g.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,g.jsxs)(`p`,{className:`typography-body-small text-text`,children:[`size=`,t.size,`, state=`,n,t.loading?`, loading`:``,t.disabled?`, disabled`:``,t.state===`default`?``:`, status=${t.state}`]}),(0,g.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,g.jsx)(`div`,{className:`pb-[32px]`,children:(0,g.jsx)(c,{id:`${n}-${t.size}-${r}-empty`,kind:`single`,label:`Label`,dateFormat:f,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled,value:null,onChange:()=>{}})}),(0,g.jsx)(`div`,{className:`pb-[32px]`,children:(0,g.jsx)(c,{id:`${n}-${t.size}-${r}-filled`,kind:`single`,label:`Label`,dateFormat:f,helperText:`Helper Text`,loadingMessage:`Loading...`,errorMessage:`Error Message`,successMessage:`Success`,warningMessage:`Warning Message`,size:t.size,state:t.state,loading:t.loading,disabled:t.disabled,value:new Date(2024,11,15),onChange:()=>{}})})]})]},a)}))})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: "playground-date-input",
    label: "Date",
    dateFormat: DateInputDefaultDateFormat,
    kind: "single",
    size: "medium"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: "single-date-input",
    label: "Date",
    dateFormat: DateInputDefaultDateFormat,
    kind: "single",
    size: "medium"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    id: "range-date-input",
    label: "Date Range",
    startLabel: "Start date",
    endLabel: "End date",
    kind: "range",
    size: "medium",
    direction: "horizontal"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`OnCard`,`Single`,`Range`,`Slot`,`Overview`]}))();export{b as OnCard,w as Overview,y as Playground,S as Range,x as Single,C as Slot,T as __namedExportsOrder,v as default};