import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index-0yr9KlQE.js";import{aU as a,aV as G}from"./ContextMenuList-B2WBBjRu.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const Q={title:"WIP Components/RadioButton",component:a,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},errorMessage:{control:"text"},warningMessage:{control:"text"},hideLabel:{control:"boolean"},children:{control:"text"}}},_=t=>{const[n,o]=F.useState(t.checked||!1);return e.jsx(a,{...t,checked:n,onChange:P=>{t.disabled||o(P.target.checked)}})},s={render:_,args:{label:"Label",children:"Radio Button Item",checked:!1,disabled:!1}},l={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-md flex flex-wrap",children:[e.jsx(a,{label:"Label",checked:!1,children:"Radio Button Item"}),e.jsx(a,{label:"Label",checked:!0,children:"Radio Button Item"})]}),e.jsxs("div",{className:"gap-md flex flex-wrap",children:[e.jsx(a,{label:"Label",checked:!1,disabled:!0,children:"Radio Button Item"}),e.jsx(a,{label:"Label",checked:!0,disabled:!0,children:"Radio Button Item"})]})]})},d={render:()=>e.jsx("div",{className:"gap-md flex flex-col",children:G.map(t=>e.jsxs("div",{className:"gap-md flex flex-wrap",children:[e.jsxs(a,{label:"Label",checked:!1,disabled:t==="disabled",children:["Radio Button Item (",t," unchecked)"]}),e.jsxs(a,{label:"Label",checked:!0,disabled:t==="disabled",children:["Radio Button Item (",t," checked)"]})]},t))})},r={render:()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx(a,{checked:!1,children:"Radio Button Item"}),e.jsx(a,{checked:!0,children:"Radio Button Item"}),e.jsx(a,{checked:!1,disabled:!0,children:"Radio Button Item"}),e.jsx(a,{checked:!0,disabled:!0,children:"Radio Button Item"})]})},c={render:()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx(a,{label:"Label",checked:!1,errorMessage:"This is an Error Message",children:"Radio Button Item"}),e.jsx(a,{label:"Label",checked:!0,errorMessage:"This is an Error Message",children:"Radio Button Item"})]})},i={render:()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx(a,{label:"Label",checked:!1,warningMessage:"This is a Warning Message",children:"Radio Button Item"}),e.jsx(a,{label:"Label",checked:!0,warningMessage:"This is a Warning Message",children:"Radio Button Item"})]})},u={render:()=>{const[t,n]=F.useState("");return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx("h3",{className:"typography-heading-sm",children:"Radio Button Group Example"}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx(a,{label:"Choose Option",name:"example-group",value:"option1",checked:t==="option1",onChange:o=>n(o.target.value),children:"Option 1"}),e.jsx(a,{name:"example-group",value:"option2",checked:t==="option2",onChange:o=>n(o.target.value),children:"Option 2"}),e.jsx(a,{name:"example-group",value:"option3",checked:t==="option3",onChange:o=>n(o.target.value),children:"Option 3"})]}),e.jsxs("p",{className:"typography-body-small text-text-muted",children:["Selected: ",t||"none"]})]})}},m={render:()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx("p",{className:"typography-body-small text-text-muted",children:"Tab through these radio buttons to see focus styling"}),e.jsx(a,{label:"Label",checked:!1,children:"Radio Button Item (Focus with Tab)"}),e.jsx(a,{label:"Label",checked:!0,children:"Radio Button Item (Focus with Tab)"})]})};var p,h,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: PlaygroundRadioButton,
  args: {
    label: "Label",
    children: "Radio Button Item",
    checked: false,
    disabled: false
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,b,R;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-md flex flex-wrap">
        <RadioButton label="Label" checked={false}>
          Radio Button Item
        </RadioButton>
        <RadioButton label="Label" checked={true}>
          Radio Button Item
        </RadioButton>
      </div>
      <div className="gap-md flex flex-wrap">
        <RadioButton label="Label" checked={false} disabled>
          Radio Button Item
        </RadioButton>
        <RadioButton label="Label" checked={true} disabled>
          Radio Button Item
        </RadioButton>
      </div>
    </div>
}`,...(R=(b=l.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var B,f,k;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      {RadioButtonStates.map(state => <div key={state} className="gap-md flex flex-wrap">
          <RadioButton label="Label" checked={false} disabled={state === "disabled"}>
            Radio Button Item ({state} unchecked)
          </RadioButton>
          <RadioButton label="Label" checked={true} disabled={state === "disabled"}>
            Radio Button Item ({state} checked)
          </RadioButton>
        </div>)}
    </div>
}`,...(k=(f=d.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,I,j;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      <RadioButton checked={false}>Radio Button Item</RadioButton>
      <RadioButton checked={true}>Radio Button Item</RadioButton>
      <RadioButton checked={false} disabled>
        Radio Button Item
      </RadioButton>
      <RadioButton checked={true} disabled>
        Radio Button Item
      </RadioButton>
    </div>
}`,...(j=(I=r.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var L,N,S;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      <RadioButton label="Label" checked={false} errorMessage="This is an Error Message">
        Radio Button Item
      </RadioButton>
      <RadioButton label="Label" checked={true} errorMessage="This is an Error Message">
        Radio Button Item
      </RadioButton>
    </div>
}`,...(S=(N=c.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var y,M,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      <RadioButton label="Label" checked={false} warningMessage="This is a Warning Message">
        Radio Button Item
      </RadioButton>
      <RadioButton label="Label" checked={true} warningMessage="This is a Warning Message">
        Radio Button Item
      </RadioButton>
    </div>
}`,...(w=(M=i.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var T,V,C;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedValue, setSelectedValue] = useState<string>("");
    return <div className="gap-md flex flex-col">
        <h3 className="typography-heading-sm">Radio Button Group Example</h3>
        <div className="gap-sm flex flex-col">
          <RadioButton label="Choose Option" name="example-group" value="option1" checked={selectedValue === "option1"} onChange={e => setSelectedValue(e.target.value)}>
            Option 1
          </RadioButton>
          <RadioButton name="example-group" value="option2" checked={selectedValue === "option2"} onChange={e => setSelectedValue(e.target.value)}>
            Option 2
          </RadioButton>
          <RadioButton name="example-group" value="option3" checked={selectedValue === "option3"} onChange={e => setSelectedValue(e.target.value)}>
            Option 3
          </RadioButton>
        </div>
        <p className="typography-body-small text-text-muted">
          Selected: {selectedValue || "none"}
        </p>
      </div>;
  }
}`,...(C=(V=u.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var E,O,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="gap-md flex flex-col">
      <p className="typography-body-small text-text-muted">
        Tab through these radio buttons to see focus styling
      </p>
      <RadioButton label="Label" checked={false}>
        Radio Button Item (Focus with Tab)
      </RadioButton>
      <RadioButton label="Label" checked={true}>
        Radio Button Item (Focus with Tab)
      </RadioButton>
    </div>
}`,...(W=(O=m.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const X=["Playground","Overview","States","WithoutLabel","ErrorState","WarningState","Interactive","FocusState"];export{c as ErrorState,m as FocusState,u as Interactive,l as Overview,s as Playground,d as States,i as WarningState,r as WithoutLabel,X as __namedExportsOrder,Q as default};
