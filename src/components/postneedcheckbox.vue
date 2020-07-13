<template>
    <div>
        <label for="">{{labelname}}</label>
        <input type="checkbox" name="" id=""  @change="checkedtype" v-model="checked">
    </div>
</template>

<script>
export default {
    props:['labelname'],
    data() {
        return {
            checked:false
        }
    },
    methods:{
        checkedtype(){
            this.$emit('checkedhandler',this.labelname,this.checked)
        }
    }
}
</script>

<style lang="scss" scoped>
label {
    font-family: Arial;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.14;
    letter-spacing: normal;
    text-align: left;
    color: #7e7e7e;
    margin-right: 10px;
}
input{
    margin-right: 5px;
}
</style>