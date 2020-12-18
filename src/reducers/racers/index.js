import { 
  SET_RACERS,
  SET_RACERS_LOADING
} from '../../utils/action_types';

const INITIAL_STATE = {
  racers: [],
  loading: false
};
  
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RACERS:
      return {
        ...state,
        racers: action.payload
      };
    case SET_RACERS_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
