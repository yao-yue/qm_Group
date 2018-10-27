// 云函数入口文件
const AppId = '1257714574';
const SecretId = "AKIDGQmPI7LGmJx6v7sGHKCDYnuYBcrwe6wj";
const SecretKey = "qVyYzGLzSjs0W3XqdKqAJI5f3EDyXwDH";
const cloud = require('wx-server-sdk')
// 只要它其中的一个功能 解构 {ImageClient}
const { ImageClient } = require('image-node-sdk')
const fs = require('fs')
const path = require('path')

cloud.init()
let imageClient = new ImageClient({AppId, SecretId, SecretKey})

// 云函数入口函数
exports.main = async (event, context) => {
    return await imageClient.imgPornDetect({
        formData: {
            // node 文件系统 由fs rwd+, path 提供路径对象
            image: fs.createReadStream(path.join(__dirname, './women.jpg'))
        },
        headers: {
            'content-type': 'multipart/formm-data'
        }
    })
}