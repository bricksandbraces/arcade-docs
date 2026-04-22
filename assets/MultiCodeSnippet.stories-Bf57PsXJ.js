import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ac as a}from"./ContextMenu-FljLXSaK.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";const s=`import React, { useState, useEffect } from "react";
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
};`,x={title:"Fabian Supervision/CodeSnippet/MultiCodeSnippet",component:a,parameters:{layout:"padded"}},t={render:()=>e.jsxs("div",{className:"gap-xlg flex max-w-3xl flex-col",children:[e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("p",{className:"typography-body-small text-text",children:"280px height"}),e.jsx(a,{code:s,language:"typescript",defaultState:"collapsed",collapsedLineCount:6,scrollerMaxHeight:"280px"})]}),e.jsxs("div",{className:"flex flex-col gap-sm",children:[e.jsx("p",{className:"typography-body-small text-text",children:"64px height"}),e.jsx(a,{code:s,language:"typescript",defaultState:"collapsed",collapsedLineCount:6,scrollerMaxHeight:"64px"})]})]})};var o,l,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="gap-xlg flex max-w-3xl flex-col">
      <div className="flex flex-col gap-sm">
        <p className="typography-body-small text-text">280px height</p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="280px" />
      </div>
      <div className="flex flex-col gap-sm">
        <p className="typography-body-small text-text">64px height</p>
        <MultiCodeSnippet code={sampleCode} language="typescript" defaultState="collapsed" collapsedLineCount={6} scrollerMaxHeight="64px" />
      </div>
    </div>
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const u=["Playground"];export{t as Playground,u as __namedExportsOrder,x as default};
