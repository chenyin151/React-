import React from 'react';

class B extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <p>{this.props.userinfo.city}</p>
        )
        
    }
}
export default B;