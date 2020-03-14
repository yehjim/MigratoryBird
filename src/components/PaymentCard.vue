<template>
    <div class="payment">
        <div class="paymentwrap">
            <span>Payment</span>
            <div class="editbtn">
                <span>edit</span>
            </div>
        </div>
        <div>
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
            <!-- <PaymentCatd></PaymentCatd> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.payment {
    height: 250px;
    margin-top: 30px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .paymentwrap {
        // border: solid 1px;
        display: flex;
        padding-left: 15px;
        padding-top: 10px;
        span {
            font-size: 20px;
            color: #A6B6AE;
            font-weight: lighter;
        }
        .editbtn {
            width: 50px;
            height: 20px;
            background-color: #A6B6AE;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 18px;
            margin-left: 20px;
            margin-top: 5px;
            span {
                font-size: 12px;
                color: white;
            }
        }
    }
}

.cardwrap {
    // border: solid 1px;
    .cardcontent {
        // border: solid 1px;
        width: 160px;
        height: 93px;
        border-radius: 15px;
        margin: auto;
        background-color: #EDEDED;
        margin-top: 40px;
        transition-duration: 0.4s;
        cursor: pointer;
        .cardicon {
            // border: solid 1px;
            height: 40%;
            img {
                width: 40px;
                height: 40px;
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
            }
        }
    }
    .cardcontent:hover {
        // background-color: black;
        transform: scale(1.2);
    }
}
</style>