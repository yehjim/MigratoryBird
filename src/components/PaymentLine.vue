<template>
    <div>
        <div :class="mbwallet" @click="selectedmbwallet" v-if="hoststatus==true">
            <div class="icon">
                <i></i>
                <span>MB wallet</span>
            </div>
            <div class="cardwrap" >
                <div class="cardcontent">
                    <div class="cardicon">
                        <img src="../assets/media/visa.svg" alt="">
                    </div>
                    <div class="cardnumber">
                        <span>123 194 8612 111</span>
                    </div>
                </div>
            </div>
        </div>
        <div :class="savepayment" @click="selectedsave" v-if="hoststatus==false">
            <div class="icon">
                <i></i>
                <span>Save Card</span>
            </div>
            <div class="cardwrap">
                <div class="cardcontent">
                    <div class="cardicon">
                        <img src="../assets/media/visa.svg" alt="">
                    </div>
                    <div class="cardnumber">
                        <span>123 194 8612 111</span>
                    </div>
                </div>
            </div>
        </div>
        <div :class="linepaymet" @click="selectedline">
            <div class="icon">
                <img src="../assets/media/LINE Pay_PNG/LINE-Pay(h)_W238_n.png" alt="">
                <!-- <span>Line Pay</span> -->
            </div>
            <div class="cardwrap">
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quod vitae excepturi. Numquam, dolorum facilis debitis fugit natus aliquam dolores architecto eius id esse cum ipsa neque quam. Quasi, nihil!</P>
            </div>
        </div>
        <div :class="sevenpaymet" @click="selectedseven">
            <div class="icon">
                <i></i>
                <span>7-11代碼繳費</span>
    
            </div>
            <div class="cardwrap">
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quod vitae excepturi. Numquam, dolorum facilis debitis fugit natus aliquam dolores architecto eius id esse cum ipsa neque quam. Quasi, nihil!</P>
            </div>
        </div>
        <div :class="atmpaymet" @click="selectedatm">
            <div class="icon">
                <i></i>
                <span>ATM轉帳繳費</span>
            </div>
            <div class="cardwrap">
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quod vitae excepturi. Numquam, dolorum facilis debitis fugit natus aliquam dolores architecto eius id esse cum ipsa neque quam. Quasi, nihil!</P>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            savepayment: {
                savecard: true,
                savecardselect: false,
            },
            sevenpaymet: {
                savecard: true,
                sevenselect: false,
            },
            linepaymet: {
                savecard: true,
                linepayselect: false

            },
            atmpaymet: {
                savecard: true,
                atmselect: false

            },
            mbwallet: {
                savecard: true,
                mbwallet: false

            }

        }
    },
    methods: {
        selectedmbwallet() {
            this.mbwallet.mbwallet = true
            this.sevenpaymet.sevenselect = false
            this.linepaymet.linepayselect = false
            this.atmpaymet.atmselect = false
            this.savepayment.savecardselect = false
        },
        selectedsave() {
            this.mbwallet.mbwallet = false
            this.sevenpaymet.sevenselect = false
            this.linepaymet.linepayselect = false
            this.atmpaymet.atmselect = false
            this.savepayment.savecardselect = true
            console.log('123')
        },
        selectedline() {
            this.mbwallet.mbwallet = false
            this.sevenpaymet.sevenselect = false
            this.linepaymet.linepayselect = true
            this.atmpaymet.atmselect = false
            this.savepayment.savecardselect = false
        },
        selectedseven() {
            this.mbwallet.mbwallet = false
            this.sevenpaymet.sevenselect = true
            this.linepaymet.linepayselect = false
            this.atmpaymet.atmselect = false
            this.savepayment.savecardselect = false
        },
        selectedatm() {
            this.mbwallet.mbwallet = false
            this.sevenpaymet.sevenselect = false
            this.linepaymet.linepayselect = false
            this.atmpaymet.atmselect = true
            this.savepayment.savecardselect = false
        }
    },
    computed:{
        hoststatus(){
            return this.$store.state.hostcheck;
        }
    }
}
</script>

<style lang="scss" scoped>
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

.mbwallet,
.savecardselect,
.linepayselect,
.sevenselect,
.atmselect {
    overflow: visible;
    height: 205px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.savecard:hover {
    // height: 205px !important;
    // overflow: visible !important;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.linepay {
    .icon {
        // border: solid 1px;
        img {
            width: 150px;
            height: 40px;
        }
    }
}

// .linepay:hover {
//     height: 205px !important;
//     overflow: visible !important;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//     transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
// }
// .seven:hover {
//     height: 205px !important;
//     overflow: visible !important;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//     transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
// }
// .atm:hover {
//     height: 205px !important;
//     overflow: visible !important;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
//     transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
// }
</style>