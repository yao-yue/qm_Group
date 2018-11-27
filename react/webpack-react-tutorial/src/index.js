//入口找到我们的文件
//build打包的过程


//react先打包
//打包input
//打包container
//打包index.js


import React from "react";
import ReactDOM from "react-dom";
import FormContainer from './js/components/container/FormContainer';

const wrapper = document.getElementById("create-article-form");
ReactDOM.render(<FormContainer/>, wrapper);