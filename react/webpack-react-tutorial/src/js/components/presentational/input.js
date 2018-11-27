// react 组件有多种写法 容器Component+表示型 箭头函数
import React from "react";
// props + render html 表现型组件
const Input = ({ label, text, type, id, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input type={type} className="form-control" 
        id={id} value={value} onChange={handleChange} required /> 
    </div>
)
export default Input;