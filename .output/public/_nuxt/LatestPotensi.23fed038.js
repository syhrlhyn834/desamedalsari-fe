import{i as m,j as u,o as a,c as o,a as t,F as d,n as f,t as p,l as _,_ as v,r as x,s as C,b,p as g,f as y}from"./entry.b57668ff.js";import{h as w}from"./moment.e0d93728.js";const $=t("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-xl sm:text-2xl font-semibold py-3"},[t("span",null,"Kategori")],-1),k={class:"flex flex-wrap"},L=["onClick"],K={__name:"PotensiCategory",async setup(n){let e,l;const c=m(null);return c.value=([e,l]=u(()=>$fetch("/api/potensi-category?limit=5&allow_empty=1")),e=await e,l(),e),(i,h)=>(a(),o(d,null,[$,t("div",k,[(a(!0),o(d,null,f(_(c),r=>(a(),o("div",{onClick:s=>i.$router.push("/potensi-desa/category/"+r.slug),class:"bg-[#0088CC] cursor-pointer font-medium text-white pa-2 mr-2 mt-2 text-sm w-fit rounded-full"},[t("span",null,p(r.name),1)],8,L))),256))])],64))}};const P=n=>(g("data-v-f1c162af"),n=n(),y(),n),I=P(()=>t("div",{class:"text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-xl md:text-2xl font-semibold py-3"},[t("span",null,"Potensi Desa Terbaru")],-1)),S={class:"mb-10"},T=["onClick"],B={class:"w-[140px] flex-none"},z={class:"block ml-3"},D={class:"text-[#0088CC] text-base font-medium"},F={class:"line-clamp-2"},N={class:"mt-1"},V={__name:"LatestPotensi",async setup(n){let e,l;const c=m([]);return c.value=([e,l]=u(()=>$fetch("/api/potensi-desa?limit=5")),e=await e,l(),e).data,(i,h)=>{const r=x("v-img");return a(),o(d,null,[I,t("div",S,[(a(!0),o(d,null,f(_(c),s=>(a(),o("div",{onClick:j=>("navigateTo"in i?i.navigateTo:_(C))("/potensi-desa/"+s.slug),class:"cursor-pointer mb-2 py-3 flex"},[t("div",B,[b(r,{"lazy-src":s.thumbnail,cover:"",class:"w-full",height:"80",src:s.thumbnail,alt:""},null,8,["lazy-src","src"])]),t("div",z,[t("div",D,[t("span",F,p(s.title),1)]),t("div",N,[t("span",null,p(_(w)(s.created_at).format("LL")),1)])])],8,T))),256))])],64)}}},q=v(V,[["__scopeId","data-v-f1c162af"]]);export{K as _,q as a};
