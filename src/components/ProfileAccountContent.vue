<template>
    <div class="account">
        <div class="editwrap">
            <span>Account</span>
            <div class="editbtn">
                <router-link to="/profile/editprofile">
                    <span>edit</span>
                </router-link>
            </div>
        </div>
        <div class="accountcontent">
            <div>
                <span>Account:</span>
                <input type="text" placeholder="JIMYEH" v-model="userdata.username">
            </div>
            <div>
                <span>Name:</span>
                <input type="text" placeholder="Name" v-model="userdata.name">
            </div>
            <div>
                <span>Birth:</span>
                <input type="text" placeholder="1999/02/14" v-model="userdata.birth">
            </div>
    
        </div>
        <div class="accountcontent">
            <div>
                <span>Phone:</span>
                <input type="text" placeholder="JIMYEH" v-model="userdata.phone">
            </div>
            <div>
                <span>Password:</span>
                <input type="text" placeholder="male" v-model="userdata.password">
            </div>
            <div>
                <span>Type:</span>
                <input type="text" placeholder="1999/02/14" v-model="userdata.type">
            </div>
    
        </div>
    
    </div>
</template>

<script>
import axios from 'axios'
export default {

    data() {
        return {

            userdata: {}
        }
    },
    mounted() {
        // setTimeout(this.getuserdata, 100)
        axios({
                method: 'get',
                url: `http://localhost:7000/user/${this.userid}`,
                headers: { 'Cache-Control': 'max-age=0' }
            })
            .then((res) => {
                console.log('取得詳細資料')
                this.userdata = res.data
            })
            .catch((err) => { console.error(err) })
    },
    methods: {
        getuserdata() {
            axios({
                    method: 'get',
                    url: `http://localhost:7000/user/${this.userid}`,
                    headers: { 'Cache-Control': 'max-age=0' }
                })
                .then((res) => {
                    console.log('取得詳細資料')
                    this.userdata = res.data
                })
                .catch((err) => { console.error(err) })
        }
    },
    computed: {
        userid() {
            return this.$store.state.userdata[0].id
        }
    }
}
</script>

<style lang="scss" scoped>
.account {
    // border: solid 1px;
    width: 700px;
    height: 270px; // border: solid 1px;
    margin-top: 50px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .editwrap {
        // border: solid 1px;
        display: flex;
        padding-left: 15px;
        padding-top: 10px;
        span {
            font-size: 20px;
            color: #A6B6AE;
            font-weight: lighter;
        }
        .editbtn {
            width: 50px;
            height: 20px;
            background-color: #A6B6AE;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 18px;
            margin-left: 20px;
            margin-top: 5px;
            span {
                font-size: 12px;
                color: white;
            }
        }
    }
    .accountcontent {
        // border: solid 1px;
        display: flex;
        div {
            margin-left: 45px;
            margin-bottom: 30px;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            span {
                color: #7E7E7E;
            }
            input {
                border: none;
                border-bottom: 3px solid black;
                color: black;
            }
        }
    }
}
</style>