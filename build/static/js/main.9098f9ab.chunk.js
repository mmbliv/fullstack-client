(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{207:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(48),r=n.n(a),s=n(13),o=n(29),i=n.n(o),u=n(53),l=n(50),j=n(317),d=n(304),b=n(33),p=n(313),f=n(319),x=n(320),O=n(321),m=n(25),h=n(149),v=n.n(h),y=n(78),g=n.n(y),C="https://fullstack-post.herokuapp.com/posts",w=function(e){return g.a.post(C,e)},k=function(e){return g.a.delete("".concat(C,"/").concat(e))},D=function(e,t){return g.a.patch("".concat(C,"/").concat(e),t)},E=function(e,t){return g.a.patch("".concat(C,"/").concat(e,"/createcomment"),t)},I=function(e,t){g.a.delete("".concat(C,"/").concat(e,"/deletecomment"),{data:{deleteCommentID:t}})},_="CREATE",R="UPDATE",F="DELETE",S="FETCH_ALL",A="CREATECOMMENT",T=" DELETECOMMENT",L=function(e,t){return function(){var n=Object(u.a)(i.a.mark((function n(c){var a,r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E(e,t);case 3:a=n.sent,r=a.data,c({type:A,payload:r.commentData}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},M=function(e,t){return function(){var n=Object(u.a)(i.a.mark((function n(c){var a,r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D(e,t);case 3:a=n.sent,r=a.data,c({type:R,payload:r.post}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},W=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var c,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:c=t.sent,a=c.data,n({type:_,payload:a.post}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},z=n(57),U=n(318),N=n(94),B=n(74),J=(n(207),n(1)),P=function(e){var t=e.setCurrentID,n=e.currentID,a=e.posts.find((function(e){return e._id===n})),r=Object(m.f)(),o=Object(c.useRef)(),h=Object(z.b)(),y=Object(c.useState)(n?N.a.decode(a.selectedFile):""),g=Object(s.a)(y,2),C=g[0],w=g[1],k=Object(c.useState)(""),D=Object(s.a)(k,2),E=D[0],I=D[1],_=Object(c.useState)(n?a:{message:"",creator:"",selectedFile:""}),R=Object(s.a)(_,2),F=R[0],S=R[1];Object(c.useEffect)((function(){S(!E&&C&&n?Object(l.a)(Object(l.a)({},F),{},{selectedFile:F.selectedFile}):Object(l.a)(Object(l.a)({},F),{},{selectedFile:E}))}),[E]);var A=function(){var e=Object(u.a)(i.a.mark((function e(c){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),h(n?M(n,F):W(F)),S({message:"",creator:"",selectedFile:""}),t(),I(""),r.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsx)(j.a,{elevation:3,sx:{maxWidth:550,my:1,mx:"auto"},children:Object(J.jsx)(U.a,{sx:{maxWidth:400,my:1,mx:"auto"},children:Object(J.jsxs)("form",{onSubmit:A,children:[Object(J.jsx)(d.a,{label:"make a name",margin:"normal",multiline:!0,fullWidth:!0,value:F.creator,onChange:function(e){return S(Object(l.a)(Object(l.a)({},F),{},{creator:e.target.value}))}}),Object(J.jsx)(d.a,{label:"say something",multiline:!0,fullWidth:!0,value:F.message,minRows:5,onChange:function(e){return S(Object(l.a)(Object(l.a)({},F),{},{message:e.target.value}))}}),Object(J.jsx)(b.c,{inputComponent:"input",inputRef:o,type:"file",onChange:function(e){!function(e){var t=e.target.files[0],n=new FileReader,c=new FileReader;console.log("hi"),n.onloadend=function(){w(n.result)},n.readAsDataURL(t),c.onloadend=function(){I(N.a.encode(c.result)),console.log(E)},c.readAsDataURL(t)}(e)}}),C&&Object(J.jsxs)(p.a,{sx:{height:150,width:150},children:[Object(J.jsx)("img",{src:C,alt:"",sx:{position:"relative"}}),Object(J.jsx)(U.a,{sx:{position:"absolute",top:1,left:1,bgcolor:"grey"},children:Object(J.jsx)(f.a,{onClick:function(){return w(""),I(""),void(o.current.value="")},sx:{borderRadius:"none"},children:Object(J.jsx)(v.a,{style:{fontSize:"15px"}})})})]}),Object(J.jsxs)(x.a,{sx:{display:"flex",justifyContent:"space-around",mt:1},children:[Object(J.jsx)(O.a,{variant:"contained",size:"small",sx:{borderRadius:1,border:1,borderColor:"primary.main"},type:"submit",children:n?"UPDATA":"SUBMIT"}),Object(J.jsx)(B.b,{to:"/",style:{textDecoration:"none"},children:Object(J.jsx)(O.a,{variant:"contained",size:"small",sx:{borderRadius:1,border:1,borderColor:"primary.main"},onClick:function(){return t()},children:"CANCLE"})})]})]})})})},H=n(327),X=n(329),q=n(331),G=n(332),K=n(330),Q=n(333),V=n(334),Y=n(316),Z=n(335),$=n(305),ee=n(336),te=n(337),ne=n(152),ce=n.n(ne),ae=n(153),re=n.n(ae),se=n(154),oe=n.n(se),ie=n(314),ue=n(150),le=n.n(ue),je=n(322),de=n(151),be=n.n(de),pe=function(e){var t=e.post,n=e.deleteCommentBtn;return Object(J.jsx)(J.Fragment,{children:t.comments.map((function(e){return Object(J.jsxs)(j.a,{sx:{mb:3,bgcolor:"grey.200"},children:[Object(J.jsx)(x.a,{children:Object(J.jsx)(je.a,{children:e.body})}),Object(J.jsx)(f.a,{sx:{ml:45},onClick:function(){n(t._id,e._id)},children:Object(J.jsx)(be.a,{})})]},e._id)}))})},fe=function(e){var t=e.post,n=e.setCurrentID,a=(e.currentID,Object(z.b)()),r=Object(m.f)(),o=Object(c.useState)({body:""}),l=Object(s.a)(o,2),j=l[0],d=l[1],b=Object(c.useState)(!1),p=Object(s.a)(b,2),f=p[0],x=p[1],O=function(){var e;a((e=t._id,function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k(e);case 3:n({type:F,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()))},h=function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),a(L(t._id,j)),d({body:""}),x(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsxs)(H.a,{children:[Object(J.jsx)(X.a,{avatar:Object(J.jsx)(ie.a,{style:{backgroundColor:"#"+Math.floor(16777215*Math.random()).toString(16)},children:t.creator?t.creator[0].toUpperCase():"XO"}),title:t.creator,subheader:le()(t.createdAt).fromNow()}),t.selectedFile&&Object(J.jsx)(q.a,{component:"img",height:"194",image:N.a.decode(t.selectedFile),alt:""}),Object(J.jsx)(G.a,{children:Object(J.jsx)(K.a,{variant:"h4",color:"grey.700",children:t.message})}),Object(J.jsxs)(Q.a,{sx:{display:"flex",justifyContent:"space-evenly"},children:[Object(J.jsx)(V.a,{size:"small",onClick:function(){O()},children:Object(J.jsx)(ce.a,{})}),Object(J.jsx)(V.a,{size:"small",onClick:function(){n(t._id),r.push("/creat")},children:Object(J.jsx)(re.a,{})}),Object(J.jsx)(V.a,{size:"small",onClick:function(){return x(!0)},children:Object(J.jsx)(oe.a,{})})]}),Object(J.jsx)(Y.a,{onClose:function(){return x(!1)},onOpen:function(){return x(!0)},open:f,variant:"temporary",anchor:"bottom",children:Object(J.jsxs)(Z.a,{component:"form",onSubmit:h,children:[Object(J.jsx)($.a,{multiline:!0,minRows:5,value:j.body,onChange:function(e){d({body:e.target.value})},sx:{width:"100%",height:"100%"}}),Object(J.jsx)(ee.a,{type:"submit",variant:"text",sx:{position:"absolute",right:3,bottom:2},children:"submit"})]})}),t.comments&&Object(J.jsx)(te.a,{children:Object(J.jsx)(pe,{post:t,deleteCommentBtn:function(e,t){var n,c;a((n=e,c=t,function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(n,c);case 3:t({type:T,payload:{id:n,deleteCommentID:c}}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()))}})})]})},xe=n(323),Oe=n(315),me=function(e){var t=e.setCurrentID,n=e.currentID,c=e.posts;return c.length?Object(J.jsx)(j.a,{sx:{my:1,mx:"auto",maxWidth:550,bgcolor:"grey.50"},children:Object(J.jsx)(Oe.a,{container:!0,justifyContent:"center",alignItems:"center",children:c.reverse().map((function(e){return Object(J.jsx)(Oe.a,{item:!0,xs:12,sx:{py:2,maxWidth:450},children:Object(J.jsx)(fe,{post:e,setCurrentID:t,currentID:n})},e._id)}))})}):Object(J.jsx)(xe.a,{})},he=n(324),ve=n(325),ye=n(311),ge=n(326),Ce=n(156),we=n.n(Ce),ke=n(155),De=n.n(ke),Ee=n(157),Ie=n.n(Ee),_e=n(306),Re=Object(_e.a)((function(e){return{flexLayout:{display:"flex",justifyContent:"space-between"}}})),Fe=function(){var e=Re();return Object(J.jsx)(x.a,{maxWidth:"sm",children:Object(J.jsx)(he.a,{position:"static",children:Object(J.jsxs)(ve.a,{className:e.flexLayout,children:[Object(J.jsx)(f.a,{color:"inherit",children:Object(J.jsx)(ye.a,{badgeContent:17,color:"error",children:Object(J.jsx)(De.a,{})})}),Object(J.jsx)(B.b,{to:"/creat",children:Object(J.jsx)(ge.a,{children:Object(J.jsx)(we.a,{})})}),Object(J.jsx)(f.a,{color:"inherit",children:Object(J.jsx)(Ie.a,{})})]})})})},Se=function(){var e=Object(c.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(z.c)((function(e){return e.posts})),o=Object(z.b)();return Object(c.useEffect)((function(){o(function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(C);case 3:n=e.sent,c=n.data,t({type:S,payload:c.post}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[o]),Object(J.jsxs)(B.a,{children:[Object(J.jsx)(Fe,{}),Object(J.jsxs)(m.c,{children:[Object(J.jsx)(m.a,{exact:!0,path:"/",children:Object(J.jsx)(me,{setCurrentID:a,currentID:n,posts:r})}),Object(J.jsx)(m.a,{exact:!0,path:"/creat",children:Object(J.jsx)(P,{setCurrentID:a,currentID:n,posts:r})})]})]})},Ae=n(87),Te=n(158),Le=n(22),Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return console.log("fetch"),t.payload;case _:return[].concat(Object(Le.a)(e),[t.payload]);case F:return e.filter((function(e){return e._id!==t.payload}));case R:return e.map((function(e){return e._id===t.payload._id&&(e=t.payload),e}));case A:return e.map((function(e){return e._id===t.payload._id&&(e.comments=t.payload.comments),e}));case T:return e.map((function(e){return e._id===t.payload.id&&(e.comments=e.comments.filter((function(e){return e._id!==t.payload.deleteCommentID}))),e}));default:return e}},We=Object(Ae.b)({posts:Me}),ze=(n(219),Object(Ae.d)(We,Object(Ae.c)(Object(Ae.a)(Te.a))));r.a.render(Object(J.jsx)(z.a,{store:ze,children:Object(J.jsx)(Se,{})}),document.getElementById("root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.9098f9ab.chunk.js.map