import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ds as n,F as r,P as i,fs as a,t as o}from"./iframe-Dq9HnTRB.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h,g,_,v;e((()=>{o(),l=t(n(),1),s(),u=a(),d=[{id:`role`,label:`Role`,options:[{value:`owner`,label:`Owner`},{value:`manager`,label:`Manager`},{value:`member`,label:`Member`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`invited`,label:`Invited`}]}],f={parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=5356-1249&m=dev`)},title:`Display & Data/DataTable/TableFilter`,component:i,decorators:[e=>(0,u.jsx)(`div`,{className:`bg-background p-lg rounded-md`,style:{width:420},children:(0,u.jsx)(`div`,{className:`flex justify-end`,children:(0,u.jsx)(e,{})})})]},p={render:()=>{let[e,t]=(0,l.useState)({role:[`owner`]});return(0,u.jsxs)(`div`,{className:`gap-md flex items-center`,children:[(0,u.jsx)(i,{groups:d,value:e,onValueChange:t}),(0,u.jsxs)(`span`,{className:`typography-body-small text-text-accent`,children:[Object.values(e).flat().length,` active`]})]})}},m=[{id:`employmentType`,label:`Employment Type`,options:[{value:`internal`,label:`Internal`},{value:`external`,label:`External`}]},{id:`role`,label:`Role`,options:[{value:`coach`,label:`Coach`},{value:`administration`,label:`Administration`},{value:`studioHost`,label:`Studio Host`},{value:`reception`,label:`Reception`},{value:`cleaning`,label:`Cleaning`}]},{id:`status`,label:`Status`,options:[{value:`active`,label:`Active`},{value:`pending`,label:`Pending`},{value:`inactive`,label:`Inactive`}]},{id:`location`,label:`Location`,options:[{value:`mitte`,label:`Mitte`},{value:`neukoelln`,label:`Neukölln`},{value:`ostkreuz`,label:`Ostkreuz`}]}],h={render:()=>{let[e,t]=(0,l.useState)({employmentType:[`internal`],role:[`coach`]});return(0,u.jsx)(`div`,{style:{minHeight:480},children:(0,u.jsx)(i,{appearance:`badges`,groups:m,value:e,onValueChange:t,defaultOpen:!0})})}},g={render:()=>{let[e,t]=(0,l.useState)({employmentType:[`internal`],role:[`coach`]});return(0,u.jsx)(i,{appearance:`badges`,groups:m,value:e,onValueChange:t})}},_={render:()=>{let[e,t]=(0,l.useState)({});return(0,u.jsx)(`div`,{style:{width:448},children:(0,u.jsx)(r,{groups:[m[0],{id:`role`,label:`Role`,options:[`Coach`,`Administration`,`Studio Host`,`Reception`,`Cleaning`,`Physiotherapy`,`Nutrition`,`Front Desk`].map(e=>({value:e.toLowerCase(),label:e}))},{id:`shift`,label:`Shift`,options:[`Morning`,`Midday`,`Evening`,`Night`,`Weekend`].map(e=>({value:e.toLowerCase(),label:e}))}],value:e,onValueChange:t})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<TableFilterValue>({
      employmentType: ["internal"],
      role: ["coach"]
    });
    return <TableFilter appearance="badges" groups={badgeGroups} value={value} onValueChange={setValue} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`The sections on their own, for a surface that already exists - a dialog that
sets the filters of a saved view, say. A facet with more options than fit on
a line folds the rest behind a counter that opens them; the second facet has
exactly one option too many and shows it instead, since the counter would
take the same room and say less.`,..._.parameters?.docs?.description}}},v=[`Playground`,`Badges`,`BadgesCollapsedTrigger`,`SectionsWithFoldedOptions`]}))();export{h as Badges,g as BadgesCollapsedTrigger,p as Playground,_ as SectionsWithFoldedOptions,v as __namedExportsOrder,f as default};