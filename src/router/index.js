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
import Need from '../views/Need.vue'
import Payrent from '../views/PayRent.vue'
import Payment from '../components/PaymentLine.vue'
import Hostehome from '../views/hosthome.vue'
import HouseDetail from '../views/housedetail.vue'
import Signin from '../views/Signin.vue'
import Book from '../views/Bookingprocess.vue'
import Post from '../views/Post.vue'
import MbMating from '../components/mbmating.vue'
import Editingpayment from '../components/editpayment.vue'
import MbWallet from '../components/MBWallet.vue'
import MBwalletpage from '../views/MbWallet.vue'
import Hostitem from '../components/Hostitem.vue'
import chatroom from '../components/chatroom.vue'
import hostinbox from '../components/hostinbox.vue'
import landordinbox from '../components/landordinbox.vue'
import signinpayment from '../views/signinpayment.vue'
import about from '../views/About.vue'
import Edit from '../views/Edit.vue'
import editprofile from '../components/Editprofile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: about,
        component: about
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
        path: '/signinpayment',
        name: signinpayment,
        component: signinpayment
    },
    {
        path: '/need',
        name: 'Need',
        component: Need
    },

    {
        path: '/login',
        name: Login,
        component: Login
    },
    {
        path: '/signin',
        name: Signin,
        component: Signin
    },
    {
        path: '/slidertest',
        name: slidertest,
        component: slidertest
    },
    {
        path: '/payrent/:id',
        name: 'Payrent',
        component: Payrent
    },
    {
        path: '/payment',
        name: Payment,
        component: Payment
    },
    {
        path: '/Edit/:id',
        name: 'Edit',
        component: Edit
    },
    {
        path: '/book/:id',
        name: 'Book',
        component: Book
    },
    {
        path: '/HouseDetail/:id',
        name: 'HouseDetail',
        component: HouseDetail
    },
    {
        path: '/Hosthome',
        name: Hostehome,
        component: Hostehome
    },
    {
        path: '/post',
        name: Post,
        component: Post
    },
    {
        path: '/mbwalletpage',
        name: MBwalletpage,
        component: MBwalletpage
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile,
        children: [{
                path: '',
                components: {
                    Profile11,
                    PaymentCard,
                    MbWallet
                }

            },
            {
                name: 'Editingpayment',
                path: 'editingpayment',
                component: Editingpayment
            },
            {

                name: 'mynest',
                path: 'MyNest',
                component: MyNest,
            }, {
                name: 'like',
                path: 'Like',
                component: Like
            }, {
                name: 'mbmating',
                path: 'mbmating',
                component: MbMating
            },
            {
                name: 'hostitem',
                path: 'hostitem',
                component: Hostitem

            },
            {
                name: 'EditProfile',
                path: 'editprofile',
                component: editprofile
            },
            {
                name: 'chatroom',
                path: 'chatroom',
                component: chatroom
            },
            {
                name: 'hostinbox',
                path: 'hostinbox',
                component: hostinbox
            },
            {
                name: 'landordinbox',
                path: 'landordinbox',
                component: landordinbox
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