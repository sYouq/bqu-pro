<template>
    <app-content class="aList">
        <div class="attention-list">
            <ul>
                <li v-for="(item, index) in 10" :key="index">
                    <div class="head-img"><img :src="headerImg" alt=""></div>
                    <div class="nikeName">ninicece</div>
                    <div class="add-friend" @click="addFriendAction(index)">加为好友</div>
                </li>
            </ul>
        </div>
    </app-content>
</template>

<script>
export default {
    data(){
        return {
            headerImg : ["images/message/20.jpg"],
            list : [],
        }
    },
    methods : {
        addFriendAction(index){
            console.log("addFriend" +index)
        }
    }
}
</script>

<style scoped>
.aList{
    background: #fff;
}
.attention-list ul li{
    display:flex;
    width: 100%;
    height: 1.38rem;
    border-bottom: 1px solid #e6e6e6;
    line-height: 1.38rem;

}
.head-img{
    width: 1rem;
    height: 1rem;
    margin: .2rem .2rem 0 .3rem;
}
.head-img img{
    width: 100%;
    height: 100%;
}
.nikeName{
    width: 4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow : ellipsis;
    font-size: .32rem;
}
.add-friend{
    margin-left: .1rem;
    width: 1.6rem;
    height: .66rem;
    background: #f1457c;
    margin-top: .37rem;
    line-height: .66rem;
    text-align:center;
    color:#fff;
    border-radius: 4px;
    font-size: .24rem;
}
</style>
