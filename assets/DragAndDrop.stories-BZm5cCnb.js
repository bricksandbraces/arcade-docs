import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Gr as n,Os as r,T as i,ps as a,t as o,w as s}from"./iframe-Dsvd3Mbg.js";import{n as c,t as l}from"./figmaDesign-DDiUnvXT.js";var u,d,f,p,m,h,g;e((()=>{o(),u=t(a(),1),c(),d=r(),f={title:`Inputs & Controls/FileUpload/DragAndDrop`,component:s,tags:[`!test`,`autodocs`],parameters:{design:l(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2608-13411`),layout:`centered`},argTypes:{disabled:{control:`boolean`},multiple:{control:`boolean`}}},p={render:()=>(0,d.jsxs)(`div`,{className:(0,u.default)(`gap-md flex flex-col`),children:[(0,d.jsx)(s,{}),(0,d.jsx)(s,{disabled:!0})]})},m=p,h={args:{kind:`inline`},argTypes:{kind:{control:`inline-radio`,options:i}},render:({kind:e})=>(0,d.jsx)(n,{kind:e})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-md flex flex-col")}>
      <DragAndDrop />
      <DragAndDrop disabled />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`Overview`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    kind: "inline" as DragAndDropKind
  },
  argTypes: {
    kind: {
      control: "inline-radio",
      options: DragAndDropKinds
    }
  },
  render: ({
    kind
  }: {
    kind?: DragAndDropKind;
  }) => <DragAndDropSkeleton kind={kind} />
}`,...h.parameters?.docs?.source}}},g=[`Overview`,`Playground`,`Skeleton`]}))();export{p as Overview,m as Playground,h as Skeleton,g as __namedExportsOrder,f as default};