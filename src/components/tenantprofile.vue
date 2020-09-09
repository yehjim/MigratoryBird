<template>
    <b-container fluid class="tenantwrap">
        <div class="tenantprofile">
            <div class="tenanttitle">
                <span>Tenant Profile</span>
            </div>
            <div class="cv">
                <div class="profilepic">
                    <div></div>
                </div>
                <div class="profileinfo">
                    <div class="name">
                        <span>{{name}}</span>
                    </div>
                    <div class="info">
                        <div class="loc">
                            <span>{{country}}</span>
                        </div>
                        <div class="birth">
                            <span>{{birth}}</span>
    
                        </div>
                        <div class="gender">
                            <span>{{gender}}</span>
    
                        </div>
                        <div class="mail">
                            <span>{{username}}</span>
    
                        </div>
                        <div class="phone">
                            <span>{{phone}}</span>
    
                        </div>
                    </div>
                    <div class="livehabit">
                        <span>Living Habit</span>
                        <!-- <hr> -->
                        <textarea></textarea>
                        <!-- <input type="text"> -->
                    </div>
                    <div class="livehabit">
                        <span>Living Habit</span>
                        <!-- <hr> -->
                        <textarea></textarea>
                    </div>
                    <div class="livehabit">
                        <span>Living Habit</span>
                        <!-- <hr> -->
                        <textarea></textarea>
                    </div>
                    <div class="livehabit">
                        <span>Living Habit</span>
                        <!-- <hr> -->
                        <textarea></textarea>
                    </div>
                    <div class="habitcheck">
                        <div>
                            <label for="">抽煙</label>
                            <span>會</span>
                            <input type="radio" name="" id="">
                            <span>不會</span>
                            <input type="radio" name="" id="">
                        </div>
                        <div>
                            <label for="">用藥</label>
                            <span>會</span>
                            <input type="radio" name="" id="">
                            <span>不會</span>
                            <input type="radio" name="" id="">
                        </div>
    
    
                    </div>
                </div>
    
            </div>
            <div class="btnwrap">
                <div class="backbtn" @click="back">
                    <span>Back</span>
                </div>
                <div class="nextbtn" @click="next">
                    <span>next</span>
                </div>
            </div>
    
        </div>
    </b-container>
</template>

<script>
export default {
    methods: {
        next() {
            this.$emit('next2handler')
        },
        back() {
            this.$emit('backhandler')
        }
    },
    computed: {
        name() {
            return this.$store.state.userdata[0].name
        },
        country() {
            return this.$store.state.userdata[0].country
        },
        birth() {
            return this.$store.state.userdata[0].birth
        },
        gender() {
            return this.$store.state.userdata[0].gender
        },
        username() {
            return this.$store.state.userdata[0].username
        },
        phone() {
            return this.$store.state.userdata[0].phone
        }
    }

}
</script>

<style lang="scss" scoped>
.tenantwrap {
    padding: 0;
    margin: 0;
}

.tenantprofile {
    // border: solid 1px;
    margin-top: 140px; // border: solid 1px;
    .tenanttitle {
        // border: solid 1px ;
        font-size: 24px;
        color: #666b46;
        margin-bottom: 10px;
    }
    .cv {
        border: solid 1px;
        height: 800px;
        width: 600px;
        border-radius: 10px;
        border: solid 1px #707070; // width: 400px;
        .profilepic {
            // border: solid 1px;
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: center;
            margin-top: 20px;
            div {
                border: solid 1px;
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
        }
        .profileinfo {
            // border: solid 1px;
            .name {
                // border: solid 1px;
                border-bottom: solid 1.5px #6a6a6a;
                width: 500px;
                margin: auto;
                text-align: center;
                font-size: 25px;
                margin-top: 10px;
            }
            .info {
                // width: 500px;
                width: 500px;
                margin: auto;
                text-align: center;
                margin-top: 10px;
            }
        }
        .livehabit {
            // border: solid 1px;
            width: 500px;
            margin: auto;
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            span {
                font-family: LucidaBright;
                font-size: 18px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal; // line-height: 1;
                // margin-bottom: 0;
                letter-spacing: 2.5px;
                text-align: left;
                color: #a6b6ae;
                border-bottom: 1px solid;
            }
            textarea {
                margin-top: 10px; // width: px;
                height: 40px;
                border-radius: 5px;
                border: solid 1px #7e7e7e;
                background-color: #ffffff;
            }
        }
        .habitcheck {
            // border: solid 1px;
            width: 500px;
            margin: auto;
            margin-top: 17px;
            display: flex;
            justify-content: space-around;
            label {
                font-size: 18px; // border: solid 1px;
                margin-right: 10px;
                 color: #a6b6ae;
            }
            span {
                font-size: 17px;
                 color: #a6b6ae;
                 margin-right: 5px;
                 margin-left: 5px;
            }
            input {
                border: solid 1px #a6b6ae;
            }
        }
    }
    .btnwrap {
        display: flex;
        justify-content: space-between;
    }
    .nextbtn,
    .backbtn {
        width: 70px;
        height: 30px;
        border-radius: 4px;
        border: solid 2px #a6b6ae;
        display: flex;
        justify-content: center;
        align-items: center;
        border: solid 1px; // float: right;
        margin-top: 20px;
        span {
            font-size: 10px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.67;
            letter-spacing: normal;
            text-align: center;
            color: #a6b6ae;
        }
    }
}
</style>