
const crateStore = ( state, storeChange ) => {
    // 从订阅发布者模式去理解
    const listeners = [];
    let store = state || {};
    const subscribe = (listen) => {
        listeners.push(listen);   // subscribe 一下
    }
    const dispatch = (action) => {     
        //shoreChange 相当于一个reducer 
        const newStore = storeChange(store, action);
        store = newStore;
        listeners.forEach(item => item());
        // 每次dispatch之后都手动调用很麻烦啊，所以就使用了发布订阅模式，监听数据变化来自动渲染
    }
    const getStore = () => {
        return store;
    }
    return {store, dispatch,subscribe, getStore}
}
export default crateStore;