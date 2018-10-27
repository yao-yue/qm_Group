// require + module.exports  js模块化规范 commonJS
// import from export default   es6 模块化  node6以下不能支持
const cloud = require('wx-server-sdk')
const got = require('got');
cloud.init();
const db = cloud.database()
//不能够提前定义  异步
// const photos = db.collection('photos')
// const user = db.collection('userInfo')
// const _ = db.command

// async是函数修饰符， 属于ES7,可以让异步的代码同步化
// exports.main = async () => {
//     // 费时，异步的，但是想保持执行的顺序和阅读的顺序
//     // await 让我们的代码等待一下 只有async才可以用

//     // 用户表 userInfo photos 图片 一对多
//     // database photos map userInfo
//     // const photos = [{
//     //     _id: ,
//     //     _openid: ,
//     //     iamge: '',
//     //     // 用户的信息做为user内嵌的对象组织起来
//     //     user: {
//     //         nickname: '旅梦开发团',
//     //         province: '南昌'
//     //     }
//     // }]
//     let getResponse = await got('httpbin.org/get') 
//     console.log(getResponse);
//     let postResponse = await got('httpbin.org/post', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: '这是标题',
//             value: 123
//         })    
//     })
//     return postResponse.body
// }


exports.main = async () => {
    const photoInfos = [];
    const photos = await db.collection("photos").get();
    console.log(photos);
    for(let i = 0; i < photos.data.length; i++) {
      const photo = photos.data[i];
      let openid = photo._openid;
      const user = await db.collection('userInfo').where({
        _openid: openid
      }).get();
      if (user.data.length > 0) {
        photo.user = user.data[0]
      }
      photoInfos.push(photo);
    }
    return photoInfos;
}  
