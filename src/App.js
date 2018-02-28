import React, { Component } from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';


class App extends Component {
  constructor(){
    super();
    this.state = {
      homeLinkAC: "Home",
      homeMounted: true
    }
    this.onChangeLinkName = this.onChangeLinkName.bind(this);
    console.log("Constructor");

  }

  onChangeHomeMounted(){
    this.setState({
       homeMounted: !this.state.homeMounted
    })
  }

  componentWillMount(){
    console.log("comp will mount");
  }
  componentDidMount(){
      console.log('comp did mount');
  }
  componentWillReceiveProps(nextProps){
      console.log('comp will rec props ', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState){
      console.log('should comp update ', nextProps, nextState)
      return true;
  }
  componentWillUpdate(nextProps, nextState){
      console.log('comp will update ', nextProps, nextState)
  }
  componentDidUpdate(prevProps, prevState){
      console.log('comp did update ', prevProps, prevState)
  }
  componentWillUnmount(){
      console.log('comp will unmount');
  }
  onGreet(){
    console.log("Say Hey From Mother Component");
  }

  onChangeLinkName(newName){
    this.setState({
      homeLinkAC: newName
    })
  }

  render() {
    let homeComp = "";
    if (this.state.homeMounted){
      homeComp = (
      <Home 
        name={"Max"} 
        initialAge={27}
        greet={this.onGreet}
        changeLink={this.onChangeLinkName}
        initialLinkName={this.state.homeLinkAC}
      />
    );
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header homeLink={this.state.homeLinkAC}/>
          </div>
          <div className='col-xs-10 col-xs-offset-1'>
          {homeComp}
            <button onClick={this.onChangeHomeMounted.bind(this)}className='btn btn-primary'>(Un)Mount Home</button>
              {/* <p> This is a Child Prop</p> */}
            {/* <Home /> */}
          </div>
        </div>
      </div>

    );
  }
}
render(<App/>, document.getElementById("myapp"));

export default App;
