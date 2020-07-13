<template>
    <div class="feature">
        <h4 class="title">鳥巢特徵-物理性質-1</h4>
        <div class="flex">
            <div class="left">
                <div class="wrap">
                    <label for="">物件類型</label>
                    <div class="drop">
                        <ul class="droplabel" @click="dropdowntype">
                            <li>{{item}}</li>
                            <span>v</span>
                        </ul>
                        <ul class="dropcontent" v-if="droptype">
                            <div v-for="(items,index) in typedrop" :key="index" @click="clickitem(index)">
                                <li>{{items.item}}</li>
                                <!-- <li>items.item</li> -->
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="wrap">
                    <label for="">物件</label>
                    <br>
                    <input type="text" placeholder="120坪">
                </div>
                <div class="wrap flexbox">
                    <div>
                        <label for="">樓層</label>
                        <br>
                        <input type="text" placeholder="層數" class="level">
                    </div>
                    <div>
                        <label for="">總樓層</label>
                        <br>
                        <input type="text" placeholder="總層數" class="totallevel">
                    </div>
                </div>
                <div class="wrap">
                    <label for="">最短租期</label>
                    <div class="drop">
                        <ul class="droplabel" @click="dropdownyeaar">
                            <li>{{year}}</li>
                            <span>v</span>
                        </ul>
                        <ul class="dropcontent" v-if="dropyear">
                            <div v-for="(items,index) in yeardrop" :key="index" @click="yearclick(index)">
                                <li>{{items.item}}</li>
                                <!-- <li>items.item</li> -->
                            </div>
                        </ul>
                    </div>
                </div>
    
            </div>
            <div class="middle">
                <div class="wrap">
                    <label for="">押金</label>
                    <br>
                    <input type="text" placeholder="1000">
                </div>
                <div class="wrap">
                    <label for="">租金</label>
                    <br>
                    <input type="text" placeholder="12500/月">
                </div>
                <div class="wrap">
                    <label for="">住屋上限人數</label>
                    <br>
                    <input type="text" placeholder="1/人">
                </div>
            </div>
            <div class="right">
                <featurecheck></featurecheck>
            </div>
        </div>
    
    </div>
</template>

<script>
import featurecheck from '../components/featurecheckbox'
export default {
    data() {
        return {
            droptype: false,
            dropyear: false,
            item: '透天',
            year: '一年',
            typedrop: [{
                item: '透天'
            }, {
                item: '雅房'
            }],
            yeardrop: [{
                item: '一年'
            }, {
                item: '兩年'
            }]


        }
    },
    methods: {
        dropdowntype() {
            if (this.drop == true) {
                this.droptype = false;
            } else {
                this.droptype = true;
            }

        },
        dropdownyeaar() {
            if (this.drop == true) {
                this.dropyear = false;
            } else {
                this.dropyear = true;
            }

        },
        clickitem(index) {
            this.item = this.typedrop[index].item;
            this.droptype = false;

        },
        yearclick(index) {
            this.year = this.yeardrop[index].item;
            this.dropyear = false;

        }
    },
    components:{
        featurecheck
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
         width: 330px;
        // margin-left: 90px;
        margin-top: 25px;
    }
    .drop {
        // border: solid 1px;
        width: 300px;
        border-radius: 5px;
        background-color: #ededed;
        li {
            list-style: none;
            border-bottom: none;
        }
        .droplabel {
            // border: solid 1px;
            margin-bottom: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .dropcontent {
            border: solid 1px;
            margin-bottom: 0;
        }
    }
}
</style>