import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$r as n,B as r,Bn as i,Jr as a,L as o,Po as s,Ps as c,Ur as l,V as u,Wr as d,Xr as f,Zr as p,ei as m,i as h,j as g,la as _,ta as v,to as y,ys as b,z as ee}from"./iframe-ruynpjX6.js";import{n as x,t as S}from"./figmaDesign-CO6i5n9C.js";function C({search:e,onSearchChange:t,filters:n,onFiltersChange:a}){let[c,l]=(0,T.useState)(`all`),[d,f]=(0,T.useState)(`list`);return(0,E.jsx)(u,{leftSlot:(0,E.jsx)(i,{id:`data-table-composition-view`,title:`View`,hideLabel:!0,inline:!0,size:`small`,reserveInlineNotificationHeight:!1,value:c,onChange:l,items:j}),rightSlot:(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(`div`,{className:`gap-2xs flex items-center`,children:[(0,E.jsx)(r,{value:d,onValueChange:f}),(0,E.jsx)(ee,{value:e,onValueChange:t}),(0,E.jsx)(o,{groups:M,value:n,onValueChange:a})]}),(0,E.jsx)(`div`,{className:`py-sm flex items-center self-stretch`,children:(0,E.jsx)(v,{orientation:`vertical`,width:`0.5`,className:`min-h-[24px]`})}),(0,E.jsx)(s,{kind:`ghost`,size:`small`,label:`Export`,IconRight:y})]})})}function w(){if(typeof window>`u`)return{};try{let e=window.localStorage.getItem(q);if(!e)return{};let t=JSON.parse(e);if(t&&typeof t==`object`)return t}catch{}return{}}var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{h(),_(),T=t(c(),1),x(),E=b(),D=[{name:`Ada Lovelace`,email:`ada@example.com`,role:`Admin`,status:`active`},{name:`Grace Hopper`,email:`grace@example.com`,role:`Editor`,status:`active`},{name:`Alan Turing`,email:`alan@example.com`,role:`Viewer`,status:`pending`},{name:`Katherine Johnson`,email:`katherine@example.com`,role:`Editor`,status:`inactive`},{name:`Margaret Hamilton`,email:`margaret@example.com`,role:`Admin`,status:`active`}],O=Array.from({length:47},(e,t)=>{let n=D[t%D.length],r=t+1;return{...n,id:String(r),name:`${n.name} #${r}`}}),k={active:`lime`,inactive:`gray`,pending:`orange`},A=10,j=[{label:`All members`,value:`all`},{label:`Admins only`,value:`admins`},{label:`Pending invites`,value:`pending`}],M=[{id:`role`,label:`Role`,options:[{value:`Admin`,label:`Admin`},{value:`Editor`,label:`Editor`},{value:`Viewer`,label:`Viewer`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`}]}],N={role:`role`,status:`status`},P=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,E.jsx)(n,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,E.jsx)(m,{color:k[e.status],children:e.status})}],F=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0,editable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,E.jsx)(n,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,E.jsx)(m,{color:k[e.status],children:e.status})}],I=[{id:`1`,firstName:`-`,lastName:`-`,email:`e2e@test.com`,role:`Owner`},{id:`2`,firstName:`Katherine`,lastName:`Johnson`,email:`katherine.johnson@example.com`,role:`Editor`},{id:`3`,firstName:`Margaret`,lastName:`Hamilton`,email:`margaret.hamilton@longsubdomain.example.com`,role:`Admin`}],L=[{key:`firstName`,header:`First name`},{key:`lastName`,header:`Last name`},{key:`email`,header:`Email`},{key:`role`,header:`Role`}],R={title:`Display & Data/DataTable/DataTable`,component:l,tags:[`autodocs`],argTypes:{selectionMode:{control:`inline-radio`,options:[`none`,`single`,`multiple`]},selectionControl:{control:`inline-radio`,options:d,description:`Row-index column control. Defaults: single → radio, multiple → checkbox. "multiple" always uses checkboxes.`}},args:{selectionMode:`none`,title:`Data Table`,subtitle:`A compact overview of the team.`},parameters:{design:S(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2419-29864&m=dev`),docs:{description:{component:`Data grid with sorting, selection, and pagination. Use for dense tabular data where rows represent records and columns are consistent fields.`}}}},z={render:e=>{let[t,n]=(0,T.useState)(1),r=Math.max(1,Math.ceil(O.length/A)),i=Math.min(t,r);return(0,E.jsx)(`div`,{style:{width:960},children:(0,E.jsx)(l,{...e,columns:P,data:O,currentPage:i,rowsPerPage:A,footer:(0,E.jsx)(g,{currentPage:i,totalPages:r,onPageChange:n})})})}},B={args:{selectionMode:`single`},render:z.render},V={args:{selectionMode:`multiple`},render:z.render},H={args:{selectionMode:`single`},render:z.render},U={args:{selectionMode:`single`,selectionControl:`checkbox`},render:z.render},W={args:{selectionMode:`multiple`},render:e=>{let[t,n]=(0,T.useState)(1),[r,i]=(0,T.useState)(``),[a,o]=(0,T.useState)({}),[s,c]=(0,T.useState)(O.length),u=Math.max(1,Math.ceil(s/A)),d=Math.min(t,u);return(0,E.jsx)(`div`,{style:{width:960},children:(0,E.jsx)(l,{...e,className:`bg-transparent`,toolbar:(0,E.jsx)(C,{search:r,onSearchChange:e=>{i(e),n(1)},filters:a,onFiltersChange:e=>{o(e),n(1)}}),header:(0,E.jsx)(f,{title:`Team directory`,subtitle:`Search, filter, and manage workspace members.`}),columns:P,data:O,searchQuery:r,filters:a,filterKeys:N,onFilteredCountChange:c,currentPage:d,rowsPerPage:A,footer:(0,E.jsx)(g,{currentPage:d,totalPages:u,onPageChange:n})})})}},G={render:e=>(0,E.jsx)(`div`,{style:{width:960},children:(0,E.jsx)(l,{...e,columns:P,data:O})})},K={name:`With inline editable cells`,parameters:{docs:{description:{story:"The **Name** column uses `editable: true`. Click a cell to edit (pointer cursor); blur or Enter commits (updates local story state). Escape restores the previous value."}}},args:{selectionMode:`none`,title:`Editable cells`,subtitle:`Click a name to edit inline.`},render:e=>{let[t,n]=(0,T.useState)(()=>O.slice(0,12).map(e=>({...e})));return(0,E.jsx)(`div`,{style:{width:960},children:(0,E.jsx)(l,{...e,columns:F,data:t,onCellTextCommit:({rowId:e,columnKey:t,value:r})=>{n(n=>n.map(n=>n.id===e&&t===`name`?{...n,name:r}:n))}})})}},q=`arcade-storybook:datatable:column-widths`,J={name:`With persisted column widths`,parameters:{docs:{description:{story:"Columns are resizable; the widths are saved to `localStorage` so they persist across reloads. The story wires up `columnWidths` (controlled) + `onColumnWidthsChange`. Use the **Reset widths** button to clear the stored widths and fall back to auto sizing."}}},args:{selectionMode:`none`,title:`Persisted column widths`,subtitle:`Drag a header divider to resize. Reload to verify persistence.`},render:e=>{let[t,n]=(0,T.useState)(()=>w()),r=e=>{n(e);try{window.localStorage.setItem(q,JSON.stringify(e))}catch{}};return(0,E.jsxs)(`div`,{style:{width:960},className:`gap-md flex flex-col`,children:[(0,E.jsx)(`div`,{children:(0,E.jsx)(s,{kind:`ghost`,size:`small`,label:`Reset widths`,onClick:()=>{try{window.localStorage.removeItem(q)}catch{}n({})}})}),(0,E.jsx)(l,{...e,columns:P,data:O.slice(0,10),columnWidths:t,onColumnWidthsChange:r})]})}},Y={render:e=>(0,E.jsx)(`div`,{style:{width:720},children:(0,E.jsxs)(l,{...e,title:`Recent activity`,subtitle:`Manually composed rows`,children:[(0,E.jsxs)(a,{showBorderTop:!0,showBorderBottom:!0,children:[(0,E.jsx)(p,{columnBorderRight:!0,children:`Deployment succeeded`}),(0,E.jsx)(p,{children:`2 minutes ago`})]}),(0,E.jsxs)(a,{children:[(0,E.jsx)(p,{columnBorderRight:!0,children:`Build finished`}),(0,E.jsx)(p,{children:`11 minutes ago`})]})]})})},X={name:`Column alignment (auto-sized, narrow)`,parameters:{docs:{description:{story:"Short header labels with long body content in a deliberately narrow container, with no per-column `width` set. Header and body columns must stay aligned and overflow truncates with an ellipsis. Guards the `min-w-0` fix that keeps auto-sized flex columns from being widened by their content."}}},render:e=>(0,E.jsx)(`div`,{style:{width:460},children:(0,E.jsx)(l,{...e,title:`People`,subtitle:`Auto-sized columns must align header-to-body.`,columns:L,data:I})})},Z=P.map(e=>e.kind===`rowIndex`?e:{...e,width:220}),Q={name:`Horizontal scroll fade`,parameters:{docs:{description:{story:`When the columns are wider than the container, the grid fades out towards every edge that still hides content - right only at the start, both once scrolled, left only at the end. The fade is a mask, so it works on any surface the table is placed on.`}}},render:e=>(0,E.jsx)(`div`,{style:{width:520},children:(0,E.jsx)(l,{...e,title:`People`,subtitle:`Scroll sideways - the faded edge marks the columns still out of view.`,columns:Z,data:O.slice(0,6)})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...H.parameters?.docs?.source},description:{story:`Single-select with compact radios in the row-index column (default control).`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single",
    selectionControl: "checkbox"
  },
  render: Playground.render
}`,...U.parameters?.docs?.source},description:{story:`Single-select with compact checkboxes in the row-index column.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:"Full chrome: `TableHeader` (`header` slot) → `TableToolbar` → grid → `TableFooter`.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people} />
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:"Inline text editing on the Name column (`editable` + `onCellTextCommit`). Click to edit; Enter or blur saves, Escape cancels.",...K.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Regression guard for header/body column alignment. Each row is an independent
flex container, so a body cell must shrink to the same width its header cell
does. Here the header labels are short ("Email") while the body holds long
values (\`katherine.johnson@example.com\`) and a narrow container squeezes the
auto-sized columns.

The columns must line up top-to-bottom and long values must truncate with an
ellipsis. This previously broke: cells used \`min-w-min\`, so a long email
forced its body column wider than the matching header (~55px offset at this
width). Auto-sized columns now use \`min-w-0\`, so every row distributes the
same flex space identically and the grid stays aligned.`,...X.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`WithSingleSelection`,`WithMultipleSelection`,`WithSingleRadioInRowIndex`,`WithSingleCheckboxInRowIndex`,`WithToolbarHeaderAndFooter`,`WithoutFooter`,`WithInlineEditableCells`,`WithPersistedColumnWidths`,`Composed`,`ColumnAlignment`,`HorizontalScrollFade`]}))();export{X as ColumnAlignment,Y as Composed,Q as HorizontalScrollFade,z as Playground,K as WithInlineEditableCells,V as WithMultipleSelection,J as WithPersistedColumnWidths,U as WithSingleCheckboxInRowIndex,H as WithSingleRadioInRowIndex,B as WithSingleSelection,W as WithToolbarHeaderAndFooter,G as WithoutFooter,$ as __namedExportsOrder,R as default};