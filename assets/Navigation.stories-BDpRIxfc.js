import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,Hi as r,J as i,K as a,Tr as o,Zn as s,fi as c,gr as l,ir as u,jr as d,q as f,qn as p,t as m}from"./iframe-Dxxi8T6d.js";var h,g,_,v,y,b,x,S,C;e((()=>{m(),p(),h=t(c(),1),g=t(r(),1),_=n(),v={title:`Fabian Supervision/Navigation/Navigation`,component:f,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Collapsible side navigation with nested items. Use as the primary app chrome for switching between top-level sections.`}}}},y=[{id:`dashboard`,label:`Dashboard`,icon:o},{id:`projects`,label:`Projects`,icon:l,children:[{id:`projects-all`,label:`All projects`},{id:`projects-archived`,label:`Archived`},{id:`projects-templates`,label:`Templates`,disabled:!0}]},{id:`team`,label:`Team`,icon:s},{id:`reports`,label:`Reports`,icon:d},{id:`settings`,label:`Settings`,icon:u}],b=({logo:e})=>{let[t,n]=g.useState(!0),[r,a]=g.useState(`dashboard`),[o,s]=g.useState(`projects`);return(0,_.jsxs)(`div`,{className:(0,h.default)(`bg-background-accent`,`flex`,`min-h-screen`),children:[(0,_.jsx)(f,{expanded:t,onExpandedChange:n,logo:e(t),children:y.map(e=>{let n=!!e.children&&t,c=o===e.id,l=r===e.id;return(0,_.jsx)(i,{title:t?e.label:void 0,size:t?`default`:`small`,icon:e.icon,tooltip:t?void 0:e.label,selected:l&&!c,expandable:n,expanded:c,onExpandedChange:t=>s(t?e.id:null),onClick:()=>{e.children||a(e.id)},children:e.children?.map(e=>(0,_.jsx)(i,{title:e.label,level:2,disabled:e.disabled,selected:r===e.id,onClick:()=>{e.disabled||a(e.id)}},e.id))},e.id)})}),(0,_.jsx)(`div`,{className:(0,h.default)(`p-lg`,`typography-body-small`,`text-text`,`flex-1`)})]})},x={render:()=>(0,_.jsx)(b,{logo:e=>(0,_.jsx)(a,{compact:!e})})},S={parameters:{docs:{description:{story:"Wraps a real consumer logo in `NavigationLogo`. The dashed-border placeholder styling is reserved for the empty/sample case and must not appear here."}}},render:()=>(0,_.jsx)(b,{logo:e=>(0,_.jsx)(a,{compact:!e,children:e?(0,_.jsxs)(`span`,{className:`gap-sm flex items-center`,children:[(0,_.jsx)(`span`,{className:`bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md`,children:`A`}),(0,_.jsx)(`span`,{className:`typography-headline-06 text-text font-semibold`,children:`Acme Inc.`})]}):(0,_.jsx)(`span`,{className:`bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md`,children:`A`})})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <NavigationDemo logo={expanded => <NavigationLogo compact={!expanded} />} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Wraps a real consumer logo in \`NavigationLogo\`. The dashed-border placeholder styling is reserved for the empty/sample case and must not appear here."
      }
    }
  },
  render: () => <NavigationDemo logo={expanded => <NavigationLogo compact={!expanded}>
          {expanded ? <span className="gap-sm flex items-center">
              <span className="bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md">
                A
              </span>
              <span className="typography-headline-06 text-text font-semibold">
                Acme Inc.
              </span>
            </span> : <span className="bg-background-onlight text-text-ondark typography-label flex h-6 w-6 items-center justify-center rounded-md">
              A
            </span>}
        </NavigationLogo>} />
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`WithCustomLogo`]}))();export{x as Playground,S as WithCustomLogo,C as __namedExportsOrder,v as default};