"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[635],{635:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r,a,o,c=n(439),i=n(791),u=n(689),s=n(766),p=n(370),f=n(87),h=p.Z.ul(r||(r=(0,s.Z)(["\n  list-style-type: none;\n"]))),v=p.Z.li(a||(a=(0,s.Z)(["\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 8px;\n"]))),d=(0,p.Z)(f.rU)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: #750000;\n  }\n"]))),m=n(184),l=function(t){var e=t.films,n=(0,u.TH)();return(0,m.jsx)(h,{children:e.map((function(t){return(0,m.jsx)(v,{children:(0,m.jsx)(d,{to:"/movies/".concat(t.id),state:{from:n},children:t.title})},t.id)}))})},g=n(52),Z=function(){var t=(0,i.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1];return(0,i.useEffect)((function(){(0,g.Hg)().then((function(t){r(t)})).catch((function(t){console.log(t)}))}),[]),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Trending today"}),(0,m.jsx)(l,{films:n})]})}},52:function(t,e,n){n.d(e,{Cm:function(){return f},Hg:function(){return i},IH:function(){return p},SY:function(){return s},sy:function(){return u}});var r=n(165),a=n(861),o=n(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="b2e60f539e48de4827e6e0d51f4baa7c",i=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",t.next=3,o.Z.get("".concat("https://api.themoviedb.org/3/trending/movie/day","?api_key=").concat(c));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",t.next=3,o.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(c,"&query=").concat(e,"&page=1"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/",t.next=3,o.Z.get("".concat("https://api.themoviedb.org/3/movie/","/").concat(e,"?api_key=").concat(c,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/",t.next=3,o.Z.get("".concat("https://api.themoviedb.org/3/movie/","/").concat(e,"/credits?api_key=").concat(c));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/",t.next=3,o.Z.get("".concat("https://api.themoviedb.org/3/movie/","/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=635.76d6d7f6.chunk.js.map