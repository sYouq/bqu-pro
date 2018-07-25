//栗子 ：过滤器的定义
export function arrToString (val, sign){
    //传入一个参数，为分割数组的符号，不传默认为 ',' 号
    if(sign == undefined){
        return val.join(",");
    }else{
        return val.join(sign);
    }
}

 //过滤数据的函数
 export function filterData(arr,...rest){
 	if(arr.length){
 		let newArr=arr.map(val=>{
 			let obj={};
 			for(let i in rest){
 				obj[rest[i]]=val[rest[i]];
 			}
 			return obj;
 		})
 		return newArr;
 	}else{
 		let obj={};
 		for(let i in rest){
 			obj[rest[i]]=arr[rest[i]];
 		}
 		return obj;
 	}
}

//过滤对象属性函数
export function filterObjName(arr,val){
	for(var i in arr){
		val=val[arr[i]]
	}
	return val;
}
