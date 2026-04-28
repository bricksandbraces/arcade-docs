import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,_t as n,gt as r,ht as i,t as a}from"./iframe-Dxxi8T6d.js";var o,s,c,l,u,d,f,p;e((()=>{a(),o=t(),s={title:`Components/List/ListItem`,component:i,argTypes:{level:{control:`inline-radio`,options:r},type:{control:`inline-radio`,options:n},index:{control:`number`}}},c={args:{level:1,type:`unordered`,index:1,children:`List item text`},decorators:[e=>(0,o.jsx)(`ul`,{className:`m-0 list-none p-0`,children:(0,o.jsx)(e,{})})]},l={render:()=>(0,o.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,o.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,o.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Level 1`}),(0,o.jsxs)(`ul`,{className:`gap-sm m-0 flex list-none flex-col p-0`,children:[(0,o.jsx)(i,{level:1,type:`ordered`,index:1,children:`First ordered item at level 1`}),(0,o.jsx)(i,{level:1,type:`ordered`,index:2,children:`Second ordered item at level 1`}),(0,o.jsx)(i,{level:1,type:`unordered`,children:`First unordered item at level 1`}),(0,o.jsx)(i,{level:1,type:`unordered`,children:`Second unordered item at level 1`})]})]}),(0,o.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,o.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Level 2`}),(0,o.jsxs)(`ul`,{className:`gap-sm m-0 flex list-none flex-col p-0`,children:[(0,o.jsx)(i,{level:2,type:`ordered`,index:1,children:`First ordered item at level 2`}),(0,o.jsx)(i,{level:2,type:`ordered`,index:2,children:`Second ordered item at level 2`}),(0,o.jsx)(i,{level:2,type:`unordered`,children:`First unordered item at level 2`}),(0,o.jsx)(i,{level:2,type:`unordered`,children:`Second unordered item at level 2`})]})]})]})},u={render:()=>(0,o.jsxs)(`div`,{className:`gap-lg flex flex-col`,children:[(0,o.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,o.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Ordered Lists`}),(0,o.jsxs)(`ul`,{className:`gap-sm m-0 flex list-none flex-col p-0`,children:[(0,o.jsx)(i,{level:1,type:`ordered`,index:1,children:`First item`}),(0,o.jsx)(i,{level:1,type:`ordered`,index:2,children:`Second item`}),(0,o.jsx)(i,{level:2,type:`ordered`,index:1,children:`Nested first item (a.)`}),(0,o.jsx)(i,{level:2,type:`ordered`,index:2,children:`Nested second item (b.)`})]})]}),(0,o.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,o.jsx)(`span`,{className:`typography-body-small text-text-accent`,children:`Unordered Lists`}),(0,o.jsxs)(`ul`,{className:`gap-sm m-0 flex list-none flex-col p-0`,children:[(0,o.jsx)(i,{level:1,type:`unordered`,children:`First item with dash (–)`}),(0,o.jsx)(i,{level:1,type:`unordered`,children:`Second item with dash (–)`}),(0,o.jsx)(i,{level:2,type:`unordered`,children:`Nested first item with bullet (•)`}),(0,o.jsx)(i,{level:2,type:`unordered`,children:`Nested second item with bullet (•)`})]})]})]})},d={render:()=>(0,o.jsxs)(`ul`,{className:`gap-sm m-0 flex list-none flex-col p-0`,children:[(0,o.jsx)(i,{level:1,type:`ordered`,index:1,children:`First main item`}),(0,o.jsx)(i,{level:2,type:`ordered`,index:1,children:`First sub-item under main item 1`}),(0,o.jsx)(i,{level:2,type:`ordered`,index:2,children:`Second sub-item under main item 1`}),(0,o.jsx)(i,{level:1,type:`ordered`,index:2,children:`Second main item`}),(0,o.jsx)(i,{level:2,type:`unordered`,children:`Mixed type: unordered sub-item under ordered main item`}),(0,o.jsx)(i,{level:1,type:`unordered`,children:`Third main item (unordered)`}),(0,o.jsx)(i,{level:2,type:`unordered`,children:`Sub-item under unordered main item`})]})},f={render:()=>(0,o.jsxs)(`ul`,{className:`gap-sm m-0 flex max-w-md list-none flex-col p-0`,children:[(0,o.jsx)(i,{level:1,type:`ordered`,index:1,children:`This is a very long list item that demonstrates how the component handles text wrapping and maintains proper alignment with the marker. The text should wrap naturally while keeping the marker aligned at the top.`}),(0,o.jsx)(i,{level:2,type:`ordered`,index:1,children:`This is a nested item with equally long content to show that nested items also handle text wrapping properly while maintaining their indentation and marker alignment.`}),(0,o.jsx)(i,{level:1,type:`unordered`,children:`Another long item using unordered markers to demonstrate consistent behavior across different marker types and levels.`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    level: 1,
    type: "unordered",
    index: 1,
    children: "List item text"
  },
  decorators: [Story => <ul className="m-0 list-none p-0">
        <Story />
      </ul>]
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-sm flex flex-col">
        <span className="typography-body-small text-text-accent">Level 1</span>
        <ul className="gap-sm m-0 flex list-none flex-col p-0">
          <ListItem level={1} type="ordered" index={1}>
            First ordered item at level 1
          </ListItem>
          <ListItem level={1} type="ordered" index={2}>
            Second ordered item at level 1
          </ListItem>
          <ListItem level={1} type="unordered">
            First unordered item at level 1
          </ListItem>
          <ListItem level={1} type="unordered">
            Second unordered item at level 1
          </ListItem>
        </ul>
      </div>
      <div className="gap-sm flex flex-col">
        <span className="typography-body-small text-text-accent">Level 2</span>
        <ul className="gap-sm m-0 flex list-none flex-col p-0">
          <ListItem level={2} type="ordered" index={1}>
            First ordered item at level 2
          </ListItem>
          <ListItem level={2} type="ordered" index={2}>
            Second ordered item at level 2
          </ListItem>
          <ListItem level={2} type="unordered">
            First unordered item at level 2
          </ListItem>
          <ListItem level={2} type="unordered">
            Second unordered item at level 2
          </ListItem>
        </ul>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      <div className="gap-sm flex flex-col">
        <span className="typography-body-small text-text-accent">
          Ordered Lists
        </span>
        <ul className="gap-sm m-0 flex list-none flex-col p-0">
          <ListItem level={1} type="ordered" index={1}>
            First item
          </ListItem>
          <ListItem level={1} type="ordered" index={2}>
            Second item
          </ListItem>
          <ListItem level={2} type="ordered" index={1}>
            Nested first item (a.)
          </ListItem>
          <ListItem level={2} type="ordered" index={2}>
            Nested second item (b.)
          </ListItem>
        </ul>
      </div>
      <div className="gap-sm flex flex-col">
        <span className="typography-body-small text-text-accent">
          Unordered Lists
        </span>
        <ul className="gap-sm m-0 flex list-none flex-col p-0">
          <ListItem level={1} type="unordered">
            First item with dash (–)
          </ListItem>
          <ListItem level={1} type="unordered">
            Second item with dash (–)
          </ListItem>
          <ListItem level={2} type="unordered">
            Nested first item with bullet (•)
          </ListItem>
          <ListItem level={2} type="unordered">
            Nested second item with bullet (•)
          </ListItem>
        </ul>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ul className="gap-sm m-0 flex list-none flex-col p-0">
      <ListItem level={1} type="ordered" index={1}>
        First main item
      </ListItem>
      <ListItem level={2} type="ordered" index={1}>
        First sub-item under main item 1
      </ListItem>
      <ListItem level={2} type="ordered" index={2}>
        Second sub-item under main item 1
      </ListItem>
      <ListItem level={1} type="ordered" index={2}>
        Second main item
      </ListItem>
      <ListItem level={2} type="unordered">
        Mixed type: unordered sub-item under ordered main item
      </ListItem>
      <ListItem level={1} type="unordered">
        Third main item (unordered)
      </ListItem>
      <ListItem level={2} type="unordered">
        Sub-item under unordered main item
      </ListItem>
    </ul>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ul className="gap-sm m-0 flex max-w-md list-none flex-col p-0">
      <ListItem level={1} type="ordered" index={1}>
        This is a very long list item that demonstrates how the component
        handles text wrapping and maintains proper alignment with the marker.
        The text should wrap naturally while keeping the marker aligned at the
        top.
      </ListItem>
      <ListItem level={2} type="ordered" index={1}>
        This is a nested item with equally long content to show that nested
        items also handle text wrapping properly while maintaining their
        indentation and marker alignment.
      </ListItem>
      <ListItem level={1} type="unordered">
        Another long item using unordered markers to demonstrate consistent
        behavior across different marker types and levels.
      </ListItem>
    </ul>
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Levels`,`Types`,`NestedStructure`,`LongContent`]}))();export{l as Levels,f as LongContent,d as NestedStructure,c as Playground,u as Types,p as __namedExportsOrder,s as default};