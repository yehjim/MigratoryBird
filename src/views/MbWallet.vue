<template>
    <div>
        <headerbar headercolor="#666B46"></headerbar>
        <div class="mbtitle">
            <span>MB Wallet</span>
            
        </div>
        <div class="account">
            <div class="namewallet">
                <span>JIM YEH的錢包</span>
                <button>儲值</button>
            </div>
            <div class="walletcontent">
                <div class="left">
                    <div class="balancestitle">可用餘額：</div>
                    <div class="wrap">
                        <div class="balances">NTD:35000
                        </div>
                        <button>轉帳至銀行</button>
                    </div>
                    <div class="inprocess">
                        <div class="inprocesswrap">
                            <span>處理中</span>
                            <span>NTD:12500</span>
                        </div>
                        <transaction></transaction>
    
                    </div>
                </div>
                <div class="right">
                    <div class="transaction">
                        <div class="title">
                            <h5>近期交易紀錄</h5>
                        </div>
                        <transaction></transaction>
    
                    </div>
                </div>
    
    
            </div>
        </div>
    </div>
</template>

<script>
import headerbar from '../components/Header'
import transaction from '../components/transaction'
export default {
    data() {
        return {

        }
    },
    components: {
        headerbar,
        transaction
    }
}
</script>

<style lang="scss" scoped>
.account {
    height: 550px; // border: solid 1px;
    margin: auto; // margin-top: 20px;
    width: 1200px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    margin-top: 30px;
    .namewallet {
        // border: solid 1px;
        padding-top: 30px; // padding-left: 100px;
        padding-bottom: 10px;
        width: 90%;
        border-bottom: solid 1px #707070;
        margin: auto;
        span {
            font-family: Arial;
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 0.95;
            letter-spacing: normal;
            text-align: center;
            color: #7e7e7e;
        }
    }
    .walletcontent {
        height: 420px;
        width: 90%;
        border-radius: 11px;
        margin: auto;
        margin-top: 20px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ededed;
        display: flex;
        .left {
            // border: solid 1px;
            width: 50%;
        }
        .right {
            // border: solid 1px;
            width: 50%;
            .transaction {
                width: 500px;
                height: 340px;
                border-radius: 3px;
                background-color: #ffffff;
                margin: auto;
                margin-top: 50px;
                border-bottom: 4px solid #a6b6ae;
                h5 {
                    font-family: HelveticaNeue;
                    font-size: 19px;
                    font-weight: 300;
                    font-stretch: normal;
                    font-style: normal;
                    letter-spacing: normal;
                    text-align: center;
                    color: #7e7e7e;
                    padding-top: 20px;
                    // border: solid 1px;
                }
            }
        }
        .inprocess {
            width: 450px;
            height: 270px;
            background-color: #ffffff; // border: solid 1px;
            border-bottom: 4px solid #a6b6ae;
            margin: auto;
            margin-top: 20px;
            border-radius: 3px;
            .inprocesswrap {
                // border: solid 1px;
                display: flex;
                padding-top: 10px;
                padding-left: 35px;
                span {
                    margin-right: 30px;
                    font-family: HelveticaNeue;
                    font-size: 18px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 0.91;
                    letter-spacing: normal;
                    text-align: center;
                    color: #7e7e7e;
                }
            }
        }
        .balancestitle {
            // border: solid 1px;
            // padding-left: 50px;
            width: 450px;
            margin: auto;
            padding-top: 20px; // border: solid 1px;
            font-family: Arial;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 0.96;
            letter-spacing: normal; // text-align: center;
            color: #7e7e7e;
        }
        .wrap {
            display: flex;
            align-items: center;
            justify-content: space-between; // border: solid 1px;
            width: 450px;
            margin: auto;
            margin-top: 20px;
            .balances {
                font-family: HelveticaNeue;
                font-size: 28px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 0.5;
                letter-spacing: normal; // text-align: center;
                color: #666b46;
                margin-right: 20px;
            }
            button {
                height: 30.6px;
                width: 200px;
                border-radius: 5px;
                background-color: #a6b6ae;
                font-family: HelveticaNeue;
                font-size: 11px;
                font-weight: 500;
                font-stretch: normal;
                font-style: normal;
                line-height: 0.55;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;
                border: none;
            }
        }
    }
}

.mbtitle {
    margin-left: 100px;
    margin-top: 30px;
    span {
        font-family: HelveticaNeue;
        font-size: 33px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
        letter-spacing: normal;
        text-align: left;
        color: #666b46;
    }
}
</style>