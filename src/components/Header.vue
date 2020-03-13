<template>
    <div class="header">
        <div class="container">
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
                    <span>COMUNITY</span>
                </div>
                <div class="col-1">
                    <span>ABOUT</span>
                </div>
                <div class="col-1">
                    <div class="profilepic">
    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'

}
</script>

<style lang="scss" scoped>
.header{
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
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
</style>