import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


//reducers
const feeling = (state=0, action) => { 
    if (action.type === 'ADD_FEELING') {
      
        console.log(action.state);
     return action.payload
    }
    return state;
  }
  const understanding = (state=0, action) => { 
    if (action.type === 'ADD_UNDERSTANDING') {
      
     return action.payload
    }
    return state;
  }
  const supported = (state=0, action) => { 
    if (action.type === 'ADD_SUPPORTED') {
      
     return action.payload
    }
    return state;
  }
  const comments = (state=0, action) => { 
    if (action.type === 'ADD_COMMENT') {
      
     return action.payload
    }
    return state;
  }

  //redux store
  const store = createStore(
    combineReducers({
        feeling,
        understanding,
        supported,
        comments
    
    }),
    applyMiddleware(logger),
  );
  
  export default store;

  // are we exporting the function store ?