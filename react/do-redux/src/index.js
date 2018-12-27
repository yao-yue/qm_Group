import { state } from './redux/state.js';
import { storeChange } from './redux/storeChange.js';
import { createStore } from './redux/createStore.js';

const { store, dispatch } = createStore(state, storeChange);  //总开关 提供一个状态树+ 状态写

function renderHead(state) {
    const head = document.getElementById('head');
    head.innerText = state.text;
    head.style.color = state.color;
}

function renderBody(state) {
    const body = document.getElementById('body');
    body.innerText = state.text;
    body.style.color = state.color;
}

function renderApp(store) {
    renderHead(store.head);
    renderBody(store.body);
}

renderApp(store);   //store 拥有整个状态及dispatch方法
dispatch({
    type: 'BODY_TEXT',
    text: '我是调用dispatch修改的body'
})
renderApp(store);