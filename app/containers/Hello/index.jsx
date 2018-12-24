import React from 'react';
import Carousel from './subpage/Carousel';
import Recommend from './subpage/Recommend';
import List from './subpage/List';
import Header from '../../components/Header'

class Hello extends React.Component {
    constructor(props, context) {
        super(props, context);
        // state相当于Vue的data
        this.state = {
            now: Date.now()
        }
    }
    render() {
        let s = {a:100, b:true};
        return (
            <div>
                {/* props传入Obj布尔类型无法转成字符串，所以无法打印出来 */}
                <Header title="hello页面1" aaa={s}/>
                <p onClick={this.clickHandler.bind(this)}>hello world-{this.state.now}</p>
                <hr/>
                <Carousel />
                <Recommend />
                <List />
            </div>
        )
    }
    componentDidMount() {
        // 页面渲染完成
        console.log('页面渲染后了之后执行')
    }
    componentDidUpdate(preProps, preState) {
        // 触发更新完成
        console.log('componentDidUpdate', preProps, preState)
    }
    // 若设置成false，数据就不会及时更新
    shouldComponentUpdate(preProps, preState) {
        return false;
    }
    componentWillUnmount() {
        // 页面将要离开的时候调用，销毁一些不需要的东西
        console.log('unLoad')
    }
    clickHandler() {
        this.setState({
            now: Date.now()
        })
    }
}
export default Hello;
