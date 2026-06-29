import{n as e}from"./chunk-jRWAZmH_.js";import{Bn as t,F as n,So as r,so as i,t as a}from"./iframe-B16uoxlA.js";var o,s,c,l,u,d,f;e((()=>{a(),r(),o=i(),s=`import React, { useState, useEffect } from "react";
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
};`,c={title:`Display & Data/CodeSnippet/MultiCodeSnippet`,component:n,tags:[`autodocs`],argTypes:{disableLineWrapping:{control:`boolean`,description:`When true, long lines stay on one line and the snippet scrolls horizontally instead of wrapping.`},showLineNumbers:{control:`boolean`},collapsedLineCount:{control:{type:`number`,min:1,max:40}},scrollerMaxHeight:{control:`text`},defaultState:{control:`inline-radio`,options:[`collapsed`,`expanded`]}},parameters:{layout:`padded`,docs:{description:{component:`Multi-line code block with syntax highlighting and a copy button. Use in docs and walkthroughs for longer code examples.`}}}},l={args:{code:s,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`280px`,disableLineWrapping:!1,showLineNumbers:!0}},u={render:()=>(0,o.jsxs)(`div`,{className:`gap-xlg flex max-w-3xl flex-col`,children:[(0,o.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,o.jsx)(`p`,{className:`typography-body-small text-text`,children:`280px height — wrapping (default)`}),(0,o.jsx)(n,{code:s,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`280px`})]}),(0,o.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,o.jsx)(`p`,{className:`typography-body-small text-text`,children:`280px height — disableLineWrapping`}),(0,o.jsx)(n,{code:s,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`280px`,disableLineWrapping:!0})]}),(0,o.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,o.jsx)(`p`,{className:`typography-body-small text-text`,children:`64px height — wrapping (default)`}),(0,o.jsx)(n,{code:s,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`64px`})]}),(0,o.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,o.jsx)(`p`,{className:`typography-body-small text-text`,children:`64px height — disableLineWrapping`}),(0,o.jsx)(n,{code:s,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`64px`,disableLineWrapping:!0})]})]})},d={render:()=>(0,o.jsx)(t,{})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    code: sampleCode,
    language: "typescript",
    defaultState: "collapsed",
    collapsedLineCount: 6,
    scrollerMaxHeight: "280px",
    disableLineWrapping: false,
    showLineNumbers: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-xlg flex max-w-3xl flex-col">
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">
          280px height — wrapping (default)
        </p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="280px" />
      </div>
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">
          280px height — disableLineWrapping
        </p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="280px" disableLineWrapping />
      </div>
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">
          64px height — wrapping (default)
        </p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="64px" />
      </div>
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">
          64px height — disableLineWrapping
        </p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="64px" disableLineWrapping />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <MultiCodeSnippetSkeleton />
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Playground`,`Skeleton`]}))();export{l as Default,u as Playground,d as Skeleton,f as __namedExportsOrder,c as default};