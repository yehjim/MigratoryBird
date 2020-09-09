<template>
    <div class="container">
        <div class="row searchbar">
            <div class="loc">
                <span>City</span>
                <dropdown dropdownwidth="250px" dropcontentwidth="250px" :locdata="citydata" :loc="city" @clickcity="cityhandler"></dropdown>
            </div>
            <div class="date">
                <span>Area</span>
                <dropdown dropdownwidth="250px" dropcontentwidth="250px" :locdata="areadata" :loc="area" @clickcity="areahandler"></dropdown>
            </div>
            <div class="staywrap">
                <dropdown dropdownwidth="270px" dropcontentwidth="270px" loc="gender"></dropdown>
            </div>
            <div class="searchbtn" @click="searchneed">
                <span>SEARCH</span>
            </div>
        </div>
    </div>
</template>

<script>
import dropdown from '../components/itemlocdrop'
import axios from 'axios'
export default {
    data() {
        return {
            loc: '',
            citydata: [],
            areadata: [],
            alldata:[],
            searchdata: {
                city: '',
                area: '',
                key: ''
            },
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
    components: {
        dropdown
    },
    methods: {
        searchneed() {
            this.$emit('searchinputhandler', this.loc)
        },
        cityhandler(cityname) {
            this.searchdata.city = cityname;
            this.loc = cityname;
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
        },
        areahandler(val) {
            this.searchdata.area = val;

        },
    }
}
</script>

<style lang="scss" scoped>
.searchbar {
    margin-top: 70px;
    height: 70px;
    border-radius: 10px;
    border: solid 0.5px #A6B6AE;
    span {
        color: #A6B6AE;
    }
    .loc {
        width: 25%;
        border-right: solid 0.5px #7E7E7E;
        // padding-top: 5px;
        padding-left: 40px;
        input {
            border: none;
            font-size: 13px;
            width: 90%;
        }
    }
    .date {
        width: 35%;
        border-right: solid 0.5px #7E7E7E;
        padding-left: 30px;
        padding-right: 30px;
        .datepicker {
            border: solid 1px;
            height: 20px; // height: 50px;
        }
    }
    .staywrap {
        width: 25%; // padding-top: 5px;
        // padding-left: 30px;
        padding-top: 10px;
    }
    .searchbtn {
        width: 15%;
        background-color: #A6B6AE;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        span {
            color: white;
            font-size: 17px;
        }
    }
}
</style>