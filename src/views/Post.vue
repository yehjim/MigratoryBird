<template>
    <div>
        <contract v-if="pronum==0"></contract>
        <housedescribe v-if="pronum==1"></housedescribe>
        <houseloc v-if="pronum==2"></houseloc>
        <feature v-if="pronum==3"></feature>
        <feature1 v-if="pronum==4"></feature1>
        <payad v-if="pronum==5"></payad>
        <postitem v-if="pronum==6"></postitem>
        <div class="progresswrap">
            <div class="nextbtn" @click="back">
                <span></span>
            </div>
            <div class="progressbar">
                <div class="progresscontent" :style="{width:wd}">
    
                </div>
            </div>
            <div class="nextbtn" v-if="pronum==6" @click="postmyhousedata">
                <router-link :to="{name:'HouseDetail',params:{id:houseid}}">
                    <span>刊登</span>
                </router-link>
    
            </div>
            <div class="nextbtn" @click="next" v-else>
                <span v-show="pronum==5">付款</span>
                <span></span>
            </div>
            <!-- <b-progress value="25" variant="secondary" class="test"></b-progress> -->
        </div>
    </div>
</template>

<script>
import contract from '../components/contract'
import housedescribe from '../components/Housedescribe'
import feature from '../components/Housefeature'
import feature1 from '../components/Housefeature-1'
import houseloc from '../components/houselocation'
import payad from '../components/payad'
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
            }
        }
    },
    methods: {
        test123(val) {
            console.log(val);

        },
        next() {
            if (this.pronum == 5) {
                // this.$store.commit('setadtype')
                this.$store.dispatch('POSTHOUSERDATA')

            }
            this.num = this.num + 17;
            this.wd = this.num + "%";
            this.pronum += 1;
        },
        postmyhousedata() {
            let house_id = this.house_id;
            let myhousedata = {
                house_id: house_id,
                status: "post",
                rent_out_record_id: null
            }
            axios
                .patch(`http://localhost:7000/user/${this.userid}`, {
                    my_house: myhousedata
                })
                .then(res => {
                    console.log('修改成功', res.data)
                });
            this.isadd = false;
        },
        posthousedata() {
            // console.log('123')
            this.$store.dispatch('POSTHOUSERDATA')
            // this.houseid = 1
        },
        back() {
            this.num -= 17;
            this.wd = this.num + "%";
            this.pronum -= 1;
            if (this.pronum < 0) {
                this.pronum = 0;
                this.num = 0;
            }
        },
    },
    components: {
        contract,
        housedescribe,
        feature,
        feature1,
        houseloc,
        payad,
        postitem

    },
    computed: {
        houseid() {
            return this.$store.state.houseid
        },
        userid(){
            return this.$store.state.userdata[0].id
        }
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