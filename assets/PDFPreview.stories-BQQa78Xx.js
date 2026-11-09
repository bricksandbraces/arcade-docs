import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Cr as n,Ga as r,Sr as i,Tc as a,Tn as o,Tr as s,Ts as c,bn as l,t as u,uc as d,uo as f,wr as p,yn as m}from"./iframe-BGZyYePL.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{u(),r(),h=t(a(),1),g=d(),_={title:`Display & Data/PDFPreview`,component:m,tags:[`autodocs`],parameters:{docs:{description:{component:"Renders a PDF with pdf.js, framed by a header with the file name and open, download and full screen actions. Background, page radius and page shadow are configurable, and a floating toolbar handles paging. `PDFPreviewFullscreen` is the full-viewport reader with thumbnails, rotation, zoom presets and search, and works on its own too. `pdfjs-dist` loads on first use. Pass `workerSrc` to parse large files off the main thread."}}},decorators:[e=>(0,g.jsx)(`div`,{className:`max-w-[480px]`,children:(0,g.jsx)(e,{})})],argTypes:{fit:{control:`inline-radio`,options:s},background:{control:`inline-radio`,options:p},pageRadius:{control:`inline-radio`,options:n}},args:{title:`quarterly-report.pdf`,description:`3 pages, 2 KB`,src:`/arcade-docs/assets/sample.pdf`,fit:`page`,background:`subtle`,pageRadius:`sm`,pageShadow:!0,showControls:!0,showFullscreen:!0,error:!1}},v={},y={args:{background:`secondary`,pageRadius:`lg`,pageShadow:!1}},b={args:{initialPage:2}},x={args:{showControls:!1}},S={args:{fit:`fill`},render:e=>(0,g.jsx)(`div`,{className:`h-[400px]`,children:(0,g.jsx)(m,{...e})})},C={args:{actions:(0,g.jsx)(c,{kind:`ghost`,size:`small`,variant:`rectangular`,IconLeft:f,"aria-label":`Print`,tooltipContent:`Print`})}},w={args:{src:void 0}},T={render:({background:e,fit:t,pageRadius:n})=>(0,g.jsx)(i,{background:e,fit:t,pageRadius:n})},E={args:{src:`/arcade-docs/assets/missing.pdf`}},D={parameters:{controls:{disable:!0}},render:e=>(0,g.jsx)(`div`,{className:`gap-lg flex flex-col`,children:o.map(t=>(0,g.jsx)(m,{...e,error:t,onBack:()=>void 0},t))})},O={args:{title:`quarterly-report-with-an-unusually-long-file-name-from-the-finance-team-final-v2.pdf`}},k={render:e=>{let[t,n]=(0,h.useState)(!0);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{label:`Open PDF`,onClick:()=>n(!0)}),(0,g.jsx)(l,{open:t,onClose:()=>n(!1),title:e.title,src:e.src})]})}},A={...k,args:{src:void 0}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    background: "secondary",
    pageRadius: "lg",
    pageShadow: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    initialPage: 2
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    showControls: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    fit: "fill"
  },
  render: args => <div className="h-[400px]">
      <PDFPreview {...args} />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    actions: <Button kind="ghost" size="small" variant="rectangular" IconLeft={IconPrinter} aria-label="Print" tooltipContent="Print" />
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    src: undefined
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: ({
    background,
    fit,
    pageRadius
  }) => <PDFPreviewSkeleton background={background} fit={fit} pageRadius={pageRadius} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    src: \`\${import.meta.env.BASE_URL}assets/missing.pdf\`
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => <div className="gap-lg flex flex-col">
      {PDFPreviewErrorKinds.map(kind => <PDFPreview key={kind} {...args} error={kind} onBack={() => undefined} />)}
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: "quarterly-report-with-an-unusually-long-file-name-from-the-finance-team-final-v2.pdf"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <>
        <Button label="Open PDF" onClick={() => setOpen(true)} />
        <PDFPreviewFullscreen open={open} onClose={() => setOpen(false)} title={args.title} src={args.src} />
      </>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...Fullscreen,
  args: {
    src: undefined
  }
}`,...A.parameters?.docs?.source}}},j=[`Playground`,`PageStyling`,`InitialPage`,`WithoutControls`,`FillParent`,`CustomActions`,`Loading`,`Skeleton`,`LoadError`,`ErrorStates`,`LongFileName`,`Fullscreen`,`FullscreenLoading`]}))();export{C as CustomActions,D as ErrorStates,S as FillParent,k as Fullscreen,A as FullscreenLoading,b as InitialPage,E as LoadError,w as Loading,O as LongFileName,y as PageStyling,v as Playground,T as Skeleton,x as WithoutControls,j as __namedExportsOrder,_ as default};