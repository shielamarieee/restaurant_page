(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(81),o=n.n(a),c=n(645),r=n.n(c),s=n(667),i=n.n(s),l=new URL(n(283),n.b),d=r()(o()),m=i()(l);d.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lora', serif;\n}\n\n:root {\n  --accent-color: #e0cdac;\n}\n\nbody {\n  background-image: url("+m+");\n  background-size: cover;\n  color: white;\n}\n\n.container {\n  max-width: 11000px;\n  padding: 0 150px;\n  margin: 0 auto;\n}\n\n/*Navbar*/\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 15px;\n}\n\n.nav-links {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style-type: none;\n  gap: 30px;\n}\n\n.logo {\n  font-size: 3rem;\n  color: white;\n  font-family: 'Dancing Script', cursive;\n}\n\n.nav-links a {\n  font-size: 1.5rem;\n  text-decoration: none;\n  color: white;\n}\n\n.active {border-bottom: 1.5px solid var(--accent-color);}\n\n\n/* Main */\n\n.main {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.tagline {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  text-shadow: 0 0 2px gray;\n  margin-top: 100px;\n  gap: 5px;\n}\n\n.tagline h1 {\n  font-size: 6rem;\n  letter-spacing: .2rem;\n  font-weight: 560;\n}\n\n.tagline p {\n  font-size: 2rem;\n  font-style: italic;\n  color: var(--accent-color);\n}\n\n.order-btn {\n  background: none;\n  border: 2px solid white;\n  padding: 10px 20px;\n  color: white;\n  margin-top: 10px;\n  font-size: 1.2rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n/* Menu */\n.card {\n  background-color: rgba(22, 22, 22, 0.8);\n  border-radius: 5px;\n  width: 100vw;\n  height: 85vh;\n  padding: 20px;\n}\n\n.menu {\n  display: flex;\n  justify-content: space-around;\n}\n\n.dishes {\n  width: 15vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.dish-name {\n  margin-bottom: 15px;\n  color: var(--accent-color);\n  font-size: 1.2rem;\n}\n\n.menu-center {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.menu-center img {width: 80%;}\n\n.menu-head {\n  font-size: 5rem;\n  color: var(--accent-color);\n}\n\n/* Footer */\n.footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 10px;\n}\n\n.footer a {\n  color: white;\n}\n\n.my-info {\n  display: flex;\n  gap: 10px;\n}\n.fa-brands {\n  color: white;\n}\n\n.photo-info {\n  display: flex;\n  gap: 5px;\n}\n",""]);const p=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&r[d[0]]||(void 0!==c&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=c),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var c={},r=[],s=0;s<e.length;s++){var i=e[s],l=a.base?i[0]+a.base:i[0],d=c[l]||0,m="".concat(l," ").concat(d);c[l]=d+1;var p=n(m),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=o(u,a);a.byIndex=s,t.splice(s,0,{identifier:m,updater:h,references:1})}r.push(m)}return r}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var c=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<c.length;r++){var s=n(c[r]);t[s].references--}for(var i=a(e,o),l=0;l<c.length;l++){var d=n(c[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}c=i}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},283:(e,t,n)=>{e.exports=n.p+"cc383e612c9f035de8e4.jpg"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var c=t[a]={id:a,exports:{}};return e[a](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),c=n(569),r=n.n(c),s=n(565),i=n.n(s),l=n(216),d=n.n(l),m=n(589),p=n.n(m),u=n(426),h={};function f(){const e=document.querySelector(".main"),t=document.createElement("div");t.className="menu",t.classList.add("card"),e.appendChild(t);const n=document.createElement("div");n.className="dishes",t.appendChild(n);const a=document.createElement("div");a.className="dish",n.appendChild(a);const o=document.createElement("p");o.className="dish-name",o.textContent="Lorem Ipsum - $15",a.appendChild(o);const c=document.createElement("p");c.className="dish-details",c.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",a.appendChild(c);const r=document.createElement("div");r.className="dish",n.appendChild(r);const s=document.createElement("p");s.className="dish-name",s.textContent="Lorem Ipsum - $15",r.appendChild(s);const i=document.createElement("p");i.className="dish-details",i.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",r.appendChild(i);const l=document.createElement("div");l.className="dish",n.appendChild(l);const d=document.createElement("p");d.className="dish-name",d.textContent="Lorem Ipsum - $15",l.appendChild(d);const m=document.createElement("p");m.className="dish-details",m.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",l.appendChild(m);const p=document.createElement("div");p.className="menu-center",t.appendChild(p);const u=document.createElement("p");u.className="menu-head",u.textContent="Menu",p.appendChild(u);const h=document.createElement("img");h.src=noodlesImg,h.setAttribute("alt","noodles.png"),p.appendChild(h);const f=document.createElement("div");f.className="dishes",t.appendChild(f);const C=document.createElement("div");C.className="dish",f.appendChild(C);const g=document.createElement("p");g.className="dish-name",g.textContent="Lorem Ipsum - $15",C.appendChild(g);const v=document.createElement("p");v.className="dish-details",v.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",C.appendChild(v);const x=document.createElement("div");x.className="dish",f.appendChild(x);const E=document.createElement("p");E.className="dish-name",E.textContent="Lorem Ipsum - $15",x.appendChild(E);const b=document.createElement("p");b.className="dish-details",b.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",x.appendChild(b);const y=document.createElement("div");y.className="dish",f.appendChild(y);const N=document.createElement("p");N.className="dish-name",N.textContent="Lorem Ipsum - $15",y.appendChild(N);const w=document.createElement("p");w.className="dish-details",w.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.",y.appendChild(w)}h.styleTagTransform=p(),h.setAttributes=i(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,function(){const e=document.getElementById("content"),t=document.createElement("div");t.className="container",e.appendChild(t);const n=document.createElement("nav");n.className="navbar",t.appendChild(n);const a=document.createElement("h1");a.className="logo",a.textContent="Ramen",n.appendChild(a);const o=document.createElement("ul");o.className="nav-links",n.appendChild(o);const c=document.createElement("li");o.appendChild(c);const r=document.createElement("a");r.className="home btn",r.textContent="Home",r.setAttribute("href","#"),c.appendChild(r);const s=document.createElement("li");o.appendChild(s);const i=document.createElement("a");i.className="menu btn",i.textContent="Menu",i.setAttribute("href","#"),s.appendChild(i);const l=document.createElement("li");o.appendChild(l);const d=document.createElement("a");d.className="contact btn",d.textContent="Contact",d.setAttribute("href","#"),l.appendChild(d);const m=document.createElement("main");m.className="main",t.appendChild(m);const p=document.createElement("div");p.className="tagline",m.appendChild(p);const u=document.createElement("h1");u.textContent="Taste the world's best noodles",p.appendChild(u);const h=document.createElement("p");h.textContent="Handmade noodles with rich flavoured broth",p.appendChild(h);const f=document.createElement("button");f.className="order-btn",f.textContent="Order Online",p.appendChild(f);const C=document.createElement("footer");C.className="footer",t.appendChild(C);const g=document.createElement("div");g.className="my-info",C.appendChild(g);const v=document.createElement("p");v.textContent=`Copyright © ${(new Date).getFullYear()} shielamarieee`,g.appendChild(v);const x=document.createElement("a");x.setAttribute("href","https://github.com/shielamarieee"),x.setAttribute("target","_blank"),g.appendChild(x);const E=document.createElement("i");E.className="fa-brands",E.classList.add("fa-github"),x.appendChild(E);const b=document.createElement("div");b.className="photo-info",C.appendChild(b);const y=document.createElement("p");y.textContent="Photo by",b.appendChild(y);const N=document.createElement("a");N.textContent=" Dovile Ramoskaite",N.setAttribute("href","https://unsplash.com/@dovilerm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"),N.setAttribute("target","_blank"),y.appendChild(N);const w=document.createElement("p");w.textContent="on ",b.appendChild(w);const L=document.createElement("a");L.textContent="Unsplash",L.setAttribute("href","https://unsplash.com/s/photos/ramen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"),L.setAttribute("target","_blank"),w.appendChild(L)}();let C=document.querySelector(".main");const g=e=>{for(;e.lastChild;)e.removeChild(e.lastChild)},v=document.querySelector(".home");v.addEventListener("click",(e=>{g(C),function(){const e=document.querySelector("main"),t=document.createElement("div");t.className="tagline",e.appendChild(t);const n=document.createElement("h1");n.textContent="Taste the world's best noodles",t.appendChild(n);const a=document.createElement("p");a.textContent="Handmade noodles with rich flavoured broth",t.appendChild(a);const o=document.createElement("button");o.className="order-btn",o.textContent="Order Online",t.appendChild(o)}(),e.target.classList.contains("active")||(setActiveButton(v),console.log("1"))})),document.querySelector(".order-btn").addEventListener("click",(e=>{g(C),f(),e.target.classList.contains("active")||(setActiveButton(x),console.log("2"))}));const x=document.querySelector(".menu");x.addEventListener("click",(e=>{g(C),f(),e.target.classList.contains("active")||(setActiveButton(x),console.log("3"))}));const E=document.querySelector(".contact");E.addEventListener("click",(e=>{g(C),function(){const e=document.querySelector(".main"),t=document.createElement("div");t.className="contact",t.classList.add("card"),e.appendChild(t);const n=document.createElement("div");n.className="left-side",t.appendChild(n);const a=document.createElement("div");a.className="left-heading",n.appendChild(a);const o=document.createElement("p");o.textContent="say hi to the team",o.className="small",a.appendChild(o);const c=document.createElement("p");c.textContent="Contact Us",c.className="large",a.appendChild(c);const r=document.createElement("div");r.className="form",n.appendChild(r);const s=document.createElement("p");s.textContent="if you got any questions please do not hesitate to send us a message.",r.appendChild(s);const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("placeholder","name"),r.appendChild(i);const l=document.createElement("input");l.setAttribute("type","email"),l.setAttribute("placeholder","email address"),r.appendChild(l);const d=document.createElement("textarea");d.setAttribute("placeholder","type your message"),r.appendChild(d);const m=document.createElement("button");m.textContent="Send Message",r.appendChild(m);const p=document.createElement("div");p.className="right-side",t.appendChild(p);const u=document.createElement("div");u.className="info",p.appendChild(u);const h=document.createElement("h3");h.textContent="opening hours",u.appendChild(h);const f=document.createElement("p");f.textContent="Monday - Friday",u.appendChild(f);const C=document.createElement("p");C.textContent="9am - 5pm",u.appendChild(C);const g=document.createElement("p");g.textContent="Weekend",u.appendChild(g);const v=document.createElement("p");v.textContent="Closed",u.appendChild(v);const x=document.createElement("div");x.className="info",p.appendChild(x);const E=document.createElement("h3");E.textContent="address",x.appendChild(E);const b=document.createElement("p");b.textContent="2890 Rockwell Lane,",x.appendChild(b);const y=document.createElement("p");y.textContent="North Carolina 27834",x.appendChild(y);const N=document.createElement("div");N.className="info",p.appendChild(N);const w=document.createElement("h3");w.textContent="support",N.appendChild(w);const L=document.createElement("p");L.textContent="example@gmail.com",N.appendChild(L);const A=document.createElement("p");A.textContent="+12 345 678 9012",N.appendChild(A)}(),e.target.classList.contains("active")||(setActiveButton(E),console.log("4"))}))})()})();