<template>
    <div id="BriefInfoBar" class="container">
        <div class="row brief_infobar">
            <!-- <div class="col-1"></div> -->
            <!-- <div class="div" v-for="item in h"> -->
            <div class="col-1 leftcorner"></div>
            <div class="col-2 houseCity">{{city}}{{area}}</div>
            <!-- </div> -->
            <div class="col-2 houseTitle">{{state}}</div>
            <div class="col-1"></div>
            <div class="col-3 price">
                <div class="p_table">
                    <table>
                        <tr>
                            <td class="Ta">NTD : {{monthly}}/mon</td>
                        </tr>
                        <tr>
                            <td class="Tb">US : 500/mon</td>
                        </tr>
                    </table>
                </div>
    
                <div class="icon_Heart" v-if="hoststatus">
                    <img v-if="isadd" src="../assets/media/heart-red.svg" alt="">
                    <img v-else src="../assets/media/heart-black.svg" alt="save" />
                </div>
                <div class="icon_Heart" @click="addlike" v-else>
                    <img v-if="isadd" src="../assets/media/heart-red.svg" alt="">
                    <img v-else src="../assets/media/heart-black.svg" alt="save" />
                </div>
            </div>
            <div class="col-2">
                <input type="button" @click="showcheckin" value="入住" class="button_book" data-toggle="modal" data-target="#myModal" />
                <input type="button" class="button_magnify" />
            </div>
            <div class="col-1"></div>
        </div>
        <!-- datepicker -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Check In</h4>
                    </div>
                    <div class="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div class="modal-footer">
                        <router-link to='/Booking'>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Booking</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "BriefInfoBar",
    props: ['city', 'area', 'state', 'monthly'],
    mounted() {
        let houseid = this.$route.params.id;
        axios.get(`http://localhost:7000/housedetail?houseid=${houseid}`)
            .then((res) => {
                console.log(res.data)
                // this.itemdata = res.dat
                this.housedetail = res.data
                // this.houseid = res.data.houseid
                console.log(this.housedetail, "123")
            }).catch((err) => {
                console.log(err)

            })
        if (this.login == true) {
            if (this.likestatus == true) {
                this.isadd = true;
            } else {
                this.isadd = false;
            }
        }

    },
    data() {
        return {
            houseid: 0,
            housedetail: [],
            isadd: false,
            // likelist: [1, 2]
        }
    },
    methods: {
        showcheckin() {
            console.log('按到')
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            if (this.login == false) {
                alert('未登入')
            } else if (this.usertype == "host") {
                alert('你是房東')
            } else {
                this.$emit('showcheckinhandler')
            }

        },
        addlike() {

            let houseid = this.$route.params.id;
            if (this.isadd == true) {
                this.$store.commit('delelikelist', houseid);
                axios
                    .patch(`http://localhost:7000/user/${this.userid}`, {
                        likelist: this.likelist
                    })
                    .then(res => {
                        console.log('修改成功', res.data)
                    });
                this.isadd = false;
            } else {
                this.$store.commit('updatelikelist', houseid)
                axios
                    .patch(`http://localhost:7000/user/${this.userid}`, {
                        likelist: this.likelist
                    })
                    .then(res => {
                        console.log('修改成功', res.data)
                    });
                this.isadd = true;
            }

        }
    },
    components: {

    },
    computed: {
        userid() {
            return this.$store.state.userdata[0].id
        },
        likelist() {
            return this.$store.state.userdata[0].likelist;
        },
        usertype() {
            return this.$store.state.userdata[0].type;
        },
        likestatus() {
            // let islike = false;
            let houseid = this.$route.params.id;
            let index = this.likelist.indexOf(houseid);
            if (index != -1) {
                return true
            } else {
                return false
            }

        },
        login() {
            return this.$store.state.login;
        },
        hoststatus() {
            return this.$store.state.hostcheck;
        }
    }
};
</script>

<style lang="scss" scoped>
@mixin size($w, $h) {
    width: $w;
    height: $h;
}

$font_basic_size: 10px;
$color_white: #ffffff;
$color_grey: #848484;
$color_darkWhite: #ededed;
$color_darkGreen: #666b46;
* {
    font-family: 微軟正黑體;
    position: relative;
    box-sizing: border-box;
}

.brief_infobar {
    @include size($w: auto, $h:100%); // position: relative; // border: 1px solid black;
    // margin-top: -80px;
    // border: solid 1px;
    // margin-top: -80px;
    // top: -85px;
    background-color: $color_darkWhite;
    .leftcorner {}
    .houseCity,
    .houseTitle {
        background-color: $color_darkWhite;
        line-height: 90px; // padding-left: 50px;
    }
    .col-4,
    .price,
    .col-2 {
        background-color: $color_darkWhite;
        height: 90px;
    }
    .houseCity {
        color: $color_darkGreen;
        font-size: $font_basic_size * 3;
        font-weight: bolder;
        padding-left: 10px;
    }
    .houseTitle {
        color: $color_grey;
        font-size: 20px; // font-size: $font_basic_size * 1.5;
        font-weight: bold;
        padding-left: 5px;
    }
    .price {
        // border: 1px solid;
        padding-top: 15px;
        color: $color_grey; // line-height: 30px;
        .Ta {
            // border: 1px solid;
            font-size: 20px; // font-size: $font_basic_size * 2.5;
        }
        .Tb {
            // border: 1px solid
            font-size: 17px;
        }
        .icon_Heart {
            bottom: 40px;
            margin-left: 10px;
            cursor: pointer;
        }
        .icon_Heart,
        img {
            @include size($w: 35px, $h: auto);
        }
        .p_table,
        .icon_Heart {
            // border: 1px solid
            display: inline-block;
        }
    } // .col-2{
    //     border: 1px solid;
    // }
    .button_book {
        // border: solid 1px;
        @include size($w: 120px, $h: 30px);
        font-weight: bold;
        color: $color_white;
        background-color: $color_darkGreen;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 5%;
        border: none;
        cursor: pointer;
    }
    .button_magnify {
        @include size($w: 40px, $h: 40px);
        background-image: url("../assets/media/icon_magnify.png");
        background-color: $color_darkWhite;
        background-repeat: no-repeat;
        border-radius: 100%;
        border-style: 3px $color_grey solid;
        background-size: 20px 20px;
        background-position: center;
        position: absolute;
        left: 145%;
        transform: translateX(-50%) translateY(-50%);
        cursor: pointer;
    }
}

.modal {
    height: 500px;
    position: absolute;
    top: -530%; // border: 1px solid #000;
    .modal-dialog {
        width: 600px;
        height: 400px; // border: 1px solid green;
        .modal-content {
            // border: 1px solid red;
            height: 400px;
            .modal-header {
                border-bottom: none;
                justify-content: flex-start;
            }
            .modal-body {
                border: 1px solid none;
            }
            .modal-footer {
                border-top: none;
            }
        }
    }
}
</style>
