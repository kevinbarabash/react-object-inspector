import {createStore} from 'redux';
import gehry from '../node_modules/gehry/dist/gehry';

import ast from './ast.json';

const defaultState = gehry.deconstruct(ast);

const reducer = function(state = defaultState, action) {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.prop]: action.value
                }
            };
            break;
        default:
            return state;
    }
};

const store = createStore(reducer);

module.exports = store;
