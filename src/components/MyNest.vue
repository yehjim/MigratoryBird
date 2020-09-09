<template>
    <div class="account">
        <div class="itemcontent">
            <div class="housepic">
                <img src="../assets/media/patrick_perkins_3wylDrjxH_E_un_bx@2x.png" alt="">
                <div class="payrentbtn">
                    <router-link :to="{name:'Payrent',params:{id:houseinfo[0].foreigner_id}}">
                        <span>pay rent</span>
                    </router-link>
                </div>
            </div>
            <div class="wrap">
                <span class="chatname">{{name}}</span>
                <div class="accountcontent">
                    <div>
                        <span>Start:</span>
                        <input type="text" :placeholder="houseinfo[0].start_date">
                    </div>
                    <div>
                        <span>Adress:</span>
                        <input type="text" :placeholder="houseinfo[0].address">
                    </div>
                    <div>
                        <span>live/total:</span>
                        <input type="text" :placeholder="houseinfo[0].live_number">
                    </div>
    
                </div>
                <div class="accountcontent">
                    <div>
                        <span>End:</span>
                        <input type="text" :placeholder="houseinfo[0].end_date">
                    </div>
                    <div>
                        <span>Rent:</span>
                        <input type="text" placeholder="unpaid">
                    </div>
    
                </div>
            </div>
    
        </div>
        <div class="chatroom">
            <div class="chat">
                <div class="chatbox" v-for="(chatitem,index) in chatlist" :key="index">
                    <span>{{chatitem.chat}}</span>
                </div>
                
            </div>
            <div class="send">
                <textarea name="" class="chatinput" placeholder="請輸入訊息" v-model="msg"></textarea>
                <div class="sendwrap">
                    <div class="buttonwrap">
                        <button class="translatebtn">
                                                        <span>Translate</span>
                                                    </button>
                        <button class="sendbtn" @click="sendmsg">
                                                        <span>send</span>
                                                    </button>
                    </div>
    
    
                </div>
    
            </div>
        </div>
    
    
    </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        axios.get(`http://localhost:7000/bookingRecord/?foreigner_id=${this.userid}`)
            .then((res) => {
                console.log(res.data)
                // this.itemdata = res.dat
                this.houseinfo = res.data
                console.log(this.houseinfo)
                // this.houseid = res.data.houseid
                // console.log(this.housedetail, "123")
            }).catch((err) => {
                console.log(err)

            })
    },
    data() {
        return {
            houseinfo: {},
            chatlist:[],
            msg:''
        }
    },
    methods:{
        sendmsg(){
            let obj = {
                chat:this.msg
            }
            this.chatlist.push(obj);
            this.msg = ""
        }
    },
    computed: {
        houseid() {
            return this.$store.state.userdata[0].houseid;
        },
        userid() {
            return this.$store.state.userdata[0].id
        },
        name() {
            return this.$store.state.userdata[0].name
        }
    }
}
</script>

<style lang="scss" scoped>
.account {
    // border: solid 1px;
    width: 800px;
    height: 630px; // border: solid 1px;
    margin-top: 40px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .itemcontent {
        display: flex; // justify-content: space-evenly;
        // flex-direction: column;
        border-bottom: 1px solid #D8D8D8;
        width: 95%;
        margin: auto;
        .wrap {
            display: flex;
            flex-direction: column;
            .chatname {
                // border: solid 1px;
                margin-left: 30px;
                font-weight: bolder;
            }
        }
        .housepic {
            // border: solid 1px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 20px; // margin-top: px;
            margin-top: 10px;
            img {
                width: 170px;
                height: 130px;
            }
            .payrentbtn {
                border: solid 1px;
                border-radius: 6px;
                margin-top: 5px;
                margin-bottom: 10px;
                width: 100px;
                height: 25px;
                font-size: 14px;
                text-align: center;
                color: #A6B6AE;
                span {
                    color: #A6B6AE;
                }
            }
        }
        .accountcontent {
            // border: solid 1px;
            display: flex;
            flex-direction: row; // margin-top: 5px;
            div {
                margin-left: 30px;
                margin-bottom: 20px;
                margin-top: 5px;
                display: flex;
                flex-direction: column;
                span {
                    color: #7E7E7E;
                    font-size: 13px;
                }
                input {
                    border: none;
                    border-bottom: 2px solid black;
                    font-size: 12px;
                    color: black;
                    width: 85%;
                }
            }
        }
    }
    .chatroom {
        // border: solid 1px;
        height: 410px;
        width: 95%;
        margin: auto;
        box-sizing: border-box;
        
        .chat {
            padding-top: 20px;
            height: 75%; // border: solid 1px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            background-color: #ffffff;
            margin-top: 10px;
            overflow: scroll;
            
            .chatbox {
                // border: solid 1px;
                border-radius: 10px;
                background-color: #a6b6ae;
                height: 30px;
                width: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
                // float: right;
                // margin-right: 20px;
                // margin-top: 10px;
                // margin-left: 350px;
                margin-bottom: 20px;
                margin-left: 420px;
                span {
                    font-family: Arial;
                    font-size: 16px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 0.69;
                    letter-spacing: normal;
                    text-align: center;
                    color: #ffffff; // width: auto;
                }
            }
        }
        .send {
            height: 25%; // border: solid 1px;
            border-radius: 4px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            background-color: #ffffff;
            margin-top: 10px;
            .chatinput {
                width: 95%;
                margin-left: 20px;
                margin-top: 5px;
                border: none;
            }
        }
        .buttonwrap {
            float: right;
        }
        .translatebtn {
            border-radius: 4px;
            background-color: #666b46;
            border: none;
            width: 130px;
            height: 30px;
            margin-right: 20px;
            span {
                font-family: Arial;
                font-size: 15px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 0.8;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;
            }
        }
        .sendbtn {
            border-radius: 4px;
            background-color: #48aa00;
            border: none;
            width: 80px;
            height: 30px;
            margin-right: 10px;
            span {
                font-family: Arial;
                font-size: 15px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 0.8;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;
            }
        }
    }
}
</style>