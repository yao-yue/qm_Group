import React, { Component } from 'react'; 
import moment from 'moment';   //格式化时间
import 'moment/locale/zh-cn';

moment.locale('zh-CN');


// Note ? 展示单条笔记， 状态
class Note extends Component {
    constructor (props) {
        super(props)
    }
    state = {
        entity: this.props.entity,
        body: this.props.entity.body,
        updated: this.props.entity.meta.updated || this.props.entity.meta.created,
        open: false,
    }
    render() {
        const ts = moment(this.state.moment).fromNow()
        return (
            <div className="item">
            {this.state.body} {ts}
            </div>
        );
    }
}
export default Note;