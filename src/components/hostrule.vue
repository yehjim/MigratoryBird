<template>
    <div class="hostrule">
    
        <div class="hostitle">
            <span>Host rule</span>
        </div>
        <div class="describe">
            <span>請詳閱後確認</span>
        </div>
        <div class="rule">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint aspernatur eos! Animi numquam facilis voluptat ibus! Quod corporis unde quaerat quia pariatur aspernatur et. Ab consequatur quo voluptas odio vitae Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Impedit quibusdam aspernatur doloremque adipisci itaque quidem, nulla, officia rem ipsum quasi architecto cum doloribus ea dicta! Cumque adipisci reiciendis quaerat doloribus.
                lorem
            </p>
        </div>
        <div>
            <div class="agreecheck">
                <input type="checkbox" name="" id="">
                <label for="">I Agree</label>
            </div>
            <div class="nextbtn" style="border:solid 1px;" @click="next">
                <span>NEXT</span>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        next() {
            this.$emit('nexthandler')
        }
    }
}
</script>

<style lang="scss" scoped>
.hostrule {
    // padding-top: 50px;
    padding-top: 30px;
    .hostitle {
        font-size: 30px;
        color: #a6b6ae;

    }
    .rule {
        border-radius: 4px;
        border: solid 1px #7e7e7e;
        height: 300px;
        overflow: scroll;
        padding: 50px;
        margin-top: 10px;
    }
    .describe {
        font-size: 15px;
    }
    .nextbtn {
        width: 100px;
        height: 35px;
        border-radius: 4px;
        border: solid 2px #a6b6ae;
        background-color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        float: right;
    }
    .agreecheck {
        margin-top: 10px;
        label {
            height: 38px;
            font-family: HelveticaNeue;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.18;
            letter-spacing: normal;
            text-align: left;
            color: #6a6a6a;
            margin-left: 20px;
        }
        input {
            border-radius: 4px;
            width: 20px;
            height: 20px;
            border: solid 3px #a6b6ae;
        }
    }
}
</style>