
//瀑布流
export function falls(el,img){
	el.style.position = "relative";
	img[img.length-1].onload =()=>{
		function getMinIndex(arr){
			let min = arr[0];
			let index = 0;
			for(let i=0;i<arr.length;i++){
				if(min>arr[i]){
					min = arr[i];
					index = i;
				}
			}
			return index;
		}
		function getMax(arr){
			let max=arr[0];
			for(let i=0;i<arr.length;i++){
				if(max<arr[i]){
					max = arr[i];
				}
			}
			return max;
		}
		let children=el.childNodes;
    	let iw = children[0].offsetWidth;
		let arr = [];
    	for(let i=0;i<2;i++){
			children[i].style.position = "absolute";
			children[i].style.left = (iw*i + (i+1)*20)/100+'rem';
			children[i].style.top = 0.2+'rem';
			arr[i] =  children[i].offsetHeight+20;
		}
		for(let i=2;i<children.length;i++){
			let index = getMinIndex(arr);
			children[i].style.position = "absolute";
			children[i].style.left = (iw*index + (index+1)*20)/100 +"rem";
			children[i].style.top = (arr[index]+20)/100+"rem";
			arr[index] = arr[index]+children[i].offsetHeight+20;
		}
		el.style.height=getMax(arr)/100+'rem';
	}
};





