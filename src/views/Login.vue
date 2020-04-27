<template>
    <div class="login">
        <div class="leftcontent">
            <div class="migra">
                <span>MIGRA</span>
            </div>
            <div class="hometown">
                <span>Hometown</span>
            </div>
            <div class="family">
                <span>Family</span>
            </div>
            <div class="safe">
                <span>Safe</span>
            </div>
        </div>
        <div class="rightcontent">
            <div class="loginwrap">
                <div class="logintitile">
                    <span>Login to Migratory Bird</span>
                </div>
                <div class="fblogin">

                </div>
                <div class="googlelogin">

                </div>
                <div class="or">
                    <span>---------------------</span>
                </div>
                <div class="logininfo">
                    <p>Login with your email address username</p>
                </div>
                <div class="username">
                    <span>Email/Username</span>
                    <input type="text">
                </div>
                <div class="password">
                    <span>Password</span>
                    <input type="text">

                </div>
                <div class="remembercheck">
                    <input type="checkbox">
                    <span>Remember me?</span>
                </div>
                <div class="loginbtn">
                    <span>LOGIN</span>
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
.login {
    background-image: url('../assets/media/joyce-romero-EV_bivvSaC8-unsplash.jpg');
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: -1000px;
    display: flex;
    .leftcontent {
        width: 50%;
        .migra,.hometown,.family,.safe {
            color: white;
            font-size: 70px;
        }
        .migra{
            margin-left: 100px;
            margin-top: 50px;
        }
        .hometown,.family,.safe{
            margin-left: 200px;
        }
        .hometown{
            margin-top: 40px;
        }
    }
    .rightcontent{
        width: 50%;
        .loginwrap{
            background-color: white;
            height: 650px;
            width: 450px;
            margin: auto;
            margin-top: 50px;
            .logintitile{
                // border: solid 1px;
                color: #7E7E7E;
                font-size: 20px;
                text-align: center;
                padding-top: 25px;
            }
            .fblogin,.googlelogin{
                border: solid 1px;
                width: 250px;
                height: 30px;
                margin: auto;
                margin-top: 50px;
            }
        }
        .or{
            margin-top: 20px;
        }
        .logininfo{
            text-align: center;
            padding-top: 20px;
            font-size: 15px;
            padding-bottom: 20px;
            color: #6A6A6A;
        }
        .username,.password{
            display: flex;
            flex-direction: column;
            width: 70%;
            margin: auto;
            margin-bottom: 10px;
            span{
                color: #6A6A6A;
                font-size: 13px;
                margin-bottom: 10px;
            }
        }
        .remembercheck{
            display: flex;
            justify-content: center;
            align-items: center;
            input{
                width: 15px;
                height: 15px;
            }
            span{
                color: #6A6A6A;
                margin-left: 10px;
            }
        }
        .loginbtn{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70%;
            height: 40px;
            margin: auto;
            margin-top: 30px;
            background-color: #A6B6AE;
            color: white;
        }
    }
}
</style>