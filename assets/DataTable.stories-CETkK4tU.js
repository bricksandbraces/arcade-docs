import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$n as n,A as r,B as i,Ga as a,I as o,O as s,Oa as c,R as l,Tc as u,Ts as d,Vo as ee,_i as f,ci as p,fi as m,hi as h,ki as te,mi as ne,si as g,t as re,uc as ie,z as ae}from"./iframe-BpP19uzV.js";import{n as oe,t as se}from"./figmaDesign-DLesXS3c.js";function ce({search:e,onSearchChange:t,filters:r,onFiltersChange:a}){let[s,u]=(0,_.useState)(`all`),[f,p]=(0,_.useState)(`list`);return(0,v.jsx)(i,{leftSlot:(0,v.jsx)(n,{id:`data-table-composition-view`,title:`View`,hideLabel:!0,inline:!0,size:`small`,reserveInlineNotificationHeight:!1,value:s,onChange:u,items:C}),rightSlot:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`gap-2xs flex items-center`,children:[(0,v.jsx)(ae,{value:f,onValueChange:p}),(0,v.jsx)(l,{value:e,onValueChange:t}),(0,v.jsx)(o,{groups:w,value:r,onValueChange:a})]}),(0,v.jsx)(`div`,{className:`py-sm flex items-center self-stretch`,children:(0,v.jsx)(c,{orientation:`vertical`,width:`0.5`,className:`min-h-[24px]`})}),(0,v.jsx)(d,{kind:`ghost`,size:`small`,label:`Export`,IconRight:ee})]})})}function le(){if(typeof window>`u`)return{};try{let e=window.localStorage.getItem(z);if(!e)return{};let t=JSON.parse(e);if(t&&typeof t==`object`)return t}catch{}return{}}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,ue,Q,$;e((()=>{re(),a(),_=t(u(),1),oe(),v=ie(),y=[{name:`Ada Lovelace`,email:`ada@example.com`,role:`Admin`,status:`active`},{name:`Grace Hopper`,email:`grace@example.com`,role:`Editor`,status:`active`},{name:`Alan Turing`,email:`alan@example.com`,role:`Viewer`,status:`pending`},{name:`Katherine Johnson`,email:`katherine@example.com`,role:`Editor`,status:`inactive`},{name:`Margaret Hamilton`,email:`margaret@example.com`,role:`Admin`,status:`active`}],b=Array.from({length:47},(e,t)=>{let n=y[t%y.length],r=t+1;return{...n,id:String(r),name:`${n.name} #${r}`}}),x={active:`lime`,inactive:`gray`,pending:`orange`},S=10,C=[{label:`All members`,value:`all`},{label:`Admins only`,value:`admins`},{label:`Pending invites`,value:`pending`}],w=[{id:`role`,label:`Role`,options:[{value:`Admin`,label:`Admin`},{value:`Editor`,label:`Editor`},{value:`Viewer`,label:`Viewer`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`}]}],T={role:`role`,status:`status`},E=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,v.jsx)(f,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,v.jsx)(s,{color:x[e.status],children:e.status})}],D=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0,editable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,v.jsx)(f,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,v.jsx)(s,{color:x[e.status],children:e.status})}],O=[{id:`1`,firstName:`-`,lastName:`-`,email:`e2e@test.com`,role:`Owner`},{id:`2`,firstName:`Katherine`,lastName:`Johnson`,email:`katherine.johnson@example.com`,role:`Editor`},{id:`3`,firstName:`Margaret`,lastName:`Hamilton`,email:`margaret.hamilton@longsubdomain.example.com`,role:`Admin`}],k=[{key:`firstName`,header:`First name`},{key:`lastName`,header:`Last name`},{key:`email`,header:`Email`},{key:`role`,header:`Role`}],A={title:`Components/DataTable`,component:g,tags:[`autodocs`],argTypes:{selectionMode:{control:`inline-radio`,options:[`none`,`single`,`multiple`]},selectionControl:{control:`inline-radio`,options:p,description:`Row-index column control. Defaults: single → radio, multiple → checkbox. "multiple" always uses checkboxes.`}},args:{selectionMode:`none`,title:`Data Table`,subtitle:`A compact overview of the team.`},parameters:{design:se(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2419-29864&m=dev`),docs:{description:{component:`Data grid with sorting, selection, and pagination. Use for dense tabular data where rows represent records and columns are consistent fields.`}}}},j={render:e=>{let[t,n]=(0,_.useState)(1),i=Math.max(1,Math.ceil(b.length/S)),a=Math.min(t,i);return(0,v.jsx)(`div`,{style:{width:960},children:(0,v.jsx)(g,{...e,columns:E,data:b,currentPage:a,rowsPerPage:S,footer:(0,v.jsx)(r,{currentPage:a,totalPages:i,onPageChange:n})})})}},M={args:{selectionMode:`single`},render:j.render},N={args:{selectionMode:`multiple`},render:j.render},P={args:{selectionMode:`single`},render:j.render},F={args:{selectionMode:`single`,selectionControl:`checkbox`},render:j.render},I={args:{selectionMode:`multiple`},render:e=>{let[t,n]=(0,_.useState)(1),[i,a]=(0,_.useState)(``),[o,s]=(0,_.useState)({}),[c,l]=(0,_.useState)(b.length),u=Math.max(1,Math.ceil(c/S)),d=Math.min(t,u);return(0,v.jsx)(`div`,{style:{width:960},children:(0,v.jsx)(g,{...e,className:`bg-transparent`,toolbar:(0,v.jsx)(ce,{search:i,onSearchChange:e=>{a(e),n(1)},filters:o,onFiltersChange:e=>{s(e),n(1)}}),header:(0,v.jsx)(ne,{title:`Team directory`,subtitle:`Search, filter, and manage workspace members.`}),columns:E,data:b,searchQuery:i,filters:o,filterKeys:T,onFilteredCountChange:l,currentPage:d,rowsPerPage:S,footer:(0,v.jsx)(r,{currentPage:d,totalPages:u,onPageChange:n})})})}},L={render:e=>(0,v.jsx)(`div`,{style:{width:960},children:(0,v.jsx)(g,{...e,columns:E,data:b})})},R={name:`With inline editable cells`,parameters:{docs:{description:{story:"The **Name** column uses `editable: true`. Click a cell to edit (pointer cursor); blur or Enter commits (updates local story state). Escape restores the previous value."}}},args:{selectionMode:`none`,title:`Editable cells`,subtitle:`Click a name to edit inline.`},render:e=>{let[t,n]=(0,_.useState)(()=>b.slice(0,12).map(e=>({...e})));return(0,v.jsx)(`div`,{style:{width:960},children:(0,v.jsx)(g,{...e,columns:D,data:t,onCellTextCommit:({rowId:e,columnKey:t,value:r})=>{n(n=>n.map(n=>n.id===e&&t===`name`?{...n,name:r}:n))}})})}},z=`arcade-storybook:datatable:column-widths`,B={name:`With persisted column widths`,parameters:{docs:{description:{story:"Columns are resizable; the widths are saved to `localStorage` so they persist across reloads. The story wires up `columnWidths` (controlled) + `onColumnWidthsChange`. Use the **Reset widths** button to clear the stored widths and fall back to auto sizing."}}},args:{selectionMode:`none`,title:`Persisted column widths`,subtitle:`Drag a header divider to resize. Reload to verify persistence.`},render:e=>{let[t,n]=(0,_.useState)(()=>le()),r=e=>{n(e);try{window.localStorage.setItem(z,JSON.stringify(e))}catch{}};return(0,v.jsxs)(`div`,{style:{width:960},className:`gap-md flex flex-col`,children:[(0,v.jsx)(`div`,{children:(0,v.jsx)(d,{kind:`ghost`,size:`small`,label:`Reset widths`,onClick:()=>{try{window.localStorage.removeItem(z)}catch{}n({})}})}),(0,v.jsx)(g,{...e,columns:E,data:b.slice(0,10),columnWidths:t,onColumnWidthsChange:r})]})}},V={render:e=>(0,v.jsx)(`div`,{style:{width:720},children:(0,v.jsxs)(g,{...e,title:`Recent activity`,subtitle:`Manually composed rows`,children:[(0,v.jsxs)(m,{showBorderTop:!0,showBorderBottom:!0,children:[(0,v.jsx)(h,{columnBorderRight:!0,children:`Deployment succeeded`}),(0,v.jsx)(h,{children:`2 minutes ago`})]}),(0,v.jsxs)(m,{children:[(0,v.jsx)(h,{columnBorderRight:!0,children:`Build finished`}),(0,v.jsx)(h,{children:`11 minutes ago`})]})]})})},H={name:`Column alignment (auto-sized, narrow)`,parameters:{docs:{description:{story:"Short header labels with long body content in a deliberately narrow container, with no per-column `width` set. Header and body columns must stay aligned and overflow truncates with an ellipsis. Guards the `min-w-0` fix that keeps auto-sized flex columns from being widened by their content."}}},render:e=>(0,v.jsx)(`div`,{style:{width:460},children:(0,v.jsx)(g,{...e,title:`People`,subtitle:`Auto-sized columns must align header-to-body.`,columns:k,data:O})})},U=E.map(e=>e.kind===`rowIndex`?e:{...e,width:220}),W={name:`Horizontal scroll fade`,parameters:{docs:{description:{story:`When the columns are wider than the container, the grid fades out towards every edge that still hides content - right only at the start, both once scrolled, left only at the end. The fade is a mask, so it works on any surface the table is placed on.`}}},render:e=>(0,v.jsx)(`div`,{style:{width:520},children:(0,v.jsx)(g,{...e,title:`People`,subtitle:`Scroll sideways - the faded edge marks the columns still out of view.`,columns:U,data:b.slice(0,6)})})},G=[{id:`1`,name:`International Federation of Independent Health Insurance Service Providers Ltd.`,contact:`service-desk@federation-of-health-insurance-providers.example.com`},{id:`2`,name:`Acme Health`,contact:`hello@acme.example.com`}],K=[{key:`name`,header:`Partner`,width:240,render:e=>(0,v.jsx)(te,{label:e.name,href:`#`,size:`sm`})},{key:`contact`,header:`Contact`,width:240}],q={name:`Link in a narrow column`,parameters:{docs:{description:{story:"A `Link` rendered into a body cell stays on one line and truncates with an ellipsis at the cell edge, like plain text does. While it is clipped the full label is its native `title`; the keyboard focus ring stays visible inside the cell."}}},render:e=>(0,v.jsx)(`div`,{style:{width:480},children:(0,v.jsx)(g,{...e,title:`Partners`,subtitle:`Long link labels truncate instead of wrapping.`,columns:K,data:G})})},J=[{id:`1`,name:`Mobility Flow`,tags:[`Public in the widget`]},{id:`2`,name:`Community Run`,tags:[`Public in the widget`,`Free of charge`,`Trial allowed`]},{id:`3`,name:`Coach workshop`,tags:[`Internal only`]}],Y=[{key:`name`,header:`Class`,width:200},{key:`tags`,header:`Visibility`,kind:`badge`,width:220,render:e=>(0,v.jsx)(v.Fragment,{children:e.tags.map(e=>(0,v.jsx)(s,{color:e===`Internal only`?`gray`:`blue`,children:e},e))})}],X={name:`Badges in a narrow column`,parameters:{docs:{description:{story:`Several badges in one cell stay on a single line. What does not fit the column is clipped at the cell edge; the badges never wrap into a second line that would spill over the rows below.`}}},render:e=>(0,v.jsx)(`div`,{style:{width:480},children:(0,v.jsx)(g,{...e,title:`Class types`,subtitle:`Badges clip instead of wrapping.`,columns:Y,data:J})})},Z=[{id:`1`,name:`Downtown Studio and Community Wellness Center`,address:`1200 Very Long Boulevard Name, Building C, Floor 4, Springfield`,manager:`Margaret Hamilton-Johnson`},{id:`2`,name:`Riverside`,address:`8 River Road, Springfield`,manager:`Alan Turing`},{id:`3`,name:`North Campus Strength and Conditioning Annex`,address:`45 North Avenue, Springfield, near the central station`,manager:`Grace Hopper`}],ue=[{key:`name`,header:`Location`,width:180},{key:`address`,header:`Address`,width:200,render:e=>(0,v.jsx)(`span`,{children:e.address})},{key:`manager`,header:`Manager`,width:140,render:e=>(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{children:e.manager.split(` `)[0]}),` `,e.manager.split(` `).slice(1).join(` `)]})}],Q={name:`Narrow columns, long text`,parameters:{docs:{description:{story:"Fixed column widths that add up to less than the container: the header band still spans the full table width. Long values - plain text as well as custom `render` output - stay on one line and truncate with an ellipsis instead of wrapping over the next row."}}},render:e=>(0,v.jsx)(`div`,{style:{width:960},children:(0,v.jsx)(g,{...e,title:`Locations`,subtitle:`Columns narrower than the table, values longer than their columns.`,columns:ue,data:Z})})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...P.parameters?.docs?.source},description:{story:`Single-select with compact radios in the row-index column (default control).`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single",
    selectionControl: "checkbox"
  },
  render: Playground.render
}`,...F.parameters?.docs?.source},description:{story:`Single-select with compact checkboxes in the row-index column.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:"Full chrome: `TableHeader` (`header` slot) → `TableToolbar` → grid → `TableFooter`.",...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people} />
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:"Inline text editing on the Name column (`editable` + `onCellTextCommit`). Click to edit; Enter or blur saves, Escape cancels.",...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`Regression guard for header/body column alignment. Each row is an independent
flex container, so a body cell must shrink to the same width its header cell
does. Here the header labels are short ("Email") while the body holds long
values (\`katherine.johnson@example.com\`) and a narrow container squeezes the
auto-sized columns.

The columns must line up top-to-bottom and long values must truncate with an
ellipsis. This previously broke: cells used \`min-w-min\`, so a long email
forced its body column wider than the matching header (~55px offset at this
width). Auto-sized columns now use \`min-w-0\`, so every row distributes the
same flex space identically and the grid stays aligned.`,...H.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`WithSingleSelection`,`WithMultipleSelection`,`WithSingleRadioInRowIndex`,`WithSingleCheckboxInRowIndex`,`WithToolbarHeaderAndFooter`,`WithoutFooter`,`WithInlineEditableCells`,`WithPersistedColumnWidths`,`Composed`,`ColumnAlignment`,`HorizontalScrollFade`,`LinkInNarrowColumn`,`BadgesInNarrowColumn`,`NarrowColumnsLongText`]}))();export{X as BadgesInNarrowColumn,H as ColumnAlignment,V as Composed,W as HorizontalScrollFade,q as LinkInNarrowColumn,Q as NarrowColumnsLongText,j as Playground,R as WithInlineEditableCells,N as WithMultipleSelection,B as WithPersistedColumnWidths,F as WithSingleCheckboxInRowIndex,P as WithSingleRadioInRowIndex,M as WithSingleSelection,I as WithToolbarHeaderAndFooter,L as WithoutFooter,$ as __namedExportsOrder,A as default};