<template>
<div id="spacesafe">
    <header>
        <i @click="goBack" class="return iconfont icon-fanhui"></i>
        <h1>空间隐私设置</h1>
    </header>
    <div id="list">
        <div id="input-wrap">
            <span>公开显示关注的人</span>
            <i  class="toggle iconfont icon-shezhi"></i>
        </div>

        <div id="input-wrap">
            <span>公开显示我的收藏</span>
            <i  class="toggle iconfont icon-shezhi"></i>
        </div>



    </div>
</div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goBack(){
            history.back()
        }
    }
}
</script>
<style scoped>
#spacesafe{
    top: 0;
    left: 0;
    position: relative;
    z-index: 20;
    width: 100%;
    height: 13.34rem;
    background: #f5f5f5;
}
#spacesafe header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#spacesafe header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}

#spacesafe header h1{
    position: absolute;
    top: .58rem;
    left: 2.74rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#spacesafe #list{
    width: 100%;
    height: 3.04rem;
    position: relative;
    top: .4rem;
    left: 0;
}
#spacesafe #input-wrap{
    display: block;
    width: 100%;
    height: 0.98rem;
    background: #fff;
    position: relative;
}
#spacesafe #input-wrap span{
    position: absolute;
    top: 0;
    left: .28rem;
    line-height: .98rem;
    font-family: PingFangSC-Regular;
    color: #333;
    font-size: .3rem;
}

#spacesafe #input-wrap::after{
    height: 1px;
    width: 100%;
    content: '';
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: -1px;
    left: 0;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(0.5);
}
#spacesafe .toggle{
    position: absolute;
    top: .35rem;
    right: .3rem;
    color: #999;
    font-size: .3rem;
}
</style>

