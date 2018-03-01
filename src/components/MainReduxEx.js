import React from 'react';
export class MainReduxEx extends React.Component{
   
   onChangeUserName = () =>{
      this.props.changeUsername('Mike');
   }
   render(){
      return (
         <div className='col-xs-10 col-xs-offset-1'>
            <button onClick={this.onChangeUserName}> Change Name</button>
         </div>
      );
   }
}