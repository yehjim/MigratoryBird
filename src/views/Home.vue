<template>
  <div class="home">
    <MainPageTop></MainPageTop>
    <AboutMb></AboutMb>
    <AboutMb></AboutMb>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPageTop from '../components/MainPageTop'
import AboutMb from '../components/AboutMB'

export default {
  name: 'Home',
  components: {
    MainPageTop,
    AboutMb
  }
}
</script>
