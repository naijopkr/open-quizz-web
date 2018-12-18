import axios from 'axios';
import M from 'materialize-css'
import * as actionType from '../types'

export const indexQuizzTaken = () => async dispatch => {
  const res = await axios.get('/api/takenQuizz');
  dispatch({ type: actionType.INDEX_QUIZZ_TAKEN, payload: res.data });
}

export const indexQuizzOwned = () => async dispatch => {
  const res = await axios.get('/api/quizz');
  dispatch({ type: actionType.INDEX_QUIZZ_OWNED, payload: res.data });
}

export const saveQuizz = (userAnswers, quizz) => async dispatch => {
  const res = await axios.post('/api/takenQuizz', { quizz, userAnswers });
  dispatch({ type: actionType.FETCH_TAKEN_QUIZZ, payload: res.data });
  if (res.status === 200) {
    console.log('success')
  }
}

export const fetchQuizz = (id) => async dispatch => {
  const res = await axios.get(`/api/quizz/${id}`)
  dispatch({ type: actionType.FETCH_QUIZZ, payload: res.data })
}

export const fetchAnswer = ({ quizzId, questionId }) => async dispatch => {
  const res = await axios.get(`/api/quizzAnswer/${quizzId}/${questionId}`)
  console.log(res)
  dispatch({ type: actionType.FETCH_ANSWER, payload: res.data })
}

export const createQuizz = (values) => async dispatch => {
  
  if (!values.questions || values.questions.length === 0) {
    M.toast({html: 'É necessário ao menos uma questão', classes: 'red'});
    return false;
  } else {
    for (var i = 0; i < values.questions.length; i++) {
      if (!values.questions[i].choices 
            || values.questions[i].choices.length < 2) {
        M.toast({html: 'É necessário ao menos duas alternativas por questão.', classes: 'red'});
        return false;
      }
    }
  }
  const res = await axios.post('/api/quizz', values);
  dispatch({ type: actionType.FETCH_QUIZZ, payload: res.data });
  return true;
}