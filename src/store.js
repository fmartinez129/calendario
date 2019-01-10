import { createStore} from 'redux';

const reducer = (state, action) => {

  if(action.type === "GET_DATE" ){
    return {
      ...state,
      day: action.day
    }
  }
  return state;
}

export default createStore(reducer, { day:""});
