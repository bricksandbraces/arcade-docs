import{bO as V,bP as E,bQ as v}from"./ContextMenu-DwPyJibk.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const M={title:"Fabian Supervision/TextEditor",component:V,parameters:{layout:"padded",docs:{description:{component:"Full rich-text editor powered by TipTap: history (undo/redo), clipboard (cut/copy/paste), inline formatting (bold/italic/underline/strikethrough), font family + size dropdowns, text color (via the Arcade ColorPicker) and alignment. Known font families are lazy-loaded from Google Fonts."}}},argTypes:{value:{control:"text"},defaultValue:{control:"text"},placeholder:{control:"text"},disabled:{control:"boolean"},fonts:{control:"object"},fontSizes:{control:"object"},features:{control:"object"},className:{control:"text"}}},k=`
<p><strong>Dear Mr. Klonsdorf,</strong></p>
<p></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rhoncus ligula, et mollis libero. Quisque dolor neque, volutpat a efficitur a, malesuada vitae orci. Curabitur feugiat sagittis libero, ut volutpat nulla dignissim non. In ac felis a odio tristique congue.</p>
<p></p>
<p>Ut purus libero, commodo vel vulputate ullamcorper, fringilla vel risus. Donec sagittis, dolor eu semper ullamcorper, metus dolor feugiat diam, vitae porttitor mauris massa nec massa.</p>
<p></p>
<p>Sincerely</p>
<p></p>
<p>Hendrik Ulbrich</p>
`.trim(),e={args:{placeholder:"Start writing your document...",defaultValue:k,disabled:!1,fonts:[...v],fontSizes:[...E]}},a={args:{placeholder:"Start writing...",defaultValue:""}},o={args:{defaultValue:"<p>This editor is disabled. Toolbar actions are suppressed.</p>",disabled:!0}},r={args:{defaultValue:"<p>Only two font families are exposed in this instance.</p>",fonts:["Hanken Grotesk","Roboto"]}},t={args:{defaultValue:"<p>Font, size, color and alignment are hidden — only history, clipboard and inline formatting remain.</p>",features:{fontFamily:!1,fontSize:!1,color:!1,alignment:!1}}},n={args:{defaultValue:"<p>A bare-bones inline editor for short comments.</p>",placeholder:"Add a comment...",features:{history:!1,clipboard:!1,fontFamily:!1,fontSize:!1,color:!1,alignment:!1}},parameters:{docs:{description:{story:"Feature flags can reduce the toolbar to a single group — here only bold/italic/underline/strike remain."}}}};var s,i,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: "Start writing your document...",
    defaultValue: SAMPLE_LETTER,
    disabled: false,
    fonts: [...FontFamilies],
    fontSizes: [...FontSizes]
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: "Start writing...",
    defaultValue: ""
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>This editor is disabled. Toolbar actions are suppressed.</p>",
    disabled: true
  }
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>Only two font families are exposed in this instance.</p>",
    fonts: ["Hanken Grotesk", "Roboto"]
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,S,F;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>Font, size, color and alignment are hidden — only history, clipboard and inline formatting remain.</p>",
    features: {
      fontFamily: false,
      fontSize: false,
      color: false,
      alignment: false
    }
  }
}`,...(F=(S=t.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var x,z,T;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>A bare-bones inline editor for short comments.</p>",
    placeholder: "Add a comment...",
    features: {
      history: false,
      clipboard: false,
      fontFamily: false,
      fontSize: false,
      color: false,
      alignment: false
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Feature flags can reduce the toolbar to a single group — here only bold/italic/underline/strike remain."
      }
    }
  }
}`,...(T=(z=n.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const C=["Playground","Empty","Disabled","LimitedFonts","MinimalFormattingOnly","CommentBoxShape"];export{n as CommentBoxShape,o as Disabled,a as Empty,r as LimitedFonts,t as MinimalFormattingOnly,e as Playground,C as __namedExportsOrder,M as default};
