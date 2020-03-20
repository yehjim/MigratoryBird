<template>
        <div class="container ">
            <div class="row top">
                <div class="col-1 waste"></div>
                <div class="col-1"></div>
                <div class="col-4 profile">
                    <div class="host">
                        <div class="propic"></div>
                        <div class="host_type">
                            <span>LFR Host</span> <br> 
                            <span class="address">{{address}}-雅房</span>
                        </div>
                    </div>
                    <div class="equip">
                        <span>住屋設備</span> <br>
                        <div class="equip_icon">
                            <img src="../assets/media/icon_bed.png" alt="" /><br />
                            <span>雙人床</span>
                        </div>
                        <div class="equip_icon">
                            <img src="../assets/media/icon_bath.png" alt="" /><br />
                            <span>衛浴</span>
                        </div>
                        <div class="equip_icon">
                            <img src="../assets/media/icon_wifi.png" alt="" /><br />
                            <span>網路</span>
                        </div>
                        <div class="equip_icon">
                            <img src="../assets/media/icon_hair-dryer.png" alt="" /><br />
                            <span>吹風機</span>
                        </div>
                        <div class="equip_icon">
                            <img src="../assets/media/icon_bed.png" alt="" /><br />
                            <span>雙人床</span>
                        </div>
                        <div class="equip_icon">
                            <img src="../assets/media/icon_bath.png" alt="" /><br />
                            <span>衛浴</span>
                        </div>
                        <div class="equip_icon">
                            <img src="../assets/media/icon_wifi.png" alt="" /><br />
                            <span>網路</span>
                        </div>
                        <div class="equip_icon">
                            <img src="../assets/media/icon_hair-dryer.png" alt="" /><br />
                            <span>吹風機</span>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
                <div class="col-4 bargain">
                    <span class="b_title">Bargain</span> <hr>
                    <div class="bargainCube">議價</div>
                </div>
            </div>
            <div class="row middle">
                <div class="col-1 waste"></div>
                <div class="col-1"></div>
                <div class="col-4 aboutHouse">
                    <div class="description">
                        <span d_title>房屋描述</span> <br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam incidunt sint eligendi doloribus, officiis magni. Ea assumenda beatae quod, vitae laudantium aliquid pariatur! Dolorem dolores illum maxime facere iusto.</p>
                    </div>
                    <div class="neighborhood">
                        <span n_title>生活機能</span> <br>
                        <div class="allTag">
                            <div class="tag">近便利商店</div>
                            <div class="tag">近傳統市場</div>
                            <div class="tag">近公園綠地</div>
                            <div class="tag">近醫療機構</div>
                            <div class="tag">近超市</div>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
                <div class="col-4 houseInfo">
                    <span n_title>House Info</span> <hr>
                    <div class="allTable">
                        <table class="table1">
                            <tr>
                                <td>物件坪數</td>
                                <td class="data">{{size}}坪</td>
                            </tr>
                            <tr>
                                <td>住屋人數</td>
                                <td class="data">{{capacity}}人</td>
                            </tr>
                            <tr>
                                <td>隔間數量</td>
                                <td class="data">{{room_num}}間</td>
                            </tr>
                            <tr>
                                <td>總樓層</td>
                                <td class="data">{{floor_num}}樓</td>
                            </tr>
                            <tr>
                                <td>押金</td>
                                <td class="data">NTD{{deposite}}</td>
                            </tr>
                        </table>
                        <table class="table2">
                            <tr>
                                <td>開伙</td>
                                <td class="data">{{cook}}</td>
                            </tr>
                            <tr>
                                <td>養寵物</td>
                                <td class="data">{{pet}}</td>
                            </tr>
                            <tr>
                                <td>性別限制</td>
                                <td class="data">{{gender_restrict}}</td>
                            </tr>
                            <tr>
                                <td>最短租期</td>
                                <td class="data">{{min_lease}}年</td>
                            </tr>
                            <tr>
                                <td>產權登記</td>
                                <td class="data">{{property_right}}</td>
                            </tr>
                            <tr>
                                <td>法定用途</td>
                                <td class="data">{{usage_of_object}}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    
</template>
 <script>
 export default {
    name: "HouseContent",
    data(){
        return{
            address: '中山區惠德街38號',
            size:'12',
            capacity: '2',
            room_num:'1',
            floor_num:'7',
            deposite:'25000',
            cook:'可',
            pet:'不可',
            gender_restrict:'男',
            min_lease:'一',
            property_right:'已辦',
            usage_of_object:'住家用',
        }
    }
 }
 </script>

<style lang="scss" scoped>
@mixin size($w,$h){
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
hr{
    border: 0;
    background-color: #A6B6AE;
    height: 2px;
}
.top{
    background-color: $color_white;
    // border: 1px solid #000;
    .waste{
        background-color: $color_darkWhite;
    }
    .profile{
        padding-top: 40px;
        // border: 1px solid #000;
        .host{
            .propic{
                @include size($w:80px,$h:80px);
                border-radius: 50%;
                background-color: #A6B6AE;
                display: inline-block;
            }
            .host_type{
                display: inline-block;
                padding-left: 10px;
                color: #666B46;
                font-weight: bolder;
                font-size: 27px;
                .address{
                    color: #7E7E7E;
                    font-size: 18px;
                }
            }
        }
        .equip{
            padding-top: 40px;
            font-size: 30px;
            font-weight: bolder;
            color: #666B46;
            .equip_icon{
                @include size($w:55px,$h:75px);
                margin: 20px 10px 0px;
                color: #7E7E7E;
                font-size: 9px;
                display: inline-flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                img{
                    @include size($w:40px,$h:40px);
                }
            }
        }
    }
    
    .bargain{
        padding-top: 80px;
        .b_title{
            color: #666B46;
            font-weight: bolder;
            font-size: 25px;
            display: block;
            text-align: left;
        }
        .bargainCube{
            @include size($w: 90%,$h:220px);
            margin-left: 20px;
            border: 1px solid #707070;
            font-size: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
.middle{
    // border: 1px solid #000;
    background-color: $color_white;
    .waste{
        background-color: $color_darkWhite;
    }
    .aboutHouse{
        padding-top: 30px;
        color: #666B46;
        font-weight: bolder;
        font-size: 25px;
        .description{
            p{
                padding-top: 15px;
                padding-left: 20px;
                color: #7e7e7e;
                font-size: 15px;
            }
        }
        .neighborhood{
            .allTag{
                padding-left: 20px;
                .tag{
                    @include size($w: auto, $h: 30px);
                    display: inline-flex;
                    justify-content: center;
                    background-color: #A6B6AE;
                    padding:5px 10px 5px;
                    margin: 3px;
                    border-radius: 3px;
                    color: #ffffff;
                    font-size: 15px;
                }
            }
        }
    }
    .houseInfo{
        padding-top: 50px;
        color: #666B46;
        font-weight: bolder;
        font-size: 25px;
        .allTable{
            display: flex;
            flex-direction: row; 
            .table1, .table2{
                display: inline-block;
                font-size: 15px;
                color: #7e7e7e;
                td{
                    padding-top: 5px;
                }
                .data{
                    display: flex;
                    justify-content: left;
                    padding-left: 10px;
                }
            }
            .table2{
                margin-left: 70px;
            }
        }   
    }
}
</style>