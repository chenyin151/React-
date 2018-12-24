import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                {/* 从路由中获取参数,react的路由参数也是放在 props中，这点跟Vue不同，Vue中是
                放在$route.query或者$route.params中 */}
                <p>Detail, url参数：{this.props.params.id}</p>
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Detail
module.exports = Detail