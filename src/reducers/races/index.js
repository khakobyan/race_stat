import { 
    SET_RACES,
    SET_RACES_LOADING
} from '../../utils/action_types';
  
const INITIAL_STATE = {
  races: [],
  total: '',
  loading: false
};
    
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RACES:
      return {
        ...state,
        races: action.payload.races,
        total: action.payload.total,
      };
    case SET_RACES_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
  