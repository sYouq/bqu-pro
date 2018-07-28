<template>
    <div id="edit">
        <header class="header">
            <div class="cancel pub" @click="cancelAction()">取消</div>
            <div class="publish pub">发表</div>
        </header>
        <textarea class="textarea" placeholder="这一刻的想法"></textarea>
        <div class="choice">
            <div class="camera" @click="selectImg()">
                <img src="images/primary/selected/camera.png">
                <p>照片 / 视频</p>
            </div>
            <div class="add" @click="selectImg()">
                <img src="images/primary/selected/add.png"> 
            </div>
        </div>
        <div class="selectImg">
            <ul>
                <li><img src="images/primary/selected/select01.jpg"> </li>
                <li><img src="images/primary/selected/select02.jpg"> </li>
                <li><img src="images/primary/selected/select03.jpg"> </li>
            </ul>
        </div>
        <div class="Jurisdiction">
            <ul>
                <li @click="positionActive()">
                    <img src="images/primary/selected/position.png">
                    <P>所在位置</P>
                </li>
                <li @click="jurisdiction()">
                    <img src="images/primary/selected/person.png">
                    <P>谁可以看</P>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    methods:{
        //取消按钮返回上一级
        cancelAction(){
            this.$router.back()
        },
        //照片选择，跳转选择相册照片页面
        selectImg(){
            this.$router.push({
                name: 'selectimg',
            })
        },
        //选择所在位置
        positionActive(){
            this.$router.push({
                name: 'position'
            })
        },
        //选择动态查看权限
        jurisdiction(){
            this.$router.push({
                name: 'jurisdiction'
            })
        }

    }
}
</script>

<style scoped>
#edit{
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 5;
    background: #fff;
}
/* 头部样式 */
.header{
    width: 100%;
    height: .88rem;
}
.pub{
    position: absolute;
    top: 0;
    height: .88rem;
    line-height: .88rem;
    font-size: .28rem;
}
.cancel{
    left: 0.3rem;
    color: #333;
}
.publish{
    right: 0.3rem;
    color: #7ed321;
}
/* 文字编辑 */
.textarea{
    width: 6.26rem;
    height: 1.5rem;
    border: none;
    outline: none;
    margin: 0.15rem auto;
    display: block;
    font-size: .3rem;
    color: #b7b7b7;
}
.choice{
    margin-left: .6rem;
    overflow: hidden;
}
.camera{
    float: left;
    width: 2rem;
    height: 2rem;
    background: #d8d8d8;
}
.camera p{
    color: #333;
    font-size: .28rem;
    text-align: center;
}
.camera img{
    width: .68rem;
    height: .68rem;
    margin-top: .44rem;
    margin-left: .66rem;
}
.add{
    float: left;
    width: 2rem;
    height: 2rem;
    background: #d8d8d8;
    margin-left: .1rem;
}
.add img{
    width: 1rem;
    height: 1rem;
    margin: .5rem;
}
/* 选择出来的照片 */
.selectImg{
    margin: .2rem 0 0 .6rem;
    overflow: hidden;
}
.selectImg ul li{
    float: left;
    margin: 0 .15rem .15rem 0;
}
.selectImg ul li img{
    width: 2rem;
    height: 2rem;

}
/* 选择所在位置和查看权限 */
.Jurisdiction ul{
    width: 6.3rem;
    margin: 0 auto;
}
.Jurisdiction ul li{
    width: 100%;
    height: 1rem;
    border-top: solid 1px #d8d8d8;
    border-bottom: solid 1px #d8d8d8;
}
.Jurisdiction ul li:nth-child(2){
    border-top:none;
}
.Jurisdiction ul li img{
    float: left;
    width: .28rem;
    height: .28rem;
    margin-top: .36rem;
    margin-right: .76rem;
}
.Jurisdiction ul li p{
    float: left;
    line-height: 1rem;
    color: #333;
    font-size: .32rem;
}
</style>

