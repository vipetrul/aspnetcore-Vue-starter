import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
Vue.use(VueRouter);
var router = new VueRouter({
    mode: 'history',
    routes: routes
});
export default router;
