<template>
    <div class="stay">
        <span>Stay</span>
        <br>
        <div class="dropdown">
            <button class="dropbtn">{{stayplace}}</button>
            <div class="arrow-down" @click="clickdrop"></div>
            <div class="dropdown-content">
                <li href="#" v-for="(list,index) in stay" :key="index" @click="clickestay(index)">{{index}}:{{list.staytime}}</li>
                <!-- <li href="#">{{stay.stay2}}</li>
                            <li href="#">{{stay.stay3}}</li> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stayplace: "6mon",
            stay: [{
                    staytime: "6mon",
                },
                {
                    staytime: "1year",
                },
                {
                    staytime: "1year6mon"
                }

            ]
        }
    },
    methods: {
        clickdrop() {
            document.querySelector(".dropdown-content").style.display = "block";
        },
        clickestay(index) {
            this.stayplace = this.stay[index].staytime
            console.log(index + "按到")
            document.querySelector(".dropdown-content").style.display = "none";
        }
    }
}
</script>

<style lang="scss" scoped>
.stay {
    // border: solid 1px;
    width: 100%; // margin-top: 5px;
    // margin-left: 30px;
    padding-top: 5px;
    padding-left: 30px;
    span {
        padding-left: 5px;
    }
    .arrow-down {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 15px solid #A6B6AE;
        margin-right: 20px;
    }
    .dropbtn {
        // background-color: #4CAF50;
        color: #888; // padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        height: 25px;
        font-size: 15px;
    }
    .dropdown {
        position: relative;
        display: inline-block;
        display: flex;
        justify-content: space-between;
        align-items: center; // border: solid 1px;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        top: 21px;
        background-color: #f9f9f9;
        min-width: 160px;
        // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        // transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        z-index: 1;
    }
    .dropdown-content li {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    .dropdown-content li:hover {
        background-color: #f1f1f1
    } // .dropdown:hover .dropdown-content {
    //     display: block;
    // }
}
</style>