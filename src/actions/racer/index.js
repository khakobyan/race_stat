import { api } from '../../services/api';
import { FETCH_RACER } from '../../utils/end_points';
import { 
  SET_RACER,
  SET_RACER_LOADING,
} from '../../utils/action_types';

export const setRacerLoading = loading => {
	return {
		type: SET_RACER_LOADING,
		payload: loading
	}
}

export const fetchRacer = (racer_id) => dispatch => {
  dispatch(setRacerLoading(true));
  api.get(FETCH_RACER(racer_id))
  .then(res => {
    dispatch(setRacerLoading(false));
    dispatch({
      type: SET_RACER,
      payload: res.data.MRData.DriverTable.Drivers[0]
    })
  })
  .catch(e => {
    dispatch(setRacerLoading(false));
    console.log('racer error==', e)
  })
}
