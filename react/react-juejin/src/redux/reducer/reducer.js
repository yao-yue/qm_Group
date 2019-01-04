import Immutable from 'immutable';  //为状态的改变保驾护航
import { REGISTER_USER } from '../action/users'

// 状态的改变互不影响
const initialState = Immutable.fromJS({
    newUser: null,
    error: null,
    saveSuccess: false
})

export const users = (state=initialState, action={}) => {
    switch(action.type) {
        case REGISTER_USER:
            return state.merge({
                'newUser': action.data,
                'saveSuccess': false,
                'error': null
            })
        default: 
            return state
    }
}