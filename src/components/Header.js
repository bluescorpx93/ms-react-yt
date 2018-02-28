import React from 'react';
export const Header = (props) => {

   return (
      <nav className='navbar navbar-default'>
         <div className='container'>
            <ul className='navbar-header'>
               <li> <a href='/'>{props.homeLink}</a></li>
            </ul>
         </div>
      </nav>
   );
}
