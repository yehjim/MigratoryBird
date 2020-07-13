<template>
    <div class="container">
        <div class="row searchbar">
            <div class="loc">
                <span>Location</span>
                <br>
                <input type="text" placeholder="Taipei" v-model="loc" >
            </div>
            <div class="date">
                <span>Date</span>
                <div>
                    <b-form-datepicker id="datepicker-sm" size="sm"></b-form-datepicker>
                </div>
            </div>
            <div class="staywrap">
                <Staydropdown></Staydropdown>
            </div>
            <div class="searchbtn" @click="searchneed">
                <span>SEARCH</span>
            </div>
        </div>
    </div>
</template>

<script>
import Staydropdown from '../components/Staydropdown'
export default {
    data() {
        return {
            loc:''
        }
    },
    components:{
       Staydropdown 
    },
    methods:{
        searchneed(){
            this.$emit('searchinputhandler',this.loc)
        }
    }
}
</script>

<style lang="scss" scoped>
.searchbar {
    margin-top: 70px;
    height: 65px;
    border-radius: 10px;
    border: solid 0.5px #A6B6AE;
    span {
        color: #A6B6AE;
    }
    .loc {
        width: 25%;
        border-right: solid 0.5px #7E7E7E;
        padding-top: 5px;
        padding-left: 40px;
        input {
            border: none;
            font-size: 13px;
            width: 90%;
        }
    }
    .date {
        width: 35%;
        border-right: solid 0.5px #7E7E7E;
        padding-top: 5px;
        padding-left: 30px;
        padding-right: 30px;
        .datepicker{
            border: solid 1px;
            height: 20px;
            // height: 50px;
        }
    }
    .staywrap {
        width: 25%; // padding-top: 5px;
        // padding-left: 30px;
        input {
            width: 85%;
            height: 20px;
            border: none;
            .gj-icon,
            .gj-icon,
            .gj-icon,
            .gj-icon,
            .gj-icon,
            .gj-icon {
                display: none;
            }
        }
    }
    .searchbtn {
        width: 15%;
        background-color: #A6B6AE;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        span {
            color: white;
            font-size: 17px;
        }
    }
}
</style>