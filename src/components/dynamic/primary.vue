<template>
    <div>
        <div class="top">
            <img src="images/primary/primary.jpg" class="bgImg">
            <img src="images/primary/portrait.jpg" class="portrait">
            <i class="iconfont icon-zxji camera" @click="editAction()"></i>
        </div>
        <ul class="content">
            <li class="item">
                <img src="images/primary/person1.jpg" class="myPortrait">
                <p class="name">美美</p>
                <p class="opinion">这个美女超好看</p>
                <div class="content-main">
                    <!-- poster="images/primary/video/bgImg.jpg" -->
                    <!-- http://pc7gmdrw0.bkt.clouddn.com/lkG36_3O09LkVBLegc_siqmqwXjb -->
                    <video src="images/primary/video/test01.mp4"  
                        muted autoplay poster="images/primary/video/bgImg.jpg" 
                        ref="video" @click="videoAction()"
                        v-if="format == 0">
                    </video>
                    <!-- <img src="images/primary/video/video.png" ref="btn"> -->
                    <ul class="foodImg"
                        v-if="format == 1">
                        <li @click="photoAction(index)" v-for="(item,index) in imgList" :key=index>
                            <img :src='item'>
                        </li>
                    </ul>
                </div>
                <div class="comment">
                    <p class="time">一分钟前</p>
                    <img src="images/primary/comment.png" @click="hideAction()">
                    <div class="comment-hide" v-show = hide>
                        <p @click="praiseAction()"><i class="iconfont icon-xin1"></i>赞</p>
                        <p><i class="iconfont icon-pinglun-copy"></i>评论</p>
                    </div>
                </div>
                <div class="comment-content">
                    <div class="praise comment-pub">
                        <i class="iconfont icon-xin1"></i>
                        <b>波波,</b>
                        <b>娟娟,</b>
                        <b ref="myPraise"></b>
                    </div>
                    <ul>
                        <li class="comment-pub comment-word">
                            <i>波波</i>
                            <b>:好看吧</b>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            //评论按钮是否显示
            hide: false,
            //动态内容格式
            format: 1,
            imgList: [
                'images/primary/food/food01.jpg',
                'images/primary/food/food02.jpg',
                'images/primary/food/food03.jpg',
                'images/primary/food/food04.jpg',
                'images/primary/food/food05.jpg',
                ]
        }
    },
    methods:{
        //点击视频触发事件
        videoAction(){
            console.log("视频点击了")
        },
        //点击评论展开收起
        hideAction(){
            this.hide = !this.hide
        },
        //点击点赞并收起评论
        praiseAction(){
            this.$refs.myPraise.innerText = '美美'
            this.hide = false;
        },
        //点击动态图片，轮播形式显示全屏显示图片
        photoAction(index){
            this.$router.push({
                name: 'autoimg',
                params:{
                    num: index,
                }
            })
        },
        //点击照相机发表动态
        editAction(){
            this.$router.push({
                name: 'edit'
            })
        }
    },
    mounted(){
        // console.log(this.$refs.vdo)
        // this.$refs.btn.style.left = (this.$refs.vdo.offsetWidth - this.$refs.btn.offsetWidth)/100+'rem';
        // this.$refs.btn.style.top = (this.$refs.vdo.offsetHeight - this.$refs.btn.offsetHeight)/100+'rem';
        // console.log(this.$refs.vdo.offsetWidth,this.$refs.vdo.offsetHeight)
    }
}
</script>

<style scoped>
img{
    display: block;
}
.top{
    position: relative;
}
.bgImg{
    width: 100%;
}
.portrait{
    width: 1.36rem;
    height: 1.36rem;
    position: absolute;
    right: .3rem;
    bottom: -0.52rem;
    border: solid 2px #fff;
}
.camera{
    font-size: .3rem;
    color: #fff;
    position: absolute;
    top: 0.7rem;
    right: 0.3rem;
}
.content{
    /* height: 3000px; */
    
}
.content .item{
    position: relative;
    margin-top: 0.2rem;
    /* padding-bottom: .2rem; */
    border-bottom: solid 1px #ccc;
    padding: 0.1rem 0.3rem 0.2rem 1.42rem;
}
.myPortrait{
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: .24rem;
    top: 0;
}
.name{
    height: .38rem;
    line-height: .38rem;
    color: #333;
    font-size: .28rem;
}
.opinion{
    margin: .32rem 0 .27rem 0;
    color: #666;
    font-size: .24rem;
}
video{
    height: 2rem;
    margin-bottom: .2rem;
    position: relative;
}
.video img{
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    z-index: 5;
    top: 50%;
    left: 50%;
    background: red
}
.foodImg{
    overflow: hidden;
}
.foodImg li{
    float: left;
    margin: 0 0.07rem 0.07rem 0
}
.foodImg li img{
    width: 1.88rem;
    height: 1.88rem;
}
.foodImg li:nth-child(3n){
    margin:0 0 0.08rem 0
}
.time{
    font-size: .22rem;
    color: #999;
}
.comment{
    position: relative;
    overflow: hidden;
    height: .6rem;
}
.comment p{
    float: left;
}
.comment img{
    float: right;
    width: .48rem;
    height: .48rem;
}
.comment-hide{
    position: absolute;
    right: .52rem;
    top: 0;
}
.comment-hide p{
    font-size: .24rem;
    color: #fff;
    width: 1.24rem;
    height: .6rem;
    background: #999;
    text-align: center;
    line-height: .6rem;
}
.comment-hide p:nth-child(1){
    border-right: solid 2px #666;
}
.comment-hide p i{
    font-size: .28rem;
    margin-right: .11rem;
    position: relative;
    top: 0.02rem
}
.comment-content{
    margin-top: .3rem;
}
.comment-pub{
    width: 100%;
    height: .5rem;
    background: #ebebeb;
    border-bottom: solid 1px #dbdbdb;
}
.praise{
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.praise i{
    font-size: .32rem;
    color: #416bac;
    margin: 0 .2rem .25rem;
    position: relative;
    top: 0.03rem;
}
.praise b{
    font-size: .24rem;
    color: #416bac;
    font-weight: normal; 
    margin-right: .2rem;
}
.comment-word i{
    margin-left: .2rem;
    font-size: .24rem;
    color: #416bac;
    font-style: normal;
}
.comment-word b{
    font-weight: normal;
    font-size: .24rem;
    color: #666;
}
</style>

