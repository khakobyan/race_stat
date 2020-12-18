import { combineReducers } from 'redux';
import racers from './racers';
import racer from './racer';
import races from './races';

export default combineReducers({
  racers,
  racer,
  races,
})
