import{_ as L}from"./BreadCrumb.4163edb3.js";import{h as z,_ as P}from"./moment.e0d93728.js";import{_ as F}from"./Tag.b9d579cd.js";import{_ as I,a as R}from"./LatestNews.ec54ed8f.js";import{_ as A,u as f,h as D,i as _,j as E,k as H,c as m,b as o,w as M,l as s,a as t,d as S,t as i,m as j,F as q,n as U,q as G,r as g,o as d,s as J}from"./entry.b57668ff.js";const K={class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},O={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},Q={class:"block col-span-1 md:col-span-4"},W={class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3"},X={key:0},Y=["onClick"],Z={class:"h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none"},tt={class:"block pl-4"},et={class:"tetx-base md:text-xl font-semibold"},st={class:"line-clamp-2"},at={class:"text-xs md:text-base block md:flex items-center font-medium mt-2"},ot={class:"flex"},nt={class:"ml-1 mr-2"},lt={class:"hidden sm:flex"},it={class:"ml-1"},ct={class:"mt-2 text-sm md:text-base"},rt={class:"line-clamp-2 sm:line-clamp-3"},_t={class:"col-span-2"},mt={__name:"[id]",async setup(dt){let r,u;f({title:"Berita"});const h=D().currentRoute.value,p=_(null),a=_(1),c=_(null),v=_(0),{data:b,total:x,category_name:y}=([r,u]=E(()=>$fetch(`/api/berita?limit=5&page=${a.value}&category=${h.params.id}`)),r=await r,u(),r);if(x==0)throw H({statusCode:404,statusMessage:"Page Not Found"});p.value=b,c.value=y,v.value=Math.ceil(x/5);async function C(){const{data:n,category_name:l}=await $fetch(`/api/berita?limit=5&page=${a.value}&category=${h.params.id}`);if(p.value=n,c.value=l,navigator.userAgent.includes("Chrome")){window.scrollTo({behavior:"smooth",top:0,left:0});return}windowScrollTo(window,{behavior:"smooth",top:0,left:0})}return f({title:"Berita: "+c.value}),(n,l)=>{const k=L,w=g("v-img"),$=P,B=F,N=g("v-pagination"),T=I,V=R;return d(),m("div",K,[o(k,{child:s(c)},{root:M(()=>[t("span",{onClick:l[0]||(l[0]=e=>("navigateTo"in n?n.navigateTo:s(J))("/berita"))},"Berita")]),_:1},8,["child"]),t("div",O,[t("div",Q,[t("div",W,[t("span",null,[S("Berita: "+i(s(c))+" ",1),s(a)!=1?(d(),m("span",X,": Halaman "+i(s(a)),1)):j("",!0)])]),(d(!0),m(q,null,U(s(p),e=>(d(),m("div",{onClick:pt=>n.$router.push("/berita/"+e.slug),class:"cursor-pointer animate-fade flex items-center mb-10"},[t("div",Z,[o(w,{"lazy-src":e.thumbnail,height:"100%","aspect-ratio":"4/3",src:e.thumbnail},null,8,["lazy-src","src"])]),t("div",tt,[t("div",et,[t("span",st,i(e.title),1)]),t("div",at,[t("div",ot,[o($,{class:"flex-none"}),t("span",nt,i(s(z)(e.created_at).format("LL")),1)]),t("div",lt,[o(B,{class:"flex-none"}),t("span",it,i(e.name),1)])]),t("div",ct,[t("span",rt,i(e.description),1)])])],8,Y))),256)),o(N,{size:n.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-14",modelValue:s(a),"onUpdate:modelValue":[l[1]||(l[1]=e=>G(a)?a.value=e:null),C],"total-visible":5,length:s(v)},null,8,["size","modelValue","length"])]),t("div",_t,[o(T),o(V)])])])}}},gt=A(mt,[["__scopeId","data-v-fb7bb3aa"]]);export{gt as default};
