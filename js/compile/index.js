const html = ` 
    <view>
        <text>{{username}}</text>
    </view>
`;
let obj = {
    'username' : '孙悟空'
};
// {{}}
// 在模板中查找{{key}},替换成 username 变量的值 replace 
function compile(html) {
    // test => $1 => key(username) => replace{{}} =>key的值
    var reg = /\{\{(.*)\}\}/gm;
    //匹配占位符
    if (reg.test(html)) {
        let key = RegExp.$1;
        html = html.replace(reg, obj[key]);
    }
    return html;
}

const compiledHTML = compile(html);
console.log(compiledHTML);