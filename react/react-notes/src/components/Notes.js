import React, { Component } from 'react'; //ui框架 ui信息展示框架
import Note from './Note';
// 支持离线的web app
import { db, loadCollection } from '../database';


class Notes extends Component {
    constructor(props) {
        super(props);
        this.getInitialData();
    }
    state = {
        entities: []
    }
    getInitialData() {
        loadCollection('notes').then(collection => {
            // collection.insert([
            //     { body: 'hello' },
            //     { body: '亡灵勇士' }
            // ]);
            // db.saveDatabase();
            const entities = collection.chain().find().simplesort('$loki', 'isdesc').data()
            this.setState({
                entities
            })
        })
    }
    render() {
        // 准备jsx的逻辑
        const entities = this.state.entities;
        const noteItems = entities.map(entity => 
        <Note key={ entity.$loki } 
            entity =  { entity }
        />)
        return (
            <div className="ui container notes">
                <h4 className="ui horizontal divider header">
                    <i className="paw icon"></i>
                    Notes App _ React.js
                </h4>
                <button className="ui right floated basic violet button" onClick={this.createEntity}>添加笔记</button>
                <div className="ui divided items">{noteItems}</div>
            </div>
        )
    }
    createEntity = () => {
        // this丢失问题 箭头函数
        console.log(this);
    }
}
export default Notes;