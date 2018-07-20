<template>
<div>
    <div class="top">
        
        
    </div>

    <!-- 测试文件，可以删除 -->
    <swiper loop page t="2000">
        <swiper-item><img src="http://img5.imgtn.bdimg.com/it/u=415293130,2419074865&fm=27&gp=0.jpg" alt=""></swiper-item>
        <swiper-item><img src="http://img5.imgtn.bdimg.com/it/u=415293130,2419074865&fm=27&gp=0.jpg" alt=""></swiper-item>
        <swiper-item><img src="http://img5.imgtn.bdimg.com/it/u=415293130,2419074865&fm=27&gp=0.jpg" alt=""></swiper-item>
    </swiper>
     <!-- 测试文件，可以删除 -->
</div>
</template>

<script>

import Swiper from "@/components/common/Swiper.vue";//测试
import SwiperItem from "@/components/common/SwiperItem.vue";//测试

export default {
    components : {
        Swiper,  //测试属性
        SwiperItem, //测试属性
    },
    data(){
        return {
          
          
        }
    }
}
</script>

<style scoped>
h1{
    font-size: 20px;
    height: 1000px;
    background: gold;
}
.top {
    width: 100%;
    height: .66rem;
    background: fuchsia;
    border-top : 1px solid #e6e6e6;
    border-bottom:1px solid #e6e6e6;
    overflow: hidden;
}
.a{
    width: 100%;
    height: .8rem;

    overflow-x:scroll;
    overflow-y: hidden;
}
.top ul {
    width: 1000px;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: hidden;
}
.top-list{
    margin-left: .4rem;
    height: 100%;
    line-height: .66rem;
    font-size: .28rem;
}
</style>
