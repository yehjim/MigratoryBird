<template>
    <div>
        <Header headercolor="#666B46"></Header>
        <div class="container">
            <div class="row">
                <ProfileNav v-on:profile-handle="catchhandler" v-on:mynest-handle="catchhandler" v-on:like-handle="catchhandler" @item-handle="catchhandler" @chatroom-handle="catchhandler" @inbox-handle="catchhandler" @mbmating-handle="catchhandler"></ProfileNav>
                <div class="title">
                    <span>{{title}}</span>
                </div>
                <div class="col-1">
    
                </div>
    
    
                <div class="col-7 profilecontent">
                    <router-view></router-view>
                    <!-- <router-view></router-view> -->
                    <router-view name="Profile11" v-if="paymentisediting==false"></router-view>
                    <router-view @editinghandler="editing" name="PaymentCard" v-if="paymentisediting==false" v-show="hoststatus==false"></router-view>
                    <router-view name="Editingpayment" v-if="paymentisediting==true" @closeedit="closeedit"></router-view>
                    <router-view name="MbWallet" v-show="hoststatus==true">
                        <router-view name="EditProfile"></router-view>
                    </router-view>
                </div>
            </div>
        </div>
        <PopUp></PopUp>
    </div>
</template>

<script>
import Header from '../components/Header'
import PopUp from '../components/PopUp'
// import PaymentCatd from '../components/PaymentCard'
import ProfileNav from '../components/ProfileNav'
export default {
    data() {
        return {
            title: "Profile",
            paymentisediting: false,
            foreignerlist: []
        }
    },
    components: {
        Header,
        ProfileNav,
        PopUp
        // PaymentCatd
    },
    mounted() {
        if (this.hoststatus == true) {
            this.$store.dispatch('GETHOUSEDATA')
        }
        // this.$store.dispatch('GETUSERDATA')
    },
    computed: {
        hoststatus() {
            return this.$store.state.hostcheck;
        },
    },
    methods: {
        catchhandler: function(val) {
            this.title = val;
            console.log(val)
        },
        editing() {
            this.paymentisediting = true;
        },
        closeedit() {
            this.paymentisediting = false;
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.profilecontent {
    height: 600px;
    margin-top: 10px;
    box-sizing: border-box;
}

.title {
    // border: solid 1px;
    position: absolute;
    left: 430px;
    top: 80px;
    span {
        font-size: 28px; // margin-left: 50px;
        color: #666B46;
        font-weight: bold;
    }
}
</style>