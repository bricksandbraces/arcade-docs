import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-CY-HDqYb.js";import{C as j,k as g}from"./ContextMenuList-DmfyMWZ0.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const w={title:"Components/DatePicker/Calendar",component:g,argTypes:{variant:{control:"inline-radio",options:j}}},l={args:{variant:"single"},render:a=>{const[r,n]=d.useState(),[S,s]=d.useState(),e=t=>{n(t)},k=t=>{if(t==null){s(void 0);return}s(t)},C=t=>{s([t,t])};return i.jsx(g,{...a,selectedDate:r,selectedRange:S,onDateSelect:e,onRangeSelect:k,onRangeStartSelect:C})}},c={args:{variant:"single"},render:a=>{const[r,n]=d.useState();return i.jsx(g,{...a,selectedDate:r,onDateSelect:n})}},o={args:{variant:"range"},render:a=>{const[r,n]=d.useState(),S=e=>{if(e==null){n(void 0);return}n(e)},s=e=>{n([e,e])};return i.jsx(g,{...a,selectedRange:r,onRangeSelect:S,onRangeStartSelect:s})}};var u,R,D;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(p=c.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,x,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const z=["Playground","Single","Range"];export{l as Playground,o as Range,c as Single,z as __namedExportsOrder,w as default};
