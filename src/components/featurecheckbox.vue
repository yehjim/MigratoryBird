<template>
    <div>
        <div class="wrap">
            <label for="" class="title">產權登記</label>
            <label for="">是</label>
            <input type="checkbox" class="property">
            <label for="">否</label>
            <input type="checkbox" class="property">
        </div>
        <div class="wrap">
            <label for="" class="title">是否接受議價</label>
            <label for="">是</label>
            <input type="checkbox" class="property">
            <label for="">否</label>
            <input type="checkbox" class="property">
        </div>
        <div class="wrap">
            <label for="" class="title">租金包含</label>
            <div class="fee">
                <label for="">電費</label>
                <input type="checkbox" class="property">
                <label for="">水費</label>
                <input type="checkbox" class="property">
                <label for="">網路費</label>
                <input type="checkbox" class="property">
                <label for="">管理費</label>
                <input type="checkbox" class="property">
            </div>
    
        </div>
    
    
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.title {
    // border: solid 1px;
    width: 100px;
}

.wrap {
    // border: solid 1px;
    width: 100%;
    display: flex; // align-items: center;
    margin-top: 10px;
    label {
        margin-right: 20px;
        margin-left: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.15;
        letter-spacing: normal;
        text-align: left;
        color: #666b46;
        
    }
    .fee{
        display: flex;
        flex-wrap: wrap;
        // border: solid 1px;
        width: 230px;
        justify-content: space-evenly;
    }
    .property {
        width: 15px;
        height: 15px;
        border-radius: 10px;
        background-color: #666b46;
    }
}
</style>