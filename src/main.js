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
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps'
library.add(faCoffee, faGooglePlus);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {

    load: {
        key: 'AIzaSyCmPMc8NK4yokjDWOCoLXMgJ6UdhWIJam0',
        libraries: 'places',


    },
})
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