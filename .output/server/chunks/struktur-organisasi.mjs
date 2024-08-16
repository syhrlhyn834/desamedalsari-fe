import { defineEventHandler } from 'h3';
import { u as useRuntimeConfig } from './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const strukturOrganisasi = defineEventHandler(async () => {
  return await $fetch(useRuntimeConfig().public.API_BASE_URL + "/api/struktur-organisasi");
});

export { strukturOrganisasi as default };
//# sourceMappingURL=struktur-organisasi.mjs.map
