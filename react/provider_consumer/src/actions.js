//模块话  代码不应该重复
import axios from 'axios';


export const filmACtion = (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/movies#!method=get')
        .then(res => {
            dispatch({
                type: 'GET_FILM_DATA',
                payload: res.data.data.films
            })
        })
}