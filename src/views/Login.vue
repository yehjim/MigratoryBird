<template>
    <div class="login">
        <div class="leftcontent">
            <div class="migra">
                <span>MIGRA</span>
            </div>
            <div class="hometown">
                <span>Hometown</span>
            </div>
            <div class="family">
                <span>Family</span>
            </div>
            <div class="safe">
                <span>Safe</span>
            </div>
        </div>
        <div class="rightcontent">
            <div class="loginwrap">
                <div class="logintitile">
                    <span>Login to Migratory Bird</span>
                </div>
                <!-- <div class="fblogin">
    
                </div> -->
                <div class="googlelogin">
                    <GoogleLogin class="test" :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
                </div>
                <div class="or">
                    <div class="rightline"></div>
                    <span>or</span>
                    <div class="leftline"></div>
                </div>
                <div class="logininfo">
                    <p>Login with your email address username</p>
                </div>
                <div class="username">
                    <span>Email/Username</span>
                    <input type="text" v-model="username" v-bind:style="{border:style}">
                </div>
                <div class="password">
                    <span>Password</span>
                    <input  type="password" v-model="password" v-bind:style="{border:style}">
                    <label v-if="notUser" for="" class="notuserlabel">還未加入？</label>
    
                </div>
                <div class="remembercheck">
                    <input type="checkbox">
                    <span>Remember me?</span>
                </div>
                <div class="loginbtn" @click="login">
                    <span>LOGIN</span>
                </div>
                <router-link to="/signin">
                    <div class="signin">
                        <span>Signin</span>
                    </div>
                </router-link>
    
    
            </div>
        </div>
    
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous">

</script>

<script>
import GoogleLogin from 'vue-google-login';
// import Hosthome from '../views/hosthome'
import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            password: '',
            type: '',
            notUser: false,
            style: '',
            userdata: [{
                usertype: 'host',
                username: 'yehjim',
                password: '1234'
            }],
            params: {
                client_id: "488294973910-ltr2ngq19gukrhm7vhqf564gr30aqc3n.apps.googleusercontent.com"
            },
            // only needed if you want to render the button with the google ui
            renderParams: {
                width: 250,
                height: 30,
                longtitle: true
            }
        }
    },
    components: {
        GoogleLogin
    },
    mounted() {
        axios.get('http://localhost:7000/user')
            .then((res) => {
                this.userdata = res.data
                console.log(this.userdata)
            }).catch((err) => {
                console.log(err)

            })

    },
    methods: {
        login() {
            let vm = this;
            // console.log(this.userdata["username"])
            for (let i = 0; i < this.userdata.length; i++) {
                if (this.username == this.userdata[i].username && this.password == this.userdata[i].password && this.userdata[i].type == "landord") {
                    console.log('有找到')
                    let currentusername = this.userdata[i].username
                    this.$store.state.userdata.username =  currentusername;
                    this.$store.dispatch('GETUSERDATA')
                    this.$store.commit('logincheck')
                    this.$store.commit('landrodcheck')
                    vm.$router.push('/')
                } else if (this.username == this.userdata[i].username && this.password == this.userdata[i].password && this.userdata[i].type == "host") {
                    this.$store.commit('logincheck')
                    this.$store.commit('hostcheck')
                    let currentusername = this.userdata[i].username
                    this.$store.state.userdata.username =  currentusername;
                    this.$store.dispatch('GETUSERDATA')
                     vm.$router.push('/')
                } else {
                    this.notUser = true
                    this.style = 'solid 0.3px red'
                }
            }


        },
        onSuccess() {

        }

    }
    // components:{
    //     Hosthome
    // }

}
</script>

<style lang="scss" scoped>
.test {
    border: none; // width: 100%;
}

.login {
    background-image: url('../assets/media/joyce-romero-EV_bivvSaC8-unsplash.jpg');
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -1000px;
    display: flex;
    .leftcontent {
        width: 50%;
        .migra,
        .hometown,
        .family,
        .safe {
            color: white;
            font-size: 70px;
        }
        .migra {
            margin-left: 100px;
            margin-top: 50px;
        }
        .hometown,
        .family,
        .safe {
            margin-left: 200px;
        }
        .hometown {
            margin-top: 40px;
        }
    }
    .rightcontent {
        width: 50%;
        .loginwrap {
            background-color: white;
            height: 700px;
            width: 450px;
            margin: auto;
            margin-top: 50px;
            .logintitile {
                // border: solid 1px;
                color: #7E7E7E;
                font-size: 23px;
                text-align: center;
                padding-top: 30px;
            }
            .fblogin,
            .googlelogin {
                // border: solid 1px;
                width: 250px;
                height: 30px;
                margin: auto;
                margin-top: 50px;
            }
        }
        .or {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #6a6a6a;
            font-size: 28px;
            ;
            .rightline {
                border: solid 1px #6a6a6a;
                width: 150px;
                margin-right: 10px;
            }
            .leftline {
                border: solid 1px #6a6a6a;
                width: 150px;
                margin-left: 10px;
            }
        }
        .logininfo {
            text-align: center;
            padding-top: 20px;
            font-size: 15px;
            padding-bottom: 20px;
            color: #6A6A6A; // border: solid 1px;
            width: 80%;
            margin: auto;
            margin-top: 30px;
        }
        .username,
        .password {
            width: 80%;
            margin: auto;
            display: flex;
            flex-direction: column;
            width: 70%;
            margin: auto;
            margin-bottom: 10px; // border: red;
            .notuserinput {
                border: solid 0.3px red;
            }
            span {
                color: #6A6A6A;
                font-size: 13px;
                margin-bottom: 10px;
            }
            .notuserlabel {
                // border: solid 1px;
                text-align: right;
                font-size: 15px;
                color: red;
            }
        }
        .remembercheck {
            display: flex;
            justify-content: flex-start;
            align-items: center; // border: solid 1px;
            width: 70%;
            margin: auto;
            input {
                width: 15px;
                height: 15px;
            }
            span {
                color: #6A6A6A;
                margin-left: 10px;
            }
        }
        .loginbtn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70%;
            height: 40px;
            margin: auto;
            margin-top: 30px;
            background-color: #A6B6AE;
            color: white;
        }
        .signin {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 70%;
            margin: auto;
            margin-top: 20px; // border: solid 1px;
            color: #A6B6AE;
            font-weight: bold;
            font-size: 18px;
        }
    }
}
</style>