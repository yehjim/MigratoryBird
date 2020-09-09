<template>
    <div class="siginpayment">
        <div class="paymentsetting">
            <div class="addcard">
                <div class="cardwrap">
                    <div class="cardtypeimg">
                        <img src="../assets/media/visa.svg" alt="">
                    </div>
                    <div class="card_number">
                        <div class="dotwrap">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                        <div class="dotwrap">
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                        <div>
                            <span>{{lastfourcardnumber}}</span>
                        </div>
                    </div>
                    <div class="experdate">
                        <div class="title">
                            <span>GOOD</span>
                            <span>THRU</span>
                        </div>
                        <span>{{experdate}}</span>
                    </div>
    
    
                </div>
                <div class="cardcontent">
                    <div class="cardnumberwrap">
                        <span>卡號</span>
                        <br>
                        <cleave v-model="card_number" :options="options" class="cardnumber" name="card"></cleave>
                    </div>
                    <div class="bottomwrap">
                        <div class="wrap">
                            <span>安全碼</span>
                            <br>
                            <input type="text" maxlength="3">
                        </div>
    
                        <div class="wrap">
                            <span>到期日</span>
                            <br>
                            <!-- <input type="text" v-model="experdate"> -->
                            <cleave v-model="experdate" :options="dateoptions"></cleave>
                        </div>
                    </div>
    
    
                </div>
                <!-- <button class="addbtn" >ADD</button> -->
            </div>
            <router-link to="/">
                <button class="startbtn" @click="addcard">start flying</button>
            </router-link>
    
    
        </div>
    
    </div>
</template>

<script>
import Cleave from 'vue-cleave-component';
import axios from 'axios'
export default {
    data() {
        return {
            card_id: "",
            card_number: "",
            experdate: "",
            trust_code: "",
            carddata: [],
            userid: "",
            cardNumber: null,
            options: {
                creditCard: true,
                delimiter: ' ',
                creditCardStrictMode: true,
            },
            dateoptions: {
                date: true, // 日期模式
                datePattern: ["m", "d"]
            }
        }
    },
    mounted() {
        axios.get(`http://localhost:7000/user/?username=${this.username}`)
            .then((res) => {
                // this.userdata = res.data
                this.userid = res.data[0].id
                console.log(res.data[0].id)
            }).catch((err) => {
                console.log(err)

            })
    },
    methods: {
        addcard() {
            let newcarddata = {
                card_id: this.card_id,
                card_number: this.card_number,
                experdate: this.experdate,
                trust_code: this.trust_code,
            }
            this.carddata.push(newcarddata);
            this.$store.state.userdata.username = this.username;
            this.$store.dispatch('GETUSERDATA')
            // this.$store.commit('logincheck')
            this.$store.commit('landrodcheck')
            axios
                .patch(`http://localhost:7000/user/${this.userid}`, {
                    pay_list: this.carddata
                })
                .then(res => {
                    console.log('修改成功', res.data)
                });
            // this.savestatus = false;
            // this.$emit('closeedit')
            // let newcarddata = {
            //     card_id: this.card_id,
            //     card_number: this.card_number,
            //     experdate: this.experdate,
            //     trust_code: this.trust_code,
            // }
            // this.carddata.push(newcarddata);

        }
    },
    computed: {
        lastfourcardnumber() {
            let lastfourcardnumber = "1234"
            let cardnumber = this.card_number.split("");
            let l = cardnumber.length - 1;
            lastfourcardnumber = cardnumber[l - 3] + cardnumber[l - 2] + cardnumber[l - 1] + cardnumber[l]

            return lastfourcardnumber;
        },
        username() {
            return this.$store.state.siginindata.username;
        }

    },
    components: {
        Cleave
    }
}
</script>

<style lang="scss" scoped>
.siginpayment {
    background-image: url('../assets/media/joyce-romero-EV_bivvSaC8-unsplash.jpg');
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding-top: 50px;
}

.paymentsetting {
    width: 1079px;
    height: 650px;
    border-radius: 4px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    margin: auto;
    display: flex;
    align-items: center;
    .startbtn {
        position: absolute;
        top: 600px;
        left: 75%;
        width: 160px;
        height: 38px;
        border-radius: 5px;
        border: solid 1px #a6b6ae;
        background-color: #ffffff;
        font-family: Arial;
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.1;
        letter-spacing: normal;
        text-align: center;
        color: #a6b6ae;
    }
    .cardwrap {
        width: 324px;
        height: 189px;
        border-radius: 12px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ededed;
        margin: auto;
        .cardtypeimg {
            // border: solid 1px;
            height: 80px;
            img {
                width: 77px;
                height: 77px;
                float: right;
                margin-right: 20px;
            }
        }
        .card_number {
            // border: solid 1px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 90%;
            margin: auto;
            .dotwrap {
                display: flex;
                margin-right: 10px;
            }
            .dot {
                width: 10px;
                height: 10px;
                margin-right: 10px;
                border-radius: 50%;
                background-color: #6a6a6a;
            }
        }
        .experdate {
            // border: solid 1px;
            display: flex;
            align-items: center;
            float: right;
            margin-right: 20px;
            margin-top: 20px;
            span {
                font-family: HelveticaNeue;
                font-size: 19px;
                font-weight: 300;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.21;
                letter-spacing: normal;
                text-align: left;
                color: #7e7e7e;
                margin-right: 10px;
            }
            .title {
                display: flex;
                flex-direction: column;
                span {
                    font-family: HelveticaNeue;
                    font-size: 11px;
                    font-weight: 300;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.18;
                    letter-spacing: normal;
                    text-align: left;
                    color: #7e7e7e;
                }
            }
        }
    }
    .addcard {
        width: 100%; // border: solid 1px;
        height: 485px;
        button {
            width: 99px;
            height: 24px;
            border-radius: 5px;
            border: solid 1px #a6b6ae;
            background-color: #ffffff;
            font-family: Arial;
            font-size: 12px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.08;
            letter-spacing: normal;
            text-align: center;
            color: #a6b6ae;
            float: right;
            margin-top: 30px;
            margin-right: 30px;
        }
        .cardnumberwrap {
            width: 40%; // border: solid 1px;
            margin: auto;
            margin-top: 30px;
        }
        .bottomwrap {
            margin: auto;
            display: flex; // border: solid 1px;
            width: 40%;
            margin-top: 50px;
        }
        input {
            width: 208px;
            height: 40px;
            border-radius: 3px;
            border: solid 1px #bebaba;
            background-color: #ffffff;
            margin-right: 40px;
        }
        span {
            font-family: Arial;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 0.9;
            letter-spacing: normal;
            text-align: center;
            color: #7e7e7e;
        }
        .cardnumber {
            width: 453px;
            height: 40px;
            border-radius: 3px;
            border: solid 1px #bebaba;
            background-color: #ffffff;
        }
    }
}
</style>