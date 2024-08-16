export default defineEventHandler(async (event) => {
    let query = '';

    for (let key in getQuery(event)){
        query += `${key}=${getQuery(event)[key]}&`
    }

    return await $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/potensi-desa?' + query.slice(0, -1))
})