import{n as e}from"./chunk-jRWAZmH_.js";import{Ii as t,ci as n,fi as r,ji as i,ki as a,mi as o,oa as s,t as c,xi as l,yo as u}from"./iframe-BXRL_JkN.js";var d,f,p,m,h,g,_,v,y;e((()=>{c(),l(),d=u(),f={component:n,title:`Overlays & Menus/OverflowMenu`,tags:[`autodocs`],args:{title:`OverflowMenu`,size:`medium`,disabled:!1,items:[{label:`Item 1`,icon:s},{label:`Item 2`,icon:t},{label:`Item 3`,disabled:!0,icon:a},{label:`Item 4`,danger:!0,showDivider:!0,icon:i}]},argTypes:{size:{description:`Size of the OverflowMenu`,control:{type:`inline-radio`},options:r},disabled:{description:`Whether the OverflowMenu is disabled`,control:{type:`boolean`}},tooltipContent:{description:`Tooltip content for the overflow menu button (only shown if provided)`,control:{type:`text`}},tooltipPlacement:{description:`Placement of the tooltip`,control:{type:`select`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]}},render:e=>(0,d.jsx)(n,{...e}),parameters:{docs:{description:{component:`Icon button that opens a popover menu of secondary actions. Use on rows and cards for actions that don't deserve top-level buttons.`}}}},p={},m=[{label:`Edit`,icon:s},{label:`Rotate`,icon:t},{label:`Upload`,icon:a},{label:`Delete`,danger:!0,showDivider:!0,icon:i}],h=[{key:`default`,disabled:!1,tooltipContent:void 0},{key:`disabled`,disabled:!0,tooltipContent:void 0},{key:`tooltip`,disabled:!1,tooltipContent:`More options`}],g={parameters:{controls:{disable:!0}},render:e=>{let t=r.toReversed();return(0,d.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${h.length}, minmax(0, 1fr))`},children:t.map((t,r)=>h.map((i,a)=>{let o=`${t}-${i.key}`;return(0,d.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,d.jsxs)(`p`,{className:`typography-body-small text-text mb-sm`,children:[`size=`,t,`, `,i.key]}),(0,d.jsx)(n,{title:`OverflowMenu ${t} ${i.key}`,size:t,disabled:i.disabled,tooltipContent:i.tooltipContent,tooltipPlacement:`bottom`,items:m})]},o)}))})},args:{showLabels:!1}},_={parameters:{controls:{disable:!0}},render:()=>(0,d.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,d.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Table row action (24px trigger)`}),(0,d.jsx)(n,{title:`Row actions`,size:`small`,items:m,placement:`bottom-end`,trigger:(0,d.jsx)(o,{ariaLabel:`Row actions`})})]})},v={parameters:{controls:{disable:!0}},render:()=>{let e=[{label:`Edit`,icon:s},{label:`Rotate`,icon:t},{label:`Upload`,icon:a},{label:`Delete`,danger:!0,showDivider:!0,icon:i}];return(0,d.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,d.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,d.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`With tooltip`}),(0,d.jsx)(n,{title:`OverflowMenu`,size:`medium`,items:e,tooltipContent:`More options`,tooltipPlacement:`bottom`})]}),(0,d.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,d.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Without tooltip (no tooltipContent prop)`}),(0,d.jsx)(n,{title:`OverflowMenu`,size:`medium`,items:e})]})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Overview`,`WithTableTrigger`,`WithTooltip`]}))();export{g as Overview,p as Playground,_ as WithTableTrigger,v as WithTooltip,y as __namedExportsOrder,f as default};