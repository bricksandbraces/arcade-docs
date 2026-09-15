import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{an as n,cn as r,is as i,ln as a,on as o,t as s,yo as c,ys as l}from"./iframe-C-rMpgBB.js";import{n as u,t as d}from"./figmaDesign-CO6i5n9C.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{s(),f=t(l(),1),u(),p=i(),{expect:m,fn:h,waitFor:g}=__STORYBOOK_MODULE_TEST__,_={title:`Inputs & Controls/ImageCropper`,component:n,tags:[`autodocs`],parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5550-9465`),docs:{description:{component:"Crop stage with a fixed cutout: drag, zoom and rotate the image underneath it. Export the cutout with `cropImageToBlob` and the same transform."}}},args:{src:`/arcade-docs/assets/image-sample.png`,shape:`round`,cropSize:220,disabled:!1},argTypes:{shape:{control:`inline-radio`,options:o},cropSize:{control:{type:`number`,min:64,max:252,step:4}},disabled:{control:`boolean`}}},v={render:e=>(0,p.jsx)(`div`,{className:`w-[448px] max-w-full`,children:(0,p.jsx)(n,{...e})})},y=e=>{let[t,i]=(0,f.useState)(a),[o,s]=(0,f.useState)(null),[l,u]=(0,f.useState)(null);return(0,f.useEffect)(()=>()=>{l&&URL.revokeObjectURL(l)},[l]),(0,p.jsxs)(`div`,{className:`gap-xlg flex w-[448px] max-w-full flex-col`,children:[(0,p.jsx)(n,{...e,zoom:t.zoom,onZoomChange:t=>{e.onZoomChange?.(t),i(e=>({...e,zoom:t}))},rotation:t.rotation,onRotationChange:e=>i(t=>({...t,rotation:e})),offset:t.offset,onOffsetChange:e=>i(t=>({...t,offset:e})),onImageLoad:s}),(0,p.jsxs)(`div`,{className:`gap-lg flex items-center`,children:[(0,p.jsx)(c,{label:`Export`,disabled:!o,onClick:async()=>{if(!o)return;let e=await r(o,t,220,{outputSize:128});u(URL.createObjectURL(e))}}),l&&(0,p.jsx)(`img`,{src:l,alt:`Exported cutout`,className:`size-container-xlg rounded-max`,"data-testid":`image-cropper-export`})]})]})},b={args:{onZoomChange:h()},render:e=>(0,p.jsx)(y,{...e}),play:async({canvas:e,userEvent:t})=>{let n=e.getByRole(`button`,{name:`Export`});await g(()=>m(n).toBeEnabled()),await t.click(n),await m(await e.findByRole(`img`,{name:`Exported cutout`})).toHaveAttribute(`src`,m.stringMatching(/^blob:/))}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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