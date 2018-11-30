import React, { Component } from 'react'
import Table from './Table'
import Form from './Form';

export default class App extends Component {
  state = {
    characters : [{
      'name': '暗裔剑魔',
      'job': 'FE'
    },
    {
      'name': '洛克萨斯之手',
      'job': '洛克啥事'
    },
    {
      'name': '盖伦',
      'job': '大保健'
    }
  ]
  }
  //生命周期
  componentDidMount() {
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })
      });
  }
  
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
  //容器组件负责 操作函数
  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      // filter 通过符合条件的
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  }
  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }
}
