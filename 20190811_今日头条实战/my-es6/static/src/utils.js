/**
 * @file utils 
 * @author miaomiao  
 */
import axios from 'axios'

/**
 * @desc 网络请求封装，项目内请求走这个封装
 * 如果让同事不能维护的代码 函数名和注释写了就跟没写一样 jsDoc
 * 函数式编程的要求之一 不要在函数里改引用
 * @param {Object} [params] - 发请求用的参数
 * @return {Promise} 请求的Promise任务对象
 */
export const request = (params) => {
    // params.methods 这里要有一个新的requestParams对象 
    // var newParams = JSON.parse(JSON.stringify(obj)) obj里不用有方法 有了不能深拷贝就完蛋了

    let requestParams = {
        ...params,
        method: params.method && params.method.toUpperCase()
    }

    // axios, 徒手， $.ajax fetch是一个promise方法 可以.then 
    return axios(
        requestParams.url,
        requestParams
    );
 }

