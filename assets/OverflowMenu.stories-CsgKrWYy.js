import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aH as y,aI as r,aJ as o}from"./ContextMenuList-Da-ryDLs.js";import"./index-CY-HDqYb.js";import{I as i,a as c}from"./IconRotate3d-DDLEHLGr.js";import{I as m}from"./IconTrash-DpdIUO2U.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const S={component:o,title:"F/OverflowMenu",args:{title:"OverflowMenu",size:"medium",disabled:!1,items:[{label:"Item 1",icon:i},{label:"Item 2",icon:c},{label:"Item 3",disabled:!0,icon:r},{label:"Item 4",danger:!0,showDivider:!0,icon:m}]},argTypes:{size:{description:"Size of the OverflowMenu",control:{type:"inline-radio"},options:y},disabled:{description:"Whether the OverflowMenu is disabled",control:{type:"boolean"}},tooltipContent:{description:"Tooltip content for the overflow menu button (only shown if provided)",control:{type:"text"}},tooltipPlacement:{description:"Placement of the tooltip",control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]}},render:t=>e.jsx(o,{...t})},n={},s={parameters:{controls:{disable:!0}},render:()=>{const t=[{label:"Edit",icon:i},{label:"Rotate",icon:c},{label:"Upload",icon:r},{label:"Delete",danger:!0,showDivider:!0,icon:m}];return e.jsx("div",{className:"gap-xlg flex flex-row items-center",children:y.map(l=>e.jsxs("div",{className:"gap-sm flex flex-col items-start",children:[e.jsx("p",{className:"typography-body-small text-text-label",children:l}),e.jsx(o,{title:`OverflowMenu ${l}`,size:l,items:t})]},l))})}},a={parameters:{controls:{disable:!0}},render:()=>{const t=[{label:"Edit",icon:i},{label:"Rotate",icon:c},{label:"Upload",icon:r},{label:"Delete",danger:!0,showDivider:!0,icon:m}];return e.jsxs("div",{className:"gap-xlg flex flex-col items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-start",children:[e.jsx("p",{className:"typography-body-small text-text-label",children:"With tooltip"}),e.jsx(o,{title:"OverflowMenu",size:"medium",items:t,tooltipContent:"More options",tooltipPlacement:"bottom"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-start",children:[e.jsx("p",{className:"typography-body-small text-text-label",children:"Without tooltip (no tooltipContent prop)"}),e.jsx(o,{title:"OverflowMenu",size:"medium",items:t})]})]})}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,f,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const items = [{
      label: "Edit",
      icon: IconEdit
    }, {
      label: "Rotate",
      icon: Icon3dRotate
    }, {
      label: "Upload",
      icon: IconUpload
    }, {
      label: "Delete",
      danger: true,
      showDivider: true,
      icon: IconTrash
    }];
    return <div className="gap-xlg flex flex-row items-center">
        {OverflowMenuItemSizes.map(size => <div key={size} className="gap-sm flex flex-col items-start">
            <p className="typography-body-small text-text-label">{size}</p>
            <OverflowMenu title={\`OverflowMenu \${size}\`} size={size} items={items} />
          </div>)}
      </div>;
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,v,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const items = [{
      label: "Edit",
      icon: IconEdit
    }, {
      label: "Rotate",
      icon: Icon3dRotate
    }, {
      label: "Upload",
      icon: IconUpload
    }, {
      label: "Delete",
      danger: true,
      showDivider: true,
      icon: IconTrash
    }];
    return <div className="gap-xlg flex flex-col items-start">
        <div className="gap-sm flex flex-col items-start">
          <p className="typography-body-small text-text-label">With tooltip</p>
          <OverflowMenu title="OverflowMenu" size="medium" items={items} tooltipContent="More options" tooltipPlacement="bottom" />
        </div>
        <div className="gap-sm flex flex-col items-start">
          <p className="typography-body-small text-text-label">
            Without tooltip (no tooltipContent prop)
          </p>
          <OverflowMenu title="OverflowMenu" size="medium" items={items} />
        </div>
      </div>;
  }
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const T=["Playground","Sizes","WithTooltip"];export{n as Playground,s as Sizes,a as WithTooltip,T as __namedExportsOrder,S as default};
