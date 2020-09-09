<template>
    <div class="onrentitem">
        <item></item>
        <div class="itemdescribe">
            <div class="wrap">
                <h5 class="title">Check in</h5>
                <h5 class="content">2019/12/20</h5>
            </div>
            <div class="wrap">
                <h5 class="title">合約到期日</h5>
                <h5 class="content">2020/5/30</h5>
            </div>
            <div class="wrap">
                <h5 class="title">Address</h5>
                <h5 class="content">Taipei zoghshan</h5>
            </div>
            <div class="wrap">
                <h5 class="title">Rent status</h5>
                <div class="unpaid">
                    <h5 class="content rent">7月租金尚未支付</h5>
                    <button>點我催繳</button>
                </div>
    
            </div>
            <div class="wrap">
                <h5 class="title">入住人數/可入住人數</h5>
                <h5 class="content">2/4</h5>
            </div>
    
    
        </div>
    </div>
</template>

<script>
import item from '../components/ProfileItem'
export default {
    data() {
        return {

        }
    },
    components: {
        item
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-family: Arial;
    font-size: 16px;
    color: #7e7e7e;
    width: 90%;
    margin-left: 20px; // padding-left: 30px;
}

.content {
    font-size: 14px;
    color: #000000; // padding-left: 30px;
    // border: solid 1px;
    border-bottom: solid 2px #707070;
    width: 90%;
    margin-left: 20px;
}

.rent {
    color: red;
}

.onrentitem {
    display: flex;
    margin-top: 30px;
    width: 95%;
    .itemdescribe {
        display: flex;
        flex-wrap: wrap;
        width: 400px; 
        // border: solid 1px;
        margin-left: 30px;
        height: 220px;
    }
}

.wrap {
    width: 50%; 
    height: 50px;
    // border: solid 1px;
    button {
        width: 100px;
        height: 20px;
        border-radius: 10px;
        background-color: #c31f1f;
        font-family: Arial;
        font-size: 12px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.8;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
    }
    .unpaid {
        display: flex;
    }
}
</style>