<template>
	<div>
		<div class="nav" ref="nav">
			<ul ref="ul">
				<li v-for="(val,index) in navList"
				:key="val.id" ref="li"
				:class="{active:flag==val.name}"
				@click="changeFlag(val.name,index)">
					{{val.name}}
				</li>
			</ul>
		</div>

		<div class="show" ref="show">
			<ul v-for="(val,index) in showList" :key="index" ref="falls" @click="test2">
				<li >
					<img :src="val.pictures" alt="" ref="img">
				</li>
				<li>
					<p>{{val.content}}</p>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	import Vuex from "vuex";
	import {homeNavData,homeFindData} from "../../services/homeService.js";
	import {falls} from "../../extend/Extend.js"

	export default {
	    data(){
	        return {
	        	navList:[],
	        	flag:"逛街",
	        	showList:[],
	        	cacheData:[],
	        	count:0,
	        }
	    },
	    methods:{
	    	//禁止或允许轮播切换效果
	    	...Vuex.mapActions({
	    		changLock:"Home/findChangeLock",
	    	}),
	    	//切换导航栏
			changeFlag(val,index){
				this.flag=val;
				let data=this.cacheData.find(item=>item[index])
				if(data){
					console.log(val+"数据已存在")
					this.showList=data[index];

				}else{
					console.log("添加了"+val)
					this.showList=val;
					if(this.cacheData.length==3){
						if(this.count==0){
							this.cacheData.splice(0,1,{[index]:this.showList})
							this.count++;
							console.log("替换第1个")
						}else if(this.count==1){
							this.cacheData.splice(1,1,{[index]:this.showList})
							this.count++;
							console.log("替换第2个")
						}else{
							this.cacheData.splice(2,1,{[index]:this.showList})
							this.count=0;
							console.log("替换第3个")
						}
					}else{
						this.cacheData.push({[index]:this.showList})
					}
				}
				console.log(this.cacheData.map((item)=>{
					return Object.keys(item)
				}))
			},
			test1(){
				console.log(1)
			},
			test2(){
				console.log(2)
			}
		},
		created(){
			homeNavData().then(data=>{
				this.navList=data;
				this.$nextTick(()=>{
					this.$refs.ul.style.width=this.$refs.li[0].offsetWidth*this.navList.length+"px";
				})
			});
			homeFindData({id:1}).then(data=>{
				this.showList=data;
				console.log(data)
				this.cacheData.push({0:this.showList});
				this.$nextTick(()=>{
					falls(this.$refs.show,this.$refs.img)
				})
			})
		},
	    mounted(){
	    	//获取滚动宽度和创建滚动视图
	    	this.findScroll = new IScroll(this.$refs.nav,{
	    		 scrollX: true,
	    		 scrollY:false,
	    		 bounce: false,
	    		 probeType: 3,
	    	});
	    	//监听滚动开始禁止轮播
	    	this.findScroll.on("beforeScrollStart",()=>{
	    		this.findScroll.refresh();
	    		this.changLock(true);
	    	});
	    	//监听滚动结束可以轮播
	    	this.findScroll.on("scrollEnd",()=>{
	    		this.changLock(false);
	    	});
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
	.show{
		background: #f5f5f5;
		&>ul{
			width: 3.45rem;
			&>li{
				background: #fff;
				&>img{
					width: 100%;
					display: block;
				}
			}
			&>li:nth-child(2){
				padding: .12rem .11rem .16rem .28rem;
				font-size:.26rem;
				&>p{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
			}
		}
	}
</style>
