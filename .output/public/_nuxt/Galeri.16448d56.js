import{_ as P,i as r,E as S,O as B,V as D,j as y,u as E,c as s,b as m,w as L,a as t,F as b,n as w,l as c,q as F,r as x,o as l,t as k,p as M,f as T}from"./entry.b57668ff.js";import{_ as A}from"./BreadCrumb.4163edb3.js";import{P as N}from"./photoswipe.2681c699.js";const g=i=>(M("data-v-0c98927f"),i=i(),T(),i),O={class:"animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},R=g(()=>t("span",null,"Galeri Desa",-1)),j={class:"pb-[1rem]"},q=g(()=>t("h1",{class:"mb-2 font-semibold text-[#0088CC] text-2xl"},"Galeri Video",-1)),H={class:"grid grid-cols-1 md:grid-cols-3 md:gap-[2rem]"},U=["src"],Y={class:"pb-[6rem]"},J=g(()=>t("h1",{class:"mb-8 font-semibold text-[#0088CC] text-2xl"},"Galeri Foto",-1)),K={id:"gallery",class:"grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-y-[2rem]"},Q=["href"],W={class:"rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100"},X={key:0},Z={key:1},ee={__name:"Galeri",async setup(i){let a,n;const p=r(null),h=r([]),_=r([]),o=r(1),f=r(0);S(async()=>{await B(()=>{p.value||(p.value=new N({gallery:"#gallery",children:"a",pswpModule:()=>D(()=>import("./photoswipe.esm.3ee328cd.js"),[],import.meta.url)}),p.value.init())})}),h.value=([a,n]=y(()=>$fetch("/api/image-gallery")),a=await a,n(),a);const{data:C,total:V}=([a,n]=y(()=>$fetch(`/api/video-gallery?limit=3&page=${o.value}`)),a=await a,n(),a);_.value=C,f.value=Math.ceil(V/3);async function $(){const{data:d}=await $fetch(`/api/video-gallery?limit=3&page=${o.value}`);_.value=d}return E({title:"Galeri Desa"}),(d,v)=>{const G=A,z=x("v-pagination"),I=x("v-img");return l(),s("div",O,[m(G,null,{root:L(()=>[R]),_:1}),t("div",j,[q,t("div",H,[(l(!0),s(b,null,w(c(_),(e,u)=>(l(),s("a",{class:"w-full rounded-lg animate-fade",key:u,target:"_blank",rel:"noreferrer"},[t("iframe",{class:"my-6 rounded-lg shadow-sm",width:"100%",height:"245",loading:"lazy",src:e.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,U)]))),128))]),m(z,{size:d.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-6 md:mb-10",modelValue:c(o),"onUpdate:modelValue":[v[0]||(v[0]=e=>F(o)?o.value=e:null),$],"total-visible":5,length:c(f)},null,8,["size","modelValue","length"])]),t("div",Y,[J,t("div",K,[(l(!0),s(b,null,w(c(h),(e,u)=>(l(),s("a",{class:"w-full cursor-pointer rounded-lg",key:u,href:e.url,"data-pswp-width":"600","data-pswp-height":"400",target:"_blank",rel:"noreferrer"},[m(I,{"lazy-src":e.url,class:"w-full rounded-t-lg",height:"300",src:e.url,alt:""},null,8,["lazy-src","src"]),t("div",W,[e.description.length>40&&d.$vuetify.display.mobile?(l(),s("span",X,k(e.description.slice(0,40))+"...",1)):(l(),s("span",Z,k(e.description),1))])],8,Q))),128))])])])}}},le=P(ee,[["__scopeId","data-v-0c98927f"]]);export{le as default};
