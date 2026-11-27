import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Bc as n,Eo as r,Hi as i,Ro as a,Wo as o,Ws as s,co as c,cs as l,ls as u,t as d,tl as f,zo as p}from"./iframe-bQfS6TRu.js";import{n as m,t as h}from"./figmaDesign-DLesXS3c.js";function g({children:e}){return(0,v.jsx)(`div`,{className:`w-[512px] max-w-full`,children:e})}var _,v,y,b,x,S,C,w,T;e((()=>{d(),c(),_=t(f(),1),m(),v=n(),y=[{value:`plan`,label:`Membership plan`,operators:[{value:`anyOf`,label:`is any of`,icon:o},{value:`noneOf`,label:`is none of`,icon:s}],valueType:`options`,options:[{value:`premium`,label:`Premium`},{value:`basic`,label:`Basic`},{value:`flex`,label:`Flex`}]},{value:`openAmount`,label:`Open amount`,operators:[{value:`over`,label:`is over`,icon:p},{value:`under`,label:`is under`,icon:a}],valueType:`number`,currency:`EUR`},{value:`failedPayment`,label:`Failed payment`,operators:[{value:`is`,label:`is`,icon:l}],valueType:`select`,options:[{value:`first`,label:`First`},{value:`repeated`,label:`Repeated`}]},{value:`tag`,label:`Tag`,operators:[{value:`is`,label:`is`,icon:l},{value:`isNot`,label:`is not`,icon:u}],valueType:`options`,creatable:!0,options:[{value:`student`,label:`Student`},{value:`family`,label:`Family`}],placeholder:`Search for a tag`},{value:`email`,label:`Email`,operators:[{value:`contains`,label:`contains`,icon:r},{value:`is`,label:`is`,icon:l}],valueType:`text`,placeholder:`name@example.com`},{value:`visits`,label:`Visits`,operators:[{value:`over`,label:`is over`,icon:p},{value:`under`,label:`is under`,icon:a}],valueType:`number`}],b=[{id:`g1`,conditions:[{id:`c1`,field:`plan`,operator:`anyOf`,value:``,values:[`premium`,`basic`]},{id:`c2`,field:`openAmount`,operator:`over`,value:``,values:[]},{id:`c3`,field:`failedPayment`,operator:`is`,value:`first`,values:[]}]},{id:`g2`,conditions:[{id:`c4`,field:`tag`,operator:`is`,value:``,values:[]}]},{id:`g3`,conditions:[{id:`c5`,field:`email`,operator:`contains`,value:``,values:[]},{id:`c6`,field:`visits`,operator:`over`,value:``,values:[]}]}],x={title:`Components/ConditionBuilder`,component:i,tags:[`autodocs`],globals:{backgrounds:{value:`background`}},parameters:{design:h(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=6352-4338`),docs:{description:{component:`Filter for an automation step. Each row tests one field; rows are joined with and, groups of rows with or. Clicking an and / or flips it.`}}},args:{fields:y,disabled:!1}},S={render:e=>{let[t,n]=(0,_.useState)(b);return(0,v.jsx)(g,{children:(0,v.jsx)(i,{...e,value:t,onChange:n})})}},C={render:e=>(0,v.jsx)(g,{children:(0,v.jsx)(i,{...e})})},w={args:{disabled:!0,defaultValue:b},render:e=>(0,v.jsx)(g,{children:(0,v.jsx)(i,{...e})})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ConditionBuilderValue>(filled);
    return <StoryFrame>
        <ConditionBuilder {...args} value={value} onChange={setValue} />
      </StoryFrame>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <StoryFrame>
      <ConditionBuilder {...args} />
    </StoryFrame>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: filled
  },
  render: args => <StoryFrame>
      <ConditionBuilder {...args} />
    </StoryFrame>
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`Empty`,`Disabled`]}))();export{w as Disabled,C as Empty,S as Playground,T as __namedExportsOrder,x as default};