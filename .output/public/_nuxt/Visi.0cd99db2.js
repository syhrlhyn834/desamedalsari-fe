import{c as f,_ as C}from"./RichEditor.client.2681fd79.js";import{_ as b}from"./Loader.fb3add51.js";import{u as g,c as l,b as i,w as s,a as e,e as r,m as v,F as k,g as V,r as _,o as n,d as u}from"./entry.b57668ff.js";const B=f(C),y=e("div",{class:"text-2xl font-semibold mb-2"},"Visi Misi",-1),w={class:"grid animate-fade"},S={class:"col-12"},x={class:"card"},R=e("h3",{class:"mb-3 text-xl font-medium"},"Konten",-1),E={key:0,class:"capitalize"},L={data(){return{data:null,renderRichEditor:!1,loading:!1,toastSuccess:!1}},async mounted(){const a=await $fetch(this.$config.public.API_PUBLIC_URL+"/api/visi");this.data=a.visi,this.renderRichEditor=!0},methods:{async updateContent(){this.loading=!0,await $fetch(this.$config.public.API_PUBLIC_URL+"/api/visi",{method:"POST",headers:{Authorization:"Bearer "+V().token},body:{content:this.data}}),this.loading=!1,this.toastSuccess=!0},contentChange(a){this.data=a}}},I=Object.assign(L,{__name:"Visi",setup(a){return g({title:"Visi Misi"}),(t,o)=>{const c=_("v-btn"),m=_("v-snackbar"),h=B,p=b;return n(),l(k,null,[i(m,{modelValue:t.toastSuccess,"onUpdate:modelValue":o[1]||(o[1]=d=>t.toastSuccess=d),color:"#10B981",timeout:2500},{actions:s(()=>[i(c,{color:"white",variant:"text",onClick:o[0]||(o[0]=d=>t.toastSuccess=!1)},{default:s(()=>[u(" Tutup ")]),_:1})]),default:s(()=>[u(" Data berhasil diperbarui! ")]),_:1},8,["modelValue"]),y,e("div",w,[e("div",S,[e("div",x,[R,t.renderRichEditor?(n(),r(h,{key:0,data:t.data,onContentChange:t.contentChange},null,8,["data","onContentChange"])):v("",!0),i(c,{onClick:t.updateContent,color:"#10B981",class:"mt-4 text-white px-3 py-2"},{default:s(()=>[t.loading?(n(),r(p,{key:1})):(n(),l("span",E,"Submit"))]),_:1},8,["onClick"])])])])],64)}}});export{I as default};
