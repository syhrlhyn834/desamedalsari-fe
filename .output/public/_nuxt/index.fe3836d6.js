import{_ as V}from"./BreadCrumb.4163edb3.js";import{h as I,_ as N}from"./moment.e0d93728.js";import{_ as L}from"./Tag.b9d579cd.js";import{_ as S,a as z}from"./LatestNews.ec54ed8f.js";import{_ as T,u as P,i as r,j as A,c as _,b as s,w as D,a as t,d as F,l as a,t as n,m as H,F as j,n as q,q as E,r as x,o as m,p as M,f as R}from"./entry.b57668ff.js";import{w as U}from"./scroll.c1e36832.js";const G=l=>(M("data-v-6a1e99c3"),l=l(),R(),l),J={id:"target",class:"animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6"},K=G(()=>t("span",null,"Berita",-1)),O={class:"grid grid-cols-1 md:grid-cols-6 md:gap-x-12"},Q={class:"block col-span-1 md:col-span-4"},W={class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3"},X={key:0},Y=["onClick"],Z={class:"h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none"},tt={class:"block pl-4"},et={class:"tetx-base md:text-xl font-semibold"},st={class:"line-clamp-2"},ot={class:"text-xs md:text-base block md:flex items-center font-medium mt-2"},at={class:"flex"},nt={class:"ml-1 mr-2"},lt={class:"hidden sm:flex"},ct={class:"ml-1"},it={class:"mt-2 text-sm md:text-base"},_t={class:"line-clamp-2 sm:line-clamp-3"},mt={class:"col-span-2"},dt={__name:"index",async setup(l){let c,p;P({title:"Berita"});const d=r(null),o=r(1),u=r(0),{data:f,total:v}=([c,p]=A(()=>$fetch("/api/berita?limit=5&page=1")),c=await c,p(),c);d.value=f,u.value=Math.ceil(v/5);async function g(){const{data:i}=await $fetch(`/api/berita?limit=5&page=${o.value}`);if(d.value=i,navigator.userAgent.includes("Chrome")){window.scrollTo({behavior:"smooth",top:0,left:0});return}U(window,{behavior:"smooth",top:0,left:0})}return(i,h)=>{const b=V,w=x("v-img"),y=N,C=L,k=x("v-pagination"),$=S,B=z;return m(),_("div",J,[s(b,null,{root:D(()=>[K]),_:1}),t("div",O,[t("div",Q,[t("div",W,[t("span",null,[F("Berita "),a(o)!=1?(m(),_("span",X,": Halaman "+n(a(o)),1)):H("",!0)])]),(m(!0),_(j,null,q(a(d),e=>(m(),_("div",{onClick:rt=>i.$router.push("/berita/"+e.slug),class:"cursor-pointer animate-fade flex mb-10"},[t("div",Z,[s(w,{"lazy-src":e.thumbnail,height:"100%","aspect-ratio":"4/3",src:e.thumbnail},null,8,["lazy-src","src"])]),t("div",tt,[t("div",et,[t("span",st,n(e.title),1)]),t("div",ot,[t("div",at,[s(y,{class:"flex-none"}),t("span",nt,n(a(I)(e.created_at).format("LL")),1)]),t("div",lt,[s(C,{class:"flex-none"}),t("span",ct,n(e.name),1)])]),t("div",it,[t("span",_t,n(e.description),1)])])],8,Y))),256)),s(k,{size:i.$vuetify.display.mobile?"small":"default",class:"mt-4 mb-14",modelValue:a(o),"onUpdate:modelValue":[h[0]||(h[0]=e=>E(o)?o.value=e:null),g],"total-visible":5,length:a(u)},null,8,["size","modelValue","length"])]),t("div",mt,[s($),s(B)])])])}}},gt=T(dt,[["__scopeId","data-v-6a1e99c3"]]);export{gt as default};
