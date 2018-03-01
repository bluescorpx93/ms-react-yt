// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppNewReduxEx from './AppNewReduxEx';
// import registerServiceWorker from './registerServiceWorker';


// import App from './App';
// import AppNew from './AppNew';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Root/>, document.getElementById('rootnew'));


// registerServiceWorker();
import {createStore} from "redux";
const reducer = (state, action) => {
   switch (action.type){
      case "ADD":
         state = state + action.payload;
         break;
      case 'SUBTRACT':
      state = state - action.payload;
         break;
   }
   return state;
}
const store = createStore(reducer,1);

store.subscribe(()=>{
   console.log("Store Updated "+ store.getState());
})

store.dispatch({
   type: "ADD",
   payload: 10
});

store.dispatch({
   type: "ADD",
   payload: 22
});

store.dispatch({
   type: "SUBTRACT",
   payload: 45
});