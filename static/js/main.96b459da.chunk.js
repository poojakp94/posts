(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(9),r=a.n(n),s=(a(94),a(16)),o=a(14),c=a(140),l=a(143),d=a(145),h=a(147),p=a(148),u=a(149),b=a(154),j=a(146),m=a(62),y=a(61),g=a(74),x=a.n(g),O=a(75),f=a.n(O),v=a(73),w=a.n(v),k=a(13),P="LIKE_POST",T="DISLIKE_POST",C="CREATE_POST",S="EDIT_POST",E="SEARCH_POST",A=a(29),I=a(2),N=Object(c.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},avatar:{backgroundColor:y.a[500]}}}));var _,D=function(e){var t=e.data,a=N(),i=Object(k.b)(),n=Object(k.c)((function(e){return e}));return Object(I.jsxs)(l.a,{className:a.root,children:[Object(I.jsx)(d.a,{avatar:Object(I.jsx)(b.a,{"aria-label":"movie",className:a.avatar}),action:Object(I.jsx)(j.a,{"aria-label":"settings",children:Object(I.jsx)(w.a,{})}),title:"".concat(t.title)}),Object(I.jsx)(h.a,{style:{height:"100px",overflow:"hidden"},children:Object(I.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:t.synopsis})}),Object(I.jsxs)(p.a,{disableSpacing:!0,children:[Object(I.jsx)(j.a,{"aria-label":"add to favorites",onClick:function(){return i((e=t.id,{type:P,payload:{id:e}}));var e},children:Object(I.jsx)(x.a,{color:n.likedPosts.includes(t.id)?"Primary":"textSecondary"})}),Object(I.jsx)(j.a,{"aria-label":"add to not-favorites",onClick:function(){return i((e=t.id,{type:T,payload:{id:e}}));var e},children:Object(I.jsx)(f.a,{color:n.dislikedPosts.includes(t.id)?"Primary":"TextPrimary"})}),Object(I.jsx)(A.b,{to:"/edit/".concat(t.id),children:Object(I.jsx)(u.a,{size:"small",color:"primary",children:"Edit"})}),Object(I.jsx)(A.b,{to:"/description/".concat(t.id),children:Object(I.jsx)(u.a,{size:"small",color:"primary",children:"Read More"})})]})]})},H=o.a.div(_||(_=Object(s.a)(["\n    padding: 40px;\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n    \n"])));var M,z,R=function(){var e=Object(k.c)((function(e){return e})),t=new RegExp(e.searchText,"i");return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{variant:"h6",align:"center",color:"textPrimary",style:{borderBottom:"3px solid blue",width:" 200px",margin:"0 auto"},children:"All Posts"}),Object(I.jsx)(H,{children:e.posts.filter((function(e){return e.title.match(t)||e.synopsis.match(t)})).map((function(e){return Object(I.jsx)(D,{data:e},e.id)}))})]})},W=a(12),L=a(27),F=a(150),B=a(151),G=a(19),K=a(153),J=a(79),U=a.n(J),V=(a(103),Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(L.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(L.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(G.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(G.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(L.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}))),X=Object(o.a)(A.c)(M||(M=Object(s.a)(["\n    text-decoration: none;\n    color:white;\n    &:hover {\n      color: coral;\n    }\n  "]))),Y=o.a.div(z||(z=Object(s.a)(["\n    display: flex;\n    gap: 20px;\n    padding: 0 20px;\n  "])));var q,Q=function(){var e=V(),t=Object(k.b)();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(F.a,{position:"static",style:{marginBottom:"40px",backgroundColor:"#0F171E"},children:Object(I.jsxs)(B.a,{children:[Object(I.jsx)(m.a,{className:e.title,variant:"subtitle1",noWrap:!0,children:Object(I.jsx)(X,{to:"/",exact:!0,activeClassName:"is-active",children:"Posts"})}),Object(I.jsxs)(Y,{children:[Object(I.jsx)(X,{to:"/likes",exact:!0,activeClassName:"is-active",children:"Liked Posts"}),Object(I.jsx)(X,{to:"/dislikes",exact:!0,activeClassName:"is-active",children:"Disliked Posts"}),Object(I.jsx)(X,{to:"/create",exact:!0,activeClassName:"is-active",children:"Create Post"})]}),Object(I.jsxs)("div",{className:e.search,children:[Object(I.jsx)("div",{className:e.searchIcon,children:Object(I.jsx)(U.a,{})}),Object(I.jsx)(K.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){var a;t((a=e.target.value,console.log(a),{type:E,payload:{text:a}}))}})]})]})})})},Z=o.a.div(q||(q=Object(s.a)(["\n    padding: 40px;\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n"])));var $,ee=function(){var e=Object(k.c)((function(e){return e}));return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{variant:"h6",align:"center",color:"textPrimary",style:{borderBottom:"3px solid blue",width:" 200px",margin:"0 auto"},children:"Liked Posts"}),Object(I.jsx)(Z,{children:e.posts.map((function(t){if(e.likedPosts.includes(t.id))return Object(I.jsx)(D,{data:t},t.id)}))})]})},te=o.a.div($||($=Object(s.a)(["\n    padding: 40px;\n    display: flex;\n    gap: 15px;\n    flex-wrap: wrap;\n"])));var ae,ie,ne,re=function(){var e=Object(k.c)((function(e){return e}));return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(m.a,{variant:"h6",align:"center",color:"textPrimary",style:{borderBottom:"3px solid blue",width:" 200px",margin:"0 auto"},children:"Disliked Posts"}),Object(I.jsx)(te,{children:e.posts.map((function(t){if(e.dislikedPosts.includes(t.id))return Object(I.jsx)(D,{data:t},t.id)}))})]})},se=a(81),oe=o.a.div(ae||(ae=Object(s.a)(["\n  height: 100%;\n  padding: 20px;\n  flex: 1;\n"]))),ce=Object(o.a)(oe)(ie||(ie=Object(s.a)(["\n  display: block;\n  text-align: center;\n"]))),le=Object(o.a)(se.a)(ne||(ne=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 50px;\n  \n"])));var de,he,pe=function(){var e=Object(k.c)((function(e){return e.posts})),t=Object(W.f)().id,a=e.find((function(e){return Number(e.id)===Number(t)}));return Object(I.jsx)(oe,{children:a?Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(le,{children:[Object(I.jsx)(m.a,{variant:"h6",children:a.title}),Object(I.jsxs)(m.a,{variant:"subtitle1",children:["Synopsis :",Object(I.jsx)(m.a,{variant:"body2",children:a.synopsis})]}),Object(I.jsxs)(m.a,{variant:"body2",children:["Director: ",a.director]})]})}):Object(I.jsx)(ce,{children:" 404 Item not found!"})})},ue=a(17),be=a(60),je=a(152),me=o.a.form(de||(de=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 20px 0;\n    width: inherit;\n"]))),ye=Object(o.a)(je.a)(he||(he=Object(s.a)(["\n    width: 500px;\n"]))),ge={title:"",synopsis:"",director:""};var xe,Oe,fe=function(){var e=Object(i.useState)(ge),t=Object(be.a)(e,2),a=t[0],n=t[1],r=Object(k.b)(),s=function(e){var t=e.target,i=t.name,r=t.value;n(Object(ue.a)(Object(ue.a)({},a),{},Object(L.a)({},i,r)))};return Object(I.jsxs)(se.a,{elevation:3,style:{width:"700px",padding:"50px 0px",margin:"0 auto"},children:[Object(I.jsx)(m.a,{variant:"h6",align:"center",color:"textPrimary",children:"Create Post"}),Object(I.jsx)("hr",{}),Object(I.jsxs)(me,{onSubmit:function(e){e.preventDefault(),r({type:C,payload:{newPost:a}})},noValidate:!0,autoComplete:"off",children:[Object(I.jsx)(ye,{id:"title",name:"title",type:"text",label:"Title",variant:"outlined",onChange:s,value:a.title}),Object(I.jsx)(ye,{id:"synopsis",name:"synopsis",type:"text",label:"Synopsis",multiline:!0,variant:"outlined",onChange:s,value:a.synopsis}),Object(I.jsx)(ye,{id:"director",name:"director",type:"text",label:"Director",variant:"outlined",onChange:s,value:a.director}),Object(I.jsx)(u.a,{variant:"contained",color:"primary",type:"submit",children:"Create"})]})]})},ve=o.a.form(xe||(xe=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    padding: 20px 0;\n"]))),we=Object(o.a)(je.a)(Oe||(Oe=Object(s.a)(["\n    width: 500px;\n"])));var ke=function(){var e=Object(k.c)((function(e){return e.posts})),t=Object(W.f)().id,a=e.find((function(e){return Number(e.id)===Number(t)})),n={id:a.id,title:a.title,synopsis:a.synopsis,director:a.director},r=Object(i.useState)(n),s=Object(be.a)(r,2),o=s[0],c=s[1],l=Object(k.b)(),d=function(e){var t=e.target,a=t.name,i=t.value;c(Object(ue.a)(Object(ue.a)({},o),{},Object(L.a)({},a,i)))};return Object(I.jsxs)(se.a,{elevation:3,style:{width:"700px",padding:"50px 0px",margin:"0 auto"},children:[Object(I.jsx)(m.a,{variant:"h6",align:"center",color:"textPrimary",children:"Edit Post"}),Object(I.jsx)("hr",{}),Object(I.jsxs)(ve,{onSubmit:function(e){e.preventDefault(),l({type:S,payload:{post:o}})},noValidate:!0,autoComplete:"off",children:[Object(I.jsx)(we,{id:"title",name:"title",type:"text",label:"Title",variant:"outlined",onChange:d,value:o.title}),Object(I.jsx)(we,{id:"synopsis",name:"synopsis",type:"text",label:"Synopsis",multiline:!0,variant:"outlined",onChange:d,value:o.synopsis}),Object(I.jsx)(we,{id:"director",name:"director",type:"text",label:"Director",variant:"outlined",onChange:d,value:o.director}),Object(I.jsx)(we,{id:"post-id",name:"id",type:"hidden",onChange:d,value:o.id}),Object(I.jsx)(u.a,{variant:"contained",color:"primary",type:"submit",children:"Edit"})]})]})};var Pe=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(A.a,{children:[Object(I.jsx)(Q,{}),Object(I.jsxs)(W.c,{children:[Object(I.jsx)(W.a,{path:"/",exact:!0,component:R}),Object(I.jsx)(W.a,{path:"/likes",exact:!0,component:ee}),Object(I.jsx)(W.a,{path:"/dislikes",exact:!0,component:re}),Object(I.jsx)(W.a,{path:"/description/:id",component:pe,exact:!0}),Object(I.jsx)(W.a,{path:"/edit/:id",component:ke,exact:!0}),Object(I.jsx)(W.a,{path:"/create",component:fe,exact:!0})]})]})})},Te=a(56),Ce=a(37),Se={posts:[{id:1,title:"When Marnie Was There",synopsis:"The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",director:"Hiromasa Yonebayashi"},{id:2,title:"The Tale of the Princess Kaguya",synopsis:"A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",director:"Isao Takahata"},{id:3,title:"The Wind Rises",synopsis:"A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",director:"Hayao Miyazaki"},{id:4,title:"From Up on Poppy Hill",synopsis:" The story is set in 1963 in Yokohama. Kokuriko Manor sits on a hill overlooking the harbour. A 16 year-old girl, Umi, lives in that house. Every morning she raises a signal flag facing the sea. The flag means \u201cI pray for safe voyages\u201d. A 17 year-old boy, Shun, always sees this flag from the sea as he rides a tugboat to school. Gradually the pair are drawn to each other but they are faced with a sudden trial. Even so, they keep going without running from facing the hardships of reality.",director:"Gor\u014d Miyazaki"},{id:5,title:"Arrietty",synopsis:"14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",director:"Hiromasa Yonebayashi"},{id:6,title:"Ponyo",synopsis:"The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",director:"Hayao Miyazaki"},{id:7,title:"Tales from Earthsea",synopsis:"Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",director:"Gor\u014d Miyazaki"},{id:8,title:"Howl's Moving Castle",synopsis:"When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",director:"Hayao Miyazaki"},{id:9,title:"The Cat Returns",synopsis:"Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",director:"Hiroyuki Morita"},{id:10,title:"Spirited Away",synopsis:" Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",director:"Hayao Miyazaki"}],likedPosts:[1,2,3,4],dislikedPosts:[5,6,7,8],searchText:""},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0,a=t.type,i=t.payload;switch(a){case P:var n=i.id,r=e.dislikedPosts.filter((function(e){return!(e===n)}));return Object(ue.a)(Object(ue.a)({},e),{},{likedPosts:[].concat(Object(Ce.a)(e.likedPosts),[n]),dislikedPosts:Object(Ce.a)(r)});case T:var s=i.id,o=e.likedPosts.filter((function(e){return!(e===s)}));return Object(ue.a)(Object(ue.a)({},e),{},{likedPosts:Object(Ce.a)(o),dislikedPosts:[].concat(Object(Ce.a)(e.dislikedPosts),[s])});case C:var c=i.newPost;return Object(ue.a)(Object(ue.a)({},e),{},{posts:[].concat(Object(Ce.a)(e.posts),[Object(ue.a)(Object(ue.a)({},c),{},{id:e.posts.length+1})])});case S:var l=i.post,d=e.posts.filter((function(e){return!(e.id===l.id)}));return Object(ue.a)(Object(ue.a)({},e),{},{posts:[].concat(Object(Ce.a)(d),[l])});case E:var h=i.text;return Object(ue.a)(Object(ue.a)({},e),{},{searchText:h});default:return e}},Ae=Object(Te.b)(Ee,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(I.jsx)(k.a,{store:Ae,children:Object(I.jsx)(Pe,{})}),document.getElementById("root"))},94:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.96b459da.chunk.js.map