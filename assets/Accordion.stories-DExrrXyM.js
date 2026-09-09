import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{J as n,Mo as r,Rr as i,X as a,Y as o,qo as s,t as c}from"./iframe-DTfjFPcB.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{c(),d=t(s(),1),l(),f=r(),p={title:`Layout & Structure/Accordion/Accordion`,component:a,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2221-504`),layout:`padded`,docs:{description:{component:`Collapsible sections stacked vertically. Use for grouping optional detail (FAQs, settings panels) without crowding the layout.`}}}},m=`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,h={render:()=>(0,f.jsxs)(a,{className:`w-[512px] max-w-full`,children:[(0,f.jsx)(n,{title:`What is the Arcade Design System?`,defaultOpen:!0,children:m}),(0,f.jsx)(n,{title:`How do I install it?`,children:m}),(0,f.jsx)(n,{title:`Can I customize the tokens?`,children:m})]})},g={render:()=>(0,f.jsx)(`div`,{className:`gap-xlg flex w-[512px] max-w-full flex-col`,children:o.map(e=>(0,f.jsxs)(a,{children:[(0,f.jsx)(n,{title:`Size: ${e}`,size:e,defaultOpen:!0,children:m}),(0,f.jsx)(n,{title:`Collapsed (${e})`,size:e,children:m})]},e))})},_={render:()=>(0,f.jsxs)(a,{className:`w-[512px] max-w-full`,children:[(0,f.jsx)(n,{title:`Enabled item`,defaultOpen:!0,children:m}),(0,f.jsx)(n,{title:`Disabled item`,disabled:!0,children:m}),(0,f.jsx)(n,{title:`Another enabled item`,children:m})]})},v={render:()=>(0,f.jsxs)(a,{className:`w-[512px] max-w-full`,withDivider:!0,children:[(0,f.jsx)(n,{title:`What is the Arcade Design System?`,defaultOpen:!0,children:m}),(0,f.jsx)(n,{title:`How do I install it?`,children:m}),(0,f.jsx)(n,{title:`Can I customize the tokens?`,children:m})]})},y=()=>{let e=[{id:`one`,title:`First section`},{id:`two`,title:`Second section`},{id:`three`,title:`Third section`}],[t,r]=(0,d.useState)(`one`);return(0,f.jsx)(a,{className:`w-[512px] max-w-full`,children:e.map(e=>(0,f.jsx)(n,{title:e.title,open:t===e.id,onOpenChange:t=>r(t?e.id:null),children:m},e.id))})},b={name:`Single open (controlled)`,render:()=>(0,f.jsx)(y,{})},x={name:`Push-down animation`,render:()=>(0,f.jsxs)(a,{className:`w-[512px] max-w-full`,children:[(0,f.jsx)(n,{title:`Section 1 - expand me`,children:m}),(0,f.jsx)(n,{title:`Section 2 - expand me`,children:m}),(0,f.jsx)(n,{title:`Section 3 - expand me`,children:m}),(0,f.jsx)(n,{title:`Section 4 - expand me`,children:m})]}),parameters:{docs:{description:{story:`Opening an item animates its height from 0 to auto via framer-motion, pushing subsequent items down. Closing animates back to 0 and the siblings slide up.`}}}},S={render:()=>(0,f.jsx)(i,{})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="What is the Arcade Design System?" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="How do I install it?">{body}</AccordionItem>
      <AccordionItem title="Can I customize the tokens?">{body}</AccordionItem>
    </Accordion>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-xlg flex w-[512px] max-w-full flex-col">
      {AccordionItemSizes.map(size => <Accordion key={size}>
          <AccordionItem title={\`Size: \${size}\`} size={size} defaultOpen>
            {body}
          </AccordionItem>
          <AccordionItem title={\`Collapsed (\${size})\`} size={size}>
            {body}
          </AccordionItem>
        </Accordion>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="Enabled item" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="Disabled item" disabled>
        {body}
      </AccordionItem>
      <AccordionItem title="Another enabled item">{body}</AccordionItem>
    </Accordion>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full" withDivider>
      <AccordionItem title="What is the Arcade Design System?" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="How do I install it?">{body}</AccordionItem>
      <AccordionItem title="Can I customize the tokens?">{body}</AccordionItem>
    </Accordion>
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Single open (controlled)",
  render: () => <SingleOpenDemo />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Push-down animation",
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="Section 1 - expand me">{body}</AccordionItem>
      <AccordionItem title="Section 2 - expand me">{body}</AccordionItem>
      <AccordionItem title="Section 3 - expand me">{body}</AccordionItem>
      <AccordionItem title="Section 4 - expand me">{body}</AccordionItem>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "Opening an item animates its height from 0 to auto via framer-motion, pushing subsequent items down. Closing animates back to 0 and the siblings slide up."
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <AccordionSkeleton />
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Sizes`,`WithDisabledItem`,`WithDivider`,`SingleOpen`,`AnimatedPushDown`,`Skeleton`]}))();export{x as AnimatedPushDown,h as Playground,b as SingleOpen,g as Sizes,S as Skeleton,_ as WithDisabledItem,v as WithDivider,C as __namedExportsOrder,p as default};