import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const arr = [1,2,3];
        return (
            <ul>
                {arr.map((item,index) => {
                    return <li key={index} onClick={this.clickHandler.bind(this,item)}>js jump to {item}</li>
                })}
            </ul>
        )
    }
    clickHandler(value) {
        // js路由跳转
        hashHistory.push('/detail/' + value);
    }
}
export default List;