<template>
    <div class="around">
        <span n_title>生活機能</span> <br>
        <div class="allTag">
            <div v-for="(item,index) in life_function" :key="index">
                <div class="tag">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['life_function'],
    name: 'HouseAround',
}
</script>

<style lang="scss" scoped>
.around {
    .allTag {
        padding-left: 20px;
        .tag {
            width: auto;
            height: 30px;
            display: inline-flex;
            justify-content: center;
            background-color: #A6B6AE;
            padding: 5px 10px 5px;
            margin: 3px;
            border-radius: 3px;
            color: #ffffff;
            font-size: 15px;
        }
    }
}
</style>