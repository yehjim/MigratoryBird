<template>
    <div class="HouseDetail">
        <HouseDTHeader></HouseDTHeader>
        <Carousel></Carousel>
        <!-- <Popup></Popup> -->
        <div id="myModal" class="modal" :style="{display:status}">
            <div class="modalcontent">
                <div class="flexbox">
                    <div class="mblogo">
                        <!-- <img src="../assets/media/Group.png" alt=""> -->
                    </div>
                    <div class="describe">
                        <span>我們收到您的議價嘍！</span>
                    </div>
                </div>
    
    
            </div>
    
        </div>
        <div id="myModal" class="modal1" :style="{display:checkinstatus}">
            <div class="checkcontent">
                <div class="flexbox">
                    <div class="closebtn" @click="closemodal">
                        <span>x</span>
                    </div>
                    <div class="checkintitle">
                        <span>Checkin</span>
                    </div>
                    <div class="checkin">
                        <h5>checkin date</h5>
                        <b-form-datepicker v-model="value1" class="mb-2"></b-form-datepicker>
                    </div>
                    <div class="checkout">
                        <h5>checkout date</h5>
                        <b-form-datepicker v-model="value2" class="mb-2"></b-form-datepicker>
                    </div>
                    <div class="nextbtn" @click="checkdatedata">
                        <router-link :to="{ name:'Book',params:{id}}">
                            <span>NEXT</span>
    
                        </router-link>
    
    
                    </div>
                </div>
    
    
            </div>
    
        </div>
        <BriefInfoBar @showcheckinhandler="showcheckin" :city="detaildata.city" :area="detaildata.area" :state="detaildata.type" :monthly="detaildata.monthly"></BriefInfoBar>
        <HouseContent @showbarginhandler="show" :address="detaildata.address" :type="detaildata.type" :furniture="detaildata.furniture" :house_describe="detaildata.house_describe" :life_function="detaildata.life_function" :monthly="detaildata.monthly" :square="detaildata.square" :live_number="detaildata.live_number" :room="detaildata.room" :deposit="detaildata.deposit" :open_fire="detaildata.open_fire" :pet="detaildata.pet" :gender="detaildata.gender" :legal_use="detaildata.legal_use" :is_bargain="detaildata.is_bargain"></HouseContent>
    
    
    </div>
</template>

<script>
import HouseDTHeader from "../components/HouseDTHeader"
// import HouseDTHeader from '../components/Header'
import Carousel from '../components/Carousel'
import BriefInfoBar from '../components/BriefInfoBar'
import HouseContent from '../components/HouseContent'
import axios from 'axios'

// import Popup from '../components/PopUp'

export default {
    name: 'HouseDetail',
    data() {
        return {
            status: 'none',
            checkinstatus: 'none',
            value1: '',
            value2: '',
            id: this.$route.params.id,
            detaildata: {

            }
        }
    },
    mounted() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        axios.get(`http://localhost:7000/housedetail/${this.id}`)
            .then((res) => {
                console.log(res.data)
                // this.itemdata = res.data
                this.detaildata = res.data;
            }).catch((err) => {
                console.log(err)

            })

    },
    components: {
        HouseDTHeader,
        Carousel,
        BriefInfoBar,
        HouseContent,
        // Popup

    },
    methods: {
        show() {
            // console.log('emit接到')
            this.status = 'block';
            setTimeout(this.close, 2000);
        },
        showcheckin() {
            // console.log('按到')
            this.checkinstatus = 'block';
            console.log(this.$store.state.checkindata);
        },
        close() {
            // console.log('按到')
            console.log('123')
            this.status = 'none';
            // var myModal = document.getElementById('myModal');
            // myModal.style.display = 'none';
        },
        closemodal() {

            this.checkinstatus = 'none';
        },
        checkdatedata() {
            this.$store.state.checkindata.checkin = this.value1;
            this.$store.state.checkindata.checkout = this.value2;


        }
    }
}
</script>

<style lang="scss" scoped>
$color_darkWhite: #EDEDED;
// .flexbox{
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
// }
* {
    font-family: 微軟正黑體;
    position: relative;
    box-sizing: border-box;
    padding: 0px;
}

.HouseDetail {
    // background-color: $color_darkWhite;
    background-color: #ededed; // height: 2000px;
}

.modal1 {
    position: fixed;
    /* Stay in place */
    z-index: 10;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
}

.modal {
    // display: blcok;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 10;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

/* Modal Content */

.modalcontent {
    background-color: #d8d8d8;
    margin: auto;
    padding: 20px; // border: 1px solid #888;
    width: 783px;
    height: 477px;
    .mblogo {
        // border: solid 1px;
        width: 250px;
        height: 250px;
        margin: auto;
        margin-top: 30px;
        background-image: url('../assets/media/Group.png'); // background-size: cover;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .describe {
        text-align: center;
        margin-top: 50px;
        span {
            font-size: 40px;
            color: #ffffff;
        }
    }
}

.checkcontent {
    margin: auto;
    padding: 20px; // border: 1px solid #888;
    width: 783px;
    height: 350px;
    border-radius: 10px;
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
    box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    .checkintitle {
        // border: solid 1px;
        font-size: 35px;
        padding-left: 30px;
        color: #666b46;
    }
    .checkin {
        width: 70%;
        margin: auto;
        margin-top: 20px;
        h5 {
            color: #666b46;
        }
    }
    .checkout {
        width: 70%;
        margin: auto;
        margin-top: 20px;
        h5 {
            color: #666b46;
        }
    }
    .closebtn {
        float: right;
        font-size: 30px;
        z-index: 2;
    }
    .nextbtn {
        width: 100px;
        height: 30px;
        border-radius: 4px;
        border: solid 2px #a6b6ae;
        background-color: #a6b6ae;
        text-align: center; // border: solid 1px;
        float: right;
        margin-top: 30px;
        margin-right: 30px;
    }
}

/* The Close Button */

.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>