<template>
    <div class="dropdown">
        <div id="color-picker">
            <div class="wrapper-dropdown">
                <span @click="toggleDropdown()" v-html="selector"></span>
                <ul class="dropdown" v-show="active">
                    <li v-for="(color,index) in colors" :key="index" @click="setColor(color.hex, color.name)">{{color.name}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['datatype','cata'],
    data() {
        return {
            selecteditems: "All",
            active: false,
            selectedColor: '',
            selectedColorName: '',
            colors: this.cata,
            // colors: [{
            //         hex: '#00759A',
            //         name: '1 Year'
            //     },
            //     {
            //         hex: '#F7941D',
            //         name: '2 Year'
            //     },
            //     {
            //         hex: '#A71930',
            //         name: '3 Year'
            //     },
            //     {
            //         hex: '#679146',
            //         name: '4 Year'
            //     }
            // ],
            type: this.datatype
        }
    },
    computed: {
        selector: function() {
            if (!this.selectedColor) {
                return this.type;
            } else {
                return this.selectedColorName;
            }
        }
    },
    methods: {
        setColor: function(color, colorName) {
            this.selectedColor = color;
            this.selectedColorName = colorName;
            this.$emit('custom-event-trigger', this.selectedColorName)
            this.active = false;
        },
        toggleDropdown: function() {
            this.active = !this.active;
        },
    }
}
</script>

<style lang="scss" scoped>
.wrapper-dropdown {
    position: relative;
    width: 80%;
    background: #A6B6AE;
    border-radius: 4px;
    color: white;
    outline: none;
    cursor: pointer;
    >span {
        width: 100%;
        display: block;
        padding: 5px;
        >span {
            padding: 0 12px;
            margin-right: 5px;
        }
        &:after {
            content: "";
            width: 0;
            height: 0;
            position: absolute;
            right: 16px;
            top: calc(50% + 4px);
            margin-top: -6px;
            border-width: 6px 6px 0 6px;
            border-style: solid;
            border-color: white transparent;
        }
    }
    .dropdown {
        position: absolute;
        z-index: 10;
        top: 100%;
        left: 0;
        right: 0;
        background: #fff;
        font-weight: normal;
        list-style-type: none;
        padding-left: 0;
        margin: 0;
        border: 1px solid #A6B6AE;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        border-top: 0;
        li {
            display: block;
            text-decoration: none;
            color: #A6B6AE;
            padding: 5px;
            cursor: pointer;
            >span {
                padding: 0 12px;
                margin-right: 5px;
            }
            &:hover {
                background: #A6B6AE;
                color: white;
                cursor: pointer;
            }
        }
    }
}
</style>