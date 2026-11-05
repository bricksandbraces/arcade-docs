import{n as e}from"./chunk-jRWAZmH_.js";import{Do as t,Hr as n,Pa as r,Qs as i,as as a,is as o,ro as s,t as c,yi as l}from"./iframe-CFcow8pV.js";import{n as u,t as d}from"./figmaDesign-DDiUnvXT.js";import{n as f,t as p}from"./figmaFrame-DGN8lLs1.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{c(),r(),u(),f(),m=i(),h={none:void 0,IconArrowRight:o,IconArrowLeft:a,IconExternalLink:t,Icon123:s},g=[`sm`,`md`,`lg`],_=[`text`,`link`],v=[`text-accent`,`text`,`text-link`],y={title:`Navigation/Link`,component:l,tags:[`autodocs`],args:{href:`#`,label:`Link`,disabled:!1,underline:!1,weight:`text`,color:`text-accent`,size:`md`,leadingIcon:!1,icon:`IconArrowRight`},parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2130-35884`),docs:{description:{component:`Anchor styled as a text link, with optional leading or trailing icon. Use for in-page navigation and external references.`}}}},b={render:e=>{let{icon:t,...n}=e,r=h[t];return(0,m.jsx)(l,{...n,icon:r})},argTypes:{size:{description:`Typography scale`,control:{type:`inline-radio`},options:[...g]},underline:{description:`Underlined at rest and cleared on hover; otherwise underlined on hover only`,control:`boolean`},weight:{description:`Weight of label, underline and icon strokes`,control:{type:`inline-radio`},options:[..._]},color:{description:`Resting text color`,control:{type:`inline-radio`},options:[...v]},inline:{control:{disable:!0}},disabled:{control:`boolean`},leadingIcon:{control:`boolean`},label:{control:`text`},href:{control:`text`},icon:{control:{type:`select`},options:Object.keys(h)},component:{control:{disable:!0}},linkComponent:{control:{disable:!0}}}},x={sm:`typography-label`,md:`typography-body-small`,lg:`typography-body`},S=[!1,!0],C={parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(`div`,{className:`gap-xlg flex flex-col`,children:v.map(e=>_.map(t=>(0,m.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,m.jsxs)(`p`,{className:`typography-label text-text-accent`,children:[`color=`,e,`, weight=`,t]}),S.map(n=>(0,m.jsxs)(`div`,{className:`gap-xlg grid grid-cols-4 items-center`,children:[[...g].toReversed().map(r=>(0,m.jsx)(l,{href:`#`,label:`Link`,size:r,color:e,weight:t,underline:n,icon:o},r)),(0,m.jsx)(l,{href:`#`,label:`Link`,color:e,weight:t,underline:n,icon:o,disabled:!0})]},String(n)))]},`${e}-${t}`)))})},w={parameters:{controls:{disable:!0}},render:()=>(0,m.jsx)(`div`,{className:`gap-md flex flex-col`,children:[...g].toReversed().map(e=>(0,m.jsxs)(`p`,{className:`${x[e]} text-text`,children:[`Before`,` `,(0,m.jsx)(l,{href:`#`,label:`link`,size:e,underline:!0,weight:`link`,color:`text-link`,icon:t}),` `,`after.`]},e))})},T={sm:{accent:{node:`2130:35851`,width:38,height:14},inline:{node:`2130:35863`,width:38,height:14}},md:{accent:{node:`2130:35882`,width:50,height:19},inline:{node:`2130:35857`,width:46,height:19}},lg:{accent:{node:`2130:35852`,width:53,height:22},inline:{node:`2130:35862`,width:49,height:22}}},E={parameters:{controls:{include:[`size`,`underline`]}},args:{size:`sm`,underline:!1},render:({size:e=`md`,underline:t=!1})=>{let n=T[e][t?`inline`:`accent`];return(0,m.jsx)(p,{node:n.node,width:n.width,height:n.height,className:`flex items-start`,children:(0,m.jsx)(l,{href:`#`,label:`Link`,size:e,underline:t,weight:t?`link`:`text`,color:t?`text-link`:`text-accent`,visited:!1,icon:o})})}},D={render:()=>(0,m.jsx)(n,{})},O=({href:e,children:t,...n})=>(0,m.jsx)(`a`,{...n,href:e,"data-next-link":`true`,children:t}),k={parameters:{controls:{disable:!0},docs:{description:{story:"Plug in `next/link`'s `Link` (or any equivalent) via `linkComponent` so consumers preserve SPA navigation. The rendered anchor below carries a `data-next-link` attribute set by the mock component to make the substitution visible."}}},render:()=>(0,m.jsx)(l,{href:`/dashboard`,label:`Open dashboard`,linkComponent:O})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    underline: {
      description: "Underlined at rest and cleared on hover; otherwise underlined on hover only",
      control: "boolean"
    },
    weight: {
      description: "Weight of label, underline and icon strokes",
      control: {
        type: "inline-radio"
      },
      options: [...LinkStoryWeights]
    },
    color: {
      description: "Resting text color",
      control: {
        type: "inline-radio"
      },
      options: [...LinkStoryColors]
    },
    inline: {
      control: {
        disable: true
      }
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
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-xlg flex flex-col">
      {LinkStoryColors.map(color => LinkStoryWeights.map(weight => <div key={\`\${color}-\${weight}\`} className="gap-md flex flex-col">
            <p className="typography-label text-text-accent">
              color={color}, weight={weight}
            </p>
            {overviewUnderlines.map(underline => <div key={String(underline)} className="gap-xlg grid grid-cols-4 items-center">
                {[...LinkStorySizes].toReversed().map(size => <Link key={size} href="#" label="Link" size={size} color={color} weight={weight} underline={underline} icon={IconArrowRight} />)}
                <Link href="#" label="Link" color={color} weight={weight} underline={underline} icon={IconArrowRight} disabled />
              </div>)}
          </div>))}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-md flex flex-col">
      {[...LinkStorySizes].toReversed().map(size => <p key={size} className={\`\${overviewTypographyByLinkSize[size]} text-text\`}>
          Before{" "}
          <Link href="#" label="link" size={size} underline weight="link" color="text-link" icon={IconExternalLink} />{" "}
          after.
        </p>)}
    </div>
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["size", "underline"]
    }
  },
  args: {
    size: "sm",
    underline: false
  },
  render: ({
    size = "md",
    underline = false
  }) => {
    const spec = FIGMA_SPEC_NODES[size][underline ? "inline" : "accent"];
    return <FigmaFrame node={spec.node} width={spec.width} height={spec.height} className="flex items-start">
        <Link href="#" label="Link" size={size} underline={underline} weight={underline ? "link" : "text"} color={underline ? "text-link" : "text-accent"} visited={false} icon={IconArrowRight} />
      </FigmaFrame>;
  }
}`,...E.parameters?.docs?.source},description:{story:"1:1 with the Figma variants (enabled state) for `storybook:figma-diff`.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <LinkSkeleton />
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:'Use the `linkComponent` prop to plug in `next/link`\'s `Link`, `react-router`\'s\n`Link`, or any equivalent client-side router primitive. The element receives\n`href` and renders an anchor - Arcade keeps its styling, the consumer keeps\nSPA navigation.\n\n```tsx\nimport NextLink from "next/link";\n<Link href="/dashboard" label="Dashboard" linkComponent={NextLink} />\n```',...k.parameters?.docs?.description}}},A=[`Playground`,`Overview`,`InText`,`FigmaSpec`,`Skeleton`,`WithNextLink`]}))();export{E as FigmaSpec,w as InText,C as Overview,b as Playground,D as Skeleton,k as WithNextLink,A as __namedExportsOrder,y as default};