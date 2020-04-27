<template>
    <div class="itemwrap">
        <img src="../assets/media/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg" alt="">
        <div class="wrap">
            <div class="city">
                <span>台北</span>
            </div>
            <div class="area">
                <span>中山區</span>
            </div>
            <div class="price">
                <span>
                NTD:12500
              </span>
            </div>
            <!--     <hr> -->
        </div>
    </div>
    <!-- <div class="item">
                <div class="piccover">
            
                    <div class="itemcontent">
                        <span class="loc">{{loc}}</span>
                        <span class="area">{{area}}</span>
                        <span class="price">{{price}}</span>
                    </div>
                    <div class="bookbtn">
                        <span class="btn">BOOK</span>
                    </div>
                </div>
            </div> -->
</template>

<script>
export default {
    props: ['loc', 'area', 'price', 'gender'],
    data() {
        return {}
    },
    name: 'Item'


}
</script>

<style lang="scss" scoped>
.itemwrap {
    /*   border: solid 1px; */
    width: 400px;
    height: 300px;
    border-radius: 13px;
    // background-image: url('../assets/media/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg');
    // filter: brightness(0.5);
    background-size: cover;
    /*   filter: brightness(0.5); */
    box-sizing: border-box;
    img{
        width: 400px;
        height: 300px;
        border-radius: 13px;
        position: absolute;
        filter: brightness(0.6);
        z-index: -1;
    }
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
    /*   border: solid 1px; */
    color: white;
    font-size: 30px;
    padding-left: 45px;
    padding-top: 30px;
}

.city {
    padding-top: 30px;
}

.price {
    /*   border: solid 1px; */
    padding-left: 0;
    padding-bottom: 5px;
    /*   border-bottom: solid 3px; */
    width: 75%;
    margin: auto;
    transition-duration: 0.2s;
}

.itemwrap:hover .price {
    border-bottom: solid 3px;
}
</style>