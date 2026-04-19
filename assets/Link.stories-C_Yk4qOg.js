import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aT as s,aI as k,aH as f}from"./ContextMenuList-DxPDIpoU.js";import"./index-CY-HDqYb.js";import{I as w,a as u}from"./IconNumber123-D7QiTUyZ.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const d={none:void 0,IconArrowRight:f,IconArrowLeft:k,IconExternalLink:u,Icon123:w},v=["sm","md","lg"],A={title:"Components/Link",component:s,args:{href:"#",label:"Link",disabled:!1,inline:!1,size:"md",leadingIcon:!1,icon:"IconArrowRight"}},a={render:r=>{const{icon:o,...n}=r,t=d[o];return e.jsx(s,{...n,icon:t})},argTypes:{size:{description:"Typography scale",control:{type:"inline-radio"},options:[...v]},inline:{description:"Inline (link style) vs accent (standalone)",control:"boolean"},disabled:{control:"boolean"},leadingIcon:{control:"boolean"},label:{control:"text"},href:{control:"text"},icon:{control:{type:"select"},options:Object.keys(d)},component:{control:{disable:!0}}}},L=[{inline:!1,disabled:!1,leadingIcon:!1},{inline:!1,disabled:!1,leadingIcon:!0},{inline:!1,disabled:!0,leadingIcon:!1},{inline:!0,disabled:!1,leadingIcon:!1},{inline:!0,disabled:!0,leadingIcon:!1}],c={sm:"typography-label",md:"typography-body-small",lg:"typography-body"},l={parameters:{controls:{disable:!0}},render:r=>{const o=[...v].toReversed();return e.jsx("div",{className:"gap-xlg grid",style:{display:"grid",gridTemplateColumns:`repeat(${o.length}, minmax(0, 1fr))`},children:L.map((n,t)=>o.map((i,x)=>{const h=`${i}-${n.inline?"inline":"accent"}-${n.disabled?"disabled":"enabled"}-${n.leadingIcon?"leading":"trailing"}`;return e.jsxs("div",{style:{gridColumn:`${x+1} / span 1`,gridRow:`${t+1} / span 1`},children:[r.showLabels&&e.jsxs("p",{className:`${c[i]} text-text`,children:["size=",i,", ",n.inline?"inline":"accent",n.disabled?", disabled":", enabled",n.leadingIcon?", leading icon":", trailing icon"]}),n.inline?e.jsxs("p",{className:`${c[i]} text-text`,children:["Before"," ",e.jsx(s,{href:"#",label:"link",size:i,inline:!0,disabled:n.disabled,icon:u,leadingIcon:n.leadingIcon})," ","after."]}):e.jsx(s,{href:"#",label:"Link",size:i,inline:!1,disabled:n.disabled,icon:f,leadingIcon:n.leadingIcon})]},h)}))})},args:{showLabels:!1}};var p,g,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const {
      icon,
      ...rest
    } = args;
    const IconComponent = iconMap[icon];
    return <Link {...rest} icon={IconComponent} />;
  },
  argTypes: {
    size: {
      description: "Typography scale",
      control: {
        type: "inline-radio"
      },
      options: [...LinkStorySizes]
    },
    inline: {
      description: "Inline (link style) vs accent (standalone)",
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    },
    leadingIcon: {
      control: "boolean"
    },
    label: {
      control: "text"
    },
    href: {
      control: "text"
    },
    icon: {
      control: {
        type: "select"
      },
      options: Object.keys(iconMap) as IconKey[]
    },
    component: {
      control: {
        disable: true
      }
    }
  }
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,y,I;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: args => {
    const overviewSizes = [...LinkStorySizes].toReversed();
    return <div className="gap-xlg grid" style={{
      display: "grid",
      gridTemplateColumns: \`repeat(\${overviewSizes.length}, minmax(0, 1fr))\`
    }}>
        {overviewRows.map((rowConfig, rowIndex) => {
        return overviewSizes.map((size, columnIndex) => {
          const key = \`\${size}-\${rowConfig.inline ? "inline" : "accent"}-\${rowConfig.disabled ? "disabled" : "enabled"}-\${rowConfig.leadingIcon ? "leading" : "trailing"}\`;
          return <div key={key} style={{
            gridColumn: \`\${columnIndex + 1} / span 1\`,
            gridRow: \`\${rowIndex + 1} / span 1\`
          }}>
                {args.showLabels && <p className={\`\${overviewTypographyByLinkSize[size]} text-text\`}>
                    size={size}, {rowConfig.inline ? "inline" : "accent"}
                    {rowConfig.disabled ? ", disabled" : ", enabled"}
                    {rowConfig.leadingIcon ? ", leading icon" : ", trailing icon"}
                  </p>}
                {rowConfig.inline ? <p className={\`\${overviewTypographyByLinkSize[size]} text-text\`}>
                    Before{" "}
                    <Link href="#" label="link" size={size} inline disabled={rowConfig.disabled} icon={IconExternalLink} leadingIcon={rowConfig.leadingIcon} />{" "}
                    after.
                  </p> : <Link href="#" label="Link" size={size} inline={false} disabled={rowConfig.disabled} icon={IconArrowRight} leadingIcon={rowConfig.leadingIcon} />}
              </div>;
        });
      })}
      </div>;
  },
  args: {
    showLabels: false
  }
}`,...(I=(y=l.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const E=["Playground","Overview"];export{l as Overview,a as Playground,E as __namedExportsOrder,A as default};
