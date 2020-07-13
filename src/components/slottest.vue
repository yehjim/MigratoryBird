<template>
    <div class="wrap">
        <span class="spanwrap">
            <slot name="name"></slot>
        </span>
        <span class="spanwrap">
            <slot name="loc"></slot>
        </span>
        <span class="spanwrap">
            <slot name="price"></slot>
        </span>
    
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrap {
    border: solid 1px;
    width: 100px;
    height: 100px;
    .spanwrap{
        background-color: beige;
    }
}
</style>