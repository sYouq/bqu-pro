<template>
    <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>

    import Vuex from "vuex";

    export default {
        props : ["t", "page", "loop","default"],
        data(){
            return {
                pagination : "",
                loops : false,
                index:1,
            }
        },
        computed:{
            ...Vuex.mapState({
                //轮播状态属性
                lockSwiper:val=>val.Home.lockSwiper,
                //轮播下标属性
                playIndex:val=>val.Home.playIndex,
            })
        },
        methods:{
            ...Vuex.mapActions({
                //改变轮播下标的方法
                ChangPlayIndex:"Home/findChangPlayIndex",
            }),
        },
        watch : {
            //监听下标属性
            index(newVal){
                this.ChangPlayIndex(newVal);
            },
            //监听轮播状态属性
            lockSwiper(newVal){
                if(newVal){
                    this.swiper.lockSwipes();
                }else{
                    this.swiper.unlockSwipes();
                }
            },
            //监听轮播下标实现调到指定的位置
            playIndex(newVal){
                this.swiper.slideTo(newVal, 200);
            }
        },
        mounted(){
            if(this.page != undefined){
                this.pagination = ".swiper-pagination";
            }
            if(this.loop != undefined){
                this.loops = true;
            }
            //swiper 3.0
            //设置this.swiper，直接挂载在vue组件的实例上，可以在swiper组件上获取
            /*参数 ： t : 轮播图滚动的速度，不设置，轮播图不会自动轮播，如： t = "3000"
              参数 ： page : 轮播图的圆点分页器，不设置则没有，  如： page  （就一个值）
              参数 ： loop ：循环滚动，不设置则没有循环的功能， 如： loop   （就一个值）
              如： <swiper loop page t="2000">
            */
            this.swiper = new Swiper(this.$refs.swiper, {
                //分页器
                pagination: this.pagination,
                //自动播放，时间1500
                autoplay: this.t,
                //当用户操作轮播图后，false 会自动接着播放
                autoplayDisableOnInteraction : false,
                //循环滚动
                loop: this.loops,
                //监听滑动开始时
                onSlideChangeStart:(swiper)=>{
                    this.index=swiper.realIndex;
                }

            });
            //轮播的初始状态
            if(this.default){
                this.swiper.slideTo(1, 0);
            }

        }
    }
</script>

<style scoped="">

</style>

