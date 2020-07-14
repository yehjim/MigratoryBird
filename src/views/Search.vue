<template>
    <div class="search">
        <!-- <SearchHeader></SearchHeader> -->
        <Header headercolor="#666B46" v-if="!hoststatus"></Header>
        <hostheader headercolor="#666B46" v-else></hostheader>
        <PopUp></PopUp>
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
                    <span>地址/關鍵字</span>
                    <input type="text" v-model="searchdata.key" :placeholder="keyword">
                </div>
                <div class="searchbtn" @click="search">
                    <span>SEARCH</span>
                </div>
            </div>
        </div>
        <MbSelect></MbSelect>
        <div class="container-fulid">
            <div class="row searchresult">
                <div class="col-9">
                    <div class="row">
                        <div class="col-6" v-for="(ppl,index) in pagedListdata" :key="index">
                            <router-link :to="{name:'HouseDetail',params:{id:ppl.id}}">
                                <Item :loc=ppl.city :area=ppl.area :price=ppl.monthly></Item>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-3 filter">
                    <div class="row rentslider">
                        <span class="renttitle">Rent/mon</span>
                        <div>
                        </div>
                    </div>
                    <div class="row stay">
                        <span class="staytitle">Gender</span>
                        <div class="staydropdown">
                            <!-- <Dropdown datatype="Gender" :cata=Genders @custom-event-trigger="show"></Dropdown> -->
                        </div>
                    </div>
                    <div class="row squre">
                        <span class="squretitle">Squre</span>
                        <div class="squreinput">
                            <input type="text" placeholder="坪數">
                        </div>
                    </div>
                    <div class="row more">
                        <div class="morebtn" @click="More">
                            <span>More</span>
                        </div>
                    </div>
                    <div id="myModal1" class="modal">
    
                        <!-- Modal content -->
                        <div class="modal-content">
                            <div class="closebtn">
                                <span class="close" @click="MoreClose">&times;</span>
                            </div>
                            <div class="topfilter">
                                <div class="type" style="width: 50%;">
                                    <div class="title">type</div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="整層住家" @check="fullhousecheck"></CheckBox>
                                        <CheckBox labelname="獨立套房" @check="studiocheck"></CheckBox>
                                    </div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="分租套房" @check="roomcheck"></CheckBox>
                                        <CheckBox labelname="雅房" @check="singlecheck"></CheckBox>
                                    </div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="其他"></CheckBox>
                                    </div>
    
    
                                </div>
                                <div class="rent" style="width: 50%;">
                                    <div class="title">Rent</div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="網路費"></CheckBox>
                                        <CheckBox labelname="水費"></CheckBox>
                                    </div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="電費"></CheckBox>
                                        <CheckBox labelname="管理費"></CheckBox>
                                    </div>
                                </div>
                            </div>
                            <div class="bottomfilter">
                                <div class="life">
                                    <div class="title">生活機能</div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="近傳統市場"></CheckBox>
                                        <CheckBox labelname="近百貨公司"></CheckBox>
                                    </div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="近便利商店"></CheckBox>
                                        <CheckBox labelname="近夜市"></CheckBox>
                                    </div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="近公園綠地"></CheckBox>
                                        <CheckBox labelname="近醫療機構"></CheckBox>
                                    </div>
                                </div>
                                <div class="pet">
                                    <div>
                                        <div class="title">開伙</div>
                                        <div class="typecheck" style="display:flex;">
                                            <CheckBox labelname="是"></CheckBox>
                                            <CheckBox labelname="否"></CheckBox>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="title">寵物</div>
                                        <div class="typecheck" style="display:flex;">
                                            <CheckBox labelname="是"></CheckBox>
                                            <CheckBox labelname="否"></CheckBox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="confirm">
                                <span @click="submitfilter">confirm</span>
                            </div>
    
                        </div>
    
                    </div>
    
    
                </div>
    
            </div>
        </div>
        <div class="container-fulid pagewrap">
            <div class="row page">
                <paginate :page-count="pageCount" :page-range=1 :init-page=0 :margin-pages=1 :container-class="'pagenation'" :page-class="'item'" :page-link-class="'page-link-item'" :prev-class="'prev-item'" :prev-link-class="'prev-link-item'" :next-class="'next-item'"
                    :next-link-class="'next-link-item'" :click-handler="pageCallback">
                </paginate>
            </div>
        </div>
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous">

</script>


<script>
import SearchHeader from '../components/SearchHeader'
import hostheader from '../components/Hostheader'
import Header from '../components/Header'
import MbSelect from '../components/MbSelect'
import Item from '../components/Item'
import Paginate from 'vuejs-paginate'
import dropdown from '../components/itemlocdrop'
import CheckBox from '../components/CheckBox'
import Staydropdown from '../components/Staydropdown'
import PopUp from '../components/PopUp'
export default {
    name: 'search',
    components: {
        MbSelect,
        Item,
        Paginate,
        dropdown,
        CheckBox,
        SearchHeader,
        Staydropdown,
        Header,
        PopUp,
        hostheader
    },
    data() {
        return {
            listdata: [],
            currentPage: 1,
            pageCount: 3,
            langblockclick: 'none',
            date: this.datecomputed,
            test: "2020-07-15",
            alldata: [],
            citydata: [],
            areadata: [],
            searchdata: {
                city: '',
                area: '',
                key: ''
            },
            itemdata: [],
            selecteditems: "All",
            colors: [{
                    hex: '#00759A',
                    name: '1 Year'
                },
                {
                    hex: '#F7941D',
                    name: '2 Year'
                },
                {
                    hex: '#A71930',
                    name: '3 Year'
                },
                {
                    hex: '#679146',
                    name: '4 Year'
                }
            ],
            Genders: [{
                    hex: '#00759A',
                    name: 'All'
                },
                {
                    hex: '#00759A',
                    name: 'male'
                },
                {
                    hex: '#F7941D',
                    name: 'female'
                }
            ],
            filtertype: {
                Location: '',
                fullhouse: false,
                studio: false,
                room: false,
                single: false,
                other: false,
                market: false,
                apramentstore: false,
                nightmarker: false,
                hospital: false,
                convenient: false,
                park: false,
                internet: false,
                water: false,
                eletice: false,
                manage: false,
            },
            gendertype: 'All',
            loading: false,
            testchek: false,
            loc: ''


        }
    },
    created() {
        // const FOO_DATA = this.itemdata;
        // var vm = this;
        // vm.listdata = FOO_DATA;
    },
    mounted() {
        $(document).ready(function() {
            $('#datetimepicker4').datepicker({

            });
        });
        // this.loading = true
        // this.$store.dispatch('GETLIST')
        axios.get('http://localhost:7000/housedetail')
            .then((res) => {
                console.log(res.data)
                // this.itemdata = res.data
                var vm = this;
                vm.listdata = res.data
                console.log(vm.listdata)
            }).catch((err) => {
                console.log(err)

            })
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
        // list() {
        //     return this.$store.state.list
        // },
        keyword() {
            return this.$store.state.searchdata.key;
        },
        city() {
            return this.$store.state.searchdata.city;
        },
        area() {
            return this.$store.state.searchdata.area;
        },
        //取得listdata
        hoststatus() {
            return this.$store.state.hostcheck;
        },
        pagedListdata: function() {
            var vm = this;
            if (vm.listdata && vm.listdata.length > 0) {
                return vm.listdata.filter(function(x) {
                    return x.page === vm.currentPage;
                })
            } else {
                return [];
            }
        },
        filterItems: function() {
            var vm = this;
            var loc = vm.selecteditems;
            var gender = vm.gendertype;
            if (loc === "All" && gender === "All") {
                return vm.itemdata;
            } else if (loc === "All") {
                return vm.itemdata.filter(function(item) {
                    return item.gender === gender;
                });
            } else if (gender === "All") {
                return vm.itemdata.filter(function(item) {
                    return item.loc === loc;
                });
            } else {
                return vm.itemdata.filter(function(item) {
                    return item.loc === loc && item.gender === gender;
                });
            }
        }
    },
    watch: {
        listdata: function() {
            this._setPage2Model();
        }

    },
    methods: {
        // da: function() {

        // }(),
        // da();,
        fullhousecheck(val) {
            this.filtertype.fullhouse = val
            console.log(this.filtertype)
        },
        studiocheck(val) {
            this.filtertype.studio = val
            console.log(this.filtertype)
        },
        roomcheck(val) {
            this.filtertype.room = val
            console.log(this.filtertype)
        },
        singlecheck(val) {
            this.filtertype.single = val
            console.log(this.filtertype);
        },
        _setPage2Model: function() {
            const PAGE_SIZE = 6; //Show how many records in a single page

            var vm = this;

            if (!vm.listdata || vm.listdata.length <= 0) {
                vm.pageCount = 1;
            } else {
                vm.pageCount = parseInt(vm.listdata.length / PAGE_SIZE) + (vm.listdata.length % PAGE_SIZE > 0 ? 1 : 0);
                for (let i = 0; i < vm.listdata.length; i++) {
                    vm.$set(vm.listdata[i], "page", parseInt(i / PAGE_SIZE) + 1);
                }
            }
        },

        pageCallback: function(page) {
            var vm = this;
            this.$set(vm, 'currentPage', page);
        },
        search: function() {
            // console.log(this.list)
            // this.listdata = this.list;
            // console.log(this.listdata.gender)
            // console.log('按到',this.loc)
            let loc = this.loc
            axios.get(`http://localhost:7000/Items?city=${loc}`)
                .then((res) => {
                    console.log(res.data)
                    // this.itemdata = res.data
                    var vm = this;
                    vm.listdata = res.data
                    console.log(vm.listdata)
                }).catch((err) => {
                    console.log(err)

                })
        },
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
        },
        areahandler(val) {
            this.searchdata.area = val;

        },
        show(gender) {
            this.gendertype = gender;
            if (this.gendertype == "male") {
                axios.get('http://localhost:7000/gendermale')
                    .then((res) => {
                        console.log(res.data)
                        // this.itemdata = res.data
                        var vm = this;
                        vm.listdata = res.data
                        console.log(vm.listdata)
                    }).catch((err) => {
                        console.log(err)

                    })
            } else {
                axios.get('http://localhost:7000/genderfemale')
                    .then((res) => {
                        console.log(res.data)
                        // this.itemdata = res.data
                        var vm = this;
                        vm.listdata = res.data
                        console.log(vm.listdata)
                    }).catch((err) => {
                        console.log(err)

                    })

            }
            console.log(this.gendertype)
        },
        More: function() {

            var modal = document.getElementById("myModal1");

            // Get the button that opens the modal
            // var btn = document.getElementById("myBtn");

            // // Get the <span> element that closes the modal
            // var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            modal.style.display = "block";

            // When the user clicks on <span> (x), close the modal


        },
        MoreClose: function() {
            var modal = document.getElementById("myModal1");

            modal.style.display = "none";
        },
        submitfilter() {
            let full = this.filtertype.fullhouse;
            axios.get(`http://localhost:7000/items?fullhouse=${full}`)
                .then((res) => {
                    console.log(res.data)
                    this.listdata = res.data;
                    // this.itemdata = res.data
                    // var vm = this;
                    // vm.listdata = res.data
                    // console.log(vm.listdata)
                }).catch((err) => {
                    console.log(err)

                })
            var modal = document.getElementById("myModal1");

            modal.style.display = "none";

        }


    }
}
</script>

<style lang="scss" scoped>
// .container.container.container.container.container.container {
//     max-width: 1140px;
// }
.searchbar {
    margin-top: 70px;
    height: 75px;
    border-radius: 10px;
    border: solid 0.5px #A6B6AE;
    span {
        color: #A6B6AE;
    }
    .loc {
        width: 30%;
        border-right: solid 0.5px #7E7E7E;
        padding-top: 5px;
        padding-left: 40px;
        input {
            border: none;
            font-size: 13px;
            width: 90%;
        }
    }
    .date {
        width: 30%;
        border-right: solid 0.5px #7E7E7E;
        padding-top: 5px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .staywrap {
        width: 25%; // padding-top: 5px;
        padding-left: 20px;
        padding-top: 5px;
        input {
            width: 90%;
            height: 25px;
            margin-top: 5px;

        }
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

.searchresult {
    border-top: 1px solid;
    height: 1200px;
    .col-3 {
        border-left: 1px solid;
    }
    .col-6 {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        padding-bottom: 30px;
    }
}

.pagenation {
    text-align: center;
    list-style: none;
    width: 950px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    .prev-item {
        a {
            color: #A6B6AE;
            margin-right: 10px;
        }
    }
    .next-item {
        a {
            color: #A6B6AE;
            margin-left: 10px;
        }
    }
    .active {
        .page-link-item {
            font-weight: bolder;
        }
    }
    li.item {
        margin-left: 20px;
        margin-right: 20px;
        .page-link-item {
            color: #A6B6AE
        }
    }
}

.filter {
    .rentslider {
        display: flex;
        flex-direction: column; // border: solid 1px;
        .renttitle {
            font-size: 15px;
            margin: 10px;
            color: #666B46;
        }
    }
    .stay {
        display: flex;
        flex-direction: column; // border: solid 1px;
        .staydropdown {
            margin-left: 30px;
            margin-bottom: 20px;
        }
        .staytitle {
            font-size: 15px;
            margin: 10px;
            color: #666B46;
        }
    }
    .squre {
        display: flex;
        flex-direction: column; // border: solid 1px;
        .squreinput {
            margin-left: 30px;
            margin-bottom: 20px;
            input {
                width: 80%;
                border: solid 1px #666B46;
                border-radius: 2px;
                border-radius: 4px;
            }
        }
        .squretitle {
            font-size: 15px;
            margin: 10px;
            color: #666B46;
        }
    }
    .more {
        display: flex;
        justify-content: flex-end;
        .morebtn {
            margin-right: 20px;
            color: #A6B6AE;
        }
    }
    .modal {
        display: none;
        /* Hidden by default */
        position: fixed;
        /* Stay in place */
        z-index: 1;
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
            display: flex;
            .type,
            .rent {
                color: #7E7E7E;
                .title {
                    font-size: 30px; // border: solid 1px;
                    border-bottom: solid 1px #7E7E7E;
                    width: 70%;
                    margin-left: 30px;
                }
            }
            .typecheck {
                margin-bottom: 20px;
                margin-top: 20px;
            }
        }
        .bottomfilter {
            display: flex;
            color: #7E7E7E;
            .life,
            .pet {
                width: 50%;
                .title {
                    font-size: 30px;
                    border-bottom: solid 1px #7E7E7E;
                    width: 70%;
                    margin-left: 30px;
                }
            }
            .typecheck {
                margin-bottom: 20px;
                margin-top: 20px;
            }
        }
        .confirm {
            // border: solid 1px;
            // display: flex;
            margin-bottom: 20px;
            span {
                float: right;
                border: solid 1px #A6B6AE;
                color: #A6B6AE;
                border-radius: 5px;
                padding: 3px;
                width: 86px;
                text-align: center;
                cursor: pointer;
            }
        }
        .confirm:hover span {
            background-color: #A6B6AE;
            color: white;
        }
    }
    /* Modal Content */
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 65%;
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
}
</style>