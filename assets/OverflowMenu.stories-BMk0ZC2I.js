import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$a as n,Da as r,Fc as i,Fs as a,Jo as o,Na as s,Ps as c,Sn as l,bc as u,go as d,ho as f,ja as p,lo as m,so as h,t as g,us as _}from"./iframe-CwyRacPm.js";import{n as v,t as y}from"./figmaDesign-DLesXS3c.js";var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{g(),n(),b=t(i(),1),v(),x=u(),S={component:r,title:`Components/OverflowMenu`,tags:[`autodocs`],args:{title:`OverflowMenu`,size:`medium`,disabled:!1,items:[{label:`Item 1`,icon:o},{label:`Item 2`,icon:d},{label:`Item 3`,disabled:!0,icon:h},{label:`Item 4`,danger:!0,showDivider:!0,icon:m}]},argTypes:{size:{description:`Size of the OverflowMenu`,control:{type:`inline-radio`},options:p},disabled:{description:`Whether the OverflowMenu is disabled`,control:{type:`boolean`}},tooltipContent:{description:`Tooltip content for the overflow menu button (only shown if provided)`,control:{type:`text`}},menuWidthPx:{description:`Width of the desktop menu panel in px (default 230)`,control:{type:`number`}},tooltipPlacement:{description:`Placement of the tooltip`,control:{type:`select`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]}},render:e=>(0,x.jsx)(r,{...e}),parameters:{design:y(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2331-13861`),docs:{description:{component:`Icon button that opens a popover menu of secondary actions. Use on rows and cards for actions that don't deserve top-level buttons.`}}}},C={},w=[{label:`Edit`,icon:o},{label:`Rotate`,icon:d},{label:`Upload`,icon:h},{label:`Delete`,danger:!0,showDivider:!0,icon:m}],T=[{key:`default`,disabled:!1,tooltipContent:void 0},{key:`disabled`,disabled:!0,tooltipContent:void 0},{key:`tooltip`,disabled:!1,tooltipContent:`More options`}],E={parameters:{controls:{disable:!0}},render:e=>{let t=p.toReversed();return(0,x.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${T.length}, minmax(0, 1fr))`},children:t.map((t,n)=>T.map((i,a)=>{let o=`${t}-${i.key}`;return(0,x.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels&&(0,x.jsxs)(`p`,{className:`typography-body-small text-text mb-sm`,children:[`size=`,t,`, `,i.key]}),(0,x.jsx)(r,{title:`OverflowMenu ${t} ${i.key}`,size:t,disabled:i.disabled,tooltipContent:i.tooltipContent,tooltipPlacement:`bottom`,items:w})]},o)}))})},args:{showLabels:!1}},D={parameters:{controls:{disable:!0}},render:()=>(0,x.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,x.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Table row action (24px trigger)`}),(0,x.jsx)(r,{title:`Row actions`,size:`small`,items:w,placement:`bottom-end`,trigger:(0,x.jsx)(s,{ariaLabel:`Row actions`})})]})},O={parameters:{controls:{disable:!0}},render:()=>{let e=[{label:`Edit`,icon:o},{label:`Rotate`,icon:d},{label:`Upload`,icon:h},{label:`Delete`,danger:!0,showDivider:!0,icon:m}];return(0,x.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,x.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,x.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`With tooltip`}),(0,x.jsx)(r,{title:`OverflowMenu`,size:`medium`,items:e,tooltipContent:`More options`,tooltipPlacement:`bottom`})]}),(0,x.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,x.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Without tooltip (no tooltipContent prop)`}),(0,x.jsx)(r,{title:`OverflowMenu`,size:`medium`,items:e})]})]})}},k=()=>{let[e,t]=(0,b.useState)(!0);return(0,x.jsxs)(`div`,{className:`gap-sm flex h-[160px] flex-col items-start`,children:[(0,x.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`192px panel (menuWidthPx)`}),(0,x.jsx)(r,{title:`View actions`,size:`small`,menuWidthPx:192,open:e,onOpenChange:t,items:[{label:`Customize view`,trailingIcon:c},{label:`Delete view`,trailingIcon:m,danger:!0,showDivider:!0}]})]})},A={parameters:{controls:{disable:!0},a11y:{test:`todo`},design:y(`https://www.figma.com/design/GPsOC3XQdyxUOZxb7qNgJu/Studio---Orapulse?node-id=2993-133351`)},render:()=>(0,x.jsx)(k,{})},j=[`Hamburg Bahrenfeld`,`Hamburg Altona`,`Berlin Mitte`],M=()=>{let[e,t]=(0,b.useState)(j[0]),[n,i]=(0,b.useState)(!0);return(0,x.jsx)(l,{open:!0,onClose:()=>void 0,title:`Checkout`,subtitle:e,headerActions:(0,x.jsx)(r,{title:`Counter settings`,size:`medium`,placement:`bottom-end`,open:n,onOpenChange:i,trigger:(0,x.jsx)(a,{kind:`ghost`,size:`medium`,variant:`rounded`,"aria-label":`Counter settings`,IconLeft:f}),items:[{kind:`header`,label:`Studio`},...j.map(n=>({label:n,selected:n===e,trailingIcon:n===e?_:void 0,onClick:()=>t(n)}))]}),children:(0,x.jsx)(`p`,{className:`typography-body-small text-text`,children:`Below md the menu opens as a bottom sheet. It has to sit above the side panel, otherwise its items cannot be reached.`})})},N={parameters:{controls:{disable:!0},a11y:{test:`todo`},viewport:{defaultViewport:`mobile1`}},render:()=>(0,x.jsx)(M,{})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: {
    showLabels?: boolean;
  }) => {
    const rows = OverflowMenuItemSizes.toReversed();
    return <div className="gap-xlg grid" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${overflowMenuOverviewColumns.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((size, rowIndex) => overflowMenuOverviewColumns.map((col, columnIndex) => {
        const key = \`\${size}-\${col.key}\`;
        return <div key={key} style={{
          gridColumn: \`\${columnIndex + 1} / span 1\`,
          gridRow: \`\${rowIndex + 1} / span 1\`
        }}>
                {args.showLabels && <p className="typography-body-small text-text mb-sm">
                    size={size}, {col.key}
                  </p>}
                <OverflowMenu title={\`OverflowMenu \${size} \${col.key}\`} size={size} disabled={col.disabled} tooltipContent={col.tooltipContent} tooltipPlacement="bottom" items={overviewItems} />
              </div>;
      }))}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-sm flex flex-col items-start">
      <p className="typography-body-small text-text-label">
        Table row action (24px trigger)
      </p>
      <OverflowMenu title="Row actions" size="small" items={overviewItems} placement="bottom-end" trigger={<TableOverflowMenuTrigger ariaLabel="Row actions" />} />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const items = [{
      label: "Edit",
      icon: IconEdit
    }, {
      label: "Rotate",
      icon: Icon3dRotate
    }, {
      label: "Upload",
      icon: IconUpload
    }, {
      label: "Delete",
      danger: true,
      showDivider: true,
      icon: IconTrash
    }];
    return <div className="gap-xlg flex flex-col items-start">
        <div className="gap-sm flex flex-col items-start">
          <p className="typography-body-small text-text-label">With tooltip</p>
          <OverflowMenu title="OverflowMenu" size="medium" items={items} tooltipContent="More options" tooltipPlacement="bottom" />
        </div>
        <div className="gap-sm flex flex-col items-start">
          <p className="typography-body-small text-text-label">
            Without tooltip (no tooltipContent prop)
          </p>
          <OverflowMenu title="OverflowMenu" size="medium" items={items} />
        </div>
      </div>;
  }
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: "todo"
    },
    design: figmaDesign("https://www.figma.com/design/GPsOC3XQdyxUOZxb7qNgJu/Studio---Orapulse?node-id=2993-133351")
  },
  render: () => <CustomWidthMenu />
}`,...A.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    a11y: {
      test: "todo"
    },
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: () => <InSidePanelMenu />
}`,...N.parameters?.docs?.source},description:{story:`An OverflowMenu inside a SidePanel header at phone width: the bottom sheet
opens above the panel (both are overlays; the sheet shares the floating
menu layer above dialogs).`,...N.parameters?.docs?.description}}},P=[`Playground`,`Overview`,`WithTableTrigger`,`WithTooltip`,`CustomWidth`,`InSidePanelMobile`]}))();export{A as CustomWidth,N as InSidePanelMobile,E as Overview,C as Playground,D as WithTableTrigger,O as WithTooltip,P as __namedExportsOrder,S as default};