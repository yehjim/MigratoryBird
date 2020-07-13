<template>
    <div class="col-3 profilenav">
        <div class="userpic">
        </div>
        <div class="username">
            <span>JimYeh</span>
        </div>
        <div class="profilebtn" @click="profilehandle">
            <router-link to="/profile">
                <span>{{profile}}</span>
            </router-link>
        </div>
        <div class="mynestbtn" @click="mynesthandle" v-if="hashouse">
            <router-link :to="{name:'mynest'}">
                <span>{{mynest}}</span>
            </router-link>
        </div>
        <div class="likebtn" @click="likehandle">
            <router-link :to="{name:'like'}">
                <span>{{like}}</span>
            </router-link>
        </div>
        <div class="lfrbtn">
            <span>MB Mating</span>
        </div>
    
    
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            houseid: 0,
            profile: "Profile",
            mynest: "MyNest",
            like: "Like",
            lfrpost: "LFR Post",
            chatroom: "ChatRoom"

        }
    },
    watch: {
    },
    methods: {
        profilehandle() {
            this.$emit('profile-handle', this.profile)
        },
        mynesthandle() {
            this.$emit('mynest-handle', this.mynest)
        },
        likehandle() {
            this.$emit('like-handle', this.like)
        }
    },
    computed:{
        hashouse(){
            return this.$store.state.hashouse
        }
    }

}
</script>

<style lang="scss" scoped>
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
        height: 30px;
        width: 75%;
        margin: auto;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
        background-color: #A6B6AE;
        span {
            font-size: 13px;
            color: white;
        }
    }
}
</style>