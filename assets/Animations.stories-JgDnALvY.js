import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{Ct as n,eo as r,ha as i,ho as a,ni as o,pt as s,ri as c,t as l,za as u}from"./iframe-Bi2pfBHq.js";import{n as d,t as f}from"./react-DdE7kdKx.js";import{i as p,n as ee}from"./storybook-B03c_0ui.js";import{C as m,S as h,T as g,t as _,w as v}from"./docs-k-lez8K9.js";function y(e){return e.startsWith(`animation-duration-`)?`--${e}`:e.startsWith(`animation-ease-`)?`--ease-${e.replace(`animation-ease-`,``)}`:e===`animation-bounce`?`--animation-bounce`:``}var b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{b=t(a(),1),l(),x=t(u(),1),f(),_(),S=r(),C=[`animation-ease-accelerate-lg`,`animation-ease-accelerate-md`,`animation-ease-accelerate-sm`,`animation-ease-decelerate-lg`,`animation-ease-decelerate-md`,`animation-ease-decelerate-sm`,`animation-ease-ease`,`animation-ease-linear`,`animation-bounce`],w=.35,T=`fast-spatial-spring`,E=[`animation-duration-xs`,`animation-duration-sm`,`animation-duration-md`,`animation-duration-lg`,`animation-duration-xlg`,`animation-duration-2xlg`,`animation-duration-3xlg`],D=[{value:`translateX`,label:`Translate X`},{value:`translateY`,label:`Translate Y`},{value:`scale`,label:`Scale`},{value:`rotate`,label:`Rotate`},{value:`opacity`,label:`Opacity`},{value:`borderRadius`,label:`Border radius`}],O=[...C.map(e=>({value:e,label:e.replace(`animation-ease-`,``).replace(`animation-`,``)})),{value:T,label:`fast spatial spring`}],k=E.map(e=>({value:e,label:e.replace(`animation-duration-`,``)})),A=`grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]`,j={title:`Arcade Foundation/Animations`,parameters:{a11y:{test:`off`},chromatic:{disableSnapshot:!0}}},M=()=>{let[e,t]=(0,b.useState)(`translateX`),[r,a]=(0,b.useState)(`animation-ease-ease`),[l,u]=(0,b.useState)(`animation-duration-md`),[f,_]=(0,b.useState)(!1),[j,M]=(0,b.useState)(240),[N,P]=(0,b.useState)(72),[F,I]=(0,b.useState)(72),[L,R]=(0,b.useState)(120),[z,B]=(0,b.useState)(120),[V,H]=(0,b.useState)(1),[U,W]=(0,b.useState)(.25),[G,K]=(0,b.useState)(25),[q,J]=(0,b.useState)(8),[Y,X]=(0,b.useState)(24),Z=(0,b.useMemo)(()=>{let t=getComputedStyle(document.documentElement),n=r===T,i=y(r),a=y(l),o=!n&&i?t.getPropertyValue(i).trim():``,s=a?c(t.getPropertyValue(a)):0;return{isFastSpatialSpring:n,easing:o,durationMs:s,cssTransition:n?`transition: { type: "spring", duration: ${(s/1e3).toFixed(3)}, bounce: ${w} };`:`transition: ${e} ${s}ms ${o};`}},[l,r,e]),Q=(0,b.useMemo)(()=>{let e=getComputedStyle(document.documentElement),t=E.map(t=>({property:`Duration`,cssToken:`--${t}`,value:e.getPropertyValue(`--${t}`).trim()})),n=C.map(t=>{let n=y(t);return{property:`Easing`,cssToken:n,value:e.getPropertyValue(n).trim()}}),r={property:`Easing`,cssToken:`fastSpatialSpring`,value:`spring transition (duration controlled)`};return[...t,...n,r]},[]),te=Z.easing?o(Z.easing):`linear`,$=Z.durationMs/1e3;function ne(){let t={x:0,y:0,width:N,height:F,scale:1,rotate:0,opacity:V,borderRadius:q};if(!f)return t;switch(e){case`translateX`:return{...t,x:j};case`translateY`:return{...t,y:j};case`scale`:return{...t,width:L,height:z};case`rotate`:return{...t,rotate:G};case`opacity`:return{...t,opacity:U};case`borderRadius`:return{...t,borderRadius:Y}}}function re(){return e===`translateX`||e===`translateY`?(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-distance`,label:`Distance`,value:j,onValueChange:e=>M(e??0)})}):e===`scale`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-initial-width`,label:`Initial width`,value:N,min:1,onValueChange:e=>P(e??1)})}),(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-initial-height`,label:`Initial height`,value:F,min:1,onValueChange:e=>I(e??1)})}),(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-target-width`,label:`Target width`,value:L,min:1,onValueChange:e=>R(e??1)})}),(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-target-height`,label:`Target height`,value:z,min:1,onValueChange:e=>B(e??1)})})]}):e===`opacity`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-initial-opacity`,label:`Initial opacity`,value:V,min:0,max:1,step:.01,onValueChange:e=>H(e??0)})}),(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-target-opacity`,label:`Target opacity`,value:U,min:0,max:1,step:.01,onValueChange:e=>W(e??0)})})]}):e===`rotate`?(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-angle-change`,label:`Angle change`,value:G,onValueChange:e=>K(e??0)})}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-initial-border-radius`,label:`Initial border radius`,value:q,min:0,onValueChange:e=>J(e??0)})}),(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(n,{id:`animation-target-border-radius`,label:`Target border radius`,value:Y,min:0,onValueChange:e=>X(e??0)})})]})}return(0,S.jsx)(`div`,{className:`gap-xlg text-text typography-body flex w-full min-w-0 flex-col`,children:(0,S.jsxs)(`div`,{className:`gap-xlg flex min-w-0 flex-col`,children:[(0,S.jsx)(ee,{title:`Animation Tokens`,className:`px-[80px] pt-[80px] pb-[48px]`}),(0,S.jsx)(`div`,{className:`p-lg`,children:(0,S.jsx)(`div`,{className:`gap-lg -m-lg flex flex-col`,children:(0,S.jsx)(`div`,{className:h,children:(0,S.jsxs)(`div`,{className:m,children:[(0,S.jsxs)(`section`,{className:v,children:[(0,S.jsx)(`h2`,{className:`typography-headline-03 text-text mb-[24px] font-light`,children:`Token overview`}),(0,S.jsxs)(`div`,{role:`row`,className:(0,x.default)(g,A),children:[(0,S.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Property`}),(0,S.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`CSS Token`}),(0,S.jsx)(`div`,{className:`typography-label-semibold text-text min-w-0 truncate font-semibold`,children:`Value`})]}),(0,S.jsx)(`div`,{className:`gap-sm flex flex-col`,role:`presentation`,children:Q.map(e=>(0,S.jsxs)(`div`,{className:(0,x.default)(`border-border bg-background -mx-2xlg gap-lg px-2xlg py-lg border-component grid min-h-[80px] items-center rounded-lg border border-solid`,A),children:[(0,S.jsx)(`div`,{className:`min-w-0`,children:(0,S.jsx)(p,{text:e.property})}),(0,S.jsx)(`div`,{className:`min-w-0`,children:(0,S.jsx)(p,{text:e.cssToken})}),(0,S.jsx)(`div`,{className:`min-w-0`,children:(0,S.jsx)(p,{text:e.value})})]},`${e.property}-${e.cssToken}`))})]}),(0,S.jsxs)(`section`,{className:v,children:[(0,S.jsx)(`h2`,{className:`typography-headline-03 text-text mb-[24px] font-light`,children:`Playground`}),(0,S.jsxs)(`div`,{className:`flex min-w-0 flex-col gap-0`,children:[(0,S.jsxs)(`div`,{className:`flex min-w-0 items-start justify-start gap-[24px]`,children:[(0,S.jsx)(`div`,{children:(0,S.jsx)(s,{id:`animation-property`,label:`Property`,options:D,value:e,onChange:e=>{(e===`translateX`||e===`translateY`||e===`scale`||e===`rotate`||e===`opacity`||e===`borderRadius`)&&t(e)}})}),(0,S.jsx)(`div`,{children:(0,S.jsx)(s,{id:`animation-easing`,label:`Easing`,options:O,value:r,onChange:e=>{typeof e==`string`&&a(e)}})}),(0,S.jsx)(`div`,{className:`w-[260px]`,children:(0,S.jsx)(s,{id:`animation-duration`,label:`Duration`,options:k,value:l,onChange:e=>{typeof e==`string`&&u(e)}})})]}),(0,S.jsx)(`div`,{className:`flex min-w-0 flex-wrap items-start justify-start gap-[24px]`,children:re()})]}),(0,S.jsxs)(`div`,{className:`gap-lg bg-background-app border-border border-component -mx-[32px] flex min-h-[360px] min-w-0 flex-col rounded-[20px] border border-solid p-[8px]`,children:[(0,S.jsx)(`div`,{className:`bg-background-accent border-border rounded-[12px] border-[0.5px] border-solid p-[16px]`,children:(0,S.jsxs)(`div`,{className:`gap-lg flex min-w-0 items-center justify-between`,children:[(0,S.jsxs)(`div`,{className:`gap-sm flex min-w-0 items-center`,children:[(0,S.jsx)(`div`,{className:`typography-label-semibold text-text shrink-0 font-semibold`,children:`Output:`}),(0,S.jsx)(p,{text:Z.cssTransition})]}),(0,S.jsx)(i,{label:f?`Reset`:`Animate`,onClick:()=>_(e=>!e)})]})}),(0,S.jsx)(`div`,{className:`flex min-w-0 flex-1 items-start justify-start p-[24px]`,children:(0,S.jsx)(d.div,{className:`bg-background-brand size-[72px] rounded-lg`,initial:!1,animate:ne(),transition:{...Z.isFastSpatialSpring?{type:`spring`,duration:$,bounce:w}:{duration:$,ease:te}}})})]})]})]})})})})]})})},M.__docgenInfo={description:``,methods:[],displayName:`Animations`},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}},N=[`Animations`]}))();export{M as Animations,N as __namedExportsOrder,j as default};