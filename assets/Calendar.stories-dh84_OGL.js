import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{dn as n,io as r,t as i,un as a,yo as o}from"./iframe-CSdI4VNE.js";var s,c,l,u,d,f,p;e((()=>{s=t(o(),1),i(),c=r(),l={title:`Inputs & Controls/DatePicker/Calendar`,component:a,tags:[`autodocs`],argTypes:{variant:{control:`inline-radio`,options:n}},parameters:{docs:{description:{component:`Month grid for picking a single date or a range. Use inside a popover for date inputs, or standalone for scheduling views.`}}}},u={args:{variant:`single`},render:e=>{let[t,n]=(0,s.useState)(),[r,i]=(0,s.useState)(),o=e=>{n(e)},l=e=>{if(e==null){i(void 0);return}i(e)},u=e=>{i([e,e])};return(0,c.jsx)(a,{...e,selectedDate:t,selectedRange:r,onDateSelect:o,onRangeSelect:l,onRangeStartSelect:u})}},d={args:{variant:`single`},render:e=>{let[t,n]=(0,s.useState)();return(0,c.jsx)(a,{...e,selectedDate:t,onDateSelect:n})}},f={args:{variant:`range`},render:e=>{let[t,n]=(0,s.useState)(),r=e=>{if(e==null){n(void 0);return}n(e)},i=e=>{n([e,e])};return(0,c.jsx)(a,{...e,selectedRange:t,onRangeSelect:r,onRangeStartSelect:i})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "single"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDate, setSelectedDate] = useState<Date>();
    return <Calendar {...args} selectedDate={selectedDate} onDateSelect={setSelectedDate} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Single`,`Range`]}))();export{u as Playground,f as Range,d as Single,p as __namedExportsOrder,l as default};