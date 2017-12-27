import Vue from 'vue';
import Vuex from 'vuex';
import { MyState } from './types';
Vue.use(Vuex);
// TYPES
var MAIN_SET_COUNTER = 'MAIN_SET_COUNTER';
// STATE
var state = new MyState();
// MUTATIONS
var mutations = (_a = {},
    _a[MAIN_SET_COUNTER] = function (st, obj) {
        st.counter = obj.counter;
    },
    _a);
// ACTIONS
var actions = ({
    setCounter: function (_a, obj) {
        var commit = _a.commit;
        commit(MAIN_SET_COUNTER, obj);
    }
});
export default new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
});
var _a;
