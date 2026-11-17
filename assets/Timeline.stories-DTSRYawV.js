import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{$a as n,Da as r,Dt as i,Fc as a,Fs as o,Ji as s,Jo as c,Ma as l,Ni as u,Oo as d,Pi as f,Ui as p,bc as m,lo as h,t as g,uo as _}from"./iframe-D2hLWV5X.js";import{n as v,t as y}from"./figmaDesign-DLesXS3c.js";function b({id:e}){let[t,n]=(0,x.useState)(`0`);return(0,S.jsx)(i,{id:e,label:`Delay`,hideLabel:!0,inline:!0,size:`small`,options:w,value:t,onChange:n,reserveInlineNotificationHeight:!1,triggerClassName:`pl-md pr-sm`})}var x,S,C,w,T,E,D,O,k,A;e((()=>{g(),n(),x=t(a(),1),v(),S=m(),C=(0,S.jsx)(r,{title:`Step actions`,size:`small`,trigger:(0,S.jsx)(l,{size:`small`,ariaLabel:`Step actions`,className:`!rounded-sm after:!rounded-sm`}),items:[{label:`Edit`,icon:c},{label:`Delete`,icon:h,danger:!0,showDivider:!0}]}),w=[{value:`0`,label:`Right away`},{value:`1`,label:`After 1 day`},{value:`2`,label:`After 2 days`},{value:`7`,label:`After 7 days`}],T={title:`Components/Timeline`,component:u,tags:[`autodocs`],parameters:{design:y(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6342-272`),docs:{description:{component:"Vertical sequence of events or steps. Each item sits on a rail with a tinted icon tile and a connector line to the next item; the last item ends the line. Items highlight on hover and reveal an optional trailing action. Pass `href` or `onClick` to make the whole row interactive."}}},args:{icon:(0,S.jsx)(_,{"aria-hidden":!0}),color:`red`,title:`Title`,info:`Info`,badge:(0,S.jsx)(s,{type:`inline`,color:`red`,children:`Badge`}),description:`Description`},argTypes:{icon:{control:!1},badge:{control:!1},action:{control:!1},children:{control:!1},color:{control:{type:`select`},options:p}},decorators:[e=>(0,S.jsx)(`div`,{className:`w-[400px]`,children:(0,S.jsx)(e,{})})]},E={render:e=>(0,S.jsxs)(f,{children:[(0,S.jsx)(u,{...e,action:C,children:(0,S.jsx)(b,{id:`playground-delay-1`})}),(0,S.jsx)(u,{...e,action:C,children:(0,S.jsx)(b,{id:`playground-delay-2`})}),(0,S.jsx)(u,{...e,action:C,children:(0,S.jsx)(b,{id:`playground-delay-3`})})]})},D={parameters:{controls:{disable:!0}},render:()=>(0,S.jsx)(f,{footer:(0,S.jsx)(o,{kind:`ghost-compact`,size:`small`,label:`Show more`}),children:[1,2,3,4,5].map(e=>(0,S.jsx)(u,{icon:(0,S.jsx)(_,{"aria-hidden":!0}),color:`red`,title:`Title`,info:`Info`,badge:(0,S.jsx)(s,{type:`inline`,color:`red`,children:`Badge`}),description:`Description`,action:C,children:(0,S.jsx)(b,{id:`footer-delay-${e}`})},e))})},O={parameters:{controls:{disable:!0}},render:()=>(0,S.jsxs)(f,{children:[(0,S.jsx)(u,{icon:(0,S.jsx)(d,{"aria-hidden":!0}),color:`blue`,title:`Welcome email`,info:`Sent`,description:`Opens the email details`,href:`#welcome`}),(0,S.jsx)(u,{icon:(0,S.jsx)(d,{"aria-hidden":!0}),color:`green`,title:`Follow-up email`,info:`Scheduled`,description:`Opens the email details`,onClick:()=>void 0,action:C}),(0,S.jsx)(u,{icon:(0,S.jsx)(d,{"aria-hidden":!0}),color:`gray`,title:`Reminder`,info:`Draft`,description:`Opens the email details`,onClick:()=>void 0})]})},k={parameters:{controls:{disable:!0}},render:()=>(0,S.jsx)(f,{children:p.map(e=>(0,S.jsx)(u,{icon:(0,S.jsx)(_,{"aria-hidden":!0}),color:e,title:e},e))})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <Timeline>
      <TimelineItem {...args} action={action}>
        <DelayField id="playground-delay-1" />
      </TimelineItem>
      <TimelineItem {...args} action={action}>
        <DelayField id="playground-delay-2" />
      </TimelineItem>
      <TimelineItem {...args} action={action}>
        <DelayField id="playground-delay-3" />
      </TimelineItem>
    </Timeline>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Timeline footer={<Button kind="ghost-compact" size="small" label="Show more" />}>
      {[1, 2, 3, 4, 5].map(step => <TimelineItem key={step} icon={<IconSquareRounded aria-hidden />} color="red" title="Title" info="Info" badge={<Badge type="inline" color="red">
              Badge
            </Badge>} description="Description" action={action}>
          <DelayField id={\`footer-delay-\${step}\`} />
        </TimelineItem>)}
    </Timeline>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Timeline>
      <TimelineItem icon={<IconMail aria-hidden />} color="blue" title="Welcome email" info="Sent" description="Opens the email details" href="#welcome" />
      <TimelineItem icon={<IconMail aria-hidden />} color="green" title="Follow-up email" info="Scheduled" description="Opens the email details" onClick={() => undefined} action={action} />
      <TimelineItem icon={<IconMail aria-hidden />} color="gray" title="Reminder" info="Draft" description="Opens the email details" onClick={() => undefined} />
    </Timeline>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Timeline>
      {ProductIconColors.map(color => <TimelineItem key={color} icon={<IconSquareRounded aria-hidden />} color={color} title={color} />)}
    </Timeline>
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`WithFooter`,`Interactive`,`Colors`]}))();export{k as Colors,O as Interactive,E as Playground,D as WithFooter,A as __namedExportsOrder,T as default};