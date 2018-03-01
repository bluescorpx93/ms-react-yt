import React from 'react';
import ReactDOM from 'react-dom';

import {UserReduxEx} from './components/UserReduxEx';
import {MainReduxEx} from './components/MainReduxEx';


class AppNewReduxEx extends React.Component{
   constructor(){
      super();
      this.state = {
         username: 'Max'
      }
      this.changeUsername = this.changeUsername.bind(this);
   }

   changeUsername(newName){
      this.setState({
         username: newName
      })
   }

   render(){
      return (
         <div className='container'>
            <MainReduxEx changeUsername={this.changeUsername} />
            <UserReduxEx username={this.state.username} />
         </div>
      );

   }
}


ReactDOM.render(<AppNewReduxEx/>, document.getElementById('rootnew'));
export default AppNewReduxEx;
