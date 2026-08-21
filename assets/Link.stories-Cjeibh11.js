import{n as e}from"./chunk-jRWAZmH_.js";import{Ea as t,Fi as n,Nr as r,Ta as i,er as a,mo as o,t as s,ta as c,vi as l}from"./iframe-ys9-gXlz.js";var u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{s(),l(),u=o(),d={none:void 0,IconArrowRight:i,IconArrowLeft:t,IconExternalLink:c,Icon123:n},f=[`sm`,`md`,`lg`],p={title:`Navigation/Link`,component:r,tags:[`autodocs`],args:{href:`#`,label:`Link`,disabled:!1,inline:!1,size:`md`,leadingIcon:!1,icon:`IconArrowRight`},parameters:{docs:{description:{component:`Anchor styled as a text link, with optional leading or trailing icon. Use for in-page navigation and external references.`}}}},m={render:e=>{let{icon:t,...n}=e,i=d[t];return(0,u.jsx)(r,{...n,icon:i})},argTypes:{size:{description:`Typography scale`,control:{type:`inline-radio`},options:[...f]},inline:{description:`Inline (link style) vs accent (standalone)`,control:`boolean`},disabled:{control:`boolean`},leadingIcon:{control:`boolean`},label:{control:`text`},href:{control:`text`},icon:{control:{type:`select`},options:Object.keys(d)},component:{control:{disable:!0}},linkComponent:{control:{disable:!0}}}},h=[{inline:!1,disabled:!1,leadingIcon:!1},{inline:!1,disabled:!1,leadingIcon:!0},{inline:!1,disabled:!0,leadingIcon:!1},{inline:!0,disabled:!1,leadingIcon:!1},{inline:!0,disabled:!0,leadingIcon:!1}],g={sm:`typography-label`,md:`typography-body-small`,lg:`typography-body`},_={parameters:{controls:{disable:!0}},render:e=>{let t=[...f].toReversed();return(0,u.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${t.length}, minmax(0, 1fr))`},children:h.map((n,a)=>t.map((t,o)=>{let s=`${t}-${n.inline?`inline`:`accent`}-${n.disabled?`disabled`:`enabled`}-${n.leadingIcon?`leading`:`trailing`}`;return(0,u.jsxs)(`div`,{style:{gridColumn:`${o+1} / span 1`,gridRow:`${a+1} / span 1`},children:[e.showLabels&&(0,u.jsxs)(`p`,{className:`${g[t]} text-text`,children:[`size=`,t,`, `,n.inline?`inline`:`accent`,n.disabled?`, disabled`:`, enabled`,n.leadingIcon?`, leading icon`:`, trailing icon`]}),n.inline?(0,u.jsxs)(`p`,{className:`${g[t]} text-text`,children:[`Before`,` `,(0,u.jsx)(r,{href:`#`,label:`link`,size:t,inline:!0,disabled:n.disabled,icon:c,leadingIcon:n.leadingIcon}),` `,`after.`]}):(0,u.jsx)(r,{href:`#`,label:`Link`,size:t,inline:!1,disabled:n.disabled,icon:i,leadingIcon:n.leadingIcon})]},s)}))})},args:{showLabels:!1}},v={render:()=>(0,u.jsx)(a,{})},y=({href:e,children:t,...n})=>(0,u.jsx)(`a`,{...n,href:e,"data-next-link":`true`,children:t}),b={parameters:{controls:{disable:!0},docs:{description:{story:"Plug in `next/link`'s `Link` (or any equivalent) via `linkComponent` so consumers preserve SPA navigation. The rendered anchor below carries a `data-next-link` attribute set by the mock component to make the substitution visible."}}},render:()=>(0,u.jsx)(r,{href:`/dashboard`,label:`Open dashboard`,linkComponent:y})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <LinkSkeleton />
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:'Use the `linkComponent` prop to plug in `next/link`\'s `Link`, `react-router`\'s\n`Link`, or any equivalent client-side router primitive. The element receives\n`href` and renders an anchor — Arcade keeps its styling, the consumer keeps\nSPA navigation.\n\n```tsx\nimport NextLink from "next/link";\n<Link href="/dashboard" label="Dashboard" linkComponent={NextLink} />\n```',...b.parameters?.docs?.description}}},x=[`Playground`,`Overview`,`Skeleton`,`WithNextLink`]}))();export{_ as Overview,m as Playground,v as Skeleton,b as WithNextLink,x as __namedExportsOrder,p as default};