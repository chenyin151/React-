import 'whatwg-fetch';
import 'es6-promise';

export function getData() {
    // 第一个参数是url
    var result = fetch('/api/1',{
        // 传cookie的设置
        credentials: 'include',
        headers: {
            'Accept':'application/json, text/plain, */*'
        }
    });
    // 从服务器中获取res.text返回出去在下一个then中把打印出来
    result.then(res => {
        return res.text();
    }).then(text => {
        console.log(text);
    })
    // api/2获取json
    var result1 = fetch('/api/2', {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    })
}
export function postData() {
    var result = fetch('/api/post', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意post时候参数的形式
        body: 'a=100&b=200'
    });
    result.then(res => {
        return res.json();
    }).then(json => {
        console.log(json);
    })
}
