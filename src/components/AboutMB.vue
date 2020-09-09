<template>
    <b-container fluid class="bottom">
        <div class="row aboutcontent">
            <b-col cols="6" class="left">
                <div class="who">
                    <h3 @click="addani" class="whotitile">Who is Migratory Bird</h3>
                    <p class="whodescribe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tenetur esse itaque ad. Quae enim accusantium eligendi, omnis impedit in veritatis. Tempore quibusdam minus voluptatibus id quaerat dicta distinctio nesciunt.</p>
                </div>
            </b-col>
            <b-col cols="6" class="right">
                <!-- <div class="goal">
                                                                <h4 class="goaltitle">Our Goal</h4>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, vel?</p>
                                                            </div> -->
                <div class="goalcontent">
                    <div class="slogon">
                        <h4>Safe</h4>
                        <h4>Family</h4>
                        <h4>Hometown</h4>
                    </div>
                    <div class="cr">
                        <span class="up" @click="up"></span>
                        <div class="item item1" :style="{display:display1}" :class="{ani:displayani}"></div>
                        <div class="item item2" :style="{display:display2}" :class="{ani:displayani}"></div>
                        <div class="item item3" :style="{display:display3}" :class="{ani:displayani}"></div>
                        <span class="next" @click="next"></span>
                    </div>
    
                </div>
                <!-- <cr></cr> -->
            </b-col>
    
        </div>
    </b-container>
</template>


<script>
// import cr from '../components/Carousel'
import gsap from "gsap";
export default {
    name: 'AboutMb',
    data() {
        return {
            display1: "block",
            display2: "none",
            display3: "none",
            ani: 'move 2s',
            index: 1,
            displayani: false,
            crstatus: {

            }
        }
    },
    components: {
        // cr

    },
    created() {
        window.addEventListener('scroll', this.addani);
        this.autoplay();
    },
    destroyed() {
        window.removeEventListener('scroll', this.addani);
    },
    methods: {
        autoplay() {
            setInterval(() => {
                this.next();
            }, 2000);
        },
        addani() {
            var st = window.scrollY;
            const t = gsap.timeline();
            const t1 = gsap.timeline();
            console.log(st)
            if (st < 300) {
                t.to('.whodescribe', {
                    duration: 0,
                    opacity: 0,
                    y: 300,
                })
                t.to('.whotitile', {
                    duration: 0,
                    opacity: 0,
                    y: 300,
                })
                gsap.to('.slogon', {
                    duration: 0,
                    opacity: 0,
                    x: 300,
                })
            } else if (st > 550) {
                t1.to('.whotitile', {
                    duration: 1,
                    opacity: 1,
                    y: 0,
                })
                t1.to('.whodescribe', {
                    duration: 1,
                    opacity: 1,
                    y: 0,

                });
                gsap.to('.slogon', {
                    duration: 1,
                    opacity: 1,
                    x: 0,
                })
            }
        },
        up() {
            
            this.index = this.index -= 1;
            if (this.index == 0) {
                this.index = 3;
            }
            let index = this.index
            index = index % 3;
            if (index == 1) {
                this.display1 = "block";
                this.display2 = "none"
                this.display3 = "none"
                
                
            } else if (index == 2) {
                this.display1 = "none";
                this.display2 = "block"
                this.display3 = "none"
            } else {
                this.display1 = "none";
                this.display2 = "none"
                this.display3 = "block"
            }
            this.displayani = true;
        },
        next() {
            this.index = this.index += 1;
            let index = this.index
            index = index % 3;

            if (index == 1) {
                this.display1 = "block";
                this.display2 = "none"
                this.display3 = "none"

            } else if (index == 2) {
                this.display1 = "none";
                this.display2 = "block"
                this.display3 = "none"
            } else {
                this.display1 = "none";
                this.display2 = "none"
                this.display3 = "block"
            }
            this.displayani = true;

        }
    },
    mounted() {

        // gsap.to(".goal", {
        //     scrollTrigger: ".goal", 
        //     start: "top top", 
        //     x: 500
        // });

    }

}
</script>

<style lang="scss" scoped>
// .nodisplay {
//     display: none;
// }
.ani {
    animation: move ;
    animation-duration: 0.5s;
    animation-timing-function:ease-in;
}

@keyframes move {
    0% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
}

.aboutcontent {
    margin-top: 100px; // box-sizing: b;
}

.bottom {
    padding: 0;
}

.left {
    background-image: url('../assets/media/joyce-romero-okhOnEMWkVU-unsplash.jpg');
    height: 510px; // border: solid 1px;
    .who {
        color: white;
        h3 {
            // border: solid 1px;
            width: 396px;
            margin: auto;
            margin-top: 150px;
            margin-bottom: 20px;
        }
        p {
            // border: solid 1px;
            width: 396px;
            margin: auto;
        }
    }
}

.right {
    height: 510px; // width: 50%;
    // border: solid 1px;
    .goal {
        height: 23%;
        border: solid 1px;
    }
    .goaltitle {
        font-size: 30px;
    }
    .goalcontent {
        height: 100%; // border: solid 1px;
        display: flex;
    }
    .slogon {
        // border: solid 1px black;
        font-weight: bolder;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        position: absolute;
        z-index: 2;
        margin-left: 50px;
        h4 {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 50px; // border-right: 1px solid;
            color: white;
        }
    }
    .cr {
        // border: solid 1px;
        width: 100%;
        display: flex;
        .item {
            width: 100%;
            height: 100%;
            transition: 0.5s;
        }
        .item1 {
            // left: -800px;
            background-image: url('https://i.imgur.com/mz6OUmu.jpg');
            background-size: cover;
            width: 100%;
            height: 100%;
        }
        .item2 {
            background-color: rgb(193, 193, 193);
        }
        .item3 {
            background-color: rgb(97, 97, 97);
        }
        .up,
        .next {
            height: 30px;
            position: absolute;
            color: black;
            border: solid 1px;
        }
        .up {
            top: 50%;
        }
        .next {
            top: 50%;
            left: 96%;
        }
    }
}
</style>