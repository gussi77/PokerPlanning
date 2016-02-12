import React, { Component, PropTypes } from 'react';

import AppBar from 'material-ui/lib/app-bar';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import IconButton from 'material-ui/lib/icon-button';
import LeftNav from 'material-ui/lib/left-nav';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

//TODO: http://hackingbeauty.com/material-ui-left-nav/
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
            <AppBar
                title="PlanningPoker"
                onLeftIconButtonTouchTap={this.handleToggle}
                />
                <LeftNav open={this.state.open}  onRequestChange={this.handleToggle}>
                    <AppBar iconElementLeft={<IconButton onTouchTap={this.handleToggle}><NavigationClose /></IconButton>}
                            title="Menu"/>

                    <MenuItem href="#/home" onTouchTap={this.handleToggle}>Home</MenuItem>
                    <MenuItem href="#/about" onTouchTap={this.handleToggle}>About</MenuItem>
                </LeftNav>
            </div>
        );
    }
}
export default Header;
