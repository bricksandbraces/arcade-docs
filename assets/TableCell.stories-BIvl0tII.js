import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as y,F as $,G as D,H as a,f as n}from"./ContextMenuList-Cie4wAje.js";import"./index-CY-HDqYb.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const R=l=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:l.className,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})}),W=l=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:l.className,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 12h.01M12 12h.01M19 12h.01"})}),J={title:"WIP Components/DataTable/TableCell",component:a,argTypes:{kind:{control:"inline-radio",options:D},size:{control:"inline-radio",options:$},state:{control:"inline-radio",options:y}}},s={args:{kind:"text",size:"medium",state:"enabled",children:"Sample text content"}},i={render:()=>e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsxs("div",{className:"flex flex-row",children:[e.jsx(a,{kind:"text",size:"large",state:"enabled",children:"Large text cell"}),e.jsx(a,{kind:"text",size:"medium",state:"enabled",children:"Medium text cell"}),e.jsx(a,{kind:"text",size:"small",state:"enabled",children:"Small text cell"})]}),e.jsxs("div",{className:"flex flex-row",children:[e.jsx(a,{kind:"text",size:"medium",state:"enabled",children:"Enabled"}),e.jsx(a,{kind:"text",size:"medium",state:"hover",children:"Hover"}),e.jsx(a,{kind:"text",size:"medium",state:"selected",children:"Selected"}),e.jsx(a,{kind:"text",size:"medium",state:"active",children:"Active"})]})]})},t={render:()=>e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsxs("div",{className:"flex flex-row",children:[e.jsx(a,{kind:"header",size:"large",state:"enabled",children:"Large header"}),e.jsx(a,{kind:"header",size:"medium",state:"enabled",children:"Medium header"}),e.jsx(a,{kind:"header",size:"small",state:"enabled",children:"Small header"})]}),e.jsx("div",{className:"flex flex-row",children:e.jsx(a,{kind:"header",size:"medium",state:"enabled",actions:e.jsx(n,{label:"",onClick:()=>{},IconLeft:R}),children:"Header with action"})})]})},d={render:()=>e.jsx("div",{className:"gap-xs flex flex-col",children:e.jsxs("div",{className:"flex flex-row",children:[e.jsx(a,{kind:"action",size:"large",state:"enabled",actionButtons:e.jsxs("div",{className:"gap-xs flex",children:[e.jsx(n,{label:"Edit",onClick:()=>{}}),e.jsx(n,{label:"Delete",onClick:()=>{}})]})}),e.jsx(a,{kind:"action",size:"medium",state:"enabled",actionButtons:e.jsx(n,{label:"View",onClick:()=>{}})}),e.jsx(a,{kind:"action",size:"small",state:"enabled",actionButtons:e.jsx(n,{label:"",onClick:()=>{},IconLeft:W})})]})})},r={render:()=>e.jsx("div",{className:"gap-xs flex flex-col",children:e.jsxs("div",{className:"flex flex-row",children:[e.jsx(a,{kind:"radio",size:"large",state:"enabled",radioProps:{checked:!1,onChange:()=>{},name:"radio-group",value:"option1"}}),e.jsx(a,{kind:"radio",size:"medium",state:"enabled",radioProps:{checked:!0,onChange:()=>{},name:"radio-group",value:"option2"}}),e.jsx(a,{kind:"radio",size:"small",state:"enabled",radioProps:{checked:!1,onChange:()=>{},name:"radio-group",value:"option3",disabled:!0}})]})})},o={render:()=>e.jsxs("div",{className:"gap-xs flex flex-col",children:[e.jsxs("div",{className:"flex flex-row",children:[e.jsx(a,{kind:"check",size:"large",state:"enabled",checkProps:{checked:!1,onChange:()=>{}}}),e.jsx(a,{kind:"check",size:"medium",state:"enabled",checkProps:{checked:!0,onChange:()=>{}}}),e.jsx(a,{kind:"check",size:"small",state:"enabled",checkProps:{checked:"indeterminate",onChange:()=>{}}})]}),e.jsxs("div",{className:"flex flex-row",children:[e.jsx(a,{kind:"check",size:"medium",state:"enabled",checkProps:{checked:!1,onChange:()=>{},disabled:!0}}),e.jsx(a,{kind:"check",size:"medium",state:"selected",checkProps:{checked:!0,onChange:()=>{}}})]})]})},c={render:()=>e.jsx("div",{className:"gap-xs flex flex-col",children:$.map(l=>e.jsxs("div",{className:"gap-xs flex flex-row items-start",children:[e.jsxs(a,{kind:"text",size:l,state:"enabled",children:[l," text"]}),e.jsxs(a,{kind:"header",size:l,state:"enabled",children:[l," header"]}),e.jsx(a,{kind:"action",size:l,state:"enabled",actionButtons:e.jsx(n,{label:"Action",onClick:()=>{}})}),e.jsx(a,{kind:"radio",size:l,state:"enabled",radioProps:{checked:!1,onChange:()=>{},name:`radio-${l}`}}),e.jsx(a,{kind:"check",size:l,state:"enabled",checkProps:{checked:!1,onChange:()=>{}}})]},l))})},m={render:()=>e.jsx("div",{className:"gap-xs flex flex-col",children:y.map(l=>e.jsxs("div",{className:"gap-xs flex flex-row",children:[e.jsxs(a,{kind:"text",size:"medium",state:l,children:[l," text"]}),e.jsxs(a,{kind:"header",size:"medium",state:l,children:[l," header"]}),e.jsx(a,{kind:"action",size:"medium",state:l,actionButtons:e.jsx(n,{label:"Action",onClick:()=>{}})}),e.jsx(a,{kind:"radio",size:"medium",state:l,radioProps:{checked:!1,onChange:()=>{},name:`radio-${l}`}}),e.jsx(a,{kind:"check",size:"medium",state:l,checkProps:{checked:!1,onChange:()=>{}}})]},l))})};var x,h,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    kind: "text",
    size: "medium",
    state: "enabled",
    children: "Sample text content"
  }
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,p,u;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="gap-xs flex flex-col">
      <div className="flex flex-row">
        <TableCell kind="text" size="large" state="enabled">
          Large text cell
        </TableCell>
        <TableCell kind="text" size="medium" state="enabled">
          Medium text cell
        </TableCell>
        <TableCell kind="text" size="small" state="enabled">
          Small text cell
        </TableCell>
      </div>
      <div className="flex flex-row">
        <TableCell kind="text" size="medium" state="enabled">
          Enabled
        </TableCell>
        <TableCell kind="text" size="medium" state="hover">
          Hover
        </TableCell>
        <TableCell kind="text" size="medium" state="selected">
          Selected
        </TableCell>
        <TableCell kind="text" size="medium" state="active">
          Active
        </TableCell>
      </div>
    </div>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var C,f,g;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="gap-xs flex flex-col">
      <div className="flex flex-row">
        <TableCell kind="header" size="large" state="enabled">
          Large header
        </TableCell>
        <TableCell kind="header" size="medium" state="enabled">
          Medium header
        </TableCell>
        <TableCell kind="header" size="small" state="enabled">
          Small header
        </TableCell>
      </div>
      <div className="flex flex-row">
        <TableCell kind="header" size="medium" state="enabled" actions={<Button label="" onClick={() => {}} IconLeft={ArrowUpIcon} />}>
          Header with action
        </TableCell>
      </div>
    </div>
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,z,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="gap-xs flex flex-col">
      <div className="flex flex-row">
        <TableCell kind="action" size="large" state="enabled" actionButtons={<div className="gap-xs flex">
              <Button label="Edit" onClick={() => {}} />
              <Button label="Delete" onClick={() => {}} />
            </div>} />
        <TableCell kind="action" size="medium" state="enabled" actionButtons={<Button label="View" onClick={() => {}} />} />
        <TableCell kind="action" size="small" state="enabled" actionButtons={<Button label="" onClick={() => {}} IconLeft={MoreHorizontalIcon} />} />
      </div>
    </div>
}`,...(j=(z=d.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var T,N,w;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="gap-xs flex flex-col">
      <div className="flex flex-row">
        <TableCell kind="radio" size="large" state="enabled" radioProps={{
        checked: false,
        onChange: () => {},
        name: "radio-group",
        value: "option1"
      }} />
        <TableCell kind="radio" size="medium" state="enabled" radioProps={{
        checked: true,
        onChange: () => {},
        name: "radio-group",
        value: "option2"
      }} />
        <TableCell kind="radio" size="small" state="enabled" radioProps={{
        checked: false,
        onChange: () => {},
        name: "radio-group",
        value: "option3",
        disabled: true
      }} />
      </div>
    </div>
}`,...(w=(N=r.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var P,S,B;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="gap-xs flex flex-col">
      <div className="flex flex-row">
        <TableCell kind="check" size="large" state="enabled" checkProps={{
        checked: false,
        onChange: () => {}
      }} />
        <TableCell kind="check" size="medium" state="enabled" checkProps={{
        checked: true,
        onChange: () => {}
      }} />
        <TableCell kind="check" size="small" state="enabled" checkProps={{
        checked: "indeterminate",
        onChange: () => {}
      }} />
      </div>
      <div className="flex flex-row">
        <TableCell kind="check" size="medium" state="enabled" checkProps={{
        checked: false,
        onChange: () => {},
        disabled: true
      }} />
        <TableCell kind="check" size="medium" state="selected" checkProps={{
        checked: true,
        onChange: () => {}
      }} />
      </div>
    </div>
}`,...(B=(S=o.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var A,L,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="gap-xs flex flex-col">
      {TableCellSizes.map(size => <div key={size} className="gap-xs flex flex-row items-start">
          <TableCell kind="text" size={size} state="enabled">
            {size} text
          </TableCell>
          <TableCell kind="header" size={size} state="enabled">
            {size} header
          </TableCell>
          <TableCell kind="action" size={size} state="enabled" actionButtons={<Button label="Action" onClick={() => {}} />} />
          <TableCell kind="radio" size={size} state="enabled" radioProps={{
        checked: false,
        onChange: () => {},
        name: \`radio-\${size}\`
      }} />
          <TableCell kind="check" size={size} state="enabled" checkProps={{
        checked: false,
        onChange: () => {}
      }} />
        </div>)}
    </div>
}`,...(M=(L=c.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,I,E;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="gap-xs flex flex-col">
      {TableCellStates.map(state => <div key={state} className="gap-xs flex flex-row">
          <TableCell kind="text" size="medium" state={state}>
            {state} text
          </TableCell>
          <TableCell kind="header" size="medium" state={state}>
            {state} header
          </TableCell>
          <TableCell kind="action" size="medium" state={state} actionButtons={<Button label="Action" onClick={() => {}} />} />
          <TableCell kind="radio" size="medium" state={state} radioProps={{
        checked: false,
        onChange: () => {},
        name: \`radio-\${state}\`
      }} />
          <TableCell kind="check" size="medium" state={state} checkProps={{
        checked: false,
        onChange: () => {}
      }} />
        </div>)}
    </div>
}`,...(E=(I=m.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const Q=["Playground","TextCells","HeaderCells","ActionCells","RadioCells","CheckCells","AllSizes","AllStates"];export{d as ActionCells,c as AllSizes,m as AllStates,o as CheckCells,t as HeaderCells,s as Playground,r as RadioCells,i as TextCells,Q as __namedExportsOrder,J as default};
