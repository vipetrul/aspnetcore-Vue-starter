import Vue from 'vue';
import axios from 'axios';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import App from 'components/app-root.vue';
Vue.prototype.$http = axios;
sync(store, router);
var app = new Vue({
    store: store,
    router: router,
    render: function (h) { return h(App); }
});
export { app, router, store };
