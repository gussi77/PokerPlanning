import React, { Component, PropTypes } from 'react';

import AppBar from 'material-ui/lib/app-bar';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import LeftNav from 'material-ui/lib/left-nav';
import RaisedButton from 'material-ui/lib/raised-button';

//TODO: http://hackingbeauty.com/material-ui-left-nav/
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleTouchTap() {
        console.log('onTouchTap triggered on the title component');
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
            <AppBar
                title="Title"
                iconElementLeft={<IconButton onClick={this.handleToggle}><MoreVertIcon/></IconButton>}
                />
                <LeftNav open={this.state.open} docked={false}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </LeftNav>
            </div>
        );
    }
}
export default Header;
