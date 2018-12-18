import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import quizzReducer from './quizzReducer';
import quizzTakenReducer from './quizzTakenReducer';
import quizzOwnedIndexReducer from './quizzOwnedIndexReducer';
import quizzTakenIndexReducer from './quizzTakenIndexReducer';
import answerReducer from './answerReducer'

export default combineReducers({
  auth: authReducer,
  quizz: quizzReducer,
  answer: answerReducer,
  quizzTaken: quizzTakenReducer,
  quizzOwnedIndex: quizzOwnedIndexReducer,
  quizzTakenIndex: quizzTakenIndexReducer,
  form: reduxForm
});