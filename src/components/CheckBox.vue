<template>
    <div class="checkbox">
        <label for="">{{labelname}}</label>
        <input type="checkbox">
    </div>
</template>

<script>
export default {
    props:['labelname'],
    name: 'CheckBox'

}
</script>

<style lang="scss">
.checkbox {
    display: flex;
    width: 100px;
    margin-right: 30px;
    input {
        width: 18px;
        /*Desired width*/
        height: 18px;
        margin-left: 20px;
        margin: auto;
    }
    label{
        font-size: 15px;
        // border: solid 1px;
        margin: auto;
    }
}
</style>