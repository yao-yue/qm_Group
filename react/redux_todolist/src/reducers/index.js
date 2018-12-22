import { combineReducers } from 'redux';
import {ADD, DELETE} from '../constants/todos';

const INITIAL_STATE = {
    todos: [
        {
            id: 0,
            text: 'This is init_state'
        }
    ]
}
function todos (state = INITIAL_STATE, action) {
    let todoNum = state.todos.length;
    switch(action.type) {
        case ADD: 
            return {
                ...state, //将上一个状态展开
                todos: state.todos.concat({   //json的concat() 
                    id: todoNum,
                    text: action.data
                })
            };
        case DELETE: 
            let newsTodos = state.todos.filter(item => {
                return item.id !== action.id
            }) 
            return {
                ...state,
                todos: newsTodos.todos.concat({
                    id: todoNum,
                    text: action.data
                })
            }
        default:
            return state;
    }
}
// export default combineReducers({
//     todos
// });
export default todos;