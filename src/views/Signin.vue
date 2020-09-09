<template>
    <b-container fluid class="signin">
        <div class="signpage">
            <div class="title">
                <span>Sign in for MIGRA</span>
            </div>
            <b-row>
                <b-col cols="4" class="profileinfo">
                    <span>Profileinfo</span>
                </b-col>
                <b-col cols="6"></b-col>
                <b-col cols="2"></b-col>
    
            </b-row>
            <b-row class="signininfo">
                <b-col cols="4" class="flexbox">
                    <signindrop @inputchagehandler="save" labelname="Email" :isdrop=isdropparent place="yeh123@gmail.com"></signindrop>
                </b-col>
                <b-col cols="4" class="flexbox">
                    <signindrop @inputchagehandler="save" labelname="Phone" :isdrop=isdropparent place="091238429"></signindrop>
                </b-col>
                <b-col cols="4" class="flexbox">
                    <signindrop @inputchagehandler="save" labelname="Password" :isdrop=isdropparent place="enter"></signindrop>
                    <!-- <span>請輸入</span> -->
                </b-col>
    
            </b-row>
            <b-row class="signininfo">
                <b-col class="wrap" cols="4">
                    <div class="genderdrop">
                        <label for="">Gender</label>
                        <div class="dropdown">
                            <button class="dropbtn">{{gendertest}}</button>
                            <div class="arrow-down" @click="clickgender"></div>
                            <div class="dropdown-content">
                                <li href="#" v-for="(list,index) in gender" :key="index" @click="clickgenderitem(index)">{{list.staytime}}</li>
                            </div>
                        </div>
                    </div>
                </b-col>
                <b-col class="wrap" cols="4">
    
                    <!-- <signindrop labelname="Gender" isdrop=true stayplace="male"></signindrop> -->
                    <signindrop @inputchagehandler="save" labelname="Birth" :isdrop=isdropparent place="yyyy-mm-dd"></signindrop>
    
                </b-col>
                <b-col class="wrap" cols="4">
                    <div class="typedrop">
                        <label for="">Type</label>
                        <div class="dropdown">
                            <button class="dropbtn">{{typetest}}</button>
                            <div class="arrow-down" @click="clicktype"></div>
                            <div class="dropdowncontent">
                                <li href="#" v-for="(list,index) in type" :key="index" @click="clicktypeitem(index)">{{list.hosttype}}</li>
                            </div>
                        </div>
                    </div>
                </b-col>
    
            </b-row>
            <b-row class="signininfo">
                <b-col cols="4" class="flexbox">
                    <signindrop @inputchagehandler="save" labelname="Name" :isdrop=isdropparent place="jimyeh"></signindrop>
                </b-col>
                <b-col cols="4" class="flexbox">
                    <signindrop @inputchagehandler="save" labelname="Country" :isdrop=isdropparent place="Taiwan"></signindrop>
                </b-col>
                <b-col cols="4" class="flexbox">
                    <!-- <signindrop @inputchagehandler="save" labelname="Password" :isdrop=isdropparent place="enter"></signindrop>
                                                <span>請輸入</span> -->
                </b-col>
    
            </b-row>
            <b-row>
                <b-col cols="9"></b-col>
                <b-col cols="3" class="paymentbtn">
    
                    <!-- <router-link to="/"> -->
                    <div class="loginbtn" @click="login" v-show="ishost==false">
                        <span>LOGIN</span>
                    </div>
    
                    <!-- </router-link> -->
                    <span class="pay" v-show="ishost">Payment</span>
                    <span v-show="ishost" @click="login">later</span>
                    <router-link to="/signinpayment" v-show="ishost">
                        <div class="nextbtn" @click="signinpayment">></div>
                    </router-link>
    
                </b-col>
    
            </b-row>
        </div>
    </b-container>
</template>


<script>
import signindrop from '../components/signindrop'
// import axios from '../plugins/axios'
import axios from 'axios'
export default {
    data() {
        return {
            isdropparent: false,
            typetest: 'Type',
            gendertest: 'gender',
            gender: [{
                    staytime: "male",
                },
                {
                    staytime: "femal",
                }

            ],
            type: [{
                    hosttype: "host",

                },
                {
                    hosttype: "landord"
                }
            ],
            ishost: false,
            userdata: {
                // id: '',
                username: '',
                password: '',
                phone: '',
                gender: '',
                birth: '',
                type: '',
                name: '',
                country: '',
                likelist: [],
                needid: null,
                hashouse: false,
                houseid: null,
                pay_list: [],
                my_house: [],

            }
        }
    },
    methods: {
        login() {
            let iscomple = this.checkdata(this.userdata);
            if (iscomple == true) {
                axios.post('http://localhost:7000/user', this.userdata)
                    .then(res => {
                        let vm = this;
                        console.log(res.data);
                        vm.$router.push('/login')
                    })
                // this.$store.commit('logincheck')
            } else {
                alert('請輸入完整資訊！')
            }

        },
        checkdata(data) {
            // for(let i = 1;i<data.length;i++){
            //     if(data[i].username||data[i].password||data[i].phone||data[i].gender||)
            // }
            for (var key in data) {

                if (data[key] !== '') {
                    continue;
                } else {
                    console.log('空的' + key)
                    return false
                }
            }
            return true;
        },
        save(data, datatype) {
            if (datatype === "Email") {
                this.userdata.username = data
                console.log(this.userdata)
            } else if (datatype === "Password") {
                this.userdata.password = data;
                console.log(this.userdata)
            } else if (datatype === "Phone") {
                this.userdata.phone = data;
                console.log(this.userdata)
            } else if (datatype === "Birth") {
                this.userdata.birth = data;
            } else if (datatype === "Name") {
                this.userdata.name = data;
            } else if (datatype === "Country") {
                this.userdata.country = data;
            }

        },
        signinpayment() {
            this.$store.commit("setsigninuserdata", this.userdata);
            let iscomple = this.checkdata(this.userdata);
            if (iscomple == true) {
                axios.post('http://localhost:7000/user', this.userdata)
                    .then(res => {
                        // let vm = this;
                        console.log(res.data);
                        // vm.$router.push('/')
                    })
                this.$store.commit('logincheck')
            } else {
                alert('請輸入完整資訊！')
            }
        },
        clickgender() {
            document.querySelector(".dropdown-content").style.display = "block";
        },
        clickgenderitem(index) {
            this.gendertest = this.gender[index].staytime
            this.userdata.gender = this.gender[index].staytime;
            // console.log(index + "按到")
            document.querySelector(".dropdown-content").style.display = "none";
        },
        clicktype() {
            // console.log("按到")
            document.querySelector(".dropdowncontent").style.display = "block"
        },
        clicktypeitem(index) {
            this.typetest = this.type[index].hosttype;
            this.userdata.type = this.type[index].hosttype;
            if (this.type[index].hosttype == "host") {

                this.ishost = false
            } else {
                this.ishost = true
            }
            // console.log(index + "按到")
            document.querySelector(".dropdowncontent").style.display = "none";
        }

    },
    components: {
        signindrop
    }
}
</script>

<style lang="scss" scoped>
.flexbox {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.loginbtn {
    // border: solid 1px;
    border-radius: 3px;
    background-color: #656b41;
    // color: white;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        color: white;
        font-size: 14px;
    }
}

.signin {
    // font-family: Futura;
    height: 100vh;
    background-image: url('../assets/media/zsun-fu-hsIDivLEF9I-unsplash@2x.png');
    display: flex;
    justify-content: center;
    align-items: center;
    .signpage {
        width: 80%;
        height: 85%;
        background-color: #ededed;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        border-radius: 4px; // margin: auto;
        .title {
            font-family: Futura;
            font-size: 30px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.31;
            letter-spacing: normal;
            color: #656b41; // border: solid 1px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .profileinfo {
            font-size: 28px;
            color: #6a6a6a; // border: solid 1px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .signininfo {
            // border: solid 1px;
            // margin-top: 100px;
            width: 90%;
            margin: auto;
            margin-top: 50px;
            .wrap {
                // border: solid 1px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .genderdrop,
            .typedrop {
                // border: solid 1px;
                display: flex;
                flex-direction: column;
                width: 230px;
                margin-left: 15px;
                label {
                    width: 55px;
                    height: 22px;
                    font-family: Arial;
                    font-size: 20px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.05;
                    letter-spacing: normal;
                    text-align: center;
                    color: #7e7e7e;
                    font-size: 18px;
                }
                input {
                    border: none;
                    width: 260px;
                    border-bottom: solid 2px #707070;
                    background-color: transparent;
                }
                .arrow-down {
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 10px solid #707070; // margin-right: 10px;
                    cursor: pointer;
                }
                .dropbtn {
                    // background-color: #4CAF50;
                    color: #888; // padding: 16px
                    font-size: 16px;
                    border: none;
                    cursor: pointer;
                    height: 25px;
                    font-size: 15px; // width: 100%;
                    width: 160px;
                    background-color: transparent;
                    text-align: left;
                    border-bottom: 2px solid #707070;
                }
                .dropdown {
                    position: relative;
                    display: inline-block;
                    display: flex;
                    justify-content: space-between; // width: 100%;
                    align-items: center; // border: solid 1px;
                    // width: 100%;
                    // border: solid 1px;
                }
                .dropdown-content {
                    display: none;
                    position: absolute;
                    top: 21px;
                    background-color: #f9f9f9;
                    min-width: 190px; // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                    // transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
                    z-index: 2;
                }
                .dropdown-content li {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }
                .dropdown-content li:hover {
                    background-color: #f1f1f1
                }
                .dropdowncontent {
                    display: none;
                    position: absolute;
                    top: 21px;
                    background-color: #f9f9f9;
                    min-width: 160px; // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                    // transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
                    z-index: 1;
                }
                .dropdowncontent li {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }
                .dropdowncontent li:hover {
                    background-color: #f1f1f1
                }
            }
        }
        .paymentbtn {
            // border: solid 1px;
            margin-top: 50px;
            display: flex; // justify-content: space-between;
            // align-items: flex-end;
            .pay {
                font-size: 25px;
                color: #6a6a6a; // border: solid 1px;
                margin-right: 10px;
                font-weight: normal;
            }
            .later {
                font-size: 15px;
                color: rgba(106, 106, 106, 0.56);
            }
            .nextbtn {
                width: 25px;
                height: 25px;
                border-radius: 50%; // border: solid 1px;
                background-color: #656b41;
                text-align: center;
                color: white;
                margin-top: 10px;
            }
        }
        .wrap2 {
            width: 250px; // border: solid 1px;
            margin-right: 40px;
            margin-left: 40px;
        }
    }
}
</style>