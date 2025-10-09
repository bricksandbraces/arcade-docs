import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-0yr9KlQE.js";import{C as v,i as c}from"./ContextMenuList-B2WBBjRu.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const T={title:"WIP Components/DatePicker/Calendar",component:c,argTypes:{variant:{control:"inline-radio",options:v}}},n={args:{variant:"single"},render:e=>{const[t,a]=o.useState(),[x,k]=o.useState(),f=l=>{a(l)},C=l=>{k(l)};return d.jsx(c,{...e,selectedDate:t,selectedRange:x,onDateSelect:f,onRangeSelect:C})}},s={args:{variant:"single"},render:e=>{const[t,a]=o.useState();return d.jsx(c,{...e,selectedDate:t,onDateSelect:a})}},r={args:{variant:"range"},render:e=>{const[t,a]=o.useState();return d.jsx(c,{...e,selectedRange:t,onRangeSelect:a})}};var g,i,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "single"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDate, setSelectedDate] = useState<Date>();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRange, setSelectedRange] = useState<[Date, Date]>();
    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
    };
    const handleRangeSelect = (range: [Date, Date]) => {
      setSelectedRange(range);
    };
    return <Calendar {...args} selectedDate={selectedDate} selectedRange={selectedRange} onDateSelect={handleDateSelect} onRangeSelect={handleRangeSelect} />;
  }
}`,...(S=(i=n.parameters)==null?void 0:i.docs)==null?void 0:S.source}}};var u,D,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "single"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDate, setSelectedDate] = useState<Date>();
    return <Calendar {...args} selectedDate={selectedDate} onDateSelect={setSelectedDate} />;
  }
}`,...(m=(D=s.parameters)==null?void 0:D.docs)==null?void 0:m.source}}};var p,R,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "range"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedRange, setSelectedRange] = useState<[Date, Date]>();
    return <Calendar {...args} selectedRange={selectedRange} onRangeSelect={setSelectedRange} />;
  }
}`,...(h=(R=r.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};const V=["Playground","Single","Range"];export{n as Playground,r as Range,s as Single,V as __namedExportsOrder,T as default};
