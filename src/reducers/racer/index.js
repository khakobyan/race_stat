import { 
    SET_RACER,
    SET_RACER_LOADING
  } from '../../utils/action_types';
  
  const INITIAL_STATE = {
    racer: {},
    loading: true
  };
    
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_RACER:
        return {
          ...state,
          racer: action.payload,
        };
      case SET_RACER_LOADING:
        return {
          ...state,
          loading: action.payload
        };
      default:
        return state;
    }
  };
  