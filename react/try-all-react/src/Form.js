import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super();
        // 子组件 隶属于table 有自己独立的数据 自我维护数据
        this.initialState = {
            name: '',
            job: ''
        };
        this.state = this.initialState;
    }
    render() {
        const { name, job } = this.state;
        console.log(this.state);
        return (
            <form className="form-group">
                <div className="form-field">
                    <label >Name</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange} />
                </div>
                <div className="form-field">
                    <label >Job</label>
                    <input type="text" className="form-control" name="job" value={job} onChange={this.handleChange} />
                </div>
                <div className="form-field">
                    <input className="btn btn-primary" type="button" value="Submit" onClick={() => {this.submitForm()} }/>
                </div>
            </form>
        );
    }
    handleChange = event => {
        console.log(event);
        const { name, value } = event.target;
        console.log(name,value);
        //高级的写法 
        this.setState({
            [name]: value
        });
    };
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
}
export default Form;