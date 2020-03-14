<template>
    <div class="account">
        <div class="editwrap">
            <span>Info</span>
            <div class="editbtn">
                <span>edit</span>
            </div>
        </div>
        <div class="itemcontent">
            <div class="housepic">
                <img src="../assets/media/patrick_perkins_3wylDrjxH_E_un_bx@2x.png" alt="">
                <div class="payrentbtn">
                    <span>pay rent</span>
                </div>
            </div>
            <div class="accountcontent">
                <div>
                    <span>Start:</span>
                    <input type="text" placeholder="JIMYEH">
                </div>
                <div>
                    <span>Adress:</span>
                    <input type="text" placeholder="male">
                </div>
                <div>
                    <span>live/total:</span>
                    <input type="text" placeholder="1999/02/14">
                </div>
    
            </div>
            <div class="accountcontent">
                <div>
                    <span>End:</span>
                    <input type="text" placeholder="JIMYEH">
                </div>
                <div>
                    <span>Rent:</span>
                    <input type="text" placeholder="male">
                </div>
                <div>
                    <span>LFR Status:</span>
                    <input type="text" placeholder="1999/02/14">
                </div>
    
            </div>
        </div>
    
    </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.account {
    height: 500px; // border: solid 1px;
    margin-top: 60px;
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
    .itemcontent {
        display: flex;
        // justify-content: space-evenly;
        .housepic{
            // border: solid 1px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
            img{
                width: 250px;
                height: 170px;
                margin-top: 30%;
            }
            .payrentbtn{
                border: solid 1px;
                border-radius: 5px ;
                margin-top: 20px;
                width: 100px;
                height: 25px;
                text-align: center;
            }
        }
        .accountcontent {
            // border: solid 1px;
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            div {
                margin-left: 45px;
                margin-bottom: 20px;
                margin-top: 10px;
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
}
</style>