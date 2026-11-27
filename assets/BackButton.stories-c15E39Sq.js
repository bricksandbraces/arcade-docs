import{n as e}from"./chunk-jRWAZmH_.js";import{Fc as t,Ga as n,Ka as r,qa as i,t as a}from"./iframe-BkfiFcVi.js";import{n as o,t as s}from"./figmaDesign-DLesXS3c.js";var c,l,u,d,f,p,m;e((()=>{a(),o(),c=t(),{action:l}=__STORYBOOK_MODULE_ACTIONS__,u={title:`Components/BackButton`,component:n,tags:[`autodocs`],argTypes:{kind:{control:`inline-radio`,options:r},size:{control:`inline-radio`,options:i},loading:{control:`boolean`},disabled:{control:`boolean`}},args:{kind:`secondary`,size:`medium`,loading:!1,disabled:!1,onClick:l(`onClick`)},parameters:{design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5544-25648`),docs:{description:{component:"Round icon-only button that returns to the previous step or page, e.g. in a Dialog header. Pass `href` to render it as a link."}}}},d={},f={render:()=>(0,c.jsx)(`div`,{className:`gap-lg grid w-fit grid-cols-4`,children:i.map(e=>r.map(t=>(0,c.jsxs)(`div`,{className:`gap-lg flex flex-col items-center`,children:[(0,c.jsx)(n,{kind:t,size:e}),(0,c.jsx)(n,{kind:t,size:e,loading:!0}),(0,c.jsx)(n,{kind:t,size:e,disabled:!0})]},`${e}-${t}`)))})},p={args:{href:`#previous`,tooltipContent:`Back`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg grid w-fit grid-cols-4">
      {BackButtonSizes.map(size => BackButtonKinds.map(kind => <div key={\`\${size}-\${kind}\`} className="gap-lg flex flex-col items-center">
            <BackButton kind={kind} size={size} />
            <BackButton kind={kind} size={size} loading />
            <BackButton kind={kind} size={size} disabled />
          </div>))}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#previous",
    tooltipContent: "Back"
  }
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`AllStates`,`AsLink`]}))();export{f as AllStates,p as AsLink,d as Playground,m as __namedExportsOrder,u as default};