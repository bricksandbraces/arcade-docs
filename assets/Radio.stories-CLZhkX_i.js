import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Mo as n,ii as r,qo as i,t as a}from"./iframe-a8-f9nXR.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p,m;e((()=>{c=t(i(),1),a(),o(),l=n(),u={title:`Inputs & Controls/RadioButton/Radio`,component:r,tags:[`autodocs`],argTypes:{checked:{control:`boolean`},disabled:{control:`boolean`},readonly:{control:`boolean`}},parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2784-21449&m=dev`),docs:{description:{component:`Low-level radio circle without a label. Use when composing custom radio layouts; prefer RadioButton for standard forms.`}}}},d=e=>{let[t,n]=c.useState(e.checked||!1);return(0,c.useEffect)(()=>{n(e.checked||!1)},[e.checked]),(0,l.jsx)(r,{...e,checked:t,onChange:t=>{!e.disabled&&!e.readonly&&n(t.target.checked)}})},f={render:e=>(0,l.jsx)(d,{...e}),args:{checked:!1,disabled:!1,readonly:!1,"aria-label":`Radio`}},p={parameters:{controls:{disable:!0}},render:()=>(0,l.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,l.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,l.jsx)(`span`,{className:`typography-body-small text-text-accent w-20`,children:`Enabled:`}),(0,l.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,l.jsx)(r,{checked:!1,"aria-label":`Enabled unchecked`,readOnly:!0}),(0,l.jsx)(r,{checked:!0,"aria-label":`Enabled checked`,readOnly:!0})]})]}),(0,l.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,l.jsx)(`span`,{className:`typography-body-small text-text-accent w-20`,children:`Readonly:`}),(0,l.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,l.jsx)(r,{checked:!1,readonly:!0,"aria-label":`Readonly unchecked`}),(0,l.jsx)(r,{checked:!0,readonly:!0,"aria-label":`Readonly checked`})]})]}),(0,l.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,l.jsx)(`span`,{className:`typography-body-small text-text-accent w-20`,children:`Disabled:`}),(0,l.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,l.jsx)(r,{checked:!1,disabled:!0,"aria-label":`Disabled unchecked`}),(0,l.jsx)(r,{checked:!0,disabled:!0,"aria-label":`Disabled checked`})]})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <PlaygroundRadio {...args} />,
  args: {
    checked: false,
    disabled: false,
    readonly: false,
    "aria-label": "Radio"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Overview`]}))();export{p as Overview,f as Playground,m as __namedExportsOrder,u as default};