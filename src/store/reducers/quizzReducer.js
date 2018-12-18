import { FETCH_QUIZZ } from '../types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_QUIZZ:
      return action.payload || false;
    default:
      return state;
  }
}