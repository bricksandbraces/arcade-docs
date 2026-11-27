import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Et as n,Gi as r,Ki as i,Kt as a,Qt as o,Sa as s,St as c,Vc as l,Wt as u,Zi as d,Zt as f,jt as p,nc as m,nl as h,t as g,wn as _,wt as v,xt as y}from"./iframe-aH2b30P3.js";function b({initial:e,children:t}){let[n,r]=(0,S.useState)(e);return(0,C.jsx)(C.Fragment,{children:t(n,r)})}function x({children:e}){return(0,C.jsx)(`div`,{className:`gap-2xlg p-2xlg flex w-fit max-w-full flex-col`,children:s.map(t=>(0,C.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,C.jsx)(`span`,{className:`typography-label text-text-accent`,children:t}),e(t)]},t))})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{S=t(h(),1),g(),C=l(),w={title:`Components/AI Status`,parameters:{a11y:{test:`off`},docs:{description:{component:"`aiStatus` marks a field an AI is working on. `generating`: brand border, a\nglow travelling along it and a shimmer wiping across the text. `generated`:\nthe glow settles into a faint halo, the brand border stays.\n\nOne story per field component, each showing both statuses. Hovering a\n`generated` field shows a tooltip; editing it drops the status."}}}},T=()=>void 0,E=[{value:`flow`,label:`Morning Flow`},{value:`power`,label:`Power Yoga`},{value:`yin`,label:`Yin Yoga`}],D=4e3,O={render:()=>(0,C.jsx)(()=>{let[e,t]=(0,S.useState)(),[n,i]=(0,S.useState)(`Yoga`);return(0,S.useEffect)(()=>{if(e!==`generating`)return;let n=window.setTimeout(()=>{i(`Morning Flow`),t(`generated`)},D);return()=>window.clearTimeout(n)},[e]),(0,C.jsxs)(`div`,{className:`gap-xlg p-2xlg flex flex-col`,children:[(0,C.jsx)(r,{id:`ai-lifecycle`,label:`Course name`,aiStatus:e,value:n,onChange:n=>{i(n.target.value),e===`generated`&&t(void 0)},reserveInlineNotificationHeight:!1}),(0,C.jsxs)(`div`,{className:`gap-sm flex`,children:[(0,C.jsx)(m,{label:`Improve with AI`,disabled:e===`generating`,onClick:()=>t(`generating`)}),(0,C.jsx)(m,{kind:`secondary`,label:`Accept`,disabled:e!==`generated`,onClick:()=>t(void 0)})]})]})},{})},k={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(r,{id:`ai-text-input-${e}`,label:`Course name`,aiStatus:e,defaultValue:`Morning Flow`,reserveInlineNotificationHeight:!1})})},A={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(p,{id:`ai-text-area-${e}`,label:`Description`,aiStatus:e,defaultValue:`A calm start into the day with breath work.`,reserveInlineNotificationHeight:!1})})},j={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(u,{id:`ai-password-input-${e}`,label:`Access code`,aiStatus:e,defaultValue:`morning-flow`,defaultVisible:!0,reserveInlineNotificationHeight:!1})})},M={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(b,{initial:12,children:(t,n)=>(0,C.jsx)(v,{id:`ai-number-input-${e}`,label:`Participants`,aiStatus:e,value:t,onValueChange:n,reserveInlineNotificationHeight:!1})})})},N={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(b,{initial:90,children:(t,n)=>(0,C.jsx)(c,{id:`ai-time-input-${e}`,label:`Duration`,aiStatus:e,value:t,onValueChange:n,reserveInlineNotificationHeight:!1})})})},P={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(b,{initial:new Date(2026,10,12),children:(t,n)=>(0,C.jsx)(a,{id:`ai-date-input-${e}`,kind:`single`,label:`Start date`,aiStatus:e,value:t,onChange:n})})})},F={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(y,{id:`ai-color-input-${e}`,label:`Accent colour`,aiStatus:e,defaultValue:`#6366F1`,reserveInlineNotificationHeight:!1})})},I={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(b,{initial:`Kastanienallee 12`,children:(t,n)=>(0,C.jsx)(o,{id:`ai-address-input-${e}`,label:`Studio address`,aiStatus:e,value:t,suggestions:[],onSuggestionSelect:T,onChange:e=>n(e.target.value),reserveInlineNotificationHeight:!1})})})},L={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(_,{id:`ai-search-${e}`,aiStatus:e,defaultValue:`Morning Flow`})})},R={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(f,{id:`ai-input-group-${e}`,label:`Booking link`,prefix:`https://`,suffix:`.com`,aiStatus:e,defaultValue:`orapulse`,reserveInlineNotificationHeight:!1})})},z={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(b,{initial:`flow`,children:(t,n)=>(0,C.jsx)(i,{id:`ai-select-${e}`,label:`Course`,aiStatus:e,options:E,value:t,onChange:n,reserveInlineNotificationHeight:!1})})})},B={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(b,{initial:`flow`,children:(t,n)=>(0,C.jsx)(d,{label:`Course`,title:`Select a course`,size:`medium`,aiStatus:e,items:E,value:t,onChange:n})})})},V={render:()=>(0,C.jsx)(x,{children:e=>(0,C.jsx)(b,{initial:3,children:(t,r)=>(0,C.jsx)(n,{id:`ai-number-dropdown-${e}`,label:`Sessions per week`,aiStatus:e,value:t,min:1,max:7,onChange:r,reserveInlineNotificationHeight:!1})})})},H=[`error`,`warning`],U={render:()=>(0,C.jsx)(`div`,{className:`gap-2xlg p-2xlg flex w-fit max-w-full flex-col`,children:H.map(e=>(0,C.jsxs)(`div`,{className:`gap-xlg flex flex-col`,children:[(0,C.jsx)(r,{id:`ai-${e}-text-input`,label:`Text input, ${e}`,aiStatus:`generated`,state:e,errorMessage:`Error message`,warningMessage:`Warning message`,defaultValue:`Morning Flow`}),(0,C.jsx)(i,{id:`ai-${e}-select`,label:`Select, ${e}`,aiStatus:`generated`,state:e,errorMessage:`Error message`,warningMessage:`Warning message`,options:E,value:`flow`,onChange:T})]},e))})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Demo = () => {
      const [aiStatus, setAIStatus] = useState<InputAIStatus | undefined>();
      const [value, setValue] = useState("Yoga");

      // Stand-in for the model response arriving after a while
      useEffect(() => {
        if (aiStatus !== "generating") return undefined;
        const timeout = window.setTimeout(() => {
          setValue("Morning Flow");
          setAIStatus("generated");
        }, GENERATION_MS);
        return () => window.clearTimeout(timeout);
      }, [aiStatus]);
      return <div className="gap-xlg p-2xlg flex flex-col">
          <TextInputField id="ai-lifecycle" label="Course name" aiStatus={aiStatus} value={value} onChange={event => {
          setValue(event.target.value);
          // The field drops the status on its own; keep the story in sync.
          if (aiStatus === "generated") setAIStatus(undefined);
        }} reserveInlineNotificationHeight={false} />
          <div className="gap-sm flex">
            <Button label="Improve with AI" disabled={aiStatus === "generating"} onClick={() => setAIStatus("generating")} />
            <Button kind="secondary" label="Accept" disabled={aiStatus !== "generated"} onClick={() => setAIStatus(undefined)} />
          </div>
        </div>;
    };
    return <Demo />;
  }
}`,...O.parameters?.docs?.source},description:{story:`Runs the full sequence: idle, generating, generated, then accepted or edited.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <TextInputField id={\`ai-text-input-\${aiStatus}\`} label="Course name" aiStatus={aiStatus} defaultValue="Morning Flow" reserveInlineNotificationHeight={false} />}
    </BothStatuses>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <TextAreaField id={\`ai-text-area-\${aiStatus}\`} label="Description" aiStatus={aiStatus} defaultValue="A calm start into the day with breath work." reserveInlineNotificationHeight={false} />}
    </BothStatuses>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <PasswordInputField id={\`ai-password-input-\${aiStatus}\`} label="Access code" aiStatus={aiStatus} defaultValue="morning-flow" defaultVisible reserveInlineNotificationHeight={false} />}
    </BothStatuses>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <WithValue<number | undefined> initial={12}>
          {(value, setValue) => <NumberInputField id={\`ai-number-input-\${aiStatus}\`} label="Participants" aiStatus={aiStatus} value={value} onValueChange={setValue} reserveInlineNotificationHeight={false} />}
        </WithValue>}
    </BothStatuses>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <WithValue<number | undefined> initial={90}>
          {(value, setValue) => <TimeInputField id={\`ai-time-input-\${aiStatus}\`} label="Duration" aiStatus={aiStatus} value={value} onValueChange={setValue} reserveInlineNotificationHeight={false} />}
        </WithValue>}
    </BothStatuses>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <WithValue<Date | null> initial={new Date(2026, 10, 12)}>
          {(value, setValue) => <DateInputField id={\`ai-date-input-\${aiStatus}\`} kind="single" label="Start date" aiStatus={aiStatus} value={value} onChange={setValue} />}
        </WithValue>}
    </BothStatuses>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <ColorInputField id={\`ai-color-input-\${aiStatus}\`} label="Accent colour" aiStatus={aiStatus} defaultValue="#6366F1" reserveInlineNotificationHeight={false} />}
    </BothStatuses>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <WithValue initial="Kastanienallee 12">
          {(value, setValue) => <AddressInputField id={\`ai-address-input-\${aiStatus}\`} label="Studio address" aiStatus={aiStatus} value={value} suggestions={[]} onSuggestionSelect={noop} onChange={event => setValue(event.target.value)} reserveInlineNotificationHeight={false} />}
        </WithValue>}
    </BothStatuses>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <SearchField id={\`ai-search-\${aiStatus}\`} aiStatus={aiStatus} defaultValue="Morning Flow" />}
    </BothStatuses>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <InputGroupField id={\`ai-input-group-\${aiStatus}\`} label="Booking link" prefix="https://" suffix=".com" aiStatus={aiStatus} defaultValue="orapulse" reserveInlineNotificationHeight={false} />}
    </BothStatuses>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <WithValue initial="flow">
          {(value, setValue) => <SelectField id={\`ai-select-\${aiStatus}\`} label="Course" aiStatus={aiStatus} options={courseOptions} value={value} onChange={setValue} reserveInlineNotificationHeight={false} />}
        </WithValue>}
    </BothStatuses>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <WithValue<string | null> initial="flow">
          {(value, setValue) => <DropdownField label="Course" title="Select a course" size="medium" aiStatus={aiStatus} items={courseOptions} value={value} onChange={setValue} />}
        </WithValue>}
    </BothStatuses>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <BothStatuses>
      {aiStatus => <WithValue<number | null> initial={3}>
          {(value, setValue) => <NumberDropdownField id={\`ai-number-dropdown-\${aiStatus}\`} label="Sessions per week" aiStatus={aiStatus} value={value} min={1} max={7} onChange={setValue} reserveInlineNotificationHeight={false} />}
        </WithValue>}
    </BothStatuses>
}`,...V.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="gap-2xlg p-2xlg flex w-fit max-w-full flex-col">\n      {fieldStates.map(state => <div key={state} className="gap-xlg flex flex-col">\n          <TextInputField id={`ai-${state}-text-input`} label={`Text input, ${state}`} aiStatus="generated" state={state} errorMessage="Error message" warningMessage="Warning message" defaultValue="Morning Flow" />\n          <SelectField id={`ai-${state}-select`} label={`Select, ${state}`} aiStatus="generated" state={state} errorMessage="Error message" warningMessage="Warning message" options={courseOptions} value="flow" onChange={noop} />\n        </div>)}\n    </div>\n}',...U.parameters?.docs?.source},description:{story:`A field in error or warning keeps its status border and message. The AI
status then only adds the resting halo, tinted in the status colour; the
light, the text shimmer and the tooltip are left out.`,...U.parameters?.docs?.description}}},W=[`Lifecycle`,`TextInput`,`TextArea`,`PasswordInput`,`NumberInput`,`TimeInput`,`DateInput`,`ColorInput`,`AddressInput`,`Search`,`InputGroup`,`Select`,`Dropdown`,`NumberDropdown`,`ErrorAndWarning`]}))();export{I as AddressInput,F as ColorInput,P as DateInput,B as Dropdown,U as ErrorAndWarning,R as InputGroup,O as Lifecycle,V as NumberDropdown,M as NumberInput,j as PasswordInput,L as Search,z as Select,A as TextArea,k as TextInput,N as TimeInput,W as __namedExportsOrder,w as default};