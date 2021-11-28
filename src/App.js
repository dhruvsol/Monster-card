import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Search } from "./components/search/search.component";

// use classes in place of functions to use state
class App extends Component {
  //creating a state for the use
  constructor() {
    super();
    //state with a empty list
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  // part of a component in eact use for featching data from an api
  componentDidMount() {
    //fetch will return  a promise that will get converted
    //to json format to better understand
    fetch("https://jsonplaceholder.typicode.com/users#")
      .then((response) => response.json())
      // then we can use setstate to add the items in the state we build
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const {monsters,searchField}= this.state;
    const filerted = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
       
        <Search 
        handleChange={e => this.setState({searchField:e.target.value})}
        placeholder='search monsters'
        />
        {/* added a card list component and pass the list as the props in here */}
        <CardList monsters={filerted} />
      </div>
    );
  }
}

export default App;
