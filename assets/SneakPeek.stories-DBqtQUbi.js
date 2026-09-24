import{n as e}from"./chunk-jRWAZmH_.js";import{Fo as t,bs as n,hi as r,i,mi as a,pi as o}from"./iframe-DdJMnWtf.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{i(),s(),l=n(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m=`/arcade-docs/assets/image-sample.png`,h={title:`Overlays & Menus/SneakPeek`,component:a,tags:[`autodocs`],argTypes:{placement:{control:`inline-radio`,options:r},followCursor:{control:`boolean`},open:{control:`boolean`}},parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5643-40475&m=dev`),docs:{description:{component:`Card that peeks at what sits behind a trigger - image, title, short text, optional footer - on hover or focus. A Tooltip with room for a picture; the card drifts lightly with the pointer.`}}},decorators:[e=>(0,l.jsx)(`div`,{className:`pt-lg flex h-[560px] items-start justify-center`,children:(0,l.jsx)(e,{})})]},g=`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,_=async()=>{let e=await p(document.body).findByTestId(`sneak-peek`);await f(()=>u(getComputedStyle(e).opacity).toBe(`1`))},v={play:_,args:{title:`Title`,subtitle:`Subtitle`,description:g,image:(0,l.jsx)(`img`,{src:m,alt:``}),placement:`bottom-start`,open:!0,children:(0,l.jsx)(o,{href:`#`,label:`Hover me`})}},y={play:_,args:{title:`Brand`,subtitle:`The main color that represents your business`,description:`Your brand color is the color people associate with your business. Usually it's the main color from your logo or website.`,open:!0,children:(0,l.jsx)(o,{href:`#`,label:`Brand`})}},b={play:_,args:{title:`Jonas Bergmann`,subtitle:`Coach, Studio Mitte`,description:`Teaches HIIT and mobility classes on weekday evenings.`,image:(0,l.jsx)(`img`,{src:m,alt:``}),open:!0,footer:(0,l.jsxs)(`div`,{className:`gap-sm flex`,children:[(0,l.jsx)(t,{size:`small`,kind:`secondary`,label:`Message`}),(0,l.jsx)(t,{size:`small`,kind:`primary`,label:`Open profile`})]}),children:(0,l.jsx)(o,{href:`#`,label:`Jonas Bergmann`})}},x={parameters:{controls:{disable:!0},docs:{description:{story:`Uncontrolled: the pointer resting on the trigger opens the peek after a short delay, leaving trigger and card closes it, so does Escape. Keyboard focus on the trigger opens it as well.`}}},args:{title:`Title`,subtitle:`Subtitle`,description:g,image:(0,l.jsx)(`img`,{src:m,alt:``}),openDelayMs:0,closeDelayMs:0,children:(0,l.jsx)(o,{href:`#`,label:`Hover me`})},play:async({canvasElement:e})=>{let t=p(e),n=p(document.body),r=t.getByRole(`link`,{name:`Hover me`});await d.hover(r);let i=await n.findByTestId(`sneak-peek`);await u(i).toHaveTextContent(`Title`),await f(()=>u(getComputedStyle(i).opacity).toBe(`1`)),await d.keyboard(`{Escape}`),await f(()=>u(n.queryByTestId(`sneak-peek`)).toBeNull()),await d.unhover(r),r.focus(),await n.findByTestId(`sneak-peek`),r.blur(),await f(()=>u(n.queryByTestId(`sneak-peek`)).toBeNull())}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: settled,
  args: {
    title: "Title",
    subtitle: "Subtitle",
    description: lorem,
    image: <img src={sampleImage} alt="" />,
    placement: "bottom-start",
    open: true,
    children: <Link href="#" label="Hover me" />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: settled,
  args: {
    title: "Brand",
    subtitle: "The main color that represents your business",
    description: "Your brand color is the color people associate with your business. Usually it's the main color from your logo or website.",
    open: true,
    children: <Link href="#" label="Brand" />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  play: settled,
  args: {
    title: "Jonas Bergmann",
    subtitle: "Coach, Studio Mitte",
    description: "Teaches HIIT and mobility classes on weekday evenings.",
    image: <img src={sampleImage} alt="" />,
    open: true,
    footer: <div className="gap-sm flex">
        <Button size="small" kind="secondary" label="Message" />
        <Button size="small" kind="primary" label="Open profile" />
      </div>,
    children: <Link href="#" label="Jonas Bergmann" />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "Uncontrolled: the pointer resting on the trigger opens the peek after a short delay, leaving trigger and card closes it, so does Escape. Keyboard focus on the trigger opens it as well."
      }
    }
  },
  args: {
    title: "Title",
    subtitle: "Subtitle",
    description: lorem,
    image: <img src={sampleImage} alt="" />,
    openDelayMs: 0,
    closeDelayMs: 0,
    children: <Link href="#" label="Hover me" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const trigger = canvas.getByRole("link", {
      name: "Hover me"
    });
    await userEvent.hover(trigger);
    const peek = await body.findByTestId("sneak-peek");
    await expect(peek).toHaveTextContent("Title");
    await waitFor(() => expect(getComputedStyle(peek).opacity).toBe("1"));
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(body.queryByTestId("sneak-peek")).toBeNull());
    await userEvent.unhover(trigger);
    trigger.focus();
    await body.findByTestId("sneak-peek");
    trigger.blur();
    await waitFor(() => expect(body.queryByTestId("sneak-peek")).toBeNull());
  }
}`,...x.parameters?.docs?.source}}},S=[`Playground`,`WithoutImage`,`WithFooter`,`OpensOnHoverAndFocus`]}))();export{x as OpensOnHoverAndFocus,v as Playground,b as WithFooter,y as WithoutImage,S as __namedExportsOrder,h as default};