<template>
    <div id="autoImg" @click="backAction()">
        <swiper class="swiper-container images" :index=index :pag=pagination page>
            <swiper-item class="swiper-wrapper">
                <img src="images/primary/food/food01.jpg" ref="img">
            </swiper-item>
            <swiper-item class="swiper-wrapper">
                <img src="images/primary/food/food02.jpg" ref="img">
            </swiper-item>
            <swiper-item class="swiper-wrapper">
                <img src="images/primary/food/food03.jpg" ref="img">
            </swiper-item>
            <swiper-item class="swiper-wrapper">
                <img src="images/primary/food/food04.jpg" ref="img">
            </swiper-item>
            <swiper-item class="swiper-wrapper">
                <img src="images/primary/food/food05.jpg" ref="img">
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import swiper from '../common/Swiper.vue'
import swiperItem from '../common/SwiperItem.vue'
export default {
    props:['num'],
    components:{
        swiper,
        swiperItem
    },
    data(){
        return {
            index: this.num,
            pagination: true,
        }
    },
    methods:{
        backAction(){
            window.history.back()
        }
    },
    mounted(){
    }
}
</script>
<style scoped>
#autoImg{
    background: #333;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    width: 100%;
}
img{
    width: 100%;
    height: 100%;
}
.images{
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
}
</style>


