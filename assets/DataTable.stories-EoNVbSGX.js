import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$n as n,$r as r,Ni as i,O as a,P as o,Qn as s,Ri as c,Wi as l,ai as u,ar as d,bi as f,cr as p,dn as m,ga as h,go as g,lr as _,or as v,rr as y,t as b,to as x}from"./iframe-BmHhhjqm.js";function S(){let[e,t]=(0,w.useState)(`all`);return(0,T.jsx)(o,{leftSlot:(0,T.jsx)(m,{id:`data-table-composition-view`,title:`View`,hideLabel:!0,inline:!0,size:`small`,reserveInlineFeedbackHeight:!1,value:e,onChange:t,items:A}),rightSlot:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:i,"aria-label":`Layout`}),(0,T.jsx)(h,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:f,"aria-label":`Search`}),(0,T.jsx)(h,{kind:`ghost`,size:`small`,variant:`rounded`,IconLeft:c,"aria-label":`Filter`}),(0,T.jsx)(`div`,{className:`flex items-center self-stretch py-sm`,children:(0,T.jsx)(r,{orientation:`vertical`,width:`0.5`,className:`min-h-[24px]`})}),(0,T.jsx)(h,{kind:`ghost`,size:`small`,label:`Export`,IconRight:l})]})})}function C(){if(typeof window>`u`)return{};try{let e=window.localStorage.getItem(H);if(!e)return{};let t=JSON.parse(e);if(t&&typeof t==`object`)return t}catch{}return{}}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;e((()=>{b(),u(),w=t(g(),1),T=x(),E=[{name:`Ada Lovelace`,email:`ada@example.com`,role:`Admin`,status:`active`},{name:`Grace Hopper`,email:`grace@example.com`,role:`Editor`,status:`active`},{name:`Alan Turing`,email:`alan@example.com`,role:`Viewer`,status:`pending`},{name:`Katherine Johnson`,email:`katherine@example.com`,role:`Editor`,status:`inactive`},{name:`Margaret Hamilton`,email:`margaret@example.com`,role:`Admin`,status:`active`}],D=Array.from({length:47},(e,t)=>{let n=E[t%E.length],r=t+1;return{...n,id:String(r),name:`${n.name} #${r}`}}),O={active:`lime`,inactive:`gray`,pending:`orange`},k=10,A=[{label:`All members`,value:`all`},{label:`Admins only`,value:`admins`},{label:`Pending invites`,value:`pending`}],j=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,T.jsx)(p,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,T.jsx)(_,{color:O[e.status],children:e.status})}],M=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0,editable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,T.jsx)(p,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,T.jsx)(_,{color:O[e.status],children:e.status})}],N={title:`Display & Data/DataTable/DataTable`,component:s,tags:[`autodocs`],argTypes:{selectionMode:{control:`inline-radio`,options:[`none`,`single`,`multiple`]},selectionControl:{control:`inline-radio`,options:n,description:`Row-index column control. Defaults: single → radio, multiple → checkbox. "multiple" always uses checkboxes.`}},args:{selectionMode:`none`,title:`Data Table`,subtitle:`A compact overview of the team.`},parameters:{docs:{description:{component:`Data grid with sorting, selection, and pagination. Use for dense tabular data where rows represent records and columns are consistent fields.`}}}},P={render:e=>{let[t,n]=(0,w.useState)(1),r=Math.max(1,Math.ceil(D.length/k)),i=Math.min(t,r);return(0,T.jsx)(`div`,{style:{width:960},children:(0,T.jsx)(s,{...e,columns:j,data:D,currentPage:i,rowsPerPage:k,footer:(0,T.jsx)(a,{currentPage:i,totalPages:r,onPageChange:n})})})}},F={args:{selectionMode:`single`},render:P.render},I={args:{selectionMode:`multiple`},render:P.render},L={args:{selectionMode:`single`},render:P.render},R={args:{selectionMode:`single`,selectionControl:`checkbox`},render:P.render},z={args:{selectionMode:`multiple`},render:e=>{let[t,n]=(0,w.useState)(1),r=Math.max(1,Math.ceil(D.length/k)),i=Math.min(t,r);return(0,T.jsx)(`div`,{style:{width:960},children:(0,T.jsx)(s,{...e,className:`bg-transparent`,toolbar:(0,T.jsx)(S,{}),header:(0,T.jsx)(d,{title:`Team directory`,subtitle:`Search, filter, and manage workspace members.`}),columns:j,data:D,currentPage:i,rowsPerPage:k,footer:(0,T.jsx)(a,{currentPage:i,totalPages:r,onPageChange:n})})})}},B={render:e=>(0,T.jsx)(`div`,{style:{width:960},children:(0,T.jsx)(s,{...e,columns:j,data:D})})},V={name:`With inline editable cells`,parameters:{docs:{description:{story:"The **Name** column uses `editable: true`. Click a cell to edit (pointer cursor); blur or Enter commits (updates local story state). Escape restores the previous value."}}},args:{selectionMode:`none`,title:`Editable cells`,subtitle:`Click a name to edit inline.`},render:e=>{let[t,n]=(0,w.useState)(()=>D.slice(0,12).map(e=>({...e})));return(0,T.jsx)(`div`,{style:{width:960},children:(0,T.jsx)(s,{...e,columns:M,data:t,onCellTextCommit:({rowId:e,columnKey:t,value:r})=>{n(n=>n.map(n=>n.id===e&&t===`name`?{...n,name:r}:n))}})})}},H=`arcade-storybook:datatable:column-widths`,U={name:`With persisted column widths`,parameters:{docs:{description:{story:"Columns are resizable; the widths are saved to `localStorage` so they persist across reloads. The story wires up `columnWidths` (controlled) + `onColumnWidthsChange`. Use the **Reset widths** button to clear the stored widths and fall back to auto sizing."}}},args:{selectionMode:`none`,title:`Persisted column widths`,subtitle:`Drag a header divider to resize. Reload to verify persistence.`},render:e=>{let[t,n]=(0,w.useState)(()=>C()),r=e=>{n(e);try{window.localStorage.setItem(H,JSON.stringify(e))}catch{}};return(0,T.jsxs)(`div`,{style:{width:960},className:`flex flex-col gap-md`,children:[(0,T.jsx)(`div`,{children:(0,T.jsx)(h,{kind:`ghost`,size:`small`,label:`Reset widths`,onClick:()=>{try{window.localStorage.removeItem(H)}catch{}n({})}})}),(0,T.jsx)(s,{...e,columns:j,data:D.slice(0,10),columnWidths:t,onColumnWidthsChange:r})]})}},W={render:e=>(0,T.jsx)(`div`,{style:{width:720},children:(0,T.jsxs)(s,{...e,title:`Recent activity`,subtitle:`Manually composed rows`,children:[(0,T.jsxs)(y,{showBorderTop:!0,showBorderBottom:!0,children:[(0,T.jsx)(v,{columnBorderRight:!0,children:`Deployment succeeded`}),(0,T.jsx)(v,{children:`2 minutes ago`})]}),(0,T.jsxs)(y,{children:[(0,T.jsx)(v,{columnBorderRight:!0,children:`Build finished`}),(0,T.jsx)(v,{children:`11 minutes ago`})]})]})})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil(people.length / STORY_ROWS_PER_PAGE));
    const safePage = Math.min(page, totalPages);
    return <div style={{
      width: 960
    }}>
        <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people} currentPage={safePage} rowsPerPage={STORY_ROWS_PER_PAGE} footer={<TableFooter currentPage={safePage} totalPages={totalPages} onPageChange={setPage} />} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...L.parameters?.docs?.source},description:{story:`Single-select with compact radios in the row-index column (default control).`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single",
    selectionControl: "checkbox"
  },
  render: Playground.render
}`,...R.parameters?.docs?.source},description:{story:`Single-select with compact checkboxes in the row-index column.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil(people.length / STORY_ROWS_PER_PAGE));
    const safePage = Math.min(page, totalPages);
    return <div style={{
      width: 960
    }}>
        <DataTable<Person> {...args} className="bg-transparent" toolbar={<StoryTableToolbar />} header={<TableHeader title="Team directory" subtitle="Search, filter, and manage workspace members." />} columns={columnsWithRowIndex} data={people} currentPage={safePage} rowsPerPage={STORY_ROWS_PER_PAGE} footer={<TableFooter currentPage={safePage} totalPages={totalPages} onPageChange={setPage} />} />
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:"Full chrome: `TableHeader` (`header` slot) → `TableToolbar` → grid → `TableFooter`.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people} />
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "With inline editable cells",
  parameters: {
    docs: {
      description: {
        story: "The **Name** column uses \`editable: true\`. Click a cell to edit (pointer cursor); blur or Enter commits (updates local story state). Escape restores the previous value."
      }
    }
  },
  args: {
    selectionMode: "none",
    title: "Editable cells",
    subtitle: "Click a name to edit inline."
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rows, setRows] = useState<Person[]>(() => people.slice(0, 12).map(row => ({
      ...row
    })));
    return <div style={{
      width: 960
    }}>
        <DataTable<Person> {...args} columns={columnsWithEditableName} data={rows} onCellTextCommit={({
        rowId,
        columnKey,
        value
      }) => {
        setRows(prev => prev.map(row => row.id === rowId && columnKey === "name" ? {
          ...row,
          name: value
        } : row));
      }} />
      </div>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Inline text editing on the Name column (`editable` + `onCellTextCommit`). Click to edit; Enter or blur saves, Escape cancels.",...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "With persisted column widths",
  parameters: {
    docs: {
      description: {
        story: "Columns are resizable; the widths are saved to \`localStorage\` so they persist across reloads. The story wires up \`columnWidths\` (controlled) + \`onColumnWidthsChange\`. Use the **Reset widths** button to clear the stored widths and fall back to auto sizing."
      }
    }
  },
  args: {
    selectionMode: "none",
    title: "Persisted column widths",
    subtitle: "Drag a header divider to resize. Reload to verify persistence."
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [widths, setWidths] = useState<Record<string, number>>(() => readPersistedWidths());
    const persistWidths = (next: Record<string, number>) => {
      setWidths(next);
      try {
        window.localStorage.setItem(PERSISTED_WIDTHS_STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* storage unavailable (e.g. quota / privacy mode) → keep state in memory */
      }
    };
    const resetWidths = () => {
      try {
        window.localStorage.removeItem(PERSISTED_WIDTHS_STORAGE_KEY);
      } catch {
        /* ignore */
      }
      setWidths({});
    };
    return <div style={{
      width: 960
    }} className="flex flex-col gap-md">
        <div>
          <Button kind="ghost" size="small" label="Reset widths" onClick={resetWidths} />
        </div>
        <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people.slice(0, 10)} columnWidths={widths} onColumnWidthsChange={persistWidths} />
      </div>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 720
  }}>
      <DataTable {...args} title="Recent activity" subtitle="Manually composed rows">
        <TableRow showBorderTop showBorderBottom>
          <TableCell columnBorderRight>Deployment succeeded</TableCell>
          <TableCell>2 minutes ago</TableCell>
        </TableRow>
        <TableRow>
          <TableCell columnBorderRight>Build finished</TableCell>
          <TableCell>11 minutes ago</TableCell>
        </TableRow>
      </DataTable>
    </div>
}`,...W.parameters?.docs?.source}}},G=[`Playground`,`WithSingleSelection`,`WithMultipleSelection`,`WithSingleRadioInRowIndex`,`WithSingleCheckboxInRowIndex`,`WithToolbarHeaderAndFooter`,`WithoutFooter`,`WithInlineEditableCells`,`WithPersistedColumnWidths`,`Composed`]}))();export{W as Composed,P as Playground,V as WithInlineEditableCells,I as WithMultipleSelection,U as WithPersistedColumnWidths,R as WithSingleCheckboxInRowIndex,L as WithSingleRadioInRowIndex,F as WithSingleSelection,z as WithToolbarHeaderAndFooter,B as WithoutFooter,G as __namedExportsOrder,N as default};