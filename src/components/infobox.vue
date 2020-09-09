<template>
    <div class="infobox">
        <router-link :to="{name:'HouseDetail',params:{id:houseid}}">
            <div class="infomessage">{{info}}</div>
        </router-link>
        <div class="infotime">{{date}}</div>
    </div>
</template>

<script>
export default {
    props: ['info', 'date','houseid']

}
</script>

<style lang="scss" scoped>
.infobox {
    border-bottom: solid 0.5px #7e7e7e;
    // width: 100%;
    margin: auto;
    height: 80px;
    display: flex; 
    width: 95%;
    // justify-content: space-around;
    align-items: center;
   
    
}

.infomessage {
    color: #7e7e7e;
    // border: solid 1px;
    
    width: 300px;
    font-size: 15px;
    padding-left: 10px;
    // border: solid 1px;
    // margin-left: 10px;
}

.infotime {
    // border: solid 1px;
    // position: relative;
    // position: absolute;
    // top: 20px;
    // border: solid 1px;
    // left: 0px;
    // width: 10%;
    // width: 30%;
    // text-align: left;
    width: 100px;
    padding-right: 5px;
    text-align: right;
    font-size: 13px;
    color: #7e7e7e;
    // border: solid 1px;
}
</style>