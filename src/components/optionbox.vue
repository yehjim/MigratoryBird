<template>
    <span class="optionbox">
        <span>{{itemnam}}</span>
    </span>
</template>

<script>
export default {
    props: ['itemnam']

}
</script>

<style lang="scss" scoped>
.optionbox {
    // display: inline;
    // border: solid 1px;
    width: auto;
    height: 35px;
    border-radius: 4px;
    background-color: #ededed;
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
        color: #666b46;
    }
}

.optionbox:hover {
    background-color: #a6b6ae;
    span {
        color: white;
    }
}
</style>