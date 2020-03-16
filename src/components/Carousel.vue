<template>
  <div class="container-fluid myCarousel">
    <HouseDTHeader></HouseDTHeader>

    <div id="demo" class="carousel slide" data-ride="carousel">
      <!-- The slideshow -->
      <div class="carousel-inner">
        <div class="carousel-item pic1 active"></div>
        <div class="carousel-item pic2"></div>
        <div class="carousel-item pic3"></div>
      </div>

      <!-- Left and right controls -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>

    <Brief_InfoBar></Brief_InfoBar>
  </div>
</template>

<script>
import HouseDTHeader from "../components/HouseDTHeader";
import Brief_InfoBar from '../components/Brief_InfoBar';
export default {
  name: "Carousel",
  components: {
    HouseDTHeader,
    Brief_InfoBar,
  },
  data() {
    return {
      isShow_hiddenNav: false
    };
  },
  methods: {
    show_hiddenNav: function() {
      this.isShow_hiddenNav = !this.isShow_hiddenNav;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin size($w, $h) {
  width: $w;
  height: $h;
}
*{
  padding: 0px;
}
.myCarousel{
  border: 1px solid #000;
}
.carouselHeader {
  @include size($w:auto,$h:50px);
  position: relative;
  z-index: 1;
}
.carousel {
    margin-top: -50px;
  .carousel-inner {
    .carousel-item {
      @include size($w: 100vw, $h: 100vh);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0% 40%;
    }
    .pic1 {
      background-image: url("../assets/media/pic_MB01.jpg");
    }
    .pic2 {
      background-image: url("../assets/media/pic_MB02.jpg");
    }
    .pic3 {
      background-image: url("../assets/media/pic_MB03.jpg");
    }
  }
  .carousel-control-prev, .carousel-control-next{
    z-index: 0;
  }
  .carousel-control-prev-icon,.carousel-control-next-icon {
    // position: relative;
    filter: invert(100%);
  }
}
</style>
