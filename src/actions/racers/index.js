import { api } from '../../services/api';
import { FETCH_RACERS } from '../../utils/end_points';
import { 
  SET_RACERS,
  SET_RACERS_LOADING,
} from '../../utils/action_types';

export const setRacersLoading = loading => {
	return {
		type: SET_RACERS_LOADING,
		payload: loading
	}
}

export const fetchRacers = (limit, offset) => dispatch => {
  dispatch(setRacersLoading(true));
  api.get(FETCH_RACERS(limit, offset))
  .then(res => {
    dispatch(setRacersLoading(false));
    dispatch({
      type: SET_RACERS,
      payload: res.data.MRData
    })
  })
  .catch(e => {
    dispatch(setRacersLoading(false));
    console.log('racers error==', e)
  })
}
