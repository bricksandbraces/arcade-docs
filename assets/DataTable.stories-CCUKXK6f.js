import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$n as n,A as r,B as i,Dc as a,Ds as o,I as s,O as c,Oa as l,R as u,Uo as d,_i as f,ci as p,fc as m,fi as h,hi as g,ki as ee,mi as te,qa as ne,si as _,t as re,z as ie}from"./iframe-B-vVAKgp.js";import{n as ae,t as oe}from"./figmaDesign-DLesXS3c.js";function se({search:e,onSearchChange:t,filters:r,onFiltersChange:a}){let[c,f]=(0,v.useState)(`all`),[p,m]=(0,v.useState)(`list`);return(0,y.jsx)(i,{leftSlot:(0,y.jsx)(n,{id:`data-table-composition-view`,title:`View`,hideLabel:!0,inline:!0,size:`small`,reserveInlineNotificationHeight:!1,value:c,onChange:f,items:w}),rightSlot:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`div`,{className:`gap-2xs flex items-center`,children:[(0,y.jsx)(ie,{value:p,onValueChange:m}),(0,y.jsx)(u,{value:e,onValueChange:t}),(0,y.jsx)(s,{groups:T,value:r,onValueChange:a})]}),(0,y.jsx)(`div`,{className:`py-sm flex items-center self-stretch`,children:(0,y.jsx)(l,{orientation:`vertical`,width:`0.5`,className:`min-h-[24px]`})}),(0,y.jsx)(o,{kind:`ghost`,size:`small`,label:`Export`,IconRight:d})]})})}function ce(){if(typeof window>`u`)return{};try{let e=window.localStorage.getItem(B);if(!e)return{};let t=JSON.parse(e);if(t&&typeof t==`object`)return t}catch{}return{}}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,le,ue,Q,$;e((()=>{re(),ne(),v=t(a(),1),ae(),y=m(),b=[{name:`Ada Lovelace`,email:`ada@example.com`,role:`Admin`,status:`active`},{name:`Grace Hopper`,email:`grace@example.com`,role:`Editor`,status:`active`},{name:`Alan Turing`,email:`alan@example.com`,role:`Viewer`,status:`pending`},{name:`Katherine Johnson`,email:`katherine@example.com`,role:`Editor`,status:`inactive`},{name:`Margaret Hamilton`,email:`margaret@example.com`,role:`Admin`,status:`active`}],x=Array.from({length:47},(e,t)=>{let n=b[t%b.length],r=t+1;return{...n,id:String(r),name:`${n.name} #${r}`}}),S={active:`lime`,inactive:`gray`,pending:`orange`},C=10,w=[{label:`All members`,value:`all`},{label:`Admins only`,value:`admins`},{label:`Pending invites`,value:`pending`}],T=[{id:`role`,label:`Role`,options:[{value:`Admin`,label:`Admin`},{value:`Editor`,label:`Editor`},{value:`Viewer`,label:`Viewer`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`}]}],E={role:`role`,status:`status`},D=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,y.jsx)(f,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,y.jsx)(c,{color:S[e.status],children:e.status})}],O=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0,editable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,y.jsx)(f,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,y.jsx)(c,{color:S[e.status],children:e.status})}],k=[{id:`1`,firstName:`-`,lastName:`-`,email:`e2e@test.com`,role:`Owner`},{id:`2`,firstName:`Katherine`,lastName:`Johnson`,email:`katherine.johnson@example.com`,role:`Editor`},{id:`3`,firstName:`Margaret`,lastName:`Hamilton`,email:`margaret.hamilton@longsubdomain.example.com`,role:`Admin`}],A=[{key:`firstName`,header:`First name`},{key:`lastName`,header:`Last name`},{key:`email`,header:`Email`},{key:`role`,header:`Role`}],j={title:`Components/DataTable`,component:_,tags:[`autodocs`],argTypes:{selectionMode:{control:`inline-radio`,options:[`none`,`single`,`multiple`]},selectionControl:{control:`inline-radio`,options:p,description:`Row-index column control. Defaults: single → radio, multiple → checkbox. "multiple" always uses checkboxes.`}},args:{selectionMode:`none`,title:`Data Table`,subtitle:`A compact overview of the team.`},parameters:{design:oe(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2419-29864&m=dev`),docs:{description:{component:`Data grid with sorting, selection, and pagination. Use for dense tabular data where rows represent records and columns are consistent fields.`}}}},M={render:e=>{let[t,n]=(0,v.useState)(1),i=Math.max(1,Math.ceil(x.length/C)),a=Math.min(t,i);return(0,y.jsx)(`div`,{style:{width:960},children:(0,y.jsx)(_,{...e,columns:D,data:x,currentPage:a,rowsPerPage:C,footer:(0,y.jsx)(r,{currentPage:a,totalPages:i,onPageChange:n})})})}},N={args:{selectionMode:`single`},render:M.render},P={args:{selectionMode:`multiple`},render:M.render},F={args:{selectionMode:`single`},render:M.render},I={args:{selectionMode:`single`,selectionControl:`checkbox`},render:M.render},L={args:{selectionMode:`multiple`},render:e=>{let[t,n]=(0,v.useState)(1),[i,a]=(0,v.useState)(``),[o,s]=(0,v.useState)({}),[c,l]=(0,v.useState)(x.length),u=Math.max(1,Math.ceil(c/C)),d=Math.min(t,u);return(0,y.jsx)(`div`,{style:{width:960},children:(0,y.jsx)(_,{...e,className:`bg-transparent`,toolbar:(0,y.jsx)(se,{search:i,onSearchChange:e=>{a(e),n(1)},filters:o,onFiltersChange:e=>{s(e),n(1)}}),header:(0,y.jsx)(te,{title:`Team directory`,subtitle:`Search, filter, and manage workspace members.`}),columns:D,data:x,searchQuery:i,filters:o,filterKeys:E,onFilteredCountChange:l,currentPage:d,rowsPerPage:C,footer:(0,y.jsx)(r,{currentPage:d,totalPages:u,onPageChange:n})})})}},R={render:e=>(0,y.jsx)(`div`,{style:{width:960},children:(0,y.jsx)(_,{...e,columns:D,data:x})})},z={name:`With inline editable cells`,parameters:{docs:{description:{story:"The **Name** column uses `editable: true`. Click a cell to edit (pointer cursor); blur or Enter commits (updates local story state). Escape restores the previous value."}}},args:{selectionMode:`none`,title:`Editable cells`,subtitle:`Click a name to edit inline.`},render:e=>{let[t,n]=(0,v.useState)(()=>x.slice(0,12).map(e=>({...e})));return(0,y.jsx)(`div`,{style:{width:960},children:(0,y.jsx)(_,{...e,columns:O,data:t,onCellTextCommit:({rowId:e,columnKey:t,value:r})=>{n(n=>n.map(n=>n.id===e&&t===`name`?{...n,name:r}:n))}})})}},B=`arcade-storybook:datatable:column-widths`,V={name:`With persisted column widths`,parameters:{docs:{description:{story:"Columns are resizable; the widths are saved to `localStorage` so they persist across reloads. The story wires up `columnWidths` (controlled) + `onColumnWidthsChange`. Use the **Reset widths** button to clear the stored widths and fall back to auto sizing."}}},args:{selectionMode:`none`,title:`Persisted column widths`,subtitle:`Drag a header divider to resize. Reload to verify persistence.`},render:e=>{let[t,n]=(0,v.useState)(()=>ce()),r=e=>{n(e);try{window.localStorage.setItem(B,JSON.stringify(e))}catch{}};return(0,y.jsxs)(`div`,{style:{width:960},className:`gap-md flex flex-col`,children:[(0,y.jsx)(`div`,{children:(0,y.jsx)(o,{kind:`ghost`,size:`small`,label:`Reset widths`,onClick:()=>{try{window.localStorage.removeItem(B)}catch{}n({})}})}),(0,y.jsx)(_,{...e,columns:D,data:x.slice(0,10),columnWidths:t,onColumnWidthsChange:r})]})}},H={render:e=>(0,y.jsx)(`div`,{style:{width:720},children:(0,y.jsxs)(_,{...e,title:`Recent activity`,subtitle:`Manually composed rows`,children:[(0,y.jsxs)(h,{showBorderTop:!0,showBorderBottom:!0,children:[(0,y.jsx)(g,{columnBorderRight:!0,children:`Deployment succeeded`}),(0,y.jsx)(g,{children:`2 minutes ago`})]}),(0,y.jsxs)(h,{children:[(0,y.jsx)(g,{columnBorderRight:!0,children:`Build finished`}),(0,y.jsx)(g,{children:`11 minutes ago`})]})]})})},U={name:`Column alignment (auto-sized, narrow)`,parameters:{docs:{description:{story:"Short header labels with long body content in a deliberately narrow container, with no per-column `width` set. Header and body columns must stay aligned and overflow truncates with an ellipsis. Guards the `min-w-0` fix that keeps auto-sized flex columns from being widened by their content."}}},render:e=>(0,y.jsx)(`div`,{style:{width:460},children:(0,y.jsx)(_,{...e,title:`People`,subtitle:`Auto-sized columns must align header-to-body.`,columns:A,data:k})})},W=D.map(e=>e.kind===`rowIndex`?e:{...e,width:220}),G={name:`Horizontal scroll fade`,parameters:{docs:{description:{story:`When the columns are wider than the container, the grid fades out towards every edge that still hides content - right only at the start, both once scrolled, left only at the end. The fade is a mask, so it works on any surface the table is placed on.`}}},render:e=>(0,y.jsx)(`div`,{style:{width:520},children:(0,y.jsx)(_,{...e,title:`People`,subtitle:`Scroll sideways - the faded edge marks the columns still out of view.`,columns:W,data:x.slice(0,6)})})},K=[{id:`1`,name:`International Federation of Independent Health Insurance Service Providers Ltd.`,contact:`service-desk@federation-of-health-insurance-providers.example.com`},{id:`2`,name:`Acme Health`,contact:`hello@acme.example.com`}],q=[{key:`name`,header:`Partner`,width:240,render:e=>(0,y.jsx)(ee,{label:e.name,href:`#`,size:`sm`})},{key:`contact`,header:`Contact`,width:240}],J={name:`Link in a narrow column`,parameters:{docs:{description:{story:"A `Link` rendered into a body cell stays on one line and truncates with an ellipsis at the cell edge, like plain text does. While it is clipped the full label is its native `title`; the keyboard focus ring stays visible inside the cell."}}},render:e=>(0,y.jsx)(`div`,{style:{width:480},children:(0,y.jsx)(_,{...e,title:`Partners`,subtitle:`Long link labels truncate instead of wrapping.`,columns:q,data:K})})},Y=[{id:`1`,name:`Mobility Flow`,tags:[`Public in the widget`]},{id:`2`,name:`Community Run`,tags:[`Public in the widget`,`Free of charge`,`Trial allowed`]},{id:`3`,name:`Coach workshop`,tags:[`Internal only`]}],X=[{key:`name`,header:`Class`,width:200},{key:`tags`,header:`Visibility`,kind:`badge`,width:220,render:e=>(0,y.jsx)(y.Fragment,{children:e.tags.map(e=>(0,y.jsx)(c,{color:e===`Internal only`?`gray`:`blue`,children:e},e))})}],Z={name:`Badges in a narrow column`,parameters:{docs:{description:{story:`Several badges in one cell stay on a single line. What does not fit the column is clipped at the cell edge; the badges never wrap into a second line that would spill over the rows below.`}}},render:e=>(0,y.jsx)(`div`,{style:{width:480},children:(0,y.jsx)(_,{...e,title:`Class types`,subtitle:`Badges clip instead of wrapping.`,columns:X,data:Y})})},le=[{id:`1`,name:`Downtown Studio and Community Wellness Center`,address:`1200 Very Long Boulevard Name, Building C, Floor 4, Springfield`,manager:`Margaret Hamilton-Johnson`},{id:`2`,name:`Riverside`,address:`8 River Road, Springfield`,manager:`Alan Turing`},{id:`3`,name:`North Campus Strength and Conditioning Annex`,address:`45 North Avenue, Springfield, near the central station`,manager:`Grace Hopper`}],ue=[{key:`name`,header:`Location`,width:180},{key:`address`,header:`Address`,width:200,render:e=>(0,y.jsx)(`span`,{children:e.address})},{key:`manager`,header:`Manager`,width:140,render:e=>(0,y.jsxs)(`span`,{children:[(0,y.jsx)(`strong`,{children:e.manager.split(` `)[0]}),` `,e.manager.split(` `).slice(1).join(` `)]})}],Q={name:`Narrow columns, long text`,parameters:{docs:{description:{story:"Fixed column widths that add up to less than the container: the header band still spans the full table width. Long values - plain text as well as custom `render` output - stay on one line and truncate with an ellipsis instead of wrapping over the next row."}}},render:e=>(0,y.jsx)(`div`,{style:{width:960},children:(0,y.jsx)(_,{...e,title:`Locations`,subtitle:`Columns narrower than the table, values longer than their columns.`,columns:ue,data:le})})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...F.parameters?.docs?.source},description:{story:`Single-select with compact radios in the row-index column (default control).`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single",
    selectionControl: "checkbox"
  },
  render: Playground.render
}`,...I.parameters?.docs?.source},description:{story:`Single-select with compact checkboxes in the row-index column.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:"Full chrome: `TableHeader` (`header` slot) → `TableToolbar` → grid → `TableFooter`.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people} />
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"Inline text editing on the Name column (`editable` + `onCellTextCommit`). Click to edit; Enter or blur saves, Escape cancels.",...z.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Regression guard for header/body column alignment. Each row is an independent
flex container, so a body cell must shrink to the same width its header cell
does. Here the header labels are short ("Email") while the body holds long
values (\`katherine.johnson@example.com\`) and a narrow container squeezes the
auto-sized columns.

The columns must line up top-to-bottom and long values must truncate with an
ellipsis. This previously broke: cells used \`min-w-min\`, so a long email
forced its body column wider than the matching header (~55px offset at this
width). Auto-sized columns now use \`min-w-0\`, so every row distributes the
same flex space identically and the grid stays aligned.`,...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`WithSingleSelection`,`WithMultipleSelection`,`WithSingleRadioInRowIndex`,`WithSingleCheckboxInRowIndex`,`WithToolbarHeaderAndFooter`,`WithoutFooter`,`WithInlineEditableCells`,`WithPersistedColumnWidths`,`Composed`,`ColumnAlignment`,`HorizontalScrollFade`,`LinkInNarrowColumn`,`BadgesInNarrowColumn`,`NarrowColumnsLongText`]}))();export{Z as BadgesInNarrowColumn,U as ColumnAlignment,H as Composed,G as HorizontalScrollFade,J as LinkInNarrowColumn,Q as NarrowColumnsLongText,M as Playground,z as WithInlineEditableCells,P as WithMultipleSelection,V as WithPersistedColumnWidths,I as WithSingleCheckboxInRowIndex,F as WithSingleRadioInRowIndex,N as WithSingleSelection,L as WithToolbarHeaderAndFooter,R as WithoutFooter,$ as __namedExportsOrder,j as default};