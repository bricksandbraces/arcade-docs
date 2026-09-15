import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Fn as n,Pn as r,os as i,t as a,xs as o}from"./iframe-CVgNtwa1.js";import{n as s,t as c}from"./figmaDesign-CO6i5n9C.js";var l,u,d,f,p,m,h;e((()=>{l=t(o(),1),a(),s(),u=i(),d={title:`Inputs & Controls/DatePicker/Calendar`,component:r,tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:n}},parameters:{design:c(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2394-7026&m=dev`),docs:{description:{component:`Month grid for picking a single date or a range. Use inside a popover for date inputs, or standalone for scheduling views.`}}}},f={args:{variant:`single`},render:e=>{let[t,n]=(0,l.useState)(),[i,a]=(0,l.useState)(),o=e=>{n(e)},s=e=>{if(e==null){a(void 0);return}a(e)},c=e=>{a([e,e])};return(0,u.jsx)(r,{...e,selectedDate:t,selectedRange:i,onDateSelect:o,onRangeSelect:s,onRangeStartSelect:c})}},p={args:{variant:`single`},render:e=>{let[t,n]=(0,l.useState)();return(0,u.jsx)(r,{...e,selectedDate:t,onDateSelect:n})}},m={args:{variant:`range`},render:e=>{let[t,n]=(0,l.useState)(),i=e=>{if(e==null){n(void 0);return}n(e)},a=e=>{n([e,e])};return(0,u.jsx)(r,{...e,selectedRange:t,onRangeSelect:i,onRangeStartSelect:a})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "single"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDate, setSelectedDate] = useState<Date>();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRange, setSelectedRange] = useState<[Date, Date] | undefined>();
    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
    };
    const handleRangeSelect = (range: [Date, Date] | null | undefined) => {
      if (range === null || range === undefined) {
        setSelectedRange(undefined);
        return;
      }
      setSelectedRange(range);
    };
    const handleRangeStartSelect = (date: Date) => {
      setSelectedRange([date, date]);
    };
    return <Calendar {...args} selectedDate={selectedDate} selectedRange={selectedRange} onDateSelect={handleDateSelect} onRangeSelect={handleRangeSelect} onRangeStartSelect={handleRangeStartSelect} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "single"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDate, setSelectedDate] = useState<Date>();
    return <Calendar {...args} selectedDate={selectedDate} onDateSelect={setSelectedDate} />;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "range"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRange, setSelectedRange] = useState<[Date, Date] | undefined>();
    const handleRangeSelect = (range: [Date, Date] | null | undefined) => {
      if (range === null || range === undefined) {
        setSelectedRange(undefined);
        return;
      }
      setSelectedRange(range);
    };
    const handleRangeStartSelect = (date: Date) => {
      setSelectedRange([date, date]);
    };
    return <Calendar {...args} selectedRange={selectedRange} onRangeSelect={handleRangeSelect} onRangeStartSelect={handleRangeStartSelect} />;
  }
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Single`,`Range`]}))();export{f as Playground,m as Range,p as Single,h as __namedExportsOrder,d as default};