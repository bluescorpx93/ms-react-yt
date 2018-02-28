import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component{
   constructor(props){
      super();
      this.state = {
         age: props.initialAge
      }
      this.onMakeAgeOlder = this.onMakeAgeOlder.bind(this);
   }
   
   onMakeAgeOlder(){
      this.setState({
         age: this.state.age + 3
      })
   }

   render(){
      console.log(this.pros);
      return (
         <div className='container'>
            <div className='row'>
               <h3> Hey Hey</h3>
               <p>Name: {this.props.name}</p>
               <p>Age:{this.state.age}</p>
               <p>{this.props.children}</p>
               <button onClick={this.onMakeAgeOlder} className='btn btn-primary'>Inc Age</button>
               <button onClick={this.props.greet} className='btn btn-default'>Greet</button>
            </div>
         </div>
      );
   }
}

Home.propTypes = {
   name: PropTypes.string,
   age: PropTypes.number,
   greet: PropTypes.func
}