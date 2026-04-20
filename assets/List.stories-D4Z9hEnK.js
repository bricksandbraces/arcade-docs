import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aU as i,aV as b,aW as t}from"./ContextMenuList-w4l5Bqjq.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const O={title:"Components/List",component:i},s={argTypes:{type:{control:"inline-radio",options:b}},render:T=>e.jsxs(i,{type:T.type,children:[e.jsx(t,{type:"ordered",level:1,children:"First list item"}),e.jsx(t,{level:2,children:"Nested list item"}),e.jsx(t,{level:2,children:"Another nested item"}),e.jsx(t,{level:1,children:"Second main item"})]}),args:{type:"unordered"}},n={args:{type:"ordered",children:e.jsxs(i,{type:"ordered",children:[e.jsx(t,{level:1,children:"First list item"}),e.jsx(t,{level:2,children:"Nested list item (a.)"}),e.jsx(t,{level:2,children:"Another nested item (b.)"}),e.jsx(t,{level:2,children:"Third nested item (c.)"}),e.jsx(t,{level:1,children:"Second main item"}),e.jsx(t,{level:1,children:"Third main item"})]})}},r={args:{type:"unordered",children:e.jsxs(i,{type:"unordered",children:[e.jsx(t,{level:1,children:"First list item"}),e.jsx(t,{level:2,children:"Nested list item"}),e.jsx(t,{level:2,children:"Another nested item"}),e.jsx(t,{level:2,children:"Third nested item"}),e.jsx(t,{level:1,children:"Second main item"}),e.jsx(t,{level:1,children:"Third main item"})]})}},l={args:{type:"ordered",children:e.jsxs(i,{children:[e.jsx(t,{children:"Introduction to the topic"}),e.jsx(t,{level:2,children:"First subtopic"}),e.jsx(t,{level:2,children:"Second subtopic with more detailed explanation that wraps to multiple lines"}),e.jsx(t,{children:"Main point number two"}),e.jsx(t,{level:2,children:"Supporting detail"}),e.jsx(t,{level:2,children:"Another supporting detail"}),e.jsx(t,{children:"Final main point"})]})}},m={args:{type:"unordered",children:e.jsxs(i,{children:[e.jsx(t,{level:1,children:"Task management features"}),e.jsx(t,{level:2,children:"Create and edit tasks"}),e.jsx(t,{level:2,children:"Set due dates and priorities"}),e.jsx(t,{level:2,children:"Assign tasks to team members"}),e.jsx(t,{level:1,children:"Collaboration tools"}),e.jsx(t,{level:2,children:"Real-time comments"}),e.jsx(t,{level:2,children:"File sharing and attachments"}),e.jsx(t,{level:1,children:"Reporting and analytics"})]})}};var d,o,a;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(a=(o=s.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var c,p,L;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    type: "ordered",
    children: <List type="ordered">
        <ListItem level={1}>First list item</ListItem>
        <ListItem level={2}>Nested list item (a.)</ListItem>
        <ListItem level={2}>Another nested item (b.)</ListItem>
        <ListItem level={2}>Third nested item (c.)</ListItem>
        <ListItem level={1}>Second main item</ListItem>
        <ListItem level={1}>Third main item</ListItem>
      </List>
  }
}`,...(L=(p=n.parameters)==null?void 0:p.docs)==null?void 0:L.source}}};var h,I,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "unordered",
    children: <List type="unordered">
        <ListItem level={1}>First list item</ListItem>
        <ListItem level={2}>Nested list item</ListItem>
        <ListItem level={2}>Another nested item</ListItem>
        <ListItem level={2}>Third nested item</ListItem>
        <ListItem level={1}>Second main item</ListItem>
        <ListItem level={1}>Third main item</ListItem>
      </List>
  }
}`,...(v=(I=r.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var u,x,j;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "ordered",
    children: <List>
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
  }
}`,...(j=(x=l.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var g,y,S;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "unordered",
    children: <List>
        <ListItem level={1}>Task management features</ListItem>
        <ListItem level={2}>Create and edit tasks</ListItem>
        <ListItem level={2}>Set due dates and priorities</ListItem>
        <ListItem level={2}>Assign tasks to team members</ListItem>
        <ListItem level={1}>Collaboration tools</ListItem>
        <ListItem level={2}>Real-time comments</ListItem>
        <ListItem level={2}>File sharing and attachments</ListItem>
        <ListItem level={1}>Reporting and analytics</ListItem>
      </List>
  }
}`,...(S=(y=m.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const U=["Playground","OrderedList","UnorderedList","ComplexNesting","MixedContent"];export{l as ComplexNesting,m as MixedContent,n as OrderedList,s as Playground,r as UnorderedList,U as __namedExportsOrder,O as default};
