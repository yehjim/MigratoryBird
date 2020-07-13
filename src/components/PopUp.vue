<template>
    <div id="myModal" class="modal" v-bind:style="{display: langpopup}">
    
        <!-- Modal content -->
        <div class="modal-content">
            <div class="closebtn">
    
                <span class="close" @click="MoreClose">&times;</span>
            </div>
            <div class="topfilter">
                <div class="langtitle">
                    <span>Language</span>
                </div>
                <div class="zh">
                    <label>繁體中文</label>
                    <input type="checkbox" value="zh-TW" v-model="labelname" @click="setzhlang" id="zh">
                </div>
                <div class="en">
                    <label for="">English</label>
                    <input type="checkbox" value="en" v-model="labelname" @click="setenlang" id="en">
    
                </div>
                <div class="jp">
                    <label for="">日本語</label>
                    <input type="checkbox" value="jp" v-model="labelname" @click="setjplang" id="jp" />
    
    
                </div>
                <div class="confirmbtn" @click="setlang">
                    <span>confirm</span>
                </div>
    
    
    
            </div>
    
        </div>
    
    </div>
</template>

<script>
export default {
    props: ["displaystyle"],
    data() {
        return {
            labelname: [],
            group: [],
            zh: ''
        }
    },
    methods: {
        MoreClose() {
            console.log('按到')
            this.$store.commit('closelangmodal')
        },
        // MoreClose: function() {
        //     var modal = document.getElementById("myModal");

        //     modal.style.display = "none";
        // },
        setzhlang() {
            // console.log
            // this.$i18n.locale = this.labelname[0]
            // let a = document.getElementById("zh").value;
            // this.$i18n.locale = a;
            console.log(this.labelname[0])
        },
        setenlang() {
        },
        setjplang() {

        },
        setlang() {
            this.$i18n.locale = this.labelname[0];
            this.$store.commit('closelangmodal');
        }
    },
    computed: {
        langpopup() {
            return this.$store.state.langdisplay;
        },
    }
}
</script>

<style lang="scss" scoped>
.modal {
    // display: none;
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 5;
    /* Sit on top */
    padding-top: 100px;
    /* Location of the box */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
    .topfilter {
        // border: solid 1px; // display: flex;
        // .title {
        //     border: solid 1px;
        text-align: center;
        .langtitle {
            // border: solid 1px;
            width: 300px;
            margin: auto;
            border-bottom: solid 3px #666B46;
            span {
                font-size: 25px;
                color: #666B46; // text-align: center;
            }
        }
        .zh,
        .en,
        .jp {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: auto;
            margin-top: 20px; // border: solid 1px;
            width: 300px;
            label {
                color: #A6B6AE;
                font-weight: lighter;
            }
            input {
                width: 15px;
                height: 15px; // margin-left: 100px;
                // list-style: none;
                background-color: #A6B6AE;
            }
        }
        .confirmbtn {
            border: solid 1px;
            width: 100px;
            float: right;
            margin-top: 20px;
            border-radius: 5px;
            color: #666B46;
        }
    }
}

/* Modal Content */

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
    .closebtn {
        display: flex;
        justify-content: flex-end;
    }
}

/* The Close Button */

.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}
</style>