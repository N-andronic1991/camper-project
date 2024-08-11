import{j as t,s as y,f as T,u as A,d as B,t as E,m as L,o as O}from"./index-BmwjBcqZ.js";function D(e,s=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(s)}function W(e,s=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(s)}function q(e,s="expected all items to be functions, instead received the following types: "){if(!e.every(n=>typeof n=="function")){const n=e.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${s}[${n}]`)}}var k=e=>Array.isArray(e)?e:[e];function K(e){const s=Array.isArray(e[0])?e[0]:e;return q(s,"createSelector expects all input-selectors to be functions, but received the following types: "),s}function P(e,s){const n=[],{length:r}=e;for(let o=0;o<r;o++)n.push(e[o].apply(null,s));return n}var U=class{constructor(e){this.value=e}deref(){return this.value}},V=typeof WeakRef<"u"?WeakRef:U,G=0,R=1;function _(){return{s:G,v:void 0,o:null,p:null}}function S(e,s={}){let n=_();const{resultEqualityCheck:r}=s;let o,a=0;function u(){var g;let c=n;const{length:x}=arguments;for(let h=0,j=x;h<j;h++){const m=arguments[h];if(typeof m=="function"||typeof m=="object"&&m!==null){let p=c.o;p===null&&(c.o=p=new WeakMap);const v=p.get(m);v===void 0?(c=_(),p.set(m,c)):c=v}else{let p=c.p;p===null&&(c.p=p=new Map);const v=p.get(m);v===void 0?(c=_(),p.set(m,c)):c=v}}const d=c;let l;if(c.s===R)l=c.v;else if(l=e.apply(null,arguments),a++,r){const h=((g=o==null?void 0:o.deref)==null?void 0:g.call(o))??o;h!=null&&r(h,l)&&(l=h,a!==0&&a--),o=typeof l=="object"&&l!==null||typeof l=="function"?new V(l):l}return d.s=R,d.v=l,l}return u.clearCache=()=>{n=_(),u.resetResultsCount()},u.resultsCount=()=>a,u.resetResultsCount=()=>{a=0},u}function J(e,...s){const n=typeof e=="function"?{memoize:e,memoizeOptions:s}:e,r=(...o)=>{let a=0,u=0,c,x={},d=o.pop();typeof d=="object"&&(x=d,d=o.pop()),D(d,`createSelector expects an output function after the inputs, but received: [${typeof d}]`);const l={...n,...x},{memoize:g,memoizeOptions:h=[],argsMemoize:j=S,argsMemoizeOptions:m=[],devModeChecks:p={}}=l,v=k(h),M=k(m),N=K(o),w=g(function(){return a++,d.apply(null,arguments)},...v),H=j(function(){u++;const I=P(N,arguments);return c=w.apply(null,I),c},...M);return Object.assign(H,{resultFunc:d,memoizedResultFunc:w,dependencies:N,dependencyRecomputations:()=>u,resetDependencyRecomputations:()=>{u=0},lastResult:()=>c,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:g,argsMemoize:j})};return Object.assign(r,{withTypes:()=>r}),r}var b=J(S),Q=Object.assign((e,s=b)=>{W(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const n=Object.keys(e),r=n.map(a=>e[a]);return s(r,(...a)=>a.reduce((u,c,x)=>(u[n[x]]=c,u),{}))},{withTypes:()=>Q});const X="_card_h7igj_1",Y="_description_h7igj_23",Z="_favoriteBtn_h7igj_51",ee="_iconHeart_h7igj_61",te="_iconHeartFavorited_h7igj_71",se="_price_h7igj_81",ne="_textThumb_h7igj_93",ce="_thumb_h7igj_105",oe="_btn_h7igj_119",f={card:X,description:Y,favoriteBtn:Z,iconHeart:ee,iconHeartFavorited:te,price:se,textThumb:ne,thumb:ce,btn:oe},re="_text_4sq3i_1",ie="_iconStar_4sq3i_15",C={text:re,iconStar:ie},ae=({reviews:e})=>{const s=n=>!n||n.length===0?0:(n.reduce((o,a)=>o+a.reviewer_rating,0)/n.length).toFixed(1);return t.jsxs("p",{className:C.text,children:[t.jsx("svg",{className:C.iconStar,width:"16",height:"16",children:t.jsx("use",{xlinkHref:`${y}#icon-star`})}),s(e),"(",e.length," Reviews)"]})},le="_iconMap_whv0m_1",ue="_text_whv0m_11",$={iconMap:le,text:ue},de=({location:e})=>t.jsxs("p",{className:$.text,children:[t.jsx("svg",{className:$.iconMap,width:"16",height:"16",children:t.jsx("use",{xlinkHref:`${y}#icon-map-pin`})}),e]}),pe=e=>e.filters.location,F=e=>e.adverts.items,Ne=e=>e.adverts.loading,we=e=>e.adverts.error,ke=e=>e.adverts.page,Re=e=>e.adverts.limit;b([F,pe],(e,s)=>(console.log("Adverts before filtering:",e),console.log("Filtering by location:",s),e.filter(n=>n.location.toLowerCase().includes(s.toLowerCase()))));const he=e=>e.favorites.items,me=(e,s)=>e.favorites.items.includes(s),Ce=b([he,F],(e,s)=>s.filter(n=>e.includes(n._id))),fe="_categoryBtn_80m4z_1",ge="_uppercase_80m4z_43",xe="_categoryList_80m4z_51",ye="_kitchen_80m4z_69",je="_automatic_80m4z_71",ve="_beds_80m4z_73",i={categoryBtn:fe,uppercase:ge,categoryList:xe,kitchen:ye,automatic:je,beds:ve},_e=({adults:e,engine:s,transmission:n,details:r})=>t.jsxs("ul",{className:i.categoryList,children:[t.jsx("li",{className:i.categoryItem,children:t.jsxs("button",{className:i.categoryBtn,type:"button",children:[t.jsx("svg",{className:i.users,width:"20",height:"20",children:t.jsx("use",{xlinkHref:`${y}#icon-users`})}),e," adults"]})}),t.jsx("li",{className:i.categoryItem,children:t.jsxs("button",{className:i.categoryBtn,type:"button",children:[t.jsx("svg",{className:i.automatic,width:"20",height:"20",children:t.jsx("use",{xlinkHref:`${y}#icon-automatic`})}),t.jsx("span",{className:i.uppercase,children:n})]})}),t.jsx("li",{className:i.categoryItem,children:t.jsxs("button",{className:i.categoryBtn,type:"button",children:[t.jsx("svg",{className:i.petrol,width:"20",height:"20",children:t.jsx("use",{xlinkHref:`${y}#icon-petrol`})}),t.jsx("span",{className:i.uppercase,children:s})]})}),t.jsx("li",{className:i.categoryItem,children:t.jsxs("button",{className:i.categoryBtn,type:"button",children:[t.jsx("svg",{className:i.kitchen,width:"20",height:"20",children:t.jsx("use",{xlinkHref:`${y}#icon-kitchen`})}),"Kitchen"]})}),t.jsx("li",{className:i.categoryItem,children:t.jsxs("button",{className:i.categoryBtn,type:"button",children:[t.jsx("svg",{className:i.beds,width:"20",height:"20",children:t.jsx("use",{xlinkHref:`${y}#icon-beds`})}),r.beds," beds"]})})]}),$e=({_id:e,name:s,gallery:n,price:r,reviews:o,location:a,description:u,adults:c,engine:x,transmission:d,details:l})=>{const g=T(),h=A(p=>me(p,e)),j=()=>{g(E(e))},m=()=>{g(L(e)),g(O())};return t.jsxs("div",{className:f.card,children:[t.jsx("img",{src:n[0],alt:s,width:"290",height:"310"}),t.jsxs("div",{className:f.cardContent,children:[t.jsxs("div",{className:f.textThumb,children:[t.jsx("h2",{children:s}),t.jsxs("p",{className:f.price,children:["€",r,".00",t.jsx("button",{onClick:j,className:f.favoriteBtn,type:"button",children:t.jsx("svg",{className:B(f.iconHeart,{[f.iconHeartFavorited]:h}),width:"24",height:"24",children:t.jsx("use",{xlinkHref:`${y}#icon-heart`})})})]})]}),t.jsxs("div",{className:f.thumb,children:[t.jsx(ae,{reviews:o}),t.jsx(de,{location:a})]}),t.jsx("p",{className:f.description,children:u}),t.jsx(_e,{adults:c,engine:x,transmission:d,details:l}),t.jsx("button",{onClick:m,className:f.btn,type:"button",children:"Show more"})]})]})};export{$e as A,de as L,ae as R,we as a,pe as b,F as c,ke as d,Re as e,Ce as f,Ne as s};
//# sourceMappingURL=AdvertItem-BGddvxJY.js.map
