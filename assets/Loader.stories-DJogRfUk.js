import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{n as s,o as p,p as u}from"./TextArea-D3Jj1EDA.js";import"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./borders-N_bRvfGw.js";import"./colors-DFCrPdrr.js";import"./index-C7yw4mlf.js";const w={title:"Components/Loader",component:s},e=r=>a.jsxs("div",{children:[a.jsx("span",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}),a.jsx(s,{...r})]});e.args={size:"md",color:"color",ariaLabel:"Wird geladen…",asOverlay:!1,overlayLabel:"Einen Moment noch, wir haben es gleich..."};e.argTypes={size:{description:"The size of the loader",control:{type:"select"},options:p,defaultValue:"md"},color:{description:"The color variant of the loader",control:{type:"select"},options:u,defaultValue:"color"},ariaLabel:{description:"The accessible label for screen readers",control:{type:"text"},defaultValue:"Wird geladen…"},asOverlay:{description:"Displays the loader centered on a fullscreen semi-transparent backdrop",control:{type:"boolean"},defaultValue:!1},overlayLabel:{description:"Optional label shown below the loader when used as an overlay (appears after 5s)",control:{type:"text"},defaultValue:"Einen Moment noch, wir haben es gleich..."}};const o=()=>a.jsx("div",{className:"gap-lg flex flex-col",children:p.map(r=>a.jsx("div",{className:"gap-lg flex flex-row items-center",children:u.map(t=>a.jsx(s,{size:r,color:t},`${r}-${t}`))},r))});e.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Overview"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};o.__docgenInfo={description:"",methods:[],displayName:"Overview"};var n,i,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: React.ComponentProps<typeof Loader>) => {
  return <div>
      <span>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </span>
      <Loader {...args} />
    </div>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <div className="gap-lg flex flex-col">
      {LoaderSize.map(size => <div key={size} className="gap-lg flex flex-row items-center">
          {LoaderColor.map(color => <Loader key={\`\${size}-\${color}\`} size={size} color={color} />)}
        </div>)}
    </div>;
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const _=["Playground","Overview"];export{o as Overview,e as Playground,_ as __namedExportsOrder,w as default};
