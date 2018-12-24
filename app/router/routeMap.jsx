import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'
import Hello from '../containers/Hello'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            // history是从外面传进来的
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                {/* 如果我访问/，则加载APP模板页面 */}
                <Route path='/' component={App}>
                    {/* 默认的路由，如果我只访问根，那么直接跳转到Home这个子页面 */}
                    <IndexRoute component={Home} />
                    {/* 若访问根+List，则进入List这个页面 */}
                    <Route path='list' component={List} />
                    <Route path='detail/:id' component={Detail} />
                    <Route path='hello' component={Hello} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

export default RouteMap
