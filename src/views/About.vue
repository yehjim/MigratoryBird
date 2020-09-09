<template>
    <div>
        <Header :fontcolor="color" :headercolor="bgc"></Header>
        <section class="startpage">
            <div class="slogan">
                <h3>Hometown</h3>
                <h3>Family</h3>
                <h3>Safe</h3>
            </div>
            <div class="arrow"></div>
    
        </section>
        <section class="secondpage">
            <div class="title">
                <h3>Hometown</h3>
            </div>
            <div class="describe">
                <h4 class="top">讓你置身</h4>
                <h4 class="bottom">家的感覺</h4>
            </div>
            <div class="arrow"></div>
        </section>
        <section class="thridpage">
            <div class="thridpagetitle">
                <h3>Family</h3>
            </div>
            <div class="thridpagedescribe">
                <h4>隨時都在家</h4>
            </div>
            <div class="arrow"></div>
        </section>
        <section class="safepage">
            <div class="safepagetitle">
                <h3>Safe</h3>
            </div>
            <div class="safepagedescribe">
                <h4>安全、友善的租屋環境</h4>
            </div>
            <div class="arrow"></div>
    
        </section>
        <section class="mbpage">
            <div class="mbpageetitle">
                <h3>候鳥</h3>
            </div>
            <div class="mbpagedescribe">
                <h4>你租屋的最佳選擇</h4>
            </div>
            <div class="wrap">
                <div class="arrowup" @click="totop"></div>
                <span>ToTop</span>
            </div>
    
        </section>
    </div>
</template>

<script>
import Header from '../components/Header'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default {
    data() {
        return {
            color: 'black',
            bgc: 'beige'
        }
    },
    mounted: function() {
        this.addani();
    },
    // created() {
    //     this.addani();
    //     window.addEventListener('scroll', this.addani);
    // },
    // destroyed() {
    //     window.removeEventListener('scroll', this.addani);
    // },
    methods: {
        addani() {
            gsap.timeline({
                    scrollTrigger: {
                        trigger: ".secondpage",
                        start: "center center",
                        end: "bottom top",
                        // markers: true,
                        scrub: true,
                        pin: true
                    },
                })
                .from(".title", {
                    x: 500,
                    opacity: 0,
                    duration: 1.5
                })
                .from(".describe", {
                    x: 500,
                    opacity: 0,
                    duration: 1.5
                })
            gsap.timeline({
                    scrollTrigger: {
                        trigger: ".thridpage",
                        start: "center center",
                        end: "bottom top",
                        // markers: true,
                        scrub: true,
                        pin: true
                    },
                })
                .from(".thridpagetitle", {
                    x: 500,
                    opacity: 0,
                    duration: 1.5
                })
                .from(".thridpagedescribe", {
                    x: -500,
                    opacity: 0,
                    duration: 1.5
                })
            gsap.timeline({
                    scrollTrigger: {
                        trigger: ".safepage",
                        start: "center center",
                        end: "bottom top",
                        // markers: true,
                        scrub: true,
                        pin: true
                    },
                })
                .from(".safepagetitle", {
                    y: 500,
                    opacity: 0,
                    duration: 1.5
                })
                .from(".safepagedescribe", {
                    y: 500,
                    opacity: 0,
                    duration: 1.5
                })
            gsap.timeline({
                    scrollTrigger: {
                        trigger: ".mbpage",
                        start: "center center",
                        end: "bottom top",
                        // markers: true,
                        scrub: true,
                        pin: true
                    },
                })
                .from(".mbpageetitle", {
                    y: 500,
                    opacity: 0,
                    duration: 1.5
                })
                .from(".mbpagedescribe", {
                    y: 500,
                    opacity: 0,
                    duration: 1.5
                })
        },
        totop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
h4 {
    font-family: MicrosoftJhengHei;
    font-size: 80px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #0b0b0b;
}

h3 {
    font-family: EuphemiaUCAS;
    font-size: 94px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
}

.arrow {
    box-sizing: border-box;
    height: 40px;
    width: 40px;
    margin: auto;
    margin-top: 100px;
    border-style: solid;
    border-color: black;
    border-width: 0px 4px 4px 0px;
    transform: rotate(45deg);
}

.arrowup {
    box-sizing: border-box;
    height: 40px;
    width: 40px;
    margin: auto;
    margin-top: 100px;
    border-style: solid;
    border-color: black;
    border-width: 4px 0px 0px 4px;
    transform: rotate(45deg);
}

.startpage {
    height: 93vh;
    background-color: #f5f5dc;
    .slogan {
        // border: solid 1px;
        width: 496px;
        margin: auto;
        padding-top: 100px;
    }
}

.secondpage {
    height: 100vh;
    background-color: #e1ede4;
    .box {
        width: 100px;
        height: 100px;
        background-color: red;
    }
    .title {
        width: 496px; //  border: solid 1px;
        margin-top: 120px;
        margin-left: 100px;
    }
    .describe {
        // border: solid 1px;
        // float: right;
        // width: auto;
        margin-left: 700px;
        margin-top: 60px;
    }
    .top {}
    .bottom {
        margin-left: 200px;
    }
}

.thridpage {
    height: 100vh;
    background-color: #FBD4C5;
    .thridpagetitle {
        width: 334px; // border: solid 1px;
        position: relative;
        left: 65%;
        margin-top: 100px;
    }
    .thridpagedescribe {
        // border: solid 1px;
        width: 450px;
        height: 230px;
        position: relative;
        left: 15%;
        margin-top: 100px;
    }
}

.safepage {
    height: 100vh;
    .safepagetitle {
        width: 209px; // border: solid 1px;
        margin: auto;
        padding-top: 200px; // margin-top: 300px;
    }
    .safepagedescribe {
        // border: solid 1px;
        width: 850px;
        height: 200px;
        margin: auto;
        margin-top: 50px;
    }
}

.mbpage {
    height: 100vh;
    background-color: aliceblue;
    .mbpageetitle{
        
        width: 300px;
        margin: auto;
        padding-top: 100px;
        h3{
            text-align: center;
        }
    }
    .mbpagedescribe {
        // border: solid 1px;
        width: 700px;
        margin: auto;
        padding-top: 150px;
        h4{
            text-align: center;
        }
    }
    .wrap{
        // border: solid 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        span{
            font-size: 30px;
        }
    }
}
</style>