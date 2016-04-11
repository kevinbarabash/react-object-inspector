import {createStore} from 'redux';
import gehry from '../node_modules/gehry/dist/gehry';

import ast from './ast.json';

const defaultState = gehry.deconstruct(ast);
console.log(defaultState);


const reducer = function(state = ast, action) {
    const result = {};
    Object.keys(state).forEach(key => {
        if (typeof state[key] === "object") {
            result[key] = reducer(state[key], action);
        } else {
            result[key] = state[key];
        }
    });
    return result;
};

const store = createStore(reducer);

module.exports = store;
