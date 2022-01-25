"use strict";(this.webpackChunkUI=this.webpackChunkUI||[]).push([[932],{4205:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function r(e){const{children:t,size:n,direct:r,className:o}=e,s=["btn__group"];return n&&s.push(`btn__group--${n}`),r&&(s.shift(),s.push(`btn__group--${r}`)),o&&s.push(o),a.createElement("div",{className:s.join(" "),role:"group","aria-label":"btn-group"},t)}r.defaultProps={size:"",direct:"",className:""};const o=r},6072:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(4586);function o(e){const{children:t,className:n,label:o,onChange:s,isChecked:l,isDisabled:c,isIndeterminate:p,value:m,controlled:i}=e,u=[],d=(0,a.useRef)(null);n&&u.push(n),p?v():h();const b=(0,r.Z)();function v(){const e=d.current;e&&(e.indeterminate=!0)}function h(){const e=d.current;e&&(e.indeterminate=!1)}function E(e){s&&s(e.currentTarget.checked)}return(0,a.useEffect)((()=>{p?v():h()}),[]),a.createElement("div",{className:u.join(" ")},i&&a.createElement("input",{className:"form-check-input",type:"checkbox",id:b,checked:l,value:m,disabled:c,onChange:c?()=>{}:E,ref:d,"aria-label":o}),!i&&a.createElement("input",{className:"form-check-input",type:"checkbox",id:b,defaultChecked:l,value:m,disabled:c,onChange:c?()=>{}:E,ref:d,"aria-label":o}),a.createElement("label",{className:"form-check-label",htmlFor:b},t))}o.defaultProps={className:"",children:"",label:"",isChecked:!1,isDisabled:!1,isIndeterminate:!1,value:"",controlled:!1,onChange:void 0};const s=o},335:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7294),r=n(7211),o=n(873),s=n(5475),l=n(4205),c=n(2484),p=n(6318);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=a.forwardRef(((e,t)=>{const{children:n,suffixIcon:s,variant:c,buttonName:m,split:u,size:d,theme:b,isDisabled:v,className:h,open:E,offset:I,type:N,onChange:f}=e,g=(0,a.useRef)(null),w=(0,a.useRef)(null),x=(0,a.useRef)(null),[y,D]=(0,a.useState)(E),[Z,k]=(0,a.useState)({}),[C,G]=(0,a.useState)({}),S=["dropdown-menu"],j=["dropdown"],A={name:"flip",enabled:!0},B={name:"offset",options:{offset:I}},O={name:"applyStyles",enabled:!0,fn:e=>{const{popper:t}=e.state.elements;t.style.position="relative";const n=t.querySelector("ul");n.style.marginTop=`${I[1]}px`,n.style.marginLeft=`${I[0]}px`,t.style.width="100%",t.style.zIndex="1"}};let P=null;"dark"===b&&S.push("dropdown-menu--dark"),h&&j.push(h),s&&(P=a.cloneElement(s,{size:d})),Object.keys(Z).length||a.Children.forEach(n,(e=>{const{isActive:t,isDisabled:n,itemId:a}=e.props;a&&(Z[a]=t,C[a]=n)}));const z=e=>{const t=x.current,n=g.current;t&&n&&(40===e.keyCode?(e.preventDefault(),y?T():$(e)):38===e.keyCode?e.preventDefault():27===e.keyCode?(e.preventDefault(),R(e),M()):13===e.keyCode&&(e.preventDefault(),y?(R(e),M()):$(e)))},L=e=>{e.preventDefault(),e.stopPropagation(),x.current.contains(e.target)||g.current.contains(e.target)?document.removeEventListener("click",L):R(e)},R=e=>{const t=w.current;requestAnimationFrame((()=>{t.classList.replace("dropdown-menu--show","dropdown-menu--collapse"),document.removeEventListener("click",L)})),D((()=>!1))},$=e=>{const t=w.current;requestAnimationFrame((()=>{document.addEventListener("click",L),requestAnimationFrame((()=>{t.classList.replace("dropdown-menu--collapse","dropdown-menu--show"),(()=>{const e=g.current,t=x.current;"popper"!==N?(0,r.fi)(e,t,{placement:"bottom-start",modifiers:[A,O,B]}):(0,r.fi)(e,t,{placement:"bottom-start",modifiers:[A,B]})})()}))})),D((()=>!0))},M=()=>{g.current.focus()},T=()=>{const e=x.current.querySelector(".dropdown-item:not(.dropdown-item--disabled)");e&&e.focus()};(0,a.useLayoutEffect)((()=>{(()=>{const e=w.current;y?(e.classList.add("dropdown-menu--show"),requestAnimationFrame((()=>{document.addEventListener("click",L)}))):e.classList.add("dropdown-menu--collapse")})()}),[]);const V=a.createElement("ul",{className:S.join(" "),ref:w,role:"menu"},n);return a.createElement("div",{className:j.join(" "),ref:t,role:"navigation"},u?a.createElement(l.Z,null,a.createElement(o.Z,{variant:c,size:d,isDisabled:v},m),a.createElement(o.Z,{variant:c,suffixIcon:P,size:d,isDisabled:v,onClick:y?R:$,ref:g,onKeyDown:z})):a.createElement(o.Z,{variant:c,suffixIcon:P,size:d,isDisabled:v,onClick:y?R:$,ref:g,onKeyDown:z},m),a.createElement(p.Z.Provider,{value:{onClick:(e,t)=>t=>{C[e]||(Object.keys(Z).forEach((e=>{Z[e]=!1})),Z[e]=!0,k((()=>i({},Z))),G((()=>i({},C)))),R(t)},onESC:e=>{R(e),M()},activeStateMap:Z,disabledStateMap:C}},a.createElement("div",{className:["dropdown-menu__wrapper"].join(" "),ref:x},V)))}));d.defaultProps={className:"",onClick:()=>{},onChange:()=>{},variant:"secondary",buttonName:"",split:!1,size:"",suffixIcon:a.createElement(s.Z,{component:c.Z}),theme:"",isDisabled:!1,open:!1,offset:[0,8],type:"popper"};const b=d},6318:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext({onClick:()=>()=>{},onESC:()=>{},activeStateMap:{},disabledStateMap:{}})},907:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6318);const o=e=>{const{children:t,className:n,itemId:o}=e,s=(0,a.useContext)(r.Z),l=["dropdown-item"];return n&&l.push(n),s.disabledStateMap[o]&&l.push("dropdown-item--disabled"),s.activeStateMap[o]&&l.push("dropdown-item--active"),a.createElement("li",{className:l.join(" "),onClick:e=>{const{currentTarget:t}=e;t.classList.contains("dropdown-item--disabled")||s.onClick(o,"leaf")(e)},tabIndex:0,onKeyDown:e=>{const{currentTarget:t}=e;if(t)if(40===e.keyCode){e.preventDefault();let n=t.nextElementSibling;for(;n;){if(!n.classList.contains("dropdown-item--disabled")&&n.classList.contains("dropdown-item")){n.focus();break}n=n.nextElementSibling}}else if(38===e.keyCode){e.preventDefault();let n=t.previousElementSibling;for(;n;){if(!n.classList.contains("dropdown-item--disabled")&&n.classList.contains("dropdown-item")){n.focus();break}n=n.previousElementSibling}}else 13===e.keyCode?(e.preventDefault(),t.classList.contains("dropdown-item--disabled")||t.click()):27===e.keyCode&&(e.preventDefault(),e.stopPropagation(),s.onESC(e))},role:"menuitem"},t)};o.defaultProps={className:"",isDisabled:!1,isActive:!1};const s=o},3553:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function r(e){const{className:t,onChange:n,onInput:r,disabled:o,placeholder:s,type:l,value:c,id:p,size:m,readonly:i,plaintext:u,label:d}=e,b=[];return u&&b.push("form-control-plaintext"),b.push("form-control"),t&&b.push(t),m&&b.push(`form-control-${m}`),a.createElement("input",{className:b.join(" "),type:l,"aria-label":d||s,placeholder:s,disabled:o,onChange:n,onInput:r,defaultValue:c,readOnly:i,id:p})}r.defaultProps={className:"",disabled:!1,onChange:()=>{},onInput:()=>{},value:"",type:"text",id:"",size:"",readonly:!1,plaintext:!1,placeholder:"",label:""};const o=a.memo(r)},2885:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(4586);function o(e){const{children:t,className:n,label:o,onChange:s,isChecked:l,isDisabled:c,name:p,value:m}=e,i=[];n&&i.push(n);const u=(0,r.Z)();return a.createElement("div",{className:i.join(" ")},a.createElement("input",{className:"form-check-input",type:"radio",id:u,name:p,defaultValue:m,defaultChecked:l,disabled:c,onChange:s,"aria-label":o}),a.createElement("label",{className:"form-check-label",htmlFor:u},t))}o.defaultProps={className:"",children:"",label:"",value:"",isChecked:!1,isDisabled:!1,onChange:()=>{},name:""};const s=o},8708:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function r(e){const{className:t,onChange:n,onInput:r,disabled:o,placeholder:s,rows:l,value:c,id:p}=e,m=["form-control"];return t&&m.push(t),a.createElement("textarea",{className:m.join(" "),"aria-label":s,disabled:o,onChange:n,onInput:r,defaultValue:c,rows:l,placeholder:s,id:p})}r.defaultProps={className:"",disabled:!1,onChange:()=>{},onInput:()=>{},value:"",placeholder:"",id:"",rows:3};const o=r},5932:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7294),r=n(2690),o=n(3454);function s(e){const{className:t,children:n,size:r}=e,o=["input-group"];return t&&o.push(t),r&&o.push(`input-group-${r}`),a.createElement("div",{className:o.join(" ")},n)}s.defaultProps={className:"",children:null,size:""};const l=a.memo(s);var c=n(6072),p=n(2885),m=n(873),i=n(335),u=n(907),d=n(3553),b=n(8708);const v=function(){const[e,t]=(0,a.useState)(!1);return a.createElement("div",{className:"rb-input-groups container-fluid"},a.createElement("section",{className:"rb-input-group-basic"},a.createElement("h1",{className:"rb-title"},"Input group"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement("span",{className:"input-group-text"},"@"),a.createElement(d.Z,{placeholder:"Username",value:""}))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement(d.Z,{placeholder:"Recipient's username",value:""}),a.createElement("span",{className:"input-group-text"},"@example.com"))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement("span",{className:"input-group-text"},"$"),a.createElement(d.Z,{value:"",placeholder:"some text"}),a.createElement("span",{className:"input-group-text"},".00"))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement("span",{className:"input-group-text"},"With textarea"),a.createElement(b.Z,{placeholder:"some text"})))),a.createElement("div",{className:"rb-code"},a.createElement(r.Z,{language:"javascript",style:o.Z},'\n    import InputGroup from \'../components/InputGroup\';\n    import Input from \'../components/Input\';\n    import Textarea from \'../components/Textarea\';\n\n    <InputGroup className="mb-3">\n      <span className="input-group-text">@</span>\n      <Input placeholder="Username" value="" />\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <Input placeholder="Recipient\'s username" value="" />\n      <span className="input-group-text">@example.com</span>\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <span className="input-group-text">$</span>\n      <Input value="" placeholder="some text" />\n      <span className="input-group-text">.00</span>\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <span className="input-group-text">With textarea</span>\n      <Textarea placeholder="some text" />\n    </InputGroup>\n  '))),a.createElement("section",{className:"rb-input-group-basic"},a.createElement("h1",{className:"rb-title"},"Sizing"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{size:"sm",className:"mb-3"},a.createElement("span",{className:"input-group-text"},"small"),a.createElement(d.Z,{value:"",placeholder:"some text"}))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement("span",{className:"input-group-text"},"normal"),a.createElement(d.Z,{value:"",placeholder:"some text"}))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3",size:"lg"},a.createElement("span",{className:"input-group-text"},"normal"),a.createElement(d.Z,{value:"",placeholder:"some text"})))),a.createElement("div",{className:"rb-code"},a.createElement(r.Z,{language:"javascript",style:o.Z},'\n    import InputGroup from \'../components/InputGroup\';\n    import Input from \'../components/Input\';\n\n    <InputGroup size="sm" className="mb-3">\n       <span className="input-group-text">small</span>\n       <Input value="" placeholder="some text" />\n    </InputGroup>\n     \n    <InputGroup className="mb-3">\n       <span className="input-group-text">normal</span>\n       <Input value="" placeholder="some text" />\n    </InputGroup>\n     \n    <InputGroup className="mb-3" size="lg">\n       <span className="input-group-text">large</span>\n       <Input value="" placeholder="some text" />\n    </InputGroup>\n  '))),a.createElement("section",{className:"rb-input-group-basic"},a.createElement("h1",{className:"rb-title"},"Checks and radios"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement("span",{className:"input-group-text"},a.createElement(c.Z,{isChecked:e,onChange:function(){t(!e)},label:"some label"})),a.createElement(d.Z,{value:"",placeholder:"some text"}))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement("span",{className:"input-group-text"},a.createElement(p.Z,{name:"test",value:"1",isChecked:!0,label:"some label"})),a.createElement(d.Z,{value:"",placeholder:"some text"})))),a.createElement("div",{className:"rb-code"},a.createElement(r.Z,{language:"javascript",style:o.Z},'\n    import InputGroup from \'../components/InputGroup\';\n    import Input from \'../components/Input\';\n    import Checkbox from \'../components/Checkbox\';\n    import Radio from \'../components/Radio\';\n    \n    const [isChecked, setChecked] = useState(false);\n\n    function clickHandler() {\n      setChecked(!isChecked);\n    }\n    \n    <InputGroup className="mb-3">\n      <span className="input-group-text">\n        <Checkbox isChecked={isChecked} onChange={clickHandler} />\n      </span>\n      <Input value="" placeholder="some text" />\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <span className="input-group-text">\n        <Radio name="test" value="1" isChecked />\n      </span>\n      <Input value="" placeholder="some text" />\n    </InputGroup>\n  '))),a.createElement("section",{className:"rb-input-group-basic"},a.createElement("h1",{className:"rb-title"},"Multiple inputs"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement("span",{className:"input-group-text"},"normal"),a.createElement(d.Z,{value:"",placeholder:"some text"}),a.createElement(d.Z,{value:"",placeholder:"some text"})))),a.createElement("div",{className:"rb-code"},a.createElement(r.Z,{language:"javascript",style:o.Z},'\n    import InputGroup from \'../components/InputGroup\';\n    import Input from \'../components/Input\';\n    \n    <InputGroup className="mb-3">\n      <span className="input-group-text">normal</span>\n      <Input value="" placeholder="some text" />\n      <Input value="" placeholder="some text" />\n    </InputGroup>\n  '))),a.createElement("section",{className:"rb-input-group-basic"},a.createElement("h1",{className:"rb-title"},"Multiple addons"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement("span",{className:"input-group-text"},"$"),a.createElement("span",{className:"input-group-text"},"0.00"),a.createElement(d.Z,{value:"",placeholder:"some text"})))),a.createElement("div",{className:"rb-code"},a.createElement(r.Z,{language:"javascript",style:o.Z},'\n    import InputGroup from \'../components/InputGroup\';\n    import Input from \'../components/Input\';\n    \n    <InputGroup className="mb-3">\n      <span className="input-group-text">$</span>\n      <span className="input-group-text">0.00</span>\n      <Input value="" placeholder="some text" />\n    </InputGroup>\n  '))),a.createElement("section",{className:"rb-input-group-basic"},a.createElement("h1",{className:"rb-title"},"Button addons"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement(m.Z,{variant:"outline-secondary"},"Button"),a.createElement(d.Z,{value:"",placeholder:"some text"}))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement(d.Z,{value:"",placeholder:"some text"}),a.createElement(m.Z,{variant:"outline-secondary"},"Button"))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement(m.Z,{variant:"outline-secondary"},"Button"),a.createElement(m.Z,{variant:"outline-secondary"},"Button"),a.createElement(d.Z,{value:"",placeholder:"some text"}))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement(d.Z,{value:"",placeholder:"some text"}),a.createElement(m.Z,{variant:"outline-secondary"},"Button"),a.createElement(m.Z,{variant:"outline-secondary"},"Button")))),a.createElement("div",{className:"rb-code"},a.createElement(r.Z,{language:"javascript",style:o.Z},'\n    import InputGroup from \'../components/InputGroup\';\n    import Input from \'../components/Input\';\n    \n    <InputGroup className="mb-3">\n      <Button variant="outline-secondary">Button</Button>\n      <Input value="" placeholder="some text" />\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <Input value="" placeholder="some text" />\n      <Button variant="outline-secondary">Button</Button>\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <Button variant="outline-secondary">Button</Button>\n      <Button variant="outline-secondary">Button</Button>\n      <Input value="" placeholder="some text" />\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <Input value="" placeholder="some text" />\n      <Button variant="outline-secondary">Button</Button>\n      <Button variant="outline-secondary">Button</Button>\n    </InputGroup>\n  '))),a.createElement("section",{className:"rb-input-group-basic"},a.createElement("h1",{className:"rb-title"},"Button with dropdowns"),a.createElement("div",{className:"rb-group"},a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement(i.Z,{buttonName:"Dropdown",variant:"outline-secondary"},a.createElement(u.Z,{isActive:!0,itemId:"1"},"Action"),a.createElement(u.Z,{isDisabled:!0,itemId:"2"},"Another action"),a.createElement(u.Z,{itemId:"3"},"Something else here"),a.createElement("hr",{className:"dropdown-divider"}),a.createElement(u.Z,{itemId:"4"},"Separated link")),a.createElement(d.Z,{value:"",placeholder:"some text"}))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement(i.Z,{variant:"outline-secondary",buttonName:"Dropdown",split:!0},a.createElement(u.Z,{isActive:!0,itemId:"1"},"Action"),a.createElement(u.Z,{isDisabled:!0,itemId:"2"},"Another action"),a.createElement(u.Z,{itemId:"3"},"Something else here"),a.createElement("hr",{className:"dropdown-divider"}),a.createElement(u.Z,{itemId:"4"},"Separated link")),a.createElement(d.Z,{value:"",placeholder:"some text"}))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement(d.Z,{value:"",placeholder:"some text"}),a.createElement(i.Z,{variant:"outline-secondary",buttonName:"Dropdown",split:!0},a.createElement(u.Z,{isActive:!0,itemId:"1"},"Action"),a.createElement(u.Z,{isDisabled:!0,itemId:"2"},"Another action"),a.createElement(u.Z,{itemId:"3"},"Something else here"),a.createElement("hr",{className:"dropdown-divider"}),a.createElement(u.Z,{itemId:"4"},"Separated link")))),a.createElement("div",{className:"rb-input-group-wrapper"},a.createElement(l,{className:"mb-3"},a.createElement(d.Z,{value:"",placeholder:"some text"}),a.createElement(i.Z,{variant:"outline-secondary",buttonName:"Dropdown"},a.createElement(u.Z,{isActive:!0,itemId:"1"},"Action"),a.createElement(u.Z,{isDisabled:!0,itemId:"2"},"Another action"),a.createElement(u.Z,{itemId:"3"},"Something else here"),a.createElement("hr",{className:"dropdown-divider"}),a.createElement(u.Z,{itemId:"4"},"Separated link"))))),a.createElement("div",{className:"rb-code"},a.createElement(r.Z,{language:"javascript",style:o.Z},'\n    import InputGroup from \'../components/InputGroup\';\n    import Input from \'../components/Input\';\n    \n    <InputGroup className="mb-3">\n      <Dropdown buttonName="Dropdown" variant="outline-secondary">\n        <DropdownItem isActive itemId="1">\n          Action\n        </DropdownItem>\n        <DropdownItem isDisabled itemId="2">\n          Another action\n        </DropdownItem>\n        <DropdownItem itemId="3">Something else here</DropdownItem>\n        <hr className="dropdown-divider" />\n        <DropdownItem itemId="4">Separated link</DropdownItem>\n      </Dropdown>\n      <Input value="" placeholder="some text" />\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <Dropdown variant="outline-secondary" buttonName="Dropdown" split>\n        <DropdownItem isActive itemId="1">\n          Action\n        </DropdownItem>\n        <DropdownItem isDisabled itemId="2">\n          Another action\n        </DropdownItem>\n        <DropdownItem itemId="3">Something else here</DropdownItem>\n        <hr className="dropdown-divider" />\n        <DropdownItem itemId="4">Separated link</DropdownItem>\n      </Dropdown>\n      <Input value="" placeholder="some text" />\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <Input value="" placeholder="some text" />\n      <Dropdown variant="outline-secondary" buttonName="Dropdown" split>\n        <DropdownItem isActive itemId="1">\n          Action\n        </DropdownItem>\n        <DropdownItem isDisabled itemId="2">\n          Another action\n        </DropdownItem>\n        <DropdownItem itemId="3">Something else here</DropdownItem>\n        <hr className="dropdown-divider" />\n        <DropdownItem itemId="4">Separated link</DropdownItem>\n      </Dropdown>\n    </InputGroup>\n    \n    <InputGroup className="mb-3">\n      <Input value="" placeholder="some text" />\n      <Dropdown variant="outline-secondary" buttonName="Dropdown">\n        <DropdownItem isActive itemId="1">\n          Action\n        </DropdownItem>\n        <DropdownItem isDisabled itemId="2">\n          Another action\n        </DropdownItem>\n        <DropdownItem itemId="3">Something else here</DropdownItem>\n        <hr className="dropdown-divider" />\n        <DropdownItem itemId="4">Separated link</DropdownItem>\n      </Dropdown>\n    </InputGroup>\n  '))))}},4586:(e,t,n)=>{var a;n.d(t,{Z:()=>m});var r=new Uint8Array(16);function o(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,l=function(e){return"string"==typeof e&&s.test(e)};for(var c=[],p=0;p<256;++p)c.push((p+256).toString(16).substr(1));const m=function(e,t,n){var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=a[r];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n}(a)}}}]);