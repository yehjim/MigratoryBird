<template>
    <b-container fluid>
        <b-row v-bind:style="{backgroundColor: headercolor, color:fontcolor} ">
            <div class="col-2 logo">
                <router-link to="/">
                    <span v-bind:style="{color:fontcolor} ">Migratory Bird</span>
                </router-link>
            </div>
            <div class="col-4" v-if="host"></div>
            <div class="col-5" v-else></div>
            <div class="col-1" v-if="host">
                <router-link to="/post">
                    <span class="find" v-bind:style="{color:fontcolor} ">{{ $t('mainpagetop.post') }}</span>
                </router-link>
            </div>
            <div class="col-1" v-else>
                <router-link to="/search">
                    <span class="find" v-bind:style="{color:fontcolor} ">{{ $t('mainpagetop.find') }}</span>
                </router-link>
    
            </div>
            <div class="col-1" v-if="host">
                <router-link to="/search">
                    <span v-bind:style="{color:fontcolor} ">{{ $t('mainpagetop.find') }}</span>
                </router-link>
            </div>
            <div class="col-1" v-else>
                <router-link to="/need">
                    <span v-bind:style="{color:fontcolor} ">{{ $t('mainpagetop.need') }}</span>
                </router-link>
            </div>
    
            <div class="col-1" v-if="host">
                <router-link to="/need" >
                    <span v-bind:style="{color:fontcolor} ">{{ $t('mainpagetop.mating') }}</span>
                </router-link>
               
            </div>
    
            <div class="col-1" v-else>
                <router-link to="/about">
                    <span v-bind:style="{color:fontcolor} ">{{$t('mainpagetop.about')}}</span>
    
                </router-link>
            </div>
            <div class="col-1" v-show="host">
                <router-link to="/about">
                    <span v-bind:style="{color:fontcolor} ">{{$t('mainpagetop.about')}}</span>
    
                </router-link>
            </div>
            <div class="col-1" @click="changelang">
                <span v-bind:style="{color:fontcolor} ">{{ $t('mainpagetop.language') }}</span>
            </div>
            <div class="col-1 profile">
                <div class="profilepic" v-if="loginstatus==true" @click="dropdownopen">
                </div>
                <router-link to="/login" v-else>
                    <span class="login" v-bind:style="{color:fontcolor} ">{{ $t('mainpagetop.login') }}</span>
                </router-link>
                <div class="dropdownmenu" v-if="dropdown">
                    <router-link to="/profile">
                        <span>{{ $t('mainpagetop.profile') }}</span>
                    </router-link>
                    <router-link to="/profile/hostitem" v-if="hoststauts">
                        <span>Item</span>
                    </router-link>
                    <router-link to="/profile/MyNest" v-else v-show="hashouse">
                        <span>{{ $t('mainpagetop.mynest') }}</span>
                    </router-link>
                    <router-link to="/profile/chatroom" v-if="hoststauts">
                        <span>chatroom</span>
                    </router-link>
                    <router-link to="/profile/Like" v-else>
                        <span>{{ $t('mainpagetop.like') }}</span>
                    </router-link>
                    <router-link to="/profile/hostinbox" v-if="hoststauts">
                        <span>Inbox</span>
                    </router-link>
                    <router-link to="/profile/mbmating" v-else>
                        <span>Need Inbox</span>
                    </router-link>
                    <router-link to="/profile/landordinbox" v-if="hoststauts==false">
                        <span>Inbox</span>
                    </router-link>
                    <!-- <div @click="changelang">
                            <span>{{ $t('mainpagetop.language') }}</span>
                        </div> -->
                    <div @click="logout">
                        <span>{{ $t('mainpagetop.logout') }}</span>
    
                    </div>
    
                </div>
            </div>
        </b-row>
        <!-- <div class="row">
                                                                                                                    
                                                                                                                        </div> -->
    </b-container>
</template>

<script>
export default {
    name: 'Header',
    props: ['headercolor', 'fontcolor'],
    data() {
        return {
            isShow_hiddenNav: false,
            NavBgColor: '',
            navHeight: '',
            login: false,
            dropdown: false,
            // headercolor:'#666B46'
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        dropdownopen() {
            if (this.dropdown == false) {
                this.dropdown = true;
            } else {
                this.dropdown = false;
            }

        },
        changelang() {
            this.$emit('changelanghandler');
            console.log('app')
            this.$store.commit('diplaylangmodal')
        },
        logout() {
            console.log('按到')
            // this.login = false;
            // this.$store.commit('logincheck')
            this.$store.commit('logoutcheck')
            this.dropdown = false;
            // this.$router.push('/')
        }
    },
    computed: {
        loginstatus() {
            return this.$store.state.login;
        },
        hashouse() {
            return this.$store.state.userdata[0].hashouse
        },
        hoststauts() {
            return this.$store.state.hostcheck;
        },
        test() {
            return this.$store.state.test
        },
        host() {
            return this.$store.state.hostcheck;
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.row {
    height: 7vh; // border: solid 1px;
    .logo {
        span {
            font-size: 20px;
        }
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        .profilepic {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            background-color: white;
        }
        .find {
            font-size: 20px;
        }
    }
    span {
        color: white;
        font-size: 13px;
        font-weight: bold;
    }
    .login {
        text-decoration: underline;
        font-size: 15px;
    }
    .profile {
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
                width: 100%;
            }
        } // .dropdown span:hover {
        //     text-decoration: underline;
        // }
    }
}

.header {
    display: flex;
    background-color: #666B46;
    height: 50px;
    justify-content: center;
    align-items: center;
}

.hidden_nav {
    width: 100px; // height: auto;
    position: absolute;
    z-index: 1;
    background-color: white;
    border: 1px solid #A6B6AE;
    border-radius: 10px;
    text-align: left;
    padding: 10px 10px 10px 17px;
    left: 100%;
    transform: translateX(-150%);
    a {
        color: #7E7E7E;
    }
}
</style>