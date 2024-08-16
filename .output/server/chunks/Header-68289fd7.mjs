import { _ as __nuxt_component_0 } from './MediaLibrary-15312a30.mjs';
import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { u as useHead, a as useToken } from './server.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import 'file-selector';
import 'attr-accept';
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

const __default__ = {
  data() {
    return {
      openMediaLibrary: false,
      form: {
        no_telp: null,
        email: null,
        logo: null,
        site_name: null,
        description: null
      },
      toast: false,
      toastSuccess: false,
      loading: false
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/header");
      this.form = data;
    },
    async updateHeader() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      if (!this.form.logo) {
        this.toast = true;
        return;
      }
      this.loading = true;
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/header", {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: this.form
      });
      this.loading = false;
      location.reload();
    },
    onImageSelected(val) {
      this.form.logo = val;
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Pengaturan Header"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_snackbar = resolveComponent("v-snackbar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_MediaLibrary = __nuxt_component_0;
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_img = resolveComponent("v-img");
      const _component_Loader = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_v_snackbar, {
        modelValue: _ctx.toastSuccess,
        "onUpdate:modelValue": ($event) => _ctx.toastSuccess = $event,
        color: "#10B981",
        timeout: 2500
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "white",
              variant: "text",
              onClick: ($event) => _ctx.toastSuccess = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tutup `);
                } else {
                  return [
                    createTextVNode(" Tutup ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, {
                color: "white",
                variant: "text",
                onClick: ($event) => _ctx.toastSuccess = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Tutup ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Data berhasil diperbarui! `);
          } else {
            return [
              createTextVNode(" Data berhasil diperbarui! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_snackbar, {
        modelValue: _ctx.toast,
        "onUpdate:modelValue": ($event) => _ctx.toast = $event,
        color: "red",
        timeout: 3e3
      }, {
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "white",
              variant: "text",
              onClick: ($event) => _ctx.toastUnauthorized = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Tutup `);
                } else {
                  return [
                    createTextVNode(" Tutup ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, {
                color: "white",
                variant: "text",
                onClick: ($event) => _ctx.toastUnauthorized = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Tutup ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Thumbnail wajib diisi! `);
          } else {
            return [
              createTextVNode(" Thumbnail wajib diisi! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MediaLibrary, {
        onOnImageSelected: _ctx.onImageSelected,
        onOnCloseModal: ($event) => _ctx.openMediaLibrary = false,
        open: _ctx.openMediaLibrary
      }, null, _parent));
      _push(`<div class="flex justify-between items-center mb-3"><div class="text-2xl font-semibold mb-2">Pengaturan Header</div></div><div class="grid animate-fade mb-6"><div class="col-12">`);
      _push(ssrRenderComponent(_component_v_form, { ref: "form" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              modelValue: _ctx.form.no_telp,
              "onUpdate:modelValue": ($event) => _ctx.form.no_telp = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "No Telepon"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              class: "my-4",
              modelValue: _ctx.form.email,
              "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              class: "my-4",
              modelValue: _ctx.form.site_name,
              "onUpdate:modelValue": ($event) => _ctx.form.site_name = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Site Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              class: "my-4",
              modelValue: _ctx.form.description,
              "onUpdate:modelValue": ($event) => _ctx.form.description = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Description"
            }, null, _parent2, _scopeId));
            if (_ctx.form.logo) {
              _push2(`<div class="relative w-fit mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_img, {
                src: _ctx.form.logo,
                width: "300"
              }, null, _parent2, _scopeId));
              _push2(`<div class="absolute cursor-pointer right-3 top-3 z-50"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"${_scopeId}><defs${_scopeId}><mask id="ipSCloseOne0"${_scopeId}><g fill="none" stroke-linejoin="round" stroke-width="4"${_scopeId}><path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"${_scopeId}></path><path stroke="#000" stroke-linecap="round" d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"${_scopeId}></path></g></mask></defs><path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)"${_scopeId}></path></svg></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="my-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              onClick: ($event) => _ctx.openMediaLibrary = true,
              color: "#10B981",
              class: "flex-none text-white px-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 20 20"${_scopeId2}><path fill="white" d="M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"${_scopeId2}></path></svg><div class="ml-1 font-semibold"${_scopeId2}>Media Library</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1.3em",
                        height: "1.3em",
                        viewBox: "0 0 20 20"
                      }, [
                        createVNode("path", {
                          fill: "white",
                          d: "M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"
                        })
                      ])),
                      createVNode("div", { class: "ml-1 font-semibold" }, "Media Library")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              onClick: _ctx.updateHeader,
              color: "#10B981",
              class: "mt-4 text-white px-3 py-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!_ctx.loading) {
                    _push3(`<span class="capitalize"${_scopeId2}>Update</span>`);
                  } else {
                    _push3(ssrRenderComponent(_component_Loader, null, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    !_ctx.loading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "capitalize"
                    }, "Update")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "card" }, [
                createVNode(_component_v_text_field, {
                  rules: [(v) => !!v || "Field is required"],
                  modelValue: _ctx.form.no_telp,
                  "onUpdate:modelValue": ($event) => _ctx.form.no_telp = $event,
                  variant: "outlined",
                  "hide-details": "auto",
                  label: "No Telepon"
                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  rules: [(v) => !!v || "Field is required"],
                  class: "my-4",
                  modelValue: _ctx.form.email,
                  "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                  variant: "outlined",
                  "hide-details": "auto",
                  label: "Email"
                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  rules: [(v) => !!v || "Field is required"],
                  class: "my-4",
                  modelValue: _ctx.form.site_name,
                  "onUpdate:modelValue": ($event) => _ctx.form.site_name = $event,
                  variant: "outlined",
                  "hide-details": "auto",
                  label: "Site Name"
                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  rules: [(v) => !!v || "Field is required"],
                  class: "my-4",
                  modelValue: _ctx.form.description,
                  "onUpdate:modelValue": ($event) => _ctx.form.description = $event,
                  variant: "outlined",
                  "hide-details": "auto",
                  label: "Description"
                }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                _ctx.form.logo ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "relative w-fit mt-4"
                }, [
                  createVNode(_component_v_img, {
                    src: _ctx.form.logo,
                    width: "300"
                  }, null, 8, ["src"]),
                  createVNode("div", {
                    onClick: ($event) => _ctx.form.logo = null,
                    class: "absolute cursor-pointer right-3 top-3 z-50"
                  }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.5em",
                      height: "1.5em",
                      viewBox: "0 0 48 48"
                    }, [
                      createVNode("defs", null, [
                        createVNode("mask", { id: "ipSCloseOne0" }, [
                          createVNode("g", {
                            fill: "none",
                            "stroke-linejoin": "round",
                            "stroke-width": "4"
                          }, [
                            createVNode("path", {
                              fill: "#fff",
                              stroke: "#fff",
                              d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                            }),
                            createVNode("path", {
                              stroke: "#000",
                              "stroke-linecap": "round",
                              d: "M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314"
                            })
                          ])
                        ])
                      ]),
                      createVNode("path", {
                        fill: "#10B981",
                        d: "M0 0h48v48H0z",
                        mask: "url(#ipSCloseOne0)"
                      })
                    ]))
                  ], 8, ["onClick"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "my-1" }, [
                  createVNode(_component_v_btn, {
                    onClick: ($event) => _ctx.openMediaLibrary = true,
                    color: "#10B981",
                    class: "flex-none text-white px-3"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1.3em",
                          height: "1.3em",
                          viewBox: "0 0 20 20"
                        }, [
                          createVNode("path", {
                            fill: "white",
                            d: "M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z"
                          })
                        ])),
                        createVNode("div", { class: "ml-1 font-semibold" }, "Media Library")
                      ])
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                createVNode(_component_v_btn, {
                  onClick: _ctx.updateHeader,
                  color: "#10B981",
                  class: "mt-4 text-white px-3 py-2"
                }, {
                  default: withCtx(() => [
                    !_ctx.loading ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "capitalize"
                    }, "Update")) : (openBlock(), createBlock(_component_Loader, { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Setting/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Header-68289fd7.mjs.map
