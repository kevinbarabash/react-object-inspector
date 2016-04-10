import React, {Component} from 'react';
import ast from './ast.json';

class Inspector extends Component {
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
        const propNameStyle = {
            color: 'rgb(192,0,192)'
        };
        const stringStyle = {
            color: 'rgb(232,0,0)'
        };
        const numberStyle = {
            color: 'rgb(0,0,255)'
        };
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
            marginLeft: 30
        };

        const children = Object.keys(this.props.obj).map(key => {
            const value = this.props.obj[key];
            if (typeof value === "object") {
                return <div style={indent} key={key}>
                    <Inspector obj={value} name={key}/>
                </div>;
            } else if (typeof value === "string") {
                return <div style={indent} key={key}>
                    <span style={propNameStyle}>{key}: </span>
                    <span style={stringStyle}>"{value}"</span>
                </div>;
            } else if (typeof value === "number") {
                return <div style={indent} key={key}>
                    <span style={propNameStyle}>{key}: </span>
                    <span style={numberStyle}>{value}</span>
                </div>;
            } else {
                return <div style={indent} key={key}>
                    <span style={propNameStyle}>{key}: </span>
                    <span>{value}</span>
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

export class App extends Component {
    render() {
        const style = {
            fontFamily: 'monaco',
            fontSize: 12,
            marginLeft: 13,
        };

        return <div style={style}>
            <Inspector obj={ast} name="ast" />
        </div>;
    }
}