<template>
    <div class="dropdownmenu">
        <div class="wrap1" v-if="!isdrop">
            <label for="">{{labelname}}</label>
            <input type="text" @change="inputchage" :placeholder=place v-model="test">
        </div>
        <div class="wrap2" v-else>
            <label for="">{{labelname}}</label>
            <div class="dropdown">
                <button class="dropbtn">{{stayplacetest}}</button>
                <div class="arrow-down" @click="clickdrop"></div>
                <div class="dropdown-content">
                    <li href="#" v-for="(list,index) in stay" :key="index" @click="clickestay(index)">{{index}}:{{list.staytime}}</li>
                    <!-- <li href="#">{{stay.stay2}}</li>
                                                        <li href="#">{{stay.stay3}}</li> -->
                </div>
            </div>
    
    
    
        </div>
    
    </div>
</template>

<script>
export default {
    props: ["labelname", "isdrop", "stayplace", "place"],
    data() {
        return {
            isdroptest: this.isdrop,
            stayplacetest: this.stayplace,
            test: '',
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
        inputchage() {
            this.$emit('inputchagehandler', this.test, this.labelname)
        },
        clickdrop() {
            document.querySelector(".dropdown-content").style.display = "block";
        },
        clickestay(index) {
            this.stayplacetest = this.stay[index].staytime
            console.log(index + "按到")
            document.querySelector(".dropdown-content").style.display = "none";
        }
    }


}
</script>

<style lang="scss" scoped>
.dropdownmenu {
    display: flex;
    flex-direction: column;
    width: 250px; // border: solid 1px;
    margin-right: 40px;
    margin-left: 40px;
    label {
        width: 55px;
        height: 22px;
        font-family: Arial;
        font-size: 20px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.05;
        letter-spacing: normal;
        text-align: center;
        color: #7e7e7e;
        font-size: 18px;
    }
    input {
        border: none;
        width: 180px;
        border-bottom: solid 2px #707070;
        background-color: transparent;
    }
    .arrow-down {
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #707070; // margin-right: 10px;
    }
    .dropbtn {
        // background-color: #4CAF50;
        color: #888; // padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        height: 25px;
        font-size: 15px; // width: 100%;
        width: 160px;
        background-color: transparent;
        text-align: left;
        border-bottom: 2px solid #707070;
    }
    .dropdown {
        position: relative;
        display: inline-block;
        display: flex;
        justify-content: space-between; // width: 100%;
        align-items: center; // border: solid 1px;
        // width: 100%;
        // border: solid 1px;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        top: 21px;
        background-color: #f9f9f9;
        min-width: 160px; // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
    }
}

// .dropdown:hover .dropdown-content {
//     display: block;
// }
</style>