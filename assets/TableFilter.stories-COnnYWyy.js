import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ao as n,P as r,ho as i,t as a}from"./iframe-CoSOMK-m.js";var o,s,c,l,u,d,f,p,m;e((()=>{a(),o=t(n(),1),s=i(),c=[{id:`role`,label:`Role`,options:[{value:`owner`,label:`Owner`},{value:`manager`,label:`Manager`},{value:`member`,label:`Member`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`invited`,label:`Invited`}]}],l={title:`Display & Data/DataTable/TableFilter`,component:r,decorators:[e=>(0,s.jsx)(`div`,{className:`bg-background p-lg rounded-md`,style:{width:420},children:(0,s.jsx)(`div`,{className:`flex justify-end`,children:(0,s.jsx)(e,{})})})]},u={render:()=>{let[e,t]=(0,o.useState)({role:[`owner`]});return(0,s.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,s.jsx)(r,{groups:c,value:e,onValueChange:t}),(0,s.jsxs)(`span`,{className:`typography-body-small text-text-accent`,children:[Object.values(e).flat().length,` active`]})]})}},d=[{id:`employmentType`,label:`Employment Type`,options:[{value:`internal`,label:`Internal`},{value:`external`,label:`External`}]},{id:`role`,label:`Role`,options:[{value:`coach`,label:`Coach`},{value:`administration`,label:`Administration`},{value:`studioHost`,label:`Studio Host`},{value:`reception`,label:`Reception`},{value:`cleaning`,label:`Cleaning`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`pending`,label:`Pending`},{value:`inactive`,label:`Inactive`}]},{id:`location`,label:`Location`,options:[{value:`mitte`,label:`Mitte`},{value:`neukoelln`,label:`Neukölln`},{value:`ostkreuz`,label:`Ostkreuz`}]}],f={render:()=>{let[e,t]=(0,o.useState)({employmentType:[`internal`],role:[`coach`]});return(0,s.jsx)(`div`,{style:{minHeight:480},children:(0,s.jsx)(r,{appearance:`badges`,groups:d,value:e,onValueChange:t,defaultOpen:!0})})}},p={render:()=>{let[e,t]=(0,o.useState)({employmentType:[`internal`],role:[`coach`]});return(0,s.jsx)(r,{appearance:`badges`,groups:d,value:e,onValueChange:t})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<TableFilterValue>({
      employmentType: ["internal"],
      role: ["coach"]
    });
    return <div style={{
      minHeight: 480
    }}>
        <TableFilter appearance="badges" groups={badgeGroups} value={value} onValueChange={setValue} defaultOpen />
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<TableFilterValue>({
      employmentType: ["internal"],
      role: ["coach"]
    });
    return <TableFilter appearance="badges" groups={badgeGroups} value={value} onValueChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}},m=[`Playground`,`Badges`,`BadgesCollapsedTrigger`]}))();export{f as Badges,p as BadgesCollapsedTrigger,u as Playground,m as __namedExportsOrder,l as default};