import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import AOS from 'aos';
import "aos/dist/aos.css";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
    router,
    store,
    i18n,
    created() {
        AOS.init({
            duration: 1400,
        });
    },
    render: h => h(App)
}).$mount('#app')