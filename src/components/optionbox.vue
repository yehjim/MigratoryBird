<template>
    <span class="optionbox" :style="{backgroundColor:bgc}">
        <span :style="{color:fontcolor}">{{itemnam}}</span>
        <div class="delebtn" @click="deleitem"><span>X</span></div>
    </span>
</template>

<script>
export default {
    props: ['itemnam'],
    data() {
        return {
            bgc: '#ededed',
            fontcolor: '#666b46',
            isclick: false
        }
    },
    methods: {
        deleitem(){
            this.$emit('delefurhandler', this.itemnam)
        }
    }
}
</script>

<style lang="scss" scoped>
.optionbox {
    width: auto;
    height: 35px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    span {
        font-family: Arial;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: normal;
        text-align: center;
    }
    .delebtn{
        border: solid 1px;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        position: absolute;
        left: 65px;
        top: -10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #a6b6ae;
        color: white;
        span{
            font-size: 10px;
        }
    }
}

.optionbox:hover {
    background-color: #a6b6ae;
    span {
        color: white;
    }
}
</style>