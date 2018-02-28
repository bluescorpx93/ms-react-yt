import React, { Component } from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';


class App extends Component {
  
  onGreet(){
    console.log("Say Hey From Mother Component");
  }

  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header homeLink="Home"/>
          </div>
          <div className='col-xs-10 col-xs-offset-1'>
            <Home name={"Max"} initialAge={27}greet={this.onGreet}/>
              <p> This is a Child Prop</p>
            <Home />
          </div>
        </div>
      </div>

    );
  }
}
render(<App/>, document.getElementById("myapp"));

export default App;
