import React, { Component } from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';


class App extends Component {
  

  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header />
          </div>
          <div className='col-xs-10 col-xs-offset-1'>
            <Home name={"Max"} age={27} />
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
