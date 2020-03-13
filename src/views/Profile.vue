<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="row">
                <div class="col-3 profilenav">
                    <div class="userpic">
    
                    </div>
                    <div class="username">
                        <span>JimYeh</span>
                    </div>
                    <div class="profilebtn">
                        <span>Profile</span>
                    </div>
                    <div class="mynestbtn">
                        <span>My Nest</span>
                    </div>
                    <div class="likebtn">
                        <span>Like</span>
    
                    </div>
                    <div class="lfrbtn">
                        <span>LFR Post</span>
    
                    </div>
                    <div class="chatroombtn">
                        <span>ChatRoom</span>
    
                    </div>
    
    
    
                </div>
                <div class="col-1">
    
                </div>
                <div class="col-8 profilecontent">
                    <div class="row">
    
                    </div>
                    <div class="row">
    
                    </div>
    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
.container {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.profilenav {
    height: 600px;
    margin-top: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .userpic {
        width: 180px;
        height: 180px;
        border: solid 1px;
        border-radius: 50%;
        margin: auto;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .username {
        margin: auto;
        display: flex;
        align-items: center;
        font-size: 20px;
        justify-content: center;
    }
    .profilebtn,
    .mynestbtn,
    .likebtn,
    .lfrbtn,
    .chatroombtn {
        border: solid 1px;
        height: 30px;
        width: 75%;
        margin: auto;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
    }
}

.profilecontent {
    height: 600px;
    margin-top: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}
</style>