import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-0yr9KlQE.js";import{o}from"./ContextMenuList-5laOttQ9.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";const R={title:"WIP Components/ColorPicker",component:o,argTypes:{value:{control:"text"},"aria-label":{control:"text"}}},a={render:s=>{const[n,r]=l.useState(s.value||"#0291FF");return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsx(o,{...s,value:n,onChange:r}),e.jsxs("div",{className:"gap-sm flex items-center",children:[e.jsx("span",{className:"text-sm",children:"Selected:"}),e.jsx("div",{className:"border-border h-6 w-6 rounded border",style:{backgroundColor:n||"#FFFFFF"}}),e.jsx("span",{className:"font-mono text-sm",children:n||"None"})]})]})},args:{value:"#0291FF","aria-label":"Color picker"}},t={render:()=>{const[s,n]=l.useState("#F04343"),[r,j]=l.useState("#10B981"),[i,k]=l.useState("#6366F1");return e.jsx("div",{className:"gap-lg flex flex-col",children:e.jsxs("div",{className:"gap-md grid grid-cols-1 md:grid-cols-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-xs text-sm font-medium",children:"Red Selection"}),e.jsx(o,{value:s,onChange:n}),e.jsxs("div",{className:"gap-xs mt-xs flex items-center text-xs",children:[e.jsx("div",{className:"h-4 w-4 rounded border border-gray-300",style:{backgroundColor:s}}),e.jsx("span",{className:"font-mono",children:s})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-xs text-sm font-medium",children:"Green Selection"}),e.jsx(o,{value:r,onChange:j}),e.jsxs("div",{className:"gap-xs mt-xs flex items-center text-xs",children:[e.jsx("div",{className:"h-4 w-4 rounded border border-gray-300",style:{backgroundColor:r}}),e.jsx("span",{className:"font-mono",children:r})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-xs text-sm font-medium",children:"Purple Selection"}),e.jsx(o,{value:i,onChange:k}),e.jsxs("div",{className:"gap-xs mt-xs flex items-center text-xs",children:[e.jsx("div",{className:"h-4 w-4 rounded border border-gray-300",style:{backgroundColor:i}}),e.jsx("span",{className:"font-mono",children:i})]})]})]})})}},c={render:()=>{const[s,n]=l.useState("#FFFFFF");return e.jsxs("div",{className:"gap-lg flex flex-col",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("h3",{className:"mb-sm text-lg font-medium",children:"Pick a color and see it applied"}),e.jsx(o,{value:s,onChange:n,"aria-label":"Interactive color picker demo"})]}),e.jsxs("div",{className:"gap-md flex flex-col items-center",children:[e.jsx("div",{className:"h-32 w-32 rounded-lg border border-gray-300 transition-colors duration-200",style:{backgroundColor:s}}),e.jsxs("div",{className:"gap-sm flex items-center",children:[e.jsx("span",{className:"text-sm font-medium",children:"Selected Color:"}),e.jsx("span",{className:"px-xs py-xxs rounded bg-gray-100 font-mono text-sm",children:s})]})]})]})}},d={render:()=>{const[s,n]=l.useState("#10B981");return e.jsxs("div",{className:"gap-md flex flex-col",children:[e.jsxs("div",{className:"bg-bg-secondary p-md rounded-md",children:[e.jsx("h3",{className:"mb-sm text-sm font-medium",children:"Keyboard Navigation Support"}),e.jsxs("ul",{className:"space-y-xs text-sm",children:[e.jsxs("li",{children:["•"," ",e.jsx("kbd",{className:"bg-bg-elevation px-xs py-xxs rounded text-xs",children:"Tab"})," ","- Focus the color grid or input field"]}),e.jsxs("li",{children:["•"," ",e.jsx("kbd",{className:"bg-bg-elevation px-xs py-xxs rounded text-xs",children:"Arrow keys"})," ","- Navigate between color tiles"]}),e.jsxs("li",{children:["•"," ",e.jsx("kbd",{className:"bg-bg-elevation px-xs py-xxs rounded text-xs",children:"Enter/Space"})," ","- Select focused color tile"]}),e.jsxs("li",{children:["•"," ",e.jsx("kbd",{className:"bg-bg-elevation px-xs py-xxs rounded text-xs",children:"Home/End"})," ","- Go to first/last color tile"]}),e.jsx("li",{children:"• Type hex values directly in the input field"})]})]}),e.jsxs("div",{className:"gap-sm flex items-start",children:[e.jsx(o,{value:s,onChange:n,"aria-label":"Accessible color picker with full keyboard navigation"}),e.jsxs("div",{className:"ml-md",children:[e.jsx("h4",{className:"mb-xs text-sm font-medium",children:"Accessibility Features:"}),e.jsxs("ul",{className:"space-y-xxs text-sm text-gray-600",children:[e.jsx("li",{children:"• Proper ARIA labels for screen readers"}),e.jsx("li",{children:"• Keyboard navigation support"}),e.jsx("li",{children:"• Focus management and visual indicators"}),e.jsx("li",{children:"• Color tile selection announcements"}),e.jsx("li",{children:"• Invalid hex input validation"})]})]})]}),e.jsx("div",{className:"text-text-secondary text-sm",children:e.jsx("p",{children:"Try navigating with your keyboard! The component supports full keyboard navigation with proper focus management and screen reader support."})})]})}};var m,x,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [selectedColor, setSelectedColor] = useState(args.value || "#0291FF");
    return <div className="gap-md flex flex-col">
        <ColorPicker {...args} value={selectedColor} onChange={setSelectedColor} />
        <div className="gap-sm flex items-center">
          <span className="text-sm">Selected:</span>
          <div className="border-border h-6 w-6 rounded border" style={{
          backgroundColor: selectedColor || "#FFFFFF"
        }} />
          <span className="font-mono text-sm">{selectedColor || "None"}</span>
        </div>
      </div>;
  },
  args: {
    value: "#0291FF",
    "aria-label": "Color picker"
  }
}`,...(p=(x=a.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var u,g,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [color1, setColor1] = useState("#F04343");
    const [color2, setColor2] = useState("#10B981");
    const [color3, setColor3] = useState("#6366F1");
    return <div className="gap-lg flex flex-col">
        <div className="gap-md grid grid-cols-1 md:grid-cols-3">
          <div>
            <h3 className="mb-xs text-sm font-medium">Red Selection</h3>
            <ColorPicker value={color1} onChange={setColor1} />
            <div className="gap-xs mt-xs flex items-center text-xs">
              <div className="h-4 w-4 rounded border border-gray-300" style={{
              backgroundColor: color1
            }} />
              <span className="font-mono">{color1}</span>
            </div>
          </div>
          <div>
            <h3 className="mb-xs text-sm font-medium">Green Selection</h3>
            <ColorPicker value={color2} onChange={setColor2} />
            <div className="gap-xs mt-xs flex items-center text-xs">
              <div className="h-4 w-4 rounded border border-gray-300" style={{
              backgroundColor: color2
            }} />
              <span className="font-mono">{color2}</span>
            </div>
          </div>
          <div>
            <h3 className="mb-xs text-sm font-medium">Purple Selection</h3>
            <ColorPicker value={color3} onChange={setColor3} />
            <div className="gap-xs mt-xs flex items-center text-xs">
              <div className="h-4 w-4 rounded border border-gray-300" style={{
              backgroundColor: color3
            }} />
              <span className="font-mono">{color3}</span>
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var b,h,N;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [selectedColor, setSelectedColor] = useState("#FFFFFF");
    return <div className="gap-lg flex flex-col">
        <div className="flex flex-col items-center">
          <h3 className="mb-sm text-lg font-medium">
            Pick a color and see it applied
          </h3>
          <ColorPicker value={selectedColor} onChange={setSelectedColor} aria-label="Interactive color picker demo" />
        </div>

        <div className="gap-md flex flex-col items-center">
          <div className="h-32 w-32 rounded-lg border border-gray-300 transition-colors duration-200" style={{
          backgroundColor: selectedColor
        }} />
          <div className="gap-sm flex items-center">
            <span className="text-sm font-medium">Selected Color:</span>
            <span className="px-xs py-xxs rounded bg-gray-100 font-mono text-sm">
              {selectedColor}
            </span>
          </div>
        </div>
      </div>;
  }
}`,...(N=(h=c.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var f,C,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [selectedColor, setSelectedColor] = useState("#10B981");
    return <div className="gap-md flex flex-col">
        <div className="bg-bg-secondary p-md rounded-md">
          <h3 className="mb-sm text-sm font-medium">
            Keyboard Navigation Support
          </h3>
          <ul className="space-y-xs text-sm">
            <li>
              •{" "}
              <kbd className="bg-bg-elevation px-xs py-xxs rounded text-xs">
                Tab
              </kbd>{" "}
              - Focus the color grid or input field
            </li>
            <li>
              •{" "}
              <kbd className="bg-bg-elevation px-xs py-xxs rounded text-xs">
                Arrow keys
              </kbd>{" "}
              - Navigate between color tiles
            </li>
            <li>
              •{" "}
              <kbd className="bg-bg-elevation px-xs py-xxs rounded text-xs">
                Enter/Space
              </kbd>{" "}
              - Select focused color tile
            </li>
            <li>
              •{" "}
              <kbd className="bg-bg-elevation px-xs py-xxs rounded text-xs">
                Home/End
              </kbd>{" "}
              - Go to first/last color tile
            </li>
            <li>• Type hex values directly in the input field</li>
          </ul>
        </div>

        <div className="gap-sm flex items-start">
          <ColorPicker value={selectedColor} onChange={setSelectedColor} aria-label="Accessible color picker with full keyboard navigation" />

          <div className="ml-md">
            <h4 className="mb-xs text-sm font-medium">
              Accessibility Features:
            </h4>
            <ul className="space-y-xxs text-sm text-gray-600">
              <li>• Proper ARIA labels for screen readers</li>
              <li>• Keyboard navigation support</li>
              <li>• Focus management and visual indicators</li>
              <li>• Color tile selection announcements</li>
              <li>• Invalid hex input validation</li>
            </ul>
          </div>
        </div>

        <div className="text-text-secondary text-sm">
          <p>
            Try navigating with your keyboard! The component supports full
            keyboard navigation with proper focus management and screen reader
            support.
          </p>
        </div>
      </div>;
  }
}`,...(y=(C=d.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const B=["Playground","Overview","InteractiveDemo","Accessibility"];export{d as Accessibility,c as InteractiveDemo,t as Overview,a as Playground,B as __namedExportsOrder,R as default};
