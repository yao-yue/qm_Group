var store = createStore(combineReducers({
    uesr: userReducer,
    items: itemsReducer
}));
store.dispatch({
    type: 'ADD_ITEM',
    item: 'someone'
})