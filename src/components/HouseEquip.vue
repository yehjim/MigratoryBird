<template>
    <div class="equip">
        <span>住屋設備</span>
        <br>
        <div class="flex">
            <div v-for="(item,index) in furniture" :key="index">
                <div class="equip_icon">
                    <!-- <img v-bind:src="imgsrc" alt="" /><br> -->
                    <font-awesome-icon :icon="['fab', 'google-plus']" size="lg"/>
                    <span>{{item}}</span>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
export default {
    props: ['furniture'],
    name: 'HouseEquip',
    data() {
        return {
            imgsrc: '../assets/media/icon_bed.png'
        }
    },

}
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
}

.equip {
    // border: solid 1px;
    padding-top: 40px;
    color: #666B46;
    font-weight: bolder;
    font-size: 25px;
    .equip_icon {
        // border: solid 1px;
        width: 55px;
        margin: 20px 10px 0px;
        color: #7E7E7E;
        font-size: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            margin-top: 10px;
        }
    }
}
</style>