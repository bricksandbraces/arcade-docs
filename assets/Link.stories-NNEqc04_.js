import{n as e}from"./chunk-jRWAZmH_.js";import{Hr as t,Io as n,Ja as r,Zi as i,ji as a,lr as o,qa as s,t as c,va as l}from"./iframe-BugE88Md.js";import{n as u,t as d}from"./figmaDesign-CO6i5n9C.js";var f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{c(),a(),u(),f=n(),p={none:void 0,IconArrowRight:s,IconArrowLeft:r,IconExternalLink:l,Icon123:i},m=[`sm`,`md`,`lg`],h={title:`Navigation/Link`,component:t,tags:[`autodocs`],args:{href:`#`,label:`Link`,disabled:!1,inline:!1,size:`md`,leadingIcon:!1,icon:`IconArrowRight`},parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2130-35884`),docs:{description:{component:`Anchor styled as a text link, with optional leading or trailing icon. Use for in-page navigation and external references.`}}}},g={render:e=>{let{icon:n,...r}=e,i=p[n];return(0,f.jsx)(t,{...r,icon:i})},argTypes:{size:{description:`Typography scale`,control:{type:`inline-radio`},options:[...m]},inline:{description:`Inline (link style) vs accent (standalone)`,control:`boolean`},disabled:{control:`boolean`},leadingIcon:{control:`boolean`},label:{control:`text`},href:{control:`text`},icon:{control:{type:`select`},options:Object.keys(p)},component:{control:{disable:!0}},linkComponent:{control:{disable:!0}}}},_=[{inline:!1,disabled:!1,leadingIcon:!1},{inline:!1,disabled:!1,leadingIcon:!0},{inline:!1,disabled:!0,leadingIcon:!1},{inline:!0,disabled:!1,leadingIcon:!1},{inline:!0,disabled:!0,leadingIcon:!1}],v={sm:`typography-label`,md:`typography-body-small`,lg:`typography-body`},y={parameters:{controls:{disable:!0}},render:e=>{let n=[...m].toReversed();return(0,f.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:_.map((r,i)=>n.map((n,a)=>{let o=`${n}-${r.inline?`inline`:`accent`}-${r.disabled?`disabled`:`enabled`}-${r.leadingIcon?`leading`:`trailing`}`;return(0,f.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${i+1} / span 1`},children:[e.showLabels&&(0,f.jsxs)(`p`,{className:`${v[n]} text-text`,children:[`size=`,n,`, `,r.inline?`inline`:`accent`,r.disabled?`, disabled`:`, enabled`,r.leadingIcon?`, leading icon`:`, trailing icon`]}),r.inline?(0,f.jsxs)(`p`,{className:`${v[n]} text-text`,children:[`Before`,` `,(0,f.jsx)(t,{href:`#`,label:`link`,size:n,inline:!0,disabled:r.disabled,icon:l,leadingIcon:r.leadingIcon}),` `,`after.`]}):(0,f.jsx)(t,{href:`#`,label:`Link`,size:n,inline:!1,disabled:r.disabled,icon:s,leadingIcon:r.leadingIcon})]},o)}))})},args:{showLabels:!1}},b={render:()=>(0,f.jsx)(o,{})},x=({href:e,children:t,...n})=>(0,f.jsx)(`a`,{...n,href:e,"data-next-link":`true`,children:t}),S={parameters:{controls:{disable:!0},docs:{description:{story:"Plug in `next/link`'s `Link` (or any equivalent) via `linkComponent` so consumers preserve SPA navigation. The rendered anchor below carries a `data-next-link` attribute set by the mock component to make the substitution visible."}}},render:()=>(0,f.jsx)(t,{href:`/dashboard`,label:`Open dashboard`,linkComponent:x})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    const IconComponent = iconMap[icon];
    return <Link {...rest} icon={IconComponent} />;
  },
  argTypes: {
    size: {
      description: "Typography scale",
      control: {
        type: "inline-radio"
      },
      options: [...LinkStorySizes]
    },
    inline: {
      description: "Inline (link style) vs accent (standalone)",
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    leadingIcon: {
      control: "boolean"
    },
    label: {
      control: "text"
    },
    href: {
      control: "text"
    },
    icon: {
      control: {
        type: "select"
      },
      options: Object.keys(iconMap) as IconKey[]
    },
    component: {
      control: {
        disable: true
      }
    },
    linkComponent: {
      control: {
        disable: true
      }
    }
  }
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const overviewSizes = [...LinkStorySizes].toReversed();
    return <div className="gap-xlg grid" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${overviewSizes.length}, minmax(0, 1fr))\`
    }}>
        {overviewRows.map((rowConfig, rowIndex) => {
        return overviewSizes.map((size, columnIndex) => {
          const key = \`\${size}-\${rowConfig.inline ? "inline" : "accent"}-\${rowConfig.disabled ? "disabled" : "enabled"}-\${rowConfig.leadingIcon ? "leading" : "trailing"}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className={\`\${overviewTypographyByLinkSize[size]} text-text\`}>
                    size={size}, {rowConfig.inline ? "inline" : "accent"}
                    {rowConfig.disabled ? ", disabled" : ", enabled"}
                    {rowConfig.leadingIcon ? ", leading icon" : ", trailing icon"}
                  </p>}
                {rowConfig.inline ? <p className={\`\${overviewTypographyByLinkSize[size]} text-text\`}>
                    Before{" "}
                    <Link href="#" label="link" size={size} inline disabled={rowConfig.disabled} icon={IconExternalLink} leadingIcon={rowConfig.leadingIcon} />{" "}
                    after.
                  </p> : <Link href="#" label="Link" size={size} inline={false} disabled={rowConfig.disabled} icon={IconArrowRight} leadingIcon={rowConfig.leadingIcon} />}
              </div>;
        });
      })}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <LinkSkeleton />
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Plug in \`next/link\`'s \`Link\` (or any equivalent) via \`linkComponent\` so consumers preserve SPA navigation. The rendered anchor below carries a \`data-next-link\` attribute set by the mock component to make the substitution visible."
      }
    }
  },
  render: () => <Link href="/dashboard" label="Open dashboard" linkComponent={MockNextLink} />
}`,...S.parameters?.docs?.source},description:{story:'Use the `linkComponent` prop to plug in `next/link`\'s `Link`, `react-router`\'s\n`Link`, or any equivalent client-side router primitive. The element receives\n`href` and renders an anchor - Arcade keeps its styling, the consumer keeps\nSPA navigation.\n\n```tsx\nimport NextLink from "next/link";\n<Link href="/dashboard" label="Dashboard" linkComponent={NextLink} />\n```',...S.parameters?.docs?.description}}},C=[`Playground`,`Overview`,`Skeleton`,`WithNextLink`]}))();export{y as Overview,g as Playground,b as Skeleton,S as WithNextLink,C as __namedExportsOrder,h as default};