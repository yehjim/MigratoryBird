<template>
    <div class="item">
        <div class="piccover">
            <div class="itemcontent">
                <span class="loc">{{loc}}</span>
                <span class="area">{{area}}</span>
                <span class="price">{{price}}</span>
            </div>
            <div class="bookbtn">
                <span class="btn">BOOK</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['loc', 'area', 'price', 'gender'],
    data() {
        return {}
    },
    name: 'Item'
}
</script>

<style lang="scss" scoped>
.item {
    background-image: url('../assets/media/jarek-ceborski-jn7uVeCdf6U-unsplash.jpg');
    width: 278px;
    height: 207px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: -30px;
    border-radius: 20px; // filter: brightness(50%);
    .piccover {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: black;
        opacity: 0.5;
        .itemcontent {
            height: 70%;
            display: flex;
            flex-direction: column;
            align-items: flex-start; // border: solid 1px white;
            padding-top: 30px; // visibility: hidden;
            .loc {
                font-size: 15px;
                opacity: 1;
                transform: translateX(100px);
                transition: 0.3s ease-in-out;
            }
            .price {
                opacity: 1;
                font-size: 18px;
                text-decoration: underline;
                transform: translateX(100px);
                transition: 0.3s ease-in-out;
            }
            .area {
                opacity: 1;
                font-size: 20px;
                transform: translateX(100px);
                transition: 0.3s ease-in-out;
            }
            span {
                color: white;
                font-size: 25px;
                margin-left: 25px;
                margin-bottom: 5px;
                opacity: 1;
                visibility: hidden;
            }
        }
        .bookbtn {
            height: 30%; // border: solid 1px white;
            display: flex;
            justify-content: flex-end; // visibility: hidden;
            align-items: center; // overflow: hidden;
            // border: solid 1px
            visibility: hidden;
            transition-duration: 0.3s;
            .btn {
                color: white;
                height: 53px;
                width: 70px;
                border: solid 1px;
                font-size: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-bottom-right-radius: 20px;
                background-color: white;
                color: black;
                margin-top: 10px;
            }
        }
    }
    .piccover:hover {
        .loc,
        .price,
        .area {
            transform: translateX(5px);
            visibility: visible;
            color: white;
        }
        .bookbtn {
            visibility: visible;
        }
    }
}
</style>