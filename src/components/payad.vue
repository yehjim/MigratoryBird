<template>
    <div class="payad">
        <div class="about">
            <span>Post Pay</span>
        </div>
        <div class="postprice">
            <span>刊登金額 NT$ 180</span>
        </div>
        <div class="posttype">
            <dropdown loc="超級刊登"></dropdown>
            <span>NTD:$1200</span>
        </div>
        <div class="paywrap">
            <payment></payment>
        </div>
        <div class="total">
            <span>付款金額 NTD$ 1380</span>
        </div>
    </div>
</template>

<script>
import payment from '../components/PaymentLine'
import dropdown from '../components/itemlocdrop'
export default {
    components: {
        payment,
        dropdown
    }
}
</script>

<style lang="scss" scoped>
.payad {
    height: 610px;
    // border: solid 1px;
    .about {
        display: flex;
        flex-direction: column;
        margin-left: 100px;
        margin-top: 50px;
        textarea {
            width: 500px;
            height: 200px;
            border-radius: 10px;
            background-color: #ededed;
            border: none;
            margin-top: 10px;
        }
        span {
            height: 33px;
            font-family: Arial;
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.13;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
        }
    }
    .posttype {
        margin: auto;
        width: 60%;
        margin-top: 20px;
        display: flex;
        align-items: center;
        span {
            margin-left: 20px;
            font-family: Arial;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.16;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
        }
    }
    .postprice {
        margin: auto; // margin-left: 0;
        width: 60%; // height: 20px;
        border-radius: 4px;
        background-color: #ededed;
        border: none;
        margin-top: 10px;
        padding: 10px;
        span {
            height: 33px;
            font-family: Arial;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.13;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
        }
    }
    .total {
        // border: solid 1px;
        margin-top: 100px;
        display: flex;
        justify-content: flex-end;
        padding-right: 100px;
        span {
            border-bottom: solid 1px #666b46;
            font-family: Arial;
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.15;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
        }
    }
}

.paywrap {
    width: 62%;
    margin: auto;
}
</style>