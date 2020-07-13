<template>
    <div>
        <contract v-if="pronum==0"></contract>
        <housedescribe v-if="pronum==1" @abouttexthandler="aboutext" @rultexthandler="ruletext"></housedescribe>
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
            <div class="nextbtn" @click="next" v-if="pronum==6">
                <router-link to="/HouseDetail/1">
                    <span>刊登</span>
                </router-link>
    
            </div>
            <div class="nextbtn" @click="next" v-else>
    
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
export default {
    data() {
        return {
            pronum: 0,
            wd: '0%',
            num: 0,
            postitemdata: {
                about: '',
                rule:''
            }
        }
    },
    methods: {
        next() {
            this.num = this.num + 17;
            this.wd = this.num + "%";
            this.pronum += 1;
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
        aboutext(val) {
            this.postitemdata.about = val;
            console.log(this.postitemdata)
        },
        ruletext(val) {
            this.postitemdata.rule = val;
            console.log(this.postitemdata)
        }
    },
    components: {
        contract,
        housedescribe,
        feature,
        feature1,
        houseloc,
        payad,
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