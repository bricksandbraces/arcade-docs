import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{A as n,B as r,I as i,Jn as a,O as o,Pa as s,Qr as c,Qs as l,R as u,Zr as d,ai as f,ii as ee,ko as te,ni as p,pc as ne,ps as m,si as h,t as re,va as ie,yi as ae,z as oe}from"./iframe-xkDaHu_b.js";import{n as se,t as ce}from"./figmaDesign-DDiUnvXT.js";function le({search:e,onSearchChange:t,filters:n,onFiltersChange:o}){let[s,c]=(0,g.useState)(`all`),[l,d]=(0,g.useState)(`list`);return(0,_.jsx)(r,{leftSlot:(0,_.jsx)(a,{id:`data-table-composition-view`,title:`View`,hideLabel:!0,inline:!0,size:`small`,reserveInlineNotificationHeight:!1,value:s,onChange:c,items:S}),rightSlot:(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`gap-2xs flex items-center`,children:[(0,_.jsx)(oe,{value:l,onValueChange:d}),(0,_.jsx)(u,{value:e,onValueChange:t}),(0,_.jsx)(i,{groups:C,value:n,onValueChange:o})]}),(0,_.jsx)(`div`,{className:`py-sm flex items-center self-stretch`,children:(0,_.jsx)(ie,{orientation:`vertical`,width:`0.5`,className:`min-h-[24px]`})}),(0,_.jsx)(m,{kind:`ghost`,size:`small`,label:`Export`,IconRight:te})]})})}function ue(){if(typeof window>`u`)return{};try{let e=window.localStorage.getItem(R);if(!e)return{};let t=JSON.parse(e);if(t&&typeof t==`object`)return t}catch{}return{}}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{re(),s(),g=t(ne(),1),se(),_=l(),v=[{name:`Ada Lovelace`,email:`ada@example.com`,role:`Admin`,status:`active`},{name:`Grace Hopper`,email:`grace@example.com`,role:`Editor`,status:`active`},{name:`Alan Turing`,email:`alan@example.com`,role:`Viewer`,status:`pending`},{name:`Katherine Johnson`,email:`katherine@example.com`,role:`Editor`,status:`inactive`},{name:`Margaret Hamilton`,email:`margaret@example.com`,role:`Admin`,status:`active`}],y=Array.from({length:47},(e,t)=>{let n=v[t%v.length],r=t+1;return{...n,id:String(r),name:`${n.name} #${r}`}}),b={active:`lime`,inactive:`gray`,pending:`orange`},x=10,S=[{label:`All members`,value:`all`},{label:`Admins only`,value:`admins`},{label:`Pending invites`,value:`pending`}],C=[{id:`role`,label:`Role`,options:[{value:`Admin`,label:`Admin`},{value:`Editor`,label:`Editor`},{value:`Viewer`,label:`Viewer`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`}]}],w={role:`role`,status:`status`},T=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,_.jsx)(h,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,_.jsx)(o,{color:b[e.status],children:e.status})}],E=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0,editable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,_.jsx)(h,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,_.jsx)(o,{color:b[e.status],children:e.status})}],D=[{id:`1`,firstName:`-`,lastName:`-`,email:`e2e@test.com`,role:`Owner`},{id:`2`,firstName:`Katherine`,lastName:`Johnson`,email:`katherine.johnson@example.com`,role:`Editor`},{id:`3`,firstName:`Margaret`,lastName:`Hamilton`,email:`margaret.hamilton@longsubdomain.example.com`,role:`Admin`}],O=[{key:`firstName`,header:`First name`},{key:`lastName`,header:`Last name`},{key:`email`,header:`Email`},{key:`role`,header:`Role`}],k={title:`Display & Data/DataTable/DataTable`,component:d,tags:[`autodocs`],argTypes:{selectionMode:{control:`inline-radio`,options:[`none`,`single`,`multiple`]},selectionControl:{control:`inline-radio`,options:c,description:`Row-index column control. Defaults: single → radio, multiple → checkbox. "multiple" always uses checkboxes.`}},args:{selectionMode:`none`,title:`Data Table`,subtitle:`A compact overview of the team.`},parameters:{design:ce(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2419-29864&m=dev`),docs:{description:{component:`Data grid with sorting, selection, and pagination. Use for dense tabular data where rows represent records and columns are consistent fields.`}}}},A={render:e=>{let[t,r]=(0,g.useState)(1),i=Math.max(1,Math.ceil(y.length/x)),a=Math.min(t,i);return(0,_.jsx)(`div`,{style:{width:960},children:(0,_.jsx)(d,{...e,columns:T,data:y,currentPage:a,rowsPerPage:x,footer:(0,_.jsx)(n,{currentPage:a,totalPages:i,onPageChange:r})})})}},j={args:{selectionMode:`single`},render:A.render},M={args:{selectionMode:`multiple`},render:A.render},N={args:{selectionMode:`single`},render:A.render},P={args:{selectionMode:`single`,selectionControl:`checkbox`},render:A.render},F={args:{selectionMode:`multiple`},render:e=>{let[t,r]=(0,g.useState)(1),[i,a]=(0,g.useState)(``),[o,s]=(0,g.useState)({}),[c,l]=(0,g.useState)(y.length),u=Math.max(1,Math.ceil(c/x)),f=Math.min(t,u);return(0,_.jsx)(`div`,{style:{width:960},children:(0,_.jsx)(d,{...e,className:`bg-transparent`,toolbar:(0,_.jsx)(le,{search:i,onSearchChange:e=>{a(e),r(1)},filters:o,onFiltersChange:e=>{s(e),r(1)}}),header:(0,_.jsx)(ee,{title:`Team directory`,subtitle:`Search, filter, and manage workspace members.`}),columns:T,data:y,searchQuery:i,filters:o,filterKeys:w,onFilteredCountChange:l,currentPage:f,rowsPerPage:x,footer:(0,_.jsx)(n,{currentPage:f,totalPages:u,onPageChange:r})})})}},I={render:e=>(0,_.jsx)(`div`,{style:{width:960},children:(0,_.jsx)(d,{...e,columns:T,data:y})})},L={name:`With inline editable cells`,parameters:{docs:{description:{story:"The **Name** column uses `editable: true`. Click a cell to edit (pointer cursor); blur or Enter commits (updates local story state). Escape restores the previous value."}}},args:{selectionMode:`none`,title:`Editable cells`,subtitle:`Click a name to edit inline.`},render:e=>{let[t,n]=(0,g.useState)(()=>y.slice(0,12).map(e=>({...e})));return(0,_.jsx)(`div`,{style:{width:960},children:(0,_.jsx)(d,{...e,columns:E,data:t,onCellTextCommit:({rowId:e,columnKey:t,value:r})=>{n(n=>n.map(n=>n.id===e&&t===`name`?{...n,name:r}:n))}})})}},R=`arcade-storybook:datatable:column-widths`,z={name:`With persisted column widths`,parameters:{docs:{description:{story:"Columns are resizable; the widths are saved to `localStorage` so they persist across reloads. The story wires up `columnWidths` (controlled) + `onColumnWidthsChange`. Use the **Reset widths** button to clear the stored widths and fall back to auto sizing."}}},args:{selectionMode:`none`,title:`Persisted column widths`,subtitle:`Drag a header divider to resize. Reload to verify persistence.`},render:e=>{let[t,n]=(0,g.useState)(()=>ue()),r=e=>{n(e);try{window.localStorage.setItem(R,JSON.stringify(e))}catch{}};return(0,_.jsxs)(`div`,{style:{width:960},className:`gap-md flex flex-col`,children:[(0,_.jsx)(`div`,{children:(0,_.jsx)(m,{kind:`ghost`,size:`small`,label:`Reset widths`,onClick:()=>{try{window.localStorage.removeItem(R)}catch{}n({})}})}),(0,_.jsx)(d,{...e,columns:T,data:y.slice(0,10),columnWidths:t,onColumnWidthsChange:r})]})}},B={render:e=>(0,_.jsx)(`div`,{style:{width:720},children:(0,_.jsxs)(d,{...e,title:`Recent activity`,subtitle:`Manually composed rows`,children:[(0,_.jsxs)(p,{showBorderTop:!0,showBorderBottom:!0,children:[(0,_.jsx)(f,{columnBorderRight:!0,children:`Deployment succeeded`}),(0,_.jsx)(f,{children:`2 minutes ago`})]}),(0,_.jsxs)(p,{children:[(0,_.jsx)(f,{columnBorderRight:!0,children:`Build finished`}),(0,_.jsx)(f,{children:`11 minutes ago`})]})]})})},V={name:`Column alignment (auto-sized, narrow)`,parameters:{docs:{description:{story:"Short header labels with long body content in a deliberately narrow container, with no per-column `width` set. Header and body columns must stay aligned and overflow truncates with an ellipsis. Guards the `min-w-0` fix that keeps auto-sized flex columns from being widened by their content."}}},render:e=>(0,_.jsx)(`div`,{style:{width:460},children:(0,_.jsx)(d,{...e,title:`People`,subtitle:`Auto-sized columns must align header-to-body.`,columns:O,data:D})})},H=T.map(e=>e.kind===`rowIndex`?e:{...e,width:220}),U={name:`Horizontal scroll fade`,parameters:{docs:{description:{story:`When the columns are wider than the container, the grid fades out towards every edge that still hides content - right only at the start, both once scrolled, left only at the end. The fade is a mask, so it works on any surface the table is placed on.`}}},render:e=>(0,_.jsx)(`div`,{style:{width:520},children:(0,_.jsx)(d,{...e,title:`People`,subtitle:`Scroll sideways - the faded edge marks the columns still out of view.`,columns:H,data:y.slice(0,6)})})},W=[{id:`1`,name:`International Federation of Independent Health Insurance Service Providers Ltd.`,contact:`service-desk@federation-of-health-insurance-providers.example.com`},{id:`2`,name:`Acme Health`,contact:`hello@acme.example.com`}],G=[{key:`name`,header:`Partner`,width:240,render:e=>(0,_.jsx)(ae,{label:e.name,href:`#`,size:`sm`})},{key:`contact`,header:`Contact`,width:240}],K={name:`Link in a narrow column`,parameters:{docs:{description:{story:"A `Link` rendered into a body cell stays on one line and truncates with an ellipsis at the cell edge, like plain text does. While it is clipped the full label is its native `title`; the keyboard focus ring stays visible inside the cell."}}},render:e=>(0,_.jsx)(`div`,{style:{width:480},children:(0,_.jsx)(d,{...e,title:`Partners`,subtitle:`Long link labels truncate instead of wrapping.`,columns:G,data:W})})},q=[{id:`1`,name:`Mobility Flow`,tags:[`Public in the widget`]},{id:`2`,name:`Community Run`,tags:[`Public in the widget`,`Free of charge`,`Trial allowed`]},{id:`3`,name:`Coach workshop`,tags:[`Internal only`]}],J=[{key:`name`,header:`Class`,width:200},{key:`tags`,header:`Visibility`,kind:`badge`,width:220,render:e=>(0,_.jsx)(_.Fragment,{children:e.tags.map(e=>(0,_.jsx)(o,{color:e===`Internal only`?`gray`:`blue`,children:e},e))})}],Y={name:`Badges in a narrow column`,parameters:{docs:{description:{story:`Several badges in one cell stay on a single line. What does not fit the column is clipped at the cell edge; the badges never wrap into a second line that would spill over the rows below.`}}},render:e=>(0,_.jsx)(`div`,{style:{width:480},children:(0,_.jsx)(d,{...e,title:`Class types`,subtitle:`Badges clip instead of wrapping.`,columns:J,data:q})})},X=[{id:`1`,name:`Downtown Studio and Community Wellness Center`,address:`1200 Very Long Boulevard Name, Building C, Floor 4, Springfield`,manager:`Margaret Hamilton-Johnson`},{id:`2`,name:`Riverside`,address:`8 River Road, Springfield`,manager:`Alan Turing`},{id:`3`,name:`North Campus Strength and Conditioning Annex`,address:`45 North Avenue, Springfield, near the central station`,manager:`Grace Hopper`}],Z=[{key:`name`,header:`Location`,width:180},{key:`address`,header:`Address`,width:200,render:e=>(0,_.jsx)(`span`,{children:e.address})},{key:`manager`,header:`Manager`,width:140,render:e=>(0,_.jsxs)(`span`,{children:[(0,_.jsx)(`strong`,{children:e.manager.split(` `)[0]}),` `,e.manager.split(` `).slice(1).join(` `)]})}],Q={name:`Narrow columns, long text`,parameters:{docs:{description:{story:"Fixed column widths that add up to less than the container: the header band still spans the full table width. Long values - plain text as well as custom `render` output - stay on one line and truncate with an ellipsis instead of wrapping over the next row."}}},render:e=>(0,_.jsx)(`div`,{style:{width:960},children:(0,_.jsx)(d,{...e,title:`Locations`,subtitle:`Columns narrower than the table, values longer than their columns.`,columns:Z,data:X})})},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...N.parameters?.docs?.source},description:{story:`Single-select with compact radios in the row-index column (default control).`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single",
    selectionControl: "checkbox"
  },
  render: Playground.render
}`,...P.parameters?.docs?.source},description:{story:`Single-select with compact checkboxes in the row-index column.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:"Full chrome: `TableHeader` (`header` slot) → `TableToolbar` → grid → `TableFooter`.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people} />
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"Inline text editing on the Name column (`editable` + `onCellTextCommit`). Click to edit; Enter or blur saves, Escape cancels.",...L.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Regression guard for header/body column alignment. Each row is an independent
flex container, so a body cell must shrink to the same width its header cell
does. Here the header labels are short ("Email") while the body holds long
values (\`katherine.johnson@example.com\`) and a narrow container squeezes the
auto-sized columns.

The columns must line up top-to-bottom and long values must truncate with an
ellipsis. This previously broke: cells used \`min-w-min\`, so a long email
forced its body column wider than the matching header (~55px offset at this
width). Auto-sized columns now use \`min-w-0\`, so every row distributes the
same flex space identically and the grid stays aligned.`,...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "Narrow columns, long text",
  parameters: {
    docs: {
      description: {
        story: "Fixed column widths that add up to less than the container: the header band still spans the full table width. Long values - plain text as well as custom \`render\` output - stay on one line and truncate with an ellipsis instead of wrapping over the next row."
      }
    }
  },
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Location> {...args} title="Locations" subtitle="Columns narrower than the table, values longer than their columns." columns={narrowFixedColumns} data={locations} />
    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`WithSingleSelection`,`WithMultipleSelection`,`WithSingleRadioInRowIndex`,`WithSingleCheckboxInRowIndex`,`WithToolbarHeaderAndFooter`,`WithoutFooter`,`WithInlineEditableCells`,`WithPersistedColumnWidths`,`Composed`,`ColumnAlignment`,`HorizontalScrollFade`,`LinkInNarrowColumn`,`BadgesInNarrowColumn`,`NarrowColumnsLongText`]}))();export{Y as BadgesInNarrowColumn,V as ColumnAlignment,B as Composed,U as HorizontalScrollFade,K as LinkInNarrowColumn,Q as NarrowColumnsLongText,A as Playground,L as WithInlineEditableCells,M as WithMultipleSelection,z as WithPersistedColumnWidths,P as WithSingleCheckboxInRowIndex,N as WithSingleRadioInRowIndex,j as WithSingleSelection,F as WithToolbarHeaderAndFooter,I as WithoutFooter,$ as __namedExportsOrder,k as default};