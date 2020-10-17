import React, { Component } from 'react';
import PetFinder from './api/PetFinder';

class App extends Component {
  async componentDidMount() {
    const x = await PetFinder().petsList();
    console.log(x);
  }

  render() {
    return (
      <div className="App">
        <header>
          Adopt Me! :D
        </header>

      </div>
    );
  }
}

export default App;
