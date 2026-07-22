import{n as e}from"./chunk-jRWAZmH_.js";import{$r as t,Di as n,Xi as r,co as i,di as a,ri as o,t as s,xi as c,yi as l}from"./iframe-M7vOl6ig.js";var u,d,f,p,m,h,g,_;e((()=>{s(),a(),u=i(),d={component:t,title:`Overlays & Menus/OverflowMenu`,tags:[`autodocs`],args:{title:`OverflowMenu`,size:`medium`,disabled:!1,items:[{label:`Item 1`,icon:r},{label:`Item 2`,icon:n},{label:`Item 3`,disabled:!0,icon:l},{label:`Item 4`,danger:!0,showDivider:!0,icon:c}]},argTypes:{size:{description:`Size of the OverflowMenu`,control:{type:`inline-radio`},options:o},disabled:{description:`Whether the OverflowMenu is disabled`,control:{type:`boolean`}},tooltipContent:{description:`Tooltip content for the overflow menu button (only shown if provided)`,control:{type:`text`}},tooltipPlacement:{description:`Placement of the tooltip`,control:{type:`select`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]}},render:e=>(0,u.jsx)(t,{...e}),parameters:{docs:{description:{component:`Icon button that opens a popover menu of secondary actions. Use on rows and cards for actions that don't deserve top-level buttons.`}}}},f={},p=[{label:`Edit`,icon:r},{label:`Rotate`,icon:n},{label:`Upload`,icon:l},{label:`Delete`,danger:!0,showDivider:!0,icon:c}],m=[{key:`default`,disabled:!1,tooltipContent:void 0},{key:`disabled`,disabled:!0,tooltipContent:void 0},{key:`tooltip`,disabled:!1,tooltipContent:`More options`}],h={parameters:{controls:{disable:!0}},render:e=>{let n=o.toReversed();return(0,u.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${m.length}, minmax(0, 1fr))`},children:n.map((n,r)=>m.map((i,a)=>{let o=`${n}-${i.key}`;return(0,u.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${r+1} / span 1`},children:[e.showLabels&&(0,u.jsxs)(`p`,{className:`typography-body-small text-text mb-sm`,children:[`size=`,n,`, `,i.key]}),(0,u.jsx)(t,{title:`OverflowMenu ${n} ${i.key}`,size:n,disabled:i.disabled,tooltipContent:i.tooltipContent,tooltipPlacement:`bottom`,items:p})]},o)}))})},args:{showLabels:!1}},g={parameters:{controls:{disable:!0}},render:()=>{let e=[{label:`Edit`,icon:r},{label:`Rotate`,icon:n},{label:`Upload`,icon:l},{label:`Delete`,danger:!0,showDivider:!0,icon:c}];return(0,u.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,u.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,u.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`With tooltip`}),(0,u.jsx)(t,{title:`OverflowMenu`,size:`medium`,items:e,tooltipContent:`More options`,tooltipPlacement:`bottom`})]}),(0,u.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,u.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Without tooltip (no tooltipContent prop)`}),(0,u.jsx)(t,{title:`OverflowMenu`,size:`medium`,items:e})]})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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