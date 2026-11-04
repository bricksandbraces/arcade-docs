import{n as e}from"./chunk-jRWAZmH_.js";import{Aa as t,Oo as n,Va as r,cc as i,es as a,ja as o,qs as s,t as c,ua as l,xo as u}from"./iframe-BtGtF-Dr.js";import{n as d,t as f}from"./figmaDesign-DDiUnvXT.js";import{n as p,t as m}from"./figmaFrame-jDwskB1v.js";var h,g,_,v,y,b,x,S;e((()=>{c(),o(),i(),d(),p(),h=s(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_={parameters:{design:f(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5778-39560`),docs:{description:{component:"A main action next to a chevron that opens related actions. The chevron only reports its state - wire it to a `ContextMenu` or `Dropdown` through `onMenuClick` and `menuExpanded`."}}},title:`Buttons & Actions/SplitButton`,component:t,tags:[`autodocs`],argTypes:{kind:{control:`select`,options:[`primary`,`primary-light`,`secondary`,`tertiary`]},size:{control:`select`,options:[`small`,`medium`,`large`]},disabled:{control:`boolean`},loading:{control:`boolean`},menuExpanded:{control:`boolean`}}},v={args:{label:`Button`,menuLabel:`More actions`,IconLeft:a,kind:`primary`,size:`large`,onClick:g(`onClick`),onMenuClick:g(`onMenuClick`)}},y={parameters:{controls:{disable:!0}},render:()=>(0,h.jsx)(t,{label:`Save`,menuLabel:`More save options`,IconLeft:n,kind:`primary`,size:`large`,onClick:g(`onClick`),menu:(0,h.jsx)(l,{title:`More save options`,size:`medium`,placement:`bottom-end`,items:[{label:`Save as draft`,icon:u,onClick:g(`saveAsDraft`)},{label:`Save and close`,icon:n,onClick:g(`saveAndClose`)},{label:`Discard changes`,icon:r,danger:!0,showDivider:!0,onClick:g(`discard`)}]})})},b={parameters:{controls:{disable:!0}},render:()=>(0,h.jsx)(m,{node:`5778:39560`,width:164,height:48,children:(0,h.jsx)(t,{label:`Button`,menuLabel:`More actions`,IconLeft:a,kind:`primary`,size:`large`})})},x={parameters:{controls:{disable:!0}},render:()=>(0,h.jsx)(`div`,{className:`gap-lg flex flex-col items-start`,children:[`primary`,`primary-light`,`secondary`,`tertiary`].map(e=>(0,h.jsxs)(`div`,{className:`gap-md flex flex-row items-center`,children:[[`small`,`medium`,`large`].map(n=>(0,h.jsx)(t,{label:`Button`,menuLabel:`More actions`,IconLeft:a,kind:e,size:n,onClick:g(`onClick`),onMenuClick:g(`onMenuClick`)},`${e}-${n}`)),(0,h.jsx)(t,{label:`Button`,menuLabel:`More actions`,IconLeft:a,kind:e,size:`large`,disabled:!0})]},e))})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Button",
    menuLabel: "More actions",
    IconLeft: IconArrowLeft,
    kind: "primary",
    size: "large",
    onClick: action("onClick"),
    onMenuClick: action("onMenuClick")
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SplitButton label="Save" menuLabel="More save options" IconLeft={IconDeviceFloppy} kind="primary" size="large" onClick={action("onClick")} menu={<OverflowMenu title="More save options" size="medium" placement="bottom-end" items={[{
    label: "Save as draft",
    icon: IconFileText,
    onClick: action("saveAsDraft")
  }, {
    label: "Save and close",
    icon: IconDeviceFloppy,
    onClick: action("saveAndClose")
  }, {
    label: "Discard changes",
    icon: IconTrash,
    danger: true,
    showDivider: true,
    onClick: action("discard")
  }]} />} />
}`,...y.parameters?.docs?.source},description:{story:"The chevron opens an `OverflowMenu` aligned to its right edge, as the Frame pattern the ticket cites describes.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <FigmaFrame node="5778:39560" width={164} height={48}>
      <SplitButton label="Button" menuLabel="More actions" IconLeft={IconArrowLeft} kind="primary" size="large" />
    </FigmaFrame>
}`,...b.parameters?.docs?.source},description:{story:"Mirrors the Figma component 1:1 for `scripts/figma-pixel-diff.mjs`.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col items-start">
      {(["primary", "primary-light", "secondary", "tertiary"] as const).map(kind => <div key={kind} className="gap-md flex flex-row items-center">
            {(["small", "medium", "large"] as const).map(size => <SplitButton key={\`\${kind}-\${size}\`} label="Button" menuLabel="More actions" IconLeft={IconArrowLeft} kind={kind} size={size} onClick={action("onClick")} onMenuClick={action("onMenuClick")} />)}
            <SplitButton label="Button" menuLabel="More actions" IconLeft={IconArrowLeft} kind={kind} size="large" disabled />
          </div>)}
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`WithOverflowMenu`,`FigmaLargePrimary`,`Overview`]}))();export{b as FigmaLargePrimary,x as Overview,v as Playground,y as WithOverflowMenu,S as __namedExportsOrder,_ as default};