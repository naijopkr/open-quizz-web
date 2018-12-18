import axios from 'axios';
import * as actionType from '../types'

export const saveProfile = (values) => async dispatch => {
  const res = await axios.put('/api/users', values);
  if (res.err) {
    window.console.log(res.err);
    return;
  }
  dispatch({ type: actionType.FETCH_USER, payload: res.data });
}

