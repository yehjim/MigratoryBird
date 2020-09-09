<template>
    <div class="account">
        <div class="editwrap">
            <span>MB Wallet</span>
        </div>
        <router-link to="/mbwalletpage">
            <div class="mbwallet">
                <div class="income">
                    <div class="incomelogo">
                        <span>Income</span>
                    </div>
                    <div class="incomebalance">
                        <span>NT$ 35000</span>
                    </div>
                </div>
                <div class="unpaid">
                    <div class="unpaidlogo">
                        <span>Unpaid</span>
                    </div>
                    <div class="unpaidbalance">
                        <span>-NT$ 4000</span>
                    </div>
                </div>
    
            </div>
        </router-link>
    
    
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        openwallet() {

        }
    }
}
</script>

<style lang="scss" scoped>
.account {
    height: 250px; // border: solid 1px;
    width: 700px;
    margin-top: 40px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .editwrap {
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
    .mbwallet {
        width: 350px;
        height: 150px;
        border-radius: 10px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ededed;
        transition: 0.2s;
        margin: auto;
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
        .income,
        .unpaid {
            margin-top: 50px;
            display: flex;
            flex-direction: column; // justify-content: center;
            // border: solid 1px;
            align-items: center;
            .incomelogo {
                margin-bottom: 10px;
                width: 120px;
                height: 25px;
                border-radius: 20px;
                background-color: #48aa00;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .unpaidlogo {
                margin-bottom: 10px;
                width: 120px;
                height: 25px;
                border-radius: 20px;
                background-color: #c31f1f;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .incomebalance {
                width: 100x;
                height: 25px;
                font-family: Arial;
                font-size: 20px;
                font-weight: bold;
                color: #48aa00; // border: solid 1px;
            }
            .unpaidbalance {
                width: 100x;
                height: 25px;
                font-family: Arial;
                font-size: 20px;
                font-weight: bold;
                color: #c31f1f;
            }
        }
    }
    .mbwallet:hover {
        transform: scale(1.1);
    }
}
</style>