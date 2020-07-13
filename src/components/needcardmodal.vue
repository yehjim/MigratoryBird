<template>
    <div class="needcardmodal">
        <div class="content">
            <div class="title">
                <span class="country describe">{{this.needlist[0].country}}</span>
                <span class="name describe">{{this.needlist[0].name}}</span>
            </div>
            <div class="title loc">
                <span class="add describe">地點：</span>
                <span class="describeinfo">{{this.needlist[0].add}}</span>
            </div>
            <div class="title loc">
                <span class="add describe">預算：</span>
                <span class="describeinfo">NTD:${{this.needlist[0].Budget}}</span>
            </div>
            <div class="title date">
                <div class="checkin">
                    <span class="add describe">入住日期</span>
                    <span class="describeinfo">{{this.needlist[0].checkin}}</span>
                </div>
                <div class="checkout">
                    <span class="add describe">離開日期</span>
                    <span class="describeinfo">{{this.needlist[0].checkout}}</span>
                </div>
    
            </div>
            <div class="title">
                <div class="rent">
                    <span class="add describe">租金包含</span>
                    <div class="rentinclude">
                        <div v-for="(rentitem,index) in this.needlist[0].rent" :key="index">
                            <div class="rentitem">
                                <span>{{rentitem}}</span>
                            </div>
                        </div>
    
                    </div>
                </div>
                <div class="rent">
                    <span class="add describe">種類</span>
                    <div class="rentinclude">
                        <div v-for="(rentitem,index) in this.needlist[0].type" :key="index">
                            <div class="rentitem">
                                <span>{{rentitem}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rent">
                    <span class="add describe">生活機能</span>
                    <div class="rentinclude">
                        <div v-for="(rentitem,index) in this.needlist[0].life" :key="index">
                            <div class="rentitem">
                                <span>{{rentitem}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fire">
                    <div>
                        <span class="describe">開伙：</span>
                        
                        <span v-if="this.needlist[0].fire" class="describeinfo">是</span>
                        <span v-else class="describeinfo">否</span>
                    </div>
                    <div>
                        <span  class="describe">寵物：</span>
                        <span v-if="this.needlist[0].pet" class="describeinfo">是</span>
                        <span v-else class="describeinfo">否</span>
                        
                    </div>
    
                </div>
    
    
            </div>
            <div class="closebtn" @click="closemodal">
                <span>x</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['display', 'needid', 'name', 'coutry', 'add', 'checkin', 'checkout', 'price'],
    data() {
        return {
            needlist: [],
            test: [1, 2, 3, 4]
        }
    },
    mounted() {
        let id = this.needid
        axios.get(`http://localhost:7000/need?id=${id}`)
            .then((res) => {
                console.log(res.data)
                // this.itemdata = res.data
                var vm = this;
                vm.needlist = res.data
                console.log(vm.needlist)
            }).catch((err) => {
                console.log(err)

            })

    },
    methods: {
        closemodal() {
            this.$emit('closehandler')
        }
    }
}
</script>

<style lang="scss" scoped>
.describe {
    font-family: Arial;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: normal;
    text-align: left;
    color: #a6b6ae;
}

.describeinfo {
    font-family: Arial;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: normal;
    text-align: left;
    color: #7e7e7e;
}

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
        width: 450px;
        height: 600px;
        border-radius: 5px;
        margin: auto;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        position: relative;
        .title {
            // border: solid 1px;
            width: 85%;
            margin: auto;
            padding-top: 30px; // margin-top: 20px;
        }
        .country {
            font-family: Arial;
            font-size: 26px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 0.66;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
            margin-right: 20px;
        }
        .name {
            font-family: Arial;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: normal;
            text-align: left;
            color: #7e7e7e;
        }
        .loc {
            display: flex;
            flex-direction: column;
            span {
                font-family: Arial;
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.09;
                letter-spacing: normal;
                text-align: left;
                color: #7e7e7e;
            }
            .add {
                font-family: Arial;
                font-size: 20px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 0.96;
                letter-spacing: normal;
                text-align: left;
                color: #a6b6ae;
                margin-bottom: 10px;
            }
        }
        .date {
            display: flex;
            justify-content: space-between; // border: solid 1px;
            .checkin,
            .checkout {
                display: flex;
                flex-direction: column; // margin-bottom: 10px;
                span {
                    margin-top: 10px;
                }
            }
        }
        .rent {
            // border: solid 1px;
            margin-bottom: 10px;
            .rentinclude {
                display: flex;
                flex-wrap: wrap;
            }
            .rentitem {
                border: solid 1px;
                margin-right: 5px;
                padding-left: 5px;
                padding-right: 5px;
                width: auto;
                height: 30px;
                border-radius: 3px;
                background-color: #a6b6ae;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                span {
                    font-size: 15px;
                }
            }
        }
        .closebtn {
            // border: solid 1px;
            position: absolute;
            top: 0;
            left: 90%;
            font-size: 30px; // top: 10;
        }
        .fire {
            // border: solid 1px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>