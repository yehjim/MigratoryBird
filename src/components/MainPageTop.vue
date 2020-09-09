<template>
    <div class="container-fluid top">
        <Header></Header>
        <div class="row slogan">
            <div class="col-2"></div>
            <div class="col-4">
                <h2>Safe</h2>
                <h2>Family</h2>
                <h2>Hometown</h2>
            </div>
            <div class="col-6"></div>
        </div>
        <div class="row b1">
            <div class="col-3 searchloaction">
                <span>{{ $t('mainpagetop.city') }}</span>
                <dropdown dropdownwidth="200px" bordercolor="solid 1px #A6B6AE" dropcontentwidth="200px" :locdata="citydata" loc="城市" @clickcity="cityhandler"></dropdown>
                <!-- <input type="text" placeholder="Taipei" v-model="searchdata.loc"> -->
            </div>
    
            <div class="col-3 searchdate">
                <span>{{ $t('mainpagetop.area') }}</span>
                <dropdown dropdownwidth="200px" bordercolor="solid 1px #A6B6AE" dropcontentwidth="200px" :locdata="areadata" loc="地區" @clickcity="areahandler"></dropdown>
            </div>
            <div class="col-3 searchstay">
                <span>{{ $t('mainpagetop.keyword') }}</span>
                <!-- <span>2 months</span> -->
                <input type="text" placeholder="" v-model="searchdata.key" @change="keyword">
            </div>
            <div class="col-3 search" @click="searchinput">
                <router-link to="/search" style="color:white;"><span>{{ $t('mainpagetop.BOOKNOW') }}</span></router-link>
                <router-view></router-view>
            </div>
        </div>
        <PopUp></PopUp>
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous">

</script>

<script>
import Header from '../components/Header'
import PopUp from '../components/PopUp'
import Staydropdown from '../components/Staydropdown'
import dropdown from '../components/itemlocdrop'
export default {
    name: 'MainPageTop',
    props: {
        nav1: String,
        nav2: String,
        nav3: String,
        nav4: String,
        nav5: String,


    },
    data() {
        return {
            labelname: [],
            group: [],
            displaystyle: 'block',
            zh: '',
            searchdata: {
                city: '',
                area: '',
                key: ''
            },
            alldata: [],
            citydata: [],
            areadata: []

        }
    },
    components: {
        Header,
        PopUp,
        Staydropdown,
        dropdown
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
    computed: {
        location() {
            return this.$store.state.searchdata.key;
        },
        datecomputed() {
            return this.$store.state.searchdata.date;
        },
        staytime() {
            return this.$store.state.searchdata.stay;
        },
    },
    methods: {
        cityhandler(cityname) {
            this.searchdata.city = cityname;
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
            this.$store.commit('setsearchdata',this.searchdata)
        },
        setzhlang() {
            console.log(this.labelname[0])
        },
        setenlang() {},
        setjplang() {

        },
        setlang() {
            // let a = document.getElementById("zh").value;
            this.$i18n.locale = this.labelname[0];
            var modal = document.getElementById("myModal");
            modal.style.display = "none";

            console.log(this.labelname[0])
        },
        searchinput() {
            this.$store.commit('setsearchdata', this.searchdata)
        },
        stay(time) {
            this.searchdata.stay = time;

        },
        areahandler(val) {
            this.searchdata.area = val;
            this.$store.commit('setsearchdata',this.searchdata)

        },
        keyword(){
            this.$store.commit('setsearchdata',this.searchdata)
        }
    },
}
</script>

<style lang="scss" scoped>
.top {
    background-image: url('../assets/media/joyce-romero-EV_bivvSaC8-unsplash.jpg');
    width: 100%; // height: 100%;
    height: 100vh;
    background-position: center;
    background-position-y: -1000px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .title {
        color: white;
        font-size: 100px;
        padding-top: 50px;
        padding-left: 100px;
    }
}

.slogan {
    // position: absolute;
    // top: 180px;
    // left: 200px;
    // border:solid 1px;
    height: 73vh;
    .col-4 {
        color: white;
        margin-top: 130px;
        h2 {
            font-size: 50px;
        }
    }
}

.b1 {
    width: 1000px;
    height: 20vh;
    .col-3 {
        width: 300px;
        height: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    .searchloaction {
        input {
            border: none;
            color: #666B46; // width: 400px;
        }
    }
    .searchdate {
        input {
            width: 80%;
            border: none;
            height: 20px;
        }
    }
    .searchstay {
        // border: solid 1px;
    }
    .search {
        color: white;
        background-color: #666B46;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 100px;
        transition: 0.3s;
    }
    .search:hover {
        font-size: 23px;
        text-decoration: underline;
    }
}

.modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 5;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
    .topfilter {
        // border: solid 1px; // display: flex;
        // .title {
        //     border: solid 1px;
        text-align: center;
        .langtitle {
            // border: solid 1px;
            width: 300px;
            margin: auto;
            border-bottom: solid 3px #666B46;
            span {
                font-size: 25px;
                color: #666B46; // text-align: center;
            }
        }
        .zh,
        .en,
        .jp {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: auto;
            margin-top: 20px; // border: solid 1px;
            width: 300px;
            label {
                color: #A6B6AE;
                font-weight: lighter;
            }
            input {
                width: 15px;
                height: 15px; // margin-left: 100px;
                // list-style: none;
                background-color: #A6B6AE;
            }
        }
        .confirmbtn {
            border: solid 1px;
            width: 100px;
            float: right;
            margin-top: 20px;
            border-radius: 5px;
            color: #666B46;
        }
    }
}

/* Modal Content */

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    .closebtn {
        display: flex;
        justify-content: flex-end;
    }
}

/* The Close Button */

.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>