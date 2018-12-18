import { FETCH_TAKEN_QUIZZ } from '../types';

export default function(state = { }, action) {
  switch(action.type) {
    case FETCH_TAKEN_QUIZZ:
      return action.payload || false;
    default:
      return state;
  }
}