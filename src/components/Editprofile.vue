<template>
    <div class="account">
        <div class="accountcontent">
            <div class="wrap">
                <span>Name:</span>
                <input type="text" :placeholder="userdata.name" v-model="editdata.name">
            </div>
            <div class="wrap">
                <span>Gender:</span>
                <!-- <input type="text" placeholder="male" v-model="userdata.gender"> -->
                <dropdown dropdownwidth="250px" dropcontentwidth="250px" :locdata="gender" loc="gender" @clickcity="genderhandler" bordercolor="solid 1px #A6B6AE"></dropdown>
            </div>
    
    
        </div>
        <div class="accountcontent">
            
            <div class="wrap">
                <span>Account:</span>
                <input type="text" :placeholder="userdata.username" v-model="editdata.username" >
            </div>
            <div class="wrap">
                <span>Password:</span>
                <input type="text" :placeholder="userdata.password" v-model="editdata.password">
            </div>
    
    
        </div>
        <div class="accountcontent">
            <div class="wrap">
                <span>Phone:</span>
                <input type="text" :placeholder="userdata.phone" v-model="editdata.phone">
            </div>
            <div class="wrap">
                <span>Birth:</span>
                <!-- <input type="text" placeholder="1999/02/14" v-model="userdata.birth"> -->
                <Cleave :options="dateoptions" :placeholder="userdata.birth" v-model="editdata.birth"></Cleave>
            </div>
    
        </div>
        <div class="savecardmodal" v-if="savestatus">
            <h4 class="title">儲存資料</h4>
            <div>
                <button class="yes" @click="savedata">是</button>
                <button class="no" @click="closesavedata">否</button>
            </div>
    
    
        </div>
        <button class="savebtn" @click="save">
                                        儲存
                                    </button>
    </div>
</template>

<script>
import dropdown from '../components/itemlocdrop'
import Cleave from 'vue-cleave-component';
import axios from 'axios'
export default {
    data() {
        return {
            userdata: {
            },
            editdata: {
                name: '',
                username:'',
                phone: '',
                password: '',
                birth: '',
                gender: ''
            },
            username: '',
            phone: '',
            password: '',
            birth: '',
            gender: ['男', '女'],
            dateoptions: {
                date: true, // 日期模式
                datePattern: ["Y", "m", "d"]
            },
            savestatus: false
        }
    },
    mounted() {
        axios.get(`http://localhost:7000/user/${this.userid}`)
            .then((res) => {
                console.log(res.data)
                this.userdata = res.data
                // this.itemdata = res.dat
                // this.housedetail = res.data
                // // this.houseid = res.data.houseid
                // console.log(this.housedetail, "123")
            }).catch((err) => {
                console.log(err)

            })
    },
    methods: {
        genderhandler(val) {
            console.log(val);

        },
        savedata() {
            let editobj = {}
            let vm = this;
            for (var key in this.editdata) {

                if (this.editdata[key] == '' || this.editdata[key] == null) {
                    continue;
                } else {
                    editobj[key] = this.editdata[key];
                    console.log('有更改' + this.editdata[key])
                    // return false
                }
            }
            axios.patch(`http://localhost:7000/user/${this.userid}`, editobj)
                .then((res) => {
                    console.log(res.data)
                    // this.itemdata = res.dat
                }).catch((err) => {
                    console.log(err)

                })

            vm.$router.push('/profile')
        },
        closesavedata() {
            this.savestatus =false;
        },
        save() {
            this.savestatus =true;
        }
    },
    computed: {
        userid() {
            return this.$store.state.userdata[0].id
        }
    },
    components: {
        dropdown,
        Cleave
    }
}
</script>

<style lang="scss" scoped>
.account {
    height: 550px; // border: solid 1px;
    margin-top: 50px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .accountcontent {
        // border: solid 1px;
        width: 100%; // border: solid 1px;
        display: flex; // justify-content: space-evenly;
        align-items: center;
        .wrap {
            // border: solid 1px;
            // border: solid 1px;
            width: 40%; // margin-left: 30px;
            margin-right: 30px;
            margin-left: 30px;
            margin-bottom: 30px;
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            span {
                color: #7E7E7E;
                margin-bottom: 10px;
            }
            input {
                border: none;
                border-bottom: 3px solid black;
                color: black;
            }
        }
    }
    .savebtn {
        float: right;
        border: solid 1px;
        width: 100px;
        color: #a6b6ae; // margin-bottom: 50px;
        margin-right: 20px;
        float: right;
        border-radius: 5px;
        border: solid 1px #a6b6ae;
        background-color: #ffffff;
    }
    .savecardmodal {
        position: absolute;
        top: -30px;
        left: 50px;
        width: 400px;
        z-index: 1;
        height: 100px;
        border-radius: 2px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ffffff;
        div {
            display: flex;
            justify-content: space-around; // margin-top: 20px;
        }
        .title {
            font-family: Arial;
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            text-align: center;
            color: #a6b6ae; // border: solid 1px;
            height: 40px;
            margin-top: 10px;
        }
        .yes {
            width: 150px;
            height: 30px;
            border-radius: 2px;
            border: solid 1px #707070;
            background-color: #ffffff; // text-align: center;
        }
        .no {
            width: 150px;
            height: 30px;
            border-radius: 2px;
            border: solid 1px #707070;
            background-color: #ffffff;
        }
    }
}
</style>