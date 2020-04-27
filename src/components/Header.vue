<template>
    <div class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-2"><span>Migratory Bird</span></div>
                <div class="col-5"></div>
                <div class="col-1">
                    <router-link to="/test123">
                        <span class="find">FIND</span>
                    </router-link>
                </div>
                <div class="col-1">
                    <router-link to="/slidertest">
                        <span>NEED</span>
                    </router-link>
                </div>
                <div class="col-1">
                    <router-link to="/payment">
                        <span>COMUNITY</span>
                    </router-link>
                </div>
                <div class="col-1">
                    <span>ABOUT</span>
                </div>
                <div class="col-1">
                    <div class="profilepic" @click="show_hiddenNav">
    
                    </div>
                </div>
    
            </div>
            <div class="hidden_nav" v-show="isShow_hiddenNav">
                <a href="http://" v-on:click="show_hiddenNav">Profile</a> <br />
                <a href="http://">My Nest</a> <br />
                <a href="http://">Like</a> <br />
                <a href="http://">LFR</a> <br />
                <a href="http://">In Box</a> <br />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isShow_hiddenNav: false
        }
    },
    methods: {
        show_hiddenNav: function() {
            this.isShow_hiddenNav = !this.isShow_hiddenNav;
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.row {
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        .profilepic {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            background-color: white;
        }
        .find {
            font-size: 20px;
        }
    }
    span {
        color: white;
        font-size: 13px;
        font-weight: bold;
    }
}

.header {
    display: flex;
    background-color: #666B46;
    height: 50px;
    justify-content: center;
    align-items: center;
}

.hidden_nav {
    width: 100px; // height: auto;
    position: absolute;
    z-index: 1;
    background-color: white;
    border: 1px solid #A6B6AE;
    border-radius: 10px;
    text-align: left;
    padding: 10px 10px 10px 17px;
    left: 100%;
    transform: translateX(-150%);
    a {
        color: #7E7E7E;
    }
}
</style>