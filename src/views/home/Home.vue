<template>
<div>
    <!-- 首页头部组件 -->
<home-header></home-header>

<app-content class="content">
    <div class="find" v-show="page == 1">
        <find></find>
    </div>

    <div class="attention"  v-show="page == 0">
        <attention></attention>
    </div>

    <div class="round"  v-show="page == 2">
        <round></round>
    </div>
</app-content>
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


export default {
    components : {
        HomeHeader,
        Attention,
        Round,
        Find,
        SlideBar,
        Search,

    },
    data(){
        return {
            isGoSearch : false, //判断是否显示搜索页面

            page : 1,
        }
    },
    mounted(){
        //监听头部组件点击切换页面
        this.$pubsub.$on("checkPage", (val)=>{
            this.page = val;
        })
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

<style scoped>


</style>
