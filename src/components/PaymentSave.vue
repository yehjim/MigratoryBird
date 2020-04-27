<template>
    <div :class="paymenttype" @click="selected()">
        <div class="icon">
            <i></i>
            <span>{{paymentitle}}</span>
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
</template>

<script>
export default {
    props: ["paymenttype", "paymentitle"],
    data() {
        return {
            type: []
        }
    },
    methods: {
        // var type;
        selected() {       
            console.log(this.paymenttype)
            this.type.push(this.paymenttype);
            document.querySelector("." + this.paymenttype).style.overflow = "visible";
            document.querySelector("." + this.paymenttype).style.height = "205px";
            console.log(this.type)



        },
        chagetypehalder() {

        }
    }
}
</script>

<style lang="scss" scoped>
.savecard {
    // width: 100%;
    height: 50px;
    margin-top: 20px;
    margin-left: 20px;
    border: solid 1px #A6B6AE; // height: 205px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.6s cubic-bezier(.25, .8, .25, 1);
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
        width: 130px;
        height: 80px;
        margin: auto;
        margin-top: 30px;
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
    height: 205px;
    overflow: visible;
}


</style>