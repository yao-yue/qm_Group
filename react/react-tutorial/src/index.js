import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './Table';
 

class App extends Component {
    // jsx 最终还是编译成js的class
    render () {
        //html 输出模板
        return (
            <div className="App container">
            <h1>hello React！</h1>
            <Table></Table>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('root'));