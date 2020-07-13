<template>
    <b-container fluid>
        <b-row class="housedtnavbar" v-bind:style="{backgroundColor: NavBgColor}">
            <b-col cols="2" class="logo flexcenter">
                <router-link to="/"><span>Migratory Bird</span></router-link>
            </b-col>
            <b-col cols="5">
    
            </b-col>
            <b-col cols="1" class="flexcenter">
                <router-link to="/search">
                    <span class="find">FIND</span>
                </router-link>
    
            </b-col>
            <b-col cols="1" class="flexcenter">
                <span>NEED</span>
    
            </b-col>
            <b-col cols="1" class="flexcenter">
                <span>COMUNITY</span>
    
            </b-col>
            <b-col cols="1" class="flexcenter">
                <span>ABOUT</span>
            </b-col>
            <b-col cols="1" class="profile flexcenter">
                <div class="profilepic" v-if="loginstatus" @click="drop">
    
                </div>
                <router-link to="/login" v-else>
                    <span class="login">LOGIN</span>
                </router-link>
                <div class="dropdownmenu" v-if="dropdown">
                    <router-link to="/profile">
                        <span>Profile</span>
                    </router-link>
                    <router-link to="/profile/MyNest">
                        <span>MyNest</span>
                    </router-link>
                    <router-link to="/profile/Like">
                        <span>Like</span>
                    </router-link>
                    <div>
                        <span>LFR Post</span>
                    </div>
                    <div @click="changelang">
                        <span>Language</span>
                    </div>
                    <div class="logout" @click="logout">
                        <!-- <router-link to="/login"> -->
                        <span>Logout</span>
                        <!-- </router-link> -->
    
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
            this.$store.commit('diplaylangmodal')
        }
    },
    computed: {
        loginstatus() {
            return this.$store.state.login;
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
    align-items: center;
}

.housedtnavbar {
    // background-color: red;
    position: fixed;
    z-index: 5;
    width: 100%;
    height: 50px;
    font-weight: bold;
    span {
        // border: solid 1px;
        color: white;
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
            top: 55px;
            background-color: white;
            border-radius: 5px;
            border: solid 1px #A6B6AE; // text-align: left;
            z-index: 2;
            span {
                color: #7E7E7E;
                font-size: 15px;
                border: solid 1px; // width: 100%;
                width: 100%;
            }
        }
    }
}

.find {
    font-size: 20px;
    color: white; // color: black;
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
* {
    font-family: 微軟正黑體;
    position: relative;
    box-sizing: border-box;
} // .HouseDTHeader{
//   border: 1px solid yellow;
// }
</style>
