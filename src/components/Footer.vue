<template>
    <div class="container-fulid footer">
        <div class="row">
            <div class="col-3">
                <div class="logo">
                    <img src="../assets/media/MB_LOGO_white_03@2x.png" alt="">
                </div>
            </div>
            <div class="col-6">
                <span class="copyright">
                                        &copy; 2020 Migratory Bird.com
                                    </span>
            </div>
            <!-- <div class="col-1">
                </div> -->
            <div class="col-3 totopbtn" id="totop">
                <div @click="ToTop">
                    <span>&uarr;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        ToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },

}
</script>

<style lang="scss" scope>
.footer {
    .row {
        background-color: #A6B6AE;
        color: white;
        .col-3 {
            // border: solid 1px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .logo {
            img {
                width: 106px;
                height: 63px;
            }
        }
        .col-6 {
            display: flex;
            justify-content: center;
            align-items: center;
            .copyright {
                text-align: center;
            }
        }
        .totopbtn {
            // border: solid 1px;
            display: flex;
            justify-content: flex-end;
            align-items: center; // margin: auto;
            div {
                border-left: 0.2px solid;
                width: 70px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
            span {
                font-size: 20px;
                font-weight: bolder;
            }
        }
    }
}
</style>