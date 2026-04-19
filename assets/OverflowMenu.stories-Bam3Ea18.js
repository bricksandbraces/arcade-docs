import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bb as I,as as a,O as n}from"./ContextMenuList-Df0GqvvY.js";import"./index-CY-HDqYb.js";import{I as d}from"./IconEdit-DqL-2XtG.js";import{I as m}from"./IconRotate3d-D-kPiOZV.js";import{I as p}from"./IconTrash-CPUCZLyl.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const _={component:n,title:"Components/OverflowMenu",args:{title:"OverflowMenu",size:"medium",disabled:!1,items:[{label:"Item 1",icon:d},{label:"Item 2",icon:m},{label:"Item 3",disabled:!0,icon:a},{label:"Item 4",danger:!0,showDivider:!0,icon:p}]},argTypes:{size:{description:"Size of the OverflowMenu",control:{type:"inline-radio"},options:I},disabled:{description:"Whether the OverflowMenu is disabled",control:{type:"boolean"}},tooltipContent:{description:"Tooltip content for the overflow menu button (only shown if provided)",control:{type:"text"}},tooltipPlacement:{description:"Placement of the tooltip",control:{type:"select"},options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"]}},render:t=>e.jsx(n,{...t})},s={},z=[{label:"Edit",icon:d},{label:"Rotate",icon:m},{label:"Upload",icon:a},{label:"Delete",danger:!0,showDivider:!0,icon:p}],c=[{key:"default",disabled:!1,tooltipContent:void 0},{key:"disabled",disabled:!0,tooltipContent:void 0},{key:"tooltip",disabled:!1,tooltipContent:"More options"}],r={parameters:{controls:{disable:!0}},render:t=>{const O=I.toReversed();return e.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${c.length}, minmax(0, 1fr))`},children:O.map((l,M)=>c.map((o,C)=>{const j=`${l}-${o.key}`;return e.jsxs("div",{style:{gridColumn:`${C+1} / span 1`,gridRow:`${M+1} / span 1`},children:[t.showLabels&&e.jsxs("p",{className:"typography-body-small text-text mb-sm",children:["size=",l,", ",o.key]}),e.jsx(n,{title:`OverflowMenu ${l} ${o.key}`,size:l,disabled:o.disabled,tooltipContent:o.tooltipContent,tooltipPlacement:"bottom",items:z})]},j)}))})},args:{showLabels:!1}},i={parameters:{controls:{disable:!0}},render:()=>{const t=[{label:"Edit",icon:d},{label:"Rotate",icon:m},{label:"Upload",icon:a},{label:"Delete",danger:!0,showDivider:!0,icon:p}];return e.jsxs("div",{className:"gap-xlg flex flex-col items-start",children:[e.jsxs("div",{className:"gap-sm flex flex-col items-start",children:[e.jsx("p",{className:"typography-body-small text-text-label",children:"With tooltip"}),e.jsx(n,{title:"OverflowMenu",size:"medium",items:t,tooltipContent:"More options",tooltipPlacement:"bottom"})]}),e.jsxs("div",{className:"gap-sm flex flex-col items-start",children:[e.jsx("p",{className:"typography-body-small text-text-label",children:"Without tooltip (no tooltipContent prop)"}),e.jsx(n,{title:"OverflowMenu",size:"medium",items:t})]})]})}};var u,b,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var f,x,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: (args: {
    showLabels?: boolean;
  }) => {
    const rows = OverflowMenuItemSizes.toReversed();
    return <div className="gap-xlg grid" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${overflowMenuOverviewColumns.length}, minmax(0, 1fr))\`
    }}>
        {rows.map((size, rowIndex) => overflowMenuOverviewColumns.map((col, columnIndex) => {
        const key = \`\${size}-\${col.key}\`;
        return <div key={key} style={{
          gridColumn: \`\${columnIndex + 1} / span 1\`,
          gridRow: \`\${rowIndex + 1} / span 1\`
        }}>
                {args.showLabels && <p className="typography-body-small text-text mb-sm">
                    size={size}, {col.key}
                  </p>}
                <OverflowMenu title={\`OverflowMenu \${size} \${col.key}\`} size={size} disabled={col.disabled} tooltipContent={col.tooltipContent} tooltipPlacement="bottom" items={overviewItems} />
              </div>;
      }))}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,w,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const q=["Playground","Overview","WithTooltip"];export{r as Overview,s as Playground,i as WithTooltip,q as __namedExportsOrder,_ as default};
