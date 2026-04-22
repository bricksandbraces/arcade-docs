import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as i,a as n,b as N}from"./ContextMenu-DwPyJibk.js";import{r as C}from"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const H={title:"Fabian Supervision/Accordion/Accordion",component:i,parameters:{layout:"padded"}},t="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",s={render:()=>e.jsxs(i,{className:"w-[512px] max-w-full",children:[e.jsx(n,{title:"What is the Arcade Design System?",defaultOpen:!0,children:t}),e.jsx(n,{title:"How do I install it?",children:t}),e.jsx(n,{title:"Can I customize the tokens?",children:t})]})},a={render:()=>e.jsx("div",{className:"gap-xlg flex w-[512px] max-w-full flex-col",children:N.map(o=>e.jsxs(i,{children:[e.jsx(n,{title:`Size: ${o}`,size:o,defaultOpen:!0,children:t}),e.jsx(n,{title:`Collapsed (${o})`,size:o,children:t})]},o))})},c={render:()=>e.jsxs(i,{className:"w-[512px] max-w-full",children:[e.jsx(n,{title:"Enabled item",defaultOpen:!0,children:t}),e.jsx(n,{title:"Disabled item",disabled:!0,children:t}),e.jsx(n,{title:"Another enabled item",children:t})]})},P=()=>{const o=[{id:"one",title:"First section"},{id:"two",title:"Second section"},{id:"three",title:"Third section"}],[z,D]=C.useState("one");return e.jsx(i,{className:"w-[512px] max-w-full",children:o.map(r=>e.jsx(n,{title:r.title,open:z===r.id,onOpenChange:v=>D(v?r.id:null),children:t},r.id))})},d={name:"Single open (controlled)",render:()=>e.jsx(P,{})},l={name:"Push-down animation",render:()=>e.jsxs(i,{className:"w-[512px] max-w-full",children:[e.jsx(n,{title:"Section 1 — expand me",children:t}),e.jsx(n,{title:"Section 2 — expand me",children:t}),e.jsx(n,{title:"Section 3 — expand me",children:t}),e.jsx(n,{title:"Section 4 — expand me",children:t})]}),parameters:{docs:{description:{story:"Opening an item animates its height from 0 to auto via framer-motion, pushing subsequent items down. Closing animates back to 0 and the siblings slide up."}}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="What is the Arcade Design System?" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="How do I install it?">{body}</AccordionItem>
      <AccordionItem title="Can I customize the tokens?">{body}</AccordionItem>
    </Accordion>
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,A,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(A=a.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var I,b,g;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Accordion className="w-[512px] max-w-full">
      <AccordionItem title="Enabled item" defaultOpen>
        {body}
      </AccordionItem>
      <AccordionItem title="Disabled item" disabled>
        {body}
      </AccordionItem>
      <AccordionItem title="Another enabled item">{body}</AccordionItem>
    </Accordion>
}`,...(g=(b=c.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,f,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Single open (controlled)",
  render: () => <SingleOpenDemo />
}`,...(w=(f=d.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var j,y,O;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(O=(y=l.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};const _=["Playground","Sizes","WithDisabledItem","SingleOpen","AnimatedPushDown"];export{l as AnimatedPushDown,s as Playground,d as SingleOpen,a as Sizes,c as WithDisabledItem,_ as __namedExportsOrder,H as default};
