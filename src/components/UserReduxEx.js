import React from 'react';
export class UserReduxEx extends React.Component{

   render(){
      return (
         <div className='col-xs-10 col-xs-offset-1'>
            {this.props.username}
         </div>
      );
   }
}