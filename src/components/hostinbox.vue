<template>
    <div class="account">
        <div class="infobox">
            <div class="pic"></div>
            <span class="infomessage">allen接受你的需求</span>
            <span class="infotime">2020/05/23</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.account {
    height: 600px; // border: solid 1px;
    margin-top: 40px;
    width: 750px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .pic {
        border: solid 1px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
    .infobox {
        border-bottom: solid 0.5px #7e7e7e;
        width: 90%;
        margin: auto;
        height: 80px;
        display: flex; // justify-content: center;
        align-items: center;
    }
    .infomessage {
        color: #7e7e7e;
    }
    .infotime {
        // border: solid 1px;
        position: relative;
        top: 20px;
        left: 380px;
        font-size: 15px;
        color: #7e7e7e;
    }
}
</style>