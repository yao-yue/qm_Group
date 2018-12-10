import React, { Component } from 'react';
import Result from './Result';
import Search from './Search'


export default class Beer extends Component {
    // ----------> useless constructor
    // constructor(props) {
    //     super(props);
    // }
    //生命周期
    // mount 安装
    //当组件的基本结构挂载上去之后，再加载数据
    componentDidMount () {
        this.loadBeers();
    }
    componentDidUpdate = (prevProps, prevState) => {
      const currentSearchTerm = this.props.match.params.searchTerm;
      console.log(currentSearchTerm);
      const oldSearchTerm = prevProps.match.params.searchTerm;
        if(currentSearchTerm !== oldSearchTerm) {
            this.loadBeers(currentSearchTerm);
        }
    }
    
    state = {
        beers: [],
        loading: true
    }
    // 方法用箭头函数 防止this的丢失
    loadBeers = (searchTerm = "hops") => {
        this.setState({
            loading: true
        })
        const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
        if(localStorageBeers) {
            const loaclBeers = JSON.parse(localStorageBeers);
            this.setState({
                beers:loaclBeers,
                loading: false
            });
            return;
        }
        fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
            .then(data => data.json())
            .then(data => {
                const beers = data.data || [];
                console.log(data);
                this.setState({
                    beers: beers,
                    loading: false
                })
                localStorage.setItem(
                    `search-${searchTerm}`,
                    JSON.stringify(this.state.beers)
                );
            })
            .catch(err => {console.error(err)})
    }
    
    render () {
        return (
            <div className="wrapper">
                <Search />
                <Result beers={this.state.beers} loading={this.state.loading}></Result>
            </div>
        )
    }
}