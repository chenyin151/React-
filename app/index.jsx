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
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,

   document.getElementById('root')
)
