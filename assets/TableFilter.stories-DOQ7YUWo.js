import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{F as n,Fo as r,P as i,bo as a,t as o}from"./iframe-Bb-sKdHW.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{o(),s=t(r(),1),c=a(),l=[{id:`role`,label:`Role`,options:[{value:`owner`,label:`Owner`},{value:`manager`,label:`Manager`},{value:`member`,label:`Member`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`invited`,label:`Invited`}]}],u={title:`Display & Data/DataTable/TableFilter`,component:i,decorators:[e=>(0,c.jsx)(`div`,{className:`bg-background p-lg rounded-md`,style:{width:420},children:(0,c.jsx)(`div`,{className:`flex justify-end`,children:(0,c.jsx)(e,{})})})]},d={render:()=>{let[e,t]=(0,s.useState)({role:[`owner`]});return(0,c.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,c.jsx)(i,{groups:l,value:e,onValueChange:t}),(0,c.jsxs)(`span`,{className:`typography-body-small text-text-accent`,children:[Object.values(e).flat().length,` active`]})]})}},f=[{id:`employmentType`,label:`Employment Type`,options:[{value:`internal`,label:`Internal`},{value:`external`,label:`External`}]},{id:`role`,label:`Role`,options:[{value:`coach`,label:`Coach`},{value:`administration`,label:`Administration`},{value:`studioHost`,label:`Studio Host`},{value:`reception`,label:`Reception`},{value:`cleaning`,label:`Cleaning`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`pending`,label:`Pending`},{value:`inactive`,label:`Inactive`}]},{id:`location`,label:`Location`,options:[{value:`mitte`,label:`Mitte`},{value:`neukoelln`,label:`Neukölln`},{value:`ostkreuz`,label:`Ostkreuz`}]}],p={render:()=>{let[e,t]=(0,s.useState)({employmentType:[`internal`],role:[`coach`]});return(0,c.jsx)(`div`,{style:{minHeight:480},children:(0,c.jsx)(i,{appearance:`badges`,groups:f,value:e,onValueChange:t,defaultOpen:!0})})}},m={render:()=>{let[e,t]=(0,s.useState)({employmentType:[`internal`],role:[`coach`]});return(0,c.jsx)(i,{appearance:`badges`,groups:f,value:e,onValueChange:t})}},h={render:()=>{let[e,t]=(0,s.useState)({});return(0,c.jsx)(`div`,{style:{width:448},children:(0,c.jsx)(n,{groups:[f[0],{id:`role`,label:`Role`,options:[`Coach`,`Administration`,`Studio Host`,`Reception`,`Cleaning`,`Physiotherapy`,`Nutrition`,`Front Desk`].map(e=>({value:e.toLowerCase(),label:e}))},{id:`shift`,label:`Shift`,options:[`Morning`,`Midday`,`Evening`,`Night`,`Weekend`].map(e=>({value:e.toLowerCase(),label:e}))}],value:e,onValueChange:t})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<TableFilterValue>({
      employmentType: ["internal"],
      role: ["coach"]
    });
    return <TableFilter appearance="badges" groups={badgeGroups} value={value} onValueChange={setValue} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<TableFilterValue>({});
    const groups = [badgeGroups[0], {
      id: "role",
      label: "Role",
      options: ["Coach", "Administration", "Studio Host", "Reception", "Cleaning", "Physiotherapy", "Nutrition", "Front Desk"].map(label => ({
        value: label.toLowerCase(),
        label
      }))
    }, {
      id: "shift",
      label: "Shift",
      options: ["Morning", "Midday", "Evening", "Night", "Weekend"].map(label => ({
        value: label.toLowerCase(),
        label
      }))
    }];
    return <div style={{
      width: 448
    }}>
        <TableFilterSections groups={groups} value={value} onValueChange={setValue} />
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`The sections on their own, for a surface that already exists - a dialog that
sets the filters of a saved view, say. A facet with more options than fit on
a line folds the rest behind a counter that opens them; the second facet has
exactly one option too many and shows it instead, since the counter would
take the same room and say less.`,...h.parameters?.docs?.description}}},g=[`Playground`,`Badges`,`BadgesCollapsedTrigger`,`SectionsWithFoldedOptions`]}))();export{p as Badges,m as BadgesCollapsedTrigger,d as Playground,h as SectionsWithFoldedOptions,g as __namedExportsOrder,u as default};