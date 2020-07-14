<template>
    <div>
        <div class="drop" :style="{width:dropdownwidth,backgroundColor:backgroundColor,border:bordercolor}">
            <ul class="droplabel" @click="dropdownyeaar">
                <li>{{location}}</li>
                <div class="arrow-down"></div>
            </ul>
            <ul class="dropcontent" v-if="dropyear" :style="{width:dropcontentwidth}">
                <div v-for="(items,index) in locdrop" :key="index" @click="clickitem(index)">
                    <li>{{items}}</li>
                    <!-- <li>items.item</li> -->
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['locdata', 'loc', 'dropdownwidth', 'dropcontentwidth', 'backgroundColor', 'bordercolor'],
    mounted() {

    },
    watch: {
        locdata: {
            immediate: true,
            handler(val) {
                console.log('locdata Value:' + val);
            }
        }
    },
    data() {
        return {
            dropyear: false,
            locdrop: this.locdata,
            location: this.loc
            // locdrop: [{
            //     item: '台北',

            // }]
        }
    },
    methods: {
        dropdownyeaar() {
            if (this.dropyear == true) {
                this.dropyear = false;
            } else {
                this.dropyear = true;
            }

        },
        // changehandler() {
        //     this.$emit('changeloc', this.loc)
        // },
        clickitem(index) {
            this.dropyear = false
            this.location = this.locdrop[index];
            this.$emit('clickcity', this.location)
        }
    }
}
</script>

<style lang="scss" scoped>
.drop {
    // border: solid 1px;
    // width: 300px;
    border-radius: 5px;
    li {
        list-style: none;
        border-bottom: none;
    }
    .droplabel {
        // border: solid 1px;
        margin-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dropcontent {
        position: absolute;
        margin-bottom: 0;
        height: 200px; // width: 100%;
        overflow: scroll;
        background-color: #ededed;
        border-radius: 2px;
        z-index: 2;
    }
}

.arrow-down {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid #A6B6AE;
    margin-right: 20px;
}
</style>