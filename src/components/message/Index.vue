<template>
    <div class="message-wrap">
        <ul>
            <li @click="goChatListAction()">消息列表<i class="iconfont icon-back-copy icon"></i></li>
            <li @click="goFriendListAction()">好友<i class="iconfont icon-back-copy icon"></i></li>
            <li>好友名片<i class="iconfont icon-back-copy icon"></i></li>
            <li @click="goAttentionListAction()">关注列表<i class="iconfont icon-back-copy icon"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    methods : {
        goChatListAction(){
            this.$router.push('/chat-list');
        },
        goAttentionListAction(){
            this.$router.push('/message/attentionList')
        },
        goFriendListAction(){
            this.$router.push('/message/friendList');
        }
    }
}
</script>

<style scoped>
    .message-wrap{
        width: 100%;
        
    }
    .message-wrap ul{
        margin-top: .42rem;
        background: #fff;
        padding-left: .22rem;
    }
    .message-wrap ul li {
        width: 100%;
        height: .98rem;
        line-height: .98rem;
        border-bottom:1px solid #efefef;
        font-size: .32rem;
        text-indent: .06rem;
    }
    .message-wrap ul li .icon{
        float:right;
        font-size: .24rem;
        margin-right: .3rem;
    }
</style>
