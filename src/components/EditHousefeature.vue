<template>
    <div class="feature">
        <h4 class="title">編輯鳥巢特徵-物理性質-1</h4>
        <div class="flex">
            <div class="left">
                <div class="wrap">
                    <label for="">物件類型</label>
                    <div class="drop">
                        <dropdown dropdownwidth="300px" dropcontentwidth="300px" :locdata="typedrop" :loc="editdata.type" @clickcity="typehandler"></dropdown>
                    </div>
                </div>
                <div class="wrap">
                    <label for="">物件坪數</label>
                    <br>
                    <input type="text" @change="square" :placeholder="editdata.square" v-model="postitemdata.square">
                </div>
                <div class="wrap flexbox">
                    <div>
                        <label for="">樓層</label>
                        <br>
                        <input type="text" :placeholder="editdata.stair" class="level" v-model="postitemdata.stair">
                    </div>
                    <div>
                        <label for="">總樓層</label>
                        <br>
                        <input type="text" :placeholder="editdata.totalstair" class="totallevel" v-model="postitemdata.totalstair">
                    </div>
                </div>
                <div class="wrap">
                    <label for="">最短租期</label>
                    <div class="drop">
                        <dropdown dropdownwidth="300px" dropcontentwidth="300px" :locdata="yeardrop" :loc="editdata.year" @clickcity="yearhandler"></dropdown>
                    </div>
                </div>
    
            </div>
            <div class="middle">
                <div class="wrap">
                    <label for="">押金</label>
                    <br>
                    <input type="text" @change="deposit" :placeholder="editdata.deposit" v-model="postitemdata.deposit">
                </div>
                <div class="wrap">
                    <label for="">租金</label>
                    <br>
                    <input type="text" @change="monthly" :placeholder="editdata.monthly" v-model="postitemdata.monthly">
                </div>
                <div class="wrap">
                    <label for="">住屋上限人數</label>
                    <br>
                    <input @change="live_number" type="text" :placeholder="editdata.live_number" v-model="postitemdata.live_number">
                </div>
            </div>
            <div class="right">
                <div class="wrap">
                    <label for="" class="title">1產權登記</label>
                    <label for="" class="radiolabel">是</label>
                    <input type="radio" class="property" :value="true" v-model="postitemdata.registration" @change="registration">
                    <label for="" class="radiolabel">否</label>
                    <input type="radio" class="property" :value="false" v-model="postitemdata.registration" @change="registration">
                </div>
    
    
                <div class="wrap">
                    <label for="" class="title">1是否接受議價</label>
                    <label for="" class="radiolabel">是</label>
                    <input type="radio" class="property" v-model="postitemdata.is_bargain" :value="true" @change="bargain">
                    <label for="" class="radiolabel">否</label>
                    <input type="radio" class="property" v-model="postitemdata.is_bargain" :value="false" @change="bargain">
                </div>
    
    
                <div class="wrap">
                    <label for="" class="title">1租金包含</label>
                    <div class="fee">
                        <div class="radiowrap">
                            <label for="" class="radiolabel">電費</label>
                            <input type="checkbox" class="property" value="電費" @change="fee" v-model="postitemdata.fee">
                        </div>
    
                        <label for="" class="radiolabel">水費</label>
                        <input type="checkbox" class="property" value="水費" @change="fee" v-model="postitemdata.fee">
                        <label for="" class="radiolabel">網路費</label>
                        <input type="checkbox" class="property" value="網路費" @change="fee" v-model="postitemdata.fee">
                        <label for="" class="radiolabel">管理費</label>
                        <input type="checkbox" class="property" value="管理費" @change="fee" v-model="postitemdata.fee">
                    </div>
    
                </div>
    
    
    
                <!-- <featurecheck @registrationhandler="registration" @bargainhandler="bargain" @feehandler="fee" :feeprops="editdata.fee" :bargin="editdata.is_bargain" :lease="editdata.registration" editmode=true></featurecheck> -->
            </div>
        </div>
    
    </div>
</template>

<script>
// import featurecheck from '../components/featurecheckbox'
import dropdown from '../components/itemlocdrop'
export default {
    props: ['editdata'],
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
                is_bargain: this.editdata.is_bargain,
                registration: this.editdata.registration,
                fee: this.editdata.fee,
                totalstair: null

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
        registration() {

            this.$store.commit('setfeturedata', this.postitemdata)

        },
        bargain() {

            this.$store.commit('setfeturedata', this.postitemdata)
        },
        fee() {

            this.$store.commit('setfeturedata', this.postitemdata)
        }

    },
    computed: {

    },
    components: {
        // featurecheck,
        dropdown
    }
}
</script>

<style lang="scss" scoped>
.flexbox {
    display: flex;
    justify-content: space-between;
}
.radiowrap{
    display: flex;
    // justify-content: space-between;
    align-items: center;
    border: solid 1px;
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
        width: 400px; // margin-left: 90px;
        margin-top: 25px;
        border: solid 1px;
        .wrap {
            width: 400px;
            display: flex;
            margin: 0;
            // margin-top: 10px;
            .title {
                width: 150px;
                font-size: 19px;
                margin: 0;
            }
            .radiolabel {
                // border: solid 1px;
                // height: 30px;
                margin-right: 20px;
                margin-left: 10px;
                color: #666b46;
            }
            .fee {
                display: flex;
                flex-wrap: wrap; // border: solid 1px;
                width: 200px;
            }
            .property {
                width: 15px;
                height: 15px;
                border-radius: 10px;
                background-color: #666b46;
            }
        }
    }
    .drop {
        // border: solid 1px;
        width: 300px;
        border-radius: 5px;
        background-color: #ededed;
    }
}
</style>