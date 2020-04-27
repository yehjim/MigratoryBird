import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import test123 from '../components/filtertest.vue'
import profile from '../views/Profile.vue'
import MyNest from '../components/MyNest.vue'
import Profile11 from '../components/ProfileAccountContent.vue'
import PaymentCard from '../components/PaymentCard.vue'
import Like from '../components/Like.vue'
import Login from '../views/Login.vue'
import slidertest from '../components/Silder.vue'
import Payrent from '../views/PayRent.vue'
import Payment from '../components/PaymentLine.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/test123',
        name: 'test123',
        component: test123
    },
    {
        path: '/login',
        name: Login,
        component: Login
    },
    {
        path: '/slidertest',
        name: slidertest,
        component: slidertest
    },
    {
        path: '/payrent',
        name: Payrent,
        component: Payrent
    },
    {
        path: '/payment',
        name: Payment,
        component: Payment
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile,
        children: [{
                path: '',
                components: {
                    Profile11,
                    PaymentCard
                }

            },
            {

                name: 'mynest',
                path: 'MyNest',
                component: MyNest
            }, {
                name: 'like',
                path: 'Like',
                component: Like
            }

        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router