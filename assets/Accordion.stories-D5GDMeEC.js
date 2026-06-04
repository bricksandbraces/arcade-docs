import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{G as n,K as r,W as i,io as a,t as o,xr as s,yo as c}from"./iframe-Qk2RwyEM.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{o(),l=t(c(),1),u=a(),d={title:`Layout & Structure/Accordion/Accordion`,component:r,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Collapsible sections stacked vertically. Use for grouping optional detail (FAQs, settings panels) without crowding the layout.`}}}},f=`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,p={render:()=>(0,u.jsxs)(r,{className:`w-[512px] max-w-full`,children:[(0,u.jsx)(i,{title:`What is the Arcade Design System?`,defaultOpen:!0,children:f}),(0,u.jsx)(i,{title:`How do I install it?`,children:f}),(0,u.jsx)(i,{title:`Can I customize the tokens?`,children:f})]})},m={render:()=>(0,u.jsx)(`div`,{className:`gap-xlg flex w-[512px] max-w-full flex-col`,children:n.map(e=>(0,u.jsxs)(r,{children:[(0,u.jsx)(i,{title:`Size: ${e}`,size:e,defaultOpen:!0,children:f}),(0,u.jsx)(i,{title:`Collapsed (${e})`,size:e,children:f})]},e))})},h={render:()=>(0,u.jsxs)(r,{className:`w-[512px] max-w-full`,children:[(0,u.jsx)(i,{title:`Enabled item`,defaultOpen:!0,children:f}),(0,u.jsx)(i,{title:`Disabled item`,disabled:!0,children:f}),(0,u.jsx)(i,{title:`Another enabled item`,children:f})]})},g={render:()=>(0,u.jsxs)(r,{className:`w-[512px] max-w-full`,withDivider:!0,children:[(0,u.jsx)(i,{title:`What is the Arcade Design System?`,defaultOpen:!0,children:f}),(0,u.jsx)(i,{title:`How do I install it?`,children:f}),(0,u.jsx)(i,{title:`Can I customize the tokens?`,children:f})]})},_=()=>{let e=[{id:`one`,title:`First section`},{id:`two`,title:`Second section`},{id:`three`,title:`Third section`}],[t,n]=(0,l.useState)(`one`);return(0,u.jsx)(r,{className:`w-[512px] max-w-full`,children:e.map(e=>(0,u.jsx)(i,{title:e.title,open:t===e.id,onOpenChange:t=>n(t?e.id:null),children:f},e.id))})},v={name:`Single open (controlled)`,render:()=>(0,u.jsx)(_,{})},y={name:`Push-down animation`,render:()=>(0,u.jsxs)(r,{className:`w-[512px] max-w-full`,children:[(0,u.jsx)(i,{title:`Section 1 — expand me`,children:f}),(0,u.jsx)(i,{title:`Section 2 — expand me`,children:f}),(0,u.jsx)(i,{title:`Section 3 — expand me`,children:f}),(0,u.jsx)(i,{title:`Section 4 — expand me`,children:f})]}),parameters:{docs:{description:{story:`Opening an item animates its height from 0 to auto via framer-motion, pushing subsequent items down. Closing animates back to 0 and the siblings slide up.`}}}},b={render:()=>(0,u.jsx)(s,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="What is the Arcade Design System?" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="How do I install it?">{body}</AccordionItem>
      <AccordionItem title="Can I customize the tokens?">{body}</AccordionItem>
    </Accordion>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="Enabled item" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="Disabled item" disabled>
        {body}
      </AccordionItem>
      <AccordionItem title="Another enabled item">{body}</AccordionItem>
    </Accordion>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full" withDivider>
      <AccordionItem title="What is the Arcade Design System?" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="How do I install it?">{body}</AccordionItem>
      <AccordionItem title="Can I customize the tokens?">{body}</AccordionItem>
    </Accordion>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Single open (controlled)",
  render: () => <SingleOpenDemo />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <AccordionSkeleton />
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Sizes`,`WithDisabledItem`,`WithDivider`,`SingleOpen`,`AnimatedPushDown`,`Skeleton`]}))();export{y as AnimatedPushDown,p as Playground,v as SingleOpen,m as Sizes,b as Skeleton,h as WithDisabledItem,g as WithDivider,x as __namedExportsOrder,d as default};