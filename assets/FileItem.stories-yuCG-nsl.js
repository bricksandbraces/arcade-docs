import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{A as n,E as r,Ps as i,T as a,i as o,is as s,ys as c}from"./iframe-DvVpl985.js";import{n as l,t as u}from"./figmaDesign-CO6i5n9C.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{o(),d=t(i(),1),f=t(s(),1),l(),p=c(),m={title:`Inputs & Controls/FileUpload/FileItem`,component:a,tags:[`autodocs`],parameters:{design:u(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2608-13046`),layout:`centered`},argTypes:{state:{control:`inline-radio`,options:r},extension:{control:`select`,options:n},progress:{control:{type:`range`,min:0,max:100,step:1}}}},h={render:()=>(0,p.jsxs)(`div`,{className:(0,f.default)(`gap-sm flex w-[320px] flex-col`),children:[(0,p.jsx)(a,{state:`uploaded`,filename:`Filename.pdf`,extension:`pdf`,onRemove:()=>void 0}),(0,p.jsx)(a,{state:`uploading`,filename:`Filename.pdf`,extension:`pdf`,progress:50}),(0,p.jsx)(a,{state:`success`,filename:`Filename.pdf`,extension:`pdf`}),(0,p.jsx)(a,{state:`error`,filename:`Filename.pdf`,extension:`pdf`,errorText:`This file could not be uploaded.`,onDismissError:()=>void 0})]})},g={args:{state:`uploaded`,filename:`Filename.pdf`,extension:`pdf`,onRemove:()=>void 0}},_={args:{state:`uploading`,filename:`Filename.pdf`,extension:`pdf`,progress:60}},v={args:{state:`success`,filename:`Filename.pdf`,extension:`pdf`}},y={args:{state:`error`,filename:`Filename.pdf`,extension:`pdf`,errorText:`This file could not be uploaded.`,onDismissError:()=>void 0}},b={render:function(){let[e,t]=(0,d.useState)(0),[n,r]=(0,d.useState)(`uploading`);return(0,d.useEffect)(()=>{if(n!==`uploading`)return;let e=window.setInterval(()=>{t(e=>{let t=e+4;return t>=100?(window.setTimeout(()=>r(`success`),200),100):t})},80);return()=>window.clearInterval(e)},[n]),(0,d.useEffect)(()=>{if(n!==`success`)return;let e=window.setTimeout(()=>r(`uploaded`),1500);return()=>window.clearTimeout(e)},[n]),(0,p.jsx)(`div`,{className:(0,f.default)(`gap-sm flex w-[320px] flex-col`),children:(0,p.jsx)(a,{state:n,progress:e,filename:`Filename.pdf`,extension:`pdf`,onRemove:()=>{r(`uploading`),t(0)}})})}},x={render:function(){let[e,t]=(0,d.useState)(0),[n,r]=(0,d.useState)(`uploading`);return(0,d.useEffect)(()=>{if(n!==`uploading`)return;let e=window.setInterval(()=>{t(e=>{let t=e+4;return t>=60?(window.setTimeout(()=>r(`error`),200),60):t})},80);return()=>window.clearInterval(e)},[n]),(0,p.jsx)(`div`,{className:(0,f.default)(`gap-sm flex w-[320px] flex-col`),children:(0,p.jsx)(a,{state:n,progress:e,filename:`Filename.pdf`,extension:`pdf`,errorText:`This file could not be uploaded.`,onRemove:()=>{r(`uploading`),t(0)},onDismissError:()=>{r(`uploading`),t(0)}})})}},S=h,h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-sm flex w-[320px] flex-col")}>
      <FileItem state="uploaded" filename="Filename.pdf" extension="pdf" onRemove={() => undefined} />
      <FileItem state="uploading" filename="Filename.pdf" extension="pdf" progress={50} />
      <FileItem state="success" filename="Filename.pdf" extension="pdf" />
      <FileItem state="error" filename="Filename.pdf" extension="pdf" errorText="This file could not be uploaded." onDismissError={() => undefined} />
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "uploaded",
    filename: "Filename.pdf",
    extension: "pdf",
    onRemove: () => undefined
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    state: "uploading",
    filename: "Filename.pdf",
    extension: "pdf",
    progress: 60
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success",
    filename: "Filename.pdf",
    extension: "pdf"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    filename: "Filename.pdf",
    extension: "pdf",
    errorText: "This file could not be uploaded.",
    onDismissError: () => undefined
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function SuccessFlowDemo() {
    const [progress, setProgress] = useState(0);
    const [state, setState] = useState<"uploading" | "success" | "uploaded">("uploading");
    useEffect(() => {
      if (state !== "uploading") return undefined;
      const id = window.setInterval(() => {
        setProgress(p => {
          const next = p + 4;
          if (next >= 100) {
            window.setTimeout(() => setState("success"), 200);
            return 100;
          }
          return next;
        });
      }, 80);
      return () => window.clearInterval(id);
    }, [state]);
    useEffect(() => {
      if (state !== "success") return undefined;
      const id = window.setTimeout(() => setState("uploaded"), 1500);
      return () => window.clearTimeout(id);
    }, [state]);
    return <div className={cx("gap-sm flex w-[320px] flex-col")}>
        <FileItem state={state} progress={progress} filename="Filename.pdf" extension="pdf" onRemove={() => {
        setState("uploading");
        setProgress(0);
      }} />
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function ErrorFlowDemo() {
    const [progress, setProgress] = useState(0);
    const [state, setState] = useState<"uploading" | "error" | "uploaded">("uploading");
    useEffect(() => {
      if (state !== "uploading") return undefined;
      const id = window.setInterval(() => {
        setProgress(p => {
          const next = p + 4;
          if (next >= 60) {
            window.setTimeout(() => setState("error"), 200);
            return 60;
          }
          return next;
        });
      }, 80);
      return () => window.clearInterval(id);
    }, [state]);
    return <div className={cx("gap-sm flex w-[320px] flex-col")}>
        <FileItem state={state} progress={progress} filename="Filename.pdf" extension="pdf" errorText="This file could not be uploaded." onRemove={() => {
        setState("uploading");
        setProgress(0);
      }} onDismissError={() => {
        setState("uploading");
        setProgress(0);
      }} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`Overview`,...S.parameters?.docs?.source}}},C=[`Overview`,`Uploaded`,`Uploading`,`Success`,`Error`,`SuccessFlow`,`ErrorFlow`,`Playground`]}))();export{y as Error,x as ErrorFlow,h as Overview,S as Playground,v as Success,b as SuccessFlow,g as Uploaded,_ as Uploading,C as __namedExportsOrder,m as default};