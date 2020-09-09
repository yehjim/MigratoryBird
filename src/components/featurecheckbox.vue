<template>
    <div>
        
        <div class="wrap" v-if="editmode">
            <label for="" class="title">1產權登記</label>
            <label for="">是</label>
            <input type="radio" class="property" :value="true" v-model="propslease" @change="registration">
            <label for="">否</label>
            <input type="radio" class="property" :value="false" v-model="propslease" @change="registration">
        </div>
        <div class="wrap" v-else>
            <label for="" class="title">產權登記</label>
            <label for="">是</label>
            <input type="radio" class="property" :value="true" v-model="test" @change="registration">
            <label for="">否</label>
            <input type="radio" class="property" :value="false" v-model="test" @change="registration">
        </div>

        <div class="wrap" v-if="editmode">
            <label for="" class="title">1是否接受議價</label>
            <label for="">是</label>
            <input type="radio" v-model="propsbargin" :value="true" @change="bargain">
            <label for="">否</label>
            <input type="radio" v-model="propsbargin" :value="false" @change="bargain">
        </div>
         <div class="wrap" v-else>
            <label for="" class="title">是否接受議價</label>
            <label for="">是</label>
            <input type="radio" v-model="test1" :value="true" @change="bargain">
            <label for="">否</label>
            <input type="radio" v-model="test1" :value="false" @change="bargain">
        </div>

        <div class="wrap" v-if="editmode">
            <label for="" class="title">1租金包含</label>
            <div class="fee" >
                <label for="">電費</label>
                <input type="checkbox" class="property" value="電費" @change="emitfee" v-model="propsfee">
                <label for="">水費</label>
                <input type="checkbox" class="property" value="水費" @change="emitfee" v-model="propsfee">
                <label for="">網路費</label>
                <input type="checkbox" class="property" value="網路費" @change="emitfee" v-model="propsfee">
                <label for="">管理費</label>
                <input type="checkbox" class="property" value="管理費" @change="emitfee" v-model="propsfee">
            </div>
    
        </div>
        <div class="wrap" v-else>
            <label for="" class="title">租金包含</label>
            <div class="fee" >
                <label for="">電費</label>
                <input type="checkbox" class="property" value="電費" @change="emitfee" v-model="fee">
                <label for="">水費</label>
                <input type="checkbox" class="property" value="水費" @change="emitfee" v-model="fee">
                <label for="">網路費</label>
                <input type="checkbox" class="property" value="網路費" @change="emitfee" v-model="fee">
                <label for="">管理費</label>
                <input type="checkbox" class="property" value="管理費" @change="emitfee" v-model="fee">
            </div>
    
        </div>
    
    
    </div>
</template>

<script>
export default {
    props:['feeprops','bargin','lease','editmode'],
    mounted(){
    },
    data() {
        return {
            fee:[],
            test: false,
            test1: false,
            propsbargin:this.bargin,
            propslease: this.lease,
            propsfee: this.feeprops
            
        }
    },
    methods: {
        registration() {
            if(this.editmode == true){
                this.$emit('registrationhandler', this.propslease)
            }else{
                 this.$emit('registrationhandler', this.test)
            }
            

        },
        bargain(){
            if(this.editmode == true){
                this.$emit('bargainhandler', this.propsbargin)
            }else{
                 this.$emit('bargainhandler', this.test1)
            }
            
        },
        emitfee(){
            if(this.editmode == true){
                this.$emit('feehandler', this.propsfee)
            }else{
                this.$emit('feehandler', this.fee)
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    // border: solid 1px;
    width: 100px;
}

.wrap {
    // border: solid 1px;
    width: 100%;
    display: flex; // align-items: center;
    margin-top: 10px;
    label {
        margin-right: 20px;
        margin-left: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.15;
        letter-spacing: normal;
        text-align: left;
        color: #666b46;
    }
    .fee {
        display: flex;
        flex-wrap: wrap; // border: solid 1px;
        width: 230px;
        justify-content: space-evenly;
    }
    .property {
        width: 15px;
        height: 15px;
        border-radius: 10px;
        background-color: #666b46;
    }
}
</style>