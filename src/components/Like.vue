<template>
    <div class="account">
        <tabs class="tabswrap">
            <tab name="House" :selected="true">
                <!-- <Item></Item> -->
            </tab>
            <tab name="LFF">
                <h1>How much we do it for</h1>
            </tab>
        </tabs>
    </div>
</template>

<script>
import tabs from '../components/Tab/Tabs'
import tab from '../components/Tab/Tab'
// import Item from '../components/Item'
export default {
    components:{
        tabs,
        tab,
        // Item
    }
}
</script>

<style lang="scss" scoped>
.account {
    height: 500px; // border: solid 1px;
    margin-top: 60px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}
</style>