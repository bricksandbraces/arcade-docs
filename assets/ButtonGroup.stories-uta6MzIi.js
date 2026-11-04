import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$o as n,Oa as r,as as i,cc as a,cs as o,es as s,is as c,ja as l,ka as u,os as d,qs as f,t as p}from"./iframe-BtGtF-Dr.js";import{n as m,t as h}from"./figmaDesign-DDiUnvXT.js";var g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{p(),l(),g=t(a(),1),m(),_=f(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,y={parameters:{design:h(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6188-9674`),docs:{description:{component:"Related actions as one unit: individual `Button`s, 2px apart, fully rounded on the outer edges and with small inner corners like the `SplitButton`. `kind` and `size` are set on the group, everything else on each button."}}},title:`Buttons & Actions/ButtonGroup`,component:r,tags:[`autodocs`],argTypes:{kind:{control:`select`,options:u},size:{control:`select`,options:[`small`,`medium`,`large`]},disabled:{control:`boolean`},children:{control:!1}}},b=[(0,_.jsx)(o,{label:`Day`,onClick:v(`day`)},`day`),(0,_.jsx)(o,{label:`Week`,onClick:v(`week`)},`week`),(0,_.jsx)(o,{label:`Month`,onClick:v(`month`)},`month`)],x=[(0,_.jsx)(o,{IconLeft:i,"aria-label":`Align left`,onClick:v(`left`)},`left`),(0,_.jsx)(o,{IconLeft:d,"aria-label":`Align center`,onClick:v(`center`)},`center`),(0,_.jsx)(o,{IconLeft:c,"aria-label":`Align right`,onClick:v(`right`)},`right`)],S={args:{"aria-label":`Calendar range`,kind:`secondary`,size:`large`,children:b}},C={args:{"aria-label":`Text alignment`,kind:`secondary`,size:`large`,children:x}},w={args:{"aria-label":`Text alignment`,kind:`secondary`,size:`large`,children:[(0,_.jsx)(o,{label:`Left`,IconLeft:i,onClick:v(`left`)},`left`),(0,_.jsx)(o,{label:`Center`,IconLeft:d,onClick:v(`center`)},`center`),(0,_.jsx)(o,{label:`Right`,IconLeft:c,onClick:v(`right`)},`right`)]}},T={args:{"aria-label":`Pagination`,kind:`primary`,size:`large`,children:[(0,_.jsx)(o,{IconLeft:s,"aria-label":`Previous`,tooltipContent:`Previous`,onClick:v(`previous`)},`previous`),(0,_.jsx)(o,{label:`Today`,onClick:v(`today`)},`today`),(0,_.jsx)(o,{label:`Next`,IconRight:n,onClick:v(`next`)},`next`)]}},E={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:`gap-md flex flex-col items-start`,children:[(0,_.jsx)(r,{"aria-label":`Single`,kind:`secondary`,children:(0,_.jsx)(o,{label:`One`})}),(0,_.jsxs)(r,{"aria-label":`Pair`,kind:`secondary`,children:[(0,_.jsx)(o,{label:`One`}),(0,_.jsx)(o,{label:`Two`})]}),(0,_.jsxs)(r,{"aria-label":`Five`,kind:`secondary`,children:[(0,_.jsx)(o,{label:`One`}),(0,_.jsx)(o,{label:`Two`}),(0,_.jsx)(o,{label:`Three`}),(0,_.jsx)(o,{label:`Four`}),(0,_.jsx)(o,{label:`Five`})]})]})},D={parameters:{controls:{disable:!0}},render:()=>(0,_.jsx)(`div`,{className:`gap-lg flex flex-col items-start`,children:u.map(e=>(0,_.jsxs)(`div`,{className:`gap-md flex flex-row items-center`,children:[[`small`,`medium`,`large`].map(t=>(0,_.jsxs)(g.Fragment,{children:[(0,_.jsx)(r,{"aria-label":`Calendar range`,kind:e,size:t,children:b}),(0,_.jsx)(r,{"aria-label":`Text alignment`,kind:e,size:t,children:x})]},t)),(0,_.jsx)(r,{"aria-label":`Calendar range`,kind:e,size:`large`,disabled:!0,children:b})]},e))})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Calendar range",
    kind: "secondary",
    size: "large",
    children: textButtons
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Text alignment",
    kind: "secondary",
    size: "large",
    children: iconButtons
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Text alignment",
    kind: "secondary",
    size: "large",
    children: [<Button key="left" label="Left" IconLeft={IconAlignLeft} onClick={action("left")} />, <Button key="center" label="Center" IconLeft={IconAlignCenter} onClick={action("center")} />, <Button key="right" label="Right" IconLeft={IconAlignRight} onClick={action("right")} />]
  }
}`,...w.parameters?.docs?.source},description:{story:"A text button takes an icon the same way as a `Button` or the `SplitButton`.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Pagination",
    kind: "primary",
    size: "large",
    children: [<Button key="previous" IconLeft={IconArrowLeft} aria-label="Previous" tooltipContent="Previous" onClick={action("previous")} />, <Button key="today" label="Today" onClick={action("today")} />, <Button key="next" label="Next" IconRight={IconArrowRight} onClick={action("next")} />]
  }
}`,...T.parameters?.docs?.source},description:{story:`Text, icon and icon-only buttons can sit side by side in one group.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-md flex flex-col items-start">
      <ButtonGroup aria-label="Single" kind="secondary">
        <Button label="One" />
      </ButtonGroup>
      <ButtonGroup aria-label="Pair" kind="secondary">
        <Button label="One" />
        <Button label="Two" />
      </ButtonGroup>
      <ButtonGroup aria-label="Five" kind="secondary">
        <Button label="One" />
        <Button label="Two" />
        <Button label="Three" />
        <Button label="Four" />
        <Button label="Five" />
      </ButtonGroup>
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Two buttons have no middle, one button keeps its regular shape.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col items-start">
      {ButtonGroupKinds.map(kind => <div key={kind} className="gap-md flex flex-row items-center">
          {(["small", "medium", "large"] as const).map(size => <React.Fragment key={size}>
              <ButtonGroup aria-label="Calendar range" kind={kind} size={size}>
                {textButtons}
              </ButtonGroup>
              <ButtonGroup aria-label="Text alignment" kind={kind} size={size}>
                {iconButtons}
              </ButtonGroup>
            </React.Fragment>)}
          <ButtonGroup aria-label="Calendar range" kind={kind} size="large" disabled>
            {textButtons}
          </ButtonGroup>
        </div>)}
    </div>
}`,...D.parameters?.docs?.source}}},O=[`Playground`,`IconOnly`,`TextWithIcon`,`Mixed`,`ButtonCount`,`Overview`]}))();export{E as ButtonCount,C as IconOnly,T as Mixed,D as Overview,S as Playground,w as TextWithIcon,O as __namedExportsOrder,y as default};