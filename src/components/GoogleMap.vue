<template>
    <div class="GoogleMap">
        <div id="map"></div>
    </div>
</template>

<script>
export default {
    name: 'GoogleMap',

    // data(){
    //     return{
    //         address: '士林區忠誠路一段171巷4號5樓',

    //     }
    // },
    // mounted(){
    //     this.initMap();

    // },
    // methods: {
    //     initMap() {
    //         geocoder = new google.maps.Geocoder();
    //         map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 17});
    //         // var address = "士林區忠誠路一段171巷4號5樓";
    //         geocoder.geocode({ address: address }, function(results, status) {
    //         if (status == "OK") {
    //             //目的地置中
    //             map.setCenter(results[0].geometry.location);
    //             //放marker
    //             var marker = new google.maps.Marker({
    //             map: map,
    //             position: results[0].geometry.location
    //             });
    //         } else {
    //             console.log(status);
    //         }
    //         });
    //     },
    // }
}
</script>


<style lang="scss" scoped>
@mixin size($w, $h) {
    width: $w;
    height: $h;
}

$color_darkWhite: #EDEDED;
$color_white: #ffffff;
#map {
    @include size($w: 850px, $h: 200px);
    border: 1px solid #000;
}
</style>