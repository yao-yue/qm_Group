// 总开关   提供一个状态树 + 状态写
export const createStore = (state, storeChange) => {
     const store = state || {};
     const dispatch = (action) => storeChange(store, action);
     return { store, dispatch}
}