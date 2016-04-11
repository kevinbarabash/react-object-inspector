import React, {Component} from 'react';

import ConnectedNode from './Node';

class App extends Component {
    render() {
        const style = {
            fontFamily: 'monaco',
            fontSize: 12,
            marginLeft: 10
        };

        return <div style={style}>
            <ConnectedNode id="0" name="ast" />
        </div>;
    }
}

module.exports = App;
