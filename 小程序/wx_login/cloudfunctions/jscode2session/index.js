// 云函数入口文件
const cloud = require('wx-server-sdk')
const queryString = require('querystring')
const request = require('request')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    let { code } = event;
    let id = 'wx830c0b9bf6e2ab19';
    let secretKey = 'f3f56688833bc1f30c9fd322089b2841';
    console.log(code);
    //跟微信服务器通信
    const data = {
        appid: id,
        secret: secretKey,
        js_code : code,
        grant_type: 'authorization_code'
    }
    // ?后 查询字符串
    let url = `https://api.weixin.qq.com/sns/jscode2session?${queryString.stringify(data)}`
    console.log(url);
    return new Promise((resolve, reject) => {
        request.get(url, (err, response, body) => {
            if(err || response.statusCode !== 200) {
                reject(err)
            } else {
                try {
                    console.log(body);
                    const r = JSON.parse(body);
                    resolve(r);
                } catch(e) {
                    reject(e)
                }
            }
        })
    })
    // 在session前， 后端， 操作小程序登录， 当然要小程序同意   
}