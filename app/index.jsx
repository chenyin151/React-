import React from 'react'
import { render } from 'react-dom'
// 通用样式
import './static/css/common.less'
import Hello from './containers/Hello'
// 性能测试,用npm安装
import Perf from 'react-addons-perf';
import Todo from './containers/Todo';
import App from './containers';
import { hashHistory } from 'react-router';
import RouteMap from './router/routeMap'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Hello2 from './containers/Hello2';

// 测试fetch功能
import { getData, postData } from './fetch/test.js'; 
// 引入并执行redux-demo.js
// import fn from './redux-demo.js';
// fn();

getData();
postData();
if (__DEV__) {
    console.log('是开发环境');
    window.Perf = Perf;
}
// 创建store,这个store把mutation传入进去
const store = configureStore();
render(
    // <Hello />,
    // <Todo />,
    // 在报找不到RouteMap路径的时候很可能是路由表中引用的页面出现问题了,
    // 写入路由导航就不能在页面中写死页面，否则报错,在react-router有hashHistory(#/List的形式)
    // 和browserHistory(/List的形式),但是需要后端服务器的支持，所以先用hashHistory,对搜索引擎支持的
    // 也比较友好
    
    // 这样做，路由里面的所有页面都有了store
    // <Provider store={store}>
    // <RouteMap history={hashHistory} ></RouteMap>
    // </Provider>,

    // <RouteMap history={hashHistory}></RouteMap>,
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('root')
)
