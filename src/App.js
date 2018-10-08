import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoaded: false,
       items: [],
     }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(json => {
            this.setState({
              isLoaded:true,
              items: json,
            })
        })
  }

  render() {

    if(this.state.isLoaded){
        return (
          <div className="App">
            <ul>
              {
                this.state.items.map(el => (
                  <li>
                      Name: {el.name}
                      <br />
                      Email: {el.email}
                      <br />
                      Phone-number: {el.phone}
                  </li>)
                  )
              }
            </ul>

          </div>
        )
      } else {
        return (
          <div className="App">
            Loading....
          </div>
        )
      }

  }
}

export default App;
