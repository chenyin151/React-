import React from 'react'
import { render } from 'react-dom'
// 通用样式
import './static/css/common.less'
import Hello1 from './containers/Hello/index'
// 性能测试,用npm安装
import Perf from 'react-addons-perf';
import Todo from './containers/Todo';

if (__DEV__) {
    console.log('是开发环境');
    window.Perf = Perf;
}
// 定义组件
class Hello extends React.Component {
    render() {
        var m = 100;
        var arr = ['aa','bb','cc'];
        var bl = false;
        return (
            <div>
                <Hello1 />
                {/* 给元素加class样式不能用class，因为他是关键字，要用className */}
                <p className="title" onClick={this.clickHandler.bind(this)}>Hello world</p>
                <p style={{fontSize:bl==true?'12px':'50px',display:'block'}}>Hello world</p>
                <p>Hello world</p>
                {/* 注释 */}
                {m?'是100':'not 100'}
                <ul>
                    {arr.map((item, index) => {
                        // 给li加上key这是react的建议，加上的话渲染的效率更高
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
    clickHandler(event) {
        console.log(event)
    }
}
render(
    // <Hello />,
    <Todo />,
    
    document.getElementById('root')
)
