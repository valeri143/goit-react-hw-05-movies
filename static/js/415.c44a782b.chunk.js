"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{368:function(r,t,n){n.d(t,{O:function(){return u}});var e=n(87),a=n(184),u=function(r){var t=r.movies,n=r.location;return(0,a.jsx)("ul",{children:t.map((function(r){var t=r.title,u=r.id;return(0,a.jsx)("li",{children:(0,a.jsx)(e.rU,{to:"/movies/".concat(u),state:{from:n},children:t})},u)}))})}},456:function(r,t,n){n.d(t,{M1:function(){return i},Pg:function(){return o},Wf:function(){return p},rj:function(){return s},tx:function(){return f}});var e=n(861),a=n(687),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"ace05e7e513bb2dcaf00821262e8ca69"};var s=function(){var r=(0,e.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/trending/movie/day");case 2:return t=r.sent,r.abrupt("return",t.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,e.Z)(u().mark((function r(t){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("search//movie?query=".concat(t));case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},415:function(r,t,n){n.r(t);var e=n(861),a=n(439),u=n(687),c=n.n(u),s=n(456),o=n(791),i=n(368),f=n(689),p=n(184);t.default=function(){var r=(0,o.useState)([]),t=(0,a.Z)(r,2),n=t[0],u=t[1],v=(0,f.TH)();return(0,o.useEffect)((function(){var r=function(){var r=(0,e.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,s.rj)();case 3:t=r.sent,u(t),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)(i.O,{movies:n,location:v})]})}}}]);
//# sourceMappingURL=415.c44a782b.chunk.js.map