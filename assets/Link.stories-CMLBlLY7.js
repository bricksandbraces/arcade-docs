import{n as e}from"./chunk-jRWAZmH_.js";import{Lo as t,Os as n,Ra as r,Ro as i,_a as a,gi as o,so as s,t as c,zr as l}from"./iframe-jImnWlHt.js";import{n as u,t as d}from"./figmaDesign-DDiUnvXT.js";import{n as f,t as p}from"./figmaFrame-DV8WZAX4.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{c(),a(),u(),f(),m=n(),h={none:void 0,IconArrowRight:t,IconArrowLeft:i,IconExternalLink:s,Icon123:r},g=[`sm`,`md`,`lg`],_={title:`Navigation/Link`,component:o,tags:[`autodocs`],args:{href:`#`,label:`Link`,disabled:!1,inline:!1,size:`md`,leadingIcon:!1,icon:`IconArrowRight`},parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2130-35884`),docs:{description:{component:`Anchor styled as a text link, with optional leading or trailing icon. Use for in-page navigation and external references.`}}}},v={render:e=>{let{icon:t,...n}=e,r=h[t];return(0,m.jsx)(o,{...n,icon:r})},argTypes:{size:{description:`Typography scale`,control:{type:`inline-radio`},options:[...g]},inline:{description:`Inline (link style) vs accent (standalone)`,control:`boolean`},disabled:{control:`boolean`},leadingIcon:{control:`boolean`},label:{control:`text`},href:{control:`text`},icon:{control:{type:`select`},options:Object.keys(h)},component:{control:{disable:!0}},linkComponent:{control:{disable:!0}}}},y=[{inline:!1,disabled:!1,leadingIcon:!1},{inline:!1,disabled:!1,leadingIcon:!0},{inline:!1,disabled:!0,leadingIcon:!1},{inline:!0,disabled:!1,leadingIcon:!1},{inline:!0,disabled:!0,leadingIcon:!1}],b={sm:`typography-label`,md:`typography-body-small`,lg:`typography-body`},x={parameters:{controls:{disable:!0}},render:e=>{let n=[...g].toReversed();return(0,m.jsx)(`div`,{className:`gap-xlg grid`,style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, minmax(0, 1fr))`},children:y.map((r,i)=>n.map((n,a)=>{let c=`${n}-${r.inline?`inline`:`accent`}-${r.disabled?`disabled`:`enabled`}-${r.leadingIcon?`leading`:`trailing`}`;return(0,m.jsxs)(`div`,{style:{gridColumn:`${a+1} / span 1`,gridRow:`${i+1} / span 1`},children:[e.showLabels&&(0,m.jsxs)(`p`,{className:`${b[n]} text-text`,children:[`size=`,n,`, `,r.inline?`inline`:`accent`,r.disabled?`, disabled`:`, enabled`,r.leadingIcon?`, leading icon`:`, trailing icon`]}),r.inline?(0,m.jsxs)(`p`,{className:`${b[n]} text-text`,children:[`Before`,` `,(0,m.jsx)(o,{href:`#`,label:`link`,size:n,inline:!0,disabled:r.disabled,icon:s,leadingIcon:r.leadingIcon}),` `,`after.`]}):(0,m.jsx)(o,{href:`#`,label:`Link`,size:n,inline:!1,disabled:r.disabled,icon:t,leadingIcon:r.leadingIcon})]},c)}))})},args:{showLabels:!1}},S={sm:{accent:{node:`2130:35851`,width:38,height:14},inline:{node:`2130:35863`,width:38,height:14}},md:{accent:{node:`2130:35882`,width:50,height:19},inline:{node:`2130:35857`,width:46,height:19}},lg:{accent:{node:`2130:35852`,width:53,height:22},inline:{node:`2130:35862`,width:49,height:22}}},C={parameters:{controls:{include:[`size`,`inline`]}},args:{size:`sm`,inline:!1},render:({size:e=`md`,inline:n=!1})=>{let r=S[e][n?`inline`:`accent`];return(0,m.jsx)(p,{node:r.node,width:r.width,height:r.height,className:`flex items-start`,children:(0,m.jsx)(o,{href:`#`,label:`Link`,size:e,inline:n,visited:!1,icon:t})})}},w={render:()=>(0,m.jsx)(l,{})},T=({href:e,children:t,...n})=>(0,m.jsx)(`a`,{...n,href:e,"data-next-link":`true`,children:t}),E={parameters:{controls:{disable:!0},docs:{description:{story:"Plug in `next/link`'s `Link` (or any equivalent) via `linkComponent` so consumers preserve SPA navigation. The rendered anchor below carries a `data-next-link` attribute set by the mock component to make the substitution visible."}}},render:()=>(0,m.jsx)(o,{href:`/dashboard`,label:`Open dashboard`,linkComponent:T})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["size", "inline"]
    }
  },
  args: {
    size: "sm",
    inline: false
  },
  render: ({
    size = "md",
    inline = false
  }) => {
    const spec = FIGMA_SPEC_NODES[size][inline ? "inline" : "accent"];
    return <FigmaFrame node={spec.node} width={spec.width} height={spec.height} className="flex items-start">
        <Link href="#" label="Link" size={size} inline={inline} visited={false} icon={IconArrowRight} />
      </FigmaFrame>;
  }
}`,...C.parameters?.docs?.source},description:{story:"1:1 with the Figma variants (enabled state) for `storybook:figma-diff`.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <LinkSkeleton />
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:'Use the `linkComponent` prop to plug in `next/link`\'s `Link`, `react-router`\'s\n`Link`, or any equivalent client-side router primitive. The element receives\n`href` and renders an anchor - Arcade keeps its styling, the consumer keeps\nSPA navigation.\n\n```tsx\nimport NextLink from "next/link";\n<Link href="/dashboard" label="Dashboard" linkComponent={NextLink} />\n```',...E.parameters?.docs?.description}}},D=[`Playground`,`Overview`,`FigmaSpec`,`Skeleton`,`WithNextLink`]}))();export{C as FigmaSpec,x as Overview,v as Playground,w as Skeleton,E as WithNextLink,D as __namedExportsOrder,_ as default};