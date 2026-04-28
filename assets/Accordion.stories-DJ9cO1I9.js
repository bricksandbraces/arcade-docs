import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Di as n,G as r,Hi as i,U as a,W as o,t as s}from"./iframe-DWMpUj-P.js";var c,l,u,d,f,p,m,h,g,_,v;e((()=>{s(),c=t(i(),1),l=n(),u={title:`Fabian Supervision/Accordion/Accordion`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Collapsible sections stacked vertically. Use for grouping optional detail (FAQs, settings panels) without crowding the layout.`}}}},d=`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,f={render:()=>(0,l.jsxs)(r,{className:`w-[512px] max-w-full`,children:[(0,l.jsx)(a,{title:`What is the Arcade Design System?`,defaultOpen:!0,children:d}),(0,l.jsx)(a,{title:`How do I install it?`,children:d}),(0,l.jsx)(a,{title:`Can I customize the tokens?`,children:d})]})},p={render:()=>(0,l.jsx)(`div`,{className:`gap-xlg flex w-[512px] max-w-full flex-col`,children:o.map(e=>(0,l.jsxs)(r,{children:[(0,l.jsx)(a,{title:`Size: ${e}`,size:e,defaultOpen:!0,children:d}),(0,l.jsx)(a,{title:`Collapsed (${e})`,size:e,children:d})]},e))})},m={render:()=>(0,l.jsxs)(r,{className:`w-[512px] max-w-full`,children:[(0,l.jsx)(a,{title:`Enabled item`,defaultOpen:!0,children:d}),(0,l.jsx)(a,{title:`Disabled item`,disabled:!0,children:d}),(0,l.jsx)(a,{title:`Another enabled item`,children:d})]})},h=()=>{let e=[{id:`one`,title:`First section`},{id:`two`,title:`Second section`},{id:`three`,title:`Third section`}],[t,n]=(0,c.useState)(`one`);return(0,l.jsx)(r,{className:`w-[512px] max-w-full`,children:e.map(e=>(0,l.jsx)(a,{title:e.title,open:t===e.id,onOpenChange:t=>n(t?e.id:null),children:d},e.id))})},g={name:`Single open (controlled)`,render:()=>(0,l.jsx)(h,{})},_={name:`Push-down animation`,render:()=>(0,l.jsxs)(r,{className:`w-[512px] max-w-full`,children:[(0,l.jsx)(a,{title:`Section 1 — expand me`,children:d}),(0,l.jsx)(a,{title:`Section 2 — expand me`,children:d}),(0,l.jsx)(a,{title:`Section 3 — expand me`,children:d}),(0,l.jsx)(a,{title:`Section 4 — expand me`,children:d})]}),parameters:{docs:{description:{story:`Opening an item animates its height from 0 to auto via framer-motion, pushing subsequent items down. Closing animates back to 0 and the siblings slide up.`}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="What is the Arcade Design System?" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="How do I install it?">{body}</AccordionItem>
      <AccordionItem title="Can I customize the tokens?">{body}</AccordionItem>
    </Accordion>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="Enabled item" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="Disabled item" disabled>
        {body}
      </AccordionItem>
      <AccordionItem title="Another enabled item">{body}</AccordionItem>
    </Accordion>
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Single open (controlled)",
  render: () => <SingleOpenDemo />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Push-down animation",
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="Section 1 — expand me">{body}</AccordionItem>
      <AccordionItem title="Section 2 — expand me">{body}</AccordionItem>
      <AccordionItem title="Section 3 — expand me">{body}</AccordionItem>
      <AccordionItem title="Section 4 — expand me">{body}</AccordionItem>
    </Accordion>,
  parameters: {
    docs: {
      description: {
        story: "Opening an item animates its height from 0 to auto via framer-motion, pushing subsequent items down. Closing animates back to 0 and the siblings slide up."
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Playground`,`Sizes`,`WithDisabledItem`,`SingleOpen`,`AnimatedPushDown`]}))();export{_ as AnimatedPushDown,f as Playground,g as SingleOpen,p as Sizes,m as WithDisabledItem,v as __namedExportsOrder,u as default};