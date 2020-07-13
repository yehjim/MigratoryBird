<template>
    <div class="account">
        <div class="itemwrap">
            <div v-for="(ppl,index) in pagedListdata" :key="index">
                <router-link :to="{name:'HouseDetail',params:{id:ppl.houseid}}">
                    <ProfileItem :loc="ppl.loc" :area="ppl.area" :price="ppl.price"></ProfileItem>
                </router-link>
            </div>
        </div>
    
        <div class="page">
            <paginate :page-count="pageCount" :page-range=1 :init-page=0 :margin-pages=1 :container-class="'pagenation'" :page-class="'item'" :page-link-class="'page-link-item'" :prev-class="'prev-item'" :prev-link-class="'prev-link-item'" :next-class="'next-item'"
                :next-link-class="'next-link-item'" :click-handler="pageCallback">
            </paginate>
        </div>
    </div>
</template>

<script>
import ProfileItem from '../components/ProfileItem'
import Paginate from 'vuejs-paginate'
import axios from 'axios'
// import Item from '../components/Item'
export default {
    data() {
        return {
            currentPage: 1,
            pageCount: 2,
            listdata: []
        }
    },
    components: {
        ProfileItem,
        Paginate
        // Item
    },
    mounted() {
        axios.get('http://localhost:7000/like')
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
    },
    watch: {
        listdata: function() {
            this._setPage2Model();
        }

    },
    methods: {
        _setPage2Model: function() {
            const PAGE_SIZE = 4; //Show how many records in a single page

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
    }
}
</script>

<style lang="scss" scoped>
.account {
    // overflow: scroll;
    height: 570px; // border: solid 1px;
    margin-top: 40px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.itemwrap {
    display: flex;
    flex-wrap: wrap; // border: solid 1px;
    justify-content: space-around;
    margin-top: 30px;
}

.pagenation {
    text-align: center;
    list-style: none; // width: 950px;
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