<template>
  <div class="home">
    <MainPageTop></MainPageTop>
    <AboutMb></AboutMb>
    <AboutMb></AboutMb>
    <MbSelect></MbSelect>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPageTop from '../components/MainPageTop'
import AboutMb from '../components/AboutMB'
import MbSelect from '../components/MbSelect'

export default {
  name: 'Home',
  components: {
    MainPageTop,
    AboutMb,
    MbSelect
  }
}
</script>
