// 只负责state的计算
export const storeChange = (state, action) => {
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