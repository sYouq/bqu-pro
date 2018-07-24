<template>
    <header id="header">
        <div class="btn btn-l" @click="showSlideBarAction()">
            <i class="iconfont icon-menu"></i>
        </div>
        <div class="center-content">
            <div class="center-title">
                <span class="top-title" :class="{active : playIndex == index}" v-for="(item, index) in titleList" :key="index" @click="checkPageAction(index)">{{ item }}</span>
            </div>
        </div>
        <div class="btn btn-r" @click="goSearchPage()">
            <i class="iconfont icon-fangdajing"></i>
        </div>
    </header>
</template>

<script>

    import Vuex from "vuex";

    export default {
        data(){
            return {
                titleList : ["关注","发现","附近"],
            }
        },
        computed:Vuex.mapState({
            playIndex:val=>val.Home.playIndex,
        }),
        methods: {
            //左侧打开侧边栏
            showSlideBarAction(){
                this.$pubsub.$emit("showSlideBar");
            },
            //进入到搜索页面
            goSearchPage(){
                this.$pubsub.$emit("goSearchPage");
            }
        }
    }

</script>

<style scoped>
    #header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: .88rem;
        background: #fff;
    }
    .center-content{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 0.16rem;
        text-align: center;
        line-height: .88rem;
    }
    .center-title{
        width: 3.3rem;
        height: 100%;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
    }
    .btn{
        position: absolute;
        top: 0.3rem;
        font-size: .20rem;
        z-index: 2;
    }
    .btn-l{
        left: .3rem;
    }
    .btn-l i{
        font-size: .4rem;
        color:#666;
    }
    .btn-r{
        right: 1rem;
    }
    .btn-r i{
        font-size: .4rem;
        color:#979797;
    }
    .top-title{
        font-size: .28rem;
    }
    .center-title .active{
        color:#F1457C;
        position:relative;
    }
    .center-title .active::after{
        content: "";
        position:absolute;
        bottom:0.16rem;
        left:0;
        width: 100%;
        height:2px;
        background: #F1457C;
    }
</style>
