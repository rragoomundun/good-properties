import './polyfills.server.mjs';
var c=class{static getInputError(p,t,n,u){if(t&&t.type==="INVALID_PARAMETERS"){let i=t.error.find(e=>u?n.includes(e.type)&&e.field===u:n.includes(e.type));if(i)return`${p}${i.type}`}return""}};export{c as a};
