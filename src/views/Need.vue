<template>
    <div class="need">
        <headerbar headercolor="#666B46"></headerbar>
        <searchbar @searchinputhandler="searchloc"></searchbar>
        <div class="container needresult">
            <div v-for="(item,index) in pagedListdata" :key="index">
                <needcard :name="item.name" :coutry="item.country" :add="item.add" :checkin="item.checkin" :checkout="item.checkout" :price="item.Budget" :needid="item.id"></needcard>
            </div>
    
        </div>
        <div class="addneedbtn" @click="addneed">
            <span>+</span>
        </div>
        <needpost v-if="needpostshow" @closeadd="close"></needpost>
        <div class="container-fulid pagewrap">
            <div class="row page">
                <paginate :page-count="pageCount" :page-range=1 :init-page=0 :margin-pages=1 :container-class="'pagenation'" :page-class="'item'" :page-link-class="'page-link-item'" :prev-class="'prev-item'" :prev-link-class="'prev-link-item'" :next-class="'next-item'"
                    :next-link-class="'next-link-item'" :click-handler="pageCallback">
                </paginate>
            </div>
        </div>
    </div>
</template>

<script>
import headerbar from '../components/Header'
import searchbar from '../components/searchbar'
import needcard from '../components/needcard'
import needpost from '../components/needpost'
import axios from 'axios'
import Paginate from 'vuejs-paginate'
export default {
    data() {
        return {
            display: 'none',
            needlist: [],
            needpostshow: false,
            listdata:[],
            currentPage: 1,
            pageCount: 4,
        }
    },
    mounted() {
        axios.get('http://localhost:7000/need')
            .then((res) => {
                console.log(res.data)
                // this.itemdata = res.data
                var vm = this;
                vm.needlist = res.data
                vm.listdata = res.data
                // console.log(vm.needlist)
            }).catch((err) => {
                console.log(err)

            })
    },
    computed:{
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
    },
     watch: {
        listdata: function() {
            this._setPage2Model();
        }

    },
    methods: {
        addneed() {
            this.needpostshow = true;
        },
        close() {
            this.needpostshow = false;
        },
        searchloc(val){
            this.listdata = this.listdata.filter(function(filteritems){
                return filteritems.Budget < val;

            })
            console.log(val);
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
    },
    components: {
        headerbar,
        searchbar,
        needcard,
        needpost,
        Paginate

    }
}
</script>

<style lang="scss" scoped>
.needresult {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.addneedbtn {
    position: fixed;
    top: 650px;
    left: 90%; // border: solid 1px;
    background-color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    span {
        color: #a6b6ae;
    }
}

.pagenation {
    text-align: center;
    list-style: none;
    width: 100%;
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