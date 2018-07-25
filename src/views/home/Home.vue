<template>
    <div class="app">
        <!-- 首页头部组件 -->
        <home-header></home-header>

        <!-- 首页导航切换 -->
        <Swiper  class="Swiper" :default="true">

            <SwiperItem>
                    <app-content>
                        <attention></attention>
                    </app-content>
            </SwiperItem>

            <SwiperItem>
                <app-content :reciveScroll="true">
                    <find></find>
                </app-content>
            </SwiperItem>

            <SwiperItem>
                    <app-content>
                        <round></round>
                    </app-content>
            </SwiperItem>

        </Swiper>

        <!-- 侧边栏组件 -->
        <slide-bar></slide-bar>

        <search v-show="isGoSearch"></search>

        <!-- 首页的子页面入口 -->
        <router-view></router-view>
    </div>
</template>

<script>
//首页头部组件
import HomeHeader from "@/components/home/HomeHeader.vue";
//侧边栏组件
import SlideBar from "@/components/common/SlideBar.vue";
//首页关注组件
import Attention from "@/components/home/Attention.vue";
//首页附近组件
import Round from "@/components/home/Round.vue";
//首页发现组件
import Find from "@/components/home/Find.vue";
//搜索组件
import Search from "@/components/home/Search.vue";
//轮播容器
import Swiper from "@/components/common/Swiper.vue";
//轮播元素
import SwiperItem from "@/components/common/SwiperItem.vue";
//引入store
import Vuex from "vuex";

export default {
    components : {
        HomeHeader,
        Attention,
        Round,
        Find,
        SlideBar,
        Search,
        Swiper,
        SwiperItem
    },
    data(){
        return {
            isGoSearch : false, //判断是否显示搜索页面
        }
    },
    computed:Vuex.mapState({
        playIndex:val=>val.Home.playIndex,
    }),
    mounted(){

        //监听搜索页面取消搜索事件，关闭搜索页面
        this.$pubsub.$on("closeSearch", ()=>{
            this.isGoSearch = false;
        })
        //监听头部组件进入搜索页面事件
        this.$pubsub.$on("goSearchPage", ()=>{
            this.isGoSearch = true;
        })
    }
}
</script>

<style scoped="" lang="scss">
    .Swiper{
        position: absolute;
        top:.88rem;
        left: 0;
        bottom : 0.98rem;
        width: 100%;
    }
   .Swiper .content{
        position: absolute;
        top:0;
        left: 0;
        bottom : 0;
        width: 100%;
        overflow: hidden;
    }
</style>
