<template>
    <div>
        <contract v-if="pronum==0"></contract>
        <housedescribe v-if="pronum==1" :editdata="editdata"></housedescribe>
        <housefeature1 v-if="pronum==2" :editdata="editdata"></housefeature1>
        <housefeature2 v-if="pronum==3" :editdata="editdata"></housefeature2>
        <postitem v-if="pronum==4" editmode=true :locprops="editdata.city" :areaprops="editdata.area" :priceprops="editdata.monthly"></postitem>
        <div class="progresswrap">
            <div class="nextbtn" @click="back">
                <span></span>
            </div>
            <div class="progressbar">
                <div class="progresscontent" :style="{width:wd}">
    
                </div>
            </div>
            <div class="nextbtn" @click="next">
                <span v-show="pronum==3">編輯完成</span>
                <router-link :to="{name:'HouseDetail',params:{id:houseid}}" v-show="pronum==4">
                    <span >看房子</span>
                </router-link>
                <span></span>
            </div>
            <!-- <b-progress value="25" variant="secondary" class="test"></b-progress> -->
        </div>
    </div>
</template>

<script>
import housedescribe from '../components/EditHousedescribe'
import housefeature1 from '../components/EditHousefeature'
import housefeature2 from '../components/EditHousefeature-1'
import contract from '../components/contract'
import postitem from '../components/postitem'
import axios from 'axios'
export default {
    data() {
        return {
            pronum: 0,
            wd: '0%',
            num: 0,
            postitemdata: {
                about: '',
                rule: ''
            },
            houseid: this.$route.params.id,
            editdata: {

            }
        }
    },
    mounted() {
        axios.get(`http://localhost:7000/housedetail/${this.houseid}`).then(res => {
            console.log(res.data);
            this.editdata = res.data;
            // context.commit('seteditdata', res.data)
        })
    },
    methods: {
        next() {
            if (this.pronum == 3) {
                this.$store.dispatch('PATCHEDITDATA')
            }
            this.num = this.num + 25;
            this.wd = this.num + "%";
            this.pronum += 1;

        },
        back() {
            this.num -= 25;
            this.wd = this.num + "%";
            this.pronum -= 1;
            if (this.pronum < 0) {
                this.pronum = 0;
                this.num = 0;
            }
        },
        posthousedata() {
            this.$store.dispatch('PATCHEDITDATA')
        }
    },
    components: {
        housedescribe,
        housefeature1,
        contract,
        housefeature2,
        postitem
    }
}
</script>

<style lang="scss" scoped>
.progresswrap {
    width: 90%;
    margin: auto;
    margin-top: 50px;
    display: flex; // justify-content: space-evenly;
    .progressbar {
        // border: solid 1px;
        border-radius: 10px;
        width: 80%;
        height: 30px;
        display: flex; // justify-content: center;
        align-items: center;
        background-color: #ededed;
        padding: 7px;
        .progresscontent {
            // border: solid 1px;
            border-radius: 7px;
            width: 0%;
            height: 19px;
            background-color: #666b46;
            transition: 0.5s;
        }
    }
    .nextbtn {
        width: 8%;
        margin-left: 15px;
        margin-right: 15px;
        border-radius: 10px;
        background-color: #ededed;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.16;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
        }
    }
}
</style>