import{n as e}from"./chunk-jRWAZmH_.js";import{g as t}from"./iframe-ZXKnLi48.js";import{P as n,t as r}from"./src-4oLAFcVt.js";var i,a,o,s,c;e((()=>{r(),i=t(),a=`import React, { useState, useEffect } from "react";
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
};`,o={title:`Fabian Supervision/CodeSnippet/MultiCodeSnippet`,component:n,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Multi-line code block with syntax highlighting and a copy button. Use in docs and walkthroughs for longer code examples.`}}}},s={render:()=>(0,i.jsxs)(`div`,{className:`gap-xlg flex max-w-3xl flex-col`,children:[(0,i.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,i.jsx)(`p`,{className:`typography-body-small text-text`,children:`280px height`}),(0,i.jsx)(n,{code:a,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`280px`})]}),(0,i.jsxs)(`div`,{className:`gap-sm flex flex-col`,children:[(0,i.jsx)(`p`,{className:`typography-body-small text-text`,children:`64px height`}),(0,i.jsx)(n,{code:a,language:`typescript`,defaultState:`collapsed`,collapsedLineCount:6,scrollerMaxHeight:`64px`})]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="gap-xlg flex max-w-3xl flex-col">
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">280px height</p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="280px" />
      </div>
      <div className="gap-sm flex flex-col">
        <p className="typography-body-small text-text">64px height</p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="64px" />
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Playground`]}))();export{s as Playground,c as __namedExportsOrder,o as default};