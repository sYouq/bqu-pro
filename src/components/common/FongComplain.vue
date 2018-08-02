<template>
    <div id="complain">


        <header>
            <i @click="goBack" class="return iconfont icon-fanhui"></i>
            <h1>投诉</h1>

        </header>
        <span>请选择投诉该账号的原因</span>
        <ul>
            <li>发布不适当内容对我造成骚扰</li>
            <li class="oneborder"></li>
            <li>存在欺诈行为</li>
            <li class="oneborder"></li>
            <li>此账号可能被盗用了</li>
            <li class="oneborder"></li>
            <li>存在侵权行为</li>
            <li class="oneborder"></li>
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
#complain{
    top: 0;
    left: 0;
    position: relative;
    z-index: 20;
    width: 100%;
    height: 13.34rem;
    background: #f5f5f5;
}
#complain header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#complain header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}

#complain header h1{
    position: absolute;
    top: .58rem;
    left: 2.74rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#complain span{
    line-height: .6rem;
    font-size: .24rem;
    color: #999;
    font-family: PingFangSC-Regular;
    position: absolute;
    top: 1.28rem;
    left: .28rem;

}
#complain ul{
    position: absolute;
    left: 0;
    top: 1.86rem;
    background: #fff;
    width: 100%;
    min-height:11.48rem ;
}
#complain ul li{
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
    text-align: left;

}
#complain ul .oneborder{
    content: "";
    background: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(.5);
}

</style>