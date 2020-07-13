<template>
    <div>
        <h4 class="title">contract</h4>
        <div class="contract">
            <p class="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus officiis quidem ullam atque et, eius aperiam, architecto sunt veniam itaque! Aut quia accusantium quibusdam porro facilis officia nihil ipsa.
            </p>
            <div class="agreewrap">
                <input type="radio">
                <span>Agree</span>
            </div>
            
    
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        next(){
            this.$emit('nexthandler')
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    // border: solid 1px;
    font-size: 50px;
    text-align: center;
    margin-top: 20px;
    height: 70px;
}

.contract {
    margin-top: 20px;
    // border: solid 1px;
    height: 550px;
    .content {
        border: solid 1px;
        width: 75%;
        height: 500px;
        margin: auto;
        padding: 50px;
        border-radius: 10px;
    }
    .agreewrap {
        width: 75%; // height: 500px;
        margin: auto;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center; // padding: 50px;
        span {
            font-size: 20px;
        }
        input {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }
    
}
</style>