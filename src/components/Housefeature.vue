<template>
    <div class="feature">
        <h4 class="title">鳥巢特徵-物理性質-1</h4>
        <div class="flex">
            <div class="left">
                <div class="wrap">
                    <label for="">物件類型</label>
                    <div class="drop">
                        <dropdown dropdownwidth="300px" dropcontentwidth="300px" :locdata="typedrop" loc="類型" @clickcity="typehandler"></dropdown>
                    </div>
                </div>
                <div class="wrap">
                    <label for="">物件坪數</label>
                    <br>
                    <input type="text" @change="square" placeholder="120坪" v-model="postitemdata.square">
                </div>
                <div class="wrap flexbox">
                    <div>
                        <label for="">樓層</label>
                        <br>
                        <input type="text" placeholder="層數" class="level" v-model="postitemdata.stair">
                    </div>
                    <div>
                        <label for="">總樓層</label>
                        <br>
                        <input type="text" placeholder="總層數" class="totallevel" v-model="postitemdata.totalstair">
                    </div>
                </div>
                <div class="wrap">
                    <label for="">最短租期</label>
                    <div class="drop">
                        <dropdown dropdownwidth="300px" dropcontentwidth="300px" :locdata="yeardrop" loc="半年" @clickcity="yearhandler"></dropdown>
                    </div>
                </div>
    
            </div>
            <div class="middle">
                <div class="wrap">
                    <label for="">押金</label>
                    <br>
                    <input type="text" @change="deposit" placeholder="1000" v-model="postitemdata.deposit">
                </div>
                <div class="wrap">
                    <label for="">租金</label>
                    <br>
                    <input type="text" @change="monthly" placeholder="12500/月" v-model="postitemdata.monthly">
                </div>
                <div class="wrap">
                    <label for="">住屋上限人數</label>
                    <br>
                    <input @change="live_number" type="text" placeholder="1/人" v-model="postitemdata.live_number">
                </div>
            </div>
            <div class="right">
                <featurecheck @registrationhandler="registration" @bargainhandler="bargain" @feehandler="fee"></featurecheck>
            </div>
        </div>
    
    </div>
</template>

<script>
import featurecheck from '../components/featurecheckbox'
import dropdown from '../components/itemlocdrop'
export default {
    data() {
        return {
            typedrop: ['雅房', '透天', '獨棟', '公寓大樓'],
            yeardrop: ['6mon', '12mon', '18mon'],
            postitemdata: {
                type: '',
                square: null,
                stair: null,
                year: '',
                deposit: null,
                monthly: null,
                live_number: null,
                is_bargain: null,
                registration: null,
                fee:[],
                totalstair:null

            }


        }
    },
    methods: {
        typehandler(val) {
            this.postitemdata.type = val;
            this.$store.commit('setfeturedata', this.postitemdata)
        },
        yearhandler(val) {
            this.postitemdata.year = val;
            this.$store.commit('setfeturedata', this.postitemdata)
        },
        square() {
            this.$store.commit('setfeturedata', this.postitemdata)
        },
        deposit() {
            this.$store.commit('setfeturedata', this.postitemdata)
        },
        monthly() {
            this.$store.commit('setfeturedata', this.postitemdata)
        },
        live_number() {
            this.$store.commit('setfeturedata', this.postitemdata)
        },
        registration(val) {
            this.postitemdata.registration = val;
            this.$store.commit('setfeturedata', this.postitemdata)

        },
        bargain(val){
            this.postitemdata.is_bargain = val;
            this.$store.commit('setfeturedata', this.postitemdata)
        },
        fee(val){
            this.postitemdata.fee = val;
            this.$store.commit('setfeturedata', this.postitemdata)
        }

    },
    computed: {

    },
    components: {
        featurecheck,
        dropdown
    }
}
</script>

<style lang="scss" scoped>
.flexbox {
    display: flex;
    justify-content: space-between;
}

.flex {
    display: flex;
    flex-wrap: wrap;
}

// .flexclo{
//     display: flex;
//     flex-direction: column;
// }
.feature {
    // display: flex;
    // border: solid 1px;
    height: 610px;
    .title {
        font-family: Arial;
        font-size: 35px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.16;
        letter-spacing: normal;
        text-align: left;
        color: #666b46;
        margin-left: 90px;
        margin-top: 50px;
    }
    .left {
        label {
            font-family: Arial;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.15;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
        }
    }
    .wrap {
        // border: solid 1px;
        width: 330px;
        margin-left: 90px;
        margin-top: 25px;
        input {
            border: none;
            border-radius: 5px;
            background-color: #ededed;
            height: 40px;
            width: 260px;
        }
        .level {
            width: 150px;
        }
        .totallevel {
            width: 150px;
        }
    }
    .middle {
        .wrap {
            label {
                font-size: 20px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.15;
                letter-spacing: normal;
                text-align: left;
                color: #666b46;
            }
        }
    }
    .right {
        // border: solid 1px;
        width: 330px; // margin-left: 90px;
        margin-top: 25px;
        
    }
    .drop {
        // border: solid 1px;
        width: 300px;
        border-radius: 5px;
        background-color: #ededed;
    }
}
</style>