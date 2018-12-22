import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.css'

class Index extends Component {
  render () {
    const { todos } = this.props;
    console.log(todos);
    const todosJsx = todos.map(todo => {
      return (
        <View className='todos_item' >
          <Text>{todo.text}</Text>
          <View className="del">-</View>
        </View>
      )
    })
    return (
      <View className="index todos">
        <View className="add_wrap">
        </View>
        <View>
          {todosJsx}
        </View>
      </View>
    )
  }
}
// connext 两个参数 state action 
export default connect(({ todos }) => ({
  todos: todos.todos
}), (dispatch) => ({
  add (data) {
    dispatch(add(data))
  },
  del (id) {
    dispatch(del(id))
  }
}))(Index)



