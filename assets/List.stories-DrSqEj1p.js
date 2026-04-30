import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,gt as n,ht as r,mt as i,t as a}from"./iframe-ChiQ7sZy.js";var o,s,c,l,u,d,f,p;e((()=>{a(),o=t(),s={title:`Components/List`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"Typographic ordered or unordered list with consistent bullet and indent spacing. Use in body content where native `<ul>`/`<ol>` styling is needed."}}}},c={argTypes:{type:{control:`inline-radio`,options:r}},render:e=>(0,o.jsxs)(i,{type:e.type,children:[(0,o.jsx)(n,{type:`ordered`,level:1,children:`First list item`}),(0,o.jsx)(n,{level:2,children:`Nested list item`}),(0,o.jsx)(n,{level:2,children:`Another nested item`}),(0,o.jsx)(n,{level:1,children:`Second main item`})]}),args:{type:`unordered`}},l={args:{type:`ordered`},render:e=>(0,o.jsxs)(i,{type:e.type,children:[(0,o.jsx)(n,{level:1,children:`First list item`}),(0,o.jsx)(n,{level:2,children:`Nested list item (a.)`}),(0,o.jsx)(n,{level:2,children:`Another nested item (b.)`}),(0,o.jsx)(n,{level:2,children:`Third nested item (c.)`}),(0,o.jsx)(n,{level:1,children:`Second main item`}),(0,o.jsx)(n,{level:1,children:`Third main item`})]})},u={args:{type:`unordered`},render:e=>(0,o.jsxs)(i,{type:e.type,children:[(0,o.jsx)(n,{level:1,children:`First list item`}),(0,o.jsx)(n,{level:2,children:`Nested list item`}),(0,o.jsx)(n,{level:2,children:`Another nested item`}),(0,o.jsx)(n,{level:2,children:`Third nested item`}),(0,o.jsx)(n,{level:1,children:`Second main item`}),(0,o.jsx)(n,{level:1,children:`Third main item`})]})},d={args:{type:`ordered`},render:e=>(0,o.jsxs)(i,{type:e.type,children:[(0,o.jsx)(n,{children:`Introduction to the topic`}),(0,o.jsx)(n,{level:2,children:`First subtopic`}),(0,o.jsx)(n,{level:2,children:`Second subtopic with more detailed explanation that wraps to multiple lines`}),(0,o.jsx)(n,{children:`Main point number two`}),(0,o.jsx)(n,{level:2,children:`Supporting detail`}),(0,o.jsx)(n,{level:2,children:`Another supporting detail`}),(0,o.jsx)(n,{children:`Final main point`})]})},f={args:{type:`unordered`},render:e=>(0,o.jsxs)(i,{type:e.type,children:[(0,o.jsx)(n,{level:1,children:`Task management features`}),(0,o.jsx)(n,{level:2,children:`Create and edit tasks`}),(0,o.jsx)(n,{level:2,children:`Set due dates and priorities`}),(0,o.jsx)(n,{level:2,children:`Assign tasks to team members`}),(0,o.jsx)(n,{level:1,children:`Collaboration tools`}),(0,o.jsx)(n,{level:2,children:`Real-time comments`}),(0,o.jsx)(n,{level:2,children:`File sharing and attachments`}),(0,o.jsx)(n,{level:1,children:`Reporting and analytics`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`OrderedList`,`UnorderedList`,`ComplexNesting`,`MixedContent`]}))();export{d as ComplexNesting,f as MixedContent,l as OrderedList,c as Playground,u as UnorderedList,p as __namedExportsOrder,s as default};