<template>
    <div class="needcardmodal">
        <div class="content">
            <div class="title">
                <span>NEEDPOST</span>
            </div>
            <div class="flex">
                <div class="left">
                    <div class="flexbox">
                        <div class="name">
                            <span class="describetitle">Conuntry</span>
                            <br>
                            <input type="text" v-model="needpost.country">
                        </div>
                        <div class="name">
                            <span class="describetitle">Name</span>
                            <br>
                            <input type="text" v-model="needpost.name">
                        </div>
    
                    </div>
                    <div class="flexbox">
                        <div class="name">
                            <span class="describetitle">Address</span>
                            <br>
                            <input type="text" v-model="needpost.add">
                        </div>
                        <div class="name">
                            <span class="describetitle">Budget</span>
                            <br>
                            <input type="text" v-model="needpost.Budget" placeholder="/月">
                        </div>
    
    
                    </div>
                    <div class="flexbox">
                        <div class="name">
                            <b-form-datepicker v-model="needpost.checkin"></b-form-datepicker>
                        </div>
                        <div class="name">
                            <b-form-datepicker v-model="needpost.checkout"></b-form-datepicker>
                        </div>
                    </div>
                    <div class="flexbox">
                        <div class="name">
                            <span class="describetitle">Type</span>
                            <div class="wrap">
                                <checkbox labelname="整層住家" @checkedhandler="typecheck"></checkbox>
                                <checkbox labelname="獨立套房" @checkedhandler="typecheck"></checkbox>
                                <checkbox labelname="分租套房" @checkedhandler="typecheck"></checkbox>
                                <checkbox labelname="雅房" @checkedhandler="typecheck"></checkbox>
                                <checkbox labelname="其他" @checkedhandler="typecheck"></checkbox>
                            </div>
    
    
    
    
                        </div>
                        <div class="name">
                            <span class="describetitle">租金包含</span>
                            <div class="wrap">
                                <checkbox labelname="水費" @checkedhandler="rentcheck"></checkbox>
                                <checkbox labelname="電費" @checkedhandler="rentcheck"></checkbox>
                                <checkbox labelname="管理費" @checkedhandler="rentcheck"></checkbox>
                                <checkbox labelname="網路費" @checkedhandler="rentcheck"></checkbox>
                            </div>
                        </div>
                    </div>
                    <div class="flexbox">
                        <div class="name">
                            <span class="describetitle">生活機能</span>
                            <div class="wrap">
                                <checkbox labelname="近傳統市場" @checkedhandler="lifecheck"></checkbox>
                                <checkbox labelname="近百貨公司" @checkedhandler="lifecheck"></checkbox>
                                <checkbox labelname="近夜市" @checkedhandler="lifecheck"></checkbox>
                                <checkbox labelname="近便利商店" @checkedhandler="lifecheck"></checkbox>
                                <checkbox labelname="近醫療機構" @checkedhandler="lifecheck"></checkbox>
                                <checkbox labelname="近公園綠地" @checkedhandler="lifecheck"></checkbox>
                            </div>
                        </div>
                        <div class="name">
                            <span class="describetitle">開伙</span>
                            <div class="wrap">
                                <checkbox labelname="是" @checkedhandler="firecheck"></checkbox>
                                <checkbox labelname="否" @checkedhandler="firecheck"></checkbox>
                            </div>
                            <span class="describetitle">寵物{{username}}</span>
                            <div class="wrap">
                                <checkbox labelname="是" @checkedhandler="petcheck"></checkbox>
                                <checkbox labelname="否" @checkedhandler="petcheck"></checkbox>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="postcontent">
                        <needpostcard :name="needpost.name" :country="needpost.country" :add="needpost.add" :Budget="needpost.Budget" :checkin="needpost.checkin" :checkout="needpost.checkout" :type="needpost.type" :rent="needpost.rent" :life="needpost.life" :pet="needpost.petlabel"
                            :fire="needpost.firelabel"></needpostcard>
                    </div>
    
                </div>
    
            </div>
            <div class="closebtn" @click="close">
                <span>x</span>
            </div>
            <div class="postbtn" @click="postneed">
                <span>ADD</span>
            </div>
        </div>
    </div>
</template>

<script>
import needpostcard from '../components/needpostcard'
import checkbox from '../components/postneedcheckbox'
import axios from 'axios'
export default {
    data() {
        return {
            needpost: {
                id: 0,
                name: '',
                country: '',
                add: '',
                Budget: 0,
                checkin: '',
                checkout: '',
                type: [],
                rent: [],
                life: [],
                pet: false,
                fire: false,

            },
            firelabel: '否',
            petlabel: '否'

        }
    },
    methods: {
        typecheck(val, check) {
            // this.type.push(val) 
            if (check == true) {
                this.needpost.type.push(val);
            } else {
                let index = this.needpost.type.indexOf(val)
                this.needpost.type.splice(index, 1);
            }

        },
        rentcheck(val, check) {
            // this.type.push(val) 
            if (check == true) {
                this.needpost.rent.push(val);
            } else {
                let index = this.needpost.rent.indexOf(val)
                this.needpost.rent.splice(index, 1);
            }

        },
        lifecheck(val, check) {
            if (check == true) {
                this.needpost.life.push(val);
            } else {
                let index = this.needpost.life.indexOf(val)
                this.needpost.life.splice(index, 1);
            }

        },
        firecheck(val, check) {
            console.log(this.needpost)
            if (check == true) {
                this.firelabel = val;
                this.needpost.fire = true
            } else {
                this.needpost.fire = false
            }

        },
        petcheck(val, check) {
            if (check == true) {
                this.petlabel = val;
                this.needpost.fire = true
            } else {
                this.fire = false
            }

        },
        close() {
            this.$emit('closeadd')
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
        postneed() {

            let isfullbool = this.checkdata(this.needpost);
            console.log(isfullbool);
            if (this.username == '') {
                alert('請註冊')

            } else if (isfullbool == true && this.username != '') {
                axios.post('http://localhost:7000/need', this.needpost)
                    .then(res => {
                        console.log(res.data);
                    })
                this.$emit('closeadd')
            } else {
                alert('沒有填妥歐')
            }

        }
    },
    computed: {
        username() {
            return this.$store.state.username
        }
    },
    components: {
        needpostcard,
        checkbox
    }
}
</script>

<style lang="scss" scoped>
.flex {
    display: flex; // border: solid 1px;
    flex-wrap: wrap;
}

.flexbox {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    margin-top: 10px;
}

.describetitle {
    font-size: 22px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.19;
    letter-spacing: normal;
    text-align: left;
    color: #a6b6ae;
}

.describeinfo {}

.needcardmodal {
    // display: none;
    display: block;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 5;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    .content {
        width: 1100px;
        height: 650px;
        border-radius: 5px;
        margin: auto;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        position: relative;
        .title {
            // border: solid 1px;
            padding-top: 10px;
            padding-left: 20px;
            span {
                font-family: AppleSystemUIFont;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.17;
                letter-spacing: normal;
                text-align: left;
                color: #656b41;
            }
        }
        .left {
            // border: solid 1px;
            width: 60%;
            .name {
                width: 40%;
                margin-top: 10px;
            }
            .wrap {
                // border: solid 1px;
                display: flex;
                flex-wrap: wrap;
                .checktitle {
                    border: solid 1px;
                    font-family: Arial;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.14;
                    letter-spacing: normal;
                    text-align: left;
                    color: #7e7e7e;
                }
            }
        }
        .right {
            // border: solid 1px;
            width: 40%;
            .postcontent {
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
                width: 90%;
                border-radius: 5px;
                height: 570px;
                margin: auto;
            }
        }
        input {
            width: 250px;
            border-radius: 2px;
            border: none;
            border: solid 1px #707070;
            background-color: #ffffff;
        }
    }
    .closebtn {
        // border: solid 1px;
        position: absolute;
        top: 0;
        left: 95%;
        span {
            font-size: 30px;
        }
    }
    .postbtn {
        // border: solid 1px;
        position: absolute;
        left: 50%;
        width: 70px;
        height: 30px;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #a6b6ae;
        color: white;
        border-radius: 3px;
        span {
            font-size: 16px;
        }
    }
}
</style>