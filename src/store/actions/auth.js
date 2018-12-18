import axios from 'axios'
import M from 'materialize-css'
import * as actionType from '../types'

export const submitRegister = (values) => async dispatch => {
  const res = await axios.post('/api/users', values);
  
  if (res.data.status) {
    M.toast({ html: res.data.message, classes: 'red' });
    return;
  }
  dispatch({ type: actionType.FETCH_USER, payload: res.data });
}

export const submitLogin = (values, history, lastPath) => async dispatch => {
  const res = await axios.post('/api/login', values);

  if (res.data.status) {
    M.toast({ html: res.data.message, classes: 'red' });
    return;
  }
  dispatch({ type: actionType.FETCH_USER, payload: res.data });
  history.push(lastPath);
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: actionType.FETCH_USER, payload: res.data });
}