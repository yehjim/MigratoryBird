<template>
    <div class="postitem">
        <div class="about">
            <span>最後一步</span>
        </div>
        <div class="itemwrap" v-if="!editmode">
            <item :loc="loc" :area="area" :price="price"></item>
        </div>
        <div class="itemwrap" v-else>
            <item :loc="locprops" :area="areaprops" :price="price"></item>
        </div>
    
    </div>
</template>

<script>
import item from '../components/Item'
export default {
    props:['editmode','locprops','areaprops','priceprops'],
    computed:{
        loc(){
           return this.$store.state.posthousedata.city
        },
        area(){
            return this.$store.state.posthousedata.area
        },
        price(){
            return this.$store.state.posthousedata.monthly
        }
    },
    components: {
        item
    }
}
</script>

<style lang="scss" scoped>
.postitem {
    height: 610px;
    .itemwrap {
        width: 50%; // border: solid 1px;
        height: 300px;
        margin: auto;
        margin-top: 100px;
    }
    .about {
        display: flex;
        flex-direction: column;
        margin-left: 100px;
        margin-top: 50px;
        textarea {
            width: 500px;
            height: 200px;
            border-radius: 10px;
            background-color: #ededed;
            border: none;
            margin-top: 10px;
        }
        span {
            height: 33px;
            font-family: Arial;
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.13;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
        }
    }
}
</style>