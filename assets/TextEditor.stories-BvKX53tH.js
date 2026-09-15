import{n as e}from"./chunk-jRWAZmH_.js";import{_t as t,gt as n,ht as r,t as i}from"./iframe-D-W_c7x8.js";import{n as a,t as o}from"./figmaDesign-CO6i5n9C.js";var s,c,l,u,d,f,p,m,h;e((()=>{i(),a(),s={title:`Inputs & Controls/TextEditor`,component:t,tags:[`autodocs`],parameters:{design:o(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2301-3619`),layout:`padded`,docs:{description:{component:`Full rich-text editor powered by TipTap: history (undo/redo), clipboard, inline formatting (bold/italic/underline/strikethrough), font family + size dropdowns, text color (via the Arcade ColorPicker) and alignment. Known font families are lazy-loaded from Google Fonts.`}}},argTypes:{value:{control:`text`},defaultValue:{control:`text`},placeholder:{control:`text`},disabled:{control:`boolean`},fonts:{control:`object`},fontSizes:{control:`object`},features:{control:`object`},className:{control:`text`}}},c=`<p><strong>Dear Mr. Klonsdorf,</strong></p>
<p></p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices rhoncus ligula, et mollis libero. Quisque dolor neque, volutpat a efficitur a, malesuada vitae orci. Curabitur feugiat sagittis libero, ut volutpat nulla dignissim non. In ac felis a odio tristique congue.</p>
<p></p>
<p>Ut purus libero, commodo vel vulputate ullamcorper, fringilla vel risus. Donec sagittis, dolor eu semper ullamcorper, metus dolor feugiat diam, vitae porttitor mauris massa nec massa.</p>
<p></p>
<p>Sincerely</p>
<p></p>
<p>Hendrik Ulbrich</p>`,l={args:{placeholder:`Start writing your document...`,defaultValue:c,disabled:!1,fonts:[...r],fontSizes:[...n]}},u={args:{placeholder:`Start writing...`,defaultValue:``}},d={args:{defaultValue:`<p>This editor is disabled. Toolbar actions are suppressed.</p>`,disabled:!0}},f={args:{defaultValue:`<p>Only two font families are exposed in this instance.</p>`,fonts:[`Hanken Grotesk`,`Roboto`]}},p={args:{defaultValue:`<p>Font, size, color and alignment are hidden - only history, clipboard and inline formatting remain.</p>`,features:{fontFamily:!1,fontSize:!1,color:!1,alignment:!1}}},m={args:{defaultValue:`<p>A bare-bones inline editor for short comments.</p>`,placeholder:`Add a comment...`,features:{history:!1,clipboard:!1,fontFamily:!1,fontSize:!1,color:!1,alignment:!1}},parameters:{docs:{description:{story:`Feature flags can reduce the toolbar to a single group - here only bold/italic/underline/strike remain.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Start writing your document...",
    defaultValue: SAMPLE_LETTER,
    disabled: false,
    fonts: [...FontFamilies],
    fontSizes: [...FontSizes]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Start writing...",
    defaultValue: ""
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>This editor is disabled. Toolbar actions are suppressed.</p>",
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>Only two font families are exposed in this instance.</p>",
    fonts: ["Hanken Grotesk", "Roboto"]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "<p>Font, size, color and alignment are hidden - only history, clipboard and inline formatting remain.</p>",
    features: {
      fontFamily: false,
      fontSize: false,
      color: false,
      alignment: false
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        story: "Feature flags can reduce the toolbar to a single group - here only bold/italic/underline/strike remain."
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Playground`,`Empty`,`Disabled`,`LimitedFonts`,`MinimalFormattingOnly`,`CommentBoxShape`]}))();export{m as CommentBoxShape,d as Disabled,u as Empty,f as LimitedFonts,p as MinimalFormattingOnly,l as Playground,h as __namedExportsOrder,s as default};