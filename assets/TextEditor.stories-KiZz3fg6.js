import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bG as g,bH as K,bI as Q,bJ as U}from"./ContextMenuList-DS-QXGCp.js";import{R as q}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const le={title:"WIP Components/TextEditor",component:g,parameters:{layout:"padded",docs:{description:{component:"A rich text editor component with comprehensive formatting tools including text styling, font selection, color picker, and alignment options."}}},argTypes:{value:{control:"text",description:"HTML content of the editor"},onChange:{action:"changed",description:"Callback fired when editor content changes"},placeholder:{control:"text",description:"Placeholder text shown when editor is empty"},disabled:{control:"boolean",description:"Whether the editor is disabled"},fonts:{control:"object",description:"Available font families for selection"},fontSizes:{control:"object",description:"Available font sizes for selection"},colors:{control:"object",description:"Available colors for text color picker"},className:{control:"text",description:"Additional CSS classes"}}},r={args:{placeholder:"Start writing your document...",value:"<p>Welcome to the <strong>text editor</strong>! You can format your text with various tools including <em>italic</em>, <u>underline</u>, and <s>strikethrough</s>.</p><p>You can also change fonts, sizes, colors, and alignment.</p>",disabled:!1,fonts:[...U],fontSizes:[...Q],colors:[...K]}},a={args:{placeholder:"Start writing...",value:"",disabled:!1}},n={args:{value:`<h1>Rich Text Document</h1><p>This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.</p><p style="text-align: center;">This paragraph is center-aligned.</p><p style="text-align: right;">This paragraph is right-aligned.</p><ul><li>First item</li><li>Second item</li><li>Third item</li></ul><p>You can use various <span style="color: #FF0000">text colors</span> and <span style="font-family: 'Times New Roman'">different fonts</span>.</p>`,disabled:!1}},i={args:{value:"<p>This editor is <strong>disabled</strong> and cannot be edited.</p><p>All toolbar buttons are also disabled.</p>",disabled:!0}},l={args:{placeholder:"Write your amazing content here...",value:"",disabled:!1}},d={args:{value:"<p>This editor has limited font options.</p>",fonts:["Hanken Sans","Roboto"],disabled:!1}},c={args:{value:"<p>This editor has limited font size options.</p>",fontSizes:["14","16"],disabled:!1}},p={args:{value:"<p>This editor has limited color options.</p>",colors:["#000000","#FF0000","#00FF00","#0000FF"],disabled:!1}},V=()=>{const[t,s]=q.useState("<p>Edit this content and see the controlled state in action!</p>");return e.jsxs("div",{className:"space-y-md",children:[e.jsx(g,{value:t,onChange:s,placeholder:"Start typing..."}),e.jsxs("div",{className:"border-border-secondary p-md bg-background-secondary rounded-xs border",children:[e.jsx("h4",{className:"mb-xs text-sm font-medium",children:"Current HTML Content:"}),e.jsx("pre",{className:"text-text-secondary text-xs whitespace-pre-wrap",children:t})]})]})},m={render:()=>e.jsx(V,{}),parameters:{docs:{description:{story:"Example showing controlled state with real-time HTML content display."}}}},X=()=>{const[t,s]=q.useState({title:"",content:"<p>Write your article content here...</p>"}),B=o=>{o.preventDefault(),alert(`Form submitted!
Title: ${t.title}
Content: ${t.content}`)};return e.jsxs("form",{onSubmit:B,className:"space-y-lg max-w-3xl",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"title",className:"text-text-primary mb-xs block text-sm font-medium",children:"Article Title"}),e.jsx("input",{id:"title",type:"text",value:t.title,onChange:o=>s(h=>({...h,title:o.target.value})),className:"px-sm py-xs border-border-primary focus:border-border-focus focus:shadow-focus w-full rounded-xs border outline-none",placeholder:"Enter article title..."})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"content",className:"text-text-primary mb-xs block text-sm font-medium",children:"Article Content"}),e.jsx(g,{value:t.content,onChange:o=>s(h=>({...h,content:o})),placeholder:"Write your article content..."})]}),e.jsx("button",{type:"submit",className:"px-md py-xs bg-background-accent text-text-on-accent hover:bg-background-accent-hover focus:shadow-focus rounded-xs font-medium outline-none",children:"Publish Article"})]})},u={render:()=>e.jsx(X,{}),parameters:{docs:{description:{story:"Example showing TextEditor integrated within a form."}}}};var x,f,b;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "Start writing your document...",
    value: "<p>Welcome to the <strong>text editor</strong>! You can format your text with various tools including <em>italic</em>, <u>underline</u>, and <s>strikethrough</s>.</p><p>You can also change fonts, sizes, colors, and alignment.</p>",
    disabled: false,
    fonts: [...FontFamilies],
    fontSizes: [...FontSizes],
    colors: [...DefaultColors]
  }
}`,...(b=(f=r.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,v,S;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: "Start writing...",
    value: "",
    disabled: false
  }
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var F,T,w;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: '<h1>Rich Text Document</h1><p>This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.</p><p style="text-align: center;">This paragraph is center-aligned.</p><p style="text-align: right;">This paragraph is right-aligned.</p><ul><li>First item</li><li>Second item</li><li>Third item</li></ul><p>You can use various <span style="color: #FF0000">text colors</span> and <span style="font-family: \\'Times New Roman\\'">different fonts</span>.</p>',
    disabled: false
  }
}`,...(w=(T=n.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,j,E;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: "<p>This editor is <strong>disabled</strong> and cannot be edited.</p><p>All toolbar buttons are also disabled.</p>",
    disabled: true
  }
}`,...(E=(j=i.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var z,k,N;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    placeholder: "Write your amazing content here...",
    value: "",
    disabled: false
  }
}`,...(N=(k=l.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var A,L,W;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: "<p>This editor has limited font options.</p>",
    fonts: ["Hanken Sans", "Roboto"],
    disabled: false
  }
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var D,R,H;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: "<p>This editor has limited font size options.</p>",
    fontSizes: ["14", "16"],
    disabled: false
  }
}`,...(H=(R=c.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var P,Y,I;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: "<p>This editor has limited color options.</p>",
    colors: ["#000000", "#FF0000", "#00FF00", "#0000FF"],
    disabled: false
  }
}`,...(I=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:I.source}}};var M,_,$;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story: "Example showing controlled state with real-time HTML content display."
      }
    }
  }
}`,...($=(_=m.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var G,J,O;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <FormExample />,
  parameters: {
    docs: {
      description: {
        story: "Example showing TextEditor integrated within a form."
      }
    }
  }
}`,...(O=(J=u.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};const de=["Playground","Empty","WithContent","Disabled","CustomPlaceholder","LimitedFonts","LimitedSizes","LimitedColors","ControlledState","InForm"];export{m as ControlledState,l as CustomPlaceholder,i as Disabled,a as Empty,u as InForm,p as LimitedColors,d as LimitedFonts,c as LimitedSizes,r as Playground,n as WithContent,de as __namedExportsOrder,le as default};
