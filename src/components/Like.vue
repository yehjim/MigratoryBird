<template>
    <div class="account">
        <tabs class="tabswrap">
            <tab name="House" :selected="true">
                <div class="itemwrap">
                    <div>
                        <ProfileItem loc="Taipei" area="ZoghShan" price="NTD:12000"></ProfileItem>
                    </div>
                    <div>
                        <ProfileItem loc="Taipei" area="ZoghShan" price="NTD:12000"></ProfileItem>
                    </div>
                    <!-- <Item></Item> -->
                </div>
                <div class="itemwrap">
                    <div>
                        <ProfileItem loc="Taipei" area="ZoghShan" price="NTD:12000"></ProfileItem>
                    </div>
                    <div>
                        <ProfileItem loc="Taipei" area="ZoghShan" price="NTD:12000"></ProfileItem>
                    </div>
                </div>
    
            </tab>
            <tab name="LFF">
                <div class="itemwrap">
                    <div>
                        <ProfileItem loc="Taipei" area="ZoghShan" price="NTD:12000"></ProfileItem>
                    </div>
                    <div>
                        <ProfileItem loc="Taipei" area="ZoghShan" price="NTD:12000"></ProfileItem>
                    </div>
                </div>
            </tab>
        </tabs>
    </div>
</template>

<script>
import tabs from '../components/Tab/Tabs'
import tab from '../components/Tab/Tab'
import ProfileItem from '../components/ProfileItem'
// import Item from '../components/Item'
export default {
    components: {
        tabs,
        tab,
        ProfileItem,
        // Item
    }
}
</script>

<style lang="scss" scoped>
.account {
    height: 570px; // border: solid 1px;
    margin-top: 40px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .itemwrap {
        display: flex;
        justify-content: space-evenly;
        margin-top: 10px;
    }
}
</style>