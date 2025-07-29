import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as b,g as w,S as h,h as v}from"./index.esm-BVZSyONk.js";import{r as d}from"./index-D4lIrffr.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";const j={title:"Essentials/Framer"},a=()=>{const t=getComputedStyle(document.documentElement),i=t.getPropertyValue("--ease-ease"),n=b(t.getPropertyValue("--animation-duration-md"))/1e3,s=t.getPropertyValue("--color-background-brand");return e.jsxs(w.div,{initial:{backgroundColor:"#000"},animate:{backgroundColor:s},transition:{duration:n,ease:h(i)},children:[e.jsx("h1",{children:"This story uses motion.div with tailwind v4 theme tokens. Click the remount button from storybook to see the demo"}),e.jsx("br",{}),"brandColor=",s,e.jsx("br",{}),"easing=",i,e.jsx("br",{}),"duration=",n,e.jsx("br",{})]})},r=()=>{const[t,i]=d.useState(!1),n=getComputedStyle(document.documentElement),s=n.getPropertyValue("--ease-ease"),o={"move-down":{start:n.getPropertyValue("--animation-move-down-sm-0"),end:n.getPropertyValue("--animation-move-down-sm-100")},"scale-down":{start:n.getPropertyValue("--animation-scale-down-sm-0"),end:n.getPropertyValue("--animation-scale-down-sm-100")}},m=b(n.getPropertyValue("--animation-duration-xlg"))/1e3;return d.useEffect(()=>{setTimeout(()=>{i(!t)},3e3)},[t]),e.jsx(v,{children:t&&e.jsxs(w.div,{transition:{duration:m,ease:h(s)},initial:{y:o["move-down"].start,scale:Number(o["scale-down"].start)},animate:{y:o["move-down"].end,scale:Number(o["scale-down"].end)},exit:{y:o["move-down"].start,scale:Number(o["scale-down"].start)},children:[e.jsx("h1",{children:"Debugging Framer Motion with custom Tokens"}),e.jsx("br",{}),"easing=",s,e.jsx("br",{}),"duration=",m,e.jsx("br",{})]})})};a.__docgenInfo={description:"",methods:[],displayName:"Framer"};r.__docgenInfo={description:"",methods:[],displayName:"Debug"};a.__docgenInfo={description:"",methods:[],displayName:"Framer"};r.__docgenInfo={description:"",methods:[],displayName:"Debug"};var l,c,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const styles = getComputedStyle(document.documentElement);
  const easing = styles.getPropertyValue("--ease-ease");
  const duration = parseTimeString(styles.getPropertyValue("--animation-duration-md")) / 1000;
  const brandColor = styles.getPropertyValue("--color-background-brand");
  return <motion.div initial={{
    backgroundColor: "#000"
  }} animate={{
    backgroundColor: brandColor
  }} transition={{
    duration,
    ease: parseCubicBezierString(easing)
  }}>
      <h1>
        This story uses motion.div with tailwind v4 theme tokens. Click the
        remount button from storybook to see the demo
      </h1>
      <br />
      brandColor={brandColor}
      <br />
      easing={easing}
      <br />
      duration={duration}
      <br />
    </motion.div>;
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,p,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const styles = getComputedStyle(document.documentElement);
  const easing = styles.getPropertyValue("--ease-ease");
  const animation = {
    "move-down": {
      start: styles.getPropertyValue("--animation-move-down-sm-0"),
      end: styles.getPropertyValue("--animation-move-down-sm-100")
    },
    "scale-down": {
      start: styles.getPropertyValue("--animation-scale-down-sm-0"),
      end: styles.getPropertyValue("--animation-scale-down-sm-100")
    }
  };
  const duration = parseTimeString(styles.getPropertyValue("--animation-duration-xlg")) / 1000;
  useEffect(() => {
    setTimeout(() => {
      setOpen(!open);
    }, 3000);
  }, [open]);
  return <AnimatePresence>
      {open && <motion.div transition={{
      duration,
      ease: parseCubicBezierString(easing)
    }} initial={{
      y: animation["move-down"].start,
      scale: Number(animation["scale-down"].start)
    }} animate={{
      y: animation["move-down"].end,
      scale: Number(animation["scale-down"].end)
    }} exit={{
      y: animation["move-down"].start,
      scale: Number(animation["scale-down"].start)
    }}>
          <h1>Debugging Framer Motion with custom Tokens</h1>
          <br />
          easing={easing}
          <br />
          duration={duration}
          <br />
        </motion.div>}
    </AnimatePresence>;
}`,...(y=(p=r.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const k=["Framer","Debug"];export{r as Debug,a as Framer,k as __namedExportsOrder,j as default};
