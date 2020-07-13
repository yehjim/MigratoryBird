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
                        <span class="address">{{address}}-{{type}}</span>
                    </div>
                </div>
                <HouseEquip :furniture="furniture"></HouseEquip>
            </div>
            
            <div class="col-5 bargain" >
                <span class="b_title">Bargain</span>
                <hr>
                <div class="bargainCube" v-if="is_bargain">
                    <div class="adjustwrap">
                        <div class="arrow-left" @click="minusprice"></div>
                        <span>NTD：{{monthly}}</span>
                        <div class="arrow-right" @click="plusprice"></div>
                    </div>
                    <div class="barginbtn" @click="showbargin">
                        <span>議價</span>
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
                <HouseAround :life_function="life_function"></HouseAround>
            </div>
            
            <div class="col-5 houseInfo">
                <span n_title>House Info</span>
                <hr>
                <HouseInfoTable :square="square" :live_number="live_number" :room="room" :stair="stair" :deposit="deposit" :open_fire="open_fire" :pet="pet" :gender="gender" :legal_use="legal_use"></HouseInfoTable>
            </div>
            <div class="col-1"></div>
        </div>
        <div class="row map">
            <div class="col-12 mapPlace">
                <GoogleMap></GoogleMap>
            </div>
        </div>
        <div class="row LFF">
            <!-- <div class="col-1 waste"></div> -->
            <div class="col-1"></div>
            <div class="col-10 LFFPlace">
                <span class="LFFTitle">Living Friends Finding</span>
                <hr>
                <input type="button" class="btnLFFplus" />
                <!-- <span>123</span> -->
                <div class="LFFCube">LFF</div>
            </div>
            <div class="col-1">
            </div>
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
    props:['address','type','furniture','house_describe','life_function','monthly','square','live_number','room','stair','deposit','open_fire','pet','gender','legal_use','is_bargain'],
    data() {
        return {
        }
    },
    methods:{
        minusprice(){
            this.price -= 500;
        },
        plusprice(){
            this.price +=500;
        },
        showbargin(){
            console.log('123')
            this.$emit('showbarginhandler')
        }
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
* {
    font-family: 微軟正黑體;
    position: relative;
    box-sizing: border-box;
}

hr {
    border: 0;
    background-color: #A6B6AE;
    height: 2px;
}

// .waste {
//     background-color: $color_darkWhite;
// }

.top {
    background-color: $color_white; 
    // border: solid 1px;
    // margin-top: 9px;
    .profile {
        padding-top: 40px; // border: 1px solid #000;
        .host {
            .propic {
                @include size($w: 80px, $h:80px);
                border-radius: 50%;
                background-color: #A6B6AE;
                display: inline-block;
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
        padding-top: 80px;
        .b_title {
            color: #666B46;
            font-weight: bolder;
            font-size: 25px;
            display: block;
            text-align: left;
        }
        .bargainCube {
            @include size($w: 90%, $h:200px); // margin-left: 20px;
            // margin-top: 40px;
            margin: auto;
            margin-top: 40px;
            background-color: #F2F2F2;
            border-radius: 5px;
            font-size: 27px;
            font-weight: bolder;
            color: #666B46;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .adjustwrap{
                width: 100%;
                display: flex;
                justify-content: space-between;
                // margin: auto;
                // border: solid 1px;
                // margin-top: 10px;
            }
            .arrow-left {
                width: 0;
                height: 0;
                border-top: 20px solid transparent;
                border-bottom: 20px solid transparent;
                border-right: 20px solid #C4C4C4;
                // margin-right: 30px;
                margin-left: 20px;
            }
            .arrow-right {
                width: 0;
                height: 0;
                border-top: 20px solid transparent;
                border-bottom: 20px solid transparent;
                border-left: 20px solid #C4C4C4;
                margin-right: 20px;
                // margin-left: 30px;
            }
            .barginbtn{
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
    background-color: $color_white;
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
        padding-top: 50px;
        color: #666B46;
        font-weight: bolder;
        font-size: 25px;
    }
}

.map {
    // border: solid 1px;
    background-color: $color_white;
    .mapPlace {
        padding-top: 40px;
        display: flex;
        justify-content: center;
    }
}

.LFF {
    // border: solid 1px;
    background-color: $color_white;
    // margin-bottom: 50px;
    .LFFPlace {
        padding-top: 30px;
        .LFFTitle {
            color: #666B46;
            font-weight: bolder;
            font-size: 25px;
        }
        .btnLFFplus {
            @include size($w: 40px, $h:40px);
            border-radius: 50%;
            background-image: url(../assets/media/icon_plus.png);
            background-color: $color_darkWhite;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 15px 15px;
            position: absolute;
            left: 100%;
            transform: translateX(-100%) translateY(-100%);
            cursor: pointer;
        }
        .LFFCube {
            // @include size($w: 800px, $h: 250px);
            width: 100%;
            height: 250px;  
            margin-bottom: 50px;
            border: 1px solid #000;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 30px;
            font-size: 60px;
        }
    }
}
</style>