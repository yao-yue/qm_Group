// 提供状态 提供（可以被action计算）的状态
// 视图与状态是一一对应的，
// 所有的状态保存在一个对象中， state
// 一蹴而就、reducer函数 单纯的就负责提供状态
// state=0 初试值 变化action
// 生命周期请求了数据、用户操作，action
// UI状态的千变万化 对应state的状态值
// 用完就扔 
export default (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default:   
            return state;
    }
    return state;
}