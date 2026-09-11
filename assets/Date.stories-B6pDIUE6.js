import{n as e}from"./chunk-jRWAZmH_.js";import{Io as t,Zo as n,mn as r,t as i}from"./iframe-BikmupxW.js";import{n as a,t as o}from"./figmaDesign-CO6i5n9C.js";var s,c,l,u,d;e((()=>{n(),i(),a(),s=t(),c={parameters:{design:o(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2394-7026&m=dev`)},title:`Inputs & Controls/DatePicker/Date`,component:r,tags:[`autodocs`],argTypes:{day:{control:`number`},state:{control:`select`,options:[`default`,`disabled`,`clicked`,`range-selected`,`range-selected-left`,`range-selected-right`,`today`]},onClick:{control:{disable:!0}}}},l={args:{day:15,state:`default`,onClick:()=>console.log(`Date clicked`)}},u={parameters:{controls:{disable:!0}},render:()=>(0,s.jsxs)(`div`,{className:`gap-md flex flex-col`,children:[(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{day:17,state:`default`,onClick:()=>console.log(`default clicked`)}),(0,s.jsx)(`span`,{className:`text-text-secondary text-xs`,children:`Default`})]}),(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{day:17,state:`clicked`,onClick:()=>console.log(`clicked clicked`)}),(0,s.jsx)(`span`,{className:`text-text-secondary text-xs`,children:`Clicked`})]}),(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{day:17,state:`range-selected`,onClick:()=>console.log(`range selected clicked`)}),(0,s.jsx)(`span`,{className:`text-text-secondary text-xs`,children:`Range Selected`})]}),(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{day:17,state:`range-selected-left`,onClick:()=>console.log(`range selected left clicked`)}),(0,s.jsx)(`span`,{className:`text-text-secondary text-xs`,children:`Range Selected Left`})]}),(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{day:17,state:`range-selected-right`,onClick:()=>console.log(`range selected right clicked`)}),(0,s.jsx)(`span`,{className:`text-text-secondary text-xs`,children:`Range Selected Right`})]}),(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{day:17,state:`disabled`,onClick:()=>console.log(`disabled clicked`)}),(0,s.jsx)(`span`,{className:`text-text-secondary text-xs`,children:`Disabled`})]}),(0,s.jsxs)(`div`,{className:`gap-sm flex items-center`,children:[(0,s.jsx)(r,{day:17,state:`today`,onClick:()=>console.log(`today clicked`)}),(0,s.jsx)(`span`,{className:`text-text-secondary text-xs`,children:`Today`})]})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    day: 15,
    state: "default",
    onClick: () => console.log("Date clicked")
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    return <div className="gap-md flex flex-col">
        <div className="gap-sm flex items-center">
          <Date day={17} state="default" onClick={() => console.log("default clicked")} />
          <span className="text-text-secondary text-xs">Default</span>
        </div>
        <div className="gap-sm flex items-center">
          <Date day={17} state="clicked" onClick={() => console.log("clicked clicked")} />
          <span className="text-text-secondary text-xs">Clicked</span>
        </div>
        <div className="gap-sm flex items-center">
          <Date day={17} state="range-selected" onClick={() => console.log("range selected clicked")} />
          <span className="text-text-secondary text-xs">Range Selected</span>
        </div>
        <div className="gap-sm flex items-center">
          <Date day={17} state="range-selected-left" onClick={() => console.log("range selected left clicked")} />
          <span className="text-text-secondary text-xs">
            Range Selected Left
          </span>
        </div>
        <div className="gap-sm flex items-center">
          <Date day={17} state="range-selected-right" onClick={() => console.log("range selected right clicked")} />
          <span className="text-text-secondary text-xs">
            Range Selected Right
          </span>
        </div>
        <div className="gap-sm flex items-center">
          <Date day={17} state="disabled" onClick={() => console.log("disabled clicked")} />
          <span className="text-text-secondary text-xs">Disabled</span>
        </div>
        <div className="gap-sm flex items-center">
          <Date day={17} state="today" onClick={() => console.log("today clicked")} />
          <span className="text-text-secondary text-xs">Today</span>
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}},d=[`Playground`,`Overview`]}))();export{u as Overview,l as Playground,d as __namedExportsOrder,c as default};