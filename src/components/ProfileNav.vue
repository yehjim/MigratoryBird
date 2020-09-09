<template>
    <div class="col-3 profilenav">
        <div class="userpic">
        </div>
        <div class="username">
            <span>JimYeh</span>
        </div>
        <div class="profilebtn" >
            <router-link to="/profile">
                <span @click="profilehandle">{{profile}}</span>
            </router-link>
        </div>
        <div class="mynestbtn"  v-if="hoststatus">
            <router-link :to="{name:'hostitem'}">
                <span @click="itemhandle">{{item}}</span>
            </router-link>
        </div>
        <div class="mynestbtn" v-else v-show="hashouse">
            <router-link :to="{name:'mynest'}">
                <span  @click="mynesthandle" >{{mynest}}</span>
            </router-link>
        </div>
        <!-- <div class="mynestbtn" @click="mynesthandle" v-if="hashouse">
            <router-link :to="{name:'mynest'}">
                <span>{{mynest}}</span>
            </router-link>
        </div> -->
        <div class="likebtn" >
            <router-link :to="{name:'chatroom'}" v-if="hoststatus">
                <span @click="chatroomhandle">{{chatroom}}</span>
            </router-link>
            <router-link :to="{name:'like'}" v-else>
                <span @click="likehandle">{{like}}</span>
            </router-link>
        </div>
        <div class="lfrbtn">
            <router-link :to="{name:'hostinbox'}"  v-if="hoststatus">
                <span @click="inboxhandle">{{inbox}}</span>
            </router-link>
            <router-link :to="{name:'mbmating'}" v-else>
                <span @click="mbmatinghandle">MB MATING</span>
            </router-link>
        </div>
        <div class="lfrbtn" v-if="hoststatus==false">
            <router-link :to="{name:'landordinbox'}" >
                <span @click="inboxhandle">Inbox</span>
            </router-link>
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
            chatroom: "ChatRoom",
            item:"Item",
            inbox: 'Inbox',
            mbmating: 'MB Mating'

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
        },
        itemhandle(){
            this.$emit('item-handle',this.item)
        },
        chatroomhandle(){
            this.$emit('chatroom-handle',this.chatroom)
        },
        inboxhandle(){
            this.$emit('inbox-handle',this.inbox)
        },
        mbmatinghandle(){
            this.$emit('mbmating-handle',this.mbmating)
        }
    },
    computed:{
        hashouse(){
            return this.$store.state.userdata[0].hashouse
        },
        hoststatus() {
            return this.$store.state.hostcheck;
        },
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
        // border: solid 1px;
        border-radius: 50%;
        margin: auto;
        margin-top: 30px;
        margin-bottom: 10px;
        background-color: #cde2d8;
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