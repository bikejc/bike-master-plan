(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1752:function(e,t,n){e.exports=n(8027)},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3321)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,s=e.src,c=e.sizes,g=e.unoptimized,h=void 0!==g&&g,_=e.priority,z=void 0!==_&&_,k=e.loading,E=e.lazyRoot,I=e.lazyBoundary,C=e.className,L=e.quality,N=e.width,O=e.height,P=e.style,M=e.objectFit,R=e.objectPosition,B=e.onLoadingComplete,q=e.placeholder,W=void 0===q?"empty":q,H=e.blurDataURL,D=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=d.useContext(p.ImageConfigContext),F=d.useMemo(function(){var e=v||T||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[T]),Z=c?"responsive":"intrinsic";"layout"in D&&(D.layout&&(Z=D.layout),delete D.layout);var U=S;if("loader"in D){if(D.loader){var J=D.loader;U=function(e){e.config;var t=l(e,["config"]);return J(t)}}delete D.loader}var V="";if(function(e){var t;return"object"==typeof e&&(w(e)||void 0!==e.src)}(s)){var G=w(s)?s.default:s;if(!G.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(H=H||G.blurDataURL,V=G.src,(!Z||"fill"!==Z)&&(O=O||G.height,N=N||G.width,!G.height||!G.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}s="string"==typeof s?s:V;var X=!z&&("lazy"===k||void 0===k);(s.startsWith("data:")||s.startsWith("blob:"))&&(h=!0,X=!1),b.has(s)&&(X=!1),F.unoptimized&&(h=!0);var K=r(d.useState(!1),2),Q=K[0],Y=K[1],$=r(m.useIntersection({rootRef:void 0===E?null:E,rootMargin:I||"200px",disabled:!X}),3),ee=$[0],et=$[1],en=$[2],ei=!X||et,er={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,es=j(N),ec=j(O),el=j(L),ed=Object.assign({},P,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:R}),eu="blur"!==W||Q?{}:{backgroundSize:M||"cover",backgroundPosition:R||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(H,'")')};if("fill"===Z)er.display="block",er.position="absolute",er.top=0,er.left=0,er.bottom=0,er.right=0;else if(void 0!==es&&void 0!==ec){var ef=ec/es,em=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===Z?(er.display="block",er.position="relative",ea=!0,eo.paddingTop=em):"intrinsic"===Z?(er.display="inline-block",er.position="relative",er.maxWidth="100%",ea=!0,eo.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(es,"%27%20height=%27").concat(ec,"%27/%3e")):"fixed"===Z&&(er.display="inline-block",er.position="relative",er.width=es,er.height=ec)}var ep={src:y,srcSet:void 0,sizes:void 0};ei&&(ep=x({config:F,src:s,unoptimized:h,layout:Z,width:es,quality:el,sizes:c,loader:U}));var eg=s,eh="imagesizes";eh="imageSizes";var ev=(i(n={},"imageSrcSet",ep.srcSet),i(n,eh,ep.sizes),i(n,"crossOrigin",D.crossOrigin),n),eb=d.default.useLayoutEffect,ey=d.useRef(B),e_=d.useRef(s);d.useEffect(function(){ey.current=B},[B]),eb(function(){e_.current!==s&&(en(),e_.current=s)},[en,s]);var ew=a({isLazy:X,imgAttributes:ep,heightInt:ec,widthInt:es,qualityInt:el,layout:Z,className:C,imgStyle:ed,blurStyle:eu,loading:k,config:F,unoptimized:h,placeholder:W,loader:U,srcString:eg,onLoadingCompleteRef:ey,setBlurComplete:Y,setIntersection:ee,isVisible:ei,noscriptSizes:c},D);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:er},ea?d.default.createElement("span",{style:eo},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(A,Object.assign({},ew))),z?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ep.src+ep.srcSet+ep.sizes,rel:"preload",as:"image",href:ep.srcSet?void 0:ep.src},ev))):null)};var a=n(6495).Z,s=n(2648).Z,c=n(1598).Z,l=n(7273).Z,d=c(n(7294)),u=s(n(5443)),f=n(9309),m=n(7190),p=n(9977);n(3794);var g=n(2392);function h(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/bike-master-plan/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},b=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",_=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(h(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){var t,n=e.config,i=e.src,r=e.width,o=["f_auto","c_limit","w_"+r,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(o).concat(h(i))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(h(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,s=e.quality,c=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(i);l)c.push(parseInt(l[2]));if(c.length){var l,d,u=.01*(d=Math).min.apply(d,o(c));return{widths:a.filter(function(e){return e>=r[0]*u}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,r,c),u=d.widths,f=d.kind,m=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map(function(e,i){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:i+1).concat(f)}).join(", "),src:l({config:t,src:n,quality:s,width:u[m]})}}function j(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=_.get(n);if(i)return i(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function z(e,t,n,i,r,o){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}}))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,s=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,m=e.loading,p=e.srcString,g=e.config,h=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,_=e.setIntersection,w=e.onLoad,j=e.onError,S=(e.isVisible,e.noscriptSizes),A=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=u?"lazy":m,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":r,className:o,style:a({},s,c),ref:d.useCallback(function(e){_(e),(null==e?void 0:e.complete)&&z(e,p,r,f,b,y)},[_,p,r,f,b,y,]),onLoad:function(e){z(e.currentTarget,p,r,f,b,y),w&&w(e)},onError:function(e){"blur"===f&&y(!0),j&&j(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,x({config:g,src:p,unoptimized:h,layout:r,width:n,quality:i,sizes:S,loader:v}),{decoding:"async","data-nimg":r,style:s,className:o,loading:m}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,n=e.rootRef,l=e.rootMargin,d=e.disabled||!a,u=i(r.useState(!1),2),f=u[0],m=u[1],p=i(r.useState(null),2),g=p[0],h=p[1];return r.useEffect(function(){if(a){if(!d&&!f&&g&&g.tagName){var e,t,i,r,u,p,h;return t=function(e){return e&&m(e)},u=(r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=c.find(function(e){return e.root===n.root&&e.margin===n.margin});if(i&&(t=s.get(i)))return t;var r=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},c.push(n),s.set(n,t),t}(i={root:null==n?void 0:n.current,rootMargin:l})).id,p=r.observer,(h=r.elements).set(g,t),p.observe(g),function(){if(h.delete(g),p.unobserve(g),0===h.size){p.disconnect(),s.delete(u);var e=c.findIndex(function(e){return e.root===u.root&&e.margin===u.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var v=o.requestIdleCallback(function(){return m(!0)});return function(){return o.cancelIdleCallback(v)}}},[g,d,l,n,f]),[h,f,r.useCallback(function(){m(!1)},[])]};var r=n(7294),o=n(9311),a="function"==typeof IntersectionObserver,s=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3321:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}n.r(t),n.d(t,{default:function(){return _}});var r=n(5893),o=n(1752),a=n.n(o),s=n(9008),c=n.n(s),l=n(5675),d=n.n(l),u=n(214),f=n.n(u),m=n(8818),p=n.n(m),g=n(6724),h=n.n(g),v=n(7294);function b(e){var t=e.id,n=e.menus,i=e.children,o=(0,v.useState)(0),a=o[0],s=o[1],c=(0,v.useState)(!1),l=c[0],d=c[1];return(0,v.useEffect)(function(){var e=function(){var e=null==document?void 0:document.getElementById(t);if(e){var n=e.offsetHeight,i=window.scrollY;a&&!l&&i>=a?i<n?(e.classList.add(p().absolute),e.style.top="0"):e.style.top="-".concat(n,"px"):(e.classList.remove(p().absolute),e.style.top="0"),s(i),d(!1)}};return window.removeEventListener("scroll",e),window.addEventListener("scroll",e,{passive:!0}),function(){return window.removeEventListener("scroll",e)}},[l,d,a,s]),(0,r.jsxs)("div",{id:t,className:p().topnav,onClick:function(){d(!0)},children:[(0,r.jsx)("button",{className:p().icon,onClick:function(){var e,n,i;(i=document.getElementById(t))&&((n=n||void 0===n&&!i.classList.contains("open"))?i.classList.add("open"):i.classList.remove("open"))},children:"☰"},"hamburger"),n.map(function(e){var t=e.id,n=e.name,i=e.sections;return i?(0,r.jsxs)("div",{className:"".concat(p().dropdown," ").concat(p().menu),children:[(0,r.jsxs)("button",{className:p().dropbtn,children:["Wards",(0,r.jsx)("i",{className:"fa fa-caret-down"})]}),(0,r.jsx)("div",{className:p()["dropdown-content"],children:i.map(function(e){var t=e.id,n=e.name;return(0,r.jsx)("a",{href:"#".concat(t),children:n},t)})})]},n):(0,r.jsx)("a",{href:"#".concat(t),className:p().menu,children:n},n)}),i]})}function y(e){var t,n=e.numSlides,o=e.src,a=e.pgIds,s=e.width,c=e.height;return(0,r.jsx)("div",{className:h().slides,children:((function(e){if(Array.isArray(e))return i(e)})(t=Array(n).keys())||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(e){var t,n=e+1,i=a[n]||[],l=n.toString();return(0,r.jsxs)("div",{className:h().slide,children:[i.map(function(e){return(0,r.jsx)("a",{id:e},"id-".concat(e))}),(0,r.jsx)("a",{id:l,href:"#".concat(n),onClick:function(e){e.preventDefault();var t,n=null===(t=document.getElementById(l))||void 0===t?void 0:t.offsetTop;window.scrollTo({top:n,behavior:"smooth"}),history.pushState(null,"","#".concat(l))},children:(0,r.jsx)(d(),{src:o(n),alt:"Slide ".concat(n),width:s,height:c,layout:"responsive",loading:"lazy"})})]},"slide-".concat(n))})})}var _=function(){var e=a()().publicRuntimeConfig.basePath,t=void 0===e?"":e,n=[{name:"Ward A",pg:59,id:"ward-a"},{name:"Ward B",pg:69,id:"ward-b"},{name:"Ward C",pg:81,id:"ward-c"},{name:"Ward D",pg:93,id:"ward-d"},{name:"Ward E",pg:103,id:"ward-e"},{name:"Ward F",pg:113,id:"ward-f"},],i=[{name:"Top",id:"top"},{name:"Vision",id:"vision+goals",pg:6},{name:"Public Input",id:"public-input",pg:26},{name:"Streets",id:"streets-for-cycling",pg:46},{name:"Map",id:"map",pg:53},{name:"Wards",id:"wards",sections:n},{name:"Equity",id:"beyond-infrastructure",pg:128},{name:"Implementation",id:"funding+implementation",pg:158},],o={};return i.concat(n).forEach(function(e){var t=e.id,n=e.pg;n&&(n in o||(o[n]=[]),o[n].push(t))}),(0,r.jsxs)("div",{id:"top",className:f().container,children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"Jersey City Bike Master Plan"}),(0,r.jsx)("meta",{name:"description",content:"Jersey City Bike Master Plan"})]}),(0,r.jsx)(b,{id:"nav",menus:i,children:(0,r.jsx)("a",{href:"https://github.com/bikejc/bike-master-plan",className:p().menu,style:{padding:0},target:"_blank",rel:"noreferrer",children:(0,r.jsx)(d(),{alt:"GitHub logo",src:"".concat(t,"/gh-wb.png"),width:48,height:48})})}),(0,r.jsxs)("div",{className:h().intro,children:[(0,r.jsx)("h1",{className:f().title,children:"Jersey City Bicycle Master Plan"}),(0,r.jsxs)("p",{children:["Adapted from ",(0,r.jsx)("a",{href:"https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_6189660/File/Community/Transportation/LetsRideJCMasterPlan-FinalDraft%206.16.19_09_30.pdf\n",children:"the JC Bike Master Plan PDF"})," (available from ",(0,r.jsx)("a",{href:"https://www.jerseycitynj.gov/cityhall/infrastructure",children:"the JC Dept of Infrastructure's website"}),', under "Plans").']}),(0,r.jsx)("p",{children:"That PDF is ≈72MB, and a bit unwieldy to scroll through or deep-link into, so here it is as a series of images. Click each image for a permalink, or use the menu to jump between sections."})]}),(0,r.jsx)(y,{numSlides:168,src:function(e){return"".concat(t,"/img/bmp-").concat(e.toString().padStart(3,"0"),".png")},pgIds:o,width:1651,height:1275})]})}},8818:function(e){e.exports={topnav:"nav_topnav__hhsyy",absolute:"nav_absolute__6vNc6",active:"nav_active__ADL3k",icon:"nav_icon__U65FM",dropdown:"nav_dropdown__p0KbT",dropbtn:"nav_dropbtn__Kwte8","dropdown-content":"nav_dropdown-content__L3ElX",menu:"nav_menu__0_BXA"}},6724:function(e){e.exports={intro:"index_intro__1i_oN",slides:"index_slides__nbloO",slide:"index_slide__Zfr_z"}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);