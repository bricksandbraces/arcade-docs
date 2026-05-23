import{n as e}from"./chunk-jRWAZmH_.js";import{Ui as t,Zr as n,ai as r,hi as i,pi as a,qr as o,t as s,to as c,xi as l}from"./iframe-C5XezNRx.js";var u,d,f,p,m,h,g,_;e((()=>{s(),r(),u=c(),d={component:o,title:`Overlays & Menus/OverflowMenu`,tags:[`autodocs`],args:{title:`OverflowMenu`,size:`medium`,disabled:!1,items:[{label:`Item 1`,icon:t},{label:`Item 2`,icon:l},{label:`Item 3`,disabled:!0,icon:a},{label:`Item 4`,danger:!0,showDivider:!0,icon:i}]},argTypes:{size:{description:`Size of the OverflowMenu`,control:{type:`inline-radio`},options:n},disabled:{description:`Whether the OverflowMenu is disabled`,control:{type:`boolean`}},tooltipContent:{description:`Tooltip content for the overflow menu button (only shown if provided)`,control:{type:`text`}},tooltipPlacement:{description:`Placement of the tooltip`,control:{type:`select`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]}},render:e=>(0,u.jsx)(o,{...e}),parameters:{docs:{description:{component:`Icon button that opens a popover menu of secondary actions. Use on rows and cards for actions that don't deserve top-level buttons.`}}}},f={},p=[{label:`Edit`,icon:t},{label:`Rotate`,icon:l},{label:`Upload`,icon:a},{label:`Delete`,danger:!0,showDivider:!0,icon:i}],m=[{key:`default`,disabled:!1,tooltipContent:void 0},{key:`disabled`,disabled:!0,tooltipContent:void 0},{key:`tooltip`,disabled:!1,tooltipContent:`More options`}],h={parameters:{controls:{disable:!0}},render:e=>{let t=n.toReversed();return(0,u.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${m.length}, minmax(0, 1fr))`},children:t.map((t,n)=>m.map((r,i)=>{let a=`${t}-${r.key}`;return(0,u.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels&&(0,u.jsxs)(`p`,{className:`typography-body-small text-text mb-sm`,children:[`size=`,t,`, `,r.key]}),(0,u.jsx)(o,{title:`OverflowMenu ${t} ${r.key}`,size:t,disabled:r.disabled,tooltipContent:r.tooltipContent,tooltipPlacement:`bottom`,items:p})]},a)}))})},args:{showLabels:!1}},g={parameters:{controls:{disable:!0}},render:()=>{let e=[{label:`Edit`,icon:t},{label:`Rotate`,icon:l},{label:`Upload`,icon:a},{label:`Delete`,danger:!0,showDivider:!0,icon:i}];return(0,u.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,u.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,u.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`With tooltip`}),(0,u.jsx)(o,{title:`OverflowMenu`,size:`medium`,items:e,tooltipContent:`More options`,tooltipPlacement:`bottom`})]}),(0,u.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,u.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Without tooltip (no tooltipContent prop)`}),(0,u.jsx)(o,{title:`OverflowMenu`,size:`medium`,items:e})]})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Overview`,`WithTooltip`]}))();export{h as Overview,f as Playground,g as WithTooltip,_ as __namedExportsOrder,d as default};