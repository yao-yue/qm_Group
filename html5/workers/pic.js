self.addEventListener('message', (event) => {
    //不可以引用dom
    const data = event.data;
    console.log(data);
    for (let item of data.pics) {
        // 你有一个图片的src,你就可以去AJAX请求资源
        let xhr = new XMLHttpRequest();
        xhr.open('GET', item.src, true);
        xhr.responseType = 'blob';   //添加响应头
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                self.postMessage({
                    id: item.id,
                    result: xhr.response
                });
            }
        }
        xhr.send();
    }
})