import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux';
import Header from '../../component/header/Header';




import './app.css';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.string,
  children: PropTypes.node
};

export default App
