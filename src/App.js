import React, { Component } from 'react';
import Projects from './components/Projects';
import UltraSterile from './components/UltraSterile';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design',
        },
        {
          title: 'Social App',
          category: 'Mobile Development',
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development',
        }        
      ]
    }
  }


  render() {
    return (
      <div className="App">
       Sterile App
        <Projects projects={this.state.projects}/>
        <UltraSterile test='This is Ultra Sterile'/>
      </div>
    );
  }
}

export default App;
