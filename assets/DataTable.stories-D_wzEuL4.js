import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{A as n,B as r,I as i,Jn as a,O as o,Pa as s,Qr as c,Qs as l,R as u,Zr as d,ai as f,ii as ee,ko as te,ni as p,pc as m,ps as h,si as g,t as ne,va as re,yi as ie,z as ae}from"./iframe-CFcow8pV.js";import{n as oe,t as se}from"./figmaDesign-DDiUnvXT.js";function _({search:e,onSearchChange:t,filters:n,onFiltersChange:o}){let[s,c]=(0,y.useState)(`all`),[l,d]=(0,y.useState)(`list`);return(0,b.jsx)(r,{leftSlot:(0,b.jsx)(a,{id:`data-table-composition-view`,title:`View`,hideLabel:!0,inline:!0,size:`small`,reserveInlineNotificationHeight:!1,value:s,onChange:c,items:T}),rightSlot:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(`div`,{className:`gap-2xs flex items-center`,children:[(0,b.jsx)(ae,{value:l,onValueChange:d}),(0,b.jsx)(u,{value:e,onValueChange:t}),(0,b.jsx)(i,{groups:E,value:n,onValueChange:o})]}),(0,b.jsx)(`div`,{className:`py-sm flex items-center self-stretch`,children:(0,b.jsx)(re,{orientation:`vertical`,width:`0.5`,className:`min-h-[24px]`})}),(0,b.jsx)(h,{kind:`ghost`,size:`small`,label:`Export`,IconRight:te})]})})}function v(){if(typeof window>`u`)return{};try{let e=window.localStorage.getItem(V);if(!e)return{};let t=JSON.parse(e);if(t&&typeof t==`object`)return t}catch{}return{}}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{ne(),s(),y=t(m(),1),oe(),b=l(),x=[{name:`Ada Lovelace`,email:`ada@example.com`,role:`Admin`,status:`active`},{name:`Grace Hopper`,email:`grace@example.com`,role:`Editor`,status:`active`},{name:`Alan Turing`,email:`alan@example.com`,role:`Viewer`,status:`pending`},{name:`Katherine Johnson`,email:`katherine@example.com`,role:`Editor`,status:`inactive`},{name:`Margaret Hamilton`,email:`margaret@example.com`,role:`Admin`,status:`active`}],S=Array.from({length:47},(e,t)=>{let n=x[t%x.length],r=t+1;return{...n,id:String(r),name:`${n.name} #${r}`}}),C={active:`lime`,inactive:`gray`,pending:`orange`},w=10,T=[{label:`All members`,value:`all`},{label:`Admins only`,value:`admins`},{label:`Pending invites`,value:`pending`}],E=[{id:`role`,label:`Role`,options:[{value:`Admin`,label:`Admin`},{value:`Editor`,label:`Editor`},{value:`Viewer`,label:`Viewer`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`}]}],D={role:`role`,status:`status`},O=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,b.jsx)(g,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,b.jsx)(o,{color:C[e.status],children:e.status})}],k=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0,editable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,b.jsx)(g,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,b.jsx)(o,{color:C[e.status],children:e.status})}],A=[{id:`1`,firstName:`-`,lastName:`-`,email:`e2e@test.com`,role:`Owner`},{id:`2`,firstName:`Katherine`,lastName:`Johnson`,email:`katherine.johnson@example.com`,role:`Editor`},{id:`3`,firstName:`Margaret`,lastName:`Hamilton`,email:`margaret.hamilton@longsubdomain.example.com`,role:`Admin`}],j=[{key:`firstName`,header:`First name`},{key:`lastName`,header:`Last name`},{key:`email`,header:`Email`},{key:`role`,header:`Role`}],M={title:`Display & Data/DataTable/DataTable`,component:d,tags:[`autodocs`],argTypes:{selectionMode:{control:`inline-radio`,options:[`none`,`single`,`multiple`]},selectionControl:{control:`inline-radio`,options:c,description:`Row-index column control. Defaults: single → radio, multiple → checkbox. "multiple" always uses checkboxes.`}},args:{selectionMode:`none`,title:`Data Table`,subtitle:`A compact overview of the team.`},parameters:{design:se(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2419-29864&m=dev`),docs:{description:{component:`Data grid with sorting, selection, and pagination. Use for dense tabular data where rows represent records and columns are consistent fields.`}}}},N={render:e=>{let[t,r]=(0,y.useState)(1),i=Math.max(1,Math.ceil(S.length/w)),a=Math.min(t,i);return(0,b.jsx)(`div`,{style:{width:960},children:(0,b.jsx)(d,{...e,columns:O,data:S,currentPage:a,rowsPerPage:w,footer:(0,b.jsx)(n,{currentPage:a,totalPages:i,onPageChange:r})})})}},P={args:{selectionMode:`single`},render:N.render},F={args:{selectionMode:`multiple`},render:N.render},I={args:{selectionMode:`single`},render:N.render},L={args:{selectionMode:`single`,selectionControl:`checkbox`},render:N.render},R={args:{selectionMode:`multiple`},render:e=>{let[t,r]=(0,y.useState)(1),[i,a]=(0,y.useState)(``),[o,s]=(0,y.useState)({}),[c,l]=(0,y.useState)(S.length),u=Math.max(1,Math.ceil(c/w)),f=Math.min(t,u);return(0,b.jsx)(`div`,{style:{width:960},children:(0,b.jsx)(d,{...e,className:`bg-transparent`,toolbar:(0,b.jsx)(_,{search:i,onSearchChange:e=>{a(e),r(1)},filters:o,onFiltersChange:e=>{s(e),r(1)}}),header:(0,b.jsx)(ee,{title:`Team directory`,subtitle:`Search, filter, and manage workspace members.`}),columns:O,data:S,searchQuery:i,filters:o,filterKeys:D,onFilteredCountChange:l,currentPage:f,rowsPerPage:w,footer:(0,b.jsx)(n,{currentPage:f,totalPages:u,onPageChange:r})})})}},z={render:e=>(0,b.jsx)(`div`,{style:{width:960},children:(0,b.jsx)(d,{...e,columns:O,data:S})})},B={name:`With inline editable cells`,parameters:{docs:{description:{story:"The **Name** column uses `editable: true`. Click a cell to edit (pointer cursor); blur or Enter commits (updates local story state). Escape restores the previous value."}}},args:{selectionMode:`none`,title:`Editable cells`,subtitle:`Click a name to edit inline.`},render:e=>{let[t,n]=(0,y.useState)(()=>S.slice(0,12).map(e=>({...e})));return(0,b.jsx)(`div`,{style:{width:960},children:(0,b.jsx)(d,{...e,columns:k,data:t,onCellTextCommit:({rowId:e,columnKey:t,value:r})=>{n(n=>n.map(n=>n.id===e&&t===`name`?{...n,name:r}:n))}})})}},V=`arcade-storybook:datatable:column-widths`,H={name:`With persisted column widths`,parameters:{docs:{description:{story:"Columns are resizable; the widths are saved to `localStorage` so they persist across reloads. The story wires up `columnWidths` (controlled) + `onColumnWidthsChange`. Use the **Reset widths** button to clear the stored widths and fall back to auto sizing."}}},args:{selectionMode:`none`,title:`Persisted column widths`,subtitle:`Drag a header divider to resize. Reload to verify persistence.`},render:e=>{let[t,n]=(0,y.useState)(()=>v()),r=e=>{n(e);try{window.localStorage.setItem(V,JSON.stringify(e))}catch{}};return(0,b.jsxs)(`div`,{style:{width:960},className:`gap-md flex flex-col`,children:[(0,b.jsx)(`div`,{children:(0,b.jsx)(h,{kind:`ghost`,size:`small`,label:`Reset widths`,onClick:()=>{try{window.localStorage.removeItem(V)}catch{}n({})}})}),(0,b.jsx)(d,{...e,columns:O,data:S.slice(0,10),columnWidths:t,onColumnWidthsChange:r})]})}},U={render:e=>(0,b.jsx)(`div`,{style:{width:720},children:(0,b.jsxs)(d,{...e,title:`Recent activity`,subtitle:`Manually composed rows`,children:[(0,b.jsxs)(p,{showBorderTop:!0,showBorderBottom:!0,children:[(0,b.jsx)(f,{columnBorderRight:!0,children:`Deployment succeeded`}),(0,b.jsx)(f,{children:`2 minutes ago`})]}),(0,b.jsxs)(p,{children:[(0,b.jsx)(f,{columnBorderRight:!0,children:`Build finished`}),(0,b.jsx)(f,{children:`11 minutes ago`})]})]})})},W={name:`Column alignment (auto-sized, narrow)`,parameters:{docs:{description:{story:"Short header labels with long body content in a deliberately narrow container, with no per-column `width` set. Header and body columns must stay aligned and overflow truncates with an ellipsis. Guards the `min-w-0` fix that keeps auto-sized flex columns from being widened by their content."}}},render:e=>(0,b.jsx)(`div`,{style:{width:460},children:(0,b.jsx)(d,{...e,title:`People`,subtitle:`Auto-sized columns must align header-to-body.`,columns:j,data:A})})},G=O.map(e=>e.kind===`rowIndex`?e:{...e,width:220}),K={name:`Horizontal scroll fade`,parameters:{docs:{description:{story:`When the columns are wider than the container, the grid fades out towards every edge that still hides content - right only at the start, both once scrolled, left only at the end. The fade is a mask, so it works on any surface the table is placed on.`}}},render:e=>(0,b.jsx)(`div`,{style:{width:520},children:(0,b.jsx)(d,{...e,title:`People`,subtitle:`Scroll sideways - the faded edge marks the columns still out of view.`,columns:G,data:S.slice(0,6)})})},q=[{id:`1`,name:`International Federation of Independent Health Insurance Service Providers Ltd.`,contact:`service-desk@federation-of-health-insurance-providers.example.com`},{id:`2`,name:`Acme Health`,contact:`hello@acme.example.com`}],J=[{key:`name`,header:`Partner`,width:240,render:e=>(0,b.jsx)(ie,{label:e.name,href:`#`,size:`sm`})},{key:`contact`,header:`Contact`,width:240}],Y={name:`Link in a narrow column`,parameters:{docs:{description:{story:"A `Link` rendered into a body cell stays on one line and truncates with an ellipsis at the cell edge, like plain text does. While it is clipped the full label is its native `title`; the keyboard focus ring stays visible inside the cell."}}},render:e=>(0,b.jsx)(`div`,{style:{width:480},children:(0,b.jsx)(d,{...e,title:`Partners`,subtitle:`Long link labels truncate instead of wrapping.`,columns:J,data:q})})},X=[{id:`1`,name:`Mobility Flow`,tags:[`Public in the widget`]},{id:`2`,name:`Community Run`,tags:[`Public in the widget`,`Free of charge`,`Trial allowed`]},{id:`3`,name:`Coach workshop`,tags:[`Internal only`]}],Z=[{key:`name`,header:`Class`,width:200},{key:`tags`,header:`Visibility`,kind:`badge`,width:220,render:e=>(0,b.jsx)(b.Fragment,{children:e.tags.map(e=>(0,b.jsx)(o,{color:e===`Internal only`?`gray`:`blue`,children:e},e))})}],Q={name:`Badges in a narrow column`,parameters:{docs:{description:{story:`Several badges in one cell stay on a single line. What does not fit the column is clipped at the cell edge; the badges never wrap into a second line that would spill over the rows below.`}}},render:e=>(0,b.jsx)(`div`,{style:{width:480},children:(0,b.jsx)(d,{...e,title:`Class types`,subtitle:`Badges clip instead of wrapping.`,columns:Z,data:X})})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...I.parameters?.docs?.source},description:{story:`Single-select with compact radios in the row-index column (default control).`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single",
    selectionControl: "checkbox"
  },
  render: Playground.render
}`,...L.parameters?.docs?.source},description:{story:`Single-select with compact checkboxes in the row-index column.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: args => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState<TableFilterValue>({});
    const [filteredCount, setFilteredCount] = useState(people.length);
    /* eslint-enable react-hooks/rules-of-hooks */
    const totalPages = Math.max(1, Math.ceil(filteredCount / STORY_ROWS_PER_PAGE));
    const safePage = Math.min(page, totalPages);
    return <div style={{
      width: 960
    }}>
        <DataTable<Person> {...args} className="bg-transparent" toolbar={<StoryTableToolbar search={search} onSearchChange={value => {
        setSearch(value);
        setPage(1);
      }} filters={filters} onFiltersChange={value => {
        setFilters(value);
        setPage(1);
      }} />} header={<TableHeader title="Team directory" subtitle="Search, filter, and manage workspace members." />} columns={columnsWithRowIndex} data={people} searchQuery={search} filters={filters} filterKeys={filterKeys} onFilteredCountChange={setFilteredCount} currentPage={safePage} rowsPerPage={STORY_ROWS_PER_PAGE} footer={<TableFooter currentPage={safePage} totalPages={totalPages} onPageChange={setPage} />} />
      </div>;
  }
}`,...R.parameters?.docs?.source},description:{story:"Full chrome: `TableHeader` (`header` slot) → `TableToolbar` → grid → `TableFooter`.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people} />
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Inline text editing on the Name column (`editable` + `onCellTextCommit`). Click to edit; Enter or blur saves, Escape cancels.",...B.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
    }} className="gap-md flex flex-col">
        <div>
          <Button kind="ghost" size="small" label="Reset widths" onClick={resetWidths} />
        </div>
        <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people.slice(0, 10)} columnWidths={widths} onColumnWidthsChange={persistWidths} />
      </div>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Column alignment (auto-sized, narrow)",
  parameters: {
    docs: {
      description: {
        story: "Short header labels with long body content in a deliberately narrow container, with no per-column \`width\` set. Header and body columns must stay aligned and overflow truncates with an ellipsis. Guards the \`min-w-0\` fix that keeps auto-sized flex columns from being widened by their content."
      }
    }
  },
  render: args => <div style={{
    width: 460
  }}>
      <DataTable<Member> {...args} title="People" subtitle="Auto-sized columns must align header-to-body." columns={alignmentColumns} data={alignmentMembers} />
    </div>
}`,...W.parameters?.docs?.source},description:{story:`Regression guard for header/body column alignment. Each row is an independent
flex container, so a body cell must shrink to the same width its header cell
does. Here the header labels are short ("Email") while the body holds long
values (\`katherine.johnson@example.com\`) and a narrow container squeezes the
auto-sized columns.

The columns must line up top-to-bottom and long values must truncate with an
ellipsis. This previously broke: cells used \`min-w-min\`, so a long email
forced its body column wider than the matching header (~55px offset at this
width). Auto-sized columns now use \`min-w-0\`, so every row distributes the
same flex space identically and the grid stays aligned.`,...W.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Horizontal scroll fade",
  parameters: {
    docs: {
      description: {
        story: "When the columns are wider than the container, the grid fades out towards every edge that still hides content - right only at the start, both once scrolled, left only at the end. The fade is a mask, so it works on any surface the table is placed on."
      }
    }
  },
  render: args => <div style={{
    width: 520
  }}>
      <DataTable<Person> {...args} title="People" subtitle="Scroll sideways - the faded edge marks the columns still out of view." columns={overflowColumns} data={people.slice(0, 6)} />
    </div>
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Link in a narrow column",
  parameters: {
    docs: {
      description: {
        story: "A \`Link\` rendered into a body cell stays on one line and truncates with an ellipsis at the cell edge, like plain text does. While it is clipped the full label is its native \`title\`; the keyboard focus ring stays visible inside the cell."
      }
    }
  },
  render: args => <div style={{
    width: 480
  }}>
      <DataTable<Partner> {...args} title="Partners" subtitle="Long link labels truncate instead of wrapping." columns={partnerColumns} data={partners} />
    </div>
}`,...Y.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Badges in a narrow column",
  parameters: {
    docs: {
      description: {
        story: "Several badges in one cell stay on a single line. What does not fit the column is clipped at the cell edge; the badges never wrap into a second line that would spill over the rows below."
      }
    }
  },
  render: args => <div style={{
    width: 480
  }}>
      <DataTable<Tagged> {...args} title="Class types" subtitle="Badges clip instead of wrapping." columns={taggedColumns} data={tagged} />
    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`WithSingleSelection`,`WithMultipleSelection`,`WithSingleRadioInRowIndex`,`WithSingleCheckboxInRowIndex`,`WithToolbarHeaderAndFooter`,`WithoutFooter`,`WithInlineEditableCells`,`WithPersistedColumnWidths`,`Composed`,`ColumnAlignment`,`HorizontalScrollFade`,`LinkInNarrowColumn`,`BadgesInNarrowColumn`]}))();export{Q as BadgesInNarrowColumn,W as ColumnAlignment,U as Composed,K as HorizontalScrollFade,Y as LinkInNarrowColumn,N as Playground,B as WithInlineEditableCells,F as WithMultipleSelection,H as WithPersistedColumnWidths,L as WithSingleCheckboxInRowIndex,I as WithSingleRadioInRowIndex,P as WithSingleSelection,R as WithToolbarHeaderAndFooter,z as WithoutFooter,$ as __namedExportsOrder,M as default};