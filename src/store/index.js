import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: []

    },
    mutations: {
        SETLIST(state, list) {
            state.list = list
        }
    },
    actions: {
        GETLIST(context) {
            console.log(context)
            return axios.get('http://localhost:7000/Items').then(res => {
                context.commit('SETLIST', res.data);
            })
        }
    },
    modules: {}
})