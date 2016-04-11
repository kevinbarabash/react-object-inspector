import {createStore} from 'redux';
import gehry from '../node_modules/gehry/dist/gehry';

import ast from './ast.json';

const defaultState = gehry.deconstruct(ast);
console.log(defaultState);


const reducer = function(state = defaultState, action) {
    return state;
};

const store = createStore(reducer);

module.exports = store;
