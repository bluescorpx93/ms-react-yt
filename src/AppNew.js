import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Root } from './RootComponent';
import { HomeNew } from './components/homeNew';


class AppNew extends Component {
  render(){
     return (
        <Root>
           <HomeNew />
        </Root>
     );
  }
}
ReactDOM.render(<AppNew/>, document.getElementById("rootnew"));

export default AppNew;
