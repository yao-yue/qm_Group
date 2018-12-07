

function jscode2session(event) {
    let { code } = event;
    let app_id = 'wx830c0b9bf6e2ab19';
    let secretKey = 'bccdd7b4d1f2a0d9fe25f77a39510c74';
    let grant_type= 'authorization_code'
    console.log(code);
    //跟微信服务器通信
    
    // ?后 查询字符串
    // let url = `https://api.weixin.qq.com/sns/jscode2session?appid=wx830c0b9bf6e2ab19&secret=bccdd7b4d1f2a0d9fe25f77a39510c74&js_code=${code}&grant_type=authorization_code`
    // console.log(url);
    // wx.request({
    //     url: url,
    //     method: "POST",
    //     success: function (res) {
    //      console.log(res);
    //     }
    //    })
    wx.request({
        url: 'https://api.weixin.qq.com/sns/jscode2session?addid=wxaacf22345345cfc7162fe3&secret=83ebd41c3e6f34a49b3a34578063434548ff3f71&js_code=' + code + '&grant_type=authorization_code',
        method: "POST",
        success: function (res) {
        console.log(res)
        }
    })

}

module.exports= {
    jscode2session: jscode2session
}