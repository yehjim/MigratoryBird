<template>
    <div class="describe">
        <div class="left">
            <div class="about">
                <span>Edit About Item</span>
                <textarea v-model="describedata.house_describe" @change="abouttext" id="housedecribe">
                </textarea>
            </div>
            <div class="rule">
                <span>Edit Host rule</span>
                <textarea v-model="describedata.rule" @change="ruletext"></textarea>
                <!-- <input type="text"> -->
            </div>
        </div>
        <div class="right">
            <div class="title">
                <span>Image</span>
                <!-- <input type="file" id="file-uploader" data-target="file-uploader" accept="image/*" multiple="multiple"> -->
    
    
            </div>
            <div class="wrap">
                <div class="uploadbtn">
                    <span>Upload</span>
                    <input type='file' id="imgInp" title="" @change="test()" multiple />
                </div>
                <!-- <img id="blah" class="pic" src="#" /> -->
                <div class="cr">
                    <b-carousel id="carousel" controls :interval="0">
                        <b-carousel-slide>
                            <template v-slot:img>
                                                            <img
                                                            id="blah0"
                                                            class="pic"
                                                            >
</template>
                    </b-carousel-slide>
                    <b-carousel-slide>
<template v-slot:img>
    <img id="blah1" class="pic">
</template>
                    </b-carousel-slide>
                    <b-carousel-slide>
<template v-slot:img>
    <img id="blah2" class="pic">
</template>
                    </b-carousel-slide>
                </b-carousel>
                </div>
                
            </div>
    
    
        </div>
    
    </div>
</template>

<script>

export default {
    props:['editmode','editdata'],
    data() {
        return {
            describedata: {
                house_describe: '',
                rule:  ''
            }

        }
    },
    mounted: function mounted() {
        this.describedata.house_describe = this.editdata.house_describe,
        this.describedata.rule  = this.editdata.rule
        // const fileUploader = document.querySelector('#imgInp');

        // fileUploader.addEventListener('change', function() {
        //     this.test();
        // });

    },
    computed: {
        
    },

    methods: {
        abouttext() {
            this.$store.commit('sethousedescribe', this.describedata)
            // this.$emit('abouttexthandler',this.about);
        },
        ruletext() {
            // this.$emit('rultexthandler',this.rule);
        },
        test() {
            let a = document.querySelector('#imgInp')
            console.log(a.files);
            this.readURL(a);
        },
        readURL(input) {
            for (let i = 0; i < 3; i++) {
                if (input.files && input.files[i]) {
                    var reader = new FileReader();

                    reader.onload = function(e) {
                        document.querySelector('#blah' + i).setAttribute('src', e.target.result);
                    }

                    reader.readAsDataURL(input.files[i]); // convert to base64 string
                }
            }

        }

    }

}
</script>

<style lang="scss" scoped>
.describe {
    height: 660px; // border: solid 1px;
    width: 100vw; // border: solid 1px;
    display: flex;
    .left {
        width: 45%; // border: solid 1px;
        height: 660px;
        .about {
            display: flex;
            flex-direction: column;
            margin-left: 100px;
            margin-top: 50px;
            textarea {
                width: 500px;
                height: 200px;
                border-radius: 10px;
                background-color: #ededed;
                border: none;
                margin-top: 10px;
            }
            span {
                height: 33px;
                font-family: Arial;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.13;
                letter-spacing: normal;
                text-align: left;
                color: #666b46;
            }
        }
        .rule {
            display: flex;
            flex-direction: column;
            margin-left: 100px;
            margin-top: 50px;
            textarea {
                width: 500px;
                height: 200px;
                border-radius: 10px;
                background-color: #ededed;
                border: none;
                margin-top: 10px;
            }
            span {
                height: 33px;
                font-family: Arial;
                font-size: 25px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.13;
                letter-spacing: normal;
                text-align: left;
                color: #666b46;
            }
        }
    }
    .right {
        width: 55%; // border: solid 1px;
        height: 660px;
        overflow-x: hidden;
        .title {
            margin-top: 50px;
        }
        span {
            // margin-top: 50px;
            height: 33px;
            font-family: Arial;
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.13;
            letter-spacing: normal;
            text-align: left;
            color: #666b46;
        }
        .wrap {
            height: 90%;
            width: 90%; // border: solid 1px;
            position: relative;
            margin: 10px;
        }
        .uploadbtn {
            // background-color: red;
            position: absolute;
            top: 45%;
            left: 45%;
            transform: translateY(-45%);
            span {
                border-radius: 5px;
                font-size: 20px;
                border: solid 1px;
                padding: 5px; // float: right;
            }
            input {
                position: absolute;
                left: 0;
                top: 0;
                opacity: 0;
                font-size: 100px;
            }
        }
        .cr {
            // border: solid 1px;
            height: 85%;
            width: 100%;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            background-color: #ededed;
            padding: 10px;
            padding-top: 30px;
            border-radius: 3px;
        }
        .pic {
            width: 100%;
            height: 100%; // border: solid 1px;
        }
    }
}
</style>