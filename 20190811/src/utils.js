/**
 * 
 * @desc 网络请求封装，项目内请走这个封装
 * @param {Object} [params] - 发请求用的参数
 * @return {Promise} 请求的Promise任务对象
 * jsDoc 注释
 */
export const request = params => {
    request({
        method: 'get'
    })

    let newParams = JSON.stringify(JSON.parse(params))
    let requestParams = {
        ...params,
        method: (params.method && params.method.toUpperCase()) || 'GET'
    }
    
    let requestParams = {

    }

    return fetch(requestParams).then(res => res.json())
}