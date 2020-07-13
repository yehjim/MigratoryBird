<template>
    <b-container fluid class="bottom">
        <div class="row aboutcontent">
            <b-col cols="6" class="left">
                <div class="who">
                    <h3>Who is Migratory Bird</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tenetur esse itaque ad. Quae enim accusantium eligendi, omnis impedit in veritatis. Tempore quibusdam minus voluptatibus id quaerat dicta distinctio nesciunt.</p>
                </div>
            </b-col>
            <b-col cols="6" class="right">
                <div class="goal">
                    <h4>Our Goal</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, esse quia. Nihil, autem iusto? Unde iure sit earum at eveniet enim ipsam perferendis debitis, cumque doloribus dolorum distinctio. Repudiandae, quasi.</p>
                </div>
                <cr></cr>
            </b-col>
    
        </div>
    </b-container>
</template>


<script>
import cr from '../components/Carousel'
export default {
    name: 'AboutMb',
    components: {
        cr
    }

}
</script>

<style lang="scss" scoped>
.aboutcontent {
    margin-top: 100px; // box-sizing: b;
}
.bottom{
    padding: 0;
}
.left {
    background-image: url('../assets/media/joyce-romero-okhOnEMWkVU-unsplash.jpg');
    height: 510px; // margin-right: 5px;
    // width: 50%;
    // margin-left: 15px;
    .who {
        color: white;
        h3 {
            // border: solid 1px;
            width: 396px;
            margin: auto;
            margin-top: 150px;
            margin-bottom: 20px;
        }
        p {
            // border: solid 1px;
            width: 396px;
            margin: auto;
        }
    }
}

.right {
    height: 500px; // width: 50%;
    // border: solid 1px;
    .goal {
        // border: solid 1px;
        // border: solid 1px;

        height: 22%;
        p {
            // border: solid 1px;
        }
    }
    .carousel {
        // background-image: url('../assets/media/joyce-romero-okhOnEMWkVU-unsplash.jpg');
        // height: 75%;
        // width: 100%;
        border: solid 1px;
        height: 75%;
        .carousel-control-prev-icon {
            border: solid 1px;
            color: black;
        }
    }
}
</style>