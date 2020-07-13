<template>
    <div class="container-fuild">
        <b-row class="row">
            <b-col cols="2" class="logo">
                <span>Migratory Bird</span>
            </b-col>
            <b-col cols="5"></b-col>
            <b-col cols="1">
                <router-link to="/test123">
                    <span class="find">FIND</span>
                </router-link>
            </b-col>
            <b-col cols="1">
                <router-link to="/slidertest">
                    <span>NEED</span>
                </router-link>
            </b-col>
            <b-col cols="1">
                <router-link to="/payment">
                    <span>COMUNITY</span>
                </router-link>
            </b-col>
            <b-col cols="1">
                <span>ABOUT</span>
            </b-col>
            <b-col cols="1">
                <div class="profilepic" @click="drop" v-if="loginstatus">
    
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
                    <div>
                        <span>Language</span>
                    </div>
                    <div @click="logout">
                        <span>Logout</span>
                    </div>
    
                </div>
            </b-col>
        </b-row>
        <!-- <div class="row">
                        <div class="col-2 logo"></div>
                        <div class="col-5"></div>
                        <div class="col-1">
                
                        </div>
                        <div class="col-1">
                            <router-link to="/slidertest">
                                <span>NEED</span>
                            </router-link>
                        </div>
                        <div class="col-1">
                            <router-link to="/payment">
                                <span>COMUNITY</span>
                            </router-link>
                        </div>
                        <div class="col-1">
                            <span>ABOUT</span>
                        </div>
                        <div class="col-1">
                            <div class="profilepic">
                
                            </div>
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
                                <div>
                                    <span>Logout</span>
                                </div>
                
                            </div>
                        </div>
                
                    </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            dropdown: false
            // isShow_hiddenNav: false,
            // NavBgColor: '',
            // navHeight: '',
        }
    },
    methods: {
        drop() {
            if (this.dropdown == false) {
                this.dropdown = true;
            } else {
                this.dropdown = false;
            }
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
    }
}
</script>

<style lang="scss" scoped>
// .col-1 {
//     border: solid 1px;
// }
.header {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.row {
    height: 7vh;
    background-color: #A6B6AE; // width: 100%;
    // position: fixed;
    // top: 0;
    // z-index: 2;
    .logo {
        span {
            font-size: 20px;
        }
    }
    .login {
        text-decoration: underline;
        font-size: 15px;
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
}

.header {
    display: flex;
    background-color: #666B46;
    height: 50px;
    justify-content: center;
    align-items: center;
}

.dropdownmenu {
    position: absolute;
    height: 200px;
    width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    left: -20px;
    top: 50px;
    background-color: white;
    border-radius: 5px;
    border: solid 1px #A6B6AE; // text-align: left;
    z-index: 2;
    span {
        color: #7E7E7E;
        font-size: 15px;
        margin-top: 5px; // border: solid 1px; // width: 100%;
        width: 100%;
    }
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