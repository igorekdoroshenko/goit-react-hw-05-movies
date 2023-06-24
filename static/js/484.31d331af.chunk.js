"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[484],{484:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r,a,i,c,s,o=n(439),u=n(689),p=n(87),d=n(52),h=n(791),v=n(763),f=n(168),l=n(370),g=l.Z.div(r||(r=(0,f.Z)(["\n  display: flex;\n  padding: 10px;\n"]))),m=l.Z.div(a||(a=(0,f.Z)(["\n  padding: 100px 50px;\n"]))),x=l.Z.ul(i||(i=(0,f.Z)(["\n  display: flex;\n"]))),b=(0,l.Z)(p.OL)(c||(c=(0,f.Z)(["\n  font-size: 20px;\n  font-weight: 600;\n  color: #001a00;\n  &.active {\n    color: #a01d1d;\n  }\n"]))),Z=l.Z.li(s||(s=(0,f.Z)(["\n  padding: 10px;\n"]))),j=n(184),w=function(){var e,t=(0,u.UO)().movieId,n=(0,h.useState)({}),r=(0,o.Z)(n,2),a=r[0],i=r[1],c=(0,u.TH)(),s=(0,h.useRef)((null===(e=c.state)||void 0===e?void 0:e.from)||"/");(0,h.useEffect)((function(){try{(0,d.SY)(t).then((function(e){return i(e)}))}catch(e){console.log(e)}}),[t]);var f="";return f=a.poster_path?"https://image.tmdb.org/t/p/w500/".concat(a.poster_path):"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",(0,j.jsxs)("div",{children:[(0,j.jsx)(p.rU,{to:s.current,children:"Go back \u2190"}),!(0,v.isEmpty)(a)&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(g,{children:[(0,j.jsx)("img",{src:f,alt:"poster",width:"300px"}),(0,j.jsxs)(m,{children:[(0,j.jsxs)("h1",{children:[a.title," (",a.release_date.slice(0,4),")"]}),(0,j.jsxs)("p",{children:["User score: ",Math.round(10*a.vote_average)+"%"]}),(0,j.jsx)("h2",{children:"Overview"}),(0,j.jsx)("p",{children:a.overview}),(0,j.jsx)("h2",{children:"Genres"}),(0,j.jsx)("p",{children:a.genres.length>0?a.genres.map((function(e){return e.name})).join(", "):"No information about genres"})]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{children:"Additional information"}),(0,j.jsxs)(x,{children:[(0,j.jsx)(Z,{children:(0,j.jsx)(b,{to:"cast",children:"Cast"})}),(0,j.jsx)(Z,{children:(0,j.jsx)(b,{to:"reviews",children:"Reviews"})})]}),(0,j.jsx)(h.Suspense,{children:(0,j.jsx)(u.j3,{})})]})]})]})}},52:function(e,t,n){n.d(t,{Cm:function(){return p},Hg:function(){return s},SY:function(){return u},sy:function(){return o}});var r=n(165),a=n(861),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="b2e60f539e48de4827e6e0d51f4baa7c",s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",e.next=3,i.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat(c));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie",e.next=3,i.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(c,"&query=").concat(t,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.next=3,i.Z.get("".concat("https://api.themoviedb.org/3/movie/","/").concat(t,"?api_key=").concat(c,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.next=3,i.Z.get("".concat("https://api.themoviedb.org/3/movie/","/").concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=484.31d331af.chunk.js.map