import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../actions/userinfo';
import A from '../components/A';
import B from '../components/B';
import C from '../components/C';

class Hello extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div>
                <p>Hello world</p>
                <hr/>
                <A userinfo={this.props.userinfo}></A>
                <hr/>
                <B userinfo={this.props.userinfo}></B>
                <hr/>
                <C actions={this.props.userinfoActions}></C>
            </div>
        )
    }
    componentDidMount() {
        // 执行这里就跳转到userinfo中
        this.props.userinfoActions.login({
            userid:'abc',
            city: 'beijing'
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // 把userinfoActions作为store的action
        userinfoActions: bindActionCreators(userinfoActions,dispatch)
    }
}
// 我们把mapStateToProps和mapDispatchToProp通过collect
// 塞到hello中去
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)