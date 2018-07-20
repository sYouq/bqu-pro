//栗子 ：过滤器的定义
export function arrToString (val, sign){
    //传入一个参数，为分割数组的符号，不传默认为 ',' 号
    if(sign == undefined){
        return val.join(",");
    }else{
        return val.join(sign);
    }
}