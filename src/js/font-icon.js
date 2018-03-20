(function(window){var svgSprite='<svg><symbol id="icon-colorlens" viewBox="0 0 1024 1024"><path d="M512 128c-212.053333 0-384 171.946667-384 384s171.946667 384 384 384c35.413333 0 64-28.586667 64-64 0-16.64-6.186667-31.573333-16.64-42.88-10.026667-11.306667-16-26.026667-16-42.453333 0-35.413333 28.586667-64 64-64l75.306667 0c117.76 0 213.333333-95.573333 213.333333-213.333333 0-188.586667-171.946667-341.333333-384-341.333333zM277.333333 512c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64zM405.333333 341.333333c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64zM618.666667 341.333333c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64zM746.666667 512c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z"  ></path></symbol><symbol id="icon-41download" viewBox="0 0 1024 1024"><path d="M614.4 395.2 614.4 152 417.6 152 417.6 395.2 273.6 395.2 515.2 691.2 761.6 395.2Z"  ></path><path d="M811.2 448 811.2 744 217.6 744 217.6 448 123.2 448 123.2 840 907.2 840 907.2 448Z"  ></path></symbol><symbol id="icon-trash" viewBox="0 0 1024 1024"><path d="M402.285706 786.285714l0-402.285714q0-7.972571-5.12-13.165714t-13.165714-5.12l-36.571429 0q-7.972571 0-13.165714 5.12t-5.12 13.165714l0 402.285714q0 7.972571 5.12 13.165714t13.165714 5.12l36.571429 0q7.972571 0 13.165714-5.12t5.12-13.165714zM548.57142 786.285714l0-402.285714q0-7.972571-5.12-13.165714t-13.165714-5.12l-36.571429 0q-7.972571 0-13.165714 5.12t-5.12 13.165714l0 402.285714q0 7.972571 5.12 13.165714t13.165714 5.12l36.571429 0q7.972571 0 13.165714-5.12t5.12-13.165714zM694.857135 786.285714l0-402.285714q0-7.972571-5.12-13.165714t-13.165714-5.12l-36.571429 0q-7.972571 0-13.165714 5.12t-5.12 13.165714l0 402.285714q0 7.972571 5.12 13.165714t13.165714 5.12l36.571429 0q7.972571 0 13.165714-5.12t5.12-13.165714zM383.999992 219.428571l256 0-27.428571-66.852571q-4.022857-5.12-9.728-6.290286l-181.174857 0q-5.705143 1.170286-9.728 6.290286zM914.285706 237.714286l0 36.571429q0 7.972571-5.12 13.165714t-13.165714 5.12l-54.857143 0 0 541.696q0 47.396571-26.843429 81.993143t-64.585143 34.596571l-475.428571 0q-37.741714 0-64.585143-33.426286t-26.843429-80.822857l0-544.036571-54.857143 0q-7.972571 0-13.165714-5.12t-5.12-13.165714l0-36.571429q0-7.972571 5.12-13.165714t13.165714-5.12l176.566857 0 40.009143-95.451429q8.557714-21.138286 30.866286-35.986286t45.129143-14.848l182.857143 0q22.820571 0 45.129143 14.848t30.866286 35.986286l40.009143 95.451429 176.566857 0q7.972571 0 13.165714 5.12t5.12 13.165714z"  ></path></symbol><symbol id="icon-eraser-variant" viewBox="0 0 1024 1024"><path d="M645.973333 128c-21.76 0-43.52 8.533333-60.16 25.173333L110.506667 628.48c-33.28 32.853333-33.28 87.04 0 120.746667L214.613333 853.333333h326.826667l372.053333-372.48c33.706667-32.853333 33.706667-87.04 0-120.746666l-206.933333-206.933334c-16.64-16.64-38.826667-25.173333-60.586667-25.173333M725.333333 768l-85.333333 85.333333h298.666667v-85.333333" fill="" ></path></symbol><symbol id="icon-brush_fill" viewBox="0 0 1024 1024"><path d="M879.04 323.36l-176.8-176.768a64.032 64.032 0 0 0-90.464 0.224l-67.36 67.392 44.864 44.64 0.96-0.192h0.032l176.64 176.576 30.304 30.4 14.848 14.88 66.72-66.72a64 64 0 0 0 0.224-90.432M325.888 815.36l-13.6-13.632-88.32-88.64-14.08-14.144-40.704-43.392L160 645.76v156.128c0 35.136 28.576 63.68 63.68 63.68h154.208l-11.648-11.2-40.352-38.976zM545.024 303.872l-45.248-45.056L179.616 578.976l45.248 45.248 176.544 176.704 45.184 45.024 318.976-318.976-43.936-46.496z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)