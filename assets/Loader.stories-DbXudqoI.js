import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{aV as t,aW as p,aX as m}from"./ContextMenu-BIXelnGu.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const b={title:"Components/Loader",component:t},e=o=>a.jsx("div",{children:a.jsx(t,{...o})});e.args={size:"Small",color:"brand",ariaLabel:"Wird geladen…",asOverlay:!1,overlayLabel:"Einen Moment noch, wir haben es gleich...",colorOverrides:void 0};e.argTypes={size:{description:"The size of the loader",control:{type:"select"},options:p,defaultValue:"Small"},color:{description:"The color variant of the loader",control:{type:"select"},options:m,defaultValue:"brand"},ariaLabel:{description:"The accessible label for screen readers",control:{type:"text"},defaultValue:"Wird geladen…"},asOverlay:{description:"Displays the loader centered on a fullscreen semi-transparent backdrop",control:{type:"boolean"},defaultValue:!1},overlayLabel:{description:"Optional label shown below the loader when used as an overlay (appears after 5s)",control:{type:"text"},defaultValue:"Einen Moment noch, wir haben es gleich..."},colorOverrides:{description:"Optional color overrides for specific layers in the Lottie animation",control:{type:"object"},defaultValue:void 0},animationData:{description:"The .lottie JSON data for the animation",control:{type:"object"},defaultValue:void 0}};const r={parameters:{controls:{disable:!0}},render:()=>a.jsx("div",{className:"gap-lg flex flex-col",children:p.map(o=>a.jsx("div",{className:"gap-lg flex flex-row items-center",children:m.map(u=>a.jsx(t,{size:o},`${o}-${u}`))},o))})};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};e.__docgenInfo={description:"",methods:[],displayName:"Playground"};var s,l,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: React.ComponentProps<typeof Loader>) => {
  return <div>
      <Loader {...args} />
    </div>;
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex flex-col">
      {LoaderSize.map(size => <div key={size} className="gap-lg flex flex-row items-center">
          {LoaderColor.map(color => <Loader key={\`\${size}-\${color}\`} size={size} />)}
        </div>)}
    </div>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const L=["Playground","Overview"];export{r as Overview,e as Playground,L as __namedExportsOrder,b as default};
