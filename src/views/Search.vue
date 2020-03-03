<template>
    <div class="search">
        <Header></Header>
        <div class="container">
            <div class="row searchbar">
                <div class="loc">
                    <span>Location</span>
                    <br>
                    <input type="text" placeholder="Taipei">
                </div>
                <div class="date">
                    <span>Date</span>
                    <input type='text' class="form-control" id='datetimepicker4' />
                </div>
                <div class="stay">
                    <span>Stay</span>
                </div>
                <div class="searchbtn">
                    <span>SEARCH</span>
                </div>
            </div>
        </div>
        <MbSelect></MbSelect>
        <div class="container-fulid">
            <div class="row searchresult">
                <div class="col-9">
                    <div class="row" v-for="(ppl,index) in pagedListdata" :key="index">
                        <div class="col-6">
                            <Item></Item>
                        </div>
                        <div class="col-6">
                            <Item></Item>
                        </div>
                    </div>
                    <!-- <div class="row">
                                                                                            <div class="col-6">
                                                                                                <Item></Item>
                                                                                            </div>
                                                                                            <div class="col-6">
                                                                                                <Item></Item>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="row">
                                                                                            <div class="col-6">
                                                                                                <Item></Item>
                                                                                            </div>
                                                                                            <div class="col-6">
                                                                                                <Item></Item>
                                                                                            </div>
                                                                                        </div> -->
                </div>
                <div class="col-3"></div>
    
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

<script src="https://code.jquery.com/jquery-3.3.1.min.js">

</script>

<script>
import Header from '../components/Header'
import MbSelect from '../components/MbSelect'
import Item from '../components/Item'
import Paginate from 'vuejs-paginate'
export default {
    name: 'search',
    components: {
        Header,
        MbSelect,
        Item,
        Paginate
    },
    data() {
        return {
            listdata: [],
            currentPage: 1,
            pageCount: 3
        }
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
        }
    },
    watch: {
        listdata: function() {
            this._setPage2Model();
        }
    },
    methods: {

        _setPage2Model: function() {
            const PAGE_SIZE = 3; //Show how many records in a single page

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
        }
    },
    created() {
        const FOO_DATA = [
            { name: 'Luke Skywalker' },
            { name: 'Luke Skywalker' },
            { name: 'Luke Skywalker' },
            { name: 'Luke Skywalker' },
            { name: 'Luke Skywalker' }
        ];
        var vm = this;
        vm.listdata = FOO_DATA;
    },
    mounted() {
        $(document).ready(function() {
            $('#datetimepicker4').datepicker({

            });
        });

    },

}
</script>

<style lang="scss">
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
</style>