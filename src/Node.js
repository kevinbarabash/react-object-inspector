import React, {Component} from 'react';
import {connect} from 'react-redux';

class Node extends Component {
    constructor() {
        super();

        this.state = {
            disclosed: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({ disclosed: !this.state.disclosed });
    }

    render() {
        const triangleStyle = {
            position: 'absolute',
            fontSize: 10,
            color: '#555',
            marginRight: 5,
            left: -13,
            top: 2,
            cursor: 'pointer',
        };

        const downTriangle = "\u25BC";
        const rightTriangle = "\u25B6";

        const indent = {
            marginLeft: 20
        };

        const propNameStyle = {
            color: 'rgb(192,0,192)'
        };
        const stringStyle = {
            color: 'rgb(232,0,0)'
        };
        const numberStyle = {
            color: 'rgb(0,0,255)'
        };
        const booleanStyle = {
            color: 'rgb(0,0,255)'
        };
        const nullStyle = {
            color: 'rgb(128,128,128)'
        };

        const children = Object.keys(this.props.obj).map(key => {
            const value = this.props.obj[key];

            if (value == null) {
                return <div style={indent} key={key}>
                    <span style={propNameStyle}>{key}: </span>
                    <span style={nullStyle}>{String(value)}</span>
                </div>;
            } else if (typeof value === 'object') {
                return <div style={indent} key={key}>
                    <ConnectedNode id={value.id} name={key}/>
                </div>;
            } else if (typeof value === 'string') {
                return <div style={indent} key={key}>
                    <span style={propNameStyle}>{key}: </span>
                    <span style={stringStyle}>"{value}"</span>
                </div>;
            } else if (typeof value === 'number') {
                return <div style={indent} key={key}>
                    <span style={propNameStyle}>{key}: </span>
                    <span style={numberStyle}>{value}</span>
                </div>;
            } else if (typeof value === 'boolean') {
                return <div style={indent} key={key}>
                    <span style={propNameStyle}>{key}: </span>
                    <span style={booleanStyle}>{value.toString()}</span>
                </div>;
            }
        });

        const type = Array.isArray(this.props.obj) ? "Array" : "Object";

        return <div style={{position:'relative'}}>
            <span style={triangleStyle} onClick={this.handleClick}>
                {this.state.disclosed ? downTriangle : rightTriangle}
            </span>
            <span style={propNameStyle}>{this.props.name}: </span>
            <span>{type}</span>
            {this.state.disclosed && children}
        </div>;
    }
}

function mapStateToProps(state, ownProps) {
    return {
        obj: state[ownProps.id]
    };
}

const ConnectedNode = connect(mapStateToProps)(Node);

module.exports = ConnectedNode;
