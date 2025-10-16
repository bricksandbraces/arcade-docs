import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{N as s}from"./ContextMenuList-iLopGvLG.js";import"./index-0yr9KlQE.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const O={title:"H/DatePicker/Date",component:s,argTypes:{day:{control:"number"},isSelected:{control:"boolean"},isToday:{control:"boolean"},isDisabled:{control:"boolean"},selectedPosition:{control:"inline-radio",options:["none","left","right","middle"]},onClick:{control:{disable:!0}}}},t={args:{day:15,isSelected:!1,isToday:!1,isDisabled:!1,selectedPosition:"none",onClick:()=>console.log("Date clicked")},render:x=>{const{selectedPosition:o,...n}=x;return e.jsx(s,{...n,selectedPosition:o==="none"?void 0:o})}},d={render:()=>e.jsx("div",{className:"gap-lg flex flex-col",children:e.jsxs("div",{className:"gap-md grid grid-cols-2 md:grid-cols-5",children:[e.jsxs("div",{className:"gap-xs flex flex-col items-center",children:[e.jsx(s,{day:15,onClick:()=>console.log("enabled clicked")}),e.jsx("span",{className:"text-text-secondary text-xs",children:"Default"})]}),e.jsxs("div",{className:"gap-xs flex flex-col items-center",children:[e.jsx(s,{day:16,isSelected:!0,onClick:()=>console.log("selected clicked")}),e.jsx("span",{className:"text-text-secondary text-xs",children:"Selected"})]}),e.jsxs("div",{className:"gap-xs flex flex-col items-center",children:[e.jsx(s,{day:17,isToday:!0,onClick:()=>console.log("today clicked")}),e.jsx("span",{className:"text-text-secondary text-xs",children:"Today"})]}),e.jsxs("div",{className:"gap-xs flex flex-col items-center",children:[e.jsx(s,{day:18,isDisabled:!0,onClick:()=>console.log("disabled clicked")}),e.jsx("span",{className:"text-text-secondary text-xs",children:"Disabled"})]}),e.jsxs("div",{className:"gap-xs flex flex-col items-center",children:[e.jsx(s,{day:19,selectedPosition:"left",onClick:()=>console.log("range start clicked")}),e.jsx("span",{className:"text-text-secondary text-xs",children:"Range Start"})]})]})})},c={render:()=>e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Base States"}),e.jsxs("div",{className:"gap-sm flex flex-wrap",children:[e.jsx(s,{day:15,onClick:()=>console.log("default")}),e.jsx(s,{day:16,isSelected:!0,onClick:()=>console.log("selected")}),e.jsx(s,{day:17,isToday:!0,onClick:()=>console.log("today")}),e.jsx(s,{day:18,isDisabled:!0,onClick:()=>console.log("disabled")})]})]}),e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Range Selection States"}),e.jsxs("div",{className:"gap-sm flex flex-wrap",children:[e.jsx(s,{day:19,selectedPosition:"left",onClick:()=>console.log("range start")}),e.jsx(s,{day:20,selectedPosition:"middle",onClick:()=>console.log("range middle")}),e.jsx(s,{day:21,selectedPosition:"right",onClick:()=>console.log("range end")})]})]}),e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Special Combinations"}),e.jsxs("div",{className:"gap-sm flex flex-wrap",children:[e.jsx(s,{day:22,isToday:!0,isSelected:!0,onClick:()=>console.log("today selected")}),e.jsx(s,{day:23,isToday:!0,selectedPosition:"left",onClick:()=>console.log("today range start")})]})]})]})},i={render:()=>e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Date Range Selection Example"}),e.jsxs("div",{className:"gap-xs flex",children:[e.jsx(s,{day:12,selectedPosition:"left",onClick:()=>console.log("start date")}),e.jsx(s,{day:13,selectedPosition:"middle",onClick:()=>console.log("middle date")}),e.jsx(s,{day:14,selectedPosition:"middle",onClick:()=>console.log("middle date")}),e.jsx(s,{day:15,selectedPosition:"right",onClick:()=>console.log("end date")}),e.jsx(s,{day:16,onClick:()=>console.log("available date")}),e.jsx(s,{day:17,isToday:!0,onClick:()=>console.log("today")})]}),e.jsx("p",{className:"text-text-secondary text-xs",children:"This shows how Date can be used in a calendar component with range selection"})]})},r={render:()=>{const x=Array.from({length:31},(a,m)=>m+1),o=15,n=[12,13,14,15],R=a=>{const m=a===o,g=n.includes(a);let l;return g&&(a===n[0]?l="left":a===n[n.length-1]?l="right":l="middle"),{isToday:m,selectedPosition:l,isSelected:g&&!l}};return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Calendar Grid Example"}),e.jsx("div",{className:"gap-xs grid grid-cols-7",children:x.map(a=>e.jsx(s,{day:a,...R(a),onClick:()=>console.log(`Day ${a} clicked`)},a))}),e.jsx("p",{className:"text-text-secondary text-xs",children:"Example showing Date components arranged in a calendar grid with today highlighting and range selection"})]})}};var p,y,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    day: 15,
    isSelected: false,
    isToday: false,
    isDisabled: false,
    selectedPosition: "none" as any,
    onClick: () => console.log("Date clicked")
  },
  render: args => {
    const {
      selectedPosition,
      ...restArgs
    } = args;
    return <Date {...restArgs} selectedPosition={selectedPosition as any === "none" ? undefined : selectedPosition} />;
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,u,k;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <div className="gap-lg flex flex-col">
        <div className="gap-md grid grid-cols-2 md:grid-cols-5">
          <div className="gap-xs flex flex-col items-center">
            <Date day={15} onClick={() => console.log("enabled clicked")} />
            <span className="text-text-secondary text-xs">Default</span>
          </div>

          <div className="gap-xs flex flex-col items-center">
            <Date day={16} isSelected onClick={() => console.log("selected clicked")} />
            <span className="text-text-secondary text-xs">Selected</span>
          </div>

          <div className="gap-xs flex flex-col items-center">
            <Date day={17} isToday onClick={() => console.log("today clicked")} />
            <span className="text-text-secondary text-xs">Today</span>
          </div>

          <div className="gap-xs flex flex-col items-center">
            <Date day={18} isDisabled onClick={() => console.log("disabled clicked")} />
            <span className="text-text-secondary text-xs">Disabled</span>
          </div>

          <div className="gap-xs flex flex-col items-center">
            <Date day={19} selectedPosition="left" onClick={() => console.log("range start clicked")} />
            <span className="text-text-secondary text-xs">Range Start</span>
          </div>
        </div>
      </div>;
  }
}`,...(k=(u=d.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var v,N,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <div className="gap-lg flex flex-col">
        <div className="gap-md flex flex-col">
          <h3 className="text-sm font-medium">Base States</h3>
          <div className="gap-sm flex flex-wrap">
            <Date day={15} onClick={() => console.log("default")} />
            <Date day={16} isSelected onClick={() => console.log("selected")} />
            <Date day={17} isToday onClick={() => console.log("today")} />
            <Date day={18} isDisabled onClick={() => console.log("disabled")} />
          </div>
        </div>

        <div className="gap-md flex flex-col">
          <h3 className="text-sm font-medium">Range Selection States</h3>
          <div className="gap-sm flex flex-wrap">
            <Date day={19} selectedPosition="left" onClick={() => console.log("range start")} />
            <Date day={20} selectedPosition="middle" onClick={() => console.log("range middle")} />
            <Date day={21} selectedPosition="right" onClick={() => console.log("range end")} />
          </div>
        </div>

        <div className="gap-md flex flex-col">
          <h3 className="text-sm font-medium">Special Combinations</h3>
          <div className="gap-sm flex flex-wrap">
            <Date day={22} isToday isSelected onClick={() => console.log("today selected")} />
            <Date day={23} isToday selectedPosition="left" onClick={() => console.log("today range start")} />
          </div>
        </div>
      </div>;
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var C,D,P;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <div className="gap-md flex flex-col">
        <h3 className="text-sm font-medium">Date Range Selection Example</h3>
        <div className="gap-xs flex">
          <Date day={12} selectedPosition="left" onClick={() => console.log("start date")} />
          <Date day={13} selectedPosition="middle" onClick={() => console.log("middle date")} />
          <Date day={14} selectedPosition="middle" onClick={() => console.log("middle date")} />
          <Date day={15} selectedPosition="right" onClick={() => console.log("end date")} />
          <Date day={16} onClick={() => console.log("available date")} />
          <Date day={17} isToday onClick={() => console.log("today")} />
        </div>
        <p className="text-text-secondary text-xs">
          This shows how Date can be used in a calendar component with range
          selection
        </p>
      </div>;
  }
}`,...(P=(D=i.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var S,b,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const daysInMonth = Array.from({
      length: 31
    }, (_, i) => i + 1);
    const today = 15;
    const selectedRange = [12, 13, 14, 15];
    const getPropsForDay = (day: number) => {
      const isToday = day === today;
      const isInRange = selectedRange.includes(day);
      let selectedPosition: "left" | "middle" | "right" | undefined;
      if (isInRange) {
        if (day === selectedRange[0]) selectedPosition = "left";else if (day === selectedRange[selectedRange.length - 1]) selectedPosition = "right";else selectedPosition = "middle";
      }
      return {
        isToday,
        selectedPosition,
        isSelected: isInRange && !selectedPosition
      };
    };
    return <div className="gap-md flex flex-col">
        <h3 className="text-sm font-medium">Calendar Grid Example</h3>
        <div className="gap-xs grid grid-cols-7">
          {daysInMonth.map(day => <Date key={day} day={day} {...getPropsForDay(day)} onClick={() => console.log(\`Day \${day} clicked\`)} />)}
        </div>
        <p className="text-text-secondary text-xs">
          Example showing Date components arranged in a calendar grid with today
          highlighting and range selection
        </p>
      </div>;
  }
}`,...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const B=["Playground","Overview","States","DateRange","CalendarGrid"];export{r as CalendarGrid,i as DateRange,d as Overview,t as Playground,c as States,B as __namedExportsOrder,O as default};
