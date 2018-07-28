<template>
<div class="swiper-container" ref="swiper" :class="{lzpaghide: pags}">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" :class="{lzpag: pags}"></div>
</div>
</template>

<script>
export default {
    props : ["t", "page", "loop","index","pag"],
    data(){
        return {
            pagination : "",
            loops : false,
            //lz设置分页器的样式
            pags : false
        }
    },
    methods : {

    },
    mounted(){
        // console.log(this.loop)
        
        if(this.page != undefined){
            this.pagination = ".swiper-pagination";
        }
        if(this.loop != undefined){
            this.loops = true;
        }
        //lz设置分页器样式
        this.pags = this.pag
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
            loop: this.loops
             
        });
        this.swiper.slideTo(this.index,0)
    }
}
</script>

<style>

.lzpag{
    width: 100%;
    bottom: -2.9rem;
}
.lzpaghide{
    overflow: visible;
}
.swiper-pagination-bullet{
    background: #fff;
    width: .12rem;
    height: .12rem;
    margin-left: .1rem;
}
</style>


