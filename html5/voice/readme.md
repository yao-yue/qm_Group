1.js 是事件驱动语言,
2.事件基于回调函数
    event 事件对象
    this 指向事件发生的元素

    input name 与 label挂钩

    探究querySelector
    querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。 
    1.querySelector：return the first matching Element node within the node’s subtrees. If there is no such node, the method must return null .（返回指定元素节点的子树中匹配选择器的集合中的第一个元素，如果没有匹配返回null）
    2.querySelectorAll：return a NodeList containing all of the matching Element nodes within the node’s subtrees, in document order. If there are no such nodes, the method must return an empty NodeList. （按文档顺序返回指定元素节点的子树中匹配选择器的元素集合，如果没有匹配返回空集合）
    3.从定义可以看到Document和Element都实现了NodeSelector接口。即这三种类型的元素都拥有者两个方法。querySelector和querySelectorAll的参数是CSS选择器字符串。区别在于querySelector返回的是一个第一个匹配元素，querySelectorAll返回的一个所有匹配元素集合(NodeList)。

    关于speechSynthesis
    HTML5中和Web Speech相关的API实际上有两类，一类是“语音识别(Speech Recognition)”，另外一个就是“语音合成(Speech Synthesis)”指的分别是“语音转文字”，和“文字变语音”。


    