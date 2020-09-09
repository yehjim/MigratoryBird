<template>
    <div class="itemwrap">
        <img src="../assets/media/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg" alt="">
        <router-link :to="{name:'HouseDetail',params:{id:id}}">
            <div class="wrap">
                <div class="city">
                    <span>{{loc}}</span>
                </div>
                <div class="area">
                    <span>{{area}}</span>
                </div>
                <div class="price">
                    <span>
                       {{price}}
                      </span>
                </div>
                <router-link :to="{name:'Edit',params:{id:id}}">
                    <div class="editbtn" v-if="hasedit" @click="edit">
                        <span>編輯</span>
                    </div>
                    <div v-else>
                        <span></span>
                    </div>
                </router-link>
                <!--     <hr> -->
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ['loc', 'area', 'price', 'gender', 'hasedit', 'id'],
    data() {
        return {}
    },
    methods:{
        edit(){
            this.$store.dispatch('GETEDITDATA');
        }
    },
    name: 'Item'
}
</script>

<style lang="scss" scoped>
.itemwrap {
    /*   border: solid 1px; */
    width: 278px;
    height: 207px;
    border-radius: 13px; // background-image: url('../assets/media/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg');
    // filter: brightness(0.5);
    background-size: cover;
    /*   filter: brightness(0.5); */
    box-sizing: border-box;
    img {
        width: 278px;
        height: 207px;
        border-radius: 13px;
        position: absolute;
        filter: brightness(0.6);
        z-index: -1;
    }
}
.wrap{
    // border: solid 1px;
    width: 278px;
}
// .wrap {
//     /*   border:solid 1px; */
//     width: 280px;
//     height: 210px;
//     border-radius: 13px;
//     // background-color:black;
//     // opacity: 0.4;
// }
.city,
.area,
.price {
    // border: solid 1px;
    // border: solid 1px;
    padding-left: 30px;
    color: white;
    font-size: 20px; // padding-left: 45px;
    padding-top: 10px;
    // padding-right: 70px;
}

.city {
    padding-top: 30px;
}
.price{
    font-size: 30px;
    // border: solid 1px;
}

.editbtn {
    // border: solid 1px;
    // float: right;
    width: 60px;
    margin-left: 200px;
    border-bottom: 1px solid white;
    // z-index: 1;
    span {
        color: white;
    }
}
</style>