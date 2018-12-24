import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <p>{this.props.title}-{this.props.aaa.a}</p>
        )
    }
}

export default Header;