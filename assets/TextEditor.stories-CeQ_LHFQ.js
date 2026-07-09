import{n as e}from"./chunk-jRWAZmH_.js";import{_t as t,gt as n,t as r,vt as i}from"./iframe-YNLnN9QT.js";var a,o,s,c,l,u,d,f,p;e((()=>{r(),a={title:`Inputs & Controls/TextEditor`,component:i,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Full rich-text editor powered by TipTap: history (undo/redo), clipboard, inline formatting (bold/italic/underline/strikethrough), font family + size dropdowns, text color (via the Arcade ColorPicker) and alignment. Known font families are lazy-loaded from Google Fonts.`}}},argTypes:{value:{control:`text`},defaultValue:{control:`text`},placeholder:{control:`text`},disabled:{control:`boolean`},fonts:{control:`object`},fontSizes:{control:`object`},features:{control:`object`},className:{control:`text`}}},o=`<p><strong>Dear Mr. Klonsdorf,</strong></p>
<p></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rhoncus ligula, et mollis libero. Quisque dolor neque, volutpat a efficitur a, malesuada vitae orci. Curabitur feugiat sagittis libero, ut volutpat nulla dignissim non. In ac felis a odio tristique congue.</p>
<p></p>
<p>Ut purus libero, commodo vel vulputate ullamcorper, fringilla vel risus. Donec sagittis, dolor eu semper ullamcorper, metus dolor feugiat diam, vitae porttitor mauris massa nec massa.</p>
<p></p>
<p>Sincerely</p>
<p></p>
<p>Hendrik Ulbrich</p>`,s={args:{placeholder:`Start writing your document...`,defaultValue:o,disabled:!1,fonts:[...n],fontSizes:[...t]}},c={args:{placeholder:`Start writing...`,defaultValue:``}},l={args:{defaultValue:`<p>This editor is disabled. Toolbar actions are suppressed.</p>`,disabled:!0}},u={args:{defaultValue:`<p>Only two font families are exposed in this instance.</p>`,fonts:[`Hanken Grotesk`,`Roboto`]}},d={args:{defaultValue:`<p>Font, size, color and alignment are hidden — only history, clipboard and inline formatting remain.</p>`,features:{fontFamily:!1,fontSize:!1,color:!1,alignment:!1}}},f={args:{defaultValue:`<p>A bare-bones inline editor for short comments.</p>`,placeholder:`Add a comment...`,features:{history:!1,clipboard:!1,fontFamily:!1,fontSize:!1,color:!1,alignment:!1}},parameters:{docs:{description:{story:`Feature flags can reduce the toolbar to a single group — here only bold/italic/underline/strike remain.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Start writing your document...",
    defaultValue: SAMPLE_LETTER,
    disabled: false,
    fonts: [...FontFamilies],
    fontSizes: [...FontSizes]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Start writing...",
    defaultValue: ""
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>This editor is disabled. Toolbar actions are suppressed.</p>",
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>Only two font families are exposed in this instance.</p>",
    fonts: ["Hanken Grotesk", "Roboto"]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>Font, size, color and alignment are hidden — only history, clipboard and inline formatting remain.</p>",
    features: {
      fontFamily: false,
      fontSize: false,
      color: false,
      alignment: false
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Playground`,`Empty`,`Disabled`,`LimitedFonts`,`MinimalFormattingOnly`,`CommentBoxShape`]}))();export{f as CommentBoxShape,l as Disabled,c as Empty,u as LimitedFonts,d as MinimalFormattingOnly,s as Playground,p as __namedExportsOrder,a as default};