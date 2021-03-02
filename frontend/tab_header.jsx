import React from 'react';

class TabsHeader extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.selectTab();
    }

    render () {
        return (
            <li onClick={this.handleClick}>
                {this.props.tabs[this.props.selectedTab].title}
            </li>
        )
    }

}
    



export default TabsHeader;