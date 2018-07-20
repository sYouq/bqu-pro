<template>
<div class="slide">
    <div class="cover-page" @click="isShowSlideBar()" v-show="isShow"></div>

    <transition name="slideInfo">
        <div class="slideBar" v-show="isShow">
            <h1 class="title">更多</h1>
            <ul>
                <li @click="checkTool()"><i class="iconfont icon-wode2"></i>我的关注</li>
                <li @click="checkTool()"><i class="iconfont icon-p-photo-copy"></i>我的相册</li>
                <li @click="checkTool()"><i class="iconfont icon-saoyisao1"></i>扫一扫</li>
                <li @click="checkTool()"><i class="iconfont icon-shezhi"></i>设置</li>

            </ul>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data(){
        return{
            isShow : false
        }
    },
    methods :{
        //点击空白处让侧边栏消失
        isShowSlideBar(){
            this.isShow = false;
        },
        //点击侧边功能选项，影藏侧边栏
        checkTool(){
            this.isShow = false;
        }
    },
    mounted(){
        //监听头部点击显示侧边栏事件
        this.$pubsub.$on("showSlideBar", ()=>{
            this.isShow = true;
        })
    }
}
</script>

<style scoped>
    .slide{
        width: 100%;
        height: 100%;
    }
    .slideBar{
        width: 4.74rem;
        height: 100%;
        position:absolute;
        left: 0;
        top:0;
        background: honeydew;
        padding-left: .5rem;
        box-sizing : border-box;
        z-index: 3;
    }
    .cover-page{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        z-index: 2;
    }
    .title{
        font-size: .56rem;
        margin-top: 1.46rem;
        margin-bottom: .87rem;
    }
    .slideBar ul li{
        margin-bottom:.92rem;
        font-size: .32rem;
        height: .5rem;
        line-height:.5rem;
    }
    .slideBar ul li i{
        font-size: .4rem;
        margin-right: .16rem;
        color: #979797;
    }
    @keyframes slideIn {
        from{left : -4.74rem;}
        to{left : 0;}
    }
    @keyframes slideOut {
        from{left : 0;}
        to{left : -4.74rem;}
    }
    .slideInfo-enter-active{
        animation: slideIn 300ms;
    }
    .slideInfo-leave-active{
        animation: slideOut 300ms;
    }
</style>
