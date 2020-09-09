<template>
    <div class="container">
        <div class="row">
            <div class="col-3 title">
                <span>Pay Rent</span>
            </div>
        </div>
        <div class="row">
            <div class="col-7 leftcontent">
                <div class="paymentdetail">
                    <span class="payment">Payment Details</span>
                    <span class="rent">Rent:  NT${{iteminfo.monthly}}</span>
                </div>
                <PaymentLine></PaymentLine>
                <div class="total">
                    <span>Total:NT${{iteminfo.monthly}}</span>
    
                </div>
            </div>
            <div class="col-1">
                <button>Pay</button>
            </div>
            <div class="col-4 rightcontent">
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
                            <span>透天</span>
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
                                <span>{{iteminfo.start_date}}</span>
                            </div>
                            <div class="end">
                                <span>End:</span>
                                <span>{{iteminfo.end_date}}</span>
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
                            <span class="rentprice">NTD：{{iteminfo.monthly}}</span>
                        </div>
                        <div class="totalrent">
                            <span>Total：</span>
                            <span class="totalprice">NTD：{{iteminfo.monthly}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PaymentLine from '../components/PaymentLine'
import axios from 'axios'
export default {
    mounted(){
        let userid = this.$route.params.id
        axios.get(`http://localhost:7000/bookingRecord/?foreigner_id=${userid}`)
            .then((res) => {
                this.iteminfo = res.data[0]
                console.log(this.iteminfo)
            }).catch((err) => {
                console.log(err)

            })

    },
    data() {
        return {
            iteminfo:{

            }
        }
    },
    computed:{
    },
    components: {
        PaymentLine

    }

}
</script>

<style lang="scss" scoped>
@mixin size($w, $h) {
    width: $w;
    height: $h;
}

@mixin border() {
    border: solid 1px;
}

.container {
    // border: solid 1px;
    .title {
        span {
            color: #666B46;
            font-size: 50px;
        }
    }
    .leftcontent {
        // border: solid 1px;
        .paymentdetail {
            display: flex;
            flex-direction: column; // border: solid 1px;
            margin-top: 20px;
            span {
                margin-top: 10px;
                color: #A6B6AE;
            }
            .payment {
                color: #A6B6AE;
                font-size: 25px;
            }
            .rent,
            .deposit {
                margin-left: 20px;
            }
        }
        .seven {
            border: solid 1px #A6B6AE;
            border-radius: 5px;
            height: 100px;
            margin-top: 20px;
            margin-left: 20px;
            .icon {
                // border: solid 1px;
                padding-left: 20px;
                padding-top: 10px;
                color: #6A6A6A;
                span {
                    font-size: 15px;
                }
            }
        }
        .atm {
            border: solid 1px #A6B6AE;
            border-radius: 5px;
            height: 100px;
            margin-top: 20px;
            margin-left: 20px;
            .icon {
                // border: solid 1px;
                padding-left: 20px;
                padding-top: 10px;
                color: #6A6A6A;
                span {
                    font-size: 15px;
                }
            }
        }
        .total {
            // border: solid 1px;
            margin-top: 20px;
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            color: #7E7E7E;
            font-weight: bold;
            span {
                font-size: 25px;
                
            }
        }
    }
    .col-1 {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        button {
            width: 100px;
            height: 30px;
            border: solid 1px #A6B6AE;
            border-radius: 5px;
            color: #A6B6AE; // margin-top: 20px;
            margin-bottom: 200px;
        }
    }
    .rightcontent {
        // border: solid 1px;
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
                .checkwrap{
                    display: flex;
                    // border: solid 1px;
                    justify-content: space-between;
                    padding-right: 50px;
                }
                .total{
                    // border: solid 1px;
                    margin-left: 35px;
                    margin-top: 10px;
                    color: #7E7E7E;
                }
                .rent ,.deposit, .totalrent{
                    // border: solid 1px;
                    margin-left: 35px;
                    display: flex;
                    justify-content:space-between;
                    align-items: center;
                    margin-bottom: 10px;
                    margin-top: 10px;
                    color: #7E7E7E;
                    
                }
                .totalrent{
                    margin-top: 30px;
                }
                .rentprice,.depositprice,.totalprice{
                        margin-right: 15px;
                        // border: solid 1px;
                }
                .rentprice{
                    padding-right: 4px;
                }
                .depositprice{
                    // border: solid 1px;
                    padding-left: 15px;
                    padding-bottom: 3px;
                    padding-right: 4px;
                    border-bottom: 2px solid #7E7E7E;
                }
                .totalprice{
                    font-size: 20px;
                    font-weight: bolder;
                    // border: solid 1px;
                }
                // border: solid 1px;
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
}
</style>