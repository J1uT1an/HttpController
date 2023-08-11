/**
 * 登录表单提交请求数据类型
 */
export interface LoginReq{
    user_name:string;
    password:string;
}

/**
 * 注册表单提交请求数据类型
 */
export interface RegisterReq{
    user_name:string;
    password:string;
    phone_number:string
}