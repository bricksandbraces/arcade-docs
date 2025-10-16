import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{aA as s,aC as h,aD as f}from"./ContextMenuList-iLopGvLG.js";import"./index-0yr9KlQE.js";import{a as y}from"./index-B-lxVbXh.js";import"./index-tymuTqDW.js";import"./index-DotmK1FS.js";import"./index-ChaIqHV-.js";import"./borders-N_bRvfGw.js";import"./colors-mvAPBTAn.js";import"./v4-CtRu48qb.js";const r=o=>{y("onClick")(o)},l=o=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",className:o.className,children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 1v6m8-6v6"})]}),_={title:"WIP Components/Navigation/Item",component:s},i={args:{icon:l,title:"Navigation Item",state:"enabled",variant:"default",secondLevel:!1,open:!1,disabled:!1,onClick:r},argTypes:{state:{description:"The state of the navigation item",control:{type:"inline-radio"},options:f},variant:{description:"The variant of the navigation item",control:{type:"inline-radio"},options:h},secondLevel:{description:"Whether this is a second level navigation item",control:{type:"boolean"}},open:{description:"Whether the navigation item is open (for expandable items)",control:{type:"boolean"}},disabled:{description:"Whether the navigation item is disabled",control:{type:"boolean"}},onClick:{control:{disable:!0}},icon:{control:{disable:!0}}}},n=o=>{const x=h.flatMap(t=>f.map(a=>({variant:t,state:a})));return e.jsx("div",{className:"gap-lg grid grid-cols-2",children:x.map(({variant:t,state:a})=>{const u=`${t}-${a}`;return e.jsxs("div",{className:"gap-sm flex flex-col",children:[o.showLabels&&e.jsxs("p",{className:"typography-body-small text-text",children:["variant=",t,", state=",a]}),e.jsxs("div",{className:"gap-sm flex flex-col",children:[e.jsx(s,{icon:l,title:"Navigation Item",variant:t,state:a,onClick:r}),e.jsx(s,{icon:l,title:"Second Level",variant:t,state:a,secondLevel:!0,onClick:r})]})]},u)})})};n.args={showLabels:!0};n.__docgenInfo={description:"",methods:[],displayName:"Overview"};n.__docgenInfo={description:"",methods:[],displayName:"Overview"};var c,d,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    icon: SampleIcon,
    title: "Navigation Item",
    state: "enabled",
    variant: "default",
    secondLevel: false,
    open: false,
    disabled: false,
    onClick: clickAction
  },
  argTypes: {
    state: {
      description: "The state of the navigation item",
      control: {
        type: "inline-radio"
      },
      options: NavigationItemStates
    },
    variant: {
      description: "The variant of the navigation item",
      control: {
        type: "inline-radio"
      },
      options: NavigationItemVariants
    },
    secondLevel: {
      description: "Whether this is a second level navigation item",
      control: {
        type: "boolean"
      }
    },
    open: {
      description: "Whether the navigation item is open (for expandable items)",
      control: {
        type: "boolean"
      }
    },
    disabled: {
      description: "Whether the navigation item is disabled",
      control: {
        type: "boolean"
      }
    },
    onClick: {
      control: {
        disable: true
      }
    },
    icon: {
      control: {
        disable: true
      }
    }
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,v,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(args: any) => {
  const rows = NavigationItemVariants.flatMap(variant => NavigationItemStates.map(state => ({
    variant,
    state
  })));
  return <div className="gap-lg grid grid-cols-2">
      {rows.map(({
      variant,
      state
    }) => {
      const key = \`\${variant}-\${state}\`;
      return <div key={key} className="gap-sm flex flex-col">
            {args.showLabels && <p className="typography-body-small text-text">
                variant={variant}, state={state}
              </p>}
            <div className="gap-sm flex flex-col">
              <NavigationItem icon={SampleIcon} title="Navigation Item" variant={variant} state={state} onClick={clickAction} />
              <NavigationItem icon={SampleIcon} title="Second Level" variant={variant} state={state} secondLevel={true} onClick={clickAction} />
            </div>
          </div>;
    })}
    </div>;
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const T=["Playground","Overview"];export{n as Overview,i as Playground,T as __namedExportsOrder,_ as default};
