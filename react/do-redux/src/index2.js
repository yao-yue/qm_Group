// 多（层次）组件共享状态 
// 共享状态树
import {appState } from './redux/state';
// const appState = {
//     head: {
//         text: '我是头部',
//         color: 'red',
//     },
//     body: {
//         text: '我是body',
//         color: 'green',
//     },

// }
// 写入状态 要有一个规则   何时写 如何写 dispatch 只是代号
//保持状态的正确性 
function dispatch(state, action) {
    switch(action.type) {
        case 'HEAD_COLOR':   //要写的时候要通过case的匹配  并且要通过action
            state.head.color = action.color
            break;
        case 'BODY_TEXT':
            state.body.text = action.text
            break;
        default  :
            break;
    }
}

// 组件如果只使用自己的状态，不需要redux 
// head 会用body 在body 会用head
// 状态不再只属于某个组件
function renderHead(state) {
    const head = document.getElementById('head');
    head.innerText = state.head.text;
    head.style.color = state.head.color;
    //有什么隐患 getState读    修改状态的值要按规矩办 action 对状态写 所有组件都遵守的约定
                                // action 由dispatch触发
    // state.body.text = '我是经过head修改后的body';  不能去这样修改
    // dispatch(state, action); action.type      action.text
    dispatch(state, {
        type: 'BODY_TEXT',
        text: '我是head 经过调用dispatch修改后的body'
    })
}
function renderBody(state) {
    const body = document.getElementById('body');
    body.innerText = state.body.text;
    body.style.color = state.body.color;
   
}

function renderApp (state) {
    renderHead(state);
    renderBody(state);
}

//Ui render  整体的渲染 
renderApp(appState);