!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=9)}([function(n,t,e){var o,r,i={},l=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(n){var t={};return function(n){if("function"==typeof n)return n();if(void 0===t[n]){var e=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}}(),c=null,s=0,d=[],u=e(4);function h(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var l=0;l<r.parts.length;l++)r.parts[l](o.parts[l]);for(;l<o.parts.length;l++)r.parts.push(y(o.parts[l],t))}else{var a=[];for(l=0;l<o.parts.length;l++)a.push(y(o.parts[l],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function p(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],l=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[l]?o[l].parts.push(a):e.push(o[l]={id:l,parts:[a]})}return e}function f(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),d.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,r)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=d.indexOf(n);t>=0&&d.splice(t,1)}function m(n){var t=document.createElement("style");return n.attrs.type="text/css",g(t,n.attrs),f(n,t),t}function g(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function y(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var l=s++;e=c||(c=m(t)),o=x.bind(null,e,l,!1),r=x.bind(null,e,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",g(t,n.attrs),f(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=u(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var l=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(l),a&&URL.revokeObjectURL(a)}.bind(null,e,t),r=function(){b(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){b(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=l()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=p(n,t);return h(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var l=e[r];(a=i[l.id]).refs--,o.push(a)}n&&h(p(n,t),t);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var v,w=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function x(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=w(t,r);else{var i=document.createTextNode(r),l=n.childNodes;l[t]&&n.removeChild(l[t]),l.length?n.insertBefore(i,l[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(l=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var l;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var l=n[r];"number"==typeof l[0]&&o[l[0]]||(e&&!l[2]?l[2]=e:e&&(l[2]="("+l[2]+") and ("+e+")"),t.push(l))}},t}},function(n,t,e){(n.exports=e(1)(!1)).push([n.i,".icon {\n    width: 1em;\n    height: 1em;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n}\n\nbutton {\n    border: none;\n    background: transparent;\n    outline: none;\n    cursor: pointer;\n}\n\nbutton:focus {\n    outline: none;\n}\n\nbody {\n    overflow: hidden;\n}\n\n.canvas {\n    background: #ffffff;\n    margin: 0;\n}\n\n.top-tools {\n    position: absolute;\n    top: 40px;\n    left: 100px;\n    right: 100px;\n}\n\n.top-tools .width-control {\n    display: flex;\n    align-items: center;\n}\n\n.top-tools .width-control>button::after {\n    content: '';\n    display: block;\n    background: #36435E;\n    width: 50px;\n    margin: 10px 0;\n}\n\n.top-tools .width-control>button:nth-child(1)::after {\n    height: 10px;\n    border-radius: 5px;\n}\n\n.top-tools .width-control>button:nth-child(2)::after {\n    height: 5px;\n    border-radius: 2.5px;\n}\n\n.top-tools .width-control>button:nth-child(3)::after {\n    height: 2px;\n    border-radius: 1px;\n}\n\n.bottom-tools {\n    position: absolute;\n    bottom: 40px;\n    left: 100px;\n    right: 100px;\n}\n\n.bottom-tools button {\n    font-size: 32px;\n    margin: 0 4px;\n    width: 54px;\n    height: 54px;\n}\n\n\n.bottom-tools button.active {\n    background: #FFCC00;\n    border-radius: 8px;\n}\n\n.bottom-tools .palette {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n}\n\n.bottom-tools .palette {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n}\n\n.bottom-tools .palette .color {\n    width: 30px;\n    height: 30px;\n    background: #00D09C;\n    border-radius: 100%;\n    margin: 10px 0;\n}\n\n.bottom-tools .palette .color:nth-child(1) {\n    background: #E4001F;\n}\n\n.bottom-tools .palette .color:nth-child(2) {\n    background: #FBCF00;\n}\n\n.bottom-tools .palette .color:nth-child(3) {\n    background: #00D09C;\n}\n\n.bottom-tools .palette .color:nth-child(4) {\n    background: #4389F2;\n}\n\n.bottom-tools .palette .color:nth-child(5) {\n    background: #6D00A2;\n}\n\n.bottom-tools .palette .color:nth-child(6) {\n    background: #36435E;\n}\n\n@media (max-width: 768px) {\n    .top-tools {\n        left: 20px;\n        right: 20px;\n        top: 10px;\n    }\n    .bottom-tools {\n        left: 20px;\n        right: 20px;\n        bottom: 10px;\n    }\n}",""])},function(n,t,e){var o=e(2);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(0)(o,r);o.locals&&(n.exports=o.locals)},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){(n.exports=e(1)(!1)).push([n.i,'*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff;\n}\n\n[tabindex="-1"]:focus {\n  outline: 0 !important;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\ndfn {\n  font-style: italic;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -.25em;\n}\n\nsup {\n  top: -.5em;\n}\n\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\na:hover {\n  color: #0056b3;\n  text-decoration: underline;\n}\n\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\na:not([href]):not([tabindex]):focus {\n  outline: 0;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n  border-style: none;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml [type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type="radio"],\ninput[type="checkbox"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type="date"],\ninput[type="time"],\ninput[type="datetime-local"],\ninput[type="month"] {\n  -webkit-appearance: listbox;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n[type="search"] {\n  outline-offset: -2px;\n  -webkit-appearance: none;\n}\n\n[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\n[hidden] {\n  display: none !important;\n}',""])},function(n,t,e){var o=e(5);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(0)(o,r);o.locals&&(n.exports=o.locals)},function(n,t){const e=document.getElementById("canvas"),o=e.getContext("2d"),r=()=>{const n=document.documentElement.clientWidth,t=document.documentElement.clientHeight;e.width=n,e.height=t},i=(n,t,e,r)=>{o.fillStyle=r,o.beginPath(),o.arc(n,t,e/2,0,2*Math.PI),o.fill()};var l,a,c,s;window.onload=(()=>{r(),window.onresize=r;const n={brush:{id:1,width:2,color:"#36435E",btn:document.getElementById("brush"),changeWidth:t=>{n.brush.width=t},changeColor:t=>{n.brush.color=t}},eraser:{id:2,width:40,btn:document.getElementById("eraser")},clear:{btn:document.getElementById("clear")},download:{btn:document.getElementById("download")},palette:[{btn:document.getElementById("color1"),color:"#E4001F"},{btn:document.getElementById("color2"),color:"#FBCF00"},{btn:document.getElementById("color3"),color:"#00D09C"},{btn:document.getElementById("color4"),color:"#4389F2"},{btn:document.getElementById("color5"),color:"#6D00A2"},{btn:document.getElementById("color6"),color:"#36435E"}],widthControl:[{btn:document.getElementById("width-small"),width:2},{btn:document.getElementById("width-medium"),width:5},{btn:document.getElementById("width-large"),width:20}],uncheckBtn:n=>{n.classList.remove("active")},checkBtn:n=>{n.classList.add("active")}};let t=!1,d=n.brush.id,u={};n.brush.btn.onclick=(()=>{n.uncheckBtn(n.eraser.btn),n.checkBtn(n.brush.btn),d=n.brush.id}),n.eraser.btn.onclick=(()=>{n.uncheckBtn(n.brush.btn),n.checkBtn(n.eraser.btn),d=n.eraser.id}),n.clear.btn.onclick=(()=>{o.clearRect(0,0,e.width,e.height)}),n.download.btn.onclick=(()=>{const n=e.toDataURL(),t=document.createElement("a");t.href=n,t.download="我的作品.png";const o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}),n.palette.forEach(t=>{t.btn.onclick=(()=>{n.brush.changeColor(t.color)})}),n.widthControl.forEach(t=>{t.btn.onclick=(()=>{n.brush.changeWidth(t.width)})});const h=(e,r)=>{switch(t=!0,d){case n.brush.id:u={x:e,y:r},i(e,r,n.brush.width,n.brush.color);break;case n.eraser.id:u={x:e,y:r},o.clearRect(e,r,50,50)}},p=(e,r)=>{if(t)switch(d){case n.brush.id:i(e,r,n.brush.width,n.brush.color),l=u,a={x:e,y:r},c=n.brush.width,s=n.brush.color,o.strokeStyle=s,o.beginPath(),o.moveTo(l.x,l.y),o.lineWidth=c,o.lineTo(a.x,a.y),o.stroke(),o.closePath(),u={x:e,y:r};break;case n.eraser.id:o.clearRect(e,r,50,50),u={x:e,y:r}}},f=()=>{t=!1};"ontouchstart"in document.body?(e.ontouchstart=(n=>{const t=n.touches[0].clientX,e=n.touches[0].clientY;h(t,e)}),e.ontouchmove=(n=>{n.preventDefault();const t=n.touches[0].clientX,e=n.touches[0].clientY;p(t,e)}),e.ontouchend=(()=>{f()})):(e.onmousedown=(n=>{const t=n.clientX,e=n.clientY;h(t,e)}),e.onmousemove=(n=>{const t=n.clientX,e=n.clientY;p(t,e)}),e.onmouseup=(()=>{f()}))})},function(n,t){!function(n){var t,e='<svg><symbol id="icon-colorlens" viewBox="0 0 1024 1024"><path d="M512 128c-212.053333 0-384 171.946667-384 384s171.946667 384 384 384c35.413333 0 64-28.586667 64-64 0-16.64-6.186667-31.573333-16.64-42.88-10.026667-11.306667-16-26.026667-16-42.453333 0-35.413333 28.586667-64 64-64l75.306667 0c117.76 0 213.333333-95.573333 213.333333-213.333333 0-188.586667-171.946667-341.333333-384-341.333333zM277.333333 512c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64zM405.333333 341.333333c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64zM618.666667 341.333333c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64zM746.666667 512c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z"  ></path></symbol><symbol id="icon-41download" viewBox="0 0 1024 1024"><path d="M614.4 395.2 614.4 152 417.6 152 417.6 395.2 273.6 395.2 515.2 691.2 761.6 395.2Z"  ></path><path d="M811.2 448 811.2 744 217.6 744 217.6 448 123.2 448 123.2 840 907.2 840 907.2 448Z"  ></path></symbol><symbol id="icon-trash" viewBox="0 0 1024 1024"><path d="M402.285706 786.285714l0-402.285714q0-7.972571-5.12-13.165714t-13.165714-5.12l-36.571429 0q-7.972571 0-13.165714 5.12t-5.12 13.165714l0 402.285714q0 7.972571 5.12 13.165714t13.165714 5.12l36.571429 0q7.972571 0 13.165714-5.12t5.12-13.165714zM548.57142 786.285714l0-402.285714q0-7.972571-5.12-13.165714t-13.165714-5.12l-36.571429 0q-7.972571 0-13.165714 5.12t-5.12 13.165714l0 402.285714q0 7.972571 5.12 13.165714t13.165714 5.12l36.571429 0q7.972571 0 13.165714-5.12t5.12-13.165714zM694.857135 786.285714l0-402.285714q0-7.972571-5.12-13.165714t-13.165714-5.12l-36.571429 0q-7.972571 0-13.165714 5.12t-5.12 13.165714l0 402.285714q0 7.972571 5.12 13.165714t13.165714 5.12l36.571429 0q7.972571 0 13.165714-5.12t5.12-13.165714zM383.999992 219.428571l256 0-27.428571-66.852571q-4.022857-5.12-9.728-6.290286l-181.174857 0q-5.705143 1.170286-9.728 6.290286zM914.285706 237.714286l0 36.571429q0 7.972571-5.12 13.165714t-13.165714 5.12l-54.857143 0 0 541.696q0 47.396571-26.843429 81.993143t-64.585143 34.596571l-475.428571 0q-37.741714 0-64.585143-33.426286t-26.843429-80.822857l0-544.036571-54.857143 0q-7.972571 0-13.165714-5.12t-5.12-13.165714l0-36.571429q0-7.972571 5.12-13.165714t13.165714-5.12l176.566857 0 40.009143-95.451429q8.557714-21.138286 30.866286-35.986286t45.129143-14.848l182.857143 0q22.820571 0 45.129143 14.848t30.866286 35.986286l40.009143 95.451429 176.566857 0q7.972571 0 13.165714 5.12t5.12 13.165714z"  ></path></symbol><symbol id="icon-eraser-variant" viewBox="0 0 1024 1024"><path d="M645.973333 128c-21.76 0-43.52 8.533333-60.16 25.173333L110.506667 628.48c-33.28 32.853333-33.28 87.04 0 120.746667L214.613333 853.333333h326.826667l372.053333-372.48c33.706667-32.853333 33.706667-87.04 0-120.746666l-206.933333-206.933334c-16.64-16.64-38.826667-25.173333-60.586667-25.173333M725.333333 768l-85.333333 85.333333h298.666667v-85.333333" fill="" ></path></symbol><symbol id="icon-brush_fill" viewBox="0 0 1024 1024"><path d="M879.04 323.36l-176.8-176.768a64.032 64.032 0 0 0-90.464 0.224l-67.36 67.392 44.864 44.64 0.96-0.192h0.032l176.64 176.576 30.304 30.4 14.848 14.88 66.72-66.72a64 64 0 0 0 0.224-90.432M325.888 815.36l-13.6-13.632-88.32-88.64-14.08-14.144-40.704-43.392L160 645.76v156.128c0 35.136 28.576 63.68 63.68 63.68h154.208l-11.648-11.2-40.352-38.976zM545.024 303.872l-45.248-45.056L179.616 578.976l45.248 45.248 176.544 176.704 45.184 45.024 318.976-318.976-43.936-46.496z"  ></path></symbol></svg>',o=function(n,t){t.firstChild?function(n,t){t.parentNode.insertBefore(n,t)}(n,t.firstChild):t.appendChild(n)};if((t=document.getElementsByTagName("script"))[t.length-1].getAttribute("data-injectcss")&&!n.__iconfont__svg__cssinject__){n.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(n){console&&console.log(n)}}!function(t){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(t,0);else{var e=function(){document.removeEventListener("DOMContentLoaded",e,!1),t()};document.addEventListener("DOMContentLoaded",e,!1)}else document.attachEvent&&function(n,t){var e=n.document,o=!1,r=function(){o||(o=!0,t())},i=function(){try{e.documentElement.doScroll("left")}catch(n){return void setTimeout(i,50)}r()};i(),e.onreadystatechange=function(){"complete"==e.readyState&&(e.onreadystatechange=null,r())}}(n,t)}(function(){var n,t;(n=document.createElement("div")).innerHTML=e,e=null,(t=n.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",o(t,document.body))})}(window)},function(n,t,e){"use strict";e.r(t);e(8),e(7),e(6),e(3)}]);