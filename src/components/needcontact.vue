<template>
    <div class="contactmodal">
        <div class="contactcontent">
            <h5>選擇物件</h5>
            <div class="item" v-for="(item,index) in housedata" :key="index" @click="addclick(item.id,index)" >
                <div class="itempic"></div>
                <div class="content">
                    <span>{{item.city}}{{item.area}}{{item.address}}</span>
                    <span>{{item.type}}{{item.id}}</span>
                    <span>NTD：{{item.monthly}} / 月</span>
                </div>
    
            </div>
            <div class="closebtn" @click="closecontact">
                <span>X</span>
            </div>
            <button class="confirmbtn" @click="sendinfo">confirm</button>
        </div>
    
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['need_id'],
    data() {
        return {
            housedata: [],
            needid: this.need_id,
            isclick: false,
            postneedid: '',
            index: 0
        }
    },
    mounted() {
        axios.get(`http://localhost:7000/housedetail?houseowner_id=${this.userid}`)
            .then((res) => {
                console.log('成功抓取', res.data)
                this.housedata = res.data
                // this.housedata = res.data
                // this.itemdata = res.dat
            }).catch((err) => {
                console.log(err)

            })

    },
    directives:{
        contentclick(el){
            el.style.boxShadow =  "0 3px 6px 0 rgba(0, 0, 0, 0.16)"

        }

    },
    methods: {
        closecontact() {
            this.$emit('closecontact')
        },
        sendinfo() {
            var today = new Date();
            let date =  today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate()
            let info = {
                houseid: this.postneedid,
                need_id: this.need_id,
                content: `${this.housedata[this.index].city}${this.housedata[this.index].area}${this.housedata[this.index].address}對你的需求有興趣`,
                date: date
            }
            axios.post('http://localhost:7000/infobox', info)
                .then(res => {
                    console.log(this.need_id)
                    console.log('post info 成功', res.data);
                })
            // this.$emit('closeadd')

        },
        addclick(id, index) {
            // console.log(index)
            this.index = index;
            this.postneedid = id;
            
            // console.log('123')
            // var item = document.querySelector('.item');
            // item.style.boxShadow =  "0 3px 6px 0 rgba(0, 0, 0, 0.16)"
        }
    },
    computed: {
        houseid() {
            return this.$store.state.userdata[0].houseid;
        },
        userid() {
            return this.$store.state.userdata[0].id
        }
    },
}
</script>

<style lang="scss" scoped>
.click {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}

.contactmodal {
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
    background-color: rgba(239, 239, 239, 0.37);
    .contactcontent {
        width: 900px;
        height: 500px;
        border-radius: 2px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        background-color: #ededed;
        margin: auto;
        overflow: scroll;
        h5 {
            font-family: Arial;
            font-size: 40px;
            color: #7e7e7e; // border: solid 1px;
            text-align: center;
            width: 80%;
            margin: auto;
            border-bottom: 2px #707070 solid;
            padding-top: 30px;
        }
        .item {
            width: 550px;
            height: 197px;
            border-radius: 5px; // box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            background-color: #ffffff;
            transition: 0.3s;
            margin: auto;
            margin-top: 20px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            .itempic {
                width: 200px;
                height: 150px;
                background-color: antiquewhite;
                border-radius: 5px; // margin-top: 10px;
            }
            .content {
                display: flex;
                flex-direction: column;
                span {
                    font-family: Arial;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.11;
                    letter-spacing: normal;
                    text-align: left;
                    color: #7e7e7e;
                    margin-top: 10px;
                }
            }
        }
        .item:hover {
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        }
    }
    .closebtn {
        // float: right;
        // position: relative;
        position: absolute;
        top: 120px;
        left: 1080px; // top: -310px;
        font-size: 30px; // right: 30px;
    }
    .confirmbtn {
        float: right;
        border: solid 1px;
        margin-right: 50px;
        border-radius: 2px;
        margin-bottom: 10px;
        color: #7e7e7e; // margin-top: 50px;
        // margin-bottom: 100px;
    }
}
</style>