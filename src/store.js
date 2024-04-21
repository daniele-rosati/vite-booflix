import { reactive } from "vue";

export const store = reactive({
    queryParams: {
        api_key: 'adb107004fabf92d5ebd81e1a005eef1',
        language: 'it-IT',
    },
    movies: [],
    tvSeries: [],
    videos: [],
    searchFilter: '',
});