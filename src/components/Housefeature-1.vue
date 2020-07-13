<template>
    <div class="feature">
        <h4 class="title">鳥巢特徵-物理性質-2</h4>
        <div class="flexbox">
            <div class="left">
                <div class="wrap">
                    <h5>電器家具</h5>
                    <div class="furwrap">
                        <div class="fur flex" v-for="(fur,index) in itemlist" :key="index">
                            <optionbox :itemnam="fur.item"></optionbox>
                        </div>
                    </div>
    
                    <div class="optionbox" @click="addfur">
                        <span>其他</span>
                    </div>
    
                </div>
                <div class="wrap">
                    <label for="">性別限制</label>
                    <dropdown :locdata="typedrop" loc="男"></dropdown>
                    <!-- <div class="drop">
                        <ul class="droplabel" @click="dropdowntype">
                            <li>{{item}}</li>
                            <span>v</span>
                        </ul>
                        <ul class="dropcontent" v-if="droptype">
                            <div v-for="(items,index) in typedrop" :key="index" @click="clickitem(index)">
                                <li>{{items.item}}</li>
                                
                            </div>
                        </ul>
                    </div> -->
                </div>
            </div>
            <div class="right">
                <div class="wrap" style="margin-left:0px;">
                    <label for="">房間限制</label>
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
                <div class="wrap" style="margin-left:0px;">
                    <label for="">生活機能</label>
                    <div class="checkwrap">
                        <span class="checklabel" for="">近便利商店</span>
                        <input type="checkbox" class="property">
                
                        <span class="checklabel" for="">近傳統市場</span>
                        <input type="checkbox" class="property">

                         <span class="checklabel" for="">近百貨公司</span>
                        <input type="checkbox" class="property">
                    </div>
                     <div class="checkwrap">
                        <span class="checklabel" for="">近公園綠地</span>
                        <input type="checkbox" class="property">
                    </div>
    
                </div>
                <div class="wrap" style="margin-left:0px;">
                    <label for="">養寵物</label>
                     <div class="checkwrap">
                        <span class="checklabel" for="">是</span>
                        <input type="checkbox" class="property">
                        <span class="checklabel" for="">否</span>
                        <input type="checkbox" class="property">
                    </div>
                </div>
                <div class="wrap" style="margin-left:0px;">
                    <label for="">開伙</label>
                    <div class="checkwrap">
                        <span class="checklabel" for="">是</span>
                        <input type="checkbox" class="property">
                        <span class="checklabel" for="">否</span>
                        <input type="checkbox" class="property">
                    </div>
                </div>
    
            </div>
        </div>
    
    </div>
</template>

<script>
import optionbox from '../components/optionbox'
import dropdown from '../components/itemlocdrop'

export default {
    data() {
        return {
            droptype: false,
            dropyear: false,
            item: '男',
            year: '一年',
            typedrop: [{
                item: '男'
            }, {
                item: '女'
            }],
            yeardrop: [{
                item: '一年'
            }, {
                item: '兩年'
            }],
            itemlist: [{
                item: '電扇'
            }, {
                item: '吹風機'
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

        },
        addfur() {

        }
    },
    components: {
        optionbox,
        dropdown

    }
}
</script>

<style lang="scss" scoped>
.flexbox {
    display: flex;
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
    .fur {
        width: 81px;
        margin-right: 10px;
    }
    .furwrap {
        display: flex;
    }
    .wrap {
        // border: solid 1px;
        width: 500px;
        margin-left: 90px;
        margin-top: 25px;
        h5 {
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
        
            margin-bottom: 0;
        }
    }
    .optionbox {
        // display: inline-block;
        margin-top: 10px;
        width: 81px;
        height: 35px;
        border-radius: 4px;
        background-color: #ededed;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.2s;
        span {
            font-family: Arial;
            font-size: 15px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: normal;
            text-align: center;
            color: #666b46;
        }
    }
    .optionbox:hover {
        background-color: #a6b6ae;
        span {
            color: white;
        }
    }
    .right {
        width: 50%;
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
    .checkwrap {
        // border: solid 1px;
        width: 100%;
        display: flex; // align-items: center;
        margin-top: 10px;
        .checklabel {
            margin-right: 20px;
            margin-left: 10px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.15;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
        }
        .fee {
            display: flex;
            flex-wrap: wrap; // border: solid 1px;
            width: 230px;
            justify-content: space-evenly;
        }
        .property {
            width: 15px;
            height: 15px;
            border-radius: 10px;
            background-color: #666b46;
        }
    }
}
</style>