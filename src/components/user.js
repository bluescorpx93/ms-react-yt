import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export class User extends React.Component{
   constructor(props){
      super(props);
   }
   handleNavigateHome = () =>{
     this.props.history.push('/home');
   }
   render(){
      return (
         <div> 
            <h3> User Component</h3>
            <button onClick={this.handleNavigateHome} className='btn btn-primary'>Go Home</button>
            <p> ID: {this.props.match.params.id}</p>
         </div>
      );
   }
}