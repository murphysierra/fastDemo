(this["webpackJsonpfast-app"]=this["webpackJsonpfast-app"]||[]).push([[0],[,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),r=n.n(i),o=(n(13),n(8)),s=n(2);n(6);n(14);var l=n(0);function u(e){var t=e.movieList,n=e.addMovieFunction,c=function(e){if(e.length<2)return e;for(var t={},n=0;n<e.length;n++){var c=e[n].imdbID;t[c]||(t[c]=e[n])}return Object.values(t)}(t).map((function(e){return Object(l.jsx)(b,{addMovieFunction:n,movie:e})}));return Object(l.jsx)("div",{className:"movie-list-container",children:c.length>0?Object(l.jsx)("ul",{"aria-label":"Movie List",children:c}):Object(l.jsx)(l.Fragment,{})})}var j=a.a.memo(u);function b(e){var t=e.movie,n=t.Title,a=t.imdbID,i=t.Year,r=Object(c.useState)(!0),o=Object(s.a)(r,2),u=o[0],j=o[1];return Object(l.jsxs)("li",{"aria-label":n,className:"movie-card",children:[Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h2",{className:"movie-title",children:n}),Object(l.jsx)("h3",{className:"movie-year",children:i})]}),Object(l.jsx)("button",{className:"playlist-button",disabled:!u,onClick:function(){e.addMovieFunction(e.movie),j(!1)},children:u?"Add To Playlist":"In Your Playlist"})]},a+i)}function d(e){var t=e.addMovieToPlaylist,n=Object(c.useState)([]),a=Object(s.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(""),u=Object(s.a)(o,2),b=u[0],d=u[1],h=Object(c.useState)(""),v=Object(s.a)(h,2),O=v[0],m=v[1];return Object(c.useEffect)((function(){""!==b||""!==O?function(e,t){var n=""!==e?"&s="+e:"",c=""!==t?"&y="+t:"";return fetch("http://www.omdbapi.com/?apikey=".concat("4bfb31c1").concat(n).concat(c),{mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.warn("Error: ",e)}))}(b,O).then((function(e){e&&e.Search?r(e.Search):e&&"False"===e.Response&&r([]),console.log("response: ",e)})):""===b&&""===O&&r([])}),[b,O]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"search-bar",children:[Object(l.jsx)("h1",{children:"Search For Movies"}),Object(l.jsx)("input",{type:"text",placeholder:"Title",value:b,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("input",{type:"number",min:1800,max:3e3,placeholder:"Year",value:O,onChange:function(e){return m(e.target.value)}}),Object(l.jsx)("div",{id:"confirmation-container"})]}),Object(l.jsx)(j,{addMovieFunction:t,movieList:i})]})}n(16);function h(e){var t=e.playlist,n=t.map((function(e){return Object(l.jsx)("li",{children:e.Title},e.imdbID)}));return Object(l.jsxs)("div",{className:"playlist",children:[Object(l.jsx)("h1",{children:"Playlist"}),0===t.length?"There are no items in your playlist yet":Object(l.jsx)("ul",{children:n}),Object(l.jsx)("footer",{children:"My favorite color is blue"})]})}var v=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),r=Object(s.a)(i,2),u=r[0],j=r[1],b=Object(c.useCallback)((function(e){a([].concat(Object(o.a)(n),[e]));var t=document.getElementById("confirmation-container");t.innerHTML="".concat(e.Title," was added to your playlist"),setTimeout((function(){return t.innerHTML=""}),1e4)}),[n,a]);return Object(l.jsxs)("div",{className:"App",children:[u?Object(l.jsx)(h,{playlist:n}):Object(l.jsx)(d,{addMovieToPlaylist:b}),Object(l.jsx)("button",{className:"page-toggle",onClick:function(){return j(!u)},children:u?"Search":"Playlist"})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.7d9ace2f.chunk.js.map