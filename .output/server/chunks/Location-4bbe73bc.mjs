import { _ as __nuxt_component_1 } from './Loader-d2c5798c.mjs';
import { u as useHead, a as useToken } from './server.mjs';
import { resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
      loading: false,
      formAlamat: [
        {
          name: "Provinsi",
          value: null
        }
      ],
      toastSuccess: false,
      form: {
        desa: null,
        kecamatan: null,
        kelurahan: null,
        rt: null,
        rw: null,
        kabupaten: null,
        provinsi: null,
        maps: null
      }
    };
  },
  async mounted() {
    await this.loadData();
    await this.loadAlamat();
  },
  methods: {
    async loadData() {
      const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/location");
      this.form = data;
    },
    async loadAlamat() {
      const data = await $fetch(this.$config.public.API_PUBLIC_URL + "/api/address");
      this.formAlamat = data;
    },
    async updateLocation() {
      const { valid } = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      await this.updateAlamat();
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/location", {
        method: "PATCH",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: this.form
      });
      this.loading = false;
      this.toastSuccess = true;
    },
    async updateAlamat() {
      await $fetch(this.$config.public.API_PUBLIC_URL + "/api/address", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + useToken().token
        },
        body: {
          address: this.formAlamat
        }
      });
    },
    addAlamat() {
      this.formAlamat.push({
        name: null,
        value: null
      });
    },
    removeAlamat(index) {
      this.formAlamat = this.formAlamat.filter((v, i) => {
        return i != index;
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Location",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Pengaturan Lokasi"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_snackbar = resolveComponent("v-snackbar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
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
      _push(`<div class="flex justify-between items-center mb-3"><div class="text-2xl font-semibold mb-2">Lokasi Desa</div></div><div class="grid animate-fade mb-6"><div class="col-12"><div class="card">`);
      _push(ssrRenderComponent(_component_v_form, { ref: "form" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.formAlamat, (alamat, index) => {
              _push2(`<div class="mb-6 flex w-full"${_scopeId}><div class="w-1/3 flex-none"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_text_field, {
                rules: [(v) => !!v || "Field is required"],
                modelValue: alamat.name,
                "onUpdate:modelValue": ($event) => alamat.name = $event,
                variant: "outlined",
                "hide-details": "auto",
                label: "Nama Sosial Media"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_v_text_field, {
                rules: [(v) => !!v || "Field is required"],
                class: "mx-3",
                modelValue: alamat.value,
                "onUpdate:modelValue": ($event) => alamat.value = $event,
                variant: "outlined",
                "hide-details": "auto",
                label: "Link"
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex-none flex pt-3"${_scopeId}>`);
              if (index == _ctx.formAlamat.length - 1) {
                _push2(ssrRenderComponent(_component_v_btn, {
                  onClick: ($event) => _ctx.addAlamat(),
                  color: "#10B981",
                  style: { "height": "40px !important", "width": "20px !important", "padding": "0 0px !important" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24"${_scopeId2}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1.8em",
                          height: "1.8em",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M12 5v14m-7-7h14"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_v_btn, {
                  onClick: ($event) => _ctx.removeAlamat(index),
                  color: "#FC4100",
                  style: { "height": "40px !important", "width": "20px !important", "padding": "0 0px !important" }
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24"${_scopeId2}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"${_scopeId2}></path></svg>`);
                    } else {
                      return [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "1.7em",
                          height: "1.7em",
                          viewBox: "0 0 24 24"
                        }, [
                          createVNode("path", {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            d: "M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                          })
                        ]))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div><div class="mb-3 text-lg font-medium my-1 mt-6"${_scopeId}>Embed Maps Desa</div><div class="mt-5 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              rules: [(v) => !!v || "Field is required"],
              modelValue: _ctx.form.maps,
              "onUpdate:modelValue": ($event) => _ctx.form.maps = $event,
              variant: "outlined",
              "hide-details": "auto",
              label: "Koordinat Desa",
              placeholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13775.689247611277!2d110.4623105457275!3d-7.719445311589754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b002c9e90df%3A0x23b5967fa1ba0b53!2sKledoan%20joglo's%20Villa!5e0!3m2!1sen!2sid!4v1715591524593!5m2!1sen!2sid"
            }, {
              "prepend-inner": withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.2em" viewBox="0 0 256 367"${_scopeId2}><path fill="#34a853" d="M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"${_scopeId2}></path><path fill="#fbbc04" d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"${_scopeId2}></path><path fill="#4285f4" d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"${_scopeId2}></path><path fill="#1a73e8" d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"${_scopeId2}></path><path fill="#ea4335" d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    (openBlock(), createBlock("svg", {
                      class: "mr-1",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.3em",
                      height: "1.2em",
                      viewBox: "0 0 256 367"
                    }, [
                      createVNode("path", {
                        fill: "#34a853",
                        d: "M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"
                      }),
                      createVNode("path", {
                        fill: "#fbbc04",
                        d: "M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"
                      }),
                      createVNode("path", {
                        fill: "#4285f4",
                        d: "M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"
                      }),
                      createVNode("path", {
                        fill: "#1a73e8",
                        d: "M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"
                      }),
                      createVNode("path", {
                        fill: "#ea4335",
                        d: "M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.form.maps) {
              _push2(`<div class="mx-auto mt-6 flex justify-center"${_scopeId}>${_ctx.form.maps}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "block" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.formAlamat, (alamat, index) => {
                  return openBlock(), createBlock("div", { class: "mb-6 flex w-full" }, [
                    createVNode("div", { class: "w-1/3 flex-none" }, [
                      createVNode(_component_v_text_field, {
                        rules: [(v) => !!v || "Field is required"],
                        modelValue: alamat.name,
                        "onUpdate:modelValue": ($event) => alamat.name = $event,
                        variant: "outlined",
                        "hide-details": "auto",
                        label: "Nama Sosial Media"
                      }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_v_text_field, {
                      rules: [(v) => !!v || "Field is required"],
                      class: "mx-3",
                      modelValue: alamat.value,
                      "onUpdate:modelValue": ($event) => alamat.value = $event,
                      variant: "outlined",
                      "hide-details": "auto",
                      label: "Link"
                    }, null, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                    createVNode("div", { class: "flex-none flex pt-3" }, [
                      index == _ctx.formAlamat.length - 1 ? (openBlock(), createBlock(_component_v_btn, {
                        key: 0,
                        onClick: ($event) => _ctx.addAlamat(),
                        color: "#10B981",
                        style: { "height": "40px !important", "width": "20px !important", "padding": "0 0px !important" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1.8em",
                            height: "1.8em",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M12 5v14m-7-7h14"
                            })
                          ]))
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : (openBlock(), createBlock(_component_v_btn, {
                        key: 1,
                        onClick: ($event) => _ctx.removeAlamat(index),
                        color: "#FC4100",
                        style: { "height": "40px !important", "width": "20px !important", "padding": "0 0px !important" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "1.7em",
                            height: "1.7em",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", {
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              d: "M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                            })
                          ]))
                        ]),
                        _: 2
                      }, 1032, ["onClick"]))
                    ])
                  ]);
                }), 256))
              ]),
              createVNode("div", { class: "mb-3 text-lg font-medium my-1 mt-6" }, "Embed Maps Desa"),
              createVNode("div", { class: "mt-5 w-full" }, [
                createVNode(_component_v_text_field, {
                  rules: [(v) => !!v || "Field is required"],
                  modelValue: _ctx.form.maps,
                  "onUpdate:modelValue": ($event) => _ctx.form.maps = $event,
                  variant: "outlined",
                  "hide-details": "auto",
                  label: "Koordinat Desa",
                  placeholder: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13775.689247611277!2d110.4623105457275!3d-7.719445311589754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b002c9e90df%3A0x23b5967fa1ba0b53!2sKledoan%20joglo's%20Villa!5e0!3m2!1sen!2sid!4v1715591524593!5m2!1sen!2sid"
                }, {
                  "prepend-inner": withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      class: "mr-1",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "1.3em",
                      height: "1.2em",
                      viewBox: "0 0 256 367"
                    }, [
                      createVNode("path", {
                        fill: "#34a853",
                        d: "M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"
                      }),
                      createVNode("path", {
                        fill: "#fbbc04",
                        d: "M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"
                      }),
                      createVNode("path", {
                        fill: "#4285f4",
                        d: "M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"
                      }),
                      createVNode("path", {
                        fill: "#1a73e8",
                        d: "M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"
                      }),
                      createVNode("path", {
                        fill: "#ea4335",
                        d: "M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"
                      })
                    ]))
                  ]),
                  _: 1
                }, 8, ["rules", "modelValue", "onUpdate:modelValue"]),
                _ctx.form.maps ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mx-auto mt-6 flex justify-center",
                  innerHTML: _ctx.form.maps
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        onClick: _ctx.updateLocation,
        color: "#10B981",
        class: "mt-5 text-white px-3 py-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!_ctx.loading) {
              _push2(`<span class="capitalize"${_scopeId}>Update</span>`);
            } else {
              _push2(ssrRenderComponent(_component_Loader, null, null, _parent2, _scopeId));
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
      }, _parent));
      _push(`</div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Dashboard/Setting/Location.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Location-4bbe73bc.mjs.map
