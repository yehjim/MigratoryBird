<template>
    <div class="account">
        <div class="editwrap">
            <span>Account</span>
            <div class="editbtn">
                <span>edit</span>
            </div>
        </div>
        <div class="accountcontent">
            <div>
                <span>Name:</span>
                <input type="text" placeholder="JIMYEH">
            </div>
            <div>
                <span>Gender:</span>
                <input type="text" placeholder="male">
            </div>
            <div>
                <span>Birth:</span>
                <input type="text" placeholder="1999/02/14">
            </div>
    
        </div>
        <div class="accountcontent">
            <div>
                <span>Name:</span>
                <input type="text" placeholder="JIMYEH">
            </div>
            <div>
                <span>Gender:</span>
                <input type="text" placeholder="male">
            </div>
            <div>
                <span>Birth:</span>
                <input type="text" placeholder="1999/02/14">
            </div>
    
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.account {
    height: 270px; // border: solid 1px;
    margin-top: 50px;
    border-bottom: 10px solid #A6B6AE;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .editwrap {
        // border: solid 1px;
        display: flex;
        padding-left: 15px;
        padding-top: 10px;
        span {
            font-size: 20px;
            color: #A6B6AE;
            font-weight: lighter;
        }
        .editbtn {
            width: 50px;
            height: 20px;
            background-color: #A6B6AE;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 18px;
            margin-left: 20px;
            margin-top: 5px;
            span {
                font-size: 12px;
                color: white;
            }
        }
    }
    .accountcontent {
        // border: solid 1px;
        display: flex;
        div {
            margin-left: 45px;
            margin-bottom: 30px;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            span {
                color: #7E7E7E;
            }
            input {
                border: none;
                border-bottom: 3px solid black;
                color: black;
            }
        }
    }
}
</style>