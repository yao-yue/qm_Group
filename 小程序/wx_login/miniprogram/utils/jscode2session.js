

function jscode2session(event) {
    let { code } = event;
    let APPID = 'wx830c0b9bf6e2ab19';
    let SECRET = 'f3f56688833bc1f30c9fd322089b2841';
    let grant_type= 'authorization_code'
    console.log(code);
    //跟微信服务器通信
    
    wx.request({
        url: `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`,
        method: "GET",
        success: function (res) {
        console.log(res.data)
        }
    })

}

module.exports= {
    jscode2session: jscode2session
}