import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-CY-HDqYb.js";import{C as j,k as g}from"./ContextMenu-CxMNWebl.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const T={title:"Components/DatePicker/Calendar",component:g,argTypes:{variant:{control:"inline-radio",options:j}}},l={args:{variant:"single"},render:a=>{const[s,n]=o.useState(),[S,r]=o.useState(),e=t=>{n(t)},k=t=>{if(t==null){r(void 0);return}r(t)},C=t=>{r([t,t])};return i.jsx(g,{...a,selectedDate:s,selectedRange:S,onDateSelect:e,onRangeSelect:k,onRangeStartSelect:C})}},c={args:{variant:"single"},render:a=>{const[s,n]=o.useState();return i.jsx(g,{...a,selectedDate:s,onDateSelect:n})}},d={args:{variant:"range"},render:a=>{const[s,n]=o.useState(),S=e=>{if(e==null){n(void 0);return}n(e)},r=e=>{n([e,e])};return i.jsx(g,{...a,selectedRange:s,onRangeSelect:S,onRangeStartSelect:r})}};var u,R,D;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var m,p,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "single"
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedDate, setSelectedDate] = useState<Date>();
    return <Calendar {...args} selectedDate={selectedDate} onDateSelect={setSelectedDate} />;
  }
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,x,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const V=["Playground","Single","Range"];export{l as Playground,d as Range,c as Single,V as __namedExportsOrder,T as default};
