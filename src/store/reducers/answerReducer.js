import { FETCH_ANSWER } from '../types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_ANSWER:
      return action.payload || false;
    default:
      return state;
  }
}