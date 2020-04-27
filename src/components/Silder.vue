<template>
    <div class="container">
        <p>{{ $t('message') }}</p>
        <button @click="setzhlang">中文</button>
        <br>
        <button @click="setenlang">英文</button>
    </div>
</template>


<script>
// import {app} from '../i18n'
export default {
    methods: {
      setzhlang(){
        this.$i18n.locale = "zh-TW"
      },
      setenlang(){
        this.$i18n.locale = "en"
      }
    }
}
</script>



<style lang="scss">

</style>