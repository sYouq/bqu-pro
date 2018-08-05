/*
    获取验证码 get
    api/userController/getMessageCode
    参数： phone ： number 
*/

const GET_CODE = "api/userController/getMessageCode";

/*
    发送登录请求 get 
    api/userController/login?phone=18170401297&messageCode=123456
    参数:  phone ： number 
           messageCode : number
*/
const LOGIN = "api/userController/login";

export default{
    GET_CODE,
    LOGIN
}