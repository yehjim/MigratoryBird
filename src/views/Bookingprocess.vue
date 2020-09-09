<template>
    <b-container>
        <b-row class="title">
            <b-col cols="5" class="booktitle">
                <span>Complete Booking</span>
            </b-col>
            <b-col cols="7"></b-col>
    
        </b-row>
        <b-row>
            <b-col cols="8" class="process">
                <b-row>
                    <b-col cols="2">
                        <div class="wrap">
                            <div class="processnum" v-if="pronum===2">
                                <span>2</span>
                            </div>
                            <div v-else>
                                <div class="processnum" v-if="pronum>2">
                                    <span>v</span>
                                </div>
                                <div class="processnumnone" v-else>
                                    <span>2</span>
                                </div>
    
                            </div>
                        </div>
                        <div class="line" :style="{height:line1h}">
    
                        </div>
                        <div class="wrap">
                            <div class="processnum" v-if="pronum===3">
                                <span>3</span>
                            </div>
                            <div v-else>
                                <div class="processnum" v-if="pronum>3">
                                    <span>v</span>
                                </div>
                                <div class="processnumnone" v-else>
                                    <span>3</span>
                                </div>
    
                            </div>
                        </div>
                        <div class="line1" :style="{height:line2h}">
    
                        </div>
                        <div class="wrap">
                            <div class="processnum" v-if="pronum===4">
                                <span>4</span>
                            </div>
                            <div class="processnumnone" v-else>
                                <span>4</span>
                            </div>
                        </div>
                    </b-col>
                    <b-col cols="10">
                        <hostrule @nexthandler="Next" v-show="pronum===2" :iteminfo="iteminfo"></hostrule>
                        <tenantprofile @next2handler="Next2" @backhandler="back" v-show="pronum===3"></tenantprofile>
                        <payment @backhandler="back2" v-show="pronum===4" :iteminfo="iteminfo" :start="checkin" :end="checkout" :totalrent="totalrent" @showcompletepage="showmodal"></payment>
                    </b-col>
    
                </b-row>
    
    
            </b-col>
            <b-col cols="4" class="rightcontent">
                <div class="housecover">
                    <img src="../assets/media/patrick_perkins_3wylDrjxH_E_un_bx@2x.png" alt="">
                </div>
                <div class="housedetail">
                    <div class="housetitle">
                        <div class="hosttype">
                            超級房東
                        </div>
                        <span>{{iteminfo.city}}</span>
                    </div>
                    <div class="housedescribe">
                        <div class="add">
                            <span>{{iteminfo.city}}{{iteminfo.area}}{{iteminfo.address}}</span>
                        </div>
                        <div class="type">
                            <span>{{iteminfo.type}}</span>
                        </div>
                        <div class="price">
                            <span>NTD : {{iteminfo.monthly}} / 月</span>
                        </div>
                    </div>
                    <div class="checkdate">
                        <span class="title">Check in</span>
                        <div class="checkwrap">
                            <div class="start">
                                <span>Start:</span>
                                <span>{{checkin}}</span>
                            </div>
                            <div class="end">
                                <span>End:</span>
                                <span>{{checkout}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="checkdate">
                        <span class="title">Payment Detail</span>
                        <div class="total">
                            <span>候鳥將收取</span>
                        </div>
                        <div class="rent">
                            <span>Rent：</span>
                            <span class="rentprice">NTD：{{rent}}</span>
                        </div>
                        <div class="deposit">
                            <span>Depositt：</span>
                            <span class="depositprice">NTD：{{iteminfo.deposit}}</span>
                        </div>
                        <div class="totalrent">
                            <span>Total：</span>
                            <span class="totalprice">NTD：{{totalrent}}</span>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
        <complete v-if="show"></complete>
    </b-container>
</template>

<script>
import hostrule from '../components/hostrule'
import tenantprofile from '../components/tenantprofile'
import payment from '../components/paymentprocess'
import axios from 'axios'
import complete from '../components/Completebooking'
export default {
    data() {
        return {
            pronum: 2,
            line1h: '450px',
            line2h: '100px',
            totalmon: 0,
            show: false,
            iteminfo: {

            }
        }
    },
    components: {
        hostrule,
        tenantprofile,
        payment,
        complete
    },
    mounted() {
        let houseid = this.$route.params.id
        axios.get(`http://localhost:7000/housedetail/?id=${houseid}`)
            .then((res) => {
                this.iteminfo = res.data[0]
                console.log(this.iteminfo)
            }).catch((err) => {
                console.log(err)

            })
    },
    methods: {
        Next() {
            this.pronum += 1;
            this.line1h = "50px"
            this.line2h = "1000px"
        },
        Next2() {
            this.pronum += 1;
            this.line2h = "50px";
        },
        back() {
            this.pronum -= 1;
            this.line1h = "450px";
            this.line2h = "100px"
        },
        back2() {
            this.pronum -= 1;
            this.line2h = "1000px";
            this.line1h = "50px";
        },
        computedtotalmon() {
            let checkinmon = this.checkinyearmon;
            let checkoutmon = this.checkoutmon;
            let totalmon = checkoutmon - checkinmon;
            // this.test = checkinmon;
            console.log('月份', totalmon)
            return totalmon;
            // return 1;
        },
        computedtotalyear() {
            let checkinyear = this.checkinyear;
            let checkoutyear = this.checkoutyear

            let totalyear = checkoutyear - checkinyear;
            totalyear = totalyear * 12;
            console.log('月份', totalyear)
            return totalyear;
        },
        showmodal() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            this.show = true;
            setTimeout(this.closemodal, 2000);

            // setTimeout(this.show=true,5000)
        },
        closemodal() {
            this.show = false
        }
    },
    watch: {
        //  rent(){
        //     let a = this.computedtotalmon();
        //     return a;
        // },
    },
    computed: {
        checkin() {
            return this.$store.state.bookingRecord.start_date
        },
        checkout() {
            return this.$store.state.bookingRecord.end_date
        },
        rent() {
            let mon = this.computedtotalmon();
            let year = this.computedtotalyear();
            let rent = this.iteminfo.monthly;
            let totoalrent = rent * (mon + year);
            if (mon == 0 && year == 0) {
                totoalrent = this.iteminfo.monthly;
            }
            return totoalrent
        },
        checkinyear() {
            return parseInt(this.checkin.split('-')[0]);
        },
        checkinyearmon() {
            return parseInt(this.checkin.split('-')[1]);
        },
        checkinday() {
            return this.checkin.split('-')[2];
        },
        checkoutyear() {
            return parseInt(this.checkout.split('-')[0]);
        },
        checkoutmon() {
            return parseInt(this.checkout.split('-')[1]);
        },
        checkoutday() {
            return this.checkout.split('-')[2];
        },
        totalrent() {
            let totalrent = parseInt(this.rent) + parseInt(this.iteminfo.deposit);
            return totalrent
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 45px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
    color: #666b46;
    span {
        //    border: solid 1px;
    }
}

.process {
    margin-top: 20px;
    .wrap {
        // border: solid 1px;
        // padding-top: 30px;
        display: flex;
        justify-content: center; // padding-top: 50px;
        // padding-left: 50px;
    }
    .processnum {
        display: flex;
        justify-content: center;
        align-items: center; // border: solid 1px;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        background-color: #a6b6ae;
        color: white;
        font-size: 30px;
    }
    .processnumnone {
        display: flex;
        justify-content: center;
        align-items: center; // border: solid 1px;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        background-color: white;
        border: solid 1px #a6b6ae;
        color: #a6b6ae;
        font-size: 30px;
    }
    .line {
        border: solid 1px;
        width: 1px;
        height: 450px;
        margin: auto;
        color: #a6b6ae;
        transition: 0.5s;
    }
    .line1 {
        border: solid 1px;
        width: 1px;
        height: 100px;
        color: #a6b6ae;
        margin: auto;
        transition: 0.5s;
    }
}

.rightcontent {
    margin-top: 20px; // border: solid 1px;
    .housecover {
        img {
            width: 100%;
            height: 250px;
        }
    }
    .housedetail {
        // border: solid 1px;
        height: 600px;
        margin-top: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        border-radius: 5px;
        .housetitle {
            display: flex; // justify-content: space-around;
            // border: solid 1px;
            .hosttype {
                border: solid 1px #A6B6AE;
                margin-top: 15px;
                margin-left: 20px;
                margin-right: 20px;
                margin-bottom: 10px;
                border-radius: 20px;
                padding: 5px;
                font-size: 10px;
                width: 100px;
                text-align: center;
                color: #A6B6AE;
            }
            span {
                color: #666B46;
                font-size: 20px;
                margin-top: 15px;
                font-weight: bold;
            }
        }
        .housedescribe {
            // border: solid 1px;
            .add {
                padding-top: 10px;
                padding-left: 30px;
                span {
                    color: #7E7E7E;
                    font-weight: bold;
                }
            }
            .type {
                padding-top: 10px;
                padding-left: 30px;
                span {
                    color: #7E7E7E;
                }
            }
            .price {
                padding-top: 10px;
                padding-left: 30px;
                span {
                    color: #7E7E7E;
                }
            }
        }
        .checkdate {
            .checkwrap {
                display: flex; // border: solid 1px;
                justify-content: space-between;
                padding-right: 50px;
            }
            .total {
                // border: solid 1px;
                margin-left: 35px;
                margin-top: 10px;
                color: #7E7E7E;
            }
            .rent,
            .deposit,
            .totalrent {
                // border: solid 1px;
                margin-left: 35px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
                margin-top: 10px;
                color: #7E7E7E;
            }
            .totalrent {
                margin-top: 30px;
            }
            .rentprice,
            .depositprice,
            .totalprice {
                margin-right: 15px; // border: solid 1px;
            }
            .rentprice {
                padding-right: 4px;
            }
            .depositprice {
                // border: solid 1px;
                padding-left: 15px;
                padding-bottom: 3px;
                padding-right: 4px;
                border-bottom: 2px solid #7E7E7E;
            }
            .totalprice {
                font-size: 20px;
                font-weight: bolder; // border: solid 1px;
            } // border: solid 1px;
            margin-top: 30px;
            .title {
                color: #A6B6AE;
                font-size: 20px; // padding-top: 10px;
                padding-left: 30px;
            }
            .start,
            .end {
                display: flex;
                flex-direction: column;
                padding-top: 10px;
                padding-left: 30px;
                color: #7E7E7E;
                font-size: 15px;
            }
        }
    }
}
</style>