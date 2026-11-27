import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bt as n,Lt as r,Rt as i,Vt as a,cl as o,qc as s,t as c,zt as l}from"./iframe-BmBSRsrc.js";import{n as u,t as d}from"./figmaDesign-D2IpkIki.js";var f,p,m,h,g,_,v,y,b;e((()=>{c(),f=t(o(),1),u(),p=s(),m={title:`Components/CompanyLogo`,component:r,tags:[`autodocs`],argTypes:{company:{control:`select`,options:a},color:{control:`inline-radio`,options:i},background:{control:`boolean`},shape:{control:`inline-radio`,options:l},size:{control:`inline-radio`,options:n},label:{control:`text`}},args:{company:`wellhub`,color:`inverse`,background:!0,shape:`rounded`,size:48,label:`Wellhub`},parameters:{design:d(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6523-1360`),docs:{description:{component:"Mark of a partner company in the brand colour, as the light `inverse` mark, or in black or white. `background` puts any of them on a tile, `shape` sets the tile's outline."}}}},h={},g={brand:`#FFFFFF`,inverse:`#000000`,black:`#FFFFFF`,white:`#000000`},_={parameters:{controls:{disable:!0}},render:()=>(0,p.jsxs)(`div`,{className:`gap-lg grid grid-cols-[repeat(9,max-content)] items-center`,children:[(0,p.jsx)(`span`,{}),i.map(e=>(0,p.jsx)(`span`,{className:`typography-label text-text-label col-span-2`,children:e},e)),a.map(e=>(0,p.jsxs)(`div`,{className:`contents`,children:[(0,p.jsx)(`span`,{className:`typography-label text-text-label`,children:e}),i.map(t=>(0,p.jsxs)(f.Fragment,{children:[(0,p.jsx)(`span`,{className:`p-sm inline-flex`,style:{backgroundColor:g[t]},children:(0,p.jsx)(r,{company:e,color:t,size:48})}),(0,p.jsx)(r,{company:e,color:t,background:!0,shape:`rounded`,size:48})]},t))]},e))]})},v={parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:`gap-lg flex items-center`,children:l.map(e=>(0,p.jsx)(r,{company:`classpass`,color:`inverse`,background:!0,shape:e,size:48},e))})},y={parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(`div`,{className:`gap-lg flex items-end`,children:n.map(e=>(0,p.jsx)(r,{company:`epassi`,color:`inverse`,background:!0,shape:`rounded`,size:e},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg grid grid-cols-[repeat(9,max-content)] items-center">
      <span />
      {CompanyLogoColors.map(color => <span key={color} className="typography-label text-text-label col-span-2">
          {color}
        </span>)}
      {CompanyLogoCompanies.map(company => <div key={company} className="contents">
          <span className="typography-label text-text-label">{company}</span>
          {CompanyLogoColors.map(color => <React.Fragment key={color}>
              <span className="p-sm inline-flex" style={{
          backgroundColor: backdrops[color]
        }}>
                <CompanyLogo company={company} color={color} size={48} />
              </span>
              <CompanyLogo company={company} color={color} background shape="rounded" size={48} />
            </React.Fragment>)}
        </div>)}
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Every colour without and with its background.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex items-center">
      {CompanyLogoShapes.map(shape => <CompanyLogo key={shape} company="classpass" color="inverse" background shape={shape} size={48} />)}
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="gap-lg flex items-end">
      {CompanyLogoSizes.map(size => <CompanyLogo key={size} company="epassi" color="inverse" background shape="rounded" size={size} />)}
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Playground`,`Overview`,`Shapes`,`Sizes`]}))();export{_ as Overview,h as Playground,v as Shapes,y as Sizes,b as __namedExportsOrder,m as default};