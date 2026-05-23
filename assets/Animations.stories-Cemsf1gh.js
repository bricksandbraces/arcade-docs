import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ba as n,ga as r,go as i,ii as a,mt as o,ri as s,t as c,to as l,wt as u}from"./iframe-C5XezNRx.js";import{n as d,t as f}from"./react-DfR4QGQE.js";import{i as p,n as m}from"./storybook-B2wWtp8W.js";import{C as h,S as g,T as _,t as v,w as y}from"./docs-DL8zJxad.js";function b(e){return e.startsWith(`animation-duration-`)?`--${e}`:e.startsWith(`animation-ease-`)?`--ease-${e.replace(`animation-ease-`,``)}`:e===`animation-bounce`?`--animation-bounce`:``}var x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{x=t(i(),1),c(),S=t(n(),1),f(),v(),C=l(),w=[`animation-ease-accelerate-lg`,`animation-ease-accelerate-md`,`animation-ease-accelerate-sm`,`animation-ease-decelerate-lg`,`animation-ease-decelerate-md`,`animation-ease-decelerate-sm`,`animation-ease-ease`,`animation-ease-linear`,`animation-bounce`],T=.35,E=`fast-spatial-spring`,D=[`animation-duration-xs`,`animation-duration-sm`,`animation-duration-md`,`animation-duration-lg`,`animation-duration-xlg`,`animation-duration-2xlg`,`animation-duration-3xlg`],O=[{value:`translateX`,label:`Translate X`},{value:`translateY`,label:`Translate Y`},{value:`scale`,label:`Scale`},{value:`rotate`,label:`Rotate`},{value:`opacity`,label:`Opacity`},{value:`borderRadius`,label:`Border radius`}],k=[...w.map(e=>({value:e,label:e.replace(`animation-ease-`,``).replace(`animation-`,``)})),{value:E,label:`fast spatial spring`}],A=D.map(e=>({value:e,label:e.replace(`animation-duration-`,``)})),j=`grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]`,M={title:`Arcade Foundation/Animations`,parameters:{a11y:{test:`off`},chromatic:{disableSnapshot:!0}}},N=()=>{let[e,t]=(0,x.useState)(`translateX`),[n,i]=(0,x.useState)(`animation-ease-ease`),[c,l]=(0,x.useState)(`animation-duration-md`),[f,v]=(0,x.useState)(!1),[M,N]=(0,x.useState)(240),[P,F]=(0,x.useState)(72),[I,L]=(0,x.useState)(72),[R,z]=(0,x.useState)(120),[B,V]=(0,x.useState)(120),[H,U]=(0,x.useState)(1),[W,G]=(0,x.useState)(.25),[K,q]=(0,x.useState)(25),[J,Y]=(0,x.useState)(8),[X,Z]=(0,x.useState)(24),Q=(0,x.useMemo)(()=>{let t=getComputedStyle(document.documentElement),r=n===E,i=b(n),o=b(c),s=!r&&i?t.getPropertyValue(i).trim():``,l=o?a(t.getPropertyValue(o)):0;return{isFastSpatialSpring:r,easing:s,durationMs:l,cssTransition:r?`transition: { type: "spring", duration: ${(l/1e3).toFixed(3)}, bounce: ${T} };`:`transition: ${e} ${l}ms ${s};`}},[c,n,e]),ee=(0,x.useMemo)(()=>{let e=getComputedStyle(document.documentElement),t=D.map(t=>({property:`Duration`,cssToken:`--${t}`,value:e.getPropertyValue(`--${t}`).trim()})),n=w.map(t=>{let n=b(t);return{property:`Easing`,cssToken:n,value:e.getPropertyValue(n).trim()}}),r={property:`Easing`,cssToken:`fastSpatialSpring`,value:`spring transition (duration controlled)`};return[...t,...n,r]},[]),te=Q.easing?s(Q.easing):`linear`,$=Q.durationMs/1e3;function ne(){let t={x:0,y:0,width:P,height:I,scale:1,rotate:0,opacity:H,borderRadius:J};if(!f)return t;switch(e){case`translateX`:return{...t,x:M};case`translateY`:return{...t,y:M};case`scale`:return{...t,width:R,height:B};case`rotate`:return{...t,rotate:K};case`opacity`:return{...t,opacity:W};case`borderRadius`:return{...t,borderRadius:X}}}function re(){return e===`translateX`||e===`translateY`?(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-distance`,label:`Distance`,value:M,onValueChange:e=>N(e??0)})}):e===`scale`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-initial-width`,label:`Initial width`,value:P,min:1,onValueChange:e=>F(e??1)})}),(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-initial-height`,label:`Initial height`,value:I,min:1,onValueChange:e=>L(e??1)})}),(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-target-width`,label:`Target width`,value:R,min:1,onValueChange:e=>z(e??1)})}),(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-target-height`,label:`Target height`,value:B,min:1,onValueChange:e=>V(e??1)})})]}):e===`opacity`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-initial-opacity`,label:`Initial opacity`,value:H,min:0,max:1,step:.01,onValueChange:e=>U(e??0)})}),(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-target-opacity`,label:`Target opacity`,value:W,min:0,max:1,step:.01,onValueChange:e=>G(e??0)})})]}):e===`rotate`?(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-angle-change`,label:`Angle change`,value:K,onValueChange:e=>q(e??0)})}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-initial-border-radius`,label:`Initial border radius`,value:J,min:0,onValueChange:e=>Y(e??0)})}),(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(u,{id:`animation-target-border-radius`,label:`Target border radius`,value:X,min:0,onValueChange:e=>Z(e??0)})})]})}return(0,C.jsx)(`div`,{className:`gap-xlg text-text typography-body flex w-full min-w-0 flex-col`,children:(0,C.jsxs)(`div`,{className:`gap-xlg flex min-w-0 flex-col`,children:[(0,C.jsx)(m,{title:`Animation Tokens`,className:`px-[80px] pt-[80px] pb-[48px]`}),(0,C.jsx)(`div`,{className:`p-lg`,children:(0,C.jsx)(`div`,{className:`gap-lg -m-lg flex flex-col`,children:(0,C.jsx)(`div`,{className:g,children:(0,C.jsxs)(`div`,{className:h,children:[(0,C.jsxs)(`section`,{className:y,children:[(0,C.jsx)(`h2`,{className:`typography-headline-03 text-text mb-[24px] font-light`,children:`Token overview`}),(0,C.jsxs)(`div`,{role:`row`,className:(0,S.default)(_,j),children:[(0,C.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Property`}),(0,C.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`CSS Token`}),(0,C.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Value`})]}),(0,C.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:ee.map(e=>(0,C.jsxs)(`div`,{className:(0,S.default)(`border-border bg-background -mx-2xlg gap-lg px-2xlg py-lg border-component grid min-h-[80px] items-center rounded-lg border border-solid`,j),children:[(0,C.jsx)(`div`,{className:`min-w-0`,children:(0,C.jsx)(p,{text:e.property})}),(0,C.jsx)(`div`,{className:`min-w-0`,children:(0,C.jsx)(p,{text:e.cssToken})}),(0,C.jsx)(`div`,{className:`min-w-0`,children:(0,C.jsx)(p,{text:e.value})})]},`${e.property}-${e.cssToken}`))})]}),(0,C.jsxs)(`section`,{className:y,children:[(0,C.jsx)(`h2`,{className:`typography-headline-03 text-text mb-[24px] font-light`,children:`Playground`}),(0,C.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-0`,children:[(0,C.jsxs)(`div`,{className:`flex min-w-0 items-start justify-start gap-[24px]`,children:[(0,C.jsx)(`div`,{children:(0,C.jsx)(o,{id:`animation-property`,label:`Property`,options:O,value:e,onChange:e=>{(e===`translateX`||e===`translateY`||e===`scale`||e===`rotate`||e===`opacity`||e===`borderRadius`)&&t(e)}})}),(0,C.jsx)(`div`,{children:(0,C.jsx)(o,{id:`animation-easing`,label:`Easing`,options:k,value:n,onChange:e=>{typeof e==`string`&&i(e)}})}),(0,C.jsx)(`div`,{className:`w-[260px]`,children:(0,C.jsx)(o,{id:`animation-duration`,label:`Duration`,options:A,value:c,onChange:e=>{typeof e==`string`&&l(e)}})})]}),(0,C.jsx)(`div`,{className:`flex min-w-0 flex-wrap items-start justify-start gap-[24px]`,children:re()})]}),(0,C.jsxs)(`div`,{className:`gap-lg bg-background-app border-border border-component -mx-[32px] flex min-h-[360px] min-w-0 flex-col rounded-[20px] border border-solid p-[8px]`,children:[(0,C.jsx)(`div`,{className:`bg-background-accent border-border rounded-[12px] border-[0.5px] border-solid p-[16px]`,children:(0,C.jsxs)(`div`,{className:`gap-lg flex min-w-0 items-center justify-between`,children:[(0,C.jsxs)(`div`,{className:`gap-sm flex min-w-0 items-center`,children:[(0,C.jsx)(`div`,{className:`typography-label-semibold text-text shrink-0 font-semibold`,children:`Output:`}),(0,C.jsx)(p,{text:Q.cssTransition})]}),(0,C.jsx)(r,{label:f?`Reset`:`Animate`,onClick:()=>v(e=>!e)})]})}),(0,C.jsx)(`div`,{className:`flex min-w-0 flex-1 items-start justify-start p-[24px]`,children:(0,C.jsx)(d.div,{className:`bg-background-brand size-[72px] rounded-lg`,initial:!1,animate:ne(),transition:{...Q.isFastSpatialSpring?{type:`spring`,duration:$,bounce:T}:{duration:$,ease:te}}})})]})]})]})})})})]})})},N.__docgenInfo={description:``,methods:[],displayName:`Animations`},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [property, setProperty] = useState<PropertyId>("translateX");
  const [easingToken, setEasingToken] = useState("animation-ease-ease");
  const [durationToken, setDurationToken] = useState("animation-duration-md");
  const [active, setActive] = useState(false);
  const [distance, setDistance] = useState(240);
  const [initialWidth, setInitialWidth] = useState(72);
  const [initialHeight, setInitialHeight] = useState(72);
  const [targetWidth, setTargetWidth] = useState(120);
  const [targetHeight, setTargetHeight] = useState(120);
  const [initialOpacity, setInitialOpacity] = useState(1);
  const [targetOpacity, setTargetOpacity] = useState(0.25);
  const [angleChange, setAngleChange] = useState(25);
  const [initialBorderRadius, setInitialBorderRadius] = useState(8);
  const [targetBorderRadius, setTargetBorderRadius] = useState(24);
  const computed = useMemo(() => {
    const styles = getComputedStyle(document.documentElement);
    const isFastSpatialSpring = easingToken === FAST_SPATIAL_SPRING_EASING_ID;
    const easingVar = readTokenVar(easingToken);
    const durationVar = readTokenVar(durationToken);
    const easing = !isFastSpatialSpring && easingVar ? styles.getPropertyValue(easingVar).trim() : "";
    const durationMs = durationVar ? parseTimeString(styles.getPropertyValue(durationVar)) : 0;
    const cssTransition = isFastSpatialSpring ? \`transition: { type: "spring", duration: \${(durationMs / 1000).toFixed(3)}, bounce: \${FAST_SPATIAL_SPRING_BOUNCE} };\` : \`transition: \${property} \${durationMs}ms \${easing};\`;
    return {
      isFastSpatialSpring,
      easing,
      durationMs,
      cssTransition
    };
  }, [durationToken, easingToken, property]);
  const tokenRows = useMemo(() => {
    const styles = getComputedStyle(document.documentElement);
    const durationRows = durationOptions.map(token => ({
      property: "Duration",
      cssToken: \`--\${token}\`,
      value: styles.getPropertyValue(\`--\${token}\`).trim()
    }));
    const easingRows = easingOptions.map(token => {
      const cssToken = readTokenVar(token);
      return {
        property: "Easing",
        cssToken,
        value: styles.getPropertyValue(cssToken).trim()
      };
    });
    const springRow = {
      property: "Easing",
      cssToken: "fastSpatialSpring",
      value: "spring transition (duration controlled)"
    };
    return [...durationRows, ...easingRows, springRow];
  }, []);
  const ease = computed.easing ? parseCubicBezierString(computed.easing) : "linear";
  const durationSec = computed.durationMs / 1000;
  function resolveAnimate() {
    const initialState = {
      x: 0,
      y: 0,
      width: initialWidth,
      height: initialHeight,
      scale: 1,
      rotate: 0,
      opacity: initialOpacity,
      borderRadius: initialBorderRadius
    };
    if (!active) {
      return initialState;
    }
    switch (property) {
      case "translateX":
        return {
          ...initialState,
          x: distance
        };
      case "translateY":
        return {
          ...initialState,
          y: distance
        };
      case "scale":
        return {
          ...initialState,
          width: targetWidth,
          height: targetHeight
        };
      case "rotate":
        return {
          ...initialState,
          rotate: angleChange
        };
      case "opacity":
        return {
          ...initialState,
          opacity: targetOpacity
        };
      case "borderRadius":
        return {
          ...initialState,
          borderRadius: targetBorderRadius
        };
    }
  }
  function renderPropertyInputs() {
    if (property === "translateX" || property === "translateY") {
      return <div className="w-[260px]">
          <NumberInput id="animation-distance" label="Distance" value={distance} onValueChange={v => setDistance(v ?? 0)} />
        </div>;
    }
    if (property === "scale") {
      return <>
          <div className="w-[260px]">
            <NumberInput id="animation-initial-width" label="Initial width" value={initialWidth} min={1} onValueChange={v => setInitialWidth(v ?? 1)} />
          </div>
          <div className="w-[260px]">
            <NumberInput id="animation-initial-height" label="Initial height" value={initialHeight} min={1} onValueChange={v => setInitialHeight(v ?? 1)} />
          </div>
          <div className="w-[260px]">
            <NumberInput id="animation-target-width" label="Target width" value={targetWidth} min={1} onValueChange={v => setTargetWidth(v ?? 1)} />
          </div>
          <div className="w-[260px]">
            <NumberInput id="animation-target-height" label="Target height" value={targetHeight} min={1} onValueChange={v => setTargetHeight(v ?? 1)} />
          </div>
        </>;
    }
    if (property === "opacity") {
      return <>
          <div className="w-[260px]">
            <NumberInput id="animation-initial-opacity" label="Initial opacity" value={initialOpacity} min={0} max={1} step={0.01} onValueChange={v => setInitialOpacity(v ?? 0)} />
          </div>
          <div className="w-[260px]">
            <NumberInput id="animation-target-opacity" label="Target opacity" value={targetOpacity} min={0} max={1} step={0.01} onValueChange={v => setTargetOpacity(v ?? 0)} />
          </div>
        </>;
    }
    if (property === "rotate") {
      return <div className="w-[260px]">
          <NumberInput id="animation-angle-change" label="Angle change" value={angleChange} onValueChange={v => setAngleChange(v ?? 0)} />
        </div>;
    }
    return <>
        <div className="w-[260px]">
          <NumberInput id="animation-initial-border-radius" label="Initial border radius" value={initialBorderRadius} min={0} onValueChange={v => setInitialBorderRadius(v ?? 0)} />
        </div>
        <div className="w-[260px]">
          <NumberInput id="animation-target-border-radius" label="Target border radius" value={targetBorderRadius} min={0} onValueChange={v => setTargetBorderRadius(v ?? 0)} />
        </div>
      </>;
  }
  return <div className="gap-xlg text-text typography-body flex w-full min-w-0 flex-col">
      <div className="gap-xlg flex min-w-0 flex-col">
        <StorybookHeader title="Animation Tokens" className="px-[80px] pt-[80px] pb-[48px]" />
        <div className="p-lg">
          <div className="gap-lg -m-lg flex flex-col">
            <div className={colorDocsGroupedPanelClassName}>
              <div className={colorDocsGroupedPanelInnerClassName}>
                <section className={colorDocsGroupedSectionClassName}>
                  <h2 className="typography-headline-03 text-text mb-[24px] font-light">
                    Token overview
                  </h2>
                  <div role="row" className={cx(docsTableHeaderRowClassName, animationTokensTableGridColsClassName)}>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Property
                    </div>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      CSS Token
                    </div>
                    <div className="typography-label-semibold text-text min-w-0 truncate font-semibold">
                      Value
                    </div>
                  </div>
                  <div className="gap-sm flex flex-col" role="presentation">
                    {tokenRows.map(row => <div key={\`\${row.property}-\${row.cssToken}\`} className={cx("border-border bg-background -mx-2xlg gap-lg px-2xlg py-lg border-component grid min-h-[80px] items-center rounded-lg border border-solid", animationTokensTableGridColsClassName)}>
                        <div className="min-w-0">
                          <StorybookInlineCode text={row.property} />
                        </div>
                        <div className="min-w-0">
                          <StorybookInlineCode text={row.cssToken} />
                        </div>
                        <div className="min-w-0">
                          <StorybookInlineCode text={row.value} />
                        </div>
                      </div>)}
                  </div>
                </section>

                <section className={colorDocsGroupedSectionClassName}>
                  <h2 className="typography-headline-03 text-text mb-[24px] font-light">
                    Playground
                  </h2>
                  <div className="flex min-w-0 flex-col gap-0">
                    <div className="flex min-w-0 items-start justify-start gap-[24px]">
                      <div>
                        <Select id="animation-property" label="Property" options={propertyOptions} value={property} onChange={v => {
                        if (v === "translateX" || v === "translateY" || v === "scale" || v === "rotate" || v === "opacity" || v === "borderRadius") {
                          setProperty(v);
                        }
                      }} />
                      </div>
                      <div>
                        <Select id="animation-easing" label="Easing" options={easingTokenOptions} value={easingToken} onChange={v => {
                        if (typeof v === "string") setEasingToken(v);
                      }} />
                      </div>
                      <div className="w-[260px]">
                        <Select id="animation-duration" label="Duration" options={durationTokenOptions} value={durationToken} onChange={v => {
                        if (typeof v === "string") setDurationToken(v);
                      }} />
                      </div>
                    </div>
                    <div className="flex min-w-0 flex-wrap items-start justify-start gap-[24px]">
                      {renderPropertyInputs()}
                    </div>
                  </div>

                  <div className="gap-lg bg-background-app border-border border-component -mx-[32px] flex min-h-[360px] min-w-0 flex-col rounded-[20px] border border-solid p-[8px]">
                    <div className="bg-background-accent border-border rounded-[12px] border-[0.5px] border-solid p-[16px]">
                      <div className="gap-lg flex min-w-0 items-center justify-between">
                        <div className="gap-sm flex min-w-0 items-center">
                          <div className="typography-label-semibold text-text shrink-0 font-semibold">
                            Output:
                          </div>
                          <StorybookInlineCode text={computed.cssTransition} />
                        </div>
                        <Button label={active ? "Reset" : "Animate"} onClick={() => setActive(p => !p)} />
                      </div>
                    </div>

                    <div className="flex min-w-0 flex-1 items-start justify-start p-[24px]">
                      <motion.div className="bg-background-brand size-[72px] rounded-lg" initial={false} animate={resolveAnimate()} transition={{
                      ...(computed.isFastSpatialSpring ? {
                        type: "spring" as const,
                        duration: durationSec,
                        bounce: FAST_SPATIAL_SPRING_BOUNCE
                      } : {
                        duration: durationSec,
                        ease
                      })
                    }} />
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...N.parameters?.docs?.source}}},P=[`Animations`]}))();export{N as Animations,P as __namedExportsOrder,M as default};