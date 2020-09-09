<template>
    <div class="account">
        <div class="houseinfo">
            <div class="infotab" v-for="(info,index) in list" :key="index">
                <div class="username">
                    {{info.name}}
                </div>
                <div class="add">
                    {{add}}
                </div>
    
            </div>
        </div>
        <div class="chatroom">
            <div class="chat">
                <div class="chatbox">
                    <span>{{foreignerlist}}</span>
                </div>
    
            </div>
            <div class="send">
                <textarea name="" class="chatinput" placeholder="請輸入訊息"></textarea>
                <div class="sendwrap">
                    <div class="buttonwrap">
                        <button class="translatebtn">
                            <span>Translate</span>
                        </button>
                        <button class="sendbtn">
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
    data() {
        return {
            list:[]
        }
    },
    mounted() {
        axios.get('http://localhost:7000/user', {
                params: {
                    id: this.foreignerlist
                }
            })
           .then((res) => {
                this.list = res.data
                console.log(this.list)
            }).catch((err) => {
                console.log(err)

            })
    },
    methods: {

    },
    computed: {
        userid() {
            return this.$store.state.userdata[0].id
        },
        foreignerlist(){
            return this.$store.state.foreignerlist
        },
        add(){
            let city = this.$store.state.hosthousedata.city
            let area = this.$store.state.hosthousedata.area
            let add=  this.$store.state.hosthousedata.address
            let address = city+area+add;

            return address
        }

    }
}
</script>

<style lang="scss" scoped>
.account {
    height: 570px; // border: solid 1px;
    width: 820px;
    background-color: #ededed;
    margin-top: 40px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    display: flex;
    justify-content: space-around;
    .houseinfo {
        width: 30%;
        height: 500px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        margin: auto;
        .infotab {
            // height: 70px;
            // border: solid 1px;
            transition-duration: 0.3s;
            .username {
                padding-left: 20px;
                padding-top: 10px;
                font-family: Arial;
                font-size: 16px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                color: #a6b6ae;
            }
            .add {
                font-family: Arial;
                font-size: 13px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                color: #6a6a6a;
                padding-left: 20px;
                padding-top: 5px;
                padding-bottom: 10px;
            }
        }
        .infotab:hover {
            background-color: #ededed;
        }
    }
    .chatroom {
        width: 65%;
        height: 500px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        margin: auto;
        .chat {
            padding-top: 20px;
            height: 75%; // border: solid 1px;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            background-color: #ffffff;
            margin-top: 10px;
            overflow: scroll;
            .chatbox {
                border-radius: 10px;
                background-color: #a6b6ae;
                height: 30px;
                width: 150px;
                display: flex;
                justify-content: center;
                align-items: center; // float: right;
                // margin-right: 20px;
                // margin-top: 10px;
                margin-left: 350px;
                margin-bottom: 20px;
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
            // border: solid 1px;
            height: 21%;
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
            width: 90px;
            height: 30px;
            margin-right: 20px;
            span {
                font-family: Arial;
                font-size: 10px;
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