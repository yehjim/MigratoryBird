<template>
    <b-container fluid>
        <b-row class="housedtnavbar" v-bind:style="{backgroundColor: NavBgColor}">
            <b-col cols="2" class="logo flexcenter">
                <router-link to="/"><span>Migratory Bird</span></router-link>
            </b-col>
            <b-col cols="4" v-if="host"></b-col>
            <b-col cols="5" v-else></b-col>
            <b-col cols="1" class="flexcenter find" v-if="host">
                <router-link to="/post">
                    <span class="find">Post</span>
                </router-link>
            </b-col>
            <b-col cols="1" class="flexcenter find" v-else>
                <router-link to="/search">
                    <span class="find">FIND</span>
                </router-link>
    
            </b-col>
            <b-col cols="1" class="flexcenter" v-if="host">
                <router-link to="/search">
                    <span>Find</span>
                </router-link>
            </b-col>
            <b-col cols="1" class="flexcenter" v-else>
                <router-link to="/need">
                    <span>NEED</span>
                </router-link>
            </b-col>
            <b-col cols="1" class="flexcenter" v-if="host">
                <router-link to="/need">
                    <span>Mating</span>
                </router-link>
    
    
            </b-col>
    
            <b-col cols="1" class="flexcenter" v-else>
    
                <router-link to="/about">
                    <span>ABOUT</span>
                </router-link>
    
            </b-col>
            <b-col cols="1" class="flexcenter" v-if="host">
                <router-link to="/about">
                    <span>ABOUT</span>
                </router-link>
    
            </b-col>
            <b-col cols="1" class="flexcenter" v-else>
    
                <div @click="changelang">
                    <span>LANGUAGE</span>
                </div>
    
            </b-col>
            <b-col cols="1" class="flexcenter" v-show="host">
                <div @click="changelang">
                    <span>LANGUAGE</span>
                </div>
    
            </b-col>
    
            <b-col cols="1" class="profile flexcenter">
                <div class="profilepic" v-if="loginstatus" @click="drop">
    
                </div>
                <router-link to="/login" v-else>
                    <span class="login">LOGIN</span>
                </router-link>
                <div class="dropdownmenu" v-if="dropdown">
                    <router-link to="/profile">
                        <span>{{ $t('mainpagetop.profile') }}</span>
                    </router-link>
                    <router-link to="/profile/hostitem" v-if="host">
                        <span>Item</span>
                    </router-link>
                    <router-link to="/profile/MyNest" v-else v-show="hashouse">
                        <span>{{ $t('mainpagetop.mynest') }}</span>
                    </router-link>
                    <router-link to="/profile/chatroom" v-if="host">
                        <span>chatroom</span>
                    </router-link>
                    <router-link to="/profile/Like" v-else>
                        <span>{{ $t('mainpagetop.like') }}</span>
                    </router-link>
                    <router-link to="/profile/hostinbox" v-if="host">
                        <span>Inbox</span>
                    </router-link>
                    <router-link to="/profile/mbmating" v-else>
                        <span>Need Inbox</span>
                    </router-link>
                    <router-link to="/profile/landordinbox" v-if="host==false">
                        <span>Inbox</span>
                    </router-link>
                    <div @click="logout">
                        <span>{{ $t('mainpagetop.logout') }}</span>
    
                    </div>
    
                </div>
            </b-col>
        </b-row>
    
    </b-container>
</template>

<script>
'use strict'
// import Dropdownmenu from './DropDownMenu'
export default {
    name: "HouseDTHeaderer",

    data() {
        return {
            isShow_hiddenNav: false,
            isShowInfoDot: false,
            NavBgColor: '',
            navHeight: '',
            dropdown: false
        };
    },
    components: {
        // Dropdownmenu
    },
    mounted() { //给window添加一个滚动滚动监听事件
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        show_hiddenNav: function() {
            this.isShow_hiddenNav = !this.isShow_hiddenNav;
        },
        handleScroll: function() {
            var scrollFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(scrollFromTop)
            if (scrollFromTop < 100) {
                this.NavBgColor = 'transparent';
            } else {
                // this.NavBgColor = '#CFDDD6';
                this.NavBgColor = '#666B46';
                this.navHeight = 70 + 'px';
            }
        },
        drop() {
            if (this.dropdown == false) {
                this.dropdown = true
            } else {
                this.dropdown = false
            }

        },
        logout() {
            this.$store.commit('logoutcheck')
            this.dropdown = false;
        },
        changelang() {
            //  this.$emit('changelanghandler');
            console.log('app')
            this.$store.commit('diplaylangmodal')
            // this.$store.commit('diplaylangmodal')
        }
    },
    computed: {
        loginstatus() {
            return this.$store.state.login;
        },
        host() {
            return this.$store.state.hostcheck;
        },
        hashouse() {
            return this.$store.state.userdata[0].hashouse
        }
    },
    beforedestroyed() { //离开该页面前需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
    },

}
</script>

<style lang="scss" scoped>
.logo {
    // color: black;
    span {
        font-size: 20px;
        color: white;
    }
}

.flexcenter {
    display: flex;
    justify-content: center;
    align-items: center; // border: solid 1px;
}

.housedtnavbar {
    // background-color: red;
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 50px;
    font-weight: bold;
    .find {
        font-size: 22px;
        color: white; // color: black;
    }
    span {
        // border: solid 1px;
        color: white;
        font-size: 15px;
        font-weight: bold;
    }
    .profile {
        .profilepic {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            background-color: white;
        }
        .dropdownmenu {
            position: absolute;
            height: 200px;
            width: 120px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            top: 55px;
            background-color: white;
            border-radius: 5px;
            border: solid 1px #A6B6AE; // text-align: left;
            z-index: 2;
            span {
                color: #7E7E7E;
                font-size: 15px;
                width: 100%;
            }
        }
    }
}

@mixin size($w, $h) {
    width: $w;
    height: $h;
}

$font_basic_size: 10px;
$color_white: #ffffff;
$color_black: #000;
$color_darkWhite: #e8e8e8;
$color_darkBrown: #75572e;
$color_darkGreen: #666b46;
$color_tagColor: #a6b6ae;
</style>
