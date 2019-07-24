
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      serchField: ''
    }
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(Response => Response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ serchField: e.target.value })
  }

  render() {
    const { monsters, serchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(serchField.toLowerCase()))
    return (
      <div className='App'>

        <SearchBox
          placeholder='serch here'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}





export default App;

