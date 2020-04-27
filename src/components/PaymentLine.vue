<template>
    <div>
        <div class="savecard" @click="selectedsave()">
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
        <div class="linepay" @click="selectedline()">
            <div class="icon">
                <img src="../assets/media/LINE Pay_PNG/LINE-Pay(h)_W238_n.png" alt="">
                <!-- <span>Line Pay</span> -->
            </div>
            <div class="cardwrap">
                <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quod vitae excepturi. Numquam, dolorum facilis debitis fugit natus aliquam dolores architecto eius id esse cum ipsa neque quam. Quasi, nihil!</P>
            </div>
        </div>
        <div class="seven" @click="selectedseven()">
            <div class="icon">
                <i></i>
                <span>7-11代碼繳費</span>

            </div>
            <div class="cardwrap">
               <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quod vitae excepturi. Numquam, dolorum facilis debitis fugit natus aliquam dolores architecto eius id esse cum ipsa neque quam. Quasi, nihil!</P>
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
    </div>
</template>

<script>
export default {
    methods: {
        selectedsave() {
            document.querySelector(".savecard").style.overflow = "visible";
            document.querySelector(".savecard").style.height = "205px";
            document.querySelector(".savecard").style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
            document.querySelector(".linepay").style.overflow = "hidden";
            document.querySelector(".linepay").style.height = "50px";
            document.querySelector(".linepay").style.boxShadow = "none";
            document.querySelector(".seven").style.overflow = "hidden";
            document.querySelector(".seven").style.height = "50px";
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
            document.querySelector(".savecard").style.height = "50px";
            document.querySelector(".savecard").style.boxShadow = "none";
            document.querySelector(".seven").style.overflow = "hidden";
            document.querySelector(".seven").style.height = "50px";
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
            document.querySelector(".linepay").style.height = "50px";
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
            document.querySelector(".linepay").style.height = "50px";
            document.querySelector(".linepay").style.boxShadow = "none";
            document.querySelector(".seven").style.overflow = "hidden";
            document.querySelector(".seven").style.height = "50px";
            document.querySelector(".seven").style.boxShadow = "none";

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

.savecard:hover {
    height: 205px !important;
    overflow: visible !important;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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

.linepay:hover {
    height: 205px !important;
    overflow: visible !important;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.seven:hover {
    height: 205px !important;
    overflow: visible !important;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.atm:hover {
    height: 205px !important;
    overflow: visible !important;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}
</style>