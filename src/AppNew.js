import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Root } from './RootComponent';
import { User } from './components/user';
import { HomeNew } from './components/homeNew';
import {Route, BrowserRouter, Link } from 'react-router-dom';

class AppNew extends Component {
  render(){
     return (
        <BrowserRouter>
        <div>
           <Root/>
           <Route path={"/user"} component={User}/>
           <Route exact path={"/"} component={HomeNew}/>
         </div>
        </BrowserRouter>
      //   <Root>
      //      <HomeNew />
      //   </Root>
     );
  }
}
ReactDOM.render(<AppNew/>, document.getElementById("rootnew"));

export default AppNew;
