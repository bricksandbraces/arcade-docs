import{n as e}from"./chunk-jRWAZmH_.js";import{Oo as t,bt as n,nr as r,rr as i,t as a,tr as o}from"./iframe-CbONSzYF.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h,g,_;e((()=>{a(),s(),l=t(),u={title:`Display & Data/List`,component:r,tags:[`autodocs`],parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2395-9217`),docs:{description:{component:"Typographic ordered or unordered list with consistent bullet and indent spacing. Use in body content where native `<ul>`/`<ol>` styling is needed."}}}},d={argTypes:{type:{control:`inline-radio`,options:i}},render:e=>(0,l.jsxs)(r,{type:e.type,children:[(0,l.jsx)(n,{type:`ordered`,level:1,children:`First list item`}),(0,l.jsx)(n,{level:2,children:`Nested list item`}),(0,l.jsx)(n,{level:2,children:`Another nested item`}),(0,l.jsx)(n,{level:1,children:`Second main item`})]}),args:{type:`unordered`}},f={args:{type:`ordered`},render:e=>(0,l.jsxs)(r,{type:e.type,children:[(0,l.jsx)(n,{level:1,children:`First list item`}),(0,l.jsx)(n,{level:2,children:`Nested list item (a.)`}),(0,l.jsx)(n,{level:2,children:`Another nested item (b.)`}),(0,l.jsx)(n,{level:2,children:`Third nested item (c.)`}),(0,l.jsx)(n,{level:1,children:`Second main item`}),(0,l.jsx)(n,{level:1,children:`Third main item`})]})},p={args:{type:`unordered`},render:e=>(0,l.jsxs)(r,{type:e.type,children:[(0,l.jsx)(n,{level:1,children:`First list item`}),(0,l.jsx)(n,{level:2,children:`Nested list item`}),(0,l.jsx)(n,{level:2,children:`Another nested item`}),(0,l.jsx)(n,{level:2,children:`Third nested item`}),(0,l.jsx)(n,{level:1,children:`Second main item`}),(0,l.jsx)(n,{level:1,children:`Third main item`})]})},m={args:{type:`ordered`},render:e=>(0,l.jsxs)(r,{type:e.type,children:[(0,l.jsx)(n,{children:`Introduction to the topic`}),(0,l.jsx)(n,{level:2,children:`First subtopic`}),(0,l.jsx)(n,{level:2,children:`Second subtopic with more detailed explanation that wraps to multiple lines`}),(0,l.jsx)(n,{children:`Main point number two`}),(0,l.jsx)(n,{level:2,children:`Supporting detail`}),(0,l.jsx)(n,{level:2,children:`Another supporting detail`}),(0,l.jsx)(n,{children:`Final main point`})]})},h={args:{type:`unordered`},render:e=>(0,l.jsxs)(r,{type:e.type,children:[(0,l.jsx)(n,{level:1,children:`Task management features`}),(0,l.jsx)(n,{level:2,children:`Create and edit tasks`}),(0,l.jsx)(n,{level:2,children:`Set due dates and priorities`}),(0,l.jsx)(n,{level:2,children:`Assign tasks to team members`}),(0,l.jsx)(n,{level:1,children:`Collaboration tools`}),(0,l.jsx)(n,{level:2,children:`Real-time comments`}),(0,l.jsx)(n,{level:2,children:`File sharing and attachments`}),(0,l.jsx)(n,{level:1,children:`Reporting and analytics`})]})},g={render:()=>(0,l.jsx)(o,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  argTypes: {
    type: {
      control: "inline-radio",
      options: ListTypes
    }
  },
  render: args => {
    return <List type={args.type}>
        <ListItem type="ordered" level={1}>
          First list item
        </ListItem>
        <ListItem level={2}>Nested list item</ListItem>
        <ListItem level={2}>Another nested item</ListItem>
        <ListItem level={1}>Second main item</ListItem>
      </List>;
  },
  args: {
    type: "unordered"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    type: "ordered"
  },
  render: args => <List type={args.type}>
      <ListItem level={1}>First list item</ListItem>
      <ListItem level={2}>Nested list item (a.)</ListItem>
      <ListItem level={2}>Another nested item (b.)</ListItem>
      <ListItem level={2}>Third nested item (c.)</ListItem>
      <ListItem level={1}>Second main item</ListItem>
      <ListItem level={1}>Third main item</ListItem>
    </List>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: "unordered"
  },
  render: args => <List type={args.type}>
      <ListItem level={1}>First list item</ListItem>
      <ListItem level={2}>Nested list item</ListItem>
      <ListItem level={2}>Another nested item</ListItem>
      <ListItem level={2}>Third nested item</ListItem>
      <ListItem level={1}>Second main item</ListItem>
      <ListItem level={1}>Third main item</ListItem>
    </List>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "ordered"
  },
  render: args => <List type={args.type}>
      <ListItem>Introduction to the topic</ListItem>
      <ListItem level={2}>First subtopic</ListItem>
      <ListItem level={2}>
        Second subtopic with more detailed explanation that wraps to multiple
        lines
      </ListItem>
      <ListItem>Main point number two</ListItem>
      <ListItem level={2}>Supporting detail</ListItem>
      <ListItem level={2}>Another supporting detail</ListItem>
      <ListItem>Final main point</ListItem>
    </List>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: "unordered"
  },
  render: args => <List type={args.type}>
      <ListItem level={1}>Task management features</ListItem>
      <ListItem level={2}>Create and edit tasks</ListItem>
      <ListItem level={2}>Set due dates and priorities</ListItem>
      <ListItem level={2}>Assign tasks to team members</ListItem>
      <ListItem level={1}>Collaboration tools</ListItem>
      <ListItem level={2}>Real-time comments</ListItem>
      <ListItem level={2}>File sharing and attachments</ListItem>
      <ListItem level={1}>Reporting and analytics</ListItem>
    </List>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ListSkeleton />
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`OrderedList`,`UnorderedList`,`ComplexNesting`,`MixedContent`,`Skeleton`]}))();export{m as ComplexNesting,h as MixedContent,f as OrderedList,d as Playground,g as Skeleton,p as UnorderedList,_ as __namedExportsOrder,u as default};