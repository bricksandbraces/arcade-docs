import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{bl as a,bm as m,bn as e,f as i}from"./ContextMenuList-5laOttQ9.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const b={title:"WIP Components/Tooltip",component:e,argTypes:{type:{control:"inline-radio",options:m},placement:{control:"inline-radio",options:a}}},n={render:()=>t.jsxs("div",{className:"space-y-12 p-8",children:[t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{className:"typography-headline-06 text-text",children:"Default Tooltips"}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"flex justify-center gap-4 pt-12",children:[t.jsx(e,{content:"Tooltip",placement:"top-start",children:t.jsx(i,{kind:"primary",size:"small",label:"Top Start",onClick:()=>{}})}),t.jsx(e,{content:"Tooltip",placement:"top",children:t.jsx(i,{kind:"primary",size:"small",label:"Top",onClick:()=>{}})}),t.jsx(e,{content:"Tooltip",placement:"top-end",children:t.jsx(i,{kind:"primary",size:"small",label:"Top End",onClick:()=>{}})})]}),t.jsxs("div",{className:"flex items-center justify-between px-12",children:[t.jsx(e,{content:"Tooltip",placement:"left",children:t.jsx(i,{kind:"primary",size:"small",label:"Left",onClick:()=>{}})}),t.jsx(e,{content:"Tooltip",placement:"right",children:t.jsx(i,{kind:"primary",size:"small",label:"Right",onClick:()=>{}})})]}),t.jsxs("div",{className:"flex justify-center gap-4 pb-12",children:[t.jsx(e,{content:"Tooltip",placement:"bottom-start",children:t.jsx(i,{kind:"primary",size:"small",label:"Bottom Start",onClick:()=>{}})}),t.jsx(e,{content:"Tooltip",placement:"bottom",children:t.jsx(i,{kind:"primary",size:"small",label:"Bottom",onClick:()=>{}})}),t.jsx(e,{content:"Tooltip",placement:"bottom-end",children:t.jsx(i,{kind:"primary",size:"small",label:"Bottom End",onClick:()=>{}})})]})]})]}),t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{className:"typography-headline-06 text-text",children:"Container Tooltips"}),t.jsxs("div",{className:"space-y-8",children:[t.jsxs("div",{className:"flex justify-center gap-4 pt-12",children:[t.jsx(e,{type:"container",title:"Tooltip",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.",placement:"top-start",children:t.jsx(i,{kind:"secondary",size:"small",label:"Top Start",onClick:()=>{}})}),t.jsx(e,{type:"container",title:"Tooltip",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.",placement:"top",children:t.jsx(i,{kind:"secondary",size:"small",label:"Top",onClick:()=>{}})}),t.jsx(e,{type:"container",title:"Tooltip",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.",placement:"top-end",children:t.jsx(i,{kind:"secondary",size:"small",label:"Top End",onClick:()=>{}})})]}),t.jsxs("div",{className:"flex items-center justify-between px-12",children:[t.jsx(e,{type:"container",title:"Tooltip",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.",placement:"left",children:t.jsx(i,{kind:"secondary",size:"small",label:"Left",onClick:()=>{}})}),t.jsx(e,{type:"container",title:"Tooltip",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.",placement:"right",children:t.jsx(i,{kind:"secondary",size:"small",label:"Right",onClick:()=>{}})})]}),t.jsxs("div",{className:"flex justify-center gap-4 pb-12",children:[t.jsx(e,{type:"container",title:"Tooltip",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.",placement:"bottom-start",children:t.jsx(i,{kind:"secondary",size:"small",label:"Bottom Start",onClick:()=>{}})}),t.jsx(e,{type:"container",title:"Tooltip",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.",placement:"bottom",children:t.jsx(i,{kind:"secondary",size:"small",label:"Bottom",onClick:()=>{}})}),t.jsx(e,{type:"container",title:"Tooltip",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat.",placement:"bottom-end",children:t.jsx(i,{kind:"secondary",size:"small",label:"Bottom End",onClick:()=>{}})})]})]})]})]})};var o,l,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="space-y-12 p-8">
      {/* Default Tooltips */}
      <div className="space-y-6">
        <h3 className="typography-headline-06 text-text">Default Tooltips</h3>
        <div className="space-y-8">
          {/* Top placements */}
          <div className="flex justify-center gap-4 pt-12">
            <Tooltip content="Tooltip" placement="top-start">
              <Button kind="primary" size="small" label="Top Start" onClick={() => {}} />
            </Tooltip>
            <Tooltip content="Tooltip" placement="top">
              <Button kind="primary" size="small" label="Top" onClick={() => {}} />
            </Tooltip>
            <Tooltip content="Tooltip" placement="top-end">
              <Button kind="primary" size="small" label="Top End" onClick={() => {}} />
            </Tooltip>
          </div>

          {/* Side placements */}
          <div className="flex items-center justify-between px-12">
            <Tooltip content="Tooltip" placement="left">
              <Button kind="primary" size="small" label="Left" onClick={() => {}} />
            </Tooltip>
            <Tooltip content="Tooltip" placement="right">
              <Button kind="primary" size="small" label="Right" onClick={() => {}} />
            </Tooltip>
          </div>

          {/* Bottom placements */}
          <div className="flex justify-center gap-4 pb-12">
            <Tooltip content="Tooltip" placement="bottom-start">
              <Button kind="primary" size="small" label="Bottom Start" onClick={() => {}} />
            </Tooltip>
            <Tooltip content="Tooltip" placement="bottom">
              <Button kind="primary" size="small" label="Bottom" onClick={() => {}} />
            </Tooltip>
            <Tooltip content="Tooltip" placement="bottom-end">
              <Button kind="primary" size="small" label="Bottom End" onClick={() => {}} />
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Container Tooltips */}
      <div className="space-y-6">
        <h3 className="typography-headline-06 text-text">Container Tooltips</h3>
        <div className="space-y-8">
          {/* Top placements */}
          <div className="flex justify-center gap-4 pt-12">
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="top-start">
              <Button kind="secondary" size="small" label="Top Start" onClick={() => {}} />
            </Tooltip>
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="top">
              <Button kind="secondary" size="small" label="Top" onClick={() => {}} />
            </Tooltip>
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="top-end">
              <Button kind="secondary" size="small" label="Top End" onClick={() => {}} />
            </Tooltip>
          </div>

          {/* Side placements */}
          <div className="flex items-center justify-between px-12">
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="left">
              <Button kind="secondary" size="small" label="Left" onClick={() => {}} />
            </Tooltip>
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="right">
              <Button kind="secondary" size="small" label="Right" onClick={() => {}} />
            </Tooltip>
          </div>

          {/* Bottom placements */}
          <div className="flex justify-center gap-4 pb-12">
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="bottom-start">
              <Button kind="secondary" size="small" label="Bottom Start" onClick={() => {}} />
            </Tooltip>
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="bottom">
              <Button kind="secondary" size="small" label="Bottom" onClick={() => {}} />
            </Tooltip>
            <Tooltip type="container" title="Tooltip" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus ante, pretium nec tempus sit amet, mattis mattis quam. Morbi ultrices molestie elit, a hendrerit mi iaculis consequat." placement="bottom-end">
              <Button kind="secondary" size="small" label="Bottom End" onClick={() => {}} />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const h=["Overview"];export{n as Overview,h as __namedExportsOrder,b as default};
