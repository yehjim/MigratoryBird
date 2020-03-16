<template>
    <div class="container-fluid HDT">
        <Carousel></Carousel>
    </div>
    
</template>

<script>
import Carousel from '../components/Carousel'

export default {
    name: 'HouseDetail',
    components: {
        Carousel,
    }
}
</script>

<style lang="scss" scoped>
    *{
        padding:0px;
    }
</style>