<template>
    <div class="cardwrap">
        <div class="cardcontent">
            <div class="cardicon">
                <img src="../assets/media/visa.svg" alt="">
            </div>
            <div class="cardnumber">
                <span>{{cardnumer(card_number)}}</span>
            </div>
        </div>
        <div class="deletecard" @click="deletecard">X</div>
    </div>
</template>

<script>
export default {
    props: ['cardnumber', 'cardid'],
    data() {
        return {

            card_number: this.cardid
        }
    },
    methods: {
        deletecard() {
            this.$emit('deletecardhandler', this.card_number)
        },
        cardnumer(number){
            let num = ''
            for(let i = 0 ; i<number.length ;i+=4){
                let j = 4+i;
                num += number.slice(i,j)+' '
            }
            return num;

            
        }
    },
}
</script>

<style lang="scss" scoped>
.cardwrap {
    // border: solid 1px;
    position: relative;
    .deletecard {
        // border: solid 1px;
        height: 30px;
        width: 30px;
        position: relative;
        border-radius: 50%;
        top: -135px;
        left: 180px;
        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #707070;
        font-size: 13px;
        cursor: pointer;
    }
    .cardcontent {
        // border: solid 1px;
        width: 200px;
        height: 120px;
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
}
</style>