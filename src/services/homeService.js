//首页的数据请求文件
import Axios from "axios";
import Api from "../api/api.js";
import {filterData,filterObjName} from "../filter/arrToString.js";

function request(url,keyName,filterKeyNameArr,...rest){
	let parameter={__t: new Date().getTime()};
	if(rest.length){
		Object.assign(parameter,rest[0]);
	}
	return new Promise((resolve,reject)=>{
		Axios.get(url,{
			params:parameter,
		})
		.then(val=>{
			console.log(val)
			if(val.currentPage==-1){
				resolve(val.currentPage);
			}else{
				let newData=filterData(filterObjName(keyName,val),...filterKeyNameArr);
				resolve(newData);
			}
		})
		.catch(error=>{
	            console.log(error);
	    })
	})
}

//请求首页导航栏的数据
export function homeNavData(){
	let url=Api.HOME_NAV_URL;
	let keyName=["data"];
	let filterKeyNameArr=["id","name"];
	return request(url,keyName,filterKeyNameArr);
}

export function homeFindData(id){
	let url=Api.HOME_FIND_URL;
	let keyName=["data","data"];
	let filterKeyNameArr=["id","pictures","skimNum","authorIcon","authorId","isLove","collectNum","content"];
	return request(url,keyName,filterKeyNameArr,id);
}
