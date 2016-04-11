import React, {Component} from 'react';
import {connect} from 'react-redux';

import Inspector from './Inspector';

class App extends Component {
    render() {
        const style = {
            fontFamily: 'monaco',
            fontSize: 12,
            marginLeft: 10
        };

        return <div style={style}>
            <Inspector obj={this.props} name="ast" />
        </div>;
    }
}

module.exports = connect(state => state)(App);
