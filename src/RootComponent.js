import React from 'react';
import {HeaderNew} from './components/headerNew';

export class Root extends React.Component{
   render(){
      return (
         <div className='container'>
            <div className='row'>
               <div className='col-xs-10 col-xs-offset-1'>
                  <HeaderNew />
               </div>
               <hr/>
               <div className='col-xs-10 col-xs-offset-1'>
                  {this.props.children}
               </div>
            </div>
         </div>
      )
   }
}

