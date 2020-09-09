<template>
    <div class="account">
        <div class="savecard">
            <h4 class="title">Save Card</h4>
            <div class="wrap">
                <div v-for="(card,index) in cardcontent" :key="index">
                    <creditcard :cardnumber="card.card_number" :cardid="card.card_number" @deletecardhandler="deletecard"></creditcard>
                </div>
            </div>
        </div>
        <div class="addcard">
            <h4 class="title">Add Card</h4>
            <div class="addcardnumber">
                <span>卡號</span>
                <cleave v-model="card_number" :options="options" class="form-control" name="card" @onCreditCardTypeChanged="type"></cleave>
    
            </div>
            <div class="expernumber">
                <div class="flexbox">
                    <span>到期日</span>
                    <cleave class="exper" v-model="experdate" :options="dateoptions"></cleave>
                    <!-- <input type="text" class="exper" v-model="experdate"> -->
                </div>
                <div class="flexbox">
                    <span>安全碼</span>
                    <input type="text" class="exper" maxlength="3" v-model="trust_code">
                </div>
    
            </div>
        </div>
        <div class="savebtn" @click="save">
            save
        </div>
        <div class="savecardmodal" v-if="savecard=='savecard'">
            <h4 class="title">儲存卡片</h4>
            <div>
                <button class="yes" @click="savenewcard">是</button>
                <button class="no" @click="closesave">否</button>
            </div>
    
    
        </div>
        <div class="savecardmodal" v-if="savestatus">
            <h4 class="title">儲存資料</h4>
            <div>
                <button class="yes" @click="savedata">是</button>
                <button class="no" @click="closesavedata">否</button>
            </div>
    
    
        </div>
    
    </div>
</template>

<script>
import creditcard from '../components/creditcard'
import axios from 'axios'
import Cleave from 'vue-cleave-component';
export default {
    data() {
        return {
            cardcontent: [],
            savecard: "",
            card_id: "",
            card_number: "",
            experdate: "",
            trust_code: "",
            savestatus: false,
            cardNumber: null,
            options: {
                creditCard: true,
                delimiter: ' ',
                creditCardStrictMode: true,
            },
            dateoptions: {
                date: true, // 日期模式
                datePattern: ["m", "d"]
            }

        }
    },
    components: {
        creditcard,
        Cleave
    },
    mounted() {
        this.cardcontent = this.paylist;
    },
    computed: {
        paylist() {
            return this.$store.state.userdata[0].pay_list;
        },
        userid() {
            return this.$store.state.userdata[0].id
        }

    },
    methods: {
        save() {
            let status = this.checkstatus();
            console.log(status)
            if (status == true) {
                this.savestatus = true;
            } else {
                this.savecard = "savecard"
            }

        },
        type(val){
            console.log(val);
        },
        closesave() {
            this.savecard = ""
        },
        closesavedata() {
            this.savestatus = false;
        },
        checkstatus() {
            if (this.card_id == "" && this.card_number == "" && this.experdate == "" && this.trust_code == "") {
                return true;
            } else {
                return false;
            }

        },
        deletecard(val) {
            // console.log(val);
            for (let i = 0; i < this.cardcontent.length; i++) {
                if (this.cardcontent[i].card_number === val) {
                    this.cardcontent.splice(i, 1)
                }
            }

        },
        savedata() {
            axios
                .patch(`http://localhost:7000/user/${this.userid}`, {
                    pay_list: this.cardcontent
                })
                .then(res => {
                    console.log('修改成功', res.data)
                });
            this.savestatus = false;
            this.$emit('closeedit')
            this.$router.push('/profile')

        },
        savenewcard() {
            let newcarddata = {
                card_id: this.card_id,
                card_number: this.card_number,
                experdate: this.experdate,
                trust_code: this.trust_code
            }
            this.cardcontent.push(newcarddata)
            this.card_id = ""
            this.card_number = ""
            this.experdate = ""
            this.trust_code = ""

            this.savecard = ""


        }
    }
}
</script>

<style lang="scss" scoped>
.flexbox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.savecardmodal {
    position: absolute;
    top: -30px;
    left: 50px;
    width: 450px;
    z-index: 1;
    height: 201px;
    border-radius: 2px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    div {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
    }
    .title {
        font-family: Arial;
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        text-align: center;
        color: #a6b6ae; // border: solid 1px;
        height: 80px;
    }
    .yes {
        width: 164px;
        height: 38px;
        border-radius: 2px;
        border: solid 1px #707070;
        background-color: #ffffff; // text-align: center;
    }
    .no {
        width: 164px;
        height: 38px;
        border-radius: 2px;
        border: solid 1px #707070;
        background-color: #ffffff;
    }
}

.account {
    height: 600px; // border: solid 1px;
    margin-top: 40px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .savebtn {
        border: solid 1px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #a6b6ae; // margin-bottom: 50px;
        margin-right: 20px;
        float: right;
        border-radius: 5px;
        border: solid 1px #a6b6ae;
        background-color: #ffffff;
    }
    .savecard {
        // border: 1px solid;
        width: 90%;
        margin: auto;
        border-bottom: solid 1px #a6b6ae;
        height: 45%;
        .wrap {
            display: flex;
            justify-content: space-evenly; // border: solid 1px;
        }
    }
    .addcard {
        // border: 1px solid;
        height: 50%;
        width: 90%;
        margin: auto;
        .addcardnumber {
            display: flex;
            flex-direction: column;
            width: 550px;
            padding-top: 20px; // border: solid 1px;
            margin: auto;
            span {
                font-family: Arial;
                font-size: 20px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 0.9;
                letter-spacing: normal;
                color: #7e7e7e;
            }
            input {
                width: 500px;
                margin-top: 10px;
            }
        }
        .expernumber {
            display: flex; // justify-content: ;
            width: 550px;
            padding-top: 50px; //  margin-top: 50px;
            //  border: solid 1px;
            margin: auto;
            span {
                font-family: Arial;
                font-size: 20px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 0.9;
                letter-spacing: normal;
                text-align: center;
                color: #7e7e7e;
            }
            .exper {
                width: 200px;
                margin-top: 10px;
                margin-right: 100px;
            }
            .code {
                width: 200px;
                margin-top: 10px;
            }
        }
    }
}

.title {
    font-family: Arial;
    font-size: 23px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.71;
    letter-spacing: normal; // text-align: center;
    color: #a6b6ae; // border: solid 1px;
    padding-top: 30px;
    padding-left: 30px;
}
</style>