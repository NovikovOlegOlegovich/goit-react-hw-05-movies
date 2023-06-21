"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[424],{277:function(n,t,e){e.d(t,{JS:function(){return u},Q_:function(){return p},kC:function(){return l},s5:function(){return f},ts:function(){return s}});var r=e(861),a=e(687),c=e.n(a),o="https://api.themoviedb.org",i="91ae85947dca7203ec2b4d7841a3c73b",u=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:if((t=n.sent).ok){n.next=5;break}throw new Error("Ops .... ");case 5:return n.next=7,t.json();case 7:return e=n.sent,r=e.results,n.abrupt("return",r);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/movie/").concat(t,"?api_key=").concat(i,"&language=en - US"));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Ops .... ");case 5:return n.next=7,e.json();case 7:return r=n.sent,n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/search/movie?query=").concat(t,"&api_key=").concat(i,"&language=en - US"));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Ops .... ");case 5:return n.next=7,e.json();case 7:return r=n.sent,a=r.results,n.abrupt("return",a);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en - US"));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Ops .... ");case 5:return n.next=7,e.json();case 7:return r=n.sent,a=r.cast,n.abrupt("return",a);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/3/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:if((e=n.sent).ok){n.next=5;break}throw new Error("Ops .... ");case 5:return n.next=7,e.json();case 7:return r=n.sent,a=r.results,n.abrupt("return",a);case 10:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},270:function(n,t,e){e.d(t,{Z:function(){return v}});var r,a,c,o,i=e(689),u=e(168),s=e(686),p=e(87),f=s.Z.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 8px;\n  justify-content: space-evenly;\n  padding: 0px;\n  list-style-type: none;\n"]))),l=s.Z.li(a||(a=(0,u.Z)(["\n  font-size: 20px;\n"]))),h=(0,s.Z)(p.OL)(c||(c=(0,u.Z)(["\n  text-decoration-line: none;\n  scale: 1;\n  &:hover {\n    scale: 1.05;\n  }\n"]))),x=s.Z.p(o||(o=(0,u.Z)(["\n  margin: 0px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  color: #055371;\n"]))),d=e(184),v=function(n){var t=n.trendingFilms,e=(0,i.TH)();return(0,d.jsx)(f,{children:t.map((function(n){var t=n.original_title,r=n.id,a=n.poster_path;return(0,d.jsx)(h,{to:"/movies/".concat(r),state:{from:e},children:(0,d.jsxs)(l,{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(a),width:"200",alt:"poster"}),(0,d.jsxs)(x,{children:[" ",t]})]},r)})}))})}},424:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c,o=e(861),i=e(439),u=e(687),s=e.n(u),p=e(791),f=e(168),l=e(686),h=l.Z.div(r||(r=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n"]))),x=l.Z.input(a||(a=(0,f.Z)(["\n  height: 30px;\n  outline: none;\n  margin-right: 10px;\n  width: 350px;\n  font-size: 20px;\n"]))),d=l.Z.button(c||(c=(0,f.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n\n  text-decoration: none;\n\n  margin-right: 20px;\n  padding: 5px 16px;\n\n  border: 1px solid transparent;\n  border-radius: 5px;\n\n  color: black;\n  background-color: #2f788b;\n"]))),v=e(184),g=function(n){var t=n.handleSubmit,e=(0,p.useState)(""),r=(0,i.Z)(e,2),a=r[0],c=r[1];return(0,v.jsxs)(h,{children:[(0,v.jsx)(x,{type:"text",value:a,onChange:function(n){c(n.target.value)}}),(0,v.jsx)(d,{onClick:function(){t(a),c("")},children:"Search"})]})},m=e(277),w=e(270),k=function(){var n=(0,p.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=function(){var n=(0,o.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,m.Q_)(t);case 2:e=n.sent,r(e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(g,{handleSubmit:a}),(0,v.jsx)(w.Z,{trendingFilms:e})]})}},861:function(n,t,e){function r(n,t,e,r,a,c,o){try{var i=n[c](o),u=i.value}catch(s){return void e(s)}i.done?t(u):Promise.resolve(u).then(r,a)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(a,c){var o=n.apply(t,e);function i(n){r(o,a,c,i,u,"next",n)}function u(n){r(o,a,c,i,u,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=424.d3c0bf3c.chunk.js.map