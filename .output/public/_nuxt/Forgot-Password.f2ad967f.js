import{_ as f}from"./Loader.fb3add51.js";import{_ as v,u as g,c as l,b as n,w as r,a as s,F as k,r as i,o as d,d as m,e as y,p as b,f as x}from"./entry.b57668ff.js";const c=a=>(b("data-v-cc752624"),a=a(),x(),a),C={class:"bg-[#F8FAFC] flex items-center justify-center min-h-screen min-w-screen overflow-hidden"},P={class:"w-[85%] md:w-[400px] flex flex-column align-items-center justify-center"},U={class:"bg-white px-8",style:{"border-radius":"36px",padding:"0.3rem",background:"linear-gradient(180deg, #0088CC 10%, rgba(33, 150, 243, 0) 30%)"}},V={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},F=c(()=>s("div",{class:"text-center mb-5 text-white"},[s("div",{class:"text-900 text-2xl font-medium mb-3"},"Reset Password")],-1)),$={class:"mt-12"},B=c(()=>s("label",{for:"password",class:"block text-900 font-medium text-lg my-4"},"Password",-1)),L=c(()=>s("path",{fill:"black",d:"M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"},null,-1)),z=[L],I=c(()=>s("path",{fill:"black",d:"M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"},null,-1)),S=[I],M={key:0},j={data(){return{loading:!1,showPassword:!1,emailSend:!1,form:{token:null,password:null},toastUnauthorized:!1}},mounted(){document.addEventListener("keydown",async a=>{(a.key==="Enter"||a.keyCode===13)&&await this.login()})},methods:{async resetPassword(){try{this.form.token=this.$route.query.token,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/reset-password/verify",{method:"POST",body:this.form}),this.$router.push("/auth/login")}catch{this.toastUnauthorized=!0}}}},A=Object.assign(j,{__name:"Forgot-Password",setup(a){return g({title:"Reset Password - Desaku"}),(e,t)=>{const u=i("v-btn"),p=i("v-snackbar"),w=i("v-text-field"),_=f,h=i("v-form");return d(),l(k,null,[n(p,{modelValue:e.toastUnauthorized,"onUpdate:modelValue":t[1]||(t[1]=o=>e.toastUnauthorized=o),color:"red",timeout:3e3},{actions:r(()=>[n(u,{color:"white",variant:"text",onClick:t[0]||(t[0]=o=>e.toastUnauthorized=!1)},{default:r(()=>[m(" Tutup ")]),_:1})]),default:r(()=>[m(" User tidak ditemukan! ")]),_:1},8,["modelValue"]),s("div",C,[s("div",P,[s("img",{onClick:t[2]||(t[2]=o=>e.$router.push("/")),class:"cursor-pointer w-[100px] mb-6 mx-auto",src:"https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png",alt:"App logo"}),s("div",U,[s("div",V,[F,n(h,{ref:"form"},{default:r(()=>[s("div",$,[B,n(w,{rules:[o=>!!o||"Field is required"],type:e.showPassword?"text":"password",modelValue:e.form.password,"onUpdate:modelValue":t[5]||(t[5]=o=>e.form.password=o),dense:"",variant:"outlined","hide-details":"auto",label:"Kata Sandi Baru"},{"append-inner":r(()=>[e.showPassword?(d(),l("svg",{key:1,class:"cursor-pointer",onClick:t[4]||(t[4]=o=>e.showPassword=!1),xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},S)):(d(),l("svg",{key:0,class:"cursor-pointer",onClick:t[3]||(t[3]=o=>e.showPassword=!0),xmlns:"http://www.w3.org/2000/svg",width:"1.5em",height:"1.5em",viewBox:"0 0 24 24"},z))]),_:1},8,["rules","type","modelValue"]),n(u,{elevation:"0",onClick:e.resetPassword,color:"#0088CC","text-color":"white",class:"w-full mt-5 text-white px-3 py-2"},{default:r(()=>[e.loading?(d(),y(_,{key:1})):(d(),l("span",M,"Ubah Password"))]),_:1},8,["onClick"])])]),_:1},512)])])])])],64)}}}),R=v(A,[["__scopeId","data-v-cc752624"]]);export{R as default};
