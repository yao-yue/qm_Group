- redux让所有的状态共享  读、  写要遵守规则  这也是redux基本规格，只有action可以修改state
    （执行相应reducer)，组件只能dispatch一个action
- reducer 不可以直接调用的 只有通过action才可以。
组件 不能直接见面 通过dispatch -->  reducer  负责提供状态  
要保护好数据 设置了reducer (提供并且精确计算状态的函数，不可以被组件接触，组件只有dispatch一个action才能执行)