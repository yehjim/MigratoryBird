<template>
    <b-container fluid>
        <b-row v-bind:style="{backgroundColor: headercolor}">
            <div class="col-2 logo">
                <router-link to="/Hosthome">
                    <span>Migratory Bird</span>
                </router-link>
            </div>
            <div class="col-5"></div>
            <div class="col-1">
                <router-link to="/post">
                    <span class="find">Post</span>
                </router-link>
            </div>
            <div class="col-1">
                <router-link to="/search">
                    <span>Find</span>
                </router-link>
            </div>
            <div class="col-1">
                <router-link to="/payment">
                    <span>Mating</span>
                </router-link>
            </div>
            <div class="col-1">
                <span>community</span>
            </div>
            <div class="col-1 profile">
                <div class="profilepic" v-if="loginstatus==true" @click="dropdownopen">
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
                    <div @click="logout">
                        <span>Logout</span>
    
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
    props: ['headercolor'],
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
        test() {
            return this.$store.state.test
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
                border: solid 1px; // width: 100%;
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