(this["webpackJsonpeasy-start-react"]=this["webpackJsonpeasy-start-react"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={input:"ContactForm_input__2t_WC",from:"ContactForm_from__4I7tI"}},,function(t,e,n){t.exports={filter:"Filter_filter__mdm9j",filter__label:"Filter_filter__label__34YfN",filter__input:"Filter_filter__input__1hjog"}},,,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},function(t,e,n){t.exports={header:"Header_header__1w2Ii"}},function(t,e,n){t.exports={main:"Main_main__1CPpf"}},function(t,e,n){t.exports={footer:"Footer_footer__1n-iQ"}},function(t,e,n){t.exports={container:"Container_container__3zKm0"}},function(t,e,n){t.exports={title:"Section_title__3UlyK"}},function(t,e,n){t.exports={"contact-list":"ContactList_contact-list__3FEKP"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),c=n(9),i=n.n(c),o=(n(23),n(10)),s=n(18),l=n(2),u=n(3),j=n(5),d=n(4),b=n(27),h=n(11),m=n(12),f=n.n(m),p=n(0),O=function(t){var e=t.children;return Object(p.jsx)("header",{className:f.a.header,children:e})},x=n(13),_=n.n(x),C=function(t){var e=t.children;return Object(p.jsx)("header",{className:_.a.main,children:e})},v=n(14),y=n.n(v),g=function(t){var e=t.children;return Object(p.jsx)("footer",{className:y.a.footer,children:e})},N=n(15),F=n.n(N),S=function(t){var e=t.children,n=(t.borderClass,[F.a.container]);return Object(p.jsx)("div",{className:n,children:e})},k=n(16),A=n.n(k),H=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.children;return Object(p.jsxs)("section",{children:[Object(p.jsx)("h2",{className:A.a.title,children:e}),n]})}}]),n}(r.Component),w=n(6),I=n.n(w),z=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.onFormSubmit,n=t.inputHandler;return Object(p.jsxs)("form",{className:I.a.from,onSubmit:e,children:[Object(p.jsxs)("label",{children:["Name:",Object(p.jsx)("input",{className:I.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:n,required:!0})]}),Object(p.jsxs)("label",{children:["Number:",Object(p.jsx)("input",{className:I.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:n,required:!0})]}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(r.Component),D=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contactName,n=t.contactNumber,r=t.onDeleteContact,a=t.id;return Object(p.jsxs)("li",{children:[e," : ",n,Object(p.jsxs)("button",{type:"button",onClick:function(){return r(a)},children:[" ","Delete"]})]})}}]),n}(r.Component),J=n(17),K=n.n(J),E=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.contacts,r=t.deleteContactHandler;return Object(p.jsxs)("section",{children:[e,n.length?Object(p.jsx)("ul",{className:K.a["contact-list"],children:n.map((function(t){return Object(p.jsx)(D,{id:t.id,contactName:t.name,contactNumber:t.number,onDeleteContact:r},t.id)}))}):Object(p.jsx)("p",{children:"Nothing to see here"})]})}}]),n}(r.Component),L=n(8),M=n.n(L),P=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.filterHandler;return Object(p.jsx)("div",{children:Object(p.jsxs)("label",{className:M.a.filter__label,children:["Find contacts by Name",Object(p.jsx)("br",{}),Object(p.jsx)("input",{className:M.a.filter__input,type:"text",onChange:t})]})})}}]),n}(r.Component),Z=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={contacts:h,filter:"",name:"",number:""},t.onFormSubmit=function(e){if(e.preventDefault(),t.state.contacts.some((function(e){return e.name===t.state.name})))return alert("".concat(t.state.name," is already in contacts.")),void e.currentTarget.reset();t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[{name:t.name,number:t.number,id:Object(b.a)()}])}})),e.currentTarget.reset()},t.handleInputChange=function(e){var n=e.target.name,r=e.target.value;t.setState(Object(o.a)({},n,r))},t.handleFilterChange=function(e){var n=e.target.value.toLowerCase();t.setState({filter:n})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,r=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(r)}))},t.deleteConact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)(r.Fragment,{children:[Object(p.jsx)(O,{}),Object(p.jsx)(C,{children:Object(p.jsxs)(H,{title:"Phonebook",children:[Object(p.jsx)(S,{children:Object(p.jsx)(z,{onFormSubmit:this.onFormS\u0425\u0432\u0430\u0442\u0438\u0442ubmit,inputHandler:this.handleInputChange})}),Object(p.jsxs)(S,{children:[Object(p.jsx)("h2",{children:"Filter"}),Object(p.jsx)(S,{children:Object(p.jsx)(P,{filterHandler:this.handleFilterChange})}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(E,{contacts:this.getFilteredContacts(),deleteContactHandler:this.deleteConact})]})]})}),Object(p.jsx)(g,{})]})}}]),n}(r.Component);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Z,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.c63ff304.chunk.js.map