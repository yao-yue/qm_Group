//模块话  代码不应该重复
import axios from 'axios';


export const filmACtion = (dispatch) => {
    // 支持action函数返回不再只是{plain object}
    // 还可以是函数
    return function(dispatch) {
        axios.get('https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/movies#!method=get')
        .then(res => {
            dispatch({
                type: 'GET_FILM_DATA',
                payload: res.data.data.films
            })
        })
    }
    
}