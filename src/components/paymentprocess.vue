<template>
    <b-container fluid>
        <div class="tenanttitle">
            <span>PaymentDetail</span>
        </div>
        <div class="rent">
            <span>Rent:NT{{iteminfo.monthly}}</span>
            <br>
            <span>Deposit:NT{{iteminfo.deposit}}</span>
        </div>
        <b-row>
            <b-col>
                <div class="savecard" @click="selectedsave()">
                    <div class="icon">
                        <i></i>
                        <span>Save Card</span>
                    </div>
                    <div class="flex">
                        <div class="cardwrap" v-for="(card,index) in paylist" :key="index" @click="selectcard">
                            <div class="cardcontent">
                                <div class="cardicon">
                                    <img src="../assets/media/visa.svg" alt="">
                                </div>
                                <div class="cardnumber">
                                    <span>{{cardnumer(card.card_number)}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </b-col>
    
        </b-row>
        <b-row>
            <b-col>
                <div class="linepay" @click="selectedline()">
                    <div class="icon">
                        <!-- <span>linpay</span> -->
                        <img src="../assets/media/image-1@2x.png" alt="">
                        <span>LINE pay</span>
                        <!-- <span>Line Pay</span> -->
                    </div>
                    <div class="cardwrap">
                        <P>使用linepay結帳</P>
                    </div>
                </div>
            </b-col>
        </b-row>
    
    
        <div class="seven" @click="selectedseven()">
            <div class="icon">
                <img src="../assets/media/image-2@2x.png" alt="">
                <span>7-11代碼繳費</span>
            </div>
            <div class="cardwrap">
                <P>使用ibon 7-11代碼繳費</P>
            </div>
        </div>
        <div class="atm" @click="selectedatm()">
            <div class="icon">
                <i></i>
                <span>ATM轉帳繳費</span>
            </div>
            <div class="cardwrap">
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quod vitae excepturi. Numquam, dolorum facilis debitis fugit natus aliquam dolores architecto eius id esse cum ipsa neque quam. Quasi, nihil!</P>
            </div>
        </div>
        <div class="total">
            <span>Total:NT{{totalrent}}</span>
        </div>
        <div class="btnwrap">
            <div class="backbtn" @click="back">
                <span>Back</span>
            </div>
            <!-- <router-link to=""> -->
            <div class="nextbtn" @click="posthouseid">
                <span>NEXT</span>
            </div>
            <!-- </router-link> -->
        </div>
    
    
    </b-container>
</template>

<script>
import axios from 'axios'

export default {
    props: ['iteminfo', 'start', 'end', 'totalrent'],
    data() {
        return {
            itemdetail: this.iteminfo,
            bookingRecord: {},
        }
    },
    mounted() {
        // this.setforeignerlist();
    },
    methods: {
        back() {
            this.$emit('backhandler')
        },
        cardnumer(number) {
            let num = ''
            for (let i = 0; i < number.length; i += 4) {
                let j = 4 + i;
                num += number.slice(i, j) + ' '
            }
            return num;


        },
        // setforeignerlist() {
        //     this.foreignerlist = this.iteminfo.foreigner_id
        //     this.foreignerlist.push(this.userid)
        // },
        selectcard() {
            document.querySelector(".cardcontent").style.transform = "scale(1.2)";
        },
        selectedsave() {
            document.querySelector(".savecard").style.overflow = "visible";
            document.querySelector(".savecard").style.height = "205px";
            document.querySelector(".savecard").style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
            document.querySelector(".linepay").style.overflow = "hidden";
            document.querySelector(".linepay").style.height = "65px";
            document.querySelector(".linepay").style.boxShadow = "none";
            document.querySelector(".seven").style.overflow = "hidden";
            document.querySelector(".seven").style.height = "70px";
            document.querySelector(".seven").style.boxShadow = "none";
            document.querySelector(".atm").style.overflow = "hidden";
            document.querySelector(".atm").style.height = "50px";
            document.querySelector(".atm").style.boxShadow = "none";



        },
        selectedline() {
            document.querySelector(".linepay").style.overflow = "visible";
            document.querySelector(".linepay").style.height = "205px";
            document.querySelector(".linepay").style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
            document.querySelector(".savecard").style.overflow = "hidden";
            document.querySelector(".savecard").style.height = "65px";
            document.querySelector(".savecard").style.boxShadow = "none";
            document.querySelector(".seven").style.overflow = "hidden";
            document.querySelector(".seven").style.height = "70px";
            document.querySelector(".seven").style.boxShadow = "none";
            document.querySelector(".atm").style.overflow = "hidden";
            document.querySelector(".atm").style.height = "50px";
            document.querySelector(".atm").style.boxShadow = "none";



        },
        selectedseven() {
            document.querySelector(".seven").style.overflow = "visible";
            document.querySelector(".seven").style.height = "205px";
            document.querySelector(".seven").style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
            document.querySelector(".atm").style.overflow = "hidden";
            document.querySelector(".atm").style.height = "50px";
            document.querySelector(".atm").style.boxShadow = "none";
            document.querySelector(".savecard").style.overflow = "hidden";
            document.querySelector(".savecard").style.height = "50px";
            document.querySelector(".savecard").style.boxShadow = "none";
            document.querySelector(".linepay").style.overflow = "hidden";
            document.querySelector(".linepay").style.height = "65px";
            document.querySelector(".linepay").style.boxShadow = "none";
        },
        selectedatm() {
            document.querySelector(".atm").style.overflow = "visible";
            document.querySelector(".atm").style.height = "205px";
            document.querySelector(".atm").style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
            document.querySelector(".savecard").style.overflow = "hidden";
            document.querySelector(".savecard").style.height = "50px";
            document.querySelector(".savecard").style.boxShadow = "none";
            document.querySelector(".linepay").style.overflow = "hidden";
            document.querySelector(".linepay").style.height = "65px";
            document.querySelector(".linepay").style.boxShadow = "none";
            document.querySelector(".seven").style.overflow = "hidden";
            document.querySelector(".seven").style.height = "70px";
            document.querySelector(".seven").style.boxShadow = "none";

        },
        posthouseid() {
            let hashouse = true;
            this.$store.commit('posthouseidtouser', this.$route.params.id, hashouse);
            this.$store.commit('posthousestatus', hashouse);
            axios.patch(`http://localhost:7000/housedetail/${this.$route.params.id}`, {
                    foreigner_id: this.foreignerlist
                })
                .then(res => {
                    console.log('修改成功', res.data)
                });
            this.$store.dispatch('POSTBOOKHOUSEINFO');
            this.$store.dispatch('POSTBOOKINGRECORD');
            this.$emit('showcompletepage')
            setTimeout(this.pushtoprofile, 1000);



        },
        pushtoprofile() {
            this.$router.push('/profile')
        }


    },
    computed: {
        userid() {
            return this.$store.state.userdata[0].id
        },
        paylist() {
            return this.$store.state.userdata[0].pay_list;
        },
        foreignerlist() {
            return this.$store.state.foreignerlist
        }
    }
}
</script>

<style lang="scss" scoped>
.flex {
    // border: solid 1px;
    display: flex;
}

.tenanttitle {
    margin-top: 240px;
    color: #a6b6ae;
    font-size: 25px;
}

.rent {
    color: #a6b6ae;
    margin-top: 10px;
    span {
        font-size: 20px;
        padding-top: 10px;
    }
}

.savecard,
.linepay,
.seven,
.atm {
    // width: 100%;
    height: 50px;
    margin-top: 20px;
    margin-left: 20px;
    border: solid 1px #A6B6AE; // height: 205px;
    border-radius: 5px;
    overflow: hidden;
    .icon {
        // border: solid 1px;
        padding-left: 20px;
        padding-top: 10px;
        color: #6A6A6A;
        span {
            font-size: 15px;
        }
    }
    .cardwrap {
        // border: solid 1px;
        width: 100%;
        height: 100px;
        margin: auto;
        margin-top: 30px;
        p {
            padding-left: 20px;
        }
        .cardcontent {
            // border: solid 1px;
            width: 130px;
            height: 80px;
            border-radius: 15px;
            margin: auto;
            background-color: #EDEDED; // margin-top: 40px;
            transition-duration: 0.4s;
            cursor: pointer;
            .cardicon {
                // border: solid 1px;
                height: 40%;
                img {
                    width: 30px;
                    height: 30px;
                    float: right;
                    margin-right: 10px;
                }
            }
            .cardnumber {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 60%;
                width: 100%;
                span {
                    margin-bottom: 20px;
                    color: #6A6A6A;
                    font-size: 10px;
                }
            }
        }
        .cardcontent:hover {
            // background-color: black;
            transform: scale(1.2);
        }
    }
}

.savecard:hover {
    height: 205px !important;
    overflow: visible !important;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.linepay {
    height: 65px;
    .icon {
        // border: solid 1px;
        display: flex;
        padding-bottom: 10px; // justify-content: space-between;
        align-items: flex-start;
        align-items: center;
        span {
            margin-left: 10px;
        }
        img {
            width: 78px;
            height: 41px;
        }
    }
}

.seven {
    height: 70px;
    .icon {
        // border: solid 1px;
        display: flex;
        padding-bottom: 10px; // justify-content: space-between;
        align-items: flex-start;
        align-items: center;
        img {
            width: 79px;
            height: 52px;
        }
    }
}

.linepay:hover {
    height: 205px !important;
    overflow: visible !important;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.seven:hover {
    height: 205px !important;
    overflow: visible !important;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.5s cubic-bezier(.25, .8, .25, 1);
}

.atm:hover {
    height: 205px !important;
    overflow: visible !important;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.total {
    // border: solid 1px; // float: right;
    text-align: right;
    margin-top: 20px;
    span {
        font-size: 25px; // text-align: right;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.15;
        letter-spacing: normal;
        text-align: left;
        color: #6a6a6a;
    }
}

.btnwrap {
    display: flex;
    justify-content: space-between;
}

.nextbtn,
.backbtn {
    width: 70px;
    height: 30px;
    border-radius: 4px;
    border: solid 2px #a6b6ae;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px; // float: right;
    margin-top: 20px;
    span {
        font-size: 10px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.67;
        letter-spacing: normal;
        text-align: center;
        color: #a6b6ae;
    }
}
</style>