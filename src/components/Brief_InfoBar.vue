<template>
  <div id="Brief_InfoBar" class="container">
    <div class="row align-items-end brief_infobar">
      <div class="col-1"></div>
      <div class="col-1 city">Taipei</div>
      <div class="col-1 district">Zhongshan</div>
      <div class="col-4"></div>
      <div class="col-3 price">
        <div class="p_table">
          <table>
            <tr>
              <td class="Ta">NTD : 14500/mon</td>
            </tr>
            <tr>
              <td class="Tb">US : 500/mon</td>
            </tr>
          </table>
        </div>
        <div class="icon_Heart">
          <img src="../assets/media/icon_Heart.png" alt="save" />
        </div>
      </div>
      <div class="col-2">
        <input type="button" value="入住" class="button_book" />
        <input type="button" class="button_magnify" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brief_InfoBar",
  components: {}
};
</script>

<style lang="scss" scoped>
@mixin size($w, $h) {
  width: $w;
  height: $h;
}
$font_basic_size: 10px;
$color_white: #ffffff;
$color_grey: #848484;
$color_darkWhite: #e8e8e8;
$color_darkGreen: #666b46;
* {
  font-family: 微軟正黑體;
  position: relative;
  // margin: 0;
  // padding: 0;
  box-sizing: border-box;
}
.brief_infobar {
  @include size($w: auto, $h: 90px);
  position: relative;
//   border: 1px solid black;
  margin-top: -90px;
  .city,
  .district {
    background-color: $color_darkWhite;
    line-height: 90px;
  }
  .col-4,
  .price,
  .col-2 {
    background-color: $color_darkWhite;
    height: 90px;
  }
  .city {
    color: $color_darkGreen;
    font-size: $font_basic_size * 3;
    font-weight: bolder;
    border-radius: 10px 0px 0px 0px;
    padding-left: 10px;
  }
  .district {
    color: $color_grey;
    font-size: $font_basic_size * 1.5;
    font-weight: bold;
    padding-left: 10px;
  }
  .price {
    // border: 1px solid;
    padding-top: 20px;
    color: $color_grey;
    line-height: 30px;
    .Ta {
      // border: 1px solid
      font-size: $font_basic_size * 2.5;
    }
    .Tb {
      // border: 1px solid
      font-size: $font_basic_size * 1.5;
    }
    .icon_Heart {
      bottom: 40px;
    }
    .icon_Heart,
    img {
      @include size($w: 35px, $h: auto);
    }
    .p_table,
    .icon_Heart {
      // border: 1px solid
      display: inline-block;
    }
  }
  // .col-2{
  //     border: 1px solid;
  // }
  .button_book {
    @include size($w: 120px, $h: 30px);
    font-weight: bold;
    color: $color_white;
    background-color: $color_darkGreen;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10%;
    cursor: pointer;
  }
  .button_magnify {
    @include size($w: 40px, $h: 40px);
    background-image: url("../assets/media/icon_magnify.png");
    background-color: $color_darkWhite;
    background-repeat: no-repeat;
    border-radius: 100%;
    border-style: 3px $color_grey solid;
    background-size: 20px 20px;
    background-position: center;
    position: absolute;
    left: 100%;
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
  }
}
</style>
