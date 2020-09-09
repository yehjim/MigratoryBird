<template>
    <div class="google-map" id="map">
        <GmapMap :center="{lat:lat, lng:lng}" :zoom="18" map-type-id="terrain" :style="{width: w ,height: h}">
            <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false" @click="center=m.position">
    
            </GmapMarker>
    
        </GmapMap>
    </div>
</template>

<script>
// import google from 'google'
import axios from 'axios'
export default {
    props: ['city', 'area', 'add','w','h'],
    data() {
        return {
            map: null,
            // 預設經緯度在信義區附近
            lat: '',
            lng: '',
            markers: [{
                    position: {

                        lat: '',
                        lng: '',
                    }
                }

            ],
            City:this.city,
            Area:this.area,
            Add:this.add,
            address: ''

        }

    },
    mounted() {
        // this.initMap();
        this.geolocation();

    },
    methods: {
        geolocation: function() {
            let add = this.city + this.area + this.add;
            axios({
                    method: 'get',
                    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=AIzaSyCmPMc8NK4yokjDWOCoLXMgJ6UdhWIJam0`
                })
                .then((res) => {
                    this.lat = res.data.results[0].geometry.location.lat;
                    this.lng = res.data.results[0].geometry.location.lng
                    this.markers[0].position.lat = res.data.results[0].geometry.location.lat;
                    this.markers[0].position.lng = res.data.results[0].geometry.location.lng;
                    console.log(res.data.results[0])
                })
                .catch((err) => { console.error(err) })
            // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${add}&key=AIzaSyCmPMc8NK4yokjDWOCoLXMgJ6UdhWIJam0`)
            //     .then((res) => {
            //         this.lat = res.data.results[0].geometry.location.lat;
            //         this.lng = res.data.results[0].geometry.location.lng
            //         this.markers[0].position.lat = res.data.results[0].geometry.location.lat;
            //         this.markers[0].position.lng = res.data.results[0].geometry.location.lng;
            //         console.log(res.data.results[0])
            //         // this.itemdata = res.dat
            //         // this.housedetail = res.data
            //         // // this.houseid = res.data.houseid
            //         // console.log(this.housedetail, "123")
            //     }).catch((err) => {
            //         console.log(err)

            //     })
        }
        // initMap() {
        //     // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
        //     this.map = new google.maps.Map(document.getElementById("map"), {
        //         // 設定地圖的中心點經緯度位置
        //         center: { lat: this.lat, lng: this.lng },
        //         // 設定地圖縮放比例 0-20
        //         zoom: 15,
        //         // 限制使用者能縮放地圖的最大比例
        //         maxZoom: 20,
        //         // 限制使用者能縮放地圖的最小比例
        //         minZoom: 3,
        //         // 設定是否呈現右下角街景小人
        //         streetViewControl: false,
        //         // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        //         mapTypeControl: false
        //     });
        // },

    }
}
</script>


<style lang="scss" scoped>
.google-ma {
    border: solid 1px;
    height: 300px;
    width: 100%;
}
</style>