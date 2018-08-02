<template>
    <div id="sex" @click="goBack" v-show="isSex">


        <div id="box" v-show="isSex">
            <div id="box-wrap">
                <div @click="goSelfData" id="male">
                    <i class="iconfont icon-wode"></i>
                    <p>男</p>
                </div>
                <div @click="goSelfData" id="female">
                    <i class="iconfont icon-wode1"></i>
                    <p>女</p>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
export default {
    data(){
        return{
            isSex : true,
        }
    },
    methods:{
        goBack(){
            history.back();
        },
        goSelfData(){
            return {
                isSex : false,
            }
        }
    }
}
</script>

<style scoped>
    #sex{
        background: rgba(0,0,0,.3);
        position: relative;
        width: 100%;
        height: 13.34rem;
        z-index: 10;
    }
    #sex #box{
        display: block;
        width: 6rem;
        height: 2.84rem;
        background: #fff;
        position: absolute;
        top: 4.64rem;
        left: .76rem;
    }
    #sex #box #box-wrap{
        position: relative;
    }
    #sex #box #box-wrap #male{
        position: absolute;
        top: 1rem;
        left: 1.46rem
    }
    #sex #box #box-wrap #male i{
        font-size: .6rem;
        line-height: .6rem;
        color: #999;
    }
    #sex #box #box-wrap #male p{
        margin-top: .12rem;
        font-size: .26rem;
        line-height: .36rem;
        color: #999;
        font-family: PingFangSC-Regular;
    }
    #sex #box #box-wrap #female{
        position: absolute;
        top: 1rem;
        right: 1.46rem
    }
    #sex #box #box-wrap #female i{
        font-size: .6rem;
        line-height: .6rem;
        color: #f1457c;
    }
    #sex #box #box-wrap #female p{
        margin-top: .12rem;
        font-size: .26rem;
        line-height: .36rem;
        color: #f1457c;
        font-family: PingFangSC-Regular;
    }
</style>