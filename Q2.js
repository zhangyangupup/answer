/**
 * 题目二：请用 javascript 实现一个函数 parseUrl(url)，将一段 url 字符串解析为 Object。
 * 传入：parseUrl("http://www.bbkedu.com/product/list?id=123456&sort=discount#title");
 * */ 
function parseUrl(url){
    if(typeof url !== 'string'){
        return false
    }
    let result={}
    const urlSplit = url.split('?')[1].split('#')[0]

    // 判定是否含协议头
    if(url.indexOf('http://')===0 || url.includes('https://')===0){
        // 获取协议头
        result.protocol = url.split(':')[0]
        // 获取域名
        result.host = url.split(`${result.protocol}://`)[1].split('/')[0]
        // 获取路由
        result.path = url.split(result.host)[1].split('?')[0]
        // 获取hash
        result.hash = url.split('#')[1]
        // 获取params
        if (urlSplit) {
            let params={}
            // 从url的索引1开始提取字符串
            const str = urlSplit.substring(0)
            // 如果存在&符号，则再以&符号进行分割
            const arr = str.split('&')
            // 遍历数组
            for (var i = 0; i < arr.length; i++) {
                if(params[arr[i].split('=')[0]]){
                    params[arr[i].split('=')[0]] = [unescape(arr[i].split('=')[1])].concat(params[arr[i].split('=')[0]])
                }else{
                    params[arr[i].split('=')[0]] = unescape(arr[i].split('=')[1])
                }
            }
            result.params = params
        }
    }else{
        throw new TypeError('没有协议头')
    }
    return result
}