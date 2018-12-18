import { INDEX_QUIZZ_TAKEN } from '../types';

export default function(state = null, action) {
  switch(action.type) {
    case INDEX_QUIZZ_TAKEN:
      return action.payload || false;
    default:
      return state;
  }
}