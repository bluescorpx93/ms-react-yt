import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
   constructor(props){
      super(props)
    }
   render(){
      console.log(this.pros);
      return (
         <div className='container'>
            <div className='row'>
               <h3> Hey Hey</h3>
               <p>Name: {this.props.name}</p>
               <p>Age:{this.props.age}</p>
               <p>{this.props.children}</p>
               {/* <p>User: {this.props.user.name}</p>
               <div> 
                  <p> Hobbies </p>
                  <ul>
                     {this.props.user.hobbies.map((hobby, i) => {
                        <li key="{i}"> { hobby} </li>
                     }
                     )}
                  </ul>
               </div> */}
            </div>
         </div>
      );
   }
}

// Home.propTypes = {
//    name: React.PropTypes.string,
//    age: React.PropTypes.number,
// user: React.PropTypes.object,,
// children: React.PropTypes.element.isRequired
// }