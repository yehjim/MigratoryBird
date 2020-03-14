<template>
    <div class="tabswrap">
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :key="tab" :class="{ 'is-active': tab.isActive }">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>
    
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { tabs: [] };
    },

    created() {

        this.tabs = this.$children;

    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.tabs{
    ul{
        display: flex;
        justify-content: space-around;
        li{
            border-bottom: none;
            padding-top: 20px;
        }
        a{
            color: #A6B6AE;
            font-size: 20px;
            font-weight: bold;
        }
        .is-active{
            a{
                border-bottom: 2px solid ;
            }
        }
        a:hover{
            text-decoration: none;
            border-bottom: 2px solid ;

        }
    }
}
</style>