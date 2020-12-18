import { 
  SET_RACERS,
  SET_RACERS_LOADING
} from '../../utils/action_types';

const INITIAL_STATE = {
  racers: [],
  total: '',
  loading: false
};
  
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_RACERS:
      return {
        ...state,
        racers: action.payload.DriverTable.Drivers,
        total: action.payload.total,
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
