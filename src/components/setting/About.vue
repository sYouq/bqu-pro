<template>
    <div id="about">


        <header>
            <keep-alive>
                <router-view>

                </router-view>
            </keep-alive>
            <i @click="goBack" class="return iconfont icon-fanhui"></i>
            <h1>关于伴趣</h1>

        </header>

        <ul>
            <li @click="goFeedBack()">意见反馈<i class="textarea iconfont icon-back-copy"></i></li>
            <li class="oneborder"></li>
            <li>去评分<i class="select iconfont icon-back-copy"></i></li>
            <li class="oneborder"></li>
            <li>版本更新<i class="select iconfont icon-back-copy"></i></li>
        </ul>



    </div>
</template>

<script>
export default {
    methods: {
        goBack(){
            history.back();
        },
        goFeedBack(){
            this.$router.push({
                name: 'feedback',
                path: '/setting/about/feedback'
            })
        }
    }
}
</script>

<style scoped>
#about{
    top: 0;
    left: 0;
    position: relative;
    z-index: 20;
    width: 100%;
    height: 13.34rem;
    background: #f5f5f5;
}
#about header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#about header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}

#about header h1{
    position: absolute;
    top: .58rem;
    left: 3.16rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#about ul{
    position: absolute;
    left: 0;
    top: 1.68rem;
    background: #fff;
    width: 100%;
    min-height:3.04rem ;
}
#about ul li{
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
#about ul .oneborder{
    content: "";
    background: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(.5);
}
#about ul  .textarea{
    position: absolute;
    top: .32rem;
    left: 6.76rem;
    font-size: .2rem;
    line-height: .2rem;
    color: #9b9b9b;

}
#about ul  .select{
    position: absolute;
    top: .32rem;
    left: 6.76rem;
    font-size: .2rem;
    line-height: .2rem;
    color: #9b9b9b;
}
#about ul  .select{
    position: absolute;
    top: .32rem;
    left: 6.76rem;
    font-size: .2rem;
    line-height: .2rem;
    color: #9b9b9b;

}
</style>