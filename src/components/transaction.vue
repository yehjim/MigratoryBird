<template>
    <div class="transactioncard">
        <div class="icon"></div>
        <div class="transactiondescribe">
            <span>台新國際銀行 ****12345</span>
            <span>2020/04/23  下午12:40</span>
        </div>
        <div class="transactionamout">
            <span>+ NTD 12,500</span>
        </div>
    
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },


}
</script>

<style lang="scss" scoped>
.transactioncard {
    display: flex;   
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    // border: solid 1px;
    height: 50px;
    .icon {
        width: 40px;
        height: 40px;
        background-color: #a6b6ae;
        border-radius: 5px;
    }
    .transactiondescribe {
        display: flex;
        flex-direction: column;
        height: 40px;
        span {
            font-family: HelveticaNeue;
            font-size: 10px;
            font-weight: 300;
            letter-spacing: normal;
            color: #7e7e7e;
        }
    }
    .transactionamout {
         height: 40px;
        font-family: HelveticaNeue;
        font-size: 12px;
        font-weight: 300;
        color: #7e7e7e;
    }
}
</style>