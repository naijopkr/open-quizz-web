import { INDEX_QUIZZ_OWNED } from '../types';

export default function(state = null, action) {
  switch(action.type) {
    case INDEX_QUIZZ_OWNED:
      return action.payload || false;
    default:
      return state;
  }
}