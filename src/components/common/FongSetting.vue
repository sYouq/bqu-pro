<template>
<div id="setting-wrap">


        <div id="setting">


            <header>
                <keep-alive>
                    <router-view>

                    </router-view>
                </keep-alive>

                <i class="return iconfont icon-fanhui" @click="cancelSetting"></i>
                <h1>设置</h1>

            </header>

            <ul>
                <li @click="goAccount()">账号管理
                    <i class="userpic"></i>
                    <i class="account iconfont icon-back-copy"></i>
                </li>
                <li class="oneborder"></li>
                <li @click="goSafe()">安全隐私
                    <i class="safe iconfont icon-back-copy"></i>
                </li>
                <li class="oneborder"></li>
                <li @click="goClearPlace()">清理存储空间
                    <i class="clearplace iconfont icon-back-copy"></i>
                </li>
                <li class="oneborder"></li>
                <li @click="goAbout()">关于伴趣
                    <i class="about iconfont icon-back-copy"></i>
                </li>
            </ul>
            <button @click="cancelSetting">退出登录</button>
        </div>

</div>
</template>

<script scoped>
export default {


    methods:{
        //点击返回，返回至“首页”页面或者“我的”页面
        cancelSetting(){
            history.back();
        },
        goAccount(){
            this.$router.push({
                name: 'account',
                path: '/setting/account',
            });
        },
        goSafe(){
            this.$router.push({
                name: 'safe',
                path: '/setting/safe',
            });
        },
        goClearPlace(){
            this.$router.push({
                name: 'clear-place',
                path: '/setting/clear-place',
            });
        },
        goAbout(){
            this.$router.push({
                name: 'about',
                path: 'setting/about',
            });
        }
    }
}
</script>

<style scoped>
#setting-wrap{
    width: 100%;
    height: 13.34rem;
    background: #fff;
}
#setting{
    position: relative;
    z-index: 10;
    width: 100%;
    height: 13.34rem;
    background: #f5f5f5;
}
#setting header{
    background: #f1457c;
    height: 1.28rem;
    text-align: center;
}
#setting header .return{
    color: #fff;
    position: absolute;
    top: .7rem;
    left: .3rem;
    font-size: .28rem;
}
#setting header h1{
    position: absolute;
    top: .6rem;
    left: 3.42rem;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: .34rem;
    line-height: .48rem;

}
#setting ul{
    position: absolute;
    left: 0;
    top: 1.98rem;
    width: 100%;
}
#setting ul li{
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
#setting ul .oneborder{
    content: "";
    background: #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    height: 1px;
    width: 100%;
    transform: scaleY(0.5);
    -webkit-transform: scaleY(.5);
}
#setting ul li .userpic{
    width: .88rem;
    height: .88rem;
    position: absolute;
    top: .05rem;
    left: 6rem;
    background: #eee;
}
#setting ul li .account{
    position: absolute;
    right: 0.3rem;
    height: .98rem;
    font-size: .2rem;
    color: #9b9b9b;
    line-height: .98rem;
}
#setting ul li .safe{
    position: absolute;
    right: 0.3rem;
    height: .98rem;
    font-size: .2rem;
    color: #9b9b9b;
    line-height: .98rem;
}
#setting ul li .clearplace{
    position: absolute;
    right: 0.3rem;
    height: .98rem;
    font-size: .2rem;
    color: #9b9b9b;
    line-height: .98rem;
}
#setting ul li .about{
    position: absolute;
    right: 0.3rem;
    height: .98rem;
    font-size: .2rem;
    color: #9b9b9b;
    line-height: .98rem;
}

#setting button{
    position: absolute;
    top: 7.82rem;
    left: 0;
    display: block;
    width: 100%;
    height: 1rem;
    background: #f1457c;
    font-family: PingFangSC-Medium;
    font-size: .34rem;
    color: #fff;
    text-align: center;
    border: 0;
}
</style>