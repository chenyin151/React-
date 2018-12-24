import React from 'react';

class A extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <p>{this.props.userinfo.userid}</p>
        )
        
    }
}
export default A;