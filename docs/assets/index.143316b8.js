var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{r as l,R as o,a as s}from"./vendor.d588b47a.js";function c({onUpdateHeroes:e,heroes:t=[]}){const[a,r]=l.exports.useState("");return o.createElement("div",{className:"w-full lg:w-2/4 xl:w-1/4"},o.createElement("div",{className:"px-4 py-2 bg-indigo-500 text-white rounded shadow-md transition duration-200"},o.createElement("ul",{className:"space-y-3"},t.map(((a,r)=>o.createElement("li",{key:r,className:"flex items-center justify-between"},o.createElement("span",null,a),o.createElement("button",{onClick:()=>(a=>{e(t.filter((e=>e!==a)))})(a),type:"button"},o.createElement("svg",{className:"w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},o.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})))))))),o.createElement("form",{className:"mt-4",onSubmit:n=>{n.preventDefault(),!t.includes(a)&&a&&(e([...t,a]),r(""))}},o.createElement("input",{value:a,onChange:e=>{r(e.target.value)},className:"px-4 py-2 block w-full border rounded bg-gray-100 focus:shadow-md focus:outline-none focus:border-indigo-300 text-gray-900",type:"text",placeholder:"Masukkan nama super hero di sini"}),o.createElement("button",{className:"px-4 py-2 mt-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded",type:"submit"},"Tambah")))}function m(e){var l=e,{className:s=""}=l,c=((e,n)=>{var l={};for(var o in e)a.call(e,o)&&n.indexOf(o)<0&&(l[o]=e[o]);if(null!=e&&t)for(var o of t(e))n.indexOf(o)<0&&r.call(e,o)&&(l[o]=e[o]);return l})(l,["className"]);return o.createElement("img",((e,l)=>{for(var o in l||(l={}))a.call(l,o)&&n(e,o,l[o]);if(t)for(var o of t(l))r.call(l,o)&&n(e,o,l[o]);return e})({src:"/belajar-react/assets/logo.ecc203fb.svg",className:`App-logo ${s}`.trim(),alt:"logo"},c))}function i(){const[e,t]=l.exports.useState(["Batman","Superman","Wonder Woman"]);return o.createElement("div",{className:"text-center"},o.createElement("header",{className:"flex flex-col items-center min-h-screen\n        space-y-4 bg-[#282c34]\n        text-3xl text-white"},o.createElement(m,{className:"h-[40vmin] pointer-events-none"}),o.createElement(c,{heroes:e,onUpdateHeroes:e=>t(e)})))}s.render(o.createElement(o.StrictMode,null,o.createElement(i,null)),document.getElementById("root"));