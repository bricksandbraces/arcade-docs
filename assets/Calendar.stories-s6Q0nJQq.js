import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-0yr9KlQE.js";import{C as j,f as o}from"./ColorPicker-BjT5yyPB.js";import"./NumberInput-CRMkQufQ.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./index-ChaIqHV-.js";const q={title:"Components/DatePicker/Calendar",component:o,argTypes:{variant:{control:"inline-radio",options:j}}},n={args:{variant:"single"},render:e=>{const[t,a]=c.useState(),[C,v]=c.useState(),h=l=>{a(l)},f=l=>{v(l)};return d.jsx(o,{...e,selectedDate:t,selectedRange:C,onDateSelect:h,onRangeSelect:f})}},r={args:{variant:"single"},render:e=>{const[t,a]=c.useState();return d.jsx(o,{...e,selectedDate:t,onDateSelect:a})}},s={args:{variant:"range"},render:e=>{const[t,a]=c.useState();return d.jsx(o,{...e,selectedRange:t,onRangeSelect:a})}};var g,S,i;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "single"
  },
  render: args => {
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [selectedRange, setSelectedRange] = useState<[Date, Date]>();
    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
    };
    const handleRangeSelect = (range: [Date, Date]) => {
      setSelectedRange(range);
    };
    return <Calendar {...args} selectedDate={selectedDate} selectedRange={selectedRange} onDateSelect={handleDateSelect} onRangeSelect={handleRangeSelect} />;
  }
}`,...(i=(S=n.parameters)==null?void 0:S.docs)==null?void 0:i.source}}};var D,m,p;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "single"
  },
  render: args => {
    const [selectedDate, setSelectedDate] = useState<Date>();
    return <Calendar {...args} selectedDate={selectedDate} onDateSelect={setSelectedDate} />;
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,R,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "range"
  },
  render: args => {
    const [selectedRange, setSelectedRange] = useState<[Date, Date]>();
    return <Calendar {...args} selectedRange={selectedRange} onRangeSelect={setSelectedRange} />;
  }
}`,...(x=(R=s.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};const w=["Playground","Single","Range"];export{n as Playground,s as Range,r as Single,w as __namedExportsOrder,q as default};
