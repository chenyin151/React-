import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <p>Home</p>
                {/* 这是用Html跳转,也可用js跳转 */}
                <Link to='list'>to List</Link>
            </div>
            
        )
    }
}
export default Home;