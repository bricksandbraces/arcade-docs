import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{C as n,D as r,Po as i,S as a,io as o,t as s,yo as c}from"./iframe-BXRL_JkN.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{s(),l=t(i(),1),u=t(o(),1),d=c(),f={title:`Inputs & Controls/FileUpload/FileItem`,component:a,tags:[`autodocs`],parameters:{layout:`centered`},argTypes:{state:{control:`inline-radio`,options:n},extension:{control:`select`,options:r},progress:{control:{type:`range`,min:0,max:100,step:1}}}},p={render:()=>(0,d.jsxs)(`div`,{className:(0,u.default)(`gap-sm flex w-[320px] flex-col`),children:[(0,d.jsx)(a,{state:`uploaded`,filename:`Filename.pdf`,extension:`pdf`,onRemove:()=>void 0}),(0,d.jsx)(a,{state:`uploading`,filename:`Filename.pdf`,extension:`pdf`,progress:50}),(0,d.jsx)(a,{state:`success`,filename:`Filename.pdf`,extension:`pdf`}),(0,d.jsx)(a,{state:`error`,filename:`Filename.pdf`,extension:`pdf`,errorText:`This file could not be uploaded.`,onDismissError:()=>void 0})]})},m={args:{state:`uploaded`,filename:`Filename.pdf`,extension:`pdf`,onRemove:()=>void 0}},h={args:{state:`uploading`,filename:`Filename.pdf`,extension:`pdf`,progress:60}},g={args:{state:`success`,filename:`Filename.pdf`,extension:`pdf`}},_={args:{state:`error`,filename:`Filename.pdf`,extension:`pdf`,errorText:`This file could not be uploaded.`,onDismissError:()=>void 0}},v={render:function(){let[e,t]=(0,l.useState)(0),[n,r]=(0,l.useState)(`uploading`);return(0,l.useEffect)(()=>{if(n!==`uploading`)return;let e=window.setInterval(()=>{t(e=>{let t=e+4;return t>=100?(window.setTimeout(()=>r(`success`),200),100):t})},80);return()=>window.clearInterval(e)},[n]),(0,l.useEffect)(()=>{if(n!==`success`)return;let e=window.setTimeout(()=>r(`uploaded`),1500);return()=>window.clearTimeout(e)},[n]),(0,d.jsx)(`div`,{className:(0,u.default)(`gap-sm flex w-[320px] flex-col`),children:(0,d.jsx)(a,{state:n,progress:e,filename:`Filename.pdf`,extension:`pdf`,onRemove:()=>{r(`uploading`),t(0)}})})}},y={render:function(){let[e,t]=(0,l.useState)(0),[n,r]=(0,l.useState)(`uploading`);return(0,l.useEffect)(()=>{if(n!==`uploading`)return;let e=window.setInterval(()=>{t(e=>{let t=e+4;return t>=60?(window.setTimeout(()=>r(`error`),200),60):t})},80);return()=>window.clearInterval(e)},[n]),(0,d.jsx)(`div`,{className:(0,u.default)(`gap-sm flex w-[320px] flex-col`),children:(0,d.jsx)(a,{state:n,progress:e,filename:`Filename.pdf`,extension:`pdf`,errorText:`This file could not be uploaded.`,onRemove:()=>{r(`uploading`),t(0)},onDismissError:()=>{r(`uploading`),t(0)}})})}},b=p,p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={cx("gap-sm flex w-[320px] flex-col")}>
      <FileItem state="uploaded" filename="Filename.pdf" extension="pdf" onRemove={() => undefined} />
      <FileItem state="uploading" filename="Filename.pdf" extension="pdf" progress={50} />
      <FileItem state="success" filename="Filename.pdf" extension="pdf" />
      <FileItem state="error" filename="Filename.pdf" extension="pdf" errorText="This file could not be uploaded." onDismissError={() => undefined} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "uploaded",
    filename: "Filename.pdf",
    extension: "pdf",
    onRemove: () => undefined
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    state: "uploading",
    filename: "Filename.pdf",
    extension: "pdf",
    progress: 60
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success",
    filename: "Filename.pdf",
    extension: "pdf"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error",
    filename: "Filename.pdf",
    extension: "pdf",
    errorText: "This file could not be uploaded.",
    onDismissError: () => undefined
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`Overview`,...b.parameters?.docs?.source}}},x=[`Overview`,`Uploaded`,`Uploading`,`Success`,`Error`,`SuccessFlow`,`ErrorFlow`,`Playground`]}))();export{_ as Error,y as ErrorFlow,p as Overview,b as Playground,g as Success,v as SuccessFlow,m as Uploaded,h as Uploading,x as __namedExportsOrder,f as default};