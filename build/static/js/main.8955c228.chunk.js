(this.webpackJsonpBohdanchat=this.webpackJsonpBohdanchat||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(4),r=c.n(a),s=c(14),i=c.n(s),o=(c(23),c(13)),u=c.n(o),l=c(15),j=c(10),b=(c(25),c(8)),d=(c(30),c(27),c(16)),h=c(17);b.a.initializeApp({apiKey:"AIzaSyCNO2asp4-fbpZ4Wr9eOoJufvghwrCF6M0",authDomain:"test-chat-3be6e.firebaseapp.com",projectId:"test-chat-3be6e",storageBucket:"test-chat-3be6e.appspot.com",messagingSenderId:"622935420397",appId:"1:622935420397:web:f9d868bc78a3fc1111cbe4"}),b.a.auth().useDeviceLanguage();var p=b.a.auth(),O=b.a.firestore();function f(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"google-box",children:[Object(n.jsxs)("div",{className:"google-btn",onClick:function(){var e=new b.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:[Object(n.jsx)("div",{className:"google-icon-wrapper",children:Object(n.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"logo"})}),Object(n.jsx)("div",{className:"btn-text",children:Object(n.jsx)("b",{children:"\u0412\u043e\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Google"})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{id:"recaptcha-container"})})]}),Object(n.jsxs)("div",{className:"flex-box",children:[Object(n.jsx)("input",{className:"phone-holder",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",type:"phone",value:c,onChange:function(e){r(e.target.value)}}),Object(n.jsx)("button",{id:"phone",type:"button",onClick:function(){var e=new b.a.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible"});p.signInWithPhoneNumber(c,e).then((function(e){var t=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u0438\u0437 \u0421\u041c\u0421","");null!==t&&e.confirm(t).then((function(e){console.log(e.user),document.querySelector("label").textContent+=e.user.phone+"\u041d\u043e\u043c\u0435\u0440 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d"})).catch((function(e){console.error(e)}))})).catch((function(e){console.error(e)}))},children:"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0421\u041c\u0421-\u043a\u043e\u0434\u0430"}),Object(n.jsx)("label",{})]})]})}var m=function(){return p.currentUser&&Object(n.jsx)("button",{type:"button",onClick:function(){return p.signOut()},children:"\u0412\u044b\u0445\u043e\u0434"})};function x(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(a.useRef)(),i=O.collection("messages"),o=i.orderBy("createdAt").limitToLast(25),d=Object(h.a)(o,{idField:"id"}),f=Object(j.a)(d,1)[0],m=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=p.currentUser,a=n.uid,s=n.photoURL,o=s||"https://bit.ly/348yGrm",e.next=5,i.add({text:c,createdAt:b.a.firestore.FieldValue.serverTimestamp(),uid:a,avatarPhoto:o});case 5:r("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s.current.scrollIntoView({behavior:"smooth"})}),[f]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"text-field",children:f&&f.map((function(e){return Object(n.jsx)(g,{message:e},e.id)}))}),Object(n.jsxs)("div",{className:"send-form",children:[Object(n.jsx)("span",{ref:s}),Object(n.jsxs)("form",{onSubmit:m,children:[Object(n.jsx)("input",{value:c,onChange:function(e){return r(e.target.value)},placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c"}),Object(n.jsx)("button",{type:"submit",disabled:!c,children:"\ud83d\udce4"})]})]})]})}var g=function(e){var t=e.message,c=t.text,a=t.uid,r=t.avatarPhoto,s=a===p.currentUser.uid?"sent":"received";return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"message ".concat(s),children:[Object(n.jsx)("img",{src:r,alt:"avatar"}),Object(n.jsx)("p",{children:c})]})})},v=function(){var e=Object(d.a)(p),t=Object(j.a)(e,1)[0];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"ReactFirebase chat from Bohdan"}),Object(n.jsx)(m,{})]}),Object(n.jsx)("section",{children:t?Object(n.jsx)(x,{}):Object(n.jsx)(f,{})})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),N()}},[[29,1,2]]]);
//# sourceMappingURL=main.8955c228.chunk.js.map