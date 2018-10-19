- jQuery 整站开发框架 semantic-ui 基于jQuery
- semantic-ui 支持ie 9以上  年轻的整站开发
    bootstrap 3.6保守一些
    css 兼容性 手机 css兼容性没有太大问题
    PC项目 向后兼容 客户需求  IE 9 分界点  css3的属性要注意兼容
    flex有两个版本 -webkit-box flex
    移动端 不会去用bootstrap, semantic-ui，去兼容一些不同的浏览器，会产生浪费的代码，Responsive web design

- encodeURIComponent（URL）编码与decodeURIComponent（URL）
    encodeURIComponent() 函数可把字符串作为 URI 组件进行编码:
        返回值 
            URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。
        说明 
      该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。
      其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。
    decodeURIComponent() 函数可把字符串作为 URI 组件进行解码。
        返回：URIstring 的副本，其中的某些字符被十六进制的转义序列转换成对应的ACSII字符