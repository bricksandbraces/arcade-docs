import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{A as n,B as r,I as i,Kn as a,Ms as o,O as s,R as c,Xr as l,Yr as u,_i as d,ai as f,ba as ee,ca as te,ei as p,ni as m,po as h,qo as g,qs as _,ri as v,t as y,z as ne}from"./iframe-DB7Dslob.js";import{n as re,t as ie}from"./figmaDesign-DDiUnvXT.js";function b({search:e,onSearchChange:t,filters:n,onFiltersChange:o}){let[s,l]=(0,S.useState)(`all`),[u,d]=(0,S.useState)(`list`);return(0,C.jsx)(r,{leftSlot:(0,C.jsx)(a,{id:`data-table-composition-view`,title:`View`,hideLabel:!0,inline:!0,size:`small`,reserveInlineNotificationHeight:!1,value:s,onChange:l,items:O}),rightSlot:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`div`,{className:`gap-2xs flex items-center`,children:[(0,C.jsx)(ne,{value:u,onValueChange:d}),(0,C.jsx)(c,{value:e,onValueChange:t}),(0,C.jsx)(i,{groups:k,value:n,onValueChange:o})]}),(0,C.jsx)(`div`,{className:`py-sm flex items-center self-stretch`,children:(0,C.jsx)(te,{orientation:`vertical`,width:`0.5`,className:`min-h-[24px]`})}),(0,C.jsx)(g,{kind:`ghost`,size:`small`,label:`Export`,IconRight:h})]})})}function x(){if(typeof window>`u`)return{};try{let e=window.localStorage.getItem(W);if(!e)return{};let t=JSON.parse(e);if(t&&typeof t==`object`)return t}catch{}return{}}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{y(),ee(),S=t(_(),1),re(),C=o(),w=[{name:`Ada Lovelace`,email:`ada@example.com`,role:`Admin`,status:`active`},{name:`Grace Hopper`,email:`grace@example.com`,role:`Editor`,status:`active`},{name:`Alan Turing`,email:`alan@example.com`,role:`Viewer`,status:`pending`},{name:`Katherine Johnson`,email:`katherine@example.com`,role:`Editor`,status:`inactive`},{name:`Margaret Hamilton`,email:`margaret@example.com`,role:`Admin`,status:`active`}],T=Array.from({length:47},(e,t)=>{let n=w[t%w.length],r=t+1;return{...n,id:String(r),name:`${n.name} #${r}`}}),E={active:`lime`,inactive:`gray`,pending:`orange`},D=10,O=[{label:`All members`,value:`all`},{label:`Admins only`,value:`admins`},{label:`Pending invites`,value:`pending`}],k=[{id:`role`,label:`Role`,options:[{value:`Admin`,label:`Admin`},{value:`Editor`,label:`Editor`},{value:`Viewer`,label:`Viewer`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`}]}],A={role:`role`,status:`status`},j=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,C.jsx)(f,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,C.jsx)(s,{color:E[e.status],children:e.status})}],M=[{key:`_index`,header:``,kind:`rowIndex`},{key:`name`,header:`Name`,sortable:!0,editable:!0},{key:`owner`,header:`Owner`,kind:`user`,render:e=>(0,C.jsx)(f,{name:e.name})},{key:`email`,header:`Email`,sortable:!0},{key:`role`,header:`Role`},{key:`status`,header:`Status`,kind:`badge`,render:e=>(0,C.jsx)(s,{color:E[e.status],children:e.status})}],N=[{id:`1`,firstName:`-`,lastName:`-`,email:`e2e@test.com`,role:`Owner`},{id:`2`,firstName:`Katherine`,lastName:`Johnson`,email:`katherine.johnson@example.com`,role:`Editor`},{id:`3`,firstName:`Margaret`,lastName:`Hamilton`,email:`margaret.hamilton@longsubdomain.example.com`,role:`Admin`}],P=[{key:`firstName`,header:`First name`},{key:`lastName`,header:`Last name`},{key:`email`,header:`Email`},{key:`role`,header:`Role`}],F={title:`Display & Data/DataTable/DataTable`,component:u,tags:[`autodocs`],argTypes:{selectionMode:{control:`inline-radio`,options:[`none`,`single`,`multiple`]},selectionControl:{control:`inline-radio`,options:l,description:`Row-index column control. Defaults: single → radio, multiple → checkbox. "multiple" always uses checkboxes.`}},args:{selectionMode:`none`,title:`Data Table`,subtitle:`A compact overview of the team.`},parameters:{design:ie(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2419-29864&m=dev`),docs:{description:{component:`Data grid with sorting, selection, and pagination. Use for dense tabular data where rows represent records and columns are consistent fields.`}}}},I={render:e=>{let[t,r]=(0,S.useState)(1),i=Math.max(1,Math.ceil(T.length/D)),a=Math.min(t,i);return(0,C.jsx)(`div`,{style:{width:960},children:(0,C.jsx)(u,{...e,columns:j,data:T,currentPage:a,rowsPerPage:D,footer:(0,C.jsx)(n,{currentPage:a,totalPages:i,onPageChange:r})})})}},L={args:{selectionMode:`single`},render:I.render},R={args:{selectionMode:`multiple`},render:I.render},z={args:{selectionMode:`single`},render:I.render},B={args:{selectionMode:`single`,selectionControl:`checkbox`},render:I.render},V={args:{selectionMode:`multiple`},render:e=>{let[t,r]=(0,S.useState)(1),[i,a]=(0,S.useState)(``),[o,s]=(0,S.useState)({}),[c,l]=(0,S.useState)(T.length),d=Math.max(1,Math.ceil(c/D)),f=Math.min(t,d);return(0,C.jsx)(`div`,{style:{width:960},children:(0,C.jsx)(u,{...e,className:`bg-transparent`,toolbar:(0,C.jsx)(b,{search:i,onSearchChange:e=>{a(e),r(1)},filters:o,onFiltersChange:e=>{s(e),r(1)}}),header:(0,C.jsx)(m,{title:`Team directory`,subtitle:`Search, filter, and manage workspace members.`}),columns:j,data:T,searchQuery:i,filters:o,filterKeys:A,onFilteredCountChange:l,currentPage:f,rowsPerPage:D,footer:(0,C.jsx)(n,{currentPage:f,totalPages:d,onPageChange:r})})})}},H={render:e=>(0,C.jsx)(`div`,{style:{width:960},children:(0,C.jsx)(u,{...e,columns:j,data:T})})},U={name:`With inline editable cells`,parameters:{docs:{description:{story:"The **Name** column uses `editable: true`. Click a cell to edit (pointer cursor); blur or Enter commits (updates local story state). Escape restores the previous value."}}},args:{selectionMode:`none`,title:`Editable cells`,subtitle:`Click a name to edit inline.`},render:e=>{let[t,n]=(0,S.useState)(()=>T.slice(0,12).map(e=>({...e})));return(0,C.jsx)(`div`,{style:{width:960},children:(0,C.jsx)(u,{...e,columns:M,data:t,onCellTextCommit:({rowId:e,columnKey:t,value:r})=>{n(n=>n.map(n=>n.id===e&&t===`name`?{...n,name:r}:n))}})})}},W=`arcade-storybook:datatable:column-widths`,G={name:`With persisted column widths`,parameters:{docs:{description:{story:"Columns are resizable; the widths are saved to `localStorage` so they persist across reloads. The story wires up `columnWidths` (controlled) + `onColumnWidthsChange`. Use the **Reset widths** button to clear the stored widths and fall back to auto sizing."}}},args:{selectionMode:`none`,title:`Persisted column widths`,subtitle:`Drag a header divider to resize. Reload to verify persistence.`},render:e=>{let[t,n]=(0,S.useState)(()=>x()),r=e=>{n(e);try{window.localStorage.setItem(W,JSON.stringify(e))}catch{}};return(0,C.jsxs)(`div`,{style:{width:960},className:`gap-md flex flex-col`,children:[(0,C.jsx)(`div`,{children:(0,C.jsx)(g,{kind:`ghost`,size:`small`,label:`Reset widths`,onClick:()=>{try{window.localStorage.removeItem(W)}catch{}n({})}})}),(0,C.jsx)(u,{...e,columns:j,data:T.slice(0,10),columnWidths:t,onColumnWidthsChange:r})]})}},K={render:e=>(0,C.jsx)(`div`,{style:{width:720},children:(0,C.jsxs)(u,{...e,title:`Recent activity`,subtitle:`Manually composed rows`,children:[(0,C.jsxs)(p,{showBorderTop:!0,showBorderBottom:!0,children:[(0,C.jsx)(v,{columnBorderRight:!0,children:`Deployment succeeded`}),(0,C.jsx)(v,{children:`2 minutes ago`})]}),(0,C.jsxs)(p,{children:[(0,C.jsx)(v,{columnBorderRight:!0,children:`Build finished`}),(0,C.jsx)(v,{children:`11 minutes ago`})]})]})})},q={name:`Column alignment (auto-sized, narrow)`,parameters:{docs:{description:{story:"Short header labels with long body content in a deliberately narrow container, with no per-column `width` set. Header and body columns must stay aligned and overflow truncates with an ellipsis. Guards the `min-w-0` fix that keeps auto-sized flex columns from being widened by their content."}}},render:e=>(0,C.jsx)(`div`,{style:{width:460},children:(0,C.jsx)(u,{...e,title:`People`,subtitle:`Auto-sized columns must align header-to-body.`,columns:P,data:N})})},J=j.map(e=>e.kind===`rowIndex`?e:{...e,width:220}),Y={name:`Horizontal scroll fade`,parameters:{docs:{description:{story:`When the columns are wider than the container, the grid fades out towards every edge that still hides content - right only at the start, both once scrolled, left only at the end. The fade is a mask, so it works on any surface the table is placed on.`}}},render:e=>(0,C.jsx)(`div`,{style:{width:520},children:(0,C.jsx)(u,{...e,title:`People`,subtitle:`Scroll sideways - the faded edge marks the columns still out of view.`,columns:J,data:T.slice(0,6)})})},X=[{id:`1`,name:`International Federation of Independent Health Insurance Service Providers Ltd.`,contact:`service-desk@federation-of-health-insurance-providers.example.com`},{id:`2`,name:`Acme Health`,contact:`hello@acme.example.com`}],Z=[{key:`name`,header:`Partner`,width:240,render:e=>(0,C.jsx)(d,{label:e.name,href:`#`,size:`sm`})},{key:`contact`,header:`Contact`,width:240}],Q={name:`Link in a narrow column`,parameters:{docs:{description:{story:"A `Link` rendered into a body cell stays on one line and truncates with an ellipsis at the cell edge, like plain text does. While it is clipped the full label is its native `title`; the keyboard focus ring stays visible inside the cell."}}},render:e=>(0,C.jsx)(`div`,{style:{width:480},children:(0,C.jsx)(u,{...e,title:`Partners`,subtitle:`Long link labels truncate instead of wrapping.`,columns:Z,data:X})})},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "multiple"
  },
  render: Playground.render
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single"
  },
  render: Playground.render
}`,...z.parameters?.docs?.source},description:{story:`Single-select with compact radios in the row-index column (default control).`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    selectionMode: "single",
    selectionControl: "checkbox"
  },
  render: Playground.render
}`,...B.parameters?.docs?.source},description:{story:`Single-select with compact checkboxes in the row-index column.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"Full chrome: `TableHeader` (`header` slot) → `TableToolbar` → grid → `TableFooter`.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 960
  }}>
      <DataTable<Person> {...args} columns={columnsWithRowIndex} data={people} />
    </div>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"Inline text editing on the Name column (`editable` + `onCellTextCommit`). Click to edit; Enter or blur saves, Escape cancels.",...U.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Regression guard for header/body column alignment. Each row is an independent
flex container, so a body cell must shrink to the same width its header cell
does. Here the header labels are short ("Email") while the body holds long
values (\`katherine.johnson@example.com\`) and a narrow container squeezes the
auto-sized columns.

The columns must line up top-to-bottom and long values must truncate with an
ellipsis. This previously broke: cells used \`min-w-min\`, so a long email
forced its body column wider than the matching header (~55px offset at this
width). Auto-sized columns now use \`min-w-0\`, so every row distributes the
same flex space identically and the grid stays aligned.`,...q.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Playground`,`WithSingleSelection`,`WithMultipleSelection`,`WithSingleRadioInRowIndex`,`WithSingleCheckboxInRowIndex`,`WithToolbarHeaderAndFooter`,`WithoutFooter`,`WithInlineEditableCells`,`WithPersistedColumnWidths`,`Composed`,`ColumnAlignment`,`HorizontalScrollFade`,`LinkInNarrowColumn`]}))();export{q as ColumnAlignment,K as Composed,Y as HorizontalScrollFade,Q as LinkInNarrowColumn,I as Playground,U as WithInlineEditableCells,R as WithMultipleSelection,G as WithPersistedColumnWidths,B as WithSingleCheckboxInRowIndex,z as WithSingleRadioInRowIndex,L as WithSingleSelection,V as WithToolbarHeaderAndFooter,H as WithoutFooter,$ as __namedExportsOrder,F as default};