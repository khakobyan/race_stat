import { api } from '../../services/api';
import { FETCH_RACES } from '../../utils/end_points';
import { 
  SET_RACES,
  SET_RACES_LOADING,
} from '../../utils/action_types';

export const setRacesLoading = loading => {
	return {
		type: SET_RACES_LOADING,
		payload: loading
	}
}

export const fetchRaces = (racer_id, limit, offset) => dispatch => {
  dispatch(setRacesLoading(true));
  api.get(FETCH_RACES(racer_id, limit, offset))
  .then(res => {
    let tmp_array = [];

    res.data.MRData.RaceTable.Races.map(race => {
      tmp_array.push({
        season: race.season,
        raceName: race.raceName,
        position: race.Results[0].position,
        constructor: race.Results[0].Constructor.name,
        driverId: res.data.MRData.RaceTable.driverId
      })
    })

    let tmp_data = {
      total: res.data.MRData.total,
      races: tmp_array
    }; 

    dispatch({
      type: SET_RACES,
      payload: tmp_data
    })
    dispatch(setRacesLoading(false));
  })
  .catch(e => {
    dispatch(setRacesLoading(false));
    console.log('races error==', e)
  })
}
