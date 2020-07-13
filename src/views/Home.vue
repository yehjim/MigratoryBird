<template>
    <div class="home">
        
        <!-- <AboutMb></AboutMb> -->
        <!-- <div class="container-fluid wrap">
        </div> -->
        <MainPageTop></MainPageTop>
        <AboutMb></AboutMb>
        <MbSelect></MbSelect>
        <Footer></Footer>
    </div>
</template>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js">

</script>

<script>
// @ is an alias to /src
// import VueAos from 'vue-aos'
import MainPageTop from '../components/MainPageTop'
import AboutMb from '../components/AboutMB'
import MbSelect from '../components/MbSelect'
import Footer from '../components/Footer'
export default {
    name: 'Home',
    components: {
        MainPageTop,
        AboutMb,
        MbSelect,
        Footer,
    }
}
</script>

<style lang="scss" scoped>



</style>
