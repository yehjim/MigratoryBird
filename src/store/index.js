import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: [],
        login: false,
        test: '測試',
        hostcheck: false,
        langdisplay: 'none',
        hashouse: false,
        checkindata: {
            checkin: '123132',
            checkout: ''
        },
        username: '',
        userdata: {
            houseid: '',
            username: '',

        },
        posthousedata: {

        },
        searchdata: {
            key: '',
            date: '',
            stay: ''
        }

    },
    mutations: {
        SETLIST(state, list) {
            state.list = list
        },
        logincheck(state) {
            state.login = true
        },
        signincheck(state) {
            state.login = true
        },
        logoutcheck(state) {
            state.login = false
        },
        hostcheck(state) {
            state.hostcheck = true;
        },
        diplaylangmodal(state) {
            state.langdisplay = "block"
        },
        closelangmodal(state) {
            state.langdisplay = "none"
        },
        setuserdata(state, userdata) {
            state.userdata = userdata;
        },
        posthouseidtouser(state, id) {
            state.userdata[0].houseid = id;
        },
        posthousestatus(state, hashouse) {
            state.hashouse = hashouse;
        },
        setsearchdata(state, key, date, stay) {
            state.searchdata.key = key
            state.searchdata.date = date
            state.searchdata.stay = stay

        }
    },
    actions: {
        GETLIST(context) {
            console.log(context)
            return axios.get('http://localhost:7000/Items').then(res => {
                context.commit('SETLIST', res.data);
            })
        },
        getloginstatus() {
            return this.state.login
        },
        GETUSERDATA(context) {
            console.log(context)
            let username = this.state.userdata.username
            this.state.username = this.state.userdata.username;
            axios.get(`http://localhost:7000/user/?username=${username}`).then(res => {
                console.log(res.data);
                context.commit('setuserdata', res.data)
            })
        }
    },
    modules: {}
})