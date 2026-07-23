import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Do as n,P as r,fo as i,t as a}from"./iframe-Da97yqFL.js";var o,s,c,l,u,d;e((()=>{a(),o=t(n(),1),s=i(),c=[{id:`role`,label:`Role`,options:[{value:`owner`,label:`Owner`},{value:`manager`,label:`Manager`},{value:`member`,label:`Member`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`invited`,label:`Invited`}]}],l={title:`Display & Data/DataTable/TableFilter`,component:r,decorators:[e=>(0,s.jsx)(`div`,{className:`bg-background p-lg rounded-md`,style:{width:420},children:(0,s.jsx)(`div`,{className:`flex justify-end`,children:(0,s.jsx)(e,{})})})]},u={render:()=>{let[e,t]=(0,o.useState)({role:[`owner`]});return(0,s.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,s.jsx)(r,{groups:c,value:e,onValueChange:t}),(0,s.jsxs)(`span`,{className:`typography-body-small text-text-accent`,children:[Object.values(e).flat().length,` active`]})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<TableFilterValue>({
      role: ["owner"]
    });
    return <div className="gap-md flex items-center">
        <TableFilter groups={groups} value={value} onValueChange={setValue} />
        <span className="typography-body-small text-text-accent">
          {Object.values(value).flat().length} active
        </span>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Playground`]}))();export{u as Playground,d as __namedExportsOrder,l as default};