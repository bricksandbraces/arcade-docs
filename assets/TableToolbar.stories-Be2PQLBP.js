import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bi as n,Fi as r,Ki as i,P as a,Si as o,fn as s,ro as c,si as l,t as u,ti as d,va as f,vo as p}from"./iframe-C1Q2u2SU.js";function m(){let[e,t]=(0,h.useState)(`1`);return(0,g.jsx)(s,{id:`fabian-table-toolbar-view`,title:`View`,hideLabel:!0,inline:!0,size:`small`,reserveInlineFeedbackHeight:!1,value:e,onChange:t,items:_})}var h,g,_,v,y,b,x,S;e((()=>{u(),l(),h=t(p(),1),g=c(),_=[{label:`View 1`,value:`1`},{label:`View 2`,value:`2`},{label:`View 3`,value:`3`}],v={title:`Display & Data/DataTable/TableToolbar`,component:a,decorators:[e=>(0,g.jsx)(`div`,{style:{width:994},className:`rounded-md bg-background`,children:(0,g.jsx)(e,{})})]},y={render:()=>(0,g.jsx)(a,{leftSlot:(0,g.jsx)(m,{}),rightSlot:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:r,"aria-label":`Layout`}),(0,g.jsx)(f,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:o,"aria-label":`Search`}),(0,g.jsx)(f,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:n,"aria-label":`Filter`}),(0,g.jsx)(`div`,{className:`flex self-stretch items-center py-sm`,children:(0,g.jsx)(d,{orientation:`vertical`,width:`0.5`,className:`min-h-[24px]`})}),(0,g.jsx)(f,{kind:`ghost`,size:`small`,label:`Export`,IconRight:i})]})})},b={render:()=>(0,g.jsx)(a,{leftSlot:(0,g.jsx)(m,{}),rightSlot:void 0})},x={args:{leftSlot:void 0,rightSlot:(0,g.jsx)(f,{kind:`secondary`,size:`small`,label:`Export`})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <TableToolbar leftSlot={<InlineViewDropdown />} rightSlot={<>
          <Button kind="ghost" size="small" variant="rounded" IconLeft={IconLayoutGrid} aria-label="Layout" />
          <Button kind="ghost" size="small" variant="rounded" IconLeft={IconSearch} aria-label="Search" />
          <Button kind="ghost" size="small" variant="rounded" IconLeft={IconFilter} aria-label="Filter" />
          <div className="flex self-stretch items-center py-sm">
            <Divider orientation="vertical" width="0.5" className="min-h-[24px]" />
          </div>
          <Button kind="ghost" size="small" label="Export" IconRight={IconDownload} />
        </>} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <TableToolbar leftSlot={<InlineViewDropdown />} rightSlot={undefined} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    leftSlot: undefined,
    rightSlot: <Button kind="secondary" size="small" label="Export" />
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`LeftOnly`,`RightOnly`]}))();export{b as LeftOnly,y as Playground,x as RightOnly,S as __namedExportsOrder,v as default};