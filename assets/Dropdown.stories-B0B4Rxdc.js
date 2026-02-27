import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{I as q,a0 as R,a1 as n}from"./ContextMenuList-Da-ryDLs.js";import{r as t}from"./index-CY-HDqYb.js";import{a as J}from"./index-B-lxVbXh.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const se={component:n,title:"F/Dropdown/Dropdown",args:{title:"Select an option",size:"medium",disabled:!1,inline:!1,fullWidth:!1,items:[{label:"Item 1",value:"item1"},{label:"Item 2",value:"item2"},{label:"Item 3",value:"item3",disabled:!0},{label:"Item 4",value:"item4"}]},argTypes:{size:{description:"Size of the dropdown",control:"inline-radio",options:R},disabled:{description:"Whether the dropdown is disabled",control:"boolean"},inline:{description:"Whether the dropdown has inline styling",control:"boolean"},fullWidth:{description:"Whether the dropdown takes full width",control:"boolean"},label:{description:"Label for the dropdown",control:"text"},errorMessage:{description:"Error message to display",control:"text"},warningMessage:{description:"Warning message to display",control:"text"},hideLabel:{description:"Hide the label visually",control:"boolean"},state:{description:"State of the dropdown",control:"inline-radio",options:q}},render:e=>{const[a,v]=t.useState(null);return l.jsx(n,{...e,value:a,onChange:g=>{J("onChange")(g),v(g)}})}},r={args:{id:"playground-dropdown",label:"Select Option",errorMessage:"Error Message",warningMessage:"Warning Message"}},s={render:()=>l.jsx("div",{className:"gap-lg flex flex-col",children:R.map(e=>{const[a,v]=t.useState(null);return l.jsx(n,{id:`dropdown-${e}`,title:`Select ${e} option`,label:`${e.charAt(0).toUpperCase()+e.slice(1)} Size`,size:e,value:a,onChange:v,items:[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"}]},e)})})},o={render:()=>{const[e,a]=t.useState(null);return l.jsx(n,{id:"error-dropdown",title:"Select country",label:"Country",size:"medium",state:"error",value:e,onChange:a,errorMessage:"Please select a valid country",items:[{label:"Germany",value:"de"},{label:"France",value:"fr"},{label:"Spain",value:"es"},{label:"Italy",value:"it"}]})}},i={render:()=>{const[e,a]=t.useState("legacy");return l.jsx(n,{id:"warning-dropdown",title:"Select version",label:"Version",size:"medium",state:"warning",value:e,onChange:a,warningMessage:"This version will be deprecated soon",items:[{label:"Version 3.0 (Latest)",value:"v3"},{label:"Version 2.0 (Legacy)",value:"legacy"},{label:"Version 1.0 (Deprecated)",value:"v1",disabled:!0}]})}},d={args:{id:"disabled-dropdown",title:"Cannot select",label:"Status",disabled:!0,size:"medium",value:"inactive",items:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"},{label:"Pending",value:"pending"}]}},u={render:()=>{const[e,a]=t.useState("option1");return l.jsx("div",{className:"w-[400px]",children:l.jsx(n,{id:"fullwidth-dropdown",title:"Select an option",label:"Full Width Dropdown",size:"medium",fullWidth:!0,value:e,onChange:a,items:[{label:"First Option",value:"option1"},{label:"Second Option",value:"option2"},{label:"Third Option",value:"option3"}]})})}},c={render:()=>{const[e,a]=t.useState("normal");return l.jsxs("div",{className:"gap-lg flex items-center",children:[l.jsx("span",{className:"typography-body-small",children:"Sort by:"}),l.jsx(n,{id:"inline-dropdown",title:"Select sorting",size:"medium",inline:!0,value:e,onChange:a,items:[{label:"Name (A-Z)",value:"name_asc"},{label:"Name (Z-A)",value:"name_desc"},{label:"Date (Newest)",value:"date_desc"},{label:"Date (Oldest)",value:"date_asc"},{label:"Normal",value:"normal"}]})]})}},p={render:()=>{const[e,a]=t.useState(null);return l.jsx(n,{id:"no-label-dropdown",title:"Select an option",size:"medium",value:e,onChange:a,items:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}]})}},m={render:()=>{const[e,a]=t.useState(null);return l.jsx(n,{id:"hidden-label-dropdown",title:"Select preference",label:"User Preference",hideLabel:!0,size:"medium",value:e,onChange:a,items:[{label:"Dark Mode",value:"dark"},{label:"Light Mode",value:"light"},{label:"Auto",value:"auto"}]})}},b={render:()=>{const[e,a]=t.useState("available");return l.jsx(n,{id:"mixed-items-dropdown",title:"Select status",label:"Availability",size:"medium",value:e,onChange:a,items:[{label:"Available",value:"available"},{label:"Busy",value:"busy"},{label:"Away (Coming Soon)",value:"away",disabled:!0},{label:"Do Not Disturb",value:"dnd"},{label:"Offline (Deprecated)",value:"offline",disabled:!0}]})}};var h,S,w;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: "playground-dropdown",
    label: "Select Option",
    errorMessage: "Error Message",
    warningMessage: "Warning Message"
  }
}`,...(w=(S=r.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var f,y,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="gap-lg flex flex-col">
      {InputSizes.map(size => {
      const [value, setValue] = useState<string | null>(null);
      return <Dropdown key={size} id={\`dropdown-\${size}\`} title={\`Select \${size} option\`} label={\`\${size.charAt(0).toUpperCase() + size.slice(1)} Size\`} size={size} value={value} onChange={setValue} items={[{
        label: "Option 1",
        value: "opt1"
      }, {
        label: "Option 2",
        value: "opt2"
      }, {
        label: "Option 3",
        value: "opt3"
      }]} />;
    })}
    </div>
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var V,D,z;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>(null);
    return <Dropdown id="error-dropdown" title="Select country" label="Country" size="medium" state="error" value={value} onChange={setValue} errorMessage="Please select a valid country" items={[{
      label: "Germany",
      value: "de"
    }, {
      label: "France",
      value: "fr"
    }, {
      label: "Spain",
      value: "es"
    }, {
      label: "Italy",
      value: "it"
    }]} />;
  }
}`,...(z=(D=o.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var C,W,O;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>("legacy");
    return <Dropdown id="warning-dropdown" title="Select version" label="Version" size="medium" state="warning" value={value} onChange={setValue} warningMessage="This version will be deprecated soon" items={[{
      label: "Version 3.0 (Latest)",
      value: "v3"
    }, {
      label: "Version 2.0 (Legacy)",
      value: "legacy"
    }, {
      label: "Version 1.0 (Deprecated)",
      value: "v1",
      disabled: true
    }]} />;
  }
}`,...(O=(W=i.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var k,A,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: "disabled-dropdown",
    title: "Cannot select",
    label: "Status",
    disabled: true,
    size: "medium",
    value: "inactive",
    items: [{
      label: "Active",
      value: "active"
    }, {
      label: "Inactive",
      value: "inactive"
    }, {
      label: "Pending",
      value: "pending"
    }]
  }
}`,...(M=(A=d.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var N,I,j;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>("option1");
    return <div className="w-[400px]">
        <Dropdown id="fullwidth-dropdown" title="Select an option" label="Full Width Dropdown" size="medium" fullWidth value={value} onChange={setValue} items={[{
        label: "First Option",
        value: "option1"
      }, {
        label: "Second Option",
        value: "option2"
      }, {
        label: "Third Option",
        value: "option3"
      }]} />
      </div>;
  }
}`,...(j=(I=u.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var L,_,F;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>("normal");
    return <div className="gap-lg flex items-center">
        <span className="typography-body-small">Sort by:</span>
        <Dropdown id="inline-dropdown" title="Select sorting" size="medium" inline value={value} onChange={setValue} items={[{
        label: "Name (A-Z)",
        value: "name_asc"
      }, {
        label: "Name (Z-A)",
        value: "name_desc"
      }, {
        label: "Date (Newest)",
        value: "date_desc"
      }, {
        label: "Date (Oldest)",
        value: "date_asc"
      }, {
        label: "Normal",
        value: "normal"
      }]} />
      </div>;
  }
}`,...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var E,P,$;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>(null);
    return <Dropdown id="no-label-dropdown" title="Select an option" size="medium" value={value} onChange={setValue} items={[{
      label: "Option A",
      value: "a"
    }, {
      label: "Option B",
      value: "b"
    }, {
      label: "Option C",
      value: "c"
    }]} />;
  }
}`,...($=(P=p.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var T,B,U;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>(null);
    return <Dropdown id="hidden-label-dropdown" title="Select preference" label="User Preference" hideLabel size="medium" value={value} onChange={setValue} items={[{
      label: "Dark Mode",
      value: "dark"
    }, {
      label: "Light Mode",
      value: "light"
    }, {
      label: "Auto",
      value: "auto"
    }]} />;
  }
}`,...(U=(B=m.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var Z,H,G;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>("available");
    return <Dropdown id="mixed-items-dropdown" title="Select status" label="Availability" size="medium" value={value} onChange={setValue} items={[{
      label: "Available",
      value: "available"
    }, {
      label: "Busy",
      value: "busy"
    }, {
      label: "Away (Coming Soon)",
      value: "away",
      disabled: true
    }, {
      label: "Do Not Disturb",
      value: "dnd"
    }, {
      label: "Offline (Deprecated)",
      value: "offline",
      disabled: true
    }]} />;
  }
}`,...(G=(H=b.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};const oe=["Playground","Sizes","WithError","WithWarning","Disabled","FullWidth","Inline","WithoutLabel","WithHiddenLabel","WithDisabledItems"];export{d as Disabled,u as FullWidth,c as Inline,r as Playground,s as Sizes,b as WithDisabledItems,o as WithError,m as WithHiddenLabel,i as WithWarning,p as WithoutLabel,oe as __namedExportsOrder,se as default};
