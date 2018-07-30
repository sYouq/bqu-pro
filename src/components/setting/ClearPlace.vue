<template>
    <div id="clearplace">


        <header>
            <i @click="goBack" class="return iconfont icon-fanhui"></i>
            <h1>清理存储空间</h1>

        </header>

        <ul>
            <li>清空本地图片缓存</li>
            <li class="oneborder"></li>
            <li>清空本地视频缓存</li>
            <li class="oneborder"></li>
            <li>清空本地聊天记录</li>
        </ul>



    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            history.back();
        },
    }
}
</script>

<style scoped>
#clearplace{
    top: -100%;
    left: 0;
    position: relative;
    z-index: 20;
    width: 100%;
    height: 13.34rem;
    background: #f5f5f5;
}
#clearplace header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#clearplace header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}

#clearplace header h1{
    position: absolute;
    top: .58rem;
    left: 2.74rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#clearplace ul{
    position: absolute;
    left: 0;
    top: 1.68rem;
    background: #fff;
    width: 100%;
    min-height:3.04rem ;
}
#clearplace ul li{
    background: #fff;
    box-sizing: border-box;
    height: .98rem;
    width: 100%;
    padding:0 .3rem 0 .28rem;
    font-family: PingFangSC-Regular;
    color: #333;
    font-size: .3rem;
    line-height: .98rem;
    position: relative;


}
#clearplace ul .oneborder{
    content: "";
    background: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(.5);
}

</style>