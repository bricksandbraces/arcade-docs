import{n as e}from"./chunk-jRWAZmH_.js";import{$r as t,Fi as n,Ln as r,aa as i,gi as a,gr as o,ia as s,qa as c,t as l}from"./iframe-1mzDmMUm.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{l(),t(),u=c(),d={none:void 0,IconArrowRight:s,IconArrowLeft:i,IconExternalLink:n,Icon123:a},f=[`sm`,`md`,`lg`],p={title:`Navigation/Link`,component:o,tags:[`autodocs`],args:{href:`#`,label:`Link`,disabled:!1,inline:!1,size:`md`,leadingIcon:!1,icon:`IconArrowRight`},parameters:{docs:{description:{component:`Anchor styled as a text link, with optional leading or trailing icon. Use for in-page navigation and external references.`}}}},m={render:e=>{let{icon:t,...n}=e,r=d[t];return(0,u.jsx)(o,{...n,icon:r})},argTypes:{size:{description:`Typography scale`,control:{type:`inline-radio`},options:[...f]},inline:{description:`Inline (link style) vs accent (standalone)`,control:`boolean`},disabled:{control:`boolean`},leadingIcon:{control:`boolean`},label:{control:`text`},href:{control:`text`},icon:{control:{type:`select`},options:Object.keys(d)},component:{control:{disable:!0}}}},h=[{inline:!1,disabled:!1,leadingIcon:!1},{inline:!1,disabled:!1,leadingIcon:!0},{inline:!1,disabled:!0,leadingIcon:!1},{inline:!0,disabled:!1,leadingIcon:!1},{inline:!0,disabled:!0,leadingIcon:!1}],g={sm:`typography-label`,md:`typography-body-small`,lg:`typography-body`},_={parameters:{controls:{disable:!0}},render:e=>{let t=[...f].toReversed();return(0,u.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${t.length}, minmax(0, 1fr))`},children:h.map((r,i)=>t.map((t,a)=>{let c=`${t}-${r.inline?`inline`:`accent`}-${r.disabled?`disabled`:`enabled`}-${r.leadingIcon?`leading`:`trailing`}`;return(0,u.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${i+1} / span 1`},children:[e.showLabels&&(0,u.jsxs)(`p`,{className:`${g[t]} text-text`,children:[`size=`,t,`, `,r.inline?`inline`:`accent`,r.disabled?`, disabled`:`, enabled`,r.leadingIcon?`, leading icon`:`, trailing icon`]}),r.inline?(0,u.jsxs)(`p`,{className:`${g[t]} text-text`,children:[`Before`,` `,(0,u.jsx)(o,{href:`#`,label:`link`,size:t,inline:!0,disabled:r.disabled,icon:n,leadingIcon:r.leadingIcon}),` `,`after.`]}):(0,u.jsx)(o,{href:`#`,label:`Link`,size:t,inline:!1,disabled:r.disabled,icon:s,leadingIcon:r.leadingIcon})]},c)}))})},args:{showLabels:!1}},v={render:()=>(0,u.jsx)(r,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Overview`,`Skeleton`]}))();export{_ as Overview,m as Playground,v as Skeleton,y as __namedExportsOrder,p as default};