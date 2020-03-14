<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="row">
                <ProfileNav v-on:profile-handle="catchhandler" v-on:mynest-handle="catchhandler" v-on:like-handle="catchhandler"></ProfileNav>
                <div class="col-1">
                    <span>{{title}}</span>
                </div>
                
    
                <div class="col-8 profilecontent">
                    <router-view></router-view>
                    <!-- <router-view></router-view> -->
                    <router-view name="Profile11"></router-view>
                    <router-view name="PaymentCard"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
// import PaymentCatd from '../components/PaymentCard'
import ProfileNav from '../components/ProfileNav'
export default {
    data() {
        return {
            title:"Profile"
        }
    },
    components: {
        Header,
        ProfileNav,
        // PaymentCatd
    },
    methods: {
        catchhandler: function(val){
           this.title = val;
           console.log(val)
        }
    },
}
</script>

<style lang="scss">
.container {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.profilecontent {
    height: 600px;
    margin-top: 10px;
    box-sizing: border-box;
}

.col-1 {
    span {
        font-size: 28px;
        margin-left: 50px;
        color: #666B46;
        font-weight: bold;
    }
}
</style>