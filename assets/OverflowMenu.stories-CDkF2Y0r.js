import{n as e}from"./chunk-jRWAZmH_.js";import{Ci as t,Io as n,Vi as r,_i as i,ji as a,qi as o,t as s,xi as c,ya as l,zi as u}from"./iframe-CPClxiO6.js";import{n as d,t as f}from"./figmaDesign-CO6i5n9C.js";var p,m,h,g,_,v,y,b,x;e((()=>{s(),a(),d(),p=n(),m={component:i,title:`Overlays & Menus/OverflowMenu`,tags:[`autodocs`],args:{title:`OverflowMenu`,size:`medium`,disabled:!1,items:[{label:`Item 1`,icon:l},{label:`Item 2`,icon:o},{label:`Item 3`,disabled:!0,icon:u},{label:`Item 4`,danger:!0,showDivider:!0,icon:r}]},argTypes:{size:{description:`Size of the OverflowMenu`,control:{type:`inline-radio`},options:c},disabled:{description:`Whether the OverflowMenu is disabled`,control:{type:`boolean`}},tooltipContent:{description:`Tooltip content for the overflow menu button (only shown if provided)`,control:{type:`text`}},tooltipPlacement:{description:`Placement of the tooltip`,control:{type:`select`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]}},render:e=>(0,p.jsx)(i,{...e}),parameters:{design:f(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2331-13861`),docs:{description:{component:`Icon button that opens a popover menu of secondary actions. Use on rows and cards for actions that don't deserve top-level buttons.`}}}},h={},g=[{label:`Edit`,icon:l},{label:`Rotate`,icon:o},{label:`Upload`,icon:u},{label:`Delete`,danger:!0,showDivider:!0,icon:r}],_=[{key:`default`,disabled:!1,tooltipContent:void 0},{key:`disabled`,disabled:!0,tooltipContent:void 0},{key:`tooltip`,disabled:!1,tooltipContent:`More options`}],v={parameters:{controls:{disable:!0}},render:e=>{let t=c.toReversed();return(0,p.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${_.length}, minmax(0, 1fr))`},children:t.map((t,n)=>_.map((r,a)=>{let o=`${t}-${r.key}`;return(0,p.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels&&(0,p.jsxs)(`p`,{className:`typography-body-small text-text mb-sm`,children:[`size=`,t,`, `,r.key]}),(0,p.jsx)(i,{title:`OverflowMenu ${t} ${r.key}`,size:t,disabled:r.disabled,tooltipContent:r.tooltipContent,tooltipPlacement:`bottom`,items:g})]},o)}))})},args:{showLabels:!1}},y={parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,p.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Table row action (24px trigger)`}),(0,p.jsx)(i,{title:`Row actions`,size:`small`,items:g,placement:`bottom-end`,trigger:(0,p.jsx)(t,{ariaLabel:`Row actions`})})]})},b={parameters:{controls:{disable:!0}},render:()=>{let e=[{label:`Edit`,icon:l},{label:`Rotate`,icon:o},{label:`Upload`,icon:u},{label:`Delete`,danger:!0,showDivider:!0,icon:r}];return(0,p.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,p.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,p.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`With tooltip`}),(0,p.jsx)(i,{title:`OverflowMenu`,size:`medium`,items:e,tooltipContent:`More options`,tooltipPlacement:`bottom`})]}),(0,p.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,p.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Without tooltip (no tooltipContent prop)`}),(0,p.jsx)(i,{title:`OverflowMenu`,size:`medium`,items:e})]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Overview`,`WithTableTrigger`,`WithTooltip`]}))();export{v as Overview,h as Playground,y as WithTableTrigger,b as WithTooltip,x as __namedExportsOrder,m as default};