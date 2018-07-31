<template>
    <div id="birth">


        <header>
            <i @click="goBack" class="return iconfont icon-fanhui"></i>
            <h1>安全隐私</h1>

        </header>

        <ul>
            <li>实名认证
                <i class="realname iconfont icon-back-copy"></i>
            </li>
            <li class="oneborder"></li>
            <li>空间隐私设置
                <i class="space iconfont icon-back-copy"></i>
            </li>
            <li class="oneborder"></li>
            <!-- <li>屏蔽此人
                <i class="mask iconfont icon-shezhi"></i>
            </li> -->
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
#safe{
    top: -100%;
    left: 0;
    position: relative;
    z-index: 20;
    width: 100%;
    height: 13.34rem;
    background: #f5f5f5;
}
#safe header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#safe header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}

#safe header h1{
    position: absolute;
    top: .58rem;
    left: 3.08rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#safe ul{
    position: absolute;
    left: 0;
    top: 1.68rem;
    background: #fff;
    width: 100%;
    min-height:3.04rem ;
}
#safe ul li{
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
#safe ul .oneborder{
    content: "";
    background: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(.5);
}
#safe ul li .realname{
    position: absolute;
    top: .3rem;
    left: 7rem;
    color: #9b9b9b;
    font-size: .2rem;
    line-height: .2rem;
}
#safe ul li .space{
    position: absolute;
    top: .3rem;
    left: 7rem;
    color: #9b9b9b;
    font-size: .2rem;
    line-height: .2rem;
}
#safe ul li .mask{
    position: absolute;
    -top: .22rem;
    -left: 6.3rem;
    top: .32rem;
    left: 6.8rem;
    color: #9b9b9b;
    font-size: .4rem;
    line-height: .4rem;
}

</style>