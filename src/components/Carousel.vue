<template>
    <div>
        <b-carousel id="carousel-no-animation" class="cr" no-animation>
            <b-carousel-slide class="pic1" img-src="https://twstay.com/management/img/MYC200001/indexH/indexH1.jpg"></b-carousel-slide>
            <!-- <b-carousel-slide img-src=""></b-carousel-slide>
                    <b-carousel-slide img-src=""></b-carousel-slide>
                    <b-carousel-slide img-src=""></b-carousel-slide> -->
        </b-carousel>
    
    </div>
</template>

    <!-- <div class="container-fluid myCarousel">

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item pic1 active">
    
                </div>
                <div class="carousel-item pic2">
    
                </div>
                <div class="carousel-item pic3">
    
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
    </div> -->


<script>
// import HouseDTHeader from "../components/HouseDTHeader";
// import BriefInfoBar from '../components/BriefInfoBar';
export default {
    name: "Carousel",
    components: {
        // HouseDTHeader,
        // BriefInfoBar,
    },
    data() {
        return {
            isShow_hiddenNav: false,
            slide: 0,
            sliding: null
        };
    },
    methods: {
        show_hiddenNav: function() {
            this.isShow_hiddenNav = !this.isShow_hiddenNav;
        },
        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        }
    }
};
</script>

<style lang="scss" scoped>
@mixin size($w, $h) {
    width: $w;
    height: $h;
}

.test {
    margin-top: 86vh;
}

.cr {
    // height: 720px;
    height: 89vh; // border: solid 1px;;
    .pic1 {
        // background-image: url('../assets/media/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg');
        height: 100vh;
    }
}

* {
    padding: 0px;
}

.carousel {
    .carousel-indicators {
        // display: none !important;
        // border: solid 5px;
        z-index: -1;
    }
}

#carousel-no-animation___BV_indicators_ {
    z-index: -1;
}

// .carousel {
//     .carousel-inner {
//         .carousel-item {
//             @include size($w: 100vw, $h: 100vh);
//             background-repeat: no-repeat;
//             background-size: cover;
//             background-position: 0% 40%;
//             filter: brightness(0.75);
//         }
//         .pic1 {
//             background-image: url("../assets/media/pic_MB01.jpg");
//         }
//         .pic2 {
//             background-image: url("../assets/media/pic_MB02.jpg");
//         }
//         .pic3 {
//             background-image: url("../assets/media/pic_MB03.jpg");
//         }
//     }
//     .carousel-control-prev,
//     .carousel-control-next {
//         z-index: 0;
//     }
//     .carousel-control-prev-icon,
//     .carousel-control-next-icon {
//         // position: relative;
//         filter: invert(100%);
//     }
// }
</style>
