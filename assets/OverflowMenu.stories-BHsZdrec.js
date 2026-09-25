import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Da as n,Ho as r,Na as i,Os as a,Qi as o,Ta as s,Us as c,_a as l,co as u,ia as d,na as f,t as p}from"./iframe-jImnWlHt.js";import{n as m,t as h}from"./figmaDesign-DDiUnvXT.js";var g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{p(),l(),g=t(c(),1),m(),_=a(),v={component:o,title:`Overlays & Menus/OverflowMenu`,tags:[`autodocs`],args:{title:`OverflowMenu`,size:`medium`,disabled:!1,items:[{label:`Item 1`,icon:u},{label:`Item 2`,icon:i},{label:`Item 3`,disabled:!0,icon:s},{label:`Item 4`,danger:!0,showDivider:!0,icon:n}]},argTypes:{size:{description:`Size of the OverflowMenu`,control:{type:`inline-radio`},options:f},disabled:{description:`Whether the OverflowMenu is disabled`,control:{type:`boolean`}},tooltipContent:{description:`Tooltip content for the overflow menu button (only shown if provided)`,control:{type:`text`}},menuWidthPx:{description:`Width of the desktop menu panel in px (default 230)`,control:{type:`number`}},tooltipPlacement:{description:`Placement of the tooltip`,control:{type:`select`},options:[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]}},render:e=>(0,_.jsx)(o,{...e}),parameters:{design:h(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2331-13861`),docs:{description:{component:`Icon button that opens a popover menu of secondary actions. Use on rows and cards for actions that don't deserve top-level buttons.`}}}},y={},b=[{label:`Edit`,icon:u},{label:`Rotate`,icon:i},{label:`Upload`,icon:s},{label:`Delete`,danger:!0,showDivider:!0,icon:n}],x=[{key:`default`,disabled:!1,tooltipContent:void 0},{key:`disabled`,disabled:!0,tooltipContent:void 0},{key:`tooltip`,disabled:!1,tooltipContent:`More options`}],S={parameters:{controls:{disable:!0}},render:e=>{let t=f.toReversed();return(0,_.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${x.length}, minmax(0, 1fr))`},children:t.map((t,n)=>x.map((r,i)=>{let a=`${t}-${r.key}`;return(0,_.jsxs)(`div`,{style:{gridColumn:`${i+1} / span 1`,gridRow:`${n+1} / span 1`},children:[e.showLabels&&(0,_.jsxs)(`p`,{className:`typography-body-small text-text mb-sm`,children:[`size=`,t,`, `,r.key]}),(0,_.jsx)(o,{title:`OverflowMenu ${t} ${r.key}`,size:t,disabled:r.disabled,tooltipContent:r.tooltipContent,tooltipPlacement:`bottom`,items:b})]},a)}))})},args:{showLabels:!1}},C={parameters:{controls:{disable:!0}},render:()=>(0,_.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,_.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Table row action (24px trigger)`}),(0,_.jsx)(o,{title:`Row actions`,size:`small`,items:b,placement:`bottom-end`,trigger:(0,_.jsx)(d,{ariaLabel:`Row actions`})})]})},w={parameters:{controls:{disable:!0}},render:()=>{let e=[{label:`Edit`,icon:u},{label:`Rotate`,icon:i},{label:`Upload`,icon:s},{label:`Delete`,danger:!0,showDivider:!0,icon:n}];return(0,_.jsxs)(`div`,{className:`gap-xlg flex flex-col items-start`,children:[(0,_.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,_.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`With tooltip`}),(0,_.jsx)(o,{title:`OverflowMenu`,size:`medium`,items:e,tooltipContent:`More options`,tooltipPlacement:`bottom`})]}),(0,_.jsxs)(`div`,{className:`gap-sm flex flex-col items-start`,children:[(0,_.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`Without tooltip (no tooltipContent prop)`}),(0,_.jsx)(o,{title:`OverflowMenu`,size:`medium`,items:e})]})]})}},T=()=>{let[e,t]=(0,g.useState)(!0);return(0,_.jsxs)(`div`,{className:`gap-sm flex h-[160px] flex-col items-start`,children:[(0,_.jsx)(`p`,{className:`typography-body-small text-text-label`,children:`192px panel (menuWidthPx)`}),(0,_.jsx)(o,{title:`View actions`,size:`small`,menuWidthPx:192,open:e,onOpenChange:t,items:[{label:`Customize view`,trailingIcon:r},{label:`Delete view`,trailingIcon:n,danger:!0,showDivider:!0}]})]})},E={parameters:{controls:{disable:!0},a11y:{test:`todo`},design:h(`https://www.figma.com/design/GPsOC3XQdyxUOZxb7qNgJu/Studio---Orapulse?node-id=2993-133351`)},render:()=>(0,_.jsx)(T,{})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Playground`,`Overview`,`WithTableTrigger`,`WithTooltip`,`CustomWidth`]}))();export{E as CustomWidth,S as Overview,y as Playground,C as WithTableTrigger,w as WithTooltip,D as __namedExportsOrder,v as default};