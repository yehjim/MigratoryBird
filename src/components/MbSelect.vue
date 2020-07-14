<template>
    <div class="container-fluid mbselect">
        <span class="mbselecttitle">Mb Select</span>
        <div class="row multiple-items">
            <div v-for="(item,index) in selectlist" :key="index">
                <div class="selectitems">
                    <div class="itemsdetail">
                        <div class="housetypeicon">
                            <div class="iconbg">
    
                            </div>
                        </div>
                        <div class="detail">
                            <router-link :to="{name:'HouseDetail',params:{id:item.id}}">
                                <div class="area">
                                    <span class="housearea">{{item.city}} {{item.area}}</span>
                                    <br>
                                    <span class="housetype">{{item.type}}</span>
                                </div>
                                <div class="price">
                                    <span class="houseprice">NTD:{{item.monthly}}</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script type="text/javascript" src="../src//assets//slick-1.8.1//slick//slick.min.js">

</script>

<script>
import axios from 'axios'
export default {
    name: 'MbSelect',
    data() {
        return {
            selectlist: []
        }
    },
    mounted() {
        $(document).ready(function() {
            $('.multiple-items').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
            });
        });
        axios.get(`http://localhost:7000/housedetail?ad=true`)
            .then((res) => {
                this.selectlist = res.data
            }).catch((err) => {
                console.log(err)

            })
    },

}
</script>

<style lang="scss" scoped>
.mbselect {
    width: 100%;
    height: 600px;
    margin-top: 50px;
    .mbselecttitle {
        font-size: 30px;
        color: #666B46;
        margin-left: 100px;
    } // .slick-current {
    //     transition: 0.5s;
    //     transform: scale(1.2);
    // }
    .multiple-items {
        // border: solid 1px;
        display: flex;
        justify-content: center;
        height: 500px; // justify-content: center;
        // width: 100%;
        // border: solid 1px;
        align-items: center;
        .selectitems {
            // border: solid 1px;
            background-image: url('../assets/media/patrick_perkins_3wylDrjxH_E_un_bx@2x.png');
            background-position: center;
            background-size: cover;
            border-radius: 5px;
            // margin-top: 100px;
            // width: 33%;
            width: 400px;
            margin-right: 50px;
            margin-left: 50px;
            height: 350px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            box-sizing: border-box;
            overflow: hidden;
            transition: 0.4s;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            .itemsdetail {
                width: 300px;
                height: 85px;
                background-color: white;
                margin-bottom: 30px;
                border-radius: 17px;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box; // transform: scale(0);
                transform: translateY(130px);
                transition-duration: 0.5s;
                .housetypeicon {
                    width: 40%;
                    height: 70px;
                    display: flex;
                    margin: auto;
                    justify-content: center;
                    align-items: center; // border: solid 1px;
                    .iconbg {
                        width: 60px;
                        height: 60px;
                        background-color: darkorange; // margin: auto;
                        border-radius: 10px;
                    }
                }
                .detail {
                    width: 60%;
                    height: 80px; // border: solid 1px;
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    .housearea {
                        font-size: 1px;
                        color: #A6B6AE;
                    }
                    .housetype {
                        font-size: 1px;
                        color: #7AA08F;
                    }
                    .houseprice {
                        font-size: 0.5px;
                        color: #A6B6AE;
                    }
                }
            }
        }
    }
    .selectitems:hover {
        .itemsdetail {
            transform: translateY(10px);
        }
    }
}
</style>