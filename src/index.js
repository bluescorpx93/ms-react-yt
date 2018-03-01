// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppNewReduxEx from './AppNewReduxEx';
// import registerServiceWorker from './registerServiceWorker';


// import App from './App';
// import AppNew from './AppNew';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Root/>, document.getElementById('rootnew'));


// registerServiceWorker();
import {createStore, combineReducers} from "redux";

const mathReducer = (state = {
   result: 1,
   lastValues: []
   }, action) => {
   switch (action.type){
      case "ADD":
         state = {
            ...state,
            result: state.result + action.payload,
            lastValues: [...state.lastValues, action.payload]
         }
         break;
      case 'SUBTRACT':
         state = {
            ...state,
            result: state.result - action.payload,
            lastValues: [...state.lastValues, action.payload]
         }
         break;
   }
   return state;
}

const userReducer = (state = {
   name: "Max", 
   age: 25
   }, action) => {
   switch (action.type){
      case "SET_NAME":
         state = {
            ...state,
            name: action.payload
         };
         break;
      case "SET_AGE":
         state = {
            ...state,
            age: action.payload
         }
   }
   return state;
}

const store = createStore(combineReducers({mathReducer, userReducer}));

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

store.dispatch({
   type: "SET_AGE",
   payload: 30
});