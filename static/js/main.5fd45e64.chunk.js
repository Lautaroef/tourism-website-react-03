(this["webpackJsonp5_tourism-page"]=this["webpackJsonp5_tourism-page"]||[]).push([[0],{35:function(e,t,c){},69:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(17),r=c.n(n),i=(c(66),c(35),c(4)),l=c(6),o=c(9),d=c(2);var j=function(e){var t=e.links;return Object(d.jsx)("nav",{className:"transitionProperty z-0 w-full bg-toggleBgColor text-sm font-medium text-toggleTextColor",children:Object(d.jsxs)("ul",{className:"flex flex-col",children:[t.map((function(e,t){return Object(d.jsx)(o.b,{to:e.to,children:Object(d.jsx)("li",{className:" w-full pl-6 transition duration-400 border-b border-toggleBorderBottom cursor-pointer py-2.5 hover:text-secondNav hover:bg-toggleHoverBg",children:e.title})},t)})),Object(d.jsx)(o.b,{to:"/Contact",children:Object(d.jsx)("li",{className:"w-full pl-6 transition duration-400 border-b border-toggleBorderBottom cursor-pointer py-2.5 hover:text-secondNav hover:bg-toggleHoverBg",children:"CONTACT"})})]})})};var x=function(){var e=Object(a.useState)([window.innerWidth]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){s([window.innerWidth])}))}),[]),c},m=c(33),b=c(50),h=c(51),u=c(52),p=c(54),O=c(53),f=c(32),g=c.n(f),v=c(47),w=s.a.createContext();function N(e){var t=e.children,c=Object(a.useState)(!1),s=Object(l.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)({}),o=Object(l.a)(i,2),j=o[0],x=o[1],m=Object(a.useState)([{}]),b=Object(l.a)(m,2),h=b[0],u=b[1],p="California",O="https://pro.openweathermap.org/data/2.5/forecast/daily?q=".concat(p,"&cnt=").concat(5,"&appid=").concat("b1b15e88fa797225412429c1c50c122a1"),f=function(){var e=Object(v.a)(g.a.mark((function e(){var t,c,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(O);case 3:return t=e.sent,e.next=6,t.json();case 6:(c=e.sent)?(a=c.list,s=a[0],x(s),u(a)):new Error("Information can't be provided"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){f()}),[p]);return Object(d.jsx)(w.Provider,{value:{singleDay:j,setSingleDay:x,restOfDays:h,setRestOfDays:u,isModalOpen:n,openModal:function(){r(!0)},closeModal:function(){r(!1)},fetchPlaces:function(e,t){return new Promise((function(c,a){var s="https://api.opentripmap.com/0.1/en/places/".concat(e,"?apikey=").concat("5ae2e3f221c38a28845f05b6b8f2401970a6fb70ad345257a406ee6e");void 0!==t&&(s+="&"+t),fetch(s).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){a(new Error("Fetch Error :-S",e))}))}))}},children:t})}var y=function(){return s.a.useContext(w)},k=c(7),C=c(48),S=c(49);var E=function(e){var t=Object(l.a)(e.weather,1)[0],c=t.main,a=t.description,s=t.icon,n=e.temp,r=n.max,i=n.min,o=e.speed,j=e.humidity,x=function(e){return(e-273.15).toFixed(1)};return r=x(r),i=x(i),Object(d.jsxs)("div",{className:"flex items-center justify-around border-b p-2 my-1 text-white",children:[Object(d.jsx)("h2",{className:"text-xl font-medium",children:"..."}),Object(d.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(s,".png"),alt:c,className:"w-16"}),Object(d.jsxs)("div",{className:"flex flex-col gap-y-0.5 text-base text-center",children:[Object(d.jsxs)("h3",{className:"capitalize",children:[a,"."]}),Object(d.jsxs)("h3",{children:["Max: ",r,"\xb0C | Min: ",i,"\xb0C"]}),Object(d.jsxs)("h3",{children:["Wind: ",o," KM/H | Hum.: ",j,"%"]})]})]})};var D=function(){var e=y(),t=e.restOfDays,c=e.setRestOfDays,s=e.closeModal;return Object(a.useEffect)((function(){try{var e=(Object(C.a)("restOfDays"),t={}),a=e.dt,s=void 0===a?"":a,n=e.weather;n=void 0===n?[{}]:n;var r=Object(l.a)(n,1)[0],i=r.main,o=r.description,d=r.icon,j=e.temp,x=(j=void 0===j?{}:j).max,m=j.min,b=e.speed,h=e.humidity;c({dateTime:s,main:i,description:o,icon:d,max:x,min:m,windSpeed:void 0===b?"":b,humidity:void 0===h?"":h})}catch(u){console.log(u)}}),[t]),r.a.createPortal(Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"absolute z-20 top-0 left-0 bottom-0 right-0 bg-modalBgWindow opacity-80"}),Object(d.jsxs)("div",{className:"customModal z-20 fixed md:w-8/12  max-w-xl mx-auto left-0 right-0 top-12 flex flex-col items-center justify-between shadow-xl bg-modalBg",children:[Object(d.jsxs)("header",{className:"w-full h-auto py-4 flex justify-between items-center bg-white text-titleColor font-semibold",children:[Object(d.jsx)("h2",{className:"text-base tracking-tight ml-2.5",children:"The weather in Bariloche"}),Object(d.jsx)(S.a,{className:"text-blue-500 text-lg mr-3.5 text-left opacity-30 cursor-pointer",onClick:s})]}),Object(d.jsx)("main",{className:"w-11/12 py-2.5 flex flex-col bg-modalBg",children:t.map((function(e){return Object(d.jsx)(E,Object(k.a)({},e),e.dt)}))}),Object(d.jsx)("footer",{className:"w-full h-auto bg-white text-right py-4",children:Object(d.jsx)("button",{className:"customModalButton border border-transparent bg-firstNav text-base py-1.5 px-5 mr-3.5  text-white tracking-widest rounded font-light",onClick:s,children:"Accept"})})]})]}),document.getElementById("modal"))};var M=function(){var e=y(),t=e.singleDay,c=e.setSingleDay,s=e.isModalOpen,n=e.openModal;Object(a.useEffect)((function(){try{if(void 0===t)return;var e=t.weather;e=void 0===e?"":e;var a=Object(l.a)(e,1)[0],s=a.main,n=a.description,r=a.icon,i=t.feels_like,o=(i=void 0===i?"":i).day,d=t.temp,j=(d=void 0===d?"":d).day;c({main:s,description:n,icon:r,feelsLike0:o,temperature0:j})}catch(x){console.log(x)}}),[t]);var r=function(e){return(e-273.15).toFixed(1)},i=r(t.feelsLike0),o=r(t.temperature0);return document.body.style.overflow=s?"hidden":"initial",Object(d.jsxs)(a.Suspense,{fallback:"Loading...",children:[Object(d.jsxs)("div",{className:"grid grid-cols-2 w-max mr-3.5 items-center justify-center cursor-pointer",onClick:n,children:[Object(d.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(t.icon,".png"),alt:t.main,className:"justify-self-end flex flex-shrink lg:mr-4 md:mr-2 "}),Object(d.jsxs)("div",{className:"flex flex-col items-center gap-y-1 lg:text-sm sm:text-xs text-10px",children:[Object(d.jsx)("h5",{className:"capitalize",children:t.description}),Object(d.jsx)("h6",{className:"text-center",children:"".concat(o,"\xb0C | ST: ").concat(i,"\xb0C ")})]})]}),s&&Object(d.jsx)(D,{})]})};var A=function(){return Object(d.jsxs)("ul",{className:"dropdownDiv absolute top-7 right-0 left-0 flex flex-col gap-y-2 text-left py-4 px-4 min-w-max bg-white text-black rounded-5px shadow-md",children:[Object(d.jsx)("li",{className:"cursor-pointer hover:text-red-400",children:"English"}),Object(d.jsx)("li",{className:"cursor-pointer hover:text-red-400",children:"Espa\xf1ol"}),Object(d.jsx)("li",{className:"cursor-pointer hover:text-red-400",children:"Portugu\xeas"}),Object(d.jsx)("li",{className:"text-red-400 font-light",children:"Not functional yet"})]})};var P=function(e){var t=e.menuValue,c=e.handleMenu,s=Object(a.useState)(!1),n=Object(l.a)(s,2),r=n[0],i=n[1],j=Object(a.useState)(0),x=Object(l.a)(j,2),f=x[0],g=x[1];return window.addEventListener("scroll",(function(){var e=window.scrollY;g(e)})),Object(d.jsxs)("nav",{className:"".concat(0===f?"md:py-8 py-3.5":"lg:py-2 py-1.5"," customFirstNav mx-auto lg:px-8 md:px-4 lg:max-w-6xl flex flex-1 justify-between items-center bg-firstNav"),children:[Object(d.jsx)(o.b,{to:"/",children:Object(d.jsx)("img",{src:"https://www.barlantravel.com/images/logo-white.png",alt:"Lausof.com",className:"".concat(0===f?"lg:w-44 md:w-36":"lg:w-40 md:w-32"," customFirstNav smMd:w-28 w-20 pl-2 py-1")})}),Object(d.jsxs)("ul",{className:"flex md:gap-x-3 smMd:gap-x-1 items-center lg:text-md text-xs font-medium",children:[Object(d.jsx)(M,{}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"tel: +543875380900",className:"flex gap-x-1 md:mx-0 mx-1 items-center cursor-pointer",children:[Object(d.jsx)(m.a,{className:"md:text-xs"}),Object(d.jsx)("p",{className:"md:block hidden",children:"CALL US"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"https://wa.me/+543875380900",target:"_blank",className:"flex gap-x-1 md:mx-0 mx-1 items-center cursor-pointer",children:[Object(d.jsx)(m.b,{className:"md:text-base text-md"}),Object(d.jsx)("p",{className:"md:block hidden",children:"WHATSAPP"})]})}),Object(d.jsxs)("li",{className:"relative",onClick:function(){return i(!r)},children:[Object(d.jsxs)("a",{href:"#",className:"customList flex gap-x-1 md:mx-0 mx-1 items-center cursor-pointer",children:[Object(d.jsx)(b.a,{className:"md:text-base text-md sm:block hidden"}),Object(d.jsx)("p",{className:"text-xs",children:"English"}),Object(d.jsx)(h.a,{})]}),r&&Object(d.jsx)(A,{})]}),Object(d.jsx)("li",{className:"flex gap-x-1 md:mx-0 mx-1 items-center cursor-pointer",children:Object(d.jsx)("p",{className:"text-xs",children:"AR$"})}),Object(d.jsxs)("li",{className:"flex gap-x-1 md:mx-0 mx-1 items-center cursor-pointer",children:[Object(d.jsx)(u.a,{className:"md:text-xs text-md"}),Object(d.jsx)("p",{className:"md:block hidden",children:"CART"})]}),Object(d.jsx)("li",{className:"block md:hidden sm:w-11",onClick:function(){return c()},children:t?Object(d.jsx)(O.a,{className:"text-base mx-2 cursor-pointer"}):Object(d.jsx)(p.a,{className:"text-lg mx-2 cursor-pointer"})})]})]})};var T=function(){var e=x(),t=Object(l.a)(e,1)[0],c=Object(a.useState)(!1),s=Object(l.a)(c,2),n=s[0],r=s[1],i=[{title:"HOME",to:"/"},{title:"PACKAGES",to:"#"},{title:"ACTIVITIES",to:"#"},{title:"TRANSFERS",to:"#"},{title:"RENT A CAR",to:"#"},{title:"NEWS",to:"#"},{title:"FAQ",to:"#"},{title:"ABOUT US",to:"/About"}];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("header",{className:"z-20 2xl:sticky sticky top-0 flex flex-col w-full mx-auto font-Poppins",children:[Object(d.jsxs)("div",{className:"relative w-full text-white bg-firstNav",children:[Object(d.jsx)(P,{menuValue:n,handleMenu:function(){r((function(){return!n}))}}),t<900&&n&&Object(d.jsx)(j,{links:i})]}),Object(d.jsx)("div",{className:"w-full text-white customSecondNav",children:Object(d.jsxs)("nav",{className:" mx-auto lg:py-1.5 py-0.5 px-4 max-w-7xl md:max-w-5xl hidden md:flex justify-between items-center",children:[Object(d.jsx)("ul",{className:"flex gap-x-2.5 text-tiny",children:i.map((function(e,t){return Object(d.jsx)(o.b,{to:e.to,className:"lg:px-3 transition duration-700 md:px-2 sm:px-1 py-2.5 hover:bg-secondNav",children:Object(d.jsx)("li",{children:e.title})},t)}))}),Object(d.jsx)(o.b,{to:"/Contact",className:"",children:Object(d.jsx)("li",{className:"customContact transition duration-700 mx-6 list-none p-2.5 text-tiny hover:bg-secondNav",children:"CONTACT"})})]})})]})})};var B=function(){return Object(d.jsx)("footer",{className:"text-center",children:"Footer bar"})};c(69);var F=function(){return Object(d.jsxs)("section",{className:"lg:max-w-7xl mx-auto my-12",children:[Object(d.jsx)("h1",{className:"pseudoClassesH1 lg:text-2xl text-xl",children:"How do you think about your trip?"}),Object(d.jsxs)("picture",{className:"grid lg:grid-cols-4 smMd:grid-cols-2 grid-cols-1 lg:gap-x-6 w-11/12 mx-auto text-center",children:[Object(d.jsx)("a",{href:"#",className:"picture-0",children:Object(d.jsx)("h1",{children:"Pure Adventure"})}),Object(d.jsx)("a",{href:"#",className:"picture-1",children:Object(d.jsx)("h1",{children:"Traditional Excursions"})}),Object(d.jsx)("a",{href:"#",className:"picture-2",children:Object(d.jsx)("h1",{children:"Unique Experiences"})}),Object(d.jsx)("a",{href:"#",className:"picture-3",children:Object(d.jsx)("h1",{children:"Family Adventure"})})]})]})},H=c(28),I=Object(H.b)({name:"handleData",initialState:{placesData:[],singleData:{preview:{source:null},wikipedia_extracts:{html:null}}},reducers:{setPlacesData:function(e,t){e.placesData=t.payload},setSingleData:function(e,t){e.singleData=t.payload}}}),z=I.actions,L=z.setPlacesData,R=z.setSingleData,W=I.reducer,_=c(20);var U=function(){var e=Object(i.g)().xid;return Object(o.c)(),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{}),Object(d.jsxs)("main",{className:"text-center font-black text-xl",children:[e,Object(d.jsx)("br",{}),Object(d.jsx)(o.b,{to:"/",children:"Home"})]})]})},q=c.p+"static/media/star.f478258f.png";var G=function(e){e.kinds;var t,c,s=e.name,n=(e.rate,e.xid),r=e.fetchPlaces,i=Object(_.c)((function(e){return e.handleDataPlace})).singleData,l=Object(_.b)(),j=(t=43,c=79,Math.floor(Math.random()*(c-t+1)+t));return Object(a.useEffect)((function(){r("xid/"+n).then((function(e){l(R(e))}))}),[]),console.log(i),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.b,{to:"/SinglePlace/".concat(n),className:"custom-div",children:[Object(d.jsx)("img",{className:"custom-image",style:{backgroundImage:"url(".concat(i.preview.source,")")}}),Object(d.jsx)("h2",{className:"custom-title",children:s}),Object(d.jsxs)("div",{className:"custom-subtitle",children:[Object(d.jsxs)("div",{className:"custom-images",children:[Object(d.jsx)("img",{src:q,className:"w-5"}),Object(d.jsx)("img",{src:q,className:"w-5"}),Object(d.jsx)("img",{src:q,className:"w-5"})]}),Object(d.jsxs)("p",{className:"custom-paragraph",children:["USD$ ",j]})]})]})})};var K=function(){var e,t,c=Object(_.c)((function(e){return e.handleDataPlace})).placesData,s=Object(_.b)();function n(e,t){return new Promise((function(c,a){var s="https://api.opentripmap.com/0.1/en/places/".concat(e,"?apikey=").concat("5ae2e3f221c38a28845f05b6b8f2401970a6fb70ad345257a406ee6e");void 0!==t&&(s+="&"+t),fetch(s).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){a(new Error("Fetch Error :-S",e))}))}))}return Object(a.useEffect)((function(){n("geoname","name=Seattle").then((function(c){"OK"===c.status&&(e=c.lon,t=c.lat,n("radius","radius=1000&limit=".concat(6,"&offset=").concat(0,"&lon=").concat(e,"&lat=").concat(t,"&rate=2&format=json")).then((function(e){s(L(e))})))}))}),[]),Object(d.jsxs)("section",{className:"lg:max-w-7xl mx-auto",children:[Object(d.jsx)("h1",{className:"pseudoClassesH1 lg:text-2xl text-xl my-4",children:"Featured Trips"}),Object(d.jsx)("h2",{className:"text-lg text-center text-textGray font-Poppins mb-3",children:"We present the best experiences to enjoy and get to know Bariloche"}),Object(d.jsx)("p",{id:"info"}),Object(d.jsx)("div",{id:"list",className:"grid lg:grid-cols-3 smMd:grid-cols-2 grid-cols-1 justify-around",children:c.map((function(e){return Object(d.jsx)(G,Object(k.a)(Object(k.a)({},e),{},{fetchPlaces:n}),e.xid)}))}),Object(d.jsx)("button",{id:"next_button",children:"See more places..."})]})},V=c.p+"static/media/aerosilla-0.7f6e2031.jfif",J=c.p+"static/media/trekking.73a542cf.jpg",Y=c.p+"static/media/aerosilla-2.07d31ac5.jpg",$=c.p+"static/media/tabla-de-snow-new.50decea3.jpg",Q=c.p+"static/media/paisaje-montania.08d3c6ff.jpg",X=c(100);var Z=function(){return Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsxs)(X.a,{fade:!0,controls:!1,pause:!1,children:[Object(d.jsx)(X.a.Item,{interval:4300,children:Object(d.jsx)("img",{className:"d-block w-100 bg-image",src:V,alt:"First slide"})}),Object(d.jsx)(X.a.Item,{interval:4300,children:Object(d.jsx)("img",{className:"d-block w-100 bg-image",src:J,alt:"Cerro caterdral"})}),Object(d.jsx)(X.a.Item,{interval:4300,children:Object(d.jsx)("img",{className:"d-block w-100 bg-image",src:$,alt:"Tabla de snowboard"})}),Object(d.jsx)(X.a.Item,{interval:4300,children:Object(d.jsx)("img",{className:"d-block w-100 bg-image",src:Y,alt:"Snow forest"})}),Object(d.jsx)(X.a.Item,{interval:4300,children:Object(d.jsx)("img",{className:"d-block w-100 bg-image",src:Q,alt:"Cerro catedral"})})]}),Object(d.jsxs)("div",{className:"transformY text-white absolute w-full top-1/2 text-center z-10",children:[Object(d.jsx)("h1",{className:"text-shadow-title md:text-5xl smMd:text-4xl sm:text-2xl text-base font-bold",children:"Book in Bariloche with a Click !!"}),Object(d.jsx)("h3",{className:"text-shadow-subtitle mt-15px mb-4 md:text-2xl smMd:text-xl text-3vw font-medium",children:"No commissions, no intermediaries or extra expenses"}),Object(d.jsx)("button",{className:"slider-color mt-1 py-2 px-6 rounded md:text-base smMd:text-sm text-xs uppercase tracking-wider",children:"Transfers and excursions online"})]})]})};var ee=function(){return Object(d.jsxs)("main",{children:[Object(d.jsx)(Z,{}),Object(d.jsx)(F,{}),Object(d.jsx)("div",{className:"bg-lightGray py-2",children:Object(d.jsx)(K,{})})]})};var te=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:"Contact section"})," ",Object(d.jsx)(o.b,{to:"/",children:"Home"})]})};var ce=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:'About the company "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."'}),Object(d.jsx)(o.b,{to:"/",children:"Home"})]})};var ae=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Oh no, this page does not exist"})," ",Object(d.jsx)(o.b,{to:"/",children:"Home"})]})},se=(c(101),"en-us"),ne="pt-br",re="es-ar",ie=c(18),le=Object(ie.a)({},se,{hello:"Hello",edit:"Edit {path} and save to reload."}),oe=Object(ie.a)({},re,{hello:"Hola",edit:"Edite {path} y gu\xe1rdelo para volver a cargar."}),de=Object(ie.a)({},ne,{hello:"BOM DIA",edit:"Edite {path} e salve para recarregar."});Object(k.a)(Object(k.a)(Object(k.a)({},le),oe),de),c(102);var je=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(ee,{})}),Object(d.jsx)(i.a,{path:"/About",element:Object(d.jsx)(ce,{})}),Object(d.jsx)(i.a,{path:"/Contact",element:Object(d.jsx)(te,{})}),Object(d.jsx)(i.a,{path:"/SinglePlace/:xid",element:Object(d.jsx)(U,{})}),Object(d.jsx)(i.a,{path:"*",element:Object(d.jsx)(ae,{})})]}),Object(d.jsx)(B,{})]})},xe=Object(H.a)({reducer:{handleDataPlace:W}});r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(_.a,{store:xe,children:Object(d.jsx)(N,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(je,{})})})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.5fd45e64.chunk.js.map