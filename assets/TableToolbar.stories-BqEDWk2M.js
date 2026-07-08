import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{P as n,Sa as r,So as i,Ti as a,Wi as o,Xi as s,hn as c,ii as l,so as u,t as d,ui as f,zi as p}from"./iframe-wiHC-9as.js";function m(){let[e,t]=(0,h.useState)(`1`);return(0,g.jsx)(c,{id:`fabian-table-toolbar-view`,title:`View`,hideLabel:!0,inline:!0,size:`small`,reserveInlineNotificationHeight:!1,value:e,onChange:t,items:_})}var h,g,_,v,y,b,x,S;e((()=>{d(),f(),h=t(i(),1),g=u(),_=[{label:`View 1`,value:`1`},{label:`View 2`,value:`2`},{label:`View 3`,value:`3`}],v={title:`Display & Data/DataTable/TableToolbar`,component:n,decorators:[e=>(0,g.jsx)(`div`,{style:{width:994},className:`bg-background rounded-md`,children:(0,g.jsx)(e,{})})]},y={render:()=>(0,g.jsx)(n,{leftSlot:(0,g.jsx)(m,{}),rightSlot:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:p,"aria-label":`Layout`}),(0,g.jsx)(r,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:a,"aria-label":`Search`}),(0,g.jsx)(r,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:o,"aria-label":`Filter`}),(0,g.jsx)(`div`,{className:`py-sm flex items-center self-stretch`,children:(0,g.jsx)(l,{orientation:`vertical`,width:`0.5`,className:`min-h-[24px]`})}),(0,g.jsx)(r,{kind:`ghost`,size:`small`,label:`Export`,IconRight:s})]})})},b={render:()=>(0,g.jsx)(n,{leftSlot:(0,g.jsx)(m,{}),rightSlot:void 0})},x={args:{leftSlot:void 0,rightSlot:(0,g.jsx)(r,{kind:`secondary`,size:`small`,label:`Export`})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <TableToolbar leftSlot={<InlineViewDropdown />} rightSlot={<>
          <Button kind="ghost" size="small" variant="rounded" IconLeft={IconLayoutGrid} aria-label="Layout" />
          <Button kind="ghost" size="small" variant="rounded" IconLeft={IconSearch} aria-label="Search" />
          <Button kind="ghost" size="small" variant="rounded" IconLeft={IconFilter} aria-label="Filter" />
          <div className="py-sm flex items-center self-stretch">
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