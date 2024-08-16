import { _ as __nuxt_component_0 } from './BreadCrumb-6154852b.mjs';
import { _ as __nuxt_component_0$1 } from './Date-c0091c75.mjs';
import { _ as __nuxt_component_2 } from './LatestActivities-4e3ea7cf.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import moment from 'moment';
import { _ as _export_sfc, u as useHead } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import '@vueuse/integrations/useJwt';
import 'cookie-es';
import 'ohash';
import 'pinia-plugin-persistedstate';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "Kegiatan"
    });
    const news = ref(null);
    const page = ref(1);
    const pageLength = ref(0);
    const { data, total } = ([__temp, __restore] = withAsyncContext(() => $fetch("/api/kegiatan?limit=5&page=1")), __temp = await __temp, __restore(), __temp);
    news.value = data;
    pageLength.value = Math.ceil(total / 5);
    async function changePage() {
      const { data: data2 } = await $fetch(`/api/kegiatan?limit=5&page=${page.value}`);
      news.value = data2;
      if (navigator.userAgent.includes("Chrome")) {
        window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
        return;
      }
      windowScrollTo(window, { behavior: "smooth", top: 0, left: 0 });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BreadCrumb = __nuxt_component_0;
      const _component_v_img = resolveComponent("v-img");
      const _component_IconsDate = __nuxt_component_0$1;
      const _component_v_pagination = resolveComponent("v-pagination");
      const _component_PartialsLatestActivities = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6" }, _attrs))} data-v-1d1f348b>`);
      _push(ssrRenderComponent(_component_BreadCrumb, null, {
        root: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-1d1f348b${_scopeId}>Kegiatan</span>`);
          } else {
            return [
              createVNode("span", null, "Kegiatan")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12" data-v-1d1f348b><div class="block col-span-1 md:col-span-4" data-v-1d1f348b><div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3" data-v-1d1f348b><span data-v-1d1f348b>Kegiatan `);
      if (unref(page) != 1) {
        _push(`<span data-v-1d1f348b>: Halaman ${ssrInterpolate(unref(page))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span></div><!--[-->`);
      ssrRenderList(unref(news), (news2) => {
        _push(`<div class="cursor-pointer animate-fade flex mb-10" data-v-1d1f348b><div class="h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none" data-v-1d1f348b>`);
        _push(ssrRenderComponent(_component_v_img, {
          "lazy-src": news2.thumbnail,
          height: "100%",
          "aspect-ratio": "4/3",
          src: news2.thumbnail
        }, null, _parent));
        _push(`</div><div class="block pl-4" data-v-1d1f348b><div class="tetx-base md:text-xl font-semibold" data-v-1d1f348b><span class="line-clamp-2" data-v-1d1f348b>${ssrInterpolate(news2.title)}</span></div><div class="text-xs md:text-base block md:flex items-center font-medium mt-2" data-v-1d1f348b>`);
        _push(ssrRenderComponent(_component_IconsDate, { class: "flex-none" }, null, _parent));
        _push(`<span class="ml-1 mr-2" data-v-1d1f348b>${ssrInterpolate(unref(moment)(news2.created_at).format("LL"))}</span></div><div class="mt-2 text-sm md:text-base" data-v-1d1f348b><span class="line-clamp-2 sm:line-clamp-3" data-v-1d1f348b>${ssrInterpolate(news2.description)}</span></div></div></div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_v_pagination, {
        size: _ctx.$vuetify.display.mobile ? "small" : "default",
        class: "mt-4 mb-14",
        modelValue: unref(page),
        "onUpdate:modelValue": [($event) => isRef(page) ? page.value = $event : null, changePage],
        "total-visible": 5,
        length: unref(pageLength)
      }, null, _parent));
      _push(`</div><div class="col-span-2" data-v-1d1f348b>`);
      _push(ssrRenderComponent(_component_PartialsLatestActivities, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Kegiatan/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d1f348b"]]);

export { index as default };
//# sourceMappingURL=index-e6efe146.mjs.map
