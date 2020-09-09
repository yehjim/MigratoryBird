<template>
    <div class="container">
        <div class="row top">
            <div class="col-1 waste"></div>
            <!-- <div class="col-1"></div> -->
            <div class="col-5 profile">
                <div class="host">
                    <div class="propic"></div>
                    <div class="host_type">
                        <span>LFR Host</span> <br>
                        <span class="address">{{address}}-{{type}} {{area}} {{city}}</span>
                    </div>
                </div>
                <HouseEquip :furniture="furniture"></HouseEquip>
            </div>
    
            <div class="col-5 bargain">
                <span class="b_title">Bargain</span>
                <hr>
                <div class="bargainCube" v-if="is_bargain">
                    <div class="adjustwrap" v-if="login">
                        <div class="arrow-left" @click="minusprice"></div>
                        <span>NTD：{{price}}</span>
                        <div class="arrow-right" @click="plusprice"></div>
                    </div>
                    <div class="adjustwrap" v-else>
                        <div class="arrow-left" @click="showlogin"></div>
                        <span>NTD：{{price}}</span>
                        <div class="arrow-right" @click="showlogin"></div>
                    </div>
                    <div  v-if="login">
                        <div class="barginbtn" @click="showbargin">
                            <span>議價</span>
                        </div>
                    </div>
                    <div  v-else>
                        <div class="barginbtn" @click="showlogin">
                            <span>議價</span>
                        </div>
                    </div>
    
    
                </div>
                <div class="bargainCube" v-else>
                    <div class="adjustwrap">
                        <span>未開啟議價</span>
                    </div>
    
                </div>
            </div>
            <div class="col-2"></div>
        </div>
        <div class="row middle">
            <div class="col-1 waste"></div>
            <!-- <div class="col-1"></div> -->
            <div class="col-5 aboutHouse">
                <div class="description">
                    <span d_title>房屋描述</span> <br>
                    <p>{{house_describe}}</p>
                </div>
                <HouseAround :life_function="life_function" title="生活機能"></HouseAround>
                <HouseAround :life_function="fee" title="租金包含" class="fee"></HouseAround>
    
            </div>
    
            <div class="col-5 houseInfo">
                <span n_title>House Info</span>
                <hr>
                <HouseInfoTable :square="square" :live_number="live_number" :room="room" :stair="stair" :deposit="deposit" :open_fire="open_fire" :pet="pet" :gender="gender" :legal_use="legal_use"></HouseInfoTable>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row map">
            <div class="col-1"></div>
            <div class="col-10 mapPlace">
                <GoogleMap :area="area" :city="city" :add="address" w="900px" h="300px"></GoogleMap>
            </div>
             <div class="col-1"></div>
        </div>
    
    </div>
</template>

<script>
import HouseEquip from '../components/HouseEquip'
import HouseAround from '../components/HouseAround'
import HouseInfoTable from '../components/HouseInfoTable'
import GoogleMap from '../components/GoogleMap'
export default {
    name: "HouseContent",
    props: ['address', 'type', 'furniture', 'house_describe', 'life_function', 'monthly', 'square', 'live_number', 'room', 'stair', 'deposit', 'open_fire', 'pet', 'gender', 'legal_use', 'is_bargain', 'fee','city','area'],
    mounted(){
        this.price = this.monthly
    },
    data() {
        return {
            price: 0
        }
    },
    methods: {
        minusprice() {
            this.price -= 500;
        },
        plusprice() {
            this.price += 500;
        },
        showbargin() {
            console.log('123')
            this.$emit('showbarginhandler')
        },
        showlogin(){
            alert('請登入')
        }
    },
    computed: {
        login() {
            return this.$store.state.login;
        },
    },
    components: {
        HouseEquip,
        HouseAround,
        HouseInfoTable,
        GoogleMap,
    }
}
</script>

<style lang="scss" scoped>
@mixin size($w, $h) {
    width: $w;
    height: $h;
}

$color_darkWhite: #EDEDED;
$color_white: #ffffff;
hr {
    border: 0;
    background-color: #A6B6AE;
    height: 2px;
}

// .waste {
//     background-color: $color_darkWhite;
// }
.top {
    background-color: $color_white; // border: solid 1px;
    // margin-top: 9px;
    .profile {
        // border: solid 1px;
        padding-top: 40px; // border: 1px solid #000;
        .host {
            // border: solid 1px;
            display: flex;
            align-items: center;
            .propic {
                @include size($w: 80px, $h:80px);
                border-radius: 50%;
                background-color: #A6B6AE;
                display: inline-block;
                margin-right: 10px;
            }
            .host_type {
                display: inline-block;
                padding-left: 10px;
                color: #666B46;
                font-weight: bolder;
                font-size: 27px;
                .address {
                    color: #7E7E7E;
                    font-size: 18px;
                }
            }
        }
    }
    .bargain {
        padding-top: 30px;
        .b_title {
            color: #666B46;
            font-weight: bolder;
            font-size: 25px;
            display: block;
            text-align: left; // border: solid 1px;
        }
        .bargainCube {
            @include size($w: 90%, $h:200px); // margin-left: 20px;
            // margin-top: 40px;
            margin: auto;
            margin-top: 40px;
            margin-bottom: 40px;
            background-color: #F2F2F2;
            border-radius: 5px;
            font-size: 27px;
            font-weight: bolder;
            color: #666B46;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .adjustwrap {
                width: 100%;
                display: flex;
                justify-content: space-between; // margin: auto;
                // border: solid 1px;
                // margin-top: 10px;
            }
            .arrow-left {
                width: 0;
                height: 0;
                border-top: 20px solid transparent;
                border-bottom: 20px solid transparent;
                border-right: 20px solid #C4C4C4; // margin-right: 30px;
                margin-left: 20px;
            }
            .arrow-right {
                width: 0;
                height: 0;
                border-top: 20px solid transparent;
                border-bottom: 20px solid transparent;
                border-left: 20px solid #C4C4C4;
                margin-right: 20px; // margin-left: 30px;
            }
            .barginbtn {
                margin-top: 20px;
                border-radius: 5px;
                background-color: #A6B6AE;
                color: white;
                font-weight: normal;
                font-size: 20px;
                padding-top: 5px;
                padding-bottom: 5px;
                width: 150px;
                text-align: center;
            }
        }
    }
}

.middle {
    // border: 1px solid #000;
    background-color: $color_white; // border: solid 1px;
    .aboutHouse {
        padding-top: 30px;
        color: #666B46;
        font-weight: bolder;
        font-size: 25px;
        .description {
            p {
                padding-top: 15px;
                padding-left: 20px;
                color: #7e7e7e;
                font-size: 15px;
            }
        }
    }
    .houseInfo {
        padding-top: 20px;
        color: #666B46;
        font-weight: bolder;
        font-size: 25px;
    }
}

.map {
    // border: solid 1px;
    background-color: $color_white;
    .mapPlace {
        margin-top: 70px;
        margin-bottom: 50px;
        display: flex;
        justify-content: center;
    }
}
</style>