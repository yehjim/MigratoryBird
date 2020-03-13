<template>
    <div class="search">
        <Header></Header>
        <!-- <div class="container">
                                                                                                                                                                        <div class="row" style="border: solid 1px;">
                                                                                                                                                                            <div class="col-4" style="border: solid 1px;">1</div>
                                                                                                                                                                            <div class="col-4">2</div>
                                                                                                                                                                            <div class="col-4">3</div>
                                                                                                                                                                        </div>
                                                                                                                                                                    </div> -->
        <div class="container">
            <div class="row searchbar">
                <div class="loc">
                    <span>Location</span>
                    <br>
                    <input type="text" v-model="selecteditems" placeholder="Taipei">
                </div>
                <div class="date">
                    <span>Date</span>
                    <input type='text' class="form-control" id='datetimepicker4' />
                </div>
                <div class="stay">
                    <span>Stay</span>
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
                            <Item :loc=ppl.city :area=ppl.area :price="ppl.price"></Item>
                            <!-- <Item></Item> -->
                        </div>
                        <!-- <div class="col-6">
                                                                                                                                            <Item></Item>
                                                                                                                                        </div> -->
                    </div>
                </div>
                <div class="col-3 filter">
                    <div class="row rentslider">
                        <span class="renttitle">Rent/mon</span>
                        <div>
                            <!-- <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                                                                                                                                                                <input type="range" min="1" max="100" value="50" class="slider" id="myRange"> -->
                        </div>
    
                    </div>
                    <div class="row stay">
                        <span class="staytitle">Stay</span>
                        <div class="staydropdown">
                            <Dropdown datatype="Stay" :cata=colors></Dropdown>
                        </div>
                    </div>
                    <div class="row stay">
                        <span class="staytitle">Gender</span>
                        <div class="staydropdown">
                            <Dropdown datatype="Gender" :cata=Genders @custom-event-trigger="show"></Dropdown>
                        </div>
                    </div>
                    <div class="row squre">
                        <span class="squretitle">Squre</span>
                        <div class="squreinput">
                            <input type="text">
                        </div>
                    </div>
                    <div class="row more">
                        <div class="morebtn" @click="More">
                            <span>More</span>
                        </div>
                    </div>
                    <div id="myModal" class="modal">
    
                        <!-- Modal content -->
                        <div class="modal-content">
                            <div class="closebtn">
                                <span class="close" @click="MoreClose">&times;</span>
                            </div>
                            <div class="topfilter">
                                <div class="type" style="width: 50%;">
                                    <span>type</span>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="整層住家"></CheckBox>
                                        <CheckBox labelname="獨立套房"></CheckBox>
                                    </div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="分租套房"></CheckBox>
                                        <CheckBox labelname="雅房"></CheckBox>
                                    </div>
                                    <div class="typecheck" style="display:flex;">
                                        <CheckBox labelname="其他"></CheckBox>
                                    </div>
    
    
                                </div>
                                <div class="rent" style="width: 50%;">
                                    <span>Rent</span>
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
                                    <span>生活機能</span>
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
                                        <span>開伙</span>
                                        <div class="typecheck" style="display:flex;">
                                            <CheckBox labelname="是"></CheckBox>
                                            <CheckBox labelname="否"></CheckBox>
                                        </div>
                                    </div>
                                    <div>
                                        <span>Pet</span>
                                        <div class="typecheck" style="display:flex;">
                                            <CheckBox labelname="是"></CheckBox>
                                            <CheckBox labelname="否"></CheckBox>
                                        </div>
                                    </div>
                                </div>
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
import Header from '../components/Header'
import MbSelect from '../components/MbSelect'
import Item from '../components/Item'
import Paginate from 'vuejs-paginate'
import Dropdown from '../components/Dropdown'
import CheckBox from '../components/CheckBox'
export default {
    name: 'search',
    components: {
        Header,
        MbSelect,
        Item,
        Paginate,
        Dropdown,
        CheckBox
    },
    data() {
        return {
            listdata: [],
            currentPage: 1,
            pageCount: 3,
            itemdata: [
                // { city: 'Taipei', area: '1', gender: 'male' },
                // { city: 'NewTaipei', area: '2', gender: 'female' },
                // { city: 'NewTaipei', area: '3', gender: 'male' },
                // { city: 'Taoyuan', area: '4', gender: 'female' },
                // { city: 'Taoyuan', area: '4', gender: 'female' },
                // { loc: 'Taoyuan', area: '4', gender: 'female' },
                // { loc: 'Hualien', area: '5', gender: 'male' }
            ],
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
            gendertype: 'All',
            loading: false,

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
        this.loading = true
        // axios.get('http://localhost:7000/Items')
        // .then((res)=>{
        //     console.log(res.data)
        //     // this.itemdata = res.data
        //     var vm = this;
        //     vm.listdata  = res.data
        //     console.log(vm.listdata)
        // }).catch((err)=>{
        //     console.log(err)

        // })

    },
    computed: {
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
            axios.get('http://localhost:7000/Items')
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

            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            modal.style.display = "block";

            // When the user clicks on <span> (x), close the modal


        },
        MoreClose: function() {
            var modal = document.getElementById("myModal");

            modal.style.display = "none";
        }


    }
}
</script>

<style lang="scss">
.container.container.container.container.container.container {
    max-width: 1140px;
}

.searchbar {
    margin-top: 70px;
    height: 58px;
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
        }
    }
    .date {
        width: 30%;
        border-right: solid 0.5px #7E7E7E;
        padding-top: 5px;
        padding-left: 30px;
        input {
            width: 80%;
            height: 20px;
        }
    }
    .stay {
        width: 25%;
        padding-top: 5px;
        padding-left: 30px;
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
            .rent {
                span {
                    font-size: 30px;
                }
            }
            .type {
                span {
                    font-size: 30px;
                }
            }
            .typecheck {
                margin-bottom: 30px;
                margin-top: 20px;
            }
        }
        .bottomfilter {
            display: flex;
            .life {
                width: 50%;
                span {
                    font-size: 30px;
                }
            }
            .pet {
                width: 50%;
                span {
                    font-size: 30px;
                }
            }
            .typecheck {
                margin-bottom: 30px;
                margin-top: 20px;
            }
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