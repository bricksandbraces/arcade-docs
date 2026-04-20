import{M as D}from"./ContextMenuList-BJdKMI3z.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-CY-HDqYb.js";import"./index-A6zbrgSY.js";import"./index-DWvd7WUe.js";import"./index-BDYMFBcC.js";import"./index-ZRCHFLd-.js";import"./sizes-BpUsT7VU.js";import"./colors-CoOIoG7W.js";const o=`import React, { useState, useEffect } from 'react';
import { Button } from './Button';

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
        console.error('Failed to fetch user data:', error);
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
      <Button onClick={() => console.log('Edit user')}>
        Edit Profile
      </Button>
    </div>
  );
};`,B=`const greeting = 'Hello, World!';
console.log(greeting);`,N={title:"WIP Components/CodeSnippet/MultiCodeSnippet",component:D,argTypes:{code:{control:"text"},language:{control:"text"},defaultOpen:{control:"boolean"},onToggle:{action:"toggled"},onCopy:{action:"copied"}},args:{code:o,language:"typescript",defaultOpen:!1}},e={args:{code:o,language:"typescript",defaultOpen:!1}},n={args:{code:o,language:"typescript",defaultOpen:!1}},t={args:{code:o,language:"typescript",defaultOpen:!0}},a={args:{code:B,language:"javascript",defaultOpen:!1}},s={args:{code:`{
  "name": "arcade-design-system",
  "version": "1.0.0",
  "description": "A modern React component library",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "rollup -c",
    "test": "jest",
    "storybook": "storybook dev -p 6006"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "class-variance-authority": "^0.7.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0"
  }
}`,language:"json",defaultOpen:!1}},r={args:{code:`# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Generate documentation
npm run docs:generate

# Deploy to staging
npm run deploy:staging

# Check bundle size
npm run analyze

# Lint and format code
npm run lint:fix
npm run format`,language:"bash",defaultOpen:!1}};var d,p,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    code: longCode,
    language: "typescript",
    defaultOpen: false
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,l,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    code: longCode,
    language: "typescript",
    defaultOpen: false
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,g,f;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    code: longCode,
    language: "typescript",
    defaultOpen: true
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,C,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    code: shortCode,
    language: "javascript",
    defaultOpen: false
  }
}`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var h,O,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    code: \`{
  "name": "arcade-design-system",
  "version": "1.0.0",
  "description": "A modern React component library",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "rollup -c",
    "test": "jest",
    "storybook": "storybook dev -p 6006"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "class-variance-authority": "^0.7.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0"
  }
}\`,
    language: "json",
    defaultOpen: false
  }
}`,...(S=(O=s.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var b,x,j;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    code: \`# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Generate documentation
npm run docs:generate

# Deploy to staging
npm run deploy:staging

# Check bundle size
npm run analyze

# Lint and format code
npm run lint:fix
npm run format\`,
    language: "bash",
    defaultOpen: false
  }
}`,...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const w=["Playground","Closed","Open","ShortCode","JSONExample","BashCommands"];export{r as BashCommands,n as Closed,s as JSONExample,t as Open,e as Playground,a as ShortCode,w as __namedExportsOrder,N as default};
