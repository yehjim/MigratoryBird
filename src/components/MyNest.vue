<template>
    <div class="account">
        <div class="itemcontent">
            <div class="housepic">
                <img src="../assets/media/patrick_perkins_3wylDrjxH_E_un_bx@2x.png" alt="">
                <div class="payrentbtn">
                    <router-link to="/payrent">
                        <span>pay rent</span>
                    </router-link>
                </div>
            </div>
            <div class="wrap">
                <span class="chatname">Allen Chang</span>
                <div class="accountcontent">
                    <div>
                        <span>Start:</span>
                        <input type="text" placeholder="2020/03/20">
                    </div>
                    <div>
                        <span>Adress:</span>
                        <input type="text" placeholder="台北市中山區">
                    </div>
                    <div>
                        <span>live/total:</span>
                        <input type="text" placeholder="12mon">
                    </div>
    
                </div>
                <div class="accountcontent">
                    <div>
                        <span>End:{{houseid}}</span>
                        <input type="text" placeholder="2020/09/30">
                    </div>
                    <div>
                        <span>Rent:{{hashouse}}</span>
                        <input type="text" placeholder="unpaid">
                    </div>
    
                </div>
            </div>
    
        </div>
    
    
    </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted(){
        axios.get('http://localhost:7000/housedetail')
            .then((res) => {
                console.log(res.data)
                // this.itemdata = res.dat
                this.housedetail = res.data
                this.houseid = res.data.houseid
                console.log(this.housedetail, "123")
            }).catch((err) => {
                console.log(err)

            })
    },
    data() {
        return {
            houseid: this.$store.state.userdata[0].houseid,
            hashouse: this.$store.state.userdata[0].hashouse
        }
    },
}
</script>

<style lang="scss" scoped>
.account {
    height: 600px; // border: solid 1px;
    margin-top: 40px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .itemcontent {
        display: flex; // justify-content: space-evenly;
        // flex-direction: column;
        border-bottom: 1px solid #D8D8D8;
        width: 95%;
        margin: auto;
        .wrap {
            display: flex;
            flex-direction: column;
            .chatname {
                // border: solid 1px;
                margin-left: 30px;
                font-weight: bolder;
            }
        }
        .housepic {
            // border: solid 1px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 20px; // margin-top: px;
            margin-top: 10px;
            img {
                width: 170px;
                height: 130px;
            }
            .payrentbtn {
                border: solid 1px;
                border-radius: 6px;
                margin-top: 5px;
                margin-bottom: 10px;
                width: 100px;
                height: 25px;
                font-size: 14px;
                text-align: center;
                color: #A6B6AE;
                span{
                    color: #A6B6AE;
                }
            }
        }
        .accountcontent {
            // border: solid 1px;
            display: flex;
            flex-direction: row; // margin-top: 5px;
            div {
                margin-left: 30px;
                margin-bottom: 20px;
                margin-top: 5px;
                display: flex;
                flex-direction: column;
                span {
                    color: #7E7E7E;
                    font-size: 13px;
                }
                input {
                    border: none;
                    border-bottom: 2px solid black;
                    font-size: 12px;
                    color: black;
                    width: 85%;
                }
            }
        }
    }
}
</style>