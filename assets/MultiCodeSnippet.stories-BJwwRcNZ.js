import{n as e}from"./chunk-jRWAZmH_.js";import{$o as t,ms as n,t as r,yr as i,z as a}from"./iframe-BHshPtOU.js";import{n as o,t as s}from"./figmaDesign-CO6i5n9C.js";var c,l,u,d,f,p,m;e((()=>{r(),n(),o(),c=t(),l=`import React, { useState, useEffect } from "react";
import { Button } from "./Button";

interface UserProps {
  id: string;
  name: string;
  email: string;
}

export const UserComponent: React.FC<UserProps> = ({ id, name, email }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserProps | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(\`/api/users/\${id}\`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h2>{name}</h2>
      <p>{email}</p>
      <Button onClick={() => console.log("Edit user")}>Edit Profile</Button>
    </div>
  );
};`,u={title:`Display & Data/CodeSnippet/MultiCodeSnippet`,component:a,tags:[`autodocs`],argTypes:{disableLineWrapping:{control:`boolean`,description:`When true, long lines stay on one line and the snippet scrolls horizontally instead of wrapping.`},showLineNumbers:{control:`boolean`},collapsedLineCount:{control:{type:`number`,min:1,max:40}},scrollerMaxHeight:{control:`text`},defaultState:{control:`inline-radio`,options:[`collapsed`,`expanded`]}},parameters:{layout:`padded`,design:s(`https://www.figma.com/design/xkNZGbjGlGt3gFpuMWrdge/Arcade-Design-System?node-id=2464-13843`),docs:{description:{component:`Multi-line code block with syntax highlighting and a copy button. Use in docs and walkthroughs for longer code examples.`}}}},d={args:{code:l,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`280px`,disableLineWrapping:!1,showLineNumbers:!0}},f={render:()=>(0,c.jsxs)(`div`,{className:`gap-xlg flex max-w-3xl flex-col`,children:[(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`p`,{className:`typography-body-small text-text`,children:`280px height - wrapping (default)`}),(0,c.jsx)(a,{code:l,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`280px`})]}),(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`p`,{className:`typography-body-small text-text`,children:`280px height - disableLineWrapping`}),(0,c.jsx)(a,{code:l,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`280px`,disableLineWrapping:!0})]}),(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`p`,{className:`typography-body-small text-text`,children:`64px height - wrapping (default)`}),(0,c.jsx)(a,{code:l,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`64px`})]}),(0,c.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,c.jsx)(`p`,{className:`typography-body-small text-text`,children:`64px height - disableLineWrapping`}),(0,c.jsx)(a,{code:l,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`64px`,disableLineWrapping:!0})]})]})},p={render:()=>(0,c.jsx)(i,{})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    code: sampleCode,
    language: "typescript",
    defaultState: "collapsed",
    collapsedLineCount: 6,
    scrollerMaxHeight: "280px",
    disableLineWrapping: false,
    showLineNumbers: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-xlg flex max-w-3xl flex-col">
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">
          280px height - wrapping (default)
        </p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="280px" />
      </div>
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">
          280px height - disableLineWrapping
        </p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="280px" disableLineWrapping />
      </div>
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">
          64px height - wrapping (default)
        </p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="64px" />
      </div>
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">
          64px height - disableLineWrapping
        </p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="64px" disableLineWrapping />
      </div>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <MultiCodeSnippetSkeleton />
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Playground`,`Skeleton`]}))();export{d as Default,f as Playground,p as Skeleton,m as __namedExportsOrder,u as default};