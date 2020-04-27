<template>
    <div class="container-fluid top">
        <div class="row banner">
            <div class="col-4">
                <h1 class="title">MIGRA</h1>
            </div>
            <div class="col-6"></div>
            <div class="col-2">
    
                <span class="opentoggle" id="opentoggle" @click="open">☰</span>
    
                <nav class="rightbar" id="rightbar">
                    <div class="togglewrap">
                        <span class="toggle" @click="close">☰</span>
                        <div class="langchange" @click="More">
                            <img src="../assets/media/global.svg" alt="">
                        </div>
                    </div>
                    <div class="navitems">
                        <router-link to="/profile">
                            <span>Profile</span>
                        </router-link>
                        <span>Find</span>
                        <span>Post</span>
                        <span>Comunity</span>
                        <router-link to="/login">
                            <span>Login</span>
                        </router-link>
                    </div>
                </nav>
            </div>
        </div>
        <div class="row slogan">
            <div class="col-2"></div>
            <div class="col-4">
                <h2>Safe</h2>
                <h2>Family</h2>
                <h2>Hometown</h2>
            </div>
            <div class="col-6"></div>
        </div>
        <div class="row b1">
            <div class="col-3 searchloaction">
                <span>Location</span>
                <input type="text" placeholder="Taipei">
            </div>
            <div class="col-3 searchdate">
                <span>Date</span>
                <input type='text' class="form-control" id='datetimepicker4' placeholder="2020/06/30" />
            </div>
            <div class="col-3 searchstay">
                <span>Stay</span>
                <span>2 months</span>
            </div>
            <div class="col-3 search">
                <router-link to="/search" style="color:white;"><span>{{ $t('mainpagetop.BOOKNOW') }}</span></router-link>
                <router-view></router-view>
            </div>
        </div>
        <div id="myModal" class="modal">
    
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
    </div>
</template>

<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous">

</script>

<script>
export default {
    name: 'MainPageTop',
    data() {
        return {
            labelname: [],
            group: []
        }
    },
    mounted() {
        $(document).ready(function() {
            $('#datetimepicker4').datepicker({

            });
        });
    },
    methods: {
        open() {
            document.getElementById("rightbar").style.display = "block";
            document.getElementById("opentoggle").style.display = "none";
            var elt = document.querySelector(".col-2")
            elt.setAttribute("style", "background-color: white; transition:0.5s;");
        },
        close() {
            document.getElementById("rightbar").style.display = "none";
            document.getElementById("opentoggle").style.display = "block";
            var elt = document.querySelector(".col-2")
            elt.setAttribute("style", "background-color: transparent; transition:0.5s ease-out;");

        },
        More: () => {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";

        },
        MoreClose: () => {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        },
        // MoreClose: function() {
        //     var modal = document.getElementById("myModal");

        //     modal.style.display = "none";
        // },
        setzhlang() {
            // this.$i18n.locale = this.labelname[0]
            // let a = document.getElementById("zh").value;
            // this.$i18n.locale = a;
            // console.log(a)
        },
        setenlang() {
            // let a = document.getElementById("en").value;
            // this.$i18n.locale = a;
        },
        setjplang() {

        },
        setlang() {
            // let a = document.getElementById("zh").value;
            this.$i18n.locale = this.labelname[0];
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
            // console.log(a)
        }
    },
}
</script>

<style lang="scss" scoped>
.top {
    background-image: url('../assets/media/joyce-romero-EV_bivvSaC8-unsplash.jpg');
    width: 100%;
    height: 100%;
    background-position: center;
    background-position-y: -1000px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .banner {
        height: 80vh;
    }
    .title {
        color: white;
        font-size: 100px;
        padding-top: 50px;
        padding-left: 100px;
    } // .col-2 {
    //     height: 100vh;
    // }
    .opentoggle {
        font-size: 50px;
        margin-left: 100px; // display: none;
        color: white;
        transition: 0.5s;
    }
    .opentoggle:hover {
        cursor: pointer;
    }
    .rightbar {
        display: flex;
        flex-direction: column;
        list-style: none;
        font-size: 25px;
        color: #666B46;
        display: none;
        height: 100vh;
        transition: 0.5s;
        .toggle {
            font-size: 50px;
            margin-right: 30px;
            transition-duration: 0.4s; // border: solid 1px;
        }
        .toggle:hover {
            cursor: pointer;
        }
        .togglewrap {
            display: flex;
            justify-content: space-between;
            .langchange {
                // border: solid 1px;
                width: 70px;
                height: 50px;
                margin-left: 60px;
                margin-top: 10px; // 
                padding-left: 10px;
                padding-right: 10px;
                padding-top: 5px;
                img {
                    // border: solid 1px;
                    width: 30px;
                    height: 30px;
                } // margin-right: 0;
                // margin-right: 40px;
            }
        }
        .navitems {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            border: solid 1px;
            span {
                margin-left: 40px;
                margin-bottom: 10px;
                transition: 0.5s ease-out;
            }
            span:hover {
                font-size: 28px;
                text-decoration: underline;
            }
        }
    }
}

.slogan {
    position: absolute;
    top: 180px;
    left: 200px;
    .col-4 {
        color: white;
        h2 {
            font-size: 50px;
        }
    }
}

.b1 {
    width: 1000px;
    height: 20vh;
    .col-3 {
        width: 300px;
        height: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    .searchloaction {
        input {
            border: none;
            color: #666B46;
        }
    }
    .searchdate{
        input{
            width: 80%;
            border: none;
            height: 20px;
        }
    }
    .search {
        color: white;
        background-color: #666B46;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 100px;
        transition: 0.3s;
    }
    .search:hover {
        font-size: 23px;
        text-decoration: underline;
    }
}

.modal {
    display: none;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
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
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            input {
                width: 15px;
                height: 15px; // margin-left: 100px;
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