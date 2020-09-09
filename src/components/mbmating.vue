<template>
    <div class="account" v-if="needid!=null">
        <div class="inbox">
            <div v-if="infolist==''">
                <div class="noneedinbox">
                    需求收件夾
                </div>
    
            </div>
            <div v-for="(info,index) in infolist" :key="index" v-else>
                <infobox :info="info.content" :houseid="info.houseid" :date="info.date"></infobox>
            </div>
    
        </div>
        <div class="content">
            <div class="title">
                <span class="country describe">{{needlist.country}}</span>
                <span class="name describe">{{needlist.name}}</span>
            </div>
            <div class="title loc">
                <span class="add describe">地點：</span>
                <span class="describeinfo">{{needlist.add}}</span>
            </div>
            <div class="title loc">
                <span class="add describe">預算：</span>
                <span class="describeinfo">NTD:{{needlist.Budget}}</span>
            </div>
            <div class="title date">
                <div class="checkin">
                    <span class="add describe">入住日期</span>
                    <span class="describeinfo">{{needlist.checkin}}</span>
                </div>
                <div class="checkout">
                    <span class="add describe">離開日期</span>
                    <span class="describeinfo">{{needlist.checkout}}</span>
                </div>
    
            </div>
            <div class="title">
                <div class="rent">
                    <span class="add describe">租金包含</span>
                    <div class="rentinclude">
                        <div v-for="(rentitem,index) in needlist.rent" :key="index">
                            <div class="rentitem">
                                <span>{{rentitem}}</span>
                            </div>
                        </div>
    
                    </div>
                </div>
                <div class="rent">
                    <span class="add describe">種類</span>
                    <div class="rentinclude">
                        <div v-for="(rentitem,index) in needlist.type" :key="index">
                            <div class="rentitem">
                                <span>{{rentitem}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rent">
                    <span class="add describe">生活機能</span>
                    <div class="rentinclude">
                        <div v-for="(rentitem,index) in needlist.life" :key="index">
                            <div class="rentitem">
                                <span>{{rentitem}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fire">
                    <div>
                        <span class="describe">開伙：</span>
    
                        <span v-if="needlist.fire" class="describeinfo">是</span>
                        <span v-else class="describeinfo">否</span>
                    </div>
                    <div>
                        <span class="describe">寵物：</span>
                        <span v-if="needlist.pet" class="describeinfo">是</span>
                        <span v-else class="describeinfo">否</span>
    
                    </div>
    
                </div>
    
    
            </div>
        </div>
    
        <!-- <div class="inbox">
                            <infobox></infobox>
                
                        </div> -->
    </div>
    <div class="account noneed" v-else>
        <h1>快去增加需求吧</h1>
    </div>
</template>

<script>
import axios from 'axios'
import infobox from '../components/infobox'
export default {
    data() {
        return {
            needlist: {},
            infolist: []
        }
    },
    mounted() {

        if (this.needid !== null) {
            axios.get(`http://localhost:7000/need/${this.needid}`)
                .then((res) => {
                    this.needlist = res.data;
                    console.log('有抓到mbmating', this.needlist)
                }).catch((err) => {
                    console.log(err)

                })
            axios.get(`http://localhost:7000/infobox/?need_id=${this.needid}`)
                .then((res) => {
                    // this.needlist = res.data;
                    this.infolist = res.data
                    console.log(res.data)
                }).catch((err) => {
                    console.log(err)

                })
        }

    },
    computed: {
        needid() {
            return this.$store.state.userdata[0].needid;
        }
    },
    methods: {

    },
    components: {
        infobox

    }
}
</script>

<style lang="scss" scoped>
.account {
    // overflow: scroll;
    height: 600px; // border: solid 1px;
    width: 820px;
    margin-top: 40px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    display: flex;
    justify-content: space-between;
}
.noneedinbox{
    // border: solid 1px;
    width: 80%;
    font-size: 30px;
    margin: auto;
    text-align: center;
    margin-top: 250px;
    color: #a6b6ae;
}
.noneed {
    height: 550px; // margin-top: 100px;
    width: 750px;
    h1 {
        font-size: 50px;
        margin: auto;
        color: #a6b6ae;
    }
}

.describe {
    font-family: Arial;
    font-size: 15px;
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
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: normal;
    text-align: left;
    color: #7e7e7e;
}

.content {
    width: 350px;
    height: 550px;
    border-radius: 5px;
    border: solid 1px #c1d0c8;
    background-color: #ffffff;
    position: relative;
    margin: auto;
    .title {
        // border: solid 1px;
        width: 85%;
        margin: auto;
        padding-top: 20px; // margin-top: 20px;
    }
    .country {
        font-family: Arial;
        font-size: 20px;
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
        font-size: 18px;
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

.inbox {
    border-radius: 2px;
    border: solid 1px #c1d0c8;
    width: 50%;
    height: 550px;
    margin: auto;
}
</style>