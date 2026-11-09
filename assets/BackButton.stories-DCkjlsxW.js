import{n as e}from"./chunk-jRWAZmH_.js";import{Fa as t,Pa as n,t as r,uc as i}from"./iframe-BGZyYePL.js";import{n as a,t as o}from"./figmaDesign-DLesXS3c.js";var s,c,l,u,d,f,p;e((()=>{r(),a(),s=i(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Components/BackButton`,component:n,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:t},loading:{control:`boolean`},disabled:{control:`boolean`}},args:{kind:`secondary`,loading:!1,disabled:!1,onClick:c(`onClick`)},parameters:{design:o(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5544-25648`),docs:{description:{component:"Round icon-only button that returns to the previous step or page, e.g. in a Dialog header. Pass `href` to render it as a link."}}}},u={},d={render:()=>(0,s.jsx)(`div`,{className:`gap-lg grid w-fit grid-cols-2`,children:t.map(e=>(0,s.jsxs)(`div`,{className:`gap-lg flex flex-col items-center`,children:[(0,s.jsx)(n,{kind:e}),(0,s.jsx)(n,{kind:e,loading:!0}),(0,s.jsx)(n,{kind:e,disabled:!0})]},e))})},f={args:{href:`#previous`,tooltipContent:`Back`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg grid w-fit grid-cols-2">
      {BackButtonKinds.map(kind => <div key={kind} className="gap-lg flex flex-col items-center">
          <BackButton kind={kind} />
          <BackButton kind={kind} loading />
          <BackButton kind={kind} disabled />
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#previous",
    tooltipContent: "Back"
  }
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`AllStates`,`AsLink`]}))();export{d as AllStates,f as AsLink,u as Playground,p as __namedExportsOrder,l as default};