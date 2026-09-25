import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Os as n,Uo as r,Us as i,dn as a,fn as o,hn as s,mn as c,t as l}from"./iframe-BrfqoxEp.js";import{n as u,t as d}from"./figmaDesign-DDiUnvXT.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{l(),f=t(i(),1),u(),p=n(),{expect:m,fn:h,waitFor:g}=__STORYBOOK_MODULE_TEST__,_={title:`Inputs & Controls/ImageCropper`,component:a,tags:[`autodocs`],parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5550-9465`),docs:{description:{component:"Crop stage with a fixed cutout: drag, zoom and rotate the image underneath it. Export the cutout with `cropImageToBlob` and the same transform."}}},args:{src:`/arcade-docs/assets/image-sample.png`,shape:`round`,cropSize:220,disabled:!1},argTypes:{shape:{control:`inline-radio`,options:o},cropSize:{control:{type:`number`,min:64,max:252,step:4}},disabled:{control:`boolean`}}},v={render:e=>(0,p.jsx)(`div`,{className:`w-[448px] max-w-full`,children:(0,p.jsx)(a,{...e})})},y=e=>{let[t,n]=(0,f.useState)(s),[i,o]=(0,f.useState)(null),[l,u]=(0,f.useState)(null);return(0,f.useEffect)(()=>()=>{l&&URL.revokeObjectURL(l)},[l]),(0,p.jsxs)(`div`,{className:`gap-xlg flex w-[448px] max-w-full flex-col`,children:[(0,p.jsx)(a,{...e,zoom:t.zoom,onZoomChange:t=>{e.onZoomChange?.(t),n(e=>({...e,zoom:t}))},rotation:t.rotation,onRotationChange:e=>n(t=>({...t,rotation:e})),offset:t.offset,onOffsetChange:e=>n(t=>({...t,offset:e})),onImageLoad:o}),(0,p.jsxs)(`div`,{className:`gap-lg flex items-center`,children:[(0,p.jsx)(r,{label:`Export`,disabled:!i,onClick:async()=>{if(!i)return;let e=await c(i,t,220,{outputSize:128});u(URL.createObjectURL(e))}}),l&&(0,p.jsx)(`img`,{src:l,alt:`Exported cutout`,className:`size-container-xlg rounded-max`,"data-testid":`image-cropper-export`})]})]})},b={args:{onZoomChange:h()},render:e=>(0,p.jsx)(y,{...e}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Export`});await g(()=>m(n).toBeEnabled()),await t.click(n),await m(await e.findByRole(`img`,{name:`Exported cutout`})).toHaveAttribute(`src`,m.stringMatching(/^blob:/))}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-[448px] max-w-full">
      <ImageCropper {...args} />
    </div>
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    onZoomChange: fn()
  },
  render: args => <ExportDemo {...args} />,
  play: async ({
    canvas,
    userEvent
  }) => {
    const exportButton = canvas.getByRole("button", {
      name: "Export"
    });
    await waitFor(() => expect(exportButton).toBeEnabled());
    await userEvent.click(exportButton);
    const exported = await canvas.findByRole("img", {
      name: "Exported cutout"
    });
    await expect(exported).toHaveAttribute("src", expect.stringMatching(/^blob:/));
  }
}`,...b.parameters?.docs?.source}}},x=[`Playground`,`Export`]}))();export{b as Export,v as Playground,x as __namedExportsOrder,_ as default};