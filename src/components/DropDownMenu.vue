<template>
    <div class="hidden_nav">
        <router-link to="/profile">
            <span>Profile</span><br />
        </router-link>
        <router-link to="/profile/MyNest">
            <span>My Nest</span> <br />
        </router-link>
        <router-link to="/profile/Like">
            <span>Like</span> <br />
        </router-link>
        <router-link to="">
            <span>LFR</span> <br />
        </router-link>
    
        <!-- <div class="infoDot_inBox" v-if="isShowInfoDot"></div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.hidden_nav {
    position: fixed;
    // position: absolute; // position: relative;
    z-index: 1;
    height: 120px;
    right: 90px;
    background-color: white;
    border: 1px solid #A6B6AE;
    border-radius: 4px;
    text-align: left;
    right: -100px;
    padding: 10px 10px 10px 17px;
    transform: translateX(-160%) translateY(25%);
    span {
        color: #7E7E7E;
    } // .infoDot_inBox {
    //     @include size($w: 10px, $h: 10px);
    //     border-radius: 50%;
    //     background-color: #FA8937;
    //     position: absolute;
    //     left: 60%;
    //     top: 77%
    // }
}
</style>