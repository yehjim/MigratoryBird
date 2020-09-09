<template>
    <div class="feature">
        <h4 class="title">鳥巢特徵-物理性質-2</h4>
        <div class="flexbox">
            <div class="left">
                <div class="wrap">
                    <h5>電器家具</h5>
                    <div class="furwrap">
                        <div class="fur flex" v-for="(fur,index) in feturedata.fur" :key="index">
                            <optionbox :itemnam="fur" @delefurhandler="delefur"></optionbox>
                        </div>
                    </div>
    
                    <div class="optionbox" :style="{backgroundColor:bgc}">
                        <span :style="{color:fontcolor}" @click="addfur">其他</span>
                        <div class="addfur" v-show="addclick">
                            <div>增加項目</div>
                            <input type="text" v-model="furitem">
                            <div class="addbtn" @click="addfuritem">
                                <span>增加</span>
                            </div>
                        </div>
                    </div>
    
    
                </div>
                <div class="wrap">
                    <label for="">性別限制</label>
                    <dropdown class="drop" dropdownwidth="300px" dropcontentwidth="300px" :locdata="gender" loc="性別" @clickcity="genderhandler" backgroundColor="#ededed"></dropdown>
                </div>
            </div>
            <div class="right">
                <div class="wrap" style="margin-left:0px;">
                    <label for="">房間限制</label>
                    <div class="drop">
                        <dropdown class="drop" dropdownwidth="300px" dropcontentwidth="300px" :locdata="gender" loc="房間限制" @clickcity="genderhandler" backgroundColor="#ededed"></dropdown>
                    </div>
                </div>
                <div class="wrap" style="margin-left:0px;">
                    <label for="">生活機能</label>
                    <div class="checkwrap">
                        <span class="checklabel" for="">近便利商店</span>
                        <input type="checkbox" class="property" @change="lifefunction" value="近便利商店" v-model="feturedata.life_function">
    
                        <span class="checklabel" for="">近傳統市場</span>
                        <input type="checkbox" class="property" @change="lifefunction" value="近傳統市場" v-model="feturedata.life_function">
    
                        <span class="checklabel" for="">近百貨公司</span>
                        <input type="checkbox" class="property" @change="lifefunction" value="近百貨公司" v-model="feturedata.life_function">
                    </div>
                    <div class="checkwrap">
                        <span class="checklabel" for="">近公園綠地</span>
                        <input type="checkbox" class="property" @change="lifefunction" value="近公園綠地" v-model="feturedata.life_function">
                    </div>
    
                </div>
                <div class="wrap" style="margin-left:0px;">
                    <label for="">養寵物</label>
                    <div class="checkwrap">
                        <span class="checklabel" for="">是</span>
                        <input type="radio" @change="pet" class="property" value="true" v-model="feturedata.pet">
                        <span class="checklabel" for="">否</span>
                        <input type="radio" @change="pet" class="property" value="false" v-model="feturedata.pet">
                    </div>
                </div>
                <div class="wrap" style="margin-left:0px;">
                    <label for="">開伙</label>
                    <div class="checkwrap">
                        <span class="checklabel" for="">是</span>
                        <input type="radio" @change="open_fire" class="property" value="true" v-model="feturedata.open_fire">
                        <span class="checklabel" for="">否</span>
                        <input type="radio" @change="open_fire" class="property" value="false" v-model="feturedata.open_fire">
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
            gender: ['男', '女'],
            life: [],
            feturedata: {
                gender: '',
                fur: ['電扇', '吹風機'],
                life_function: [],
                pet: false,
                open_fire: false,

            },
            yeardrop: [{
                item: '一年'
            }, {
                item: '兩年'
            }],
            furitem: '',
            itemlist: ['電扇', '吹風機'],
            addclick: false,
            bgc: '#ededed',
            fontcolor: '#666b46',
            isclick: false,



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

            if (this.addclick == false) {
                this.bgc = '#a6b6ae';
                this.fontcolor = 'white'
                this.addclick = true;
            } else {
                this.bgc = '#ededed';
                this.fontcolor = '#666b46';
                this.addclick = false;
            }

        },
        addfuritem() {
            this.feturedata.fur.push(this.furitem);
            this.furitem = ''
            this.$store.commit('setfeturetwodata', this.feturedata)
        },
        genderhandler(val) {
            this.feturedata.gender = val;
            this.$store.commit('setfeturetwodata', this.feturedata)
            console.log(val);

        },
        // furname(val, val2) {
        //     console.log(val2);
        //     if (val2 == true) {
        //         this.feturedata.fur.push(val);
        //         console.log(this.feturedata.fur)
        //         this.$store.commit('setfeturetwodata', this.feturedata)
        //     } else {
        //         let index = this.feturedata.fur.indexOf(val);
        //         this.feturedata.fur.splice(index, 1);
        //         console.log(this.feturedata.fur);

        //     }
        // },
        delefur(val) {
            
            let index = this.feturedata.fur.indexOf(val);
            console.log(val,index);
            this.feturedata.fur.splice(index, 1);
            this.$store.commit('setfeturetwodata', this.feturedata)
            // console.log(this.feturedata.fur);
        }




        // console.log(val);

    ,
    pet() {
        this.$store.commit('setfeturetwodata', this.feturedata)
    },
    open_fire() {
        this.$store.commit('setfeturetwodata', this.feturedata)
    },
    lifefunction() {
        this.$store.commit('setfeturetwodata', this.feturedata)
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
        flex-wrap: wrap;
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
        position: relative;
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
            width: 100%;
        }
    }
    .addfur {
        width: 300px;
        height: 200px;
        position: absolute;
        border-radius: 1px;
        top: 0px;
        left: 90px;
        background-color: #ededed;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        z-index: 2;
        div {
            // border: solid 1px;
            text-align: center;
            margin-top: 20px;
            color: #666b46;
            span {}
        }
        .addbtn {
            // border: solid 1px;
            width: 100px;
            border-radius: 5px;
            margin: auto;
            margin-top: 20px;
            background-color: #a6b6ae;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                color: white;
            }
        }
        input {
            // width: 250px;
            border: solid 1px;
            margin-left: 20px;
            margin-top: 20px;
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