(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},4648:function(e,t,n){"use strict";n.d(t,{AG:function(){return o}}),n(2482),n(8050);var o="absolute";t.ZP={absolute:"absolute",active:"active",dropbtn:"dropbtn",dropdown:"dropdown",dropdownContent:"dropdown-content",hamburger:"hamburger",logo:"logo",menu:"menu",open:"open",topnav:"mmpf8q0"}},1752:function(e,t,n){e.exports=n(4810)},4712:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(9361).Z,i=n(4941).Z,r=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,c=e.src,l=e.sizes,p=e.unoptimized,v=void 0!==p&&p,w=e.priority,k=void 0!==w&&w,x=e.loading,I=e.lazyRoot,_=e.lazyBoundary,C=e.className,P=e.quality,L=e.width,M=e.height,O=e.style,R=e.objectFit,N=e.objectPosition,Z=e.onLoadingComplete,q=e.placeholder,B=void 0===q?"empty":q,W=e.blurDataURL,D=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=u.useContext(g.ImageConfigContext),F=u.useMemo(function(){var e=h||U||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[U]),H=l?"responsive":"intrinsic";"layout"in D&&(D.layout&&(H=D.layout),delete D.layout);var V=A;if("loader"in D){if(D.loader){var G=D.loader;V=function(e){e.config;var t=s(e,["config"]);return G(t)}}delete D.loader}var T="";if(function(e){var t;return"object"==typeof e&&(E(e)||void 0!==e.src)}(c)){var J=E(c)?c.default:c;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(W=W||J.blurDataURL,T=J.src,(!H||"fill"!==H)&&(M=M||J.height,L=L||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}c="string"==typeof c?c:T;var Q=!k&&("lazy"===x||void 0===x);(c.startsWith("data:")||c.startsWith("blob:"))&&(v=!0,Q=!1),b.has(c)&&(Q=!1),F.unoptimized&&(v=!0);var Y=i(u.useState(!1),2),$=Y[0],K=Y[1],X=i(m.useIntersection({rootRef:void 0===I?null:I,rootMargin:_||"200px",disabled:!Q}),3),ee=X[0],et=X[1],en=X[2],eo=!Q||et,ei={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},er={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,ec=z(L),el=z(M),es=z(P),eu=Object.assign({},O,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:N}),ed="blur"!==B||$?{}:{backgroundSize:R||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===H)ei.display="block",ei.position="absolute",ei.top=0,ei.left=0,ei.bottom=0,ei.right=0;else if(void 0!==ec&&void 0!==el){var ef=el/ec,em=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===H?(ei.display="block",ei.position="relative",ea=!0,er.paddingTop=em):"intrinsic"===H?(ei.display="inline-block",ei.position="relative",ei.maxWidth="100%",ea=!0,er.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ec,"%27%20height=%27").concat(el,"%27/%3e")):"fixed"===H&&(ei.display="inline-block",ei.position="relative",ei.width=ec,ei.height=el)}var eg={src:y,srcSet:void 0,sizes:void 0};eo&&(eg=S({config:F,src:c,unoptimized:v,layout:H,width:ec,quality:es,sizes:l,loader:V}));var ep=c,ev="imagesizes";ev="imageSizes";var eh=(o(n={},"imageSrcSet",eg.srcSet),o(n,ev,eg.sizes),o(n,"crossOrigin",D.crossOrigin),n),eb=u.default.useLayoutEffect,ey=u.useRef(Z),ew=u.useRef(c);u.useEffect(function(){ey.current=Z},[Z]),eb(function(){ew.current!==c&&(en(),ew.current=c)},[en,c]);var eE=a({isLazy:Q,imgAttributes:eg,heightInt:el,widthInt:ec,qualityInt:es,layout:H,className:C,imgStyle:eu,blurStyle:ed,loading:x,config:F,unoptimized:v,placeholder:B,loader:V,srcString:ep,onLoadingCompleteRef:ey,setBlurComplete:K,setIntersection:ee,isVisible:eo,noscriptSizes:l},D);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:ei},ea?u.default.createElement("span",{style:er},t?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,u.default.createElement(j,Object.assign({},eE))),k?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+eg.src+eg.srcSet+eg.sizes,rel:"preload",as:"image",href:eg.srcSet?void 0:eg.src},eh))):null)};var a=n(6495).Z,c=n(2648).Z,l=n(1598).Z,s=n(7273).Z,u=l(n(7294)),d=c(n(955)),f=n(7626),m=n(8730),g=n(8807);n(9644);var p=n(9982);function v(e){return"/"===e[0]?e.slice(1):e}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/bike-master-plan/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},b=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(e){var t=e.config,n=e.src,o=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(o,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,o=e.width,i=e.quality,r=new URL("".concat(t.path).concat(v(n))),a=r.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||o.toString()),i&&a.set("q",i.toString()),r.href}],["cloudinary",function(e){var t,n=e.config,o=e.src,i=e.width,r=["f_auto","c_limit","w_"+i,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(r).concat(v(o))}],["akamai",function(e){var t=e.config,n=e.src,o=e.width;return"".concat(t.path).concat(v(n),"?imwidth=").concat(o)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function E(e){return void 0!==e.default}function S(e){var t=e.config,n=e.src,o=e.unoptimized,i=e.layout,a=e.width,c=e.quality,l=e.sizes,s=e.loader;if(o)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,o){var i=e.deviceSizes,a=e.allSizes;if(o&&("fill"===n||"responsive"===n)){for(var c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(o);s)l.push(parseInt(s[2]));if(l.length){var s,u,d=.01*(u=Math).min.apply(u,r(l));return{widths:a.filter(function(e){return e>=i[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,i,l),d=u.widths,f=u.kind,m=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map(function(e,o){return"".concat(s({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:o+1).concat(f)}).join(", "),src:s({config:t,src:n,quality:c,width:d[m]})}}function z(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",o=w.get(n);if(o)return o(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,o,i,r){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===o&&r(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}}))}var j=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),o=e.qualityInt,i=e.layout,r=e.className,c=e.imgStyle,l=e.blurStyle,d=e.isLazy,f=e.placeholder,m=e.loading,g=e.srcString,p=e.config,v=e.unoptimized,h=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setIntersection,E=e.onLoad,z=e.onError,A=(e.isVisible,e.noscriptSizes),j=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=d?"lazy":m,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},j,t,{decoding:"async","data-nimg":i,className:r,style:a({},c,l),ref:u.useCallback(function(e){w(e),(null==e?void 0:e.complete)&&k(e,g,i,f,b,y)},[w,g,i,f,b,y,]),onLoad:function(e){k(e.currentTarget,g,i,f,b,y),E&&E(e)},onError:function(e){"blur"===f&&y(!0),z&&z(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},j,S({config:p,src:g,unoptimized:v,layout:i,width:n,quality:o,sizes:A,loader:h}),{decoding:"async","data-nimg":i,style:c,className:r,loading:m}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,n=e.rootRef,s=e.rootMargin,u=e.disabled||!a,d=o(i.useState(!1),2),f=d[0],m=d[1],g=o(i.useState(null),2),p=g[0],v=g[1];return i.useEffect(function(){if(a){if(!u&&!f&&p&&p.tagName){var e,t,o,i,d,g,v;return t=function(e){return e&&m(e)},d=(i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=l.find(function(e){return e.root===n.root&&e.margin===n.margin});if(o&&(t=c.get(o)))return t;var i=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},l.push(n),c.set(n,t),t}(o={root:null==n?void 0:n.current,rootMargin:s})).id,g=i.observer,(v=i.elements).set(p,t),g.observe(p),function(){if(v.delete(p),g.unobserve(p),0===v.size){g.disconnect(),c.delete(d);var e=l.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&l.splice(e,1)}}}}else if(!f){var h=r.requestIdleCallback(function(){return m(!0)});return function(){return r.cancelIdleCallback(h)}}},[p,u,s,n,f]),[v,f,i.useCallback(function(){m(!1)},[])]};var i=n(7294),r=n(9826),a="function"==typeof IntersectionObserver,c=new Map,l=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8855:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var o=n(9008),i=n.n(o),r=n(7294),a=n(1752),c=n.n(a);function l(e){var t=e.title,n=e.description,o=e.type,a=e.url,l=e.thumbnail,s=e.favicon,u=e.twitterCard,d=e.children,f=c()().publicRuntimeConfig.basePath;return s=s||"".concat(void 0===f?"":f,"/favicon.ico"),r.createElement(i(),null,r.createElement("title",null,t),r.createElement("link",{rel:"icon",href:s}),r.createElement("meta",{name:"description",content:n}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n}),r.createElement("meta",{property:"og:type",content:void 0===o?"website":o}),r.createElement("meta",{property:"og:url",content:a}),r.createElement("meta",{property:"og:image",content:l}),r.createElement("meta",{name:"twitter:title",content:t}),r.createElement("meta",{name:"twitter:description",content:n}),r.createElement("meta",{name:"twitter:image",content:l}),r.createElement("meta",{name:"twitter:card",content:void 0===u?"summary_large_image":u}),d)}},9660:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var o=n(7294),i=n(4648);function r(e){var t=e.name,n=e.sections,r=(0,o.useState)(!1),a=r[0],c=r[1];return o.createElement("div",{className:"".concat(i.ZP.dropdown," ").concat(i.ZP.menu," ").concat(a?i.ZP.open:""),onMouseEnter:function(e){console.log("dropdown onMouseEnter"),c(!0),e.stopPropagation()},onMouseLeave:function(e){console.log("dropdown onMouseLeave"),c(!1)}},o.createElement("button",{className:i.ZP.dropbtn,onClick:function(e){console.log("dropdown onClick"),e.stopPropagation(),c(!a)}},t," ",o.createElement("i",{className:"fa fa-caret-down"})),o.createElement("div",{className:i.ZP.dropdownContent},n.map(function(e){var t=e.id,n=e.name;return o.createElement("a",{key:t,href:"#".concat(t)},n)})))}function a(e){var t=e.id,n=e.classes,a=e.theme,c=e.menus,l=e.children,s=(0,o.useState)(0),u=s[0],d=s[1],f=(0,o.useState)(!1),m=f[0],g=f[1],p=(0,o.useState)(!1),v=p[0],h=p[1];return(0,o.useEffect)(function(){var e=function(){var e=null==document?void 0:document.getElementById(t);if(e){var n=e.offsetHeight,o=window.scrollY;u&&!m&&o>=u?e.style.top="-".concat(n,"px"):(e.classList.remove(i.AG),e.style.top="0"),d(o),g(!1)}};return window.removeEventListener("scroll",e),window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}},[m,g,u,d]),o.createElement("div",{id:t,className:"".concat(i.ZP.topnav," ").concat(void 0===n?"":n," ").concat(void 0===a?"_1t7x3jb3":a," ").concat(v?i.ZP.open:""),onClick:function(){console.log("nav onClick"),h(!v),g(!0)},onMouseEnter:function(){console.log("nav onMouseEnter"),h(!0)},onMouseLeave:function(){console.log("nav onMouseLeave"),h(!1)}},o.createElement("button",{key:"hamburger",className:i.ZP.hamburger},"☰"),c.map(function(e){var t=e.id,n=e.name,a=e.sections;return a?o.createElement(r,{key:n,name:n,sections:a}):o.createElement("a",{key:n,href:"#".concat(t),className:i.ZP.menu},n)}),l)}n(2482)},9008:function(e,t,n){e.exports=n(955)},5675:function(e,t,n){e.exports=n(4712)},797:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function i(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return i}})}}]);