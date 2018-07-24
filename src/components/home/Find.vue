<template>
	<div>
		<div class="nav" ref="nav">
			<ul ref="ul">
				<li v-for="(val,index) in navList"
				:key="val" ref="li"
				:class="{active:flag==val}"
				@click="changeFlag(val)">
					{{val}}
				</li>
			</ul>
		</div>
		<h1>test2</h1>
	</div>
</template>

<script>

export default {
    data(){
        return {
        	navList:["逛街","影视","旅行","美食","音乐","护肤","阅读","运动","健身","明星"],
        	flag:"逛街",
        }
    },
    methods:{
    		//切换导航栏
		changeFlag(val){
			this.flag=val;
		}
	},
    mounted(){
    	//获取滚动宽度和创建滚动视图
    	this.$refs.ul.style.width=this.$refs.li[0].offsetWidth*this.navList.length+"px";
    	this.findScroll = new IScroll(this.$refs.nav,{
    		 scrollX: true,
    		 scrollY:false,
    		 bounce: false,
    		 probeType: 3,
    	});
    	this.findScroll.on("beforeScrollStart",()=>{
    		this.$pubsub.$emit("stopPlay-event")
    	});
    	this.findScroll.on("scrollEnd",()=>{
    		this.$pubsub.$emit("startPlay-event")
    	});
    	console.log("find")
    }
}
</script>

<style scoped="" lang="scss">
	.nav{
		width: 100%;
		height: .66rem;
		border-top: 1px solid #ccc;
		border-bottom:1px solid #ccc;
		&>ul{
			height: .66rem;
			&>li{
				float: left;
				width: 1.25rem;
				height: .66rem;
				line-height: .66rem;
				text-align: center;
				color: #999999;
				font-size: .3rem;
			}
			&>li.active{
				color:#333333;
			}
		}
	}
	h1{
		background: pink;
		height: 18rem;
	}
</style>
