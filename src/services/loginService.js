import axios from "axios";
import API from "../api/api.js";
//获取验证码
export function getCode(val){
    return new Promise((resolve, reject)=>{
        axios.get(API.GET_CODE +"?phone="+ val)
        .then((result)=>{
            resolve(result)
        }).catch((error)=>{
            console.log(error)
        })
    })
}

//发送登录请求
export function sendLogin(phone, code){
    return new Promise((resolve, reject)=>{
        axios.get(API.LOGIN + "?phone=" + phone + "&messageCode="+ code)
        .then((result)=>{
            resolve(result.data)
        })
    })
}