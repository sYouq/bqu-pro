//数字转换为时间格式，时分秒
export function timeFormat(val){
    var str = '';
    var h = parseInt(val / 3600) ;
    var m = parseInt((val % 3600) / 60);
    var s = parseInt((val % 3600) % 60);
    str = addZero(h) +":"+ addZero(m) + ":" + addZero(s);
    return str;
}
function addZero(val){
    if(val < 10){
        val = "0"+val;
    }else{
        val = val;
    }
    return val;
}