import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bs as n,Ts as r,da as i,i as a,us as o}from"./iframe-C4c9DSjq.js";function s({rows:e}){let t=(0,c.useRef)(null),{top:n,bottom:r}=i(t,{deps:[e]});return(0,u.jsxs)(`div`,{className:`bg-background-card border-component border-border relative overflow-hidden rounded-lg border-solid`,style:{height:320,width:360},children:[(0,u.jsx)(`div`,{ref:t,tabIndex:0,"aria-label":`Activity`,className:`focus-visible:shadow-focus focus-visible:outline-none`,style:{height:`100%`,overflowY:`auto`},"data-testid":`scroll-fades-scroller`,children:(0,u.jsx)(`ul`,{className:`p-sm flex flex-col`,children:Array.from({length:e},(e,t)=>(0,u.jsxs)(`li`,{className:`typography-body text-text px-xlg py-lg rounded-md`,children:[`Event `,t+1]},t))})}),(0,u.jsx)(`div`,{className:(0,l.default)(p,`top-0 bg-gradient-to-b`,n?`opacity-100`:`opacity-0`),"data-testid":`scroll-fades-top`,"data-visible":n,"aria-hidden":!0}),(0,u.jsx)(`div`,{className:(0,l.default)(p,`bottom-0 bg-gradient-to-t`,r?`opacity-100`:`opacity-0`),"data-testid":`scroll-fades-bottom`,"data-visible":r,"aria-hidden":!0})]})}var c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{c=t(n(),1),a(),l=t(o(),1),u=r(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p=`from-background-card duration-xs ease-accelerate-sm h-container-2xs pointer-events-none absolute inset-x-0 to-transparent transition-opacity`,m={title:`Arcade Foundation/Scroll Fades`,component:s,parameters:{docs:{description:{component:"`useScrollFades(ref, { enabled, deps })` reports which vertical edges of a scroll container still hide content. Show a top or bottom fade only while its flag is true and let it cross-fade with `transition-opacity duration-xs ease-accelerate-sm` - the rule Modal, Sheet, SidePanel, Navigation, Dropdown and the menus share."}}},args:{rows:20}},h=(e,t)=>e.querySelector(`[data-testid="scroll-fades-${t}"]`)?.getAttribute(`data-visible`),g={play:async({canvasElement:e})=>{await f(()=>{d(h(e,`top`)).toBe(`false`),d(h(e,`bottom`)).toBe(`true`)})}},_={play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="scroll-fades-scroller"]`);t.scrollTo({top:t.scrollHeight}),await f(()=>{d(h(e,`top`)).toBe(`true`),d(h(e,`bottom`)).toBe(`false`)})}},v={args:{rows:3},play:async({canvasElement:e})=>{await f(()=>{d(h(e,`top`)).toBe(`false`),d(h(e,`bottom`)).toBe(`false`)})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      expect(fadeVisible(canvasElement, "top")).toBe("false");
      expect(fadeVisible(canvasElement, "bottom")).toBe("true");
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const scroller = canvasElement.querySelector<HTMLElement>('[data-testid="scroll-fades-scroller"]')!;
    scroller.scrollTo({
      top: scroller.scrollHeight
    });
    await waitFor(() => {
      expect(fadeVisible(canvasElement, "top")).toBe("true");
      expect(fadeVisible(canvasElement, "bottom")).toBe("false");
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 3
  },
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      expect(fadeVisible(canvasElement, "top")).toBe("false");
      expect(fadeVisible(canvasElement, "bottom")).toBe("false");
    });
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`ScrolledToEnd`,`ContentFits`]}))();export{v as ContentFits,g as Playground,_ as ScrolledToEnd,y as __namedExportsOrder,m as default};