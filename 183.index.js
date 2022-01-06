"use strict";(this.webpackChunkUI=this.webpackChunkUI||[]).push([[183],{6072:(e,t,c)=>{c.d(t,{Z:()=>s});var a=c(7294),n=c(4586);function r(e){const{children:t,className:c,label:r,onChange:s,isChecked:o,isDisabled:i,isIndeterminate:l,value:d,controlled:m}=e,h=[],b=(0,a.useRef)(null);c&&h.push(c),l?k():f();const u=(0,n.Z)();function k(){const e=b.current;e&&(e.indeterminate=!0)}function f(){const e=b.current;e&&(e.indeterminate=!1)}function p(e){s&&s(e.currentTarget.checked)}return(0,a.useEffect)((()=>{l?k():f()}),[]),a.createElement("div",{className:h.join(" ")},m&&a.createElement("input",{className:"form-check-input",type:"checkbox",id:u,checked:o,value:d,disabled:i,onChange:i?()=>{}:p,ref:b,"aria-label":r}),!m&&a.createElement("input",{className:"form-check-input",type:"checkbox",id:u,defaultChecked:o,value:d,disabled:i,onChange:i?()=>{}:p,ref:b,"aria-label":r}),a.createElement("label",{className:"form-check-label",htmlFor:u},t))}r.defaultProps={className:"",children:"",label:"",isChecked:!1,isDisabled:!1,isIndeterminate:!1,value:"",controlled:!1,onChange:void 0};const s=r},7183:(e,t,c)=>{c.r(t),c.d(t,{default:()=>o});var a=c(7294),n=c(535),r=c(3454),s=c(6072);const o=function(){const[e,t]=(0,a.useState)(!1),[c,o]=(0,a.useState)(!0);return a.createElement("div",{className:"rb-checkboxes container-fluid"},a.createElement("section",{className:"rb-checkbox-basic"},a.createElement("h1",{className:"rb-title"},"Checkbox"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-checkbox-wrapper"},a.createElement(s.Z,{isChecked:!1,className:"form-check"},"default checkbox"))),a.createElement("div",{className:"rb-code"},a.createElement(n.Z,{language:"javascript",style:r.Z},"\n    import Checkbox from '../components/Checkbox';\n    \n    <Checkbox\n      checked={false}\n      className=\"form-check\"\n    >default checkbox</Checkbox>\n  "))),a.createElement("section",{className:"rb-checkboxes-basic"},a.createElement("h1",{className:"rb-title"},"Disabled"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-checkbox-wrapper"},a.createElement(s.Z,{isChecked:!1,isDisabled:!0,className:"form-check"},"disabled")),a.createElement("div",{className:"rb-checkbox-wrapper"},a.createElement(s.Z,{isChecked:!0,isDisabled:!0,className:"form-check"},"disabled checked"))),a.createElement("div",{className:"rb-code"},a.createElement(n.Z,{language:"javascript",style:r.Z},'\n    import Checkbox from \'../components/Checkbox\';\n    \n    <Checkbox\n      checked={false}\n      disabled\n      className="form-check"\n    >disabled</Checkbox>\n    \n    <Checkbox checked disabled className="form-check">disabled checked</Checkbox>\n  '))),a.createElement("section",{className:"rb-checkbox-basic"},a.createElement("h1",{className:"rb-title"},"Indeterminate"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-checkbox-wrapper"},a.createElement(s.Z,{controlled:!0,isChecked:e,isIndeterminate:c,className:"form-check",onChange:function(){t(!e),o(!c)}},"indeterminate checkbox"))),a.createElement("div",{className:"rb-code"},a.createElement(n.Z,{language:"javascript",style:r.Z},"\n    import Checkbox from '../components/Checkbox';\n\n    const [isChecked, setChecked] = useState(false);\n    const [isIndeterminate, setIndeterminate] = useState(true);\n    \n    function changeHandler() {\n      setChecked(!isChecked);\n      setIndeterminate(!isIndeterminate);\n    }\n   \n    <Checkbox\n      controlled\n      isChecked={isChecked}\n      isIndeterminate={isIndeterminate}\n      className=\"form-check\"\n      onChange={changeHandler}\n    >indeterminate checkbox</Checkbox>\n  "))))}},4586:(e,t,c)=>{var a;c.d(t,{Z:()=>d});var n=new Uint8Array(16);function r(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(n)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,o=function(e){return"string"==typeof e&&s.test(e)};for(var i=[],l=0;l<256;++l)i.push((l+256).toString(16).substr(1));const d=function(e,t,c){var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){c=c||0;for(var n=0;n<16;++n)t[c+n]=a[n];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase();if(!o(c))throw TypeError("Stringified UUID is invalid");return c}(a)}}}]);