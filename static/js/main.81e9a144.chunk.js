(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),o=a(4),l=a.n(o),n=(a(9),a(2)),s=(a(10),a(0));function d(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(s.jsxs)("div",{className:"dropdown",children:[Object(s.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton2","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dark Mode"}),Object(s.jsxs)("ul",{className:"dropdown-menu dropdown-menu-dark","aria-labelledby":"dropdownMenuButton2",children:[Object(s.jsx)("li",{children:Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",onClick:function(){e.toogleMode("blue")}}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"Dark Blue"})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",onClick:function(){e.toogleMode("red")}}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"Dark Red"})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",onClick:function(){e.toogleMode("green")}}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"Dark Green"})]})}),Object(s.jsx)("li",{children:Object(s.jsx)("hr",{className:"dropdown-divider"})}),Object(s.jsx)("li",{children:Object(s.jsxs)("div",{className:"form-check",children:[Object(s.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1",onClick:function(){e.toogleMode("light")}}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexRadioDefault1",children:"Light Mode"})]})})]})]})]})]})})}function i(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),r=a[0],o=a[1];return console.log(document.body.style.backgroundColor),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(s.jsx)("h1",{children:e.heading}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",value:r,onChange:function(e){o(e.target.value)},id:"myBox",rows:"8",placeholder:"Enter text here",style:{backgroundColor:"dark"===e.mode?"#8f8f8f":"white",color:"dark"===e.mode?"white":"black"},onMouseOver:function(t){t.target.style.caretColor="dark"===e.mode?"white":"black"}})}),Object(s.jsx)("button",{className:"btn btn-".concat("blue"===e.darkColor?"primary":"red"===e.darkColor?"danger":"green"===e.darkColor?"success":"dark"," mx-1 my-1"),onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Converted to uppercase","success")},children:"Convert to UpperCase"}),Object(s.jsx)("button",{className:"btn btn-".concat("blue"===e.darkColor?"primary":"red"===e.darkColor?"danger":"green"===e.darkColor?"success":"dark"," mx-1 my-1"),onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Converted to lowercase","success")},children:"Convert to LowerCase"}),Object(s.jsx)("button",{className:"btn btn-".concat("blue"===e.darkColor?"primary":"red"===e.darkColor?"danger":"green"===e.darkColor?"success":"dark"," mx-1 my-1"),onClick:function(){o(""),e.showAlert("Text cleared","success")},children:"Clear"}),Object(s.jsx)("button",{className:"btn btn-".concat("blue"===e.darkColor?"primary":"red"===e.darkColor?"danger":"green"===e.darkColor?"success":"dark"," mx-1 my-1"),onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied","success")},children:"Copy Text"}),Object(s.jsx)("button",{className:"btn btn-".concat("blue"===e.darkColor?"primary":"red"===e.darkColor?"danger":"green"===e.darkColor?"success":"dark"," mx-1 my-1"),onClick:function(){var t=r.split(/[ ]+/);o(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:"Remove Extra Space"})]}),Object(s.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"black"},children:[Object(s.jsx)("h2",{children:"Your text summary"}),Object(s.jsxs)("p",{children:[r.match(/\S+/g)?r.match(/\S+/g).length:0," words and ",r.length," characters"]}),Object(s.jsxs)("p",{children:[.008*r.split(" ").length," Minutes to read"]}),Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)("p",{children:r.length>0?r:"/*Enter something to preview it here.*/"})]})]})}d.defaultProps={title:"Set Title Here",aboutText:"About"};var b=function(e){return e.alert&&Object(s.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(s.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};var u=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(null),l=Object(n.a)(o,2),u=l[0],m=l[1],j=Object(c.useState)("light"),h=Object(n.a)(j,2),x=h[0],g=h[1],p=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),2e3)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{title:"TextUtils",mode:a,toogleMode:function(e){"light"===e?(r("light"),g("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success")):(r("dark"),"blue"===e?(g("blue"),document.body.style.backgroundColor="#042743",p("Dark Blue mode has been enabled","success")):"red"===e?(g("red"),document.body.style.backgroundColor="#850909",p("Dark Red mode has been enabled","success")):(g("green"),document.body.style.backgroundColor="#106115",p("Dark Green mode has been enabled","success")))}}),Object(s.jsx)(b,{alert:u}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)(i,{showAlert:p,heading:"Enter the Text to analyze below",mode:a,darkColor:x})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),c(e),r(e),o(e),l(e)}))};l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.81e9a144.chunk.js.map