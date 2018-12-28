// 这就相当于一个reducer
// 匹配action.type,返回相应新的store
export const storeChange = (store, action) => {
    switch ( action.type) {
        case 'HEAD':
            return {
                ...store,
                head: action.payload    //用这个去覆盖原来的store
            }
        case 'BODY':
            return {
                ...store,
                body: action.payload
            }
        default: 
            return {...store}
    }
}