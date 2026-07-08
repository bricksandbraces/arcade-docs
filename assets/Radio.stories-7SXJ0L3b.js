import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{So as n,Ur as r,so as i,t as a}from"./iframe-CUNJULIl.js";var o,s,c,l,u,d,f;e((()=>{o=t(n(),1),a(),s=i(),c={title:`Inputs & Controls/RadioButton/Radio`,component:r,tags:[`autodocs`],argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},readonly:{control:`boolean`}},parameters:{docs:{description:{component:`Low-level radio circle without a label. Use when composing custom radio layouts; prefer RadioButton for standard forms.`}}}},l=e=>{let[t,n]=o.useState(e.checked||!1);return(0,o.useEffect)(()=>{n(e.checked||!1)},[e.checked]),(0,s.jsx)(r,{...e,checked:t,onChange:t=>{!e.disabled&&!e.readonly&&n(t.target.checked)}})},u={render:e=>(0,s.jsx)(l,{...e}),args:{checked:!1,disabled:!1,readonly:!1,"aria-label":`Radio`}},d={parameters:{controls:{disable:!0}},render:()=>(0,s.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,s.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,s.jsx)(`span`,{className:`typography-body-small text-text-accent w-20`,children:`Enabled:`}),(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{checked:!1,"aria-label":`Enabled unchecked`,readOnly:!0}),(0,s.jsx)(r,{checked:!0,"aria-label":`Enabled checked`,readOnly:!0})]})]}),(0,s.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,s.jsx)(`span`,{className:`typography-body-small text-text-accent w-20`,children:`Readonly:`}),(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{checked:!1,readonly:!0,"aria-label":`Readonly unchecked`}),(0,s.jsx)(r,{checked:!0,readonly:!0,"aria-label":`Readonly checked`})]})]}),(0,s.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,s.jsx)(`span`,{className:`typography-body-small text-text-accent w-20`,children:`Disabled:`}),(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{checked:!1,disabled:!0,"aria-label":`Disabled unchecked`}),(0,s.jsx)(r,{checked:!0,disabled:!0,"aria-label":`Disabled checked`})]})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <PlaygroundRadio {...args} />,
  args: {
    checked: false,
    disabled: false,
    readonly: false,
    "aria-label": "Radio"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-md flex items-center">
        <span className="typography-body-small text-text-accent w-20">
          Enabled:
        </span>
        <div className="gap-sm flex items-center">
          <Radio checked={false} aria-label="Enabled unchecked" readOnly />
          <Radio checked={true} aria-label="Enabled checked" readOnly />
        </div>
      </div>
      <div className="gap-md flex items-center">
        <span className="typography-body-small text-text-accent w-20">
          Readonly:
        </span>
        <div className="gap-sm flex items-center">
          <Radio checked={false} readonly aria-label="Readonly unchecked" />
          <Radio checked={true} readonly aria-label="Readonly checked" />
        </div>
      </div>
      <div className="gap-md flex items-center">
        <span className="typography-body-small text-text-accent w-20">
          Disabled:
        </span>
        <div className="gap-sm flex items-center">
          <Radio checked={false} disabled aria-label="Disabled unchecked" />
          <Radio checked={true} disabled aria-label="Disabled checked" />
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Playground`,`Overview`]}))();export{d as Overview,u as Playground,f as __namedExportsOrder,c as default};