<template>
    <app-content class="aList">
        <div class="attention-list">
            <ul>
                <li v-for="(item, index) in 10" :key="index">
                    <div class="head-img"><img :src="headerImg" alt=""></div>
                    <div class="nikeName">ninicece</div>
                    
                </li>
            </ul>
        </div>
    </app-content>
</template>

<script>
export default {
    data(){
        return {
            headerImg : "images/message/15.jpg"
        }
    }
}
</script>

<style>
.aList{
    background: #fff;
}
.attention-list ul li{
    display:flex;
    width: 100%;
    height: 1.4rem;
    border-bottom: 1px solid #e6e6e6;
    line-height: 1.4rem;

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

</style>
