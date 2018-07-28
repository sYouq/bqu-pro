<template>
<div>
<app-content class="chatlist-wrap">
    <div class="item-list">
        <ul>
            <li v-on:touchstart="swiperLAction(index,$event)"  ref="list" v-for="(item, index) in 20" :key="index">
                <div class="list-wrap" ref="listWrap">
                    <div class="head-img" v-on:tap="goChatDetail">
                        <img src="images/message/15.jpg" alt="">
                    </div>
                    <div class="chat-content" v-on:tap="goChatDetail">
                        <p class="clearfix con-top">
                            <span class="nickname">星月</span>
                            <span class="last-time">18:06</span>
                        </p>
                        <p class="clearfix con-bom">
                            <span class="last-chat">你好！！</span>
                            <span class="num-chat">1</span>
                        </p>
                    </div>
                    <div class="delete-friend" ref="deleteBtn" @tap="deleteAction(index)">
                        <i class="iconfont icon-delete"></i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    
</app-content>
<!-- 子页面入口 -->
<router-view></router-view>
</div>
</template>

<script>
export default {
    data(){
        return {
            isShow : true,
        }
    },
    methods : {
        swiperLAction(index, e){
            var list = this.$refs.list[index];
            var listWrap = this.$refs.listWrap[index];
            var startPosition , endPosition , disX, disY, moveLength;
            var l = 0 , lrem = 0;
            var isTrue = true;
            var touch = e.touches[0];
            startPosition = {
                x : touch.pageX,
                y : touch.pageY
            }
            // list.addEventListener("swipeLeft", function (){
            //     // console.log("swipeLeft");
            //     this.isLeft = true;
            // })
            // // list.addEventListener("touchstart", function (e){
            // //     // console.log("touchstart")
            // //     console.log(e.touches[0])
            // //     var touch = e.touches[0];
            // //     startPosition = {
            // //         x : touch.pageX,
            // //         y : touch.pageY
            // //     }
            // // })
            list.addEventListener("touchmove", (e)=>{
                var touch = e.touches[0];
                endPosition = {
                    x : touch.pageX,
                    y : touch.pageY
                }
                disX = endPosition.x - startPosition.x;
                disY = endPosition.y - startPosition.y;
                moveLength = Math.sqrt(Math.pow(Math.abs(disX), 2) + Math.pow(Math.abs(disY), 2));
                if(disX < 0 && isTrue){
                    l = disX;
                    if(disX <= -120){
                        l = -120;
                        isTrue = false;
                        this.isShow = true;
                    }
                }
                if(disX >=0){
                    l = disX + l;
                    if(l >= 0){
                        l = 0;
                    }
                    isTrue = true;
                    this.isShow = false;
                }
                lrem = l/100;
                listWrap.style.left = lrem + 'rem';
                // list.style.zIndex = 10;
            })
            list.addEventListener("touchend", ()=>{
                if(l < -60){
                    l = -120;
                    isTrue = false;
                    this.isShow = true;
                }
                if( l >= -60 && l < 0){
                    l = 0;
                }
                lrem = l/100;
                listWrap.style.left = lrem + 'rem';
            })
            if(this.isShow){
                document.addEventListener("touchstart", ()=>{
                    l = 0;
                    lrem = l/100;
                    listWrap.style.left = lrem + 'rem';
                })
            }
        },
        //删除聊天列表
        deleteAction(index){
            var list = this.$refs.list[index];
            list.remove();
        },
        //进入聊天详情页
        goChatDetail(){
            console.log(111);
            this.$router.push("chat-list/chatDetail")
            
        }
        


    },
    mounted(){
        
        
        

    }
}
</script>

<style scoped>
    .chatlist-wrap{
        background: #f5f5f5;
    }
    .item-list ul li{
        width: 100%;
        height: 1.4rem;
        border-bottom:1px solid #e9e9e9;
        position:relative;
        overflow: hidden;
        background: #fff;
    }
    .item-list ul li .list-wrap{
        position:absolute;
        top:0;
        left:0;
        display:flex;
        height: 1.4rem;
        transition: all 300ms;
    }
    .head-img{
        width: 1rem;
        height: 1rem;
        margin: .2rem .3rem;
    }
    .head-img img{
        width: 100%;
        height: 100%;
    }
    .chat-content{
        padding-top:.2rem;
        width: 5.9rem;
    }
    .con-top{
        line-height: .5rem;
    }
    .con-bom{
        position:relative;
        line-height: .5rem;
    }
    .nickname{
        float : left;
        font-size: .32rem;
        width: 4.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
    }
    .last-time{
        float: right;
        margin-right: .32rem;
        color: #999;
    }
    .last-chat{
        float: left;
        font-size: .28rem;
        color: #999;
        width: 4.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow:ellipsis;
    }
    .num-chat{
        position:absolute;
        bottom:0;
        right:.36rem;
        width: .32rem;
        height: .32rem;
        background: #F1457C;
        text-align:center;
        line-height:.32rem;
        color:#fff;
        border-radius: 50%;
    }
    .delete-friend{
        width: 1.2rem;
        height: 1.4rem;
        background: #F1457C;
        text-align:center;
        line-height:1.4rem;
        
    }
    .delete-friend i {
        font-size: .58rem;
        color:#fff;
    }
    /* .shade{
        width: 100%;
        height: 100%;
        background: red;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
    } */
</style>
