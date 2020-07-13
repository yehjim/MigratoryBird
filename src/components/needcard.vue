<template>
    <div>
        <needcardmodal :style="{display:display}" @closehandler="close" :needid=needid></needcardmodal>
        <div class="needcard" @click="showdetail">
            <div class="left">
                <div class="mblogo"></div>
            </div>
            <div class="right">
                <div class="title">
                    <span class="name">{{name}}</span>
                    <span class="coutry">{{coutry}}</span>
                </div>
                <div class="add">
                    <span>{{add}}</span>
                </div>
                <div class="date">
                    <span class="checkin">{{checkin}}</span>
                    <span class="checkout">{{checkout}}</span>
                </div>
                <div class="price">
                    <span>NTD:${{price}}</span>
                </div>
                <div class="contactbtn">
                    <span>聯絡</span>
                </div>
    
            </div>
    
        </div>
    </div>
</template>

<script>
import needcardmodal from '../components/needcardmodal'
export default {
    props: ['name', 'coutry', 'add', 'checkin', 'checkout', 'price','needid'],
    data() {
        return {
            display:'none'
        }
    },
    components: {
        needcardmodal
    },
    methods: {
        showdetail() {
            this.display = 'block'
        },
        close(){
            this.display = 'none'
        }
    }
}
</script>

<style lang="scss" scoped>
.needcard {
    width: 450px;
    border-radius: 5px;
    display: flex;
    margin: 20px;
    height: 250px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .left {
        width: 40%;
        height: 150px; // border: solid 1px;
        margin: auto;
        margin-left: 20px;
        .mblogo {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-color: #C1D0C8;
        }
    }
    .right {
        width: 60%;
        margin: auto;
        .title {
            // border: solid 1px;
            margin-bottom: 10px;
            margin-left: 10px;
            .name {
                font-family: Arial;
                font-size: 20px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.15;
                letter-spacing: normal;
                text-align: left;
                color: #7e7e7e;
            }
            .coutry {
                font-family: Arial;
                font-size: 17px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.18;
                letter-spacing: normal;
                text-align: left;
                color: #7e7e7e;
                margin-left: 10px;
            }
        }
        .add {
            // border: solid 1px;
            margin-left: 10px;
            margin-bottom: 10px;
            span {
                font-family: Arial;
                font-size: 15px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.17;
                letter-spacing: normal;
                text-align: left;
                color: #7e7e7e;
            }
        }
        .date {
            // border: solid 1px;
            margin-left: 10px;
            margin-bottom: 10px;
            font-family: HelveticaNeue;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.22;
            letter-spacing: normal;
            text-align: left;
            color: #7e7e7e;
            display: flex;
            justify-content: space-between;
            .checkout {
                margin-right: 40px;
            }
        }
        .price {
            // border: solid 1px;
            margin-left: 10px;
            font-family: Arial;
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.17;
            letter-spacing: normal;
            text-align: left;
            color: #7e7e7e;
        }
        .contactbtn {
            border-radius: 2px;
            background-color: #c1d0c8;
            width: 60px;
            color: white;
            display: flex;
            justify-content: center;
            float: right;
            margin-right: 10px;
        }
    }
}
</style>