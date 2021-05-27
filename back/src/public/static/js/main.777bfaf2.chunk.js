(this["webpackJsonpbulletin-front"]=this["webpackJsonpbulletin-front"]||[]).push([[0],{153:function(e,t,r){},206:function(e,t){},313:function(e,t,r){},314:function(e,t,r){"use strict";r.r(t);r(153);var a=r(1),n=r(20),s=r.n(n),c=r(19),i=r(7),o=r(328),l=r(51),u=r(139),b=r(140),d=r(3),j=r(13),h=r.n(j),p=r(24),m=r(141),O=r.n(m),x=r(142),y=r.n(x),g=r(143),f=r.n(g),v=r(144),w=r.n(v),S=O()(),k=f()("https://bulletins-app.herokuapp.com",{transports:["websocket"],forceNew:!0});S.configure(w()(k)),S.configure(y()({storage:window.localStorage,storageKey:"accessToken"}));var N=S.service("users"),C=S.service("bulletins"),T=S,R="LOADING_BULLETINS",D="GET_BULLETINS",E="FAILED_TO_GET",B="BULLETIN_CREATED",I={bulletins:[],error:"",loading:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:""});case D:return Object(d.a)(Object(d.a)({},e),{},{bulletins:t.payload,loading:!1});case E:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload,loading:!1});case B:return e.bulletins.find((function(e){return e._id===t.payload._id}))?e:Object(d.a)(Object(d.a)({},e),{},{bulletins:e.bulletins.concat(t.payload),error:"",loading:!1});default:return e}},_="GET_USER_STATE",L="LOADING_USER",U="REGISTER_SUCCESS",q="REGISTER_FAILED",A="LOGIN_SUCCESS",P="LOGOUT_FAILED",z="UPDATE_BULLETINS",W="CLEAR_LOGIN_STATE",G=function(e){return function(t){return t({type:z,payload:e})}},H=function(){return function(e){return e({type:W})}},J=function(e){return localStorage.setItem("userData",JSON.stringify(e))},M=function(){return JSON.parse(localStorage.getItem("userData"))},V=function(e){return localStorage.setItem("accessToken",e)},K=function(e){return localStorage.getItem("accessToken",e)},Q=function(){return localStorage.clear()},X=function(e){var t=M();t.bulletins.push(e),J(Object(d.a)({},t))},Y={userData:{accessToken:"",user:{_id:"",username:"",bulletins:[]}},loading:!1,error:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(d.a)(Object(d.a)({},e),{},{loading:!0,error:""});case _:return K()&&T.reAuthenticate(),{userData:{accessToken:K(),user:M()},loading:!1,error:""};case U:return J({_id:t.payload.user._id,username:t.payload.user.username,bulletins:[]}),V(t.payload.accessToken),Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:"",userData:t.payload});case q:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload,loading:!1});case A:return J({_id:t.payload.user._id,username:t.payload.user.username,bulletins:t.payload.user.bulletins}),V(t.payload.accessToken),Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:"",userData:t.payload});case P:return Object(d.a)(Object(d.a)({},e),{},{error:t.payload,loading:!1});case W:return Q(),T.logout(),{userData:{},loading:!1,error:""};case z:return X(t.payload),{userData:Object(d.a)(Object(d.a)({},e.userData),{},{user:Object(d.a)(Object(d.a)({},e.userData.user),{},{bulletins:e.userData.user.bulletins.concat(t.payload)})}),loading:!1,error:""};default:return e}},$=Object(l.combineReducers)({userState:Z,bulletinsState:F}),ee=Object(l.createStore)($,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(b.a))),te=r(8),re=r(21),ae=r(10),ne=r(320),se=r(89);var ce=function(e){var t=Object(a.useState)({}),r=Object(ae.a)(t,2),n=r[0],s=r[1];return Object(a.useEffect)((function(){0===Object.keys(n).length&&s({width:document.getElementById(e).clientWidth});var t=function(){return s({width:document.getElementById(e).clientWidth})};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[e,n]),n},ie=r(2),oe=function(e){var t=e.bulletin,r=e.index,a=e.indexCount,n=e.handleClick,s=e.active,c={width:ce("headerCard").width};return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)("h3",{children:Object(ie.jsx)("button",{type:"button",onClick:function(e){return n(e,r)},className:s===r?"accordionBtn active":"accordionBtn inactive",style:c,"aria-expanded":s===r?"true":"false","aria-controls":"sect-".concat(a(r)),"aria-disabled":s===r?"true":"false",tabIndex:a(r),children:Object(ie.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"space-between"},children:[Object(ie.jsx)("span",{className:"accordion-title-wrapper",children:t.header}),s===r?Object(ie.jsx)(se.b,{size:22}):Object(ie.jsx)(se.a,{size:22})]})})}),Object(ie.jsx)("div",{id:"sect-".concat(a(r)),style:c,className:s===r?"panel-open":"panel-close",children:t.description})]})},le=function(){var e=Object(i.c)((function(e){return e.bulletinsState.bulletins})),t=Object(a.useState)(-1),r=Object(ae.a)(t,2),n=r[0],s=r[1],c=function(e,t){e.preventDefault(),s(n===t?-1:t)},o=function(e){return e+1};return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsxs)("div",{className:"centercenter",children:[Object(ie.jsxs)("div",{className:"headerCard",id:"headerCard",children:[Object(ie.jsx)(ne.a,{type:"headline-4",children:"Bulletin board"}),Object(ie.jsx)(ne.a,{type:"body-1",children:"This will be where you can see the bulletins and perhaps filter them with category etc."})]}),Object(ie.jsx)("br",{})]}),Object(ie.jsx)("br",{}),Object(ie.jsx)("form",{children:e.sort((function(e,t){return new Date(t.createdAt).getTime()-new Date(e.createdAt).getTime()})).map((function(e,t){return Object(ie.jsx)("div",{className:"accordionWrap",children:Object(ie.jsx)(oe,{bulletin:e,index:t,handleClick:c,indexCount:o,active:n})},e._id)}))})]})},ue=r(17),be=r(315),de=r(322),je=r(42),he=r(321),pe=function(e){var t=e.label,r=e.name,a=e.type,n=Object(je.a)(e,["label","name","type"]),s=Object(ue.b)(r),c=Object(ae.a)(s,2),i=c[0],o=c[1],l=o.touched&&o.error;return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(he.a,Object(d.a)(Object(d.a)({className:"authFormInput",theme:"underline",id:r,label:t,name:r,type:a},i),n)),Object(ie.jsx)("div",{className:"errorMessage",style:l?{marginBottom:20,alignSelf:"flex-start"}:{marginBottom:41},children:Object(ie.jsx)("small",{style:{color:"red"},children:l?o.error:null})})]})},me=r(14),Oe=me.a({username:me.c().max(20,"Username must be 20 characters or less").min(4,"Username must be 4 characters or more").required("Username is required"),password:me.c().max(15,"Password must be 15 characters or less").min(5,"Password must be at least 5 characters").required("Password is required"),passwordConfirm:me.c().oneOf([me.b("password")],"Passwords do not match").required("Password confirmation is required")}),xe=me.a({username:me.c().max(20,"Username must be 20 characters or less").min(4,"Username must be 4 characters or more").required("Username is required"),password:me.c().max(15,"Password must be 15 characters or less").min(5,"Password must be at least 5 characters").required("Password is required")}),ye={username:"",password:""},ge=function(e){var t=e.onSubmit,r=e.resetForm,a=e.values,n=e.setShowRegister,s=Object(i.b)();return Object(ie.jsxs)(de.a,{children:[Object(ie.jsxs)("div",{className:"authInputWrap",children:[Object(ie.jsx)(pe,{name:"username",label:"Username",type:"text",value:a.username}),Object(ie.jsx)(pe,{name:"password",label:"Password",type:"password",value:a.password})]}),Object(ie.jsxs)("div",{className:"authBtnWrap",children:[Object(ie.jsxs)("div",{style:{color:"grey",margin:"5px"},children:[Object(ie.jsx)("small",{children:"Don't have an account?"}),Object(ie.jsx)("br",{}),Object(ie.jsx)("small",{style:{cursor:"pointer"},"aria-hidden":"true",onClick:function(){return n(!0)},children:"Register here!"})]}),Object(ie.jsxs)("div",{className:"authBtnWrap",children:[Object(ie.jsx)(be.a,{type:"reset",onClick:function(){return r(),void s(H())},themeType:"contained",style:{margin:"2px"},children:"reset"}),Object(ie.jsx)(be.a,{type:"submit",onClick:t,themeType:"contained",style:{margin:"2px"},children:"submit"})]})]})]})},fe=function(e){var t=e.onSubmit,r=e.setShowRegister;return Object(ie.jsxs)("div",{className:"authCard",children:[Object(ie.jsx)(ne.a,{type:"headline-4",children:"Login"}),Object(ie.jsx)(ue.a,{initialValues:ye,onSubmit:t,validationSchema:xe,children:function(e){var t=e.handleSubmit,a=e.resetForm,n=e.values;return Object(ie.jsx)(ge,{onSubmit:t,resetForm:a,values:n,setShowRegister:r})}})]})},ve={username:"",password:"",passwordConfirm:""},we=function(e){var t=e.onSubmit,r=e.resetForm,a=e.values,n=e.setShowRegister,s=Object(i.b)(),c=Object(i.c)((function(e){return e.userState.error})),o=Object(re.f)();c&&(o({action:"Close",children:c}),s(H()));return Object(ie.jsxs)(de.a,{children:[Object(ie.jsxs)("div",{className:"authInputWrap",children:[Object(ie.jsx)(pe,{name:"username",label:"Username",type:"text",value:a.username}),Object(ie.jsx)(pe,{name:"password",label:"Password",type:"password",value:a.password}),Object(ie.jsx)(pe,{name:"passwordConfirm",label:"Password confirmation",type:"password",value:a.passwordConfirm})]}),Object(ie.jsxs)("div",{className:"authBtnWrap",children:[Object(ie.jsxs)("div",{style:{color:"grey",margin:"5px"},children:[Object(ie.jsx)("small",{children:"Already have an account?"}),Object(ie.jsx)("br",{}),Object(ie.jsx)("small",{style:{cursor:"pointer"},"aria-hidden":"true",onClick:function(){return n(!1)},children:"Login here!"})]}),Object(ie.jsxs)("div",{className:"authBtnWrap",children:[Object(ie.jsx)(be.a,{type:"reset",onClick:function(){return r(),void s(H())},themeType:"contained",style:{margin:"2px"},children:"reset"}),Object(ie.jsx)(be.a,{type:"submit",onClick:t,themeType:"contained",style:{margin:"2px"},children:"submit"})]})]})]})},Se=function(e){var t=e.onSubmit,r=e.setShowRegister;return Object(ie.jsxs)("div",{className:"authCard",children:[Object(ie.jsx)(ne.a,{type:"headline-4",children:"Register"}),Object(ie.jsx)(ue.a,{initialValues:ve,onSubmit:t,validationSchema:Oe,children:function(e){var t=e.handleSubmit,a=e.resetForm,n=e.values;return Object(ie.jsx)(we,{onSubmit:t,resetForm:a,values:n,setShowRegister:r})}})]})},ke=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.userState.userData})),r=Object(te.h)(),n=Object(a.useState)(),s=Object(ae.a)(n,2),c=s[0],o=s[1];Object(a.useEffect)((function(){o(!!r.state&&r.state.showRegister)}),[r.state]);return t&&t.accessToken?Object(ie.jsx)(te.a,{to:"/userpage"}):Object(ie.jsx)("div",{className:"centercenter",style:{width:"100%"},children:c?Object(ie.jsx)(Se,{onSubmit:function(t,r){var a,n=r.resetForm;e((a=t,function(){var e=Object(p.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:L}),e.prev=1,e.next=4,N.create(a);case 4:return e.next=6,T.authenticate({username:a.username,password:a.password,strategy:"local"});case 6:r=e.sent,t({type:U,payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:q,payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())),n()},setShowRegister:o}):Object(ie.jsx)(fe,{onSubmit:function(t,r){var a=r.resetForm;e(function(e){return function(){var t=Object(p.a)(h.a.mark((function t(r){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:L}),t.prev=1,t.next=4,T.authenticate(Object(d.a)(Object(d.a)({},e),{},{strategy:"local"}));case 4:a=t.sent,r({type:A,payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:P,payload:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t)),a()},setShowRegister:o})})},Ne=function(){return Object(ie.jsx)("div",{className:"centercenter",children:Object(ie.jsxs)("div",{className:"headerCard",children:[Object(ie.jsx)(ne.a,{type:"headline-4",children:"Home page!"}),Object(ie.jsx)(ne.a,{type:"body-1",children:"This will be a bulletin board app. Main purpose is to learn how to use FeathersJs and sockets."})]})})},Ce=r(327),Te=r(325),Re=r(323),De=r(324),Ee=r(27),Be=r(326),Ie=function(e){var t=e.label,r=e.name,a=e.rows,n=Object(je.a)(e,["label","name","rows"]),s=Object(ue.b)(r),c=Object(ae.a)(s,2),i=c[0],o=c[1],l=o.touched&&o.error;return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Be.a,Object(d.a)(Object(d.a)({className:"authFormInput",theme:"underline",id:r,label:t,name:r,type:"text",rows:a},i),n)),Object(ie.jsx)("div",{className:"errorMessage",style:l?{marginBottom:20,alignSelf:"flex-start"}:{marginBottom:41},children:Object(ie.jsx)("small",{style:{color:"red"},children:l?o.error:null})})]})},Fe=r(330),_e=[{value:"",key:""},{value:"forSale",key:"For sale"},{value:"housing",key:"Housing"},{value:"jobs",key:"Jobs"},{value:"services",key:"Services"}],Le=function(e){var t=e.label,r=e.name,n=e.options,s=Object(je.a)(e,["label","name","options"]),c=Object(a.useState)(),i=Object(ae.a)(c,2),o=i[0],l=i[1];Object(a.useEffect)((function(){"bulletinOptions"===n&&l(_e)}),[n]);var u=Object(ue.b)(r),b=Object(ae.a)(u,2),j=b[0],h=b[1],p=h.touched&&h.error;return o?Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsxs)(Fe.a,Object(d.a)(Object(d.a)(Object(d.a)({className:"authFormInput",theme:"underline",label:t,id:r,name:r,icon:null},j),s),{},{children:[t&&Object(ie.jsx)("option",{value:"",disabled:!0,hidden:!0},"label"),o.map((function(e){return Object(ie.jsx)("option",{value:e.value,children:e.key},e.value)}))]})),Object(ie.jsx)("div",{className:"errorMessage",style:p?{marginBottom:20,alignSelf:"flex-start"}:{marginBottom:41},children:Object(ie.jsx)("small",{style:{color:"red"},children:p?h.error:null})})]}):null},Ue={header:"",description:"",category:""},qe=me.a({header:me.c().max(50,"Header must be 50 characters or less").min(5,"Header must be 5 characters or more").required("Header is required"),description:me.c().max(250,"Description must be 250 characters or less").min(20,"Description must be at least 20 characters").required("Description is required"),category:me.c().required("Please select category")}),Ae=function(e){var t=e.onSubmit,r=e.resetForm,a=e.values;return Object(ie.jsxs)(de.a,{children:[Object(ie.jsxs)("div",{className:"authInputWrap",children:[Object(ie.jsx)(pe,{name:"header",label:"Header",type:"text",value:a.header}),Object(ie.jsx)(Ie,{name:"description",label:"Description",type:"text",resize:"vertical",rows:3,value:a.description}),Object(ie.jsx)(Le,{name:"category",label:"Category",options:"bulletinOptions"})]}),Object(ie.jsxs)("div",{className:"bulletBtnWrap",children:[Object(ie.jsx)(be.a,{type:"reset",onClick:function(){r()},themeType:"contained",style:{margin:"2px"},children:"reset"}),Object(ie.jsx)(be.a,{type:"submit",onClick:t,themeType:"contained",style:{margin:"2px"},children:"submit"})]})]})},Pe=function(e){var t=e.onSubmit;return Object(ie.jsxs)("div",{className:"newBulletinCard",children:[Object(ie.jsx)(ne.a,{type:"headline-4",style:{marginTop:"10px"},children:"Create new"}),Object(ie.jsx)(ue.a,{initialValues:Ue,onSubmit:t,validationSchema:qe,children:function(e){var t=e.handleSubmit,r=e.resetForm,a=e.values;return Object(ie.jsx)(Ae,{onSubmit:t,resetForm:r,values:a})}})]})},ze=function(){var e=Object(i.b)(),t=Object(re.f)();return{createBulletin:function(){var r=Object(p.a)(h.a.mark((function r(a,n){var s,c;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,s=M(),r.next=4,C.create(Object(d.a)(Object(d.a)({},a),{},{user:s._id}));case 4:c=r.sent,e(G(c)),n(!1),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),t({action:"Close",children:"Error: ".concat(r.t0.message)});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e,t){return r.apply(this,arguments)}}()}},We=function(e){var t=e.showDialog,r=e.setShowDialog,a=ze().createBulletin,n=function(){var e=Object(p.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t,r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(ie.jsxs)(Ce.a,{id:"image-preview-dialog",type:"full-page",visible:t,onRequestClose:function(){return r(!1)},"aria-labelledby":"dialog-title",children:[Object(ie.jsx)(Re.a,{theme:"secondary",children:Object(ie.jsx)(De.a,{onClick:function(){return r(!1)},"aria-label":"Close",children:Object(ie.jsx)(Ee.a,{size:30})})}),Object(ie.jsx)(Te.a,{className:"centerVertical",children:Object(ie.jsx)(Pe,{onSubmit:n})})]})},Ge=function(){var e=Object(i.c)((function(e){return e.userState.userData.user})),t=Object(a.useState)(!1),r=Object(ae.a)(t,2),n=r[0],s=r[1];return Object(ie.jsxs)("div",{className:"centercenter",children:[Object(ie.jsxs)("div",{className:"headerCard",children:[Object(ie.jsxs)(ne.a,{type:"headline-4",children:["Hi, ",e.username,"!"]}),Object(ie.jsx)(ne.a,{type:"body-1",children:"This will be a user page, where users can see their bulletins and create new, edit or delete old ones."}),Object(ie.jsx)("br",{}),Object(ie.jsx)(be.a,{type:"button",themeType:"contained",onClick:function(){return s(!0)},children:"Create new"})]}),Object(ie.jsx)(We,{showDialog:n,setShowDialog:s})]})},He=function(e){var t=e.path,r=e.component,a=e.exact;return K()?Object(ie.jsx)(te.b,{path:t,exact:a,component:r}):Object(ie.jsx)(te.a,{to:"/auth"})};He.defaultProps={exact:!1};var Je=He,Me=r(331),Ve={textDecoration:"none",color:"grey",display:"flex",alignItems:"center"},Ke={borderRadius:"5px",height:"30px",marginLeft:"5px",marginRight:"5px",padding:"10px"},Qe=function(){var e=Object(i.c)((function(e){return e.userState.userData})),t=Object(i.b)(),r=Object(te.g)();return Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsxs)("div",{id:"Navbar",children:[Object(ie.jsx)(Me.a,{style:Object(d.a)(Object(d.a)({},Ke),{},{width:100}),children:Object(ie.jsxs)(c.b,{to:"/",style:Ve,children:[Object(ie.jsx)(Ee.c,{size:22,style:{marginBottom:"5px",marginRight:"5px"}}),Object(ie.jsx)(ne.a,{type:"button",component:"p",style:{marginRight:"5px"},children:"Home"})]})}),Object(ie.jsx)(Me.a,{style:Object(d.a)(Object(d.a)({},Ke),{},{width:140}),children:Object(ie.jsxs)(c.b,{to:"/bulletins",style:Ve,children:[Object(ie.jsx)(Ee.b,{size:22,style:{marginBottom:"5px",marginRight:"5px"}}),Object(ie.jsx)(ne.a,{type:"button",component:"p",style:{marginRight:"5px"},children:"bulletins"})]})}),e&&e.accessToken?Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Me.a,{style:Object(d.a)(Object(d.a)({},Ke),{},{width:130}),children:Object(ie.jsxs)(c.b,{to:"/userpage",style:Ve,children:[Object(ie.jsx)(Ee.g,{size:22,style:{marginBottom:"5px",marginRight:"5px"}}),Object(ie.jsx)(ne.a,{type:"button",component:"p",style:{marginRight:"5px"},children:"userpage"})]})}),Object(ie.jsx)(Me.a,{style:Object(d.a)(Object(d.a)({},Ke),{},{marginLeft:"auto",width:110}),children:Object(ie.jsxs)("span",{onClick:function(){return t(H()),void r.push("/")},style:Ve,"aria-hidden":"true",children:[Object(ie.jsx)(Ee.f,{size:22,style:{marginBottom:"5px",marginRight:"5px"}}),Object(ie.jsx)(ne.a,{type:"button",component:"p",style:{marginRight:"5px"},children:"logout"})]})})]}):Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Me.a,{style:Object(d.a)(Object(d.a)({},Ke),{},{width:110}),children:Object(ie.jsxs)(c.b,{to:{pathname:"/auth",state:{showRegister:!1}},style:Ve,children:[Object(ie.jsx)(Ee.d,{size:22,style:{marginBottom:"5px",marginRight:"5px"}}),Object(ie.jsx)(ne.a,{type:"button",component:"p",style:{marginRight:"5px"},children:"login"})]})}),Object(ie.jsx)(Me.a,{style:Object(d.a)(Object(d.a)({},Ke),{},{width:130}),children:Object(ie.jsxs)(c.b,{to:{pathname:"/auth",state:{showRegister:!0}},style:Ve,children:[Object(ie.jsx)(Ee.e,{size:22,style:{marginBottom:"5px",marginRight:"5px"}}),Object(ie.jsx)(ne.a,{type:"button",component:"p",style:{marginRight:"5px"},children:"register"})]})})]})]})})},Xe=function(){return Object(ie.jsx)("div",{className:"centercenter",children:Object(ie.jsx)("div",{className:"headerCard",children:Object(ie.jsx)(ne.a,{type:"headline-4",children:"Nothing here ... :("})})})},Ye=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.userState.error})),r=Object(i.c)((function(e){return e.bulletinsState.error})),n=Object(re.f)();return C.on("created",(function(t){return e((r=t,function(e){e({type:B,payload:r})}));var r})),Object(a.useEffect)((function(){e((function(e){return e({type:_})})),e(function(){var e=Object(p.a)(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:R}),e.prev=1,e.next=4,C.find({});case 4:r=e.sent,t({type:D,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:E,payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){(t||r)&&(n({action:"Close",children:t||r}),e(H()))}),[n,r,e,t]),Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(Qe,{}),Object(ie.jsx)("div",{children:Object(ie.jsxs)(te.d,{children:[Object(ie.jsx)(te.b,{exact:!0,path:"/",component:Ne}),Object(ie.jsx)(te.b,{path:"/bulletins",component:le}),Object(ie.jsx)(te.b,{path:"/auth",component:ke}),Object(ie.jsx)(Je,{path:"/userpage",component:Ge}),Object(ie.jsx)(te.b,{component:Xe})]})})]})};r(313);s.a.render(Object(ie.jsx)(i.a,{store:ee,children:Object(ie.jsx)(c.a,{children:Object(ie.jsx)(o.a,{id:"main-alerts",children:Object(ie.jsx)(Ye,{})})})}),document.getElementById("root"))}},[[314,1,2]]]);
//# sourceMappingURL=main.777bfaf2.chunk.js.map