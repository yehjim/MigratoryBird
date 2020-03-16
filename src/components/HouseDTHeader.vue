<template>
  <div class="container">
    <div class="row navBar" > 
      <div class="col-2">
        <router-link to="/"><span>Migratory Bird</span></router-link>
      </div>
      <div class="col-5"></div>
      <div class="col-1">
        <span class="find">Find</span>
      </div>
      <div class="col-1">
        <span>Need</span>
      </div>
      <div class="col-1">
        <span>Comunity</span>
      </div>
      <div class="col-1">
        <span>About</span>
      </div>
      <div class="col-1">
        <div class="profilepic" @click="show_hiddenNav"></div>
      </div>
    </div>
    <div class="hidden_nav" v-show="isShow_hiddenNav">
      <a href="http://" v-on:click="show_hiddenNav">Profile</a> <br />
      <a href="http://">My Nest</a> <br />
      <a href="http://">Like</a> <br />
      <a href="http://">LFR</a> <br />
      <a href="http://">In Box</a> <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseDTHeaderer",

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
$font_basic_size: 10px;
$color_white: #ffffff;
$color_black: #000;
$color_grey: #848484;
$color_darkWhite: #e8e8e8;
$color_darkBrown: #75572e;
$color_darkGreen: #666b46;
$color_tagColor: #a6b6ae;

.navBar {
  @include size($w: auto, $h: 50px);
  overflow: hidden;
  position: relative;
  z-index: 1;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    .profilepic {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      background-color: $color_grey;
      cursor: pointer;
      position: relative;
      z-index: 2;
    }
    .find {
      font-size: $font_basic_size * 2;
    }
  }
  span {
    color: $color_black;
  }
}
.hidden_nav {
  @include size($w: 100px, $h: auto);
  position: absolute;
  z-index: 1;
  background-color: $color_darkWhite;
  border: 1px solid $color_darkGreen;
  border-radius: 10px;
  text-align: left;
  padding: 10px 10px 10px 17px;
  left: 100%;
  transform: translateX(-150%);
  a {
    color: $color_grey;
  }
}
</style>
