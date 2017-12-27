import Vue from 'vue'
import Vuex from 'vuex'
import { MyState } from './types'

Vue.use(Vuex)

// TYPES
const MAIN_SET_COUNTER = 'MAIN_SET_COUNTER'

// STATE
const state = new MyState();

// MUTATIONS
const mutations = {
    [MAIN_SET_COUNTER](st: MyState, obj: any) {
        st.counter = obj.counter;
    }
};

// ACTIONS
const actions = ({
    setCounter({ commit }: any, obj: any) {
        commit(MAIN_SET_COUNTER, obj);
    }
});

export default new Vuex.Store({
    state,
    mutations,
    actions
});
