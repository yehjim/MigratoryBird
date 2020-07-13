<template>
    <div class="checkbox">
        <input type="checkbox" @change="handleChange" v-model="checked">
        <label for="">{{labelname}}</label>   
    </div>
</template>

<script>
export default {
    props:['labelname'],
    name: 'CheckBox',
    data() {
        return {
            checked:false
        }
    },
    methods:{
        handleChange(){
            this.$emit('check',this.checked)
        }
    }

}
</script>

<style lang="scss">
.checkbox {
    display: flex;
    width: 150px;
    margin-right: 30px;
    margin-left: 30px;
    color: #7E7E7E;
    // border: solid 1px;
    // justify-content: space-between;
    input {
        width: 16px;
        /*Desired width*/
        height: 16px;
        // margin-left: 20px;
        margin-right: 10px;
        
        // margin: auto;
    }
    label{
        font-size: 15px;
        // border: solid 1px;
        // margin: auto;
    }
}
</style>