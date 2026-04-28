import{n as e}from"./chunk-jRWAZmH_.js";import{Di as t,Rr as n,dn as r,qn as i,sr as a,t as o,xr as s,zr as c}from"./iframe-DBAt7ZKC.js";var l,u,d,f,p,m,h,g,_;e((()=>{o(),i(),l=t(),u={none:void 0,IconArrowRight:n,IconArrowLeft:c,IconExternalLink:s,Icon123:a},d=[`sm`,`md`,`lg`],f={title:`Components/Link`,component:r,tags:[`autodocs`],args:{href:`#`,label:`Link`,disabled:!1,inline:!1,size:`md`,leadingIcon:!1,icon:`IconArrowRight`},parameters:{docs:{description:{component:`Anchor styled as a text link, with optional leading or trailing icon. Use for in-page navigation and external references.`}}}},p={render:e=>{let{icon:t,...n}=e,i=u[t];return(0,l.jsx)(r,{...n,icon:i})},argTypes:{size:{description:`Typography scale`,control:{type:`inline-radio`},options:[...d]},inline:{description:`Inline (link style) vs accent (standalone)`,control:`boolean`},disabled:{control:`boolean`},leadingIcon:{control:`boolean`},label:{control:`text`},href:{control:`text`},icon:{control:{type:`select`},options:Object.keys(u)},component:{control:{disable:!0}}}},m=[{inline:!1,disabled:!1,leadingIcon:!1},{inline:!1,disabled:!1,leadingIcon:!0},{inline:!1,disabled:!0,leadingIcon:!1},{inline:!0,disabled:!1,leadingIcon:!1},{inline:!0,disabled:!0,leadingIcon:!1}],h={sm:`typography-label`,md:`typography-body-small`,lg:`typography-body`},g={parameters:{controls:{disable:!0}},render:e=>{let t=[...d].toReversed();return(0,l.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${t.length}, minmax(0, 1fr))`},children:m.map((i,a)=>t.map((t,o)=>{let c=`${t}-${i.inline?`inline`:`accent`}-${i.disabled?`disabled`:`enabled`}-${i.leadingIcon?`leading`:`trailing`}`;return(0,l.jsxs)(`div`,{style:{gridColumn:`${o+1} / span 1`,gridRow:`${a+1} / span 1`},children:[e.showLabels&&(0,l.jsxs)(`p`,{className:`${h[t]} text-text`,children:[`size=`,t,`, `,i.inline?`inline`:`accent`,i.disabled?`, disabled`:`, enabled`,i.leadingIcon?`, leading icon`:`, trailing icon`]}),i.inline?(0,l.jsxs)(`p`,{className:`${h[t]} text-text`,children:[`Before`,` `,(0,l.jsx)(r,{href:`#`,label:`link`,size:t,inline:!0,disabled:i.disabled,icon:s,leadingIcon:i.leadingIcon}),` `,`after.`]}):(0,l.jsx)(r,{href:`#`,label:`Link`,size:t,inline:!1,disabled:i.disabled,icon:n,leadingIcon:i.leadingIcon})]},c)}))})},args:{showLabels:!1}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    }
  }
}`,...p.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Overview`]}))();export{g as Overview,p as Playground,_ as __namedExportsOrder,f as default};