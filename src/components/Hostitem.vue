<template>
    <div class="account">
        <div class="tabwrap">
            <div class="tabitem">
                <a @click="inposthandler" :class="{visit:inpostisvisit}">
                                                        <span>刊登中</span>
                                                    </a>
                <div class="tabcontent" v-if="inpost">
    
                    <div v-for="(item,index) in rentlist" :key="index">
                        <item class="item" :loc="item.city" :area="item.area" :price="item.monthly" hasedit="true" :id="item.id"></item>
    
                    </div>
    
    
                </div>
    
    
            </div>
            <div class="tabitem">
                <a @click="unposthandler" :class="{visit:unpostisvisit}">
                                                        <span>下架中</span>
                                                    </a>
                <div class="tabcontent" v-if="unpost">
                    <item class="item"></item>
    
                </div>
            </div>
            <div class="tabitem">
                <a @click="renthandler" :class="{visit:rentisvisit}">
                                                        <span>出租中</span>
                                                    </a>
                <div class="tabcontent" v-if="rent">
                    <onrentitem></onrentitem>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import item from '../components/ProfileItem'
import onrentitem from '../components/onrentitem'
import axios from 'axios'
export default {
    data() {
        return {
            inpost: true,
            unpost: false,
            rent: false,
            inpostisvisit: true,
            unpostisvisit: false,
            rentisvisit: false,
            rentlist: []
        }
    },
    mounted() {
        axios.get(`http://localhost:7000/housedetail?houseowner_id=${this.userid}`)
            .then((res) => {
                console.log(res.data)
                // this.itemdata = res.dat
                this.rentlist = res.data
                // // this.houseid = res.data.houseid
                // console.log(this.housedetail, "123")
            }).catch((err) => {
                console.log(err)

            })
    },
    methods: {
        inposthandler() {
            this.inpost = true;
            this.unpost = false
            this.rent = false
            this.inpostisvisit = true,
                this.unpostisvisit = false
            this.rentisvisit = false
        },
        unposthandler() {
            this.inpost = false;
            this.unpost = true
            this.rent = false
            this.inpostisvisit = false,
                this.unpostisvisit = true
            this.rentisvisit = false
        },
        renthandler() {
            this.inpost = false;
            this.unpost = false
            this.rent = true
            this.inpostisvisit = false,
                this.unpostisvisit = false
            this.rentisvisit = true
        }
    },
    computed: {
        userid() {
            return this.$store.state.userdata[0].id
        }
    },
    components: {
        item,
        onrentitem
    }
}
</script>

<style lang="scss" scoped>
.visit {
    border-bottom: 3px solid #a6b6ae;
}

.account {
    // overflow: scroll;
    height: 570px; // border: solid 1px;
    width: 800px;
    margin-top: 40px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .tabwrap {
        display: flex;
        justify-content: space-around;
        padding-top: 20px;
        position: relative;
        .tabitem {
            // width: 105px;
            // height: 49px;
            font-family: Arial;
            font-size: 23px;
            color: #a6b6ae;
            .tabcontent {
                flex-wrap: wrap;
                display: flex;
                justify-content: space-around;
                width: 100%;
                left: 0;
                height: 510px; // height: %;
                // left: 15px;
                position: absolute;
                overflow: scroll;
                .item {
                    // border: solid 1px;
                    margin-top: 30px;
                }
            }
        }
        a:hover {
            border-bottom: 3px solid #a6b6ae;
        }
        a:active {
            // border-bottom: 1px solid #a6b6ae;
        }
    }
}
</style>