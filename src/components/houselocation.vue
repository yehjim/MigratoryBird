<template>
    <div class="houseloc">
        <div class="left">
            <div class="about">
                <span>Item location</span>
                <dropdown class="drop" dropdownwidth="300px" dropcontentwidth="300px" :locdata="citydata" loc="城市" @clickcity="cityhandler" backgroundColor="#ededed"></dropdown>
                <dropdown class="drop" dropdownwidth="300px" dropcontentwidth="300px" :locdata="areadata" loc="地區" @clickcity="areahandler" backgroundColor="#ededed"></dropdown>
                <input class="loctext" type="text" placeholder="地址" v-model="locdata.add" @change="emitlocdata">
                <!-- <span>{{add}}</span> -->
            </div>
            <div class="searchbtn" @click="searchloc">
                <span>找尋地點</span>
            </div>
        </div>
        <div class="right">
            <div class="gmap">
                <GmapMap :center="{lat:lat, lng:lng}" :zoom="18" map-type-id="terrain" style="width:600px;height:400px;">
                    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="false" @click="center=m.position">
    
                    </GmapMarker>
    
                </GmapMap>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import dropdown from '../components/itemlocdrop'
export default {
    data() {
        return {
            alldata: [],
            citydata: [],
            areadata: [],
            lat: '',
            lng: '',
            markers: [{
                    position: {

                        lat: '',
                        lng: '',
                    }
                }

            ],
            locdata: {
                city: '',
                area: '',
                add: '',
            }


        }
    },
    mounted() {
        axios.get(`https://raw.githubusercontent.com/donma/TaiwanAddressCityAreaRoadChineseEnglishJSON/master/CityCountyData.json`)
            .then((res) => {
                this.alldata = res.data;

                for (let i = 0; i < res.data.length; i++) {
                    this.citydata[i] = res.data[i].CityName;
                }
                console.log(this.citydata);
            }).catch((err) => {
                console.log(err)

            })
    },
    watch: {

    },
    methods: {
        emitlocdata() {
            console.log('成功')
            this.$store.commit("setpostlocdata", this.locdata)
        },
        cityhandler(cityname) {
            this.locdata.city = cityname;
            for (let i = 0; i < this.alldata.length; i++) {
                if (cityname == this.alldata[i].CityName) {
                    // this.areadata = this.alldata[i].AreaList
                    for (let j = 0; j < this.alldata[i].AreaList.length; j++) {
                        // this.areadata[j]
                        this.$set(this.areadata, j, this.alldata[i].AreaList[j].AreaName)
                    }
                    // for(let j = 0;j<this.areadata.length;j++){
                    //     this.areadata = this.areadata[i].AreaName
                    // }
                    // this.changearea();
                    // console.log(this.areadata)

                }
            }
            this.$store.commit("setpostlocdata", this.locdata)

        },

        areahandler(val) {
            this.locdata.area = val;
            this.$store.commit("setpostlocdata", this.locdata)

        },
        searchloc() {
            let add = this.locdata.city + this.locdata.area + this.locdata.add;
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
        }
    },
    computed: {
        address() {
            return this.$store.state.posthousedata.address;
        },
        add() {
            return this.locdata.city + this.locdata.area + this.locdata.add
        }
    },

    components: {
        dropdown,
        // gmap
    }
}
</script>

<style lang="scss" scoped>
.houseloc {
    display: flex;
    .left {
        width: 45%; // border: solid 1px;
        height: 660px;
        .searchbtn {
            // border: solid 1px;
            width: 150px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 400px;
            margin-top: 50px;
            border-radius: 5px;
            background-color: #ededed;
            color: #666b46;
        }
        .about {
            display: flex;
            flex-direction: column;
            margin-left: 100px;
            margin-top: 50px;
            textarea {
                width: 500px;
                height: 200px;
                border-radius: 10px;
                background-color: #ededed;
                border: none;
                margin-top: 10px;
            }
            span {
                height: 33px;
                font-family: Arial;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.13;
                letter-spacing: normal;
                text-align: left;
                color: #666b46;
            }
        }
        .rule {
            display: flex;
            flex-direction: column;
            margin-left: 100px;
            margin-top: 50px;
            span {
                height: 33px;
                font-family: Arial;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.13;
                letter-spacing: normal;
                text-align: left;
                color: #666b46;
            }
        }
    }
    .drop {
        margin-top: 30px;
    }
    .loctext {
        width: 450px;
        height: 40px;
        border-radius: 5px;
        background-color: #ededed;
        margin-top: 30px;
        border: none;
    }
}

.right {
    width: 55%; // border: solid 1px;
    height: 660px; // border: solid 1px;
    .gmap {
        // border: solid 1px;
        width: 600px;
        height: 450px;
        margin: auto;
        margin-top: 100px;
    }
}
</style>